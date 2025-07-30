<template>
    <u-popup v-model="showNotice" mode="center" border-radius="24" zIndex="10">
        <view class="w-[90vw] px-[24rpx]">
            <view class="p-[30rpx] text-lg text-center font-medium">
                公告
            </view>
            <scroll-view class="min-h-[472rpx] max-h-[768rpx] notice" scroll-y>
                <!-- <u-parse :html="richTextContent"></u-parse> -->
                <mp-html :content="richTextContent" />
            </scroll-view>
            <view class="py-[30rpx] bg-white">
                <u-button
                    type="primary"
                    :style="{
                        height: '82rpx',
                        lineHeight: '82rpx',
                        fontSize: '30rpx',
                        border: 'none',
                        borderRadius: '60px'
                    }"
                    @click="showNotice = false"
                >
                    我知道了
                </u-button>
            </view>
        </view>
    </u-popup>
</template>

<script lang="ts">
export default {
    options: {
        virtualHost: true,
        styleIsolation: 'shared'
    }
}
</script>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useAppStore } from '@/stores/app'
import cache from '@/utils/cache'
import { NOTICE } from '@/enums/constantEnums'

const appStore = useAppStore()
const showNotice = ref<boolean>(false)
const richTextContent = computed(
    () => appStore.getBulletinConfig.bulletin_content
)
const isBulletin = computed(() => appStore.getBulletinConfig.is_bulletin)

const shouldShowNotice = (value: number) => {
    const lastVisitTime = cache.get(NOTICE)
    const currentTime = new Date().toDateString()
    const isNewDay = !lastVisitTime || lastVisitTime !== currentTime
    if (isNewDay && value) {
        cache.set(NOTICE, currentTime)
    }
    return isNewDay
}

watch(
    () => [isBulletin.value],
    () => {
        if (
            isBulletin.value &&
            shouldShowNotice(isBulletin.value)
        ) {
            showNotice.value = true
        }
    },
    {
        deep: true,
        immediate: true
    }
)
</script>

<style scoped>
.notice :deep(._img) {
    max-width: inherit;
}
</style>