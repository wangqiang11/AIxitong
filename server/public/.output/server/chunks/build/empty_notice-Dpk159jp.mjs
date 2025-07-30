import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { a as useRouter, a5 as useAppStore, bN as ElBadge } from './server.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, openBlock, createBlock, toDisplayString, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: {},
    size: {}
  },
  emits: ["read"],
  setup(__props, { emit: __emit }) {
    useRouter();
    const appStore = useAppStore();
    const worksMap = {
      4: { name: "\u7ED8\u753B", bg: "#EAF3FF", color: "#4A92FF", link: "/draw/" },
      5: { name: "\u97F3\u4E50", bg: "#FFF1E4", color: "#FF8F1F", link: "/music" },
      6: { name: "\u89C6\u9891", bg: "#FFF0F0", color: "#FA5151", link: "/video" },
      7: { name: "\u667A\u80FD\u4F53", bg: "#E7FFF7", color: "#00B578", link: "/application/layout/robot" }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_badge = ElBadge;
      const _component_ElImage = ElImage;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex items-stretch py-[20px] cursor-pointer", [_ctx.size === "large" ? "large" : "default"]]
      }, _attrs))} data-v-e4de831e>`);
      _push(ssrRenderComponent(_component_el_badge, {
        class: "flex-none",
        "is-dot": !_ctx.data.read,
        offset: [0, 2]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.data.notice_type === 3) {
              _push2(ssrRenderComponent(_component_ElImage, {
                class: ["w-[40px] h-[40px] rounded-full", [
                  _ctx.size === "large" ? "w-[60px] h-[60px]" : "w-[40px] h-[40px]"
                ]],
                src: _ctx.data.avatar
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="${ssrRenderClass([[
                _ctx.size === "large" ? "w-[60px] h-[60px] text-xl" : "w-[40px] h-[40px] text-sm"
              ], "flex justify-center items-center rounded-full"])}" style="${ssrRenderStyle({
                background: worksMap[_ctx.data.notice_type].bg,
                color: worksMap[_ctx.data.notice_type].color
              })}" data-v-e4de831e${_scopeId}>${ssrInterpolate(worksMap[_ctx.data.notice_type].name)}</div>`);
            }
          } else {
            return [
              _ctx.data.notice_type === 3 ? (openBlock(), createBlock(_component_ElImage, {
                key: 0,
                class: ["w-[40px] h-[40px] rounded-full", [
                  _ctx.size === "large" ? "w-[60px] h-[60px]" : "w-[40px] h-[40px]"
                ]],
                src: _ctx.data.avatar
              }, null, 8, ["class", "src"])) : (openBlock(), createBlock("div", {
                key: 1,
                class: ["flex justify-center items-center rounded-full", [
                  _ctx.size === "large" ? "w-[60px] h-[60px] text-xl" : "w-[40px] h-[40px] text-sm"
                ]],
                style: {
                  background: worksMap[_ctx.data.notice_type].bg,
                  color: worksMap[_ctx.data.notice_type].color
                }
              }, toDisplayString(worksMap[_ctx.data.notice_type].name), 7))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex-1 ml-[15px]" data-v-e4de831e><div class="flex justify-between items-center" data-v-e4de831e><div class="${ssrRenderClass([[_ctx.size === "large" ? "" : "line-clamp-1 w-[120px]"], "text-tx-primary text-base"])}" data-v-e4de831e>${ssrInterpolate(_ctx.data.nickname)}</div><div class="flex items-center text-tx-secondary text-xs" data-v-e4de831e><span class="ml-2" data-v-e4de831e>${ssrInterpolate(_ctx.data.create_time)}</span></div></div><div class="${ssrRenderClass([[_ctx.size === "large" ? "" : "line-clamp-2"], "mt-[12px] text-tx-primary text-base"])}" data-v-e4de831e>`);
      if (_ctx.data.notice_type === 3) {
        _push(`<!--[--><span class="text-tx-secondary" data-v-e4de831e>\u5728</span> ${ssrInterpolate(_ctx.data.robot)} <span class="text-tx-secondary" data-v-e4de831e>\u53CD\u9988\uFF1A</span> ${ssrInterpolate(_ctx.data.content)}<!--]-->`);
      } else {
        _push(`<!--[--><span class="text-tx-secondary" data-v-e4de831e>\u5206\u4EAB</span> ${ssrInterpolate(_ctx.data.records_name)} <span class="text-tx-secondary" data-v-e4de831e>\u81F3\u5E7F\u573A</span><span class="${ssrRenderClass([
          _ctx.data.verify_status === 1 ? "text-success" : "text-error"
        ])}" data-v-e4de831e>${ssrInterpolate(_ctx.data.verify_status === 1 ? "\u5BA1\u6838\u6210\u529F" : "\u5BA1\u6838\u5931\u8D25")}</span>`);
        if (_ctx.data.verify_status == 2) {
          _push(`<span data-v-e4de831e>\uFF0C\u539F\u56E0\uFF1A${ssrInterpolate(_ctx.data.verify_result)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.data.verify_status == 1 && _ctx.data.balance > 0) {
          _push(`<span data-v-e4de831e> \uFF0C \u83B7\u5F97 ${ssrInterpolate(_ctx.data.balance)} ${ssrInterpolate(unref(appStore).getTokenUnit)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/notification-card/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e4de831e"]]);
const EmptyNotice = "" + buildAssetsURL("empty_notice.CTT5hptv.png");

export { EmptyNotice as E, __nuxt_component_2 as _ };
//# sourceMappingURL=empty_notice-Dpk159jp.mjs.map
