import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { z as useUserStore, a5 as useAppStore, b7 as useState, B as vLoading, bU as getWxCode, bV as checkTicket, bt as LoginPopupTypeEnum } from './server.mjs';
import { defineComponent, toRefs, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { u as usePolling } from './usePolling-DOP50YcO.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './position-DVxxNIGX.mjs';

const userStore = useUserStore();
const appStore = useAppStore();
const useGetCode = () => {
  const state = useState(() => ({
    pending: true,
    data: {}
  }), "$OO04Zgg9KB");
  const getData = async () => {
    try {
      state.value.pending = true;
      const data = await getWxCode();
      state.value.data = data;
      state.value.pending = false;
    } catch (error) {
      state.value.pending = false;
      return Promise.reject(error);
    }
  };
  return {
    state,
    getData
  };
};
var WxLoginStatus = /* @__PURE__ */ ((WxLoginStatus2) => {
  WxLoginStatus2[WxLoginStatus2["CODE_ERROR"] = -1] = "CODE_ERROR";
  WxLoginStatus2[WxLoginStatus2["INVALID"] = 0] = "INVALID";
  WxLoginStatus2[WxLoginStatus2["NORMAL"] = 1] = "NORMAL";
  WxLoginStatus2[WxLoginStatus2["SCANNED_CODE"] = 2] = "SCANNED_CODE";
  WxLoginStatus2[WxLoginStatus2["LOGIN_FAIL"] = 3] = "LOGIN_FAIL";
  WxLoginStatus2[WxLoginStatus2["LOGIN_SUCCESS"] = 4] = "LOGIN_SUCCESS";
  return WxLoginStatus2;
})(WxLoginStatus || {});
const useCheckTicket = (ticket) => {
  const status = useState(
    () => 1,
    "$u1hDQUKMyG"
  );
  const check = async () => {
    try {
      const data = await checkTicket({
        key: ticket.value.key
      });
      status.value = data.status;
      if (status.value == 4) {
        loginSuccess(data.user);
        end();
      }
      return data;
    } catch (error) {
      status.value = 3;
    }
  };
  const endCallback = () => {
    status.value = 0;
  };
  const { start, end, result } = usePolling(check, {
    key: "wx_login",
    totalTime: 120 * 1e3,
    callback: endCallback
  });
  return {
    status,
    start,
    end,
    result
  };
};
const loginSuccess = async (user) => {
  const { login, setUser, toggleShowLogin, setLoginPopupType } = userStore;
  if (!user.mobile && appStore.getLoginConfig.coerce_mobile) {
    userStore.temToken = user.token;
    setLoginPopupType(LoginPopupTypeEnum.BIND_MOBILE);
  } else {
    login(user.token);
    setUser(user);
    toggleShowLogin(false);
    (void 0).reload();
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "weixin-login",
  __ssrInlineRender: true,
  setup(__props) {
    useUserStore();
    const { state: code, getData: getCode } = useGetCode();
    const { pending, data } = toRefs(code.value);
    const { start, end, status } = useCheckTicket(data);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$1;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-[10px]" }, _attrs))}><div class="flex flex-col items-center mt-[20px]"><div${ssrRenderAttrs(mergeProps({ class: "relative w-[180px] h-[180px]" }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(pending))))}>`);
      if (unref(data).url) {
        _push(ssrRenderComponent(unref(ElImage), {
          src: unref(data).url,
          class: "w-full h-full"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(status) == unref(WxLoginStatus).SCANNED_CODE) {
        _push(`<div class="absolute left-0 top-0 w-full h-full bg-mask" style="${ssrRenderStyle({ "background": "rgba(0, 0, 0, 0.5)" })}"><div class="h-full text-primary flex justify-center items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "el-icon-SuccessFilled",
          size: 30
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(status) == unref(WxLoginStatus).INVALID || unref(status) == unref(WxLoginStatus).LOGIN_FAIL || unref(status) == unref(WxLoginStatus).CODE_ERROR) {
        _push(`<div class="absolute left-0 top-0 w-full h-full bg-overlay cursor-pointer" style="${ssrRenderStyle({ "background": "rgba(0, 0, 0, 0.5)" })}"><div class="h-full flex flex-col justify-center items-center text-white"><div>\u70B9\u51FB\u5237\u65B0</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(status) == unref(WxLoginStatus).SCANNED_CODE) {
        _push(`<!--[--><div class="mt-3">\u626B\u7801\u6210\u529F</div><div class="mt-5 text-error text-sm"> \u8BF7\u5728\u5FAE\u4FE1\u516C\u4F17\u53F7\u4E2D\u786E\u8BA4\u767B\u5F55 </div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (unref(status) == unref(WxLoginStatus).INVALID) {
        _push(`<!--[--><div class="mt-3 text-error">\u4E8C\u7EF4\u7801\u5931\u6548</div><div class="mt-5 text-sm">\u8BF7\u5728\u70B9\u51FB\u4E8C\u7EF4\u7801\u5237\u65B0</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (unref(status) == unref(WxLoginStatus).LOGIN_FAIL) {
        _push(`<!--[--><div class="mt-3 text-error">\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55</div><div class="mt-5 text-sm">\u8BF7\u5728\u70B9\u51FB\u4E8C\u7EF4\u7801\u5237\u65B0</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (unref(status) == unref(WxLoginStatus).NORMAL || unref(status) == unref(WxLoginStatus).LOGIN_SUCCESS || unref(status) == unref(WxLoginStatus).CODE_ERROR) {
        _push(`<!--[--><div class="mt-3">\u5FAE\u4FE1\u626B\u7801\u767B\u5F55/\u6CE8\u518C</div><div class="mt-5 text-tx-secondary text-sm"> \u9996\u6B21\u626B\u7801\u5173\u6CE8\u516C\u4F17\u53F7\u540E\u5C06\u81EA\u52A8\u6CE8\u518C\u65B0\u8D26\u53F7 </div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/account/login/weixin-login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=weixin-login-C37aKzsA.mjs.map
