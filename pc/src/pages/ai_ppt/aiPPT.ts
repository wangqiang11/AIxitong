import {
    genPPT,
    getPPTConfig,
    getPPTExample,
    getPPTOutline
} from '@/api/ai_ppt'
import { defineStore } from 'pinia'
import { useUserStore } from '@/stores/user'

export interface PPTConfig {
    /**
     * 是否会员免费  1-是 0 否
     */
    isVipFree: boolean
    /**
     * 价格
     */
    price: number
    /**
     * 功能开关
     */
    status: number
}
interface Catalog {
    /**
     * 一级大纲
     */
    catalog: string
    /**
     * 二级大纲
     */
    sub_catalog: string
}
interface PPTOptions {
    /**
     * 大纲
     */
    catalogs: Catalog[]
    /**
     * 模版ID
     */
    cover_id: string
    /**
     * 描述词
     */
    prompt: string
    /**
     * 标题
     */
    title: string
    /**
     * 类型 1-基础 2-增强 3-深入
     */
    type: number
}

interface AiPPTState {
    config: PPTConfig
    options: PPTOptions
    isGenning: boolean
    showTemplate: boolean
    showOutline: boolean
    isGenningOutline: boolean
    outlineLists: any[]
}

export const useAiPPTStore = defineStore({
    id: 'aiPPT',
    state(): AiPPTState {
        return {
            config: {
                status: 0,
                price: 0,
                isVipFree: true
            },
            options: {
                type: 1,
                prompt: '',
                cover_id: '',
                title: '',
                catalogs: []
            },
            isGenning: false,
            isGenningOutline: false,
            showTemplate: false,
            showOutline: false,
            outlineLists: []
        }
    },
    actions: {
        async getPPTConfig() {
            this.config = await getPPTConfig()
        },
        async genPPT(promptOrOptions?: string | PPTOptions) {
            const userStore = useUserStore()
            if (!userStore.isLogin) return userStore.toggleShowLogin()
            let params = {
                ...this.options
            }
            if (isObject(promptOrOptions)) {
                params = promptOrOptions
            } else if (isString(promptOrOptions)) {
                params.prompt = promptOrOptions
            }
            if (!params.prompt) {
                return feedback.msgError('请输入标题')
            }
            if (params.type === 1) {
                await this.genPPTSubmit(params)
            } else if (params.type === 2) {
                this.showTemplate = true
            } else {
                this.showOutline = true
                this.outlineLists = []
                this.genOutline(params.prompt)
            }
        },
        async genPPTSubmit(params: PPTOptions) {
            if (this.isGenning) return
            this.isGenning = true
            const router = useRouter()
            const userStore = useUserStore()
            try {
                await genPPT(params)
                await router.push({
                    path: '/ai_ppt/history'
                })
                userStore.getUser()
                this.options.catalogs = []
                this.options.cover_id = ''
                this.options.title = ''
                this.options.prompt = ''
            } catch (error) {
                console.error(error)
            } finally {
                this.isGenning = false
            }
        },
        async genOutline(prompt = '') {
            if (this.isGenningOutline) return
            this.isGenningOutline = true
            const item = reactive({
                prompt: prompt || this.options.prompt,
                title: '',
                catalogs: [],
                status: 0
            })
            this.outlineLists.push(item)
            try {
                const data = await getPPTOutline({
                    prompt: item.prompt
                })
                item.status = 1
                item.title = data.title
                item.catalogs = data.catalogs
            } catch (error) {
                item.status = 2
            } finally {
                this.isGenningOutline = false
            }
        }
    }
})

export const useSearchEx = () => {
    const searchEx = ref([])
    const getSearchEx = async () => {
        searchEx.value = await getPPTExample()
    }

    return {
        searchEx,
        getSearchEx
    }
}
