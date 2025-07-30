import { E as ElSegmented } from './el-segmented-KMsqQ2AI.mjs';
import { a as useRouter, ag as useRoute, b3 as __nuxt_component_1$1 } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import Draw from './draw-Bfy5dBBt.mjs';
import _sfc_main$1 from './video-3CsxhFdg.mjs';
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
import './el-empty-xbPr04pX.mjs';
import './index-0xCxAaTZ.mjs';
import './index-BoqjHllR.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-DNeGbNHc.mjs';
import './position-DVxxNIGX.mjs';
import './index-CbOzFVxN.mjs';
import './useDrawEffect-B2jxDCVi.mjs';
import './usePaging-DU8sXki3.mjs';
import './usePolling-DOP50YcO.mjs';
import './DrawEnum-CqAPEJOR.mjs';
import './index-CFqym9DX.mjs';
import './image-preview-DnIAxevr.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-C2yEelJa.mjs';
import './useCopy-CfS-iChu.mjs';
import './download-N0luyf1S.mjs';
import './empty-image-DpkSTY4G.mjs';
import './index-D7S5lb8a.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-D8NbhMns.mjs';
import './index-DVLwoLV9.mjs';
import 'video.js';
import './index-CJqYHNUB.mjs';
import './dropdown-C6fgV-Vy.mjs';
import './el-result-V-Bl2idQ.mjs';
import './video_empty-DomB--q9.mjs';
import './video-DH7H33E1.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const worksTypes = [
      {
        label: "AI\u7ED8\u753B",
        value: "draw"
      },
      {
        label: "AI\u97F3\u4E50",
        value: "music"
      },
      {
        label: "AI\u89C6\u9891",
        value: "video"
      }
    ];
    const currentType = computed({
      get() {
        const select = worksTypes.find(
          (item) => item.value === route.query.type
        );
        return (select == null ? void 0 : select.value) || "draw";
      },
      set(value) {
        router.replace({
          path: "",
          query: {
            type: value
          }
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_segmented = ElSegmented;
      const _component_client_only = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-full bg-body rounded-lg" }, _attrs))}><div class="px-4 pt-4"><div class="bg-page p-[5px] rounded-[10px]" style="${ssrRenderStyle({
        width: `${100 * worksTypes.length}px`
      })}">`);
      _push(ssrRenderComponent(_component_el_segmented, {
        style: { "--el-border-radius-base": "10px" },
        modelValue: unref(currentType),
        "onUpdate:modelValue": ($event) => isRef(currentType) ? currentType.value = $event : null,
        class: "!bg-[transparent] h-[34px]",
        block: true,
        options: worksTypes
      }, null, _parent));
      _push(`</div></div><div class="flex-1 min-h-0">`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      if (unref(currentType) === "draw") {
        _push(ssrRenderComponent(Draw, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentType) === "video") {
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index/works/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BCQIXoS-.mjs.map
