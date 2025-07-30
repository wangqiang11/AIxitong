import { _ as __nuxt_component_0 } from './index-DbRlceJ7.mjs';
import { ag as useRoute, a as useRouter, b3 as __nuxt_component_1$1 } from './server.mjs';
import { useSSRContext, defineComponent, ref, reactive, watch, provide, mergeProps, unref, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-BoqjHllR.mjs';
import './index-L3E_sDO1.mjs';
import './index-L-VTEUEA.mjs';
import '@vueuse/core';
import '@popperjs/core';
import '@vue/shared';
import 'lodash-unified';
import './index-0xCxAaTZ.mjs';
import './el-menu-item-DBjUF0xW.mjs';
import './index-DadLUs6d.mjs';
import '@ctrl/tinycolor';
import './index-5Ia44xzE.mjs';
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
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    ref(1);
    const id = route.query.id;
    const detailData = reactive({
      type: "",
      name: "",
      image: "",
      intro: "",
      owned: 1,
      power: 1,
      qa_length: ""
    });
    const defaultTab = ref("dataStudy");
    const tabList = [
      {
        name: "\u6570\u636E\u5B66\u4E60",
        icon: "el-icon-Document",
        key: "dataStudy"
      },
      {
        name: "\u641C\u7D22\u6D4B\u8BD5",
        key: "testData",
        icon: "el-icon-Search"
      },
      {
        name: "\u56E2\u961F\u6210\u5458",
        key: "teamData",
        icon: "el-icon-User"
      },
      {
        name: "\u77E5\u8BC6\u5E93\u8BBE\u7F6E",
        key: "setUp",
        icon: "el-icon-Setting"
      }
    ];
    watch(
      () => defaultTab.value,
      (newVal) => {
        router.replace({
          path: "",
          query: {
            id,
            type: newVal
          }
        });
      }
    );
    provide("knowDetail", detailData);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InfoMenu = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex" }, _attrs))} data-v-875d1dc1>`);
      _push(ssrRenderComponent(_component_InfoMenu, {
        modelValue: unref(defaultTab),
        "onUpdate:modelValue": ($event) => isRef(defaultTab) ? defaultTab.value = $event : null,
        "menu-list": tabList,
        title: unref(detailData).name,
        "back-path": "/application/layout/kb"
      }, null, _parent));
      _push(`<div class="flex-1 min-w-0 overflow-auto pr-[16px] py-[16px]" data-v-875d1dc1>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-875d1dc1"]]);

export { index as default };
//# sourceMappingURL=index-DQctk9wT.mjs.map
