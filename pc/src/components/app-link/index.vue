<template>
    <NuxtLink v-bind="linkProps" :external="isExternalLink">
        <slot/>
    </NuxtLink>
</template>

<script lang="ts" setup>
/**
 * @description 兼容第三方页面的跳转
 */
import type { RouteLocationRaw } from 'vue-router'
import { isExternal } from '@/utils/validate'

interface Props {
  to: RouteLocationRaw
  [key: string]: any
}
const props = withDefaults(defineProps<Props>(), {})

const isExternalLink = computed(() => {
    let path = ''
    if (isString(props.to)) {
        path = props.to
    } else if (isObject(props.to)) {
        path = props.to.path!
    }
    return isExternal(path)
})

const linkProps = computed<any>(() => {
    if (isExternalLink.value) {
        return {
            ...props,
            target: 'blank',
            to: isObject(props.to) ? props.to.path : props.to
        }
    }
    return props
})
</script>
