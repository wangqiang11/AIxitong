import { ag as useRoute, ah as __nuxt_component_0 } from './server.mjs';
import { _ as __nuxt_component_1 } from './index-Cack-rtP.mjs';
import { _ as __nuxt_component_5 } from './index-wsmFJ5of.mjs';
import { defineComponent, computed, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useRobotStore } from './robot-yG1zBFXI.mjs';
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
import './index-BoqjHllR.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-l5zPv3vf.mjs';
import './index-VIyJ-gCg.mjs';
import './index-c3Av-r7B.mjs';
import './index-D7S5lb8a.mjs';
import './index-DRyhljQ3.mjs';
import 'markdown-it';
import 'highlight.js';
import '@vscode/markdown-it-katex';
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './file-BZUJNFp8.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-DVLwoLV9.mjs';
import 'video.js';
import './el-link-CHT85aXX.mjs';
import './useAudioPlay-C6V9947w.mjs';
import './useCopy-CfS-iChu.mjs';
import './knowledge-DiYwGYtC.mjs';
import './chat-jd47avQj.mjs';
import './download-N0luyf1S.mjs';
import 'qrcode.vue';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import './index-BS4hxwV8.mjs';
import './asyncData-BagoRZi2.mjs';
import './useRecorder-K_rLcXyS.mjs';
import 'recorder-core/recorder.mp3.min.js';
import './robot-BsB_E1H2.mjs';
import './index-BKj4TrcW.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "chat",
  __ssrInlineRender: true,
  setup(__props) {
    const robotStore = useRobotStore();
    const route = useRoute();
    const robotId = computed(() => route.query.id);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_TheSession = __nuxt_component_1;
      const _component_TheChat = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full flex"${_scopeId}><div class="flex h-full p-[16px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TheSession, {
              modelValue: unref(robotStore).sessionId,
              "onUpdate:modelValue": ($event) => unref(robotStore).sessionId = $event,
              data: unref(robotStore).sessionLists,
              onAdd: unref(robotStore).sessionAdd,
              onEdit: unref(robotStore).sessionEdit,
              onDelete: unref(robotStore).sessionDelete,
              onClear: unref(robotStore).sessionClear,
              onClickItem: unref(robotStore).setSessionSelect
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="h-full pr-[16px] py-[16px] flex-1 min-w-0"${_scopeId}><div class="h-full flex flex-col bg-body rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TheChat, { "robot-id": unref(robotId) }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "h-full flex" }, [
                createVNode("div", { class: "flex h-full p-[16px]" }, [
                  createVNode(_component_TheSession, {
                    modelValue: unref(robotStore).sessionId,
                    "onUpdate:modelValue": ($event) => unref(robotStore).sessionId = $event,
                    data: unref(robotStore).sessionLists,
                    onAdd: unref(robotStore).sessionAdd,
                    onEdit: unref(robotStore).sessionEdit,
                    onDelete: unref(robotStore).sessionDelete,
                    onClear: unref(robotStore).sessionClear,
                    onClickItem: unref(robotStore).setSessionSelect
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "data", "onAdd", "onEdit", "onDelete", "onClear", "onClickItem"])
                ]),
                createVNode("div", { class: "h-full pr-[16px] py-[16px] flex-1 min-w-0" }, [
                  createVNode("div", { class: "h-full flex flex-col bg-body rounded-lg" }, [
                    createVNode(_component_TheChat, { "robot-id": unref(robotId) }, null, 8, ["robot-id"])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=chat-Ce0ZuDL0.mjs.map
