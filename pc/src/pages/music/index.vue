<template>
    <div>
        <NuxtLayout name="default">
            <div
                class="h-full p-[16px] flex"
                v-if="appStore.config.switch.music_status"
            >
                <Form @update="recordRef?.refresh()" />
                <div class="flex-1 min-w-0 h-full pl-[16px]">
                    <client-only>
                        <Record ref="recordRef" />
                    </client-only>
                </div>
            </div>

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
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import Form from './_components/form/index.vue'
import Record from './_components/record/index.vue'
import emptyImg from 'assets/image/empty_con.png'
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()
const recordRef = shallowRef()
definePageMeta({
    layout: false,
    hiddenFooter: true
})
</script>