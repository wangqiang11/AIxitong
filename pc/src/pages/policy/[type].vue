<template>
    <div class="h-screen flex flex-col">
        <div class="w-[1200px] mx-auto flex pl-[30px] mt-[10px]">
            <NuxtLink :to="`/policy/${PolicyAgreementEnum.SERVICE}`">
                <div
                    class="bg-[#EEEEEE] mr-[20px] px-[25px] py-[10px]"
                    :class="{ active: route.params.type == 'service' }"
                >
                    用户服务协议
                </div>
            </NuxtLink>
            <NuxtLink :to="`/policy/${PolicyAgreementEnum.PRIVACY}`">
                <div
                    class="bg-[#EEEEEE] mr-[20px] px-[25px] py-[10px]"
                    :class="{ active: route.params.type == 'privacy' }"
                >
                    隐私协议
                </div>
            </NuxtLink>
            <NuxtLink :to="`/policy/${PolicyAgreementEnum.PAY}`">
                <div
                    class="bg-[#EEEEEE] px-[25px] py-[10px] mr-[20px]"
                    :class="{ active: route.params.type == 'payment' }"
                >
                    用户支付协议
                </div>
            </NuxtLink>
            <NuxtLink :to="`/policy/${PolicyAgreementEnum.DISTRIBUTION}`">
                <div
                    class="bg-[#EEEEEE] px-[25px] py-[10px]"
                    :class="{ active: route.params.type == 'distribution' }"
                >
                    用户分销协议
                </div>
            </NuxtLink>
        </div>
        <div class="flex-1 min-h-0 bg-white">
            <el-scrollbar>
                <div class="render-html p-[30px] w-[1200px] mx-auto">
                    <h1 class="text-center">{{ data.title }}</h1>
                    <div class="mx-auto richText" v-html="data.content"></div>
                </div>
            </el-scrollbar>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { getPolicy } from '@/api/app'
import { PolicyAgreementEnum } from '@/enums/appEnums'

const route = useRoute()
const { data } = await useAsyncData(
    () =>
        getPolicy({
            type: route.params.type
        }),
    {
        lazy: true,
        default() {
            return {}
        }
    }
)

definePageMeta({
    layout: 'blank'
})
</script>
<style lang="scss" scoped>
.active {
    background-color: var(--el-color-primary);
    color: white;
}

:deep(.richText) {
    img {
        display: inline-block;
    }
}
</style>
