import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { defineComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "title-logo",
  __ssrInlineRender: true,
  props: {
    logo: {},
    title: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (_ctx.logo || _ctx.title) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          to: "/",
          class: "flex items-center title-logo px-[10px]"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (_ctx.logo) {
                _push2(`<div${_scopeId}><img class="w-[34px] h-[34px]"${ssrRenderAttr("src", _ctx.logo)}${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.title) {
                _push2(`<div class="font-bold ml-[10px] text-[16px] line-clamp-1"${_scopeId}>${ssrInterpolate(_ctx.title)}</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                _ctx.logo ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("img", {
                    class: "w-[34px] h-[34px]",
                    src: _ctx.logo
                  }, null, 8, ["src"])
                ])) : createCommentVNode("", true),
                _ctx.title ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "font-bold ml-[10px] text-[16px] line-clamp-1"
                }, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/header/title-logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=title-logo-BNM0flCB.mjs.map
