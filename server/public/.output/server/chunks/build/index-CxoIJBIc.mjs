import { a5 as useAppStore, ah as __nuxt_component_0 } from './server.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { defineComponent, withCtx, unref, createVNode, resolveDynamicComponent, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import exportWidgets from './index-BKCm5SrI.mjs';
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
import './entrance-D67OpvrX.mjs';
import './index-DLVgZG5d.mjs';
import './nuxt-link-l5zPv3vf.mjs';
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './guide-CT2_xTNK.mjs';
import './header-BSZGZ8i5.mjs';
import './title-logo-BNM0flCB.mjs';
import './menu-C91s3odr.mjs';
import './el-menu-item-DBjUF0xW.mjs';
import './index-DadLUs6d.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-5Ia44xzE.mjs';
import './menu-item-DyOqt2KJ.mjs';
import './user-SBxKtT5H.mjs';
import './index-BoqjHllR.mjs';
import './member-btn-MuRMgKHK.mjs';
import './intro-BJNU7tT2.mjs';
import './index_arrow-right02-CtbdAQ0b.mjs';
import './title-5oqj6kGf.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ElScrollbar = ElScrollbar;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "single-row" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElScrollbar, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="index"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(appStore).pageIndex, (item) => {
                    _push3(`<div${_scopeId2}>`);
                    if (item.isShow) {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(unref(exportWidgets)[item.name]), {
                        prop: item.prop
                      }, null), _parent3, _scopeId2);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "index" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(appStore).pageIndex, (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.id
                        }, [
                          item.isShow ? (openBlock(), createBlock(resolveDynamicComponent(unref(exportWidgets)[item.name]), {
                            key: 0,
                            prop: item.prop
                          }, null, 8, ["prop"])) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "h-full" }, [
                createVNode(_component_ElScrollbar, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "index" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(appStore).pageIndex, (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.id
                        }, [
                          item.isShow ? (openBlock(), createBlock(resolveDynamicComponent(unref(exportWidgets)[item.name]), {
                            key: 0,
                            prop: item.prop
                          }, null, 8, ["prop"])) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ])
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CxoIJBIc.mjs.map
