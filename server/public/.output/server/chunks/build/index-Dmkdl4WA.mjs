import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$1 from './drawer-3xI8Gnm9.mjs';
import { bs as useSettingStore } from './server.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './el-drawer-C2UOPjce.mjs';
import './use-dialog-DHq_GjFf.mjs';
import '@vueuse/core';
import 'lodash-unified';
import './el-color-picker-BpaTgxgG.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import '@vue/shared';
import './position-DVxxNIGX.mjs';
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
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSettingStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "setting flex cursor-pointer h-full items-center pl-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Icon, {
        size: 20,
        name: "local-icon-dianpu_fengge"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/setting/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dmkdl4WA.mjs.map
