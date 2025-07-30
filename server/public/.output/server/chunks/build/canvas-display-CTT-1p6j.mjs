import { B as vLoading } from './server.mjs';
import { useSSRContext, defineComponent, shallowRef, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { useElementSize, watchThrottled } from '@vueuse/core';
import { u as useCanvasStore } from './canvas-DJ4hjlD7.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './useAudioPlay-C6V9947w.mjs';
import './file-RP6bCPT_.mjs';
import 'jsdom';
import 'jsdom/lib/jsdom/living/generated/utils';
import 'jsdom/lib/jsdom/utils';
import 'fontfaceobserver';

const canvasId = "design-canvas";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "canvas-display",
  __ssrInlineRender: true,
  setup(__props) {
    const canvasStore = useCanvasStore();
    const workspaceRef = shallowRef(null);
    const { width } = useElementSize(workspaceRef);
    const workspaceHeight = ref(canvasStore.defaultSize.height);
    const loading = ref(false);
    watchThrottled(
      () => canvasStore.defaultSize,
      () => {
        calculateTheHeight();
      }
    );
    const calculateTheHeight = () => {
      if (width.value >= canvasStore.defaultSize.width) {
        workspaceHeight.value = canvasStore.defaultSize.height;
      } else {
        workspaceHeight.value = width.value * canvasStore.defaultSize.height / canvasStore.defaultSize.width;
      }
    };
    watchThrottled(width, (value) => {
      calculateTheHeight();
    });
    watchThrottled(workspaceHeight, (value) => {
      if (value) {
        const scale = value / canvasStore.defaultSize.height;
        canvasStore.setZoom(scale);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "workspaceRef",
        ref: workspaceRef,
        class: "canvas-display overflow-hidden",
        style: {
          height: `${unref(workspaceHeight)}px`
        }
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_loading, unref(loading))))} data-v-089e911c><div class="canvas-bg" style="${ssrRenderStyle(unref(canvasStore).canvas ? null : { display: "none" })}" data-v-089e911c><canvas${ssrRenderAttr("id", canvasId)} data-v-089e911c></canvas></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/_components/design-center/canvas-display.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CanvasDisplay = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-089e911c"]]);

export { CanvasDisplay as default };
//# sourceMappingURL=canvas-display-CTT-1p6j.mjs.map
