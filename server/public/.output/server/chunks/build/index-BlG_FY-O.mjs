import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as _sfc_main$1, a as _sfc_main$2 } from './display-CW6dIehm.mjs';
import { u as useMusicPlay, _ as __nuxt_component_3 } from './player-DDfYp134.mjs';
import { _ as _sfc_main$3 } from './index-BoqjHllR.mjs';
import { E as ElInfiniteScroll } from './index-DNeGbNHc.mjs';
import { z as useUserStore, B as vLoading } from './server.mjs';
import { useSSRContext, defineComponent, shallowRef, ref, reactive, watch, mergeProps, unref, withCtx, withDirectives, openBlock, createBlock, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrGetDirectiveProps, ssrRenderComponent } from 'vue/server-renderer';
import { b as getMusicLists } from './music-A1_NVo6h.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import '@vue/shared';
import './index-C2yEelJa.mjs';
import 'lodash-unified';
import './position-DVxxNIGX.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './download-N0luyf1S.mjs';
import './index-CUhOTuS-.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import './task_reward-DRop0WtE.mjs';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './useLockFn-BWbjkhBs.mjs';
import './el-slider-LwCMMHAn.mjs';
import './el-input-number-DH6NTUUv.mjs';
import './index-iSFXrlfY.mjs';
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
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    useUserStore();
    const scrollBarRef = shallowRef();
    const categoryList = [
      {
        name: "\u5168\u90E8",
        type: -1
      },
      {
        name: "\u751F\u6210\u4E2D",
        type: 1
      },
      {
        name: "\u751F\u6210\u6210\u529F",
        type: 2
      },
      {
        name: "\u751F\u6210\u5931\u8D25",
        type: 3
      }
    ];
    const { getMusic, currentId, pause } = useMusicPlay();
    const currentType = ref(-1);
    const pageInfo = reactive({
      pageNo: 1,
      count: 0,
      pageSize: 15,
      loading: true,
      lists: []
    });
    const timer = shallowRef();
    const currentGeneratingNum = ref(0);
    const checkHasGenerating = async () => {
      clearTimeout(timer.value);
      const ids = pageInfo.lists.filter((item) => item.status === 1).map((item) => item.id);
      if (ids.length > 0) {
        timer.value = setTimeout(() => {
          resetPage();
        }, 6e3);
      }
      if (ids.length !== currentGeneratingNum.value) {
        getMusic();
      }
      currentGeneratingNum.value = ids.length;
    };
    const getLists = async () => {
      try {
        const data = await getMusicLists({
          status: currentType.value,
          page_no: pageInfo.pageNo,
          page_size: pageInfo.pageSize
        });
        pageInfo.count = data.count;
        if (pageInfo.pageNo === 1) {
          pageInfo.lists = [];
        }
        pageInfo.lists.push(...data.lists);
      } catch (error) {
      } finally {
        pageInfo.loading = false;
        checkHasGenerating();
      }
    };
    getMusic();
    const load = () => {
      if (pageInfo.count >= pageInfo.pageNo * pageInfo.pageSize) {
        pageInfo.pageNo++;
        getLists();
      }
    };
    const resetPage = async () => {
      pageInfo.pageSize = pageInfo.pageNo * pageInfo.pageSize;
      pageInfo.pageNo = 1;
      await getLists();
    };
    __expose({
      refresh: async () => {
        currentType.value = -1;
        await resetPage();
        scrollBarRef.value.setScrollTop(0);
      }
    });
    watch(currentId, (value) => {
      if (scrollBarRef.value) {
        const item = (void 0).getElementById(`music-item-${value}`);
        if (!item) return;
        const itemRect = item == null ? void 0 : item.getBoundingClientRect();
        const scrollRect = scrollBarRef.value.wrapRef.getBoundingClientRect();
        if (itemRect.top < scrollRect.top) {
          scrollBarRef.value.setScrollTop(item == null ? void 0 : item.offsetTop);
        }
        if (itemRect.bottom > scrollRect.bottom) {
          scrollBarRef.value.setScrollTop(
            (item == null ? void 0 : item.offsetTop) - scrollRect.height + itemRect.height
          );
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElScrollbar = ElScrollbar;
      const _component_MusicList = _sfc_main$1;
      const _component_MusicDisplay = _sfc_main$2;
      const _component_MusicPlayer = __nuxt_component_3;
      const _component_Icon = _sfc_main$3;
      const _directive_infinite_scroll = ElInfiniteScroll;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full bg-body rounded-[12px] p-[16px] flex flex-col" }, _attrs))} data-v-1898024f><div class="text-2xl font-bold border-b border-solid border-br-light pb-[16px]" data-v-1898024f> \u751F\u6210\u8BB0\u5F55 </div><div class="flex-1 min-h-0 flex flex-col" data-v-1898024f><div class="category-lists" data-v-1898024f><!--[-->`);
      ssrRenderList(categoryList, (item, index) => {
        _push(`<div data-v-1898024f><div class="${ssrRenderClass([{
          "is-active": unref(currentType) === item.type
        }, "category-item bg-white"])}" data-v-1898024f>${ssrInterpolate(item.name)}</div></div>`);
      });
      _push(`<!--]--></div><div${ssrRenderAttrs(mergeProps({ class: "flex-1 min-h-0" }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(pageInfo).loading)))} data-v-1898024f>`);
      if (unref(pageInfo).lists.length) {
        _push(`<div class="h-full flex flex-col" data-v-1898024f><div class="flex-1 min-h-0 flex" data-v-1898024f><div class="flex-1 min-w-0 h-full" data-v-1898024f>`);
        _push(ssrRenderComponent(_component_ElScrollbar, {
          ref_key: "scrollBarRef",
          ref: scrollBarRef
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${ssrRenderAttrs(mergeProps({ "infinite-scroll-distance": "50" }, ssrGetDirectiveProps(_ctx, _directive_infinite_scroll, load)))} data-v-1898024f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_MusicList, {
                "music-list": unref(pageInfo).lists,
                onUpdate: resetPage
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                withDirectives((openBlock(), createBlock("div", { "infinite-scroll-distance": "50" }, [
                  createVNode(_component_MusicList, {
                    "music-list": unref(pageInfo).lists,
                    onUpdate: resetPage
                  }, null, 8, ["music-list"])
                ])), [
                  [_directive_infinite_scroll, load]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_MusicDisplay, null, null, _parent));
        _push(`</div><div class="mt-[16px]" data-v-1898024f>`);
        _push(ssrRenderComponent(_component_MusicPlayer, {
          ref: "musicPlayerRef",
          class: "bg-page rounded-[12px]"
        }, null, _parent));
        _push(`</div></div>`);
      } else if (!unref(pageInfo).loading) {
        _push(`<div class="h-full flex flex-col items-center justify-center" data-v-1898024f><div class="text-tx-secondary" data-v-1898024f>`);
        _push(ssrRenderComponent(_component_Icon, {
          size: 45,
          name: "local-icon-music1"
        }, null, _parent));
        _push(`</div><div class="my-[10px]" data-v-1898024f>\u5F53\u524D\u8FD8\u6CA1\u6709\u97F3\u4E50\u54E6</div><div class="text-tx-secondary text-sm" data-v-1898024f> \u5728\u5DE6\u4FA7\u8F93\u5165\u63CF\u8FF0\uFF0C\u521B\u5EFA\u4F60\u7684\u4F5C\u54C1\u5427\uFF01 </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/music/_components/record/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Record = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1898024f"]]);

export { Record as default };
//# sourceMappingURL=index-BlG_FY-O.mjs.map
