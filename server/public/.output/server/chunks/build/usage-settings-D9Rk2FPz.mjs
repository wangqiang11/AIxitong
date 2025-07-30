import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElInputNumber } from './el-input-number-DH6NTUUv.mjs';
import { E as ElInput } from './server.mjs';
import { defineComponent, shallowRef, reactive, shallowReactive, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { P as Popup } from './index-BKj4TrcW.mjs';
import '@vue/shared';
import 'lodash-unified';
import 'async-validator';
import '@vueuse/core';
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
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "usage-settings",
  __ssrInlineRender: true,
  emits: ["confirm"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const formRef = shallowRef();
    const popupRef = shallowRef();
    const formData = reactive({
      id: "",
      limit_exceed: "",
      limit_today_chat: 0,
      limit_total_chat: 1
    });
    const formRules = shallowReactive({
      limit_exceed: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u8D85\u51FA\u5C06\u9ED8\u8BA4\u56DE\u590D"
        }
      ],
      limit_today_chat: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u9650\u5236\u6BCF\u4E2A\u7528\u6237\u603B\u5BF9\u8BDD\u6570"
        }
      ],
      limit_total_chat: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u9650\u5236\u6BCF\u4E2A\u7528\u6237\u6BCF\u5929\u603B\u5BF9\u8BDD\u6570"
        }
      ]
    });
    const open = () => {
      var _a, _b;
      (_a = formRef.value) == null ? void 0 : _a.clearValidate();
      (_b = popupRef.value) == null ? void 0 : _b.open();
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
    const setFormData = async (data) => {
      Object.keys(formData).forEach((key) => {
        formData[key] = data[key];
      });
    };
    __expose({
      open,
      close,
      setFormData
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input_number = ElInputNumber;
      const _component_el_input = ElInput;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Popup, {
        ref_key: "popupRef",
        ref: popupRef,
        title: "\u7528\u91CF\u8BBE\u7F6E",
        async: true,
        width: "550px",
        onConfirm: handleConfirm
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form, {
              ref_key: "formRef",
              ref: formRef,
              model: unref(formData),
              rules: unref(formRules),
              "label-width": "auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u9650\u5236\u6BCF\u4E2A\u7528\u6237\u603B\u5BF9\u8BDD\u6570",
                    prop: "limit_today_chat"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_input_number, {
                          modelValue: unref(formData).limit_today_chat,
                          "onUpdate:modelValue": ($event) => unref(formData).limit_today_chat = $event,
                          "controls-position": "right",
                          min: 0,
                          clearable: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="ml-[10px]"${_scopeId3}>\u6761</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex" }, [
                            createVNode(_component_el_input_number, {
                              modelValue: unref(formData).limit_today_chat,
                              "onUpdate:modelValue": ($event) => unref(formData).limit_today_chat = $event,
                              "controls-position": "right",
                              min: 0,
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("span", { class: "ml-[10px]" }, "\u6761")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u9650\u5236\u6BCF\u4E2A\u7528\u6237\u6BCF\u5929\u603B\u5BF9\u8BDD\u6570",
                    prop: "limit_total_chat"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_input_number, {
                          modelValue: unref(formData).limit_total_chat,
                          "onUpdate:modelValue": ($event) => unref(formData).limit_total_chat = $event,
                          "controls-position": "right",
                          min: 0,
                          clearable: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="ml-[10px]"${_scopeId3}>\u6761</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex" }, [
                            createVNode(_component_el_input_number, {
                              modelValue: unref(formData).limit_total_chat,
                              "onUpdate:modelValue": ($event) => unref(formData).limit_total_chat = $event,
                              "controls-position": "right",
                              min: 0,
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("span", { class: "ml-[10px]" }, "\u6761")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u8D85\u51FA\u5C06\u9ED8\u8BA4\u56DE\u590D",
                    prop: "limit_exceed"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex-1 min-w-0"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(formData).limit_exceed,
                          "onUpdate:modelValue": ($event) => unref(formData).limit_exceed = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex-1 min-w-0" }, [
                            createVNode(_component_el_input, {
                              modelValue: unref(formData).limit_exceed,
                              "onUpdate:modelValue": ($event) => unref(formData).limit_exceed = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_form_item, {
                      label: "\u9650\u5236\u6BCF\u4E2A\u7528\u6237\u603B\u5BF9\u8BDD\u6570",
                      prop: "limit_today_chat"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex" }, [
                          createVNode(_component_el_input_number, {
                            modelValue: unref(formData).limit_today_chat,
                            "onUpdate:modelValue": ($event) => unref(formData).limit_today_chat = $event,
                            "controls-position": "right",
                            min: 0,
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("span", { class: "ml-[10px]" }, "\u6761")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u9650\u5236\u6BCF\u4E2A\u7528\u6237\u6BCF\u5929\u603B\u5BF9\u8BDD\u6570",
                      prop: "limit_total_chat"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex" }, [
                          createVNode(_component_el_input_number, {
                            modelValue: unref(formData).limit_total_chat,
                            "onUpdate:modelValue": ($event) => unref(formData).limit_total_chat = $event,
                            "controls-position": "right",
                            min: 0,
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("span", { class: "ml-[10px]" }, "\u6761")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u8D85\u51FA\u5C06\u9ED8\u8BA4\u56DE\u590D",
                      prop: "limit_exceed"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex-1 min-w-0" }, [
                          createVNode(_component_el_input, {
                            modelValue: unref(formData).limit_exceed,
                            "onUpdate:modelValue": ($event) => unref(formData).limit_exceed = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
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
                "label-width": "auto"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, {
                    label: "\u9650\u5236\u6BCF\u4E2A\u7528\u6237\u603B\u5BF9\u8BDD\u6570",
                    prop: "limit_today_chat"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex" }, [
                        createVNode(_component_el_input_number, {
                          modelValue: unref(formData).limit_today_chat,
                          "onUpdate:modelValue": ($event) => unref(formData).limit_today_chat = $event,
                          "controls-position": "right",
                          min: 0,
                          clearable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("span", { class: "ml-[10px]" }, "\u6761")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, {
                    label: "\u9650\u5236\u6BCF\u4E2A\u7528\u6237\u6BCF\u5929\u603B\u5BF9\u8BDD\u6570",
                    prop: "limit_total_chat"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex" }, [
                        createVNode(_component_el_input_number, {
                          modelValue: unref(formData).limit_total_chat,
                          "onUpdate:modelValue": ($event) => unref(formData).limit_total_chat = $event,
                          "controls-position": "right",
                          min: 0,
                          clearable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("span", { class: "ml-[10px]" }, "\u6761")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, {
                    label: "\u8D85\u51FA\u5C06\u9ED8\u8BA4\u56DE\u590D",
                    prop: "limit_exceed"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex-1 min-w-0" }, [
                        createVNode(_component_el_input, {
                          modelValue: unref(formData).limit_exceed,
                          "onUpdate:modelValue": ($event) => unref(formData).limit_exceed = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-release/usage-settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=usage-settings-D9Rk2FPz.mjs.map
