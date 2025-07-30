import { ag as useRoute } from './server.mjs';
import { useSSRContext, defineComponent, ref, watch, nextTick, mergeProps, unref, createVNode, resolveDynamicComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import _sfc_main$1 from './recharge-Ce0giH5-.mjs';
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
import '@vueuse/core';
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './el-table-column-tZnWqVKO.mjs';
import './index-0xCxAaTZ.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-53t5ntO1.mjs';
import './index-5Ia44xzE.mjs';
import 'normalize-wheel-es';
import './index-D60of7Hb.mjs';
import './el-pagination-ClrwtCwT.mjs';
import './index-CUhOTuS-.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './recharge-DUlermqD.mjs';
import './usePaging-DU8sXki3.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const selectType = ref("member");
    const currentComponent = ref(_sfc_main$1);
    const componentShow = ref(true);
    const typeList = ref([
      {
        name: "\u4F1A\u5458\u5F00\u901A\u8BB0\u5F55",
        type: "member"
      },
      {
        name: "\u5145\u503C\u8BB0\u5F55",
        type: "recharge"
      }
    ]);
    watch(() => route.query.time, async () => {
      componentShow.value = false;
      await nextTick();
      componentShow.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-[20px] bg-body rounded-[12px] flex flex-col h-full" }, _attrs))} data-v-e66f7bae><div class="flex flex-none" data-v-e66f7bae><div class="p-[8px] flex bg-page rounded-[10px] font-medium" data-v-e66f7bae><!--[-->`);
      ssrRenderList(unref(typeList), (item, index2) => {
        _push(`<div class="${ssrRenderClass([{ selectType: unref(selectType) === item.type }, "px-[30px] py-[10px] cursor-pointer"])}" data-v-e66f7bae><span data-v-e66f7bae>${ssrInterpolate(item.name)}</span></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (unref(componentShow)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(currentComponent)), null, null), _parent);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index/record/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e66f7bae"]]);

export { index as default };
//# sourceMappingURL=index-CB12kY5N.mjs.map
