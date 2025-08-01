<template>
    <page-meta :page-style="$theme.pageStyle">
        <!-- #ifndef H5 -->
        <navigation-bar
            :front-color="$theme.navColor"
            :background-color="$theme.navBgColor"
        />
        <!-- #endif -->
    </page-meta>
    <view class="safe-area-inset-bottom" v-if="modelData.name">
        <view class="pt-[20rpx] pb-[220rpx]">
            <view class="px-[20rpx]">
                <view
                    class="px-[30rpx] py-[24rpx] flex rounded-[14rpx] bg-white items-center"
                >
                    <u-image
                        :src="modelData.image"
                        width="84"
                        height="84"
                    ></u-image>
                    <view class="flex-1 min-w-0 ml-[20rpx]">
                        <view class="text-xl font-medium">
                            {{ modelData.name }}
                        </view>
                        <view
                            v-if="modelData.tips"
                            class="text-content line-clamp-2 text-xs mt-[10rpx]"
                        >
                            {{ modelData.tips }}
                        </view>
                    </view>
                    <!-- <view @click="collection(modelData.id)">
                        <u-icon
                            v-if="modelData?.is_collect == false"
                            name="star"
                            color="#ccc"
                            size="32"
                        ></u-icon>
                        <u-icon
                            v-if="modelData?.is_collect == true"
                            name="star-fill"
                            color="#ffac25"
                            size="32"
                        ></u-icon>
                    </view> -->
                </view>
                <view
                    class="px-[30rpx] py-[24rpx] rounded-[14rpx] bg-white mt-[20rpx]"
                >
                    <form-designer
                        ref="formDesignerRef"
                        :formLists="formLists"
                        v-model="formData"
                    />
                    <view
                        class="bg-[#FFFAF0] text-xs rounded-full inline-block px-[30rpx] py-[14rpx] text-[#FD984E] mt-[10rpx]"
                        @click="insertExample"
                    >
                        不知道写啥？点击插入示例 👈🏻
                    </view>
                </view>
            </view>
            <view>
                <view class="flex items-center px-[20rpx] py-[30rpx]">
                    <view class="text-lg font-medium mr-auto">
                        本次创作结果
                    </view>
                    <view class="text-content" @click="toHistory">
                        创作历史
                    </view>
                </view>
                <view>
                    <view class="current-history" ref="currentHistoryRef">
                        <view class="px-[20rpx]">
                            <view
                                class="mt-[20rpx]"
                                v-for="item in currentCreationHistory"
                                :key="item.id"
                            >
                                <view
                                    class="mt-[20rpx]"
                                    v-for="(text, index) in item.reply"
                                    :key="index"
                                >
                                    <creation-history-item
                                        :title="item.title"
                                        :time="item.create_time"
                                        :content="text"
                                        :showDelete="false"
                                        :show-rewrite="!isReceiving"
                                        @copy="copy"
                                        @rewrite="rewrite(item.extra)"
                                    />
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view
                v-if="!currentCreationHistory.length"
                class="flex flex-col justify-center items-center pb-[200rpx]"
            >
                <image
                    class="w-[300rpx] h-[300rpx]"
                    src="@/packages/static/empty/create_record.png"
                    alt=""
                />
                <view class="my-[32rpx] font-medium">
                    AI创作结果会在显示这里，现在你只需要
                </view>
                <view>
                    <view class="text-content text-sm">
                        1.填写越详细，结果越准确哦
                    </view>
                    <view class="text-content text-sm">
                        2.点击立即生成按钮，一般在10秒内搞定
                    </view>
                </view>
            </view>
        </view>

        <view id="bottom-line" class="h-[1px]"></view>
        <view
            class="safe-area-inset-bottom fixed bottom-0 left-0 w-full bg-white z-10"
        >
            <view class="p-[20rpx]">
                <!-- 模型选择 -->
                <model-picker v-model:sub_id="modelKey" class="mb-[20rpx]" />

                <view class="flex">
                    <view class="w-[40%]">
                        <u-button
                            :hairLine="false"
                            :custom-style="{
                                width: '100%',
                                border: 'none',
                                background: '#f5f5f5'
                            }"
                            @click="setFormDataDefault"
                        >
                            <u-icon name="trash" />
                            重置内容
                        </u-button>
                    </view>

                    <view class="flex-1 ml-[20rpx]">
                        <u-button
                            type="primary"
                            :loading="isReceiving"
                            :custom-style="{ width: '100%' }"
                            @click="handleCreate"
                        >
                            立即生成
                        </u-button>
                    </view>
                </view>
            </view>
        </view>
        <!-- #ifdef H5 -->
        <!--    悬浮菜单    -->
        <floating-menu></floating-menu>
        <!-- #endif -->
    </view>
