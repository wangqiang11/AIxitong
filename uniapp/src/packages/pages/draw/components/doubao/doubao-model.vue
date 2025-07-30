<template>
    <view class="mt-4">
        <item-title
            title="模型选择"
            tips="让AI根据此模型的风格绘制图片，修改合适的描述词和参数可以让生成效果更加精美"
            required
        ></item-title>
        <u-form-item label="">
            <view class="flex-1 min-w-0 pt-[20rpx] px-[20rpx] bg-white rounded-lg overflow-hidden">
                <view class="flex flex-wrap">
                    <template v-for="(item, name) in engine || []" :key="item.icon">
                        <view
                            class="w-[50%] px-[10rpx]">
                            <view
                                class="h-full"
                                @click="handleChange(item, name)"
                            >
                                <view
                                    class="pt-[60%] relative h-0 rounded-[10rpx] overflow-hidden"
                                >
                                    <view class="absolute inset-0 left-0 top-0">
                                        <u-image
                                            :src="item.icon"
                                            class="h-full w-full"
                                            width="100%"
                                            height="188"
                                            mode="widthFix"
                                        />
                                    </view>
                                    <view
                                        v-if="item[draw_type] === currentModel"
                                        class="absolute bg-[rgba(0,0,0,0.5)] inset-0 left-0 top-0 flex items-center justify-center text-white"
                                    >
                                        <u-icon
                                            name="checkmark-circle-fill"
                                            :size="40"
                                        />
                                    </view>
                                </view>
                                <view class="text-center text-xs line-clamp-1">
                                    {{ item.title }}
                                </view>
                            </view>
                        </view>
                    </template>
                </view>
            </view>
        </u-form-item>
    </view>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import {useVModels} from '@vueuse/core'
import ItemTitle from '../item-title.vue'

const emit = defineEmits<{
    (event: 'update:modelValue', value: string): void
    (event: 'changeCate', value: number): void
}>()
const props = withDefaults(
    defineProps<{
        modelValue?: any
        engine: any
        draw_type: string
    }>(),
    {
        modelValue: '',
        engine: {
            anime: {},
            general: {}
        },
        draw_type: 'txt2txt'
    }
)
const {modelValue: currentModel} = useVModels(props, emit)
const currentIndex = ref<string | number>('general')


const handleChange = (item: any, name: string | number) => {
    currentModel.value = item[props.draw_type]
    currentIndex.value = name
}

watch(() => props.draw_type, () => {
    currentModel.value = props?.engine?.[currentIndex.value]?.[props.draw_type]
}, { immediate: false })
</script>
