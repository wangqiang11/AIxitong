import { E as ElSegmented } from './el-segmented-KMsqQ2AI.mjs';
import { defineComponent, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useVModels } from '@vueuse/core';
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
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "video-type",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: 1 }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const { modelValue } = useVModels(props, emit);
    const typeOptions = [
      {
        label: "\u6587\u751F\u89C6\u9891",
        value: 1
      },
      {
        label: "\u56FE\u751F\u89C6\u9891",
        value: 2
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_segmented = ElSegmented;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "p-1 bg-[var(--el-bg-color-page)] rounded-[12px]",
        style: { "--el-border-radius-base": "12px" }
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_segmented, {
        block: false,
        class: "w-full h-[36px] !bg-[transparent]",
        modelValue: unref(modelValue),
        "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : null,
        options: typeOptions
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/video/_components/video-type.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=video-type-Ch-m1w_A.mjs.map
