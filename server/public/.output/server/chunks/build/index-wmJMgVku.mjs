import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import _sfc_main$1 from './title-logo-BNM0flCB.mjs';
import _sfc_main$2 from './user-SBxKtT5H.mjs';
import { a5 as useAppStore } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-l5zPv3vf.mjs';
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
import './index-BoqjHllR.mjs';
import './member-btn-MuRMgKHK.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-header h-full flex items-center" }, _attrs))} data-v-a4fd1a58>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "mr-[50px]",
        logo: unref(appStore).getWebsiteConfig.pc_logo,
        title: unref(appStore).getWebsiteConfig.pc_name
      }, null, _parent));
      _push(`<div class="flex-1 min-w-0" data-v-a4fd1a58><div class="" data-v-a4fd1a58>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$2, { class: "ml-auto" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/header/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LayoutHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a4fd1a58"]]);

export { LayoutHeader as default };
//# sourceMappingURL=index-wmJMgVku.mjs.map
