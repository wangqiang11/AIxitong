import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElInput } from './server.mjs';
import { E as ElRadioGroup, a as ElRadio } from './el-radio-group-PXDiQVwm.mjs';
import { defineComponent, shallowRef, ref, shallowReactive, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { P as Popup } from './index-BKj4TrcW.mjs';
import { cloneDeep } from 'lodash-es';
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
  __name: "create-share",
  __ssrInlineRender: true,
  props: {
    isShowChatType: { type: [Boolean, Number] }
  },
  emits: ["confirm"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const formRef = shallowRef();
    const popupRef = shallowRef();
    const formData = ref({
      name: "",
      password: "",
      chat_type: 1
    });
    const type = ref("add");
    const formRules = shallowReactive({
      name: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u5206\u4EAB\u540D\u79F0"
        }
      ]
    });
    const open = (data) => {
      var _a;
      if (data) {
        type.value = "edit";
        formData.value = cloneDeep(data);
      } else {
        type.value = "add";
        formData.value = {
          name: "",
          password: "",
          chat_type: 1
        };
      }
      (_a = popupRef.value) == null ? void 0 : _a.open();
    };
    const close = () => {
      var _a;
      (_a = popupRef.value) == null ? void 0 : _a.close();
    };
    const handleConfirm = async () => {
      var _a;
      await ((_a = formRef.value) == null ? void 0 : _a.validate());
      emit("confirm", formData.value, type.value);
    };
    __expose({
      open,
      close
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_radio = ElRadio;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Popup, {
        ref_key: "popupRef",
        ref: popupRef,
        title: `${unref(type) == "add" ? "\u521B\u5EFA" : "\u7F16\u8F91"}\u94FE\u63A5`,
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
                    label: "\u540D\u79F0",
                    prop: "name"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(formData).name,
                          "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                          placeholder: "\u8BB0\u5F55\u540D\u79F0\uFF0C\u4EC5\u7528\u4E8E\u5C55\u793A",
                          clearable: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(formData).name,
                            "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                            placeholder: "\u8BB0\u5F55\u540D\u79F0\uFF0C\u4EC5\u7528\u4E8E\u5C55\u793A",
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u5BC6\u7801",
                    prop: "password"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(formData).password,
                          "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                          type: "password",
                          placeholder: "\u4E0D\u8BBE\u7F6E\u5BC6\u7801\uFF0C\u53EF\u76F4\u63A5\u8BBF\u95EE",
                          "show-password": ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(formData).password,
                            "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                            type: "password",
                            placeholder: "\u4E0D\u8BBE\u7F6E\u5BC6\u7801\uFF0C\u53EF\u76F4\u63A5\u8BBF\u95EE",
                            "show-password": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (_ctx.isShowChatType && unref(type) === "add") {
                    _push3(ssrRenderComponent(_component_el_form_item, {
                      label: "\u5BF9\u8BDD\u6A21\u5F0F",
                      prop: "chat_type",
                      required: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_el_radio_group, {
                            modelValue: unref(formData).chat_type,
                            "onUpdate:modelValue": ($event) => unref(formData).chat_type = $event
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_el_radio, { label: 1 }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u6587\u672C\u5BF9\u8BDD`);
                                    } else {
                                      return [
                                        createTextVNode("\u6587\u672C\u5BF9\u8BDD")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_el_radio, { label: 2 }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u5F62\u8C61\u5BF9\u8BDD`);
                                    } else {
                                      return [
                                        createTextVNode("\u5F62\u8C61\u5BF9\u8BDD")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_el_radio, { label: 1 }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u6587\u672C\u5BF9\u8BDD")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_radio, { label: 2 }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u5F62\u8C61\u5BF9\u8BDD")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div class="form-tips"${_scopeId3}> \u82E5\u5173\u95ED\u6216\u6CA1\u6709\u914D\u7F6E\u5F62\u8C61\u9009\u62E9\u540E\uFF0C\u9ED8\u8BA4\u5C55\u793A\u6587\u672C </div></div>`);
                        } else {
                          return [
                            createVNode("div", null, [
                              createVNode(_component_el_radio_group, {
                                modelValue: unref(formData).chat_type,
                                "onUpdate:modelValue": ($event) => unref(formData).chat_type = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_radio, { label: 1 }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u6587\u672C\u5BF9\u8BDD")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_radio, { label: 2 }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u5F62\u8C61\u5BF9\u8BDD")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("div", { class: "form-tips" }, " \u82E5\u5173\u95ED\u6216\u6CA1\u6709\u914D\u7F6E\u5F62\u8C61\u9009\u62E9\u540E\uFF0C\u9ED8\u8BA4\u5C55\u793A\u6587\u672C ")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_el_form_item, {
                      label: "\u540D\u79F0",
                      prop: "name"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(formData).name,
                          "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                          placeholder: "\u8BB0\u5F55\u540D\u79F0\uFF0C\u4EC5\u7528\u4E8E\u5C55\u793A",
                          clearable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u5BC6\u7801",
                      prop: "password"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(formData).password,
                          "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                          type: "password",
                          placeholder: "\u4E0D\u8BBE\u7F6E\u5BC6\u7801\uFF0C\u53EF\u76F4\u63A5\u8BBF\u95EE",
                          "show-password": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    _ctx.isShowChatType && unref(type) === "add" ? (openBlock(), createBlock(_component_el_form_item, {
                      key: 0,
                      label: "\u5BF9\u8BDD\u6A21\u5F0F",
                      prop: "chat_type",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode(_component_el_radio_group, {
                            modelValue: unref(formData).chat_type,
                            "onUpdate:modelValue": ($event) => unref(formData).chat_type = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_radio, { label: 1 }, {
                                default: withCtx(() => [
                                  createTextVNode("\u6587\u672C\u5BF9\u8BDD")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_radio, { label: 2 }, {
                                default: withCtx(() => [
                                  createTextVNode("\u5F62\u8C61\u5BF9\u8BDD")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "form-tips" }, " \u82E5\u5173\u95ED\u6216\u6CA1\u6709\u914D\u7F6E\u5F62\u8C61\u9009\u62E9\u540E\uFF0C\u9ED8\u8BA4\u5C55\u793A\u6587\u672C ")
                        ])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
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
                    label: "\u540D\u79F0",
                    prop: "name"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: unref(formData).name,
                        "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                        placeholder: "\u8BB0\u5F55\u540D\u79F0\uFF0C\u4EC5\u7528\u4E8E\u5C55\u793A",
                        clearable: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, {
                    label: "\u5BC6\u7801",
                    prop: "password"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: unref(formData).password,
                        "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                        type: "password",
                        placeholder: "\u4E0D\u8BBE\u7F6E\u5BC6\u7801\uFF0C\u53EF\u76F4\u63A5\u8BBF\u95EE",
                        "show-password": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  _ctx.isShowChatType && unref(type) === "add" ? (openBlock(), createBlock(_component_el_form_item, {
                    key: 0,
                    label: "\u5BF9\u8BDD\u6A21\u5F0F",
                    prop: "chat_type",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode(_component_el_radio_group, {
                          modelValue: unref(formData).chat_type,
                          "onUpdate:modelValue": ($event) => unref(formData).chat_type = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_radio, { label: 1 }, {
                              default: withCtx(() => [
                                createTextVNode("\u6587\u672C\u5BF9\u8BDD")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_radio, { label: 2 }, {
                              default: withCtx(() => [
                                createTextVNode("\u5F62\u8C61\u5BF9\u8BDD")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("div", { class: "form-tips" }, " \u82E5\u5173\u95ED\u6216\u6CA1\u6709\u914D\u7F6E\u5F62\u8C61\u9009\u62E9\u540E\uFF0C\u9ED8\u8BA4\u5C55\u793A\u6587\u672C ")
                      ])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-release/create-share.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create-share-5dUrzWP0.mjs.map
