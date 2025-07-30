import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { a5 as useAppStore } from './server.mjs';
import { defineComponent, computed, mergeProps, withCtx, renderSlot, unref, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import './index-L-VTEUEA.mjs';
import '@vueuse/core';
import '@popperjs/core';
import '@vue/shared';
import 'lodash-unified';
import './dropdown-C6fgV-Vy.mjs';
import './position-DVxxNIGX.mjs';
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
import 'weixin-js-sdk';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "manual",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    const customerData = computed(() => appStore.getManualKf);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popover = ElPopover;
      const _component_el_image = ElImage;
      _push(ssrRenderComponent(_component_el_popover, mergeProps({
        placement: "left",
        width: "auto",
        trigger: "hover",
        "show-arrow": false,
        transition: "custom-popover"
      }, _attrs), {
        reference: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_image, {
              class: "w-[150px] h-[150px]",
              src: unref(customerData).qr_code
            }, null, _parent2, _scopeId));
            if (((_a = unref(customerData).title) == null ? void 0 : _a.status) == 1) {
              _push2(`<div class="font-medium text-tx-primary mt-2"${_scopeId}>${ssrInterpolate((_b = unref(customerData).title) == null ? void 0 : _b.value)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (((_c = unref(customerData).service_time) == null ? void 0 : _c.status) == 1) {
              _push2(`<div class="mt-2"${_scopeId}> \u670D\u52A1\u65F6\u95F4\uFF1A${ssrInterpolate((_d = unref(customerData).service_time) == null ? void 0 : _d.value)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (((_e = unref(customerData).phone) == null ? void 0 : _e.status) == 1) {
              _push2(`<div class="mt-2"${_scopeId}> \u8054\u7CFB\u7535\u8BDD\uFF1A${ssrInterpolate((_f = unref(customerData).phone) == null ? void 0 : _f.value)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode(_component_el_image, {
                  class: "w-[150px] h-[150px]",
                  src: unref(customerData).qr_code
                }, null, 8, ["src"]),
                ((_g = unref(customerData).title) == null ? void 0 : _g.status) == 1 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "font-medium text-tx-primary mt-2"
                }, toDisplayString((_h = unref(customerData).title) == null ? void 0 : _h.value), 1)) : createCommentVNode("", true),
                ((_i = unref(customerData).service_time) == null ? void 0 : _i.status) == 1 ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "mt-2"
                }, " \u670D\u52A1\u65F6\u95F4\uFF1A" + toDisplayString((_j = unref(customerData).service_time) == null ? void 0 : _j.value), 1)) : createCommentVNode("", true),
                ((_k = unref(customerData).phone) == null ? void 0 : _k.status) == 1 ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "mt-2"
                }, " \u8054\u7CFB\u7535\u8BDD\uFF1A" + toDisplayString((_l = unref(customerData).phone) == null ? void 0 : _l.value), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/customer/manual.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=manual-B2oZtFmW.mjs.map
