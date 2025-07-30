import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { useSSRContext, defineComponent, reactive, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import _sfc_main$1 from './sidbar-item-title-aTPs1IEb.mjs';
import { useVModels } from '@vueuse/core';
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
  __name: "sd-picture-size",
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
          scaleValue: "512x512",
          class: "w-[20px] h-[20px]"
        },
        {
          name: "\u5A92\u4F53\u914D\u56FE",
          scaleLabel: "3:4",
          scaleValue: "1024x1365",
          class: "w-[15px] h-[20px]"
        },
        {
          name: "\u6587\u7AE0\u914D\u56FE",
          scaleLabel: "4:3",
          scaleValue: "1365x1024",
          class: "w-[20px] h-[15px]"
        },
        {
          name: "\u5BA3\u4F20\u6D77\u62A5",
          scaleLabel: "9:16",
          scaleValue: "720x1280",
          class: "w-[13px] h-[20px]"
        },
        {
          name: "\u7535\u8111\u58C1\u7EB8",
          scaleLabel: "16:9",
          scaleValue: "1920x1080",
          class: "w-[20px] h-[12px]"
        },
        {
          name: "\u624B\u673A\u58C1\u7EB8",
          scaleLabel: "1:2",
          scaleValue: "720x1440",
          class: "w-[12px] h-[20px]"
        },
        {
          name: "\u6A2A\u7248\u540D\u7247",
          scaleLabel: "3:2",
          scaleValue: "960x640",
          class: "w-[20px] h-[14px]"
        },
        {
          name: "\u5C0F\u7EA2\u4E66\u56FE",
          scaleLabel: "2:3",
          scaleValue: "800x1200",
          class: "w-[13px] h-[20px]"
        }
      ]
    });
    value.value = "512x512";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popover = ElPopover;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-[15px]" }, _attrs))} data-v-ee835ec6>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "\u56FE\u7247\u5C3A\u5BF8",
        tips: "\u5206\u8FA8\u7387\u8D8A\u9AD8\u751F\u6210\u7ED3\u679C\u8D8A\u6162\uFF0C\u670D\u52A1\u5668\u914D\u7F6E\u6BD4\u8F83\u4F4E\u65F6\u53EF\u80FD\u4F1A\u51FA\u73B0\u7ED8\u753B\u5931\u8D25\u3001\u8D85\u65F6\u3001\u7F13\u6162\u7B49\u60C5\u51B5",
        required: ""
      }, null, _parent));
      _push(`<div class="flex justify-between flex-wrap" data-v-ee835ec6><!--[-->`);
      ssrRenderList(unref(pictureSize).lists, (item, index) => {
        _push(ssrRenderComponent(_component_el_popover, {
          key: index,
          placement: "bottom",
          "show-arrow": false,
          transition: "custom-popover",
          width: 150,
          trigger: "hover",
          content: `\u5206\u8FA8\u7387\uFF1A${item.scaleValue}px`
        }, {
          reference: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([{
                "picture-size-active": unref(value) == (item == null ? void 0 : item.scaleValue),
                "picture-size-disable": !(item == null ? void 0 : item.scaleValue)
              }, "picture-size cursor-pointer text-center hover:text-primary"])}" data-v-ee835ec6${_scopeId}><div class="flex justify-center items-center mt-[10px] h-[20px]" data-v-ee835ec6${_scopeId}><div class="${ssrRenderClass([item.class, "rect"])}" data-v-ee835ec6${_scopeId}></div></div><div class="text-base text-[#101010] dark:text-white mt-[4px] size-scale" data-v-ee835ec6${_scopeId}>${ssrInterpolate(item.scaleLabel)}</div><div class="text-xs text-[#798696] dark:text-white mt-[4px] size-name" data-v-ee835ec6${_scopeId}>${ssrInterpolate(item.name)}</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/sd/sd-picture-size.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SdPictureSize = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ee835ec6"]]);

export { SdPictureSize as default };
//# sourceMappingURL=sd-picture-size-BJObFq1w.mjs.map
