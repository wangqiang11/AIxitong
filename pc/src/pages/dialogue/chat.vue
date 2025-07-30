<template>
    <div>
        <NuxtLayout name="default">
            <div class="h-full flex">
                <div class="p-[16px]">
                    <TheSession
                        v-model="dialogueStore.sessionId"
                        :data="dialogueStore.sessionLists"
                        @add="dialogueStore.sessionAdd"
                        @edit="dialogueStore.sessionEdit"
                        @delete="dialogueStore.sessionDelete"
                        @clear="dialogueStore.sessionClear"
                        @click-item="dialogueStore.setSessionSelect"
                    >
                        <template #top>
                            <div
                                class="flex items-center justify-around text-xl font-medium px-[16px] pt-[16px] cursor-pointer"
                            >
                                <div
                                    class="pb-[6px] text-primary border-solid border-b-[2px] border-primary"
                                >
                                    问答助手
                                </div>
                                <NuxtLink to="/dialogue/role">
                                    <div class="pb-[8px]">角色助手</div>
                                </NuxtLink>
                            </div>
                        </template>
                    </TheSession>
                </div>
                <div class="flex-1 min-w-0 pr-4 py-4">
                    <el-watermark
                        class="h-full"
                        :content="appStore.getChatConfig.watermark"
                        :font="{
                            color: isDark
                                ? 'rgba(256,256,256,0.08)'
                                : 'rgba(0,0,0,0.06)',
                            fontSize: 12
                        }"
                    >
                        <div class="h-full flex flex-col bg-body rounded-[12px]">
                            <div class="flex-1 min-h-0">
                                <ElScrollbar ref="scrollbarRef">
                                    <ClientOnly>
                                        <div
                                            v-if="chatList.length"
                                            ref="innerRef"
                                            class="px-8"
                                        >
                                            <div
                                                v-for="(
                                                    item, index
                                                ) in chatList"
                                                :key="item.id + '' + index"
                                                class="mt-4 sm:pb-[20px]"
                                            >
                                                <TheChatMsgItem
                                                    v-if="item.type == 1"
                                                    type="right"
                                                    :avatar="
                                                        userStore.userInfo
                                                            .avatar
                                                    "
                                                    color="white"
                                                >
                                                    <TheChatMsgContent
                                                        :content="item.content"
                                                        :files-plugin="item.files_plugin"
                                                    />
                                                    <template #actions>
                                                        <div class="my-[5px]">
                                                            <ElButton
                                                                link
                                                                type="info"
                                                                @click="
                                                                    copy(
                                                                        item.content
                                                                    )
                                                                "
                                                            >
                                                                <template #icon>
                                                                    <Icon
                                                                        name="el-icon-CopyDocument"
                                                                    />
                                                                </template>
                                                                复制
                                                            </ElButton>
                                                        </div>
                                                    </template>
                                                </TheChatMsgItem>
                                                <TheChatMsgItem
                                                    v-if="item.type == 2"
                                                    type="left"
                                                    :avatar="
                                                        appStore.getChatConfig
                                                            .chat_logo
                                                    "
                                                    :time="item.create_time"
                                                    bg="var(--el-bg-color-page)"
                                                    :modelName="item.model"
                                                >
                                                    <el-collapse
                                                        :model-value="'the-chat-msg-collapse'"
                                                        v-if="item.reasoning"
                                                        class="mb-2 the-chat-msg-collapse"
                                                    >
                                                        <el-collapse-item title="深度思考" name="the-chat-msg-collapse">
                                                            <TheChatMsgContent
                                                                :content="item.reasoning"
                                                                class="text-tx-secondary px-3 border-l-[3px] border-br-light"
                                                            />
                                                        </el-collapse-item>
                                                    </el-collapse>
                                                    <template
                                                        v-for="(
                                                            text, i
                                                        ) in item.content"
                                                        :key="i"
                                                    >
                                                        <TheChatMsgContent
                                                            :content="text"
                                                            type="html"
                                                            :typing="
                                                                item.typing
                                                            "
                                                            :line-numbers="
                                                                !appStore.isMobile
                                                            "
                                                            :show-rewrite="
                                                                index ===
                                                                chatList.length -
                                                                    1
                                                            "
                                                            show-copy
                                                            :show-voice="
                                                                appStore.getIsVoiceOpen
                                                            "
                                                            class="mb-[15px] last-of-type:mb-0"
                                                            :class="{
                                                                'pt-[15px] border-t border-solid border-br-light':
                                                                    i > 0
                                                            }"
                                                            show-poster
                                                            :record-list="
                                                                chatList
                                                            "
                                                            :index="i"
                                                            :record-id="item.id"
                                                            @rewrite="rewrite"
                                                        />
                                                    </template>

                                                    <template #outer_actions>
                                                        <div v-if="index === chatList.length - 1 && !isReceiving" class="flex flex-col" style="margin-left: 52px">
                                                            <div
                                                                v-for="(text, textIndex) in (relatedIssuesArr.length ? relatedIssuesArr : item.correlation)"
                                                                :key="textIndex"
                                                                class="inline-flex items-center rounded-[12px] bg-page cursor-pointer mt-[10px] hover:bg-primary-light-9"
                                                                style="padding: 8px 12px; width: fit-content;"
                                                                @click.stop="chat(text, 'input')"
                                                            >
                                                                <span class="mr-2 text-tx-primary">{{ text }}</span>
                                                                <Icon name="el-icon-Right" color="#999" size="20" />
                                                            </div>
                                                        </div>
                                                    </template>
                                                </TheChatMsgItem>
                                            </div>
                                        </div>
                                        <div
                                            v-else
                                            class="max-w-[1200px] mx-auto"
                                        >
                                            <SampleLists @click-item="chat($event, 'sample')" />
                                        </div>
                                    </ClientOnly>
                                </ElScrollbar>
                            </div>
                            <div class="mb-[10px] px-[30px]">
                                <TheChatAction
                                    ref="chatActionRef"
                                    :loading="isReceiving"
                                    v-model:file-plugin="filePlugin.data"
                                    @enter="chat"
                                    @clear="clearChatRecord"
                                    @pause="sseInstance?.abort()"
                                    @focus="inputFocus"
                                    :show-continue="chatList.length"
                                    :show-file-upload="filePlugin.show"
                                    @continue="chat('继续', 'btn')"
                                >
                                    <template #btn>
                                        <div class="flex gap-3 mr-3">
                                            <ModelPicker
                                                class="min-w-[280px] select-class"
                                                v-model:sub_id="model"
                                                @update:model-config="changeModel"
                                            />
                                            <!-- 会话文件上传 -->
                                            <template v-if="SessionFile.isSupportFile">
                                                <UploadButton
													type="file"
													:is-parse-content="true"
													@on-success="SessionFile.addFile"
												/>
                                            </template>
                                        </div>
                                    </template>

                                    <template #file-list v-if="SessionFile.files.value.length">
                                        <!-- 会话文件列表 -->
										<DelWrap
											v-for="file in SessionFile.files.value"
											:key="file.id"
											@close="SessionFile.removeFile(file)"
										>
											<div class="flex items-center h-12 px-3 bg-page rounded-lg max-w-xs line-clamp-1 overflow-hidden">{{ file.name }}</div>
										</DelWrap>
                                    </template>
                                </TheChatAction>
                            </div>
                        </div>
                    </el-watermark>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useElementSize, watchThrottled, useDark } from '@vueuse/core'
