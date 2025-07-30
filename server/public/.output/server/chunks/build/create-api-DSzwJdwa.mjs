import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElInput } from './server.mjs';
import { defineComponent, shallowRef, reactive, shallowReactive, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { P as Popup } from './index-BKj4TrcW.mjs';
import '@vue/shared';
import 'lodash-unified';
import 'async-validator';
import '@vueuse/core';
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
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create-api",
  __ssrInlineRender: true,
  emits: ["confirm"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const formRef = shallowRef();
    const popupRef = shallowRef();
    const formData = reactive({
      name: ""
    });
    const formRules = shallowReactive({
      name: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u63A5\u53E3\u540D\u79F0"
        }
      ]
    });
    const open = () => {
      var _a;
      (_a = popupRef.value) == null ? void 0 : _a.open();
    };
    const close = () => {
      var _a;
      (_a = popupRef.value) == null ? void 0 : _a.close();
    };
    const handleConfirm = async () => {
      var _a;
      await ((_a = formRef.value) == null ? void 0 : _a.validate());
      emit("confirm", formData);
    };
    __expose({
      open,
      close
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Popup, {
        ref_key: "popupRef",
        ref: popupRef,
        title: "\u521B\u5EFAAPI",
        async: true,
        width: "550px",
        onConfirm: handleConfirm,
        onClose: ($event) => {
          var _a;
          return (_a = unref(formRef)) == null ? void 0 : _a.resetFields();
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form, {
              ref_key: "formRef",
              ref: formRef,
              model: unref(formData),
              rules: unref(formRules),
              "label-width": "84px"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u63A5\u53E3\u540D\u79F0",
                    prop: "name"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(formData).name,
                          "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                          placeholder: "\u63A5\u53E3\u540D\u79F0",
                          clearable: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(formData).name,
                            "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                            placeholder: "\u63A5\u53E3\u540D\u79F0",
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_form_item, {
                      label: "\u63A5\u53E3\u540D\u79F0",
                      prop: "name"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(formData).name,
                          "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                          placeholder: "\u63A5\u53E3\u540D\u79F0",
                          clearable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(_component_el_form, {
                ref_key: "formRef",
                ref: formRef,
                model: unref(formData),
                rules: unref(formRules),
                "label-width": "84px"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, {
                    label: "\u63A5\u53E3\u540D\u79F0",
                    prop: "name"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: unref(formData).name,
                        "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                        placeholder: "\u63A5\u53E3\u540D\u79F0",
                        clearable: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model", "rules"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-release/create-api.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create-api-DSzwJdwa.mjs.map
