import { P as Popup } from './index-BKj4TrcW.mjs';
import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElTable, a as ElTableColumn } from './el-table-column-tZnWqVKO.mjs';
import { a5 as useAppStore, bH as accountDetail } from './server.mjs';
import { defineComponent, shallowRef, ref, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext, nextTick } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import '@vueuse/core';
import 'lodash-unified';
import './refs-CJvnaIJj.mjs';
import '@vue/shared';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'async-validator';
import './index-0xCxAaTZ.mjs';
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
  __name: "recordDetailPop",
  __ssrInlineRender: true,
  props: {
    type: {
      type: Number,
      default: -1
    }
  },
  emits: ["close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const appStore = useAppStore();
    const popRef = shallowRef();
    const id = ref(-1);
    const data = ref({});
    const getDetail = async () => {
      data.value = await accountDetail({ id: id.value });
    };
    const open = async (value) => {
      popRef.value.open();
      id.value = value;
      await nextTick();
      getDetail();
    };
    __expose({ open });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Popup = Popup;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      _push(ssrRenderComponent(_component_Popup, mergeProps({
        ref_key: "popRef",
        ref: popRef,
        width: "600px",
        onClose: ($event) => _ctx.$emit("close")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form, {
              "label-width": "90px",
              "label-position": "left"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c2, _d2;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u8BA2\u5355\u7F16\u53F7" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a3, _b3;
                      if (_push4) {
                        _push4(`${ssrInterpolate((_a3 = unref(data)) == null ? void 0 : _a3.sn)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString((_b3 = unref(data)) == null ? void 0 : _b3.sn), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u7528\u6237\u4FE1\u606F" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a3, _b3, _c3, _d3;
                      if (_push4) {
                        _push4(`${ssrInterpolate((_b3 = (_a3 = unref(data)) == null ? void 0 : _a3.user) == null ? void 0 : _b3.nickname)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString((_d3 = (_c3 = unref(data)) == null ? void 0 : _c3.user) == null ? void 0 : _d3.nickname), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u64CD\u4F5C\u65F6\u95F4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a3, _b3;
                      if (_push4) {
                        _push4(`${ssrInterpolate((_a3 = unref(data)) == null ? void 0 : _a3.create_time)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString((_b3 = unref(data)) == null ? void 0 : _b3.create_time), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u5E94\u7528\u540D" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a3, _b3;
                      if (_push4) {
                        _push4(`${ssrInterpolate(((_a3 = unref(data)) == null ? void 0 : _a3.robot_name) || "-")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(((_b3 = unref(data)) == null ? void 0 : _b3.robot_name) || "-"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u53D8\u52A8\u7C7B\u578B" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a3, _b3;
                      if (_push4) {
                        _push4(`${ssrInterpolate((_a3 = unref(data)) == null ? void 0 : _a3.change_type)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString((_b3 = unref(data)) == null ? void 0 : _b3.change_type), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: `\u53D8\u52A8${__props.type}`
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a3, _b3, _c3, _d3;
                      if (_push4) {
                        _push4(`<span${_scopeId3}>${ssrInterpolate(((_a3 = unref(data)) == null ? void 0 : _a3.action) == 1 ? "+" : "-")}</span>${ssrInterpolate((_b3 = unref(data)) == null ? void 0 : _b3.change_amount)}`);
                      } else {
                        return [
                          createVNode("span", null, toDisplayString(((_c3 = unref(data)) == null ? void 0 : _c3.action) == 1 ? "+" : "-"), 1),
                          createTextVNode(toDisplayString((_d3 = unref(data)) == null ? void 0 : _d3.change_amount), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if ((_b2 = (_a2 = unref(data)) == null ? void 0 : _a2.flows) == null ? void 0 : _b2.length) {
                    _push3(ssrRenderComponent(_component_el_form_item, { label: "\u6263\u8D39\u660E\u7EC6" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_el_form_item, { label: "\u8BA2\u5355\u7F16\u53F7" }, {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          createTextVNode(toDisplayString((_a3 = unref(data)) == null ? void 0 : _a3.sn), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u7528\u6237\u4FE1\u606F" }, {
                      default: withCtx(() => {
                        var _a3, _b3;
                        return [
                          createTextVNode(toDisplayString((_b3 = (_a3 = unref(data)) == null ? void 0 : _a3.user) == null ? void 0 : _b3.nickname), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u64CD\u4F5C\u65F6\u95F4" }, {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          createTextVNode(toDisplayString((_a3 = unref(data)) == null ? void 0 : _a3.create_time), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u5E94\u7528\u540D" }, {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          createTextVNode(toDisplayString(((_a3 = unref(data)) == null ? void 0 : _a3.robot_name) || "-"), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u53D8\u52A8\u7C7B\u578B" }, {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          createTextVNode(toDisplayString((_a3 = unref(data)) == null ? void 0 : _a3.change_type), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: `\u53D8\u52A8${__props.type}`
                    }, {
                      default: withCtx(() => {
                        var _a3, _b3;
                        return [
                          createVNode("span", null, toDisplayString(((_a3 = unref(data)) == null ? void 0 : _a3.action) == 1 ? "+" : "-"), 1),
                          createTextVNode(toDisplayString((_b3 = unref(data)) == null ? void 0 : _b3.change_amount), 1)
                        ];
                      }),
                      _: 1
                    }, 8, ["label"]),
                    ((_d2 = (_c2 = unref(data)) == null ? void 0 : _c2.flows) == null ? void 0 : _d2.length) ? (openBlock(), createBlock(_component_el_form_item, {
                      key: 0,
                      label: "\u6263\u8D39\u660E\u7EC6"
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if ((_b = (_a = unref(data)) == null ? void 0 : _a.flows) == null ? void 0 : _b.length) {
              _push2(`<div class="mt-[-10px]"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_table, {
                data: (_c = unref(data)) == null ? void 0 : _c.flows
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_table_column, {
                      prop: "name",
                      label: "\u6A21\u5757\u540D\u79F0"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_el_table_column, {
                      prop: "model",
                      label: "AI\u6A21\u578B"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_el_table_column, {
                      prop: "total_price",
                      label: `\u6D88\u8017${unref(appStore).getTokenUnit}`
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_table_column, {
                        prop: "name",
                        label: "\u6A21\u5757\u540D\u79F0"
                      }),
                      createVNode(_component_el_table_column, {
                        prop: "model",
                        label: "AI\u6A21\u578B"
                      }),
                      createVNode(_component_el_table_column, {
                        prop: "total_price",
                        label: `\u6D88\u8017${unref(appStore).getTokenUnit}`
                      }, null, 8, ["label"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_el_form, {
                "label-width": "90px",
                "label-position": "left"
              }, {
                default: withCtx(() => {
                  var _a2, _b2;
                  return [
                    createVNode(_component_el_form_item, { label: "\u8BA2\u5355\u7F16\u53F7" }, {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          createTextVNode(toDisplayString((_a3 = unref(data)) == null ? void 0 : _a3.sn), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u7528\u6237\u4FE1\u606F" }, {
                      default: withCtx(() => {
                        var _a3, _b3;
                        return [
                          createTextVNode(toDisplayString((_b3 = (_a3 = unref(data)) == null ? void 0 : _a3.user) == null ? void 0 : _b3.nickname), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u64CD\u4F5C\u65F6\u95F4" }, {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          createTextVNode(toDisplayString((_a3 = unref(data)) == null ? void 0 : _a3.create_time), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u5E94\u7528\u540D" }, {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          createTextVNode(toDisplayString(((_a3 = unref(data)) == null ? void 0 : _a3.robot_name) || "-"), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u53D8\u52A8\u7C7B\u578B" }, {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          createTextVNode(toDisplayString((_a3 = unref(data)) == null ? void 0 : _a3.change_type), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: `\u53D8\u52A8${__props.type}`
                    }, {
                      default: withCtx(() => {
                        var _a3, _b3;
                        return [
                          createVNode("span", null, toDisplayString(((_a3 = unref(data)) == null ? void 0 : _a3.action) == 1 ? "+" : "-"), 1),
                          createTextVNode(toDisplayString((_b3 = unref(data)) == null ? void 0 : _b3.change_amount), 1)
                        ];
                      }),
                      _: 1
                    }, 8, ["label"]),
                    ((_b2 = (_a2 = unref(data)) == null ? void 0 : _a2.flows) == null ? void 0 : _b2.length) ? (openBlock(), createBlock(_component_el_form_item, {
                      key: 0,
                      label: "\u6263\u8D39\u660E\u7EC6"
                    })) : createCommentVNode("", true)
                  ];
                }),
                _: 1
              }),
              ((_e = (_d = unref(data)) == null ? void 0 : _d.flows) == null ? void 0 : _e.length) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mt-[-10px]"
              }, [
                createVNode(_component_el_table, {
                  data: (_f = unref(data)) == null ? void 0 : _f.flows
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_table_column, {
                      prop: "name",
                      label: "\u6A21\u5757\u540D\u79F0"
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "model",
                      label: "AI\u6A21\u578B"
                    }),
                    createVNode(_component_el_table_column, {
                      prop: "total_price",
                      label: `\u6D88\u8017${unref(appStore).getTokenUnit}`
                    }, null, 8, ["label"])
                  ]),
                  _: 1
                }, 8, ["data"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index/_components/recordDetailPop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=recordDetailPop-CAIQlTnD.mjs.map
