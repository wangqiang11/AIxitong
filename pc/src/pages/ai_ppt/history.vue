<template>
    <div>
        <NuxtLayout name="default">
            <div class="h-full p-4">
                <div
                    class="bg-body h-full flex-1 rounded-[12px] p-4 flex flex-col gap-4 relative"
                >
                    <div class="sticky top-0">
                        <div
                            class="border-b border-b-[#eff0f2] dark:border-[#333333] pb-4 text-2xl font-medium"
                        >
                            生成记录
                            <span class="text-xs ml-2 text-error">免费预览，满意再付费。（点击下载按钮即扣费）</span>
                        </div>
                        <div class="mt-4" style="--el-border-radius-base: 12px">
                            <el-segmented
                                class="task-type !bg-[transparent]"
                                v-model="taskStatus"
                                :options="taskStatusOptions"
                                @change="taskStatusChange"
                            />
                        </div>
                    </div>
                    <el-scrollbar
                        class="ppt-result flex-1"
                        ref="scrollBarRef"
                        v-loading="pager.loading"
                    >
                        <div>
                            <div
                                class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4"
                            >
                                <RouterLink
                                    to="/ai_ppt"
                                    class="rounded-[12px] min-h-[300px] p-4 flex flex-col justify-center items-center gap-2 border border-[#eff0f2] dark:border-[#333333]"
                                >
                                    <Icon name="el-icon-Plus" :size="32" />
                                    <div class="text-xl font-bold my-[12px]">
                                        新建PPT
                                    </div>
                                    <div class="text-tx-secondary">
                                        点击简单输入一个标题即可生成PPT
                                    </div>
                                </RouterLink>
                                <div
                                    v-for="(item, index) in pager.lists"
                                    :key="item.id"
                                    class="rounded-[12px] p-4 flex flex-col gap-2 border border-[#eff0f2] dark:border-[#333333]"
                                >
                                    <div class="flex justify-between">
                                        <el-tag
                                            :type="statusMap[item.status].type"
                                            effect="light"
                                        >
                                            {{ statusMap[item.status].label }}
                                        </el-tag>
                                        <div
                                            v-if="
                                                item.status !== 1 ||
                                                item.status === 0
                                            "
                                            class="flex items-center"
                                        >
                                            <template v-if="item.status === 2">
                                                <el-tooltip
                                                    effect="dark"
                                                    :content="`下载${item.pay_status ? '' : aiPPTStore.config.isVipFree ? '(会员免费)' : aiPPTStore.config.price > 0 ? '-' + aiPPTStore.config.price + appStore.getTokenUnit : ''}`"
                                                    placement="bottom"
                                                >
                                                    <div
                                                        @click="
                                                            downloadPPTSubmit(item)
                                                        "
                                                    >
                                                        <Icon
                                                            class="cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content"
                                                            name="el-icon-Download"
                                                            size="18"
                                                            color="#556477"
                                                        />
                                                    </div>
                                                </el-tooltip>
                                            </template>
                                            <el-tooltip
                                                effect="dark"
                                                content="重新生成"
                                                placement="bottom"
                                            >
                                                <div @click="regenerate(item)">
                                                    <Icon
                                                        class="cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content"
                                                        name="el-icon-RefreshRight"
                                                        size="18"
                                                        color="#556477"
                                                    />
                                                </div>
                                            </el-tooltip>
                                            <el-tooltip
                                                effect="dark"
                                                content="删除"
                                                placement="bottom"
                                            >
                                                <div
                                                    @click="
                                                        deleteHandle(item.id)
                                                    "
                                                >
                                                    <Icon
                                                        class="cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content"
                                                        name="el-icon-Delete"
                                                        size="18"
                                                        color="#556477"
                                                    />
                                                </div>
                                            </el-tooltip>
                                        </div>
                                    </div>

                                    <div class="relative flex-1">
                                        <RouterLink
                                            :to="{
                                                path: '/ai_ppt/detail',
                                                query: {
                                                    id: item.id
                                                }
                                            }"
                                            class="w-full pb-[56%] block h-0 cursor-pointer"
                                            v-if="item.status === 2"
                                        >
                                            <ElImage
                                                class="rounded absolute inset-0"
                                                :src="item.preview?.[0]"
                                            />
                                        </RouterLink>
                                        <div
                                            v-if="item.status === 3"
                                            class="w-full pb-[56%]"
                                        >
                                            <div
                                                class="w-full h-full px-4 flex flex-col justify-center items-center absolute left-0 top-0"
                                            >
                                                <img
                                                    class="w-[200px] mb-4"
                                                    :src="drawError"
                                                    alt="生成失败"
                                                />
                                                <div class="my-[10px]">
                                                    生成失败
                                                </div>
                                                <div
                                                    class="text-xs text-[#1e2f44] dark:text-white line-clamp-2 w-full break-all text-center"
                                                >
                                                    错误信息：{{
                                                        item.fail_reason
                                                    }}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="ppt-loading w-full h-0 rounded pb-[56%]"
                                            v-if="
                                                item.status === 0 ||
                                                item.status === 1
                                            "
                                        >
                                            <div
                                                class="absolute inset-0 flex flex-col justify-center"
                                            >
                                                <el-skeleton
                                                    :rows="4"
                                                    animated
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <el-popover
                                        placement="bottom"
                                        title="提示词"
                                        :show-arrow="false"
                                        transition="custom-popover"
                                        width="300px"
                                        trigger="hover"
                                        :content="item.prompt"
                                    >
                                        <template #reference>
                                            <div class="w-full box-border">
                                                <div class="line-clamp-1">
                                                    {{ item.prompt }}
                                                </div>
                                            </div>
                                        </template>
                                    </el-popover>

                                    <div
                                        class="flex justify-between items-center"
                                    >
                                        <span class="text-[#8794A3]">
                                            {{ item.create_time }}
                                        </span>
                                        <el-tag>AI PPT</el-tag>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-scrollbar>
                    <div class="flex justify-center">
                        <pagination v-model="pager" @change="getLists()" />
                    </div>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import drawError from '@/assets/image/draw/error.png'
