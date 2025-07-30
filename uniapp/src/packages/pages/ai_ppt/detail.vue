<template>
    <view class="ppt-detail flex flex-col min-h-0 h-full">
        <view class="flex flex-col min-h-0 h-full ">
            <scroll-view class="h-full p-3 box-border" :scroll-y="true">
                <view class="pt-1 bg-white rounded-xl">
                    <view
                        v-for="(item, index) in pptInfo.preview"
                        :key="index"
                        class="mb-4 flex relative cursor-pointer outline-4 outline outline-[transparent] rounded-[10px] overflow-hidden"
                    >
                        <view class="flex-1">
                            <u-image width="100%" height="400rpx" :src="item" />
                        </view>
                        <view
                            class="absolute right-[10px] top-[10px] w-[24px] h-[24px] text-center leading-[24px] text-[#333] bg-[rgba(255,255,255,0.6)] text-xs font-bold rounded-[50%]"
                        >
                            {{ index + 1 }}
                        </view>
                    </view>
                </view>
            </scroll-view>
        </view>

        <view class="footer flex items-center">
            <view class="w-full">
                <u-button
                    type="primary"
                    class="w-full"
                    :loading="isLock"
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
                    <u-icon name="download" size="30"></u-icon>
                </u-button>
            </view>
        </view>

        <!-- #ifdef H5 -->
        <!--    悬浮菜单    -->
        <floating-menu></floating-menu>
        <!-- #endif -->

        <u-popup v-model="showDownload" mode="center" border-radius="15" closeable>
            <view class="w-[650rpx] p-[40rpx]">
                <view class="text-lg font-bold text-center mb-[40rpx]">
                    下载PPTX
                </view>
                <view class="mb-[40rpx]">
                    当前环境不支持下载，请复制链接到浏览器打开下载
                </view>

                <u-button type="primary" shape="circle" @click="copyLink">
                    复制链接
                </u-button>
            </view>
        </u-popup>
    </view>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
import { useAiPPTStore } from './aiPPT'
import { getPPTDetail, downloadPPT } from '@/api/ai_ppt'
import { useRoute } from 'uniapp-router-next'
import { useCopy } from '@/hooks/useCopy'
import { ref } from 'vue'
import { useLockFn } from '@/hooks/useLockFn'
import { isWeixinClient } from '@/utils/client'
import config from "@/config";

const route = useRoute()
const { copy } = useCopy()
const appStore = useAppStore()
const aiPPTStore = useAiPPTStore()
aiPPTStore.getPPTConfig()

const showDownload = ref<boolean>(false)
const pptInfo = ref<any>({
    preview: []
})

const copyLink = async () => {
    const { file_url } = await downloadPPT({ id: route.query.id })
    await copy(file_url)
    showDownload.value = false
}

const { lockFn: downloadPPTSubmit, isLock } = useLockFn(async () => {
    //#ifdef H5
    if (isWeixinClient()) {
        showDownload.value = true
    } else {
        const { file_url } = await downloadPPT({ id: route.query.id })
        const a = document.createElement('a')
        a.href = file_url
        a.download = `${pptInfo.value.title}.pptx`
        a.click()
    }
    //#endif

    //#ifdef MP-WEIXIN
    showDownload.value = true
    //#endif
})

const getPPTInfo = async () => {
    const [first] = await getPPTDetail({
        id: route.query.id
    })
    if (first && first.id) {
        pptInfo.value = first
    }
}

getPPTInfo()
</script>

<style>
page {
    height: 100%;
}
</style>

<style lang="scss" scoped>
.footer {
    background: #ffffff;
    padding: 20rpx;
    box-shadow: 0px -3px 10px 0px rgba(0, 0, 0, 0.0588);
    padding-bottom: calc(20rpx + env(safe-area-inset-bottom));
}
</style>