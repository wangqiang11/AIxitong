<template>
    <div>
        <NuxtLayout name="default">
            <div class="h-full p-4 flex ppt-history">
                <div
                    class="h-full flex flex-col rounded-[15px] bg-body w-[350px] mr-4"
                >
                    <div class="px-[15px] py-[15px]">
                        <div class="flex items-center cursor-pointer">
                            <div
                                class="flex bg-body p-[5px] text-bold rounded-[50%] text-primary shadow-light"
                                @click="$router.back()"
                            >
                                <Icon name="el-icon-Back" :size="18" />
                            </div>
                            <div class="text-xl flex-1 min-w-0 ml-[10px]">
                                PPT
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 min-h-0">
                        <ElScrollbar ref="scrollBarRef">
                            <div class="px-4 pt-1">
                                <div
                                    ref="itemsRef"
                                    v-for="(item, index) in pptInfo.preview"
                                    :key="index"
                                    class="mb-4 flex relative cursor-pointer outline-4 outline outline-[transparent] rounded-[10px] overflow-hidden"
                                    :class="{
                                        '!outline-primary':
                                            currentIndex === index
                                    }"
                                    @click="currentIndex = index"
                                >
                                    <ElImage class="w-full" :src="item" />
                                    <div
                                        class="absolute right-[10px] top-[10px] w-[24px] h-[24px] text-center leading-[24px] text-[#333] bg-[rgba(255,255,255,0.6)] text-xs font-bold rounded-[50%]"
                                    >
                                        {{ index + 1 }}
                                    </div>
                                </div>
                            </div>
                        </ElScrollbar>
                    </div>
                </div>
                <div
                    class="flex-1 h-full flex flex-col rounded-[15px] ppt-preview bg-body"
                    v-if="pptInfo.preview.length"
                >
                    <div class="p-4 flex items-center">
                        <span class="font-bold">{{ pptInfo.title }}</span>
                        <div class="ml-auto flex items-center">
                            <ElButton
                                @click="jump(-1)"
                                link
                                :disabled="jumpIndex === 1"
                            >
                                <Icon name="el-icon-ArrowLeftBold" :size="16" />
                            </ElButton>

                            <span class="mx-2">
                                <el-input-number
                                    v-model="jumpIndex"
                                    :controls="false"
                                    :min="1"
                                    :max="pptInfo.preview.length"
                                    class="!w-[32px]"
                                />
                            </span>
                            <span class="mx-2"> /</span>
                            <span class="mx-2">
                                {{ pptInfo.preview.length }}
                            </span>
                            <ElButton
                                @click="jump(1)"
                                link
                                :disabled="jumpIndex === pptInfo.preview.length"
                            >
                                <Icon
                                    name="el-icon-ArrowRightBold"
                                    :size="16"
                                />
                            </ElButton>
                        </div>
                    </div>
                    <div class="flex-1 min-h-0">
                        <ElScrollbar>
                            <div
                                class="p-4 max-w-[1200px] mx-auto min-h-full flex justify-center items-center"
                            >
                                <ElImage
                                    :src="pptInfo.preview?.[currentIndex]"
                                />
                            </div>
                        </ElScrollbar>
                    </div>
                    <div class="flex items-center justify-center pb-4">
                        <ElButton
                            size="large"
                            type="primary"
                            @click="downloadPPTSubmit"
                        >
                            导出为PPTX
                            {{
                                pptInfo.pay_status
                                    ? ''
                                    : aiPPTStore.config.isVipFree
                                    ? '(会员免费)'
                                    : aiPPTStore.config.price > 0
                                    ? '-' +
                                      aiPPTStore.config.price +
                                      appStore.getTokenUnit
                                    : ''
                            }}
                        </ElButton>
                    </div>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import { downloadPPT, getPPTDetail } from "@/api/ai_ppt";
import { useAiPPTStore } from './aiPPT'
import { useAppStore } from '~/stores/app'

const route = useRoute()
const appStore = useAppStore()
const aiPPTStore = useAiPPTStore()
const pptInfo = ref<any>({
    preview: []
})
const scrollBarRef = shallowRef()
const itemsRef = shallowRef<HTMLDivElement[]>([])
const currentIndex = ref(0)
const jumpIndex = computed({
    get() {
        return currentIndex.value + 1
    },
    set(value) {
        currentIndex.value = value - 1
    }
})

watch(currentIndex, (index) => {
    if (!itemsRef.value.length) return
    const item = itemsRef.value[index]
    const itemRect = item.getBoundingClientRect()
    const scrollRect = scrollBarRef.value.wrapRef.getBoundingClientRect()
    if (itemRect.top < scrollRect.top) {
        scrollBarRef.value!.setScrollTop(item.offsetTop - 4)
    }
    if (itemRect.bottom > scrollRect.bottom) {
        scrollBarRef.value!.setScrollTop(
            item.offsetTop - scrollRect.height + itemRect.height + 4
        )
    }
})

const { lockFn: downloadPPTSubmit } = useLockFn(async () => {
    const { file_url } = await downloadPPT({ id: route.query.id })
    const a = document.createElement('a')
    a.href = file_url
    a.download = `${pptInfo.value.title}.pptx`
    a.click()
})

const jump = (num: number) => {
    jumpIndex.value += num
}
const getPPTInfo = async () => {
    const [first] = await getPPTDetail({
        id: route.query.id
    })
    if (first && first.id) {
        pptInfo.value = first
    }
}

getPPTInfo()
definePageMeta({
    layout: false,
    showLogo: true,
    hiddenFooter: true
})
</script>
<style lang="scss" scoped>
.ppt-preview {
    :deep(.el-scrollbar__view) {
        height: 100%;
    }

    :deep(.el-input-number) {
        .el-input__wrapper {
            padding: 0 6px;
        }
    }
}
</style>