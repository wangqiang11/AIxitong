<template>
    <page-meta :page-style="$theme.pageStyle">
        <!-- #ifndef H5 -->
        <navigation-bar
            :front-color="$theme.navColor"
            :background-color="$theme.navBgColor"
        />
        <!-- #endif -->
    </page-meta>
    <view class="h-full flex flex-col">
        <view>
            <!-- <u-navbar
                :title="robotInfo.name"
                title-color="#333"
                :title-bold="true"
            ></u-navbar> -->
            <SquareRobot :data="robotRecord" v-model="currentId">
                <template #right v-if="robotInfo.is_digital">
                    <router-navigate
                        :to="{
                            path: '/packages/pages/digital_chat/digital_chat',
                            query: {
                                id: robotId,
                                squareId: currentRobot.id
                            }
                        }"
                        @click="pauseAll"
                    >
                        <view class="flex items-center">
                            <view class="mr-[10rpx]"> 形象对话 </view>
                            <u-icon name="arrow-rightward" />
                        </view>
                    </router-navigate>
                </template>
            </SquareRobot>
        </view>
        <view
            class="flex-1 min-h-0 relative"
            :style="{
                background: isDigital ? robotInfo.digital_bg : ''
            }"
        >
            <view class="absolute inset-0" v-if="isDigital">
                <video
                    v-show="!isPlaying"
                    class="h-full w-full"
                    :src="robotInfo.digital?.vertical_stay_video"
                    autoplay
                    muted
                    loop
                    :controls="false"
                    :show-play-btn="false"
                    :show-center-play-btn="false"
                    :show-fullscreen-btn="false"
                    object-fit="contain"
                ></video>
                <video
                    v-show="isPlaying"
                    class="h-full w-full"
                    :src="robotInfo.digital?.vertical_talk_video"
                    autoplay
                    muted
                    loop
                    :controls="false"
                    :show-play-btn="false"
                    :show-center-play-btn="false"
                    :show-fullscreen-btn="false"
                    object-fit="contain"
                ></video>
            </view>
            <view class="h-full flex flex-col">
                <view class="flex-1 min-h-0">
                    <l-watermark
                        class="flex-1 min-h-0" <!-- #ifdef MP-WEIXIN -->
                        z-index="-1"
                        <!-- #endif -->
                        :content="appStore.getChatConfig.watermark" :font="{
                        color: 'rgba(0,0,0,0.06)', fontSize: 12 }" >
                        <z-paging
                            ref="pagingRef"
                            v-model="chatList"
                            use-chat-record-mode
                            :auto="false"
                            :safe-area-inset-bottom="true"
                            :auto-clean-list-when-reload="false"
                            :show-chat-loading-when-reload="true"
                            :default-page-size="20"
                            @query="queryList"
                            :fixed="false"
                            @keyboardHeightChange="keyboardHeightChange"
                            @hidedKeyboard="hidedKeyboard"
                        >
                            <!-- 顶部提示文字 -->

                            <!-- style="transform: scaleY(-1)"必须写，否则会导致列表倒置（必须写在for循环标签上，不得写在容器上）！！！ -->
                            <!-- 注意不要直接在chat-item组件标签上设置style，因为在微信小程序中是无效的，请包一层view -->

                            <view
                                class="scroll-view-content pb-[40rpx]"
                                ref="contentRef"
                            >
                                <view
                                    v-for="(item, index) in chatList"
                                    :key="`${item.id} + ${index} + ''`"
                                    style="transform: scaleY(-1)"
                                >
                                    <view
                                        class="chat-record mt-[20rpx] pb-[40rpx]"
                                    >
                                        <chat-record-item
                                            v-if="item.type == 1"
                                            :type="'right'"
                                            :content="item.content"
                                            :avatar="userStore.userInfo.avatar"
                                            :showCopyBtn="true"
                                            :files-plugin="item.files_plugin"
                                            :class="{
                                                'opacity-50': isDigital
                                            }"
                                        ></chat-record-item>
                                        <chat-record-item
                                            :class="{
                                                'opacity-50': isDigital
                                            }"
                                            v-if="item.type == 2"
                                            :record-id="item.id"
                                            :type="'left'"
                                            :content="item.content"
                                            :reasoning="item.reasoning"
                                            :loading="item.loading"
                                            :avatar="
                                                robotInfo.icons
                                                    ? robotInfo.icons
                                                    : robotInfo.image
                                            "
                                            :index="index"
                                            :chatType="2"
                                            :time="item.create_time"
                                            :showCopyBtn="true"
                                            :images="item.images"
                                            :files="item.files"
                                            :videos="item.videos"
                                            :showVoiceBtn="true"
                                            :model-name="item.model"
                                            show-poster
                                            @poster="handleDrawPoster(item.id)"
                                        >
                                            <template #btn>
                                                <view class="flex items-center">
                                                    <view
                                                        v-if="
                                                            !!robotInfo.is_show_quote &&
                                                            item.quotes?.length
                                                        "
                                                        class="text-content text-sm flex items-center mr-[20rpx] mt-[16rpx]"
                                                        @click="
                                                            showQuotes(
                                                                item.quotes
                                                            )
                                                        "
                                                    >
                                                        {{
                                                            item.quotes?.length
                                                        }}条引用
                                                    </view>
                                                    <view
                                                        v-if="
                                                            !!robotInfo.is_show_context &&
                                                            item.context?.length
                                                        "
                                                        class="text-content text-sm flex items-center mr-[20rpx] mt-[16rpx]"
                                                        @click="
                                                            showContext(
                                                                item.context
                                                            )
                                                        "
                                                    >
                                                        {{
                                                            item.context
                                                                ?.length
                                                        }}条上下文
                                                    </view>
                                                </view>
                                            </template>
                                            <template #sub_actions>
                                                <view
                                                    class="ml-[86rpx] mt-2"
                                                    v-if="
                                                        item.create_time &&
                                                        !!robotInfo.is_show_feedback
                                                    "
                                                >
                                                    <u-tag
                                                        :text="
                                                            item.is_feedback
                                                                ? '已反馈'
                                                                : '反馈'
                                                        "
                                                        :type="
                                                            item.is_feedback
                                                                ? 'info'
                                                                : 'primary'
                                                        "
                                                        size="mini"
                                                        style="
                                                            --color-primary-light-3: transparent;
                                                            --color-info-light-3: transparent;
                                                        "
                                                        @click="
                                                            openFeedBackPop(
                                                                item,
                                                                index
                                                            )
                                                        "
                                                    />
                                                </view>

                                                <view
                                                    v-if="
                                                        index === 0 &&
                                                        !isReceiving
                                                    "
                                                    class="flex flex-col"
                                                    style="margin-left: 84rpx"
                                                >
                                                    <view
                                                        v-for="(
                                                            text, textIndex
                                                        ) in relatedIssuesArr.length
                                                            ? relatedIssuesArr
                                                            : item.correlation"
                                                        :key="textIndex"
                                                        class="inline-flex items-center rounded-md bg-white cursor-pointer mt-[20rpx]"
                                                        style="
                                                            padding: 16rpx 24rpx;
                                                            width: fit-content;
                                                        "
                                                        @click.stop="
                                                            sendLock(text)
                                                        "
                                                    >
                                                        <text
                                                            class="mr-1 text-base text-content"
                                                            >{{ text }}</text
                                                        >
                                                        <u-icon
                                                            name="arrow-rightward"
                                                            color="#999"
                                                            size="30"
                                                        />
                                                    </view>
                                                </view>
                                            </template>
                                        </chat-record-item>
                                    </view>
                                </view>
                            </view>
                            <template #empty>
                                <view class="w-full min-h-full pt-[40rpx]">
                                    <chat-record-item
                                        :class="{
                                            'opacity-50': isDigital
                                        }"
                                        v-if="robotInfo.welcome_introducer"
                                        type="left"
                                        :content="robotInfo.welcome_introducer"
                                        :avatar="
                                            robotInfo.icons
                                                ? robotInfo.icons
                                                : robotInfo.image
                                        "
                                        :showCopyBtn="false"
                                        @click-link="sendLock"
                                    ></chat-record-item>
                                </view>
                            </template>
                            <template #bottom>
                                <view
                                    :class="{
                                        ' bg-white': !isDigital
                                    }"
                                >
                                    <chat-input
                                        :class="{
                                            '!bg-[transparent]': true
                                        }"
                                        v-model="userInput"
                                        :loading="
                                            isReceiving ||
                                            chatStatus === ChatStatus.THINKING
                                        "
                                        :show-stop="isReceiving"
                                        :safe-area-inset-bottom="
                                            !robotInfo.copyright
                                        "
                                        @send="sendLock"
                                        @pause="chatClose"
                                        @focus="handleFocus"
                                        @clear="cleanChatLock"
                                    >
                                        <template #actions>
                                            <scroll-view
                                                class="w-full whitespace-nowrap"
                                                scroll-x
                                            >
                                                <view
                                                    class="menus bg-page px-[30rpx] rounded-full mr-[20rpx] py-[10rpx] inline-block"
                                                    v-for="(
                                                        item, index
                                                    ) in robotInfo.menus"
                                                    :key="index"
                                                    @click="
                                                        sendLock(item.keyword)
                                                    "
                                                >
                                                    {{ item.keyword }}
                                                </view>
                                            </scroll-view>

                                            <!-- #ifdef H5 -->
                                            <view class="inline-block" v-if="robotInfo.support_file">
                                                <FileParser
                                                    @on-success="FilesManage.addFile"
                                                ></FileParser>
                                            </view>
                                            <!-- #endif -->
                                        </template>

                                        <template #file-list>
                                            <view
                                                class="flex items-center py-1 px-2 bg-page rounded"
                                                v-for="item in FilesManage.files.value"
                                                :key="item.id"
                                            >
                                                <view class="text-sm mr-1">{{
                                                        item.name
                                                    }}</view>
                                                <uni-icons
                                                    type="closeempty"
                                                    :size="16"
                                                    @click="FilesManage.removeFile(item)"
                                                ></uni-icons>
                                            </view>
                                        </template>
                                    </chat-input>
                                    <!-- <view
                                        v-if="robotInfo.copyright"
                                        class="pb-[20rpx] text-center text-content safe-area-inset-bottom"
                                    >
                                        {{ robotInfo.copyright }}
                                    </view> -->
                                </view>
                            </template>
                        </z-paging>
                    </l-watermark>
                </view>
            </view>
        </view>

        <!--  会话弹窗  -->
        <!-- <session-popup
            v-model:show="showPopup"
            v-model="sessionActive"
            :lists="sessionLists"
            @add="sessionAdd"
            @clear="sessionClear"
            @delete="sessionDelete"
            @edit="sessionEdit"
        /> -->
        <QuotePopup v-bind="quotes" v-model:show="quotes.show" />
        <ContextPopup v-bind="context" v-model:show="context.show" />

        <!-- 内容反馈 -->
        <u-popup
            v-model="feedbackShow"
            safe-area-inset-bottom
            closeable
            border-radius="16"
            mode="center"
        >
            <view class="flex flex-col" style="width: 600rpx">
                <view
                    class="text-xl mx-[20rpx] py-[28rpx] font-bold border-b border-solid border-light border-0"
                >
                    问题反馈
                </view>
                <view class="flex-1 min-h-0 px-[20rpx] pb-[30rpx]">
                    <view class="py-[20rpx]">
                        <l-textarea
                            v-model="feedbackParams.content"
                            placeholder="描述一下你遇到了什么问题"
                        >
                        </l-textarea>
                    </view>

                    <u-button type="primary" @click="handleFeedBack"
                        >提交反馈</u-button
                    >
                </view>
            </view>
        </u-popup>
        <!--  生产对话海报  -->
        <dialog-poster ref="posterRef"></dialog-poster>
    </view>
