import { E as ElTabs, a as ElTabPane } from './el-tab-pane-C7DQ8faq.mjs';
import { bO as noticeLists, bM as noticeAllRead, bN as ElBadge, d as ElButton } from './server.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as EmptyNotice, _ as __nuxt_component_2 } from './empty_notice-Dpk159jp.mjs';
import { E as ElEmpty } from './el-empty-xbPr04pX.mjs';
import { _ as _sfc_main$1 } from './index-D60of7Hb.mjs';
import { useSSRContext, defineComponent, reactive, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, isRef } from 'vue';
import { u as usePaging } from './usePaging-DU8sXki3.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import './strings-D1uxkXhq.mjs';
import '@vue/shared';
import './index-C5I0EtSx.mjs';
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
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './el-pagination-ClrwtCwT.mjs';
import './index-CUhOTuS-.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-D7S5lb8a.mjs';
import './index-5Ia44xzE.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "notification",
  __ssrInlineRender: true,
  setup(__props) {
    const queryParams = reactive({
      type: 1
    });
    const { pager, getLists, resetPage } = usePaging({
      fetchFun: noticeLists,
      params: queryParams
    });
    const handleAllRead = async () => {
      await noticeAllRead();
      await getLists();
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_el_badge = ElBadge;
      const _component_ElButton = ElButton;
      const _component_ElScrollbar = ElScrollbar;
      const _component_NotificationCard = __nuxt_component_2;
      const _component_el_empty = ElEmpty;
      const _component_pagination = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-[20px] flex bg-body rounded-[12px] flex-col h-full" }, _attrs))} data-v-afc3971f><div class="flex justify-between relative" data-v-afc3971f>`);
      _push(ssrRenderComponent(_component_el_tabs, {
        class: "flex-1",
        modelValue: unref(queryParams).type,
        "onUpdate:modelValue": ($event) => unref(queryParams).type = $event,
        onTabChange: unref(getLists)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_tab_pane, {
              label: "\u7CFB\u7EDF\u901A\u77E5",
              name: 1
            }, {
              label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_badge, {
                    class: "flex-none text-xl font-medium",
                    value: unref(pager).system_unread,
                    "show-zero": !!unref(pager).system_unread,
                    offset: [10, 0]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u7CFB\u7EDF\u901A\u77E5 `);
                      } else {
                        return [
                          createTextVNode(" \u7CFB\u7EDF\u901A\u77E5 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_badge, {
                      class: "flex-none text-xl font-medium",
                      value: unref(pager).system_unread,
                      "show-zero": !!unref(pager).system_unread,
                      offset: [10, 0]
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u7CFB\u7EDF\u901A\u77E5 ")
                      ]),
                      _: 1
                    }, 8, ["value", "show-zero"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_tab_pane, {
              label: "\u5BA1\u6838\u901A\u77E5",
              name: 2
            }, {
              label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_badge, {
                    class: "flex-none text-xl font-medium",
                    value: unref(pager).audit_unread,
                    "show-zero": !!unref(pager).audit_unread,
                    offset: [10, 0]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u5BA1\u6838\u901A\u77E5 `);
                      } else {
                        return [
                          createTextVNode(" \u5BA1\u6838\u901A\u77E5 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_badge, {
                      class: "flex-none text-xl font-medium",
                      value: unref(pager).audit_unread,
                      "show-zero": !!unref(pager).audit_unread,
                      offset: [10, 0]
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u5BA1\u6838\u901A\u77E5 ")
                      ]),
                      _: 1
                    }, 8, ["value", "show-zero"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_tab_pane, {
                label: "\u7CFB\u7EDF\u901A\u77E5",
                name: 1
              }, {
                label: withCtx(() => [
                  createVNode(_component_el_badge, {
                    class: "flex-none text-xl font-medium",
                    value: unref(pager).system_unread,
                    "show-zero": !!unref(pager).system_unread,
                    offset: [10, 0]
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u7CFB\u7EDF\u901A\u77E5 ")
                    ]),
                    _: 1
                  }, 8, ["value", "show-zero"])
                ]),
                _: 1
              }),
              createVNode(_component_el_tab_pane, {
                label: "\u5BA1\u6838\u901A\u77E5",
                name: 2
              }, {
                label: withCtx(() => [
                  createVNode(_component_el_badge, {
                    class: "flex-none text-xl font-medium",
                    value: unref(pager).audit_unread,
                    "show-zero": !!unref(pager).audit_unread,
                    offset: [10, 0]
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u5BA1\u6838\u901A\u77E5 ")
                    ]),
                    _: 1
                  }, 8, ["value", "show-zero"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElButton, {
        class: "absolute right-0 top-[10px]",
        type: "primary",
        link: true,
        disabled: !unref(pager).unread,
        onClick: handleAllRead
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5168\u90E8\u5DF2\u8BFB `);
          } else {
            return [
              createTextVNode(" \u5168\u90E8\u5DF2\u8BFB ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 min-h-0 flex flex-col" data-v-afc3971f><div class="flex-1 min-h-0" data-v-afc3971f>`);
      if ((_b = (_a = unref(pager)) == null ? void 0 : _a.lists) == null ? void 0 : _b.length) {
        _push(ssrRenderComponent(_component_ElScrollbar, { height: "100%" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(pager).lists, (item) => {
                _push2(ssrRenderComponent(_component_NotificationCard, {
                  key: item.id,
                  data: item,
                  size: "large",
                  onRead: unref(getLists)
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(pager).lists, (item) => {
                  return openBlock(), createBlock(_component_NotificationCard, {
                    key: item.id,
                    data: item,
                    size: "large",
                    onRead: unref(getLists)
                  }, null, 8, ["data", "onRead"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="flex items-center justify-center h-full" data-v-afc3971f>`);
        _push(ssrRenderComponent(_component_el_empty, {
          image: unref(EmptyNotice),
          "image-size": 250,
          description: "\u6682\u65E0\u6D88\u606F\u901A\u77E5"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div><div class="flex justify-end mt-4" data-v-afc3971f>`);
      _push(ssrRenderComponent(_component_pagination, {
        modelValue: unref(pager),
        "onUpdate:modelValue": ($event) => isRef(pager) ? pager.value = $event : null,
        onChange: unref(getLists)
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index/notification.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const notification = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-afc3971f"]]);

export { notification as default };
//# sourceMappingURL=notification--de8Zg5K.mjs.map
