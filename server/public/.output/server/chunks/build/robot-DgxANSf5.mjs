import { Swiper, SwiperSlide } from 'swiper/vue';
import { W as Waterfall } from './index-CbOzFVxN.mjs';
import { E as ElAvatar } from './index-BV1cZAUE.mjs';
import { a as useRouter, z as useUserStore, b1 as loading_default, g as ElIcon, d as ElButton } from './server.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { E as ElInfiniteScroll } from './index-DNeGbNHc.mjs';
import { useSSRContext, defineComponent, shallowRef, reactive, ref, withAsyncContext, mergeProps, withCtx, unref, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList, createVNode, createTextVNode } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrGetDirectiveProps, ssrRenderStyle } from 'vue/server-renderer';
import { t as getRobotCategory, D as getRobotSquare, E as putRobotRecord } from './robot-BsB_E1H2.mjs';
import { watchDebounced } from '@vueuse/core';
import { e as emptyImg } from './empty_con-BDdV71_z.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './position-DVxxNIGX.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "robot",
  __ssrInlineRender: true,
  props: {
    keyword: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const router = useRouter();
    const userStore = useUserStore();
    const robotRef = shallowRef();
    const queryParams = reactive({
      keyword: "",
      cid: 0
    });
    const breakpoints = {
      4e3: { rowPerView: 7 },
      2e3: { rowPerView: 6 },
      1800: { rowPerView: 5 },
      1600: { rowPerView: 5 },
      1440: { rowPerView: 4 },
      1360: { rowPerView: 4 },
      1280: { rowPerView: 4 },
      1024: { rowPerView: 3 }
    };
    const pageInfo = reactive({
      pageNo: 1,
      count: 0,
      loading: true,
      pageSize: 15,
      lists: []
    });
    const currentIndex = ref(0);
    const { data: categoryList } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => getRobotCategory(),
      {
        default() {
          return [];
        },
        transform(data) {
          return [
            {
              id: 0,
              name: "\u5168\u90E8"
            }
          ].concat(data);
        },
        lazy: true
      },
      "$LRegJQe7Nd"
    )), __temp = await __temp, __restore(), __temp);
    [__temp, __restore] = withAsyncContext(() => useAsyncData(() => getLists(), { lazy: true }, "$elq9G93T6A")), await __temp, __restore();
    const getLists = async () => {
      pageInfo.loading = true;
      try {
        const data = await getRobotSquare({
          ...queryParams,
          page_no: pageInfo.pageNo,
          page_size: pageInfo.pageSize
        });
        if (pageInfo.pageNo === 1) {
          pageInfo.lists = [];
        }
        pageInfo.count = data.count;
        pageInfo.lists.push(...data.lists);
      } finally {
        setTimeout(() => pageInfo.loading = false, 200);
      }
    };
    const load = () => {
      if (!userStore.isLogin) return;
      if (pageInfo.count >= pageInfo.pageNo * pageInfo.pageSize) {
        pageInfo.pageNo++;
        getLists();
      }
    };
    const resetPage = () => {
      pageInfo.pageNo = 1;
      getLists();
    };
    const swiperInstance = shallowRef();
    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
      console.log(swiper);
    };
    const selectCategory = (index) => {
      var _a;
      currentIndex.value = index;
      queryParams.cid = (_a = categoryList.value[index]) == null ? void 0 : _a.id;
      resetPage();
    };
    selectCategory(0);
    const openRobot = async (item) => {
      if (!userStore.isLogin) {
        userStore.toggleShowLogin();
        return;
      }
      const { id } = await putRobotRecord({
        id: item.id
      });
      router.push({
        path: "/robot_square/chat",
        query: {
          id
        }
      });
    };
    watchDebounced(
      () => props.keyword,
      (value) => {
        queryParams.keyword = value;
        resetPage();
      },
      {
        debounce: 500
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      const _component_Waterfall = Waterfall;
      const _component_ElAvatar = ElAvatar;
      const _component_el_icon = ElIcon;
      const _component_el_image = ElImage;
      const _component_ElButton = ElButton;
      const _directive_infinite_scroll = ElInfiniteScroll;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 min-h-0 mx-[16px] relative" }, _attrs))} data-v-a7660ba3>`);
      _push(ssrRenderComponent(_component_swiper, {
        slidesPerView: "auto",
        spaceBetween: 16,
        class: "category-lists",
        onSwiper,
        style: { "padding": "10px 0" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(categoryList), (item, index) => {
              _push2(ssrRenderComponent(_component_swiper_slide, {
                key: item.id,
                style: { "width": "auto", "margin-right": "12px" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (Object.keys(item).includes("name")) {
                      _push3(`<div class="${ssrRenderClass([{
                        "is-active": unref(currentIndex) === index
                      }, "category-item bg-white"])}" data-v-a7660ba3${_scopeId2}>${ssrInterpolate(item.name)}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      Object.keys(item).includes("name") ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ["category-item bg-white", {
                          "is-active": unref(currentIndex) === index
                        }],
                        onClick: ($event) => selectCategory(index)
                      }, toDisplayString(item.name), 11, ["onClick"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(categoryList), (item, index) => {
                return openBlock(), createBlock(_component_swiper_slide, {
                  key: item.id,
                  style: { "width": "auto", "margin-right": "12px" }
                }, {
                  default: withCtx(() => [
                    Object.keys(item).includes("name") ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ["category-item bg-white", {
                        "is-active": unref(currentIndex) === index
                      }],
                      onClick: ($event) => selectCategory(index)
                    }, toDisplayString(item.name), 11, ["onClick"])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex-1 min-h-[70vh] overflow-hidden mx-auto" data-v-a7660ba3><div${ssrRenderAttrs(mergeProps({
        class: "model-lists mb-[10px] mx-[0px]",
        ref_key: "robotRef",
        ref: robotRef,
        "infinite-scroll-distance": "50"
      }, ssrGetDirectiveProps(_ctx, _directive_infinite_scroll, load)))} data-v-a7660ba3>`);
      if (unref(pageInfo).lists.length) {
        _push(ssrRenderComponent(_component_Waterfall, {
          ref: "waterFull",
          delay: 100,
          list: unref(pageInfo).lists,
          width: 315,
          gutter: 20,
          animationDelay: 0,
          animationDuration: 0,
          backgroundColor: "none",
          animationPrefix: "none",
          animated: "none",
          animationEffect: "none",
          breakpoints
        }, {
          item: withCtx(({ item }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="card-item cursor-pointer bg-white dark:bg-[#1d2025]" data-v-a7660ba3${_scopeId}><div class="flex items-center" data-v-a7660ba3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ElAvatar, {
                class: "flex-none",
                src: item.image,
                size: 64
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex-1 min-w-0 ml-[15px]" data-v-a7660ba3${_scopeId}><div class="line-clamp-1 text-xl font-medium" data-v-a7660ba3${_scopeId}>${ssrInterpolate(item.name)}</div><div class="line-clamp-1 text-tx-secondary text-xs mt-[5px]" data-v-a7660ba3${_scopeId}>${ssrInterpolate(item.author)}</div></div></div><div class="mt-[13px] text-tx-secondary line-clamp-2 h-[40px] text-sm" data-v-a7660ba3${_scopeId}>${ssrInterpolate(item.intro)}</div><div class="mt-[30px] entry-btn" data-v-a7660ba3${_scopeId}>\u5F00\u59CB\u5BF9\u8BDD</div></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "card-item cursor-pointer bg-white dark:bg-[#1d2025]",
                  onClick: ($event) => openRobot(item)
                }, [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(_component_ElAvatar, {
                      class: "flex-none",
                      src: item.image,
                      size: 64
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "flex-1 min-w-0 ml-[15px]" }, [
                      createVNode("div", { class: "line-clamp-1 text-xl font-medium" }, toDisplayString(item.name), 1),
                      createVNode("div", { class: "line-clamp-1 text-tx-secondary text-xs mt-[5px]" }, toDisplayString(item.author), 1)
                    ])
                  ]),
                  createVNode("div", { class: "mt-[13px] text-tx-secondary line-clamp-2 h-[40px] text-sm" }, toDisplayString(item.intro), 1),
                  createVNode("div", { class: "mt-[30px] entry-btn" }, "\u5F00\u59CB\u5BF9\u8BDD")
                ], 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(pageInfo).loading) {
        _push(`<div class="flex justify-center items-center mt-[50px]" data-v-a7660ba3>`);
        _push(ssrRenderComponent(_component_el_icon, {
          size: "25",
          class: "is-loading"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(loading_default), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(loading_default))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span class="mt-[4px] ml-[10px] text-[#999999]" data-v-a7660ba3>\u52A0\u8F7D\u4E2D...</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col justify-center items-center w-full h-[60vh]" style="${ssrRenderStyle(!unref(pageInfo).lists.length && !unref(pageInfo).loading ? null : { display: "none" })}" data-v-a7660ba3>`);
      _push(ssrRenderComponent(_component_el_image, {
        class: "w-[200px] h-[200px]",
        src: unref(emptyImg)
      }, null, _parent));
      _push(`<div class="text-tx-regular mb-4" data-v-a7660ba3>\u6682\u65E0\u673A\u5668\u4EBA</div>`);
      _push(ssrRenderComponent(_component_ElButton, {
        type: "primary",
        onClick: resetPage
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u70B9\u51FB\u5237\u65B0`);
          } else {
            return [
              createTextVNode(" \u70B9\u51FB\u5237\u65B0")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/robot_square/_components/robot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Robot = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a7660ba3"]]);

export { Robot as default };
//# sourceMappingURL=robot-DgxANSf5.mjs.map
