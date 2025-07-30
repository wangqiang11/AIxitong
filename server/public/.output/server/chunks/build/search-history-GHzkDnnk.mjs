import { E as ElTooltip } from './index-L-VTEUEA.mjs';
import { z as useUserStore, a as useRouter, d as ElButton, B as vLoading } from './server.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElEmpty } from './el-empty-xbPr04pX.mjs';
import { E as ElInfiniteScroll } from './index-DNeGbNHc.mjs';
import { defineComponent, ref, reactive, resolveDirective, withCtx, mergeProps, createVNode, withDirectives, openBlock, createBlock, unref, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { c as getSearchLists } from './search-DBP7Ii5U.mjs';
import { ModelEnums } from './searchEnums-Dgcx5RT8.mjs';
import '@vueuse/core';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './dropdown-C6fgV-Vy.mjs';
import './position-DVxxNIGX.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search-history",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const router = useRouter();
    const buttonRef = ref();
    const popoverRef = ref();
    const modelToIconMap = {
      [ModelEnums.BASE]: "local-icon-search_base",
      [ModelEnums.ENHANCE]: "local-icon-search_copilot",
      [ModelEnums.STUDY]: "local-icon-search_research"
    };
    const onClickOutside = () => {
      var _a;
      (_a = unref(popoverRef)) == null ? void 0 : _a.hide();
    };
    const pageInfo = reactive({
      pageNo: 1,
      count: 1,
      pageSize: 15,
      lists: []
    });
    const getLists = async () => {
      if (!userStore.isLogin) return;
      const data = await getSearchLists({
        page_no: pageInfo.pageNo,
        page_size: pageInfo.pageSize
      });
      pageInfo.count = data.count;
      if (pageInfo.pageNo === 1) {
        pageInfo.lists = [];
      }
      pageInfo.lists.push(...data.lists);
    };
    const load = async () => {
      if (pageInfo.count >= pageInfo.pageNo * pageInfo.pageSize) {
        pageInfo.pageNo++;
        await getLists();
      }
    };
    const { lockFn: resetPage, isLock } = useLockFn(async () => {
      pageInfo.pageNo = 1;
      await getLists();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tooltip = ElTooltip;
      const _component_el_button = ElButton;
      const _component_Icon = _sfc_main$1;
      const _component_el_popover = ElPopover;
      const _component_el_scrollbar = ElScrollbar;
      const _component_el_empty = ElEmpty;
      const _directive_click_outside = resolveDirective("click-outside");
      const _directive_infinite_scroll = ElInfiniteScroll;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_el_tooltip, {
        effect: "light",
        content: "\u5386\u53F2\u641C\u7D22",
        placement: "bottom"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_button, mergeProps({
              link: "",
              ref_key: "buttonRef",
              ref: buttonRef
            }, ssrGetDirectiveProps(_ctx, _directive_click_outside, onClickOutside)), {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "local-icon-clock",
                    size: 18
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "local-icon-clock",
                      size: 18
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              withDirectives((openBlock(), createBlock(_component_el_button, {
                link: "",
                ref_key: "buttonRef",
                ref: buttonRef
              }, {
                icon: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "local-icon-clock",
                    size: 18
                  })
                ]),
                _: 1
              })), [
                [_directive_click_outside, onClickOutside]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_popover, {
        ref_key: "popoverRef",
        ref: popoverRef,
        "virtual-ref": unref(buttonRef),
        trigger: "click",
        width: "300px",
        "virtual-triggering": "",
        "popper-style": {
          bottom: "20px"
        },
        onShow: unref(resetPage)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full flex flex-col"${_scopeId}><div class="flex items-center"${_scopeId}><span class="mr-auto"${_scopeId}> \u5386\u53F2\u641C\u7D22 </span><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              link: "",
              onClick: onClickOutside
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "el-icon-Close",
                    size: 18
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "el-icon-Close",
                      size: 18
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div${ssrRenderAttrs(mergeProps({ class: "flex-1 min-h-0" }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLock))))}${_scopeId}>`);
            if (unref(pageInfo).count > 0) {
              _push2(ssrRenderComponent(_component_el_scrollbar, { class: "h-full" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_infinite_scroll, load))}${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(pageInfo).lists, (item) => {
                      _push3(`<div class="cursor-pointer p-[12px] hover:bg-page"${_scopeId2}><div class="line-clamp-2"${_scopeId2}>${ssrInterpolate(item.ask)}</div><div class="flex items-center mt-1 text-tx-secondary"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: modelToIconMap[item.model],
                        size: 14
                      }, null, _parent3, _scopeId2));
                      _push3(`<span class="ml-1 text-xs"${_scopeId2}>${ssrInterpolate(item.create_time)}</span></div></div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      withDirectives((openBlock(), createBlock("div", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(pageInfo).lists, (item) => {
                          return openBlock(), createBlock("div", {
                            key: item.id,
                            class: "cursor-pointer p-[12px] hover:bg-page",
                            onClick: ($event) => unref(router).push({ query: { id: item.id } })
                          }, [
                            createVNode("div", { class: "line-clamp-2" }, toDisplayString(item.ask), 1),
                            createVNode("div", { class: "flex items-center mt-1 text-tx-secondary" }, [
                              createVNode(_component_Icon, {
                                name: modelToIconMap[item.model],
                                size: 14
                              }, null, 8, ["name"]),
                              createVNode("span", { class: "ml-1 text-xs" }, toDisplayString(item.create_time), 1)
                            ])
                          ], 8, ["onClick"]);
                        }), 128))
                      ])), [
                        [_directive_infinite_scroll, load]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_el_empty, { "image-size": 150 }, null, _parent2, _scopeId));
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "h-full flex flex-col" }, [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode("span", { class: "mr-auto" }, " \u5386\u53F2\u641C\u7D22 "),
                  createVNode("div", null, [
                    createVNode(_component_el_button, {
                      link: "",
                      onClick: onClickOutside
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "el-icon-Close",
                          size: 18
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                withDirectives((openBlock(), createBlock("div", { class: "flex-1 min-h-0" }, [
                  unref(pageInfo).count > 0 ? (openBlock(), createBlock(_component_el_scrollbar, {
                    key: 0,
                    class: "h-full"
                  }, {
                    default: withCtx(() => [
                      withDirectives((openBlock(), createBlock("div", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(pageInfo).lists, (item) => {
                          return openBlock(), createBlock("div", {
                            key: item.id,
                            class: "cursor-pointer p-[12px] hover:bg-page",
                            onClick: ($event) => unref(router).push({ query: { id: item.id } })
                          }, [
                            createVNode("div", { class: "line-clamp-2" }, toDisplayString(item.ask), 1),
                            createVNode("div", { class: "flex items-center mt-1 text-tx-secondary" }, [
                              createVNode(_component_Icon, {
                                name: modelToIconMap[item.model],
                                size: 14
                              }, null, 8, ["name"]),
                              createVNode("span", { class: "ml-1 text-xs" }, toDisplayString(item.create_time), 1)
                            ])
                          ], 8, ["onClick"]);
                        }), 128))
                      ])), [
                        [_directive_infinite_scroll, load]
                      ])
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(_component_el_empty, {
                    key: 1,
                    "image-size": 150
                  }))
                ])), [
                  [_directive_loading, unref(isLock)]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/_components/search-history.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=search-history-GHzkDnnk.mjs.map
