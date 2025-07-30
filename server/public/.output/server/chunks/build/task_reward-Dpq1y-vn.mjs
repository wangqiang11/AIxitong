import { W as Waterfall } from './index-CbOzFVxN.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { E as ElDropdown, a as ElDropdownMenu, b as ElDropdownItem } from './el-dropdown-item-BcYIrjsW.mjs';
import { a as useRouter, z as useUserStore, a5 as useAppStore, d as ElButton } from './server.mjs';
import { E as ElEmpty } from './el-empty-xbPr04pX.mjs';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, openBlock, createBlock, createCommentVNode, createVNode, toDisplayString, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { d as getShareTaskList, e as getShareId, f as signClick } from './task_reward-DRop0WtE.mjs';
import { u as useCopy } from './useCopy-CfS-iChu.mjs';
import { E as EmptyLayer } from './empty_layer-D7gB2S7C.mjs';
import '@vueuse/core';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'lodash-unified';
import './position-DVxxNIGX.mjs';
import '@vue/shared';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-0xCxAaTZ.mjs';
import './dropdown-C6fgV-Vy.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "task_reward",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { copy } = useCopy();
    const router = useRouter();
    const userStore = useUserStore();
    const { getTokenUnit, config, getImageUrl } = useAppStore();
    const typeMap = {
      1: {
        num: "0/1",
        btn_text: "\u7ACB\u5373\u7B7E\u5230",
        desc: "",
        payload: "\u6BCF\u5929\u7B7E\u5230\uFF0C\u53EF\u83B7\u5F97"
      },
      2: {
        num: "0/10",
        btn_text: "\u590D\u5236\u94FE\u63A5",
        desc: "",
        payload: "\u9080\u8BF71\u4EBA\uFF0C\u53EF\u83B7\u5F97"
      },
      3: {
        num: "0/3",
        btn_text: "\u590D\u5236\u94FE\u63A5",
        desc: "",
        payload: "\u5206\u4EAB1\u6B21\uFF0C\u53EF\u83B7\u5F97"
      },
      4: {
        num: "0/4",
        btn_text: "\u7ACB\u5373\u5206\u4EAB",
        desc: "",
        payload: "\u5206\u4EAB1\u6B21\uFF0C\u53EF\u83B7\u5F97"
      },
      5: {
        num: "0/3",
        btn_text: "\u7ACB\u5373\u5206\u4EAB",
        desc: "",
        payload: "\u5206\u4EAB1\u6B21\uFF0C\u53EF\u83B7\u5F97"
      },
      6: {
        num: "0/3",
        btn_text: "\u7ACB\u5373\u5206\u4EAB",
        desc: "",
        payload: "\u5206\u4EAB1\u6B21\uFF0C\u53EF\u83B7\u5F97"
      },
      7: {
        num: "0/3",
        btn_text: "\u7ACB\u5373\u5206\u4EAB",
        desc: "",
        payload: "\u5206\u4EAB1\u6B21\uFF0C\u53EF\u83B7\u5F97"
      }
    };
    const breakpoints = {
      4e3: { rowPerView: 6 },
      2e3: { rowPerView: 5 },
      1800: { rowPerView: 4 },
      1600: { rowPerView: 4 },
      1440: { rowPerView: 4 },
      1360: { rowPerView: 3 },
      1280: { rowPerView: 3 },
      1024: { rowPerView: 3 }
    };
    const { data, refresh: getData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => getShareTaskList(),
      {
        default() {
          return [];
        },
        lazy: true,
        transform: (data2) => {
          const res = JSON.parse(data2.data);
          return res.filter((item) => {
            var _a, _b, _c;
            if (item.type === 2 || item.type === 3) {
              typeMap[item.type].btn_text = "\u590D\u5236\u94FE\u63A5";
            } else if (item.data.num >= item.data.day_num) {
              typeMap[item.type].btn_text = item.type === 1 ? "\u5DF2\u7B7E\u5230" : "\u5DF2\u5206\u4EAB";
            }
            typeMap[item.type].num = `${(_a = item.data) == null ? void 0 : _a.num}/${(_b = item.data) == null ? void 0 : _b.day_num}`;
            typeMap[item.type].desc = `${typeMap[item.type].payload}${(_c = item.data) == null ? void 0 : _c.one_award}${getTokenUnit}`;
            return item.data.is_open === 1;
          });
        }
      },
      "$BKJAxy6eS7"
    )), __temp = await __temp, __restore(), __temp);
    const handleTask = async (type) => {
      switch (type) {
        case 1:
          await signClick();
          userStore.getUser();
          getData();
          break;
        case 2:
        case 3:
          getShareId().then(({ share_id }) => {
            copy(`\u70B9\u51FB\u4E0B\u65B9\u4E13\u5C5E\u9080\u8BF7\u94FE\u63A5\uFF0C\u5B8C\u6210\u65B0\u7528\u6237\u6CE8\u518C\uFF0C\u5373\u53EF\u83B7\u5F97\u5956\u52B1\uFF01
${config.current_domain}/?share_id=${share_id}`);
          });
          break;
        case 4:
          break;
        case 5:
          await router.push("/video");
          break;
        case 6:
          await router.push("/music");
          break;
        case 7:
          await router.push("/application/layout/robot");
          break;
      }
    };
    const handleDropdownCommand = async (command) => {
      if (command === "mj") {
        await router.push("/draw/mj");
      } else if (command === "dalle") {
        await router.push("/draw/dalle");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Waterfall = Waterfall;
      const _component_el_image = ElImage;
      const _component_el_dropdown = ElDropdown;
      const _component_el_button = ElButton;
      const _component_el_dropdown_menu = ElDropdownMenu;
      const _component_el_dropdown_item = ElDropdownItem;
      const _component_el_empty = ElEmpty;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "task-reward flex flex-col min-h-0 h-full bg-body rounded-[12px]" }, _attrs))}>`);
      if (unref(data).length) {
        _push(`<div class="flex flex-wrap cursor-pointer pr-[20px]">`);
        _push(ssrRenderComponent(_component_Waterfall, {
          ref: "waterFull",
          delay: 100,
          list: unref(data),
          width: 364,
          gutter: 20,
          animationDelay: 0,
          animationDuration: 0,
          backgroundColor: "none",
          animationPrefix: "none",
          animated: "none",
          animationEffect: "none",
          breakpoints
        }, {
          item: withCtx(({ item }, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              _push2(`<div class="p-[30px] bg-page rounded-[12px]"${_scopeId}><div class="flex justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_image, {
                src: item.image,
                class: "w-[70px] h-[70px] rounded-[12px]"
              }, null, _parent2, _scopeId));
              if (item.type === 4) {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_el_dropdown, { onCommand: handleDropdownCommand }, {
                  dropdown: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_el_dropdown_menu, null, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            if (unref(config).switch.mj_status) {
                              _push4(ssrRenderComponent(_component_el_dropdown_item, { command: "mj" }, {
                                default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(` \u53BB\u5206\u4EAB MJ `);
                                  } else {
                                    return [
                                      createTextVNode(" \u53BB\u5206\u4EAB MJ ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            if (unref(config).switch.dalle3_status) {
                              _push4(ssrRenderComponent(_component_el_dropdown_item, { command: "dalle" }, {
                                default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(` \u53BB\u5206\u4EAB DALLE `);
                                  } else {
                                    return [
                                      createTextVNode(" \u53BB\u5206\u4EAB DALLE ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          } else {
                            return [
                              unref(config).switch.mj_status ? (openBlock(), createBlock(_component_el_dropdown_item, {
                                key: 0,
                                command: "mj"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u53BB\u5206\u4EAB MJ ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              unref(config).switch.dalle3_status ? (openBlock(), createBlock(_component_el_dropdown_item, {
                                key: 1,
                                command: "dalle"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u53BB\u5206\u4EAB DALLE ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_el_dropdown_menu, null, {
                          default: withCtx(() => [
                            unref(config).switch.mj_status ? (openBlock(), createBlock(_component_el_dropdown_item, {
                              key: 0,
                              command: "mj"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u53BB\u5206\u4EAB MJ ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            unref(config).switch.dalle3_status ? (openBlock(), createBlock(_component_el_dropdown_item, {
                              key: 1,
                              command: "dalle"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u53BB\u5206\u4EAB DALLE ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_el_button, {
                        style: { "--el-button-bg-color": "#4a92ff" },
                        class: "!border-none",
                        type: "primary"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(typeMap[item.type].btn_text)} <i class="el-icon-arrow-down el-icon--right"${_scopeId3}></i>`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(typeMap[item.type].btn_text) + " ", 1),
                              createVNode("i", { class: "el-icon-arrow-down el-icon--right" })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_el_button, {
                          style: { "--el-button-bg-color": "#4a92ff" },
                          class: "!border-none",
                          type: "primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(typeMap[item.type].btn_text) + " ", 1),
                            createVNode("i", { class: "el-icon-arrow-down el-icon--right" })
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(ssrRenderComponent(_component_el_button, {
                  style: { "--el-button-bg-color": "#4a92ff" },
                  class: "!border-none",
                  type: "primary",
                  disabled: item.data.num >= item.data.day_num,
                  onClick: ($event) => handleTask(item.type)
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(typeMap[item.type].btn_text)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(typeMap[item.type].btn_text), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              }
              _push2(`</div><div${_scopeId}><div class="text-xl font-medium mt-[20px]"${_scopeId}>${ssrInterpolate(item.customName || item.name)} (<span${_scopeId}>${(_a = typeMap[item.type].num) != null ? _a : ""}</span>) </div><div class="text-base text-tx-secondary mt-[5px]"${_scopeId}><div${_scopeId}>${(_b = typeMap[item.type].desc) != null ? _b : ""}</div></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "p-[30px] bg-page rounded-[12px]" }, [
                  createVNode("div", { class: "flex justify-between" }, [
                    createVNode(_component_el_image, {
                      src: item.image,
                      class: "w-[70px] h-[70px] rounded-[12px]"
                    }, null, 8, ["src"]),
                    item.type === 4 ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(_component_el_dropdown, { onCommand: handleDropdownCommand }, {
                        dropdown: withCtx(() => [
                          createVNode(_component_el_dropdown_menu, null, {
                            default: withCtx(() => [
                              unref(config).switch.mj_status ? (openBlock(), createBlock(_component_el_dropdown_item, {
                                key: 0,
                                command: "mj"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u53BB\u5206\u4EAB MJ ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              unref(config).switch.dalle3_status ? (openBlock(), createBlock(_component_el_dropdown_item, {
                                key: 1,
                                command: "dalle"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u53BB\u5206\u4EAB DALLE ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_el_button, {
                            style: { "--el-button-bg-color": "#4a92ff" },
                            class: "!border-none",
                            type: "primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(typeMap[item.type].btn_text) + " ", 1),
                              createVNode("i", { class: "el-icon-arrow-down el-icon--right" })
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ])) : (openBlock(), createBlock(_component_el_button, {
                      key: 1,
                      style: { "--el-button-bg-color": "#4a92ff" },
                      class: "!border-none",
                      type: "primary",
                      disabled: item.data.num >= item.data.day_num,
                      onClick: withModifiers(($event) => handleTask(item.type), ["stop"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(typeMap[item.type].btn_text), 1)
                      ]),
                      _: 2
                    }, 1032, ["disabled", "onClick"]))
                  ]),
                  createVNode("div", null, [
                    createVNode("div", { class: "text-xl font-medium mt-[20px]" }, [
                      createTextVNode(toDisplayString(item.customName || item.name) + " (", 1),
                      createVNode("span", {
                        innerHTML: typeMap[item.type].num
                      }, null, 8, ["innerHTML"]),
                      createTextVNode(") ")
                    ]),
                    createVNode("div", { class: "text-base text-tx-secondary mt-[5px]" }, [
                      createVNode("div", {
                        innerHTML: typeMap[item.type].desc
                      }, null, 8, ["innerHTML"])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="flex items-center justify-center h-full">`);
        _push(ssrRenderComponent(_component_el_empty, {
          image: unref(EmptyLayer),
          "image-size": 250,
          description: "\u6682\u65E0\u4EFB\u52A1\u5956\u52B1"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index/task_reward.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=task_reward-Dpq1y-vn.mjs.map