import type { ElScrollbar } from 'element-plus'
import SampleLists from './_components/sample-lists.vue'
import UploadButton from '~/components/the-chat-action/upload-button.vue'
import { chatSendText, cleanChatRecord, getChatRecord } from '~/api/chat'
import type { Sse } from '~/utils/http/sse'
import { useAppStore } from '~/stores/app'
import { useUserStore } from '~/stores/user'
import { useDialogueStore } from '@/stores/dialogue'
import { useSessionFiles } from "./use-session-files";

const appStore = useAppStore()
const userStore = useUserStore()
const chatActionRef = shallowRef()
const dialogueStore = useDialogueStore()
const router = useRouter()
const model = ref('')
const { copy } = useCopy()

const SessionFile = useSessionFiles();

await useAsyncData(() => dialogueStore.getSessionLists(), {
    lazy: true
})
const isDark = useDark()
const { data: chatList, refresh: getChatList } = await useAsyncData(
    () =>
        getChatRecord({
            type: 1,
            category_id: dialogueStore.sessionId,
            page_type: 0
        }),

    {
        transform(data) {
            return data.lists || []
        },
        default() {
            return []
        },
        lazy: true
    }
)

if (appStore.getChatConfig?.is_reopen) {
    dialogueStore.sessionAdd()
    appStore.getChatConfig.is_reopen = 0
}

