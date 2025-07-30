import { E as ElDialog } from './index-CzJm6kkT.mjs';
import { d as ElButton } from './server.mjs';
import { defineComponent, ref, provide, useSSRContext, nextTick, mergeProps, createSlots, withCtx, createTextVNode, toDisplayString, renderSlot, createVNode, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = defineComponent({
  props: {
    title: {
      // 弹窗标题
      type: String,
      default: ""
    },
    content: {
      // 弹窗内容
      type: String,
      default: ""
    },
    confirmButtonText: {
      // 确认按钮内容
      type: [String, Boolean],
      default: "\u786E\u5B9A"
    },
    cancelButtonText: {
      // 取消按钮内容
      type: [String, Boolean],
      default: "\u53D6\u6D88"
    },
    width: {
      // 弹窗的宽度
      type: String,
      default: "400px"
    },
    disabled: {
      // 是否禁用
      type: Boolean,
      default: false
    },
    async: {
      // 是否开启异步关闭
      type: Boolean,
      default: false
    },
    clickModalClose: {
      // 点击遮罩层关闭对话窗口
      type: Boolean,
      default: false
    },
    center: {
      // 是否居中布局
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ""
    },
    interceptClose: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: true
    }
  },
  emits: ["confirm", "cancel", "close", "open", "interceptClose"],
  setup(props, { emit }) {
    const visible = ref(false);
    const handleEvent = (type) => {
      emit(type);
      if (!props.async || type === "cancel") {
        close();
      }
    };
    const close = () => {
      visible.value = false;
      nextTick(() => {
        emit("close");
      });
    };
    const open = () => {
      if (props.disabled) {
        return;
      }
      emit("open");
      visible.value = true;
    };
    const handleClose = (done) => {
      if (props.interceptClose) {
        emit("interceptClose");
      } else {
        done();
      }
    };
    provide("visible", visible);
    return {
      visible,
      handleEvent,
      close,
      open,
      handleClose
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_dialog = ElDialog;
  const _component_el_button = ElButton;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dialog" }, _attrs))} data-v-0e1cff40><div class="dialog__trigger" data-v-0e1cff40>`);
  ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_el_dialog, {
    modelValue: _ctx.visible,
    "onUpdate:modelValue": ($event) => _ctx.visible = $event,
    "custom-class": _ctx.customClass,
    center: _ctx.center,
    "append-to-body": _ctx.appendToBody,
    width: _ctx.width,
    "close-on-click-modal": _ctx.clickModalClose,
    "before-close": _ctx.handleClose,
    onClosed: _ctx.close
  }, createSlots({
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
          _push2(`<div class="dialog-footer" data-v-0e1cff40${_scopeId}>`);
          if (_ctx.cancelButtonText) {
            _push2(ssrRenderComponent(_component_el_button, {
              onClick: ($event) => _ctx.handleEvent("cancel")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.cancelButtonText)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.cancelButtonText), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          if (_ctx.confirmButtonText) {
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              onClick: ($event) => _ctx.handleEvent("confirm")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.confirmButtonText)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.confirmButtonText), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        }, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "footer", {}, () => [
            createVNode("div", { class: "dialog-footer" }, [
              _ctx.cancelButtonText ? (openBlock(), createBlock(_component_el_button, {
                key: 0,
                onClick: ($event) => _ctx.handleEvent("cancel")
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.cancelButtonText), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true),
              _ctx.confirmButtonText ? (openBlock(), createBlock(_component_el_button, {
                key: 1,
                type: "primary",
                onClick: ($event) => _ctx.handleEvent("confirm")
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.confirmButtonText), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true)
            ])
          ], true)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push2(`${ssrInterpolate(_ctx.content)}`);
        }, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.content), 1)
          ], true)
        ];
      }
    }),
    _: 2
  }, [
    _ctx.title ? {
      name: "header",
      fn: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ];
        }
      }),
      key: "0"
    } : void 0
  ]), _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popup/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Popup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0e1cff40"]]);

export { Popup as P };
//# sourceMappingURL=index-BKj4TrcW.mjs.map
