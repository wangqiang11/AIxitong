<template>
    <page-meta :page-style="$theme.pageStyle">
        <!-- #ifndef H5 -->
        <navigation-bar
            :front-color="$theme.navColor"
            :background-color="$theme.navBgColor"
        />
        <!-- #endif -->
    </page-meta>
    <view
        class="h-full flex justify-center items-center fixed inset-0 w-full z-[9999] bg-white"
        v-if="ChatStatus.INITIALING == chatStatus"
    >
        <image
            src="@/packages/static/images/loading.gif"
            class="w-[600rpx]"
            mode="widthFix"
        />
    </view>
    <view
        class="h-full flex justify-center items-center fixed inset-0 w-full z-[9999] bg-white"
        v-if="ChatStatus.PERMISSION == chatStatus"
    >
        <view>
            <u-empty mode="permission" text=" " />
            <view class="text-xs text-muted text-center" style="width: 400rpx">
                {{ statusToTextMap[chatStatus] }}
            </view>
        </view>
    </view>
    <view class="h-full container-wrap">
        <view
            class="h-full relative py-[40rpx] px-[20rpx]"
            :style="{
                background: robotInfo.robot.digital_bg
            }"
            v-if="robotInfo.digital.id || isLock"
        >
            <video
                v-show="ChatStatus.PLAYING !== chatStatus"
                ref="videoRef"
                id="stay-video"
                playsinline
                muted
                webkit-playsinline
                x-webkit-airplay="allow"
                x5-video-player-fullscreen="true"
                x5-video-player-type="h5"
                loop
                autoplay="false"
                preload="none"
                :controls="false"
                :show-play-btn="false"
                :show-center-play-btn="false"
                :show-fullscreen-btn="false"
                object-fit="cover"
                :src="robotInfo.digital?.vertical_stay_video"
                @loadedmetadata="loadVideo"
            ></video>
            <video
                v-show="ChatStatus.PLAYING === chatStatus"
                ref="videoRef"
                id="talk-video"
                playsinline
                muted
                webkit-playsinline
                x-webkit-airplay="allow"
                x5-video-player-fullscreen="true"
                x5-video-player-type="h5"
                loop
                :controls="false"
                :show-play-btn="false"
                :show-center-play-btn="false"
                :show-fullscreen-btn="false"
                object-fit="cover"
                :src="robotInfo.digital?.vertical_talk_video"
            ></video>
            <view class="h-full relative z-10 flex flex-col top-0">
                <view class="flex text-white items-center">
                    <view
                        class="flex-1 min-w-0 line-clamp-1 text-xl font-medium"
                    >
                        {{ robotInfo.name }}
                    </view>
                </view>
                <view class="flex-1 min-h-0 flex flex-col justify-end">
                    <z-paging
                        ref="pagingRef"
                        v-model="chatList"
                        use-chat-record-mode
                        :auto="false"
                        height="500rpx"
                        width="600rpx"
                        :safe-area-inset-bottom="true"
                        :auto-clean-list-when-reload="false"
                        :show-chat-loading-when-reload="true"
                        :default-page-size="20"
                        @query="queryList"
                        :fixed="false"
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
                                <view class="chat-record mt-[20rpx]">
                                    <chat-record-item
                                        v-if="item.type == 1"
                                        :type="'left'"
                                        :content="item.content"
                                        :avatar="user_avatar"
                                        :showCopyBtn="false"
                                        :bg="$theme.primaryColor"
                                        color="#fff"
                                    ></chat-record-item>
                                    <chat-record-item
                                        v-if="item.type == 2"
                                        :record-id="item.id"
                                        :type="'left'"
                                        bg="rgba(0, 0, 0, 0.5)"
                                        color="#fff"
                                        :content="item.content"
                                        :reasoning="item.reasoning"
                                        :loading="item.loading"
                                        :avatar="
                                            robotInfo.robot.icons
                                                ? robotInfo.robot.icons
                                                : robotInfo.robot.image
                                        "
                                        :index="index"
                                        :chatType="2"
                                        :showCopyBtn="false"
                                        :images="item.images"
                                        :files="item.files"
                                        :videos="item.videos"
                                    >
                                        <template #sub_actions>
                                            <view
                                                v-if="
                                                    index === 0 && !isReceiving
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
                                                    @click.stop="sendLock(text)"
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
                        <template #empty> </template>
                    </z-paging>
                    <view
                        class="flex justify-center items-center"
                        v-if="isReceiving"
                    >
                        <u-button
                            color="#fff"
                            shape="circle"
                            size="medium"
                            @click="chatClose"
                        >
                            <u-icon
                                class="mr-[10rpx]"
                                name="pause-circle"
                                :size="30"
                            />
                            停止
                        </u-button>
                    </view>
                    <view
                        class="flex flex-col justify-center items-center text-white mt-[20rpx] text-xs"
                    >
                        <view>
                            {{ statusToTextMap[chatStatus] }}
                        </view>
                    </view>
                    <view class="my-[20rpx]">
                        <scroll-view class="w-full whitespace-nowrap" scroll-x>
                            <view
                                class="menus bg-white px-[30rpx] rounded-full mr-[20rpx] py-[12rpx] inline-block"
                                v-for="(item, index) in chatMenus"
                                :key="index"
                                @click="sendLock(item.keyword)"
                            >
                                {{ item.keyword }}
                            </view>
                        </scroll-view>
                    </view>

                    <view class="send-area__content safe-area-inset-bottom">
                        <view class="flex-1 min-w-0 relative">
                            <u-input
                                v-model="userInput"
                                placeholder="请输入内容"
                                maxlength="-1"
                                :auto-height="true"
                                confirm-type="send"
                                :adjust-position="true"
                                :fixed="false"
                                adjust-keyboard-to="bottom"
                                @focus="handleFocus"
                            />
                        </view>
                        <view class="ml-[20rpx] mr-[-6rpx]">
                            <view>
                                <u-button
                                    type="primary"
                                    :custom-style="{
                                        width: '100rpx',
                                        height: '66rpx',
                                        margin: '0',
                                        borderRadius: '100px',
                                        background:
                                            'linear-gradient(90deg, #54C6EE 0%, #3C5EFD 100%)!important'
                                    }"
                                    size="mini"
                                    :disabled="
                                        [
                                            ChatStatus.THINKING,
                                            ChatStatus.PLAYING
                                        ].includes(chatStatus)
                                    "
                                    @click.stop="sendLock(userInput)"
                                >
                                    <image
                                        src="@/static/images/icon/icon_send.png"
                                        class="w-[50rpx] h-[50rpx]"
                                    />
                                </u-button>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="gradient-button z-10" @click="cleanChatLock">
                <image
                    src="@/static/images/icon/icon_clear.png"
                    class="w-[40rpx] h-[40rpx]"
                />
            </view>
            <dragon-button :size="120" xEdge="10" yEdge="100">
                <view
                    class="recorder-btn"
                    :class="{
                        'recorder-btn--stop': !isRecording && !isPlaying
                    }"
                    @click="changeRecorder"
                >
                    <canvas
                        v-if="hasVoice"
                        :style="{
                            width: `${canvasOptions.width}px`,
                            height: `${canvasOptions.height}px`
                        }"
                        :width="canvasOptions.width * canvasOptions.scale!"
                        :height="canvasOptions.height * canvasOptions.scale!"
                        :canvas-id="canvasOptions.id"
                    />
                    <u-icon
                        v-if="isRecording && !hasVoice"
                        name="mic"
                        :size="48"
                    />
                    <u-icon
                        v-else-if="isPlaying"
                        name="pause-circle"
                        :size="60"
                    />
                    <u-icon
                        v-else-if="!isRecording"
                        name="mic-off"
                        :size="48"
                    />
                </view>
            </dragon-button>
        </view>
        <view
            v-else
            class="h-screen w-screen flex flex-col items-center justify-center"
        >
            <u-empty text="该智能体暂未配置形象" mode="page"></u-empty>
        </view>
    </view>
    <Login v-model:show="showLogin" @confirm="login" />
