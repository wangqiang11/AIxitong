import { useSSRContext, defineComponent, reactive, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import _sfc_main$1 from './sidbar-item-title-aTPs1IEb.mjs';
import { useVModels } from '@vueuse/core';
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
  __name: "doubao-picture-size",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "1:1" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const { modelValue: value } = useVModels(props, emit);
    const pictureSize = reactive({
      lists: [
        {
          name: "\u5934\u50CF\u56FE",
          scaleLabel: "1:1",
          scaleValue: "512x512",
          class: "w-[20px] h-[20px]"
        },
        {
          name: "\u5A92\u4F53\u914D\u56FE",
          scaleLabel: "3:4",
          scaleValue: "384x512",
          class: "w-[15px] h-[20px]"
        },
        {
          name: "\u6587\u7AE0\u914D\u56FE",
          scaleLabel: "4:3",
          scaleValue: "512x384",
          class: "w-[20px] h-[15px]"
        },
        {
          name: "\u5BA3\u4F20\u6D77\u62A5",
          scaleLabel: "9:16",
          scaleValue: "288x512",
          class: "w-[13px] h-[20px]"
        },
        {
          name: "\u7535\u8111\u58C1\u7EB8",
          scaleLabel: "16:9",
          scaleValue: "512x288",
          class: "w-[20px] h-[12px]"
        },
        {
          name: "\u6A2A\u7248\u540D\u7247",
          scaleLabel: "3:2",
          scaleValue: "512x341",
          class: "w-[20px] h-[14px]"
        },
        {
          name: "\u5C0F\u7EA2\u4E66\u56FE",
          scaleLabel: "2:3",
          scaleValue: "341x512",
          class: "w-[13px] h-[20px]"
        }
      ]
    });
    value.value = "1:1";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-[15px]" }, _attrs))} data-v-72a4a7e0>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "\u56FE\u7247\u5C3A\u5BF8",
        tips: "\u6307\u5B9A\u751F\u6210\u56FE\u50CF\u7684\u5BBD\u9AD8\u6BD4",
        required: ""
      }, null, _parent));
      _push(`<div class="grid grid-cols-4 gap-x-4" data-v-72a4a7e0><!--[-->`);
      ssrRenderList(unref(pictureSize).lists, (item, index) => {
        _push(`<div class="${ssrRenderClass([{
          "picture-size-active": unref(value) == (item == null ? void 0 : item.scaleValue),
          "picture-size-disable": !(item == null ? void 0 : item.scaleValue)
        }, "picture-size cursor-pointer text-center hover:text-primary"])}" data-v-72a4a7e0><div class="flex justify-center items-center mt-[10px] h-[20px]" data-v-72a4a7e0><div class="${ssrRenderClass([item.class, "rect"])}" data-v-72a4a7e0></div></div><div class="text-base text-[#101010] dark:text-white mt-[4px] size-scale" data-v-72a4a7e0>${ssrInterpolate(item.scaleLabel)}</div><div class="text-xs text-[#798696] dark:text-white mt-[4px] size-name" data-v-72a4a7e0>${ssrInterpolate(item.name)}</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/doubao/doubao-picture-size.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DoubaoPictureSize = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-72a4a7e0"]]);

export { DoubaoPictureSize as default };
//# sourceMappingURL=doubao-picture-size-BzVdM8QE.mjs.map
