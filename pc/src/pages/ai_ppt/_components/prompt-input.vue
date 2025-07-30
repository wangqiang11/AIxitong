<template>
    <div class="h-full prompt-input">
        <ElScrollbar class="scroll-bar">
            <div class="max-w-[1200px] mx-auto">
                <div
                    class="flex flex-col justify-center items-center py-[120px]"
                >
                    <img
                        class="h-[68px] w-[688px]"
                        src="@/assets/image/ai_ppt_title.png"
                        alt=""
                    />
                    <div class="text-[20px] text-tx-regular mt-3">
                        输入主题描述，快速生成专属PPT
                    </div>
                    <div class="text-tx-secondary mt-2">
                        免费预览，满意再付费。PPT内容由AI生成，仅供参考
                    </div>
                    <div class="mt-[28px]">
                        <el-segmented
                            v-model="aiPPTStore.options.type"
                            :options="typeOptions"
                            :style="{
                                width: `${typeOptions.length * 90}px`,
                                '--el-border-radius-base': '10px',
                                '--el-segmented-color':
                                    'var(--el-text-color-primary)'
                            }"
                        >
                            <template #default="{ item }">
                                <el-tooltip
                                    effect="dark"
                                    :content="item.desc"
                                    :disabled="!item.desc"
                                    placement="top"
                                >
                                    <div class="py-[10px]">
                                        <div
                                            class="flex items-center justify-center"
                                        >
                                            <span
                                                :class="{
                                                    '!text-primary':
                                                        aiPPTStore.options
                                                            .type !== item.value
                                                }"
                                            >
                                                <Icon
                                                    size="15"
                                                    :name="item.icon"
                                                >
                                                </Icon>
                                            </span>

                                            <div class="ml-1">
                                                {{ item.label }}
                                            </div>
                                        </div>
                                    </div>
                                </el-tooltip>
                            </template>
                        </el-segmented>
                    </div>
                    <div class="mt-[30px]">
                        <div
                            class="bg-page rounded-[15px] overflow-hidden p-[10px] w-[560px]"
                        >
                            <div>
                                <el-input
                                    v-model="aiPPTStore.options.prompt"
                                    :autosize="{ minRows: 2, maxRows: 4 }"
                                    type="textarea"
                                    placeholder="简单输入一个标题即可生成PPT"
                                    resize="none"
                                    @keydown="handleInputEnter"
                                />
                            </div>
                            <div class="flex items-center">
                                <div class="mr-auto">
                                    <RouterLink to="/ai_ppt/history">
                                        <ElButton link>
                                            <template #icon>
                                                <Icon name="el-icon-Clock" />
                                            </template>
                                            历史记录
                                        </ElButton>
                                    </RouterLink>
                                </div>
                                <div>
                                    <el-button
                                        type="primary"
                                        :style="{
                                            padding: '8px'
                                        }"
                                        @click="aiPPTStore.genPPT()"
                                    >
                                        <template #icon>
                                            <Icon name="el-icon-Promotion" />
                                        </template>
                                        快速生成
<!--                                        <span class="text-xs ml-1">-->
<!--                                            <template-->
<!--                                                v-if="-->
<!--                                                    aiPPTStore.config.isVipFree-->
<!--                                                "-->
<!--                                            >-->
<!--                                                会员免费-->
<!--                                            </template>-->
<!--                                            <template-->
<!--                                                v-else-if="-->
<!--                                                    aiPPTStore.config.price > 0-->
<!--                                                "-->
<!--                                            >-->
<!--                                                -{{ aiPPTStore.config.price-->
<!--                                                }}{{ appStore.getTokenUnit }}-->
<!--                                            </template>-->
<!--                                        </span>-->
                                    </el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap mx-[-7px] mb-[-14px] mt-[30px]">
                        <div
                            class="flex max-w-full items-center mx-[7px] cursor-pointer hover:bg-fill-light mb-[14px] px-[15px] py-[10px] border border-br-light border-solid rounded-[12px]"
                            v-for="(item, index) in searchEx"
                            :key="index"
                            @click="clickItem(item)"
                        >
                            <div class="flex-1 line-clamp-1 text-tx-secondary">
                                {{ item }}
                            </div>
                            <span class="text-primary flex ml-[10px]">
                                <Icon name="el-icon-Right" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </ElScrollbar>
        <SelectTemplate
            v-model:visible="aiPPTStore.showTemplate"
            v-model:cover-id="aiPPTStore.options.cover_id"
            :prompt="aiPPTStore.options.prompt"
            @confirm="confirmTemplate"
        />
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { useAiPPTStore, useSearchEx } from '../aiPPT'

import SelectTemplate from './select-template.vue'
const aiPPTStore = useAiPPTStore()
const appStore = useAppStore()
const typeOptions = [
    {
        label: '基础',
        value: 1,
        icon: 'local-icon-cube',
        desc: '基于描述生成PPT'
    },
    {
        label: '增强',
        value: 2,
        icon: 'local-icon-light-bulb',
        desc: '基于描述及模板生成PPT'
    },
    {
        label: '深入',
        value: 3,
        icon: 'local-icon-bottle',
        desc: '基于大纲及模板生成PPT'
    }
]

const handleInputEnter = (e: any) => {
    if (e.shiftKey && e.keyCode === 13) {
        return
    }
    if (e.keyCode === 13) {
        aiPPTStore.genPPT()
        return e.preventDefault()
    }
}

const confirmTemplate = async () => {
    await aiPPTStore.genPPTSubmit(aiPPTStore.options)
    aiPPTStore.showTemplate = false
}

const { searchEx, getSearchEx } = useSearchEx()
const clickItem = (title: string) => {
    aiPPTStore.options.prompt = title
}

getSearchEx()
</script>

<style lang="scss" scoped>
.prompt-input {
    :deep() {
        .el-textarea__inner {
            box-shadow: none;
            --el-input-bg-color: transparent;
        }
    }
}
</style>
