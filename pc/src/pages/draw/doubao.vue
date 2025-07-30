<template>
    <div
        v-if="appStore.config.switch.doubao_status"
        class="h-full flex-1 flex p-4 gap-4 draw_layout"
    >
        <el-scrollbar class="rounded-[12px] pb-[72px] bg-body">
            <div class="bg-body w-[355px] p-4 flex flex-col gap-4 relative">
                <!-- 绘图类型 -->
                <draw-type v-model="formData.draw_type" />

                <!-- 正向提示词 -->
                <prompt
                    v-model="formData.prompt"
                    :model="DrawModeEnum.DOUBAO"
                />

                <!-- 图生图初始蒙版 -->
                <uploader
                    v-model="formData.image_mask"
                    type="image"
                    v-if="formData.draw_type === DrawTypeEnum.img2img"
                />

                <!-- 绘画尺寸 -->
                <doubao-picture-size v-model="formData.size" />

                <!-- 绘画模型 -->
                <doubao-model v-model="formData.engine" :draw_type="formData.draw_type" />

                <!-- 高级参数 -->
                <doubao-options v-model="formData.complex_params" />
            </div>

            <!-- 生成按钮 -->
            <create-button />
        </el-scrollbar>
        <draw-result
            v-loading="pageLoading"
            element-loading-text="正在加载数据..."
        />
    </div>
    <div
        v-else
        class="h-full flex-1 flex p-4 gap-4 draw_layout justify-center items-center"
    >
        <el-result>
            <template #icon>
                <el-image
                    class="w-[100px] dark:opacity-60"
                    :src="DrawingEmpty"
                />
            </template>
            <template #title>
                <div class="text-info">绘画功能暂未开启</div>
            </template>
        </el-result>
    </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
import {
    pageLoading,
    checkOngoingTask,
    formData,
    resetFormData,
    taskStatusParams
} from './hooks/useDrawEffect'
import { DrawModeEnum, DrawTypeEnum } from '~/pages/draw/enums/DrawEnum'

// 公共组件
import DrawType from './components/common/draw-type.vue'
import Prompt from './components/common/prompt.vue'
import Uploader from './components/common/uploader.vue'
import DrawResult from './components/common/draw-result.vue'
import CreateButton from './components/common/create-button.vue'

// DOUBAO
import DrawingEmpty from '@/assets/image/draw/empty-image.png'
import DoubaoPictureSize from './components/doubao/doubao-picture-size.vue'
import DoubaoModel from './components/doubao/doubao-model.vue'
import DoubaoOptions from './components/doubao/doubao-options.vue'

import { ComplexParams } from '~/pages/draw/types/draw'

definePageMeta({
    hasPanel: true,
    hiddenFooter: true
})

const appStore = useAppStore()

onMounted(() => {
    // 初始化成为 Dalle3 绘画模式
    resetFormData({
        draw_api: DrawModeEnum.DOUBAO,
        draw_model: DrawModeEnum.DOUBAO,
        action: 'generate',
        prompt: '',
        engine: 'high_aes_general_v20_L',
        negative_prompt: '',
        size: '512x512',
        complex_params: {
            seed: '', // 随机种子
            ddim_steps: 20
        } as ComplexParams
    })
    taskStatusParams.model = DrawModeEnum.DOUBAO
    checkOngoingTask()
})
</script>

<style lang="scss" scoped>
.draw_layout {
    :deep(.el-loading-mask) {
        border-radius: 12px;
        background-color: var(--el-bg-color);
        z-index: 2000;
    }
}
</style>