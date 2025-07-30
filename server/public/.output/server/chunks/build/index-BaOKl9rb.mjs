import { a5 as useAppStore, aI as getDecorate, aH as search_default, ah as __nuxt_component_0, E as ElInput, d as ElButton } from './server.mjs';
import { W as Waterfall } from './index-CbOzFVxN.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-l5zPv3vf.mjs';
import { _ as _sfc_main$1 } from './index-L3E_sDO1.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { useSSRContext, defineComponent, withAsyncContext, ref, computed, withCtx, unref, isRef, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { e as emptyImg } from './empty_con-BDdV71_z.mjs';
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
import '@vueuse/core';
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './position-DVxxNIGX.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { getImageUrl } = useAppStore();
    const { data: pages } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => getDecorate({ id: 11 }), {
      transform: (value) => {
        const content = JSON.parse(value.data)[0].content;
        content.data = content.data.filter((item) => item.is_show == 1) || [];
        return content;
      },
      default() {
        return [];
      }
    }, "$SwzDsnqXhy")), __temp = await __temp, __restore(), __temp);
    const searchQuery = ref("");
    const filteredApps = ref(pages.value.data || []);
    const filterApps = () => {
      const query = searchQuery.value.trim().toLowerCase();
      if (query === "") {
        filteredApps.value = pages.value.data;
      } else {
        filteredApps.value = pages.value.data.filter((item) => {
          const title = item.title.toLowerCase();
          const desc = item.desc.toLowerCase();
          return title.includes(query) || desc.includes(query);
        });
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
    const getTitleColor = computed(() => {
      return (type) => {
        switch (type) {
          case 1:
            return "text-black";
          case 2:
            return "text-white";
          case 3:
            return "text-primary";
        }
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_el_input = ElInput;
      const _component_Waterfall = Waterfall;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_OverflowTooltip = _sfc_main$1;
      const _component_ElButton = ElButton;
      const _component_el_image = ElImage;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-7e173420>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(`<div class="app-center" data-v-7e173420${_scopeId}><header class="header flex-none flex flex-col justify-center items-center m-[16px] rounded-[12px] overflow-hidden" style="${ssrRenderStyle({
              "background-image": `url(${unref(getImageUrl)(
                (_a = unref(pages)) == null ? void 0 : _a.pc_background
              )})`
            })}" data-v-7e173420${_scopeId}><div class="${ssrRenderClass([unref(getTitleColor)((_b = unref(pages)) == null ? void 0 : _b.pc_text_color), "font-medium 2xl:text-[50px] xl:text-[40px] lg:text-[36px] text-[36px]"])}" data-v-7e173420${_scopeId}>${ssrInterpolate((_c = unref(pages)) == null ? void 0 : _c.pc_title)}</div><div class="2xl:max-w-[880px] xl:max-w-[780px] lg:max-w-[680px] max-w-[680px] search w-full mt-4" data-v-7e173420${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_input, {
              size: "large",
              class: "2xl:h-[54px] xl:h-[48px] lg:h-[44px]",
              style: { "--el-border-color": "transparent" },
              modelValue: unref(searchQuery),
              "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
              "prefix-icon": unref(search_default),
              placeholder: "\u8F93\u5165\u60A8\u60F3\u641C\u7D22\u7684\u5E94\u7528",
              onInput: filterApps
            }, null, _parent2, _scopeId));
            _push2(`</div></header><div data-v-7e173420${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Waterfall, {
              ref: "waterFull",
              delay: 100,
              list: unref(filteredApps),
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
              item: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="card-item px-[20px] py-[24px] bg-body rounded-[12px] gap-y-[20px]" data-v-7e173420${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: item.pcLink.path
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex justify-between" data-v-7e173420${_scopeId3}><div class="mr-2" data-v-7e173420${_scopeId3}><div class="text-tx-primary text-xl" data-v-7e173420${_scopeId3}>${ssrInterpolate(item.title)}</div><div class="text-tx-secondary text-base mt-[10px]" data-v-7e173420${_scopeId3}>`);
                        if (item.desc) {
                          _push4(ssrRenderComponent(_component_OverflowTooltip, {
                            content: item.desc,
                            teleported: true,
                            effect: "light",
                            placement: "right"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div class="mt-[20px] show-btn" data-v-7e173420${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ElButton, {
                          class: "!border-none",
                          type: "primary"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u53BB\u8BD5\u8BD5 `);
                            } else {
                              return [
                                createTextVNode(" \u53BB\u8BD5\u8BD5 ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`</div></div><div class="flex-none py-[8px]" data-v-7e173420${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_image, {
                          src: unref(getImageUrl)(item.image),
                          class: "w-[82px] h-[82px] rounded-[18px]"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex justify-between" }, [
                            createVNode("div", { class: "mr-2" }, [
                              createVNode("div", { class: "text-tx-primary text-xl" }, toDisplayString(item.title), 1),
                              createVNode("div", { class: "text-tx-secondary text-base mt-[10px]" }, [
                                item.desc ? (openBlock(), createBlock(_component_OverflowTooltip, {
                                  key: 0,
                                  content: item.desc,
                                  teleported: true,
                                  effect: "light",
                                  placement: "right"
                                }, null, 8, ["content"])) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "mt-[20px] show-btn" }, [
                                createVNode(_component_ElButton, {
                                  class: "!border-none",
                                  type: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u53BB\u8BD5\u8BD5 ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("div", { class: "flex-none py-[8px]" }, [
                              createVNode(_component_el_image, {
                                src: unref(getImageUrl)(item.image),
                                class: "w-[82px] h-[82px] rounded-[18px]"
                              }, null, 8, ["src"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "card-item px-[20px] py-[24px] bg-body rounded-[12px] gap-y-[20px]" }, [
                      createVNode(_component_NuxtLink, {
                        to: item.pcLink.path
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex justify-between" }, [
                            createVNode("div", { class: "mr-2" }, [
                              createVNode("div", { class: "text-tx-primary text-xl" }, toDisplayString(item.title), 1),
                              createVNode("div", { class: "text-tx-secondary text-base mt-[10px]" }, [
                                item.desc ? (openBlock(), createBlock(_component_OverflowTooltip, {
                                  key: 0,
                                  content: item.desc,
                                  teleported: true,
                                  effect: "light",
                                  placement: "right"
                                }, null, 8, ["content"])) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "mt-[20px] show-btn" }, [
                                createVNode(_component_ElButton, {
                                  class: "!border-none",
                                  type: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u53BB\u8BD5\u8BD5 ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("div", { class: "flex-none py-[8px]" }, [
                              createVNode(_component_el_image, {
                                src: unref(getImageUrl)(item.image),
                                class: "w-[82px] h-[82px] rounded-[18px]"
                              }, null, 8, ["src"])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (((_d = unref(filteredApps)) == null ? void 0 : _d.length) === 0) {
              _push2(`<div class="flex flex-col justify-center items-center w-full" data-v-7e173420${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_image, {
                class: "w-[200px] h-[200px]",
                src: unref(emptyImg)
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-tx-regular mb-4" data-v-7e173420${_scopeId}> \u627E\u4E0D\u5230\u66F4\u591A\u5E94\u7528\u4E86\uFF5E </div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "app-center" }, [
                createVNode("header", {
                  class: "header flex-none flex flex-col justify-center items-center m-[16px] rounded-[12px] overflow-hidden",
                  style: {
                    "background-image": `url(${unref(getImageUrl)(
                      (_e = unref(pages)) == null ? void 0 : _e.pc_background
                    )})`
                  }
                }, [
                  createVNode("div", {
                    class: ["font-medium 2xl:text-[50px] xl:text-[40px] lg:text-[36px] text-[36px]", unref(getTitleColor)((_f = unref(pages)) == null ? void 0 : _f.pc_text_color)]
                  }, toDisplayString((_g = unref(pages)) == null ? void 0 : _g.pc_title), 3),
                  createVNode("div", { class: "2xl:max-w-[880px] xl:max-w-[780px] lg:max-w-[680px] max-w-[680px] search w-full mt-4" }, [
                    createVNode(_component_el_input, {
                      size: "large",
                      class: "2xl:h-[54px] xl:h-[48px] lg:h-[44px]",
                      style: { "--el-border-color": "transparent" },
                      modelValue: unref(searchQuery),
                      "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                      "prefix-icon": unref(search_default),
                      placeholder: "\u8F93\u5165\u60A8\u60F3\u641C\u7D22\u7684\u5E94\u7528",
                      onInput: filterApps
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                  ])
                ], 4),
                createVNode("div", null, [
                  createVNode(_component_Waterfall, {
                    ref: "waterFull",
                    delay: 100,
                    list: unref(filteredApps),
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
                    item: withCtx(({ item }) => [
                      createVNode("div", { class: "card-item px-[20px] py-[24px] bg-body rounded-[12px] gap-y-[20px]" }, [
                        createVNode(_component_NuxtLink, {
                          to: item.pcLink.path
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex justify-between" }, [
                              createVNode("div", { class: "mr-2" }, [
                                createVNode("div", { class: "text-tx-primary text-xl" }, toDisplayString(item.title), 1),
                                createVNode("div", { class: "text-tx-secondary text-base mt-[10px]" }, [
                                  item.desc ? (openBlock(), createBlock(_component_OverflowTooltip, {
                                    key: 0,
                                    content: item.desc,
                                    teleported: true,
                                    effect: "light",
                                    placement: "right"
                                  }, null, 8, ["content"])) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "mt-[20px] show-btn" }, [
                                  createVNode(_component_ElButton, {
                                    class: "!border-none",
                                    type: "primary"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u53BB\u8BD5\u8BD5 ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              createVNode("div", { class: "flex-none py-[8px]" }, [
                                createVNode(_component_el_image, {
                                  src: unref(getImageUrl)(item.image),
                                  class: "w-[82px] h-[82px] rounded-[18px]"
                                }, null, 8, ["src"])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["list"]),
                  ((_h = unref(filteredApps)) == null ? void 0 : _h.length) === 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex flex-col justify-center items-center w-full"
                  }, [
                    createVNode(_component_el_image, {
                      class: "w-[200px] h-[200px]",
                      src: unref(emptyImg)
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "text-tx-regular mb-4" }, " \u627E\u4E0D\u5230\u66F4\u591A\u5E94\u7528\u4E86\uFF5E ")
                  ])) : createCommentVNode("", true)
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app_center/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7e173420"]]);

export { index as default };
//# sourceMappingURL=index-BaOKl9rb.mjs.map
