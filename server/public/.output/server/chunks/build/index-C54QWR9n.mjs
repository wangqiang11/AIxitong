import { ag as useRoute, ah as __nuxt_component_0 } from './server.mjs';
import { E as ElResult } from './el-result-V-Bl2idQ.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { defineComponent, withAsyncContext, watch, withCtx, unref, createVNode, openBlock, createBlock, Fragment, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import SearchAsk from './search-ask-BpCHqknd.mjs';
import _sfc_main$1 from './index-CVw00ac5.mjs';
import { useSearch } from './useSearch-BaJoxou4.mjs';
import { e as emptyImg } from './empty_con-BDdV71_z.mjs';
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
import './search-ex-US3m0iO4.mjs';
import './index-BoqjHllR.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './search-model-BZBVjp2U.mjs';
import './el-segmented-KMsqQ2AI.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-CJqYHNUB.mjs';
import './dropdown-C6fgV-Vy.mjs';
import './index-D7S5lb8a.mjs';
import './useTemplate-BMZ5OoC1.mjs';
import './search-type-BDTcaOnm.mjs';
import './searchEnums-Dgcx5RT8.mjs';
import './search-input-CX9i7r_c.mjs';
import './search-btn-Bu4r_Ca5.mjs';
import './search-DBP7Ii5U.mjs';
import './search-history-GHzkDnnk.mjs';
import './el-empty-xbPr04pX.mjs';
import './index-DNeGbNHc.mjs';
import './useLockFn-BWbjkhBs.mjs';
import './el-skeleton-item-P_GLWXGa.mjs';
import './index-DRyhljQ3.mjs';
import 'markdown-it';
import 'highlight.js';
import '@vscode/markdown-it-katex';
import './input-select-BWZY0ed0.mjs';
import './steps-CVh2uKQ2.mjs';
import './index-C5I0EtSx.mjs';
import './doc-DoNecCCG.mjs';
import './el-pagination-ClrwtCwT.mjs';
import './index-CUhOTuS-.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import './suggestion-DUZ5Re6M.mjs';
import './collapse-Dkv7cdT3.mjs';
import './el-collapse-item-DSo9CmH5.mjs';
import './index-DadLUs6d.mjs';
import './action-btns-BACVGK4l.mjs';
import './mind-map-LCO32sbi.mjs';
import 'markmap-lib';
import './outline-9dEanu7b.mjs';
import './index-53t5ntO1.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { showSearchResult, config, getConfig, getSearchInfo, options, result } = useSearch();
    [__temp, __restore] = withAsyncContext(() => useAsyncData(() => getConfig(), "$mZBhG8hzNj")), await __temp, __restore();
    watch(
      () => route.query.id,
      (value) => {
        if (value) {
          result.value.id < 0 && getSearchInfo(value);
        } else {
          options.value.ask = "";
          showSearchResult.value = false;
        }
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_el_result = ElResult;
      const _component_el_image = ElImage;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(config).status > 0) {
              _push2(`<!--[-->`);
              if (unref(showSearchResult)) {
                _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(SearchAsk, null, null, _parent2, _scopeId));
              }
              _push2(`<!--]-->`);
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
          } else {
            return [
              unref(config).status > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                unref(showSearchResult) ? (openBlock(), createBlock(_sfc_main$1, { key: 0 })) : (openBlock(), createBlock(SearchAsk, { key: 1 }))
              ], 64)) : (openBlock(), createBlock("div", {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C54QWR9n.mjs.map
