<template>
    <view class="flex flex-col min-h-0 h-full">
        <view class="flex flex-col min-h-0 h-full ">
            <scroll-view class="gen-outline h-full" :scroll-y="true">
                <view class="bg-white m-3 p-3 rounded-xl">
                    <u-image width="100%" height="368rpx" border-radius="20" :src="currentTemplate.cover_image">
                        <template #error>
                            <view class="text-center">选以下模板以预览</view>
                        </template>
                    </u-image>
                </view>

                <view class="bg-white m-3 p-3 rounded-xl">
                    <view class="font-bold mb-[15px]">选择PPT模板</view>
                    <view class="flex text-xs">
                        <view class="flex-none mt-[5px] text-tx-regular mr-[8px]">
                            模板风格:
                        </view>
                        <view class="flex flex-wrap">
                            <view
                                v-for="(item, index) in templateStyle"
                                :key="index"
                                class="mx-[1px] px-[8px] py-[5px] rounded cursor-pointer hover:bg-page mb-[8px]"
                                :class="{
                                '!bg-page': options.style === item
                            }"
                                @click="options.style = item"
                            >
                                {{ item }}
                            </view>
                        </view>
                    </view>
                    <view class="flex text-xs">
                        <view class="flex-none text-tx-regular mr-[8px]">
                            主题颜色:
                        </view>
                        <view class="flex flex-wrap mx-[-6px]">
                            <view
                                v-for="(item, index) in templateColor"
                                :key="index"
                                class="w-[18px] h-[18px] text-white mx-[6px] mb-[6px] rounded-[50%] flex items-center justify-center cursor-pointer"
                                :style="{
                                    background: item.value
                                }"
                                @click="options.color = item.label"
                            >
                                <u-icon
                                    v-if="options.color === item.label"
                                    name="check"
                                    :size="24"
                                />
                            </view>
                        </view>
                    </view>

                    <view class="flex flex-wrap mx-[-6px] py-[12px]">
                        <view
                            class="w-[50%]"
                            v-for="(item, index) in templateList"
                            :key="item.cover_id"
                            @click="aiPPTStore.options.cover_id = item.cover_id"
                        >
                            <view class="px-[12rpx] mb-3">
                                <view
                                    class="rounded border-2 cursor-pointer border-solid border-[transparent]"
                                    :class="{
                                        '!border-primary':
                                            aiPPTStore.options.cover_id ===
                                            item.cover_id
                                    }"
                                >
                                    <u-image
                                        width="100%"
                                        height="200rpx"
                                        class="w-full "
                                        :src="item.cover_image"
                                    />
                                </view>
                            </view>
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
                    @click="confirmTemplate"
                >
                    生成PPT
                </u-button>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import { useLockFn } from '@/hooks/useLockFn'
import { useAiPPTStore } from '../aiPPT'
import { getPPTTemplate } from '@/api/ai_ppt'

const aiPPTStore = useAiPPTStore()
const templateStyle = ['科技', '商务', '小清新', '极简', '中国风', '可爱卡通']
const templateColor = [
    {
        label: '红色',
        value: '#D7000F'
    },
    {
        label: '橙色',
        value: '#FF7A00'
    },
    {
        label: '黄色',
        value: '#FFC700'
    },
    {
        label: '绿色',
        value: '#39D819'
    },
    {
        label: '青色',
        value: '#3f9097'
    },
    {
        label: '蓝色',
        value: '#0385FF'
    },

    {
        label: '紫色',
        value: '#C73AFF'
    },
    {
        label: '粉色',
        value: '#FF3AA0'
    }
]

const options = reactive({
    color: '红色',
    style: '科技'
})
let lastPrompt = ''
const templateList = ref<any[]>([])

const setSelectFirst = () => {
    const [first] = templateList.value
    if (first && first.cover_id) {
        aiPPTStore.options.cover_id = first.cover_id
    }
}

const { lockFn: getTemplate, isLock } = useLockFn(async () => {
    uni.showLoading({ title: '加载中' })
    try {
        lastPrompt = aiPPTStore.options.prompt
        templateList.value = await getPPTTemplate({
            prompt: aiPPTStore.options.prompt,
            ...options
        })
        setSelectFirst()
    } finally {
        uni.hideLoading()
    }
})

const confirmTemplate = async () => {
    await aiPPTStore.genPPTSubmit({ ...aiPPTStore.options })
    aiPPTStore.showTemplate = false
    aiPPTStore.showOutline = false
}

const currentTemplate = computed(
    () =>
        templateList.value.find((item) => item.cover_id === aiPPTStore.options.cover_id) || {}
)
watch(
    options,
    () => {
        getTemplate()
    },
    {
        deep: true
    }
)

getTemplate()
</script>

<style lang="scss" scoped>
.footer {
    background: #ffffff;
    padding: 20rpx;
    box-shadow: 0px -3px 10px 0px rgba(0, 0, 0, 0.0588);
    padding-bottom: calc(20rpx + env(safe-area-inset-bottom));
}
</style>