</template>

<script lang="ts" setup>
import {
    robotChat,
    clearRobotChatRecord,
    getRobotChatRecord,
    getRobotDetail,
    voiceTransfer,
    voiceGenerate,
    getRobotRecord,
    chatFeedBack,
    putRobotRecord
} from '@/api/robot'
import { useLockFn } from '@/hooks/useLockFn'
import { useUserStore } from '@/stores/user'

import { useRouter, useRoute } from 'uniapp-router-next'
import { computed, nextTick, onUnmounted, reactive, watch } from 'vue'
import FileParser from '@/components/chat-input/file-parser.vue'
import DialogPoster from '@/packages/components/dialog-poster/dialog-poster.vue'
import SquareRobot from './components/square-robot.vue'
import QuotePopup from '@/components/chat-record-item/quote-popup.vue'
import ContextPopup from '@/components/chat-record-item/context-popup.vue'
import { ref, shallowRef } from 'vue'
import { useAppStore } from '@/stores/app'
import { RequestErrMsgEnum } from '@/enums/requestEnums'
import { useAudioPlay } from '@/hooks/useAudioPlay'
import { useFilesManage } from '@/components/chat-input/use-files-manage'
import { onShow } from '@dcloudio/uni-app'
import {
    AudioGraphUserOptions,
    useRecorder,
    useRenderAudioGraph
} from '@/hooks/useRecorder'
import { useAudio } from '@/hooks/useAudio'
const { pauseAll } = useAudioPlay()
const appStore = useAppStore()
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const contentRef = shallowRef()
const FilesManage = useFilesManage()
const showRecorder = ref(false)
const chatList = ref<any[]>([])

