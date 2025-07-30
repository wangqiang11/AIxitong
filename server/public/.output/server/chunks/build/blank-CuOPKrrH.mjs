import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$1 from './index-BDwPtStU.mjs';
import './index-CzJm6kkT.mjs';
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
import '@vueuse/core';
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './index-BZwsOHV2.mjs';
import './el-tab-pane-C7DQ8faq.mjs';
import './strings-D1uxkXhq.mjs';
import './index-C5I0EtSx.mjs';
import './nuxt-link-l5zPv3vf.mjs';
import './mobile-login-CIZyd954.mjs';
import './index-DLL0sEcv.mjs';
import 'async-validator';
import './index-CUhOTuS-.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-0xCxAaTZ.mjs';
import './index-D7S5lb8a.mjs';
import './index-5Ia44xzE.mjs';
import './index-6v4EX2UV.mjs';
import '@chenfengyuan/vue-countdown';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './useLockFn-BWbjkhBs.mjs';
import './mailbox-login-DTfJ6zDd.mjs';
import './weixin-login-C37aKzsA.mjs';
import './index-BoqjHllR.mjs';
import './usePolling-DOP50YcO.mjs';
import './forgot-pwd-DSRa74TH.mjs';
import './index-SK82_cfs.mjs';
import './bind-mobile-DCW2ViFa.mjs';
import './bind-weixin-CghyAKzM.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blank",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "layout-blank" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/blank.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blank-CuOPKrrH.mjs.map
