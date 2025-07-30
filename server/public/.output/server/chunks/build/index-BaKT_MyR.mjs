import { E as ElUpload } from './el-upload-8WlOxHo4.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { a5 as useAppStore, aU as uploadImage, B as vLoading } from './server.mjs';
import { useSSRContext, defineComponent, ref, computed, shallowRef, unref, mergeProps, withCtx, renderSlot, openBlock, createBlock, createVNode, createCommentVNode, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
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
    const loading = ref(false);
    const isClient = ref(false);
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
        const data = await uploadImage({ file: raw });
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
      const _directive_loading = vLoading;
      if (unref(isClient)) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-ba6ae763><div${ssrRenderAttrs(mergeProps({ "element-loading-text": "\u4E0A\u4F20\u4E2D..." }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(loading))))} data-v-ba6ae763>`);
        _push(ssrRenderComponent(_component_ElUpload, {
          ref_key: "uploadRef",
          ref: uploadRef,
          class: "avatar-uploader",
          "show-file-list": false,
          limit: 1,
          "on-change": handleChange,
          "auto-upload": false,
          accept: ".jpg,.png,.gif,.jpeg"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                if (!unref(value)) {
                  _push2(`<div class="el-upload flex-col bg-fill-lighter" data-v-ba6ae763${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "el-icon-Plus",
                    size: 20
                  }, null, _parent2, _scopeId));
                  _push2(`<div class="text-tx-secondary mt-[2px]" data-v-ba6ae763${_scopeId}>\u6DFB\u52A0\u56FE\u7247</div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (!!unref(value)) {
                  _push2(`<div class="imgContiner relative" data-v-ba6ae763${_scopeId}><div class="border border-solid border-br-light rounded-[6px] relative cursor-pointer" style="${ssrRenderStyle({
                    width: __props.size,
                    height: __props.size
                  })}" data-v-ba6ae763${_scopeId}><img class="rounded-lg w-full h-full"${ssrRenderAttr("src", unref(value))} data-v-ba6ae763${_scopeId}></div>`);
                  if (__props.canClose) {
                    _push2(`<div class="icon absolute top-[-10px] right-[-10px] text-tx-secondary" data-v-ba6ae763${_scopeId}>`);
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
                    createVNode("div", { class: "text-tx-secondary mt-[2px]" }, "\u6DFB\u52A0\u56FE\u7247")
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
                      createVNode("img", {
                        class: "rounded-lg w-full h-full",
                        src: unref(value)
                      }, null, 8, ["src"])
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
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/uploadImg/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ba6ae763"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=index-BaKT_MyR.mjs.map
