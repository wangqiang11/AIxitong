<template>
    <uni-file-picker
        class="uni-file-picker"
        mode="list"
        :limit="10"
        file-mediatype="file"
        :auto-upload="false"
        :file-extname="['md', 'txt', 'pdf', 'doc', 'docx']"
        @select="handleSelectFile"
    >
        <view
            class="text-sm text-primary flex items-center bg-[#ECF6FF] py-[10rpx] px-[18rpx] rounded-full"
        >
            <u-loading
                v-if="isLoading"
                mode="flower"
                class="mr-[4rpx]"
                size="28"
            />
            <u-icon v-else name="arrow-upward" class="mr-[4rpx]" size="28" />
            文件
        </view>
    </uni-file-picker>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
    readDocContent,
    readPdfContent,
    readTxtContent
} from '@/utils/fileReader'

export interface FileRecord {
    id: string
    url: string
    type: number
    name: string
    size: number
    text: string
}

// 最大文件大小限制（5MB）
const MAX_FILE_SIZE = 5 * 1024 * 1024

const emits = defineEmits<{
    (e: 'on-success', file: FileRecord): void
    (e: 'on-failed', error: Error): void
}>()

// 上传加载
const isLoading = ref(false)

async function handleSelectFile(row: any) {
    isLoading.value = true
    const files = row.tempFiles || []

    for (let i = 0, len = files.length; i < len; i++) {
        const file = files[i]
        const originalFile = file.file

        try {
            if (file.size > MAX_FILE_SIZE) {
                throw new Error(`${file.name} 文件超过5MB`)
            }

            const processedFile: FileRecord = {
                id: file.uuid,
                url: file.url,
                type: 30,
                name: file.name,
                size: file.size,
                text: ''
            }

            processedFile.text = await parseFileToText(originalFile)
            emits('on-success', processedFile)
        } catch (error) {
            const message =
                error instanceof Error ? error.message : '文件解析错误'
            uni.$u.toast(`${file.nam} ${message}`)
        }
    }

    isLoading.value = false
}

// 解析文件内容
const parseFileToText = async (file: File) => {
    const suffix = file.name.split('.').pop()
    switch (suffix) {
        case 'md':
        case 'txt':
            return await readTxtContent(file)
        case 'pdf':
            return await readPdfContent(file)
        case 'doc':
        case 'docx':
            return await readDocContent(file)
        default:
            return await readTxtContent(file)
    }
}
</script>

<style scoped>
.uni-file-picker:deep(.uni-file-picker__lists) {
    display: none;
}
</style>
