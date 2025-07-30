import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import SelectMusic from './select-music-BQ-v2cow.mjs';
import SelectDub from './select-dub-5jeBvqY_.mjs';
import './index-C2yEelJa.mjs';
import '@vueuse/core';
import 'lodash-unified';
import './server.mjs';
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
import '@vue/shared';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './position-DVxxNIGX.mjs';
import './index-L3E_sDO1.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-BoqjHllR.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './canvas-DJ4hjlD7.mjs';
import './useAudioPlay-C6V9947w.mjs';
import './file-RP6bCPT_.mjs';
import 'jsdom';
import 'jsdom/lib/jsdom/living/generated/utils';
import 'jsdom/lib/jsdom/utils';
import 'fontfaceobserver';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "center-top",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex" }, _attrs))}>`);
      _push(ssrRenderComponent(SelectMusic, { class: "mr-[20px]" }, null, _parent));
      _push(ssrRenderComponent(SelectDub, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/_components/design-center/center-top.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=center-top-C9U-ZCT8.mjs.map