enum ChatTypeEnum {
    TEXT = 1,
    DIGITAL = 2
}
const chatType = ref(ChatTypeEnum.TEXT)
const isDigital = computed(() => chatType.value === ChatTypeEnum.DIGITAL)
enum ChatStatus {
    INITIALING,
    //默认
    DEFAULT,
    //录音中
    RECORDING,
    // 正在思考中
    THINKING,
    PLAYING
}
const chatStatus = ref(ChatStatus.INITIALING)
const statusToTextMap = reactive({
    [ChatStatus.INITIALING]: '正在初始化对话...',
    [ChatStatus.DEFAULT]: '点击开始说话',
    [ChatStatus.RECORDING]: '我在听，您请说...',
    [ChatStatus.THINKING]: '稍等，让我想一想',
    [ChatStatus.PLAYING]: '正在回复中...'
})

const posterRef = shallowRef()
const handleDrawPoster = async (recordId: number) => {
    const result = chatList.value.filter((item: any) => {
        return item.id == recordId
    })
    if (result.length != 2) {
        uni.$u.toast('上下文数据不对～')
        return
    }
    posterRef.value.initPosterData({
        title: result[1].content,
        content: result[0].content
    })
}
const changeChatStatus = (status: any) => {
    if (chatType.value === ChatTypeEnum.DIGITAL) {
        chatStatus.value = status
    }
}