</template>
<script lang="ts" setup>
import {
    robotChat,
    clearRobotChatRecord,
    getRobotChatRecord,
    getReleaseDetail,
    voiceTransfer,
    voiceGenerate
} from '@/api/robot'
import { useLockFn } from '@/hooks/useLockFn'
import { useUserStore } from '@/stores/user'

import { useRouter, useRoute } from 'uniapp-router-next'
import { computed, nextTick, onUnmounted, reactive } from 'vue'

import { ref, shallowRef } from 'vue'
import { RequestErrMsgEnum } from '@/enums/requestEnums'
import { useAudioPlay } from '@/hooks/useAudioPlay'
import { onLoad } from '@dcloudio/uni-app'
import {
    AudioGraphUserOptions,
    useRecorder,
    useRenderAudioGraph
} from '@/hooks/useRecorder'
import { useAudio } from '@/hooks/useAudio'
import Login from './components/login.vue'
import { AUTHORIZATION_KEY } from '@/enums/constantEnums'
import cache from '@/utils/cache'
import user_avatar from '@/static/images/user/default_avatar.png'
import UEmpty from '@/uni_modules/vk-uview-ui/components/u-empty/u-empty.vue'
const route = useRoute()
const userStore = useUserStore()
const contentRef = shallowRef()
const showRecorder = ref(false)
const chatList = ref<any[]>([])
const showLogin = ref(false)
const password = ref('')
const { key = '' } = route.query as { key: string }
const robotInfo = ref<any>({
    robot: {},
    digital: {}
})
const userInput = ref('')
const { isLock, lockFn: getRobotData } = useLockFn(async () => {
    robotInfo.value = await getReleaseDetail({
        apikey: key
    })
})

