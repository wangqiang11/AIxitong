<template>
    <div class="pt-[10px]">
        <el-form-item label="AI模型" prop="model_id">
            <div class="w-80">
                <ModelPicker
                    class="flex-1"
                    v-model:id="formData.model_id"
                    v-model:sub_id="formData.model_sub_id"
                    v-model:configs="modelConfig"
                    :set-default="false"
                    disabled
                />
            </div>
        </el-form-item>

        <el-form-item label="相似度" required prop="search_similarity">
            <div class="flex-1 min-w-0">
                <div class="w-full flex">
                    <div class="flex-1 max-w-[320px]">
                        <el-slider
                            :min="0"
                            :max="1"
                            :step="0.001"
                            v-model="formData.search_similarity"
                        />
                    </div>
                </div>

                <div class="form-tips">
                    输入0-1之间的数值，支持3位小数点；高相似度推荐设置0.8以上
                </div>
            </div>
        </el-form-item>
        <el-form-item label="单次搜索数量" required prop="search_limits">
            <div class="flex-1 min-w-0">
                <div class="w-full flex">
                    <div class="flex-1 max-w-[320px]">
                        <el-slider :min="0" :max="20" v-model="formData.search_limits"/>
                    </div>
                </div>

                <div class="form-tips">默认设置为5，请输入0-20之间的整数数值</div>
            </div>
        </el-form-item>

        <el-form-item label="温度属性" required prop="temperature">
            <div class="w-80">
                <el-slider v-model="formData.temperature" :min="modelConfig?.range?.[0]" :max="modelConfig?.range?.[1]" :step="0.1" />
                <div class="form-tips"> 输入{{modelConfig?.range?.[0]}}-{{modelConfig?.range?.[1]}}之间的数值，支持1位小数点；</div>
            </div>
        </el-form-item>

        <el-form-item label="空搜索回复">
            <el-radio-group v-model="formData.search_empty_type">
                <el-radio :label="1"> AI回复</el-radio>
                <el-radio :label="2"> 自定义回复</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item v-if="formData.search_empty_type === 2">
            <div class="w-80">
                <el-input
                    v-model="formData.search_empty_text"
                    placeholder="请输入回复内容，当搜索匹配不上内容时，直接回复填写的内容"
                    type="textarea"
                    :autosize="{ minRows: 6, maxRows: 6 }"
                    :maxlength="1000"
                    show-word-limit
                    clearable
                />
            </div>
        </el-form-item>

        <el-form-item label="上下文" required prop="context_num">
            <div class="w-80">
                <el-slider v-model="formData.context_num" :min="0" :max="5" :step="1" />
                <div class="form-tips">生成文本的最大长度，取值范围为0~5之间的整数</div>
          </div>
        </el-form-item>

        <el-form-item label="文件解析" prop="support_file">
            <div>
                <el-radio-group v-model="formData.support_file">
                  <el-radio :label="1"> 启用 </el-radio>
                  <el-radio :label="0"> 关闭 </el-radio>
                </el-radio-group>
                <div class="form-tips">开启后对话时支持上传文件，需消耗大量token，按需启用</div>
            </div>
        </el-form-item>

        <el-form-item label="重排开关">
            <div>
                <el-radio-group v-model="formData.ranking_status">
                    <el-radio :label="0"> 关闭</el-radio>
                    <el-radio :label="1"> 启用</el-radio>
                </el-radio-group>
                <div class="form-tips">
                    开启后，则会对从数据库检索的内容进行重新排序(去最高分数据)
                </div>
            </div>
        </el-form-item>

        <el-form-item label="重排分数" v-if="formData.ranking_status === 1">
            <div class="w-80">
               <div class="max-w-[320px]">
                    <el-slider :min="0" :max="1" :step="0.001" v-model="formData.ranking_score"/>
                </div>
                <div class="form-tips">
                    表示如果数据重排后，分数没有达到该值则会过滤掉。
                </div>
            </div>
        </el-form-item>

        <el-form-item label="重排模型" prop="vl_models" v-if="formData.ranking_status === 1">
            <div class="w-80">
                <ModelPicker
                    class="flex-1"
                    type="rankingModels"
                    v-model:id="formData.ranking_model"
                    :set-default="false"
                />
            </div>
        </el-form-item>
    </div>
</template>

<script setup lang="ts">
import {useVModel} from '@vueuse/core'
import {useAppStore} from "~/stores/app";

const props = defineProps<{
    modelValue: Record<string, any>
}>()
const emit = defineEmits<{
    (event: 'update:modelValue', value: Record<string, any>): void
}>()
const formData = useVModel(props, 'modelValue', emit)
const modelConfig = ref({})

const appStore = useAppStore()
</script>