import { delPPT, getPPTLists, downloadPPT } from '@/api/ai_ppt'
import { useAiPPTStore } from './aiPPT'
import { useAppStore } from '~/stores/app'
const appStore = useAppStore()
const aiPPTStore = useAiPPTStore()
const statusMap: Record<
    number,
    {
        label: string
        type: 'success' | 'warning' | 'danger'
    }
> = {
    1: {
        label: '生成中',
        type: 'warning'
    },
    3: {
        label: '生成失败',
        type: 'danger'
    },
    2: {
        label: '生成成功',
        type: 'success'
    }
}
const taskStatus = ref<number>(-1)
const taskStatusOptions = [
    {
        label: '全部',
        value: -1
    },
    {
        label: '生成中',
        value: 1
    },
    {
        label: '生成成功',
        value: 2
    },
    {
        label: '生成失败',
        value: 3
    }
]

const taskStatusChange = async (e: number) => {
    taskStatus.value = e
    await resetPage()
    checkHasGenerating()
}

const { pager, getLists, resetPage } = usePaging({
    fetchFun: getPPTLists,
    params: reactive({
        status: taskStatus
    }),
    afterFetch() {
        checkHasGenerating()
    }
})

const regenerate = async (item: any) => {
    await feedback.confirm('确定重新生成？')
    const { type, cover_id, title, catalog, prompt } = item
    const params = {
        type,
        prompt,
        cover_id,
        title,
        catalogs: JSON.parse(catalog || '[]')
    }
    await aiPPTStore.genPPTSubmit(params)
    taskStatus.value = -1
    resetPage()
}
const timer = shallowRef()

const checkHasGenerating = async () => {
    clearTimeout(timer.value)
    const ids = pager.lists
        .filter((item) => item.status === 1 || item.status === 0)
        .map((item) => item.id)
    if (ids.length > 0) {
        timer.value = setTimeout(() => {
            resetPage()
        }, 6000)
    }
}

const { lockFn: downloadPPTSubmit } = useLockFn(async (item: any) => {
    const { file_url } = await downloadPPT({ id: item.id })
    const a = document.createElement('a')
    a.href = file_url
    a.download = `${item.title}.pptx`
    a.click()
})

const deleteHandle = async (id: number) => {
    await feedback.confirm('确定删除？')
    await delPPT({ id })
    ElMessage.success('删除成功')
    getLists()
}

onBeforeMount(async () => {
    await getLists()
})

onUnmounted(() => {
    clearTimeout(timer.value)
})

definePageMeta({
    layout: false,
    showLogo: true,
    hiddenFooter: true,
    auth: true
})
</script>

<style lang="scss" scoped>
.task-type {
    :deep(.el-segmented__group) {
        gap: 10px;
        .el-segmented__item {
            padding: 0px 20px;
            height: 35px;
            @apply shadow-[0px_2px_6px_0px_#ebeefd] dark:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.2)];
        }
    }
}

.ppt-result {
    :deep(.el-loading-mask) {
        border-radius: 4px;
        z-index: 2 !important;
    }
    :deep(.el-scrollbar__view) {
        height: 100%;
    }
}
.ppt-loading {
    :deep(.el-loading-mask) {
        background-color: var(--el-bg-color-page) !important;
    }
}
</style>
