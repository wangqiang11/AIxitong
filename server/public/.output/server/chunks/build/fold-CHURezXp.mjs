import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a5 as useAppStore } from './server.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "fold",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    const isCollapsed = computed(() => appStore.isCollapsed);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fold h-full cursor-pointer flex items-center pr-2 text-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: `local-icon-${unref(isCollapsed) ? "close" : "open"}`,
        size: 24
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/header/fold.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=fold-CHURezXp.mjs.map
