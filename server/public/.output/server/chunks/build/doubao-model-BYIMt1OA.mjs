import { _ as _sfc_main$2 } from './index-D8NbhMns.mjs';
import { _ as _sfc_main$3 } from './index-BoqjHllR.mjs';
import { defineComponent, ref, watch, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { useVModels } from '@vueuse/core';
import _sfc_main$1 from './sidbar-item-title-aTPs1IEb.mjs';
import { a as config } from './useDrawEffect-B2jxDCVi.mjs';
import './index-C2yEelJa.mjs';
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
import './index-DVLwoLV9.mjs';
import 'video.js';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-CJqYHNUB.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './dropdown-C6fgV-Vy.mjs';
import './usePaging-DU8sXki3.mjs';
import './usePolling-DOP50YcO.mjs';
import './DrawEnum-CqAPEJOR.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "doubao-model",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" },
    draw_type: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const { modelValue: currentModel } = useVModels(props, emit);
    const currentIndex = ref("general");
    watch(() => props.draw_type, () => {
      var _a, _b, _c;
      currentModel.value = (_c = (_b = (_a = config.value) == null ? void 0 : _a.engine) == null ? void 0 : _b[currentIndex.value]) == null ? void 0 : _c[props.draw_type];
    }, { immediate: false });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_aspect_ratio = _sfc_main$2;
      const _component_Icon = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "\u6A21\u578B\u9009\u62E9",
        required: "",
        tips: "\u6307\u5B9Amidjourney\u7684\u6E32\u67D3\u6A21\u578B"
      }, null, _parent));
      _push(`<div class="grid grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(((_a = unref(config)) == null ? void 0 : _a.engine) || [], (item, name) => {
        _push(`<div class="flex flex-col gap-2"><div class="relative rounded-[12px] overflow-hidden">`);
        _push(ssrRenderComponent(_component_aspect_ratio, {
          class: "rounded-[12px] overflow-hidden bg-[var(--el-bg-color-page)]",
          src: item.icon,
          fit: "cover",
          ratio: [144, 100]
        }, null, _parent));
        _push(`<div class="${ssrRenderClass([{
          "opacity-100": item[_ctx.draw_type] === unref(currentModel)
        }, "absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] w-full h-full flex justify-center items-center transition-opacity opacity-0"])}">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "el-icon-CircleCheckFilled",
          size: 20,
          color: "#fff"
        }, null, _parent));
        _push(`</div></div><div class="text-hidden-2 text-center">${ssrInterpolate(item.title)}</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/doubao/doubao-model.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=doubao-model-BYIMt1OA.mjs.map
