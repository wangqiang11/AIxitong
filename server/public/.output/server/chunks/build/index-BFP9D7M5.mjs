import { h as buildProps, j as definePropType, i as useNamespace, w as withInstall, _ as _export_sfc$1, a5 as useAppStore, aI as getDecorate, aH as search_default, ah as __nuxt_component_0, E as ElInput, d as ElButton } from './server.mjs';
import { W as Waterfall } from './index-CbOzFVxN.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-l5zPv3vf.mjs';
import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createTextVNode, toDisplayString, createCommentVNode, createElementVNode, normalizeStyle, useSSRContext, ref, reactive, withAsyncContext, computed, shallowRef, withCtx, isRef, createBlock, Fragment, renderList, mergeProps, createVNode, withModifiers, withDirectives, vShow } from 'vue';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { E as ElInfiniteScroll } from './index-DNeGbNHc.mjs';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrGetDirectiveProps, ssrRenderAttr } from 'vue/server-renderer';
import { watchDebounced } from '@vueuse/core';
import { g as getCategoryList, c as collection, a as getCreantionList } from './create-DFvp87Fg.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { e as emptyImg } from './empty_con-BDdV71_z.mjs';
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
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './position-DVxxNIGX.mjs';

const cardProps = buildProps({
  header: {
    type: String,
    default: ""
  },
  footer: {
    type: String,
    default: ""
  },
  bodyStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  bodyClass: String,
  shadow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "always"
  }
});
const __default__ = defineComponent({
  name: "ElCard"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: cardProps,
  setup(__props) {
    const ns = useNamespace("card");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b(), unref(ns).is(`${_ctx.shadow}-shadow`)])
      }, [
        _ctx.$slots.header || _ctx.header ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).e("header"))
        }, [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createTextVNode(toDisplayString(_ctx.header), 1)
          ])
        ], 2)) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: normalizeClass([unref(ns).e("body"), _ctx.bodyClass]),
          style: normalizeStyle(_ctx.bodyStyle)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 6),
        _ctx.$slots.footer || _ctx.footer ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(ns).e("footer"))
        }, [
          renderSlot(_ctx.$slots, "footer", {}, () => [
            createTextVNode(toDisplayString(_ctx.footer), 1)
          ])
        ], 2)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Card = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__file", "card.vue"]]);
