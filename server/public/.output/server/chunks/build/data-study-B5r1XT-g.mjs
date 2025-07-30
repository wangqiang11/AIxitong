import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$1 from './datalist-BecEn16X.mjs';
import importData from './importData-Ba-cBYE9.mjs';
import _sfc_main$2 from './itemList-DL-7It9q.mjs';
import '@vueuse/core';
import './server.mjs';
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
import '@tanstack/vue-query';
import 'css-color-function';
import './index-BoqjHllR.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './el-table-column-tZnWqVKO.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-53t5ntO1.mjs';
import './index-5Ia44xzE.mjs';
import 'normalize-wheel-es';
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './index-D7S5lb8a.mjs';
import './index-D60of7Hb.mjs';
import './el-pagination-ClrwtCwT.mjs';
import './index-CUhOTuS-.mjs';
import './strings-D1uxkXhq.mjs';
import './usePaging-DU8sXki3.mjs';
import './my_database-C6D0rbWD.mjs';
import './renamePop-BToUb_Ck.mjs';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-DLL0sEcv.mjs';
import 'async-validator';
import './useLockFn-BWbjkhBs.mjs';
import './hook-1nkmW8DG.mjs';
import './cvs-C_N0Vrqd.mjs';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import './fileReader-CRBF4dkT.mjs';
import 'mammoth';
import 'pdfjs-dist/build/pdf.js';
import 'papaparse';
import 'xlsx';
import 'turndown';
import 'joplin-turndown-plugin-gfm';
import './cvs-data-item-N7r8ecjG.mjs';
import './doc-CFxCD4qQ.mjs';
import './textSplitter-DLWtBQu6.mjs';
import './data-item-CQ7fNu3a.mjs';
import './QASplit-BEI1cWI8.mjs';
import './web-page-BYRtriXd.mjs';
import './el-radio-group-PXDiQVwm.mjs';
import './index-L3E_sDO1.mjs';
import './editPop-BfSBoyhz.mjs';
import './index-DZM4Ziep.mjs';
import './index-VFk_dz0n.mjs';
import './index-DVLwoLV9.mjs';
import 'video.js';
import './usePolling-DOP50YcO.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "data-study",
  __ssrInlineRender: true,
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const isSelectItemId = ref(0);
    const isSelectName = ref("");
    const showModule = ref(
      1
      /* dataList */
    );
    const toItemList = (id, name) => {
      isSelectItemId.value = id;
      isSelectName.value = name;
      showModule.value = 3;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElScrollbar = ElScrollbar;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full" }, _attrs))}>`);
      if (unref(showModule) == 1) {
        _push(ssrRenderComponent(_sfc_main$1, {
          class: "h-full",
          onToImport: ($event) => showModule.value = 2,
          onToItemList: toItemList,
          id: __props.id
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(showModule) == 2) {
        _push(ssrRenderComponent(_component_ElScrollbar, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="p-main"${_scopeId}>`);
              _push2(ssrRenderComponent(importData, {
                id: __props.id,
                onBack: () => {
                  showModule.value = 1;
                }
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "p-main" }, [
                  createVNode(importData, {
                    id: __props.id,
                    onBack: () => {
                      showModule.value = 1;
                    }
                  }, null, 8, ["id", "onBack"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(showModule) == 3) {
        _push(ssrRenderComponent(_component_ElScrollbar, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="p-main"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                onBack: () => {
                  showModule.value = 1;
                },
                "item-id": unref(isSelectItemId),
                "item-name": unref(isSelectName)
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "p-main" }, [
                  createVNode(_sfc_main$2, {
                    onBack: () => {
                      showModule.value = 1;
                    },
                    "item-id": unref(isSelectItemId),
                    "item-name": unref(isSelectName)
                  }, null, 8, ["onBack", "item-id", "item-name"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/_components/data-study.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=data-study-B5r1XT-g.mjs.map
