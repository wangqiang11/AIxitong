import { E as ElCollapse, a as ElCollapseItem } from './el-collapse-item-DSo9CmH5.mjs';
import { mergeProps, withCtx, renderSlot, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './index-DadLUs6d.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_el_collapse = ElCollapse;
  const _component_el_collapse_item = ElCollapseItem;
  _push(ssrRenderComponent(_component_el_collapse, mergeProps({ "model-value": "name" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_collapse_item, { name: "name" }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "title", {}, null, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "title", {}, void 0, true)
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_collapse_item, { name: "name" }, {
            title: withCtx(() => [
              renderSlot(_ctx.$slots, "title", {}, void 0, true)
            ]),
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            _: 3
          })
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/_components/common/collapse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Collapse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7291479b"]]);

export { Collapse as default };
//# sourceMappingURL=collapse-Dkv7cdT3.mjs.map
