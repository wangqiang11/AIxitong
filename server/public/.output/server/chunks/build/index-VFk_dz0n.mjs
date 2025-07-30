import { E as ElUpload } from './el-upload-8WlOxHo4.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElDialog } from './index-CzJm6kkT.mjs';
import { _ as __nuxt_component_1 } from './index-DVLwoLV9.mjs';
import { a5 as useAppStore, aM as uploadFile, B as vLoading } from './server.mjs';
import { useSSRContext, defineComponent, shallowRef, ref, watch, nextTick, computed, unref, mergeProps, withCtx, renderSlot, openBlock, createBlock, createVNode, createCommentVNode, withModifiers, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderSlot, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    excludeDomain: {
      type: Boolean,
      default: false
    },
    canClose: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: "100px"
    }
  },
  emits: ["change", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const { getImageUrl } = useAppStore();
    const props = __props;
    const playerRef = shallowRef();
    const visible = ref(false);
    const isClient = ref(false);
    watch(visible, (value2) => {
      if (value2) {
        nextTick(() => {
          var _a;
          (_a = playerRef.value) == null ? void 0 : _a.play();
        });
      } else {
        nextTick(() => {
          var _a;
          (_a = playerRef.value) == null ? void 0 : _a.pause();
        });
      }
    });
    const loading = ref(false);
    const value = computed({
      get() {
        return props.excludeDomain ? getImageUrl(props.modelValue) : props.modelValue;
      },
      set(value2) {
        emits("update:modelValue", value2);
      }
    });
    const uploadRef = shallowRef();
    const handleChange = async ({ raw }) => {
      var _a, _b;
      try {
        loading.value = true;
        const data = await uploadFile("video", { file: raw });
        loading.value = false;
        value.value = props.excludeDomain ? data.url : data.uri;
        emits("change", data.uri);
        (_a = uploadRef.value) == null ? void 0 : _a.clearFiles();
      } catch (error) {
        loading.value = false;
        (_b = uploadRef.value) == null ? void 0 : _b.clearFiles();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElUpload = ElUpload;
      const _component_Icon = _sfc_main$1;
      const _component_icon = _sfc_main$1;
      const _component_el_dialog = ElDialog;
      const _component_video_player = __nuxt_component_1;
      const _directive_loading = vLoading;
      const _cssVars = { style: {
        "--4c5b0256": __props.size
      } };
      if (unref(isClient)) {
        _push(`<div${ssrRenderAttrs(mergeProps(_attrs, _cssVars))} data-v-6025f73c><div class="flex" data-v-6025f73c>`);
        _push(ssrRenderComponent(_component_ElUpload, mergeProps({
          "element-loading-text": "\u4E0A\u4F20\u4E2D...",
          ref_key: "uploadRef",
          ref: uploadRef,
          class: "avatar-uploader flex",
          "show-file-list": false,
          limit: 1,
          "on-change": handleChange,
          "auto-upload": false,
          accept: ".wmv,.avi,.mpg,.mpeg,.3gp,.mov,.mp4,.flv,.rmvb,.mkv"
        }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(loading))), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                if (!unref(value)) {
                  _push2(`<div class="el-upload flex-col bg-fill-lighter" data-v-6025f73c${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "el-icon-Plus",
                    size: 20
                  }, null, _parent2, _scopeId));
                  _push2(`<div class="text-tx-secondary mt-[2px]" data-v-6025f73c${_scopeId}>\u6DFB\u52A0\u89C6\u9891</div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (!!unref(value)) {
                  _push2(`<div class="imgContiner relative" data-v-6025f73c${_scopeId}><div class="border border-solid border-br-light rounded-[6px] relative cursor-pointer" style="${ssrRenderStyle({
                    width: __props.size,
                    height: __props.size
                  })}" data-v-6025f73c${_scopeId}><video class="rounded-lg w-full h-full"${ssrRenderAttr("src", unref(value))} data-v-6025f73c${_scopeId}></video><div class="z-[10px] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full w-5 h-5 flex justify-center items-center bg-[rgba(0,0,0,0.3)]" data-v-6025f73c${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_icon, {
                    name: "el-icon-CaretRight",
                    size: 18,
                    color: "#fff"
                  }, null, _parent2, _scopeId));
                  _push2(`</div></div>`);
                  if (__props.canClose) {
                    _push2(`<div class="icon absolute top-[-10px] right-[-10px] text-tx-secondary" data-v-6025f73c${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_Icon, {
                      size: "20",
                      name: "el-icon-CircleCloseFilled"
                    }, null, _parent2, _scopeId));
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  !unref(value) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "el-upload flex-col bg-fill-lighter"
                  }, [
                    createVNode(_component_Icon, {
                      name: "el-icon-Plus",
                      size: 20
                    }),
                    createVNode("div", { class: "text-tx-secondary mt-[2px]" }, "\u6DFB\u52A0\u89C6\u9891")
                  ])) : createCommentVNode("", true),
                  !!unref(value) ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "imgContiner relative"
                  }, [
                    createVNode("div", {
                      class: "border border-solid border-br-light rounded-[6px] relative cursor-pointer",
                      style: {
                        width: __props.size,
                        height: __props.size
                      }
                    }, [
                      createVNode("video", {
                        class: "rounded-lg w-full h-full",
                        src: unref(value)
                      }, null, 8, ["src"]),
                      createVNode("div", {
                        class: "z-[10px] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full w-5 h-5 flex justify-center items-center bg-[rgba(0,0,0,0.3)]",
                        onClick: withModifiers(($event) => visible.value = true, ["stop"])
                      }, [
                        createVNode(_component_icon, {
                          name: "el-icon-CaretRight",
                          size: 18,
                          color: "#fff"
                        })
                      ], 8, ["onClick"])
                    ], 4),
                    __props.canClose ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "icon absolute top-[-10px] right-[-10px] text-tx-secondary",
                      onClick: withModifiers(($event) => value.value = "", ["stop"])
                    }, [
                      createVNode(_component_Icon, {
                        size: "20",
                        name: "el-icon-CircleCloseFilled"
                      })
                    ], 8, ["onClick"])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ], true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_el_dialog, {
          modelValue: unref(visible),
          "onUpdate:modelValue": ($event) => isRef(visible) ? visible.value = $event : null,
          width: "740px",
          title: "\u89C6\u9891\u9884\u89C8"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_video_player, {
                ref_key: "playerRef",
                ref: playerRef,
                src: unref(value),
                width: "100%",
                height: "450px"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_video_player, {
                  ref_key: "playerRef",
                  ref: playerRef,
                  src: unref(value),
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/upload-video/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6025f73c"]]);

export { __nuxt_component_8 as _ };
//# sourceMappingURL=index-VFk_dz0n.mjs.map
