import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { z as useUserStore, bt as LoginPopupTypeEnum, bC as smsSend, bD as SMSEnum, bF as sendEmailCode, E as ElInput, d as ElButton, bG as forgotPassword } from './server.mjs';
import { E as ElSelect, a as ElOption } from './index-CUhOTuS-.mjs';
import { _ as __nuxt_component_0 } from './index-6v4EX2UV.mjs';
import { defineComponent, shallowRef, reactive, mergeProps, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-0xCxAaTZ.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import '@chenfengyuan/vue-countdown';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "forgot-pwd",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const { setLoginPopupType } = useUserStore();
    const formRef = shallowRef();
    const verificationCodeRef = shallowRef();
    const formRules = {
      mobile: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801"
        }
      ],
      email: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u90AE\u7BB1\u8D26\u53F7"
        },
        { type: "email", message: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u8D26\u53F7" }
      ],
      code: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
          trigger: ["change", "blur"]
        }
      ],
      password: [
        {
          required: true,
          message: "\u8BF7\u8F93\u51656-20\u4F4D\u6570\u5B57+\u5B57\u6BCD\u6216\u7B26\u53F7\u7EC4\u5408",
          trigger: ["change", "blur"]
        },
        {
          min: 6,
          max: 20,
          message: "\u5BC6\u7801\u957F\u5EA6\u5E94\u4E3A6-20",
          trigger: ["change", "blur"]
        }
      ],
      password_confirm: [
        {
          validator(rule, value, callback) {
            if (value === "") {
              callback(new Error("\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"));
            } else if (value !== formData.password) {
              callback(new Error("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4"));
            } else {
              callback();
            }
          },
          trigger: ["change", "blur"]
        }
      ]
    };
    const formData = reactive({
      email: "",
      mobile: "",
      password: "",
      code: "",
      password_confirm: ""
    });
    const sendCode = async () => {
      var _a;
      userStore.loginPopupType === LoginPopupTypeEnum.FORGOT_PWD_MOBILE ? await sendSms() : await sendEmail();
      (_a = verificationCodeRef.value) == null ? void 0 : _a.start();
    };
    const sendSms = async () => {
      var _a;
      await ((_a = formRef.value) == null ? void 0 : _a.validateField(["mobile"]));
      await smsSend({
        scene: SMSEnum.FIND_PASSWORD,
        mobile: formData.mobile
      });
    };
    const sendEmail = async () => {
      var _a;
      await ((_a = formRef.value) == null ? void 0 : _a.validateField(["email"]));
      await sendEmailCode({
        scene: SMSEnum.FIND_PASSWORD,
        email: formData.email
      });
    };
    const handleConfirm = async () => {
      var _a;
      await ((_a = formRef.value) == null ? void 0 : _a.validate());
      await forgotPassword({
        ...formData,
        scene: userStore.loginPopupType === LoginPopupTypeEnum.FORGOT_PWD_MOBILE ? 1 : 2
      });
      userStore.logout();
      setLoginPopupType(LoginPopupTypeEnum.LOGIN);
    };
    const { lockFn: handleConfirmLock, isLock } = useLockFn(handleConfirm);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _component_ElInput = ElInput;
      const _component_ElSelect = ElSelect;
      const _component_ElOption = ElOption;
      const _component_VerificationCode = __nuxt_component_0;
      const _component_ElButton = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 flex flex-col" }, _attrs))}><div class="flex flex-1 flex-col pt-[30px] px-[30px] min-h-0"><span class="text-2xl font-medium text-tx-primary">\u66F4\u6362\u5BC6\u7801</span>`);
      _push(ssrRenderComponent(_component_ElForm, {
        ref_key: "formRef",
        ref: formRef,
        class: "mt-[35px]",
        size: "large",
        model: unref(formData),
        rules: formRules
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(userStore).loginPopupType === unref(LoginPopupTypeEnum).FORGOT_PWD_MOBILE) {
              _push2(ssrRenderComponent(_component_ElFormItem, { prop: "mobile" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElInput, {
                      modelValue: unref(formData).mobile,
                      "onUpdate:modelValue": ($event) => unref(formData).mobile = $event,
                      placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
                    }, {
                      prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElSelect, {
                            "model-value": "+86",
                            style: { "width": "80px" }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ElOption, {
                                  label: "+86",
                                  value: "+86"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ElOption, {
                                    label: "+86",
                                    value: "+86"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElSelect, {
                              "model-value": "+86",
                              style: { "width": "80px" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElOption, {
                                  label: "+86",
                                  value: "+86"
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElInput, {
                        modelValue: unref(formData).mobile,
                        "onUpdate:modelValue": ($event) => unref(formData).mobile = $event,
                        placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
                      }, {
                        prepend: withCtx(() => [
                          createVNode(_component_ElSelect, {
                            "model-value": "+86",
                            style: { "width": "80px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElOption, {
                                label: "+86",
                                value: "+86"
                              })
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
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(userStore).loginPopupType === unref(LoginPopupTypeEnum).FORGOT_PWD_MAILBOX) {
              _push2(ssrRenderComponent(_component_ElFormItem, { prop: "email" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElInput, {
                      modelValue: unref(formData).email,
                      "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                      placeholder: "\u8BF7\u8F93\u5165\u90AE\u7BB1\u8D26\u53F7"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElInput, {
                        modelValue: unref(formData).email,
                        "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                        placeholder: "\u8BF7\u8F93\u5165\u90AE\u7BB1\u8D26\u53F7"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_ElFormItem, { prop: "code" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElInput, {
                    modelValue: unref(formData).code,
                    "onUpdate:modelValue": ($event) => unref(formData).code = $event,
                    placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
                  }, {
                    suffix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex justify-center leading-5 w-[90px] pl-2.5 border-l border-br"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_VerificationCode, {
                          ref_key: "verificationCodeRef",
                          ref: verificationCodeRef,
                          onClickGet: sendCode
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex justify-center leading-5 w-[90px] pl-2.5 border-l border-br" }, [
                            createVNode(_component_VerificationCode, {
                              ref_key: "verificationCodeRef",
                              ref: verificationCodeRef,
                              onClickGet: sendCode
                            }, null, 512)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElInput, {
                      modelValue: unref(formData).code,
                      "onUpdate:modelValue": ($event) => unref(formData).code = $event,
                      placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
                    }, {
                      suffix: withCtx(() => [
                        createVNode("div", { class: "flex justify-center leading-5 w-[90px] pl-2.5 border-l border-br" }, [
                          createVNode(_component_VerificationCode, {
                            ref_key: "verificationCodeRef",
                            ref: verificationCodeRef,
                            onClickGet: sendCode
                          }, null, 512)
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElFormItem, { prop: "password" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElInput, {
                    modelValue: unref(formData).password,
                    "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                    placeholder: "\u8BF7\u8F93\u51656-20\u4F4D\u6570\u5B57+\u5B57\u6BCD\u6216\u7B26\u53F7\u7EC4\u5408",
                    type: "password",
                    "show-password": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElInput, {
                      modelValue: unref(formData).password,
                      "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                      placeholder: "\u8BF7\u8F93\u51656-20\u4F4D\u6570\u5B57+\u5B57\u6BCD\u6216\u7B26\u53F7\u7EC4\u5408",
                      type: "password",
                      "show-password": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElFormItem, { prop: "password_confirm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElInput, {
                    modelValue: unref(formData).password_confirm,
                    "onUpdate:modelValue": ($event) => unref(formData).password_confirm = $event,
                    placeholder: "\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",
                    type: "password",
                    "show-password": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElInput, {
                      modelValue: unref(formData).password_confirm,
                      "onUpdate:modelValue": ($event) => unref(formData).password_confirm = $event,
                      placeholder: "\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",
                      type: "password",
                      "show-password": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElFormItem, { class: "mt-[30px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    class: "w-full",
                    type: "primary",
                    loading: unref(isLock),
                    onClick: unref(handleConfirmLock)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u786E\u8BA4 `);
                      } else {
                        return [
                          createTextVNode(" \u786E\u8BA4 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      class: "w-full",
                      type: "primary",
                      loading: unref(isLock),
                      onClick: unref(handleConfirmLock)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u786E\u8BA4 ")
                      ]),
                      _: 1
                    }, 8, ["loading", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElFormItem, { class: "mt-[20px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-center flex-1"${_scopeId2}>`);
                  if (!unref(userStore).isLogin) {
                    _push3(ssrRenderComponent(_component_ElButton, {
                      type: "primary",
                      link: "",
                      onClick: ($event) => unref(setLoginPopupType)(unref(LoginPopupTypeEnum).LOGIN)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u8FD4\u56DE\u767B\u5F55 `);
                        } else {
                          return [
                            createTextVNode(" \u8FD4\u56DE\u767B\u5F55 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-center flex-1" }, [
                      !unref(userStore).isLogin ? (openBlock(), createBlock(_component_ElButton, {
                        key: 0,
                        type: "primary",
                        link: "",
                        onClick: ($event) => unref(setLoginPopupType)(unref(LoginPopupTypeEnum).LOGIN)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u8FD4\u56DE\u767B\u5F55 ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              unref(userStore).loginPopupType === unref(LoginPopupTypeEnum).FORGOT_PWD_MOBILE ? (openBlock(), createBlock(_component_ElFormItem, {
                key: 0,
                prop: "mobile"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(formData).mobile,
                    "onUpdate:modelValue": ($event) => unref(formData).mobile = $event,
                    placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
                  }, {
                    prepend: withCtx(() => [
                      createVNode(_component_ElSelect, {
                        "model-value": "+86",
                        style: { "width": "80px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElOption, {
                            label: "+86",
                            value: "+86"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(userStore).loginPopupType === unref(LoginPopupTypeEnum).FORGOT_PWD_MAILBOX ? (openBlock(), createBlock(_component_ElFormItem, {
                key: 1,
                prop: "email"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(formData).email,
                    "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                    placeholder: "\u8BF7\u8F93\u5165\u90AE\u7BB1\u8D26\u53F7"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_ElFormItem, { prop: "code" }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(formData).code,
                    "onUpdate:modelValue": ($event) => unref(formData).code = $event,
                    placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
                  }, {
                    suffix: withCtx(() => [
                      createVNode("div", { class: "flex justify-center leading-5 w-[90px] pl-2.5 border-l border-br" }, [
                        createVNode(_component_VerificationCode, {
                          ref_key: "verificationCodeRef",
                          ref: verificationCodeRef,
                          onClickGet: sendCode
                        }, null, 512)
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_ElFormItem, { prop: "password" }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(formData).password,
                    "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                    placeholder: "\u8BF7\u8F93\u51656-20\u4F4D\u6570\u5B57+\u5B57\u6BCD\u6216\u7B26\u53F7\u7EC4\u5408",
                    type: "password",
                    "show-password": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_ElFormItem, { prop: "password_confirm" }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(formData).password_confirm,
                    "onUpdate:modelValue": ($event) => unref(formData).password_confirm = $event,
                    placeholder: "\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",
                    type: "password",
                    "show-password": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_ElFormItem, { class: "mt-[30px]" }, {
                default: withCtx(() => [
                  createVNode(_component_ElButton, {
                    class: "w-full",
                    type: "primary",
                    loading: unref(isLock),
                    onClick: unref(handleConfirmLock)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u786E\u8BA4 ")
                    ]),
                    _: 1
                  }, 8, ["loading", "onClick"])
                ]),
                _: 1
              }),
              createVNode(_component_ElFormItem, { class: "mt-[20px]" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex justify-center flex-1" }, [
                    !unref(userStore).isLogin ? (openBlock(), createBlock(_component_ElButton, {
                      key: 0,
                      type: "primary",
                      link: "",
                      onClick: ($event) => unref(setLoginPopupType)(unref(LoginPopupTypeEnum).LOGIN)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u8FD4\u56DE\u767B\u5F55 ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/account/forgot-pwd.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=forgot-pwd-DSRa74TH.mjs.map
