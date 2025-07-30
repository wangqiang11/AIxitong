import { E as ElTag } from './index-D7S5lb8a.mjs';
import { E as ElTooltip } from './index-L-VTEUEA.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { _ as _sfc_main$2 } from './index-D8NbhMns.mjs';
import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { E as ElResult } from './el-result-V-Bl2idQ.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { E as ElInfiniteScroll } from './index-DNeGbNHc.mjs';
import { bo as copy, A as feedback, ao as ElMessage, B as vLoading } from './server.mjs';
import { defineComponent, reactive, shallowRef, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, withDirectives, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { b as download } from './download-N0luyf1S.mjs';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { D as DrawingEmpty } from './video_empty-DomB--q9.mjs';
import { d as deleteVideo, g as getVideoLists } from './video-DH7H33E1.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import '@vueuse/core';
import '@popperjs/core';
import '@vue/shared';
import 'lodash-unified';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "video",
  __ssrInlineRender: true,
  setup(__props) {
    const pageInfo = reactive({
      pageNo: 1,
      count: 0,
      pageSize: 15,
      loading: true,
      lists: []
    });
    const deleteHandle = async (id) => {
      await feedback.confirm("\u786E\u5B9A\u5220\u9664\uFF1F");
      await deleteVideo({ id });
      ElMessage.success("\u5220\u9664\u6210\u529F");
      resetPage();
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
          status: 2,
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
      }
    };
    const load = () => {
      if (pageInfo.count >= pageInfo.pageNo * pageInfo.pageSize) {
        pageInfo.pageNo++;
        getLists();
      }
    };
    const resetPage = async () => {
      scrollBarRef.value.setScrollTop(0);
      pageInfo.pageSize = pageInfo.pageNo * pageInfo.pageSize;
      pageInfo.pageNo = 1;
      await getLists();
    };
    const scrollBarRef = shallowRef();
    const reload = async () => {
      var _a;
      pageInfo.loading = true;
      pageInfo.pageSize = 15;
      pageInfo.pageNo = 1;
      await getLists();
      (_a = scrollBarRef.value) == null ? void 0 : _a.setScrollTop(0);
    };
    reload();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tag = ElTag;
      const _component_el_tooltip = ElTooltip;
      const _component_Icon = _sfc_main$1;
      const _component_aspect_ratio = _sfc_main$2;
      const _component_el_popover = ElPopover;
      const _component_el_result = ElResult;
      const _component_el_image = ElImage;
      const _directive_infinite_scroll = ElInfiniteScroll;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full bg-body rounded-[15px] p-[16px] flex flex-col" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_loading, unref(pageInfo).loading)))}>`);
      if (unref(pageInfo).lists.length > 0) {
        _push(ssrRenderComponent(unref(ElScrollbar), {
          class: "video-result flex-1",
          ref_key: "scrollBarRef",
          ref: scrollBarRef
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${ssrRenderAttrs(mergeProps({ "infinite-scroll-distance": "50" }, ssrGetDirectiveProps(_ctx, _directive_infinite_scroll, load)))}${_scopeId}><div class="grid grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4"${_scopeId}><!--[-->`);
              ssrRenderList(unref(pageInfo).lists, (item, index) => {
                _push2(`<div class="rounded-xl p-4 flex flex-col gap-2 border border-[#eff0f2] dark:border-[#333333]"${_scopeId}><div class="flex justify-between"${_scopeId}>`);
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
                _push2(`<div class="flex items-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_el_tooltip, {
                  effect: "dark",
                  content: "\u590D\u5236\u63D0\u793A\u8BCD",
                  placement: "bottom"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div${_scopeId2}>`);
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
                _push2(ssrRenderComponent(_component_el_tooltip, {
                  effect: "dark",
                  content: "\u4E0B\u8F7D\u89C6\u9891",
                  placement: "bottom"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div${_scopeId2}>`);
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
                _push2(ssrRenderComponent(_component_el_tooltip, {
                  effect: "dark",
                  content: "\u5220\u9664",
                  placement: "bottom"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div${_scopeId2}>`);
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
                _push2(`</div></div><div class="relative rounded-[12px] overflow-hidden flex-1"${_scopeId}><div class="bg-[var(--el-bg-color-page)]"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_aspect_ratio, {
                  src: item.video_url,
                  type: "video",
                  ratio: [4, 3]
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
                _push2(ssrRenderComponent(_component_el_popover, {
                  placement: "bottom",
                  title: "\u63D0\u793A\u8BCD",
                  width: "300px",
                  "show-arrow": false,
                  transition: "custom-popover",
                  trigger: "hover",
                  content: item.prompt
                }, {
                  reference: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="w-full box-border"${_scopeId2}><div class="line-clamp-1"${_scopeId2}>${ssrInterpolate(item.prompt)}</div></div>`);
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
                _push2(`<div class="flex justify-between items-center"${_scopeId}><span class="text-[#8794A3]"${_scopeId}>${ssrInterpolate(item.create_time)}</span></div></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              return [
                withDirectives((openBlock(), createBlock("div", { "infinite-scroll-distance": "50" }, [
                  createVNode("div", { class: "grid grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(pageInfo).lists, (item, index) => {
                      return openBlock(), createBlock("div", {
                        key: item.id,
                        class: "rounded-xl p-4 flex flex-col gap-2 border border-[#eff0f2] dark:border-[#333333]"
                      }, [
                        createVNode("div", { class: "flex justify-between" }, [
                          createVNode(_component_el_tag, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.type_desc), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(_component_el_tooltip, {
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
                            }, 1024),
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
                          ])
                        ]),
                        createVNode("div", { class: "relative rounded-[12px] overflow-hidden flex-1" }, [
                          createVNode("div", { class: "bg-[var(--el-bg-color-page)]" }, [
                            createVNode(_component_aspect_ratio, {
                              src: item.video_url,
                              type: "video",
                              ratio: [4, 3]
                            }, null, 8, ["src"])
                          ])
                        ]),
                        createVNode(_component_el_popover, {
                          placement: "bottom",
                          title: "\u63D0\u793A\u8BCD",
                          width: "300px",
                          "show-arrow": false,
                          transition: "custom-popover",
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
                          createVNode("span", { class: "text-[#8794A3]" }, toDisplayString(item.create_time), 1)
                        ])
                      ]);
                    }), 128))
                  ])
                ])), [
                  [_directive_infinite_scroll, load]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (!unref(pageInfo).loading) {
        _push(`<div class="h-full flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_el_result, null, {
          icon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_image, {
                class: "w-[150px] dark:opacity-60",
                src: unref(DrawingEmpty)
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_el_image, {
                  class: "w-[150px] dark:opacity-60",
                  src: unref(DrawingEmpty)
                }, null, 8, ["src"])
              ];
            }
          }),
          "sub-title": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-info"${_scopeId}>\u6682\u65F6\u6CA1\u6709\u89C6\u9891\u54E6\uFF0C\u5FEB\u53BB\u751F\u6210\u8BD5\u8BD5\u5427</div>`);
            } else {
              return [
                createVNode("div", { class: "text-info" }, "\u6682\u65F6\u6CA1\u6709\u89C6\u9891\u54E6\uFF0C\u5FEB\u53BB\u751F\u6210\u8BD5\u8BD5\u5427")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index/works/_components/video.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=video-3CsxhFdg.mjs.map
