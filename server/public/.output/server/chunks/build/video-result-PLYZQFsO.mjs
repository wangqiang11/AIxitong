import { E as ElSegmented } from './el-segmented-KMsqQ2AI.mjs';
import { E as ElTag } from './index-D7S5lb8a.mjs';
import { E as ElTooltip } from './index-L-VTEUEA.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { _ as _sfc_main$2 } from './index-D8NbhMns.mjs';
import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { E as ElResult } from './el-result-V-Bl2idQ.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { E as ElInfiniteScroll } from './index-DNeGbNHc.mjs';
import { a5 as useAppStore, bo as copy, A as feedback, ao as ElMessage, B as vLoading } from './server.mjs';
import { useSSRContext, defineComponent, reactive, ref, shallowRef, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, createVNode, withDirectives, openBlock, createBlock, Fragment, renderList, createCommentVNode, nextTick } from 'vue';
import { b as download } from './download-N0luyf1S.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { D as DrawingEmpty } from './video_empty-DomB--q9.mjs';
import { d as drawError } from './error-BBvUyUA_.mjs';
import { d as deleteVideo, g as getVideoLists } from './video-DH7H33E1.mjs';
import VideoShare from './video-share-BGIVzO_L.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import '@vue/shared';
import '@popperjs/core';
import 'lodash-unified';
import './index-DVLwoLV9.mjs';
import 'video.js';
import './dropdown-C6fgV-Vy.mjs';
import './position-DVxxNIGX.mjs';
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
import 'weixin-js-sdk';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './index-CUhOTuS-.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import './task_reward-DRop0WtE.mjs';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './useLockFn-BWbjkhBs.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "video-result",
  __ssrInlineRender: true,
  emits: ["regenerate"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const appStore = useAppStore();
    const emit = __emit;
    const pageInfo = reactive({
      pageNo: 1,
      count: 0,
      pageSize: 10,
      loading: true,
      lists: []
    });
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
    const showShare = ref(false);
    const shareRef = shallowRef(null);
    const sharedIds = ref([]);
    const taskStatusChange = async (e) => {
      taskStatus.value = e;
      reload();
    };
    const timer = shallowRef();
    const checkHasGenerating = async () => {
      clearTimeout(timer.value);
      const ids = pageInfo.lists.filter((item) => item.status === 1).map((item) => item.id);
      if (ids.length > 0) {
        timer.value = setTimeout(() => {
          resetPage();
        }, 6e3);
      }
    };
    const deleteHandle = async (id) => {
      await feedback.confirm("\u786E\u5B9A\u5220\u9664\uFF1F");
      await deleteVideo({ id });
      ElMessage.success("\u5220\u9664\u6210\u529F");
      resetPage();
    };
    const shareVideo = async (records_id, is_share) => {
      if (sharedIds.value.includes(records_id) || is_share) {
        feedback.msgError("\u8BE5\u89C6\u9891\u5DF2\u5206\u4EAB\u8FC7\u4E86\uFF01");
        return;
      }
      showShare.value = true;
      await nextTick();
      shareRef.value.open(records_id);
    };
    const downloadFile = async (url, name) => {
      try {
        const res = await $request.get(
          { url, responseType: "blob", baseURL: "" },
          { isReturnDefaultResponse: true, apiPrefix: "" }
        );
        console.log(res);
        const blob = new Blob([res._data], {
          type: res.headers.get("Content-Type")
        });
        const link = (void 0).URL.createObjectURL(blob);
        download(link, name);
      } catch (error) {
        feedback.msgError("\u6587\u4EF6\u4E0B\u8F7D\u5931\u8D25");
      }
    };
    const getLists = async () => {
      try {
        const data = await getVideoLists({
          status: taskStatus.value,
          page_no: pageInfo.pageNo,
          page_size: pageInfo.pageSize
        });
        pageInfo.count = data.count;
        if (pageInfo.pageNo === 1) {
          pageInfo.lists = [];
        }
        pageInfo.lists.push(...data.lists);
      } catch (error) {
      } finally {
        pageInfo.loading = false;
        checkHasGenerating();
      }
    };
    const load = () => {
      if (pageInfo.count >= pageInfo.pageNo * pageInfo.pageSize) {
        pageInfo.pageNo++;
        getLists();
      }
    };
    const regenerate = (item) => {
      const data = {
        type: item.type,
        prompt: item.prompt,
        scale: item.scale,
        image: item.image,
        style_id: item.style_id
      };
      emit("regenerate", data);
    };
    const resetPage = async () => {
      pageInfo.pageSize = pageInfo.pageNo * pageInfo.pageSize;
      pageInfo.pageNo = 1;
      await getLists();
    };
    const scrollBarRef = shallowRef();
    const reload = async () => {
      var _a;
      pageInfo.loading = true;
      pageInfo.pageSize = 10;
      pageInfo.pageNo = 1;
      await getLists();
      (_a = scrollBarRef.value) == null ? void 0 : _a.setScrollTop(0);
    };
    reload();
    __expose({
      refresh: async () => {
        taskStatus.value = -1;
        await resetPage();
        scrollBarRef.value.setScrollTop(0);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_segmented = ElSegmented;
      const _component_el_tag = ElTag;
      const _component_el_tooltip = ElTooltip;
      const _component_Icon = _sfc_main$1;
      const _component_aspect_ratio = _sfc_main$2;
      const _component_el_popover = ElPopover;
      const _component_el_result = ElResult;
      const _component_el_image = ElImage;
      const _directive_loading = vLoading;
      const _directive_infinite_scroll = ElInfiniteScroll;
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-body h-full flex-1 rounded-[12px] p-4 flex flex-col gap-4 relative" }, _attrs))} data-v-05d8ce9d><div class="sticky top-0" data-v-05d8ce9d><div class="border-b border-b-[#eff0f2] dark:border-[#333333] pb-4 text-2xl font-medium" data-v-05d8ce9d> \u751F\u6210\u8BB0\u5F55 </div><div class="mt-4" style="${ssrRenderStyle({ "--el-border-radius-base": "12px" })}" data-v-05d8ce9d>`);
      _push(ssrRenderComponent(_component_el_segmented, {
        class: "task-type !bg-[transparent]",
        modelValue: unref(taskStatus),
        "onUpdate:modelValue": ($event) => isRef(taskStatus) ? taskStatus.value = $event : null,
        options: taskStatusOptions,
        onChange: taskStatusChange
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(unref(ElScrollbar), mergeProps({
        class: "video-result flex-1",
        ref_key: "scrollBarRef",
        ref: scrollBarRef
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(pageInfo).loading)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(pageInfo).lists.length > 0) {
              _push2(`<div${ssrRenderAttrs(mergeProps({ "infinite-scroll-distance": "50" }, ssrGetDirectiveProps(_ctx, _directive_infinite_scroll, load)))} data-v-05d8ce9d${_scopeId}><div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4" data-v-05d8ce9d${_scopeId}><!--[-->`);
              ssrRenderList(unref(pageInfo).lists, (item, index) => {
                var _a;
                _push2(`<div class="rounded-[12px] p-4 flex flex-col gap-2 border border-[#eff0f2] dark:border-[#333333]" data-v-05d8ce9d${_scopeId}><div class="flex justify-between" data-v-05d8ce9d${_scopeId}>`);
                _push2(ssrRenderComponent(_component_el_tag, {
                  type: statusMap[item.status].type,
                  effect: "light"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(statusMap[item.status].label)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(statusMap[item.status].label), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                if (item.status !== 1 || item.status === 0) {
                  _push2(`<div class="flex items-center" data-v-05d8ce9d${_scopeId}>`);
                  if (item.status === 2) {
                    _push2(ssrRenderComponent(_component_el_tooltip, {
                      effect: "dark",
                      content: "\u590D\u5236\u63D0\u793A\u8BCD",
                      placement: "bottom"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<div data-v-05d8ce9d${_scopeId2}>`);
                          _push3(ssrRenderComponent(_component_Icon, {
                            class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                            name: "el-icon-CopyDocument",
                            size: "18",
                            color: "#556477"
                          }, null, _parent3, _scopeId2));
                          _push3(`</div>`);
                        } else {
                          return [
                            createVNode("div", {
                              onClick: ($event) => unref(copy)(item.prompt)
                            }, [
                              createVNode(_component_Icon, {
                                class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                                name: "el-icon-CopyDocument",
                                size: "18",
                                color: "#556477"
                              })
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  if (item.status === 2) {
                    _push2(`<!--[-->`);
                    _push2(ssrRenderComponent(_component_el_tooltip, {
                      effect: "dark",
                      content: "\u4E0B\u8F7D\u89C6\u9891",
                      placement: "bottom"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<div data-v-05d8ce9d${_scopeId2}>`);
                          _push3(ssrRenderComponent(_component_Icon, {
                            class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                            name: "el-icon-Download",
                            size: "18",
                            color: "#556477"
                          }, null, _parent3, _scopeId2));
                          _push3(`</div>`);
                        } else {
                          return [
                            createVNode("div", {
                              onClick: ($event) => downloadFile(item.video_url, "\u89C6\u9891")
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
                    }, _parent2, _scopeId));
                    if (unref(appStore).getSquareConfig.video_award.is_open) {
                      _push2(ssrRenderComponent(_component_el_tooltip, {
                        effect: "dark",
                        content: "\u5206\u4EAB\u81F3\u5E7F\u573A",
                        placement: "bottom"
                      }, {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(`<div class="cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md pb-[7px] p-1 box-content" data-v-05d8ce9d${_scopeId2}>`);
                            _push3(ssrRenderComponent(_component_Icon, {
                              name: "local-icon-share",
                              size: "17",
                              color: "#556477"
                            }, null, _parent3, _scopeId2));
                            _push3(`</div>`);
                          } else {
                            return [
                              createVNode("div", {
                                class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md pb-[7px] p-1 box-content",
                                onClick: ($event) => shareVideo(item.id, item.is_share)
                              }, [
                                createVNode(_component_Icon, {
                                  name: "local-icon-share",
                                  size: "17",
                                  color: "#556477"
                                })
                              ], 8, ["onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<!--]-->`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(ssrRenderComponent(_component_el_tooltip, {
                    effect: "dark",
                    content: "\u91CD\u65B0\u751F\u6210",
                    placement: "bottom"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div data-v-05d8ce9d${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_Icon, {
                          class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                          name: "el-icon-RefreshRight",
                          size: "18",
                          color: "#556477"
                        }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
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
                  }, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_el_tooltip, {
                    effect: "dark",
                    content: "\u5220\u9664",
                    placement: "bottom"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div data-v-05d8ce9d${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_Icon, {
                          class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                          name: "el-icon-Delete",
                          size: "18",
                          color: "#556477"
                        }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
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
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="relative flex-1" data-v-05d8ce9d${_scopeId}><div class="bg-[var(--el-bg-color-page)] rounded-[12px] overflow-hidden" data-v-05d8ce9d${_scopeId}>`);
                if (item.status === 2) {
                  _push2(ssrRenderComponent(_component_aspect_ratio, {
                    src: item.video_url,
                    type: "video",
                    ratio: [4, 3]
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
                if (item.status === 3) {
                  _push2(`<div class="w-full pb-[75%]" data-v-05d8ce9d${_scopeId}><div class="w-full h-full px-4 flex flex-col justify-center items-center absolute left-0 top-0" data-v-05d8ce9d${_scopeId}><img class="w-1/2 mb-4"${ssrRenderAttr("src", unref(drawError))} alt="\u751F\u6210\u89C6\u9891\u5931\u8D25" data-v-05d8ce9d${_scopeId}><div class="my-[10px]" data-v-05d8ce9d${_scopeId}>\u751F\u6210\u89C6\u9891\u5931\u8D25</div><div class="text-xs text-[#798696] dark:text-white line-clamp-3 w-full break-all text-center" data-v-05d8ce9d${_scopeId}> \u9519\u8BEF\u4FE1\u606F\uFF1A${ssrInterpolate(item.fail_reason)}</div></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.status === 0 || item.status === 1) {
                  _push2(`<div${ssrRenderAttrs(_temp0 = mergeProps({
                    class: "video-loading w-full pb-[75%]",
                    "element-loading-text": "\u6B63\u5728\u751F\u6210\u4E2D..."
                  }, ssrGetDirectiveProps(_ctx, _directive_loading, true)))} data-v-05d8ce9d${_scopeId}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : (_a = _temp0.innerHTML) != null ? _a : ""}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
                _push2(ssrRenderComponent(_component_el_popover, {
                  placement: "bottom",
                  title: "\u63D0\u793A\u8BCD",
                  "show-arrow": false,
                  transition: "custom-popover",
                  width: "300px",
                  trigger: "hover",
                  content: item.prompt
                }, {
                  reference: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="w-full box-border" data-v-05d8ce9d${_scopeId2}><div class="line-clamp-1" data-v-05d8ce9d${_scopeId2}>${ssrInterpolate(item.prompt)}</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "w-full box-border" }, [
                          createVNode("div", { class: "line-clamp-1" }, toDisplayString(item.prompt), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<div class="flex justify-between items-center" data-v-05d8ce9d${_scopeId}><span class="text-[#8794A3]" data-v-05d8ce9d${_scopeId}>${ssrInterpolate(item.create_time)}</span>`);
                _push2(ssrRenderComponent(_component_el_tag, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.type_desc)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.type_desc), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else if (!unref(pageInfo).loading) {
              _push2(`<div class="h-full flex items-center justify-center" data-v-05d8ce9d${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_result, null, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_image, {
                      class: "w-[150px] dark:opacity-60",
                      src: unref(DrawingEmpty)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_image, {
                        class: "w-[150px] dark:opacity-60",
                        src: unref(DrawingEmpty)
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-xl" data-v-05d8ce9d${_scopeId2}>\u5F53\u524D\u4EFB\u52A1\u662F\u7A7A\u7684\u54E6</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-xl" }, "\u5F53\u524D\u4EFB\u52A1\u662F\u7A7A\u7684\u54E6")
                    ];
                  }
                }),
                "sub-title": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-info" data-v-05d8ce9d${_scopeId2}> \u5728\u5DE6\u4FA7\u8F93\u5165\u63CF\u8FF0\uFF0C\u521B\u5EFA\u4F60\u7684\u4F5C\u54C1\u5427! </div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-info" }, " \u5728\u5DE6\u4FA7\u8F93\u5165\u63CF\u8FF0\uFF0C\u521B\u5EFA\u4F60\u7684\u4F5C\u54C1\u5427! ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(pageInfo).lists.length > 0 ? withDirectives((openBlock(), createBlock("div", {
                key: 0,
                "infinite-scroll-distance": "50"
              }, [
                createVNode("div", { class: "grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(pageInfo).lists, (item, index) => {
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
                            content: "\u590D\u5236\u63D0\u793A\u8BCD",
                            placement: "bottom"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                onClick: ($event) => unref(copy)(item.prompt)
                              }, [
                                createVNode(_component_Icon, {
                                  class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                                  name: "el-icon-CopyDocument",
                                  size: "18",
                                  color: "#556477"
                                })
                              ], 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          item.status === 2 ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createVNode(_component_el_tooltip, {
                              effect: "dark",
                              content: "\u4E0B\u8F7D\u89C6\u9891",
                              placement: "bottom"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  onClick: ($event) => downloadFile(item.video_url, "\u89C6\u9891")
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
                            }, 1024),
                            unref(appStore).getSquareConfig.video_award.is_open ? (openBlock(), createBlock(_component_el_tooltip, {
                              key: 0,
                              effect: "dark",
                              content: "\u5206\u4EAB\u81F3\u5E7F\u573A",
                              placement: "bottom"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md pb-[7px] p-1 box-content",
                                  onClick: ($event) => shareVideo(item.id, item.is_share)
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "local-icon-share",
                                    size: "17",
                                    color: "#556477"
                                  })
                                ], 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ], 64)) : createCommentVNode("", true),
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
                        createVNode("div", { class: "bg-[var(--el-bg-color-page)] rounded-[12px] overflow-hidden" }, [
                          item.status === 2 ? (openBlock(), createBlock(_component_aspect_ratio, {
                            key: 0,
                            src: item.video_url,
                            type: "video",
                            ratio: [4, 3]
                          }, null, 8, ["src"])) : createCommentVNode("", true)
                        ]),
                        item.status === 3 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "w-full pb-[75%]"
                        }, [
                          createVNode("div", { class: "w-full h-full px-4 flex flex-col justify-center items-center absolute left-0 top-0" }, [
                            createVNode("img", {
                              class: "w-1/2 mb-4",
                              src: unref(drawError),
                              alt: "\u751F\u6210\u89C6\u9891\u5931\u8D25"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "my-[10px]" }, "\u751F\u6210\u89C6\u9891\u5931\u8D25"),
                            createVNode("div", { class: "text-xs text-[#798696] dark:text-white line-clamp-3 w-full break-all text-center" }, " \u9519\u8BEF\u4FE1\u606F\uFF1A" + toDisplayString(item.fail_reason), 1)
                          ])
                        ])) : createCommentVNode("", true),
                        item.status === 0 || item.status === 1 ? withDirectives((openBlock(), createBlock("div", {
                          key: 1,
                          class: "video-loading w-full pb-[75%]",
                          "element-loading-text": "\u6B63\u5728\u751F\u6210\u4E2D..."
                        }, null, 512)), [
                          [_directive_loading, true]
                        ]) : createCommentVNode("", true)
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
                            createTextVNode(toDisplayString(item.type_desc), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ]);
                  }), 128))
                ])
              ])), [
                [_directive_infinite_scroll, load]
              ]) : !unref(pageInfo).loading ? (openBlock(), createBlock("div", {
                key: 1,
                class: "h-full flex items-center justify-center"
              }, [
                createVNode(_component_el_result, null, {
                  icon: withCtx(() => [
                    createVNode(_component_el_image, {
                      class: "w-[150px] dark:opacity-60",
                      src: unref(DrawingEmpty)
                    }, null, 8, ["src"])
                  ]),
                  title: withCtx(() => [
                    createVNode("div", { class: "text-xl" }, "\u5F53\u524D\u4EFB\u52A1\u662F\u7A7A\u7684\u54E6")
                  ]),
                  "sub-title": withCtx(() => [
                    createVNode("div", { class: "text-info" }, " \u5728\u5DE6\u4FA7\u8F93\u5165\u63CF\u8FF0\uFF0C\u521B\u5EFA\u4F60\u7684\u4F5C\u54C1\u5427! ")
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(showShare)) {
        _push(ssrRenderComponent(VideoShare, {
          ref_key: "shareRef",
          ref: shareRef,
          onClose: ($event) => showShare.value = false,
          onSuccess: (val) => unref(sharedIds).push(val)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/video/_components/video-result.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VideoResult = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-05d8ce9d"]]);

export { VideoResult as default };
//# sourceMappingURL=video-result-PLYZQFsO.mjs.map
