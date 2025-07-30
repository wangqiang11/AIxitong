import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { a5 as useAppStore } from './server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, withCtx, createVNode, unref, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import Panel from './panel-CZST6D6c.mjs';
import Menu from './menu-kGe6aUVW.mjs';
import Nav from './nav-BWEmvwsg.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import '@vue/shared';
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
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './el-menu-item-DBjUF0xW.mjs';
import './index-DadLUs6d.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-5Ia44xzE.mjs';
import './menu-item-syjwFhcv.mjs';
import './index-DLVgZG5d.mjs';
import './nuxt-link-l5zPv3vf.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    const isMobile = computed(() => appStore.isMobile);
    computed({
      get() {
        return !appStore.isCollapsed && isMobile.value;
      },
      set(value) {
        appStore.toggleCollapsed(!value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElScrollbar = ElScrollbar;
      const _component_Icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-aside h-full flex" }, _attrs))} data-v-e34fcc87><div class="h-full flex justify-between flex-col" data-v-e34fcc87>`);
      _push(ssrRenderComponent(_component_ElScrollbar, { class: "w-[80px] el-scrollbar" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Nav, { class: "mb-auto" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Nav, { class: "mb-auto" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Menu, null, null, _parent));
      _push(`</div><div style="${ssrRenderStyle(!unref(appStore).isCollapsed ? null : { display: "none" })}" class="h-full" data-v-e34fcc87>`);
      _push(ssrRenderComponent(Panel, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
      if (_ctx.$slots.panel && !unref(isMobile)) {
        _push(`<div class="panel-left-arrow" data-v-e34fcc87>`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "mr-1",
          name: `el-icon-${unref(appStore).isCollapsed ? "CaretRight" : "CaretLeft"}`
        }, null, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/aside/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LayoutAside = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e34fcc87"]]);

export { LayoutAside as default };
//# sourceMappingURL=index-Rg7R--Hc.mjs.map
