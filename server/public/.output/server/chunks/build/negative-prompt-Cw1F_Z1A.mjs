import { E as ElInput } from './server.mjs';
import { defineComponent, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$1 from './sidbar-item-title-aTPs1IEb.mjs';
import { useVModels } from '@vueuse/core';
import { b as checkUserLogin } from './useDrawEffect-B2jxDCVi.mjs';
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
import './index-CJqYHNUB.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './dropdown-C6fgV-Vy.mjs';
import './index-BoqjHllR.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './usePaging-DU8sXki3.mjs';
import './usePolling-DOP50YcO.mjs';
import './DrawEnum-CqAPEJOR.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "negative-prompt",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const { modelValue: value } = useVModels(props, emit);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = ElInput;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "\u53CD\u5411\u8BCD",
        tips: "\u8F93\u5165\u4F60\u5E0C\u671BAI\u7ED8\u5236\u7684\u5185\u5BB9\uFF0C\u4F8B\u5982\uFF1Awhite hair,sit\uFF0C\u8FD9\u6837AI\u5C3D\u53EF\u80FD\u907F\u514D\u7ED8\u5236\u767D\u8272\u7684\u6BDB\u53D1\u548C\u5750\u7740\u7684\u59FF\u52BF"
      }, null, _parent));
      _push(`<div class="bg-[var(--el-bg-color-page)] rounded-[12px]">`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        rows: 4,
        "input-style": {
          boxShadow: "unset",
          backgroundColor: "transparent"
        },
        resize: "none",
        type: "textarea",
        placeholder: "\u8BF7\u8F93\u5165\u53CD\u5411\u63D0\u793A\u8BCD",
        onFocus: unref(checkUserLogin)
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/common/negative-prompt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=negative-prompt-Cw1F_Z1A.mjs.map