const chatMenus = computed(
    () => robotInfo.value.menus?.map((keyword: string) => ({ keyword })) || []
)
const checkNeedPwd = async () => {
    const pwd = cache.get(AUTHORIZATION_KEY) || {}
    password.value = pwd[key] || ''
    if (robotInfo.value.pwd && !password.value) {
        showLogin.value = true
        return Promise.reject()
    }
}
const login = async (data: any) => {
    let pwd = cache.get(AUTHORIZATION_KEY) || {}
    password.value = data.password
    pwd = Object.assign(pwd, {
        [key]: data.password
    })
    cache.set(AUTHORIZATION_KEY, pwd)
    init()
}

const logout = () => {
    let pwd = cache.get(AUTHORIZATION_KEY) || {}
    pwd = Object.assign(pwd, {
        [key]: ''
    })
    cache.set(AUTHORIZATION_KEY, pwd)
}

enum ChatStatus {
    INITIALING,
    //默认
    DEFAULT,
    //录音中
    RECORDING,
    // 正在思考中
    THINKING,
    PLAYING,
    //权限
    PERMISSION
}
const chatStatus = ref(ChatStatus.INITIALING)
const statusToTextMap = reactive({
    [ChatStatus.INITIALING]: '正在初始化对话...',
    [ChatStatus.DEFAULT]: '点击开始说话',
    [ChatStatus.RECORDING]: '我在听，您请说...',
    [ChatStatus.THINKING]: '稍等，让我想一想',
    [ChatStatus.PLAYING]: '正在回复中...',
    [ChatStatus.PERMISSION]: '用户拒绝了录音权限，请检查设备权限后重新进入程序'
})

const pagingRef = shallowRef()
let lastPlayId = 0
const queryList = async (pageNo: number, pageSize: number) => {
    try {
        const { lists = [], count } = await getRobotChatRecord(
            {
                share_apikey: key,
                identity: userStore.visitorId,
                page_size: pageSize / 2,
                page_no: pageNo
            },
            {
                password: password.value,
                authorization: key,
                identity: userStore.visitorId
            }
        )

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
        if (chatStatus.value == ChatStatus.THINKING) {
            const last = lists[0]
            if (last && last.id !== lastPlayId) {
                lastPlayId = last.id
                playRecord(lastPlayId)
            }
        }
    } catch (error) {
        if (error === '访问密码错误!') {
            logout()
            checkNeedPwd()
        }
        pagingRef.value?.complete(false)
    }
}