const isAutoStop = ref(false)
const startTimer = ref(0)
const hasVoice = ref(false)
const recordTimer = ref<any>(0)
const idleReplyTimer = ref<any>(0)
const isAutoOpen = ref(true)
const canvasOptions = reactive<AudioGraphUserOptions>({
    id: 'audio-canvas',
    width: 100,
    height: 30,
    minHeight: 5,
    scale: 2
})
const { render, stopRender, draw } = useRenderAudioGraph(canvasOptions)
const { start, stop, isRecording, authorize, close } = useRecorder({
    onstart() {
        hasVoice.value = false
        startTimer.value = Date.now()
    },
    async onstop(result) {
        stopRender()
        setTimeout(() => {
            draw(new Float64Array(new Array(128).fill(0)), 0)
        }, 10)

        if (!isAutoStop.value) {
            // chatStatus.value = ChatStatus.DEFAULT
            return
        }
        isAutoStop.value = false
        changeChatStatus(ChatStatus.THINKING)
        try {
            const res: any = await voiceTransfer(result.tempFilePath)
            if (!res.text) {
                isAutoOpen.value && changeChatStatus(ChatStatus.RECORDING)
                return
            }
            sendLock(res.text, 'voice')
        } catch (error) {
            isAutoOpen.value && changeChatStatus(ChatStatus.DEFAULT)
        }
    },
    ondata(result) {
        render(result)
        const now = Date.now()

        // 过滤掉杂音
        if (result.powerLevel > 15) {
            clearTimeout(recordTimer.value)
            chatStatus.value = ChatStatus.RECORDING
            hasVoice.value = true
            startTimer.value = now
            //有音频输入，延时1s停止录音
            recordTimer.value = setTimeout(() => {
                isAutoStop.value = true
                clearTimeout(idleReplyTimer.value)
                // pause()
                stop()
            }, 2000)
        }
        // 5s内没有语音输入
        if (now - startTimer.value >= 5000) {
            if (!hasVoice.value) {
            }
        }
    }
})

