import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import CanvasDisplay from './canvas-display-CTT-1p6j.mjs';
import _sfc_main$1 from './center-top-C9U-ZCT8.mjs';
import _sfc_main$2 from './center-setting-DPq2Wa2F.mjs';
import '@vueuse/core';
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
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './canvas-DJ4hjlD7.mjs';
import './useAudioPlay-C6V9947w.mjs';
import './file-RP6bCPT_.mjs';
import 'jsdom';
import 'jsdom/lib/jsdom/living/generated/utils';
import 'jsdom/lib/jsdom/utils';
import 'fontfaceobserver';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './select-music-BQ-v2cow.mjs';
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './index-L3E_sDO1.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-BoqjHllR.mjs';
import './select-dub-5jeBvqY_.mjs';
import './index-DLL0sEcv.mjs';
import 'async-validator';
import './el-radio-group-PXDiQVwm.mjs';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElScrollbar = ElScrollbar;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col" }, _attrs))}><div class="flex-1 min-h-0 max-w-[800px] w-full mx-auto">`);
      _push(ssrRenderComponent(_component_ElScrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-main"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CanvasDisplay, { class: "mt-[16px]" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, { class: "mt-[16px]" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-main" }, [
                createVNode(_sfc_main$1),
                createVNode(CanvasDisplay, { class: "mt-[16px]" }),
                createVNode(_sfc_main$2, { class: "mt-[16px]" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/_components/design-center/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-k70exgaE.mjs.map
