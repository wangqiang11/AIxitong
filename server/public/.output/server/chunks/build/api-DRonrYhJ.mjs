import { E as ElPageHeader } from './el-page-header-94hYPtex.mjs';
import { A as feedback, d as ElButton, B as vLoading } from './server.mjs';
import { E as ElTable, a as ElTableColumn } from './el-table-column-tZnWqVKO.mjs';
import { _ as _sfc_main$4 } from './index-D60of7Hb.mjs';
import { u as useCopy } from './useCopy-CfS-iChu.mjs';
import { defineComponent, shallowRef, toRefs, reactive, computed, ref, watch, unref, withCtx, createTextVNode, mergeProps, createVNode, isRef, useSSRContext } from 'vue';
import { u as usePaging } from './usePaging-DU8sXki3.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps } from 'vue/server-renderer';
import _sfc_main$2 from './create-api-DSzwJdwa.mjs';
import _sfc_main$3 from './usage-settings-D9Rk2FPz.mjs';
import _sfc_main$1 from './call-description-Dq-CqIt6.mjs';
import { w as delRelease, x as putRelease, y as postRelease, z as getReleaseList } from './robot-BsB_E1H2.mjs';
import './index-pT4w-4Lo.mjs';
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
import './index-0xCxAaTZ.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-53t5ntO1.mjs';
import './index-5Ia44xzE.mjs';
import 'normalize-wheel-es';
import './el-pagination-ClrwtCwT.mjs';
import './index-CUhOTuS-.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-DLL0sEcv.mjs';
import 'async-validator';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './el-input-number-DH6NTUUv.mjs';
import './index-iSFXrlfY.mjs';
import './index-DRyhljQ3.mjs';
import 'markdown-it';
import 'highlight.js';
import '@vscode/markdown-it-katex';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "api",
  __ssrInlineRender: true,
  props: {
    appId: {},
    type: {}
  },
  emits: ["back"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { copy } = useCopy();
    const createApiRef = shallowRef();
    const usageSettingsRef = shallowRef();
    const { appId } = toRefs(props);
    const queryParams = reactive({
      robot_id: appId,
      type: props.type
    });
    const { pager, getLists } = usePaging({
      fetchFun: getReleaseList,
      params: queryParams
    });
    getLists();
    const shareDelete = async (id) => {
      await feedback.confirm("\u786E\u5B9A\u5220\u9664\uFF1F");
      await delRelease({
        id,
        type: queryParams.type
      });
      getLists();
    };
    const title = computed(() => {
      switch (props.type) {
        case 5:
          return "\u53D1\u5E03\u4F01\u4E1A\u5FAE\u4FE1";
        default:
          return "\u53D1\u5E03API";
      }
    });
    const handleCreateApi = async (formData) => {
      var _a;
      await putRelease({
        ...formData,
        ...queryParams
      });
      (_a = createApiRef.value) == null ? void 0 : _a.close();
      getLists();
    };
    const handelUsageSettings = async (formData) => {
      var _a;
      await postRelease({
        ...formData,
        ...queryParams
      });
      (_a = usageSettingsRef.value) == null ? void 0 : _a.close();
      getLists();
    };
    const path = ref("");
    path.value = `${(void 0).location.origin}/api`;
    const handleCopy = async (str) => {
      await copy(str);
    };
    const showUsageSettings = (row) => {
      var _a, _b;
      (_a = usageSettingsRef.value) == null ? void 0 : _a.open();
      (_b = usageSettingsRef.value) == null ? void 0 : _b.setFormData(row);
    };
    watch(
      () => props.appId,
      () => {
        getLists();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_page_header = ElPageHeader;
      const _component_el_button = ElButton;
      const _component_ElButton = ElButton;
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _component_pagination = _sfc_main$4;
      const _directive_loading = vLoading;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_el_page_header, {
        content: unref(title),
        onBack: ($event) => emit("back")
      }, null, _parent));
      _push(`<div class="flex items-center mt-4"><div class="flex">`);
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        onClick: ($event) => {
          var _a;
          return (_a = unref(createApiRef)) == null ? void 0 : _a.open();
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u521B\u5EFAAPI `);
          } else {
            return [
              createTextVNode(" \u521B\u5EFAAPI ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.type == 4) {
        _push(ssrRenderComponent(_sfc_main$1, {
          type: "app",
          class: "ml-[10px]"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.type == 5) {
        _push(ssrRenderComponent(_sfc_main$1, {
          type: "wx",
          class: "ml-[10px]"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.type == 7) {
        _push(ssrRenderComponent(_sfc_main$1, {
          type: "yd",
          class: "ml-[10px]"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="ml-4 flex items-center"> API\u6839\u5730\u5740\uFF1A <span>${ssrInterpolate(unref(path))}</span>`);
      _push(ssrRenderComponent(_component_ElButton, {
        onClick: ($event) => handleCopy(unref(path)),
        type: "primary",
        link: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u590D\u5236`);
          } else {
            return [
              createTextVNode("\u590D\u5236")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-4">`);
      _push(ssrRenderComponent(_component_el_table, mergeProps({
        data: unref(pager).lists,
        size: "large"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(pager).loading)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "apikey",
              prop: "apikey",
              "min-width": "200"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u540D\u79F0",
              prop: "name",
              "min-width": "180",
              "show-tooltip-when-overflow": ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u6700\u540E\u4F7F\u7528\u65F6\u95F4",
              prop: "use_time",
              "min-width": "180"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u64CD\u4F5C",
              width: "150",
              fixed: "right"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_button, {
                    type: "primary",
                    link: "",
                    onClick: ($event) => showUsageSettings(row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u7528\u91CF\u8BBE\u7F6E `);
                      } else {
                        return [
                          createTextVNode(" \u7528\u91CF\u8BBE\u7F6E ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_button, {
                    type: "danger",
                    link: "",
                    onClick: ($event) => shareDelete(row.id)
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
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode(_component_el_button, {
                        type: "primary",
                        link: "",
                        onClick: ($event) => showUsageSettings(row)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u7528\u91CF\u8BBE\u7F6E ")
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createVNode(_component_el_button, {
                        type: "danger",
                        link: "",
                        onClick: ($event) => shareDelete(row.id)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u5220\u9664 ")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_table_column, {
                label: "apikey",
                prop: "apikey",
                "min-width": "200"
              }),
              createVNode(_component_el_table_column, {
                label: "\u540D\u79F0",
                prop: "name",
                "min-width": "180",
                "show-tooltip-when-overflow": ""
              }),
              createVNode(_component_el_table_column, {
                label: "\u6700\u540E\u4F7F\u7528\u65F6\u95F4",
                prop: "use_time",
                "min-width": "180"
              }),
              createVNode(_component_el_table_column, {
                label: "\u64CD\u4F5C",
                width: "150",
                fixed: "right"
              }, {
                default: withCtx(({ row }) => [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(_component_el_button, {
                      type: "primary",
                      link: "",
                      onClick: ($event) => showUsageSettings(row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u7528\u91CF\u8BBE\u7F6E ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_el_button, {
                      type: "danger",
                      link: "",
                      onClick: ($event) => shareDelete(row.id)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u5220\u9664 ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-end mt-4">`);
      _push(ssrRenderComponent(_component_pagination, {
        modelValue: unref(pager),
        "onUpdate:modelValue": ($event) => isRef(pager) ? pager.value = $event : null,
        onChange: unref(getLists)
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        ref_key: "createApiRef",
        ref: createApiRef,
        onConfirm: handleCreateApi
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        ref_key: "usageSettingsRef",
        ref: usageSettingsRef,
        onConfirm: handelUsageSettings
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-release/api.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=api-DRonrYhJ.mjs.map
