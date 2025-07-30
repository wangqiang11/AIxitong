import { Swiper, SwiperSlide } from 'swiper/vue';
import { W as Waterfall } from './index-CbOzFVxN.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { E as ElAvatar } from './index-BV1cZAUE.mjs';
import { E as ElTooltip } from './index-L-VTEUEA.mjs';
import { a as useRouter, z as useUserStore, bp as ShareSquareEnum, b1 as loading_default, A as feedback, g as ElIcon, d as ElButton } from './server.mjs';
import { u as useMusicPlay, _ as __nuxt_component_3 } from './player-DDfYp134.mjs';
import { E as ElInfiniteScroll } from './index-DNeGbNHc.mjs';
import { useSSRContext, defineComponent, shallowRef, reactive, ref, withAsyncContext, mergeProps, withCtx, unref, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList, createTextVNode, createVNode, withModifiers } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { b as download } from './download-N0luyf1S.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrGetDirectiveProps, ssrRenderAttr } from 'vue/server-renderer';
import { b as getMusicSquare, m as musicSquareCollect } from './square-BZJdPCMw.mjs';
import { b as getSquareCategory } from './task_reward-DRop0WtE.mjs';
import { watchDebounced } from '@vueuse/core';
import { e as emptyImg } from './empty_con-BDdV71_z.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'lodash-unified';
import './position-DVxxNIGX.mjs';
import '@vue/shared';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@popperjs/core';
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
import './el-slider-LwCMMHAn.mjs';
import './el-input-number-DH6NTUUv.mjs';
import './index-iSFXrlfY.mjs';
import './music-A1_NVo6h.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "music",
  __ssrInlineRender: true,
  props: {
    keyword: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const router = useRouter();
    const userStore = useUserStore();
    const waterFull = shallowRef(null);
    const { playing, currentId, setCurrentId, togglePlay, setMusic } = useMusicPlay();
    const queryParams = reactive({
      page_no: 0,
      page_size: 20,
      keyword: "",
      category_id: ""
    });
    const breakpoints = {
      4e3: { rowPerView: 4 },
      2e3: { rowPerView: 3 },
      1800: { rowPerView: 3 },
      1600: { rowPerView: 3 },
      1440: { rowPerView: 2 },
      1360: { rowPerView: 2 },
      1280: { rowPerView: 2 },
      1024: { rowPerView: 2 }
    };
    const pageInfo = reactive({
      first: true,
      more: true,
      count: 0,
      loading: false,
      lists: []
    });
    const currentIndex = ref(0);
    const { data: categoryList } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => getSquareCategory({
        type: ShareSquareEnum.MUSIC
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
      "$ydYDo0Bg16"
    )), __temp = await __temp, __restore(), __temp);
    [__temp, __restore] = withAsyncContext(() => useAsyncData(() => getLists(), { lazy: true }, "$Fywk2foRYg")), await __temp, __restore();
    const getLists = async () => {
      if (pageInfo.loading) return;
      if (pageInfo.more) {
        queryParams.page_no += 1;
      } else {
        return;
      }
      pageInfo.loading = true;
      try {
        const data = await getMusicSquare(queryParams);
        const { lists, page_no, page_size, count } = data;
        if (page_no * page_size > count) {
          pageInfo.more = false;
        }
        if (page_no == 1) {
          pageInfo.lists = lists;
        } else {
          pageInfo.lists = [...pageInfo.lists, ...lists];
        }
        if (lists.length) {
          const flagList = pageInfo.lists.map((item) => {
            item.square_id = item.id;
            item.id = item.records_id;
            return item;
          });
          setMusic(flagList);
          currentId.value = pageInfo.lists[0].records_id;
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
    const handleToPlayer = (item) => {
      router.push({
        path: "/music/player",
        query: {
          id: item.square_id
        }
      });
    };
    const selectMusic = (item) => {
      if (item.records_id == currentId.value) {
        togglePlay();
        return;
      }
      setCurrentId(item.records_id);
    };
    const handlePraise = async (val) => {
      if (!userStore.isLogin) {
        userStore.toggleShowLogin(true);
        return;
      }
      await musicSquareCollect({
        records_id: val.square_id,
        status: val.is_collect ? 0 : 1
      });
      if (queryParams.category_id === 0) {
        resetPage();
      } else {
        val.is_collect = val.is_collect ? 0 : 1;
      }
    };
    const downloadMusic = async (url, name) => {
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
      const _component_Waterfall = Waterfall;
      const _component_el_image = ElImage;
      const _component_Icon = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ElAvatar = ElAvatar;
      const _component_el_tooltip = ElTooltip;
      const _component_el_icon = ElIcon;
      const _component_ElButton = ElButton;
      const _component_MusicPlayer = __nuxt_component_3;
      const _directive_infinite_scroll = ElInfiniteScroll;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 min-h-0 mx-[16px] relative" }, _attrs))} data-v-6410fed0>`);
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
                      }, "category-item bg-white"])}" data-v-6410fed0${_scopeId2}>${ssrInterpolate(item.name)}</div>`);
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
      _push(`<div class="flex-1 min-h-[70vh] overflow-hidden mx-auto" style="${ssrRenderStyle({ "padding-bottom": "100px" })}" data-v-6410fed0><div${ssrRenderAttrs(mergeProps({
        class: "model-lists mb-[10px] mx-[0px]",
        "infinite-scroll-distance": "50",
        "infinite-scroll-delay": 200,
        "infinite-scroll-disabled": !unref(pageInfo).more
      }, ssrGetDirectiveProps(_ctx, _directive_infinite_scroll, getLists)))} data-v-6410fed0>`);
      if (unref(pageInfo).lists.length) {
        _push(ssrRenderComponent(_component_Waterfall, {
          ref_key: "waterFull",
          ref: waterFull,
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
            var _a, _b;
            if (_push2) {
              _push2(`<div class="flex bg-body p-[20px] rounded-[12px] hover:bg-[#EEF2FF]"${ssrRenderAttr("id", `music-item-${item.id}`)} data-v-6410fed0${_scopeId}><div class="w-[100px] h-[100px] flex items-center justify-center flex-none relative" data-v-6410fed0${_scopeId}>`);
              if (item.image_url) {
                _push2(ssrRenderComponent(_component_el_image, {
                  src: item.image_url,
                  class: "w-full h-full rounded-[12px]"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<div class="text-tx-secondary" data-v-6410fed0${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "local-icon-music1",
                  size: 45
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              }
              if (unref(currentId) == item.records_id && unref(playing)) {
                _push2(`<div class="absolute inset-0 flex items-center justify-center text-white" data-v-6410fed0${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "local-icon-pause1",
                  size: 20
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(currentId) == item.records_id && !unref(playing)) {
                _push2(`<div class="absolute inset-0 flex items-center justify-center text-white" data-v-6410fed0${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "local-icon-play",
                  size: 20
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex-1 ml-[20px]" data-v-6410fed0${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                class: ["text-[16px] font-bold", {
                  "!text-primary": unref(currentId) === item.records_id
                }],
                to: {
                  path: "/music/player",
                  query: {
                    id: item.square_id
                  }
                }
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (item.tags) {
                _push2(`<div class="mt-[12px] text-tx-secondary" data-v-6410fed0${_scopeId}>${ssrInterpolate(item.tags)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex justify-between mt-[12px]" data-v-6410fed0${_scopeId}>`);
              if (item.user_info) {
                _push2(`<div class="flex items-center" data-v-6410fed0${_scopeId}>`);
                _push2(ssrRenderComponent(_component_ElAvatar, {
                  size: 28,
                  src: (_a = item == null ? void 0 : item.user_info) == null ? void 0 : _a.image
                }, null, _parent2, _scopeId));
                _push2(`<p class="text-[#BBBBBB] ml-[6px] w-[100px] truncate" data-v-6410fed0${_scopeId}>${ssrInterpolate(item.user_info.name)}</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex items-center mt-[4px] text-tx-secondary" data-v-6410fed0${_scopeId}>${ssrInterpolate(item.duration)}</div><div class="flex items-center" data-v-6410fed0${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_tooltip, {
                effect: "dark",
                content: "\u6536\u85CF / \u53D6\u6D88\u6536\u85CF",
                placement: "bottom"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="image-praise relative dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content" data-v-6410fed0${_scopeId2}><div class="${ssrRenderClass([
                      item.is_collect ? "praise-entry" : "praise-leave",
                      "praise-animate"
                    ])}" data-v-6410fed0${_scopeId2}></div></div>`);
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_tooltip, {
                effect: "dark",
                content: "\u4E0B\u8F7D\u97F3\u4E50",
                placement: "bottom"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div data-v-6410fed0${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                      name: "el-icon-Download",
                      size: "24",
                      color: "#556477"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        onClick: withModifiers(($event) => downloadMusic(
                          item.audio_url,
                          item.title
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
              }, _parent2, _scopeId));
              _push2(`</div></div></div></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "flex bg-body p-[20px] rounded-[12px] hover:bg-[#EEF2FF]",
                  id: `music-item-${item.id}`,
                  onClick: ($event) => selectMusic(item)
                }, [
                  createVNode("div", { class: "w-[100px] h-[100px] flex items-center justify-center flex-none relative" }, [
                    item.image_url ? (openBlock(), createBlock(_component_el_image, {
                      key: 0,
                      src: item.image_url,
                      class: "w-full h-full rounded-[12px]"
                    }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-tx-secondary"
                    }, [
                      createVNode(_component_Icon, {
                        name: "local-icon-music1",
                        size: 45
                      })
                    ])),
                    unref(currentId) == item.records_id && unref(playing) ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "absolute inset-0 flex items-center justify-center text-white"
                    }, [
                      createVNode(_component_Icon, {
                        name: "local-icon-pause1",
                        size: 20
                      })
                    ])) : createCommentVNode("", true),
                    unref(currentId) == item.records_id && !unref(playing) ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: "absolute inset-0 flex items-center justify-center text-white"
                    }, [
                      createVNode(_component_Icon, {
                        name: "local-icon-play",
                        size: 20
                      })
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "flex-1 ml-[20px]" }, [
                    createVNode(_component_NuxtLink, {
                      class: ["text-[16px] font-bold", {
                        "!text-primary": unref(currentId) === item.records_id
                      }],
                      to: {
                        path: "/music/player",
                        query: {
                          id: item.square_id
                        }
                      }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["class", "to"]),
                    item.tags ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-[12px] text-tx-secondary"
                    }, toDisplayString(item.tags), 1)) : createCommentVNode("", true),
                    createVNode("div", { class: "flex justify-between mt-[12px]" }, [
                      item.user_info ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center"
                      }, [
                        createVNode(_component_ElAvatar, {
                          size: 28,
                          src: (_b = item == null ? void 0 : item.user_info) == null ? void 0 : _b.image
                        }, null, 8, ["src"]),
                        createVNode("p", { class: "text-[#BBBBBB] ml-[6px] w-[100px] truncate" }, toDisplayString(item.user_info.name), 1)
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "flex items-center mt-[4px] text-tx-secondary" }, toDisplayString(item.duration), 1),
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_component_el_tooltip, {
                          effect: "dark",
                          content: "\u6536\u85CF / \u53D6\u6D88\u6536\u85CF",
                          placement: "bottom"
                        }, {
                          default: withCtx(() => [
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
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_el_tooltip, {
                          effect: "dark",
                          content: "\u4E0B\u8F7D\u97F3\u4E50",
                          placement: "bottom"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              onClick: withModifiers(($event) => downloadMusic(
                                item.audio_url,
                                item.title
                              ), ["stop"])
                            }, [
                              createVNode(_component_Icon, {
                                class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                                name: "el-icon-Download",
                                size: "24",
                                color: "#556477"
                              })
                            ], 8, ["onClick"])
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ])
                  ])
                ], 8, ["id", "onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(pageInfo).loading) {
        _push(`<div class="flex justify-center items-center mt-[50px]" data-v-6410fed0>`);
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
        _push(`<span class="mt-[4px] ml-[10px] text-[#999999]" data-v-6410fed0>\u52A0\u8F7D\u4E2D...</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col justify-center items-center w-full h-[60vh]" style="${ssrRenderStyle(!unref(pageInfo).lists.length && !unref(pageInfo).loading ? null : { display: "none" })}" data-v-6410fed0>`);
      _push(ssrRenderComponent(_component_el_image, {
        class: "w-[200px] h-[200px]",
        src: unref(emptyImg)
      }, null, _parent));
      _push(`<div class="text-tx-regular mb-4" data-v-6410fed0>\u5F53\u524D\u9009\u62E9\u6682\u65E0\u97F3\u4E50\uFF5E</div>`);
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
      _push(`</div></div></div><div class="fixed pb-[32px] bottom-0 left-[112px] right-[34px] bg-page" data-v-6410fed0>`);
      _push(ssrRenderComponent(_component_MusicPlayer, {
        ref: "musicPlayerRef",
        class: "bg-body rounded-[12px]",
        onTitle: handleToPlayer
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/robot_square/_components/music.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Music = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6410fed0"]]);

export { Music as default };
//# sourceMappingURL=music-Cg_-zxEJ.mjs.map
