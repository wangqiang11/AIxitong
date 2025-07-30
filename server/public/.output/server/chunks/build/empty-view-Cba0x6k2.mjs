import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { c as create_record_null } from './create_record_null-C_UPv5do.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col w-full items-center justify-center py-[100px] bg-body" }, _attrs))}><img class="w-[120px] h-[120px]"${ssrRenderAttr("src", create_record_null)} alt=""><div class="my-[16px] font-medium">\u751F\u6210\u7ED3\u679C\u4F1A\u5728\u663E\u793A\u8FD9</div><div class="text-tx-regular text-sm"> \u5728\u5DE6\u4FA7\u586B\u597D\u5FC5\u8981\u7684\u4FE1\u606F\uFF0C \u70B9\u51FB\u3010\u751F\u6210\u3011\u6309\u94AE\uFF0C\u9759\u5F85\u751F\u6210\u7ED3\u679C\uFF0C\u4E00\u822C\u572830\u79D2\u5185\u641E\u5B9A </div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mind_map/component/empty-view.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EmptyView = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { EmptyView as default };
//# sourceMappingURL=empty-view-Cba0x6k2.mjs.map
