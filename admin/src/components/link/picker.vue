<template>
    <div class="link-picker flex-1" @click="!disabled && popupRef?.open()">
        <el-input :model-value="getLink" placeholder="请选择链接" readonly :disabled="disabled">
            <template #suffix>
                <icon v-if="!modelValue?.path" name="el-icon-ArrowRight" />
                <icon
                    v-else
                    name="el-icon-Close"
                    @click.stop="!disabled && emit('update:modelValue', {})"
                />
            </template>
        </el-input>
        <popup ref="popupRef" width="900px" title="链接选择" @confirm="handleConfirm">
            <link-content v-model="activeLink" :type="type" :is-tab="isTab" />
        </popup>
    </div>
</template>

<script lang="ts" setup>
import { LinkTypeEnum, type Link } from '.'
import LinkContent from './index.vue'
import Popup from '@/components/popup/index.vue'
const props = defineProps({
    modelValue: {
        type: Object
    },
    disabled: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'pc'
    },
    isTab: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits<{
    (event: 'update:modelValue', value: any): void
}>()

const popupRef = shallowRef<InstanceType<typeof Popup>>()
const activeLink = ref<Link>({ path: '', type: LinkTypeEnum.SHOP_PAGES })
const handleConfirm = () => {
    emit('update:modelValue', { ...activeLink.value, isTab: props.isTab })
}

const getLink = computed(() => {
    switch (props.modelValue?.type) {
        case LinkTypeEnum.SHOP_PAGES:
            return props.modelValue.name
        case LinkTypeEnum.CREATIVE_PICKER:
            return props.modelValue.name
        case LinkTypeEnum.ROLE_PICKER:
            return props.modelValue.name
        case LinkTypeEnum.AGENT:
            return props.modelValue.name
        case LinkTypeEnum.CUSTOM_LINK:
            return props.modelValue.path
        default:
            return props.modelValue?.name
    }
})
watch(
    () => props.modelValue,
    (value) => {
        if (value?.type) {
            activeLink.value = value as Link
        }
    },
    {
        immediate: true
    }
)
</script>

<style scoped lang="scss">
.link-picker {
    :deep(.el-input) {
        &.is-disabled {
            .el-input__inner {
                cursor: not-allowed;
            }
            .el-input__suffix {
                cursor: not-allowed;
            }
        }
        .el-input__inner {
            cursor: pointer;
        }
        .el-input__suffix {
            cursor: pointer;
        }
    }
}
</style>
