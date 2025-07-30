import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, unref, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import _sfc_main$3 from './search-ex-US3m0iO4.mjs';
import _sfc_main$2 from './search-model-BZBVjp2U.mjs';
import SearchInput from './search-input-CX9i7r_c.mjs';
import { useSearch, useSearchEx } from './useSearch-BaJoxou4.mjs';
import _sfc_main$1 from './search-history-GHzkDnnk.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@vueuse/core';
import './server.mjs';
import 'vue-router';
import 'lodash-es';
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './index-BoqjHllR.mjs';
import './el-segmented-KMsqQ2AI.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-CJqYHNUB.mjs';
import './dropdown-C6fgV-Vy.mjs';
import './index-D7S5lb8a.mjs';
import './useTemplate-BMZ5OoC1.mjs';
import './search-type-BDTcaOnm.mjs';
import './searchEnums-Dgcx5RT8.mjs';
import './search-btn-Bu4r_Ca5.mjs';
import './search-DBP7Ii5U.mjs';
import './el-empty-xbPr04pX.mjs';
import './index-DNeGbNHc.mjs';
import './position-DVxxNIGX.mjs';
import './useLockFn-BWbjkhBs.mjs';

const _imports_0 = "" + buildAssetsURL("ai_search.Ch93bKe1.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search-ask",
  __ssrInlineRender: true,
  setup(__props) {
    const { options, launchSearch } = useSearch();
    const { searchEx, getSearchEx } = useSearchEx();
    getSearchEx();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElScrollbar = ElScrollbar;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full p-4" }, _attrs))} data-v-8a0a3e74>`);
      _push(ssrRenderComponent(_component_ElScrollbar, { class: "scroll-bar bg-body rounded-[15px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute top-4 right-4" data-v-8a0a3e74${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`</div><div class="flex-1 flex flex-col items-center pt-[80px] px-[40px]" data-v-8a0a3e74${_scopeId}><div class="text-center text-[50px] title font-bold relative" data-v-8a0a3e74${_scopeId}><h2 class="title text-primary" data-v-8a0a3e74${_scopeId}>\u5FEB\u641C\u51C6\u7B54</h2><h2 class="title" data-v-8a0a3e74${_scopeId}>\u61C2\u4F60\u66F4\u61C2\u4E16\u754C</h2><img class="w-[125px] h-[125px] absolute top-[50px] right-[-60px]"${ssrRenderAttr("src", _imports_0)} data-v-8a0a3e74${_scopeId}></div><div class="pt-[30px]" data-v-8a0a3e74${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              model: unref(options).model,
              "onUpdate:model": ($event) => unref(options).model = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-[560px]" data-v-8a0a3e74${_scopeId}>`);
            _push2(ssrRenderComponent(SearchInput, {
              mode: "textarea",
              class: "mt-[30px]",
              input: unref(options).ask,
              "onUpdate:input": ($event) => unref(options).ask = $event,
              type: unref(options).type,
              "onUpdate:type": ($event) => unref(options).type = $event,
              model: unref(options).model,
              onSearch: unref(launchSearch)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "pt-[30px] justify-center",
              lists: unref(searchEx),
              onClickItem: unref(launchSearch)
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "absolute top-4 right-4" }, [
                createVNode(_sfc_main$1)
              ]),
              createVNode("div", { class: "flex-1 flex flex-col items-center pt-[80px] px-[40px]" }, [
                createVNode("div", { class: "text-center text-[50px] title font-bold relative" }, [
                  createVNode("h2", { class: "title text-primary" }, "\u5FEB\u641C\u51C6\u7B54"),
                  createVNode("h2", { class: "title" }, "\u61C2\u4F60\u66F4\u61C2\u4E16\u754C"),
                  createVNode("img", {
                    class: "w-[125px] h-[125px] absolute top-[50px] right-[-60px]",
                    src: _imports_0
                  })
                ]),
                createVNode("div", { class: "pt-[30px]" }, [
                  createVNode(_sfc_main$2, {
                    model: unref(options).model,
                    "onUpdate:model": ($event) => unref(options).model = $event
                  }, null, 8, ["model", "onUpdate:model"])
                ]),
                createVNode("div", { class: "w-[560px]" }, [
                  createVNode(SearchInput, {
                    mode: "textarea",
                    class: "mt-[30px]",
                    input: unref(options).ask,
                    "onUpdate:input": ($event) => unref(options).ask = $event,
                    type: unref(options).type,
                    "onUpdate:type": ($event) => unref(options).type = $event,
                    model: unref(options).model,
                    onSearch: unref(launchSearch)
                  }, null, 8, ["input", "onUpdate:input", "type", "onUpdate:type", "model", "onSearch"]),
                  createVNode(_sfc_main$3, {
                    class: "pt-[30px] justify-center",
                    lists: unref(searchEx),
                    onClickItem: unref(launchSearch)
                  }, null, 8, ["lists", "onClickItem"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/_components/search-ask.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SearchAsk = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8a0a3e74"]]);

export { SearchAsk as default };
//# sourceMappingURL=search-ask-BpCHqknd.mjs.map
