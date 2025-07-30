import { ao as ElMessage, z as useUserStore, ag as useRoute, bn as ElNotification } from './server.mjs';
import { u as usePaging } from './usePaging-DU8sXki3.mjs';
import { u as usePolling } from './usePolling-DOP50YcO.mjs';
import { reactive, ref } from 'vue';
import { DrawModeEnum, DrawTypeEnum, DrawLink } from './DrawEnum-CqAPEJOR.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'lodash-es';
import '@vueuse/core';
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';

function drawing(params) {
  return $request.post({ url: "/draw.draw/drawing", params });
}
function drawingDetail(params) {
  return $request.post({ url: "/draw.draw_records/detail", params });
}
function drawingRecord(params) {
  return $request.get({ url: "/draw.draw_records/records", params });
}
function drawingDelete(params) {
  return $request.post({ url: "/draw.draw_records/delete", params });
}
function keywordPrompt(params) {
  return $request.get({ url: "/draw.draw_prompt/prompt", params });
}
function getModelList(params) {
  return $request.get({ url: "/draw.draw/getSdModel", params });
}
function getModelCategoryList() {
  return $request.get({ url: "/draw.draw/getSdModelCategory" });
}
function getDrawConfig(params) {
  return $request.get({ url: "/draw.draw/config", params });
}
const taskStatusParams = reactive({
  status: -1,
  model: DrawModeEnum.SD
});
const taskIds = ref([]);
const scroll = ref(false);
const pageLoading = ref(false);
const createLoading = ref(false);
const config = ref({});
const loraList = ref([]);
const modelList = ref([]);
const modelCategory = ref(0);
const modelCategoryList = ref([]);
const formData = ref({
  draw_api: DrawModeEnum.SD,
  // 绘图模型通道
  draw_type: "txt2img",
  // 绘画类型 txt2img,img2img,scale2d
  draw_model: "",
  // 绘图主要模型
  draw_loras: [],
  // 微调模型lora
  denoising_strength: 0.75,
  // 重绘强度
  size: "512x512",
  // 图片尺寸
  prompt: "",
  // 正向提示词
  negative_prompt: "",
  // 负向提示词
  action: "generate",
  // 绘画操作
  image_mask: "",
  // 图生图初始蒙版
  image_id: "",
  // 图片放大初始图片id
  complex_params: {
    step: 20,
    // 采样步数
    sampler_name: "Euler a",
    // 采样模式
    seed: -1,
    // 随机种子
    cfg_scale: 7
    // 提示词系数
  },
  engine: "",
  //豆包模型引擎
  quality: "",
  // dalle3 图片质量
  style: "",
  // mj / dalle3 风格选择
  version: "",
  // mj 版本
  origin_task_id: ""
  // mj 绘画任务ID (变图，放大等操作时必传)
});
const { pager, getLists } = usePaging({
  fetchFun: drawingRecord,
  params: taskStatusParams
});
const taskStatusChange = async (e) => {
  if (checkUserLogin()) return;
  taskStatusParams.status = e;
  pageLoading.value = true;
  await getLists();
  pageLoading.value = false;
};
const refreshTaskIds = () => {
  taskIds.value = getDrawingIds(pager.lists);
  if (taskIds.value.length > 0) {
    start();
  }
};
const checkOngoingTask = async () => {
  try {
    pageLoading.value = true;
    await getLists();
    config.value = await getDrawConfig({
      draw_api: formData.value.draw_api
    });
    pageLoading.value = false;
    refreshTaskIds();
  } catch (error) {
    pageLoading.value = false;
  }
};
const deleteHandle = async (id) => {
  await drawingDelete({ ids: [id] });
  ElMessage.success("\u5220\u9664\u6210\u529F");
  getLists();
};
const check = async () => {
  const route = useRoute();
  try {
    if (!taskIds.value.length) return end();
    const data = await drawingDetail({
      records_id: taskIds.value
    });
    const res = data.filter((item) => {
      if (item.status === 3 && !route.fullPath.includes("/draw")) {
        ElNotification({
          title: "\u7ED8\u753B\u6210\u529F",
          type: "success",
          dangerouslyUseHTMLString: true,
          message: `<div>\u70B9\u51FB\u524D\u5F80<a class="text-primary font-bold" href="${DrawLink[formData.value.draw_api]}">\u7ED8\u753B\u8BB0\u5F55</a>\u67E5\u770B</div>`,
          duration: 1e4
        });
      } else if (item.status === 2 && !route.fullPath.includes(DrawLink[formData.value.draw_api])) {
        ElNotification({
          title: "\u7ED8\u753B\u5931\u8D25",
          message: item.fail_reason,
          type: "error",
          duration: 1e4
        });
      }
      return item.status === 3 || item.status === 2;
    });
    if (res.length || !data.length) {
      endCallback();
    }
    return data;
  } catch (error) {
    end();
    console.log("\u83B7\u53D6\u8BE6\u60C5\u5931\u8D25=>", error);
  }
};
const endCallback = async () => {
  end();
  console.log("\u83B7\u53D6\u8BE6\u60C5\u7ED3\u675F=>");
  const userStore = useUserStore();
  userStore.getUser();
  await getLists();
  refreshTaskIds();
  config.value = await getDrawConfig({
    draw_api: formData.value.draw_api
  });
};
const { start, end } = usePolling(check, {
  key: "draw",
  totalTime: 10 * 60 * 1e3,
  time: 2e3,
  callback: endCallback
});
const createTask = async (data) => {
  try {
    end();
    await validateFormData(data);
    if (data.draw_type !== "img2img" && data.draw_api === DrawModeEnum.SD) {
      data.image_mask = "";
    }
    createLoading.value = true;
    await drawing(data);
    await getLists();
    createLoading.value = false;
    scroll.value = !scroll.value;
    refreshTaskIds();
  } catch (error) {
    createLoading.value = false;
  } finally {
    resetFormData({ action: "generate" });
  }
};
const getDrawingIds = (arr) => {
  return arr.filter((item) => {
    return item.status === 1;
  }).map((item) => item.id);
};
const validateFormData = (form) => {
  return new Promise((resolve, reject) => {
    try {
      const data = form || formData.value;
      if (data.draw_type === DrawTypeEnum.img2img) {
        if (data.image_mask === "") {
          throw new Error("\u8BF7\u4E0A\u4F20\u53C2\u8003\u56FE");
        }
      }
      if (data.prompt === "") {
        throw new Error("\u8BF7\u8F93\u5165\u63D0\u793A\u8BCD");
      }
      if (data.draw_api === "") {
        throw new Error("\u8BF7\u9009\u62E9\u4E3B\u8981\u6A21\u578B");
      }
      resolve(true);
    } catch (error) {
      ElMessage.error(error.message);
      reject(error);
    }
  });
};
const getModelCategory = async () => {
  return getModelCategoryList().then(async (res) => {
    modelCategoryList.value = [
      { label: "\u5168\u90E8", value: 0 },
      ...res.map((item) => {
        return {
          value: item.id,
          label: item.name
        };
      })
    ];
    modelCategory.value = 0;
    await getModel();
  });
};
const getModel = () => {
  getModelList({
    category_id: modelCategory.value
  }).then((res) => {
    modelList.value = res;
  });
};
const resetFormData = async (params) => {
  if (params) {
    formData.value = {
      ...formData.value,
      ...params
    };
    const model = modelList.value.find((item) => {
      return item.model_name === params.draw_model;
    });
    if (model) {
      modelCategory.value = model == null ? void 0 : model.category_id;
      await getModel();
      loraList.value = model.loras;
    }
  } else {
    formData.value = {
      ...formData.value,
      ...{
        draw_model: "",
        // 绘图主要模型
        draw_loras: [],
        // 微调模型lora
        denoising_strength: 0.75,
        size: "512x512",
        // 图片尺寸
        prompt: "",
        // 正向提示词
        negative_prompt: "",
        // 负向提示词
        action: "generate",
        // 绘画操作
        image_mask: "",
        // 图生图初始蒙版
        image_id: "",
        // 图片放大初始图片id
        complex_params: {
          step: 20,
          // 采样步数
          sampler_name: "Euler a",
          // 采样模式
          seed: -1,
          // 随机种子
          cfg_scale: 7
          // 提示词系数
        }
      }
    };
  }
};
const checkUserLogin = () => {
  const userStore = useUserStore();
  if (!userStore.isLogin) {
    userStore.toggleShowLogin();
  }
  return !userStore.isLogin;
};
const useDrawEffect = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  checkOngoingTask,
  checkUserLogin,
  config,
  createLoading,
  createTask,
  deleteHandle,
  formData,
  getLists,
  getModel,
  getModelCategory,
  loraList,
  modelCategory,
  modelCategoryList,
  modelList,
  pageLoading,
  pager,
  resetFormData,
  scroll,
  taskIds,
  taskStatusChange,
  taskStatusParams
});

export { config as a, checkUserLogin as b, createLoading as c, createTask as d, deleteHandle as e, formData as f, pageLoading as g, getLists as h, modelCategoryList as i, modelList as j, keywordPrompt as k, loraList as l, modelCategory as m, getModel as n, drawingRecord as o, pager as p, resetFormData as r, scroll as s, taskStatusChange as t, useDrawEffect as u };
//# sourceMappingURL=useDrawEffect-B2jxDCVi.mjs.map
