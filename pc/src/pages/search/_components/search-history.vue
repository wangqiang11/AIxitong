<script setup lang="ts">
import { useUserStore } from '~/stores/user'
import { getSearchLists } from '~/api/search'
import { ModelEnums } from '../searchEnums'

const userStore = useUserStore()
const router = useRouter()
const buttonRef = ref()
const popoverRef = ref()

const modelToIconMap = {
    [ModelEnums.BASE]: 'local-icon-search_base',
    [ModelEnums.ENHANCE]: 'local-icon-search_copilot',
    [ModelEnums.STUDY]: 'local-icon-search_research'
}

const onClickOutside = () => {
    unref(popoverRef)?.hide()
}

const pageInfo = reactive({
    pageNo: 1,
    count: 1,
    pageSize: 15,
    lists: [] as any[]
})

const getLists = async () => {
    if (!userStore.isLogin) return
    const data = await getSearchLists({
        page_no: pageInfo.pageNo,
        page_size: pageInfo.pageSize
    })
    pageInfo.count = data.count
    if (pageInfo.pageNo === 1) {
        pageInfo.lists = []
    }
    pageInfo.lists.push(...data.lists)
}

const load = async () => {
    if (pageInfo.count >= pageInfo.pageNo * pageInfo.pageSize) {
        pageInfo.pageNo++
        await getLists()
    }
}

const { lockFn: resetPage, isLock } = useLockFn(async () => {
    pageInfo.pageNo = 1
    await getLists()
})
</script>

<template>
    <div>
        <el-tooltip effect="light" content="历史搜索" placement="bottom">
            <el-button link ref="buttonRef" v-click-outside="onClickOutside">
                <template #icon>
                    <Icon name="local-icon-clock" :size="18" />
                </template>
            </el-button>
        </el-tooltip>
        <el-popover
            ref="popoverRef"
            :virtual-ref="buttonRef"
            trigger="click"
            width="300px"
            virtual-triggering
            :popper-style="{
                bottom: '20px'
            }"
            @show="resetPage"
        >
            <div class="h-full flex flex-col">
                <div class="flex items-center">
                    <span class="mr-auto"> 历史搜索 </span>
                    <div>
                        <el-button link @click="onClickOutside">
                            <template #icon>
                                <Icon name="el-icon-Close" :size="18" />
                            </template>
                        </el-button>
                    </div>
                </div>
                <div class="flex-1 min-h-0" v-loading="isLock">
                    <el-scrollbar class="h-full" v-if="pageInfo.count > 0">
                        <div v-infinite-scroll="load">
                            <div
                                v-for="item in pageInfo.lists"
                                :key="item.id"
                                class="cursor-pointer p-[12px] hover:bg-page"
                                @click="router.push({ query: { id: item.id } })"
                            >
                                <div class="line-clamp-2">
                                    {{ item.ask }}
                                </div>
                                <div
                                    class="flex items-center mt-1 text-tx-secondary"
                                >
                                    <Icon
                                        :name="modelToIconMap[item.model]"
                                        :size="14"
                                    />
                                    <span class="ml-1 text-xs">
                                        {{ item.create_time }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </el-scrollbar>
                    <el-empty v-else :image-size="150" />
                </div>
            </div>
        </el-popover>
    </div>
</template>

<style scoped lang="scss"></style>
