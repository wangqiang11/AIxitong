import { A as feedback, d as ElButton, B as vLoading } from './server.mjs';
import { E as ElSelect, a as ElOption } from './index-CUhOTuS-.mjs';
import { E as ElTable, a as ElTableColumn } from './el-table-column-tZnWqVKO.mjs';
import { _ as _sfc_main$3 } from './index-L3E_sDO1.mjs';
import { _ as _sfc_main$4 } from './index-D60of7Hb.mjs';
import { defineComponent, toRefs, reactive, shallowRef, ref, watch, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, isRef, useSSRContext } from 'vue';
import { u as usePaging } from './usePaging-DU8sXki3.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate } from 'vue/server-renderer';
import _sfc_main$1 from './reply-popup-DA2FFVvQ.mjs';
import _sfc_main$2 from './correct-popup-W2_Kapug.mjs';
import { o as delRobotChatRecord, q as robotRecordsCorrect, s as getRobotDataRecord } from './robot-BsB_E1H2.mjs';
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
import '@vueuse/core';
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-0xCxAaTZ.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import './index-53t5ntO1.mjs';
import 'normalize-wheel-es';
import './el-pagination-ClrwtCwT.mjs';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-DLL0sEcv.mjs';
import 'async-validator';
import './index-DZM4Ziep.mjs';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import './index-BoqjHllR.mjs';
import './index-VFk_dz0n.mjs';
import './index-DVLwoLV9.mjs';
import 'video.js';
import './useDictOptions-DmOxg3R0.mjs';
import './my_database-C6D0rbWD.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "record",
  __ssrInlineRender: true,
  props: {
    appId: {}
  },
  setup(__props) {
    const props = __props;
    const { appId } = toRefs(props);
    const queryParams = reactive({
      robot_id: appId,
      is_feedback: -1
    });
    const popRef = shallowRef();
    const correctRef = shallowRef();
    const handleShowReplyPopup = (reply) => {
      popRef.value.open(reply, "\u67E5\u770B\u56DE\u590D");
    };
    const handleShowFeedBackPopup = (msg) => {
      popRef.value.open(msg, "\u53CD\u9988\u5185\u5BB9");
    };
    const { pager, getLists, resetPage } = usePaging({
      fetchFun: getRobotDataRecord,
      params: queryParams
    });
    const selectData = ref([]);
    const handleSelectionChange = (val) => {
      selectData.value = val.map((item) => item.id);
    };
    const handleDelete = async (ids) => {
      await feedback.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F");
      await delRobotChatRecord({ ids, robot_id: appId.value });
      getLists();
    };
    const handleAdjust = async (data) => {
      var _a;
      await robotRecordsCorrect(data);
      (_a = correctRef.value) == null ? void 0 : _a.close();
    };
    getLists();
    watch(
      () => props.appId,
      () => {
        resetPage();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElButton = ElButton;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _component_OverflowTooltip = _sfc_main$3;
      const _component_el_button = ElButton;
      const _component_pagination = _sfc_main$4;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-main h-full flex flex-col" }, _attrs))}><div class="flex justify-between">`);
      _push(ssrRenderComponent(_component_ElButton, {
        disabled: unref(selectData).length <= 0,
        class: "!mb-4",
        onClick: ($event) => handleDelete(unref(selectData))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6279\u91CF\u5220\u9664 `);
          } else {
            return [
              createTextVNode(" \u6279\u91CF\u5220\u9664 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex"><div class="pt-[6px] px-[10px]">\u95EE\u9898\u53CD\u9988</div>`);
      _push(ssrRenderComponent(_component_el_select, {
        modelValue: unref(queryParams).is_feedback,
        "onUpdate:modelValue": ($event) => unref(queryParams).is_feedback = $event,
        style: { "width": "240px" },
        onChange: unref(getLists)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_option, {
              label: "\u5168\u90E8",
              value: -1
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_option, {
              label: "\u672A\u53CD\u9988",
              value: 0
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_option, {
              label: "\u5DF2\u53CD\u9988",
              value: 1
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_option, {
                label: "\u5168\u90E8",
                value: -1
              }),
              createVNode(_component_el_option, {
                label: "\u672A\u53CD\u9988",
                value: 0
              }),
              createVNode(_component_el_option, {
                label: "\u5DF2\u53CD\u9988",
                value: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex-1 min-h-0">`);
      _push(ssrRenderComponent(_component_el_table, mergeProps({
        height: "100%",
        size: "large",
        data: unref(pager).lists,
        onSelectionChange: handleSelectionChange
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(pager).loading)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_table_column, {
              type: "selection",
              width: "55"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "ID",
              prop: "id",
              "min-width": "80"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u7528\u6237\u4FE1\u606F",
              "min-width": "180"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<div class="flex items-center"${_scopeId2}><span${_scopeId2}>${ssrInterpolate((_a = row.user) == null ? void 0 : _a.nickname)}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("span", null, toDisplayString((_b = row.user) == null ? void 0 : _b.nickname), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u63D0\u95EE",
              prop: "ask",
              "min-width": "300"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_OverflowTooltip, {
                    content: row.ask,
                    line: 2,
                    teleported: true,
                    effect: "light"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_OverflowTooltip, {
                      content: row.ask,
                      line: 2,
                      teleported: true,
                      effect: "light"
                    }, null, 8, ["content"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u56DE\u7B54",
              prop: "answer",
              "min-width": "300"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="line-clamp-2 cursor-pointer"${_scopeId2}>${ssrInterpolate(row.reply)}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: "line-clamp-2 cursor-pointer",
                      onClick: ($event) => handleShowReplyPopup(row.reply)
                    }, toDisplayString(row.reply), 9, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u7528\u6237\u5185\u5BB9",
              prop: "feedback",
              "min-width": "100"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (row.feedback) {
                    _push3(`<span class="line-clamp-2 cursor-pointer text-primary"${_scopeId2}>\u53CD\u9988\u5185\u5BB9</span>`);
                  } else {
                    _push3(`<span${_scopeId2}>-</span>`);
                  }
                } else {
                  return [
                    row.feedback ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "line-clamp-2 cursor-pointer text-primary",
                      onClick: ($event) => handleShowFeedBackPopup(row.feedback)
                    }, "\u53CD\u9988\u5185\u5BB9", 8, ["onClick"])) : (openBlock(), createBlock("span", { key: 1 }, "-"))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u63D0\u95EE\u65F6\u95F4",
              prop: "create_time",
              "min-width": "180",
              "show-tooltip-when-overflow": ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u64CD\u4F5C",
              width: "200",
              fixed: "right"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_button, {
                    type: "primary",
                    link: "",
                    onClick: ($event) => {
                      var _a;
                      return (_a = unref(correctRef)) == null ? void 0 : _a.open(row);
                    }
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u4FEE\u6B63 `);
                      } else {
                        return [
                          createTextVNode(" \u4FEE\u6B63 ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_button, {
                    type: "primary",
                    link: "",
                    onClick: ($event) => handleShowReplyPopup(row.reply)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u67E5\u770B\u56DE\u590D `);
                      } else {
                        return [
                          createTextVNode(" \u67E5\u770B\u56DE\u590D ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_button, {
                    type: "danger",
                    link: "",
                    onClick: ($event) => handleDelete([row.id])
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u5220\u9664 `);
                      } else {
                        return [
                          createTextVNode(" \u5220\u9664 ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_button, {
                      type: "primary",
                      link: "",
                      onClick: ($event) => {
                        var _a;
                        return (_a = unref(correctRef)) == null ? void 0 : _a.open(row);
                      }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u4FEE\u6B63 ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_el_button, {
                      type: "primary",
                      link: "",
                      onClick: ($event) => handleShowReplyPopup(row.reply)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u67E5\u770B\u56DE\u590D ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_el_button, {
                      type: "danger",
                      link: "",
                      onClick: ($event) => handleDelete([row.id])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u5220\u9664 ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_table_column, {
                type: "selection",
                width: "55"
              }),
              createVNode(_component_el_table_column, {
                label: "ID",
                prop: "id",
                "min-width": "80"
              }),
              createVNode(_component_el_table_column, {
                label: "\u7528\u6237\u4FE1\u606F",
                "min-width": "180"
              }, {
                default: withCtx(({ row }) => {
                  var _a;
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("span", null, toDisplayString((_a = row.user) == null ? void 0 : _a.nickname), 1)
                    ])
                  ];
                }),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u63D0\u95EE",
                prop: "ask",
                "min-width": "300"
              }, {
                default: withCtx(({ row }) => [
                  createVNode(_component_OverflowTooltip, {
                    content: row.ask,
                    line: 2,
                    teleported: true,
                    effect: "light"
                  }, null, 8, ["content"])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u56DE\u7B54",
                prop: "answer",
                "min-width": "300"
              }, {
                default: withCtx(({ row }) => [
                  createVNode("span", {
                    class: "line-clamp-2 cursor-pointer",
                    onClick: ($event) => handleShowReplyPopup(row.reply)
                  }, toDisplayString(row.reply), 9, ["onClick"])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u7528\u6237\u5185\u5BB9",
                prop: "feedback",
                "min-width": "100"
              }, {
                default: withCtx(({ row }) => [
                  row.feedback ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "line-clamp-2 cursor-pointer text-primary",
                    onClick: ($event) => handleShowFeedBackPopup(row.feedback)
                  }, "\u53CD\u9988\u5185\u5BB9", 8, ["onClick"])) : (openBlock(), createBlock("span", { key: 1 }, "-"))
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u63D0\u95EE\u65F6\u95F4",
                prop: "create_time",
                "min-width": "180",
                "show-tooltip-when-overflow": ""
              }),
              createVNode(_component_el_table_column, {
                label: "\u64CD\u4F5C",
                width: "200",
                fixed: "right"
              }, {
                default: withCtx(({ row }) => [
                  createVNode(_component_el_button, {
                    type: "primary",
                    link: "",
                    onClick: ($event) => {
                      var _a;
                      return (_a = unref(correctRef)) == null ? void 0 : _a.open(row);
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u4FEE\u6B63 ")
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_component_el_button, {
                    type: "primary",
                    link: "",
                    onClick: ($event) => handleShowReplyPopup(row.reply)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u67E5\u770B\u56DE\u590D ")
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_component_el_button, {
                    type: "danger",
                    link: "",
                    onClick: ($event) => handleDelete([row.id])
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u5220\u9664 ")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex justify-end mt-4">`);
      _push(ssrRenderComponent(_component_pagination, {
        modelValue: unref(pager),
        "onUpdate:modelValue": ($event) => isRef(pager) ? pager.value = $event : null,
        onChange: unref(getLists)
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        ref_key: "popRef",
        ref: popRef
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        ref_key: "correctRef",
        ref: correctRef,
        onConfirm: handleAdjust
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-dialogue/record.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=record-BAVzAhl8.mjs.map
