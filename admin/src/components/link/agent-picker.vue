<template>
    <div class="detail" v-loading="pager.loading">
        <el-form ref="formRef" :model="queryParams" :inline="true">
            <el-form-item label="智能体名称">
                <el-input
                    class="w-[180px]"
                    v-model="queryParams.name"
                    placeholder="请输入智能体名称"
                    clearable
                    @keyup.enter="resetPage"
                />
            </el-form-item>
            <el-form-item label="智能体分类">
                <div class="w-[150px]">
                    <el-select v-model="queryParams.cid">
                        <el-option label="全部" value="" />
                        <el-option
                            v-for="(item, index) in categoryList"
                            :key="index"
                            :label="item.name"
                            :value="item.id"
                        />
                    </el-select>
                </div>
            </el-form-item>
            <el-form-item label="">
                <el-button type="primary" @click="resetPage">
                    <Icon name="el-icon-Search" />
                </el-button>
            </el-form-item>
        </el-form>
        <el-table
            ref="table"
            :data="pager.lists"
            style="width: 100%"
            height="356px"
            size="small"
            row-key="id"
        >
            <el-table-column label="选择" min-width="50">
                <template #default="{ row }">
                    <div class="flex row-center">
                        <el-checkbox
                            :model-value="getSelectItem(row.id)"
                            size="large"
                            @change="handleSelectItem(row)"
                        />
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="图标" min-width="100">
                <template #default="{ row }">
                    <el-image :src="row.image" class="w-[44px] h-[44px]" />
                </template>
            </el-table-column>
            <el-table-column label="智能体名称" prop="name" min-width="120" />
            <el-table-column label="所属分类" min-width="180" prop="category" />

            <el-table-column label="状态" min-width="100">
                <template #default="{ row }">
                    <div>
                        <el-tag class="ml-2" v-if="row.verify_status == 1" type="success">
                            审核通过
                        </el-tag>
                        <el-tag class="ml-2" v-else-if="row.verify_status == 0" type="warning">
                            审核中
                        </el-tag>
                        <el-tag class="ml-2 cursor-pointer" v-else type="danger"> 审核失败 </el-tag>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <div class="flex justify-end mt-5">
            <pagination v-model="pager" @change="getLists()" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { LinkTypeEnum } from '.'
import { usePaging } from '@/hooks/usePaging'
import { getRobotSquareLists, getRobotCateAll } from '@/api/knowledge_base/robot_square'
import { Search } from '@element-plus/icons-vue'

//TODO TODO
const props = defineProps({
    modelValue: {
        type: Object as PropType<any>,
        default: () => ({})
    },
    type: {
        type: String,
        default: 'pc'
    }
})
const emit = defineEmits<{
    (event: 'update:modelValue', value: any): void
}>()

const selectData = ref<any>({
    path: '/pages/news_detail/news_detail',
    name: '',
    query: {},
    type: LinkTypeEnum.AGENT
})

//分类列表
const categoryList: any = ref([])
// 查询参数
const queryParams = reactive<any>({
    name: '',
    cid: ''
})

const { pager, getLists, resetPage, resetParams } = usePaging({
    fetchFun: getRobotSquareLists,
    params: queryParams
})

// pc还是移动端
const typeLink = computed(() =>
    props.type == 'pc' ? '/robot_square/chat' : '/packages/pages/square_chat/square_chat'
)

//获取分类列表
const getCategoryList = async () => {
    const lists = await getRobotCateAll({
        page_type: 0
    })
    categoryList.value = lists
}

const getSelectItem = (id: number) => {
    return id == Number(selectData.value.id)
}
/**
 * @description 选择
 */
const handleSelectItem = (event: any) => {
    // 这里是跳转参数，比如说是移动端和pc端的参数会不同
    let query = null
    if (props.type == 'pc') {
        query = { square_id: event.id }
    } else {
        query = { square_id: event.id }
    }
    selectData.value = {
        id: event.id,
        name: event.name,
        path: typeLink.value,
        query: query,
        type: LinkTypeEnum.AGENT
    }

    emit('update:modelValue', selectData.value)
}
watch(
    () => props.modelValue,
    (value) => {
        if (value.type != LinkTypeEnum.AGENT) {
            return (selectData.value = {
                id: '',
                name: '',
                path: typeLink.value,
                type: LinkTypeEnum.SHOP_PAGES
            })
        }
        selectData.value = value
    },
    {
        immediate: true
    }
)

getCategoryList()
getLists()
</script>

<style lang="scss" scoped>
:deep(.el-input-group__append) {
    .el-button {
        margin: 0 0;
    }
}
</style>
