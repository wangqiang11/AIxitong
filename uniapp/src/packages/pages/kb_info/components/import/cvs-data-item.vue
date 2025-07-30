<script setup lang="ts">
import { shallowRef, ref, nextTick } from "vue";
const props = defineProps<{
  index: number;
  name: string;
  q: string;
  a: string;
}>();

const emit = defineEmits<{
  (event: "delete"): void;
  (event: "update:q", value: string): void;
  (event: "update:a", value: string): void;
}>();

const editRef = shallowRef();
const isEdit = ref(false);
const handleEdit = async (): void => {
  isEdit.value = true;
  await nextTick();
  editRef.value.focus();
};

const handleDataChange = (e: Event): void => {
  emit("update:q", e.target.innerText);
};
</script>

<template>
  <view>
    <view class="flex items-center">
      <span class="bg-white px-4 rounded"> #{{ index + 1 }} </span>
      <span class="mx-2 text-[#000] flex-1 line-clamp-1">
        {{ name }}
      </span>
      <view class="p-[6rpx] text-content" @click.stop="handleEdit">
        <u-icon name="edit-pen" size="28"></u-icon>
      </view>
      <view class="p-[6rpx] text-content" @click.stop="emit('delete')">
        <u-icon name="trash-fill" size="28"></u-icon>
      </view>
    </view>
    <view class="mt-2">
      <view class="whitespace-pre-line">
        q:
        <span
          ref="editRef"
          :contenteditable="isEdit"
          @input="(event) => emit('update:q', event.target.innerText)"
        >
          {{ q }}
        </span>
      </view>
      <view class="whitespace-pre-line">
        a:
        <span
          :contenteditable="isEdit"
          @input="(event) => emit('update:a', event.target.innerText)"
        >
          {{ a }}
        </span>
      </view>
    </view>
    <!--        <view-->
    <!--            ref="editRef"-->
    <!--            class="mt-2 whitespace-pre-line"-->
    <!--            :contenteditable="isEdit"-->
    <!--            @input="handleDataChange"-->
    <!--        >-->
    <!--            {{ data }}-->
    <!--        </view>-->
  </view>
</template>

<style scoped lang="scss"></style>
