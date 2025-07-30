import { ah as __nuxt_component_0 } from './server.mjs';
import { E as ElResult } from './el-result-V-Bl2idQ.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { defineComponent, withAsyncContext, withCtx, unref, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import PromptInput from './prompt-input-ByM8SS0-.mjs';
import GenOutline from './gen-outline-B0NhKtZ-.mjs';
import { e as emptyImg } from './empty_con-BDdV71_z.mjs';
import { useAiPPTStore } from './aiPPT-BfjAVP_f.mjs';
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
import '@vueuse/core';
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './position-DVxxNIGX.mjs';
import './index-0xCxAaTZ.mjs';
import './el-segmented-KMsqQ2AI.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-BoqjHllR.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './select-template-CAU51dfS.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './useLockFn-BWbjkhBs.mjs';
import './ai_ppt-C1HXY0_t.mjs';
import './el-skeleton-item-P_GLWXGa.mjs';
import './index-D7S5lb8a.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const aiPPTStore = useAiPPTStore();
    [__temp, __restore] = withAsyncContext(() => useAsyncData(() => aiPPTStore.getPPTConfig(), "$D6uS58pp2g")), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_el_result = ElResult;
      const _component_el_image = ElImage;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full p-4"${_scopeId}>`);
            if (unref(aiPPTStore).config.status > 0) {
              _push2(`<div class="h-full rounded-[15px] bg-body"${_scopeId}>`);
              if (unref(aiPPTStore).showOutline) {
                _push2(ssrRenderComponent(GenOutline, null, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(PromptInput, null, null, _parent2, _scopeId));
              }
              _push2(`</div>`);
            } else {
              _push2(`<div class="h-full flex-1 flex p-4 justify-center items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_result, null, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_image, {
                      class: "w-[150px] dark:opacity-60",
                      src: unref(emptyImg)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_image, {
                        class: "w-[150px] dark:opacity-60",
                        src: unref(emptyImg)
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-info"${_scopeId2}>\u529F\u80FD\u6682\u672A\u5F00\u542F</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-info" }, "\u529F\u80FD\u6682\u672A\u5F00\u542F")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "h-full p-4" }, [
                unref(aiPPTStore).config.status > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "h-full rounded-[15px] bg-body"
                }, [
                  unref(aiPPTStore).showOutline ? (openBlock(), createBlock(GenOutline, { key: 0 })) : (openBlock(), createBlock(PromptInput, { key: 1 }))
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "h-full flex-1 flex p-4 justify-center items-center"
                }, [
                  createVNode(_component_el_result, null, {
                    icon: withCtx(() => [
                      createVNode(_component_el_image, {
                        class: "w-[150px] dark:opacity-60",
                        src: unref(emptyImg)
                      }, null, 8, ["src"])
                    ]),
                    title: withCtx(() => [
                      createVNode("div", { class: "text-info" }, "\u529F\u80FD\u6682\u672A\u5F00\u542F")
                    ]),
                    _: 1
                  })
                ]))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai_ppt/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CvJZQN2m.mjs.map
