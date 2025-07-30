import { useSSRContext, defineComponent, ref, watch, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { E as ElCheckbox } from './index-53t5ntO1.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "permission-option",
  __ssrInlineRender: true,
  props: {
    label: String,
    description: String,
    value: Number,
    modelValue: Number
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const internalModelValue = ref(props.modelValue);
    watch(() => props.modelValue, (newValue) => {
      internalModelValue.value = newValue;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center p-4 hover:bg-page rounded-xl" }, _attrs))} data-v-bfb962ae><div class="flex-1" data-v-bfb962ae><div class="font-medium text-tx-primary" data-v-bfb962ae>${ssrInterpolate(__props.label)}</div><div class="text-tx-placeholder text-xs mt-2" data-v-bfb962ae>${ssrInterpolate(__props.description)}</div></div>`);
      _push(ssrRenderComponent(unref(ElCheckbox), {
        modelValue: internalModelValue.value,
        "onUpdate:modelValue": ($event) => internalModelValue.value = $event,
        "true-value": __props.value,
        label: "",
        size: "large",
        class: "ml-2"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/_components/team-data-com/permission-option.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PermissionOption = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bfb962ae"]]);

export { PermissionOption as default };
//# sourceMappingURL=permission-option-4Rq1I_93.mjs.map
