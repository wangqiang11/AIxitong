import { E as ElCollapse, a as ElCollapseItem } from './el-collapse-item-DSo9CmH5.mjs';
import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElSlider } from './el-slider-LwCMMHAn.mjs';
import { E as ElSelect, a as ElOption } from './index-CUhOTuS-.mjs';
import { E as ElInput } from './server.mjs';
import { useSSRContext, defineComponent, ref, unref, isRef, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useVModels } from '@vueuse/core';
import { a as config, b as checkUserLogin } from './useDrawEffect-B2jxDCVi.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vue/shared';
import 'lodash-unified';
import './index-DadLUs6d.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './dropdown-C6fgV-Vy.mjs';
import './el-input-number-DH6NTUUv.mjs';
import './index-iSFXrlfY.mjs';
import './index-0xCxAaTZ.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
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
  __name: "mj-options",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Object,
      default: {
        seed: "",
        // 随机种子
        iw: 1,
        q: 1,
        s: 100,
        c: 0
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
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_el_input = ElInput;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b052342e>`);
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
                  _push3(`<div class="flex items-center gap-2" data-v-b052342e${_scopeId2}><span data-v-b052342e${_scopeId2}>\u9AD8\u7EA7\u53C2\u6570</span></div>`);
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
                  _push3(`<div class="flex flex-col gap-2" data-v-b052342e${_scopeId2}><div data-v-b052342e${_scopeId2}><div class="flex items-center gap-2" data-v-b052342e${_scopeId2}><span data-v-b052342e${_scopeId2}>\u53C2\u8003\u56FE\u6743\u91CD</span>`);
                  _push3(ssrRenderComponent(_component_el_popover, {
                    placement: "right",
                    width: 200,
                    "show-arrow": false,
                    transition: "custom-popover",
                    trigger: "hover",
                    content: "\u8BBE\u7F6E\u751F\u6210\u56FE\u7247\u65F6\u57AB\u56FE\u7684\u6743\u91CD\uFF0C\u503C\u8D8A\u5927\u8D8A\u50CF\u57AB\u56FE\uFF0C\u53D6\u503C\u8303\u56F40.5-2\uFF0C \u9ED8\u8BA4\u503C1"
                  }, {
                    reference: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center cursor-pointer text-[#999999]" data-v-b052342e${_scopeId3}>`);
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
                  _push3(`</div><div class="flex gap-4 items-center pl-3" data-v-b052342e${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_slider, {
                    modelValue: unref(modelValue).iw,
                    "onUpdate:modelValue": ($event) => unref(modelValue).iw = $event,
                    step: 0.1,
                    min: 0.5,
                    max: 2
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-b052342e${_scopeId2}>${ssrInterpolate(unref(modelValue).iw)}</span></div></div><div data-v-b052342e${_scopeId2}><div class="flex items-center gap-2" data-v-b052342e${_scopeId2}><span data-v-b052342e${_scopeId2}>\u56FE\u7247\u8D28\u91CF</span>`);
                  _push3(ssrRenderComponent(_component_el_popover, {
                    placement: "right",
                    width: 200,
                    "show-arrow": false,
                    transition: "custom-popover",
                    trigger: "hover",
                    content: "\u8BBE\u7F6E\u56FE\u7247\u7684\u8D28\u91CF\uFF0C\u8D8A\u5927\u8D28\u91CF\u8D8A\u9AD8\uFF0C\u53D6\u503C\u8303\u56F40.25 - 1\uFF0C\u9ED8\u8BA4\u503C1"
                  }, {
                    reference: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center cursor-pointer text-[#999999]" data-v-b052342e${_scopeId3}>`);
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
                  _push3(`</div><div class="flex gap-4 items-center mt-2" data-v-b052342e${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_select, {
                    modelValue: unref(modelValue).q,
                    "onUpdate:modelValue": ($event) => unref(modelValue).q = $event,
                    placeholder: "\u8BF7\u9009\u62E9\u56FE\u7247\u8D28\u91CF"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(config).mj_quality, (item, index) => {
                          _push4(ssrRenderComponent(_component_el_option, {
                            key: index,
                            label: item,
                            value: index
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(config).mj_quality, (item, index) => {
                            return openBlock(), createBlock(_component_el_option, {
                              key: index,
                              label: item,
                              value: index
                            }, null, 8, ["label", "value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div data-v-b052342e${_scopeId2}><div class="flex items-center gap-2 mb-2" data-v-b052342e${_scopeId2}><span data-v-b052342e${_scopeId2}>\u98CE\u683C\u5316\u503C</span>`);
                  _push3(ssrRenderComponent(_component_el_popover, {
                    placement: "right",
                    width: 200,
                    "show-arrow": false,
                    transition: "custom-popover",
                    trigger: "hover",
                    content: "\u8BBE\u7F6E\u751F\u6210\u56FE\u7247\u65F6\u7684\u98CE\u683C\u5316\u7A0B\u5EA6\uFF0C\u503C\u8D8A\u5927\uFF0C\u98CE\u683C\u5316\u7684\u7A0B\u5EA6\u8D8A\u9AD8\uFF0C\u53D6\u503C\u8303\u56F40-1000\uFF0C \u9ED8\u8BA4\u503C100"
                  }, {
                    reference: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center cursor-pointer text-[#999999]" data-v-b052342e${_scopeId3}>`);
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
                  _push3(`</div><div class="flex gap-4 items-center pl-3" data-v-b052342e${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_slider, {
                    modelValue: unref(modelValue).s,
                    "onUpdate:modelValue": ($event) => unref(modelValue).s = $event,
                    step: 1,
                    max: 1e3,
                    min: 0
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-b052342e${_scopeId2}>${ssrInterpolate(unref(modelValue).s)}</span></div></div><div data-v-b052342e${_scopeId2}><div class="flex items-center gap-2 mb-2" data-v-b052342e${_scopeId2}><span data-v-b052342e${_scopeId2}>\u6DF7\u4E71\u503C</span>`);
                  _push3(ssrRenderComponent(_component_el_popover, {
                    placement: "right",
                    width: 200,
                    "show-arrow": false,
                    transition: "custom-popover",
                    trigger: "hover",
                    content: "\u672C\u53C2\u6570\u4F1A\u63A7\u5236\u751F\u62104\u5F20\u56FE\u7684\u5DEE\u522B\uFF0C \u503C\u8D8A\u5927\uFF0C\u751F\u62104\u5F20\u56FE\u7684\u533A\u522B\u8D8A\u5927\uFF0C\u503C\u8D8A\u5C0F,\u751F\u6210\u76844\u5F20\u56FE\u8D8A\u63A5\u8FD1\uFF0C\u53D6\u503C\u8303\u56F40-100\uFF0C \u9ED8\u8BA4\u503C0"
                  }, {
                    reference: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center cursor-pointer text-[#999999]" data-v-b052342e${_scopeId3}>`);
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
                  _push3(`</div><div class="flex gap-4 items-center pl-3" data-v-b052342e${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_slider, {
                    modelValue: unref(modelValue).c,
                    "onUpdate:modelValue": ($event) => unref(modelValue).c = $event,
                    step: 1,
                    max: 100,
                    min: 0
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-b052342e${_scopeId2}>${ssrInterpolate(unref(modelValue).c)}</span></div></div><div data-v-b052342e${_scopeId2}><div class="flex items-center gap-2 mb-2" data-v-b052342e${_scopeId2}><span data-v-b052342e${_scopeId2}>\u968F\u673A\u79CD\u5B50</span>`);
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
                        _push4(`<div class="flex items-center cursor-pointer text-[#999999]" data-v-b052342e${_scopeId3}>`);
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
                  _push3(`</div><div class="flex gap-4 items-center" data-v-b052342e${_scopeId2}>`);
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
                          createVNode("span", null, "\u53C2\u8003\u56FE\u6743\u91CD"),
                          createVNode(_component_el_popover, {
                            placement: "right",
                            width: 200,
                            "show-arrow": false,
                            transition: "custom-popover",
                            trigger: "hover",
                            content: "\u8BBE\u7F6E\u751F\u6210\u56FE\u7247\u65F6\u57AB\u56FE\u7684\u6743\u91CD\uFF0C\u503C\u8D8A\u5927\u8D8A\u50CF\u57AB\u56FE\uFF0C\u53D6\u503C\u8303\u56F40.5-2\uFF0C \u9ED8\u8BA4\u503C1"
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
                            modelValue: unref(modelValue).iw,
                            "onUpdate:modelValue": ($event) => unref(modelValue).iw = $event,
                            step: 0.1,
                            min: 0.5,
                            max: 2
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("span", null, toDisplayString(unref(modelValue).iw), 1)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("span", null, "\u56FE\u7247\u8D28\u91CF"),
                          createVNode(_component_el_popover, {
                            placement: "right",
                            width: 200,
                            "show-arrow": false,
                            transition: "custom-popover",
                            trigger: "hover",
                            content: "\u8BBE\u7F6E\u56FE\u7247\u7684\u8D28\u91CF\uFF0C\u8D8A\u5927\u8D28\u91CF\u8D8A\u9AD8\uFF0C\u53D6\u503C\u8303\u56F40.25 - 1\uFF0C\u9ED8\u8BA4\u503C1"
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
                        createVNode("div", { class: "flex gap-4 items-center mt-2" }, [
                          createVNode(_component_el_select, {
                            modelValue: unref(modelValue).q,
                            "onUpdate:modelValue": ($event) => unref(modelValue).q = $event,
                            placeholder: "\u8BF7\u9009\u62E9\u56FE\u7247\u8D28\u91CF"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(config).mj_quality, (item, index) => {
                                return openBlock(), createBlock(_component_el_option, {
                                  key: index,
                                  label: item,
                                  value: index
                                }, null, 8, ["label", "value"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                          createVNode("span", null, "\u98CE\u683C\u5316\u503C"),
                          createVNode(_component_el_popover, {
                            placement: "right",
                            width: 200,
                            "show-arrow": false,
                            transition: "custom-popover",
                            trigger: "hover",
                            content: "\u8BBE\u7F6E\u751F\u6210\u56FE\u7247\u65F6\u7684\u98CE\u683C\u5316\u7A0B\u5EA6\uFF0C\u503C\u8D8A\u5927\uFF0C\u98CE\u683C\u5316\u7684\u7A0B\u5EA6\u8D8A\u9AD8\uFF0C\u53D6\u503C\u8303\u56F40-1000\uFF0C \u9ED8\u8BA4\u503C100"
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
                            modelValue: unref(modelValue).s,
                            "onUpdate:modelValue": ($event) => unref(modelValue).s = $event,
                            step: 1,
                            max: 1e3,
                            min: 0
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("span", null, toDisplayString(unref(modelValue).s), 1)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                          createVNode("span", null, "\u6DF7\u4E71\u503C"),
                          createVNode(_component_el_popover, {
                            placement: "right",
                            width: 200,
                            "show-arrow": false,
                            transition: "custom-popover",
                            trigger: "hover",
                            content: "\u672C\u53C2\u6570\u4F1A\u63A7\u5236\u751F\u62104\u5F20\u56FE\u7684\u5DEE\u522B\uFF0C \u503C\u8D8A\u5927\uFF0C\u751F\u62104\u5F20\u56FE\u7684\u533A\u522B\u8D8A\u5927\uFF0C\u503C\u8D8A\u5C0F,\u751F\u6210\u76844\u5F20\u56FE\u8D8A\u63A5\u8FD1\uFF0C\u53D6\u503C\u8303\u56F40-100\uFF0C \u9ED8\u8BA4\u503C0"
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
                            modelValue: unref(modelValue).c,
                            "onUpdate:modelValue": ($event) => unref(modelValue).c = $event,
                            step: 1,
                            max: 100,
                            min: 0
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("span", null, toDisplayString(unref(modelValue).c), 1)
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
                        createVNode("span", null, "\u53C2\u8003\u56FE\u6743\u91CD"),
                        createVNode(_component_el_popover, {
                          placement: "right",
                          width: 200,
                          "show-arrow": false,
                          transition: "custom-popover",
                          trigger: "hover",
                          content: "\u8BBE\u7F6E\u751F\u6210\u56FE\u7247\u65F6\u57AB\u56FE\u7684\u6743\u91CD\uFF0C\u503C\u8D8A\u5927\u8D8A\u50CF\u57AB\u56FE\uFF0C\u53D6\u503C\u8303\u56F40.5-2\uFF0C \u9ED8\u8BA4\u503C1"
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
                          modelValue: unref(modelValue).iw,
                          "onUpdate:modelValue": ($event) => unref(modelValue).iw = $event,
                          step: 0.1,
                          min: 0.5,
                          max: 2
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("span", null, toDisplayString(unref(modelValue).iw), 1)
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("span", null, "\u56FE\u7247\u8D28\u91CF"),
                        createVNode(_component_el_popover, {
                          placement: "right",
                          width: 200,
                          "show-arrow": false,
                          transition: "custom-popover",
                          trigger: "hover",
                          content: "\u8BBE\u7F6E\u56FE\u7247\u7684\u8D28\u91CF\uFF0C\u8D8A\u5927\u8D28\u91CF\u8D8A\u9AD8\uFF0C\u53D6\u503C\u8303\u56F40.25 - 1\uFF0C\u9ED8\u8BA4\u503C1"
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
                      createVNode("div", { class: "flex gap-4 items-center mt-2" }, [
                        createVNode(_component_el_select, {
                          modelValue: unref(modelValue).q,
                          "onUpdate:modelValue": ($event) => unref(modelValue).q = $event,
                          placeholder: "\u8BF7\u9009\u62E9\u56FE\u7247\u8D28\u91CF"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(config).mj_quality, (item, index) => {
                              return openBlock(), createBlock(_component_el_option, {
                                key: index,
                                label: item,
                                value: index
                              }, null, 8, ["label", "value"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                        createVNode("span", null, "\u98CE\u683C\u5316\u503C"),
                        createVNode(_component_el_popover, {
                          placement: "right",
                          width: 200,
                          "show-arrow": false,
                          transition: "custom-popover",
                          trigger: "hover",
                          content: "\u8BBE\u7F6E\u751F\u6210\u56FE\u7247\u65F6\u7684\u98CE\u683C\u5316\u7A0B\u5EA6\uFF0C\u503C\u8D8A\u5927\uFF0C\u98CE\u683C\u5316\u7684\u7A0B\u5EA6\u8D8A\u9AD8\uFF0C\u53D6\u503C\u8303\u56F40-1000\uFF0C \u9ED8\u8BA4\u503C100"
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
                          modelValue: unref(modelValue).s,
                          "onUpdate:modelValue": ($event) => unref(modelValue).s = $event,
                          step: 1,
                          max: 1e3,
                          min: 0
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("span", null, toDisplayString(unref(modelValue).s), 1)
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                        createVNode("span", null, "\u6DF7\u4E71\u503C"),
                        createVNode(_component_el_popover, {
                          placement: "right",
                          width: 200,
                          "show-arrow": false,
                          transition: "custom-popover",
                          trigger: "hover",
                          content: "\u672C\u53C2\u6570\u4F1A\u63A7\u5236\u751F\u62104\u5F20\u56FE\u7684\u5DEE\u522B\uFF0C \u503C\u8D8A\u5927\uFF0C\u751F\u62104\u5F20\u56FE\u7684\u533A\u522B\u8D8A\u5927\uFF0C\u503C\u8D8A\u5C0F,\u751F\u6210\u76844\u5F20\u56FE\u8D8A\u63A5\u8FD1\uFF0C\u53D6\u503C\u8303\u56F40-100\uFF0C \u9ED8\u8BA4\u503C0"
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
                          modelValue: unref(modelValue).c,
                          "onUpdate:modelValue": ($event) => unref(modelValue).c = $event,
                          step: 1,
                          max: 100,
                          min: 0
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("span", null, toDisplayString(unref(modelValue).c), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/mj/mj-options.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MjOptions = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b052342e"]]);

export { MjOptions as default };
//# sourceMappingURL=mj-options-C-ag_XMA.mjs.map
