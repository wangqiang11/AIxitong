import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as _sfc_main$2 } from './index-D8NbhMns.mjs';
import { _ as _sfc_main$3 } from './index-BoqjHllR.mjs';
import { E as ElEmpty } from './el-empty-xbPr04pX.mjs';
import { defineComponent, watch, withCtx, unref, openBlock, createBlock, Fragment, renderList, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { useVModels } from '@vueuse/core';
import { l as loraList } from './useDrawEffect-B2jxDCVi.mjs';
import _sfc_main$1 from './sidbar-item-title-aTPs1IEb.mjs';
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
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './index-DVLwoLV9.mjs';
import 'video.js';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './usePaging-DU8sXki3.mjs';
import './usePolling-DOP50YcO.mjs';
import './DrawEnum-CqAPEJOR.mjs';
import './index-CJqYHNUB.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './dropdown-C6fgV-Vy.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sd-lora",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Array,
      default: []
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    watch(
      () => loraList,
      () => {
        selectLora("clear");
      }
    );
    const { modelValue: currentLora } = useVModels(props, emit);
    const selectLora = (index) => {
      if (index === "clear") {
        currentLora.value = [];
      } else {
        if (currentLora.value.includes(loraList.value[index].model_name)) {
          currentLora.value = currentLora.value.filter(
            (item) => item !== loraList.value[index].model_name
          );
        } else {
          currentLora.value.push(loraList.value[index].model_name);
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_scrollbar = ElScrollbar;
      const _component_aspect_ratio = _sfc_main$2;
      const _component_Icon = _sfc_main$3;
      const _component_el_empty = ElEmpty;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "\u5FAE\u8C03\u6A21\u578B",
        tips: "\u5728\u57FA\u7840\u6A21\u578B\u4E0A\u53E0\u52A0\u5FAE\u8C03\u6A21\u578B\uFF0C\u8BA9\u753B\u9762\u66F4\u7EC6\u817B\u66F4\u53EF\u63A7"
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_scrollbar, { "max-height": "360px" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(loraList).length > 0) {
              _push2(`<div class="grid grid-cols-2 gap-4"${_scopeId}><!--[-->`);
              ssrRenderList(unref(loraList), (item, index) => {
                _push2(`<div class="flex flex-col gap-2"${_scopeId}><div class="relative rounded-[12px] overflow-hidden cursor-pointer"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_aspect_ratio, {
                  class: "rounded-[12px] overflow-hidden w-auto h-full bg-[var(--el-bg-color-page)]",
                  src: item.cover,
                  fit: "cover",
                  ratio: [144, 100]
                }, null, _parent2, _scopeId));
                _push2(`<div class="${ssrRenderClass([{
                  "opacity-100": unref(currentLora).includes(
                    item.model_name
                  )
                }, "absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] w-full h-full flex justify-center items-center transition-opacity opacity-0"])}"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "el-icon-CircleCheckFilled",
                  size: 20,
                  color: "#fff"
                }, null, _parent2, _scopeId));
                _push2(`</div></div><div class="text-hidden-2 text-center"${_scopeId}>${ssrInterpolate(item.title || item.model_name)}</div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(ssrRenderComponent(_component_el_empty, {
                description: "\u6682\u65E0\u5173\u8054\u7684\u5FAE\u8C03\u6A21\u578B",
                "image-size": 50
              }, null, _parent2, _scopeId));
            }
          } else {
            return [
              unref(loraList).length > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "grid grid-cols-2 gap-4"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(loraList), (item, index) => {
                  return openBlock(), createBlock("div", {
                    key: item.id,
                    class: "flex flex-col gap-2",
                    onClick: ($event) => selectLora(index)
                  }, [
                    createVNode("div", { class: "relative rounded-[12px] overflow-hidden cursor-pointer" }, [
                      createVNode(_component_aspect_ratio, {
                        class: "rounded-[12px] overflow-hidden w-auto h-full bg-[var(--el-bg-color-page)]",
                        src: item.cover,
                        fit: "cover",
                        ratio: [144, 100]
                      }, null, 8, ["src"]),
                      createVNode("div", {
                        class: ["absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] w-full h-full flex justify-center items-center transition-opacity opacity-0", {
                          "opacity-100": unref(currentLora).includes(
                            item.model_name
                          )
                        }]
                      }, [
                        createVNode(_component_Icon, {
                          name: "el-icon-CircleCheckFilled",
                          size: 20,
                          color: "#fff"
                        })
                      ], 2)
                    ]),
                    createVNode("div", { class: "text-hidden-2 text-center" }, toDisplayString(item.title || item.model_name), 1)
                  ], 8, ["onClick"]);
                }), 128))
              ])) : (openBlock(), createBlock(_component_el_empty, {
                key: 1,
                description: "\u6682\u65E0\u5173\u8054\u7684\u5FAE\u8C03\u6A21\u578B",
                "image-size": 50
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/sd/sd-lora.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sd-lora-Df-FFoS9.mjs.map
