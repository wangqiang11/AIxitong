import { z as useUserStore, ah as __nuxt_component_0, b3 as __nuxt_component_1$1 } from './server.mjs';
import { defineComponent, ref, shallowRef, withCtx, unref, createVNode, openBlock, createBlock, useSSRContext, nextTick } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import ControlPanel from './control-panel-CGiAGGdB.mjs';
import _sfc_main$1 from './mind-map-preview-J5CqpYbM.mjs';
import EmptyView from './empty-view-Cba0x6k2.mjs';
import MindMapHistory from './history-all-Df7EuK7v.mjs';
import History from './history-CM47AKko.mjs';
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
import './index-0xCxAaTZ.mjs';
import './index-BS4hxwV8.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './asyncData-BagoRZi2.mjs';
import './chat-jd47avQj.mjs';
import './el-dropdown-item-BcYIrjsW.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './dropdown-C6fgV-Vy.mjs';
import './refs-CJvnaIJj.mjs';
import './index-BoqjHllR.mjs';
import './download-N0luyf1S.mjs';
import 'markmap-lib';
import './create_record_null-C_UPv5do.mjs';
import './el-page-header-94hYPtex.mjs';
import './index-pT4w-4Lo.mjs';
import './el-empty-xbPr04pX.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const descInput = ref("");
    const showHistory = ref(false);
    const mindMapPreviewRef = shallowRef();
    const controlPanelRef = shallowRef();
    const userStore = useUserStore();
    const handleShowHistory = async () => {
      var _a;
      if (!userStore.isLogin) return userStore.toggleShowLogin();
      showHistory.value = !showHistory.value;
      if (!showHistory.value) {
        await nextTick();
        (_a = mindMapPreviewRef.value) == null ? void 0 : _a.renderMarkMap(descInput.value);
      }
    };
    const selectId = ref(-1);
    const descUpdate = async (value) => {
      var _a;
      descInput.value = value;
      showHistory.value = false;
      await nextTick();
      (_a = mindMapPreviewRef.value) == null ? void 0 : _a.renderMarkMap(value);
    };
    const historyRef = shallowRef();
    const refresh = () => {
      var _a;
      selectId.value = -1;
      (_a = historyRef.value) == null ? void 0 : _a.refresh();
    };
    const handlePreview = async ({ id, text }) => {
      var _a, _b;
      selectId.value = id;
      showHistory.value = false;
      (_a = controlPanelRef.value) == null ? void 0 : _a.changDescInput(text);
      await nextTick();
      (_b = mindMapPreviewRef.value) == null ? void 0 : _b.renderMarkMap(text);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_client_only = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex p-4 h-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_client_only, null, {}, _parent2, _scopeId));
            _push2(`<div class="flex-1 min-w-0 h-full ml-4 bg-body rounded-[12px] relative"${_scopeId}>`);
            if (!unref(showHistory)) {
              _push2(`<div class="h-full flex"${_scopeId}><div class="h-full flex-1 min-w-0 p-[15px]"${_scopeId}>`);
              if (unref(descInput).length) {
                _push2(ssrRenderComponent(_sfc_main$1, {
                  ref_key: "mindMapPreviewRef",
                  ref: mindMapPreviewRef
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(EmptyView, null, null, _parent2, _scopeId));
              }
              _push2(`</div><div class="border-l-[1px] border-solid border-br-light w-[300px]"${_scopeId}>`);
              _push2(ssrRenderComponent(History, {
                ref_key: "historyRef",
                ref: historyRef,
                currentId: unref(selectId),
                onView: handlePreview,
                onHistory: handleShowHistory
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(ssrRenderComponent(MindMapHistory, {
                onView: handlePreview,
                onHistory: handleShowHistory
              }, null, _parent2, _scopeId));
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex p-4 h-full" }, [
                createVNode(_component_client_only, null, {
                  default: withCtx(() => [
                    createVNode(ControlPanel, {
                      ref_key: "controlPanelRef",
                      ref: controlPanelRef,
                      onUpdate: descUpdate,
                      onHistory: handleShowHistory,
                      onRefresh: refresh
                    }, null, 512)
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex-1 min-w-0 h-full ml-4 bg-body rounded-[12px] relative" }, [
                  !unref(showHistory) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "h-full flex"
                  }, [
                    createVNode("div", { class: "h-full flex-1 min-w-0 p-[15px]" }, [
                      unref(descInput).length ? (openBlock(), createBlock(_sfc_main$1, {
                        key: 0,
                        ref_key: "mindMapPreviewRef",
                        ref: mindMapPreviewRef
                      }, null, 512)) : (openBlock(), createBlock(EmptyView, { key: 1 }))
                    ]),
                    createVNode("div", { class: "border-l-[1px] border-solid border-br-light w-[300px]" }, [
                      createVNode(History, {
                        ref_key: "historyRef",
                        ref: historyRef,
                        currentId: unref(selectId),
                        onView: handlePreview,
                        onHistory: handleShowHistory
                      }, null, 8, ["currentId"])
                    ])
                  ])) : (openBlock(), createBlock(MindMapHistory, {
                    key: 1,
                    onView: handlePreview,
                    onHistory: handleShowHistory
                  }))
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mind_map/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CWM43koi.mjs.map
