import {
    getSearchConfig,
    getSearchDetail,
    getSearchExample,
    postSearch
} from '@/api/search'
import { ModelEnums, StatusEnums, TypeEnums } from './searchEnums'
import { Sse } from '@/utils/http/sse'
import { useUserStore } from '@/stores/user'
const options = ref({
    model: ModelEnums.BASE,
    type: TypeEnums.ALL,
    ask: '',
    probe: 0
})

watch(
    () => options.value.model,
    (value) => {
        if (value !== ModelEnums.STUDY) {
            options.value.type = TypeEnums.ALL
        }
    },
    { flush: 'post', immediate: true }
)
// watch(
//     () => options.value.type,
//     (value) => {
//         if (value !== TypeEnums.ALL) {
//             options.value.model = ModelEnums.STUDY
//         }
//     },
//     { flush: 'post', immediate: true }
// )
let sse: Sse
export const useSearch = () => {
    const result = useState(() => ({
        id: -1,
        query: '',
        data: [] as any[],
        status: -1,
        search: [] as any[],
        outline: {} as any,
        outline_json: {} as any,
        suggestion: {} as any
    }))
    const isSearching = useState(() => false)
    const showSearchResult = useState(() => false)
    const useStore = useUserStore()
    const router = useRouter()
    const config = useState(() => ({
        status: 0,
        price: 0,
        isVipFree: false
    }))

    const getConfig = async () => {
        config.value = await getSearchConfig()
    }

    const initResult = () => {
        result.value.id = -1
        result.value.query = options.value.ask
        result.value.data = []
        result.value.status = StatusEnums.ANALYSIS
        result.value.search = []
        result.value.outline = {}
        result.value.outline_json = {}
        result.value.suggestion = {}
    }

    const pushData = (type: string, target: string, data: any) => {
        const current = result.value.data.find(
            (item) => item.type == 'markdown' && item.target == 'update'
        )
        if (current) {
            if (isString(current.content)) {
                current.content += data
            }
            if (isArray(current.content)) {
                current.content.push(data)
            }
            current.target = target
        } else {
            result.value.data.push({
                type: type,
                target: target,
                content: data
            })
        }
    }

    const getSearchResult = (data: any[]) => {
        const searchResult = data.findLast(
            (item) => item.type === 'search_result'
        )

        return (
            searchResult?.content?.map((item: any, index: number) => ({
                ...item,
                index: index + 1
            })) || []
        )
    }
    const launchSearch = async (text = '') => {
        if (text) {
            options.value.ask = text
        }
        if (!useStore.isLogin) return useStore.toggleShowLogin()
        if (!options.value.ask) return feedback.msgError('请输入你想搜索的问题')
        if (isSearching.value) return feedback.msgWarning('正在搜索中...')
        isSearching.value = true
        initResult()
        showSearchResult.value = true
        sse = postSearch({ ...options.value, stream: true })

        sse.onmessage = ({ data: dataJson }: any) => {
            const { card_type, target, data } = dataJson
            switch (card_type) {
                case 'error':
                    feedback.msgError(data)
                    isSearching.value = false
                    showSearchResult.value = false
                    break
                case 'action': {
                    result.value.status = StatusEnums.SEARCH
                    break
                }
                case 'markdown': {
                    result.value.status = StatusEnums.SUMMARY
                }
                // eslint-disable-next-line no-fallthrough
                case 'expand_query':
                case 'search_result': {
                    pushData(card_type, target, data)
                    break
                }
                case 'suggestion': {
                    result.value.suggestion = {
                        type: card_type,
                        content: data
                    }
                    break
                }
                case 'outline_json': {
                    result.value.outline_json = data
                    break
                }
                case 'outline': {
                    result.value.outline = data
                    break
                }
                case 'done': {
                    result.value.status = StatusEnums.SUCCESS + 1
                    result.value.search = getSearchResult(result.value.data)
                    useStore.getUser()
                    getConfig()
                    break
                }
                case 'finish': {
                    result.value.id = data.id
                    router.push({
                        query: {
                            id: data.id
                        }
                    })
                    break
                }
            }
        }
        sse.onerror = () => {
            isSearching.value = false
            showSearchResult.value = false
        }
        sse.onclose = () => {
            isSearching.value = false
        }
    }

    const abortSearch = () => {
        sse?.abort()
    }

    const getSearchInfo = async (id: string | number) => {
        try {
            initResult()
            result.value.status = StatusEnums.ANALYSIS
            showSearchResult.value = true
            const {
                ask,
                model,
                type,
                results: data
            } = await getSearchDetail({ id })
            if (!data) {
                feedback.msgError('数据不存在')
                router.back()
                return
            }
            options.value.ask = ask
            options.value.model = model
            options.value.type = type
            result.value.query = ask
            result.value.status = StatusEnums.SUCCESS + 1
            if (Array.isArray(data)) {
                result.value.data = data.filter((item: any) =>
                    ['markdown', 'expand_query', 'search_result'].includes(
                        item.type
                    )
                )
                result.value.search = getSearchResult(data)
                result.value.suggestion =
                    data.find((item: any) => item.type == 'suggestion') || []
                result.value.outline_json =
                    data.find((item: any) => item.type == 'outline_json')
                        ?.content || {}
                result.value.outline =
                    data.find((item: any) => item.type == 'outline')?.content ||
                    {}
            } else {
                // 为了适配旧数据
                result.value.data = [
                    {
                        content: data.markdown,
                        type: 'markdown'
                    },
                    {
                        type: 'search_result',
                        content: data.search_result
                    }
                ]
                result.value.search = getSearchResult(result.value.data)

                result.value.suggestion = {
                    type: 'suggestion',
                    content: data.suggestion
                }
                result.value.outline = data.outline || {}
                result.value.outline_json = data.outline_json || {}
            }
        } catch (e) {
            console.error(e)
            showSearchResult.value = false
        }

        // console.log(data)
    }
    return {
        config,
        getConfig,
        showSearchResult,
        options,
        result,
        launchSearch,
        abortSearch,
        initResult,
        getSearchInfo
    }
}

export const useSearchEx = () => {
    const searchEx = ref([])
    const getSearchEx = async () => {
        searchEx.value = await getSearchExample()
    }

    return {
        searchEx,
        getSearchEx
    }
}