const createIdleReplyTimer = () => {
    idleReplyTimer.value = setTimeout(() => {
        playIdleReply()
    }, robotInfo.value.digital?.idle_time * 1000 || 0)
}
const { play, pause, isPlaying } = useAudio({
    onstart() {
        chatStatus.value = ChatStatus.PLAYING
        if (isPlayIdleReply.value) {
            isPlayIdleReply.value = false
            stop()
        }
    },
    onstop() {
        createIdleReplyTimer()
        if (!isAutoOpen.value) {
            changeChatStatus(ChatStatus.DEFAULT)
        } else {
            changeChatStatus(ChatStatus.RECORDING)
        }
    },
    onerror() {
        changeChatStatus(ChatStatus.DEFAULT)
    }
})
const getFile = async (params: any) => {
    const { url } = await voiceGenerate(params)
    return url
}
const playRecord = async (id: number) => {
    try {
        const url = await getFile({
            type: 2,
            record_id: id
        })
        play(url)
    } catch (error) {
        changeChatStatus(ChatStatus.DEFAULT)
    }
}

const startRecord = async () => {
    if (isRecording.value || chatType.value !== ChatTypeEnum.DIGITAL) {
        return
    }
    start()
    return
}
const changeRecorder = async () => {
    if ([ChatStatus.PLAYING, ChatStatus.THINKING].includes(chatStatus.value)) {
        return
    }
    if (isRecording.value) {
        isAutoOpen.value = false
        stop()
        changeChatStatus(ChatStatus.DEFAULT)
    } else {
        isAutoOpen.value = true
        changeChatStatus(ChatStatus.RECORDING)
    }
}
const file = ref('')
const isPlayIdleReply = ref(false)
const playIdleReply = async () => {
    if (chatType.value !== ChatTypeEnum.DIGITAL) {
        return Promise.reject()
    }
    if (
        !robotInfo.value.is_digital ||
        !robotInfo.value.digital_id ||
        robotInfo.value.is_disable
    ) {
        return Promise.reject()
    }
    if (!file.value) {
        file.value = await getFile({
            type: 3,
            record_id: robotInfo.value.id
        })
    }
    if (!file.value) return Promise.reject()
    isPlayIdleReply.value = true
    const key = Date.now()
    chatList.value.push({
        type: 2,
        typing: false,
        content: robotInfo.value.digital.idle_reply,
        key
    })
    await nextTick()
    scrollToBottom()
    play(file.value)
}
watch(chatType, async (value) => {
    if (value === ChatTypeEnum.TEXT) {
        pause()
        close()
        chatStatus.value = ChatStatus.INITIALING
        clearTimeout(idleReplyTimer.value)
    } else {
        isAutoOpen.value = true
        await authorize()
        draw(null, 0)
        try {
            await playIdleReply()
        } catch (error) {
            changeChatStatus(ChatStatus.RECORDING)
        }
        scrollToBottom()
    }
})

watch(chatStatus, (value) => {
    switch (value) {
        case ChatStatus.RECORDING: {
            startRecord()
        }
    }
})

const context = reactive({
    show: false,
    data: [] as any[]
})

const quotes = reactive({
    show: false,
    data: [] as any[]
})

const showContext = (data: any[]) => {
    context.show = true
    context.data = data
}

