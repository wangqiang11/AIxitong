import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { z as useUserStore, a5 as useAppStore, bW as terminal, bt as LoginPopupTypeEnum, bF as sendEmailCode, bD as SMSEnum, E as ElInput, d as ElButton, bX as login } from './server.mjs';
import { _ as __nuxt_component_0 } from './index-6v4EX2UV.mjs';
import { defineComponent, shallowRef, reactive, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
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
import '@chenfengyuan/vue-countdown';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mailbox-login",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const appStore = useAppStore();
    const formRef = shallowRef();
    const formRules = {
      email: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u90AE\u7BB1\u8D26\u53F7"
        },
        { type: "email", message: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u8D26\u53F7" }
      ],
      password: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u5BC6\u7801"
        }
      ],
      code: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
        }
      ]
    };
    const formData = reactive({
      code: "",
      email: "",
      password: "",
      scene: 4,
      terminal
    });
    const isCodeLogin = computed(
      () => formData.scene === 4
      /* CODE */
    );
    const isPasswordLogin = computed(
      () => formData.scene === 2
      /* PASSWORD */
    );
    const changeLoginScene = (scene) => {
      formData.scene = scene;
    };
    const verificationCodeRef = shallowRef();
    const sendEmail = async () => {
      var _a, _b;
      await ((_a = formRef.value) == null ? void 0 : _a.validateField(["email"]));
      await sendEmailCode({
        scene: SMSEnum.LOGIN,
        email: formData.email
      });
      (_b = verificationCodeRef.value) == null ? void 0 : _b.start();
    };
    const { lockFn: loginLock, isLock } = useLockFn(async () => {
      var _a;
      await ((_a = formRef.value) == null ? void 0 : _a.validate());
      const data = await login(formData);
      if (!data.mobile && appStore.getLoginConfig.coerce_mobile) {
        userStore.temToken = data.token;
        userStore.setLoginPopupType(LoginPopupTypeEnum.BIND_MOBILE);
      } else {
        userStore.login(data.token);
        userStore.setUser(data);
        userStore.toggleShowLogin(false);
        (void 0).reload();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _component_ElInput = ElInput;
      const _component_VerificationCode = __nuxt_component_0;
      const _component_ElButton = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[10px]" }, _attrs))}><div>`);
      _push(ssrRenderComponent(_component_ElForm, {
        ref_key: "formRef",
        ref: formRef,
        size: "large",
        model: unref(formData),
        rules: formRules
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
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
            if (unref(isPasswordLogin)) {
              _push2(ssrRenderComponent(_component_ElFormItem, { prop: "password" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElInput, {
                      modelValue: unref(formData).password,
                      "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                      type: "password",
                      "show-password": "",
                      placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElInput, {
                        modelValue: unref(formData).password,
                        "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                        type: "password",
                        "show-password": "",
                        placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(isCodeLogin)) {
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
                            onClickGet: sendEmail
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex justify-center leading-5 w-[90px] pl-2.5 border-l border-br" }, [
                              createVNode(_component_VerificationCode, {
                                ref_key: "verificationCodeRef",
                                ref: verificationCodeRef,
                                onClickGet: sendEmail
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
                              onClickGet: sendEmail
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
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex justify-end"${_scopeId}><div class="flex-1 flex"${_scopeId}>`);
            if (unref(isPasswordLogin)) {
              _push2(ssrRenderComponent(_component_ElButton, {
                type: "primary",
                link: "",
                onClick: ($event) => changeLoginScene(
                  4
                  /* CODE */
                )
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u90AE\u7BB1\u9A8C\u8BC1\u7801\u767B\u5F55 `);
                  } else {
                    return [
                      createTextVNode(" \u90AE\u7BB1\u9A8C\u8BC1\u7801\u767B\u5F55 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(isCodeLogin)) {
              _push2(ssrRenderComponent(_component_ElButton, {
                type: "primary",
                link: "",
                onClick: ($event) => changeLoginScene(
                  2
                  /* PASSWORD */
                )
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u90AE\u7BB1\u5BC6\u7801\u767B\u5F55 `);
                  } else {
                    return [
                      createTextVNode(" \u90AE\u7BB1\u5BC6\u7801\u767B\u5F55 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ElButton, {
              link: "",
              onClick: ($event) => unref(userStore).setLoginPopupType(unref(LoginPopupTypeEnum).FORGOT_PWD_MAILBOX)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5FD8\u8BB0\u5BC6\u7801\uFF1F `);
                } else {
                  return [
                    createTextVNode(" \u5FD8\u8BB0\u5BC6\u7801\uFF1F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ElFormItem, { class: "my-[30px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    class: "w-full",
                    type: "primary",
                    loading: unref(isLock),
                    onClick: unref(loginLock)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u767B\u5F55 `);
                      } else {
                        return [
                          createTextVNode(" \u767B\u5F55 ")
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
                      onClick: unref(loginLock)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u767B\u5F55 ")
                      ]),
                      _: 1
                    }, 8, ["loading", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElFormItem, { prop: "email" }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(formData).email,
                    "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                    placeholder: "\u8BF7\u8F93\u5165\u90AE\u7BB1\u8D26\u53F7"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              unref(isPasswordLogin) ? (openBlock(), createBlock(_component_ElFormItem, {
                key: 0,
                prop: "password"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ElInput, {
                    modelValue: unref(formData).password,
                    "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                    type: "password",
                    "show-password": "",
                    placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(isCodeLogin) ? (openBlock(), createBlock(_component_ElFormItem, {
                key: 1,
                prop: "code"
              }, {
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
                          onClickGet: sendEmail
                        }, null, 512)
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("div", { class: "flex-1 flex" }, [
                  unref(isPasswordLogin) ? (openBlock(), createBlock(_component_ElButton, {
                    key: 0,
                    type: "primary",
                    link: "",
                    onClick: ($event) => changeLoginScene(
                      4
                      /* CODE */
                    )
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u90AE\u7BB1\u9A8C\u8BC1\u7801\u767B\u5F55 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : createCommentVNode("", true),
                  unref(isCodeLogin) ? (openBlock(), createBlock(_component_ElButton, {
                    key: 1,
                    type: "primary",
                    link: "",
                    onClick: ($event) => changeLoginScene(
                      2
                      /* PASSWORD */
                    )
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u90AE\u7BB1\u5BC6\u7801\u767B\u5F55 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : createCommentVNode("", true)
                ]),
                createVNode(_component_ElButton, {
                  link: "",
                  onClick: ($event) => unref(userStore).setLoginPopupType(unref(LoginPopupTypeEnum).FORGOT_PWD_MAILBOX)
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u5FD8\u8BB0\u5BC6\u7801\uFF1F ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              createVNode(_component_ElFormItem, { class: "my-[30px]" }, {
                default: withCtx(() => [
                  createVNode(_component_ElButton, {
                    class: "w-full",
                    type: "primary",
                    loading: unref(isLock),
                    onClick: unref(loginLock)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u767B\u5F55 ")
                    ]),
                    _: 1
                  }, 8, ["loading", "onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/account/login/mailbox-login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=mailbox-login-DTfJ6zDd.mjs.map
