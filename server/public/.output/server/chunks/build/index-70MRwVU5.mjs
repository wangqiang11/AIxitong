import { a5 as useAppStore, ah as __nuxt_component_0, b3 as __nuxt_component_1$1 } from './server.mjs';
import { E as ElResult } from './el-result-V-Bl2idQ.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { defineComponent, shallowRef, withCtx, unref, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import Form from './index-BorsA2eH.mjs';
import Record from './index-BlG_FY-O.mjs';
import { e as emptyImg } from './empty_con-BDdV71_z.mjs';
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
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-BoqjHllR.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-0xCxAaTZ.mjs';
import './index-DLL0sEcv.mjs';
import 'async-validator';
import './index-CJqYHNUB.mjs';
import './dropdown-C6fgV-Vy.mjs';
import './index-BS4hxwV8.mjs';
import './el-switch-lh7eFiXh.mjs';
import './asyncData-BagoRZi2.mjs';
import './useLockFn-BWbjkhBs.mjs';
import './music-A1_NVo6h.mjs';
import './display-CW6dIehm.mjs';
import './download-N0luyf1S.mjs';
import './player-DDfYp134.mjs';
import './el-slider-LwCMMHAn.mjs';
import './el-input-number-DH6NTUUv.mjs';
import './index-iSFXrlfY.mjs';
import './index-CUhOTuS-.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import './task_reward-DRop0WtE.mjs';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-DNeGbNHc.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    const recordRef = shallowRef();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_client_only = __nuxt_component_1$1;
      const _component_el_result = ElResult;
      const _component_el_image = ElImage;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(appStore).config.switch.music_status) {
              _push2(`<div class="h-full p-[16px] flex"${_scopeId}>`);
              _push2(ssrRenderComponent(Form, {
                onUpdate: ($event) => {
                  var _a;
                  return (_a = unref(recordRef)) == null ? void 0 : _a.refresh();
                }
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex-1 min-w-0 h-full pl-[16px]"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_client_only, null, {}, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div class="h-full flex-1 flex p-4 justify-center items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_result, null, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_image, {
                      class: "w-[150px] dark:opacity-60",
                      src: unref(emptyImg)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_image, {
                        class: "w-[150px] dark:opacity-60",
                        src: unref(emptyImg)
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-info"${_scopeId2}>\u529F\u80FD\u6682\u672A\u5F00\u542F</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-info" }, "\u529F\u80FD\u6682\u672A\u5F00\u542F")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              unref(appStore).config.switch.music_status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "h-full p-[16px] flex"
              }, [
                createVNode(Form, {
                  onUpdate: ($event) => {
                    var _a;
                    return (_a = unref(recordRef)) == null ? void 0 : _a.refresh();
                  }
                }, null, 8, ["onUpdate"]),
                createVNode("div", { class: "flex-1 min-w-0 h-full pl-[16px]" }, [
                  createVNode(_component_client_only, null, {
                    default: withCtx(() => [
                      createVNode(Record, {
                        ref_key: "recordRef",
                        ref: recordRef
                      }, null, 512)
                    ]),
                    _: 1
                  })
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "h-full flex-1 flex p-4 justify-center items-center"
              }, [
                createVNode(_component_el_result, null, {
                  icon: withCtx(() => [
                    createVNode(_component_el_image, {
                      class: "w-[150px] dark:opacity-60",
                      src: unref(emptyImg)
                    }, null, 8, ["src"])
                  ]),
                  title: withCtx(() => [
                    createVNode("div", { class: "text-info" }, "\u529F\u80FD\u6682\u672A\u5F00\u542F")
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/music/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-70MRwVU5.mjs.map
