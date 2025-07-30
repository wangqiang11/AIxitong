<!-- 网站信息 -->
<template>
    <div class="website-information">
        <el-form ref="formRef" :rules="rules" class="ls-form" :model="formData" label-width="120px">
            <el-card shadow="never" class="!border-none">
                <div class="text-xl font-medium mb-[20px]">示例设置</div>
                <el-form-item label="生成示例" prop="example_status">
                    <div>
                        <el-switch
                            v-model="formData.example_status"
                            :active-value="1"
                            :inactive-value="0"
                        />
                        <div class="form-tips">开启的话，前台显示示例</div>
                    </div>
                </el-form-item>
                <el-form-item label="示例内容" prop="example_content">
                    <div class="w-[460px]">
                        <el-input
                            v-model="formData.example_content"
                            type="textarea"
                            :rows="10"
                            resize="none"
                        />
                        <div class="form-tips">用#分隔为一个示例</div>
                    </div>
                </el-form-item>
            </el-card>
        </el-form>
        <footer-btns>
            <el-button type="primary" @click="handleSubmit">保存</el-button>
        </footer-btns>
    </div>
</template>

<script lang="ts" setup name="aiPPTExample">
import { getPPTExample, setPPTExample } from '@/api/ai_application/ai_ppt'

const formRef = ref()

// 表单数据
const formData = reactive({
    example_status: 0,
    example_content: ''
})

// 表单验证
const rules = {}

// 获取备案信息
const getData = async () => {
    const data = await getPPTExample()
    for (const key in formData) {
        //@ts-ignore
        formData[key] = data[key]
    }
}

// 设置备案信息
const handleSubmit = async () => {
    await formRef.value?.validate()
    await setPPTExample(formData)
    getData()
}

getData()
</script>

<style lang="scss" scoped></style>