const clearChatRecord = async () => {
    if (!userStore.isLogin) return userStore.toggleShowLogin()
    if (!dialogueStore.sessionId) return
    await feedback.confirm('确定清空记录？')
    await cleanChatRecord({
        category_id: dialogueStore.sessionId,
        type: 1
    })
    getChatList()
}

const cacheLastId = ref<number>(-1)
//重写
const { lockFn: rewrite } = useLockFn(async () => {
    const last = chatList.value[chatList.value.length - 1]
    const userInput = chatList.value.find(({ id }) => id === last.id)

    if (userInput) {
        cacheLastId.value = last.id
        // eslint-disable-next-line vue/no-mutating-props
        chatList.value.splice(chatList.value.length - 2, 2)
        chat(userInput.content)
    }
})

const filePlugin = reactive({
    show: false,
    data: {
        url: '',
        name: '',
        type: '10'
    }
})

const changeModel = (value: any) => {
    filePlugin.show = !!value.support_image
    if (!filePlugin.show) filePlugin.data.url = ''
}

const inputFocus = () => {
    if (!userStore.isLogin) {
        chatActionRef.value?.blur()
        return userStore.toggleShowLogin()
    }
    scrollToBottom()
}
let sseInstance: Sse | null = null
const isReceiving = ref(false)
let isSessionAdd = false
const relatedIssuesArr = ref<string[]>([])

