<template>
    <view class="flex flex-col min-h-0 h-full bg-white">
        <view class="flex flex-col min-h-0 h-full ">
            <scroll-view class="gen-outline h-full" :scroll-y="true">
                <view class="py-[20px]">
                    <view
                        v-for="(item, index) in aiPPTStore.outlineLists"
                        :key="index"
                    >
                        <view class="flex justify-end mr-4 ml-4 mb-[30px]">
                            <view class="outline-text !rounded-tr-none">
                                {{ item.prompt }}
                            </view>
                        </view>
                        <view class="ml-4 mr-4">
                            <view class="flex mb-[20px]" v-if="item.status >= 0">
                                <view
                                    class="outline-text !rounded-tl-none !bg-page !text-main"
                                >
                                    您的内容【{{
                                        item.prompt
                                    }}】大纲正在生成中...
                                </view>
                            </view>
                            <view class="flex mb-[20px]" v-if="item.status == 1">
                                <view
                                    class="outline-text !rounded-tl-none !bg-page !text-main"
                                >
                                    您的内容【{{
                                        item.prompt
                                    }}】大纲已生成，来看看吧
                                </view>
                            </view>
                            <view class="flex" v-if="item.status == 2">
                                <view
                                    class="outline-text !rounded-tl-none !bg-page !text-tx-primary"
                                >
                                    您的内容【{{
                                        item.prompt
                                    }}】大纲生成失败了，请重试
                                </view>
                            </view>
                        </view>

                        <view
                            class="mx-2 mb-[30px] flex flex-col bg-white px-4 mb-4 shadow-lighter rounded-[15px]"
                        >
                            <view class="flex items-center justify-between">
                                <view class="font-bold">PPT大纲</view>
                                <view class="text-xs text-tx-secondary">
                                    由AI生成，仅供参考
                                </view>
                            </view>
                            <view
                                class="flex-1 my-4 min-h-0 border border-br-light border-solid rounded-[6px]"
                            >
                                <view
                                    class="flex flex-col items-center justify-center p-4"
                                    v-if="item.status == 0"
                                    style="padding-top: 60px; padding-bottom: 60px"
                                >
                                    <!--                                <el-skeleton animated :rows="12" />-->
                                    <u-loading mode="flower"></u-loading>
                                    <view class="text-base text-content mt-3">生成中，请等待几秒...</view>
                                </view>
                                <view v-else-if="item.status == 1">
                                    <view class="p-4">
                                        <view
                                            class="outline-item flex items-center"
                                        >
                                            <u-tag text="主题" type="info" size="mini" mode="dark"></u-tag>
                                            <view
                                                class="ml-[10px] flex-1 min-w-0"
                                            >
                                                <u-input
                                                    v-model="item.title"
                                                ></u-input>
                                            </view>
                                        </view>
                                        <view class="mt-4 flex">
                                            <view class="mt-2">
                                                <u-tag text="大纲" type="info" size="mini" mode="dark"></u-tag>
                                            </view>
                                            <view
                                                class="flex-1 min-w-0 ml-[10px]"
                                            >
                                                <view
                                                    v-for="(
                                                        c, ci
                                                    ) in item.catalogs"
                                                    :key="ci"
                                                    class="outline-item mb-[5px]"
                                                >
                                                    <view
                                                        class="flex items-center mb-[5px]"
                                                    >
                                                        <span class="mr-1"
                                                        >•</span
                                                        >
                                                        <u-input
                                                            v-model="c.catalog"
                                                        ></u-input>
                                                    </view>
                                                    <view class="ml-[15px]">
                                                        <view
                                                            v-for="(
                                                                s, si
                                                            ) in c.sub_catalog"
                                                            :key="si"
                                                            class="flex items-center mb-[5px]"
                                                        >
                                                            <span class="mr-1"
                                                            >•</span
                                                            >
                                                            <u-input
                                                                v-model="
                                                                    c
                                                                        .sub_catalog[
                                                                        si
                                                                    ]
                                                                "
                                                            ></u-input>
                                                        </view>
                                                    </view>
                                                </view>
                                            </view>
                                        </view>
                                    </view>
                                </view>
                                <view
                                    v-else
                                    class="p-4 h-full flex text-tx-secondary items-center justify-center"
                                >
                                    生成失败，请点击下方按钮重新生成
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </scroll-view>
        </view>
        <view class="footer flex items-center">
            <view class="w-1/2 mr-1">
                <u-button
                    v-if="aiPPTStore.outlineLists.length && aiPPTStore.outlineLists[0].status >= 1"
                    type="default"
                    @click="regenerate"
                >
                    <u-icon name="reload" />
                    <span class="text-xs ml-[8rpx]">
                        重新生成
                    </span>
                    </u-button>
            </view>
            <view class="w-1/2 ml-1">
                <u-button
                    type="primary"
                    class="w-full"
                    v-if="aiPPTStore.outlineLists.length && aiPPTStore.outlineLists[0].status == 1"
                    @click="selectTemplate"
                >
                    选择PPT模板
                </u-button>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { nextTick, onUnmounted } from 'vue'
import { useAiPPTStore } from '../aiPPT'

const aiPPTStore = useAiPPTStore()

const regenerate = async () => {
    aiPPTStore.genOutline()
    await nextTick()
}

const selectTemplate = () => {
    aiPPTStore.options.title = aiPPTStore.outlineLists[0].title
    aiPPTStore.options.catalogs = aiPPTStore.outlineLists[0].catalogs
    aiPPTStore.showTemplate = true
    aiPPTStore.showOutline = false
}

onUnmounted(() => {
    aiPPTStore.isGenningOutline = false
})
</script>

<style lang="scss" scoped>
.outline-text {
    @apply min-w-[140rpx] bg-primary text-white py-[22rpx] px-[30rpx] rounded-[24rpx];
}

.outline-item {
    :deep(.el-input__wrapper) {
        box-shadow: none;
        &.is-focus,
        &:hover {
            box-shadow: 0 0 0 1px #f6f7f8 inset;
        }
    }
}

.footer {
    background: #ffffff;
    padding: 20rpx;
    box-shadow: 0px -3px 10px 0px rgba(0, 0, 0, 0.0588);
    padding-bottom: calc(20rpx + env(safe-area-inset-bottom));
}
</style>
