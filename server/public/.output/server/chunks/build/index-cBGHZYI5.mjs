import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$2 from './web-Cqs2L09F.mjs';
import _sfc_main$5 from './api-DRonrYhJ.mjs';
import _sfc_main$3 from './js-baDvRtVH.mjs';
import _sfc_main$4 from './oa-BeyUFV1j.mjs';
import _sfc_main$1 from './platform-select-A4W7u-r9.mjs';
import './el-page-header-94hYPtex.mjs';
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
import '@vueuse/core';
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './index-pT4w-4Lo.mjs';
import './el-table-column-tZnWqVKO.mjs';
import './index-0xCxAaTZ.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-53t5ntO1.mjs';
import './index-5Ia44xzE.mjs';
import 'normalize-wheel-es';
import './el-dropdown-item-BcYIrjsW.mjs';
import './dropdown-C6fgV-Vy.mjs';
import './refs-CJvnaIJj.mjs';
import './index-BoqjHllR.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-D60of7Hb.mjs';
import './el-pagination-ClrwtCwT.mjs';
import './index-CUhOTuS-.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './useCopy-CfS-iChu.mjs';
import './usePaging-DU8sXki3.mjs';
import './create-share-5dUrzWP0.mjs';
import './index-DLL0sEcv.mjs';
import 'async-validator';
import './el-radio-group-PXDiQVwm.mjs';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './usage-settings-D9Rk2FPz.mjs';
import './el-input-number-DH6NTUUv.mjs';
import './index-iSFXrlfY.mjs';
import './poster-5CDeCzu_.mjs';
import './index-DZM4Ziep.mjs';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import './download-N0luyf1S.mjs';
import './useLockFn-BWbjkhBs.mjs';
import './robot-BsB_E1H2.mjs';
import './create-api-DSzwJdwa.mjs';
import './call-description-Dq-CqIt6.mjs';
import './index-DRyhljQ3.mjs';
import 'markdown-it';
import 'highlight.js';
import '@vscode/markdown-it-katex';
import './js-embedding-DqJ9JY5f.mjs';
import './oa-config-C3zr4Tkt.mjs';
import './el-link-CHT85aXX.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    appId: {}
  },
  setup(__props) {
    const currentKey = ref();
    const changeKey = (key = "") => {
      currentKey.value = key;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-main" }, _attrs))}>`);
      if (!unref(currentKey)) {
        _push(ssrRenderComponent(_sfc_main$1, { onClickItem: changeKey }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentKey) === "web") {
        _push(ssrRenderComponent(_sfc_main$2, {
          "app-id": _ctx.appId,
          onBack: changeKey
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentKey) === "js") {
        _push(ssrRenderComponent(_sfc_main$3, {
          "app-id": _ctx.appId,
          onBack: changeKey
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentKey) === "oa") {
        _push(ssrRenderComponent(_sfc_main$4, {
          "app-id": _ctx.appId,
          onBack: changeKey
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentKey) === "api") {
        _push(ssrRenderComponent(_sfc_main$5, {
          type: 4,
          "app-id": _ctx.appId,
          onBack: changeKey
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentKey) === "qwx") {
        _push(ssrRenderComponent(_sfc_main$5, {
          type: 5,
          "app-id": _ctx.appId,
          onBack: changeKey
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentKey) === "yd") {
        _push(ssrRenderComponent(_sfc_main$5, {
          type: 7,
          "app-id": _ctx.appId,
          onBack: changeKey
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-release/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-cBGHZYI5.mjs.map
