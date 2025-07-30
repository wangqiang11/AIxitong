import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { E as ElDialog } from './index-CzJm6kkT.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElResult } from './el-result-V-Bl2idQ.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { d as ElButton } from './server.mjs';
import { useSSRContext, defineComponent, ref, watchEffect, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, unref, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { k as keywordPrompt, f as formData } from './useDrawEffect-B2jxDCVi.mjs';
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
import './use-dialog-DHq_GjFf.mjs';
import '@vueuse/core';
import 'lodash-unified';
import './refs-CJvnaIJj.mjs';
import '@vue/shared';
import './position-DVxxNIGX.mjs';
import 'vue-router';
import 'lodash-es';
import 'weixin-js-sdk';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './usePaging-DU8sXki3.mjs';
import './usePolling-DOP50YcO.mjs';
import './DrawEnum-CqAPEJOR.mjs';

const PromptEmpty = "" + buildAssetsURL("drawing_empty.4ZSZFbZC.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "prompt-selector",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const visible = ref(false);
    const current = ref(-1);
    const keywordCateList = ref([]);
    const keywordPromptData = ref({
      prompt: [],
      cate_prompt: []
    });
    const currentPrompt = ref([]);
    const currentCateNum = ref([]);
    watchEffect(() => {
      const prompt = props.modelValue;
      if (prompt == "") {
        currentPrompt.value = [];
        currentCateNum.value = [];
      }
    });
    const onChoicePrompt = (text) => {
      const index = currentPrompt.value.findIndex((item) => item == text);
      if (index >= 0) {
        currentPrompt.value.splice(index, 1);
        currentCateNum.value.splice(index, 1);
        return;
      }
      currentPrompt.value.push(text);
      currentCateNum.value.push(current.value);
    };
    const onPromptAdd = () => {
      visible.value = false;
      if (props.modelValue.trim() == "") {
        const prompt = currentPrompt.value.length ? currentPrompt.value.join(",") : "";
        emit("update:modelValue", prompt);
      } else {
        const prompt = currentPrompt.value.length ? currentPrompt.value.join(",") : "";
        const keyword = `${props.modelValue} ${prompt ? `,${prompt}` : ""}`;
        emit("update:modelValue", keyword);
      }
      currentPrompt.value = [];
    };
    const onAlternatePrompt = () => {
      visible.value = false;
      const prompt = currentPrompt.value.length ? currentPrompt.value.join(",") : "";
      emit("update:modelValue", prompt);
      currentPrompt.value = [];
    };
    const changeCate = (index) => {
      if (current.value == index) {
        return;
      }
      console.log(index);
      current.value = index;
      getKeywordPrompt();
    };
    const getKeywordPrompt = async () => {
      try {
        keywordPromptData.value = await keywordPrompt({
          model: formData.value.draw_api,
          id: keywordCateList.value[current.value].id
        });
      } catch (error) {
        console.log("\u83B7\u53D6\u5173\u952E\u8BCD\u9519\u8BEF", error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_dialog = ElDialog;
      const _component_ElScrollbar = ElScrollbar;
      const _component_el_result = ElResult;
      const _component_el_image = ElImage;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "keyword-dialog" }, _attrs))} data-v-7f6d7181><div class="dialog__trigger" data-v-7f6d7181>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_el_dialog, {
        modelValue: visible.value,
        "onUpdate:modelValue": ($event) => visible.value = $event,
        width: "870px",
        "align-center": true,
        style: { "border-radius": "12px" }
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-xl font-medium text-[#101010] dark:text-white" data-v-7f6d7181${_scopeId}> \u63CF\u8FF0\u8BCD\u63A8\u8350 </div>`);
          } else {
            return [
              createVNode("div", { class: "text-xl font-medium text-[#101010] dark:text-white" }, " \u63CF\u8FF0\u8BCD\u63A8\u8350 ")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between" data-v-7f6d7181${_scopeId}><div class="flex justify-center items-center text-tx-secondary text-base" data-v-7f6d7181${_scopeId}><span data-v-7f6d7181${_scopeId}> \u5DF2\u9009\u62E9 </span><span class="mx-1 text-primary" data-v-7f6d7181${_scopeId}>${ssrInterpolate(currentPrompt.value.length)}</span><span data-v-7f6d7181${_scopeId}>\u4E2ATag</span></div><div class="dialog-footer" data-v-7f6d7181${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              onClick: ($event) => onPromptAdd()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u6DFB\u52A0\u5230\u6587\u672C\u63CF\u8FF0 `);
                } else {
                  return [
                    createTextVNode(" \u6DFB\u52A0\u5230\u6587\u672C\u63CF\u8FF0 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              class: "ml-[10px]",
              plain: true,
              onClick: ($event) => onAlternatePrompt()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u66FF\u6362\u5F53\u524D\u6587\u672C\u63CF\u8FF0 `);
                } else {
                  return [
                    createTextVNode(" \u66FF\u6362\u5F53\u524D\u6587\u672C\u63CF\u8FF0 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between" }, [
                createVNode("div", { class: "flex justify-center items-center text-tx-secondary text-base" }, [
                  createVNode("span", null, " \u5DF2\u9009\u62E9 "),
                  createVNode("span", { class: "mx-1 text-primary" }, toDisplayString(currentPrompt.value.length), 1),
                  createVNode("span", null, "\u4E2ATag")
                ]),
                createVNode("div", { class: "dialog-footer" }, [
                  createVNode(_component_el_button, {
                    type: "primary",
                    onClick: ($event) => onPromptAdd()
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u6DFB\u52A0\u5230\u6587\u672C\u63CF\u8FF0 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_el_button, {
                    type: "primary",
                    class: "ml-[10px]",
                    plain: true,
                    onClick: ($event) => onAlternatePrompt()
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u66FF\u6362\u5F53\u524D\u6587\u672C\u63CF\u8FF0 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex" data-v-7f6d7181${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElScrollbar, {
              class: "w-[110px] bg-page-base",
              height: "500px"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-[var(--el-bg-color)]" data-v-7f6d7181${_scopeId2}><!--[-->`);
                  ssrRenderList(keywordCateList.value, (item, index) => {
                    _push3(`<div class="${ssrRenderClass([{
                      "keyword-cate-item-active": index == current.value,
                      "keyword-cate-item-prev": index == current.value - 1,
                      "keyword-cate-item-next": index == current.value + 1,
                      "keyword-cate-item-has-prompt": currentCateNum.value.includes(index)
                    }, "keyword-cate-item"])}" data-v-7f6d7181${_scopeId2}><span data-v-7f6d7181${_scopeId2}>${ssrInterpolate(item.name)}</span></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-[var(--el-bg-color)]" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(keywordCateList.value, (item, index) => {
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: ["keyword-cate-item", {
                            "keyword-cate-item-active": index == current.value,
                            "keyword-cate-item-prev": index == current.value - 1,
                            "keyword-cate-item-next": index == current.value + 1,
                            "keyword-cate-item-has-prompt": currentCateNum.value.includes(index)
                          }],
                          onClick: ($event) => changeCate(index)
                        }, [
                          createVNode("span", null, toDisplayString(item.name), 1)
                        ], 10, ["onClick"]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElScrollbar, {
              class: "flex-1",
              height: "500px"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (keywordPromptData.value.prompt.length || keywordPromptData.value.cate_prompt.length) {
                    _push3(`<!--[--><!--[-->`);
                    ssrRenderList(keywordPromptData.value.cate_prompt, (item, index) => {
                      _push3(`<div class="keyword-container" data-v-7f6d7181${_scopeId2}><div class="py-[15px] text-base font-medium text-[#101010] dark:text-white" data-v-7f6d7181${_scopeId2}>${ssrInterpolate(item.name)}</div><!--[-->`);
                      ssrRenderList(item.prompt, (citem) => {
                        _push3(`<div class="${ssrRenderClass([{
                          "keyword-item-active": currentPrompt.value.includes(citem.prompt_en)
                        }, "keyword-item"])}" data-v-7f6d7181${_scopeId2}>${ssrInterpolate(citem.prompt)}</div>`);
                      });
                      _push3(`<!--]--></div>`);
                    });
                    _push3(`<!--]-->`);
                    if (keywordPromptData.value.prompt.length) {
                      _push3(`<div class="keyword-container" data-v-7f6d7181${_scopeId2}><div class="py-[15px] text-base font-medium text-[#101010] dark:text-white" data-v-7f6d7181${_scopeId2}> \u5176\u5B83 </div><!--[-->`);
                      ssrRenderList(keywordPromptData.value.prompt, (item) => {
                        _push3(`<div class="${ssrRenderClass([{
                          "keyword-item-active": currentPrompt.value.includes(item.prompt_en)
                        }, "keyword-item"])}" data-v-7f6d7181${_scopeId2}>${ssrInterpolate(item.prompt)}</div>`);
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<div class="flex items-center justify-center w-full h-full" data-v-7f6d7181${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_el_result, {
                      title: "",
                      "sub-title": "\u6682\u65E0\u5173\u952E\u8BCD\u63A8\u8350"
                    }, {
                      icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_el_image, {
                            class: "w-[200px] h-[200px]",
                            src: unref(PromptEmpty)
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_el_image, {
                              class: "w-[200px] h-[200px]",
                              src: unref(PromptEmpty)
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`&gt; `);
                        } else {
                          return [
                            createTextVNode("> ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  }
                } else {
                  return [
                    keywordPromptData.value.prompt.length || keywordPromptData.value.cate_prompt.length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(keywordPromptData.value.cate_prompt, (item, index) => {
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: "keyword-container"
                        }, [
                          createVNode("div", { class: "py-[15px] text-base font-medium text-[#101010] dark:text-white" }, toDisplayString(item.name), 1),
                          (openBlock(true), createBlock(Fragment, null, renderList(item.prompt, (citem) => {
                            return openBlock(), createBlock("div", {
                              key: citem.text,
                              class: ["keyword-item", {
                                "keyword-item-active": currentPrompt.value.includes(citem.prompt_en)
                              }],
                              onClick: ($event) => onChoicePrompt(citem.prompt_en)
                            }, toDisplayString(citem.prompt), 11, ["onClick"]);
                          }), 128))
                        ]);
                      }), 128)),
                      keywordPromptData.value.prompt.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "keyword-container"
                      }, [
                        createVNode("div", { class: "py-[15px] text-base font-medium text-[#101010] dark:text-white" }, " \u5176\u5B83 "),
                        (openBlock(true), createBlock(Fragment, null, renderList(keywordPromptData.value.prompt, (item) => {
                          return openBlock(), createBlock("div", {
                            key: item.text,
                            class: ["keyword-item", {
                              "keyword-item-active": currentPrompt.value.includes(item.prompt_en)
                            }],
                            onClick: ($event) => onChoicePrompt(item.prompt_en)
                          }, toDisplayString(item.prompt), 11, ["onClick"]);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ], 64)) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex items-center justify-center w-full h-full"
                    }, [
                      createVNode(_component_el_result, {
                        title: "",
                        "sub-title": "\u6682\u65E0\u5173\u952E\u8BCD\u63A8\u8350"
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_el_image, {
                            class: "w-[200px] h-[200px]",
                            src: unref(PromptEmpty)
                          }, null, 8, ["src"])
                        ]),
                        default: withCtx(() => [
                          createTextVNode("> ")
                        ]),
                        _: 1
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex" }, [
                createVNode(_component_ElScrollbar, {
                  class: "w-[110px] bg-page-base",
                  height: "500px"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "bg-[var(--el-bg-color)]" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(keywordCateList.value, (item, index) => {
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: ["keyword-cate-item", {
                            "keyword-cate-item-active": index == current.value,
                            "keyword-cate-item-prev": index == current.value - 1,
                            "keyword-cate-item-next": index == current.value + 1,
                            "keyword-cate-item-has-prompt": currentCateNum.value.includes(index)
                          }],
                          onClick: ($event) => changeCate(index)
                        }, [
                          createVNode("span", null, toDisplayString(item.name), 1)
                        ], 10, ["onClick"]);
                      }), 128))
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_ElScrollbar, {
                  class: "flex-1",
                  height: "500px"
                }, {
                  default: withCtx(() => [
                    keywordPromptData.value.prompt.length || keywordPromptData.value.cate_prompt.length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(keywordPromptData.value.cate_prompt, (item, index) => {
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: "keyword-container"
                        }, [
                          createVNode("div", { class: "py-[15px] text-base font-medium text-[#101010] dark:text-white" }, toDisplayString(item.name), 1),
                          (openBlock(true), createBlock(Fragment, null, renderList(item.prompt, (citem) => {
                            return openBlock(), createBlock("div", {
                              key: citem.text,
                              class: ["keyword-item", {
                                "keyword-item-active": currentPrompt.value.includes(citem.prompt_en)
                              }],
                              onClick: ($event) => onChoicePrompt(citem.prompt_en)
                            }, toDisplayString(citem.prompt), 11, ["onClick"]);
                          }), 128))
                        ]);
                      }), 128)),
                      keywordPromptData.value.prompt.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "keyword-container"
                      }, [
                        createVNode("div", { class: "py-[15px] text-base font-medium text-[#101010] dark:text-white" }, " \u5176\u5B83 "),
                        (openBlock(true), createBlock(Fragment, null, renderList(keywordPromptData.value.prompt, (item) => {
                          return openBlock(), createBlock("div", {
                            key: item.text,
                            class: ["keyword-item", {
                              "keyword-item-active": currentPrompt.value.includes(item.prompt_en)
                            }],
                            onClick: ($event) => onChoicePrompt(item.prompt_en)
                          }, toDisplayString(item.prompt), 11, ["onClick"]);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ], 64)) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex items-center justify-center w-full h-full"
                    }, [
                      createVNode(_component_el_result, {
                        title: "",
                        "sub-title": "\u6682\u65E0\u5173\u952E\u8BCD\u63A8\u8350"
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_el_image, {
                            class: "w-[200px] h-[200px]",
                            src: unref(PromptEmpty)
                          }, null, 8, ["src"])
                        ]),
                        default: withCtx(() => [
                          createTextVNode("> ")
                        ]),
                        _: 1
                      })
                    ]))
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/common/prompt-selector.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PromptSelector = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7f6d7181"]]);

export { PromptSelector as default };
//# sourceMappingURL=prompt-selector-DeTNndAA.mjs.map
