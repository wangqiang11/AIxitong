import { E as ElImage } from './index-C2yEelJa.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { d as ElButton } from './server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { u as useAudioPlay } from './useAudioPlay-C6V9947w.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import 'lodash-unified';
import './position-DVxxNIGX.mjs';
import '@vue/shared';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dub-item",
  __ssrInlineRender: true,
  props: {
    activeId: {},
    itemId: {},
    name: {},
    pic: {},
    url: {},
    disabled: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const isHover = ref(false);
    const { play, audioPlaying, pause } = useAudioPlay();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElImage = ElImage;
      const _component_Icon = _sfc_main$1;
      const _component_ElButton = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["dub-item flex items-center p-main cursor-pointer", {
          "is-hover": unref(isHover),
          "is-active": _ctx.activeId == _ctx.itemId,
          "is-disable": _ctx.disabled
        }]
      }, _attrs))} data-v-56d9fccd><div class="relative flex-none flex" data-v-56d9fccd>`);
      _push(ssrRenderComponent(_component_ElImage, {
        src: _ctx.pic,
        class: "w-[40px] h-[40px] rounded-full overflow-hidden"
      }, null, _parent));
      if (unref(isHover) || unref(audioPlaying)) {
        _push(`<div class="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] rounded-full" data-v-56d9fccd><div class="${ssrRenderClass([{
          "audio-btn--animation": unref(audioPlaying)
        }, "audio-btn cursor-pointer"])}" data-v-56d9fccd>`);
        if (unref(audioPlaying)) {
          _push(`<span class="text-white flex" data-v-56d9fccd>`);
          _push(ssrRenderComponent(_component_Icon, {
            size: 24,
            name: "el-icon-VideoPause"
          }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<span class="text-white flex" data-v-56d9fccd>`);
          _push(ssrRenderComponent(_component_Icon, {
            size: 24,
            name: "el-icon-VideoPlay"
          }, null, _parent));
          _push(`</span>`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex-1 line-clamp-2 min-w-0 ml-[10px]" data-v-56d9fccd>${ssrInterpolate(_ctx.name)}</div><div class="flex-none" style="${ssrRenderStyle({
        visibility: unref(isHover) ? "visible" : "hidden"
      })}" data-v-56d9fccd>`);
      _push(ssrRenderComponent(_component_ElButton, {
        type: "primary",
        disabled: _ctx.disabled
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u4F7F\u7528`);
          } else {
            return [
              createTextVNode("\u4F7F\u7528")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/_components/design-left/dub-item.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DubItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-56d9fccd"]]);

export { DubItem as default };
//# sourceMappingURL=dub-item-QlRowzhf.mjs.map
