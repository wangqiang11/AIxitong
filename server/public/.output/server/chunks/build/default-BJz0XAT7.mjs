import { E as ElContainer, a as ElHeader, b as ElAside, c as ElMain, d as ElFooter } from './el-main-CicCXqYc.mjs';
import { a5 as useAppStore, z as useUserStore, bs as useSettingStore } from './server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, renderSlot, createCommentVNode, createVNode, createSlots, openBlock, createBlock } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { useDark, useWindowSize } from '@vueuse/core';
import LayoutHeader from './index-wmJMgVku.mjs';
import LayoutAside from './index-Rg7R--Hc.mjs';
import _sfc_main$1 from './index-DVowbRlP.mjs';
import _sfc_main$2 from './index-BDwPtStU.mjs';
import NoticePopup from './index-D2jK_mUw.mjs';
import _sfc_main$3 from './index-NI1tubJF.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './title-logo-BNM0flCB.mjs';
import './nuxt-link-l5zPv3vf.mjs';
import './user-SBxKtT5H.mjs';
import './index-BoqjHllR.mjs';
import './member-btn-MuRMgKHK.mjs';
import './index-0xCxAaTZ.mjs';
import './panel-CZST6D6c.mjs';
import './menu-kGe6aUVW.mjs';
import './el-menu-item-DBjUF0xW.mjs';
import './index-DadLUs6d.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-5Ia44xzE.mjs';
import './menu-item-syjwFhcv.mjs';
import './index-DLVgZG5d.mjs';
import './nav-BWEmvwsg.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './index-BZwsOHV2.mjs';
import './el-tab-pane-C7DQ8faq.mjs';
import './strings-D1uxkXhq.mjs';
import './index-C5I0EtSx.mjs';
import './mobile-login-CIZyd954.mjs';
import './index-DLL0sEcv.mjs';
import 'async-validator';
import './index-CUhOTuS-.mjs';
import './index-D7S5lb8a.mjs';
import './index-6v4EX2UV.mjs';
import '@chenfengyuan/vue-countdown';
import './useLockFn-BWbjkhBs.mjs';
import './mailbox-login-DTfJ6zDd.mjs';
import './weixin-login-C37aKzsA.mjs';
import './usePolling-DOP50YcO.mjs';
import './forgot-pwd-DSRa74TH.mjs';
import './index-SK82_cfs.mjs';
import './bind-mobile-DCW2ViFa.mjs';
import './bind-weixin-CghyAKzM.mjs';
import './useTemplate-BMZ5OoC1.mjs';
import './manual-B2oZtFmW.mjs';
import './index-CJqYHNUB.mjs';
import './dropdown-C6fgV-Vy.mjs';
import './online-CTlEkafJ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    const userStore = useUserStore();
    useSettingStore();
    useDark();
    computed(() => {
      return appStore.isMobile ? {
        "--header-height": "50px",
        "--main-padding": "12px"
      } : {
        "--main-padding": "15px"
      };
    });
    const { height: windowHeight } = useWindowSize();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_container = ElContainer;
      const _component_el_header = ElHeader;
      const _component_el_aside = ElAside;
      const _component_el_main = ElMain;
      const _component_el_footer = ElFooter;
      _push(ssrRenderComponent(_component_el_container, mergeProps({
        class: "bg-body h-full layout-default",
        style: [
          {
            height: `${unref(windowHeight) == "Infinity" ? "100vh" : unref(windowHeight) + "px"}`
          }
        ]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_header, {
              height: "var(--header-height)",
              style: { "padding": "0" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(LayoutHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        if ((_a = _ctx.$slots) == null ? void 0 : _a.header) {
                          ssrRenderSlot(_ctx.$slots, "header", {}, null, _push4, _parent4, _scopeId3);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          ((_b = _ctx.$slots) == null ? void 0 : _b.header) ? renderSlot(_ctx.$slots, "header", { key: 0 }, void 0, true) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(LayoutHeader, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          ((_a = _ctx.$slots) == null ? void 0 : _a.header) ? renderSlot(_ctx.$slots, "header", { key: 0 }, void 0, true) : createCommentVNode("", true)
                        ];
                      }),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_container, { class: "min-h-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_aside, {
                    width: "auto",
                    class: "!overflow-visible"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a2, _b2;
                      if (_push4) {
                        _push4(ssrRenderComponent(LayoutAside, null, createSlots({ _: 2 }, [
                          ((_a2 = _ctx.$slots) == null ? void 0 : _a2.aside) ? {
                            name: "aside",
                            fn: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderSlot(_ctx.$slots, "aside", {}, null, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  renderSlot(_ctx.$slots, "aside", {}, void 0, true)
                                ];
                              }
                            }),
                            key: "0"
                          } : void 0
                        ]), _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(LayoutAside, null, createSlots({ _: 2 }, [
                            ((_b2 = _ctx.$slots) == null ? void 0 : _b2.aside) ? {
                              name: "aside",
                              fn: withCtx(() => [
                                renderSlot(_ctx.$slots, "aside", {}, void 0, true)
                              ]),
                              key: "0"
                            } : void 0
                          ]), 1024)
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_container, {
                    class: ["overflow-hidden layout-bg rounded-[12px]", {
                      "": (_a = _ctx.$slots) == null ? void 0 : _a.aside,
                      "!rounded-none ": _ctx.$route.meta.hiddenRounded
                    }]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_main, {
                          class: "scrollbar",
                          style: { "padding": "0" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, "default", {}, void 0, true)
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                        if (!_ctx.$route.meta.hiddenFooter) {
                          _push4(ssrRenderComponent(_component_el_footer, { height: "auto" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$1, null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_component_el_main, {
                            class: "scrollbar",
                            style: { "padding": "0" }
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "default", {}, void 0, true)
                            ]),
                            _: 3
                          }),
                          !_ctx.$route.meta.hiddenFooter ? (openBlock(), createBlock(_component_el_footer, {
                            key: 0,
                            height: "auto"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_aside, {
                      width: "auto",
                      class: "!overflow-visible"
                    }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createVNode(LayoutAside, null, createSlots({ _: 2 }, [
                            ((_a2 = _ctx.$slots) == null ? void 0 : _a2.aside) ? {
                              name: "aside",
                              fn: withCtx(() => [
                                renderSlot(_ctx.$slots, "aside", {}, void 0, true)
                              ]),
                              key: "0"
                            } : void 0
                          ]), 1024)
                        ];
                      }),
                      _: 3
                    }),
                    createVNode(_component_el_container, {
                      class: ["overflow-hidden layout-bg rounded-[12px]", {
                        "": (_b = _ctx.$slots) == null ? void 0 : _b.aside,
                        "!rounded-none ": _ctx.$route.meta.hiddenRounded
                      }]
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_main, {
                          class: "scrollbar",
                          style: { "padding": "0" }
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "default", {}, void 0, true)
                          ]),
                          _: 3
                        }),
                        !_ctx.$route.meta.hiddenFooter ? (openBlock(), createBlock(_component_el_footer, {
                          key: 0,
                          height: "auto"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 3
                    }, 8, ["class"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            if (unref(userStore).showLogin) {
              _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(NoticePopup, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_header, {
                height: "var(--header-height)",
                style: { "padding": "0" }
              }, {
                default: withCtx(() => [
                  createVNode(LayoutHeader, null, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        ((_a = _ctx.$slots) == null ? void 0 : _a.header) ? renderSlot(_ctx.$slots, "header", { key: 0 }, void 0, true) : createCommentVNode("", true)
                      ];
                    }),
                    _: 3
                  })
                ]),
                _: 3
              }),
              createVNode(_component_el_container, { class: "min-h-0" }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode(_component_el_aside, {
                      width: "auto",
                      class: "!overflow-visible"
                    }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createVNode(LayoutAside, null, createSlots({ _: 2 }, [
                            ((_a2 = _ctx.$slots) == null ? void 0 : _a2.aside) ? {
                              name: "aside",
                              fn: withCtx(() => [
                                renderSlot(_ctx.$slots, "aside", {}, void 0, true)
                              ]),
                              key: "0"
                            } : void 0
                          ]), 1024)
                        ];
                      }),
                      _: 3
                    }),
                    createVNode(_component_el_container, {
                      class: ["overflow-hidden layout-bg rounded-[12px]", {
                        "": (_a = _ctx.$slots) == null ? void 0 : _a.aside,
                        "!rounded-none ": _ctx.$route.meta.hiddenRounded
                      }]
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_main, {
                          class: "scrollbar",
                          style: { "padding": "0" }
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "default", {}, void 0, true)
                          ]),
                          _: 3
                        }),
                        !_ctx.$route.meta.hiddenFooter ? (openBlock(), createBlock(_component_el_footer, {
                          key: 0,
                          height: "auto"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 3
                    }, 8, ["class"])
                  ];
                }),
                _: 3
              }),
              unref(userStore).showLogin ? (openBlock(), createBlock(_sfc_main$2, { key: 0 })) : createCommentVNode("", true),
              createVNode(NoticePopup),
              createVNode(_sfc_main$3)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1a51c74d"]]);

export { _default as default };
//# sourceMappingURL=default-BJz0XAT7.mjs.map
