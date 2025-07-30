import { a as useTooltipContentProps, E as ElTooltip } from './index-L-VTEUEA.mjs';
import { defineComponent, shallowRef, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { useEventListener } from '@vueuse/core';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    ...useTooltipContentProps,
    teleported: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: "top"
    },
    overflowType: {
      type: String,
      default: "ellipsis"
    },
    line: {
      type: Number,
      default: 1
    }
  },
  setup(__props) {
    const props = __props;
    const textRef = shallowRef();
    const disabled = ref(false);
    useEventListener(textRef, "mouseenter", () => {
      var _a, _b, _c, _d;
      if (props.disabled) {
        disabled.value = true;
        return;
      }
      if (((_a = textRef.value) == null ? void 0 : _a.scrollWidth) > ((_b = textRef.value) == null ? void 0 : _b.offsetWidth) || ((_c = textRef.value) == null ? void 0 : _c.scrollHeight) > ((_d = textRef.value) == null ? void 0 : _d.offsetHeight)) {
        disabled.value = false;
      } else {
        disabled.value = true;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tooltip = ElTooltip;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-tooltip" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_tooltip, mergeProps(props, {
        "popper-class": "overflow-tooltip-popper whitespace-pre-wrap",
        disabled: unref(disabled)
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overflow-text line-clamp-1" style="${ssrRenderStyle({ textOverflow: __props.overflowType, "-webkit-line-clamp": __props.line })}"${_scopeId}>${ssrInterpolate(_ctx.content)}</div>`);
          } else {
            return [
              createVNode("div", {
                ref_key: "textRef",
                ref: textRef,
                class: "overflow-text line-clamp-1",
                style: { textOverflow: __props.overflowType, "-webkit-line-clamp": __props.line }
              }, toDisplayString(_ctx.content), 5)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overflow-tooltip/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=index-L3E_sDO1.mjs.map
