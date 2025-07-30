import { ag as useRoute, a5 as useAppStore, z as useUserStore, a as useRouter, A as feedback, ah as __nuxt_component_0, b3 as __nuxt_component_1$1 } from './server.mjs';
import { _ as __nuxt_component_7 } from './index-CXZnYiu9.mjs';
import { useSSRContext, defineComponent, ref, shallowRef, provide, reactive, withAsyncContext, nextTick, watch, withCtx, unref, isRef, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { isArray, cloneDeep } from 'lodash-es';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { watchDebounced } from '@vueuse/core';
import CreatePanel from './create-panel-DOW-5Uek.mjs';
import CreateResults from './create-results-93a7QIa8.mjs';
import ModelSelect from './model-select-DDD5seYr.mjs';
import { a as getChatRecord, b as chatSendText, e as cleanChatRecord } from './chat-jd47avQj.mjs';
import { g as getCategoryList, a as getCreantionList, b as getCreationDetail } from './create-DFvp87Fg.mjs';
import { u as useRechargeStore } from './recharge-0plSVxH9.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './index-CUhOTuS-.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-0xCxAaTZ.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import './index-BoqjHllR.mjs';
import './el-collapse-item-DSo9CmH5.mjs';
import './index-DadLUs6d.mjs';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-DLL0sEcv.mjs';
import 'async-validator';
import './el-radio-group-PXDiQVwm.mjs';
import './index-53t5ntO1.mjs';
import './el-segmented-KMsqQ2AI.mjs';
import './index-DRyhljQ3.mjs';
import 'markdown-it';
import 'highlight.js';
import '@vscode/markdown-it-katex';
import './useAudioPlay-C6V9947w.mjs';
import './el-empty-xbPr04pX.mjs';
import './el-drawer-C2UOPjce.mjs';
import './index-L3E_sDO1.mjs';
import './index-DNeGbNHc.mjs';
import './position-DVxxNIGX.mjs';
import './useCopy-CfS-iChu.mjs';
import './create_record_null-C_UPv5do.mjs';
import './nuxt-link-l5zPv3vf.mjs';
import './index-C2yEelJa.mjs';

const timeFormat = (dateTime, fmt = "yyyy-mm-dd") => {
  if (!dateTime) dateTime = Number(/* @__PURE__ */ new Date());
  if (dateTime.toString().length === 10) dateTime *= 1e3;
  const date = new Date(dateTime);
  let ret;
  const opt = {
    "y+": date.getFullYear().toString(),
    // 年
    "m+": (date.getMonth() + 1).toString(),
    // 月
    "d+": date.getDate().toString(),
    // 日
    "h+": date.getHours().toString(),
    // 时
    "M+": date.getMinutes().toString(),
    // 分
    "s+": date.getSeconds().toString()
    // 秒
  };
  for (const k in opt) {
    ret = new RegExp(`(${k})`).exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
      );
    }
  }
  return fmt;
};
var CreationEnum = /* @__PURE__ */ ((CreationEnum2) => {
  CreationEnum2[CreationEnum2["Normal"] = 1] = "Normal";
  CreationEnum2[CreationEnum2["Expand"] = 2] = "Expand";
  CreationEnum2[CreationEnum2["Simple"] = 3] = "Simple";
  CreationEnum2[CreationEnum2["Continue"] = 4] = "Continue";
  CreationEnum2[CreationEnum2["Change1"] = 5] = "Change1";
  CreationEnum2[CreationEnum2["Change2"] = 6] = "Change2";
  CreationEnum2[CreationEnum2["Change3"] = 7] = "Change3";
  return CreationEnum2;
})(CreationEnum || {});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "produce",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const searchKeyword = ref("");
    const route = useRoute();
    useRechargeStore();
    const isCollapseAllOpen = ref(true);
    const collapseOpen = ref([]);
    const formData = ref({});
    const appStore = useAppStore();
    const userStore = useUserStore();
    const router = useRouter();
    const { cateId, modelId } = route.query;
    const currentTab = ref("current");
    const chatModel = shallowRef({});
    provide("chatModel", chatModel);
    const modelState = reactive({
      cateId: cateId || "0",
      modelId,
      modelKey: ""
    });
    const handleSelect = async (id) => {
      modelState.cateId = id;
      await modelListRefresh();
      const [first] = currentModelList.value || [];
      router.replace({
        path: "",
        query: {
          cateId: id,
          modelId: first == null ? void 0 : first.id
        }
      });
    };
    const {
      data: creationLists,
      pending,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => getCategoryList(), {
      default() {
        return [];
      },
      lazy: true
    }, "$3iMOmfmgi4")), __temp = await __temp, __restore(), __temp);
    ref(false);
    ref(0);
    let swiperRef = null;
    const slideTo = (index) => {
      try {
        swiperRef == null ? void 0 : swiperRef.slideTo(index);
      } catch (error) {
        console.error(error);
      }
    };
    const { data: currentModelList, refresh: modelListRefresh } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => getCreantionList({
        keyword: searchKeyword.value,
        category_id: modelState.cateId,
        page_size: 999
      }),
      { lazy: true },
      "$VSSSR0UZJy"
    )), __temp = await __temp, __restore(), __temp);
    watchDebounced(
      searchKeyword,
      (value) => {
        modelListRefresh();
      },
      {
        debounce: 500
      }
    );
    const cleanChatLog = async () => {
      await feedback.confirm("\u786E\u5B9A\u6E05\u7A7A\u521B\u4F5C\u8BB0\u5F55\uFF1F");
      await cleanChatRecord({ type: 2, other_id: modelState.modelId });
      currentCreationHistory.value = [];
      resetHistory();
    };
    const { data: modelData, refresh: modelApiRefresh } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => getCreationDetail({
        id: modelState.modelId
      }),
      {
        default() {
          return {};
        },
        transform(data) {
          return data;
        },
        lazy: true
      },
      "$dzxelPzSXF"
    )), __temp = await __temp, __restore(), __temp);
    const pageInfo = reactive({
      pageNo: 1,
      count: 0,
      pageSize: 15,
      lists: []
    });
    const { refresh: creationHistoryRefresh, pending: creationHistoryPending } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => getChatRecord({
        other_id: modelState.modelId || 0,
        page_size: pageInfo.pageSize,
        page_no: pageInfo.pageNo,
        type: 2
      }),
      {
        default() {
          return [];
        },
        transform(data) {
          pageInfo.count = data.count;
          const list = data.lists.map((item) => {
            let title = "";
            if (isArray(item.ask)) {
              const ask = (item == null ? void 0 : item.ask[0]) || {};
              title = `${ask.title}\uFF1A${ask.value}`;
            } else {
              title = item.ask;
            }
            return {
              ...item,
              title
            };
          });
          if (pageInfo.pageNo === 1) {
            pageInfo.lists = [];
          }
          pageInfo.lists.push(...list);
          return list;
        },
        lazy: true
      },
      "$T4LGrdB7sx"
    )), __temp = await __temp, __restore(), __temp);
    const resetHistory = async () => {
      Object.assign(pageInfo, {
        pageNo: 1,
        count: 0,
        pageSize: 15,
        lists: []
      });
      await creationHistoryRefresh();
    };
    const load = () => {
      if (creationHistoryPending.value) return;
      if (pageInfo.count >= pageInfo.pageNo * pageInfo.pageSize) {
        pageInfo.pageNo++;
        creationHistoryRefresh();
      }
    };
    const selectModel = (model) => {
      console.log("model", model);
      modelState.modelId = model.id;
      resetHistory();
    };
    const { lockFn: rewrite } = useLockFn(async (item) => {
      if (item.extra) {
        formData.value = item.extra;
        await nextTick();
        handleCreate();
      }
    });
    const insertExample = () => {
      var _a, _b;
      (_b = (_a = modelData.value) == null ? void 0 : _a.form) == null ? void 0 : _b.forEach((item) => {
        if (item.props.placeholder && !item.props.defaultValue) {
          formData.value[item.props.field] = item.props.placeholder;
        }
      });
    };
    const setFormDataDefault = () => {
      var _a;
      (_a = modelData.value) == null ? void 0 : _a.form.forEach((item) => {
        if (item.props.defaultValue) {
          formData.value[item.props.field] = cloneDeep(item.props.defaultValue);
        } else {
          formData.value[item.props.field] = void 0;
        }
      });
    };
    const toggleCollapsed = () => {
      if (isCollapseAllOpen.value) {
        isCollapseAllOpen.value = false;
        collapseOpen.value = [];
      } else {
        collapseOpen.value = creationLists.value.map((item) => item.id);
        isCollapseAllOpen.value = true;
      }
    };
    const currentCreationHistory = ref([]);
    const generateTitle = () => {
      var _a;
      const firstForm = ((_a = modelData.value) == null ? void 0 : _a.form[0]) || {};
      return `${firstForm.props.title}\uFF1A${formData.value[firstForm.props.field] || ""}`;
    };
    const isReceiving = ref(false);
    let sseInstance;
    const handleCreate = async () => {
      if (isReceiving.value) return;
      currentTab.value = "current";
      isReceiving.value = true;
      currentCreationHistory.value = [];
      slideTo(1);
      try {
        sseInstance = chatSendText({
          other_id: modelState.modelId,
          question: formData.value,
          type: 2,
          creation_type: CreationEnum.Normal,
          model: modelState.modelKey
        });
        sseInstance.addEventListener("close", async () => {
          userStore.getUser();
          setTimeout(async () => {
            isReceiving.value = false;
            await resetHistory();
            const currentLen = currentCreationHistory.value.length;
            currentCreationHistory.value[currentLen - 1].id = pageInfo.lists[0].id;
          }, 200);
        });
        sseInstance.addEventListener("error", async (ev) => {
          var _a;
          if (((_a = ev.data) == null ? void 0 : _a.code) === 1100) {
            if (!appStore.getIsShowRecharge) {
              feedback.msgError(
                `${appStore.getTokenUnit}\u6570\u91CF\u5DF2\u7528\u5B8C\u3002\u8BF7\u8054\u7CFB\u5BA2\u670D\u589E\u52A0`
              );
            } else {
              await feedback.confirm(
                `${appStore.getTokenUnit}\u6570\u91CF\u5DF2\u7528\u5B8C\uFF0C\u8BF7\u524D\u5F80\u5145\u503C`
              );
              router.push("/user/recharge");
            }
            return;
          }
          if (ev.errorType === "connectError") {
            feedback.msgError("\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
          }
          setTimeout(() => {
            isReceiving.value = false;
            slideTo(0);
          }, 200);
        });
        sseInstance.addEventListener("chat", ({ data: dataJson }) => {
          const { id: chatId, event, data, code, index } = dataJson;
          let chatIndex = currentCreationHistory.value.findIndex(
            (item) => item.id === chatId
          );
          if (chatIndex === -1) {
            currentCreationHistory.value.push({
              create_time: timeFormat(Date.now(), "yyyy-mm-dd hh:MM:ss"),
              title: formData.value.question ? formData.value.question : generateTitle(),
              reply: [],
              extra: cloneDeep(formData.value),
              id: chatId
            });
            chatIndex = currentCreationHistory.value.length - 1;
          }
          if (data) {
            if (!currentCreationHistory.value[chatIndex].reply[index]) {
              currentCreationHistory.value[chatIndex].reply[index] = "";
            }
            currentCreationHistory.value[chatIndex].reply[index] += data;
          }
        });
        sseInstance.addEventListener("finish", ({ data: dataJson }) => {
          const { data, index, id: chatId } = dataJson;
          const chatIndex = currentCreationHistory.value.findIndex(
            (item) => item.id === chatId
          );
          if (data) {
            currentCreationHistory.value[chatIndex].reply[index] += data;
          }
          setFormDataDefault();
        });
      } catch (error) {
        isReceiving.value = false;
      }
    };
    watch(
      creationLists,
      (value) => {
        isCollapseAllOpen.value = false;
        toggleCollapsed();
      },
      {
        immediate: true
      }
    );
    const removeSse = () => {
      sseInstance == null ? void 0 : sseInstance.removeEventListener("close");
      sseInstance == null ? void 0 : sseInstance.removeEventListener("chat");
      sseInstance == null ? void 0 : sseInstance.removeEventListener("error");
      sseInstance == null ? void 0 : sseInstance.removeEventListener("finish");
      sseInstance == null ? void 0 : sseInstance.abort();
      isReceiving.value = false;
    };
    watch(
      () => route.query,
      ({ cateId: cateId2, modelId: modelId2 }) => {
        modelState.cateId = cateId2;
        modelState.modelId = modelId2;
        currentCreationHistory.value = [];
        currentTab.value = "current";
        slideTo(0);
        removeSse();
        if (modelId2) {
          modelApiRefresh();
          resetHistory();
        } else {
          modelData.value = {};
        }
      }
    );
    watch(
      () => currentModelList.value,
      (value) => {
        if (value.length && modelState.modelId == void 0) {
          router.replace({
            path: "",
            query: {
              cateId: modelState.cateId,
              modelId: value[0].id
            }
          });
        }
      },
      {
        deep: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ModelPicker = __nuxt_component_7;
      const _component_client_only = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-78b01304>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="flex flex-col h-full" data-v-78b01304${_scopeId}><div class="px-[16px] pt-[16px] round-[12px]" data-v-78b01304${_scopeId}><div class="flex flex-wrap gap-y-2 my-swiper category-lists" data-v-78b01304${_scopeId}><!--[-->`);
            ssrRenderList(unref(creationLists), (item, index) => {
              _push2(`<!--[-->`);
              if (Object.keys(item).includes("name")) {
                _push2(`<div class="${ssrRenderClass([{
                  "is-active": unref(modelState).cateId == item.id
                }, "category-item"])}" data-v-78b01304${_scopeId}>${ssrInterpolate(item.name)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div></div><div class="flex-1 min-h-0 flex" data-v-78b01304${_scopeId}><div class="py-[16px] pl-[16px]" data-v-78b01304${_scopeId}>`);
            _push2(ssrRenderComponent(ModelSelect, {
              modelValue: unref(searchKeyword),
              "onUpdate:modelValue": ($event) => isRef(searchKeyword) ? searchKeyword.value = $event : null,
              "model-state": unref(modelState),
              "current-model-list": ((_a = unref(currentModelList)) == null ? void 0 : _a.lists) || [],
              onSelect: selectModel
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex-1 min-w-0 p-4" data-v-78b01304${_scopeId}><div class="h-full flex bg-body rounded-[12px]" data-v-78b01304${_scopeId}><div class="h-full border-r border-solid border-br-light" data-v-78b01304${_scopeId}>`);
            _push2(ssrRenderComponent(CreatePanel, {
              modelValue: unref(formData),
              "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null,
              class: "h-full 2xl:w-[400px] xl:w-[350px] lg:w-[320px] w-[250px]",
              "model-data": unref(modelData),
              loading: unref(isReceiving),
              onInsert: insertExample,
              onCreate: handleCreate
            }, {
              actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ModelPicker, {
                    class: "w-full my-[10px]",
                    sub_id: unref(modelState).modelKey,
                    "onUpdate:sub_id": ($event) => unref(modelState).modelKey = $event,
                    modelConfig: unref(chatModel),
                    "onUpdate:modelConfig": ($event) => isRef(chatModel) ? chatModel.value = $event : null
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ModelPicker, {
                      class: "w-full my-[10px]",
                      sub_id: unref(modelState).modelKey,
                      "onUpdate:sub_id": ($event) => unref(modelState).modelKey = $event,
                      modelConfig: unref(chatModel),
                      "onUpdate:modelConfig": ($event) => isRef(chatModel) ? chatModel.value = $event : null
                    }, null, 8, ["sub_id", "onUpdate:sub_id", "modelConfig", "onUpdate:modelConfig"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex-1 min-w-0" data-v-78b01304${_scopeId}>`);
            _push2(ssrRenderComponent(_component_client_only, null, {}, _parent2, _scopeId));
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col h-full" }, [
                createVNode("div", { class: "px-[16px] pt-[16px] round-[12px]" }, [
                  createVNode("div", { class: "flex flex-wrap gap-y-2 my-swiper category-lists" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(creationLists), (item, index) => {
                      return openBlock(), createBlock(Fragment, null, [
                        Object.keys(item).includes("name") ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ["category-item", {
                            "is-active": unref(modelState).cateId == item.id
                          }],
                          onClick: ($event) => handleSelect(item.id)
                        }, toDisplayString(item.name), 11, ["onClick"])) : createCommentVNode("", true)
                      ], 64);
                    }), 256))
                  ])
                ]),
                createVNode("div", { class: "flex-1 min-h-0 flex" }, [
                  createVNode("div", { class: "py-[16px] pl-[16px]" }, [
                    createVNode(ModelSelect, {
                      modelValue: unref(searchKeyword),
                      "onUpdate:modelValue": ($event) => isRef(searchKeyword) ? searchKeyword.value = $event : null,
                      "model-state": unref(modelState),
                      "current-model-list": ((_b = unref(currentModelList)) == null ? void 0 : _b.lists) || [],
                      onSelect: selectModel
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "model-state", "current-model-list"])
                  ]),
                  createVNode("div", { class: "flex-1 min-w-0 p-4" }, [
                    createVNode("div", { class: "h-full flex bg-body rounded-[12px]" }, [
                      createVNode("div", { class: "h-full border-r border-solid border-br-light" }, [
                        createVNode(CreatePanel, {
                          modelValue: unref(formData),
                          "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null,
                          class: "h-full 2xl:w-[400px] xl:w-[350px] lg:w-[320px] w-[250px]",
                          "model-data": unref(modelData),
                          loading: unref(isReceiving),
                          onInsert: insertExample,
                          onCreate: handleCreate
                        }, {
                          actions: withCtx(() => [
                            createVNode(_component_ModelPicker, {
                              class: "w-full my-[10px]",
                              sub_id: unref(modelState).modelKey,
                              "onUpdate:sub_id": ($event) => unref(modelState).modelKey = $event,
                              modelConfig: unref(chatModel),
                              "onUpdate:modelConfig": ($event) => isRef(chatModel) ? chatModel.value = $event : null
                            }, null, 8, ["sub_id", "onUpdate:sub_id", "modelConfig", "onUpdate:modelConfig"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "model-data", "loading"])
                      ]),
                      createVNode("div", { class: "flex-1 min-w-0" }, [
                        createVNode(_component_client_only, null, {
                          default: withCtx(() => [
                            createVNode(CreateResults, {
                              current: unref(currentTab),
                              "onUpdate:current": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
                              chatModel: unref(chatModel),
                              "current-creation-history": unref(currentCreationHistory),
                              loading: unref(isReceiving),
                              "page-info": unref(pageInfo),
                              onLoad: load,
                              onClean: cleanChatLog,
                              onRewrite: unref(rewrite),
                              onRefresh: unref(creationHistoryRefresh)
                            }, null, 8, ["current", "onUpdate:current", "chatModel", "current-creation-history", "loading", "page-info", "onRewrite", "onRefresh"])
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/creation/produce.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const produce = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-78b01304"]]);

export { produce as default };
//# sourceMappingURL=produce-CvWsLxIf.mjs.map
