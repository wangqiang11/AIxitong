import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { a5 as useAppStore, c0 as useCookie, c1 as NOTICE_KEY, d as ElButton } from './server.mjs';
import { useSSRContext, defineComponent, ref, computed, watch, unref, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { E as ElDialog } from './index-CzJm6kkT.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import '@vue/shared';
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
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    const showNotice = ref(false);
    const richTextContent = computed(
      () => appStore.getBulletinConfig.bulletin_content
    );
    const isBulletin = computed(() => appStore.getBulletinConfig.is_bulletin);
    const shouldShowNotice = (value) => {
      const lastVisitTime = useCookie(NOTICE_KEY);
      const currentTime = (/* @__PURE__ */ new Date()).toDateString();
      const isNewDay = !lastVisitTime.value || lastVisitTime.value !== currentTime;
      if (isNewDay && value) {
        lastVisitTime.value = currentTime;
      }
      return isNewDay;
    };
    watch(
      () => isBulletin.value,
      (val) => {
        if (val && shouldShowNotice(val)) {
          showNotice.value = true;
        }
      },
      {
        deep: true,
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_scrollbar = ElScrollbar;
      const _component_el_button = ElButton;
      _push(ssrRenderComponent(unref(ElDialog), mergeProps({
        modelValue: showNotice.value,
        "onUpdate:modelValue": ($event) => showNotice.value = $event,
        width: "600",
        "append-to-body": ""
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-lg text-center font-medium" data-v-cac163f6${_scopeId}>\u516C\u544A</div>`);
          } else {
            return [
              createVNode("div", { class: "text-lg text-center font-medium" }, "\u516C\u544A")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_scrollbar, { "max-height": "400px" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a;
                if (_push3) {
                  _push3(`<div class="richText" data-v-cac163f6${_scopeId2}>${(_a = richTextContent.value) != null ? _a : ""}</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "richText",
                      innerHTML: richTextContent.value
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex-1 flex justify-center items-center bg-body pt-[20px]" data-v-cac163f6${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              size: "large",
              onClick: ($event) => showNotice.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u6211\u77E5\u9053\u4E86 `);
                } else {
                  return [
                    createTextVNode(" \u6211\u77E5\u9053\u4E86 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_el_scrollbar, { "max-height": "400px" }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "richText",
                    innerHTML: richTextContent.value
                  }, null, 8, ["innerHTML"])
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex-1 flex justify-center items-center bg-body pt-[20px]" }, [
                createVNode(_component_el_button, {
                  type: "primary",
                  size: "large",
                  onClick: ($event) => showNotice.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u6211\u77E5\u9053\u4E86 ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/notice/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NoticePopup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cac163f6"]]);

export { NoticePopup as default };
//# sourceMappingURL=index-D2jK_mUw.mjs.map
