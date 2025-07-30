import { E as ElEmpty } from './el-empty-xbPr04pX.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { a5 as useAppStore, z as useUserStore, b1 as loading_default, g as ElIcon } from './server.mjs';
import { E as ElInfiniteScroll } from './index-DNeGbNHc.mjs';
import { useSSRContext, defineComponent, shallowRef, reactive, ref, mergeProps, unref, withCtx, createVNode, withDirectives, openBlock, createBlock, Fragment, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrGetDirectiveProps } from 'vue/server-renderer';
import { W as Waterfall } from './index-CbOzFVxN.mjs';
import { e as deleteHandle, o as drawingRecord } from './useDrawEffect-B2jxDCVi.mjs';
import { I as ImageCover } from './index-CFqym9DX.mjs';
import _sfc_main$1 from './image-preview-DnIAxevr.mjs';
import { D as DrawingEmpty } from './empty-image-DpkSTY4G.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './position-DVxxNIGX.mjs';
import './usePaging-DU8sXki3.mjs';
import './usePolling-DOP50YcO.mjs';
import './DrawEnum-CqAPEJOR.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-C2yEelJa.mjs';
import './useCopy-CfS-iChu.mjs';
import './download-N0luyf1S.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "draw",
  __ssrInlineRender: true,
  setup(__props) {
    useAppStore();
    useUserStore();
    shallowRef();
    const waterFull = shallowRef(null);
    const queryParams = reactive({
      status: 3,
      page_no: 0,
      page_size: 20,
      model: "sd"
    });
    const pager = reactive({
      more: true,
      loading: false,
      lists: []
    });
    const cateLists = ref([
      { name: "SD\u7ED8\u753B", type: "sd" },
      { name: "DALLE\u7ED8\u753B", type: "dalle3" },
      { name: "MJ\u7ED8\u753B", type: "mj" },
      { name: "\u8C46\u5305\u7ED8\u753B", type: "doubao" }
    ]);
    ref([]);
    const previewState = reactive({
      show: false,
      data: {}
    });
    const showPreview = (item) => {
      previewState.show = true;
      previewState.data = item;
    };
    const breakpoints = {
      4e3: { rowPerView: 8 },
      2e3: { rowPerView: 6 },
      1800: { rowPerView: 6 },
      1600: { rowPerView: 5 },
      1440: { rowPerView: 5 },
      1360: { rowPerView: 5 },
      1280: { rowPerView: 4 },
      1024: { rowPerView: 4 }
    };
    const loadImageSuccess = () => {
      var _a;
      (_a = waterFull == null ? void 0 : waterFull.value) == null ? void 0 : _a.renderer();
    };
    const resetParams = () => {
      pager.more = true;
      queryParams.page_no = 0;
    };
    const handleDelete = async (id) => {
      await deleteHandle(id);
      resetParams();
    };
    const getDrawData = async () => {
      if (pager.loading) return;
      if (pager.more) {
        queryParams.page_no += 1;
      } else {
        return;
      }
      pager.loading = true;
      try {
        const data = await drawingRecord(queryParams);
        const { lists, page_no, page_size, count } = data;
        if (page_no * page_size > count) {
          pager.more = false;
        }
        if (page_no == 1) {
          pager.lists = lists;
        } else {
          pager.lists = [...pager.lists, ...lists];
        }
        setTimeout(() => pager.loading = false, 500);
      } catch (error) {
        pager.loading = false;
        console.log("\u83B7\u53D6\u7ED8\u753B\u5E7F\u573A\u5217\u8868\u9519\u8BEF=>", error);
      }
    };
    getDrawData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_empty = ElEmpty;
      const _component_ElScrollbar = ElScrollbar;
      const _component_Icon = _sfc_main$2;
      const _component_el_icon = ElIcon;
      const _directive_infinite_scroll = ElInfiniteScroll;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "square h-full flex flex-col" }, _attrs))} data-v-a48eb256><div class="nav flex px-4 pt-4" data-v-a48eb256><div class="category-list flex-1" data-v-a48eb256><!--[-->`);
      ssrRenderList(unref(cateLists), (item) => {
        _push(`<div class="${ssrRenderClass([{
          "category-item--active": item.type === unref(queryParams).model
        }, "category-item"])}" data-v-a48eb256>${ssrInterpolate(item.name)}</div>`);
      });
      _push(`<!--]--></div></div><div class="flex-1 min-w-0" data-v-a48eb256>`);
      if (!unref(pager).lists.length && !unref(pager).loading) {
        _push(`<div class="h-full flex flex-col justify-center" data-v-a48eb256>`);
        _push(ssrRenderComponent(_component_el_empty, {
          "image-size": 150,
          image: unref(DrawingEmpty),
          description: "\u6682\u65F6\u6CA1\u6709\u7ED8\u753B\u54E6\uFF0C\u5FEB\u53BB\u751F\u6210\u8BD5\u8BD5\u5427"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_component_ElScrollbar, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="main" data-v-a48eb256${_scopeId}><div${ssrRenderAttrs(mergeProps({
                "infinite-scroll-delay": 200,
                "infinite-scroll-distance": 400,
                "infinite-scroll-disabled": !unref(pager).more
              }, ssrGetDirectiveProps(_ctx, _directive_infinite_scroll, getDrawData)))} data-v-a48eb256${_scopeId}>`);
              if (unref(pager).lists.length) {
                _push2(`<!--[-->`);
                _push2(ssrRenderComponent(Waterfall, {
                  ref_key: "waterFull",
                  ref: waterFull,
                  delay: 100,
                  list: unref(pager).lists,
                  width: 326,
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
                      _push3(`<div class="image-payload h-full w-full relative text-sm" data-v-a48eb256${_scopeId2}><div class="image-bg" data-v-a48eb256${_scopeId2}>`);
                      _push3(ssrRenderComponent(ImageCover, {
                        thumbnail: item.thumbnail,
                        image: (item == null ? void 0 : item.image) || (item == null ? void 0 : item.image_url),
                        onRefresh: loadImageSuccess,
                        onOnClick: ($event) => showPreview(item)
                      }, null, _parent3, _scopeId2));
                      _push3(`</div><div class="image-del" data-v-a48eb256${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        class: "cursor-pointer rounded-md p-1 box-content",
                        name: "el-icon-Delete",
                        size: "18",
                        color: "#fff"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "image-payload h-full w-full relative text-sm" }, [
                          createVNode("div", { class: "image-bg" }, [
                            createVNode(ImageCover, {
                              thumbnail: item.thumbnail,
                              image: (item == null ? void 0 : item.image) || (item == null ? void 0 : item.image_url),
                              onRefresh: loadImageSuccess,
                              onOnClick: ($event) => showPreview(item)
                            }, null, 8, ["thumbnail", "image", "onOnClick"])
                          ]),
                          createVNode("div", {
                            class: "image-del",
                            onClick: ($event) => handleDelete(item.id)
                          }, [
                            createVNode(_component_Icon, {
                              class: "cursor-pointer rounded-md p-1 box-content",
                              name: "el-icon-Delete",
                              size: "18",
                              color: "#fff"
                            })
                          ], 8, ["onClick"])
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                if (unref(pager).loading) {
                  _push2(`<div class="flex justify-center items-center mt-[50px]" data-v-a48eb256${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_el_icon, {
                    size: "25",
                    class: "is-loading"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(unref(loading_default), null, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(unref(loading_default))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`<span class="mt-[4px] ml-[10px] text-tx-secondary" data-v-a48eb256${_scopeId}>\u52A0\u8F7D\u4E2D...</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "main" }, [
                  withDirectives((openBlock(), createBlock("div", {
                    "infinite-scroll-delay": 200,
                    "infinite-scroll-distance": 400,
                    "infinite-scroll-disabled": !unref(pager).more
                  }, [
                    unref(pager).lists.length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(Waterfall, {
                        ref_key: "waterFull",
                        ref: waterFull,
                        delay: 100,
                        list: unref(pager).lists,
                        width: 326,
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
                          createVNode("div", { class: "image-payload h-full w-full relative text-sm" }, [
                            createVNode("div", { class: "image-bg" }, [
                              createVNode(ImageCover, {
                                thumbnail: item.thumbnail,
                                image: (item == null ? void 0 : item.image) || (item == null ? void 0 : item.image_url),
                                onRefresh: loadImageSuccess,
                                onOnClick: ($event) => showPreview(item)
                              }, null, 8, ["thumbnail", "image", "onOnClick"])
                            ]),
                            createVNode("div", {
                              class: "image-del",
                              onClick: ($event) => handleDelete(item.id)
                            }, [
                              createVNode(_component_Icon, {
                                class: "cursor-pointer rounded-md p-1 box-content",
                                name: "el-icon-Delete",
                                size: "18",
                                color: "#fff"
                              })
                            ], 8, ["onClick"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["list"]),
                      unref(pager).loading ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex justify-center items-center mt-[50px]"
                      }, [
                        createVNode(_component_el_icon, {
                          size: "25",
                          class: "is-loading"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(loading_default))
                          ]),
                          _: 1
                        }),
                        createVNode("span", { class: "mt-[4px] ml-[10px] text-tx-secondary" }, "\u52A0\u8F7D\u4E2D...")
                      ])) : createCommentVNode("", true)
                    ], 64)) : createCommentVNode("", true)
                  ], 8, ["infinite-scroll-disabled"])), [
                    [_directive_infinite_scroll, getDrawData]
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        show: unref(previewState).show,
        "onUpdate:show": ($event) => unref(previewState).show = $event,
        data: unref(previewState).data
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index/works/_components/draw.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Draw = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a48eb256"]]);

export { Draw as default };
//# sourceMappingURL=draw-Bfy5dBBt.mjs.map