const ElCard = withInstall(Card);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const appStore = useAppStore();
    const currentIndex = ref(0);
    const searchKeyword = ref("");
    const currentCategoryId = ref(0);
    const pageInfo = reactive({
      pageNo: 1,
      count: 0,
      loading: true,
      pageSize: 10,
      lists: []
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
    const getCategory = async () => {
      const data = await getCategoryList();
      selectCategory(0);
      return data;
    };
    const { data: categoryList, refresh } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(getCategory, {
      default() {
        return [];
      },
      lazy: true
    }, "$gS1lmh76Gl")), __temp = await __temp, __restore(), __temp);
    const { data: pages } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => getDecorate({ id: 5 }), {
      transform: (value) => {
        return JSON.parse(value.data);
      },
      default() {
        return [];
      },
      lazy: true
    }, "$Dd0tiMcnfk")), __temp = await __temp, __restore(), __temp);
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
    const swiperInstance = shallowRef();
    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
      console.log(swiper);
    };
    const selectCategory = (index2) => {
      var _a;
      currentIndex.value = index2;
      currentCategoryId.value = (_a = categoryList.value[index2]) == null ? void 0 : _a.id;
      reload();
    };
    const getLists = async () => {
      pageInfo.loading = true;
      try {
        const data = await getCreantionList({
          category_id: currentCategoryId.value,
          keyword: searchKeyword.value,
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
    const reload = async () => {
      pageInfo.loading = true;
      pageInfo.pageSize = 15;
      pageInfo.pageNo = 1;
      await getLists();
    };
    const toCollection = async (id) => {
      await collection({ id });
      resetPage();
    };
    watchDebounced(
      searchKeyword,
      (value) => {
        reload();
      },
      {
        debounce: 500
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_el_input = ElInput;
      const _component_Waterfall = Waterfall;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_el_card = ElCard;
      const _component_Icon = _sfc_main$2;
      const _component_el_image = ElImage;
      const _component_ElButton = ElButton;
      const _directive_infinite_scroll = ElInfiniteScroll;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-031e5857>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            _push2(`<div class="h-full flex flex-col create 4xl:w-[2000px] mx-auto" data-v-031e5857${_scopeId}><header class="creation-header flex flex-col justify-center items-center px-[16px] m-[16px] rounded-[12px] overflow-hidden" style="${ssrRenderStyle({
              "background-image": `url(${unref(appStore).getImageUrl(
                (_b = (_a = unref(pages)[0]) == null ? void 0 : _a.prop) == null ? void 0 : _b.banner_bg
              )})`
            })}" data-v-031e5857${_scopeId}><div class="${ssrRenderClass([unref(getTitleColor)((_d = (_c = unref(pages)[0]) == null ? void 0 : _c.prop) == null ? void 0 : _d.title_color), "font-medium 2xl:text-[50px] xl:text-[40px] lg:text-[36px] text-[36px]"])}" data-v-031e5857${_scopeId}>${ssrInterpolate((_f = (_e = unref(pages)[0]) == null ? void 0 : _e.prop) == null ? void 0 : _f.title)}</div><div class="2xl:max-w-[880px] xl:max-w-[780px] lg:max-w-[680px] max-w-[680px] search w-full mt-4" data-v-031e5857${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_input, {
              size: "large",
              class: "2xl:h-[54px] xl:h-[48px] lg:h-[44px] rounded-[7px]",
              style: { "--el-border-color": "transparent" },
              modelValue: unref(searchKeyword),
              "onUpdate:modelValue": ($event) => isRef(searchKeyword) ? searchKeyword.value = $event : null,
              "prefix-icon": unref(search_default),
              placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
            }, null, _parent2, _scopeId));
            _push2(`</div></header><div class="flex-1 min-h-0 mx-[16px]" data-v-031e5857${_scopeId}><div class="h-full flex flex-col" data-v-031e5857${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Swiper), {
              slidesPerView: "auto",
              spaceBetween: 16,
              class: "category-lists w-full",
              onSwiper,
              style: { "padding": "10px 0", "margin-left": "0" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(categoryList), (item, index2) => {
                    _push3(ssrRenderComponent(unref(SwiperSlide), {
                      key: item.id,
                      style: { "width": "auto", "margin-right": "12px" }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (Object.keys(item).includes("name")) {
                            _push4(`<div class="${ssrRenderClass([{
                              "is-active": unref(currentIndex) === index2
                            }, "category-item bg-white"])}" data-v-031e5857${_scopeId3}>${ssrInterpolate(item.name)}</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            Object.keys(item).includes("name") ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ["category-item bg-white", {
                                "is-active": unref(currentIndex) === index2
                              }],
                              onClick: ($event) => selectCategory(index2)
                            }, toDisplayString(item.name), 11, ["onClick"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(categoryList), (item, index2) => {
                      return openBlock(), createBlock(unref(SwiperSlide), {
                        key: item.id,
                        style: { "width": "auto", "margin-right": "12px" }
                      }, {
                        default: withCtx(() => [
                          Object.keys(item).includes("name") ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: ["category-item bg-white", {
                              "is-active": unref(currentIndex) === index2
                            }],
                            onClick: ($event) => selectCategory(index2)
                          }, toDisplayString(item.name), 11, ["onClick"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex-1 min-h-0" data-v-031e5857${_scopeId}>`);
            if (unref(pageInfo).lists.length) {
              _push2(`<div${ssrRenderAttrs(mergeProps({
                "infinite-scroll-distance": "50",
                "infinite-scroll-immediate": "false"
              }, ssrGetDirectiveProps(_ctx, _directive_infinite_scroll, load)))} data-v-031e5857${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Waterfall, {
                ref: "waterFull",
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
                item: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: {
                        path: "/creation/produce",
                        query: {
                          cateId: unref(currentCategoryId),
                          modelId: item.id
                        }
                      },
                      class: "h-full"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_el_card, {
                            class: "!border-none h-full rounded-[12px] relative cardItem shadow-light",
                            shadow: "never",
                            style: { "border-radius": "12px" },
                            "body-style": "padding: 20px;height: 100%"
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex flex-col min-h-0 h-full" data-v-031e5857${_scopeId4}><div class="flex items-center" data-v-031e5857${_scopeId4}><img class="w-[34px] h-[34px] mr-[10px]"${ssrRenderAttr("src", item.image)} alt="" data-v-031e5857${_scopeId4}><div class="text-lg font-medium line-clamp-1" data-v-031e5857${_scopeId4}>${ssrInterpolate(item.name)}</div></div><div class="h-[36px]" data-v-031e5857${_scopeId4}>`);
                                if (item.tips) {
                                  _push5(`<div class="text-xs text-tx-secondary mt-[10px] line-clamp-2 flex-1" data-v-031e5857${_scopeId4}>${ssrInterpolate(item.tips)}</div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</div><div class="flex items-center mt-[16px]" data-v-031e5857${_scopeId4}><div class="text-tx-secondary mr-[30px] flex items-center text-sm" data-v-031e5857${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_Icon, { name: "local-icon-yonghu" }, null, _parent5, _scopeId4));
                                _push5(`<div class="ml-1" data-v-031e5857${_scopeId4}>${ssrInterpolate(item.use_num)}\u4EBA\u4F7F\u7528\u8FC7 </div></div><div class="flex collection absolute top-[10px] right-[10px]" data-v-031e5857${_scopeId4}>`);
                                if (!item.is_collect) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    size: 20,
                                    name: "el-icon-Star",
                                    color: "#999"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (!!item.is_collect) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    style: { "transform": "scale(\n                                                                        1.2\n                                                                    )" },
                                    size: 20,
                                    name: "el-icon-StarFilled",
                                    color: "#FFB529"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</div></div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex flex-col min-h-0 h-full" }, [
                                    createVNode("div", { class: "flex items-center" }, [
                                      createVNode("img", {
                                        class: "w-[34px] h-[34px] mr-[10px]",
                                        src: item.image,
                                        alt: ""
                                      }, null, 8, ["src"]),
                                      createVNode("div", { class: "text-lg font-medium line-clamp-1" }, toDisplayString(item.name), 1)
                                    ]),
                                    createVNode("div", { class: "h-[36px]" }, [
                                      item.tips ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "text-xs text-tx-secondary mt-[10px] line-clamp-2 flex-1"
                                      }, toDisplayString(item.tips), 1)) : createCommentVNode("", true)
                                    ]),
                                    createVNode("div", { class: "flex items-center mt-[16px]" }, [
                                      createVNode("div", { class: "text-tx-secondary mr-[30px] flex items-center text-sm" }, [
                                        createVNode(_component_Icon, { name: "local-icon-yonghu" }),
                                        createVNode("div", { class: "ml-1" }, toDisplayString(item.use_num) + "\u4EBA\u4F7F\u7528\u8FC7 ", 1)
                                      ]),
                                      createVNode("div", {
                                        class: "flex collection absolute top-[10px] right-[10px]",
                                        onClick: withModifiers(($event) => toCollection(
                                          item.id
                                        ), ["prevent"])
                                      }, [
                                        !item.is_collect ? (openBlock(), createBlock(_component_Icon, {
                                          key: 0,
                                          size: 20,
                                          name: "el-icon-Star",
                                          color: "#999"
                                        })) : createCommentVNode("", true),
                                        !!item.is_collect ? (openBlock(), createBlock(_component_Icon, {
                                          key: 1,
                                          style: { "transform": "scale(\n                                                                        1.2\n                                                                    )" },
                                          size: 20,
                                          name: "el-icon-StarFilled",
                                          color: "#FFB529"
                                        })) : createCommentVNode("", true)
                                      ], 8, ["onClick"])
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_el_card, {
                              class: "!border-none h-full rounded-[12px] relative cardItem shadow-light",
                              shadow: "never",
                              style: { "border-radius": "12px" },
                              "body-style": "padding: 20px;height: 100%"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-col min-h-0 h-full" }, [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("img", {
                                      class: "w-[34px] h-[34px] mr-[10px]",
                                      src: item.image,
                                      alt: ""
                                    }, null, 8, ["src"]),
                                    createVNode("div", { class: "text-lg font-medium line-clamp-1" }, toDisplayString(item.name), 1)
                                  ]),
                                  createVNode("div", { class: "h-[36px]" }, [
                                    item.tips ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "text-xs text-tx-secondary mt-[10px] line-clamp-2 flex-1"
                                    }, toDisplayString(item.tips), 1)) : createCommentVNode("", true)
                                  ]),
                                  createVNode("div", { class: "flex items-center mt-[16px]" }, [
                                    createVNode("div", { class: "text-tx-secondary mr-[30px] flex items-center text-sm" }, [
                                      createVNode(_component_Icon, { name: "local-icon-yonghu" }),
                                      createVNode("div", { class: "ml-1" }, toDisplayString(item.use_num) + "\u4EBA\u4F7F\u7528\u8FC7 ", 1)
                                    ]),
                                    createVNode("div", {
                                      class: "flex collection absolute top-[10px] right-[10px]",
                                      onClick: withModifiers(($event) => toCollection(
                                        item.id
                                      ), ["prevent"])
                                    }, [
                                      !item.is_collect ? (openBlock(), createBlock(_component_Icon, {
                                        key: 0,
                                        size: 20,
                                        name: "el-icon-Star",
                                        color: "#999"
                                      })) : createCommentVNode("", true),
                                      !!item.is_collect ? (openBlock(), createBlock(_component_Icon, {
                                        key: 1,
                                        style: { "transform": "scale(\n                                                                        1.2\n                                                                    )" },
                                        size: 20,
                                        name: "el-icon-StarFilled",
                                        color: "#FFB529"
                                      })) : createCommentVNode("", true)
                                    ], 8, ["onClick"])
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, {
                        to: {
                          path: "/creation/produce",
                          query: {
                            cateId: unref(currentCategoryId),
                            modelId: item.id
                          }
                        },
                        class: "h-full"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_card, {
                            class: "!border-none h-full rounded-[12px] relative cardItem shadow-light",
                            shadow: "never",
                            style: { "border-radius": "12px" },
                            "body-style": "padding: 20px;height: 100%"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col min-h-0 h-full" }, [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode("img", {
                                    class: "w-[34px] h-[34px] mr-[10px]",
                                    src: item.image,
                                    alt: ""
                                  }, null, 8, ["src"]),
                                  createVNode("div", { class: "text-lg font-medium line-clamp-1" }, toDisplayString(item.name), 1)
                                ]),
                                createVNode("div", { class: "h-[36px]" }, [
                                  item.tips ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "text-xs text-tx-secondary mt-[10px] line-clamp-2 flex-1"
                                  }, toDisplayString(item.tips), 1)) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "flex items-center mt-[16px]" }, [
                                  createVNode("div", { class: "text-tx-secondary mr-[30px] flex items-center text-sm" }, [
                                    createVNode(_component_Icon, { name: "local-icon-yonghu" }),
                                    createVNode("div", { class: "ml-1" }, toDisplayString(item.use_num) + "\u4EBA\u4F7F\u7528\u8FC7 ", 1)
                                  ]),
                                  createVNode("div", {
                                    class: "flex collection absolute top-[10px] right-[10px]",
                                    onClick: withModifiers(($event) => toCollection(
                                      item.id
                                    ), ["prevent"])
                                  }, [
                                    !item.is_collect ? (openBlock(), createBlock(_component_Icon, {
                                      key: 0,
                                      size: 20,
                                      name: "el-icon-Star",
                                      color: "#999"
                                    })) : createCommentVNode("", true),
                                    !!item.is_collect ? (openBlock(), createBlock(_component_Icon, {
                                      key: 1,
                                      style: { "transform": "scale(\n                                                                        1.2\n                                                                    )" },
                                      size: 20,
                                      name: "el-icon-StarFilled",
                                      color: "#FFB529"
                                    })) : createCommentVNode("", true)
                                  ], 8, ["onClick"])
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex flex-col justify-center items-center w-full h-[60vh]" style="${ssrRenderStyle(!unref(pageInfo).lists.length && !unref(pageInfo).loading ? null : { display: "none" })}" data-v-031e5857${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_image, {
              class: "w-[200px] h-[200px]",
              src: unref(emptyImg)
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-tx-regular mb-4" data-v-031e5857${_scopeId}> \u5F53\u524D\u9009\u62E9\u6682\u65E0\u521B\u4F5C\uFF5E </div>`);
            _push2(ssrRenderComponent(_component_ElButton, {
              type: "primary",
              onClick: resetPage
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u70B9\u51FB\u5237\u65B0 `);
                } else {
                  return [
                    createTextVNode(" \u70B9\u51FB\u5237\u65B0 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "h-full flex flex-col create 4xl:w-[2000px] mx-auto" }, [
                createVNode("header", {
                  class: "creation-header flex flex-col justify-center items-center px-[16px] m-[16px] rounded-[12px] overflow-hidden",
                  style: {
                    "background-image": `url(${unref(appStore).getImageUrl(
                      (_h = (_g = unref(pages)[0]) == null ? void 0 : _g.prop) == null ? void 0 : _h.banner_bg
                    )})`
                  }
                }, [
                  createVNode("div", {
                    class: ["font-medium 2xl:text-[50px] xl:text-[40px] lg:text-[36px] text-[36px]", unref(getTitleColor)((_j = (_i = unref(pages)[0]) == null ? void 0 : _i.prop) == null ? void 0 : _j.title_color)]
                  }, toDisplayString((_l = (_k = unref(pages)[0]) == null ? void 0 : _k.prop) == null ? void 0 : _l.title), 3),
                  createVNode("div", { class: "2xl:max-w-[880px] xl:max-w-[780px] lg:max-w-[680px] max-w-[680px] search w-full mt-4" }, [
                    createVNode(_component_el_input, {
                      size: "large",
                      class: "2xl:h-[54px] xl:h-[48px] lg:h-[44px] rounded-[7px]",
                      style: { "--el-border-color": "transparent" },
                      modelValue: unref(searchKeyword),
                      "onUpdate:modelValue": ($event) => isRef(searchKeyword) ? searchKeyword.value = $event : null,
                      "prefix-icon": unref(search_default),
                      placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                  ])
                ], 4),
                createVNode("div", { class: "flex-1 min-h-0 mx-[16px]" }, [
                  createVNode("div", { class: "h-full flex flex-col" }, [
                    createVNode(unref(Swiper), {
                      slidesPerView: "auto",
                      spaceBetween: 16,
                      class: "category-lists w-full",
                      onSwiper,
                      style: { "padding": "10px 0", "margin-left": "0" }
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(categoryList), (item, index2) => {
                          return openBlock(), createBlock(unref(SwiperSlide), {
                            key: item.id,
                            style: { "width": "auto", "margin-right": "12px" }
                          }, {
                            default: withCtx(() => [
                              Object.keys(item).includes("name") ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: ["category-item bg-white", {
                                  "is-active": unref(currentIndex) === index2
                                }],
                                onClick: ($event) => selectCategory(index2)
                              }, toDisplayString(item.name), 11, ["onClick"])) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex-1 min-h-0" }, [
                      unref(pageInfo).lists.length ? withDirectives((openBlock(), createBlock("div", {
                        key: 0,
                        "infinite-scroll-distance": "50",
                        "infinite-scroll-immediate": "false"
                      }, [
                        createVNode(_component_Waterfall, {
                          ref: "waterFull",
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
                          item: withCtx(({ item }) => [
                            createVNode(_component_NuxtLink, {
                              to: {
                                path: "/creation/produce",
                                query: {
                                  cateId: unref(currentCategoryId),
                                  modelId: item.id
                                }
                              },
                              class: "h-full"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_card, {
                                  class: "!border-none h-full rounded-[12px] relative cardItem shadow-light",
                                  shadow: "never",
                                  style: { "border-radius": "12px" },
                                  "body-style": "padding: 20px;height: 100%"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex flex-col min-h-0 h-full" }, [
                                      createVNode("div", { class: "flex items-center" }, [
                                        createVNode("img", {
                                          class: "w-[34px] h-[34px] mr-[10px]",
                                          src: item.image,
                                          alt: ""
                                        }, null, 8, ["src"]),
                                        createVNode("div", { class: "text-lg font-medium line-clamp-1" }, toDisplayString(item.name), 1)
                                      ]),
                                      createVNode("div", { class: "h-[36px]" }, [
                                        item.tips ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "text-xs text-tx-secondary mt-[10px] line-clamp-2 flex-1"
                                        }, toDisplayString(item.tips), 1)) : createCommentVNode("", true)
                                      ]),
                                      createVNode("div", { class: "flex items-center mt-[16px]" }, [
                                        createVNode("div", { class: "text-tx-secondary mr-[30px] flex items-center text-sm" }, [
                                          createVNode(_component_Icon, { name: "local-icon-yonghu" }),
                                          createVNode("div", { class: "ml-1" }, toDisplayString(item.use_num) + "\u4EBA\u4F7F\u7528\u8FC7 ", 1)
                                        ]),
                                        createVNode("div", {
                                          class: "flex collection absolute top-[10px] right-[10px]",
                                          onClick: withModifiers(($event) => toCollection(
                                            item.id
                                          ), ["prevent"])
                                        }, [
                                          !item.is_collect ? (openBlock(), createBlock(_component_Icon, {
                                            key: 0,
                                            size: 20,
                                            name: "el-icon-Star",
                                            color: "#999"
                                          })) : createCommentVNode("", true),
                                          !!item.is_collect ? (openBlock(), createBlock(_component_Icon, {
                                            key: 1,
                                            style: { "transform": "scale(\n                                                                        1.2\n                                                                    )" },
                                            size: 20,
                                            name: "el-icon-StarFilled",
                                            color: "#FFB529"
                                          })) : createCommentVNode("", true)
                                        ], 8, ["onClick"])
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ]),
                          _: 1
                        }, 8, ["list"])
                      ])), [
                        [_directive_infinite_scroll, load]
                      ]) : createCommentVNode("", true),
                      withDirectives(createVNode("div", { class: "flex flex-col justify-center items-center w-full h-[60vh]" }, [
                        createVNode(_component_el_image, {
                          class: "w-[200px] h-[200px]",
                          src: unref(emptyImg)
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "text-tx-regular mb-4" }, " \u5F53\u524D\u9009\u62E9\u6682\u65E0\u521B\u4F5C\uFF5E "),
                        createVNode(_component_ElButton, {
                          type: "primary",
                          onClick: resetPage
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u70B9\u51FB\u5237\u65B0 ")
                          ]),
                          _: 1
                        })
                      ], 512), [
                        [
                          vShow,
                          !unref(pageInfo).lists.length && !unref(pageInfo).loading
                        ]
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/creation/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-031e5857"]]);

export { index as default };
//# sourceMappingURL=index-BFP9D7M5.mjs.map
