import { a5 as useAppStore, z as useUserStore, d as ElButton } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { c as createLoading, a as config, b as checkUserLogin, d as createTask, f as formData } from './useDrawEffect-B2jxDCVi.mjs';
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
import './usePaging-DU8sXki3.mjs';
import './usePolling-DOP50YcO.mjs';
import './DrawEnum-CqAPEJOR.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create-button",
  __ssrInlineRender: true,
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["create"],
  setup(__props, { emit: __emit }) {
    const appStore = useAppStore();
    const userStore = useUserStore();
    const create = () => {
      if (checkUserLogin()) return;
      createTask(formData.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute bottom-0 left-0 bg-body p-4 w-full z-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_button, {
        size: "large",
        type: "primary",
        class: "w-full",
        disabled: __props.disabled,
        onClick: create,
        loading: unref(createLoading)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(createLoading)) {
              _push2(`<div${_scopeId}>\u6B63\u5728\u8BF7\u6C42\u4E2D</div>`);
            } else {
              _push2(`<div${_scopeId}><span class="text-base font-bold"${_scopeId}>\u7ACB\u5373\u751F\u6210</span>`);
              if (unref(config).is_member) {
                _push2(`<span class="text-sm ml-2"${_scopeId}>\u4F1A\u5458\u514D\u8D39</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(config).power != 0 && !unref(config).is_member && unref(userStore).isLogin) {
                _push2(`<span class="text-sm ml-2"${_scopeId}>\u6D88\u8017${ssrInterpolate(unref(config).power || "--")}${ssrInterpolate(unref(appStore).getTokenUnit)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            }
          } else {
            return [
              unref(createLoading) ? (openBlock(), createBlock("div", { key: 0 }, "\u6B63\u5728\u8BF7\u6C42\u4E2D")) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("span", { class: "text-base font-bold" }, "\u7ACB\u5373\u751F\u6210"),
                unref(config).is_member ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "text-sm ml-2"
                }, "\u4F1A\u5458\u514D\u8D39")) : createCommentVNode("", true),
                unref(config).power != 0 && !unref(config).is_member && unref(userStore).isLogin ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: "text-sm ml-2"
                }, "\u6D88\u8017" + toDisplayString(unref(config).power || "--") + toDisplayString(unref(appStore).getTokenUnit), 1)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/common/create-button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create-button-am2dhDog.mjs.map
