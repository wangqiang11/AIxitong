import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { a5 as useAppStore } from './server.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "layout-footer flex justify-center text-center text-xs py-[8px] bg-transparent" }, _attrs))}><div class="ml-2 text-tx-secondary"><!--[-->`);
      ssrRenderList(unref(appStore).getCopyrightConfig, (item) => {
        _push(`<!--[-->`);
        if (item.key) {
          _push(`<a class="inline-flex items-center justify-center mx-2 hover:underline"${ssrRenderAttr("href", item.value)} target="_blank">`);
          if (item.icon) {
            _push(`<img${ssrRenderAttr("src", item.icon)} alt="\u5907\u6848\u53F7" style="${ssrRenderStyle({ "width": "20px", "height": "20px" })}">`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="ml-1">${ssrInterpolate(item.key)}</span></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/footer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DVowbRlP.mjs.map
