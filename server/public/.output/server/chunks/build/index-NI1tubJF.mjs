import { E as ElImage } from './index-C2yEelJa.mjs';
import { a5 as useAppStore } from './server.mjs';
import { u as useTemplate } from './useTemplate-BMZ5OoC1.mjs';
import { defineComponent, computed, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import _sfc_main$1 from './manual-B2oZtFmW.mjs';
import Online from './online-CTlEkafJ.mjs';
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
import './index-CJqYHNUB.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './dropdown-C6fgV-Vy.mjs';
import './index-BoqjHllR.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    const [DefineTemplate, ReuseTemplate] = useTemplate();
    const customerOnline = computed(() => appStore.getOnlineKf);
    const customerManual = computed(() => appStore.getManualKf);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElImage = ElImage;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineTemplate), null, {
        default: withCtx(({ icon, text }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-[54px] py-[8px] my-[10px] bg-body shadow-light rounded-lg cursor-pointer"${_scopeId}><div class="flex flex-col items-center justify-center"${_scopeId}>`);
            if (icon) {
              _push2(ssrRenderComponent(_component_ElImage, {
                class: "w-[30px] h-[30px] mb-[4px]",
                src: icon
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="text-xs"${_scopeId}>${ssrInterpolate(text)}</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-[54px] py-[8px] my-[10px] bg-body shadow-light rounded-lg cursor-pointer" }, [
                createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                  icon ? (openBlock(), createBlock(_component_ElImage, {
                    key: 0,
                    class: "w-[30px] h-[30px] mb-[4px]",
                    src: icon
                  }, null, 8, ["src"])) : createCommentVNode("", true),
                  createVNode("div", { class: "text-xs" }, toDisplayString(text), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><div class="absolute right-[10px] top-[60%] z-[9999]">`);
      if (unref(customerManual).status == 1) {
        _push(ssrRenderComponent(_sfc_main$1, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ReuseTemplate), {
                icon: unref(customerManual).icons,
                text: "\u5BA2\u670D"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(ReuseTemplate), {
                  icon: unref(customerManual).icons,
                  text: "\u5BA2\u670D"
                }, null, 8, ["icon"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(customerOnline).status == 1) {
        _push(ssrRenderComponent(Online, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ReuseTemplate), {
                icon: unref(customerOnline).icons,
                text: "\u5728\u7EBF\u5BA2\u670D"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(ReuseTemplate), {
                  icon: unref(customerOnline).icons,
                  text: "\u5728\u7EBF\u5BA2\u670D"
                }, null, 8, ["icon"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/customer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-NI1tubJF.mjs.map
