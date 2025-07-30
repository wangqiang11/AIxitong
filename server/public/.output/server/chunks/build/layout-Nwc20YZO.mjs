import { ag as useRoute, ah as __nuxt_component_0$1, b4 as __nuxt_component_1$1 } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, withCtx, unref, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex" }, _attrs))} data-v-585af5cb><div class="flex bg-body p-[8px] rounded-[10px]" data-v-585af5cb><!--[-->`);
      ssrRenderList(_ctx.navList, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.path,
          to: item.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([{
                "text-white bg-primary": item.path == unref(currentPath)
              }, "text-xl px-[17.5px] py-[5px] rounded-[7px] min-w-[85px] text-center font-bold"])}" data-v-585af5cb${_scopeId}>${ssrInterpolate(item.name)}</div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["text-xl px-[17.5px] py-[5px] rounded-[7px] min-w-[85px] text-center font-bold", {
                    "text-white bg-primary": item.path == unref(currentPath)
                  }]
                }, toDisplayString(item.name), 3)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/nav-list/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-585af5cb"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "layout",
  __ssrInlineRender: true,
  setup(__props) {
    const navList = [
      {
        name: "\u667A\u80FD\u4F53",
        path: "/application/layout/robot"
      },
      {
        name: "\u667A\u80FD\u4F53\u5F62\u8C61",
        path: "/application/layout/digital"
      },
      {
        name: "\u77E5\u8BC6\u5E93",
        path: "/application/layout/kb"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_NavList = __nuxt_component_1;
      const _component_NuxtPage = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-8125b6d3>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full flex flex-col" data-v-8125b6d3${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NavList, {
              class: "px-[20px] pt-[16px]",
              "nav-list": navList
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex-1 min-h-0" data-v-8125b6d3${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "h-full flex flex-col" }, [
                createVNode(_component_NavList, {
                  class: "px-[20px] pt-[16px]",
                  "nav-list": navList
                }),
                createVNode("div", { class: "flex-1 min-h-0" }, [
                  createVNode(_component_NuxtPage)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8125b6d3"]]);

export { layout as default };
//# sourceMappingURL=layout-Nwc20YZO.mjs.map
