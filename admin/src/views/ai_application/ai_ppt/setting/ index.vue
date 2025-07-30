<template>
    <div>
        <el-form
            class="mt-4"
            ref="formRef"
            :model="formData"
            label-width="120px"
            :rules="formRules"
        >
            <el-card shadow="never" class="!border-none">
                <div class="text-xl font-medium mb-[20px]">应用设置</div>
                <el-form-item label="功能开启">
                    <div>
                        <el-switch
                            v-model="formData.status"
                            :active-value="1"
                            :inactive-value="0"
                        />
                        <div class="form-tips !text-[14px]">
                            默认关闭；功能关闭后，用户将无法访问该功能
                        </div>
                    </div>
                </el-form-item>
                <el-form-item label="PPT通道" prop="channel">
                    <div>
                        <el-select v-model="formData.channel" class="w-[400px]">
                            <el-option value="chat_ppt" label="ChatPPT" />
                        </el-select>
                        <div class="form-tips">
                          前往ChatPPT（<a class="text-primary" target="_blank" href="https://www.yoo-ai.com">www.yoo-ai.com</a>）
                          开通相关PPT应用能力，需联系客服开通：15014925911。
                        </div>
                    </div>
                </el-form-item>
                <el-form-item label="消耗电力值" prop="price">
                    <div class="w-[400px]">
                        <el-input
                            v-model="formData.price"
                            placeholder="请输入消耗电力值数量"
                            type="number"
                        />
                        <div class="form-tips">填写0则表示不消耗电力值</div>
                    </div>
                </el-form-item>
            </el-card>
        </el-form>
        <footer-btns>
            <el-button type="primary" @click="handleSave">保存</el-button>
        </footer-btns>
    </div>
</template>

<script setup lang="ts" name="aiPPTSetting">
import { getPPTConfig, setPPTConfig } from '@/api/ai_application/ai_ppt'

const formRef = shallowRef()
const formRules = computed(() => {
    return {
        price: [
            {
                required: true,
                message: '请输入消耗电力值'
            }
        ],
        channel: [
            {
                required: true,
                message: '请选择搜索通道'
            }
        ]
    }
})
const formData = ref({
    status: 0,
    channel: 'tiangong',
    price: 0
})

const getData = async () => {
    formData.value = await getPPTConfig()
}

const handleSave = async () => {
    await formRef.value?.validate()
    await setPPTConfig(formData.value)
}
onMounted(() => {
    getData()
})
</script>
