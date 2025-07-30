<template>
    <u-form-item v-bind="attrs">
        <div class="flex-1 min-w-0 overflow-hidden">
            <slot></slot>
        </div>
    </u-form-item>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>
