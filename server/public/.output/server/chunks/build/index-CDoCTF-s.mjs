import { ag as useRoute } from './server.mjs';
import { defineComponent, reactive, markRaw, ref, computed, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import _sfc_main$1 from './data-DABQECqE.mjs';
import _sfc_main$2 from './record-BAVzAhl8.mjs';
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
import './asyncData-BagoRZi2.mjs';
import './robot-BsB_E1H2.mjs';
import './index-CUhOTuS-.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import './el-table-column-tZnWqVKO.mjs';
import './index-53t5ntO1.mjs';
import 'normalize-wheel-es';
import './index-L3E_sDO1.mjs';
import './index-D60of7Hb.mjs';
import './el-pagination-ClrwtCwT.mjs';
import './usePaging-DU8sXki3.mjs';
import './reply-popup-DA2FFVvQ.mjs';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './correct-popup-W2_Kapug.mjs';
import './index-DLL0sEcv.mjs';
import 'async-validator';
import './index-DZM4Ziep.mjs';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import './index-BoqjHllR.mjs';
import './index-VFk_dz0n.mjs';
import './index-DVLwoLV9.mjs';
import 'video.js';
import './useDictOptions-DmOxg3R0.mjs';
import './my_database-C6D0rbWD.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    appId: {}
  },
  setup(__props) {
    useRoute();
    const tabLists = reactive([
      {
        name: "\u5BF9\u8BDD\u6570\u636E",
        key: "data",
        component: markRaw(_sfc_main$1)
      },
      {
        name: "\u5BF9\u8BDD\u8BB0\u5F55",
        key: "record",
        component: markRaw(_sfc_main$2)
      }
    ]);
    const currentKey = ref("data");
    const currentTab = computed(() => {
      return tabLists.find((item) => item.key == currentKey.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-main h-full flex flex-col" }, _attrs))}><div class="flex"><div class="flex bg-page p-[5px] rounded-[10px]"><!--[-->`);
      ssrRenderList(unref(tabLists), (item) => {
        _push(`<div class="${ssrRenderClass([{
          "bg-primary text-white": unref(currentKey) == item.key
        }, "leading-8 w-[120px] text-center rounded-[10px] cursor-pointer"])}">${ssrInterpolate(item.name)}</div>`);
      });
      _push(`<!--]--></div></div>`);
      if (unref(currentTab)) {
        _push(`<div class="flex-1 min-h-0">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(currentTab).component), { "app-id": _ctx.appId }, null), _parent);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-dialogue/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CDoCTF-s.mjs.map
