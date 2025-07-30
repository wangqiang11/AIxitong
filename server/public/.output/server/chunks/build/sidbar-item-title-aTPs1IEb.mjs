import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import './index-L-VTEUEA.mjs';
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
import '@popperjs/core';
import './dropdown-C6fgV-Vy.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sidbar-item-title",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    tips: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popover = ElPopover;
      const _component_Icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between select-none" }, _attrs))}><h3 class="flex items-center gap-2 font-bold mb-2"><p><span>${ssrInterpolate(__props.title)}</span>`);
      if (__props.required) {
        _push(`<span class="text-error ml-1">*</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p>`);
      if (__props.tips !== "none" && __props.tips !== "") {
        _push(ssrRenderComponent(_component_el_popover, {
          placement: "right",
          width: 200,
          trigger: "hover",
          "show-arrow": false,
          transition: "custom-popover",
          content: __props.tips
        }, {
          reference: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center cursor-pointer text-[#999999]"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "el-icon-QuestionFilled",
                size: 14
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center cursor-pointer text-[#999999]" }, [
                  createVNode(_component_Icon, {
                    name: "el-icon-QuestionFilled",
                    size: 14
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</h3><div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/common/sidbar-item-title.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sidbar-item-title-aTPs1IEb.mjs.map
