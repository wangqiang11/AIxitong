import { E as ElInput } from './server.mjs';
import { _ as _sfc_main$3 } from './index-BoqjHllR.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useVModels } from '@vueuse/core';
import _sfc_main$1 from './search-type-BDTcaOnm.mjs';
import _sfc_main$2 from './search-btn-Bu4r_Ca5.mjs';
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
import './index-CJqYHNUB.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './dropdown-C6fgV-Vy.mjs';
import './searchEnums-Dgcx5RT8.mjs';
import './useSearch-BaJoxou4.mjs';
import './search-DBP7Ii5U.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search-input",
  __ssrInlineRender: true,
  props: {
    mode: {},
    model: {},
    type: {},
    input: {}
  },
  emits: ["update:type", "update:input", "search"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { type: typeModel, input: inputModel } = useVModels(props, emit);
    const handleInputEnter = (e) => {
      if (e.shiftKey && e.keyCode === 13) {
        return;
      }
      if (e.keyCode === 13) {
        emit("search");
        return e.preventDefault();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = ElInput;
      const _component_Icon = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-page rounded-[15px] overflow-hidden p-[10px] search-input" }, _attrs))} data-v-68cad505><div data-v-68cad505>`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: unref(inputModel),
        "onUpdate:modelValue": ($event) => isRef(inputModel) ? inputModel.value = $event : null,
        autosize: { minRows: 2, maxRows: 4 },
        type: "textarea",
        placeholder: "\u8F93\u5165\u4F60\u60F3\u641C\u7D22\u7684\u95EE\u9898",
        resize: "none",
        onKeydown: handleInputEnter
      }, null, _parent));
      _push(`</div><div class="flex items-center" data-v-68cad505><div class="mr-auto" data-v-68cad505>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        type: unref(typeModel),
        "onUpdate:type": ($event) => isRef(typeModel) ? typeModel.value = $event : null,
        model: _ctx.model
      }, {
        item: withCtx(({ icon, label }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center px-[8px]" data-v-68cad505${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: icon }, null, _parent2, _scopeId));
            _push2(`<span class="px-[6px]" data-v-68cad505${_scopeId}>${ssrInterpolate(label)}</span>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-ArrowDown" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center px-[8px]" }, [
                createVNode(_component_Icon, { name: icon }, null, 8, ["name"]),
                createVNode("span", { class: "px-[6px]" }, toDisplayString(label), 1),
                createVNode(_component_Icon, { name: "el-icon-ArrowDown" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div data-v-68cad505>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        onClick: ($event) => emit("search")
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/_components/common/search-input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SearchInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-68cad505"]]);

export { SearchInput as default };
//# sourceMappingURL=search-input-CX9i7r_c.mjs.map
