import { E as ElImage } from './index-C2yEelJa.mjs';
import { _ as _sfc_main$1 } from './index-DLVgZG5d.mjs';
import { a5 as useAppStore, d as ElButton } from './server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './index_arrow-right02-CtbdAQ0b.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import 'lodash-unified';
import './position-DVxxNIGX.mjs';
import '@vue/shared';
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
import 'weixin-js-sdk';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "intro",
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
      const _component_ElImage = ElImage;
      const _component_AppLink = _sfc_main$1;
      const _component_ElButton = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-[40px]" }, _attrs))} data-v-5fa0cf3f><div class="min-[1200px]:w-[1200px] mx-auto" data-v-5fa0cf3f><!--[-->`);
      ssrRenderList(unref(getShowData), (item, index) => {
        var _a, _b;
        _push(`<div class="mb-[100px]" data-v-5fa0cf3f><div class="flex flex-col items-center" data-v-5fa0cf3f><div class="flex-1 my-[30px] px-[20px]" data-v-5fa0cf3f><div class="flex justify-center text-center" data-v-5fa0cf3f><div data-v-5fa0cf3f><div class="text-[24px] font-bold" data-v-5fa0cf3f>${ssrInterpolate(item.title)}</div><div class="mt-[20px] text-[16px]" data-v-5fa0cf3f>${ssrInterpolate(item.subtitle)}</div></div></div></div><div class="flex-1 px-[20px]" data-v-5fa0cf3f><div class="flex justify-center" data-v-5fa0cf3f>`);
        _push(ssrRenderComponent(_component_ElImage, {
          fit: "cover",
          src: unref(appStore).getImageUrl(item.image)
        }, null, _parent));
        _push(`</div></div><div class="mt-[90px]" data-v-5fa0cf3f>`);
        _push(ssrRenderComponent(_component_AppLink, {
          to: {
            path: (_a = item.link) == null ? void 0 : _a.path,
            query: (_b = item.link) == null ? void 0 : _b.query
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
                    _push3(`<div class="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-white" data-v-5fa0cf3f${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} class="w-[24px] h-[24px]" alt="" data-v-5fa0cf3f${_scopeId2}></div><span class="ml-4" data-v-5fa0cf3f${_scopeId2}>\u9A6C\u4E0A\u4F53\u9A8C</span>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex justify-center items-center w-[50px] h-[50px] rounded-full bg-white" }, [
                        createVNode("img", {
                          src: _imports_0,
                          class: "w-[24px] h-[24px]",
                          alt: ""
                        })
                      ]),
                      createVNode("span", { class: "ml-4" }, "\u9A6C\u4E0A\u4F53\u9A8C")
                    ];
                  }
                }),
                _: 2
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
                        class: "w-[24px] h-[24px]",
                        alt: ""
                      })
                    ]),
                    createVNode("span", { class: "ml-4" }, "\u9A6C\u4E0A\u4F53\u9A8C")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/_components/intro.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const intro = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5fa0cf3f"]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: intro
});

export { __vite_glob_0_3 as _ };
//# sourceMappingURL=intro-BJNU7tT2.mjs.map
