import { E as ElContainer, c as ElMain, d as ElFooter } from './el-main-CicCXqYc.mjs';
import { a5 as useAppStore, z as useUserStore, bs as useSettingStore } from './server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, renderSlot, createVNode, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { useDark, useWindowSize } from '@vueuse/core';
import _sfc_main$1 from './index-DVowbRlP.mjs';
import _sfc_main$2 from './index-BDwPtStU.mjs';
import NoticePopup from './index-D2jK_mUw.mjs';
import _sfc_main$3 from './index-NI1tubJF.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './index-BZwsOHV2.mjs';
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
import './useLockFn-BWbjkhBs.mjs';
import './mailbox-login-DTfJ6zDd.mjs';
import './weixin-login-C37aKzsA.mjs';
import './index-BoqjHllR.mjs';
import './usePolling-DOP50YcO.mjs';
import './forgot-pwd-DSRa74TH.mjs';
import './index-SK82_cfs.mjs';
import './bind-mobile-DCW2ViFa.mjs';
import './bind-weixin-CghyAKzM.mjs';
import './useTemplate-BMZ5OoC1.mjs';
import './manual-B2oZtFmW.mjs';
import './index-CJqYHNUB.mjs';
import './dropdown-C6fgV-Vy.mjs';
import './online-CTlEkafJ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "single-row",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    const userStore = useUserStore();
    useSettingStore();
    useDark();
    computed(() => {
      return appStore.isMobile ? {
        "--header-height": "50px",
        "--main-padding": "12px"
      } : {
        "--main-padding": "15px"
      };
    });
    const { height: windowHeight } = useWindowSize();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_container = ElContainer;
      const _component_el_main = ElMain;
      const _component_el_footer = ElFooter;
      _push(ssrRenderComponent(_component_el_container, mergeProps({
        class: "layout-bg h-full layout-default",
        style: [
          {
            height: `${unref(windowHeight) == "Infinity" ? "100vh" : unref(windowHeight) + "px"}`
          }
        ]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_container, { class: "min-h-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_main, { style: { "padding": "0" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default", {}, void 0, true)
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  if (!_ctx.$route.meta.hiddenFooter) {
                    _push3(ssrRenderComponent(_component_el_footer, { height: "auto" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$1, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_el_main, { style: { "padding": "0" } }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default", {}, void 0, true)
                      ]),
                      _: 3
                    }),
                    !_ctx.$route.meta.hiddenFooter ? (openBlock(), createBlock(_component_el_footer, {
                      key: 0,
                      height: "auto"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            if (unref(userStore).showLogin) {
              _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(NoticePopup, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_container, { class: "min-h-0" }, {
                default: withCtx(() => [
                  createVNode(_component_el_main, { style: { "padding": "0" } }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default", {}, void 0, true)
                    ]),
                    _: 3
                  }),
                  !_ctx.$route.meta.hiddenFooter ? (openBlock(), createBlock(_component_el_footer, {
                    key: 0,
                    height: "auto"
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 3
              }),
              unref(userStore).showLogin ? (openBlock(), createBlock(_sfc_main$2, { key: 0 })) : createCommentVNode("", true),
              createVNode(NoticePopup),
              createVNode(_sfc_main$3)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/single-row.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const singleRow = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-71269ca2"]]);

export { singleRow as default };
//# sourceMappingURL=single-row-BEgnQUJL.mjs.map
