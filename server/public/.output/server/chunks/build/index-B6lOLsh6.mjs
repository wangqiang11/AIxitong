import { ag as useRoute, a as useRouter, a5 as useAppStore, z as useUserStore, aI as getDecorate, aH as search_default, ah as __nuxt_component_0, E as ElInput } from './server.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, computed, mergeProps, withCtx, unref, isRef, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, nextTick } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import Robot from './robot-DgxANSf5.mjs';
import Draw from './draw-COlDgzMm.mjs';
import Music from './music-Cg_-zxEJ.mjs';
import Video from './video-BXOGaQI6.mjs';
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
import 'swiper/vue';
import './index-CbOzFVxN.mjs';
import './index-BV1cZAUE.mjs';
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './index-DNeGbNHc.mjs';
import './robot-BsB_E1H2.mjs';
import './empty_con-BDdV71_z.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-BoqjHllR.mjs';
import './square-BZJdPCMw.mjs';
import './task_reward-DRop0WtE.mjs';
import './index-CFqym9DX.mjs';
import './posterPop-CHjpMb7r.mjs';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-0xCxAaTZ.mjs';
import './index-pT4w-4Lo.mjs';
import './useCopy-CfS-iChu.mjs';
import './download-N0luyf1S.mjs';
import 'qrcode.vue';
import './nuxt-link-l5zPv3vf.mjs';
import './player-DDfYp134.mjs';
import './el-slider-LwCMMHAn.mjs';
import './el-input-number-DH6NTUUv.mjs';
import './index-iSFXrlfY.mjs';
import './music-A1_NVo6h.mjs';
import './index-D8NbhMns.mjs';
import './index-DVLwoLV9.mjs';
import 'video.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRoute();
    const router = useRouter();
    const appStore = useAppStore();
    useUserStore();
    const tabList = [
      { label: "\u667A\u80FD\u4F53", value: 0, component: Robot },
      { label: "AI\u7ED8\u753B", value: 1, component: Draw },
      { label: "AI\u97F3\u4E50", value: 2, component: Music },
      { label: "AI\u89C6\u9891", value: 3, component: Video }
    ];
    const tbaIndex = ref(0);
    const keyword = ref("");
    const currentComponent = ref(Robot);
    const componentShow = ref(true);
    const { data: pages } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => getDecorate({ id: 6 }),
      {
        lazy: true,
        default() {
          return [];
        },
        transform: (value) => {
          return JSON.parse(value.data);
        }
      },
      "$mrRHbfubzc"
    )), __temp = await __temp, __restore(), __temp);
    const getTitleColor = computed(() => {
      return (type) => {
        switch (type) {
          case 1:
            return "text-black";
          case 2:
            return "text-white";
          case 3:
            return "text-primary";
        }
      };
    });
    const selectTabs = async (index2) => {
      if (tbaIndex.value === index2) return;
      keyword.value = "";
      tbaIndex.value = index2;
      componentShow.value = false;
      currentComponent.value = tabList[tbaIndex.value].component;
      await nextTick();
      componentShow.value = true;
      router.replace({
        path: "",
        query: {
          type: index2
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_el_input = ElInput;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
          if (_push2) {
            _push2(`<div class="h-full flex flex-col 4xl:w-[2000px] mx-auto" data-v-411df7fd${_scopeId}><header class="robot-square-header flex flex-col justify-center items-center px-[16px] m-[16px] rounded-[12px] overflow-hidden" style="${ssrRenderStyle({
              "background-image": `url(${unref(appStore).getImageUrl(
                (_c = (_b = (_a = unref(pages)) == null ? void 0 : _a[0]) == null ? void 0 : _b.prop) == null ? void 0 : _c.banner_bg
              )})`
            })}" data-v-411df7fd${_scopeId}><div class="${ssrRenderClass([unref(getTitleColor)((_f = (_e = (_d = unref(pages)) == null ? void 0 : _d[0]) == null ? void 0 : _e.prop) == null ? void 0 : _f.title_color), "font-medium 2xl:text-[50px] xl:text-[40px] lg:text-[36px] text-[36px]"])}" data-v-411df7fd${_scopeId}>${ssrInterpolate((_i = (_h = (_g = unref(pages)) == null ? void 0 : _g[0]) == null ? void 0 : _h.prop) == null ? void 0 : _i.title)}</div><div class="tabs-list grid grid-cols-4 gap-4 mt-4" data-v-411df7fd${_scopeId}><!--[-->`);
            ssrRenderList(tabList, (item, index2) => {
              _push2(`<div class="${ssrRenderClass([{
                "is-active": unref(tbaIndex) === index2
              }, "tabs-item bg-white"])}" data-v-411df7fd${_scopeId}>${ssrInterpolate(item.label)}</div>`);
            });
            _push2(`<!--]--></div><div class="2xl:max-w-[880px] xl:max-w-[780px] lg:max-w-[680px] max-w-[680px] search w-full mt-4" data-v-411df7fd${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_input, {
              size: "large",
              class: "2xl:h-[54px] xl:h-[48px] lg:h-[44px] rounded-[12px]",
              style: { "--el-border-color": "transparent" },
              modelValue: unref(keyword),
              "onUpdate:modelValue": ($event) => isRef(keyword) ? keyword.value = $event : null,
              clearable: true,
              "prefix-icon": unref(search_default),
              placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
            }, null, _parent2, _scopeId));
            _push2(`</div></header>`);
            if (unref(componentShow)) {
              _push2(`<div class="flex-1 min-h-0 mx-[16px] relative" data-v-411df7fd${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(currentComponent)), { keyword: unref(keyword) }, null), _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "h-full flex flex-col 4xl:w-[2000px] mx-auto" }, [
                createVNode("header", {
                  class: "robot-square-header flex flex-col justify-center items-center px-[16px] m-[16px] rounded-[12px] overflow-hidden",
                  style: {
                    "background-image": `url(${unref(appStore).getImageUrl(
                      (_l = (_k = (_j = unref(pages)) == null ? void 0 : _j[0]) == null ? void 0 : _k.prop) == null ? void 0 : _l.banner_bg
                    )})`
                  }
                }, [
                  createVNode("div", {
                    class: ["font-medium 2xl:text-[50px] xl:text-[40px] lg:text-[36px] text-[36px]", unref(getTitleColor)((_o = (_n = (_m = unref(pages)) == null ? void 0 : _m[0]) == null ? void 0 : _n.prop) == null ? void 0 : _o.title_color)]
                  }, toDisplayString((_r = (_q = (_p = unref(pages)) == null ? void 0 : _p[0]) == null ? void 0 : _q.prop) == null ? void 0 : _r.title), 3),
                  createVNode("div", { class: "tabs-list grid grid-cols-4 gap-4 mt-4" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(tabList, (item, index2) => {
                      return createVNode("div", {
                        class: ["tabs-item bg-white", {
                          "is-active": unref(tbaIndex) === index2
                        }],
                        onClick: ($event) => selectTabs(index2)
                      }, toDisplayString(item.label), 11, ["onClick"]);
                    }), 64))
                  ]),
                  createVNode("div", { class: "2xl:max-w-[880px] xl:max-w-[780px] lg:max-w-[680px] max-w-[680px] search w-full mt-4" }, [
                    createVNode(_component_el_input, {
                      size: "large",
                      class: "2xl:h-[54px] xl:h-[48px] lg:h-[44px] rounded-[12px]",
                      style: { "--el-border-color": "transparent" },
                      modelValue: unref(keyword),
                      "onUpdate:modelValue": ($event) => isRef(keyword) ? keyword.value = $event : null,
                      clearable: true,
                      "prefix-icon": unref(search_default),
                      placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                  ])
                ], 4),
                unref(componentShow) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex-1 min-h-0 mx-[16px] relative"
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(currentComponent)), { keyword: unref(keyword) }, null, 8, ["keyword"]))
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/robot_square/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-411df7fd"]]);

export { index as default };
//# sourceMappingURL=index-B6lOLsh6.mjs.map
