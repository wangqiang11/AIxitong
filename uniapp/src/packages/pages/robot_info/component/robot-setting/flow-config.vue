<template>
    <view>
        <u-alert-tips
            type="warning"
            title="重要提示"
            style="white-space: pre-line"
            description="1. coze工作流配置地址：https://www.coze.cn （工作空间->资源库）
            2. 启用后对话时将使用coze工作流作为响应结果，相似问题输出仍使用AI模型输出
            3. coze工作流设置时输入变量名需为“input”,输出变量名需为“output_text”或“output_image”
            4. 输出变量“output_text”对应为输出文本内容，输出变量“output_image”对应为输出图片资源，目前仅支持单图"
        ></u-alert-tips>

        <u-form-item
            label="启用 coze 工作流"
            label-position="top"
            label-width="150"
            prop="flow_status"
        >
            <view class="flex-1 flex items-center">
                <u-switch
                    v-model="formData.flow_status"
                    :active-value="1"
                    :inactive-value="0"
                    :size="40"
                ></u-switch>
                <view class="ml-[12rpx]">
                    {{ formData.flow_status == 1 ? '开启' : '关闭' }}
                </view>
            </view>
        </u-form-item>
        
        <template v-if="formData.flow_status == 1">
            <u-form-item
                label="应用 ID"
                label-position="top"
                label-width="150"
                prop="flow_config.app_id"
            >
                <view class="flex-1">
                    <u-input
                        v-model="formData.flow_config.app_id"
                        placeholder="请输入应用 ID"
                        :border="true"
                    />
                </view>
            </u-form-item>

            <u-form-item
                label="工作流 ID"
                label-position="top"
                label-width="150"
                prop="flow_config.workflow_id"
            >
                <view class="flex-1">
                    <u-input
                        v-model="formData.flow_config.workflow_id"
                        placeholder="请输入工作流 ID"
                        :border="true"
                    />
                </view>
            </u-form-item>
            
            <u-form-item
                label="智能体 ID"
                label-position="top"
                label-width="150"
                prop="flow_config.bot_id"
            >
                <view class="flex-1">
                    <u-input
                        v-model="formData.flow_config.bot_id"
                        placeholder="请输入智能体 ID"
                        :border="true"
                    />
                </view>
            </u-form-item>
            <u-form-item
                label="token"
                label-position="top"
                label-width="150"
                prop="flow_config.api_token"
            >
                <view class="flex-1">
                    <u-input
                        v-model="formData.flow_config.api_token"
                        placeholder="请输入token"
                        :border="true"
                    />
                </view>
            </u-form-item>
        </template>
    </view>
</template>

<script setup lang="ts">
/**
 * 工作流配置组件
 * @description 配置 coze 工作流相关参数
 */
import { useVModel } from '@vueuse/core'
import { watch } from 'vue'

const props = withDefaults(
    defineProps<{
        modelValue: Record<string, any>
    }>(),
    {}
)

const emit = defineEmits<{
    (event: 'update:modelValue', value: Record<string, any>): void
}>()

const formData = useVModel(props, 'modelValue', emit)

// 确保 flow_config 对象存在
watch(() => formData.value.flow_status, (newVal) => {
    if (newVal === 1 && !formData.value.flow_config) {
        formData.value.flow_config = {
            workflow_id: '',
            bot_id: ''
        }
    }
}, { immediate: true })
</script>