const showQuotes = (data: any[]) => {
    quotes.show = true
    quotes.data = data
}

const showPopup = ref(false)
const robotInfo = ref<any>({})
const userInput = ref('')
const newUserInput = ref('')
const handleFocus = () => {
    if (!userStore.isLogin) {
        return toLogin()
    }
    scrollToBottom()
}
const currentId = ref<string>(route.query.id as string)
const robotRecord = ref<any[]>([])
const getRobotRecordData = async () => {
    robotRecord.value = await getRobotRecord()
}

const currentRobot = computed(() => {
    return (
        robotRecord.value.find(
            (item: any) => item.id === Number(currentId.value)
        ) || {}
    )
})
const robotId = computed(() => currentRobot.value.robot_id)

const pagingRef = shallowRef()
let lastPlayId = 0
const queryList = async (pageNo: number, pageSize: number) => {
    try {
        const { lists = [], count } = await getRobotChatRecord({
            square_id: currentRobot.value.id,
            robot_id: robotId.value,
            page_size: pageSize / 2,
            page_no: pageNo
        })

        pagingRef.value?.complete(lists.reverse())
        if (count === 0) {
            setTimeout(() => {
                pagingRef.value?.scrollToTop(false)
            }, 200)
        } else if (pageSize === 1) {
            setTimeout(() => {
                scrollToBottom()
            }, 100)
        }
        if (
            chatType.value === ChatTypeEnum.DIGITAL &&
            chatStatus.value == ChatStatus.THINKING
        ) {
            const last = lists[0]
            if (last && last.id !== lastPlayId) {
                lastPlayId = last.id
                playRecord(lastPlayId)
            }
        }
    } catch (error) {
        pagingRef.value?.complete(false)
    }
}

const keyboardIsShow = ref(false)

const keyboardHeightChange = (res: any) => {
    if (res.height > 0) {
        keyboardIsShow.value = true
    } else {
        keyboardIsShow.value = false
    }
}

const hidedKeyboard = () => {
    keyboardIsShow.value = false
}

const { lockFn: cleanChatLock } = useLockFn(async () => {
    if (!userStore.isLogin) return toLogin()

    const modal = await uni.showModal({
        title: '温馨提示',
        content: '确定清空对话？'
    })
    if (modal.cancel) return
    chatClose()
    await clearRobotChatRecord({
        robot_id: robotId.value,
        square_id: currentRobot.value.id
    })
    pagingRef.value?.reload()
})

const scrollToBottom = async () => {
    pagingRef.value?.scrollToBottom(false)
}

const isReceiving = ref(false)
let streamReader: any = null
const relatedIssuesArr = ref<string[]>([])

