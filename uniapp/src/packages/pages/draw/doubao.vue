<template>
    <page-meta :page-style="$theme.pageStyle">
        <!-- #ifndef H5 -->
        <navigation-bar
            :front-color="$theme.navColor"
            :background-color="$theme.navBgColor"
        />
        <!-- #endif -->
    </page-meta>
    <view class="h-full flex flex-col bg-[#f5f8fd]">
        <view
            v-if="!appStore.config.switch.doubao_status"
            class="w-full h-full bg-white rounded-[6px] flex items-center justify-center"
        >
            <u-empty text="绘画功能未开启" mode="favor"></u-empty>
            <tabbar/>
        </view>
        <template v-else>
            <u-navbar back-text="绘画工作台">
                <template #right>
                    <router-navigate
                        :to="{
                            path: '/packages/pages/draw_list/draw_list',
                            query: { model: DrawModeEnum.DOUBAO }
                        }"
                    >
                        <view class="flex items-center mr-[20rpx]">
                            <view class="text-primary flex">
                                <u-icon name="clock" :size="32"/>
                            </view>
                            <view class="text-muted ml-[10rpx]">历史记录</view>
                        </view>
                    </router-navigate>
                </template>
            </u-navbar>
            <view class="p-[20rpx]">
                <view class="flex p-[14rpx] bg-white rounded-full">
                    <view
                        v-for="item in modeList"
                        :key="item.mode"
                        class="flex items-center px-[10rpx] py-[5rpx] flex-1 justify-center text-primary rounded-full"
                        :class="{
                            '!bg-primary !text-white':
                                formData.draw_type === item.mode
                        }"
                        @click="formData.draw_type = item.mode"
                    >
                        <view class="leading-[30px]">{{ item.name }}</view>
                    </view>
                </view>
            </view>
            <view class="flex-1 min-h-0">
                <scroll-view class="h-full" scroll-y>
                    <view class="px-[20rpx] pb-[30rpx] pt-[6rpx]">
                        <u-form
                            ref="uFormRef"
                            :model="formData"
                            label-position="top"
                            :border-bottom="false"
                        >
                            <!--    关键词    -->
                            <prompt-com
                                v-model="formData.prompt"
                                v-model:negative="formData.negative_prompt"
                                :is-negative="false"
                                :model="DrawModeEnum.DOUBAO"
                                :example="drawConfig.example"
                                :typeEnum="DrawTypeEnum"
                                :showTranslate="!!drawConfig.config.translate_switch"
                            />

                            <!--    图片上传    -->
                            <uploader-picture
                                v-model="formData.image_mask"
                                v-if="formData.draw_type === DrawTypeEnum.IMAGE"
                            />

                            <!--    图片尺寸    -->
                            <doubao-size v-model="formData.size"/>

                            <!-- 绘画模型 -->
                            <doubao-model
                                v-model="formData.engine"
                                :engine="drawConfig.config.engine"
                                :draw_type="formData.draw_type"
                            />

                            <!-- 高级参数 -->
                            <doubao-options v-model="formData.complex_params"/>
                        </u-form>
                    </view>
                </scroll-view>
            </view>
            <view class="p-[20rpx] bg-white safe-area-inset-bottom">
                <u-button
                    type="primary"
                    :loading="isLockGenerate"
                    @click="handelDrawGenerate('generate')"
                >
                    <view>
                        <text class="text-xl font-bold">立即生成</text>
                        <text v-if="drawConfig.config.is_member" class="text-sm ml-[4px]">
                            会员免费
                        </text>
                        <text
                            v-if="
                                drawConfig.config.power != 0 &&
                                !drawConfig.config.is_member &&
                                userStore.isLogin
                            "
                            class="text-sm ml-[4px]"
                        >
                            消耗{{ drawConfig.config.power || '--' }}{{ appStore.getTokenUnit }}
                        </text>
                    </view>
                </u-button>
            </view>
        </template>
        <tabbar/>
    </view>
</template>

<script setup lang="ts">
import {reactive, ref, shallowRef} from 'vue'
import {useRoute, useRouter} from 'uniapp-router-next'
import {useAppStore} from '@/stores/app'
import {useUserStore} from '@/stores/user'
import {useLockFn} from '@/hooks/useLockFn'
import {onShow, onLoad} from '@dcloudio/uni-app'

import {
    drawing,
    getSdConfig
} from '@/api/draw'
import {DrawFormData, ComplexParams} from '@/api/draw'
import {DrawTypeEnum, DrawModeEnum} from './enum/index'

import PromptCom from './components/prompt.vue'
import UploaderPicture from './components/uploader-picture.vue'
import DoubaoSize from './components/doubao/doubao-size.vue'
import DoubaoModel from './components/doubao/doubao-model.vue'
import DoubaoOptions from './components/doubao/doubao-options.vue'
import {series} from "@/utils/util";

const router = useRouter()
const route = useRoute()
const uFormRef = shallowRef()
const appStore = useAppStore()
const userStore = useUserStore()

const modeList = ref([
    {
        mode: DrawTypeEnum.TEXT,
        name: '文生图'
    },
    {
        mode: DrawTypeEnum.IMAGE,
        name: '图生图'
    }
])

const formData = ref<DrawFormData>({
    draw_api: DrawModeEnum.DOUBAO,
    draw_type: DrawTypeEnum.TEXT,
    draw_model: DrawModeEnum.DOUBAO, // 绘画使用模型
    size: '512x512', // 图片尺寸
    engine: 'high_aes_general_v20_L',
    prompt: '', // 正向提示词
    negative_prompt: '', // 负向提示词
    action: 'generate', // 绘画操作
    image_mask: '', // 图生图初始蒙版
    image_id: '', // 图片放大初始图片id
    complex_params: {
        seed: '',
        ddim_steps: 20
    } as ComplexParams,
})

const drawConfig = reactive<any>({
    config: {
        engine: {
            anime: {},
            general: {}
        },
        is_member: false,
        power: ''
    },
})
/**
 * 获取MJ绘画公共数据
 */
const getConfig = async () => {
    drawConfig.config = await getSdConfig({
        draw_api: DrawModeEnum.DOUBAO
    })
    uni.setNavigationBarTitle({
        title: drawConfig.config.diy_name
    })
}

/**
 * 获取总数据
 */
const getData = (() => {
    return series(getConfig)
})()

/**
 * 立即生成
 */
const {lockFn: handelDrawGenerate, isLock: isLockGenerate} = useLockFn(
    async (value: string) => {
        try {
            if (value) {
                formData.value.action = value
            }
            if (formData.value.prompt === '') {
                return uni.$u.toast('请输入提示词')
            }
            await drawing({
                ...formData.value
            })
            formData.value.prompt = ''
            router.navigateTo({
                path: '/packages/pages/draw_list/draw_list',
                query: {model: DrawModeEnum.DOUBAO}
            })
        } catch (error) {
        } finally {
        }
    }
)

getData()

onLoad(() => {
    uni.$on('drawRegenerate', (data: any) => {
        Object.assign(formData.value, data)
        if (data.action !== 'generate') {
            handelDrawGenerate(data.action)
        }
    })
    const query = route.query
    try {
        const data = JSON.parse(query.data as string)
        Object.assign(formData.value, data)

        if (data.action !== 'generate') {
            handelDrawGenerate(data.action)
        }
    } catch (error) {
    }
})
</script>
<style lang="scss">
page {
    height: 100%;
    overflow: hidden;
}
</style>
