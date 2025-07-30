import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { ag as useRoute, bx as getPolicy, bw as PolicyAgreementEnum } from './server.mjs';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@vueuse/core';
import '@vue/shared';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'lodash-es';
import 'weixin-js-sdk';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[type]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => getPolicy({
        type: route.params.type
      }),
      {
        lazy: true,
        default() {
          return {};
        }
      },
      "$TpVU1kmQlv"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_el_scrollbar = ElScrollbar;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen flex flex-col" }, _attrs))} data-v-b0f9b77d><div class="w-[1200px] mx-auto flex pl-[30px] mt-[10px]" data-v-b0f9b77d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/policy/${unref(PolicyAgreementEnum).SERVICE}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{ active: unref(route).params.type == "service" }, "bg-[#EEEEEE] mr-[20px] px-[25px] py-[10px]"])}" data-v-b0f9b77d${_scopeId}> \u7528\u6237\u670D\u52A1\u534F\u8BAE </div>`);
          } else {
            return [
              createVNode("div", {
                class: ["bg-[#EEEEEE] mr-[20px] px-[25px] py-[10px]", { active: unref(route).params.type == "service" }]
              }, " \u7528\u6237\u670D\u52A1\u534F\u8BAE ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/policy/${unref(PolicyAgreementEnum).PRIVACY}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{ active: unref(route).params.type == "privacy" }, "bg-[#EEEEEE] mr-[20px] px-[25px] py-[10px]"])}" data-v-b0f9b77d${_scopeId}> \u9690\u79C1\u534F\u8BAE </div>`);
          } else {
            return [
              createVNode("div", {
                class: ["bg-[#EEEEEE] mr-[20px] px-[25px] py-[10px]", { active: unref(route).params.type == "privacy" }]
              }, " \u9690\u79C1\u534F\u8BAE ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/policy/${unref(PolicyAgreementEnum).PAY}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{ active: unref(route).params.type == "payment" }, "bg-[#EEEEEE] px-[25px] py-[10px] mr-[20px]"])}" data-v-b0f9b77d${_scopeId}> \u7528\u6237\u652F\u4ED8\u534F\u8BAE </div>`);
          } else {
            return [
              createVNode("div", {
                class: ["bg-[#EEEEEE] px-[25px] py-[10px] mr-[20px]", { active: unref(route).params.type == "payment" }]
              }, " \u7528\u6237\u652F\u4ED8\u534F\u8BAE ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/policy/${unref(PolicyAgreementEnum).DISTRIBUTION}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{ active: unref(route).params.type == "distribution" }, "bg-[#EEEEEE] px-[25px] py-[10px]"])}" data-v-b0f9b77d${_scopeId}> \u7528\u6237\u5206\u9500\u534F\u8BAE </div>`);
          } else {
            return [
              createVNode("div", {
                class: ["bg-[#EEEEEE] px-[25px] py-[10px]", { active: unref(route).params.type == "distribution" }]
              }, " \u7528\u6237\u5206\u9500\u534F\u8BAE ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 min-h-0 bg-white" data-v-b0f9b77d>`);
      _push(ssrRenderComponent(_component_el_scrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<div class="render-html p-[30px] w-[1200px] mx-auto" data-v-b0f9b77d${_scopeId}><h1 class="text-center" data-v-b0f9b77d${_scopeId}>${ssrInterpolate(unref(data).title)}</h1><div class="mx-auto richText" data-v-b0f9b77d${_scopeId}>${(_a = unref(data).content) != null ? _a : ""}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "render-html p-[30px] w-[1200px] mx-auto" }, [
                createVNode("h1", { class: "text-center" }, toDisplayString(unref(data).title), 1),
                createVNode("div", {
                  class: "mx-auto richText",
                  innerHTML: unref(data).content
                }, null, 8, ["innerHTML"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/policy/[type].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _type_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b0f9b77d"]]);

export { _type_ as default };
//# sourceMappingURL=_type_-DbLzak6s.mjs.map
