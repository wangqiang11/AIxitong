<template>
    <el-upload ref="uploadRef" :show-file-list="false" :accept="mime" :multiple="false"
        :on-success="handleUploadSuccess" :http-request="handleUploadRequest"
        :on-error="(error) => emits('on-failed', error)">
        <template #trigger>
            <template v-if="$slots.default">
                <slot name="default" :is-loading="isLoading"></slot>
            </template>
            <template v-else>
                <el-button plain class="!rounded-[8px]" :loading="isLoading">
                    <template #icon>
                        <Icon name="el-icon-Upload" />
                    </template>
                    上传文件
                </el-button>
            </template>
        </template>
    </el-upload>
</template>

<script setup lang="ts">
import type { UploadFile, UploadRequestOptions } from 'element-plus'
import { ref, computed } from "vue";
import { uploadFile } from '~/api/app'
import feedback from '~/utils/feedback'
import { readDocContent, readPdfContent, readTxtContent } from '@/utils/fileReader';

type UploadType = 'image' | 'video' | 'file' | 'audio';

export interface FileRecord {
    id: string;
    url: string;
    type: number;
    name: string;
    size: number;
    text: string;
}

// 自定义Type转媒体类型
const TypeToMIME: Record<UploadType, string> = {
    file: "*/*",
    image: "image/*",
    video: "video/*",
    audio: "audio/*"
};

const props = defineProps<{
    type: UploadType;
    isParseContent?: boolean;
	isOnlyParseContent?: boolean;
}>();

// 最大文件大小限制（5MB）
const MAX_FILE_SIZE = 5 * 1024 * 1024;

const emits = defineEmits<{
    (e: "on-success", file: FileRecord): void;
    (e: "on-failed", error: Error): void;
}>();

// 上传加载
const isLoading = ref(false);
// 媒体类型
const mime = computed(() => TypeToMIME[props.type] ?? TypeToMIME["file"]);

// 生成随机ID
function generateRandomId() {
	return (
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15)
	)
}

async function handleUploadRequest(options: UploadRequestOptions) {
    try {
        // 检查文件大小
        if (options.file.size > MAX_FILE_SIZE) {
            throw new Error('文件大小不能超过5MB');
        }

        isLoading.value = true;

        // 如果仅解析内容，不上传文件
        if (props.isOnlyParseContent) {
            return {
				id: generateRandomId().toString(),
				uri: "",
				type: 0,
				name: options.file.name
			};
        }

        return await uploadFile(props.type, {
            file: options.file,
            name: "file"
        });
    } catch (error) {
        feedback.msgError(error instanceof Error ? error.message : "上传失败");
    } finally {
        isLoading.value = false;
    }
}

async function handleUploadSuccess(response: unknown, file: UploadFile) {
    const processedFile = {
        id: response.id,
        url: response.uri,
        type: response.type,
        name: response.name,
        size: file.size,
        text: ""
    };

    try {
        isLoading.value = true;
        if (props.isParseContent || props.isOnlyParseContent) {
            processedFile.text = await parseFileToText(file.raw);
        }
    } catch (error) {
        const message = error instanceof Error ? error.message : "文件解析错误";
        feedback.msgError(message);
    } finally {
        isLoading.value = false;
    }

    emits("on-success", processedFile);
}

// 解析文件内容
const parseFileToText = async (file: File) => {
    const suffix = file.name.split('.').pop();
    switch (suffix) {
        case 'md':
        case 'txt':
            return await readTxtContent(file);
        case 'pdf':
            return await readPdfContent(file);
        case 'doc':
        case 'docx':
            return await readDocContent(file);
        default:
            return await readTxtContent(file);
    }
};
</script>
