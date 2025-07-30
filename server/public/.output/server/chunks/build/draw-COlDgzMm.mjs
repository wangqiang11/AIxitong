import { Swiper, SwiperSlide } from 'swiper/vue';
import { W as Waterfall } from './index-CbOzFVxN.mjs';
import { E as ElTooltip } from './index-L-VTEUEA.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElAvatar } from './index-BV1cZAUE.mjs';
import { a as useRouter, z as useUserStore, bp as ShareSquareEnum, bo as copy, b1 as loading_default, g as ElIcon, d as ElButton } from './server.mjs';
import { E as ElImage, a as ElImageViewer } from './index-C2yEelJa.mjs';
import { E as ElInfiniteScroll } from './index-DNeGbNHc.mjs';
import { useSSRContext, defineComponent, shallowRef, reactive, ref, withAsyncContext, mergeProps, withCtx, unref, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList, createVNode, withModifiers, createTextVNode } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrGetDirectiveProps, ssrRenderStyle } from 'vue/server-renderer';
import { a as getDrawSquare, d as drawSquareCollect } from './square-BZJdPCMw.mjs';
import { b as getSquareCategory } from './task_reward-DRop0WtE.mjs';
import { watchDebounced } from '@vueuse/core';
import { e as emptyImg } from './empty_con-BDdV71_z.mjs';
import { I as ImageCover } from './index-CFqym9DX.mjs';
import PosterPop from './posterPop-CHjpMb7r.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@popperjs/core';
import '@vue/shared';
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
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-0xCxAaTZ.mjs';
import './index-pT4w-4Lo.mjs';
import './useCopy-CfS-iChu.mjs';
import './download-N0luyf1S.mjs';
import 'qrcode.vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "draw",
  __ssrInlineRender: true,
  props: {
    keyword: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    useRouter();
    const userStore = useUserStore();
    const waterFull = shallowRef(null);
    const posterPopupRef = shallowRef(null);
    const queryParams = reactive({
      page_no: 0,
      page_size: 20,
      keyword: "",
      category_id: ""
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
      more: true,
      count: 0,
      loading: false,
      lists: []
    });
    const currentIndex = ref(0);
    const previewLists = ref([]);
    const { data: categoryList } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => getSquareCategory({
        type: ShareSquareEnum.DRAW
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
      "$SQjM9OqPT4"
    )), __temp = await __temp, __restore(), __temp);
    [__temp, __restore] = withAsyncContext(() => useAsyncData(() => getLists(), { lazy: true }, "$E2KxCY8C7W")), await __temp, __restore();
    const getLists = async () => {
      if (pageInfo.loading) return;
      if (pageInfo.more) {
        queryParams.page_no += 1;
      } else {
        return;
      }
      pageInfo.loading = true;
      try {
        const data = await getDrawSquare(queryParams);
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
      await drawSquareCollect({
        records_id: val.id,
        status: val.is_collect ? 0 : 1
      });
      if (queryParams.category_id === 0) {
        resetPage();
      } else {
        val.is_collect = val.is_collect ? 0 : 1;
      }
    };
    const openPoster = (value) => {
      if (!userStore.isLogin) {
        userStore.toggleShowLogin(true);
        return;
      }
      posterPopupRef.value.open(value);
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
      const _component_Waterfall = Waterfall;
      const _component_el_tooltip = ElTooltip;
      const _component_Icon = _sfc_main$1;
      const _component_ElAvatar = ElAvatar;
      const _component_el_icon = ElIcon;
      const _component_el_image = ElImage;
      const _component_ElButton = ElButton;
      const _component_el_image_viewer = ElImageViewer;
      const _directive_infinite_scroll = ElInfiniteScroll;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 min-h-0 mx-[16px] relative" }, _attrs))} data-v-c481d2de>`);
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
                      }, "category-item bg-white"])}" data-v-c481d2de${_scopeId2}>${ssrInterpolate(item.name)}</div>`);
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
      _push(`<div class="flex-1 min-h-[70vh] overflow-hidden mx-auto" data-v-c481d2de><div${ssrRenderAttrs(mergeProps({
        class: "model-lists mb-[10px] mx-[0px]",
        "infinite-scroll-distance": "50",
        "infinite-scroll-delay": 200,
        "infinite-scroll-disabled": !unref(pageInfo).more
      }, ssrGetDirectiveProps(_ctx, _directive_infinite_scroll, getLists)))} data-v-c481d2de>`);
      if (unref(pageInfo).lists.length) {
        _push(ssrRenderComponent(_component_Waterfall, {
          ref_key: "waterFull",
          ref: waterFull,
          delay: 100,
          list: unref(pageInfo).lists,
          width: 305,
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
            var _a, _b, _c, _d;
            if (_push2) {
              _push2(`<div class="image-payload h-full w-full relative text-sm" data-v-c481d2de${_scopeId}><div class="image-bg" data-v-c481d2de${_scopeId}>`);
              _push2(ssrRenderComponent(ImageCover, {
                thumbnail: item.thumbnail,
                image: (item == null ? void 0 : item.image) || (item == null ? void 0 : item.image_url),
                onRefresh: ($event) => {
                  var _a2;
                  return (_a2 = unref(waterFull)) == null ? void 0 : _a2.renderer();
                },
                onOnClick: (val) => previewLists.value = val
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="image-praise relative" data-v-c481d2de${_scopeId}><div class="${ssrRenderClass([
                item.is_collect ? "praise-entry" : "praise-leave",
                "praise-animate"
              ])}" data-v-c481d2de${_scopeId}></div></div>`);
              _push2(ssrRenderComponent(_component_el_tooltip, {
                effect: "dark",
                content: "\u751F\u6210\u6D77\u62A5",
                placement: "top"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="image-poster relative" data-v-c481d2de${_scopeId2}><div class="text-center leading-[38px]" data-v-c481d2de${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      size: "16px",
                      color: "#ffffff",
                      name: "el-icon-Picture"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "image-poster relative",
                        onClick: withModifiers(($event) => openPoster(item), ["stop"])
                      }, [
                        createVNode("div", { class: "text-center leading-[38px]" }, [
                          createVNode(_component_Icon, {
                            size: "16px",
                            color: "#ffffff",
                            name: "el-icon-Picture"
                          })
                        ])
                      ], 8, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="image-content" data-v-c481d2de${_scopeId}><p class="text-white line-clamp-2" data-v-c481d2de${_scopeId}>${ssrInterpolate((item == null ? void 0 : item.prompts_cn) || (item == null ? void 0 : item.original_prompts.prompt))}</p><div class="flex justify-between mt-[10px]" data-v-c481d2de${_scopeId}><div class="flex items-center" data-v-c481d2de${_scopeId}>`);
              if ((_a = item == null ? void 0 : item.user_info) == null ? void 0 : _a.image) {
                _push2(`<!--[-->`);
                _push2(ssrRenderComponent(_component_ElAvatar, {
                  size: 28,
                  src: (_b = item == null ? void 0 : item.user_info) == null ? void 0 : _b.image
                }, null, _parent2, _scopeId));
                _push2(`<p class="text-[#BBBBBB] ml-[6px] w-[80px] truncate" data-v-c481d2de${_scopeId}>${ssrInterpolate(item.user_info.name)}</p><!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center" data-v-c481d2de${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-Copy" }, null, _parent2, _scopeId));
              _push2(`<p class="text-white ml-[6px]" data-v-c481d2de${_scopeId}> \u590D\u5236 </p></div></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "image-payload h-full w-full relative text-sm" }, [
                  createVNode("div", { class: "image-bg" }, [
                    createVNode(ImageCover, {
                      thumbnail: item.thumbnail,
                      image: (item == null ? void 0 : item.image) || (item == null ? void 0 : item.image_url),
                      onRefresh: ($event) => {
                        var _a2;
                        return (_a2 = unref(waterFull)) == null ? void 0 : _a2.renderer();
                      },
                      onOnClick: (val) => previewLists.value = val
                    }, null, 8, ["thumbnail", "image", "onRefresh", "onOnClick"])
                  ]),
                  createVNode("div", {
                    class: "image-praise relative",
                    onClick: ($event) => handlePraise(item)
                  }, [
                    createVNode("div", {
                      class: [
                        "praise-animate",
                        item.is_collect ? "praise-entry" : "praise-leave"
                      ]
                    }, null, 2)
                  ], 8, ["onClick"]),
                  createVNode(_component_el_tooltip, {
                    effect: "dark",
                    content: "\u751F\u6210\u6D77\u62A5",
                    placement: "top"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "image-poster relative",
                        onClick: withModifiers(($event) => openPoster(item), ["stop"])
                      }, [
                        createVNode("div", { class: "text-center leading-[38px]" }, [
                          createVNode(_component_Icon, {
                            size: "16px",
                            color: "#ffffff",
                            name: "el-icon-Picture"
                          })
                        ])
                      ], 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode("div", { class: "image-content" }, [
                    createVNode("p", {
                      class: "text-white line-clamp-2",
                      onClick: ($event) => ("copy" in _ctx ? _ctx.copy : unref(copy))(item.prompt)
                    }, toDisplayString((item == null ? void 0 : item.prompts_cn) || (item == null ? void 0 : item.original_prompts.prompt)), 9, ["onClick"]),
                    createVNode("div", { class: "flex justify-between mt-[10px]" }, [
                      createVNode("div", { class: "flex items-center" }, [
                        ((_c = item == null ? void 0 : item.user_info) == null ? void 0 : _c.image) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode(_component_ElAvatar, {
                            size: 28,
                            src: (_d = item == null ? void 0 : item.user_info) == null ? void 0 : _d.image
                          }, null, 8, ["src"]),
                          createVNode("p", { class: "text-[#BBBBBB] ml-[6px] w-[80px] truncate" }, toDisplayString(item.user_info.name), 1)
                        ], 64)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", {
                        class: "flex items-center",
                        onClick: ($event) => ("copy" in _ctx ? _ctx.copy : unref(copy))(item.prompts)
                      }, [
                        createVNode(_component_Icon, { name: "el-icon-Copy" }),
                        createVNode("p", { class: "text-white ml-[6px]" }, " \u590D\u5236 ")
                      ], 8, ["onClick"])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(pageInfo).loading) {
        _push(`<div class="flex justify-center items-center mt-[50px]" data-v-c481d2de>`);
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
        _push(`<span class="mt-[4px] ml-[10px] text-[#999999]" data-v-c481d2de>\u52A0\u8F7D\u4E2D...</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col justify-center items-center w-full h-[60vh]" style="${ssrRenderStyle(!unref(pageInfo).lists.length && !unref(pageInfo).loading ? null : { display: "none" })}" data-v-c481d2de>`);
      _push(ssrRenderComponent(_component_el_image, {
        class: "w-[200px] h-[200px]",
        src: unref(emptyImg)
      }, null, _parent));
      _push(`<div class="text-tx-regular mb-4" data-v-c481d2de>\u5F53\u524D\u9009\u62E9\u6682\u65E0\u7ED8\u753B\uFF5E</div>`);
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
      _push(`</div></div>`);
      _push(ssrRenderComponent(PosterPop, {
        ref_key: "posterPopupRef",
        ref: posterPopupRef
      }, null, _parent));
      if (unref(previewLists).length) {
        _push(ssrRenderComponent(_component_el_image_viewer, {
          "url-list": unref(previewLists),
          "hide-on-click-modal": true,
          onClose: ($event) => previewLists.value = []
        }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/robot_square/_components/draw.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Draw = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c481d2de"]]);

export { Draw as default };
//# sourceMappingURL=draw-COlDgzMm.mjs.map
