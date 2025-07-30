import { E as ElInput } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$1 from './search-model-BZBVjp2U.mjs';
import _sfc_main$2 from './search-btn-Bu4r_Ca5.mjs';
import { useSearch } from './useSearch-BaJoxou4.mjs';
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
import './index-BoqjHllR.mjs';
import './el-segmented-KMsqQ2AI.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-CJqYHNUB.mjs';
import './dropdown-C6fgV-Vy.mjs';
import './index-D7S5lb8a.mjs';
import './useTemplate-BMZ5OoC1.mjs';
import './search-type-BDTcaOnm.mjs';
import './searchEnums-Dgcx5RT8.mjs';
import './search-DBP7Ii5U.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "input-select",
  __ssrInlineRender: true,
  setup(__props) {
    const { options, launchSearch } = useSearch();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = ElInput;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-page overflow-hidden flex items-center input-select" }, _attrs))} data-v-f9d3468d><div class="flex-none flex px-[8px]" data-v-f9d3468d>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        mode: "dropdown",
        model: unref(options).model,
        "onUpdate:model": ($event) => unref(options).model = $event,
        type: unref(options).type,
        "onUpdate:type": ($event) => unref(options).type = $event
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: unref(options).ask,
        "onUpdate:modelValue": ($event) => unref(options).ask = $event,
        placeholder: "\u8F93\u5165\u4F60\u60F3\u641C\u7D22\u7684\u95EE\u9898",
        onKeydown: ($event) => unref(launchSearch)()
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        onClick: ($event) => unref(launchSearch)()
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/_components/search-result/input-select.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f9d3468d"]]);

export { InputSelect as default };
//# sourceMappingURL=input-select-BWZY0ed0.mjs.map
