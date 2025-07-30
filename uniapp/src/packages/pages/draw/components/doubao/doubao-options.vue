<template>
    <u-collapse>
        <u-collapse-item title="高级参数" :key="'index'" :open="show">
            <view class="flex-1 min-w-0 p-[20rpx] bg-white rounded-lg">
                <!-- 参考图权重 -->
                <view class="text-base text-main">
                    <item-title title="绘画质量" tips="越低：细节简练；越高：细节丰, 默认值20" font-weight="400"></item-title>
                    <view class="flex items-center justify-between mt-[10rpx]">
                        <view class="w-[480rpx]">
                            <app-slider
                                :step="1"
                                :min="1"
                                :max="50"
                                :showValue="false"
                                :activeColor="$theme.primaryColor"
                                v-model="params.ddim_steps"
                            ></app-slider>
                        </view>
                        <input
                            class="options-input"
                            type="number"
                            :step="1"
                            :min="1"
                            :max="50"
                            style="width: 80rpx"
                            v-model="params.ddim_steps"
                            @blur="limitStepValue"
                        />
                    </view>
                </view>
                <!-- 随机种子 -->
                <view class="text-base text-main mt-2">
                    <item-title title="随机种子" tips="种子用于指定生成效果，可以用于生成套图，保障生成的一系列图片保持同一种风格" font-weight="400"></item-title>
                    <view class="flex-1 mt-[10rpx]">
                        <input
                            class="options-input"
                            type="number"
                            v-model="params.seed"
                        />
                    </view>
                </view>
            </view>
        </u-collapse-item>
    </u-collapse>
</template>

<script setup lang="ts">
import { useVModels } from '@vueuse/core'
import { computed, ref } from 'vue'
import ItemTitle from '../item-title.vue'

const emit = defineEmits<{
    (event: 'update:modelValue', value: string): void
}>()
const props = withDefaults(
    defineProps<{
        modelValue?: any
    }>(),
    {
        modelValue: () => {}
    }
)
const show = ref<boolean>(true)
const { modelValue: params } = useVModels(props, emit)

const limitStepValue = (e: any) => {
    const value = parseFloat(e.target.value)
    if (value >= 50) {
        params.value.ddim_steps = 50
    } else if (value < 1) {
        params.value.ddim_steps = 1
    } else {
        params.value.ddim_steps = value
    }
}
</script>

<style lang="scss" scoped>
.options-input {
    height: 64rpx;
    padding: 0 20rpx;
    border-radius: 14rpx;
    border: 1px solid #DCDFE6;
}
</style>