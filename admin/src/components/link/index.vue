<template>
    <div class="link flex">
        <el-menu
            :default-active="activeMenu"
            class="w-[160px] min-h-[350px] link-menu"
            @select="handleSelect"
        >
            <el-menu-item v-for="(item, index) in menus" :index="item.type" :key="index">
                <span>{{ item.name }}</span>
            </el-menu-item>
        </el-menu>
        <div class="flex-1 pl-4">
            <shop-pages
                v-model="activeLink"
                v-if="LinkTypeEnum.SHOP_PAGES == activeMenu"
                :type="type"
                :is-tab="isTab"
            />
            <creative-picker
                v-model="activeLink"
                v-if="LinkTypeEnum.CREATIVE_PICKER == activeMenu"
                :type="type"
            />
            <agent-picker
                v-model="activeLink"
                v-if="LinkTypeEnum.AGENT == activeMenu && type != 'pc'"
                :type="type"
            />
            <role-picker
                v-model="activeLink"
                v-if="LinkTypeEnum.ROLE_PICKER == activeMenu"
                :type="type"
            />
            <custom-link
                v-model="activeLink"
                v-if="LinkTypeEnum.CUSTOM_LINK == activeMenu"
                :type="type"
            />
            <mini-program v-model="activeLink" v-if="LinkTypeEnum.MINI_PROGRAM == activeMenu" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { LinkTypeEnum, type Link } from '.'
import ShopPages from './shop-pages.vue'
import CreativePicker from './creative-picker.vue'
import RolePicker from './role-picker.vue'
import AgentPicker from './agent-picker.vue'
import CustomLink from './custom-link.vue'
import MiniProgram from './mini-program.vue'

const props = defineProps({
    modelValue: {
        type: Object as PropType<Link>,
        required: true
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

const menus = ref([
    {
        name: '基础页面',
        type: LinkTypeEnum.SHOP_PAGES,
        link: {}
    },
    {
        name: '创作选择',
        type: LinkTypeEnum.CREATIVE_PICKER,
        link: {}
    },
    {
        name: '智能体选择',
        type: LinkTypeEnum.AGENT,
        link: {}
    },
    {
        name: '角色选择',
        type: LinkTypeEnum.ROLE_PICKER,
        link: {}
    },
    {
        name: '自定义链接',
        type: LinkTypeEnum.CUSTOM_LINK,
        link: {}
    },
    {
        name: '跳转小程序',
        type: LinkTypeEnum.MINI_PROGRAM,
        link: {}
    }
])

const activeLink = computed({
    get() {
        return menus.value.find((item) => item.type == activeMenu.value)?.link as Link
    },
    set(value) {
        menus.value.forEach((item) => {
            if (item.type == activeMenu.value) {
                item.link = value
            }
        })
    }
})

const activeMenu = ref<string>(LinkTypeEnum.SHOP_PAGES)

const handleSelect = (index: string) => {
    activeMenu.value = index
}

watch(activeLink, (value) => {
    if (!value.type) return
    emit('update:modelValue', value)
})

watch(
    () => props.modelValue,
    (value) => {
        activeMenu.value = value.type
        activeLink.value = value
    },
    {
        immediate: true
    }
)
</script>

<style lang="scss" scoped>
.link-menu {
    --el-menu-item-height: 40px;
    :deep(.el-menu-item) {
        border-color: transparent;
        &.is-active {
            border-right-width: 2px;
            border-color: var(--el-color-primary);
            background-color: var(--el-color-primary-light-9);
        }
    }
}
</style>
