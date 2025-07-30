<template>
    <view
        class="prompt-input h-full px-[20rpx]"
        :style="{
            background: `url(${config.baseUrl}resource/image/api/default/ai_search_bg.png) no-repeat`
        }"
    >

        <view
            class="flex flex-col text-center pt-[180rpx] pb-[50rpx] text-[50rpx] title font-bold relative"
        >
            <image
                class="w-[406rpx] mx-auto"
                mode="widthFix"
                src="@/packages/static/images/ai_ppt.png"
            />
            <view class="absolute opacity-0">AI一键生成PPT</view>
            <view class="absolute opacity-0">只需一段文本</view>
            <view class="text-xs text-content mt-2">输入任意内容，马上快速生成专属PPT</view>
        </view>

        <view class="w-[550rpx] mx-auto">
            <u-subsection
                :list="modelOptions"
                bg-color="#fff"
                :button-color="$theme.primaryColor"
                height="80"
                active-color="#fff"
                inactive-color="#333"
                @change="currentChange"
            >
                <template #item="{ item, isActive }">
                    <view class="flex items-center">
                        <image
                            class="w-[28rpx] h-[28rpx]"
                            :src="isActive ? item.icon : item.activeIcon"
                        ></image>
                        <text class="ml-[6rpx]">
                            {{ item.name }}
                        </text>
                    </view>
                </template>
            </u-subsection>
        </view>

        <view class="bg-white rounded-[18rpx] mt-2 px-[20rpx] py-[10rpx]">
            <view>
                <u-input v-model="aiPPTStore.options.prompt" type="textarea" :border="false" />
            </view>
            <view class="flex items-center justify-between">
                <view
                    class="flex items-center text-sm text-content"
                    @click="router.navigateTo('/packages/pages/ai_ppt/history')"
                >
                    <u-icon name="clock" size="30"></u-icon>
                    <text class="ml-1">历史记录</text>
                </view>
                <view>
                    <u-button
                        type="primary"
                        size="medium"
                        :customStyle="{
                            height: '68rpx'
                        }"
                        @click="aiPPTStore.genPPT()"
                    >
                        <u-icon name="search" />
                        <span class="text-xs ml-[8rpx]">
                            快速生成
                        </span>
                    </u-button>
                </view>
            </view>
        </view>

        <view class="flex flex-wrap mt-4 mx-[-10rpx] mb-[-20rpx]">
            <view
                class="flex max-w-full items-center mx-[10rpx] mb-[20rpx] px-[22rpx] py-[12rpx] border border-light border-solid rounded-full"
                v-for="(item, index) in searchEx"
                :key="index"
                @click="clickItem(item)"
            >
                <view class="flex-1 line-clamp-1 text-xs text-content">
                    {{ item }}
                </view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { useAiPPTStore, useSearchEx } from '../aiPPT'
import { useRouter } from 'uniapp-router-next'
import config from '@/config'

import Base from '@/packages/static/images/ai_ppt/base.png'
import BaseActive from '@/packages/static/images/ai_ppt/base_active.png'
import Copilot from '@/packages/static/images/ai_ppt/copilot.png'
import CopilotActive from '@/packages/static/images/ai_ppt/copilot_active.png'
import Research from '@/packages/static/images/ai_ppt/research.png'
import ResearchActive from '@/packages/static/images/ai_ppt/research_active.png'

const router = useRouter()
const aiPPTStore = useAiPPTStore()

const modelOptions = [
    {
        name: '基础',
        value: 1,
        icon: Base,
        activeIcon: BaseActive,
        desc: '基于描述生成PPT'
    },
    {
        name: '增强',
        value: 2,
        icon: Copilot,
        activeIcon: CopilotActive,
        desc: '基于描述及模板生成PPT'
    },
    {
        name: '研究',
        value: 3,
        icon: Research,
        activeIcon: ResearchActive,
        desc: '基于大纲及模板生成PPT'
    }
]

const currentChange = (index: number) => {
    aiPPTStore.options.type = modelOptions[index].value
}

const { searchEx, getSearchEx } = useSearchEx()
const clickItem = (title: string) => {
    aiPPTStore.options.prompt = title
}

getSearchEx()
</script>

<style scoped>
.prompt-input {
    background-size: 100% auto;
}
</style>
