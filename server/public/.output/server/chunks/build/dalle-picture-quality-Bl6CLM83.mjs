import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { useVModels } from '@vueuse/core';
import _sfc_main$1 from './sidbar-item-title-aTPs1IEb.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-CJqYHNUB.mjs';
import './index-L-VTEUEA.mjs';
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
import '@popperjs/core';
import './dropdown-C6fgV-Vy.mjs';
import './index-BoqjHllR.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dalle-picture-quality",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: {
      version: "",
      style: "standard"
    } }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const { modelValue: value } = useVModels(props, emit);
    const typeList = [
      {
        value: "standard",
        label: "\u6807\u51C6"
      },
      {
        value: "hd",
        label: "HD-\u9AD8\u6E05"
      }
    ];
    value.value = "standard";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-[15px]" }, _attrs))} data-v-cf6c91f6>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "\u56FE\u7247\u8D28\u91CF",
        tips: "",
        required: ""
      }, null, _parent));
      _push(`<div class="mt-[10px]" data-v-cf6c91f6><!--[-->`);
      ssrRenderList(typeList, (item) => {
        _push(`<div class="${ssrRenderClass([{
          "picture-quality-option__active": item.value === unref(value)
        }, "picture-quality-option rounded-[12px]"])}" data-v-cf6c91f6>${ssrInterpolate(item.label)}</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/dalle/dalle-picture-quality.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DallePictureQuality = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cf6c91f6"]]);

export { DallePictureQuality as default };
//# sourceMappingURL=dalle-picture-quality-Bl6CLM83.mjs.map
