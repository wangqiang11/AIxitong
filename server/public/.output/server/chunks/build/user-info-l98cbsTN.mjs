import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { E as ElAvatar } from './index-BV1cZAUE.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { z as useUserStore, a5 as useAppStore, aI as getDecorate, A as feedback, b$ as logout, d as ElButton } from './server.mjs';
import { u as useCopy } from './useCopy-CfS-iChu.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, mergeProps, withCtx, renderSlot, unref, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-L-VTEUEA.mjs';
import '@vueuse/core';
import '@popperjs/core';
import '@vue/shared';
import 'lodash-unified';
import './dropdown-C6fgV-Vy.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "user-info",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const userStore = useUserStore();
    const { copy } = useCopy();
    const appStore = useAppStore();
    const menu = ref([
      {
        icon: "local-icon-user_works",
        name: "\u6211\u7684\u4F5C\u54C1",
        path: "/user/works"
      },
      {
        icon: "local-icon-head_goumai",
        name: "\u8D2D\u4E70\u8BB0\u5F55",
        path: "/user/record"
      },
      {
        icon: "local-icon-head_shiyong",
        name: "\u4F59\u989D\u660E\u7EC6",
        path: "/user/balance"
      }
    ]);
    const { data: decorate } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => getDecorate({ id: 2 }), {
      default() {
        return [];
      },
      transform(data) {
        return JSON.parse(data.data)[1];
      },
      lazy: true
    }, "$EqHsJzg0HM")), __temp = await __temp, __restore(), __temp);
    const handleLogout = async () => {
      await feedback.confirm("\u786E\u5B9A\u9000\u51FA\u767B\u5F55\u5417\uFF1F");
      await logout();
      userStore.logout();
      (void 0).location.reload();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popover = ElPopover;
      const _component_ElAvatar = ElAvatar;
      const _component_Icon = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_el_button = ElButton;
      const _component_ElButton = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "user-info" }, _attrs))} data-v-17233f26>`);
      _push(ssrRenderComponent(_component_el_popover, {
        placement: "bottom",
        trigger: "hover",
        teleported: false,
        "show-arrow": false,
        transition: "custom-popover",
        width: 390
      }, {
        reference: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-[8px]" data-v-17233f26${_scopeId}><div class="flex items-center" data-v-17233f26${_scopeId}><div class="flex-1 flex items-center" data-v-17233f26${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElAvatar, {
              class: "flex-none",
              size: 50,
              src: unref(userStore).userInfo.avatar
            }, null, _parent2, _scopeId));
            _push2(`<div class="ml-[10px]" data-v-17233f26${_scopeId}><div class="text-lg line-clamp-1" data-v-17233f26${_scopeId}>${ssrInterpolate(unref(userStore).userInfo.nickname)}</div><div class="text-xs text-tx-secondary mt-1 cursor-pointer flex items-center" data-v-17233f26${_scopeId}> ID\uFF1A${ssrInterpolate(unref(userStore).userInfo.sn)} `);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "ml-1",
              size: "12",
              name: "el-icon-CopyDocument"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div data-v-17233f26${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/user/center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_button, {
                    text: "",
                    bg: "",
                    round: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u4E2A\u4EBA\u4E2D\u5FC3`);
                      } else {
                        return [
                          createTextVNode("\u4E2A\u4EBA\u4E2D\u5FC3")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_button, {
                      text: "",
                      bg: "",
                      round: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u4E2A\u4EBA\u4E2D\u5FC3")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="bg-[#eff2fe] mt-[20px] py-[20px] px-[5px] rounded-[10px] dark:bg-[#333]" data-v-17233f26${_scopeId}>`);
            if (unref(appStore).getIsShowMember) {
              _push2(ssrRenderComponent(_component_NuxtLink, { to: "/user/member" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b, _c, _d, _e, _f, _g, _h;
                  if (_push3) {
                    _push3(`<div class="flex justify-between px-[20px]" data-v-17233f26${_scopeId2}><div data-v-17233f26${_scopeId2}><div class="text-xl font-medium text-tx-primary" data-v-17233f26${_scopeId2}>${ssrInterpolate(unref(userStore).userInfo.package_name || ((_b = (_a = unref(decorate)) == null ? void 0 : _a.content) == null ? void 0 : _b.title))}</div><div class="text-tx-secondary text-sm mt-[10px]" data-v-17233f26${_scopeId2}>${ssrInterpolate(unref(userStore).userInfo.package_time ? `\u6709\u6548\u671F\u81F3\uFF1A${unref(userStore).userInfo.package_time}` : (_d = (_c = unref(decorate)) == null ? void 0 : _c.content) == null ? void 0 : _d.sub_title)}</div></div><div class="flex items-center" data-v-17233f26${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_el_button, {
                      text: "",
                      bg: "",
                      round: "",
                      class: "dark:!bg-[#1b1c1d] !bg-white"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i, _j;
                        if (_push4) {
                          if ((_a2 = unref(userStore).userInfo) == null ? void 0 : _a2.package_is_overdue) {
                            _push4(`<span data-v-17233f26${_scopeId3}>${ssrInterpolate(unref(userStore).userInfo.package_name ? "\u7ACB\u5373\u5F00\u901A" : (_c2 = (_b2 = unref(decorate)) == null ? void 0 : _b2.content) == null ? void 0 : _c2.btn)}</span>`);
                          } else {
                            _push4(`<span data-v-17233f26${_scopeId3}>${ssrInterpolate(unref(userStore).userInfo.package_name ? "\u7ACB\u5373\u7EED\u8D39" : (_e2 = (_d2 = unref(decorate)) == null ? void 0 : _d2.content) == null ? void 0 : _e2.btn)}</span>`);
                          }
                        } else {
                          return [
                            ((_f2 = unref(userStore).userInfo) == null ? void 0 : _f2.package_is_overdue) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(userStore).userInfo.package_name ? "\u7ACB\u5373\u5F00\u901A" : (_h2 = (_g2 = unref(decorate)) == null ? void 0 : _g2.content) == null ? void 0 : _h2.btn), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(userStore).userInfo.package_name ? "\u7ACB\u5373\u7EED\u8D39" : (_j = (_i = unref(decorate)) == null ? void 0 : _i.content) == null ? void 0 : _j.btn), 1))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex justify-between px-[20px]" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "text-xl font-medium text-tx-primary" }, toDisplayString(unref(userStore).userInfo.package_name || ((_f = (_e = unref(decorate)) == null ? void 0 : _e.content) == null ? void 0 : _f.title)), 1),
                          createVNode("div", { class: "text-tx-secondary text-sm mt-[10px]" }, toDisplayString(unref(userStore).userInfo.package_time ? `\u6709\u6548\u671F\u81F3\uFF1A${unref(userStore).userInfo.package_time}` : (_h = (_g = unref(decorate)) == null ? void 0 : _g.content) == null ? void 0 : _h.sub_title), 1)
                        ]),
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode(_component_el_button, {
                            text: "",
                            bg: "",
                            round: "",
                            class: "dark:!bg-[#1b1c1d] !bg-white"
                          }, {
                            default: withCtx(() => {
                              var _a2, _b2, _c2, _d2, _e2;
                              return [
                                ((_a2 = unref(userStore).userInfo) == null ? void 0 : _a2.package_is_overdue) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(userStore).userInfo.package_name ? "\u7ACB\u5373\u5F00\u901A" : (_c2 = (_b2 = unref(decorate)) == null ? void 0 : _b2.content) == null ? void 0 : _c2.btn), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(userStore).userInfo.package_name ? "\u7ACB\u5373\u7EED\u8D39" : (_e2 = (_d2 = unref(decorate)) == null ? void 0 : _d2.content) == null ? void 0 : _e2.btn), 1))
                              ];
                            }),
                            _: 1
                          })
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex mt-[20px]" data-v-17233f26${_scopeId}><div class="flex-1 flex flex-col items-center px-[5px]" data-v-17233f26${_scopeId}><span class="text-md text-primary text-center font-bold" data-v-17233f26${_scopeId}>${ssrInterpolate(unref(userStore).userInfo.balance)}</span><span class="text-xs mt-[5px]" data-v-17233f26${_scopeId}>${ssrInterpolate(unref(appStore).getTokenUnit)}\u6570\u91CF</span></div><div class="flex-1 flex flex-col items-center px-[5px]" data-v-17233f26${_scopeId}><span class="text-md text-primary text-center font-bold" data-v-17233f26${_scopeId}>${ssrInterpolate(unref(userStore).userInfo.robot_num)}</span><span class="text-xs mt-[5px]" data-v-17233f26${_scopeId}>\u667A\u80FD\u4F53</span></div></div></div><div class="py-[20px] flex" data-v-17233f26${_scopeId}><!--[-->`);
            ssrRenderList(unref(menu), (item) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                class: "w-[33.3%] flex",
                key: item.path,
                to: item.path
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-col items-center w-full" data-v-17233f26${_scopeId2}><div class="text-tx-regular" data-v-17233f26${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: item.icon,
                      size: 20
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="mt-2" data-v-17233f26${_scopeId2}>${ssrInterpolate(item.name)}</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col items-center w-full" }, [
                        createVNode("div", { class: "text-tx-regular" }, [
                          createVNode(_component_Icon, {
                            name: item.icon,
                            size: 20
                          }, null, 8, ["name"])
                        ]),
                        createVNode("div", { class: "mt-2" }, toDisplayString(item.name), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="border-t border-solid border-br-light pt-[20px]" data-v-17233f26${_scopeId}><div class="flex justify-end" data-v-17233f26${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElButton, {
              link: "",
              onClick: handleLogout
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u9000\u51FA\u767B\u5F55 `);
                } else {
                  return [
                    createTextVNode(" \u9000\u51FA\u767B\u5F55 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-[8px]" }, [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode("div", { class: "flex-1 flex items-center" }, [
                    createVNode(_component_ElAvatar, {
                      class: "flex-none",
                      size: 50,
                      src: unref(userStore).userInfo.avatar
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "ml-[10px]" }, [
                      createVNode("div", { class: "text-lg line-clamp-1" }, toDisplayString(unref(userStore).userInfo.nickname), 1),
                      createVNode("div", {
                        class: "text-xs text-tx-secondary mt-1 cursor-pointer flex items-center",
                        onClick: ($event) => unref(copy)(unref(userStore).userInfo.sn)
                      }, [
                        createTextVNode(" ID\uFF1A" + toDisplayString(unref(userStore).userInfo.sn) + " ", 1),
                        createVNode(_component_Icon, {
                          class: "ml-1",
                          size: "12",
                          name: "el-icon-CopyDocument"
                        })
                      ], 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_NuxtLink, { to: "/user/center" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_button, {
                          text: "",
                          bg: "",
                          round: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u4E2A\u4EBA\u4E2D\u5FC3")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "bg-[#eff2fe] mt-[20px] py-[20px] px-[5px] rounded-[10px] dark:bg-[#333]" }, [
                  unref(appStore).getIsShowMember ? (openBlock(), createBlock(_component_NuxtLink, {
                    key: 0,
                    to: "/user/member"
                  }, {
                    default: withCtx(() => {
                      var _a, _b, _c, _d;
                      return [
                        createVNode("div", { class: "flex justify-between px-[20px]" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "text-xl font-medium text-tx-primary" }, toDisplayString(unref(userStore).userInfo.package_name || ((_b = (_a = unref(decorate)) == null ? void 0 : _a.content) == null ? void 0 : _b.title)), 1),
                            createVNode("div", { class: "text-tx-secondary text-sm mt-[10px]" }, toDisplayString(unref(userStore).userInfo.package_time ? `\u6709\u6548\u671F\u81F3\uFF1A${unref(userStore).userInfo.package_time}` : (_d = (_c = unref(decorate)) == null ? void 0 : _c.content) == null ? void 0 : _d.sub_title), 1)
                          ]),
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(_component_el_button, {
                              text: "",
                              bg: "",
                              round: "",
                              class: "dark:!bg-[#1b1c1d] !bg-white"
                            }, {
                              default: withCtx(() => {
                                var _a2, _b2, _c2, _d2, _e;
                                return [
                                  ((_a2 = unref(userStore).userInfo) == null ? void 0 : _a2.package_is_overdue) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(userStore).userInfo.package_name ? "\u7ACB\u5373\u5F00\u901A" : (_c2 = (_b2 = unref(decorate)) == null ? void 0 : _b2.content) == null ? void 0 : _c2.btn), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(userStore).userInfo.package_name ? "\u7ACB\u5373\u7EED\u8D39" : (_e = (_d2 = unref(decorate)) == null ? void 0 : _d2.content) == null ? void 0 : _e.btn), 1))
                                ];
                              }),
                              _: 1
                            })
                          ])
                        ])
                      ];
                    }),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode("div", { class: "flex mt-[20px]" }, [
                    createVNode("div", { class: "flex-1 flex flex-col items-center px-[5px]" }, [
                      createVNode("span", { class: "text-md text-primary text-center font-bold" }, toDisplayString(unref(userStore).userInfo.balance), 1),
                      createVNode("span", { class: "text-xs mt-[5px]" }, toDisplayString(unref(appStore).getTokenUnit) + "\u6570\u91CF", 1)
                    ]),
                    createVNode("div", { class: "flex-1 flex flex-col items-center px-[5px]" }, [
                      createVNode("span", { class: "text-md text-primary text-center font-bold" }, toDisplayString(unref(userStore).userInfo.robot_num), 1),
                      createVNode("span", { class: "text-xs mt-[5px]" }, "\u667A\u80FD\u4F53")
                    ])
                  ])
                ]),
                createVNode("div", { class: "py-[20px] flex" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(menu), (item) => {
                    return openBlock(), createBlock(_component_NuxtLink, {
                      class: "w-[33.3%] flex",
                      key: item.path,
                      to: item.path
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-col items-center w-full" }, [
                          createVNode("div", { class: "text-tx-regular" }, [
                            createVNode(_component_Icon, {
                              name: item.icon,
                              size: 20
                            }, null, 8, ["name"])
                          ]),
                          createVNode("div", { class: "mt-2" }, toDisplayString(item.name), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to"]);
                  }), 128))
                ]),
                createVNode("div", { class: "border-t border-solid border-br-light pt-[20px]" }, [
                  createVNode("div", { class: "flex justify-end" }, [
                    createVNode(_component_ElButton, {
                      link: "",
                      onClick: handleLogout
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u9000\u51FA\u767B\u5F55 ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/header/user-info.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const userInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-17233f26"]]);

export { userInfo as default };
//# sourceMappingURL=user-info-l98cbsTN.mjs.map
