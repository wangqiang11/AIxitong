<template>
    <view class="user-info mb-[-70rpx]">
        <view class="flex px-[50rpx] pb-[100rpx] justify-between pt-[40rpx]">
            <view
                v-if="isLogin"
                class="flex items-center"
                @click="navigateTo('/packages/pages/user_set/user_set')"
            >
                <u-avatar :src="user.avatar" :size="120"></u-avatar>
                <view class="text-main ml-[20rpx]">
                    <view class="flex items-center">
                        <view class="text-2xl font-medium line-clamp-1">
                            {{ user.nickname }}
                        </view>
                        <view
                            class="flex-none ml-[16rpx] text-xs text-white rounded-[6rpx] px-[10rpx] py-[6rpx]"
                            :class="{
                                'text-[#F8C596]': user.package_name
                            }"
                            :style="{
                                background: user.package_name
                                    ? 'linear-gradient(90.00deg, #484848 0%, #101010 100%)'
                                    : '#4073fa'
                            }"
                        >
                            {{
                                user.package_name
                                    ? user.package_name || 'VIP会员'
                                    : '普通用户'
                            }}
                        </view>
                    </view>
                    <view
                        class="text-xs text-content mt-[18rpx]"
                        @click.stop="copy(user.sn)"
                    >
                        用户ID：{{ user.sn }}
                        <text class="underline">复制</text>
                    </view>
                </view>
            </view>
            <navigator
                v-else
                class="flex items-center"
                hover-class="none"
                url="/pages/login/login"
            >
                <u-avatar
                    src="/static/images/user/default_avatar.png"
                    :size="120"
                ></u-avatar>
                <view class="text-main text-3xl ml-[20rpx]">未登录</view>
            </navigator>
            <router-navigate
                class="flex items-center"
                hover-class="none"
                to="/packages/pages/user_set/user_set"
            >
                <image
                    src="/static/images/user/user_entry.png"
                    class="w-[48rpx] h-[48rpx]"
                ></image>
            </router-navigate>
        </view>
    </view>
</template>
<script lang="ts" setup>
import { useCopy } from '@/hooks/useCopy'
import { computed, ref } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useRouter } from 'uniapp-router-next'
// import { useRouter } from 'uniapp-router-next-zm'
import { useNavigationBarTitleStore } from '@/stores/navigationBarTitle'
const navigationBarTitleStore = useNavigationBarTitleStore()
const props = defineProps({
    content: {
        type: Object,
        default: () => ({})
    },
    styles: {
        type: Object,
        default: () => ({})
    },
    user: {
        type: Object,
        default: () => ({})
    },
    isLogin: {
        type: Boolean
    }
})
const router = useRouter()
const { copy } = useCopy()
const isFixed = ref(false)
const themeStore = useThemeStore()
const getNavBg = computed(() => {
    return isFixed.value ? themeStore.primaryColor : 'transparent'
})
const navigateTo = (url: string) => {
    router.navigateTo(url)
}
</script>

<style lang="scss" scoped></style>
