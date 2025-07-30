import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { _ as _sfc_main$3 } from './index-DtwHx2ze.mjs';
import { E as ElAvatar } from './index-BV1cZAUE.mjs';
import { a as useRouter, a5 as useAppStore, z as useUserStore, bo as copy, bJ as userEdit, A as feedback, bt as LoginPopupTypeEnum, bK as editUserInfo, bL as cancelled, E as ElInput, d as ElButton } from './server.mjs';
import { useSSRContext, defineComponent, ref, shallowRef, unref, mergeProps, withCtx, createVNode, isRef, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, nextTick } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import _sfc_main$1 from './bindmobilePop-Dz6IQIMA.mjs';
import _sfc_main$2 from './changePwdPop-CA-FyOAp.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import '@vue/shared';
import 'lodash-unified';
import 'async-validator';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
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
import './index-BKj4TrcW.mjs';
import './index-CUhOTuS-.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import './index-6v4EX2UV.mjs';
import '@chenfengyuan/vue-countdown';
import './useLockFn-BWbjkhBs.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "center",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const popBinShow = ref(false);
    const bindPopRef = shallowRef();
    const popPwdShow = ref(false);
    const pwdPopRef = shallowRef();
    const appStore = useAppStore();
    const userStore = useUserStore();
    const nickName = ref(unref(userStore.userInfo.nickname));
    const openBindPop = async () => {
      popBinShow.value = true;
      await nextTick();
      bindPopRef.value.open();
    };
    const openPwdPop = async () => {
      popPwdShow.value = true;
      await nextTick();
      pwdPopRef.value.open();
    };
    const setUserInfo = async (value, field) => {
      try {
        await userEdit({ value, field });
        userStore.getUser();
      } catch (error) {
        feedback.msgError(error);
      }
    };
    const changeWechat = () => {
      userStore.setLoginPopupType(LoginPopupTypeEnum.BIND_WEIXIN);
      userStore.toggleShowLogin(true);
    };
    const submit = async () => {
      await editUserInfo({ field: "nickname", value: nickName.value });
      userStore.getUser();
    };
    const toCancelled = async () => {
      await feedback.confirm("\u786E\u8BA4\u6CE8\u9500\u8D26\u53F7\u5417\uFF1F\u6CE8\u9500\u540E\u5C06\u65E0\u6CD5\u767B\u5F55\uFF01");
      await cancelled();
      router.push("/");
      userStore.logout();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElScrollbar = ElScrollbar;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_CropperUpload = _sfc_main$3;
      const _component_ElAvatar = ElAvatar;
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full bg-body rounded-[12px]" }, _attrs))} data-v-ef279538>`);
      _push(ssrRenderComponent(_component_ElScrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-[20px]" data-v-ef279538${_scopeId}><div class="title font-medium text-xl" data-v-ef279538${_scopeId}>\u4E2A\u4EBA\u4FE1\u606F</div><div class="mt-[30px]" data-v-ef279538${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_form, {
              "label-width": "90px",
              "label-position": "left"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "",
                    "label-position": "right"
                  }, {
                    label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="w-[55px] text-right" data-v-ef279538${_scopeId3}>\u5934\u50CF</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "w-[55px] text-right" }, "\u5934\u50CF")
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="" data-v-ef279538${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_CropperUpload, {
                          onChange: ($event) => setUserInfo($event, "avatar")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ElAvatar, {
                                size: 60,
                                src: unref(userStore).userInfo.avatar
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ElAvatar, {
                                  size: 60,
                                  src: unref(userStore).userInfo.avatar
                                }, null, 8, ["src"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="text-tx-secondary mt-2 text-sm" data-v-ef279538${_scopeId3}> \u5EFA\u8BAE\u5C3A\u5BF8\uFF1A240*240px </div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "" }, [
                            createVNode(_component_CropperUpload, {
                              onChange: ($event) => setUserInfo($event, "avatar")
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElAvatar, {
                                  size: 60,
                                  src: unref(userStore).userInfo.avatar
                                }, null, 8, ["src"])
                              ]),
                              _: 1
                            }, 8, ["onChange"]),
                            createVNode("div", { class: "text-tx-secondary mt-2 text-sm" }, " \u5EFA\u8BAE\u5C3A\u5BF8\uFF1A240*240px ")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u7528\u6237\u6635\u79F0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div data-v-ef279538${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(nickName),
                          "onUpdate:modelValue": ($event) => isRef(nickName) ? nickName.value = $event : null,
                          class: "!w-[300px]"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode(_component_el_input, {
                              modelValue: unref(nickName),
                              "onUpdate:modelValue": ($event) => isRef(nickName) ? nickName.value = $event : null,
                              class: "!w-[300px]"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u7528\u6237ID" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center" data-v-ef279538${_scopeId3}><span class="mr-4" data-v-ef279538${_scopeId3}>${ssrInterpolate(unref(userStore).userInfo.sn)}</span>`);
                        _push4(ssrRenderComponent(_component_el_button, {
                          type: "primary",
                          link: true,
                          onClick: ($event) => ("copy" in _ctx ? _ctx.copy : unref(copy))(unref(userStore).userInfo.sn)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u590D\u5236 `);
                            } else {
                              return [
                                createTextVNode(" \u590D\u5236 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("span", { class: "mr-4" }, toDisplayString(unref(userStore).userInfo.sn), 1),
                            createVNode(_component_el_button, {
                              type: "primary",
                              link: true,
                              onClick: ($event) => ("copy" in _ctx ? _ctx.copy : unref(copy))(unref(userStore).userInfo.sn)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u590D\u5236 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u4E0A\u7EA7\u9080\u8BF7\u4EBA" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div data-v-ef279538${_scopeId3}>${ssrInterpolate(unref(userStore).userInfo.leader_nickname || "\u7CFB\u7EDF")}</div>`);
                      } else {
                        return [
                          createVNode("div", null, toDisplayString(unref(userStore).userInfo.leader_nickname || "\u7CFB\u7EDF"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u6CE8\u518C\u65F6\u95F4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div data-v-ef279538${_scopeId3}>${ssrInterpolate(unref(userStore).userInfo.create_time)}</div>`);
                      } else {
                        return [
                          createVNode("div", null, toDisplayString(unref(userStore).userInfo.create_time), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (unref(userStore).userInfo.email) {
                    _push3(ssrRenderComponent(_component_el_form_item, { label: "\u90AE\u7BB1\u53F7\u7801" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center" data-v-ef279538${_scopeId3}><span data-v-ef279538${_scopeId3}>${ssrInterpolate(unref(userStore).userInfo.email)}</span><span class="ml-2 text-tx-placeholder" data-v-ef279538${_scopeId3}> \uFF08\u5982\u9700\u4FEE\u6539\uFF0C\u8BF7\u524D\u5F80\u79FB\u52A8\u7AEF\u4FEE\u6539\uFF09 </span></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode("span", null, toDisplayString(unref(userStore).userInfo.email), 1),
                              createVNode("span", { class: "ml-2 text-tx-placeholder" }, " \uFF08\u5982\u9700\u4FEE\u6539\uFF0C\u8BF7\u524D\u5F80\u79FB\u52A8\u7AEF\u4FEE\u6539\uFF09 ")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u624B\u673A\u53F7\u7801" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center" data-v-ef279538${_scopeId3}><span data-v-ef279538${_scopeId3}>${ssrInterpolate(unref(userStore).userInfo.mobile)}</span>`);
                        _push4(ssrRenderComponent(_component_el_button, {
                          class: "ml-4",
                          type: "primary",
                          link: "",
                          onClick: openBindPop
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(userStore).userInfo.mobile ? "\u70B9\u51FB\u66F4\u6539" : "\u7ACB\u5373\u7ED1\u5B9A")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(userStore).userInfo.mobile ? "\u70B9\u51FB\u66F4\u6539" : "\u7ACB\u5373\u7ED1\u5B9A"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("span", null, toDisplayString(unref(userStore).userInfo.mobile), 1),
                            createVNode(_component_el_button, {
                              class: "ml-4",
                              type: "primary",
                              link: "",
                              onClick: openBindPop
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(userStore).userInfo.mobile ? "\u70B9\u51FB\u66F4\u6539" : "\u7ACB\u5373\u7ED1\u5B9A"), 1)
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u767B\u5F55\u5BC6\u7801" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center" data-v-ef279538${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_button, {
                          type: "primary",
                          link: "",
                          onClick: openPwdPop
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u70B9\u51FB\u8BBE\u7F6E`);
                            } else {
                              return [
                                createTextVNode("\u70B9\u51FB\u8BBE\u7F6E")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(_component_el_button, {
                              type: "primary",
                              link: "",
                              onClick: openPwdPop
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u70B9\u51FB\u8BBE\u7F6E")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u7ED1\u5B9A\u5FAE\u4FE1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center" data-v-ef279538${_scopeId3}>`);
                        if (unref(userStore).userInfo.is_auth) {
                          _push4(`<span data-v-ef279538${_scopeId3}>\u5DF2\u7ED1\u5B9A</span>`);
                        } else {
                          _push4(ssrRenderComponent(_component_el_button, {
                            type: "primary",
                            link: true,
                            onClick: changeWechat
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u70B9\u51FB\u7ED1\u5B9A `);
                              } else {
                                return [
                                  createTextVNode(" \u70B9\u51FB\u7ED1\u5B9A ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center" }, [
                            unref(userStore).userInfo.is_auth ? (openBlock(), createBlock("span", { key: 0 }, "\u5DF2\u7ED1\u5B9A")) : (openBlock(), createBlock(_component_el_button, {
                              key: 1,
                              type: "primary",
                              link: true,
                              onClick: changeWechat
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u70B9\u51FB\u7ED1\u5B9A ")
                              ]),
                              _: 1
                            }))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { "label-width": "0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_button, {
                          type: "primary",
                          class: "save-btn",
                          onClick: submit
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u4FDD\u5B58 `);
                            } else {
                              return [
                                createTextVNode(" \u4FDD\u5B58 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_button, {
                            type: "primary",
                            class: "save-btn",
                            onClick: submit
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u4FDD\u5B58 ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="line mb-[30px]" data-v-ef279538${_scopeId2}></div>`);
                  if (unref(appStore).getAccountCancelledStatus) {
                    _push3(ssrRenderComponent(_component_el_form_item, { label: "\u6CE8\u9500\u8D26\u53F7" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div data-v-ef279538${_scopeId3}><div class="text-primary cursor-pointer" data-v-ef279538${_scopeId3}> \u7ACB\u5373\u6CE8\u9500 &gt; </div><div class="form-tips" data-v-ef279538${_scopeId3}> \u6CE8\u9500\u4F60\u7684\u8D26\u6237\u540E\uFF0C\u4F60\u5C06\u65E0\u6CD5\u4F7F\u7528\u6211\u4EEC\u7684\u4EFB\u4F55\u670D\u52A1\uFF0C\u5E76\u4E14\u4E0E\u4F60\u7684\u8D26\u6237\u76F8\u5173\u7684\u6240\u6709\u6570\u636E\u90FD\u5C06\u6C38\u4E45\u4E22\u5931\u3002\u6B64\u64CD\u4F5C\u4E0D\u53EF\u9006\uFF01 </div></div>`);
                        } else {
                          return [
                            createVNode("div", null, [
                              createVNode("div", {
                                class: "text-primary cursor-pointer",
                                onClick: toCancelled
                              }, " \u7ACB\u5373\u6CE8\u9500 > "),
                              createVNode("div", { class: "form-tips" }, " \u6CE8\u9500\u4F60\u7684\u8D26\u6237\u540E\uFF0C\u4F60\u5C06\u65E0\u6CD5\u4F7F\u7528\u6211\u4EEC\u7684\u4EFB\u4F55\u670D\u52A1\uFF0C\u5E76\u4E14\u4E0E\u4F60\u7684\u8D26\u6237\u76F8\u5173\u7684\u6240\u6709\u6570\u636E\u90FD\u5C06\u6C38\u4E45\u4E22\u5931\u3002\u6B64\u64CD\u4F5C\u4E0D\u53EF\u9006\uFF01 ")
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
                      label: "",
                      "label-position": "right"
                    }, {
                      label: withCtx(() => [
                        createVNode("div", { class: "w-[55px] text-right" }, "\u5934\u50CF")
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "" }, [
                          createVNode(_component_CropperUpload, {
                            onChange: ($event) => setUserInfo($event, "avatar")
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElAvatar, {
                                size: 60,
                                src: unref(userStore).userInfo.avatar
                              }, null, 8, ["src"])
                            ]),
                            _: 1
                          }, 8, ["onChange"]),
                          createVNode("div", { class: "text-tx-secondary mt-2 text-sm" }, " \u5EFA\u8BAE\u5C3A\u5BF8\uFF1A240*240px ")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u7528\u6237\u6635\u79F0" }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode(_component_el_input, {
                            modelValue: unref(nickName),
                            "onUpdate:modelValue": ($event) => isRef(nickName) ? nickName.value = $event : null,
                            class: "!w-[300px]"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u7528\u6237ID" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("span", { class: "mr-4" }, toDisplayString(unref(userStore).userInfo.sn), 1),
                          createVNode(_component_el_button, {
                            type: "primary",
                            link: true,
                            onClick: ($event) => ("copy" in _ctx ? _ctx.copy : unref(copy))(unref(userStore).userInfo.sn)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u590D\u5236 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u4E0A\u7EA7\u9080\u8BF7\u4EBA" }, {
                      default: withCtx(() => [
                        createVNode("div", null, toDisplayString(unref(userStore).userInfo.leader_nickname || "\u7CFB\u7EDF"), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u6CE8\u518C\u65F6\u95F4" }, {
                      default: withCtx(() => [
                        createVNode("div", null, toDisplayString(unref(userStore).userInfo.create_time), 1)
                      ]),
                      _: 1
                    }),
                    unref(userStore).userInfo.email ? (openBlock(), createBlock(_component_el_form_item, {
                      key: 0,
                      label: "\u90AE\u7BB1\u53F7\u7801"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("span", null, toDisplayString(unref(userStore).userInfo.email), 1),
                          createVNode("span", { class: "ml-2 text-tx-placeholder" }, " \uFF08\u5982\u9700\u4FEE\u6539\uFF0C\u8BF7\u524D\u5F80\u79FB\u52A8\u7AEF\u4FEE\u6539\uFF09 ")
                        ])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_el_form_item, { label: "\u624B\u673A\u53F7\u7801" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("span", null, toDisplayString(unref(userStore).userInfo.mobile), 1),
                          createVNode(_component_el_button, {
                            class: "ml-4",
                            type: "primary",
                            link: "",
                            onClick: openBindPop
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(userStore).userInfo.mobile ? "\u70B9\u51FB\u66F4\u6539" : "\u7ACB\u5373\u7ED1\u5B9A"), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u767B\u5F55\u5BC6\u7801" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode(_component_el_button, {
                            type: "primary",
                            link: "",
                            onClick: openPwdPop
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u70B9\u51FB\u8BBE\u7F6E")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u7ED1\u5B9A\u5FAE\u4FE1" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          unref(userStore).userInfo.is_auth ? (openBlock(), createBlock("span", { key: 0 }, "\u5DF2\u7ED1\u5B9A")) : (openBlock(), createBlock(_component_el_button, {
                            key: 1,
                            type: "primary",
                            link: true,
                            onClick: changeWechat
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u70B9\u51FB\u7ED1\u5B9A ")
                            ]),
                            _: 1
                          }))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { "label-width": "0" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_button, {
                          type: "primary",
                          class: "save-btn",
                          onClick: submit
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u4FDD\u5B58 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "line mb-[30px]" }),
                    unref(appStore).getAccountCancelledStatus ? (openBlock(), createBlock(_component_el_form_item, {
                      key: 1,
                      label: "\u6CE8\u9500\u8D26\u53F7"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("div", {
                            class: "text-primary cursor-pointer",
                            onClick: toCancelled
                          }, " \u7ACB\u5373\u6CE8\u9500 > "),
                          createVNode("div", { class: "form-tips" }, " \u6CE8\u9500\u4F60\u7684\u8D26\u6237\u540E\uFF0C\u4F60\u5C06\u65E0\u6CD5\u4F7F\u7528\u6211\u4EEC\u7684\u4EFB\u4F55\u670D\u52A1\uFF0C\u5E76\u4E14\u4E0E\u4F60\u7684\u8D26\u6237\u76F8\u5173\u7684\u6240\u6709\u6570\u636E\u90FD\u5C06\u6C38\u4E45\u4E22\u5931\u3002\u6B64\u64CD\u4F5C\u4E0D\u53EF\u9006\uFF01 ")
                        ])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-[20px]" }, [
                createVNode("div", { class: "title font-medium text-xl" }, "\u4E2A\u4EBA\u4FE1\u606F"),
                createVNode("div", { class: "mt-[30px]" }, [
                  createVNode(_component_el_form, {
                    "label-width": "90px",
                    "label-position": "left"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, {
                        label: "",
                        "label-position": "right"
                      }, {
                        label: withCtx(() => [
                          createVNode("div", { class: "w-[55px] text-right" }, "\u5934\u50CF")
                        ]),
                        default: withCtx(() => [
                          createVNode("div", { class: "" }, [
                            createVNode(_component_CropperUpload, {
                              onChange: ($event) => setUserInfo($event, "avatar")
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ElAvatar, {
                                  size: 60,
                                  src: unref(userStore).userInfo.avatar
                                }, null, 8, ["src"])
                              ]),
                              _: 1
                            }, 8, ["onChange"]),
                            createVNode("div", { class: "text-tx-secondary mt-2 text-sm" }, " \u5EFA\u8BAE\u5C3A\u5BF8\uFF1A240*240px ")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, { label: "\u7528\u6237\u6635\u79F0" }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode(_component_el_input, {
                              modelValue: unref(nickName),
                              "onUpdate:modelValue": ($event) => isRef(nickName) ? nickName.value = $event : null,
                              class: "!w-[300px]"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, { label: "\u7528\u6237ID" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("span", { class: "mr-4" }, toDisplayString(unref(userStore).userInfo.sn), 1),
                            createVNode(_component_el_button, {
                              type: "primary",
                              link: true,
                              onClick: ($event) => ("copy" in _ctx ? _ctx.copy : unref(copy))(unref(userStore).userInfo.sn)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u590D\u5236 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, { label: "\u4E0A\u7EA7\u9080\u8BF7\u4EBA" }, {
                        default: withCtx(() => [
                          createVNode("div", null, toDisplayString(unref(userStore).userInfo.leader_nickname || "\u7CFB\u7EDF"), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, { label: "\u6CE8\u518C\u65F6\u95F4" }, {
                        default: withCtx(() => [
                          createVNode("div", null, toDisplayString(unref(userStore).userInfo.create_time), 1)
                        ]),
                        _: 1
                      }),
                      unref(userStore).userInfo.email ? (openBlock(), createBlock(_component_el_form_item, {
                        key: 0,
                        label: "\u90AE\u7BB1\u53F7\u7801"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("span", null, toDisplayString(unref(userStore).userInfo.email), 1),
                            createVNode("span", { class: "ml-2 text-tx-placeholder" }, " \uFF08\u5982\u9700\u4FEE\u6539\uFF0C\u8BF7\u524D\u5F80\u79FB\u52A8\u7AEF\u4FEE\u6539\uFF09 ")
                          ])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_el_form_item, { label: "\u624B\u673A\u53F7\u7801" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("span", null, toDisplayString(unref(userStore).userInfo.mobile), 1),
                            createVNode(_component_el_button, {
                              class: "ml-4",
                              type: "primary",
                              link: "",
                              onClick: openBindPop
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(userStore).userInfo.mobile ? "\u70B9\u51FB\u66F4\u6539" : "\u7ACB\u5373\u7ED1\u5B9A"), 1)
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, { label: "\u767B\u5F55\u5BC6\u7801" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(_component_el_button, {
                              type: "primary",
                              link: "",
                              onClick: openPwdPop
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u70B9\u51FB\u8BBE\u7F6E")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, { label: "\u7ED1\u5B9A\u5FAE\u4FE1" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            unref(userStore).userInfo.is_auth ? (openBlock(), createBlock("span", { key: 0 }, "\u5DF2\u7ED1\u5B9A")) : (openBlock(), createBlock(_component_el_button, {
                              key: 1,
                              type: "primary",
                              link: true,
                              onClick: changeWechat
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u70B9\u51FB\u7ED1\u5B9A ")
                              ]),
                              _: 1
                            }))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, { "label-width": "0" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_button, {
                            type: "primary",
                            class: "save-btn",
                            onClick: submit
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u4FDD\u5B58 ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "line mb-[30px]" }),
                      unref(appStore).getAccountCancelledStatus ? (openBlock(), createBlock(_component_el_form_item, {
                        key: 1,
                        label: "\u6CE8\u9500\u8D26\u53F7"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", {
                              class: "text-primary cursor-pointer",
                              onClick: toCancelled
                            }, " \u7ACB\u5373\u6CE8\u9500 > "),
                            createVNode("div", { class: "form-tips" }, " \u6CE8\u9500\u4F60\u7684\u8D26\u6237\u540E\uFF0C\u4F60\u5C06\u65E0\u6CD5\u4F7F\u7528\u6211\u4EEC\u7684\u4EFB\u4F55\u670D\u52A1\uFF0C\u5E76\u4E14\u4E0E\u4F60\u7684\u8D26\u6237\u76F8\u5173\u7684\u6240\u6709\u6570\u636E\u90FD\u5C06\u6C38\u4E45\u4E22\u5931\u3002\u6B64\u64CD\u4F5C\u4E0D\u53EF\u9006\uFF01 ")
                          ])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(popBinShow)) {
        _push(ssrRenderComponent(_sfc_main$1, {
          ref_key: "bindPopRef",
          ref: bindPopRef,
          onClose: () => {
            popBinShow.value = false;
            unref(userStore).getUser();
          }
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(popPwdShow)) {
        _push(ssrRenderComponent(_sfc_main$2, {
          ref_key: "pwdPopRef",
          ref: pwdPopRef,
          mobile: unref(userStore).userInfo.mobile,
          email: unref(userStore).userInfo.email,
          onClose: () => {
            popPwdShow.value = false;
          }
        }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index/center.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const center = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ef279538"]]);

export { center as default };
//# sourceMappingURL=center-qz_Wl_s7.mjs.map
