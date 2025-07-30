import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElSkeleton } from './el-skeleton-item-P_GLWXGa.mjs';
import { E as ElTag } from './index-D7S5lb8a.mjs';
import { E as ElInput, d as ElButton } from './server.mjs';
import { useSSRContext, defineComponent, shallowRef, mergeProps, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, nextTick } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useAiPPTStore } from './aiPPT-BfjAVP_f.mjs';
import _sfc_main$1 from './select-template-CAU51dfS.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import '@vue/shared';
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
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './ai_ppt-C1HXY0_t.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './useLockFn-BWbjkhBs.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "gen-outline",
  __ssrInlineRender: true,
  setup(__props) {
    const aiPPTStore = useAiPPTStore();
    const scrollbarRef = shallowRef();
    const scrollToBottom = async () => {
      var _a, _b, _c;
      const scrollHeight = (_b = (_a = scrollbarRef.value) == null ? void 0 : _a.wrapRef) == null ? void 0 : _b.scrollHeight;
      (_c = scrollbarRef.value) == null ? void 0 : _c.setScrollTop(scrollHeight);
    };
    const regenerate = async () => {
      aiPPTStore.genOutline();
      await nextTick();
      scrollToBottom();
    };
    let currentOutline = {};
    const showPPTTemplate = (item) => {
      currentOutline = item;
      aiPPTStore.showTemplate = true;
    };
    const confirmTemplate = async () => {
      const { title, catalogs } = currentOutline;
      await aiPPTStore.genPPTSubmit({ ...aiPPTStore.options, title, catalogs });
      aiPPTStore.showTemplate = false;
      aiPPTStore.showOutline = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$2;
      const _component_ElScrollbar = ElScrollbar;
      const _component_el_skeleton = ElSkeleton;
      const _component_el_tag = ElTag;
      const _component_el_input = ElInput;
      const _component_ElButton = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col" }, _attrs))} data-v-aadca646><div class="px-[15px] py-[15px]" data-v-aadca646><div class="flex items-center cursor-pointer" data-v-aadca646><div class="flex bg-body p-[5px] text-bold rounded-[50%] text-primary shadow-light" data-v-aadca646>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "el-icon-Back",
        size: 18
      }, null, _parent));
      _push(`</div><div class="text-xl flex-1 min-w-0 ml-[10px]" data-v-aadca646>AIPPT</div></div></div><div class="flex-1 min-h-0" data-v-aadca646>`);
      _push(ssrRenderComponent(_component_ElScrollbar, {
        ref_key: "scrollbarRef",
        ref: scrollbarRef
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-[20px] max-w-[650px] mx-auto" data-v-aadca646${_scopeId}><!--[-->`);
            ssrRenderList(unref(aiPPTStore).outlineLists, (item, index) => {
              _push2(`<div data-v-aadca646${_scopeId}><div class="flex justify-end mb-[30px]" data-v-aadca646${_scopeId}><div class="outline-text !rounded-tr-none" data-v-aadca646${_scopeId}>${ssrInterpolate(item.prompt)}</div></div><div data-v-aadca646${_scopeId}>`);
              if (item.status >= 0) {
                _push2(`<div class="flex mb-[20px]" data-v-aadca646${_scopeId}><div class="outline-text !rounded-tl-none !bg-page !text-tx-primary" data-v-aadca646${_scopeId}> \u60A8\u7684\u5185\u5BB9\u3010${ssrInterpolate(item.prompt)}\u3011\u5927\u7EB2\u6B63\u5728\u751F\u6210\u4E2D... </div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.status == 1) {
                _push2(`<div class="flex mb-[20px]" data-v-aadca646${_scopeId}><div class="outline-text !rounded-tl-none !bg-page !text-tx-primary" data-v-aadca646${_scopeId}> \u60A8\u7684\u5185\u5BB9\u3010${ssrInterpolate(item.prompt)}\u3011\u5927\u7EB2\u5DF2\u751F\u6210\uFF0C\u6765\u770B\u770B\u5427 </div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.status == 2) {
                _push2(`<div class="flex mb-[20px]" data-v-aadca646${_scopeId}><div class="outline-text !rounded-tl-none !bg-page !text-tx-primary" data-v-aadca646${_scopeId}> \u60A8\u7684\u5185\u5BB9\u3010${ssrInterpolate(item.prompt)}\u3011\u5927\u7EB2\u751F\u6210\u5931\u8D25\u4E86\uFF0C\u8BF7\u91CD\u8BD5 </div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="mb-[30px] flex flex-col bg-white p-4 shadow-lighter rounded-[15px] h-[600px]" data-v-aadca646${_scopeId}><div class="flex items-center justify-between" data-v-aadca646${_scopeId}><div class="font-bold" data-v-aadca646${_scopeId}>PPT\u5927\u7EB2</div><div class="text-xs text-tx-secondary" data-v-aadca646${_scopeId}> \u7531AI\u751F\u6210\uFF0C\u4EC5\u4F9B\u53C2\u8003 </div></div><div class="flex-1 my-4 min-h-0 border border-br-light border-solid rounded-[6px]" data-v-aadca646${_scopeId}>`);
              if (item.status == 0) {
                _push2(`<div class="p-4" data-v-aadca646${_scopeId}>`);
                _push2(ssrRenderComponent(_component_el_skeleton, {
                  animated: "",
                  rows: 12
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else if (item.status == 1) {
                _push2(ssrRenderComponent(_component_ElScrollbar, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="p-4" data-v-aadca646${_scopeId2}><div class="outline-item flex items-center" data-v-aadca646${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_el_tag, { size: "small" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`\u4E3B\u9898`);
                          } else {
                            return [
                              createTextVNode("\u4E3B\u9898")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<div class="ml-[10px] flex-1 min-w-0" data-v-aadca646${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_el_input, {
                        modelValue: item.title,
                        "onUpdate:modelValue": ($event) => item.title = $event
                      }, null, _parent3, _scopeId2));
                      _push3(`</div></div><div class="mt-4 flex" data-v-aadca646${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_el_tag, {
                        size: "small",
                        class: "mt-[6px]"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`\u5927\u7EB2`);
                          } else {
                            return [
                              createTextVNode("\u5927\u7EB2")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<div class="flex-1 min-w-0 ml-[10px]" data-v-aadca646${_scopeId2}><!--[-->`);
                      ssrRenderList(item.catalogs, (c, ci) => {
                        _push3(`<div class="outline-item mb-[5px]" data-v-aadca646${_scopeId2}><div class="flex items-center mb-[5px]" data-v-aadca646${_scopeId2}><span class="mr-1" data-v-aadca646${_scopeId2}>\u2022</span>`);
                        _push3(ssrRenderComponent(_component_el_input, {
                          modelValue: c.catalog,
                          "onUpdate:modelValue": ($event) => c.catalog = $event
                        }, null, _parent3, _scopeId2));
                        _push3(`</div><div class="ml-[15px]" data-v-aadca646${_scopeId2}><!--[-->`);
                        ssrRenderList(c.sub_catalog, (s, si) => {
                          _push3(`<div class="flex items-center mb-[5px]" data-v-aadca646${_scopeId2}><span class="mr-1" data-v-aadca646${_scopeId2}>\u2022</span>`);
                          _push3(ssrRenderComponent(_component_el_input, {
                            modelValue: c.sub_catalog[si],
                            "onUpdate:modelValue": ($event) => c.sub_catalog[si] = $event
                          }, null, _parent3, _scopeId2));
                          _push3(`</div>`);
                        });
                        _push3(`<!--]--></div></div>`);
                      });
                      _push3(`<!--]--></div></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "p-4" }, [
                          createVNode("div", { class: "outline-item flex items-center" }, [
                            createVNode(_component_el_tag, { size: "small" }, {
                              default: withCtx(() => [
                                createTextVNode("\u4E3B\u9898")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "ml-[10px] flex-1 min-w-0" }, [
                              createVNode(_component_el_input, {
                                modelValue: item.title,
                                "onUpdate:modelValue": ($event) => item.title = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ]),
                          createVNode("div", { class: "mt-4 flex" }, [
                            createVNode(_component_el_tag, {
                              size: "small",
                              class: "mt-[6px]"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u5927\u7EB2")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "flex-1 min-w-0 ml-[10px]" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.catalogs, (c, ci) => {
                                return openBlock(), createBlock("div", {
                                  key: ci,
                                  class: "outline-item mb-[5px]"
                                }, [
                                  createVNode("div", { class: "flex items-center mb-[5px]" }, [
                                    createVNode("span", { class: "mr-1" }, "\u2022"),
                                    createVNode(_component_el_input, {
                                      modelValue: c.catalog,
                                      "onUpdate:modelValue": ($event) => c.catalog = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "ml-[15px]" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(c.sub_catalog, (s, si) => {
                                      return openBlock(), createBlock("div", {
                                        key: si,
                                        class: "flex items-center mb-[5px]"
                                      }, [
                                        createVNode("span", { class: "mr-1" }, "\u2022"),
                                        createVNode(_component_el_input, {
                                          modelValue: c.sub_catalog[si],
                                          "onUpdate:modelValue": ($event) => c.sub_catalog[si] = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]);
                                    }), 128))
                                  ])
                                ]);
                              }), 128))
                            ])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<div class="p-4 h-full flex text-tx-secondary items-center justify-center" data-v-aadca646${_scopeId}> \u751F\u6210\u5931\u8D25\uFF0C\u8BF7\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u91CD\u65B0\u751F\u6210 </div>`);
              }
              _push2(`</div><div class="flex items-center" data-v-aadca646${_scopeId}>`);
              if (item.status >= 1) {
                _push2(ssrRenderComponent(_component_ElButton, {
                  link: "",
                  onClick: regenerate
                }, {
                  icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "el-icon-RefreshRight",
                        size: 16
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_Icon, {
                          name: "el-icon-RefreshRight",
                          size: 16
                        })
                      ];
                    }
                  }),
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u91CD\u65B0\u751F\u6210 `);
                    } else {
                      return [
                        createTextVNode(" \u91CD\u65B0\u751F\u6210 ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="ml-auto w-1/2" data-v-aadca646${_scopeId}>`);
              if (item.status == 1) {
                _push2(ssrRenderComponent(_component_ElButton, {
                  size: "large",
                  type: "primary",
                  class: "w-full",
                  onClick: ($event) => showPPTTemplate(item)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u9009\u62E9PPT\u6A21\u677F `);
                    } else {
                      return [
                        createTextVNode(" \u9009\u62E9PPT\u6A21\u677F ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "py-[20px] max-w-[650px] mx-auto" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(aiPPTStore).outlineLists, (item, index) => {
                  return openBlock(), createBlock("div", { key: index }, [
                    createVNode("div", { class: "flex justify-end mb-[30px]" }, [
                      createVNode("div", { class: "outline-text !rounded-tr-none" }, toDisplayString(item.prompt), 1)
                    ]),
                    createVNode("div", null, [
                      item.status >= 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex mb-[20px]"
                      }, [
                        createVNode("div", { class: "outline-text !rounded-tl-none !bg-page !text-tx-primary" }, " \u60A8\u7684\u5185\u5BB9\u3010" + toDisplayString(item.prompt) + "\u3011\u5927\u7EB2\u6B63\u5728\u751F\u6210\u4E2D... ", 1)
                      ])) : createCommentVNode("", true),
                      item.status == 1 ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "flex mb-[20px]"
                      }, [
                        createVNode("div", { class: "outline-text !rounded-tl-none !bg-page !text-tx-primary" }, " \u60A8\u7684\u5185\u5BB9\u3010" + toDisplayString(item.prompt) + "\u3011\u5927\u7EB2\u5DF2\u751F\u6210\uFF0C\u6765\u770B\u770B\u5427 ", 1)
                      ])) : createCommentVNode("", true),
                      item.status == 2 ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "flex mb-[20px]"
                      }, [
                        createVNode("div", { class: "outline-text !rounded-tl-none !bg-page !text-tx-primary" }, " \u60A8\u7684\u5185\u5BB9\u3010" + toDisplayString(item.prompt) + "\u3011\u5927\u7EB2\u751F\u6210\u5931\u8D25\u4E86\uFF0C\u8BF7\u91CD\u8BD5 ", 1)
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "mb-[30px] flex flex-col bg-white p-4 shadow-lighter rounded-[15px] h-[600px]" }, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("div", { class: "font-bold" }, "PPT\u5927\u7EB2"),
                        createVNode("div", { class: "text-xs text-tx-secondary" }, " \u7531AI\u751F\u6210\uFF0C\u4EC5\u4F9B\u53C2\u8003 ")
                      ]),
                      createVNode("div", { class: "flex-1 my-4 min-h-0 border border-br-light border-solid rounded-[6px]" }, [
                        item.status == 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "p-4"
                        }, [
                          createVNode(_component_el_skeleton, {
                            animated: "",
                            rows: 12
                          })
                        ])) : item.status == 1 ? (openBlock(), createBlock(_component_ElScrollbar, { key: 1 }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "p-4" }, [
                              createVNode("div", { class: "outline-item flex items-center" }, [
                                createVNode(_component_el_tag, { size: "small" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u4E3B\u9898")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "ml-[10px] flex-1 min-w-0" }, [
                                  createVNode(_component_el_input, {
                                    modelValue: item.title,
                                    "onUpdate:modelValue": ($event) => item.title = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 flex" }, [
                                createVNode(_component_el_tag, {
                                  size: "small",
                                  class: "mt-[6px]"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u5927\u7EB2")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "flex-1 min-w-0 ml-[10px]" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.catalogs, (c, ci) => {
                                    return openBlock(), createBlock("div", {
                                      key: ci,
                                      class: "outline-item mb-[5px]"
                                    }, [
                                      createVNode("div", { class: "flex items-center mb-[5px]" }, [
                                        createVNode("span", { class: "mr-1" }, "\u2022"),
                                        createVNode(_component_el_input, {
                                          modelValue: c.catalog,
                                          "onUpdate:modelValue": ($event) => c.catalog = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "ml-[15px]" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(c.sub_catalog, (s, si) => {
                                          return openBlock(), createBlock("div", {
                                            key: si,
                                            class: "flex items-center mb-[5px]"
                                          }, [
                                            createVNode("span", { class: "mr-1" }, "\u2022"),
                                            createVNode(_component_el_input, {
                                              modelValue: c.sub_catalog[si],
                                              "onUpdate:modelValue": ($event) => c.sub_catalog[si] = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]);
                                        }), 128))
                                      ])
                                    ]);
                                  }), 128))
                                ])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024)) : (openBlock(), createBlock("div", {
                          key: 2,
                          class: "p-4 h-full flex text-tx-secondary items-center justify-center"
                        }, " \u751F\u6210\u5931\u8D25\uFF0C\u8BF7\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u91CD\u65B0\u751F\u6210 "))
                      ]),
                      createVNode("div", { class: "flex items-center" }, [
                        item.status >= 1 ? (openBlock(), createBlock(_component_ElButton, {
                          key: 0,
                          link: "",
                          onClick: regenerate
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "el-icon-RefreshRight",
                              size: 16
                            })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" \u91CD\u65B0\u751F\u6210 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", { class: "ml-auto w-1/2" }, [
                          item.status == 1 ? (openBlock(), createBlock(_component_ElButton, {
                            key: 0,
                            size: "large",
                            type: "primary",
                            class: "w-full",
                            onClick: ($event) => showPPTTemplate(item)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u9009\u62E9PPT\u6A21\u677F ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : createCommentVNode("", true)
                        ])
                      ])
                    ])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        visible: unref(aiPPTStore).showTemplate,
        "onUpdate:visible": ($event) => unref(aiPPTStore).showTemplate = $event,
        "cover-id": unref(aiPPTStore).options.cover_id,
        "onUpdate:coverId": ($event) => unref(aiPPTStore).options.cover_id = $event,
        prompt: unref(aiPPTStore).options.prompt,
        onConfirm: confirmTemplate
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai_ppt/_components/gen-outline.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GenOutline = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aadca646"]]);

export { GenOutline as default };
//# sourceMappingURL=gen-outline-B0NhKtZ-.mjs.map
