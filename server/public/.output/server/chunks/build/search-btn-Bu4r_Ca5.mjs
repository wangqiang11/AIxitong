import { a5 as useAppStore, d as ElButton } from './server.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, unref, createTextVNode, openBlock, createBlock, Fragment, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useSearch } from './useSearch-BaJoxou4.mjs';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './search-DBP7Ii5U.mjs';
import './searchEnums-Dgcx5RT8.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search-btn",
  __ssrInlineRender: true,
  setup(__props) {
    const { config } = useSearch();
    const appStore = useAppStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_button = ElButton;
      const _component_Icon = _sfc_main$1;
      _push(ssrRenderComponent(_component_el_button, mergeProps({
        type: "primary",
        style: {
          padding: "8px"
        }
      }, _attrs), {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-Search" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "el-icon-Search" })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u641C\u7D22 <span class="text-xs ml-1"${_scopeId}>`);
            if (unref(config).isVipFree) {
              _push2(`<!--[--> \u4F1A\u5458\u514D\u8D39 <!--]-->`);
            } else if (unref(config).price > 0) {
              _push2(`<!--[--> -${ssrInterpolate(unref(config).price)}${ssrInterpolate(unref(appStore).getTokenUnit)}<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</span>`);
          } else {
            return [
              createTextVNode(" \u641C\u7D22 "),
              createVNode("span", { class: "text-xs ml-1" }, [
                unref(config).isVipFree ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createTextVNode(" \u4F1A\u5458\u514D\u8D39 ")
                ], 64)) : unref(config).price > 0 ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createTextVNode(" -" + toDisplayString(unref(config).price) + toDisplayString(unref(appStore).getTokenUnit), 1)
                ], 64)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/_components/common/search-btn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=search-btn-Bu4r_Ca5.mjs.map
