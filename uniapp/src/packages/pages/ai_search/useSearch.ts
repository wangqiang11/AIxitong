import { getSearchConfig, getSearchExample, postSearch, getSearchDetail } from '@/api/search'
import { useUserStore } from '@/stores/user'
import { defineStore } from 'pinia'
import router from '@/router'
import { isMiniProgram } from '@/utils/env'
// #ifdef H5
import wechat from '@/utils/wechat'
import { isArray, isString } from 'lodash-es'
//#endif
export enum ModelEnums {
    BASE = 'search',
    ENHANCE = 'copilot',
    STUDY = 'research'
}

export enum TypeEnums {
    ALL = 'all',
    DOC = 'doc',
    SCHOLAR = 'scholar'
}

export enum StatusEnums {
    ANALYSIS,
    SEARCH,
    SUMMARY,
    SUCCESS
}
interface SearchOptions {
    model: ModelEnums
    type: TypeEnums
    ask: string
    probe: number
}

interface SearchResult {
    query: string
    markdown: any[]
    suggestion: Record<string, any>
    status: number
    search: any[]
    outline: Record<string, any>
    outlineJson: Record<string, any>
}
interface SearchSate {
    options: SearchOptions
    showResult: boolean
    isSearching: boolean
    searchEx: any[]
    sse: any
    result: SearchResult
    config: Record<string, any>
}

export const useSearch = defineStore('search', {
    state(): SearchSate {
        return {
            options: {
                model: ModelEnums.BASE,
                type: TypeEnums.ALL,
                ask: '',
                probe: 0
            },
            searchEx: [],
            isSearching: false,
            showResult: false,
            sse: null,
            result: {
                query: '',
                markdown: [],
                suggestion: {},
                status: -1,
                search: [],
                outline: {},
                outlineJson: {}
            },
            config: {}
        }
    },
    getters: {},
    actions: {
        navigateTo(url: string) {
            if (isMiniProgram) {
                wechat.miniProgram.navigateTo({
                    url
                })
            } else {
                router.navigateTo(url)
            }
        },
        abort() {
            this.sse?.cancel()
        },
        getSearchResult(data: any[]) {
            const searchResult = data.find(
                (item) => item.type === 'search_result'
            )

            return (
                searchResult?.content?.map((item: any, index: number) => ({
                    ...item,
                    index: index + 1
                })) || []
            )
        },
        launchSearch(text = '') {
            if (text) {
                this.options.ask = text
            }
            const useStore = useUserStore()
            if (!this.options.ask) return uni.$u.toast('请输入你想搜索的问题')
            if (!useStore.isLogin) return this.navigateTo('/pages/login/login')
            if (this.isSearching) return uni.$u.toast('正在搜索中...')
            this.isSearching = true

            this.showResult = true
            const pushData = (type: string, target: string, data: any) => {
                const current = this.result.markdown.find(
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
                    this.result.markdown.push({
                        type: type,
                        target: target,
                        content: data
                    })
                }
            }
            try {
                postSearch(
                    { ...this.options },
                    {
                        onstart: (event) => {
                            this.sse = event
                        },
                        onmessage: (value) => {
                            value
                                .trim()
                                .split('data:')
                                .forEach(async (text) => {
                                    if (text !== '') {
                                        try {
                                            const dataJson = JSON.parse(text)
                                            const { card_type, target, data } =
                                                dataJson
                                            switch (card_type) {
                                                case 'error':
                                                    uni.$u.toast(data)
                                                    this.isSearching = false
                                                    this.showResult = false
                                                    break
                                                case 'action': {
                                                    this.result.status =
                                                        StatusEnums.SEARCH
                                                    break
                                                }
                                                case 'markdown': {
                                                    this.result.status =
                                                        StatusEnums.SUMMARY
                                                }
                                                // eslint-disable-next-line no-fallthrough
                                                case 'expand_query':
                                                case 'search_result': {
                                                    pushData(
                                                        card_type,
                                                        target,
                                                        data
                                                    )
                                                    break
                                                }
                                                case 'suggestion': {
                                                    this.result.suggestion = {
                                                        type: card_type,
                                                        data
                                                    }
                                                    break
                                                }
                                                case 'outline_json': {
                                                    this.result.outlineJson =
                                                        data
                                                    break
                                                }
                                                case 'outline': {
                                                    this.result.outline = data
                                                    break
                                                }
                                                case 'done': {
                                                    this.result.status =
                                                        StatusEnums.SUCCESS + 1
                                                    const searchResult =
                                                        this.result.markdown.findLast(
                                                            (item) =>
                                                                item.type ===
                                                                'search_result'
                                                        )
                                                    this.result.search =
                                                        searchResult?.content?.map(
                                                            (
                                                                item: any,
                                                                index: number
                                                            ) => ({
                                                                ...item,
                                                                index: index + 1
                                                            })
                                                        ) || []
                                                    this.getConfig()
                                                    break
                                                }
                                            }
                                        } catch (error) {}
                                    }
                                })
                        },
                        onclose: () => {
                            this.isSearching = false
                        }
                    }
                )
            } catch (error) {
                this.isSearching = false
                this.showResult = false
            }
            this.result.query = this.options.ask
            this.result.markdown = []
            this.result.status = StatusEnums.ANALYSIS
            this.result.search = []
            this.result.outline = {}
            this.result.suggestion = {}
            this.result.outlineJson = {}
        },
        async getSearchInfo(id: string | number) {
            try {
                this.result.status = StatusEnums.ANALYSIS
                this.showResult = true
                const {
                    ask,
                    model,
                    type,
                    results: data
                } = await getSearchDetail({ id })
                if (!data) {
                    uni.$u.toast('数据不存在')
                    return
                }
                this.options.ask = ask
                this.options.model = model
                this.options.type = type
                this.result.query = ask
                this.result.status = StatusEnums.SUCCESS + 1
                if (Array.isArray(data)) {
                    this.result.markdown = data.filter((item: any) =>
                        ['markdown', 'expand_query', 'search_result'].includes(
                            item.type
                        )
                    )
                    this.result.search = this.getSearchResult(data)
                    this.result.suggestion =
                        data.find((item: any) => item.type == 'suggestion') || []
                    this.result.outlineJson =
                        data.find((item: any) => item.type == 'outline_json')
                            ?.content || {}
                    this.result.outline =
                        data.find((item: any) => item.type == 'outline')?.content ||
                        {}
                } else {
                    // 为了适配旧数据
                    this.result.markdown = [
                        {
                            content: data.markdown,
                            type: 'markdown'
                        },
                        {
                            type: 'search_result',
                            content: data.search_result
                        }
                    ]
                    this.result.search = this.getSearchResult(this.result.markdown)

                    this.result.suggestion = {
                        type: 'suggestion',
                        content: data.suggestion
                    }
                    this.result.outline = data.outline || {}
                    this.result.outlineJson = data.outline_json || {}
                }
            } catch (e) {
                // window.alert(JSON.stringify(e))
                console.error(e)
                this.showResult = false
            }

            // console.log(data)
        },
        async getSearchEx() {
            this.searchEx = await getSearchExample()
        },
        async getConfig() {
            this.config = await getSearchConfig()
        }
    }
})
