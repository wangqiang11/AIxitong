<template>
    <el-form-item v-bind="attrs">
        <template #label>
            <span class="font-bold text-tx-primary">{{ props.label }}</span>
        </template>
        <div class="flex-1 min-w-0 overflow-hidden">
            <slot></slot>
        </div>
    </el-form-item>
</template>

<script lang="ts" setup>
import { useAttrs } from "vue";

const attrs = useAttrs();

const props = defineProps<{
    label: string;
}>();
</script>
