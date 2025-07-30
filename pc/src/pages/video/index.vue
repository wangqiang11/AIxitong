<template>
    <div>
        <NuxtLayout name="default">
            <div class="h-full p-[16px] flex" v-if="appStore.config.switch.video_status">
                <div class="bg-body w-[355px] h-full rounded-[12px] flex flex-col">
                    <div class="p-4">
                        <VideoType v-model="formData.type" />
                    </div>
                    <div class="flex-1 min-h-0">
                        <el-scrollbar>
                            <el-form
                                class="px-4"
                                ref="formRef"
                                :model="formData"
                                label-position="top"
                                :show-message="false"
                            >
<!--                                <FormWrap label="渠道" required>-->
<!--                                    <el-select-->
<!--                                        v-model="formData.channel"-->
<!--                                        placeholder="请选择渠道"-->
<!--                                        size="large"-->
<!--                                    >-->
<!--                                        <el-option-->
<!--                                            v-for="item in channels"-->
<!--                                            :key="item.value"-->
<!--                                            :label="item.label"-->
<!--                                            :value="item.value"-->
<!--                                        />-->
<!--                                    </el-select>-->
<!--                                </FormWrap>-->

								<template v-if="ChannelToken.K_LING === formData.channel">
									<FormWrap label="模型" required>
										<el-select
											v-model="formData.model_name"
											placeholder="请选择模型"
											size="large"
										>
											<el-option
												v-for="item in models"
												:key="item"
												:label="item"
												:value="item"
											/>
										</el-select>
									</FormWrap>
								</template>

								<template v-if="ChannelToken.K_LING === formData.channel">
									<FormWrap label="模式" required>
										<el-segmented
											v-model="formData.mode"
											class="w-full"
											size="large"
											:options="ModeOptions"
										/>
									</FormWrap>
								</template>

                                <template v-if="formData.type === 2">
                                    <UploaderPicture v-model="formData.image" />
                                </template>

                                <Prompt
                                    :type="formData.type"
                                    v-model="formData.prompt"
                                    :config="videoConfig.example"
                                    :showTranslate="!!videoConfig.translate_switch"
                                />

								<template v-if="ChannelToken.K_LING === formData.channel">
									<FormWrap label="负面描述">
										<LTextarea
											v-model="formData.negative_prompt"
											placeholder="当需要表达负面情绪时，我们可以使用一些负面提示词用来描述低质量的绘画、畸形的形象等"
											:content-style="{ height: '120px' }"
										></LTextarea>
									</FormWrap>
								</template>

                                <VideoSize
                                    v-model="formData.scale"
                                    :filters="ChannelToken.K_LING === formData.channel ? ['1:1', '9:16', '16:9'] : ['1:1', '3:4', '4:3', '9:16', '16:9']"
                                />

                                <template v-if="videoConfig.style.length">
                                    <VideoStyle :style-list="videoConfig.style" v-model="formData.style_id" />
                                </template>

								<template v-if="ChannelToken.K_LING === formData.channel">
									<FormWrap label="镜头" required>
										<el-select
											v-model="formData.camera_control.type"
											placeholder="请选择镜头"
											size="large"
										>
											<el-option
												v-for="item in CameraOptions"
												:key="item.value"
												:label="item.label"
												:value="item.value"
											/>
										</el-select>
									</FormWrap>

									<FormWrap label="时长" required>
										<el-select
											v-model="formData.duration"
											placeholder="请选择时长"
											size="large"
										>
											<el-option
												v-for="item in DurationOptions"
												:key="item.value"
												:label="item.label"
												:value="item.value"
											/>
										</el-select>
									</FormWrap>
								</template>
                            </el-form>
                        </el-scrollbar>
                    </div>
                    <div class="p-4">
                        <el-button
                            size="large"
                            class="w-full"
                            type="primary"
                            :loading="isLockGenerate"
                            @click="handelVideoGenerate"
                        >
                            <div>
                                <span class="text-base font-bold">立即生成</span>
                                <template v-if="videoConfig.is_member">
                                    <span class="text-sm ml-[4px]">会员免费</span>
                                </template>
                                <template v-else-if="currentModel.price > 0">
                                    <span class="text-sm ml-[4px]">消耗 {{ currentModel.price }}{{ appStore.getTokenUnit }}</span>
                                </template>
                            </div>
                        </el-button>
                    </div>
                </div>
                <div class="ml-4 flex-1 min-w-0 h-full">
                    <VideoResult ref="videoResultRef" @regenerate="handleVideoRegenerate" />
                </div>
            </div>

            <div v-else class="h-full flex-1 flex p-4 justify-center items-center">
                <el-result>
                    <template #icon>
                        <el-image class="w-[150px] dark:opacity-60" :src="emptyImg" />
                    </template>
                    <template #title>
                        <div class="text-info">功能暂未开启</div>
                    </template>
                </el-result>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import { watch } from "vue"
