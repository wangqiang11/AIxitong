import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { z as useUserStore, d as ElButton } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import 'lodash-unified';
import './position-DVxxNIGX.mjs';
import '@vue/shared';
import 'vue-router';
import 'lodash-es';
import 'weixin-js-sdk';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';

const noAuth = "" + buildAssetsURL("noAuth.iRqApgVd.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tologin",
  __ssrInlineRender: true,
  setup(__props) {
    const { toggleShowLogin, setLoginPopupType } = useUserStore();
    const toLogin = () => {
      setLoginPopupType();
      toggleShowLogin();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_image = ElImage;
      const _component_ElButton = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center h-[60vh]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_image, {
        class: "w-[200px] h-[200px]",
        src: unref(noAuth)
      }, null, _parent));
      _push(`<div class="text-tx-regular mb-4">\u6682\u65E0\u67E5\u770B\u6743\u9650\uFF0C\u8BF7\u767B\u5F55\u8D26\u53F7\u540E\u67E5\u770B</div>`);
      _push(ssrRenderComponent(_component_ElButton, {
        type: "primary",
        onClick: toLogin
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u70B9\u51FB\u767B\u5F55 `);
          } else {
            return [
              createTextVNode(" \u70B9\u51FB\u767B\u5F55 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/account/tologin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tologin-BQv8QnLK.mjs.map
