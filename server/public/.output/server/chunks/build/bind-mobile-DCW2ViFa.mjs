import { _ as __nuxt_component_0 } from './index-6v4EX2UV.mjs';
import { defineComponent, shallowRef, computed, reactive, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { z as useUserStore, E as ElInput, d as ElButton, bC as smsSend, bD as SMSEnum, bE as userBindMobile } from './server.mjs';
import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElSelect, a as ElOption } from './index-CUhOTuS-.mjs';
import '@chenfengyuan/vue-countdown';
import '@vueuse/core';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import 'async-validator';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-0xCxAaTZ.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "bind-mobile",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const formRef = shallowRef();
    const verificationCodeRef = shallowRef();
    const formRules = {
      mobile: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",
          trigger: ["change", "blur"]
        }
      ],
      code: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
          trigger: ["change", "blur"]
        }
      ]
    };
    const hasMobile = computed(() => !!userStore.userInfo.mobile);
    const formData = reactive({
      type: hasMobile.value ? "change" : "bind",
      mobile: "",
      code: ""
    });
    const sendSms = async () => {
      var _a, _b;
      await ((_a = formRef.value) == null ? void 0 : _a.validateField(["mobile"]));
      await smsSend({
        scene: hasMobile.value ? SMSEnum.CHANGE_MOBILE : SMSEnum.BIND_MOBILE,
        mobile: formData.mobile
      });
      (_b = verificationCodeRef.value) == null ? void 0 : _b.start();
    };
    const handleConfirm = async () => {
      var _a;
      await ((_a = formRef.value) == null ? void 0 : _a.validate());
      if (userStore.isLogin) {
        await userBindMobile(formData);
      } else {
        await userBindMobile(formData, { token: userStore.temToken });
        userStore.login(userStore.temToken);
        (void 0).reload();
        await userStore.getUser();
      }
      userStore.toggleShowLogin(false);
    };
    const { lockFn: handleConfirmLock, isLock } = useLockFn(handleConfirm);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VerificationCode = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 flex flex-col" }, _attrs))}><div class="flex flex-1 flex-col pt-[30px] px-[30px] min-h-0"><span class="text-2xl font-medium text-tx-primary">${ssrInterpolate(unref(hasMobile) ? "\u66F4\u6362\u624B\u673A\u53F7" : "\u7ED1\u5B9A\u624B\u673A\u53F7")}</span>`);
      _push(ssrRenderComponent(unref(ElForm), {
        ref_key: "formRef",
        ref: formRef,
        class: "mt-[35px]",
        size: "large",
        model: unref(formData),
        rules: formRules
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ElFormItem), { prop: "mobile" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ElInput), {
                    modelValue: unref(formData).mobile,
                    "onUpdate:modelValue": ($event) => unref(formData).mobile = $event,
                    placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
                  }, {
                    prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ElSelect), {
                          "model-value": "+86",
                          style: { "width": "80px" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(ElOption), {
                                label: "+86",
                                value: "+86"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(ElOption), {
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
                          createVNode(unref(ElSelect), {
                            "model-value": "+86",
                            style: { "width": "80px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ElOption), {
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
                    createVNode(unref(ElInput), {
                      modelValue: unref(formData).mobile,
                      "onUpdate:modelValue": ($event) => unref(formData).mobile = $event,
                      placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
                    }, {
                      prepend: withCtx(() => [
                        createVNode(unref(ElSelect), {
                          "model-value": "+86",
                          style: { "width": "80px" }
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(ElOption), {
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
            _push2(ssrRenderComponent(unref(ElFormItem), { prop: "code" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ElInput), {
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
                          onClickGet: sendSms
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex justify-center leading-5 w-[90px] pl-2.5 border-l border-br" }, [
                            createVNode(_component_VerificationCode, {
                              ref_key: "verificationCodeRef",
                              ref: verificationCodeRef,
                              onClickGet: sendSms
                            }, null, 512)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ElInput), {
                      modelValue: unref(formData).code,
                      "onUpdate:modelValue": ($event) => unref(formData).code = $event,
                      placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
                    }, {
                      suffix: withCtx(() => [
                        createVNode("div", { class: "flex justify-center leading-5 w-[90px] pl-2.5 border-l border-br" }, [
                          createVNode(_component_VerificationCode, {
                            ref_key: "verificationCodeRef",
                            ref: verificationCodeRef,
                            onClickGet: sendSms
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
            _push2(ssrRenderComponent(unref(ElFormItem), { class: "mt-[60px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ElButton), {
                    class: "w-full",
                    type: "primary",
                    onClick: unref(handleConfirmLock),
                    loading: unref(isLock)
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
                    createVNode(unref(ElButton), {
                      class: "w-full",
                      type: "primary",
                      onClick: unref(handleConfirmLock),
                      loading: unref(isLock)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u786E\u8BA4 ")
                      ]),
                      _: 1
                    }, 8, ["onClick", "loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ElFormItem), { prop: "mobile" }, {
                default: withCtx(() => [
                  createVNode(unref(ElInput), {
                    modelValue: unref(formData).mobile,
                    "onUpdate:modelValue": ($event) => unref(formData).mobile = $event,
                    placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
                  }, {
                    prepend: withCtx(() => [
                      createVNode(unref(ElSelect), {
                        "model-value": "+86",
                        style: { "width": "80px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ElOption), {
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
              }),
              createVNode(unref(ElFormItem), { prop: "code" }, {
                default: withCtx(() => [
                  createVNode(unref(ElInput), {
                    modelValue: unref(formData).code,
                    "onUpdate:modelValue": ($event) => unref(formData).code = $event,
                    placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
                  }, {
                    suffix: withCtx(() => [
                      createVNode("div", { class: "flex justify-center leading-5 w-[90px] pl-2.5 border-l border-br" }, [
                        createVNode(_component_VerificationCode, {
                          ref_key: "verificationCodeRef",
                          ref: verificationCodeRef,
                          onClickGet: sendSms
                        }, null, 512)
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(unref(ElFormItem), { class: "mt-[60px]" }, {
                default: withCtx(() => [
                  createVNode(unref(ElButton), {
                    class: "w-full",
                    type: "primary",
                    onClick: unref(handleConfirmLock),
                    loading: unref(isLock)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u786E\u8BA4 ")
                    ]),
                    _: 1
                  }, 8, ["onClick", "loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/account/bind/bind-mobile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=bind-mobile-DCW2ViFa.mjs.map
