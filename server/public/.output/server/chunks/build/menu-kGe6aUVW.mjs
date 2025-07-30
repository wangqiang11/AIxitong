import { E as ElMenu } from './el-menu-item-DBjUF0xW.mjs';
import { a5 as useAppStore, ag as useRoute } from './server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import MenuItem from './menu-item-syjwFhcv.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import 'lodash-unified';
import './index-DadLUs6d.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import '@vue/shared';
import '@ctrl/tinycolor';
import './index-5Ia44xzE.mjs';
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
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './index-DLVgZG5d.mjs';
import './nuxt-link-l5zPv3vf.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "menu",
  __ssrInlineRender: true,
  props: {
    isHome: { type: Boolean }
  },
  setup(__props) {
    const appStore = useAppStore();
    const menuList = computed(() => {
      var _a;
      return ((_a = appStore.pageAside.menu) == null ? void 0 : _a.filter((item) => Number(item.is_show) === 1)) || [];
    });
    const isShowIcon = computed(() => {
      return appStore.pageAside.showNavIcon;
    });
    const route = useRoute();
    const activeMenu = computed(() => {
      const routePath = route.path === "/" ? route.path : route.path.replace(/\/$/, "");
      return route.meta.parentPath || route.meta.activePath || routePath;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_menu = ElMenu;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu" }, _attrs))} data-v-1b361228>`);
      _push(ssrRenderComponent(_component_el_menu, { "default-active": unref(activeMenu) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(menuList), (item) => {
              _push2(ssrRenderComponent(MenuItem, {
                key: item.id,
                item,
                "is-show-icon": unref(isShowIcon),
                path: item.link.path,
                "is-active": unref(activeMenu) === item.link.path
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(menuList), (item) => {
                return openBlock(), createBlock(MenuItem, {
                  key: item.id,
                  item,
                  "is-show-icon": unref(isShowIcon),
                  path: item.link.path,
                  "is-active": unref(activeMenu) === item.link.path
                }, null, 8, ["item", "is-show-icon", "path", "is-active"]);
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/aside/menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Menu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1b361228"]]);

export { Menu as default };
//# sourceMappingURL=menu-kGe6aUVW.mjs.map
