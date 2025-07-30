import { a as ElFormItem } from './index-DLL0sEcv.mjs';
import { _ as __nuxt_component_7 } from './index-CXZnYiu9.mjs';
import { E as ElSlider } from './el-slider-LwCMMHAn.mjs';
import { E as ElRadioGroup, a as ElRadio } from './el-radio-group-PXDiQVwm.mjs';
import { a5 as useAppStore, E as ElInput } from './server.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
import '@vue/shared';
import 'lodash-unified';
import 'async-validator';
import './index-CUhOTuS-.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-0xCxAaTZ.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import './index-BoqjHllR.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './el-collapse-item-DSo9CmH5.mjs';
import './index-DadLUs6d.mjs';
import '@tanstack/vue-query';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
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
import 'css-color-function';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search-config",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formData = useVModel(props, "modelValue", emit);
    useAppStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form_item = ElFormItem;
      const _component_ModelPicker = __nuxt_component_7;
      const _component_el_slider = ElSlider;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_radio = ElRadio;
      const _component_el_input = ElInput;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[10px]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_form_item, {
        label: "AI\u6A21\u578B",
        prop: "model_id"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-80"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ModelPicker, {
              class: "flex-1",
              id: unref(formData).model_id,
              "onUpdate:id": ($event) => unref(formData).model_id = $event,
              sub_id: unref(formData).model_sub_id,
              "onUpdate:sub_id": ($event) => unref(formData).model_sub_id = $event,
              "set-default": false,
              disabled: ""
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-80" }, [
                createVNode(_component_ModelPicker, {
                  class: "flex-1",
                  id: unref(formData).model_id,
                  "onUpdate:id": ($event) => unref(formData).model_id = $event,
                  sub_id: unref(formData).model_sub_id,
                  "onUpdate:sub_id": ($event) => unref(formData).model_sub_id = $event,
                  "set-default": false,
                  disabled: ""
                }, null, 8, ["id", "onUpdate:id", "sub_id", "onUpdate:sub_id"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_form_item, {
        label: "\u76F8\u4F3C\u5EA6",
        required: "",
        prop: "search_similarity"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-1 min-w-0"${_scopeId}><div class="w-full flex"${_scopeId}><div class="flex-1 max-w-[320px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_slider, {
              min: 0,
              max: 1,
              step: 1e-3,
              modelValue: unref(formData).search_similarity,
              "onUpdate:modelValue": ($event) => unref(formData).search_similarity = $event
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="form-tips"${_scopeId}> \u8F93\u51650-1\u4E4B\u95F4\u7684\u6570\u503C\uFF0C\u652F\u63013\u4F4D\u5C0F\u6570\u70B9\uFF1B\u9AD8\u76F8\u4F3C\u5EA6\u63A8\u8350\u8BBE\u7F6E0.8\u4EE5\u4E0A </div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex-1 min-w-0" }, [
                createVNode("div", { class: "w-full flex" }, [
                  createVNode("div", { class: "flex-1 max-w-[320px]" }, [
                    createVNode(_component_el_slider, {
                      min: 0,
                      max: 1,
                      step: 1e-3,
                      modelValue: unref(formData).search_similarity,
                      "onUpdate:modelValue": ($event) => unref(formData).search_similarity = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "form-tips" }, " \u8F93\u51650-1\u4E4B\u95F4\u7684\u6570\u503C\uFF0C\u652F\u63013\u4F4D\u5C0F\u6570\u70B9\uFF1B\u9AD8\u76F8\u4F3C\u5EA6\u63A8\u8350\u8BBE\u7F6E0.8\u4EE5\u4E0A ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_form_item, {
        label: "\u5355\u6B21\u641C\u7D22\u6570\u91CF",
        required: "",
        prop: "search_limits"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-1 min-w-0"${_scopeId}><div class="w-full flex"${_scopeId}><div class="flex-1 max-w-[320px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_slider, {
              min: 0,
              max: 20,
              modelValue: unref(formData).search_limits,
              "onUpdate:modelValue": ($event) => unref(formData).search_limits = $event
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="form-tips"${_scopeId}>\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A5\uFF0C\u8BF7\u8F93\u51650-20\u4E4B\u95F4\u7684\u6574\u6570\u6570\u503C</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex-1 min-w-0" }, [
                createVNode("div", { class: "w-full flex" }, [
                  createVNode("div", { class: "flex-1 max-w-[320px]" }, [
                    createVNode(_component_el_slider, {
                      min: 0,
                      max: 20,
                      modelValue: unref(formData).search_limits,
                      "onUpdate:modelValue": ($event) => unref(formData).search_limits = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "form-tips" }, "\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A5\uFF0C\u8BF7\u8F93\u51650-20\u4E4B\u95F4\u7684\u6574\u6570\u6570\u503C")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_form_item, { label: "\u7A7A\u641C\u7D22\u56DE\u590D" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_radio_group, {
              modelValue: unref(formData).search_empty_type,
              "onUpdate:modelValue": ($event) => unref(formData).search_empty_type = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_radio, { label: 1 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` AI\u56DE\u590D`);
                      } else {
                        return [
                          createTextVNode(" AI\u56DE\u590D")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_radio, { label: 2 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u81EA\u5B9A\u4E49\u56DE\u590D`);
                      } else {
                        return [
                          createTextVNode(" \u81EA\u5B9A\u4E49\u56DE\u590D")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_radio, { label: 1 }, {
                      default: withCtx(() => [
                        createTextVNode(" AI\u56DE\u590D")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_radio, { label: 2 }, {
                      default: withCtx(() => [
                        createTextVNode(" \u81EA\u5B9A\u4E49\u56DE\u590D")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_radio_group, {
                modelValue: unref(formData).search_empty_type,
                "onUpdate:modelValue": ($event) => unref(formData).search_empty_type = $event
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_radio, { label: 1 }, {
                    default: withCtx(() => [
                      createTextVNode(" AI\u56DE\u590D")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_radio, { label: 2 }, {
                    default: withCtx(() => [
                      createTextVNode(" \u81EA\u5B9A\u4E49\u56DE\u590D")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(formData).search_empty_type === 2) {
        _push(ssrRenderComponent(_component_el_form_item, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-80"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_input, {
                modelValue: unref(formData).search_empty_text,
                "onUpdate:modelValue": ($event) => unref(formData).search_empty_text = $event,
                placeholder: "\u8BF7\u8F93\u5165\u56DE\u590D\u5185\u5BB9\uFF0C\u5F53\u641C\u7D22\u5339\u914D\u4E0D\u4E0A\u5185\u5BB9\u65F6\uFF0C\u76F4\u63A5\u56DE\u590D\u586B\u5199\u7684\u5185\u5BB9",
                type: "textarea",
                autosize: { minRows: 6, maxRows: 6 },
                maxlength: 1e3,
                "show-word-limit": "",
                clearable: ""
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "w-80" }, [
                  createVNode(_component_el_input, {
                    modelValue: unref(formData).search_empty_text,
                    "onUpdate:modelValue": ($event) => unref(formData).search_empty_text = $event,
                    placeholder: "\u8BF7\u8F93\u5165\u56DE\u590D\u5185\u5BB9\uFF0C\u5F53\u641C\u7D22\u5339\u914D\u4E0D\u4E0A\u5185\u5BB9\u65F6\uFF0C\u76F4\u63A5\u56DE\u590D\u586B\u5199\u7684\u5185\u5BB9",
                    type: "textarea",
                    autosize: { minRows: 6, maxRows: 6 },
                    maxlength: 1e3,
                    "show-word-limit": "",
                    clearable: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-edit/search-config.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=search-config-CUeFuQKo.mjs.map
