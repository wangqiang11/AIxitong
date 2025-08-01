<template>
    <page-meta :page-style="$theme.pageStyle">
        <!-- #ifndef H5 -->
        <navigation-bar
            :front-color="$theme.navColor"
            :background-color="$theme.navBgColor"
        />
        <!-- #endif -->
    </page-meta>
    <view class="ai-creation">
        <view class="py-[14rpx] px-[30rpx] bg-white">
            <u-search
                v-model="keyword"
                placeholder="请输入关键词搜索"
                height="72"
                bg-color="#F7F8F9"
                @search="pagingRef?.reload()"
                @custom="pagingRef?.reload()"
                @clear="pagingRef?.reload()"
            />
        </view>
        <scroll-view scroll-x class="whitespace-nowrap">
            <view class="inline-flex py-[20rpx] px-[10rpx]">
                <view
                    class="category-item mx-[10rpx]"
                    :class="{
                        '!text-white !bg-primary': item.id == category.current
                    }"
                    v-for="item in category.lists"
                    :key="item.id"
                    @click="category.current = item.id"
                >
                    {{ item.name }}
                </view>
            </view>
        </scroll-view>
        <view class="flex-1 min-h-0">
            <z-paging
                ref="pagingRef"
                v-model="dataList"
                :auto-clean-list-when-reload="false"
                :safe-area-inset-bottom="true"
                @query="queryList"
                :fixed="false"
                height="100%"
            >
                <view class="px-[20rpx]">
                    <view
                        v-for="item in dataList"
                        :key="item.id"
                        class="mb-[20rpx]"
                        @click="toCreate(item.id)"
                    >
                        <view
                            class="bg-white shadow-[0_3px_10px_#ebeefd] p-[30rpx] rounded-[12rpx] relative"
                        >
                            <view class="flex items-center">
                                <u-image
                                    :src="item.image"
                                    width="64"
                                    height="64"
                                    class="flex-none"
                                />
                                <view
                                    class="font-medium text-[32rpx] ml-[20rpx]"
                                >
                                    {{ item.name }}
                                </view>
                            </view>
                            <view
                                class="text-[26rpx] text-muted line-clamp-2 my-[20rpx]"
                            >
                                {{ item.tips }}
                            </view>
                            <view class="collection flex justify-end">
                                <div class="text-muted mr-[20rpx] text-sm">
                                    🔥 {{ item.use_num }}人使用过
                                </div>
                                <view @click.stop="toCollection(item.id)">
                                    <u-icon
                                        v-if="!item.is_collect"
                                        :size="38"
                                        name="star"
                                        color="#999"
                                    />
                                    <u-icon
                                        v-if="!!item.is_collect"
                                        :size="38"
                                        name="star-fill"
                                        color="#FFB529"
                                    />
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </z-paging>
        </view>
        <tabbar />
    </view>
</template>

<script setup lang="ts">
import { collection, getCategoryList, getCreationList } from '@/api/create'
import { ref, reactive, onMounted, watch, shallowRef } from 'vue'
import { useRouter } from 'uniapp-router-next'
import { onShow } from '@dcloudio/uni-app'

const pagingRef = shallowRef()
const router = useRouter()
const keyword = ref('')
const dataList = ref<any[]>([])
const category = reactive({
    lists: [] as any[],
    current: 0
})
const getCategoryData = async () => {
    category.lists = await getCategoryList()
}

const queryList = async (pageNo: number, pageSize: number) => {
    try {
        const { lists } = await getCreationList({
            page_no: pageNo,
            page_size: pageSize,
            category_id: category.current,
            keyword: keyword.value
        })

        pagingRef.value.complete(lists)
    } catch (error) {
        pagingRef.value.complete(false)
    } finally {
    }
}

const toCreate = (id: number) => {
    router.navigateTo({
        path: '/packages/pages/create/create',
        query: {
            id
        }
    })
}

const toCollection = async (id: number) => {
    await collection({ id })
    pagingRef.value?.refresh()
}

watch(
    () => category.current,
    () => {
        pagingRef.value?.reload()
    }
)
onShow(async () => {
    await getCategoryData()
})
</script>

<style lang="scss">
page {
    height: 100%;
}

.ai-creation {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(
        44.7deg,
        #eaffff 0%,
        #faf6ff 50%,
        #f2f3ff 63%,
        #eaffff 100%
    );
    background-size: cover;
    .category-item {
        border-radius: 10rpx;
        background: #fff;
        box-shadow: 0 3px 10px #ebeefd;
        padding: 14rpx 40rpx;
    }
}
</style>