</template>

<script setup lang="ts">
import { chatSendText, creationCollection } from '@/api/chat'
import { getCreationDetail } from '@/api/create'
import { onLoad, onShareAppMessage, onUnload } from '@dcloudio/uni-app'
import {
    getCurrentInstance,
    nextTick,
    onUnmounted,
    reactive,
    ref,
    watch
} from 'vue'
import { shallowRef } from 'vue'
import { useElementSize, watchThrottled } from '@vueuse/core'
import { timeFormat } from '@/utils/date'

import { useCopy } from '@/hooks/useCopy'
import { useRouter } from 'uniapp-router-next'
import { cloneDeep } from 'lodash-es'
import { getRect } from '@/utils/util'
import { useLockFn } from '@/hooks/useLockFn'
import { isNewDay } from '@/utils/validate'
import { CHAT_LIMIT_KEY } from '@/enums/constantEnums'
import { useUserStore } from '@/stores/user'
import { useAppStore } from '@/stores/app'
import { CreationEnum } from '@/enums/chatEnums'
import { useShareMessage } from '@/hooks/useShareMessage'

import FloatingMenu from '@/components/floating-menu/floating-menu.vue'
import CreationHistoryItem from '@/packages/components/creation-history-item/creation-history-item.vue'
import FormDesigner from '@/packages/components/form-designer/form-designer.vue'

const { useShare, resolveOptions, removeMixinShare } = useShareMessage()
const userStore = useUserStore()
const modelKey = ref('')
const defaultForm = [
    {
        name: 'WidgetTextarea',
        title: '多行文本',
        props: {
            field: 'question',
            title: '内容描述',
            placeholder: '',
            rows: 8,
            maxlength: 400,
            autosize: false,
            isRequired: false
        }
    }
]
const appStore = useAppStore()
const { copy } = useCopy()
const pageOptions = reactive({
    id: 0,
    type: 1,
    token: ''
})
const formDesignerRef = shallowRef()
const currentHistoryRef = shallowRef()
const currentCreationHistory = ref<any[]>([])

const formData = ref<any>({})

const modelData = ref<any>({})
const formLists = ref<any[]>([])

const getData = async () => {
    const data = await getCreationDetail({
        id: pageOptions.id
    })
    modelData.value = data
    if (!modelData.value.form) {
        modelData.value.form = defaultForm
    }
    useShare({
        title: data.name,
        desc: data.tips,
        imageUrl: data.image
    })
    formLists.value = cloneDeep(modelData.value.form)
    setFormDataDefault()
}

const isReceiving = ref(false)
const generateTitle = () => {
    const firstForm = modelData.value?.form[0] || {}
    return `${firstForm.props.title}：${
        formData.value[firstForm.props.field] || ''
    }`
}
//收藏
const collection = async (id: number) => {
    await creationCollection({ id })
    modelData.value.is_collect = !modelData.value.is_collect
}
let chatId = Date.now()
const handleCreate = async () => {
    try {
        await formDesignerRef.value?.validate()
    } catch (error) {
        console.log(error)
        uni.$u.toast('必填项不能为空')
        return
    }
    if (userStore.userInfo.is_chat_limit && isNewDay(true, CHAT_LIMIT_KEY)) {
        const res = await uni.showModal({
            title: '对话上限提示',
            content: '已超过会员对话上限次数，继续对话将会消耗账户的对话余额',
            confirmText: '继续',
            cancelText: '关闭'
        })
        if (res.cancel) return
    }
    isReceiving.value = true
    chatId = Date.now()

    try {
        await chatSendText(
            {
                model: modelKey.value,
                other_id: pageOptions.id,
                question: formData.value,
                creation_type: CreationEnum.Normal,
                type: 2
            },
            {
                onstart(event) {
                    if (currentCreationHistory.value.length) {
                        currentCreationHistory.value = []
                    }
                },
                onmessage(value) {
                    value
                        .trim()
                        .split('data:')
                        .forEach(async (text) => {
                            if (text !== '') {
                                try {
                                    const dataJson = JSON.parse(text)
                                    const { object, choices, error } = dataJson

                                    if (error) {
                                        const { message, code } = error
                                        if (code === 1100) {
                                            if (!appStore.getIsShowRecharge) {
                                                uni.$u.toast(
                                                    `${appStore.getTokenUnit}数量已用完。请联系客服增加`
                                                )
                                            } else {
                                                const { cancel } =
                                                    await uni.showModal({
                                                        title: '温馨提示',
                                                        content: `${appStore.getTokenUnit}数量已用完，请前往充值`
                                                    })
                                                if (cancel) return
                                                router.navigateTo({
                                                    path: '/packages/pages/recharge/recharge'
                                                })
                                            }
                                        } else {
                                            message && uni.$u.toast(message)
                                        }
                                        return
                                    }

                                    let chatIndex =
                                        currentCreationHistory.value.findIndex(
                                            (item) => item.id === chatId
                                        )
                                    const index = choices[0]?.index
                                    const data = choices[0]?.delta?.content

                                    if (object === 'chat' || object === 'reasoning') {
                                        if (chatIndex === -1) {
                                            currentCreationHistory.value.push({
                                                create_time: timeFormat(
                                                    new Date(),
                                                    'yyyy-mm-dd hh:MM:ss'
                                                ),
                                                title: formData.value.question
                                                    ? formData.value.question
                                                    : generateTitle(),
                                                reply: [],
                                                extra: cloneDeep(
                                                    formData.value
                                                ),
                                                id: chatId
                                            })
                                            chatIndex =
                                                currentCreationHistory.value
                                                    .length - 1
                                        }

                                        if (data) {
                                            if (
                                                !currentCreationHistory.value[
                                                    chatIndex
                                                ].reply[index]
                                            ) {
                                                currentCreationHistory.value[
                                                    chatIndex
                                                ].reply[index] = ''
                                            }
                                            currentCreationHistory.value[
                                                chatIndex
                                            ].reply[index] += data
                                        }
                                    }

                                    if (object === 'finish') {
                                        currentCreationHistory.value[
                                            chatIndex
                                        ].reply[index] += data
                                        setFormDataDefault()
                                        return
                                    }
                                } catch (error) {}
                            }
                        })
                },
                onclose() {
                    setTimeout(() => {
                        isReceiving.value = false
                    }, 500)
                }
            }
        )
    } catch (error) {
        isReceiving.value = false
    }
}

