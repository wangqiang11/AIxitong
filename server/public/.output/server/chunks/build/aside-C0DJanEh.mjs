import { ag as useRoute, ah as __nuxt_component_0, b4 as __nuxt_component_1 } from './server.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElMenu, a as ElMenuItem } from './el-menu-item-DBjUF0xW.mjs';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, computed, unref, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
import './index-DadLUs6d.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-5Ia44xzE.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    navList: {}
  },
  setup(__props) {
    const route = useRoute();
    const currentPath = computed(() => {
      const routePath = route.path === "/" ? route.path : route.path.replace(/\/$/, "");
      return route.meta.activePath || routePath;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_menu = ElMenu;
      const _component_el_menu_item = ElMenuItem;
      const _component_Icon = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tab-list" }, _attrs))} data-v-317921ce>`);
      _push(ssrRenderComponent(_component_el_menu, {
        "default-active": unref(currentPath),
        router: "",
        style: { "border": "none" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.navList, (item) => {
              _push2(ssrRenderComponent(_component_el_menu_item, {
                key: item.path,
                index: item.path
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="menu-icon" data-v-317921ce${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      size: 20,
                      name: item.icon
                    }, null, _parent3, _scopeId2));
                    _push3(`</span><span class="mt-[10px] text-sm" data-v-317921ce${_scopeId2}>${ssrInterpolate(item.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "menu-icon" }, [
                        createVNode(_component_Icon, {
                          size: 20,
                          name: item.icon
                        }, null, 8, ["name"])
                      ]),
                      createVNode("span", { class: "mt-[10px] text-sm" }, toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.navList, (item) => {
                return openBlock(), createBlock(_component_el_menu_item, {
                  key: item.path,
                  index: item.path
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "menu-icon" }, [
                      createVNode(_component_Icon, {
                        size: 20,
                        name: item.icon
                      }, null, 8, ["name"])
                    ]),
                    createVNode("span", { class: "mt-[10px] text-sm" }, toDisplayString(item.name), 1)
                  ]),
                  _: 2
                }, 1032, ["index"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout-side/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-317921ce"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "aside",
  __ssrInlineRender: true,
  setup(__props) {
    const navList = [
      {
        name: "\u89C6\u9891\u5408\u6210",
        icon: "el-icon-VideoCamera",
        path: "/digital_human/aside/video_compositing"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ElScrollbar = ElScrollbar;
      const _component_LayoutSide = __nuxt_component_2;
      const _component_NuxtPage = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        panel: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white flex flex-col h-full w-[150px] text-tx-primary tab-list"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElScrollbar, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LayoutSide, { "nav-list": navList }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_LayoutSide, { "nav-list": navList })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white flex flex-col h-full w-[150px] text-tx-primary tab-list" }, [
                createVNode(_component_ElScrollbar, null, {
                  default: withCtx(() => [
                    createVNode(_component_LayoutSide, { "nav-list": navList })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/aside.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=aside-C0DJanEh.mjs.map
