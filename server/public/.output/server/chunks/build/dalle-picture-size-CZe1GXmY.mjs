import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { useSSRContext, defineComponent, reactive, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { useVModels } from '@vueuse/core';
import _sfc_main$1 from './sidbar-item-title-aTPs1IEb.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
  __name: "dalle-picture-size",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "512x512" }
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
          scaleValue: "1024x1024",
          class: "w-[20px] h-[20px]"
        },
        {
          name: "\u5A92\u4F53\u914D\u56FE",
          scaleLabel: "3:4",
          scaleValue: "1024x1792",
          class: "w-[15px] h-[20px]"
        },
        {
          name: "\u6587\u7AE0\u914D\u56FE",
          scaleLabel: "4:3",
          scaleValue: "1792x1024",
          class: "w-[20px] h-[15px]"
        }
      ]
    });
    value.value = "1024x1024";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popover = ElPopover;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-[15px]" }, _attrs))} data-v-055ff91f>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "\u56FE\u7247\u5C3A\u5BF8",
        tips: "",
        required: ""
      }, null, _parent));
      _push(`<div class="flex flex-wrap" data-v-055ff91f><!--[-->`);
      ssrRenderList(unref(pictureSize).lists, (item, index) => {
        _push(ssrRenderComponent(_component_el_popover, {
          key: index,
          placement: "bottom",
          width: 150,
          "show-arrow": false,
          transition: "custom-popover",
          trigger: "hover",
          content: `\u5206\u8FA8\u7387\uFF1A${item.scaleValue}px`
        }, {
          reference: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([{
                "picture-size-active": unref(value) == (item == null ? void 0 : item.scaleValue),
                "picture-size-disable": !(item == null ? void 0 : item.scaleValue)
              }, "picture-size cursor-pointer text-center hover:text-primary"])}" data-v-055ff91f${_scopeId}><div class="flex justify-center items-center mt-[10px] h-[20px]" data-v-055ff91f${_scopeId}><div class="${ssrRenderClass([item.class, "rect"])}" data-v-055ff91f${_scopeId}></div></div><div class="text-base text-[#101010] dark:text-white mt-[4px] size-scale" data-v-055ff91f${_scopeId}>${ssrInterpolate(item.scaleLabel)}</div><div class="text-xs text-[#798696] dark:text-white mt-[4px] size-name" data-v-055ff91f${_scopeId}>${ssrInterpolate(item.name)}</div></div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["picture-size cursor-pointer text-center hover:text-primary", {
                    "picture-size-active": unref(value) == (item == null ? void 0 : item.scaleValue),
                    "picture-size-disable": !(item == null ? void 0 : item.scaleValue)
                  }],
                  onClick: ($event) => value.value = item.scaleValue
                }, [
                  createVNode("div", { class: "flex justify-center items-center mt-[10px] h-[20px]" }, [
                    createVNode("div", {
                      class: ["rect", item.class]
                    }, null, 2)
                  ]),
                  createVNode("div", { class: "text-base text-[#101010] dark:text-white mt-[4px] size-scale" }, toDisplayString(item.scaleLabel), 1),
                  createVNode("div", { class: "text-xs text-[#798696] dark:text-white mt-[4px] size-name" }, toDisplayString(item.name), 1)
                ], 10, ["onClick"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/dalle/dalle-picture-size.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DallePictureSize = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-055ff91f"]]);

export { DallePictureSize as default };
//# sourceMappingURL=dalle-picture-size-CZe1GXmY.mjs.map
