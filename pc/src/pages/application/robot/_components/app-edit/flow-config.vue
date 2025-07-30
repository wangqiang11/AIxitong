<template>
    <div class="flow-config pt-[10px]">
        <el-alert
            title="注意事项"
            type="warning"
            :closable="false"
            class="mb-[20px]"
        >
            <ol class="list-decimal pl-[20px]">
                <li>coze工作流配置地址：https://www.coze.cn （工作空间->资源库）</li>
                <li>启用后对话时将使用coze工作流作为响应结果，相似问题输出仍使用AI模型输出</li>
                <li>coze工作流设置时输入变量名需为“input”,输出变量名需为“output_text”或“output_image”</li>
                <li>输出变量“output_text”对应为输出文本内容，输出变量“output_image”对应为输出图片资源，目前仅支持单图</li>
            </ol>
        </el-alert>

        <el-form-item label="启用 coze 工作流" prop="flow_status">
            <div>
                <el-switch
                    v-model="formData.flow_status"
                    :active-value="1"
                    :inactive-value="0"
                    inline-prompt
                    active-text="开"
                    inactive-text="关"
                />
            </div>
        </el-form-item>
        
        <template v-if="formData.flow_status === 1">
            <el-form-item label="应用 ID" prop="flow_config.app_id">
                <el-input 
                    class="!w-[320px]"
                    v-model="formData.flow_config.app_id" 
                    placeholder="请输入应用 ID"
                />
            </el-form-item>

            <el-form-item label="工作流 ID" prop="flow_config.workflow_id">
                <el-input 
                    class="!w-[320px]"
                    v-model="formData.flow_config.workflow_id" 
                    placeholder="请输入工作流 ID"
                />
            </el-form-item>
            
            <el-form-item label="智能体 ID" prop="flow_config.bot_id">
                <el-input 
                    class="!w-[320px]"
                    v-model="formData.flow_config.bot_id" 
                    placeholder="请输入智能体 ID"
                />
            </el-form-item>

            <el-form-item label="token" prop="flow_config.api_token">
                <el-input
                    class="!w-[320px]"
                    v-model="formData.flow_config.api_token"
                    placeholder="token"
                />
            </el-form-item>
        </template>
    </div>
</template>

<script setup lang="ts">
/**
 * 工作流配置组件
 * @description 配置 coze 工作流相关参数
 */
import { watch } from 'vue'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
    modelValue: Record<string, any>
}>()

const emit = defineEmits<{
    (event: 'update:modelValue', value: Record<string, any>): void
}>()

const formData = useVModel(props, 'modelValue', emit)
</script>

<style lang="scss" scoped>
.flow-config {
    padding: 20px;
}
</style>
