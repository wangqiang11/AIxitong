import { E as ElTabs, a as ElTabPane } from './el-tab-pane-C7DQ8faq.mjs';
import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { z as useUserStore, a5 as useAppStore, bt as LoginPopupTypeEnum, bw as PolicyAgreementEnum, bC as smsSend, bD as SMSEnum, bF as sendEmailCode, E as ElInput, d as ElButton, bT as register } from './server.mjs';
import { E as ElSelect, a as ElOption } from './index-CUhOTuS-.mjs';
import { _ as __nuxt_component_0 } from './index-6v4EX2UV.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-l5zPv3vf.mjs';
import { useSSRContext, defineComponent, computed, shallowRef, reactive, watch, mergeProps, unref, withCtx, openBlock, createBlock, Fragment, renderList, createVNode, createTextVNode, createCommentVNode } from 'vue';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import './strings-D1uxkXhq.mjs';
import '@vue/shared';
import './index-C5I0EtSx.mjs';
import 'lodash-unified';
import 'async-validator';
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
import './index-5Ia44xzE.mjs';
import '@chenfengyuan/vue-countdown';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const registerWayLists = [
      {
        name: "\u624B\u673A\u53F7\u6CE8\u518C",
        type: "1"
        /* MOBILE */
      },
      {
        name: "\u90AE\u7BB1\u6CE8\u518C",
        type: "2"
        /* MAILBOX */
      }
    ];
    const getRegisterWay = computed(
      () => {
        var _a;
        return ((_a = appStore.getLoginConfig) == null ? void 0 : _a.register_way) || [];
      }
    );
    const registerWayListsFilter = computed(() => {
      return registerWayLists.filter(
        (item) => getRegisterWay.value.includes(item.type)
      );
    });
    const userStore = useUserStore();
    const { login, setUser, toggleShowLogin, setLoginPopupType } = userStore;
    const formRef = shallowRef();
    const formRules = {
      mobile: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
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
          message: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
        }
      ],
      password: [
        {
          required: true,
          message: "\u8BF7\u8F93\u51656-20\u4F4D\u6570\u5B57+\u5B57\u6BCD\u6216\u7B26\u53F7\u7EC4\u5408"
        },
        {
          min: 6,
          max: 20,
          message: "\u5BC6\u7801\u957F\u5EA6\u5E94\u4E3A6-20"
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
          }
        }
      ]
    };
    const formData = reactive({
      scene: "",
      mobile: "",
      code: "",
      email: "",
      password: "",
      password_confirm: ""
    });
    const verificationCodeRef = shallowRef();
    const sendCode = async () => {
      var _a;
      formData.scene === "1" ? await sendSms() : sendEmail();
      (_a = verificationCodeRef.value) == null ? void 0 : _a.start();
    };
    const sendSms = async () => {
      var _a;
      await ((_a = formRef.value) == null ? void 0 : _a.validateField(["mobile"]));
      await smsSend({
        scene: SMSEnum.REGISTER,
        mobile: formData.mobile
      });
    };
    const sendEmail = async () => {
      var _a;
      await ((_a = formRef.value) == null ? void 0 : _a.validateField(["email"]));
      await sendEmailCode({
        scene: SMSEnum.REGISTER,
        email: formData.email
      });
    };
    const appStore = useAppStore();
    const isOpenSendSms = computed(
      () => {
        var _a;
        return ((_a = appStore.getLoginConfig) == null ? void 0 : _a.register_sms_verify) === 1;
      }
    );
    const isOpenAgreement = computed(
      () => appStore.getLoginConfig.is_agreement === 1
    );
    const handleConfirm = async () => {
      var _a;
      await ((_a = formRef.value) == null ? void 0 : _a.validate());
      const data = await register(formData);
      if (!data.mobile && appStore.getLoginConfig.coerce_mobile) {
        userStore.temToken = data.token;
        setLoginPopupType(LoginPopupTypeEnum.BIND_MOBILE);
      } else {
        login(data.token);
        setUser(data);
        toggleShowLogin(false);
        (void 0).reload();
      }
    };
    const { lockFn: handleConfirmLock, isLock } = useLockFn(handleConfirm);
    watch(
      () => formData.scene,
      () => {
        var _a;
        formData.password = "";
        formData.code = "";
        formData.password = "";
        (_a = formRef.value) == null ? void 0 : _a.clearValidate();
      }
    );
    watch(
      getRegisterWay,
      (value) => {
        if (value.includes(
          "1"
          /* MOBILE */
        )) {
          formData.scene = "1";
          return;
        }
        const [firstWay] = value;
        formData.scene = firstWay || "";
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _component_ElInput = ElInput;
      const _component_ElSelect = ElSelect;
      const _component_ElOption = ElOption;
      const _component_VerificationCode = __nuxt_component_0;
      const _component_ElButton = ElButton;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 flex flex-col" }, _attrs))} data-v-3c8cc549><div class="flex flex-1 flex-col py-[20px] px-[30px] min-h-0" data-v-3c8cc549>`);
      _push(ssrRenderComponent(_component_el_tabs, {
        modelValue: unref(formData).scene,
        "onUpdate:modelValue": ($event) => unref(formData).scene = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(registerWayListsFilter), (item, index) => {
              _push2(ssrRenderComponent(_component_el_tab_pane, {
                key: index,
                label: item.name,
                name: item.type
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(registerWayListsFilter), (item, index) => {
                return openBlock(), createBlock(_component_el_tab_pane, {
                  key: index,
                  label: item.name,
                  name: item.type
                }, null, 8, ["label", "name"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(getRegisterWay).length) {
        _push(ssrRenderComponent(_component_ElForm, {
          ref_key: "formRef",
          ref: formRef,
          class: "mt-[10px]",
          size: "large",
          model: unref(formData),
          rules: formRules
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(formData).scene === "1") {
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
              if (unref(formData).scene === "2") {
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
              if (unref(isOpenSendSms)) {
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
                            _push4(`<div class="flex justify-center leading-5 w-[90px] pl-2.5 border-l border-br" data-v-3c8cc549${_scopeId3}>`);
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
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_ElFormItem, { prop: "password" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ElInput, {
                      modelValue: unref(formData).password,
                      "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                      type: "password",
                      "show-password": "",
                      placeholder: "\u8BF7\u8F93\u51656-20\u4F4D\u6570\u5B57+\u5B57\u6BCD\u6216\u7B26\u53F7\u7EC4\u5408"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElInput, {
                        modelValue: unref(formData).password,
                        "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                        type: "password",
                        "show-password": "",
                        placeholder: "\u8BF7\u8F93\u51656-20\u4F4D\u6570\u5B57+\u5B57\u6BCD\u6216\u7B26\u53F7\u7EC4\u5408"
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
                      type: "password",
                      "show-password": "",
                      placeholder: "\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ElInput, {
                        modelValue: unref(formData).password_confirm,
                        "onUpdate:modelValue": ($event) => unref(formData).password_confirm = $event,
                        type: "password",
                        "show-password": "",
                        placeholder: "\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"
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
                          _push4(` \u6CE8\u518C `);
                        } else {
                          return [
                            createTextVNode(" \u6CE8\u518C ")
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
                          createTextVNode(" \u6CE8\u518C ")
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
                unref(formData).scene === "1" ? (openBlock(), createBlock(_component_ElFormItem, {
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
                unref(formData).scene === "2" ? (openBlock(), createBlock(_component_ElFormItem, {
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
                unref(isOpenSendSms) ? (openBlock(), createBlock(_component_ElFormItem, {
                  key: 2,
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
                            onClickGet: sendCode
                          }, null, 512)
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(_component_ElFormItem, { prop: "password" }, {
                  default: withCtx(() => [
                    createVNode(_component_ElInput, {
                      modelValue: unref(formData).password,
                      "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                      type: "password",
                      "show-password": "",
                      placeholder: "\u8BF7\u8F93\u51656-20\u4F4D\u6570\u5B57+\u5B57\u6BCD\u6216\u7B26\u53F7\u7EC4\u5408"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_ElFormItem, { prop: "password_confirm" }, {
                  default: withCtx(() => [
                    createVNode(_component_ElInput, {
                      modelValue: unref(formData).password_confirm,
                      "onUpdate:modelValue": ($event) => unref(formData).password_confirm = $event,
                      type: "password",
                      "show-password": "",
                      placeholder: "\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"
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
                        createTextVNode(" \u6CE8\u518C ")
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
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex justify-center" data-v-3c8cc549> \u5DF2\u6709\u8D26\u53F7\uFF1F `);
      _push(ssrRenderComponent(_component_ElButton, {
        type: "primary",
        link: "",
        onClick: ($event) => unref(setLoginPopupType)(unref(LoginPopupTypeEnum).LOGIN)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u7ACB\u5373\u767B\u5F55 `);
          } else {
            return [
              createTextVNode(" \u7ACB\u5373\u767B\u5F55 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (unref(isOpenAgreement)) {
        _push(`<div class="bg-[#f4f4f4] px-[20px] py-[15px] flex dark:bg-[#333]" data-v-3c8cc549><div class="flex-1 text-tx-secondary" data-v-3c8cc549> \u60A8\u6CE8\u518C\u5373\u540C\u610F `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/policy/${unref(PolicyAgreementEnum).SERVICE}`,
          custom: ""
        }, {
          default: withCtx(({ href }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<a class="text-tx-primary"${ssrRenderAttr("href", href)} target="_blank" data-v-3c8cc549${_scopeId}> \u7528\u6237\u534F\u8BAE </a>`);
            } else {
              return [
                createVNode("a", {
                  class: "text-tx-primary",
                  href,
                  target: "_blank"
                }, " \u7528\u6237\u534F\u8BAE ", 8, ["href"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` \u548C `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "text-tx-primary",
          to: `/policy/${unref(PolicyAgreementEnum).PRIVACY}`,
          custom: ""
        }, {
          default: withCtx(({ href }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<a class="text-tx-primary"${ssrRenderAttr("href", href)} target="_blank" data-v-3c8cc549${_scopeId}> \u9690\u79C1\u653F\u7B56 </a>`);
            } else {
              return [
                createVNode("a", {
                  class: "text-tx-primary",
                  href,
                  target: "_blank"
                }, " \u9690\u79C1\u653F\u7B56 ", 8, ["href"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/account/register/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3c8cc549"]]);

export { Register as default };
//# sourceMappingURL=index-SK82_cfs.mjs.map
