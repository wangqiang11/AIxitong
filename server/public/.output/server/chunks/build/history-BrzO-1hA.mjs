import { a5 as useAppStore, A as feedback, ao as ElMessage, ah as __nuxt_component_0, B as vLoading } from './server.mjs';
import { E as ElSegmented } from './el-segmented-KMsqQ2AI.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElTag } from './index-D7S5lb8a.mjs';
import { E as ElTooltip } from './index-L-VTEUEA.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { E as ElSkeleton } from './el-skeleton-item-P_GLWXGa.mjs';
import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { _ as _sfc_main$2 } from './index-D60of7Hb.mjs';
import { useSSRContext, defineComponent, ref, reactive, shallowRef, resolveComponent, withCtx, unref, isRef, mergeProps, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, withDirectives } from 'vue';
import { u as usePaging } from './usePaging-DU8sXki3.mjs';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { d as drawError } from './error-BBvUyUA_.mjs';
import { a as getPPTLists, d as downloadPPT, b as delPPT } from './ai_ppt-C1HXY0_t.mjs';
import { useAiPPTStore } from './aiPPT-BfjAVP_f.mjs';
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
import '@popperjs/core';
import './position-DVxxNIGX.mjs';
import './dropdown-C6fgV-Vy.mjs';
import './el-pagination-ClrwtCwT.mjs';
import './index-CUhOTuS-.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "history",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    const aiPPTStore = useAiPPTStore();
    const statusMap = {
      1: {
        label: "\u751F\u6210\u4E2D",
        type: "warning"
      },
      3: {
        label: "\u751F\u6210\u5931\u8D25",
        type: "danger"
      },
      2: {
        label: "\u751F\u6210\u6210\u529F",
        type: "success"
      }
    };
    const taskStatus = ref(-1);
    const taskStatusOptions = [
      {
        label: "\u5168\u90E8",
        value: -1
      },
      {
        label: "\u751F\u6210\u4E2D",
        value: 1
      },
      {
        label: "\u751F\u6210\u6210\u529F",
        value: 2
      },
      {
        label: "\u751F\u6210\u5931\u8D25",
        value: 3
      }
    ];
    const taskStatusChange = async (e) => {
      taskStatus.value = e;
      await resetPage();
      checkHasGenerating();
    };
    const { pager, getLists, resetPage } = usePaging({
      fetchFun: getPPTLists,
      params: reactive({
        status: taskStatus
      }),
      afterFetch() {
        checkHasGenerating();
      }
    });
    const regenerate = async (item) => {
      await feedback.confirm("\u786E\u5B9A\u91CD\u65B0\u751F\u6210\uFF1F");
      const { type, cover_id, title, catalog, prompt } = item;
      const params = {
        type,
        prompt,
        cover_id,
        title,
        catalogs: JSON.parse(catalog || "[]")
      };
      await aiPPTStore.genPPTSubmit(params);
      taskStatus.value = -1;
      resetPage();
    };
    const timer = shallowRef();
    const checkHasGenerating = async () => {
      clearTimeout(timer.value);
      const ids = pager.lists.filter((item) => item.status === 1 || item.status === 0).map((item) => item.id);
      if (ids.length > 0) {
        timer.value = setTimeout(() => {
          resetPage();
        }, 6e3);
      }
    };
    const { lockFn: downloadPPTSubmit } = useLockFn(async (item) => {
      const { file_url } = await downloadPPT({ id: item.id });
      const a = (void 0).createElement("a");
      a.href = file_url;
      a.download = `${item.title}.pptx`;
      a.click();
    });
    const deleteHandle = async (id) => {
      await feedback.confirm("\u786E\u5B9A\u5220\u9664\uFF1F");
      await delPPT({ id });
      ElMessage.success("\u5220\u9664\u6210\u529F");
      getLists();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_el_segmented = ElSegmented;
      const _component_el_scrollbar = ElScrollbar;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_Icon = _sfc_main$1;
      const _component_el_tag = ElTag;
      const _component_el_tooltip = ElTooltip;
      const _component_ElImage = ElImage;
      const _component_el_skeleton = ElSkeleton;
      const _component_el_popover = ElPopover;
      const _component_pagination = _sfc_main$2;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e32d743b>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full p-4" data-v-e32d743b${_scopeId}><div class="bg-body h-full flex-1 rounded-[12px] p-4 flex flex-col gap-4 relative" data-v-e32d743b${_scopeId}><div class="sticky top-0" data-v-e32d743b${_scopeId}><div class="border-b border-b-[#eff0f2] dark:border-[#333333] pb-4 text-2xl font-medium" data-v-e32d743b${_scopeId}> \u751F\u6210\u8BB0\u5F55 <span class="text-xs ml-2 text-error" data-v-e32d743b${_scopeId}>\u514D\u8D39\u9884\u89C8\uFF0C\u6EE1\u610F\u518D\u4ED8\u8D39\u3002\uFF08\u70B9\u51FB\u4E0B\u8F7D\u6309\u94AE\u5373\u6263\u8D39\uFF09</span></div><div class="mt-4" style="${ssrRenderStyle({ "--el-border-radius-base": "12px" })}" data-v-e32d743b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_segmented, {
              class: "task-type !bg-[transparent]",
              modelValue: unref(taskStatus),
              "onUpdate:modelValue": ($event) => isRef(taskStatus) ? taskStatus.value = $event : null,
              options: taskStatusOptions,
              onChange: taskStatusChange
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_el_scrollbar, mergeProps({
              class: "ppt-result flex-1",
              ref: "scrollBarRef"
            }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(pager).loading)), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div data-v-e32d743b${_scopeId2}><div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4" data-v-e32d743b${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_RouterLink, {
                    to: "/ai_ppt",
                    class: "rounded-[12px] min-h-[300px] p-4 flex flex-col justify-center items-center gap-2 border border-[#eff0f2] dark:border-[#333333]"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "el-icon-Plus",
                          size: 32
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="text-xl font-bold my-[12px]" data-v-e32d743b${_scopeId3}> \u65B0\u5EFAPPT </div><div class="text-tx-secondary" data-v-e32d743b${_scopeId3}> \u70B9\u51FB\u7B80\u5355\u8F93\u5165\u4E00\u4E2A\u6807\u9898\u5373\u53EF\u751F\u6210PPT </div>`);
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "el-icon-Plus",
                            size: 32
                          }),
                          createVNode("div", { class: "text-xl font-bold my-[12px]" }, " \u65B0\u5EFAPPT "),
                          createVNode("div", { class: "text-tx-secondary" }, " \u70B9\u51FB\u7B80\u5355\u8F93\u5165\u4E00\u4E2A\u6807\u9898\u5373\u53EF\u751F\u6210PPT ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(pager).lists, (item, index) => {
                    _push3(`<div class="rounded-[12px] p-4 flex flex-col gap-2 border border-[#eff0f2] dark:border-[#333333]" data-v-e32d743b${_scopeId2}><div class="flex justify-between" data-v-e32d743b${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_el_tag, {
                      type: statusMap[item.status].type,
                      effect: "light"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(statusMap[item.status].label)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(statusMap[item.status].label), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (item.status !== 1 || item.status === 0) {
                      _push3(`<div class="flex items-center" data-v-e32d743b${_scopeId2}>`);
                      if (item.status === 2) {
                        _push3(ssrRenderComponent(_component_el_tooltip, {
                          effect: "dark",
                          content: `\u4E0B\u8F7D${item.pay_status ? "" : unref(aiPPTStore).config.isVipFree ? "(\u4F1A\u5458\u514D\u8D39)" : unref(aiPPTStore).config.price > 0 ? "-" + unref(aiPPTStore).config.price + unref(appStore).getTokenUnit : ""}`,
                          placement: "bottom"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div data-v-e32d743b${_scopeId3}>`);
                              _push4(ssrRenderComponent(_component_Icon, {
                                class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                                name: "el-icon-Download",
                                size: "18",
                                color: "#556477"
                              }, null, _parent4, _scopeId3));
                              _push4(`</div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  onClick: ($event) => unref(downloadPPTSubmit)(item)
                                }, [
                                  createVNode(_component_Icon, {
                                    class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                                    name: "el-icon-Download",
                                    size: "18",
                                    color: "#556477"
                                  })
                                ], 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(ssrRenderComponent(_component_el_tooltip, {
                        effect: "dark",
                        content: "\u91CD\u65B0\u751F\u6210",
                        placement: "bottom"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div data-v-e32d743b${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_Icon, {
                              class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                              name: "el-icon-RefreshRight",
                              size: "18",
                              color: "#556477"
                            }, null, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            return [
                              createVNode("div", {
                                onClick: ($event) => regenerate(item)
                              }, [
                                createVNode(_component_Icon, {
                                  class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                                  name: "el-icon-RefreshRight",
                                  size: "18",
                                  color: "#556477"
                                })
                              ], 8, ["onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_el_tooltip, {
                        effect: "dark",
                        content: "\u5220\u9664",
                        placement: "bottom"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div data-v-e32d743b${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_Icon, {
                              class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                              name: "el-icon-Delete",
                              size: "18",
                              color: "#556477"
                            }, null, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            return [
                              createVNode("div", {
                                onClick: ($event) => deleteHandle(item.id)
                              }, [
                                createVNode(_component_Icon, {
                                  class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                                  name: "el-icon-Delete",
                                  size: "18",
                                  color: "#556477"
                                })
                              ], 8, ["onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div class="relative flex-1" data-v-e32d743b${_scopeId2}>`);
                    if (item.status === 2) {
                      _push3(ssrRenderComponent(_component_RouterLink, {
                        to: {
                          path: "/ai_ppt/detail",
                          query: {
                            id: item.id
                          }
                        },
                        class: "w-full pb-[56%] block h-0 cursor-pointer"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          var _a, _b;
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_ElImage, {
                              class: "rounded absolute inset-0",
                              src: (_a = item.preview) == null ? void 0 : _a[0]
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_ElImage, {
                                class: "rounded absolute inset-0",
                                src: (_b = item.preview) == null ? void 0 : _b[0]
                              }, null, 8, ["src"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (item.status === 3) {
                      _push3(`<div class="w-full pb-[56%]" data-v-e32d743b${_scopeId2}><div class="w-full h-full px-4 flex flex-col justify-center items-center absolute left-0 top-0" data-v-e32d743b${_scopeId2}><img class="w-[200px] mb-4"${ssrRenderAttr("src", unref(drawError))} alt="\u751F\u6210\u5931\u8D25" data-v-e32d743b${_scopeId2}><div class="my-[10px]" data-v-e32d743b${_scopeId2}> \u751F\u6210\u5931\u8D25 </div><div class="text-xs text-[#1e2f44] dark:text-white line-clamp-2 w-full break-all text-center" data-v-e32d743b${_scopeId2}> \u9519\u8BEF\u4FE1\u606F\uFF1A${ssrInterpolate(item.fail_reason)}</div></div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (item.status === 0 || item.status === 1) {
                      _push3(`<div class="ppt-loading w-full h-0 rounded pb-[56%]" data-v-e32d743b${_scopeId2}><div class="absolute inset-0 flex flex-col justify-center" data-v-e32d743b${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_el_skeleton, {
                        rows: 4,
                        animated: ""
                      }, null, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_component_el_popover, {
                      placement: "bottom",
                      title: "\u63D0\u793A\u8BCD",
                      "show-arrow": false,
                      transition: "custom-popover",
                      width: "300px",
                      trigger: "hover",
                      content: item.prompt
                    }, {
                      reference: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="w-full box-border" data-v-e32d743b${_scopeId3}><div class="line-clamp-1" data-v-e32d743b${_scopeId3}>${ssrInterpolate(item.prompt)}</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "w-full box-border" }, [
                              createVNode("div", { class: "line-clamp-1" }, toDisplayString(item.prompt), 1)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="flex justify-between items-center" data-v-e32d743b${_scopeId2}><span class="text-[#8794A3]" data-v-e32d743b${_scopeId2}>${ssrInterpolate(item.create_time)}</span>`);
                    _push3(ssrRenderComponent(_component_el_tag, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`AI PPT`);
                        } else {
                          return [
                            createTextVNode("AI PPT")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  });
                  _push3(`<!--]--></div></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("div", { class: "grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4" }, [
                        createVNode(_component_RouterLink, {
                          to: "/ai_ppt",
                          class: "rounded-[12px] min-h-[300px] p-4 flex flex-col justify-center items-center gap-2 border border-[#eff0f2] dark:border-[#333333]"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "el-icon-Plus",
                              size: 32
                            }),
                            createVNode("div", { class: "text-xl font-bold my-[12px]" }, " \u65B0\u5EFAPPT "),
                            createVNode("div", { class: "text-tx-secondary" }, " \u70B9\u51FB\u7B80\u5355\u8F93\u5165\u4E00\u4E2A\u6807\u9898\u5373\u53EF\u751F\u6210PPT ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(pager).lists, (item, index) => {
                          return openBlock(), createBlock("div", {
                            key: item.id,
                            class: "rounded-[12px] p-4 flex flex-col gap-2 border border-[#eff0f2] dark:border-[#333333]"
                          }, [
                            createVNode("div", { class: "flex justify-between" }, [
                              createVNode(_component_el_tag, {
                                type: statusMap[item.status].type,
                                effect: "light"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(statusMap[item.status].label), 1)
                                ]),
                                _: 2
                              }, 1032, ["type"]),
                              item.status !== 1 || item.status === 0 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "flex items-center"
                              }, [
                                item.status === 2 ? (openBlock(), createBlock(_component_el_tooltip, {
                                  key: 0,
                                  effect: "dark",
                                  content: `\u4E0B\u8F7D${item.pay_status ? "" : unref(aiPPTStore).config.isVipFree ? "(\u4F1A\u5458\u514D\u8D39)" : unref(aiPPTStore).config.price > 0 ? "-" + unref(aiPPTStore).config.price + unref(appStore).getTokenUnit : ""}`,
                                  placement: "bottom"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      onClick: ($event) => unref(downloadPPTSubmit)(item)
                                    }, [
                                      createVNode(_component_Icon, {
                                        class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                                        name: "el-icon-Download",
                                        size: "18",
                                        color: "#556477"
                                      })
                                    ], 8, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1032, ["content"])) : createCommentVNode("", true),
                                createVNode(_component_el_tooltip, {
                                  effect: "dark",
                                  content: "\u91CD\u65B0\u751F\u6210",
                                  placement: "bottom"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      onClick: ($event) => regenerate(item)
                                    }, [
                                      createVNode(_component_Icon, {
                                        class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                                        name: "el-icon-RefreshRight",
                                        size: "18",
                                        color: "#556477"
                                      })
                                    ], 8, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_el_tooltip, {
                                  effect: "dark",
                                  content: "\u5220\u9664",
                                  placement: "bottom"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      onClick: ($event) => deleteHandle(item.id)
                                    }, [
                                      createVNode(_component_Icon, {
                                        class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                                        name: "el-icon-Delete",
                                        size: "18",
                                        color: "#556477"
                                      })
                                    ], 8, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ])) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "relative flex-1" }, [
                              item.status === 2 ? (openBlock(), createBlock(_component_RouterLink, {
                                key: 0,
                                to: {
                                  path: "/ai_ppt/detail",
                                  query: {
                                    id: item.id
                                  }
                                },
                                class: "w-full pb-[56%] block h-0 cursor-pointer"
                              }, {
                                default: withCtx(() => {
                                  var _a;
                                  return [
                                    createVNode(_component_ElImage, {
                                      class: "rounded absolute inset-0",
                                      src: (_a = item.preview) == null ? void 0 : _a[0]
                                    }, null, 8, ["src"])
                                  ];
                                }),
                                _: 2
                              }, 1032, ["to"])) : createCommentVNode("", true),
                              item.status === 3 ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "w-full pb-[56%]"
                              }, [
                                createVNode("div", { class: "w-full h-full px-4 flex flex-col justify-center items-center absolute left-0 top-0" }, [
                                  createVNode("img", {
                                    class: "w-[200px] mb-4",
                                    src: unref(drawError),
                                    alt: "\u751F\u6210\u5931\u8D25"
                                  }, null, 8, ["src"]),
                                  createVNode("div", { class: "my-[10px]" }, " \u751F\u6210\u5931\u8D25 "),
                                  createVNode("div", { class: "text-xs text-[#1e2f44] dark:text-white line-clamp-2 w-full break-all text-center" }, " \u9519\u8BEF\u4FE1\u606F\uFF1A" + toDisplayString(item.fail_reason), 1)
                                ])
                              ])) : createCommentVNode("", true),
                              item.status === 0 || item.status === 1 ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: "ppt-loading w-full h-0 rounded pb-[56%]"
                              }, [
                                createVNode("div", { class: "absolute inset-0 flex flex-col justify-center" }, [
                                  createVNode(_component_el_skeleton, {
                                    rows: 4,
                                    animated: ""
                                  })
                                ])
                              ])) : createCommentVNode("", true)
                            ]),
                            createVNode(_component_el_popover, {
                              placement: "bottom",
                              title: "\u63D0\u793A\u8BCD",
                              "show-arrow": false,
                              transition: "custom-popover",
                              width: "300px",
                              trigger: "hover",
                              content: item.prompt
                            }, {
                              reference: withCtx(() => [
                                createVNode("div", { class: "w-full box-border" }, [
                                  createVNode("div", { class: "line-clamp-1" }, toDisplayString(item.prompt), 1)
                                ])
                              ]),
                              _: 2
                            }, 1032, ["content"]),
                            createVNode("div", { class: "flex justify-between items-center" }, [
                              createVNode("span", { class: "text-[#8794A3]" }, toDisplayString(item.create_time), 1),
                              createVNode(_component_el_tag, null, {
                                default: withCtx(() => [
                                  createTextVNode("AI PPT")
                                ]),
                                _: 1
                              })
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-center" data-v-e32d743b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_pagination, {
              modelValue: unref(pager),
              "onUpdate:modelValue": ($event) => isRef(pager) ? pager.value = $event : null,
              onChange: ($event) => unref(getLists)()
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "h-full p-4" }, [
                createVNode("div", { class: "bg-body h-full flex-1 rounded-[12px] p-4 flex flex-col gap-4 relative" }, [
                  createVNode("div", { class: "sticky top-0" }, [
                    createVNode("div", { class: "border-b border-b-[#eff0f2] dark:border-[#333333] pb-4 text-2xl font-medium" }, [
                      createTextVNode(" \u751F\u6210\u8BB0\u5F55 "),
                      createVNode("span", { class: "text-xs ml-2 text-error" }, "\u514D\u8D39\u9884\u89C8\uFF0C\u6EE1\u610F\u518D\u4ED8\u8D39\u3002\uFF08\u70B9\u51FB\u4E0B\u8F7D\u6309\u94AE\u5373\u6263\u8D39\uFF09")
                    ]),
                    createVNode("div", {
                      class: "mt-4",
                      style: { "--el-border-radius-base": "12px" }
                    }, [
                      createVNode(_component_el_segmented, {
                        class: "task-type !bg-[transparent]",
                        modelValue: unref(taskStatus),
                        "onUpdate:modelValue": ($event) => isRef(taskStatus) ? taskStatus.value = $event : null,
                        options: taskStatusOptions,
                        onChange: taskStatusChange
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  withDirectives((openBlock(), createBlock(_component_el_scrollbar, {
                    class: "ppt-result flex-1",
                    ref: "scrollBarRef"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode("div", { class: "grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4" }, [
                          createVNode(_component_RouterLink, {
                            to: "/ai_ppt",
                            class: "rounded-[12px] min-h-[300px] p-4 flex flex-col justify-center items-center gap-2 border border-[#eff0f2] dark:border-[#333333]"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "el-icon-Plus",
                                size: 32
                              }),
                              createVNode("div", { class: "text-xl font-bold my-[12px]" }, " \u65B0\u5EFAPPT "),
                              createVNode("div", { class: "text-tx-secondary" }, " \u70B9\u51FB\u7B80\u5355\u8F93\u5165\u4E00\u4E2A\u6807\u9898\u5373\u53EF\u751F\u6210PPT ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(pager).lists, (item, index) => {
                            return openBlock(), createBlock("div", {
                              key: item.id,
                              class: "rounded-[12px] p-4 flex flex-col gap-2 border border-[#eff0f2] dark:border-[#333333]"
                            }, [
                              createVNode("div", { class: "flex justify-between" }, [
                                createVNode(_component_el_tag, {
                                  type: statusMap[item.status].type,
                                  effect: "light"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(statusMap[item.status].label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["type"]),
                                item.status !== 1 || item.status === 0 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "flex items-center"
                                }, [
                                  item.status === 2 ? (openBlock(), createBlock(_component_el_tooltip, {
                                    key: 0,
                                    effect: "dark",
                                    content: `\u4E0B\u8F7D${item.pay_status ? "" : unref(aiPPTStore).config.isVipFree ? "(\u4F1A\u5458\u514D\u8D39)" : unref(aiPPTStore).config.price > 0 ? "-" + unref(aiPPTStore).config.price + unref(appStore).getTokenUnit : ""}`,
                                    placement: "bottom"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        onClick: ($event) => unref(downloadPPTSubmit)(item)
                                      }, [
                                        createVNode(_component_Icon, {
                                          class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                                          name: "el-icon-Download",
                                          size: "18",
                                          color: "#556477"
                                        })
                                      ], 8, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1032, ["content"])) : createCommentVNode("", true),
                                  createVNode(_component_el_tooltip, {
                                    effect: "dark",
                                    content: "\u91CD\u65B0\u751F\u6210",
                                    placement: "bottom"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        onClick: ($event) => regenerate(item)
                                      }, [
                                        createVNode(_component_Icon, {
                                          class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                                          name: "el-icon-RefreshRight",
                                          size: "18",
                                          color: "#556477"
                                        })
                                      ], 8, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_el_tooltip, {
                                    effect: "dark",
                                    content: "\u5220\u9664",
                                    placement: "bottom"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        onClick: ($event) => deleteHandle(item.id)
                                      }, [
                                        createVNode(_component_Icon, {
                                          class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                                          name: "el-icon-Delete",
                                          size: "18",
                                          color: "#556477"
                                        })
                                      ], 8, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "relative flex-1" }, [
                                item.status === 2 ? (openBlock(), createBlock(_component_RouterLink, {
                                  key: 0,
                                  to: {
                                    path: "/ai_ppt/detail",
                                    query: {
                                      id: item.id
                                    }
                                  },
                                  class: "w-full pb-[56%] block h-0 cursor-pointer"
                                }, {
                                  default: withCtx(() => {
                                    var _a;
                                    return [
                                      createVNode(_component_ElImage, {
                                        class: "rounded absolute inset-0",
                                        src: (_a = item.preview) == null ? void 0 : _a[0]
                                      }, null, 8, ["src"])
                                    ];
                                  }),
                                  _: 2
                                }, 1032, ["to"])) : createCommentVNode("", true),
                                item.status === 3 ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "w-full pb-[56%]"
                                }, [
                                  createVNode("div", { class: "w-full h-full px-4 flex flex-col justify-center items-center absolute left-0 top-0" }, [
                                    createVNode("img", {
                                      class: "w-[200px] mb-4",
                                      src: unref(drawError),
                                      alt: "\u751F\u6210\u5931\u8D25"
                                    }, null, 8, ["src"]),
                                    createVNode("div", { class: "my-[10px]" }, " \u751F\u6210\u5931\u8D25 "),
                                    createVNode("div", { class: "text-xs text-[#1e2f44] dark:text-white line-clamp-2 w-full break-all text-center" }, " \u9519\u8BEF\u4FE1\u606F\uFF1A" + toDisplayString(item.fail_reason), 1)
                                  ])
                                ])) : createCommentVNode("", true),
                                item.status === 0 || item.status === 1 ? (openBlock(), createBlock("div", {
                                  key: 2,
                                  class: "ppt-loading w-full h-0 rounded pb-[56%]"
                                }, [
                                  createVNode("div", { class: "absolute inset-0 flex flex-col justify-center" }, [
                                    createVNode(_component_el_skeleton, {
                                      rows: 4,
                                      animated: ""
                                    })
                                  ])
                                ])) : createCommentVNode("", true)
                              ]),
                              createVNode(_component_el_popover, {
                                placement: "bottom",
                                title: "\u63D0\u793A\u8BCD",
                                "show-arrow": false,
                                transition: "custom-popover",
                                width: "300px",
                                trigger: "hover",
                                content: item.prompt
                              }, {
                                reference: withCtx(() => [
                                  createVNode("div", { class: "w-full box-border" }, [
                                    createVNode("div", { class: "line-clamp-1" }, toDisplayString(item.prompt), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["content"]),
                              createVNode("div", { class: "flex justify-between items-center" }, [
                                createVNode("span", { class: "text-[#8794A3]" }, toDisplayString(item.create_time), 1),
                                createVNode(_component_el_tag, null, {
                                  default: withCtx(() => [
                                    createTextVNode("AI PPT")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]);
                          }), 128))
                        ])
                      ])
                    ]),
                    _: 1
                  })), [
                    [_directive_loading, unref(pager).loading]
                  ]),
                  createVNode("div", { class: "flex justify-center" }, [
                    createVNode(_component_pagination, {
                      modelValue: unref(pager),
                      "onUpdate:modelValue": ($event) => isRef(pager) ? pager.value = $event : null,
                      onChange: ($event) => unref(getLists)()
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai_ppt/history.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const history = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e32d743b"]]);

export { history as default };
//# sourceMappingURL=history-BrzO-1hA.mjs.map
