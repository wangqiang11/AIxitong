import { E as ElCollapse, a as ElCollapseItem } from './el-collapse-item-DSo9CmH5.mjs';
import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElSlider } from './el-slider-LwCMMHAn.mjs';
import { E as ElSelect, a as ElOption } from './index-CUhOTuS-.mjs';
import { E as ElInput } from './server.mjs';
import { useSSRContext, defineComponent, ref, unref, isRef, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
  __name: "sd-options",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Object,
      default: {
        step: "",
        // 采样步数
        sampling: "",
        // 采样模式
        seed: "",
        // 随机种子
        cfg: ""
        // 提示词系数
      }
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const { modelValue } = useVModels(props, emit);
    const samplersList = ref([]);
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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f7ef8053>`);
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
                  _push3(`<div class="flex items-center gap-2" data-v-f7ef8053${_scopeId2}><span data-v-f7ef8053${_scopeId2}>\u9AD8\u7EA7\u53C2\u6570</span></div>`);
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
                  _push3(`<div class="flex flex-col gap-2" data-v-f7ef8053${_scopeId2}><div data-v-f7ef8053${_scopeId2}><div class="flex items-center gap-2" data-v-f7ef8053${_scopeId2}><span data-v-f7ef8053${_scopeId2}>\u7ED8\u753B\u6B65\u6570</span>`);
                  _push3(ssrRenderComponent(_component_el_popover, {
                    placement: "right",
                    width: 200,
                    "show-arrow": false,
                    transition: "custom-popover",
                    trigger: "hover",
                    content: "\u8D8A\u4F4E\uFF1A\u7EC6\u8282\u7B80\u7EC3\uFF0C\u8017\u65F6\u66F4\u77ED\uFF1B\u8D8A\u9AD8\uFF1A\u7EC6\u8282\u4E30\u5BCC\uFF0C\u8017\u65F6\u53D8\u957F\uFF1B\u6CE8*\u6B65\u6570\u8FC7\u9AD8\u53EF\u80FD\u4EA7\u751F\u7EC6\u8282\u626D\u66F2"
                  }, {
                    reference: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center cursor-pointer text-[#999999]" data-v-f7ef8053${_scopeId3}>`);
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
                  _push3(`</div><div class="flex gap-4 items-center pl-3" data-v-f7ef8053${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_slider, {
                    modelValue: unref(modelValue).step,
                    "onUpdate:modelValue": ($event) => unref(modelValue).step = $event,
                    step: 1,
                    max: 150
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-f7ef8053${_scopeId2}>${ssrInterpolate(unref(modelValue).step)}</span></div></div><div data-v-f7ef8053${_scopeId2}><div class="flex items-center gap-2" data-v-f7ef8053${_scopeId2}><span data-v-f7ef8053${_scopeId2}>\u6587\u672C\u5F3A\u5EA6</span>`);
                  _push3(ssrRenderComponent(_component_el_popover, {
                    placement: "right",
                    "show-arrow": false,
                    transition: "custom-popover",
                    width: 200,
                    trigger: "hover",
                    content: "\u4F4E\uFF1A\u6DE1\u5316\u8F93\u5165\u7684\u7279\u5F81\uFF0C\u6DE1\u5316\u98CE\u683C\uFF1B\u9AD8\uFF1A\u5F3A\u5316\u8F93\u5165\u7684\u7279\u5F81\uFF0C\u5F3A\u5316\u98CE\u683C\uFF1B\u6700\u4F73\u4F7F\u7528\u533A\u95F47-12\uFF0C\u63A8\u8350\u4E0D\u8D85\u8FC715"
                  }, {
                    reference: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center cursor-pointer text-[#999999]" data-v-f7ef8053${_scopeId3}>`);
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
                  _push3(`</div><div class="flex gap-4 items-center pl-3" data-v-f7ef8053${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_slider, {
                    modelValue: unref(modelValue).cfg_scale,
                    "onUpdate:modelValue": ($event) => unref(modelValue).cfg_scale = $event,
                    step: 0.5,
                    max: 30
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-f7ef8053${_scopeId2}>${ssrInterpolate(unref(modelValue).cfg_scale)}</span></div></div><div data-v-f7ef8053${_scopeId2}><div class="flex items-center gap-2 mb-2" data-v-f7ef8053${_scopeId2}><span data-v-f7ef8053${_scopeId2}>\u91C7\u6837\u6A21\u5F0F</span>`);
                  _push3(ssrRenderComponent(_component_el_popover, {
                    placement: "right",
                    "show-arrow": false,
                    transition: "custom-popover",
                    width: 200,
                    trigger: "hover",
                    content: "\u9760\u524D\u7684\u91C7\u6837\uFF08euler\uFF09\uFF1A\u9002\u5408\u52A8\u6F2B\uFF0C\u7EC6\u8282\u7B80\u7EC3\uFF0C\u5FEB\u901F\uFF1B\u9760\u540E\u7684\u91C7\u6837\uFF08DPM\uFF09\uFF1A\u9002\u5408\u5199\u5B9E\uFF0C\u7EC6\u8282\u4E30\u5BCC\uFF0C\u8F83\u6162"
                  }, {
                    reference: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center cursor-pointer text-[#999999]" data-v-f7ef8053${_scopeId3}>`);
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
                  _push3(`</div><div class="flex gap-4 items-center" data-v-f7ef8053${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_select, {
                    modelValue: unref(modelValue).sampler_name,
                    "onUpdate:modelValue": ($event) => unref(modelValue).sampler_name = $event,
                    placeholder: "\u8BF7\u9009\u62E9\u91C7\u6837\u6A21\u5F0F"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(samplersList), (item) => {
                          _push4(ssrRenderComponent(_component_el_option, {
                            key: item.name,
                            label: item.name,
                            value: item.name
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(samplersList), (item) => {
                            return openBlock(), createBlock(_component_el_option, {
                              key: item.name,
                              label: item.name,
                              value: item.name
                            }, null, 8, ["label", "value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div data-v-f7ef8053${_scopeId2}><div class="flex items-center gap-2 mb-2" data-v-f7ef8053${_scopeId2}><span data-v-f7ef8053${_scopeId2}>\u968F\u673A\u79CD\u5B50</span>`);
                  _push3(ssrRenderComponent(_component_el_popover, {
                    placement: "right",
                    "show-arrow": false,
                    transition: "custom-popover",
                    width: 200,
                    trigger: "hover",
                    content: "\u6BCF\u6B21\u751F\u6210\u56FE\u7684\u521D\u59CB\u753B\u5E03\uFF0C\u79CD\u5B50\u3001\u63D0\u793A\u8BCD\u3001\u53C2\u6570\u548C\u6A21\u578B\u76F8\u540C\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u590D\u539F\u7ED8\u753B\u7ED3\u679C"
                  }, {
                    reference: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center cursor-pointer text-[#999999]" data-v-f7ef8053${_scopeId3}>`);
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
                  _push3(`</div><div class="flex gap-4 items-center" data-v-f7ef8053${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(modelValue).seed,
                    "onUpdate:modelValue": ($event) => unref(modelValue).seed = $event,
                    type: "number",
                    min: -1,
                    maxlength: 18,
                    onFocus: ($event) => unref(checkUserLogin)(),
                    placeholder: "\u8BF7\u9009\u62E9\u91C7\u6837\u6A21\u5F0F"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("span", null, "\u7ED8\u753B\u6B65\u6570"),
                          createVNode(_component_el_popover, {
                            placement: "right",
                            width: 200,
                            "show-arrow": false,
                            transition: "custom-popover",
                            trigger: "hover",
                            content: "\u8D8A\u4F4E\uFF1A\u7EC6\u8282\u7B80\u7EC3\uFF0C\u8017\u65F6\u66F4\u77ED\uFF1B\u8D8A\u9AD8\uFF1A\u7EC6\u8282\u4E30\u5BCC\uFF0C\u8017\u65F6\u53D8\u957F\uFF1B\u6CE8*\u6B65\u6570\u8FC7\u9AD8\u53EF\u80FD\u4EA7\u751F\u7EC6\u8282\u626D\u66F2"
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
                            modelValue: unref(modelValue).step,
                            "onUpdate:modelValue": ($event) => unref(modelValue).step = $event,
                            step: 1,
                            max: 150
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("span", null, toDisplayString(unref(modelValue).step), 1)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("span", null, "\u6587\u672C\u5F3A\u5EA6"),
                          createVNode(_component_el_popover, {
                            placement: "right",
                            "show-arrow": false,
                            transition: "custom-popover",
                            width: 200,
                            trigger: "hover",
                            content: "\u4F4E\uFF1A\u6DE1\u5316\u8F93\u5165\u7684\u7279\u5F81\uFF0C\u6DE1\u5316\u98CE\u683C\uFF1B\u9AD8\uFF1A\u5F3A\u5316\u8F93\u5165\u7684\u7279\u5F81\uFF0C\u5F3A\u5316\u98CE\u683C\uFF1B\u6700\u4F73\u4F7F\u7528\u533A\u95F47-12\uFF0C\u63A8\u8350\u4E0D\u8D85\u8FC715"
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
                            modelValue: unref(modelValue).cfg_scale,
                            "onUpdate:modelValue": ($event) => unref(modelValue).cfg_scale = $event,
                            step: 0.5,
                            max: 30
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("span", null, toDisplayString(unref(modelValue).cfg_scale), 1)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                          createVNode("span", null, "\u91C7\u6837\u6A21\u5F0F"),
                          createVNode(_component_el_popover, {
                            placement: "right",
                            "show-arrow": false,
                            transition: "custom-popover",
                            width: 200,
                            trigger: "hover",
                            content: "\u9760\u524D\u7684\u91C7\u6837\uFF08euler\uFF09\uFF1A\u9002\u5408\u52A8\u6F2B\uFF0C\u7EC6\u8282\u7B80\u7EC3\uFF0C\u5FEB\u901F\uFF1B\u9760\u540E\u7684\u91C7\u6837\uFF08DPM\uFF09\uFF1A\u9002\u5408\u5199\u5B9E\uFF0C\u7EC6\u8282\u4E30\u5BCC\uFF0C\u8F83\u6162"
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
                          createVNode(_component_el_select, {
                            modelValue: unref(modelValue).sampler_name,
                            "onUpdate:modelValue": ($event) => unref(modelValue).sampler_name = $event,
                            placeholder: "\u8BF7\u9009\u62E9\u91C7\u6837\u6A21\u5F0F"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(samplersList), (item) => {
                                return openBlock(), createBlock(_component_el_option, {
                                  key: item.name,
                                  label: item.name,
                                  value: item.name
                                }, null, 8, ["label", "value"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                          createVNode("span", null, "\u968F\u673A\u79CD\u5B50"),
                          createVNode(_component_el_popover, {
                            placement: "right",
                            "show-arrow": false,
                            transition: "custom-popover",
                            width: 200,
                            trigger: "hover",
                            content: "\u6BCF\u6B21\u751F\u6210\u56FE\u7684\u521D\u59CB\u753B\u5E03\uFF0C\u79CD\u5B50\u3001\u63D0\u793A\u8BCD\u3001\u53C2\u6570\u548C\u6A21\u578B\u76F8\u540C\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u590D\u539F\u7ED8\u753B\u7ED3\u679C"
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
                            placeholder: "\u8BF7\u9009\u62E9\u91C7\u6837\u6A21\u5F0F"
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
                        createVNode("span", null, "\u7ED8\u753B\u6B65\u6570"),
                        createVNode(_component_el_popover, {
                          placement: "right",
                          width: 200,
                          "show-arrow": false,
                          transition: "custom-popover",
                          trigger: "hover",
                          content: "\u8D8A\u4F4E\uFF1A\u7EC6\u8282\u7B80\u7EC3\uFF0C\u8017\u65F6\u66F4\u77ED\uFF1B\u8D8A\u9AD8\uFF1A\u7EC6\u8282\u4E30\u5BCC\uFF0C\u8017\u65F6\u53D8\u957F\uFF1B\u6CE8*\u6B65\u6570\u8FC7\u9AD8\u53EF\u80FD\u4EA7\u751F\u7EC6\u8282\u626D\u66F2"
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
                          modelValue: unref(modelValue).step,
                          "onUpdate:modelValue": ($event) => unref(modelValue).step = $event,
                          step: 1,
                          max: 150
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("span", null, toDisplayString(unref(modelValue).step), 1)
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("span", null, "\u6587\u672C\u5F3A\u5EA6"),
                        createVNode(_component_el_popover, {
                          placement: "right",
                          "show-arrow": false,
                          transition: "custom-popover",
                          width: 200,
                          trigger: "hover",
                          content: "\u4F4E\uFF1A\u6DE1\u5316\u8F93\u5165\u7684\u7279\u5F81\uFF0C\u6DE1\u5316\u98CE\u683C\uFF1B\u9AD8\uFF1A\u5F3A\u5316\u8F93\u5165\u7684\u7279\u5F81\uFF0C\u5F3A\u5316\u98CE\u683C\uFF1B\u6700\u4F73\u4F7F\u7528\u533A\u95F47-12\uFF0C\u63A8\u8350\u4E0D\u8D85\u8FC715"
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
                          modelValue: unref(modelValue).cfg_scale,
                          "onUpdate:modelValue": ($event) => unref(modelValue).cfg_scale = $event,
                          step: 0.5,
                          max: 30
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("span", null, toDisplayString(unref(modelValue).cfg_scale), 1)
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                        createVNode("span", null, "\u91C7\u6837\u6A21\u5F0F"),
                        createVNode(_component_el_popover, {
                          placement: "right",
                          "show-arrow": false,
                          transition: "custom-popover",
                          width: 200,
                          trigger: "hover",
                          content: "\u9760\u524D\u7684\u91C7\u6837\uFF08euler\uFF09\uFF1A\u9002\u5408\u52A8\u6F2B\uFF0C\u7EC6\u8282\u7B80\u7EC3\uFF0C\u5FEB\u901F\uFF1B\u9760\u540E\u7684\u91C7\u6837\uFF08DPM\uFF09\uFF1A\u9002\u5408\u5199\u5B9E\uFF0C\u7EC6\u8282\u4E30\u5BCC\uFF0C\u8F83\u6162"
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
                        createVNode(_component_el_select, {
                          modelValue: unref(modelValue).sampler_name,
                          "onUpdate:modelValue": ($event) => unref(modelValue).sampler_name = $event,
                          placeholder: "\u8BF7\u9009\u62E9\u91C7\u6837\u6A21\u5F0F"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(samplersList), (item) => {
                              return openBlock(), createBlock(_component_el_option, {
                                key: item.name,
                                label: item.name,
                                value: item.name
                              }, null, 8, ["label", "value"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                        createVNode("span", null, "\u968F\u673A\u79CD\u5B50"),
                        createVNode(_component_el_popover, {
                          placement: "right",
                          "show-arrow": false,
                          transition: "custom-popover",
                          width: 200,
                          trigger: "hover",
                          content: "\u6BCF\u6B21\u751F\u6210\u56FE\u7684\u521D\u59CB\u753B\u5E03\uFF0C\u79CD\u5B50\u3001\u63D0\u793A\u8BCD\u3001\u53C2\u6570\u548C\u6A21\u578B\u76F8\u540C\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u590D\u539F\u7ED8\u753B\u7ED3\u679C"
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
                          placeholder: "\u8BF7\u9009\u62E9\u91C7\u6837\u6A21\u5F0F"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/sd/sd-options.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SdOptions = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f7ef8053"]]);

export { SdOptions as default };
//# sourceMappingURL=sd-options-DL2A5rJW.mjs.map
