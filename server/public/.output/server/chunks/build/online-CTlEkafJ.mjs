import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { a5 as useAppStore, ag as useRoute } from './server.mjs';
import { useSSRContext, defineComponent, ref, computed, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderTeleport, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "online",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    useRoute();
    const show = ref(false);
    const customerData = computed(() => appStore.getOnlineKf);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-009bd42f><div data-v-009bd42f>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div class="chat-container" style="${ssrRenderStyle(unref(show) ? null : { display: "none" })}" data-v-009bd42f><div class="close-icon" data-v-009bd42f>`);
        _push2(ssrRenderComponent(_component_Icon, {
          name: "el-icon-Close",
          size: 18
        }, null, _parent));
        _push2(`</div><iframe width="100%" height="100%" border="none"${ssrRenderAttr("src", unref(customerData).link)} data-v-009bd42f></iframe></div>`);
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/customer/online.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Online = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-009bd42f"]]);

export { Online as default };
//# sourceMappingURL=online-CTlEkafJ.mjs.map
