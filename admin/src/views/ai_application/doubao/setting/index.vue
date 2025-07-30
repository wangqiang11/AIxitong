<template>
    <div>
        <el-card shadow="never" class="!border-none">
            <el-tabs v-model="activeTab">
                <el-tab-pane label="豆包基础配置" name="configs" lazy>
                    <el-form
                        label-width="150px"
                        ref="sdConfigsRef"
                        :model="configs"
                        :rules="sdConfigsRules"
                    >
                        <el-form-item label="功能开启" prop="status">
                            <div>
                                <el-switch
                                    v-model="configs.status"
                                    :active-value="'1'"
                                    :inactive-value="'0'"
                                ></el-switch>
                                <div class="form-tips !text-[14px] flex items-center">
                                    默认关闭；功能关闭后，用户将无法访问该功能
                                    <el-button type="primary" link class="ml-3">
                                        <a :href="configs.website" target="_blank">开通地址</a>
                                    </el-button>
                                </div>
                            </div>
                        </el-form-item>
                        <el-form-item label="超时处理时长" prop="time_out">
                            <div>
                                <el-input-number
                                    v-model="configs.time_out"
                                    :min="0"
                                />
                                <div class="form-tips !text-[14px]">
                                    单位：分钟，默认10分钟，设置时长过短或过长可能会影响到绘画体验，请谨慎操作！
                                </div>
                            </div>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="应用计费" name="charging" lazy>
                    <el-form
                        label-width="120px"
                        ref="sdChargingRef"
                        :model="charging"
                        :rules="sdChargingRules"
                    >
                        <el-form-item label="应用名称" prop="app_name">
                            <el-input
                                placeholder="豆包绘画"
                                disabled
                                class="w-[400px]"
                                v-model="charging.app_name"
                            />
                        </el-form-item>
                        <el-form-item label="自定义名称" prop="diy_name">
                            <div>
                                <div class="flex">
                                    <el-input
                                        placeholder="请输入自定义名称"
                                        class="w-[400px]"
                                        v-model="charging.diy_name"
                                    />
                                </div>
                                <div class="form-tips !text-[14px]">
                                    不填写前台则默认显示模型名称
                                </div>
                            </div>
                        </el-form-item>
                        <el-form-item label="消耗电力值" prop="power">
                            <div>
                                <el-input-number
                                    v-model="charging.power"
                                    :min="0"
                                />
                                <div class="form-tips !text-[14px]">
                                    填写0则表示不消耗电力值
                                </div>
                            </div>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </el-card>
        <footer-btns v-perms="['setting.ai.draw/save']">
            <el-button type="primary" @click="handleSave">保存</el-button>
        </footer-btns>
    </div>
</template>
<script setup lang="ts" name="aiDrawDoubaoModel">
import {getDeawConfig, setDeawConfig} from '@/api/ai_draw/draw_setting';
import type {FormInstance, FormRules} from 'element-plus';

interface SdConfig {
    status?: string;
    translate_api?: string;
    translate_api_model: string
    translate_api_list?: {
        model: string;
        model_name: string;
        prompt: string;
    }[];
    translate_prompt?: string;
    time_out?: string;
    proxy_url?: string;
    secret_key?: string;
    appid?: string;
    file_size?: number;
    translate_switch?: string;
    model?: string;
    website?: string,
    translate_type?: number;
}

interface SdCharging {
    app_name?: string;
    diy_name?: string;
    power?: number;
    process_mode?: string;
    doc?: string
}

enum TranslateApi {
    BAIDU = 'baidu',
    OPENAI = 'openai',
}

const activeTab = ref('configs');
const configs = ref<SdConfig>({
    status: '0',
    translate_api: '',
    translate_api_model: '',
    translate_api_list: [],
    translate_prompt: '',
    time_out: '',
    proxy_url: '',
    secret_key: '',
    appid: '',
    file_size: 10,
    translate_switch: '0',
    model: 'doubao',
    website: '',
    translate_type: 0
});
const charging = ref<SdCharging>({
    app_name: '',
    diy_name: '',
    power: 0,
    process_mode: 'fast',
    doc: ''
});
const configData = ref<SdConfig & SdCharging>({});
const sdConfigsRef = ref<FormInstance>();
const sdChargingRef = ref<FormInstance>();

const sdConfigsRules = reactive<FormRules<SdConfig & SdCharging>>({
    proxy_url: [
        {
            required: true,
            message: '请填写API域名',
            trigger: ['blur', 'change'],
        },
    ],
    time_out: [
        {
            required: true,
            message: '请填写超时处理时长',
            trigger: ['blur', 'change'],
        },
    ],
});

const sdChargingRules = reactive<FormRules<SdConfig | SdCharging>>({
    power: [
        {
            required: true,
            message: '请填写消耗电力值',
            trigger: ['blur', 'change'],
        },
    ],
});

const getTranslateApiList = computed(() => {
    return configs.value.translate_api_list?.find(item => item.model === configs.value.translate_api)?.model_list || []
})

const getData = async () => {
    const res = await getDeawConfig({
        model: 'doubao'
    });
    Object.keys(configs.value).map((key) => {
        configs.value[key as keyof SdConfig] = res[key] || '';
    });
    Object.keys(charging.value).map((key) => {
        charging.value[key as keyof SdCharging] = res[key] || '';
    });
    configData.value = res;
};

const handleSave = async () => {
    if (activeTab.value === 'configs') {
        await sdConfigsRef.value?.validate();
        await setDeawConfig({
            ...configData.value,
            ...configs.value,
            model: 'doubao'
        });
    } else {
        await sdChargingRef.value?.validate();
        await setDeawConfig({
            ...configData.value,
            ...charging.value,
            model: 'doubao'
        });
    }
    await getData();
};

onMounted(() => {
    getData();
});
</script>
