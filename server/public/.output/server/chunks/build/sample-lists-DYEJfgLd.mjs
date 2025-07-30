import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { a5 as useAppStore, d as ElButton } from './server.mjs';
import { E as ElDialog } from './index-CzJm6kkT.mjs';
import { E as ElTabs, a as ElTabPane } from './el-tab-pane-C7DQ8faq.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { useSSRContext, defineComponent, withAsyncContext, computed, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, isRef, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useQuery } from '@tanstack/vue-query';
import { f as getChatSampleLists } from './chat-jd47avQj.mjs';
import { useDark } from '@vueuse/core';
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
import 'css-color-function';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './strings-D1uxkXhq.mjs';
import './index-C5I0EtSx.mjs';

const row = 3;
const column = 3;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sample-lists",
  __ssrInlineRender: true,
  emits: ["click-item"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const emit = __emit;
    useAppStore();
    const isDark = useDark();
    const { data: samplesList, suspense } = useQuery(["samplesList"], {
      queryFn: getChatSampleLists,
      placeholderData: []
    });
    [__temp, __restore] = withAsyncContext(() => useAsyncData(() => suspense(), {
      lazy: true
    }, "$BCxmeyzygt")), await __temp, __restore();
    const sliceInData = (data, len) => {
      return data.slice(0, len);
    };
    const showData = computed(() => {
      return sliceInData(samplesList.value, row);
    });
    const isShowMoreBtn = computed(() => {
      return samplesList.value.reduce((prev, item) => {
        var _a;
        prev += ((_a = item.sample) == null ? void 0 : _a.length) || 0;
        return prev;
      }, 0) > row * column || samplesList.value.length > row;
    });
    const showMore = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = _sfc_main$1;
      const _component_el_button = ElButton;
      const _component_Icon = _sfc_main$1;
      const _component_el_dialog = ElDialog;
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_ElScrollbar = ElScrollbar;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sample-lists-container sm:px-[10px]" }, _attrs))} data-v-aff0f892><div class="sm:my-[60px] my-[30px] text-center text-[30px] font-medium" data-v-aff0f892></div><div class="flex sample-lists" data-v-aff0f892><!--[-->`);
      ssrRenderList(unref(showData), (item) => {
        _push(`<div class="${ssrRenderClass([{
          "is-dark": unref(isDark)
        }, "flex-1 sm:mx-[10px] mx-[5px] p-[20px] sample-lists-item"])}" data-v-aff0f892><div class="flex justify-center items-center mb-[20px]" data-v-aff0f892>`);
        if (item.image) {
          _push(`<img class="w-[35px] h-[35px]"${ssrRenderAttr("src", item.image)} alt="" data-v-aff0f892>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="text-2xl font-medium ml-3 text-tx-primary" data-v-aff0f892>${ssrInterpolate(item.name)}</div></div><div data-v-aff0f892><!--[-->`);
        ssrRenderList(sliceInData(item.sample, column), (sample) => {
          _push(`<div class="bg-body sm:mb-[15px] mb-[10px] p-[10px] flex justify-center rounded-[12px] cursor-pointer" data-v-aff0f892><div class="flex-1 text-center line-clamp-1 text-sm sm:text-base" data-v-aff0f892>${ssrInterpolate(sample.content)}</div><div class="flex-none flex items-center" data-v-aff0f892>`);
          _push(ssrRenderComponent(_component_icon, {
            name: "el-icon-Right",
            color: "inherit",
            size: "16"
          }, null, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(isShowMoreBtn)) {
        _push(`<!--[--><div class="flex justify-center mt-10" data-v-aff0f892>`);
        _push(ssrRenderComponent(_component_el_button, { link: "" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u67E5\u770B\u66F4\u591A `);
              _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-ArrowRight" }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(" \u67E5\u770B\u66F4\u591A "),
                createVNode(_component_Icon, { name: "el-icon-ArrowRight" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_el_dialog, {
          modelValue: unref(showMore),
          "onUpdate:modelValue": ($event) => isRef(showMore) ? showMore.value = $event : null,
          width: "600px",
          title: "\u95EE\u9898\u793A\u4F8B",
          class: "sample-popup"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_tabs, { "model-value": 0 }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(samplesList), (item, index) => {
                      _push3(ssrRenderComponent(_component_el_tab_pane, {
                        key: item.id,
                        label: item.name,
                        name: index
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="h-[50vh]" data-v-aff0f892${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_ElScrollbar, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<!--[-->`);
                                  ssrRenderList(item.sample, (sample) => {
                                    _push5(`<div class="bg-page mb-[10px] p-[10px] flex justify-center rounded-[2px] cursor-pointer" data-v-aff0f892${_scopeId4}><div class="line-clamp-2" data-v-aff0f892${_scopeId4}>${ssrInterpolate(sample.content)}</div></div>`);
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.sample, (sample) => {
                                      return openBlock(), createBlock("div", {
                                        key: sample.id,
                                        class: "bg-page mb-[10px] p-[10px] flex justify-center rounded-[2px] cursor-pointer",
                                        onClick: ($event) => emit("click-item", sample.content)
                                      }, [
                                        createVNode("div", { class: "line-clamp-2" }, toDisplayString(sample.content), 1)
                                      ], 8, ["onClick"]);
                                    }), 128))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            return [
                              createVNode("div", { class: "h-[50vh]" }, [
                                createVNode(_component_ElScrollbar, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.sample, (sample) => {
                                      return openBlock(), createBlock("div", {
                                        key: sample.id,
                                        class: "bg-page mb-[10px] p-[10px] flex justify-center rounded-[2px] cursor-pointer",
                                        onClick: ($event) => emit("click-item", sample.content)
                                      }, [
                                        createVNode("div", { class: "line-clamp-2" }, toDisplayString(sample.content), 1)
                                      ], 8, ["onClick"]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(samplesList), (item, index) => {
                        return openBlock(), createBlock(_component_el_tab_pane, {
                          key: item.id,
                          label: item.name,
                          name: index
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "h-[50vh]" }, [
                              createVNode(_component_ElScrollbar, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.sample, (sample) => {
                                    return openBlock(), createBlock("div", {
                                      key: sample.id,
                                      class: "bg-page mb-[10px] p-[10px] flex justify-center rounded-[2px] cursor-pointer",
                                      onClick: ($event) => emit("click-item", sample.content)
                                    }, [
                                      createVNode("div", { class: "line-clamp-2" }, toDisplayString(sample.content), 1)
                                    ], 8, ["onClick"]);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["label", "name"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_el_tabs, { "model-value": 0 }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(samplesList), (item, index) => {
                      return openBlock(), createBlock(_component_el_tab_pane, {
                        key: item.id,
                        label: item.name,
                        name: index
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "h-[50vh]" }, [
                            createVNode(_component_ElScrollbar, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.sample, (sample) => {
                                  return openBlock(), createBlock("div", {
                                    key: sample.id,
                                    class: "bg-page mb-[10px] p-[10px] flex justify-center rounded-[2px] cursor-pointer",
                                    onClick: ($event) => emit("click-item", sample.content)
                                  }, [
                                    createVNode("div", { class: "line-clamp-2" }, toDisplayString(sample.content), 1)
                                  ], 8, ["onClick"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["label", "name"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dialogue/_components/sample-lists.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SampleLists = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aff0f892"]]);

export { SampleLists as default };
//# sourceMappingURL=sample-lists-DYEJfgLd.mjs.map
