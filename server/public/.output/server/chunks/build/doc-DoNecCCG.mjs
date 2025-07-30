import { E as ElImage } from './index-C2yEelJa.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElPagination } from './el-pagination-ClrwtCwT.mjs';
import { defineComponent, reactive, computed, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useSearch } from './useSearch-BaJoxou4.mjs';
import '@vueuse/core';
import 'lodash-unified';
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
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './position-DVxxNIGX.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-CUhOTuS-.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-0xCxAaTZ.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import './search-DBP7Ii5U.mjs';
import './searchEnums-Dgcx5RT8.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "doc",
  __ssrInlineRender: true,
  setup(__props) {
    const { options, result } = useSearch();
    const pager = reactive({
      size: 5,
      page: 1
    });
    const currentResult = computed(() => {
      return result.value.search.slice(
        (pager.page - 1) * pager.size,
        pager.page * pager.size
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_image = ElImage;
      const _component_Icon = _sfc_main$1;
      const _component_el_pagination = ElPagination;
      _push(`<div${ssrRenderAttrs(_attrs)}><div><!--[-->`);
      ssrRenderList(unref(currentResult), (item, index) => {
        _push(`<a class="bg-page p-4 mb-[12px] rounded-[12px] block hover:text-primary"${ssrRenderAttr("href", item.seeMoreUrl)} target="_blank"><div class="line-clamp-2"><span class="text-primary">\u3010${ssrInterpolate(item.index)}\u3011</span><span class="font-bold text-sm">${ssrInterpolate(item.title)}</span></div><div class="text-xs text-tx-regular line-clamp-3">${ssrInterpolate(item.snippet)}</div><div class="flex justify-end items-center mt-2">`);
        _push(ssrRenderComponent(_component_el_image, {
          src: item.image,
          alt: "",
          class: "w-[12px] h-[12px]",
          fit: "contain"
        }, {
          error: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="flex text-primary"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                size: 12,
                name: "el-icon-Link"
              }, null, _parent2, _scopeId));
              _push2(`</span>`);
            } else {
              return [
                createVNode("span", { class: "flex text-primary" }, [
                  createVNode(_component_Icon, {
                    size: 12,
                    name: "el-icon-Link"
                  })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="text-xs text-tx-secondary ml-1">${ssrInterpolate(item.showName)}</div></div></a>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_el_pagination, {
        size: "small",
        background: "",
        "hide-on-single-page": "",
        "page-size": unref(pager).size,
        "onUpdate:pageSize": ($event) => unref(pager).size = $event,
        "current-page": unref(pager).page,
        "onUpdate:currentPage": ($event) => unref(pager).page = $event,
        layout: "pager",
        total: unref(result).search.length,
        class: "py-4"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/_components/search-result/doc.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=doc-DoNecCCG.mjs.map
