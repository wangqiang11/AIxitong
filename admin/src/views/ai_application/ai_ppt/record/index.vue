<template>
    <div>
        <el-card class="!border-none" shadow="never">
            <el-form ref="formRef" class="mb-[-16px]" :model="queryParams" :inline="true">
                <el-form-item label="用户信息">
                    <el-input
                        class="w-[280px]"
                        v-model="queryParams.user_info"
                        placeholder="请输入用户ID/用户昵称"
                        clearable
                        @keyup.enter="resetPage"
                    />
                </el-form-item>
                <el-form-item label="关键词">
                    <el-input
                        class="w-[280px]"
                        v-model="queryParams.keyword"
                        placeholder="请输入关键词"
                        clearable
                        @keyup.enter="resetPage"
                    />
                </el-form-item>
                <el-form-item label="支付状态">
                    <el-select class="w-[240px]" v-model="queryParams.pay_status">
                        <el-option label="全部" value="" />
                        <el-option label="未支付" :value="0" />
                        <el-option label="已支付" :value="1" />
                    </el-select>
                </el-form-item>
                <el-form-item label="提问时间">
                    <daterange-picker
                        v-model:startTime="queryParams.start_time"
                        v-model:endTime="queryParams.end_time"
                    />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="resetPage">查询</el-button>
                    <el-button @click="resetParams">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="!border-none mt-4" shadow="never">
            <div>
                <ElButton
                    :disabled="selectData.length <= 0"
                    class="!mb-4"
                    @click="handleDelete(selectData)"
                >
                    批量删除
                </ElButton>
            </div>
            <el-table
                size="large"
                v-loading="pager.loading"
                :data="pager.lists"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55"/>
                <el-table-column label="ID" prop="id" min-width="80"/>
                <el-table-column label="用户信息" min-width="150">
                    <template #default="{ row }">
                        <div class="flex items-center">
                            <image-contain
                                radius="50%"
                                class="flex-none mr-2"
                                v-if="row.avatar"
                                :src="row.avatar"
                                :width="48"
                                :height="48"
                                :preview-src-list="[row.avatar]"
                                preview-teleported
                                fit="contain"
                            />
                            <span>{{ row.nickname }}</span>
                        </div>
                    </template>
                </el-table-column>

                <el-table-column label="用户提问" prop="ask" min-width="200">
                    <template #default="{ row }">
                        <OverflowTooltip :content="row.prompt" :line="3" :teleported="true"/>
                    </template>
                </el-table-column>
                <el-table-column label="PP类型" prop="type" min-width="100"/>
                <el-table-column label="生成结果" min-width="120">
                    <template #default="{ row }">
                        <el-tag type="warning" v-if="row.status === 0 || row.status === 1">
                            生成中
                        </el-tag>
                        <el-tag type="success" v-else-if="row.status === 2">
                            生成完成
                        </el-tag>
                        <el-tag v-else-if="row.status === 3" type="error">生成失败</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="支付状态" min-width="120">
                  <template #default="{ row }">
                    <el-tag type="success" v-if="row.pay_status === 1">
                      已支付
                    </el-tag>
                    <el-tag type="danger" v-else>
                      未支付
                    </el-tag>
                  </template>
                </el-table-column>
                <el-table-column label="消耗电力值" prop="price" min-width="120"/>
                <el-table-column label="请求ip" prop="ip" min-width="140"/>
                <el-table-column label="创建时间" prop="create_time" min-width="180"/>

                <el-table-column label="操作" min-width="180" fixed="right">
                    <template #default="{ row }">
                        <el-button type="primary" link @click="openPop(row)">
                            查看ppt
                        </el-button>
                        <ElButton link v-if="row.file_url" type="primary" @click="download(row.file_url, '')">
                            下载
                        </ElButton>
                        <el-button type="danger" link @click="handleDelete([row.id])">
                            删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="flex justify-end mt-4">
                <pagination v-model="pager" @change="getLists"/>
            </div>
        </el-card>

        <preview-pop v-if="showPop" ref="popRef" @close="showPop=false"/>
    </div>
</template>
<script lang="ts" setup name="aiPPTRecord">
import {getPPTRecord, delPPTRecord} from '@/api/ai_application/ai_ppt'
import {usePaging} from '@/hooks/usePaging'
import {download} from '@/utils/download'

import feedback from '@/utils/feedback'
import {ElButton} from 'element-plus'
import PreviewPop from './preview-pop.vue'

const route = useRoute()
const type = route.query.type
const queryParams = reactive({
    type: type,
    user_info: '', //用户信息
    keyword: '', //关键词
    censor_status: '', //审核状态
    pay_status: '', // 支付状态
    start_time: '',
    end_time: ''
})

//弹框ref
const popRef = shallowRef()
const showPop = ref<boolean>(false)

const {pager, getLists, resetPage, resetParams} = usePaging({
    fetchFun: getPPTRecord,
    params: queryParams
})

//打开弹框
const openPop = async (item: any) => {
    showPop.value = true
    await nextTick()
    popRef.value.open(item)
}

const selectData = ref<number[]>([])
const handleSelectionChange = (val: any[]) => {
    selectData.value = val.map((item) => item.id)
}
const preview = (url: string) => {
    window.open(url, '_blank')
}
const handleDelete = async (id: number[]) => {
    await feedback.confirm('确定要删除？')
    await delPPTRecord({id})
    getLists()
}

getLists()
</script>
