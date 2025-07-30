import { E as ElTabs, a as ElTabPane } from './el-tab-pane-C7DQ8faq.mjs';
import { _ as _sfc_main$6 } from './index-BoqjHllR.mjs';
import { u as useCanvasStore, a as useDesignTabs } from './canvas-DJ4hjlD7.mjs';
import { useSSRContext, defineComponent, computed, ref, watch, mergeProps, unref, withCtx, createVNode, toDisplayString, resolveDynamicComponent, withDirectives, openBlock, createBlock, vShow, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderVNode } from 'vue/server-renderer';
import _sfc_main$1 from './avatar-Da-ItgaI.mjs';
import _sfc_main$2 from './dub-1uaxlrpt.mjs';
import _sfc_main$3 from './music-B1eYyUpS.mjs';
import Background from './background-BY4MFQMz.mjs';
import Text from './text-nrtwaws2.mjs';
import _sfc_main$4 from './captions-DU0Kvo3l.mjs';
import Maps from './maps-KaeC0uWT.mjs';
import _sfc_main$5 from './prospect-CAocfG1u.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './strings-D1uxkXhq.mjs';
import './index-C5I0EtSx.mjs';
import './useAudioPlay-C6V9947w.mjs';
import './file-RP6bCPT_.mjs';
import 'jsdom';
import 'jsdom/lib/jsdom/living/generated/utils';
import 'jsdom/lib/jsdom/utils';
import 'fontfaceobserver';
import './index-0xCxAaTZ.mjs';
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './el-empty-xbPr04pX.mjs';
import './asyncData-BagoRZi2.mjs';
import './empty_con-BDdV71_z.mjs';
import './index-x5xEUu1d.mjs';
import './el-radio-group-PXDiQVwm.mjs';
import './dub-item-QlRowzhf.mjs';
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
import './el-switch-lh7eFiXh.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const components = {
      Avatar: _sfc_main$1,
      Dub: _sfc_main$2,
      Music: _sfc_main$3,
      Background,
      Text,
      Captions: _sfc_main$4,
      Maps,
      Prospect: _sfc_main$5
    };
    const canvasStore = useCanvasStore();
    const { tabsState, initTabs, changeTabs } = useDesignTabs();
    const isCollapsed = computed({
      get() {
        return tabsState.value.isCollapsed;
      },
      set(val) {
        tabsState.value.isCollapsed = val;
      }
    });
    const showCollapsedBtn = ref(false);
    initTabs();
    watch(
      () => tabsState.value.current,
      async (value) => {
        canvasStore.setActiveObjectByType(value);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_Icon = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "control-panel h-full" }, _attrs))} data-v-8d50fa1f><div class="h-full relative z-20 bg-white" data-v-8d50fa1f>`);
      _push(ssrRenderComponent(_component_el_tabs, {
        "tab-position": "left",
        class: "h-full",
        type: "card",
        "model-value": unref(tabsState).current,
        onTabChange: ($event) => unref(changeTabs)($event)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(tabsState).tabs, (item) => {
              _push2(ssrRenderComponent(_component_el_tab_pane, {
                key: item.id,
                name: item.id,
                lazy: ""
              }, {
                label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-col items-center justify-center" data-v-8d50fa1f${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: item.icon,
                      size: 22
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-lg mt-[6px]" data-v-8d50fa1f${_scopeId2}>${ssrInterpolate(item.label)}</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                        createVNode(_component_Icon, {
                          name: item.icon,
                          size: 22
                        }, null, 8, ["name"]),
                        createVNode("span", { class: "text-lg mt-[6px]" }, toDisplayString(item.label), 1)
                      ])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-[360px] h-full" style="${ssrRenderStyle(!unref(isCollapsed) ? null : { display: "none" })}" data-v-8d50fa1f${_scopeId2}>`);
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(components[item.component]), null, null), _parent3, _scopeId2);
                    _push3(`</div>`);
                  } else {
                    return [
                      withDirectives(createVNode("div", { class: "w-[360px] h-full" }, [
                        (openBlock(), createBlock(resolveDynamicComponent(components[item.component])))
                      ], 512), [
                        [vShow, !unref(isCollapsed)]
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(tabsState).tabs, (item) => {
                return openBlock(), createBlock(_component_el_tab_pane, {
                  key: item.id,
                  name: item.id,
                  lazy: ""
                }, {
                  label: withCtx(() => [
                    createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                      createVNode(_component_Icon, {
                        name: item.icon,
                        size: 22
                      }, null, 8, ["name"]),
                      createVNode("span", { class: "text-lg mt-[6px]" }, toDisplayString(item.label), 1)
                    ])
                  ]),
                  default: withCtx(() => [
                    withDirectives(createVNode("div", { class: "w-[360px] h-full" }, [
                      (openBlock(), createBlock(resolveDynamicComponent(components[item.component])))
                    ], 512), [
                      [vShow, !unref(isCollapsed)]
                    ])
                  ]),
                  _: 2
                }, 1032, ["name"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(isCollapsed) || unref(showCollapsedBtn)) {
        _push(`<div class="panel-left-arrow" data-v-8d50fa1f>`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "mr-1",
          name: `el-icon-${unref(isCollapsed) ? "CaretRight" : "CaretLeft"}`
        }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/_components/design-left/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DesignLeft = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8d50fa1f"]]);

export { DesignLeft as default };
//# sourceMappingURL=index-Du6whSPQ.mjs.map
