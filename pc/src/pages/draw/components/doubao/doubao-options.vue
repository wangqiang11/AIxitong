<template>
    <div>
        <el-collapse v-model="activeNames" class="complex_params">
            <el-collapse-item title="高级参数" name="1">
                <template #title>
                    <div class="flex items-center gap-2">
                        <!-- <Icon name="el-icon-Operation"></Icon> -->
                        <span>高级参数</span>
                    </div>
                </template>
                <div class="flex flex-col gap-2">
                    <div>
                        <div class="flex items-center gap-2">
                            <span>绘画质量</span>
                            <el-popover
                              placement="right"
                              :width="200"
                              :show-arrow="false"
                              transition="custom-popover"
                              trigger="hover"
                              content="越低：细节简练；越高：细节丰富, 默认值20"
                            >
                                <template #reference>
                                    <div
                                      class="flex items-center cursor-pointer text-[#999999]"
                                    >
                                        <Icon
                                          name="el-icon-QuestionFilled"
                                          :size="14"
                                        />
                                    </div>
                                </template>
                            </el-popover>
                        </div>
                        <div class="flex gap-4 items-center pl-3">
                            <el-slider
                              v-model="modelValue.ddim_steps"
                              :step="1"
                              :max="50"
                              :min="1"
                            />
                            <span>{{ modelValue.ddim_steps }}</span>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center gap-2 mb-2">
                            <span>随机种子</span>
                            <el-popover
                                placement="right"
                                :width="200"
                                :show-arrow="false"
                                transition="custom-popover"
                                trigger="hover"
                                content="种子用于指定生成效果，可以用于生成套图，保障生成的一系列图片保持同一种风格"
                            >
                                <template #reference>
                                    <div
                                        class="flex items-center cursor-pointer text-[#999999]"
                                    >
                                        <Icon
                                            name="el-icon-QuestionFilled"
                                            :size="14"
                                        />
                                    </div>
                                </template>
                            </el-popover>
                        </div>
                        <div class="flex gap-4 items-center">
                            <el-input
                                v-model="modelValue.seed"
                                type="number"
                                :min="-1"
                                :maxlength="18"
                                @focus="checkUserLogin()"
                                placeholder="请输入seed种子编号"
                            />
                        </div>
                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script lang="ts" setup>
import { ComplexParams, samplersItem } from '../../types/draw'
import { useVModels } from '@vueuse/core'
import { checkUserLogin, config } from './../../hooks/useDrawEffect'

const emit = defineEmits<{
    (event: 'update:modelValue', value: ComplexParams): void
}>()

const props = defineProps({
    modelValue: {
        type: Object as () => ComplexParams,
        default: {
            seed: '', // 随机种子
            ddim_steps: 20
        }
    }
})

const { modelValue } = useVModels(props, emit)

const activeNames = ref<string>('1')
</script>

<style lang="scss" scoped>
.complex_params {
    :deep(.el-collapse-item) {
        .el-collapse-item__wrap {
            border: none !important;

            .el-collapse-item__content {
                padding-bottom: 0;
            }
        }

        .el-collapse-item__header {
            border: none !important;
        }
    }
    :deep(.el-input) {
        @apply bg-page;
        border-radius: 4px;
        .el-input__wrapper {
            @apply bg-page;
            box-shadow: none;
        }
    }
    :deep(.el-select) {
        @apply bg-page;
        box-shadow: none;
        border-radius: 12px;
        .el-select__wrapper {
            @apply bg-page;
            box-shadow: none;
        }
    }
}
</style>