<template>
    <popup width="780px" :title="data.title" ref="popRef" @close="emits('close')">
        <div class="bg-body rounded-lg p-4">
            <!-- 主图片预览 -->
            <div class="relative preview-img" style="width: 698px; height: 392px;">
                <img class="w-full" :src="currentInfo" alt=""/>
                <span>{{ currentIndex + 1 }}/{{ data.preview.length }}页</span>
            </div>

            <div class="mt-3 relative">
                <!-- 左侧按钮 -->
                <div
                    class="preview-left-btn left-[-14px]"
                    @click.prevent.stop="prevImage"
                >
                    <Icon name="el-icon-ArrowLeft" size="20"/>
                </div>
                <!-- 右侧按钮 -->
                <div
                    class="preview-right-btn right-[-14px]"
                    @click.prevent.stop="nextImage"
                >
                    <Icon name="el-icon-ArrowRight" size="20"/>
                </div>

                <!-- 预览选项 -->
                <div
                    ref="previewScrollRef"
                    class="whitespace-nowrap overflow-hidden px-1 preview-scroll"
                >
                    <div
                        v-for="(item, index) in data.preview"
                        :key="item.index"
                        class="preview-item"
                        :class="{ active: index === currentIndex }"
                        @click="selectImage(index)"
                    >
                        <img :src="item" class="w-full"/>
                    </div>
                </div>
            </div>
        </div>
    </popup>
</template>

<script setup lang="ts">
import popup from '@/components/popup/index.vue'

const emits = defineEmits(['close'])

const popRef = shallowRef()
const data = ref<any>({
    preview: [],
    title: ''
})

const currentIndex = ref<number>(0)
const previewScrollRef = ref<HTMLElement | null>(null)

const currentInfo = computed(() => {
    return data.value.preview[currentIndex.value] || {}
})

const scrollToIndex = async (index: number) => {
    const itemWidth = 160;

    const itemLeft = index * itemWidth;

    previewScrollRef.value.scrollTo({
        left: itemLeft + (index * 4) - 260,
        behavior: 'smooth',
    });
};

const selectImage = (index: number) => {
    currentIndex.value = index
}

const nextImage = (event: MouseEvent) => {
    event.preventDefault()
    if (currentIndex.value < data.value.preview.length - 1) {
        currentIndex.value++
        scrollToIndex(currentIndex.value)
    }
}

const prevImage = (event: MouseEvent) => {
    event.preventDefault()
    if (currentIndex.value > 0) {
        currentIndex.value--
        scrollToIndex(currentIndex.value)
    }
}

watch(currentIndex, () => {
    scrollToIndex(currentIndex.value)
})

const open = async (item: any) => {
    popRef.value?.open()
    data.value = item
}

defineExpose({ open })
</script>

<style scoped lang="scss">
.preview-img {
    border: 4px solid #f6f7f8;
    border-radius: 14px;
    overflow: hidden;

    span {
        position: absolute;
        bottom: 14px;
        right: 14px;
        color: #ffffff;
        letter-spacing: 2px;
        padding: 2px 8px;
        border-radius: 6px;
        background-color: rgba(0, 0, 0, 0.6);
    }
}

.preview-item {
    position: relative;
    display: inline-block;
    width: 150px;
    cursor: pointer;
    border: 2px solid #f6f7f8;
    border-radius: 8px;
    overflow: hidden;
    margin: 0 7px;
    transition: opacity 0.5s;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    &:last-child {
        margin-right: 0;
    }

    &:first-child {
        margin-left: 0;
    }
}

.active {
    border: 2px solid var(--el-color-primary);
}

.preview-right-btn,
.preview-left-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    color: #ffffff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: background-color 0.5s;
    background-color: rgba(0, 0, 0, 0.8);

    &:hover {
        background-color: rgba(0, 0, 0, 0.6);
    }
}

.preview-scroll {
    scroll-behavior: smooth;
}
</style>
