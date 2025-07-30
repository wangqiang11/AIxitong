<script setup lang="ts">
const props = defineProps<{
    index: number
    name: string
    data: string
}>()

const emit = defineEmits<{
    (event: 'delete'): void
    (event: 'update:data', value: string): void
}>()

const editRef = shallowRef()
const isEdit = ref(false)
const handleEdit = async (): void => {
    isEdit.value = true
    await nextTick()
    editRef.value.focus()
}

const handleDataChange = (e: Event): void => {
    emit('update:data', e.target.innerText)
}
</script>

<template>
    <div>
        <div class="flex items-center">
            <span class="bg-white px-4 rounded"> #{{ index + 1 }} </span>
            <span class="mx-2 text-[#000] flex-1 line-clamp-1">
                {{ name }}
            </span>
            <Icon
                class="icon-delete text-primary cursor-pointer mr-2"
                name="el-icon-EditPen"
                @click="handleEdit"
            />
            <Icon
                class="icon-delete text-primary cursor-pointer"
                name="el-icon-Delete"
                @click="emit('delete')"
            />
        </div>

        <div
            ref="editRef"
            class="mt-2 whitespace-pre-line"
            :contenteditable="isEdit"
            @input="handleDataChange"
        >
            {{ data }}
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
