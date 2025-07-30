import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { defineComponent, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import Collapse from './collapse-Dkv7cdT3.mjs';
import _sfc_main$1 from './search-ex-US3m0iO4.mjs';
import { useSearch } from './useSearch-BaJoxou4.mjs';
import './server.mjs';
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
import './el-collapse-item-DSo9CmH5.mjs';
import './index-DadLUs6d.mjs';
import './search-DBP7Ii5U.mjs';
import './searchEnums-Dgcx5RT8.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "suggestion",
  __ssrInlineRender: true,
  props: {
    lists: { default: () => [] }
  },
  setup(__props) {
    const { launchSearch, result } = useSearch();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$2;
      _push(ssrRenderComponent(Collapse, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "el-icon-Search",
              size: 16
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-2xl ml-1"${_scopeId}> \u76F8\u5173\u95EE\u9898 </span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "el-icon-Search",
                size: 16
              }),
              createVNode("span", { class: "text-2xl ml-1" }, " \u76F8\u5173\u95EE\u9898 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, {
              lists: _ctx.lists,
              prop: "text",
              onClickItem: unref(launchSearch)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, {
                lists: _ctx.lists,
                prop: "text",
                onClickItem: unref(launchSearch)
              }, null, 8, ["lists", "onClickItem"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/_components/search-result/suggestion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=suggestion-DUZ5Re6M.mjs.map
