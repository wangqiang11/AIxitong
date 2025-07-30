import { bo as copy, d as ElButton } from './server.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "action-btns",
  __ssrInlineRender: true,
  setup(__props) {
    const { launchSearch, result } = useSearch();
    const copyResult = () => {
      const text = result.value.data.reduce((prev, item) => {
        if (["markdown", "expand_query"].includes(item.type)) {
          prev += item.content + "\n";
        }
        return prev;
      }, "");
      copy(text);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElButton = ElButton;
      const _component_Icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ElButton, {
        link: "",
        onClick: ($event) => unref(launchSearch)()
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-RefreshLeft" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "el-icon-RefreshLeft" })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u91CD\u5199 `);
          } else {
            return [
              createTextVNode(" \u91CD\u5199 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElButton, {
        link: "",
        type: "primary",
        onClick: copyResult
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-DocumentCopy" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "el-icon-DocumentCopy" })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u590D\u5236 `);
          } else {
            return [
              createTextVNode(" \u590D\u5236 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/_components/search-result/action-btns.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=action-btns-BACVGK4l.mjs.map