const chat = async (value: string, type = 'input') => {
    if (!userStore.isLogin) return userStore.toggleShowLogin()
    if (!value) return feedback.msgError('请输入问题')
    if (isReceiving.value) return
    const key = Date.now()
    relatedIssuesArr.value = []
    isReceiving.value = true
	const processedFiles = SessionFile.files.value.map(item => ({
		name: item.name,
		type: "30",
		url: item.url
	}));

	if (filePlugin.data.url) {
		processedFiles.push({ ...filePlugin.data });
	}

    chatList.value.push({
        type: 1,
        content: value,
        files_plugin: processedFiles
    })
    chatList.value.push({
        type: 2,
        typing: true,
        content: [''],
        reasoning: '',
        key
    })
    chatActionRef.value?.setInputValue()
    const currentChat = chatList.value.find((item: any) => item.key === key)
    if (!dialogueStore.sessionId) {
        isSessionAdd = true
        await dialogueStore.sessionAdd()
        isSessionAdd = false
    }
    sseInstance = chatSendText({
        type: 1,
        other_id: dialogueStore.sessionId,
        question: value,
        model: model.value,
        // file: filePlugin.data.url,
        annex: filePlugin.data.url ? [{
			type: filePlugin.data.type,
			name: filePlugin.data.name,
			url: filePlugin.data.url
		}]: [],
		files: SessionFile.files.value.map((item: any) => ({ ...item, type: "30" }))
    })

    sseInstance.addEventListener('reasoning', ({ data: dataJson }: any) => {
        const { data, index } = dataJson
        if (!currentChat.reasoning) {
            currentChat.reasoning = ''
        }
        currentChat.reasoning += data
    })

    sseInstance.addEventListener('chat', ({ data: dataJson }: any) => {
        const { data, index } = dataJson
        if (!currentChat.content[index]) {
            currentChat.content[index] = ''
        }
        currentChat.content[index] += data
    })
    sseInstance.addEventListener('finish', ({ data: dataJson }: any) => {
        const { data, index } = dataJson
        if (data) {
            currentChat.content[index] += data
        }
        filePlugin.data.url = ''

        // 清理上个消息文件
        // SessionFile.clear();
    })
    sseInstance.addEventListener('question', ({ data: dataJson }: any) => {
        relatedIssuesArr.value = JSON.parse(dataJson.data)
    })


    sseInstance.addEventListener('close', async () => {
        // 重新对话成功才删除记录
        if (cacheLastId.value !== -1 && currentChat.content[0].length) {
            await cleanChatRecord({
                type: 1,
                id: cacheLastId.value
            })
            cacheLastId.value = -1
        }
        await userStore.getUser()
        if (dialogueStore.getCurrentSession.name === '新的会话') {
            await dialogueStore.sessionEdit({
                id: dialogueStore.sessionId,
                name: value
            })
        }
        isReceiving.value = false
        currentChat.typing = false
        setTimeout(async () => {
            await getChatList()
            await nextTick()
            scrollToBottom()
        }, 1000)
    })
    sseInstance.addEventListener('error', async (ev) => {
        type === 'input' && chatActionRef.value?.setInputValue(value)
        if (ev.data?.code === 1100) {
            if (!appStore.getIsShowRecharge) {
                feedback.msgError(
                    `${appStore.getTokenUnit}数量已用完。请联系客服增加`
                )
            } else {
                await feedback.confirm(
                    `${appStore.getTokenUnit}数量已用完，请前往充值`
                )
                router.push('/user/recharge')
            }
            return
        }
        if (ev.errorType === 'connectError') {
            feedback.msgError('请求失败，请重试')
        }
        if (['connectError', 'responseError'].includes(ev.errorType!)) {
            chatList.value.splice(chatList.value.length - 2, 2)
        }
        currentChat.typing = false
        setTimeout(() => {
            isReceiving.value = false
        }, 200)
    })
}
const scrollbarRef = shallowRef<InstanceType<typeof ElScrollbar>>()
const innerRef = ref<HTMLDivElement>()
const scrollToBottom = async () => {
    const scrollHeight = scrollbarRef.value?.wrapRef?.scrollHeight!
    scrollbarRef.value?.setScrollTop(scrollHeight)
}
const { height } = useElementSize(innerRef)
watchThrottled(
    height,
    () => {
        isReceiving.value && scrollToBottom()
    },
    { immediate: true }
)

const removeSse = () => {
    sseInstance?.removeEventListener('chat')
    sseInstance?.removeEventListener('close')
    sseInstance?.removeEventListener('error')
    sseInstance?.removeEventListener('finish')
    sseInstance?.abort()
    isReceiving.value = false
    relatedIssuesArr.value = []
}

watch(
    () => dialogueStore.sessionId,
    async (newValue, oldValue) => {
        if (!isSessionAdd && newValue != oldValue) {
            removeSse()
            await getChatList()
            scrollToBottom()
        }
    }
)

onMounted(async () => {
    await nextTick()
    if (chatList.value.length) {
        scrollToBottom()
    }
})

onUnmounted(() => {
    removeSse()
})

definePageMeta({
    layout: false,
    hasPanel: true,
    hiddenFooter: true
})
</script>

<style lang="scss" scoped>
.select-class :deep(.select-input) {
    border-radius: 8px;
}
</style>
