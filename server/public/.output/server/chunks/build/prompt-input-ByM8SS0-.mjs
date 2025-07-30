import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElSegmented } from './el-segmented-KMsqQ2AI.mjs';
import { E as ElTooltip } from './index-L-VTEUEA.mjs';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { a5 as useAppStore, E as ElInput, d as ElButton } from './server.mjs';
import { useSSRContext, defineComponent, resolveComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useAiPPTStore, useSearchEx } from './aiPPT-BfjAVP_f.mjs';
import _sfc_main$1 from './select-template-CAU51dfS.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@vueuse/core';
import '@vue/shared';
import '@popperjs/core';
import 'lodash-unified';
import 'vue-router';
import 'lodash-es';
import 'weixin-js-sdk';
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

const _imports_0 = "" + buildAssetsURL("ai_ppt_title.BGhjFYvC.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "prompt-input",
  __ssrInlineRender: true,
  setup(__props) {
    const aiPPTStore = useAiPPTStore();
    useAppStore();
    const typeOptions = [
      {
        label: "\u57FA\u7840",
        value: 1,
        icon: "local-icon-cube",
        desc: "\u57FA\u4E8E\u63CF\u8FF0\u751F\u6210PPT"
      },
      {
        label: "\u589E\u5F3A",
        value: 2,
        icon: "local-icon-light-bulb",
        desc: "\u57FA\u4E8E\u63CF\u8FF0\u53CA\u6A21\u677F\u751F\u6210PPT"
      },
      {
        label: "\u6DF1\u5165",
        value: 3,
        icon: "local-icon-bottle",
        desc: "\u57FA\u4E8E\u5927\u7EB2\u53CA\u6A21\u677F\u751F\u6210PPT"
      }
    ];
    const handleInputEnter = (e) => {
      if (e.shiftKey && e.keyCode === 13) {
        return;
      }
      if (e.keyCode === 13) {
        aiPPTStore.genPPT();
        return e.preventDefault();
      }
    };
    const confirmTemplate = async () => {
      await aiPPTStore.genPPTSubmit(aiPPTStore.options);
      aiPPTStore.showTemplate = false;
    };
    const { searchEx, getSearchEx } = useSearchEx();
    const clickItem = (title) => {
      aiPPTStore.options.prompt = title;
    };
    getSearchEx();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElScrollbar = ElScrollbar;
      const _component_el_segmented = ElSegmented;
      const _component_el_tooltip = ElTooltip;
      const _component_Icon = _sfc_main$2;
      const _component_el_input = ElInput;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_ElButton = ElButton;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full prompt-input" }, _attrs))} data-v-8e6c4445>`);
      _push(ssrRenderComponent(_component_ElScrollbar, { class: "scroll-bar" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-[1200px] mx-auto" data-v-8e6c4445${_scopeId}><div class="flex flex-col justify-center items-center py-[120px]" data-v-8e6c4445${_scopeId}><img class="h-[68px] w-[688px]"${ssrRenderAttr("src", _imports_0)} alt="" data-v-8e6c4445${_scopeId}><div class="text-[20px] text-tx-regular mt-3" data-v-8e6c4445${_scopeId}> \u8F93\u5165\u4E3B\u9898\u63CF\u8FF0\uFF0C\u5FEB\u901F\u751F\u6210\u4E13\u5C5EPPT </div><div class="text-tx-secondary mt-2" data-v-8e6c4445${_scopeId}> \u514D\u8D39\u9884\u89C8\uFF0C\u6EE1\u610F\u518D\u4ED8\u8D39\u3002PPT\u5185\u5BB9\u7531AI\u751F\u6210\uFF0C\u4EC5\u4F9B\u53C2\u8003 </div><div class="mt-[28px]" data-v-8e6c4445${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_segmented, {
              modelValue: unref(aiPPTStore).options.type,
              "onUpdate:modelValue": ($event) => unref(aiPPTStore).options.type = $event,
              options: typeOptions,
              style: {
                width: `${typeOptions.length * 90}px`,
                "--el-border-radius-base": "10px",
                "--el-segmented-color": "var(--el-text-color-primary)"
              }
            }, {
              default: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_tooltip, {
                    effect: "dark",
                    content: item.desc,
                    disabled: !item.desc,
                    placement: "top"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="py-[10px]" data-v-8e6c4445${_scopeId3}><div class="flex items-center justify-center" data-v-8e6c4445${_scopeId3}><span class="${ssrRenderClass({
                          "!text-primary": unref(aiPPTStore).options.type !== item.value
                        })}" data-v-8e6c4445${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Icon, {
                          size: "15",
                          name: item.icon
                        }, null, _parent4, _scopeId3));
                        _push4(`</span><div class="ml-1" data-v-8e6c4445${_scopeId3}>${ssrInterpolate(item.label)}</div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "py-[10px]" }, [
                            createVNode("div", { class: "flex items-center justify-center" }, [
                              createVNode("span", {
                                class: {
                                  "!text-primary": unref(aiPPTStore).options.type !== item.value
                                }
                              }, [
                                createVNode(_component_Icon, {
                                  size: "15",
                                  name: item.icon
                                }, null, 8, ["name"])
                              ], 2),
                              createVNode("div", { class: "ml-1" }, toDisplayString(item.label), 1)
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_tooltip, {
                      effect: "dark",
                      content: item.desc,
                      disabled: !item.desc,
                      placement: "top"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "py-[10px]" }, [
                          createVNode("div", { class: "flex items-center justify-center" }, [
                            createVNode("span", {
                              class: {
                                "!text-primary": unref(aiPPTStore).options.type !== item.value
                              }
                            }, [
                              createVNode(_component_Icon, {
                                size: "15",
                                name: item.icon
                              }, null, 8, ["name"])
                            ], 2),
                            createVNode("div", { class: "ml-1" }, toDisplayString(item.label), 1)
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["content", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-[30px]" data-v-8e6c4445${_scopeId}><div class="bg-page rounded-[15px] overflow-hidden p-[10px] w-[560px]" data-v-8e6c4445${_scopeId}><div data-v-8e6c4445${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_input, {
              modelValue: unref(aiPPTStore).options.prompt,
              "onUpdate:modelValue": ($event) => unref(aiPPTStore).options.prompt = $event,
              autosize: { minRows: 2, maxRows: 4 },
              type: "textarea",
              placeholder: "\u7B80\u5355\u8F93\u5165\u4E00\u4E2A\u6807\u9898\u5373\u53EF\u751F\u6210PPT",
              resize: "none",
              onKeydown: handleInputEnter
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center" data-v-8e6c4445${_scopeId}><div class="mr-auto" data-v-8e6c4445${_scopeId}>`);
            _push2(ssrRenderComponent(_component_RouterLink, { to: "/ai_ppt/history" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, { link: "" }, {
                    icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, { name: "el-icon-Clock" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, { name: "el-icon-Clock" })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u5386\u53F2\u8BB0\u5F55 `);
                      } else {
                        return [
                          createTextVNode(" \u5386\u53F2\u8BB0\u5F55 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, { link: "" }, {
                      icon: withCtx(() => [
                        createVNode(_component_Icon, { name: "el-icon-Clock" })
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" \u5386\u53F2\u8BB0\u5F55 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div data-v-8e6c4445${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              style: {
                padding: "8px"
              },
              onClick: ($event) => unref(aiPPTStore).genPPT()
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, { name: "el-icon-Promotion" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, { name: "el-icon-Promotion" })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5FEB\u901F\u751F\u6210 `);
                } else {
                  return [
                    createTextVNode(" \u5FEB\u901F\u751F\u6210 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div><div class="flex flex-wrap mx-[-7px] mb-[-14px] mt-[30px]" data-v-8e6c4445${_scopeId}><!--[-->`);
            ssrRenderList(unref(searchEx), (item, index) => {
              _push2(`<div class="flex max-w-full items-center mx-[7px] cursor-pointer hover:bg-fill-light mb-[14px] px-[15px] py-[10px] border border-br-light border-solid rounded-[12px]" data-v-8e6c4445${_scopeId}><div class="flex-1 line-clamp-1 text-tx-secondary" data-v-8e6c4445${_scopeId}>${ssrInterpolate(item)}</div><span class="text-primary flex ml-[10px]" data-v-8e6c4445${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-Right" }, null, _parent2, _scopeId));
              _push2(`</span></div>`);
            });
            _push2(`<!--]--></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-[1200px] mx-auto" }, [
                createVNode("div", { class: "flex flex-col justify-center items-center py-[120px]" }, [
                  createVNode("img", {
                    class: "h-[68px] w-[688px]",
                    src: _imports_0,
                    alt: ""
                  }),
                  createVNode("div", { class: "text-[20px] text-tx-regular mt-3" }, " \u8F93\u5165\u4E3B\u9898\u63CF\u8FF0\uFF0C\u5FEB\u901F\u751F\u6210\u4E13\u5C5EPPT "),
                  createVNode("div", { class: "text-tx-secondary mt-2" }, " \u514D\u8D39\u9884\u89C8\uFF0C\u6EE1\u610F\u518D\u4ED8\u8D39\u3002PPT\u5185\u5BB9\u7531AI\u751F\u6210\uFF0C\u4EC5\u4F9B\u53C2\u8003 "),
                  createVNode("div", { class: "mt-[28px]" }, [
                    createVNode(_component_el_segmented, {
                      modelValue: unref(aiPPTStore).options.type,
                      "onUpdate:modelValue": ($event) => unref(aiPPTStore).options.type = $event,
                      options: typeOptions,
                      style: {
                        width: `${typeOptions.length * 90}px`,
                        "--el-border-radius-base": "10px",
                        "--el-segmented-color": "var(--el-text-color-primary)"
                      }
                    }, {
                      default: withCtx(({ item }) => [
                        createVNode(_component_el_tooltip, {
                          effect: "dark",
                          content: item.desc,
                          disabled: !item.desc,
                          placement: "top"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "py-[10px]" }, [
                              createVNode("div", { class: "flex items-center justify-center" }, [
                                createVNode("span", {
                                  class: {
                                    "!text-primary": unref(aiPPTStore).options.type !== item.value
                                  }
                                }, [
                                  createVNode(_component_Icon, {
                                    size: "15",
                                    name: item.icon
                                  }, null, 8, ["name"])
                                ], 2),
                                createVNode("div", { class: "ml-1" }, toDisplayString(item.label), 1)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["content", "disabled"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "style"])
                  ]),
                  createVNode("div", { class: "mt-[30px]" }, [
                    createVNode("div", { class: "bg-page rounded-[15px] overflow-hidden p-[10px] w-[560px]" }, [
                      createVNode("div", null, [
                        createVNode(_component_el_input, {
                          modelValue: unref(aiPPTStore).options.prompt,
                          "onUpdate:modelValue": ($event) => unref(aiPPTStore).options.prompt = $event,
                          autosize: { minRows: 2, maxRows: 4 },
                          type: "textarea",
                          placeholder: "\u7B80\u5355\u8F93\u5165\u4E00\u4E2A\u6807\u9898\u5373\u53EF\u751F\u6210PPT",
                          resize: "none",
                          onKeydown: handleInputEnter
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "mr-auto" }, [
                          createVNode(_component_RouterLink, { to: "/ai_ppt/history" }, {
                            default: withCtx(() => [
                              createVNode(_component_ElButton, { link: "" }, {
                                icon: withCtx(() => [
                                  createVNode(_component_Icon, { name: "el-icon-Clock" })
                                ]),
                                default: withCtx(() => [
                                  createTextVNode(" \u5386\u53F2\u8BB0\u5F55 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", null, [
                          createVNode(_component_el_button, {
                            type: "primary",
                            style: {
                              padding: "8px"
                            },
                            onClick: ($event) => unref(aiPPTStore).genPPT()
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_Icon, { name: "el-icon-Promotion" })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" \u5FEB\u901F\u751F\u6210 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-wrap mx-[-7px] mb-[-14px] mt-[30px]" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(searchEx), (item, index) => {
                      return openBlock(), createBlock("div", {
                        class: "flex max-w-full items-center mx-[7px] cursor-pointer hover:bg-fill-light mb-[14px] px-[15px] py-[10px] border border-br-light border-solid rounded-[12px]",
                        key: index,
                        onClick: ($event) => clickItem(item)
                      }, [
                        createVNode("div", { class: "flex-1 line-clamp-1 text-tx-secondary" }, toDisplayString(item), 1),
                        createVNode("span", { class: "text-primary flex ml-[10px]" }, [
                          createVNode(_component_Icon, { name: "el-icon-Right" })
                        ])
                      ], 8, ["onClick"]);
                    }), 128))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai_ppt/_components/prompt-input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PromptInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8e6c4445"]]);

export { PromptInput as default };
//# sourceMappingURL=prompt-input-ByM8SS0-.mjs.map
