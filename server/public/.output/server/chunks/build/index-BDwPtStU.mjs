import { E as ElDialog } from './index-CzJm6kkT.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { z as useUserStore, a5 as useAppStore, bt as LoginPopupTypeEnum } from './server.mjs';
import { defineComponent, computed, watch, mergeProps, unref, isRef, withCtx, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import Login from './index-BZwsOHV2.mjs';
import _sfc_main$1 from './forgot-pwd-DSRa74TH.mjs';
import Register from './index-SK82_cfs.mjs';
import _sfc_main$2 from './bind-mobile-DCW2ViFa.mjs';
import _sfc_main$3 from './bind-weixin-CghyAKzM.mjs';
import './use-dialog-DHq_GjFf.mjs';
import '@vueuse/core';
import 'lodash-unified';
import './refs-CJvnaIJj.mjs';
import '@vue/shared';
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
import './el-tab-pane-C7DQ8faq.mjs';
import './strings-D1uxkXhq.mjs';
import './index-C5I0EtSx.mjs';
import './nuxt-link-l5zPv3vf.mjs';
import './mobile-login-CIZyd954.mjs';
import './index-DLL0sEcv.mjs';
import 'async-validator';
import './index-CUhOTuS-.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-0xCxAaTZ.mjs';
import './index-D7S5lb8a.mjs';
import './index-5Ia44xzE.mjs';
import './index-6v4EX2UV.mjs';
import '@chenfengyuan/vue-countdown';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './useLockFn-BWbjkhBs.mjs';
import './mailbox-login-DTfJ6zDd.mjs';
import './weixin-login-C37aKzsA.mjs';
import './index-BoqjHllR.mjs';
import './usePolling-DOP50YcO.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const appStore = useAppStore();
    const showLogin = computed({
      get() {
        return userStore.showLogin;
      },
      set(value) {
        userStore.showLogin = value;
      }
    });
    watch(
      () => userStore.showLogin,
      (value) => {
        if (!value) userStore.temToken = null;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElDialog = ElDialog;
      const _component_ElImage = ElImage;
      _push(ssrRenderComponent(_component_ElDialog, mergeProps({
        modelValue: unref(showLogin),
        "onUpdate:modelValue": ($event) => isRef(showLogin) ? showLogin.value = $event : null,
        width: "auto",
        class: "login-popup",
        "append-to-body": "",
        "show-close": unref(userStore).loginPopupType !== unref(LoginPopupTypeEnum).BIND_MOBILE,
        "close-on-click-modal": false,
        style: { "border-radius": "16px", "overflow": "hidden", "padding": "0" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex"${_scopeId}>`);
            if (unref(appStore).getWebsiteConfig.pc_login_image && unref(userStore).loginPopupType == unref(LoginPopupTypeEnum).LOGIN && !unref(appStore).isMobile) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ElImage, {
                class: "w-[320px] h-full",
                fit: "cover",
                src: unref(appStore).getWebsiteConfig.pc_login_image
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex-1 text-tx-primary flex flex-col w-[400px]"${_scopeId}>`);
            if (unref(userStore).loginPopupType == unref(LoginPopupTypeEnum).LOGIN) {
              _push2(ssrRenderComponent(Login, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(userStore).loginPopupType == unref(LoginPopupTypeEnum).FORGOT_PWD_MAILBOX || unref(userStore).loginPopupType == unref(LoginPopupTypeEnum).FORGOT_PWD_MOBILE) {
              _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(userStore).loginPopupType == unref(LoginPopupTypeEnum).REGISTER) {
              _push2(ssrRenderComponent(Register, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(userStore).loginPopupType == unref(LoginPopupTypeEnum).BIND_MOBILE) {
              _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(userStore).loginPopupType == unref(LoginPopupTypeEnum).BIND_WEIXIN) {
              _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex" }, [
                unref(appStore).getWebsiteConfig.pc_login_image && unref(userStore).loginPopupType == unref(LoginPopupTypeEnum).LOGIN && !unref(appStore).isMobile ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(_component_ElImage, {
                    class: "w-[320px] h-full",
                    fit: "cover",
                    src: unref(appStore).getWebsiteConfig.pc_login_image
                  }, null, 8, ["src"])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "flex-1 text-tx-primary flex flex-col w-[400px]" }, [
                  unref(userStore).loginPopupType == unref(LoginPopupTypeEnum).LOGIN ? (openBlock(), createBlock(Login, { key: 0 })) : createCommentVNode("", true),
                  unref(userStore).loginPopupType == unref(LoginPopupTypeEnum).FORGOT_PWD_MAILBOX || unref(userStore).loginPopupType == unref(LoginPopupTypeEnum).FORGOT_PWD_MOBILE ? (openBlock(), createBlock(_sfc_main$1, { key: 1 })) : createCommentVNode("", true),
                  unref(userStore).loginPopupType == unref(LoginPopupTypeEnum).REGISTER ? (openBlock(), createBlock(Register, { key: 2 })) : createCommentVNode("", true),
                  unref(userStore).loginPopupType == unref(LoginPopupTypeEnum).BIND_MOBILE ? (openBlock(), createBlock(_sfc_main$2, { key: 3 })) : createCommentVNode("", true),
                  unref(userStore).loginPopupType == unref(LoginPopupTypeEnum).BIND_WEIXIN ? (openBlock(), createBlock(_sfc_main$3, { key: 4 })) : createCommentVNode("", true)
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/account/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BDwPtStU.mjs.map
