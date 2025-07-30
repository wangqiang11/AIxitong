import { _ as _sfc_main$1 } from './index-DLVgZG5d.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { a5 as useAppStore } from './server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-l5zPv3vf.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'lodash-es';
import '@vueuse/core';
import 'lodash-unified';
import './position-DVxxNIGX.mjs';
import '@vue/shared';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'weixin-js-sdk';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIMSURBVFiF7ZaxTttQFIa/Y4ekFHet/AAMeYd6SDZgzwN0RV26IHWL1A4Va1XWPgA7GZOBvAOPgNLVNODknp/BJiVpBGlrtvySJfvonvt/9xxf+8JWW21Vo3r9SdLrT5K/ybHazL9PknC7O9AcGtPp4Xn/bb5JXlQXALPX3wwyIJu19gabVqI+gIJPiCsApOwu3ht0NoCoDeD8JLmO3LoYVyopsoTnIeqrQAVxh3WhqgRke/OnIWoFALg4Sa5nBV1V7RBku0Uy6Byvh6gdAOCin1wHpwu6wgApayXrIRbb8ONwsh+i6B0eEwL4DAgQqgsHL2Lw1RgEjxZj3YECgkMIUaq5vmhOw4PhgcvZND8cnf3eoo2HG8VRZs4Pdwcv2SRAYLJyYnNcIBmm0kwYyJEMVEKXMTAJLS84azTfDDrHOhydWQ4rLVgarJXUpQF/TLyUrfXhh4DBz8XTogIW/FJE7x8mV9k7JDDiKlVYVZVyVAzGolJCyKqKCZBSzD4vfMR4XuQHj1tQ26d4VUf9PI2Ihj5XW+X7MS7ymyVzeKFdcNTP07jBENSulrjW/EUAeqd5utNkaKINgHw8ba03rx2gd5qnAQ2N0lz4+FdjejB64s9YG0DvNE891lCiLQBpfMPT5rUCaMe/Uq0cNG758+bwaBv+r6x5+8FvX+2D0SymB5seSGrVvxzJttpqq3uRBCLzV/J9QgAAAABJRU5ErkJggg==";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "entrance",
  __ssrInlineRender: true,
  props: {
    prop: {}
  },
  setup(__props) {
    const props = __props;
    const appStore = useAppStore();
    const getShowData = computed(
      () => props.prop.data.filter((item) => item.isShow)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppLink = _sfc_main$1;
      const _component_ElImage = ElImage;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "xl:max-w-[1200px] flex justify-center mx-auto" }, _attrs))} data-v-12fc9586><div class="grid flex-wrap" style="${ssrRenderStyle({
        "grid-template-columns": `repeat(${props.prop.showType}, minmax(0, 1fr))`
      })}" data-v-12fc9586><!--[-->`);
      ssrRenderList(unref(getShowData), (item, index) => {
        var _a, _b;
        _push(`<div class="flex-1 md:mb-[40px] mb-[20px]" data-v-12fc9586>`);
        _push(ssrRenderComponent(_component_AppLink, {
          to: {
            path: (_a = item.link) == null ? void 0 : _a.path,
            query: (_b = item.link) == null ? void 0 : _b.query
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2;
            if (_push2) {
              _push2(`<div class="chat-card h-full"${ssrRenderAttr("to", (_a2 = item.link) == null ? void 0 : _a2.path)} data-v-12fc9586${_scopeId}>`);
              if (item.icon) {
                _push2(`<div class="mb-[10px]" data-v-12fc9586${_scopeId}>`);
                _push2(ssrRenderComponent(_component_ElImage, {
                  class: "w-[58px] h-[58px] rounded-lg",
                  src: unref(appStore).getImageUrl(item.icon)
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="text-2xl font-medium" data-v-12fc9586${_scopeId}>${ssrInterpolate(item.title)}</div><div class="line w-[100%] mt-4" data-v-12fc9586${_scopeId}></div><div class="my-4 text-sm h-[80px] leading-[20px] line-clamp-4" data-v-12fc9586${_scopeId}>${ssrInterpolate(item.desc)}</div><div class="enter-btn mt-3" data-v-12fc9586${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="w-[32px] h-[32px]" alt="" data-v-12fc9586${_scopeId}></div></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "chat-card h-full",
                  to: (_b2 = item.link) == null ? void 0 : _b2.path
                }, [
                  item.icon ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mb-[10px]"
                  }, [
                    createVNode(_component_ElImage, {
                      class: "w-[58px] h-[58px] rounded-lg",
                      src: unref(appStore).getImageUrl(item.icon)
                    }, null, 8, ["src"])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "text-2xl font-medium" }, toDisplayString(item.title), 1),
                  createVNode("div", { class: "line w-[100%] mt-4" }),
                  createVNode("div", { class: "my-4 text-sm h-[80px] leading-[20px] line-clamp-4" }, toDisplayString(item.desc), 1),
                  createVNode("div", { class: "enter-btn mt-3" }, [
                    createVNode("img", {
                      src: _imports_0,
                      class: "w-[32px] h-[32px]",
                      alt: ""
                    })
                  ])
                ], 8, ["to"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/_components/entrance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const entrance = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-12fc9586"]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: entrance
});

export { __vite_glob_0_0 as _ };
//# sourceMappingURL=entrance-D67OpvrX.mjs.map
