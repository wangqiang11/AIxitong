import { useSSRContext, defineComponent, ref, watch, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$2 } from './index-DLVgZG5d.mjs';
import { a5 as useAppStore, d as ElButton } from './server.mjs';
import { _ as _imports_0 } from './index_arrow-right02-CtbdAQ0b.mjs';
import './nuxt-link-l5zPv3vf.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'lodash-es';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    color: {
      type: String,
      default: "#000000"
    },
    textTips: {
      type: [Array, Object],
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const words = ref([]);
    const str = ref("AI\u667A\u80FD\u804A\u5929\u7CFB\u7EDF\u3001AI\u7ED8\u753B\u3001\u5927\u6A21\u578B\u77E5\u8BC6\u5E93\u8BAD\u7EC3\u5F00\u53D1");
    ref([]);
    ref(0);
    watch(
      () => props.textTips,
      (newTips) => {
        console.log("textTips");
        str.value = newTips;
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "typer inline-block" }, _attrs))} data-v-fd65b48f><div class="typer-content inline-block" data-v-fd65b48f><p class="typer-dynamic" data-v-fd65b48f><span class="cut" data-v-fd65b48f><!--[-->`);
      ssrRenderList(words.value, (letter, index) => {
        _push(`<span class="word" data-v-fd65b48f>${ssrInterpolate(letter)}</span>`);
      });
      _push(`<!--]--><span class="typer-cursor" data-v-fd65b48f></span></span></p></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/typing/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fd65b48f"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "title",
  __ssrInlineRender: true,
  props: {
    prop: {}
  },
  setup(__props) {
    const { getImageUrl } = useAppStore();
    const height = ref(510);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_typing = __nuxt_component_0;
      const _component_AppLink = _sfc_main$2;
      const _component_ElButton = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "bg-center home-title mb-[30px]",
        style: {
          height: `${unref(height)}px`,
          paddingTop: "var(--header-height)",
          backgroundImage: `url(${unref(getImageUrl)(_ctx.prop.bgImage)})`
        }
      }, _attrs))} data-v-ff8a63d3><div class="max-w-[1200px] mx-auto h-full flex flex-col justify-center" data-v-ff8a63d3><div class="flex justify-between items-center" data-v-ff8a63d3><div class="flex flex-col items-stretch justify-center h-full sm:py-[80px] py-[30px] mx-[20px]" data-v-ff8a63d3>`);
      if (_ctx.prop.title) {
        _push(`<h1 class="font-medium sm:text-[45px] text-[30px] text-left" data-v-ff8a63d3>`);
        _push(ssrRenderComponent(_component_typing, {
          textTips: _ctx.prop.title
        }, null, _parent));
        _push(`</h1>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="hidden" data-v-ff8a63d3>${ssrInterpolate(_ctx.prop.title)}</h1>`);
      if (_ctx.prop.desc) {
        _push(`<p class="max-w-[610px] text-left text-lg sm:my-[40px] my-[20px]" data-v-ff8a63d3>${ssrInterpolate(_ctx.prop.desc)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div data-v-ff8a63d3>`);
      if (_ctx.prop.isShowBtn) {
        _push(`<div data-v-ff8a63d3>`);
        _push(ssrRenderComponent(_component_AppLink, {
          to: {
            path: (_a = _ctx.prop.link) == null ? void 0 : _a.path,
            query: (_b = _ctx.prop.link) == null ? void 0 : _b.query
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElButton, {
                type: "primary",
                class: "enter-btn hover-to-right",
                size: "large"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-white" data-v-ff8a63d3${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} class="w-[24px] h-[24px] round-btn" alt="" data-v-ff8a63d3${_scopeId2}></div><span class="ml-4" data-v-ff8a63d3${_scopeId2}>${ssrInterpolate(_ctx.prop.btnText)}</span>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex justify-center items-center w-[50px] h-[50px] rounded-full bg-white" }, [
                        createVNode("img", {
                          src: _imports_0,
                          class: "w-[24px] h-[24px] round-btn",
                          alt: ""
                        })
                      ]),
                      createVNode("span", { class: "ml-4" }, toDisplayString(_ctx.prop.btnText), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ElButton, {
                  type: "primary",
                  class: "enter-btn hover-to-right",
                  size: "large"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex justify-center items-center w-[50px] h-[50px] rounded-full bg-white" }, [
                      createVNode("img", {
                        src: _imports_0,
                        class: "w-[24px] h-[24px] round-btn",
                        alt: ""
                      })
                    ]),
                    createVNode("span", { class: "ml-4" }, toDisplayString(_ctx.prop.btnText), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex-none" data-v-ff8a63d3><img${ssrRenderAttr("src", unref(getImageUrl)(_ctx.prop.rightImage))} class="w-[600px]" alt="" data-v-ff8a63d3></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/_components/title.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const title = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ff8a63d3"]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: title
});

export { __vite_glob_0_4 as _ };
//# sourceMappingURL=title-5oqj6kGf.mjs.map
