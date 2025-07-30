import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { ag as useRoute, a5 as useAppStore } from './server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@vueuse/core';
import 'lodash-unified';
import './position-DVxxNIGX.mjs';
import '@vue/shared';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const appStore = useAppStore();
    const navList = computed(() => {
      var _a, _b;
      return ((_b = (_a = appStore.getHeaderConfig) == null ? void 0 : _a.nav) == null ? void 0 : _b.filter((item) => item.isShow)) || [];
    });
    const currentPath = computed(() => {
      const routePath = route.path === "/" ? route.path : route.path.replace(/\/$/, "");
      return route.meta.parentPath || route.meta.activePath || routePath;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_el_image = ElImage;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tabbar" }, _attrs))} data-v-4afcc8ee><div class="tabbar__content" data-v-4afcc8ee><!--[-->`);
      ssrRenderList(unref(navList), (item, index2) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: {
            path: item.link.path,
            replace: true
          },
          class: "flex-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([{
                active: unref(currentPath) === item.link.path
              }, "tabbar__content__item w-full"])}" data-v-4afcc8ee${_scopeId}><div class="tabbar__content__item__icon" data-v-4afcc8ee${_scopeId}>`);
              if (unref(currentPath) === item.link.path) {
                _push2(ssrRenderComponent(_component_el_image, {
                  class: "w-[18px] h-[18px]",
                  src: unref(appStore).getImageUrl(item.selected)
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_el_image, {
                  class: "w-[18px] h-[18px]",
                  src: unref(appStore).getImageUrl(item.unselected)
                }, null, _parent2, _scopeId));
              }
              _push2(`</div><div class="tabbar__content__item__text" data-v-4afcc8ee${_scopeId}>${ssrInterpolate(item.name)}</div></div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["tabbar__content__item w-full", {
                    active: unref(currentPath) === item.link.path
                  }]
                }, [
                  createVNode("div", { class: "tabbar__content__item__icon" }, [
                    unref(currentPath) === item.link.path ? (openBlock(), createBlock(_component_el_image, {
                      key: 0,
                      class: "w-[18px] h-[18px]",
                      src: unref(appStore).getImageUrl(item.selected)
                    }, null, 8, ["src"])) : (openBlock(), createBlock(_component_el_image, {
                      key: 1,
                      class: "w-[18px] h-[18px]",
                      src: unref(appStore).getImageUrl(item.unselected)
                    }, null, 8, ["src"]))
                  ]),
                  createVNode("div", { class: "tabbar__content__item__text" }, toDisplayString(item.name), 1)
                ], 2)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/tabbar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4afcc8ee"]]);

export { index as default };
//# sourceMappingURL=index-BKXlXc_X.mjs.map