import { useAppStore } from '@/stores/app'
import { useUserStore } from '@/stores/user'
import { getVideoConfig as apiGetVideoConfig, postVideoGenerate as apiGenerateVideo } from '@/api/video'
import {
	ModeOptions,
	CameraOptions,
	DurationOptions,
	defaultModel,
	defaultCameraValue,
	defaultDurationValue,
	ChannelToken
} from './helper'
import Prompt from './_components/prompt.vue'
import VideoType from './_components/video-type.vue'
import VideoSize from './_components/video-size.vue'
import VideoStyle from './_components/video-style.vue'
import UploaderPicture from './_components/uploader-picture.vue'
import VideoResult from './_components/video-result.vue'
import FormWrap from "./_components/form-wrap.vue"
import emptyImg from 'assets/image/empty_con.png'

const appStore = useAppStore()
const userStore = useUserStore()
const videoResultRef = shallowRef()
const formData = reactive({
    type: 1,
    prompt: '',
    scale: '1:1',
    image: '',
    style_id: [],
    channel: '',
    model_name: '',
	negative_prompt: '',
	duration: defaultDurationValue,
	camera_control: { type: defaultCameraValue },
    mode: defaultModel
})

const { data: videoConfig, refresh } = useAsyncData(() => apiGetVideoConfig(), {
    default() {
        return {
			channel: '',
            model: {},
            style: [],
            example: {}
        }
    },
    lazy: true
})

const currentModel = computed<any>(() => {
	console.log(formData.channel, videoConfig.value)
	if (!formData.channel) {
		formData.channel = videoConfig.value.channel
	}
    return videoConfig.value.model[formData.channel] || {}
})

const channels = computed(() => Object.entries(videoConfig.value.model)?.map(([_, item]: [string, any]) => ({
    label: item.name,
    value: item.channel
})))

const models = computed<string[]>(() => {
	const newModels = videoConfig.value.model[formData.channel]?.models || [formData.channel];
    formData.model_name = newModels[0];
    return newModels;
})

const { lockFn: handelVideoGenerate, isLock: isLockGenerate } = useLockFn(
    async () => {
        try {
            if (!formData.prompt) {
                feedback.msgError(
                    `请输入${formData.type === 1 ? '视频场景' : '描述词'}`
                )
                return
            }
            if (formData.type === 2 && !formData.image) {
                return feedback.msgError('请上传上传参考图')
            }
            await apiGenerateVideo({ ...formData })
            formData.prompt = ''
            formData.style_id = []
            videoResultRef.value?.refresh()
            userStore.getUser()
            refresh()
        } catch (error) {
        }
    }
)

watch(() => {
	formData.channel = videoConfig.value.channel
}, videoConfig);

const handleVideoRegenerate = (item: any) => {
	Object.assign(formData, item)
}

definePageMeta({
    layout: false,
    hiddenFooter: true
})
</script>