import { E as ElTabs, a as ElTabPane } from './el-tab-pane-C7DQ8faq.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { a5 as useAppStore, z as useUserStore, bw as PolicyAgreementEnum, d as ElButton, bt as LoginPopupTypeEnum } from './server.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, unref, withCtx, openBlock, createBlock, createCommentVNode, Fragment, renderList, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import _sfc_main$2 from './mobile-login-CIZyd954.mjs';
import _sfc_main$3 from './mailbox-login-DTfJ6zDd.mjs';
import _sfc_main$1 from './weixin-login-C37aKzsA.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import './strings-D1uxkXhq.mjs';
import '@vue/shared';
import './index-C5I0EtSx.mjs';
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
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
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
import './useLockFn-BWbjkhBs.mjs';
import './index-BoqjHllR.mjs';
import './usePolling-DOP50YcO.mjs';
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    const userStore = useUserStore();
    const loginWayLists = [
      {
        name: "\u5FAE\u4FE1\u767B\u5F55",
        type: "3"
        /* WEIXIN */
      },
      {
        name: "\u624B\u673A\u53F7\u767B\u5F55",
        type: "1"
        /* MOBILE */
      },
      {
        name: "\u90AE\u7BB1\u767B\u5F55",
        type: "2"
        /* MAILBOX */
      }
    ];
    const tabCurrent = ref(1);
    const loginWayListsFilter = computed(() => {
      return loginWayLists.filter((item) => getLoginWay.value.includes(item.type));
    });
    const getLoginWay = computed(
      () => {
        var _a;
        return ((_a = appStore.getLoginConfig) == null ? void 0 : _a.login_way) || [];
      }
    );
    const getRegisterWay = computed(
      () => {
        var _a;
        return ((_a = appStore.getLoginConfig) == null ? void 0 : _a.register_way) || [];
      }
    );
    const isOpenAgreement = computed(
      () => appStore.getLoginConfig.is_agreement === 1
    );
    const loginWay = computed(() => {
      tabCurrent.value = appStore.getLoginConfig.default_login_way.toString();
      return appStore.getLoginConfig.default_login_way.toString();
    });
    const tabChange = (name) => {
      tabCurrent.value = name;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-full" }, _attrs))} data-v-b05048cb><div class="flex-1 pt-[20px] px-[30px] min-h-0" data-v-b05048cb>`);
      _push(ssrRenderComponent(_component_el_tabs, {
        "model-value": unref(loginWay),
        onTabChange: tabChange
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(loginWayListsFilter), (item, index) => {
              _push2(ssrRenderComponent(_component_el_tab_pane, {
                key: index,
                label: item.name,
                name: item.type
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (item.type === "3" && unref(tabCurrent) === "3") {
                      _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (item.type === "1") {
                      _push3(ssrRenderComponent(_sfc_main$2, null, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (item.type === "2") {
                      _push3(ssrRenderComponent(_sfc_main$3, null, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      item.type === "3" && unref(tabCurrent) === "3" ? (openBlock(), createBlock(_sfc_main$1, { key: 0 })) : createCommentVNode("", true),
                      item.type === "1" ? (openBlock(), createBlock(_sfc_main$2, { key: 1 })) : createCommentVNode("", true),
                      item.type === "2" ? (openBlock(), createBlock(_sfc_main$3, { key: 2 })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(loginWayListsFilter), (item, index) => {
                return openBlock(), createBlock(_component_el_tab_pane, {
                  key: index,
                  label: item.name,
                  name: item.type
                }, {
                  default: withCtx(() => [
                    item.type === "3" && unref(tabCurrent) === "3" ? (openBlock(), createBlock(_sfc_main$1, { key: 0 })) : createCommentVNode("", true),
                    item.type === "1" ? (openBlock(), createBlock(_sfc_main$2, { key: 1 })) : createCommentVNode("", true),
                    item.type === "2" ? (openBlock(), createBlock(_sfc_main$3, { key: 2 })) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["label", "name"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(getRegisterWay).length && unref(tabCurrent) != "3" || unref(isOpenAgreement)) {
        _push(`<div class="bg-[#f4f4f4] px-[20px] py-[15px] flex dark:bg-[#333]" data-v-b05048cb>`);
        if (unref(isOpenAgreement)) {
          _push(`<div class="flex-1 text-tx-secondary" data-v-b05048cb> \u60A8\u767B\u5F55\u5373\u540C\u610F `);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/policy/${unref(PolicyAgreementEnum).SERVICE}`,
            custom: ""
          }, {
            default: withCtx(({ href }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<a class="text-tx-primary"${ssrRenderAttr("href", href)} target="_blank" data-v-b05048cb${_scopeId}> \u7528\u6237\u534F\u8BAE </a>`);
              } else {
                return [
                  createVNode("a", {
                    class: "text-tx-primary",
                    href,
                    target: "_blank"
                  }, " \u7528\u6237\u534F\u8BAE ", 8, ["href"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(` \u548C `);
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "text-tx-primary",
            to: `/policy/${unref(PolicyAgreementEnum).PRIVACY}`,
            custom: ""
          }, {
            default: withCtx(({ href }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<a class="text-tx-primary"${ssrRenderAttr("href", href)} target="_blank" data-v-b05048cb${_scopeId}> \u9690\u79C1\u653F\u7B56 </a>`);
              } else {
                return [
                  createVNode("a", {
                    class: "text-tx-primary",
                    href,
                    target: "_blank"
                  }, " \u9690\u79C1\u653F\u7B56 ", 8, ["href"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(getRegisterWay).length && unref(tabCurrent) != "3") {
          _push(ssrRenderComponent(unref(ElButton), {
            type: "primary",
            link: "",
            onClick: ($event) => unref(userStore).setLoginPopupType(unref(LoginPopupTypeEnum).REGISTER)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u6CE8\u518C\u65B0\u8D26\u53F7 `);
              } else {
                return [
                  createTextVNode(" \u6CE8\u518C\u65B0\u8D26\u53F7 ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/account/login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b05048cb"]]);

export { Login as default };
//# sourceMappingURL=index-BZwsOHV2.mjs.map
