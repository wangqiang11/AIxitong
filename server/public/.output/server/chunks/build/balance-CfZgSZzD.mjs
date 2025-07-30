import { E as ElTable, a as ElTableColumn } from './el-table-column-tZnWqVKO.mjs';
import { z as useUserStore, a5 as useAppStore, bI as accountList, d as ElButton } from './server.mjs';
import { _ as _sfc_main$2 } from './index-D60of7Hb.mjs';
import { useSSRContext, defineComponent, ref, computed, shallowRef, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, isRef, nextTick } from 'vue';
import { u as usePaging } from './usePaging-DU8sXki3.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$1 from './recordDetailPop-CAIQlTnD.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './el-pagination-ClrwtCwT.mjs';
import './index-CUhOTuS-.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-DLL0sEcv.mjs';
import 'async-validator';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "balance",
  __ssrInlineRender: true,
  setup(__props) {
    const { userInfo } = useUserStore();
    const appStore = useAppStore();
    const params = ref({
      type: 1
    });
    const watchType = computed(() => {
      return "\u6570\u91CF";
    });
    const popShow = ref(false);
    const popRef = shallowRef();
    const typeList = computed(() => [
      {
        name: `${appStore.getTokenUnit}\u660E\u7EC6`,
        type: 1
      },
      {
        name: "\u667A\u80FD\u4F53\u660E\u7EC6",
        type: 2
      }
      // {
      //     name: '知识库明细',
      //     type: 'knowledgeBase'
      // },
      // {
      //     name: '形象明细',
      //     type: 3
      // }
    ]);
    const { pager, getLists } = usePaging({
      fetchFun: accountList,
      params: params.value
    });
    const showDetail = async (id) => {
      popShow.value = true;
      await nextTick();
      popRef.value.open(id);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _component_el_button = ElButton;
      const _component_pagination = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-[20px] flex bg-body rounded-[12px] flex-col h-full" }, _attrs))} data-v-b0e2ee91><div class="grid grid-cols-2 md:grid-cols-2 gap-4 bg-page py-[20px] rounded-lg flex-none" data-v-b0e2ee91><div class="flex flex-col items-center justify-center" data-v-b0e2ee91><div class="font-medium text-[25px] text-[#0256FF]" data-v-b0e2ee91>${ssrInterpolate(unref(userInfo).balance)}</div><div class="mt-2" data-v-b0e2ee91>${ssrInterpolate(unref(appStore).getTokenUnit)}\u6570\u91CF</div></div><div class="flex flex-col items-center justify-center" data-v-b0e2ee91><div class="font-medium text-[25px] text-[#0256FF]" data-v-b0e2ee91>${ssrInterpolate(unref(userInfo).robot_num)}</div><div class="mt-2" data-v-b0e2ee91>\u667A\u80FD\u4F53</div></div></div><div class="flex mt-4 flex-none" data-v-b0e2ee91><div class="p-[8px] flex justify-around bg-page rounded-[10px] font-medium" data-v-b0e2ee91><!--[-->`);
      ssrRenderList(unref(typeList), (item, index) => {
        _push(`<div class="${ssrRenderClass([{ isSelect: unref(params).type == item.type }, "px-[15px] md:px-[30px] py-[10px] cursor-pointer"])}" data-v-b0e2ee91><span data-v-b0e2ee91>${ssrInterpolate(item.name)}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="mt-4 flex-1 min-h-0 flex flex-col" data-v-b0e2ee91><div class="flex-1 min-h-0" data-v-b0e2ee91>`);
      _push(ssrRenderComponent(_component_el_table, {
        data: unref(pager).lists,
        height: "100%"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u8BA2\u5355\u7F16\u53F7",
              prop: "sn",
              "min-width": "150"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u53D8\u52A8\u7C7B\u578B",
              prop: "change_type",
              "min-width": "150"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u667A\u80FD\u4F53/\u5E94\u7528\u540D",
              prop: "robot_name",
              "min-width": "150"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div data-v-b0e2ee91${_scopeId2}>${ssrInterpolate(row.robot_name || "-")}</div>`);
                } else {
                  return [
                    createVNode("div", null, toDisplayString(row.robot_name || "-"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u64CD\u4F5C\u65F6\u95F4",
              prop: "create_time",
              "min-width": "150"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: `\u53D8\u52A8${unref(watchType)}`,
              prop: "change_amount",
              "min-width": "100"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass({ "text-danger": row.action == 2 })}" data-v-b0e2ee91${_scopeId2}><span data-v-b0e2ee91${_scopeId2}>${ssrInterpolate(row.action == 1 ? "+" : "-")}</span><span data-v-b0e2ee91${_scopeId2}>${ssrInterpolate(row.change_amount)}</span></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: { "text-danger": row.action == 2 }
                    }, [
                      createVNode("span", null, toDisplayString(row.action == 1 ? "+" : "-"), 1),
                      createVNode("span", null, toDisplayString(row.change_amount), 1)
                    ], 2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u64CD\u4F5C",
              "min-width": "80"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_button, {
                    onClick: ($event) => showDetail(row.id),
                    link: "",
                    type: "primary"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u8BE6\u60C5 `);
                      } else {
                        return [
                          createTextVNode(" \u8BE6\u60C5 ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_button, {
                      onClick: ($event) => showDetail(row.id),
                      link: "",
                      type: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u8BE6\u60C5 ")
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
                label: "\u8BA2\u5355\u7F16\u53F7",
                prop: "sn",
                "min-width": "150"
              }),
              createVNode(_component_el_table_column, {
                label: "\u53D8\u52A8\u7C7B\u578B",
                prop: "change_type",
                "min-width": "150"
              }),
              createVNode(_component_el_table_column, {
                label: "\u667A\u80FD\u4F53/\u5E94\u7528\u540D",
                prop: "robot_name",
                "min-width": "150"
              }, {
                default: withCtx(({ row }) => [
                  createVNode("div", null, toDisplayString(row.robot_name || "-"), 1)
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u64CD\u4F5C\u65F6\u95F4",
                prop: "create_time",
                "min-width": "150"
              }),
              createVNode(_component_el_table_column, {
                label: `\u53D8\u52A8${unref(watchType)}`,
                prop: "change_amount",
                "min-width": "100"
              }, {
                default: withCtx(({ row }) => [
                  createVNode("div", {
                    class: { "text-danger": row.action == 2 }
                  }, [
                    createVNode("span", null, toDisplayString(row.action == 1 ? "+" : "-"), 1),
                    createVNode("span", null, toDisplayString(row.change_amount), 1)
                  ], 2)
                ]),
                _: 1
              }, 8, ["label"]),
              createVNode(_component_el_table_column, {
                label: "\u64CD\u4F5C",
                "min-width": "80"
              }, {
                default: withCtx(({ row }) => [
                  createVNode(_component_el_button, {
                    onClick: ($event) => showDetail(row.id),
                    link: "",
                    type: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u8BE6\u60C5 ")
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
      _push(`</div><div class="flex justify-end mt-4" data-v-b0e2ee91>`);
      _push(ssrRenderComponent(_component_pagination, {
        modelValue: unref(pager),
        "onUpdate:modelValue": ($event) => isRef(pager) ? pager.value = $event : null,
        onChange: unref(getLists)
      }, null, _parent));
      _push(`</div></div>`);
      if (unref(popShow)) {
        _push(ssrRenderComponent(_sfc_main$1, {
          type: unref(watchType),
          ref_key: "popRef",
          ref: popRef,
          onClose: ($event) => popShow.value = false
        }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index/balance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const balance = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b0e2ee91"]]);

export { balance as default };
//# sourceMappingURL=balance-CfZgSZzD.mjs.map
