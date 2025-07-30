import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { useSSRContext, defineComponent, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { z as useUserStore } from './server.mjs';
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

const _imports_0 = "data:image/png;base64,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";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "member-btn",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-404c13b3>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/user/member" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="member-btn dark:!bg-[#333] dark:!text-tx-primary" data-v-404c13b3${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="w-[13px] h-[12px] mr-1" alt="" data-v-404c13b3${_scopeId}>`);
            if ((_a = unref(userStore).userInfo) == null ? void 0 : _a.package_is_overdue) {
              _push2(`<span data-v-404c13b3${_scopeId}> \u4F1A\u5458\u5DF2\u5230\u671F </span>`);
            } else {
              _push2(`<span data-v-404c13b3${_scopeId}>${ssrInterpolate(unref(userStore).userInfo.package_name ? unref(userStore).userInfo.package_name : "\u5F00\u901A\u4F1A\u5458")}</span>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "member-btn dark:!bg-[#333] dark:!text-tx-primary" }, [
                createVNode("img", {
                  src: _imports_0,
                  class: "w-[13px] h-[12px] mr-1",
                  alt: ""
                }),
                ((_b = unref(userStore).userInfo) == null ? void 0 : _b.package_is_overdue) ? (openBlock(), createBlock("span", { key: 0 }, " \u4F1A\u5458\u5DF2\u5230\u671F ")) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(userStore).userInfo.package_name ? unref(userStore).userInfo.package_name : "\u5F00\u901A\u4F1A\u5458"), 1))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/header/member-btn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MemberBtn = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-404c13b3"]]);

export { MemberBtn as default };
//# sourceMappingURL=member-btn-MuRMgKHK.mjs.map
