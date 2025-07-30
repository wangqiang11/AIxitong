import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search-ex",
  __ssrInlineRender: true,
  props: {
    lists: { default: () => [] },
    prop: { default: "" }
  },
  emits: ["click-item"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const getText = (item) => {
      console.log(item);
      return item[props.prop] ? item[props.prop] : item;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap mx-[-7px] mb-[-14px]" }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.lists, (item, index) => {
        _push(`<div class="flex max-w-full items-center mx-[7px] cursor-pointer hover:bg-fill-light mb-[14px] px-[15px] py-[10px] border border-br-light border-solid rounded-[12px]"><div class="flex-1 line-clamp-1 text-tx-secondary">${ssrInterpolate(getText(item))}</div><span class="text-primary flex ml-[10px]">`);
        _push(ssrRenderComponent(_component_Icon, { name: "el-icon-Right" }, null, _parent));
        _push(`</span></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/_components/common/search-ex.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=search-ex-US3m0iO4.mjs.map