const insertExample = () => {
    modelData.value?.form?.forEach((item: any) => {
        if (item.props.placeholder && !item.props.defaultValue) {
            formData.value[item.props.field] = item.props.placeholder
        }
    })
}

const setFormDataDefault = () => {
    modelData.value?.form.forEach((item: any) => {
        if (item.props.defaultValue) {
            formData.value[item.props.field] = cloneDeep(
                item.props.defaultValue
            )
        } else {
            formData.value[item.props.field] = undefined
        }
    })
}
const router = useRouter()
const { lockFn: rewrite } = useLockFn(async (form: any) => {
    if (form) {
        uni.pageScrollTo({
            scrollTop: 0,
            duration: 0
        })
        formData.value = form
        await nextTick()
        handleCreate()
    }
})
const toHistory = () => {
    return router.navigateTo({
        path: '/packages/pages/create_history/create_history',
        query: {
            id: pageOptions.id
        }
    })
}
const scrollToBottom = () => {
    uni.pageScrollTo({
        selector: '#bottom-line',
        duration: 0
    })
}

//#ifndef H5
let observerTimer: any = null
let scrollHeight = 0
const createObserver = () => {
    if (observerTimer) {
        clearInterval(observerTimer)
    }
    observerTimer = setInterval(async () => {
        const res: any = await getRect(
            '.current-history',
            false,
            getCurrentInstance()?.proxy
        )
        if (res.height > scrollHeight) {
            scrollToBottom()
        }
        scrollHeight = res.height
    }, 500)
}

const removeObserver = () => {
    if (observerTimer) {
        setTimeout(() => {
            clearInterval(observerTimer)
        }, 2000)
    }
}

watch(isReceiving, () => {
    if (isReceiving.value) {
        createObserver()
    } else {
        removeObserver()
    }
})

onUnmounted(() => {
    removeObserver()
})
//#endif
//#ifdef H5
const { height } = useElementSize(currentHistoryRef)
watchThrottled(
    height,
    () => {
        if (isReceiving.value) {
            scrollToBottom()
        }
    },
    { throttle: 200 }
)
//#endif

onLoad(async (options) => {
    pageOptions.id = Number(options?.id)
    pageOptions.type = Number(options?.type)
    await getData()
    uni.$on('createRewrite', (data) => {
        console.log(data)
        rewrite(data)
    })
})

onUnload(() => {
    uni.$off('createRewrite')
})

//#ifdef MP
removeMixinShare()
onShareAppMessage(async () => {
    const resolved = await resolveOptions({
        title: modelData.value.name,
        imageUrl: modelData.value.image
    })
    return resolved
})
//#endif
</script>

<style lang="scss"></style>
