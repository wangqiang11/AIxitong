import { E as ElCollapse, a as ElCollapseItem } from './el-collapse-item-DSo9CmH5.mjs';
import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElSlider } from './el-slider-LwCMMHAn.mjs';
import { E as ElInput } from './server.mjs';
import { useSSRContext, defineComponent, ref, unref, isRef, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useVModels } from '@vueuse/core';
import { b as checkUserLogin } from './useDrawEffect-B2jxDCVi.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vue/shared';
import 'lodash-unified';
import './index-DadLUs6d.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './dropdown-C6fgV-Vy.mjs';
import './el-input-number-DH6NTUUv.mjs';
import './index-iSFXrlfY.mjs';
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
import './usePaging-DU8sXki3.mjs';
import './usePolling-DOP50YcO.mjs';
import './DrawEnum-CqAPEJOR.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "doubao-options",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Object,
      default: {
        seed: "",
        // 随机种子
        ddim_steps: 20
      }
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const { modelValue } = useVModels(props, emit);
    const activeNames = ref("1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_collapse = ElCollapse;
      const _component_el_collapse_item = ElCollapseItem;
      const _component_el_popover = ElPopover;
      const _component_Icon = _sfc_main$1;
      const _component_el_slider = ElSlider;
      const _component_el_input = ElInput;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ca887ef4>`);
      _push(ssrRenderComponent(_component_el_collapse, {
        modelValue: unref(activeNames),
        "onUpdate:modelValue": ($event) => isRef(activeNames) ? activeNames.value = $event : null,
        class: "complex_params"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_collapse_item, {
              title: "\u9AD8\u7EA7\u53C2\u6570",
              name: "1"
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2" data-v-ca887ef4${_scopeId2}><span data-v-ca887ef4${_scopeId2}>\u9AD8\u7EA7\u53C2\u6570</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("span", null, "\u9AD8\u7EA7\u53C2\u6570")
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-2" data-v-ca887ef4${_scopeId2}><div data-v-ca887ef4${_scopeId2}><div class="flex items-center gap-2" data-v-ca887ef4${_scopeId2}><span data-v-ca887ef4${_scopeId2}>\u7ED8\u753B\u8D28\u91CF</span>`);
                  _push3(ssrRenderComponent(_component_el_popover, {
                    placement: "right",
                    width: 200,
                    "show-arrow": false,
                    transition: "custom-popover",
                    trigger: "hover",
                    content: "\u8D8A\u4F4E\uFF1A\u7EC6\u8282\u7B80\u7EC3\uFF1B\u8D8A\u9AD8\uFF1A\u7EC6\u8282\u4E30\u5BCC, \u9ED8\u8BA4\u503C20"
                  }, {
                    reference: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center cursor-pointer text-[#999999]" data-v-ca887ef4${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "el-icon-QuestionFilled",
                          size: 14
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center cursor-pointer text-[#999999]" }, [
                            createVNode(_component_Icon, {
                              name: "el-icon-QuestionFilled",
                              size: 14
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex gap-4 items-center pl-3" data-v-ca887ef4${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_slider, {
                    modelValue: unref(modelValue).ddim_steps,
                    "onUpdate:modelValue": ($event) => unref(modelValue).ddim_steps = $event,
                    step: 1,
                    max: 50,
                    min: 1
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-ca887ef4${_scopeId2}>${ssrInterpolate(unref(modelValue).ddim_steps)}</span></div></div><div data-v-ca887ef4${_scopeId2}><div class="flex items-center gap-2 mb-2" data-v-ca887ef4${_scopeId2}><span data-v-ca887ef4${_scopeId2}>\u968F\u673A\u79CD\u5B50</span>`);
                  _push3(ssrRenderComponent(_component_el_popover, {
                    placement: "right",
                    width: 200,
                    "show-arrow": false,
                    transition: "custom-popover",
                    trigger: "hover",
                    content: "\u79CD\u5B50\u7528\u4E8E\u6307\u5B9A\u751F\u6210\u6548\u679C\uFF0C\u53EF\u4EE5\u7528\u4E8E\u751F\u6210\u5957\u56FE\uFF0C\u4FDD\u969C\u751F\u6210\u7684\u4E00\u7CFB\u5217\u56FE\u7247\u4FDD\u6301\u540C\u4E00\u79CD\u98CE\u683C"
                  }, {
                    reference: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center cursor-pointer text-[#999999]" data-v-ca887ef4${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "el-icon-QuestionFilled",
                          size: 14
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center cursor-pointer text-[#999999]" }, [
                            createVNode(_component_Icon, {
                              name: "el-icon-QuestionFilled",
                              size: 14
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex gap-4 items-center" data-v-ca887ef4${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(modelValue).seed,
                    "onUpdate:modelValue": ($event) => unref(modelValue).seed = $event,
                    type: "number",
                    min: -1,
                    maxlength: 18,
                    onFocus: ($event) => unref(checkUserLogin)(),
                    placeholder: "\u8BF7\u8F93\u5165seed\u79CD\u5B50\u7F16\u53F7"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("span", null, "\u7ED8\u753B\u8D28\u91CF"),
                          createVNode(_component_el_popover, {
                            placement: "right",
                            width: 200,
                            "show-arrow": false,
                            transition: "custom-popover",
                            trigger: "hover",
                            content: "\u8D8A\u4F4E\uFF1A\u7EC6\u8282\u7B80\u7EC3\uFF1B\u8D8A\u9AD8\uFF1A\u7EC6\u8282\u4E30\u5BCC, \u9ED8\u8BA4\u503C20"
                          }, {
                            reference: withCtx(() => [
                              createVNode("div", { class: "flex items-center cursor-pointer text-[#999999]" }, [
                                createVNode(_component_Icon, {
                                  name: "el-icon-QuestionFilled",
                                  size: 14
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex gap-4 items-center pl-3" }, [
                          createVNode(_component_el_slider, {
                            modelValue: unref(modelValue).ddim_steps,
                            "onUpdate:modelValue": ($event) => unref(modelValue).ddim_steps = $event,
                            step: 1,
                            max: 50,
                            min: 1
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("span", null, toDisplayString(unref(modelValue).ddim_steps), 1)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                          createVNode("span", null, "\u968F\u673A\u79CD\u5B50"),
                          createVNode(_component_el_popover, {
                            placement: "right",
                            width: 200,
                            "show-arrow": false,
                            transition: "custom-popover",
                            trigger: "hover",
                            content: "\u79CD\u5B50\u7528\u4E8E\u6307\u5B9A\u751F\u6210\u6548\u679C\uFF0C\u53EF\u4EE5\u7528\u4E8E\u751F\u6210\u5957\u56FE\uFF0C\u4FDD\u969C\u751F\u6210\u7684\u4E00\u7CFB\u5217\u56FE\u7247\u4FDD\u6301\u540C\u4E00\u79CD\u98CE\u683C"
                          }, {
                            reference: withCtx(() => [
                              createVNode("div", { class: "flex items-center cursor-pointer text-[#999999]" }, [
                                createVNode(_component_Icon, {
                                  name: "el-icon-QuestionFilled",
                                  size: 14
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex gap-4 items-center" }, [
                          createVNode(_component_el_input, {
                            modelValue: unref(modelValue).seed,
                            "onUpdate:modelValue": ($event) => unref(modelValue).seed = $event,
                            type: "number",
                            min: -1,
                            maxlength: 18,
                            onFocus: ($event) => unref(checkUserLogin)(),
                            placeholder: "\u8BF7\u8F93\u5165seed\u79CD\u5B50\u7F16\u53F7"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus"])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_collapse_item, {
                title: "\u9AD8\u7EA7\u53C2\u6570",
                name: "1"
              }, {
                title: withCtx(() => [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("span", null, "\u9AD8\u7EA7\u53C2\u6570")
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("span", null, "\u7ED8\u753B\u8D28\u91CF"),
                        createVNode(_component_el_popover, {
                          placement: "right",
                          width: 200,
                          "show-arrow": false,
                          transition: "custom-popover",
                          trigger: "hover",
                          content: "\u8D8A\u4F4E\uFF1A\u7EC6\u8282\u7B80\u7EC3\uFF1B\u8D8A\u9AD8\uFF1A\u7EC6\u8282\u4E30\u5BCC, \u9ED8\u8BA4\u503C20"
                        }, {
                          reference: withCtx(() => [
                            createVNode("div", { class: "flex items-center cursor-pointer text-[#999999]" }, [
                              createVNode(_component_Icon, {
                                name: "el-icon-QuestionFilled",
                                size: 14
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "flex gap-4 items-center pl-3" }, [
                        createVNode(_component_el_slider, {
                          modelValue: unref(modelValue).ddim_steps,
                          "onUpdate:modelValue": ($event) => unref(modelValue).ddim_steps = $event,
                          step: 1,
                          max: 50,
                          min: 1
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("span", null, toDisplayString(unref(modelValue).ddim_steps), 1)
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                        createVNode("span", null, "\u968F\u673A\u79CD\u5B50"),
                        createVNode(_component_el_popover, {
                          placement: "right",
                          width: 200,
                          "show-arrow": false,
                          transition: "custom-popover",
                          trigger: "hover",
                          content: "\u79CD\u5B50\u7528\u4E8E\u6307\u5B9A\u751F\u6210\u6548\u679C\uFF0C\u53EF\u4EE5\u7528\u4E8E\u751F\u6210\u5957\u56FE\uFF0C\u4FDD\u969C\u751F\u6210\u7684\u4E00\u7CFB\u5217\u56FE\u7247\u4FDD\u6301\u540C\u4E00\u79CD\u98CE\u683C"
                        }, {
                          reference: withCtx(() => [
                            createVNode("div", { class: "flex items-center cursor-pointer text-[#999999]" }, [
                              createVNode(_component_Icon, {
                                name: "el-icon-QuestionFilled",
                                size: 14
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "flex gap-4 items-center" }, [
                        createVNode(_component_el_input, {
                          modelValue: unref(modelValue).seed,
                          "onUpdate:modelValue": ($event) => unref(modelValue).seed = $event,
                          type: "number",
                          min: -1,
                          maxlength: 18,
                          onFocus: ($event) => unref(checkUserLogin)(),
                          placeholder: "\u8BF7\u8F93\u5165seed\u79CD\u5B50\u7F16\u53F7"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus"])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/doubao/doubao-options.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DoubaoOptions = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ca887ef4"]]);

export { DoubaoOptions as default };
//# sourceMappingURL=doubao-options-D4rSEKoQ.mjs.map
