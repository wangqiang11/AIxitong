import { _ as _sfc_main$1 } from './index-DLVgZG5d.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { a5 as useAppStore } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-l5zPv3vf.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'lodash-es';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
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
  __name: "guide",
  __ssrInlineRender: true,
  props: {
    prop: {}
  },
  setup(__props) {
    const props = __props;
    const appStore = useAppStore();
    const getShowColumn1Data = computed(
      () => props.prop.columnMenu1.filter((item) => item.isShow)
    );
    const getShowColumn2Data = computed(
      () => props.prop.columnMenu2.filter((item) => item.isShow)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppLink = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "bg-center bg-cover",
        style: {
          backgroundImage: `url(${unref(appStore).getImageUrl(_ctx.prop.bgImage)})`
        }
      }, _attrs))} data-v-8bcf370f><div class="flex flex-col items-center mx-auto max-w-[1200px]" data-v-8bcf370f><div class="${ssrRenderClass([{
        "lg:grid-cols-2": !_ctx.prop.isShowLeft
      }, "grid grid-cols-1 lg:grid-cols-3 xl:gap-x-10 sm:py-10 lg:max-w-[1150px] lg:mx-auto"])}" data-v-8bcf370f>`);
      if (_ctx.prop.isShowLeft) {
        _push(`<div class="flex justify-center flex-col mt-4 sm:mt-0" data-v-8bcf370f><div class="flex items-center" data-v-8bcf370f><img class="w-[34px] h-[34px]"${ssrRenderAttr("src", unref(appStore).getImageUrl(_ctx.prop.logoImage))} alt="" data-v-8bcf370f><span class="text-[20px] font-medium ml-2" data-v-8bcf370f>${ssrInterpolate(unref(appStore).getWebsiteConfig.pc_name)}</span></div><div class="flex sm:mt-3 sm:flex-col" data-v-8bcf370f><div class="mt-5 sm:mb-5" data-v-8bcf370f>${ssrInterpolate(_ctx.prop.content)}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid grid-cols-2 mt-10 sm:mt-0" data-v-8bcf370f><div class="mt-4 text-center" data-v-8bcf370f><div class="text-[18px] font-bold" data-v-8bcf370f>${ssrInterpolate(_ctx.prop.column1)}</div><div class="mt-2 text-[14px] text-[#666]" data-v-8bcf370f><!--[-->`);
      ssrRenderList(unref(getShowColumn1Data), (item, index) => {
        var _a, _b;
        _push(`<ul data-v-8bcf370f>`);
        _push(ssrRenderComponent(_component_AppLink, {
          to: {
            path: (_a = item.link) == null ? void 0 : _a.path,
            query: (_b = item.link) == null ? void 0 : _b.query
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<li class="mt-[15px] cursor-pointer" data-v-8bcf370f${_scopeId}>${ssrInterpolate(item.title)}</li>`);
            } else {
              return [
                createVNode("li", { class: "mt-[15px] cursor-pointer" }, toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</ul>`);
      });
      _push(`<!--]--></div></div><div class="mt-4 text-center" data-v-8bcf370f><div class="text-[18px] font-bold" data-v-8bcf370f>${ssrInterpolate(_ctx.prop.column2)}</div><div class="mt-2 text-[14px] text-[#666]" data-v-8bcf370f><!--[-->`);
      ssrRenderList(unref(getShowColumn2Data), (item, index) => {
        var _a, _b;
        _push(`<ul data-v-8bcf370f>`);
        _push(ssrRenderComponent(_component_AppLink, {
          to: {
            path: (_a = item.link) == null ? void 0 : _a.path,
            query: (_b = item.link) == null ? void 0 : _b.query
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<li class="mt-[15px] cursor-pointer" data-v-8bcf370f${_scopeId}>${ssrInterpolate(item.title)}</li>`);
            } else {
              return [
                createVNode("li", { class: "mt-[15px] cursor-pointer" }, toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</ul>`);
      });
      _push(`<!--]--></div></div></div><div class="flex items-center sm:m-0 m-5 sm:mt-[25px] mt-[35px]" data-v-8bcf370f>`);
      if (_ctx.prop.rightQrcodeShow1) {
        _push(`<div class="mr-10 text-center sm:mr-12" data-v-8bcf370f><img class="w-[120px] h-[120px]"${ssrRenderAttr("src", unref(appStore).getImageUrl(_ctx.prop.rightQrcode1))} alt="\u7801\u591A\u591A" data-v-8bcf370f><div class="mt-3 text-[#666]" data-v-8bcf370f>${ssrInterpolate(_ctx.prop.rightQrcodeTitle1)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.prop.rightQrcodeShow2) {
        _push(`<div class="text-center" data-v-8bcf370f><img class="w-[120px] h-[120px]"${ssrRenderAttr("src", unref(appStore).getImageUrl(_ctx.prop.rightQrcode2))} alt="\u7801\u591A\u591A" data-v-8bcf370f><div class="mt-3 text-[#666]" data-v-8bcf370f>${ssrInterpolate(_ctx.prop.rightQrcodeTitle2)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/_components/guide.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const guide = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8bcf370f"]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: guide
});

export { __vite_glob_0_1 as _ };
//# sourceMappingURL=guide-CT2_xTNK.mjs.map
