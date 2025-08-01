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
                <div class="text-xl font-medium mb-[20px]">AI设置</div>
                <el-form-item label="功能开启" prop="music_status">
                    <div>
                        <el-switch
                            v-model="formData.music_status"
                            :active-value="1"
                            :inactive-value="0"
                        ></el-switch>
                        <div class="form-tips !text-[14px] flex items-center">
                            默认关闭；功能关闭后，用户将无法访问该功能
                            <!-- <el-button type="primary" link class="ml-3">
                                <a :href="formData.website" target="_blank">开通地址</a>
                            </el-button> -->
                        </div>
                    </div>
                </el-form-item>

                <el-form-item label="AI接口" required :show-message="false">
                    <div>
                        <div>
                            <el-radio-group v-model="currentKey">
                                <el-radio
                                    :label="item.channel"
                                    v-for="(item, key) in formData.music_models"
                                    :key="key"
                                >
                                    {{ item.name }}
                                </el-radio>
                            </el-radio-group>
                        </div>
                        <div
                            class="form-tips"
                            v-if="
                                formData.music_models[currentKey]?.tips ||
                                formData.music_models[currentKey]?.website
                            "
                        >
                            <template v-if="formData.music_models[currentKey].tips">
                                {{ formData.music_models[currentKey].tips }}
                            </template>
                            <a
                                v-if="formData.music_models[currentKey].website"
                                class="text-primary"
                                target="_blank"
                                :href="formData.music_models[currentKey].website"
                            >
                                前往开通
                            </a>
                        </div>
                    </div>
                </el-form-item>
                <template v-if="currentKey">
                    <el-form-item label="支持版本">
                        <div>
                            <el-checkbox-group v-model="formData.music_models[currentKey].version">
                                <el-checkbox
                                    v-for="(item, key) in formData.music_version"
                                    :label="key"
                                    :key="item"
                                >
                                    {{ item }}
                                </el-checkbox>
                            </el-checkbox-group>
                            <div class="form-tips">不同版本产生的资费不同，请谨慎设置</div>
                        </div>
                    </el-form-item>
                    <el-form-item label="消耗电力值" :prop="`music_models.${currentKey}.price`">
                        <div class="w-[460px]">
                            <el-input
                                v-model="formData.music_models[currentKey].price"
                                placeholder="请输入消耗电力值数量"
                                type="number"
                            />
                            <div class="form-tips">填写0则表示不消耗电力值</div>
                        </div>
                    </el-form-item>
                    <!-- <el-form-item label="API域名" :prop="`music_models.${currentKey}.agency_api`">
                        <div class="w-[460px]">
                            <el-input
                                v-model="formData.music_models[currentKey].agency_api"
                                placeholder="请输入自定义API域名"
                            />
                        </div>
                    </el-form-item> -->
                </template>
            </el-card>
            <el-card shadow="never" class="!border-none mt-4">
                <div class="text-xl font-medium mb-[20px]">智能联想设置</div>
                <el-form-item label="启用智能联想">
                    <div>
                        <el-switch
                            v-model="formData.music_imagine.status"
                            :active-value="1"
                            :inactive-value="0"
                        />
                        <div class="form-tips">开启后，使用AI生成歌词的需要额外消耗电力值</div>
                    </div>
                </el-form-item>
                <el-form-item label="AI生成通道" prop="music_imagine.model_id">
                    <div>
                        <el-radio-group v-model="formData.music_imagine.model_id">
                            <el-radio
                                v-for="(item, index) in formData.chat_models"
                                :label="item.id"
                                :key="index"
                                @change="modelChange"
                            >
                                {{ item.name }}
                            </el-radio>
                        </el-radio-group>
                    </div>
                </el-form-item>
                <el-form-item label="选择模型" prop="music_imagine.cost_id">
                    <div class="w-[460px]">
                        <el-select
                            class="w-full"
                            v-model="formData.music_imagine.cost_id"
                            placeholder=""
                            clearable
                        >
                            <el-option
                                v-for="item in currentModel"
                                :value="item.id"
                                :label="item.alias"
                                :key="item.id"
                            />
                        </el-select>
                    </div>
                </el-form-item>
                <el-form-item label="额外消耗电力值" prop="music_imagine.price">
                    <div class="w-[460px]">
                        <el-input
                            v-model="formData.music_imagine.price"
                            placeholder="请输入额外消耗电力值"
                            type="number"
                        />
                        <div class="form-tips">不能为空，填写0则表示不额外扣费</div>
                    </div>
                </el-form-item>
            </el-card>
        </el-form>
        <footer-btns>
            <el-button type="primary" @click="handleSave">保存</el-button>
        </footer-btns>
    </div>
</template>

<script setup lang="ts" name="musicSetting">
import { getMusicConfig, putMusicConfig } from '@/api/ai_application/music'
const formRef = shallowRef()
const formRules = computed(() => {
    return {
        [`music_models.${currentKey.value}.price`]: [
            {
                required: true,
                message: '请输入消耗电力值'
            }
        ],
        [`music_models.${currentKey.value}.agency_api`]: [
            {
                required: true,
                message: '请输入自定义API域名'
            }
        ],
        'music_imagine.model_id': [
            {
                required: true,
                message: '请选择AI生成通道'
            }
        ],
        'music_imagine.cost_id': [
            {
                required: true,
                message: '请选择模型'
            }
        ]
    }
})
const formData = ref({
    chat_models: [] as any[],
    music_models: {} as any,
    music_imagine: {
        cost_id: '',
        model_id: '',
        price: '',
        status: 0
    },
    music_status: 1,
    music_version: {}
})

const modelChange = () => {
    const [item] = currentModel.value
    if (item) {
        formData.value.music_imagine.cost_id = item.id
    }
}
const currentModel = computed(() => {
    const current = formData.value.chat_models.find(
        (item) => item.id === formData.value.music_imagine.model_id
    )
    return current?.models || []
})
const getData = async () => {
    formData.value = await getMusicConfig()
}

const currentKey = computed({
    get() {
        const select: any = Object.values(formData.value.music_models).find(
            (item: any) => item.checked
        )
        return select?.channel || ''
    },
    set(value) {
        Object.keys(formData.value.music_models).forEach((key) => {
            formData.value.music_models[key].checked = false
            if (key == value) {
                formData.value.music_models[key].checked = true
            }
        })
    }
})

const handleSave = async () => {
    await formRef.value?.validate()
    await putMusicConfig(formData.value)
}
onMounted(() => {
    getData()
})
</script>
