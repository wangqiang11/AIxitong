import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { defineComponent, shallowRef, ref, unref, useSSRContext, nextTick } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cvs-data-item",
  __ssrInlineRender: true,
  props: {
    index: {},
    name: {},
    q: {},
    a: {}
  },
  emits: ["delete", "update:q", "update:a"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const editRef = shallowRef();
    const isEdit = ref(false);
    const handleEdit = async () => {
      isEdit.value = true;
      await nextTick();
      editRef.value.focus();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center"><span class="bg-white px-4 rounded"> #${ssrInterpolate(_ctx.index + 1)}</span><span class="mx-2 text-[#000] flex-1 line-clamp-1">${ssrInterpolate(_ctx.name)}</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "icon-delete text-primary cursor-pointer mr-2",
        name: "el-icon-EditPen",
        onClick: handleEdit
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        class: "icon-delete text-primary cursor-pointer",
        name: "el-icon-Delete",
        onClick: ($event) => emit("delete")
      }, null, _parent));
      _push(`</div><div class="mt-2"><div class="whitespace-pre-line"> q: <span${ssrRenderAttr("contenteditable", unref(isEdit))}>${ssrInterpolate(_ctx.q)}</span></div><div class="whitespace-pre-line"> a: <span${ssrRenderAttr("contenteditable", unref(isEdit))}>${ssrInterpolate(_ctx.a)}</span></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/_components/import/cvs-data-item.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cvs-data-item-N7r8ecjG.mjs.map
