import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElSegmented } from './el-segmented-KMsqQ2AI.mjs';
import { _ as _sfc_main$2 } from './index-D8NbhMns.mjs';
import { _ as _sfc_main$3 } from './index-BoqjHllR.mjs';
import { E as ElEmpty } from './el-empty-xbPr04pX.mjs';
import { useSSRContext, defineComponent, withCtx, unref, isRef, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { useVModels } from '@vueuse/core';
import { m as modelCategory, i as modelCategoryList, j as modelList, l as loraList, n as getModel } from './useDrawEffect-B2jxDCVi.mjs';
import _sfc_main$1 from './sidbar-item-title-aTPs1IEb.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './usePaging-DU8sXki3.mjs';
import './usePolling-DOP50YcO.mjs';
import './DrawEnum-CqAPEJOR.mjs';
import './index-CJqYHNUB.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './dropdown-C6fgV-Vy.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sd-model",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const { modelValue: currentModel } = useVModels(props, emit);
    const selectModel = (index) => {
      if (index === "clear") {
        currentModel.value = "";
        loraList.value = [];
      } else {
        currentModel.value = modelList.value[index].model_name;
        loraList.value = modelList.value[index].loras;
      }
    };
    const categoryChange = (value) => {
      selectModel("clear");
      modelCategory.value = value;
      getModel();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_scrollbar = ElScrollbar;
      const _component_el_segmented = ElSegmented;
      const _component_aspect_ratio = _sfc_main$2;
      const _component_Icon = _sfc_main$3;
      const _component_el_empty = ElEmpty;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-25bc3d68>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "\u4E3B\u8981\u6A21\u578B",
        required: "",
        tips: "\u8BA9AI\u6839\u636E\u6B64\u6A21\u578B\u7684\u98CE\u683C\u7ED8\u5236\u56FE\u7247\uFF0C\u4FEE\u6539\u5408\u9002\u7684\u63CF\u8FF0\u8BCD\u548C\u53C2\u6570\u53EF\u4EE5\u8BA9\u751F\u6210\u6548\u679C\u66F4\u52A0\u7CBE\u7F8E"
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_scrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-2" style="${ssrRenderStyle({ "--el-border-radius-base": "12px" })}" data-v-25bc3d68${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_segmented, {
              block: false,
              class: "h-[38px] !bg-[transparent]",
              id: "ddddd",
              modelValue: unref(modelCategory),
              "onUpdate:modelValue": ($event) => isRef(modelCategory) ? modelCategory.value = $event : null,
              options: unref(modelCategoryList),
              onChange: categoryChange
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "mb-2",
                style: { "--el-border-radius-base": "12px" }
              }, [
                createVNode(_component_el_segmented, {
                  block: false,
                  class: "h-[38px] !bg-[transparent]",
                  id: "ddddd",
                  modelValue: unref(modelCategory),
                  "onUpdate:modelValue": ($event) => isRef(modelCategory) ? modelCategory.value = $event : null,
                  options: unref(modelCategoryList),
                  onChange: categoryChange
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_scrollbar, { "max-height": "360px" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(modelList).length > 0) {
              _push2(`<div class="grid grid-cols-2 gap-4" data-v-25bc3d68${_scopeId}><!--[-->`);
              ssrRenderList(unref(modelList), (item, index) => {
                _push2(`<div class="flex flex-col gap-2" data-v-25bc3d68${_scopeId}><div class="relative rounded-[12px] overflow-hidden" data-v-25bc3d68${_scopeId}>`);
                _push2(ssrRenderComponent(_component_aspect_ratio, {
                  class: "rounded-[12px] overflow-hidden bg-[var(--el-bg-color-page)]",
                  src: item.cover,
                  fit: "cover",
                  ratio: [144, 100]
                }, null, _parent2, _scopeId));
                _push2(`<div class="${ssrRenderClass([{
                  "opacity-100": item.model_name === unref(currentModel)
                }, "absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] w-full h-full flex justify-center items-center transition-opacity opacity-0"])}" data-v-25bc3d68${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "el-icon-CircleCheckFilled",
                  size: 20,
                  color: "#fff"
                }, null, _parent2, _scopeId));
                _push2(`</div></div><div class="text-hidden-2 text-center" data-v-25bc3d68${_scopeId}>${ssrInterpolate(item.title || item.model_name)}</div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(ssrRenderComponent(_component_el_empty, {
                description: "\u6682\u65E0\u6A21\u578B\u6570\u636E",
                "image-size": 50
              }, null, _parent2, _scopeId));
            }
          } else {
            return [
              unref(modelList).length > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "grid grid-cols-2 gap-4"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(modelList), (item, index) => {
                  return openBlock(), createBlock("div", {
                    key: item.id,
                    class: "flex flex-col gap-2",
                    onClick: ($event) => selectModel(index)
                  }, [
                    createVNode("div", { class: "relative rounded-[12px] overflow-hidden" }, [
                      createVNode(_component_aspect_ratio, {
                        class: "rounded-[12px] overflow-hidden bg-[var(--el-bg-color-page)]",
                        src: item.cover,
                        fit: "cover",
                        ratio: [144, 100]
                      }, null, 8, ["src"]),
                      createVNode("div", {
                        class: ["absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] w-full h-full flex justify-center items-center transition-opacity opacity-0", {
                          "opacity-100": item.model_name === unref(currentModel)
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
                description: "\u6682\u65E0\u6A21\u578B\u6570\u636E",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/sd/sd-model.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SdModel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-25bc3d68"]]);

export { SdModel as default };
//# sourceMappingURL=sd-model-CfCejklr.mjs.map
