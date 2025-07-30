<template>
    <page-meta :page-style="$theme.pageStyle">
        <!-- #ifndef H5 -->
        <navigation-bar
            :front-color="$theme.navColor"
            :background-color="$theme.navBgColor"
        />
        <!-- #endif -->
    </page-meta>
    <view class="flex flex-col min-h-0 h-full">

        <template v-if="aiPPTStore.config.status > 0">
            <GenOutline
                class="flex flex-col min-h-0 h-full"
                v-if="aiPPTStore.showOutline"
            />
            <SelectTemplate
                class="flex flex-col min-h-0 h-full"
                v-else-if="aiPPTStore.showTemplate"
            />
            <PromptInput class="h-full" v-else />
        </template>

        <u-empty
            v-else
            text="功能未开启"
            mode="list"
        ></u-empty>

        <tabbar />
    </view>
    <!-- #ifdef H5 -->
    <!--    悬浮菜单    -->
    <floating-menu></floating-menu>
    <!-- #endif -->
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRoute } from 'uniapp-router-next'
import { useAiPPTStore } from './aiPPT'
import PromptInput from './_components/prompt-input.vue'
import GenOutline from './_components/gen-outline.vue'
import SelectTemplate from "@/packages/pages/ai_ppt/_components/select-template.vue";

const userStore = useUserStore()
const route = useRoute()

const aiPPTStore = useAiPPTStore()
onMounted(() => aiPPTStore.getPPTConfig())
</script>

<style lang="scss">
page {
    height: 100%;
}
</style>
