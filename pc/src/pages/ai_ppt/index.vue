<template>
    <div>
        <NuxtLayout name="default">
            <div class="h-full p-4">
                <template v-if="aiPPTStore.config.status > 0">
                    <div class="h-full rounded-[15px] bg-body">
                        <GenOutline v-if="aiPPTStore.showOutline" />
                        <PromptInput v-else />
                    </div>
                </template>
                <div
                    v-else
                    class="h-full flex-1 flex p-4 justify-center items-center"
                >
                    <el-result>
                        <template #icon>
                            <el-image
                                class="w-[150px] dark:opacity-60"
                                :src="emptyImg"
                            />
                        </template>
                        <template #title>
                            <div class="text-info">功能暂未开启</div>
                        </template>
                    </el-result>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import PromptInput from './_components/prompt-input.vue'
import GenOutline from './_components/gen-outline.vue'
import emptyImg from '@/assets/image/empty_con.png'
import { useAiPPTStore } from './aiPPT'
const aiPPTStore = useAiPPTStore()
await useAsyncData(() => aiPPTStore.getPPTConfig())

definePageMeta({
    layout: false,
    showLogo: true,
    hiddenFooter: true
})
</script>
