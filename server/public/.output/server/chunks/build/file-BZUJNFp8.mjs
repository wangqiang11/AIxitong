import { a as ElImageViewer, E as ElImage } from './index-C2yEelJa.mjs';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { useSSRContext, defineComponent, ref, shallowRef, computed, watch, nextTick, unref, isRef, withCtx, createVNode, resolveComponent } from 'vue';
import { E as ElDialog } from './index-CzJm6kkT.mjs';
import { _ as __nuxt_component_1 } from './index-DVLwoLV9.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "preview",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "image"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const playerRef = shallowRef();
    const visible = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const handleClose = () => {
      emit("update:modelValue", false);
    };
    const previewLists = ref([]);
    watch(
      () => props.modelValue,
      (value) => {
        if (value) {
          nextTick(() => {
            var _a;
            previewLists.value = [props.url];
            (_a = playerRef.value) == null ? void 0 : _a.play();
          });
        } else {
          nextTick(() => {
            var _a;
            previewLists.value = [];
            (_a = playerRef.value) == null ? void 0 : _a.pause();
          });
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_image_viewer = ElImageViewer;
      const _component_el_dialog = ElDialog;
      const _component_video_player = __nuxt_component_1;
      if (__props.modelValue) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        if (__props.type == "image") {
          _push(`<div>`);
          if (unref(previewLists).length) {
            _push(ssrRenderComponent(_component_el_image_viewer, {
              "url-list": unref(previewLists),
              "hide-on-click-modal": "",
              onClose: handleClose
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.type == "video" || __props.type == "audio") {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_el_dialog, {
            modelValue: unref(visible),
            "onUpdate:modelValue": ($event) => isRef(visible) ? visible.value = $event : null,
            width: "740px",
            title: `${__props.type == "video" ? "\u89C6\u9891\u9884\u89C8" : "\u97F3\u9891\u9884\u89C8"}`,
            "before-close": handleClose
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_video_player, {
                  ref_key: "playerRef",
                  ref: playerRef,
                  src: __props.url,
                  width: "100%",
                  height: "450px"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_video_player, {
                    ref_key: "playerRef",
                    ref: playerRef,
                    src: __props.url,
                    width: "100%",
                    height: "450px"
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/material/preview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = defineComponent({
  components: {
    Preview: _sfc_main$1
  },
  props: {
    // 图片地址
    uri: {
      type: String
    },
    // 图片尺寸
    fileSize: {
      type: String,
      default: "100px"
    },
    // 文件类型
    type: {
      type: String,
      default: "image"
    },
    fileName: {
      type: String,
      default: ""
    }
  },
  emits: ["close"],
  setup(props, ctx) {
    const show = ref(false);
    return {
      show
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_image = ElImage;
  const _component_icon = _sfc_main$2;
  const _component_Preview = resolveComponent("Preview");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-fa6709ca><div class="file-item relative" style="${ssrRenderStyle({ height: _ctx.fileSize, width: _ctx.fileSize })}" data-v-fa6709ca>`);
  if (_ctx.type == "image") {
    _push(ssrRenderComponent(_component_el_image, {
      class: "image",
      fit: "contain",
      src: _ctx.uri
    }, null, _parent));
  } else if (_ctx.type == "video") {
    _push(`<video class="video"${ssrRenderAttr("src", _ctx.uri)} data-v-fa6709ca></video>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.type == "video") {
    _push(`<div class="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full w-5 h-5 flex justify-center items-center bg-[rgba(0,0,0,0.3)] cursor-pointer" data-v-fa6709ca>`);
    _push(ssrRenderComponent(_component_icon, {
      name: "el-icon-CaretRight",
      size: 18,
      color: "#fff"
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.type == "audio") {
    _push(`<div class="audio" data-v-fa6709ca>`);
    _push(ssrRenderComponent(_component_el_image, {
      class: "w-full h-full",
      src: "/src/assets/images/musicIcon.png"
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Preview, {
    url: _ctx.uri,
    modelValue: _ctx.show,
    "onUpdate:modelValue": ($event) => _ctx.show = $event,
    type: _ctx.type
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/material/file.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fa6709ca"]]);

export { __nuxt_component_7 as _, _sfc_main$1 as a };
//# sourceMappingURL=file-BZUJNFp8.mjs.map
