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
  __name: "dalle-style-picker",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "vivid" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const { modelValue: value } = useVModels(props, emit);
    const styleList = [
      {
        value: "vivid",
        label: "\u751F\u52A8"
      },
      {
        value: "natural",
        label: "\u81EA\u7136"
      }
    ];
    value.value = "vivid";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-[15px]" }, _attrs))} data-v-eca3acfd>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "\u98CE\u683C\u9009\u62E9",
        tips: "",
        required: ""
      }, null, _parent));
      _push(`<div class="mt-[10px]" data-v-eca3acfd><!--[-->`);
      ssrRenderList(styleList, (item) => {
        _push(`<div class="${ssrRenderClass([{
          "picture-style-picker__active": item.value === unref(value)
        }, "picture-style-picker rounded-[12px]"])}" data-v-eca3acfd>${ssrInterpolate(item.label)}</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/dalle/dalle-style-picker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DalleStylePicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eca3acfd"]]);

export { DalleStylePicker as default };
//# sourceMappingURL=dalle-style-picker-Dadmq0Mr.mjs.map
