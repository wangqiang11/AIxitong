import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _sfc_main$1 } from './index-D8NbhMns.mjs';
import { E as ElAvatar } from './index-BV1cZAUE.mjs';
import { E as ElTooltip } from './index-L-VTEUEA.mjs';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { a as useRouter, z as useUserStore, bp as ShareSquareEnum, b1 as loading_default, A as feedback, g as ElIcon, d as ElButton } from './server.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { E as ElInfiniteScroll } from './index-DNeGbNHc.mjs';
import { useSSRContext, defineComponent, reactive, ref, withAsyncContext, shallowRef, mergeProps, withCtx, unref, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList, createVNode, withModifiers, createTextVNode } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { b as download } from './download-N0luyf1S.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrGetDirectiveProps, ssrRenderStyle } from 'vue/server-renderer';
import { c as getVideoSquare, v as videoSquareCollect } from './square-BZJdPCMw.mjs';
import { b as getSquareCategory } from './task_reward-DRop0WtE.mjs';
import { watchDebounced } from '@vueuse/core';
import { e as emptyImg } from './empty_con-BDdV71_z.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-DVLwoLV9.mjs';
import 'video.js';
import '@vue/shared';
import '@popperjs/core';
import 'lodash-unified';
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
import './position-DVxxNIGX.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "video",
  __ssrInlineRender: true,
  props: {
    keyword: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    useRouter();
    const userStore = useUserStore();
    const queryParams = reactive({
      page_no: 0,
      page_size: 20,
      keyword: "",
      category_id: ""
    });
    const pageInfo = reactive({
      more: true,
      count: 0,
      loading: false,
      lists: []
    });
    const currentIndex = ref(0);
    const { data: categoryList } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => getSquareCategory({
        type: ShareSquareEnum.VIDEO
      }),
      {
        default() {
          return [];
        },
        transform(data) {
          return [
            {
              id: "",
              name: "\u5168\u90E8"
            }
          ].concat(data);
        },
        lazy: true
      },
      "$F7shVYj0fG"
    )), __temp = await __temp, __restore(), __temp);
    [__temp, __restore] = withAsyncContext(() => useAsyncData(() => getLists(), { lazy: true }, "$Cw5rrd3Tss")), await __temp, __restore();
    const getLists = async () => {
      if (pageInfo.loading) return;
      if (pageInfo.more) {
        queryParams.page_no += 1;
      } else {
        return;
      }
      pageInfo.loading = true;
      try {
        const data = await getVideoSquare(queryParams);
        const { lists, page_no, page_size, count } = data;
        if (page_no * page_size > count) {
          pageInfo.more = false;
        }
        if (page_no == 1) {
          pageInfo.lists = lists;
        } else {
          pageInfo.lists = [...pageInfo.lists, ...lists];
        }
      } finally {
        setTimeout(() => pageInfo.loading = false, 200);
      }
    };
    const resetPage = () => {
      queryParams.page_no = 0;
      pageInfo.more = true;
      getLists();
    };
    const handlePraise = async (val) => {
      if (!userStore.isLogin) {
        userStore.toggleShowLogin(true);
        return;
      }
      await videoSquareCollect({
        records_id: val.id,
        status: val.is_collect ? 0 : 1
      });
      if (queryParams.category_id === 0) {
        resetPage();
      } else {
        val.is_collect = val.is_collect ? 0 : 1;
      }
    };
    const downloadVideo = async (url, name) => {
      if (!userStore.isLogin) {
        userStore.toggleShowLogin(true);
        return;
      }
      try {
        const res = await $request.get(
          { url, responseType: "blob", baseURL: "" },
          { isReturnDefaultResponse: true, apiPrefix: "" }
        );
        console.log(res);
        const blob = new Blob([res._data], {
          type: res.headers.get("Content-Type")
        });
        const link = (void 0).URL.createObjectURL(blob);
        download(link, name);
      } catch (error) {
        feedback.msgError("\u6587\u4EF6\u4E0B\u8F7D\u5931\u8D25");
      }
    };
    const swiperInstance = shallowRef();
    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
      console.log(swiper);
    };
    const selectCategory = (index) => {
      var _a;
      currentIndex.value = index;
      queryParams.category_id = (_a = categoryList.value[index]) == null ? void 0 : _a.id;
      resetPage();
    };
    selectCategory(0);
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
      const _component_aspect_ratio = _sfc_main$1;
      const _component_ElAvatar = ElAvatar;
      const _component_el_tooltip = ElTooltip;
      const _component_Icon = _sfc_main$2;
      const _component_el_icon = ElIcon;
      const _component_el_image = ElImage;
      const _component_ElButton = ElButton;
      const _directive_infinite_scroll = ElInfiniteScroll;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 min-h-0 mx-[16px] relative" }, _attrs))} data-v-26cc000b>`);
      _push(ssrRenderComponent(_component_swiper, {
        slidesPerView: "auto",
        spaceBetween: 16,
        class: "category-lists",
        style: { "padding": "10px 0" },
        onSwiper
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
                      }, "category-item bg-white"])}" data-v-26cc000b${_scopeId2}>${ssrInterpolate(item.name)}</div>`);
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
      _push(`<div class="flex-1 min-h-[70vh] overflow-hidden mx-auto" data-v-26cc000b><div${ssrRenderAttrs(mergeProps({
        class: "model-lists mb-[10px] mx-[0px]",
        "infinite-scroll-distance": "50",
        "infinite-scroll-delay": 200,
        "infinite-scroll-disabled": !unref(pageInfo).more
      }, ssrGetDirectiveProps(_ctx, _directive_infinite_scroll, getLists)))} data-v-26cc000b>`);
      if (unref(pageInfo).lists.length) {
        _push(`<div class="grid grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 4xl:grid-cols-6 8xl:grid-cols-7 gap-4" data-v-26cc000b><!--[-->`);
        ssrRenderList(unref(pageInfo).lists, (item, index) => {
          var _a, _b;
          _push(`<div class="flex flex-col min-h-0 bg-body rounded-[12px] cursor-pointer" data-v-26cc000b><div class="relative flex-1" data-v-26cc000b><div class="bg-[var(--el-bg-color-page)] rounded-t-[12px] overflow-hidden" data-v-26cc000b>`);
          _push(ssrRenderComponent(_component_aspect_ratio, {
            src: item.video_url,
            type: "video",
            ratio: [4, 3]
          }, null, _parent));
          _push(`</div></div><div class="w-full h-full p-[15px] box-border" data-v-26cc000b><div class="line-clamp-2" data-v-26cc000b>${ssrInterpolate(item.prompt)}</div></div><div class="flex justify-between px-[15px] pb-[20px]" data-v-26cc000b>`);
          if ((_a = item == null ? void 0 : item.user_info) == null ? void 0 : _a.image) {
            _push(`<div class="flex items-center" data-v-26cc000b>`);
            _push(ssrRenderComponent(_component_ElAvatar, {
              size: 28,
              src: (_b = item == null ? void 0 : item.user_info) == null ? void 0 : _b.image
            }, null, _parent));
            _push(`<p class="text-[#BBBBBB] ml-[6px] w-[100px] truncate" data-v-26cc000b>${ssrInterpolate(item.user_info.name)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="flex items-center" data-v-26cc000b>`);
          _push(ssrRenderComponent(_component_el_tooltip, {
            effect: "dark",
            content: "\u6536\u85CF / \u53D6\u6D88\u6536\u85CF",
            placement: "bottom"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="image-praise relative dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content" data-v-26cc000b${_scopeId}><div class="${ssrRenderClass([
                  item.is_collect ? "praise-entry" : "praise-leave",
                  "praise-animate"
                ])}" data-v-26cc000b${_scopeId}></div></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "image-praise relative dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                    onClick: withModifiers(($event) => handlePraise(item), ["stop"])
                  }, [
                    createVNode("div", {
                      class: [
                        "praise-animate",
                        item.is_collect ? "praise-entry" : "praise-leave"
                      ]
                    }, null, 2)
                  ], 8, ["onClick"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_el_tooltip, {
            effect: "dark",
            content: "\u4E0B\u8F7D\u89C6\u9891",
            placement: "bottom"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div data-v-26cc000b${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                  name: "el-icon-Download",
                  size: "24",
                  color: "#556477"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", {
                    onClick: withModifiers(($event) => downloadVideo(
                      item.video_url,
                      "\u89C6\u9891"
                    ), ["stop"])
                  }, [
                    createVNode(_component_Icon, {
                      class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                      name: "el-icon-Download",
                      size: "24",
                      color: "#556477"
                    })
                  ], 8, ["onClick"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(pageInfo).loading) {
        _push(`<div class="flex justify-center items-center mt-[50px]" data-v-26cc000b>`);
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
        _push(`<span class="mt-[4px] ml-[10px] text-[#999999]" data-v-26cc000b>\u52A0\u8F7D\u4E2D...</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col justify-center items-center w-full h-[60vh]" style="${ssrRenderStyle(!unref(pageInfo).lists.length && !unref(pageInfo).loading ? null : { display: "none" })}" data-v-26cc000b>`);
      _push(ssrRenderComponent(_component_el_image, {
        class: "w-[200px] h-[200px]",
        src: unref(emptyImg)
      }, null, _parent));
      _push(`<div class="text-tx-regular mb-4" data-v-26cc000b>\u5F53\u524D\u9009\u62E9\u6682\u65E0\u89C6\u9891\uFF5E</div>`);
      _push(ssrRenderComponent(_component_ElButton, {
        type: "primary",
        onClick: resetPage
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u70B9\u51FB\u5237\u65B0 `);
          } else {
            return [
              createTextVNode(" \u70B9\u51FB\u5237\u65B0 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/robot_square/_components/video.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Video = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-26cc000b"]]);

export { Video as default };
//# sourceMappingURL=video-BXOGaQI6.mjs.map
