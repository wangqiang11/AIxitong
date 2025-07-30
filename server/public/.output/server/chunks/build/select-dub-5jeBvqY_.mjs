import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { _ as _sfc_main$2 } from './index-L3E_sDO1.mjs';
import { d as ElButton } from './server.mjs';
import { u as useCanvasStore, a as useDesignTabs } from './canvas-DJ4hjlD7.mjs';
import { u as useAudioPlay } from './useAudioPlay-C6V9947w.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-L-VTEUEA.mjs';
import '@vueuse/core';
import '@popperjs/core';
import '@vue/shared';
import 'lodash-unified';
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
import './file-RP6bCPT_.mjs';
import 'jsdom';
import 'jsdom/lib/jsdom/living/generated/utils';
import 'jsdom/lib/jsdom/utils';
import 'fontfaceobserver';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "select-dub",
  __ssrInlineRender: true,
  setup(__props) {
    const canvasStore = useCanvasStore();
    useDesignTabs();
    const { play, audioPlaying, pause } = useAudioPlay();
    const removeMusic = () => {
      canvasStore.dub = {};
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$1;
      const _component_OverflowTooltip = _sfc_main$2;
      const _component_ElButton = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[40px] px-[10px] max-w-[220px] flex items-center shadow-[0_2px_6px_#ebefff] rounded-full bg-white cursor-pointer" }, _attrs))} data-v-ad3e9966>`);
      if (!unref(canvasStore).dub.Voice) {
        _push(`<div class="px-[10px]" data-v-ad3e9966>\u9009\u62E9\u914D\u97F3</div>`);
      } else {
        _push(`<!--[--><div class="${ssrRenderClass([{
          playing: unref(audioPlaying)
        }, "flex"])}" data-v-ad3e9966>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "local-icon-dub",
          size: "18"
        }, null, _parent));
        _push(`</div><div class="flex-1 min-w-0 mx-[5px]" data-v-ad3e9966>`);
        _push(ssrRenderComponent(_component_OverflowTooltip, {
          content: `${unref(canvasStore).dub.Name}-${unref(canvasStore).dub.Desc}`
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_ElButton, {
          link: "",
          onClick: removeMusic
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "el-icon-Close",
                size: "20"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "el-icon-Close",
                  size: "20"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/_components/design-center/select-dub.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SelectDub = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ad3e9966"]]);

export { SelectDub as default };
//# sourceMappingURL=select-dub-5jeBvqY_.mjs.map
