import { E as ElImage } from './index-C2yEelJa.mjs';
import { _ as __nuxt_component_1 } from './index-DVLwoLV9.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    preview: {
      type: Boolean,
      default: true
    },
    ratio: {
      type: Array,
      default: () => [1, 1]
    },
    alt: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "image"
    },
    src: {
      type: String,
      default: ""
    },
    thumbnail: {
      type: String,
      default: ""
    },
    lazy: {
      type: Boolean,
      default: true
    },
    fit: {
      type: String,
      default: "contain"
    }
  },
  setup(__props) {
    const props = __props;
    const ratioStr = computed(() => {
      const [width, paddingBottom] = props.ratio;
      return `width: 100%;padding-bottom: ${paddingBottom / width * 100}%;`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_image = ElImage;
      const _component_video_player = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: [{ "position": "relative" }, unref(ratioStr)]
      }, _attrs))}><div style="${ssrRenderStyle({ "position": "absolute", "inset": "0px", "user-select": "none" })}">`);
      if (__props.type === "image") {
        _push(ssrRenderComponent(_component_el_image, {
          class: "!block h-[100%]",
          src: __props.thumbnail || __props.src,
          alt: __props.alt || __props.src,
          lazy: __props.lazy,
          fit: __props.fit,
          "preview-src-list": __props.preview ? [__props.src] : []
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_video_player, {
          src: __props.src,
          width: "100%",
          height: "100%",
          controlBtns: ["audioTrack", "quality", "volume", "fullScreen"]
        }, null, _parent));
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/aspect-ratio/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=index-D8NbhMns.mjs.map
