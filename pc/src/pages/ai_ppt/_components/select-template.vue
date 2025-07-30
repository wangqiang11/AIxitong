<template>
    <el-dialog v-model="visibleValue" width="1100">
        <div v-loading="isLock" class="flex text-tx-primary">
            <div class="flex-[3] h-full mr-[26px]">
                <ElImage
                    class="w-full rounded-[10px] h-[350px]"
                    :src="currentTemplate.cover_image"
                >
                    <template #error>
                        <div class="el-image__error">选中右侧模板以预览</div>
                    </template>
                </ElImage>
            </div>
            <div class="flex-[1.8] flex flex-col">
                <div class="font-bold mb-[15px]">选择PPT模板</div>
                <div class="flex text-xs">
                    <div class="flex-none mt-[5px] text-tx-regular mr-[8px]">
                        模板风格:
                    </div>
                    <div class="flex flex-wrap">
                        <div
                            v-for="(item, index) in templateStyle"
                            :key="index"
                            class="mx-[1px] px-[8px] py-[5px] rounded cursor-pointer hover:bg-page mb-[8px]"
                            :class="{
                                '!bg-page': options.style === item
                            }"
                            @click="options.style = item"
                        >
                            {{ item }}
                        </div>
                    </div>
                </div>
                <div class="flex text-xs">
                    <div class="flex-none text-tx-regular mr-[8px]">
                        主题颜色:
                    </div>
                    <div class="flex flex-wrap mx-[-6px]">
                        <div
                            v-for="(item, index) in templateColor"
                            :key="index"
                            class="w-[18px] h-[18px] text-white mx-[6px] mb-[6px] rounded-[50%] flex items-center justify-center cursor-pointer"
                            :style="{
                                background: item.value
                            }"
                            @click="options.color = item.label"
                        >
                            <Icon
                                v-if="options.color === item.label"
                                name="el-icon-Select"
                                :size="12"
                            />
                        </div>
                    </div>
                </div>
                <div class="flex-1 min-h-0">
                    <ElScrollbar>
                        <div class="overflow-hidden">
                            <div class="flex flex-wrap mx-[-6px] py-[12px]">
                                <div
                                    class="w-[50%]"
                                    v-for="(item, index) in templateList"
                                    :key="item.cover_id"
                                    @click="coverIdValue = item.cover_id"
                                >
                                    <div class="px-[6px]">
                                        <ElImage
                                            class="w-full h-[100px] rounded border-2 cursor-pointer border-solid border-[transparent]"
                                            :class="{
                                                'border-primary':
                                                    coverIdValue ===
                                                    item.cover_id
                                            }"
                                            :src="item.cover_image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ElScrollbar>
                </div>

                <div>
                    <ElButton
                        class="w-full"
                        type="primary"
                        size="large"
                        @click="emit('confirm')"
                    >
                        生成PPT
                        <span class="flex ml-[10px]">
                            <Icon name="el-icon-Right" />
                        </span>
                    </ElButton>
                </div>
            </div>
        </div>
    </el-dialog>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { getPPTTemplate } from '@/api/ai_ppt'
const props = withDefaults(
    defineProps<{
        visible: boolean
        coverId: string
        prompt?: string
    }>(),
    {
        prompt: ''
    }
)
const emit = defineEmits<{
    (event: 'update:visible', value: boolean): void
    (event: 'update:coverId', value: string): void
    (event: 'confirm'): void
}>()
const visibleValue = useVModel(props, 'visible', emit)
const coverIdValue = useVModel(props, 'coverId', emit)
const templateStyle = ['科技', '商务', '小清新', '极简', '中国风', '可爱卡通']

const templateColor = [
    {
        label: '红色',
        value: '#D7000F'
    },
    {
        label: '橙色',
        value: '#FF7A00'
    },
    {
        label: '黄色',
        value: '#FFC700'
    },
    {
        label: '绿色',
        value: '#39D819'
    },
    {
        label: '青色',
        value: '#3f9097'
    },
    {
        label: '蓝色',
        value: '#0385FF'
    },

    {
        label: '紫色',
        value: '#C73AFF'
    },
    {
        label: '粉色',
        value: '#FF3AA0'
    }
]

const options = reactive({
    color: '红色',
    style: '科技'
})
let lastPrompt = ''
const templateList = ref<any[]>([])

const setSelectFirst = () => {
    const [first] = templateList.value
    if (first && first.cover_id) {
        coverIdValue.value = first.cover_id
    }
}
const { lockFn: getTemplate, isLock } = useLockFn(async () => {
    lastPrompt = props.prompt
    templateList.value = await getPPTTemplate({
        prompt: props.prompt,
        ...options
    })
    setSelectFirst()
})

const currentTemplate = computed(
    () =>
        templateList.value.find((item) => item.cover_id === props.coverId) || {}
)
watch(
    options,
    () => {
        getTemplate()
    },
    {
        deep: true
    }
)

watch(visibleValue, (value) => {
    if (!value) return
    if (lastPrompt === props.prompt) {
        !coverIdValue.value && setSelectFirst()
        return
    }
    getTemplate()
})
</script>
