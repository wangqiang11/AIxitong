import { E as ElImage } from './index-C2yEelJa.mjs';
import { _ as _sfc_main$1 } from './index-L3E_sDO1.mjs';
import { d as ElButton } from './server.mjs';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { u as useCanvasStore, a as useDesignTabs } from './canvas-DJ4hjlD7.mjs';
import { u as useAudioPlay } from './useAudioPlay-C6V9947w.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import 'lodash-unified';
import './position-DVxxNIGX.mjs';
import '@vue/shared';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
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
  __name: "select-music",
  __ssrInlineRender: true,
  setup(__props) {
    const canvasStore = useCanvasStore();
    useDesignTabs();
    const { play, audioPlaying, pause } = useAudioPlay();
    const removeMusic = () => {
      canvasStore.music = {
        id: 0,
        url: "",
        cover: "",
        name: ""
      };
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElImage = ElImage;
      const _component_OverflowTooltip = _sfc_main$1;
      const _component_ElButton = ElButton;
      const _component_Icon = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[40px] px-[10px] max-w-[220px] flex items-center shadow-[0_2px_6px_#ebefff] rounded-full bg-white cursor-pointer" }, _attrs))} data-v-38a0cc13>`);
      if (!unref(canvasStore).music.id) {
        _push(`<div class="px-[10px]" data-v-38a0cc13>\u9009\u62E9\u97F3\u4E50</div>`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_ElImage, {
          class: [{
            playing: unref(audioPlaying)
          }, "w-[30px] h-[30px] rounded-full"],
          src: unref(canvasStore).music.cover
        }, null, _parent));
        _push(`<div class="flex-1 min-w-0 mx-[5px]" data-v-38a0cc13>`);
        _push(ssrRenderComponent(_component_OverflowTooltip, {
          content: unref(canvasStore).music.name
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/_components/design-center/select-music.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SelectMusic = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-38a0cc13"]]);

export { SelectMusic as default };
//# sourceMappingURL=select-music-BQ-v2cow.mjs.map
