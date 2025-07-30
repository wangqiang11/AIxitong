import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElResult } from './el-result-V-Bl2idQ.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { a5 as useAppStore, B as vLoading } from './server.mjs';
import { useSSRContext, defineComponent, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps } from 'vue/server-renderer';
import { f as formData, g as pageLoading } from './useDrawEffect-B2jxDCVi.mjs';
import { DrawModeEnum, DrawTypeEnum } from './DrawEnum-CqAPEJOR.mjs';
import _sfc_main$1 from './draw-type-CEvfMGVO.mjs';
import Prompt from './prompt-RZrNgRXL.mjs';
import Uploader from './uploader-B-bowUcG.mjs';
import DrawResult from './draw-result-3pgZiKX4.mjs';
import _sfc_main$3 from './create-button-am2dhDog.mjs';
import { D as DrawingEmpty } from './empty-image-DpkSTY4G.mjs';
import DoubaoPictureSize from './doubao-picture-size-BzVdM8QE.mjs';
import _sfc_main$2 from './doubao-model-BYIMt1OA.mjs';
import DoubaoOptions from './doubao-options-D4rSEKoQ.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import '@vue/shared';
import 'lodash-unified';
import './position-DVxxNIGX.mjs';
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
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './usePaging-DU8sXki3.mjs';
import './usePolling-DOP50YcO.mjs';
import './el-segmented-KMsqQ2AI.mjs';
import './index-BoqjHllR.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './sidbar-item-title-aTPs1IEb.mjs';
import './index-CJqYHNUB.mjs';
import './dropdown-C6fgV-Vy.mjs';
import './prompt-selector-DeTNndAA.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import './uploader-BjIsDS-m.mjs';
import './index-D7S5lb8a.mjs';
import './index-D8NbhMns.mjs';
import './index-DVLwoLV9.mjs';
import 'video.js';
import './index-D60of7Hb.mjs';
import './el-pagination-ClrwtCwT.mjs';
import './index-CUhOTuS-.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import './useImageSplit-WhIb7DvG.mjs';
import './download-N0luyf1S.mjs';
import './draw-share-CqwfKs_W.mjs';
import './task_reward-DRop0WtE.mjs';
import './index-BKj4TrcW.mjs';
import './useLockFn-BWbjkhBs.mjs';
import './image-editor-CXRfZ5rL.mjs';
import './useImageEditor-FUvZEPjo.mjs';
import './DrawingTool-DEHEFSZT.mjs';
import './error-BBvUyUA_.mjs';
import './el-collapse-item-DSo9CmH5.mjs';
import './index-DadLUs6d.mjs';
import './el-slider-LwCMMHAn.mjs';
import './el-input-number-DH6NTUUv.mjs';
import './index-iSFXrlfY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "doubao",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_scrollbar = ElScrollbar;
      const _component_el_result = ElResult;
      const _component_el_image = ElImage;
      const _directive_loading = vLoading;
      if (unref(appStore).config.switch.doubao_status) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex-1 flex p-4 gap-4 draw_layout" }, _attrs))} data-v-a401c716>`);
        _push(ssrRenderComponent(_component_el_scrollbar, { class: "rounded-[12px] pb-[72px] bg-body" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="bg-body w-[355px] p-4 flex flex-col gap-4 relative" data-v-a401c716${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$1, {
                modelValue: unref(formData).draw_type,
                "onUpdate:modelValue": ($event) => unref(formData).draw_type = $event
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(Prompt, {
                modelValue: unref(formData).prompt,
                "onUpdate:modelValue": ($event) => unref(formData).prompt = $event,
                model: unref(DrawModeEnum).DOUBAO
              }, null, _parent2, _scopeId));
              if (unref(formData).draw_type === unref(DrawTypeEnum).img2img) {
                _push2(ssrRenderComponent(Uploader, {
                  modelValue: unref(formData).image_mask,
                  "onUpdate:modelValue": ($event) => unref(formData).image_mask = $event,
                  type: "image"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(DoubaoPictureSize, {
                modelValue: unref(formData).size,
                "onUpdate:modelValue": ($event) => unref(formData).size = $event
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, {
                modelValue: unref(formData).engine,
                "onUpdate:modelValue": ($event) => unref(formData).engine = $event,
                draw_type: unref(formData).draw_type
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(DoubaoOptions, {
                modelValue: unref(formData).complex_params,
                "onUpdate:modelValue": ($event) => unref(formData).complex_params = $event
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", { class: "bg-body w-[355px] p-4 flex flex-col gap-4 relative" }, [
                  createVNode(_sfc_main$1, {
                    modelValue: unref(formData).draw_type,
                    "onUpdate:modelValue": ($event) => unref(formData).draw_type = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(Prompt, {
                    modelValue: unref(formData).prompt,
                    "onUpdate:modelValue": ($event) => unref(formData).prompt = $event,
                    model: unref(DrawModeEnum).DOUBAO
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "model"]),
                  unref(formData).draw_type === unref(DrawTypeEnum).img2img ? (openBlock(), createBlock(Uploader, {
                    key: 0,
                    modelValue: unref(formData).image_mask,
                    "onUpdate:modelValue": ($event) => unref(formData).image_mask = $event,
                    type: "image"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                  createVNode(DoubaoPictureSize, {
                    modelValue: unref(formData).size,
                    "onUpdate:modelValue": ($event) => unref(formData).size = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$2, {
                    modelValue: unref(formData).engine,
                    "onUpdate:modelValue": ($event) => unref(formData).engine = $event,
                    draw_type: unref(formData).draw_type
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "draw_type"]),
                  createVNode(DoubaoOptions, {
                    modelValue: unref(formData).complex_params,
                    "onUpdate:modelValue": ($event) => unref(formData).complex_params = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_sfc_main$3)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(DrawResult, mergeProps({ "element-loading-text": "\u6B63\u5728\u52A0\u8F7D\u6570\u636E..." }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(pageLoading))), null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex-1 flex p-4 gap-4 draw_layout justify-center items-center" }, _attrs))} data-v-a401c716>`);
        _push(ssrRenderComponent(_component_el_result, null, {
          icon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_image, {
                class: "w-[100px] dark:opacity-60",
                src: unref(DrawingEmpty)
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_el_image, {
                  class: "w-[100px] dark:opacity-60",
                  src: unref(DrawingEmpty)
                }, null, 8, ["src"])
              ];
            }
          }),
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-info" data-v-a401c716${_scopeId}>\u7ED8\u753B\u529F\u80FD\u6682\u672A\u5F00\u542F</div>`);
            } else {
              return [
                createVNode("div", { class: "text-info" }, "\u7ED8\u753B\u529F\u80FD\u6682\u672A\u5F00\u542F")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/doubao.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const doubao = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a401c716"]]);

export { doubao as default };
//# sourceMappingURL=doubao-BDPlP3g-.mjs.map
