<template>
    <view class="flex flex-col min-h-0 h-full">
        <template v-if="searchStore.config.status > 0">
            <SearchResult v-if="searchStore.showResult" class="h-full flex flex-col" />
            <SearchAsk v-else class="h-full" />
        </template>
        <view v-else class="h-full flex-1 flex p-4 justify-center items-center">
            <u-empty text="功能未开启" mode="list"></u-empty>
        </view>
    </view>
</template>
<script setup lang="ts">
import SearchAsk from './search-ask/index.vue'
import SearchResult from './search-result/index.vue'
import { ModelEnums, TypeEnums, useSearch } from '../useSearch'
import { watch, onBeforeUnmount } from 'vue'

const searchStore = useSearch()

watch(
    () => searchStore.options.model,
    (value) => {
        if (value !== ModelEnums.STUDY) {
            searchStore.options.type = TypeEnums.ALL
        }
    },
    { flush: 'post', immediate: true }
)
searchStore.getConfig()
</script>
