import { useSSRContext, ref, watch, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    placeholder: String,
    maxlength: String,
    error: String,
    rows: String,
    customStyle: Object,
    contentStyle: Object,
    showWordLimit: Boolean,
    modelValue: String
  },
  emits: ["update:modelValue", "focus"],
  setup(__props, { emit: __emit }) {
    var _a;
    const props = __props;
    const textAreaValue = ref(props.modelValue);
    const isFocus = ref(false);
    const lengthText = ref(((_a = props.modelValue) == null ? void 0 : _a.length) || 0);
    watch(
      () => props.modelValue,
      (val) => {
        textAreaValue.value = val;
        lengthText.value = val.length;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["l-textarea", {
          error: __props.error,
          focus: isFocus.value
        }],
        "data-error": __props.error,
        style: __props.customStyle
      }, _attrs))} data-v-2e3864ec><textarea class="l-textarea__inner"${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("rows", __props.rows)}${ssrRenderAttr("maxlength", __props.maxlength)} style="${ssrRenderStyle(__props.contentStyle)}" data-v-2e3864ec>${ssrInterpolate(textAreaValue.value)}</textarea>`);
      if (__props.showWordLimit) {
        _push(`<div class="l-textarea-length-maxlength" data-v-2e3864ec><span data-v-2e3864ec>${ssrInterpolate(lengthText.value)}</span> / <span data-v-2e3864ec>${ssrInterpolate(__props.maxlength)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "length-suffix", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/l-textarea/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2e3864ec"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=index-BS4hxwV8.mjs.map
