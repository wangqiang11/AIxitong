<script setup lang="ts">
import {ref, reactive, shallowRef} from 'vue'
import {useUserStore} from '@/stores/user'
import {getSearchLists} from '@/api/search'
import {useRouter} from "uniapp-router-next";
import {ModelEnums, useSearch} from '../useSearch'

import base from '@/packages/static/images/ai_search/base.png'
import copilot from '@/packages/static/images/ai_search/copilot.png'
import research from '@/packages/static/images/ai_search/research.png'

const userStore = useUserStore()
const searchStore = useSearch()
const router = useRouter()
const pagingRef = shallowRef()

const modelToIconMap = {
    [ModelEnums.BASE]: base,
    [ModelEnums.ENHANCE]: copilot,
    [ModelEnums.STUDY]: research
}

const show = ref(false)
const dataList = ref([])

const queryList = async (pageNo: number, pageSize: number) => {
    try {
        const {lists} = await getSearchLists({
            page_no: pageNo,
            page_size: pageSize
        })

        pagingRef.value.complete(lists)
    } catch (error) {
        pagingRef.value.complete(false)
    }
}
</script>

<template>
    <view>
        <view class="py-3 pl-3" @click="show = true">
            <u-icon name="clock" size="45rpx"></u-icon>
        </view>

        <u-popup
            v-model="show"
            mode="center"
            closeable
            border-radius="20"
        >
            <view class="flex flex-col min-h-0 w-[640rpx] h-[70vh]">
                <view class="p-[24rpx] text-center">搜索记录</view>
                <view class="flex-1">
                    <z-paging
                        ref="pagingRef"
                        v-model="dataList"
                        :fixed="false"
                        height="100%"
                        :auto-clean-list-when-reload="false"
                        @query="queryList"
                    >
                        <view
                            v-for="item in dataList"
                            :key="item.id"
                            class="cursor-pointer p-[12px] hover:bg-page"
                            @click="searchStore.getSearchInfo(item.id)"
                        >
                            <view class="line-clamp-2">
                                {{ item.ask }}
                            </view>
                            <view
                                class="flex items-center mt-1 text-tx-secondary"
                            >
                                <img :src="modelToIconMap[item.model]" class="w-[32rpx] h-[32rpx]">
                                <text class="ml-1 text-sm">
                                    {{ item.create_time }}
                                </text>
                            </view>
                        </view>
                    </z-paging>
                </view>
            </view>
        </u-popup>
    </view>
</template>
<script setup lang="ts">
</script>