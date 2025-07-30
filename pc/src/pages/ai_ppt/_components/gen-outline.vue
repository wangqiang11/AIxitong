<template>
    <div class="h-full flex flex-col">
        <div class="px-[15px] py-[15px]">
            <div class="flex items-center cursor-pointer">
                <div
                    class="flex bg-body p-[5px] text-bold rounded-[50%] text-primary shadow-light"
                    @click="back()"
                >
                    <Icon name="el-icon-Back" :size="18" />
                </div>
                <div class="text-xl flex-1 min-w-0 ml-[10px]">AIPPT</div>
            </div>
        </div>
        <div class="flex-1 min-h-0">
            <ElScrollbar ref="scrollbarRef">
                <div class="py-[20px] max-w-[650px] mx-auto">
                    <div
                        v-for="(item, index) in aiPPTStore.outlineLists"
                        :key="index"
                    >
                        <div class="flex justify-end mb-[30px]">
                            <div class="outline-text !rounded-tr-none">
                                {{ item.prompt }}
                            </div>
                        </div>
                        <div>
                            <div class="flex mb-[20px]" v-if="item.status >= 0">
                                <div
                                    class="outline-text !rounded-tl-none !bg-page !text-tx-primary"
                                >
                                    您的内容【{{
                                        item.prompt
                                    }}】大纲正在生成中...
                                </div>
                            </div>
                            <div class="flex mb-[20px]" v-if="item.status == 1">
                                <div
                                    class="outline-text !rounded-tl-none !bg-page !text-tx-primary"
                                >
                                    您的内容【{{
                                        item.prompt
                                    }}】大纲已生成，来看看吧
                                </div>
                            </div>
                            <div class="flex mb-[20px]" v-if="item.status == 2">
                                <div
                                    class="outline-text !rounded-tl-none !bg-page !text-tx-primary"
                                >
                                    您的内容【{{
                                        item.prompt
                                    }}】大纲生成失败了，请重试
                                </div>
                            </div>
                        </div>

                        <div
                            class="mb-[30px] flex flex-col bg-white p-4 shadow-lighter rounded-[15px] h-[600px]"
                        >
                            <div class="flex items-center justify-between">
                                <div class="font-bold">PPT大纲</div>
                                <div class="text-xs text-tx-secondary">
                                    由AI生成，仅供参考
                                </div>
                            </div>
                            <div
                                class="flex-1 my-4 min-h-0 border border-br-light border-solid rounded-[6px]"
                            >
                                <div class="p-4" v-if="item.status == 0">
                                    <el-skeleton animated :rows="12" />
                                </div>
                                <ElScrollbar v-else-if="item.status == 1">
                                    <div class="p-4">
                                        <div
                                            class="outline-item flex items-center"
                                        >
                                            <el-tag size="small">主题</el-tag>
                                            <div
                                                class="ml-[10px] flex-1 min-w-0"
                                            >
                                                <el-input
                                                    v-model="item.title"
                                                ></el-input>
                                            </div>
                                        </div>
                                        <div class="mt-4 flex">
                                            <el-tag
                                                size="small"
                                                class="mt-[6px]"
                                                >大纲</el-tag
                                            >
                                            <div
                                                class="flex-1 min-w-0 ml-[10px]"
                                            >
                                                <div
                                                    v-for="(
                                                        c, ci
                                                    ) in item.catalogs"
                                                    :key="ci"
                                                    class="outline-item mb-[5px]"
                                                >
                                                    <div
                                                        class="flex items-center mb-[5px]"
                                                    >
                                                        <span class="mr-1"
                                                            >•</span
                                                        >
                                                        <el-input
                                                            v-model="c.catalog"
                                                        ></el-input>
                                                    </div>
                                                    <div class="ml-[15px]">
                                                        <div
                                                            v-for="(
                                                                s, si
                                                            ) in c.sub_catalog"
                                                            :key="si"
                                                            class="flex items-center mb-[5px]"
                                                        >
                                                            <span class="mr-1"
                                                                >•</span
                                                            >
                                                            <el-input
                                                                v-model="
                                                                    c
                                                                        .sub_catalog[
                                                                        si
                                                                    ]
                                                                "
                                                            ></el-input>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ElScrollbar>
                                <div
                                    v-else
                                    class="p-4 h-full flex text-tx-secondary items-center justify-center"
                                >
                                    生成失败，请点击下方按钮重新生成
                                </div>
                            </div>
                            <div class="flex items-center">
                                <ElButton
                                    link
                                    @click="regenerate"
                                    v-if="item.status >= 1"
                                >
                                    <template #icon>
                                        <Icon
                                            name="el-icon-RefreshRight"
                                            :size="16"
                                        />
                                    </template>
                                    重新生成
                                </ElButton>
                                <div class="ml-auto w-1/2">
                                    <ElButton
                                        size="large"
                                        type="primary"
                                        class="w-full"
                                        v-if="item.status == 1"
                                        @click="showPPTTemplate(item)"
                                    >
                                        选择PPT模板
                                    </ElButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ElScrollbar>
        </div>
        <SelectTemplate
            v-model:visible="aiPPTStore.showTemplate"
            v-model:cover-id="aiPPTStore.options.cover_id"
            :prompt="aiPPTStore.options.prompt"
            @confirm="confirmTemplate"
        />
    </div>
</template>
<script setup lang="ts">
import { useAiPPTStore } from '../aiPPT'

import SelectTemplate from './select-template.vue'
const aiPPTStore = useAiPPTStore()
const scrollbarRef = shallowRef()
const back = () => {
    aiPPTStore.showOutline = false
}
const scrollToBottom = async () => {
    const scrollHeight = scrollbarRef.value?.wrapRef?.scrollHeight!
    scrollbarRef.value?.setScrollTop(scrollHeight)
}
const regenerate = async () => {
    aiPPTStore.genOutline()
    await nextTick()
    scrollToBottom()
}
let currentOutline: any = {}
const showPPTTemplate = (item: any) => {
    currentOutline = item
    aiPPTStore.showTemplate = true
}
const confirmTemplate = async () => {
    const { title, catalogs } = currentOutline
    await aiPPTStore.genPPTSubmit({ ...aiPPTStore.options, title, catalogs })
    aiPPTStore.showTemplate = false
    aiPPTStore.showOutline = false
}

onUnmounted(() => {
    aiPPTStore.isGenningOutline = false
})
</script>

<style lang="scss" scoped>
.outline-text {
    @apply min-w-[70px] bg-primary text-white py-[11px] px-[15px] rounded-[12px];
}

.outline-item {
    :deep(.el-input__wrapper) {
        box-shadow: none;
        &.is-focus,
        &:hover {
            box-shadow: 0 0 0 1px var(--el-input-focus-border-color) inset;
        }
    }
}
</style>
