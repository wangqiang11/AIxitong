import { E as ElTabs, a as ElTabPane } from './el-tab-pane-C7DQ8faq.mjs';
import { ag as useRoute } from './server.mjs';
import { useSSRContext, defineComponent, reactive, shallowRef, ref, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { k as knowKnowledgeDetail } from './my_database-C6D0rbWD.mjs';
import BaseSetting from './base-setting-BjubuKtS.mjs';
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
import './index-0xCxAaTZ.mjs';
import './index-DLL0sEcv.mjs';
import 'async-validator';
import './index-CJqYHNUB.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './dropdown-C6fgV-Vy.mjs';
import './index-BoqjHllR.mjs';
import './index-CXZnYiu9.mjs';
import './index-CUhOTuS-.mjs';
import './index-D7S5lb8a.mjs';
import './index-5Ia44xzE.mjs';
import './el-collapse-item-DSo9CmH5.mjs';
import './index-DadLUs6d.mjs';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-BaKT_MyR.mjs';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "setUp",
  __ssrInlineRender: true,
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const route = useRoute();
    const tabsState = reactive({
      current: "baseSetting",
      lists: [
        {
          type: "baseSetting",
          name: "\u57FA\u7840\u4FE1\u606F",
          component: shallowRef(BaseSetting)
        }
      ]
    });
    const kbData = ref({});
    const getDetail = async () => {
      kbData.value = await knowKnowledgeDetail({ id: route.query.id });
    };
    const handleUpdate = () => {
      getDetail();
      emit("update");
    };
    getDetail();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-main flex h-full flex-col" }, _attrs))} data-v-4da5484e><div class="text-xl font-medium" data-v-4da5484e>\u77E5\u8BC6\u5E93\u8BBE\u7F6E</div>`);
      _push(ssrRenderComponent(_component_el_tabs, {
        class: "flex-1 min-h-0",
        modelValue: unref(tabsState).current,
        "onUpdate:modelValue": ($event) => unref(tabsState).current = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(tabsState).lists, (item, index) => {
              _push2(ssrRenderComponent(_component_el_tab_pane, {
                label: item.name,
                name: item.type,
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.component), {
                      data: unref(kbData),
                      onUpdate: handleUpdate
                    }, null), _parent3, _scopeId2);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(item.component), {
                        data: unref(kbData),
                        onUpdate: handleUpdate
                      }, null, 40, ["data"]))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(tabsState).lists, (item, index) => {
                return openBlock(), createBlock(_component_el_tab_pane, {
                  label: item.name,
                  name: item.type,
                  key: index
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(item.component), {
                      data: unref(kbData),
                      onUpdate: handleUpdate
                    }, null, 40, ["data"]))
                  ]),
                  _: 2
                }, 1032, ["label", "name"]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/_components/setUp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const setUp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4da5484e"]]);

export { setUp as default };
//# sourceMappingURL=setUp-BT-vQyEh.mjs.map
