import { a5 as useAppStore, ah as __nuxt_component_0, b4 as __nuxt_component_1 } from './server.mjs';
import { useSSRContext, defineComponent, ref, withCtx, unref, isRef, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import sidePop from './sidePop-DC0e2WFv.mjs';
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
import '@vueuse/core';
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './index-BoqjHllR.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useAppStore();
    const sideShow = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-fbfc5138>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-full" data-v-fbfc5138${_scopeId}><div class="h-full px-[16px] py-[16px]" data-v-fbfc5138${_scopeId}>`);
            _push2(ssrRenderComponent(sidePop, {
              modelValue: unref(sideShow),
              "onUpdate:modelValue": ($event) => isRef(sideShow) ? sideShow.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex-1 min-w-0 h-full" data-v-fbfc5138${_scopeId}><div class="mx-auto py-[16px] rounded-lg pr-[16px] h-full" data-v-fbfc5138${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex h-full" }, [
                createVNode("div", { class: "h-full px-[16px] py-[16px]" }, [
                  createVNode(sidePop, {
                    modelValue: unref(sideShow),
                    "onUpdate:modelValue": ($event) => isRef(sideShow) ? sideShow.value = $event : null
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "flex-1 min-w-0 h-full" }, [
                  createVNode("div", { class: "mx-auto py-[16px] rounded-lg pr-[16px] h-full" }, [
                    createVNode(_component_NuxtPage)
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fbfc5138"]]);

export { index as default };
//# sourceMappingURL=index-DAU6YS3K.mjs.map
