import { E as ElTable, a as ElTableColumn } from './el-table-column-tZnWqVKO.mjs';
import { a5 as useAppStore, B as vLoading } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate } from 'vue/server-renderer';
import 'lodash-unified';
import './index-0xCxAaTZ.mjs';
import '@vueuse/core';
import '@vue/shared';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-53t5ntO1.mjs';
import './index-5Ia44xzE.mjs';
import 'normalize-wheel-es';
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
  __name: "member",
  __ssrInlineRender: true,
  setup(__props) {
    useAppStore();
    const memberLog = ref([]);
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-4 flex-1 flex flex-col min-h-0" }, _attrs))}><div class="flex-1 min-h-0">`);
      _push(ssrRenderComponent(_component_el_table, mergeProps({
        height: "100%",
        size: "large",
        data: unref(memberLog)
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(loading))), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u8BA2\u5355\u7F16\u53F7",
              prop: "order_sn",
              width: "170"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(row.order_sn || "-")}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("span", null, toDisplayString(row.order_sn || "-"), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u4F1A\u5458\u7B49\u7EA7",
              prop: "name",
              "min-width": "130"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(row.package_name || row.name || "-")}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("span", null, toDisplayString(row.package_name || row.name || "-"), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u4F1A\u5458\u65F6\u957F",
              prop: "original_package_long_time",
              "min-width": "100"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(row.original_package_long_time || "-")}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("span", null, toDisplayString(row.original_package_long_time || "-"), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u6709\u6548\u671F\u81F3",
              prop: "package_long_time",
              "min-width": "160"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(row.package_long_time || "-")}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("span", null, toDisplayString(row.package_long_time || "-"), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u8D2D\u4E70\u65B9\u5F0F",
              prop: "channel_text",
              "min-width": "100"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u652F\u4ED8\u65B9\u5F0F",
              prop: "pay_way_text",
              "min-width": "100"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(row.pay_way_text || "-")}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("span", null, toDisplayString(row.pay_way_text || "-"), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u5B9E\u4ED8\u91D1\u989D",
              "min-width": "100"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center"${_scopeId2}>`);
                  if (row.order_amount) {
                    _push3(`<span${_scopeId2}>\xA5${ssrInterpolate(row.order_amount)}</span>`);
                  } else {
                    _push3(`<span${_scopeId2}>-</span>`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      row.order_amount ? (openBlock(), createBlock("span", { key: 0 }, "\xA5" + toDisplayString(row.order_amount), 1)) : (openBlock(), createBlock("span", { key: 1 }, "-"))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u652F\u4ED8\u72B6\u6001",
              prop: "pay_status_text",
              "min-width": "100"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(row.pay_status_text || "-")}</span>`);
                  if (row.refund_status == 1) {
                    _push3(`<span class="text-warning"${_scopeId2}>\u5DF2\u9000\u6B3E</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("span", null, toDisplayString(row.pay_status_text || "-"), 1),
                      row.refund_status == 1 ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-warning"
                      }, "\u5DF2\u9000\u6B3E")) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u652F\u4ED8/\u64CD\u4F5C\u65F6\u95F4",
              prop: "pay_time_text",
              "min-width": "160"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate((row == null ? void 0 : row.pay_time_text) || (row == null ? void 0 : row.create_time))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString((row == null ? void 0 : row.pay_time_text) || (row == null ? void 0 : row.create_time)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_table_column, {
                label: "\u8BA2\u5355\u7F16\u53F7",
                prop: "order_sn",
                width: "170"
              }, {
                default: withCtx(({ row }) => [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("span", null, toDisplayString(row.order_sn || "-"), 1)
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u4F1A\u5458\u7B49\u7EA7",
                prop: "name",
                "min-width": "130"
              }, {
                default: withCtx(({ row }) => [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("span", null, toDisplayString(row.package_name || row.name || "-"), 1)
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u4F1A\u5458\u65F6\u957F",
                prop: "original_package_long_time",
                "min-width": "100"
              }, {
                default: withCtx(({ row }) => [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("span", null, toDisplayString(row.original_package_long_time || "-"), 1)
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u6709\u6548\u671F\u81F3",
                prop: "package_long_time",
                "min-width": "160"
              }, {
                default: withCtx(({ row }) => [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("span", null, toDisplayString(row.package_long_time || "-"), 1)
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u8D2D\u4E70\u65B9\u5F0F",
                prop: "channel_text",
                "min-width": "100"
              }),
              createVNode(_component_el_table_column, {
                label: "\u652F\u4ED8\u65B9\u5F0F",
                prop: "pay_way_text",
                "min-width": "100"
              }, {
                default: withCtx(({ row }) => [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("span", null, toDisplayString(row.pay_way_text || "-"), 1)
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u5B9E\u4ED8\u91D1\u989D",
                "min-width": "100"
              }, {
                default: withCtx(({ row }) => [
                  createVNode("div", { class: "flex items-center" }, [
                    row.order_amount ? (openBlock(), createBlock("span", { key: 0 }, "\xA5" + toDisplayString(row.order_amount), 1)) : (openBlock(), createBlock("span", { key: 1 }, "-"))
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u652F\u4ED8\u72B6\u6001",
                prop: "pay_status_text",
                "min-width": "100"
              }, {
                default: withCtx(({ row }) => [
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("span", null, toDisplayString(row.pay_status_text || "-"), 1),
                    row.refund_status == 1 ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-warning"
                    }, "\u5DF2\u9000\u6B3E")) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u652F\u4ED8/\u64CD\u4F5C\u65F6\u95F4",
                prop: "pay_time_text",
                "min-width": "160"
              }, {
                default: withCtx(({ row }) => [
                  createTextVNode(toDisplayString((row == null ? void 0 : row.pay_time_text) || (row == null ? void 0 : row.create_time)), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index/record/_components/member.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=member-DNTAnuxW.mjs.map
