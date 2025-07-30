import { E as ElContainer, a as ElHeader, b as ElAside, c as ElMain } from './el-main-CicCXqYc.mjs';
import { z as useUserStore, ag as useRoute, A as feedback } from './server.mjs';
import { u as useCanvasStore, a as useDesignTabs } from './canvas-DJ4hjlD7.mjs';
import { onBeforeRouteLeave } from 'vue-router';
import { defineComponent, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useWindowSize, useEventListener } from '@vueuse/core';
import _sfc_main$1 from './design-header-C9kMdMsr.mjs';
import DesignLeft from './index-Du6whSPQ.mjs';
import _sfc_main$2 from './index-k70exgaE.mjs';
import DesignRight from './index-Dxej-YBv.mjs';
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
import 'lodash-es';
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './useAudioPlay-C6V9947w.mjs';
import './file-RP6bCPT_.mjs';
import 'jsdom';
import 'jsdom/lib/jsdom/living/generated/utils';
import 'jsdom/lib/jsdom/utils';
import 'fontfaceobserver';
import './el-page-header-94hYPtex.mjs';
import './index-pT4w-4Lo.mjs';
import './index-BoqjHllR.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './nuxt-link-l5zPv3vf.mjs';
import './useLockFn-BWbjkhBs.mjs';
import './el-tab-pane-C7DQ8faq.mjs';
import './strings-D1uxkXhq.mjs';
import './index-C5I0EtSx.mjs';
import './avatar-Da-ItgaI.mjs';
import './index-0xCxAaTZ.mjs';
import './el-empty-xbPr04pX.mjs';
import './asyncData-BagoRZi2.mjs';
import './empty_con-BDdV71_z.mjs';
import './dub-1uaxlrpt.mjs';
import './index-x5xEUu1d.mjs';
import './el-radio-group-PXDiQVwm.mjs';
import './dub-item-QlRowzhf.mjs';
import './music-B1eYyUpS.mjs';
import './background-BY4MFQMz.mjs';
import './text-nrtwaws2.mjs';
import './index-DLL0sEcv.mjs';
import 'async-validator';
import './text-setting-XtZUo9Gm.mjs';
import './index-CUhOTuS-.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-D7S5lb8a.mjs';
import './index-5Ia44xzE.mjs';
import './el-input-number-DH6NTUUv.mjs';
import './index-iSFXrlfY.mjs';
import './el-color-picker-BpaTgxgG.mjs';
import './effect-list-DJPn3tRr.mjs';
import './captions-DU0Kvo3l.mjs';
import './el-switch-lh7eFiXh.mjs';
import './maps-KaeC0uWT.mjs';
import './prospect-CAocfG1u.mjs';
import './canvas-display-CTT-1p6j.mjs';
import './center-top-C9U-ZCT8.mjs';
import './select-music-BQ-v2cow.mjs';
import './index-L3E_sDO1.mjs';
import './select-dub-5jeBvqY_.mjs';
import './center-setting-DPq2Wa2F.mjs';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import 'vuedraggable';
import './empty_layer-D7gB2S7C.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "design",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const canvasStore = useCanvasStore();
    const { height: windowHeight } = useWindowSize();
    const route = useRoute();
    const { initTabs } = useDesignTabs();
    useEventListener(void 0, "beforeunload", (e) => {
      if (canvasStore.isChangeData) {
        e.preventDefault();
        e.returnValue = "\u5185\u5BB9\u5DF2\u4FEE\u6539\uFF0C\u786E\u8BA4\u79BB\u5F00\u9875\u9762\u5417\uFF1F";
      }
    });
    onBeforeRouteLeave(async (to, from) => {
      try {
        if (canvasStore.isChangeData && userStore.isLogin) {
          await feedback.confirm("\u5185\u5BB9\u5DF2\u4FEE\u6539\uFF0C\u786E\u8BA4\u79BB\u5F00\u9875\u9762\u5417\uFF1F");
        }
      } catch (error) {
        return false;
      }
    });
    const dataChange = () => {
      canvasStore.isChangeData = true;
    };
    watch(() => canvasStore.canvasJson, dataChange);
    watch(() => canvasStore.music, dataChange);
    watch(() => canvasStore.dub, dataChange);
    watch(() => canvasStore.voiceContent, dataChange, {
      deep: true
    });
    watch(
      () => route.query,
      () => {
        initTabs();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_container = ElContainer;
      const _component_el_header = ElHeader;
      const _component_el_aside = ElAside;
      const _component_el_main = ElMain;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "overflow-x-auto",
        style: { height: `${unref(windowHeight)}px` }
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_container, { class: "bg-page !min-w-[1200px] h-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_header, {
              height: "auto",
              style: { "padding": "0" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_container, { class: "min-h-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_aside, {
                    width: "auto",
                    style: { "overflow": "visible" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(DesignLeft, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(DesignLeft)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_main, { style: { "padding": "0" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$2, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$2)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_aside, { width: "auto" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(DesignRight, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(DesignRight)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_aside, {
                      width: "auto",
                      style: { "overflow": "visible" }
                    }, {
                      default: withCtx(() => [
                        createVNode(DesignLeft)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_main, { style: { "padding": "0" } }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$2)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_aside, { width: "auto" }, {
                      default: withCtx(() => [
                        createVNode(DesignRight)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_header, {
                height: "auto",
                style: { "padding": "0" }
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              }),
              createVNode(_component_el_container, { class: "min-h-0" }, {
                default: withCtx(() => [
                  createVNode(_component_el_aside, {
                    width: "auto",
                    style: { "overflow": "visible" }
                  }, {
                    default: withCtx(() => [
                      createVNode(DesignLeft)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_main, { style: { "padding": "0" } }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$2)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_aside, { width: "auto" }, {
                    default: withCtx(() => [
                      createVNode(DesignRight)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/design.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=design-BTrjop2V.mjs.map