const chatClose = () => {
    //#ifdef H5
    streamReader?.cancel()
    //#endif
    //#ifdef MP-WEIXIN
    streamReader?.abort()
    //#endif
    setTimeout(() => {
        userInput.value = ''
    })
}
const chatContent = ref<any>({})
const { pauseAll: pauseAllVoice } = useAudioPlay()
const { lockFn: sendLock } = useLockFn(async (text: string, type = 'text') => {
    showRecorder.value = false
    if (!userStore.isLogin) {
        return toLogin()
    }
    if (isReceiving.value) return
    const inputValue = text || userInput.value
    if (!inputValue) return

    const processedFiles = FilesManage.files.value.map((item) => ({
        name: item.name,
        type: '30',
        url: item.url
    }))

    pagingRef.value.addChatRecordData({
        type: 1,
        content: inputValue,
        files_plugin: processedFiles
    })
    chatContent.value = {
        type: 2,
        loading: true,
        content: [] as string[],
        reasoning: '',
        id: Date.now()
    }
    pagingRef.value.addChatRecordData(chatContent.value)
    newUserInput.value = userInput.value
    userInput.value = ''

    try {
        isReceiving.value = true
        changeChatStatus(ChatStatus.THINKING)
        await robotChat(
            {
                cate_id: 0,
                square_id: currentRobot.value.id,
                robot_id: robotId.value,
                question: inputValue,
                stream: true,
                annex: [],
                files: FilesManage.files.value.map((item: any) => ({
                    ...item,
                    type: '30'
                }))
            },
            {
                onstart(reader) {
                    streamReader = reader
                    pauseAllVoice()
                    userInput.value = ''
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
                                        message && uni.$u.toast(message)
                                        chatList.value.splice(0, 2)
                                        return
                                    }
                                    const data = choices[0]?.delta?.content
                                    switch (object) {
                                        case 'chat': {
                                            if (!chatContent.value.content) {
                                                chatContent.value.content = ''
                                            }
                                            chatContent.value.content += data
                                            break
                                        }
                                        case 'reasoning': {
                                            if (!chatContent.value.content) {
                                                chatContent.value.content = ''
                                            }
                                            chatContent.value.reasoning += data
                                            break
                                        }
                                        case 'question': {
                                            relatedIssuesArr.value = JSON.parse(
                                                choices[0]?.delta?.content
                                            )
                                            break
                                        }
                                        case 'image':
                                        case 'video':
                                        case 'file': {
                                            const key = `${object}s`
                                            try {
                                                const urls = JSON.parse(data)
                                                chatContent.value[key] = urls
                                            } catch (error) {
                                                console.error(error)
                                            }
                                        }
                                    }
                                } catch (error) {}
                            }
                        })
                },
                onclose() {
                    isReceiving.value = false
                    userStore.getUser()
                    setTimeout(() => {
                        pagingRef.value?.reload()
                    }, 1000)
                }
            }
        )
    } catch (error: any) {
        console.log('发送消息失败=>', error)
        if (error.errMsg !== RequestErrMsgEnum.ABORT) {
            chatList.value.splice(0, 2)
        }
        type == 'text' && (userInput.value = newUserInput.value)
        isReceiving.value = false
    }
})

// ------------ 处理反馈弹窗
const feedbackShow = ref<boolean>(false)
const feedbackParams = reactive({
    _index: -1,
    robot_id: -1,
    record_id: -1,
    content: ''
})

const openFeedBackPop = (row: { id: number }, index: number) => {
    if (chatList.value[index].is_feedback === 1) return
    feedbackParams.robot_id = robotId.value
    feedbackParams.record_id = row.id
    feedbackParams._index = index
    feedbackShow.value = true
}

const handleFeedBack = async () => {
    try {
        await chatFeedBack(feedbackParams)
        feedbackShow.value = false
        feedbackParams.content = ''
        chatList.value[feedbackParams._index].is_feedback = 1
    } catch (error) {
        console.log('反馈提交失败-->', error)
    }
}

// ------------ 处理反馈弹窗

const toLogin = () => {
    router.navigateTo({ path: '/pages/login/login' })
}
const getRobotData = async () => {
    if (!robotId.value) return
    robotInfo.value = await getRobotDetail({
        id: robotId.value
    })
}
watch(currentId, (value) => {
    chatType.value = ChatTypeEnum.TEXT
    getRobotData()
    setTimeout(() => {
        if (value) {
            pagingRef.value?.reload()
        } else {
            pagingRef.value?.complete([])
            setTimeout(() => {
                pagingRef.value?.scrollToTop(false)
            }, 100)
        }
    }, 10)
})
onShow(async () => {
    if (route.query.square_id) {
        const { id } = await putRobotRecord({
            id: route.query.square_id
        })
        currentId.value = id
    }
    // getSessionLists()
    await getRobotRecordData()
    getRobotData()
    pagingRef.value?.reload()
})
onUnmounted(() => {
    chatClose()
})
</script>

<style lang="scss">
page {
    overflow: hidden;
    height: 100%;
    background-color: #f4f8fd;
}
.recorder-btn {
    position: absolute;
    top: -130rpx;
    right: 20rpx;
    width: 130rpx;
    height: 130rpx;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: linear-gradient(90deg, #70c3ec 0%, #426df7 100%);
    box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);
    &--stop {
        background: #b7b7b7;
        border: 1px solid #ffffff;
    }
}
</style>
