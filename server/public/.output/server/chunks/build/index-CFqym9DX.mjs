import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    thumbnail: { default: "" },
    image: { default: "" }
  },
  emits: ["refresh", "on-click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const width = ref(350);
    const height = ref("400px");
    const loading = ref(true);
    const error = ref("");
    const onload = () => {
      const image = new Image();
      image.onload = () => {
        emit("refresh");
        loading.value = false;
        width.value = image.width;
        height.value = image.height + "px";
      };
      image.onerror = () => {
        error.value = "\u52A0\u8F7D\u5931\u8D25";
      };
      image.src = props.thumbnail || props.image;
    };
    onload();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["rounded-[12px] relative image-cover", { ld: !unref(loading) }],
        style: {
          "--image-width": unref(width),
          "--image-height": unref(height),
          background: `url(${_ctx.thumbnail || _ctx.image}) center center / cover no-repeat`
        }
      }, _attrs))} data-v-d58c4008></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/image-cover/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ImageCover = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d58c4008"]]);

export { ImageCover as I };
//# sourceMappingURL=index-CFqym9DX.mjs.map