const { lockFn: cleanChatLock } = useLockFn(async () => {
    await checkNeedPwd()
    const modal = await uni.showModal({
        title: '温馨提示',
        content: '确定清空对话？'
    })
    if (modal.cancel) return
    chatClose()
    await clearRobotChatRecord(
        {},
        {
            password: password.value,
            authorization: key,
            identity: userStore.visitorId
        }
    )
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
const videoRef = shallowRef()
const changeChatStatus = (status: any) => {
    chatStatus.value = status
}

const chatContent = ref<any>({})
const newUserInput = ref('')
const { pauseAll: pauseAllVoice } = useAudioPlay()
const { lockFn: sendLock } = useLockFn(async (text: string, type = 'text') => {
    showRecorder.value = false
    await userStore.getFingerprint()
    await checkNeedPwd()
    if (isReceiving.value) return
    const inputValue = text || userInput.value
    if (!inputValue) return

    pagingRef.value.addChatRecordData({
        type: 1,
        content: inputValue
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
                question: inputValue,
                stream: true
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
                                        changeChatStatus(ChatStatus.DEFAULT)
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
                                            const data =
                                                choices[0]?.delta?.content
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
                    setTimeout(() => {
                        pagingRef.value?.reload()
                    }, 1000)
                }
            },
            {
                password: password.value,
                authorization: key,
                identity: userStore.visitorId
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

const handleFocus = async () => {
    await checkNeedPwd()
    scrollToBottom()
}

const idleReplyTimer = ref()
const isAutoOpen = ref(true)

const isAutoStop = ref(false)
const startTimer = ref(0)
const hasVoice = ref(false)
const recordTimer = ref<any>(0)
const canvasOptions = reactive<AudioGraphUserOptions>({
    id: 'audio-canvas',
    width: 60,
    height: 30,
    minHeight: 4,
    scale: 2
})
const { render, stopRender, draw } = useRenderAudioGraph(canvasOptions)
const { start, stop, isRecording, authorize, close, isOpen } = useRecorder({
    onstart() {
        changeChatStatus(ChatStatus.RECORDING)
        clearTimeout(idleReplyTimer.value)
        pause()
        hasVoice.value = false
        startTimer.value = Date.now()
    },
    async onstop(result) {
        stopRender()
        hasVoice.value = false
        if (!isAutoStop.value) {
            // chatStatus.value = ChatStatus.DEFAULT
            changeChatStatus(ChatStatus.DEFAULT)
            return
        }
        isAutoStop.value = false
        changeChatStatus(ChatStatus.THINKING)
        try {
            const res: any = await voiceTransfer(result.tempFilePath)
            if (!res.text) {
                if (isAutoOpen.value) {
                    startRecord()
                } else {
                    changeChatStatus(ChatStatus.DEFAULT)
                }
                return
            }
            sendLock(res.text, 'voice')
        } catch (error) {
            changeChatStatus(ChatStatus.DEFAULT)
        }
    },
    ondata(result) {
        const now = Date.now()
        if (hasVoice.value) {
            render(result)
        }
        // 过滤掉杂音
        if (result.powerLevel >= 10) {
            clearTimeout(recordTimer.value)
            chatStatus.value = ChatStatus.RECORDING
            hasVoice.value = true

            startTimer.value = now
            //有音频输入，延时1s停止录音
            recordTimer.value = setTimeout(() => {
                isAutoStop.value = true
                clearTimeout(idleReplyTimer.value)
                pause()
                stop()
            }, 2000)
        }
        // 5s内没有语音输入
        if (
            now - startTimer.value >=
            robotInfo.value.digital?.idle_time * 1000
        ) {
            if (!hasVoice.value) {
                playIdleReply()
                stop()
            }
        }
    }
})

const { play, pause, isPlaying } = useAudio({
    onstart() {
        chatStatus.value = ChatStatus.PLAYING
        if (isPlayIdleReply.value) {
            isPlayIdleReply.value = false
        }
    },
    onstop() {
        changeChatStatus(ChatStatus.RECORDING)
        if (!isAutoOpen.value) {
            changeChatStatus(ChatStatus.DEFAULT)
        } else {
            startRecord()
        }
    },
    onerror() {
        changeChatStatus(ChatStatus.DEFAULT)
    }
})

const playRecord = async (id: number) => {
    const url = await getFile({
        type: 2,
        record_id: id
    })
    play(url)
}

const startRecord = async () => {
    if (isRecording.value) {
        return
    }
    await authorize()
    start()
    return
}

const changeRecorder = async () => {
    if (chatStatus.value == ChatStatus.PLAYING) {
        pause()
        return
    }
    if (chatStatus.value == ChatStatus.THINKING) {
        return
    }
    if (isRecording.value) {
        isAutoOpen.value = false
        stop()
        changeChatStatus(ChatStatus.DEFAULT)
    } else {
        isAutoOpen.value = true
        startRecord()
    }
}

const getFile = async (params: any) => {
    try {
        const { url } = await voiceGenerate(params, {
            password: password.value,
            authorization: key,
            identity: userStore.visitorId
        })
        return url
    } catch (error) {
        changeChatStatus(ChatStatus.DEFAULT)
        return Promise.reject()
    }
}
const file = ref('')
const isPlayIdleReply = ref(false)
const playIdleReply = async () => {
    if (!robotInfo.value.is_digital || !robotInfo.value.digital_id) {
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
    pagingRef.value.addChatRecordData({
        type: 2,
        typing: false,
        content: robotInfo.value.digital.idle_reply,
        key
    })
    await nextTick()
    scrollToBottom()
    play(file.value)
}
let stayVideo: UniApp.VideoContext | null = null
let talkVideo: UniApp.VideoContext | null = null
let isConfirm = false
let isLoad = false
const loadVideo = async () => {
    isLoad = true
    if (isConfirm) {
        await authorize()
        startRecord()
    }
}

const init = async () => {
    await checkNeedPwd()
    pagingRef.value?.reload()
    isAutoOpen.value = true
    stayVideo = uni.createVideoContext('stay-video')
    talkVideo = uni.createVideoContext('talk-video')
    const { confirm } = await uni.showModal({
        title: '温馨提示',
        showCancel: false,
        content: '形象内容由AI生成，请合法使用形象'
    })
    if (confirm) {
        stayVideo?.play()
        talkVideo?.play()
        isConfirm = true
    }
    if (isLoad) {
        try {
            await authorize()
            startRecord()
        } catch (error) {
            if (error == '无法录音:用户拒绝了录音权限') {
                chatStatus.value = ChatStatus.PERMISSION
            }
            await authorize()
            // console.log('-----------', error)
        } finally {
            await authorize()
            startRecord()
        }
    }
}
onLoad(async () => {
    await getRobotData()
    await userStore.getFingerprint()
    init()
})

onUnmounted(() => {
    chatClose()
    pause()
    stop()
})
</script>

<style lang="scss" scoped>
page {
    height: 100%;
    overflow: hidden;
}

#stay-video,
#talk-video {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    left: 0;
    top: 0;
}

.send-area__content {
    border-radius: 100px;
    padding: 10rpx 20rpx;
    position: relative;
    display: flex;
    align-items: center;

    background-color: #fff;
    // :deep() {
    //     .u-input__textarea {
    //         --line-height: 40rpx;
    //         --line-num: 1;
    //         height: auto;
    //         min-height: var(--line-height) !important;
    //         max-height: calc(var(--line-height) * var(--line-num));
    //         font-size: 28rpx;
    //         box-sizing: border-box;
    //         padding: 0;
    //         line-height: var(--line-height);
    //         .uni-textarea-textarea {
    //             max-height: calc(var(--line-height) * var(--line-num));
    //             overflow-y: auto !important;
    //         }
    //     }
    // }
    .send-btn {
        width: 100%;
        position: absolute;
        right: 0rpx;
        bottom: 10rpx;
        z-index: 99;
        padding: 0 20rpx;
    }
}

.gradient-button {
    width: 80rpx;
    height: 80rpx;
    position: absolute;
    right: 10px;
    bottom: 200px;
    background: linear-gradient(90deg, #70c3ec 0%, #426df7 100%);
    box-shadow: 0px 3.11px 7.78px 0px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @apply text-white;
}

.recorder-btn {
    width: 120rpx;
    height: 120rpx;
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
