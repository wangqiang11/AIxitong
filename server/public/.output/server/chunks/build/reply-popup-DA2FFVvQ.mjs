import { P as Popup } from './index-BKj4TrcW.mjs';
import { defineComponent, shallowRef, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './index-CzJm6kkT.mjs';
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
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "reply-popup",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const popRef = shallowRef();
    const replyTitle = ref("");
    const replyContent = ref("");
    const open = (reply, title) => {
      var _a;
      replyTitle.value = title;
      (_a = popRef.value) == null ? void 0 : _a.open();
      replyContent.value = reply;
    };
    __expose({ open });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_popup = Popup;
      _push(ssrRenderComponent(_component_popup, mergeProps({
        ref_key: "popRef",
        ref: popRef,
        width: "700px",
        title: unref(replyTitle)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="whitespace-pre-wrap"${_scopeId}>${ssrInterpolate(unref(replyContent))}</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "whitespace-pre-wrap" }, toDisplayString(unref(replyContent)), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-dialogue/reply-popup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=reply-popup-DA2FFVvQ.mjs.map
