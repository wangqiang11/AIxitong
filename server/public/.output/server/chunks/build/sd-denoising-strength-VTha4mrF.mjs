import { E as ElSlider } from './el-slider-LwCMMHAn.mjs';
import { defineComponent, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import _sfc_main$1 from './sidbar-item-title-aTPs1IEb.mjs';
import { useVModels } from '@vueuse/core';
import './el-input-number-DH6NTUUv.mjs';
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
import './index-iSFXrlfY.mjs';
import '@popperjs/core';
import './index-L-VTEUEA.mjs';
import './index-CJqYHNUB.mjs';
import './dropdown-C6fgV-Vy.mjs';
import './index-BoqjHllR.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sd-denoising-strength",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: 0.75 }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const { modelValue } = useVModels(props, emit);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_slider = ElSlider;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "\u91CD\u7ED8\u5F3A\u5EA6",
        required: "",
        tips: "\u4F4E\uFF1A\u8D8A\u63A5\u8FD1\u539F\u56FE \u9AD8\uFF1A\u8D8A\u5145\u6EE1\u521B\u610F"
      }, null, _parent));
      _push(`<div class="flex gap-4 items-center pl-3">`);
      _push(ssrRenderComponent(_component_el_slider, {
        modelValue: unref(modelValue),
        "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : null,
        step: 0.01,
        max: 1
      }, null, _parent));
      _push(`<span>${ssrInterpolate(unref(modelValue))}</span></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/sd/sd-denoising-strength.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sd-denoising-strength-VTha4mrF.mjs.map
