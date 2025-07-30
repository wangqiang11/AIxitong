import { E as ElTooltip } from './index-L-VTEUEA.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElInput, d as ElButton, bq as promotion_default, A as feedback } from './server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, nextTick } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { useImageEditor } from './useImageEditor-FUvZEPjo.mjs';
import { E as ElDialog } from './index-CzJm6kkT.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import '@popperjs/core';
import '@vue/shared';
import 'lodash-unified';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'lodash-es';
import 'weixin-js-sdk';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './DrawingTool-DEHEFSZT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "image-editor",
  __ssrInlineRender: true,
  props: {
    drawFunc: { type: Function }
  },
  emits: ["success"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const {
      initCanvas,
      changeTool,
      currentTool,
      onMouseDown,
      onMouseMove,
      onMouseUp,
      captureCombinedSelections,
      undo,
      clearState
    } = useImageEditor({
      async onData(result) {
        try {
          console.log("result", result);
          await props.drawFunc({
            ...drawRecordItem.value,
            image_mask: result,
            prompt: inputContent.value
          }, "inpaint");
          emit("success");
          visible.value = false;
        } finally {
          isLoading.value = false;
        }
      }
    });
    const emit = __emit;
    const visible = ref(false);
    const inputContent = ref("");
    const isLoading = ref(false);
    const drawRecordItem = ref();
    const handleSubmit = () => {
      if (inputContent.value.trim() === "") {
        feedback.msgError("\u8BF7\u8F93\u5165\u91CD\u7ED8\u63CF\u8FF0");
        return;
      }
      isLoading.value = true;
      captureCombinedSelections();
    };
    const open = async (draw) => {
      visible.value = true;
      drawRecordItem.value = draw;
      await nextTick();
      initCanvas("locality-canvas", draw.image);
    };
    __expose({ open });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tooltip = ElTooltip;
      const _component_Icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "locality-draw-popup" }, _attrs))} data-v-2043d927>`);
      _push(ssrRenderComponent(unref(ElDialog), {
        modelValue: unref(visible),
        "onUpdate:modelValue": ($event) => isRef(visible) ? visible.value = $event : null,
        width: "980px",
        class: "!rounded-[12px]",
        center: true,
        draggable: true,
        "destroy-on-close": true,
        "close-on-click-modal": false,
        onClose: unref(clearState)
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full text-left" data-v-2043d927${_scopeId}><div class="text-base font-medium" data-v-2043d927${_scopeId}>MJ \u5C40\u90E8\u91CD\u7ED8 \u8BBE\u7F6E</div><div class="text-xs text-tx-secondary" data-v-2043d927${_scopeId}>\u5C40\u90E8\u91CD\u7ED8</div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full text-left" }, [
                createVNode("div", { class: "text-base font-medium" }, "MJ \u5C40\u90E8\u91CD\u7ED8 \u8BBE\u7F6E"),
                createVNode("div", { class: "text-xs text-tx-secondary" }, "\u5C40\u90E8\u91CD\u7ED8")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-center" data-v-2043d927${_scopeId}><div class="w-[940px] h-[500px]" data-v-2043d927${_scopeId}><canvas id="locality-canvas" width="940" height="500" data-v-2043d927${_scopeId}></canvas></div></div><div class="dialog-footer flex items-center mt-6 mb-4 px-10 cursor-pointer" data-v-2043d927${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_tooltip, {
              effect: "dark",
              content: "\u77E9\u5F62\u5DE5\u5177",
              placement: "top"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass([[unref(currentTool) === "rect" ? "bg-primary text-white" : ""], "flex justify-center items-center w-[43px] h-[43px] bg-page rounded-full mr-2 hover:bg-primary hover:text-white"])}" data-v-2043d927${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "local-icon-rect",
                    size: "24"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: ["flex justify-center items-center w-[43px] h-[43px] bg-page rounded-full mr-2 hover:bg-primary hover:text-white", [unref(currentTool) === "rect" ? "bg-primary text-white" : ""]],
                      onClick: ($event) => unref(changeTool)("RECT")
                    }, [
                      createVNode(_component_Icon, {
                        name: "local-icon-rect",
                        size: "24"
                      })
                    ], 10, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_tooltip, {
              effect: "dark",
              content: "\u5957\u7D22\u5DE5\u5177",
              placement: "top"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass([[unref(currentTool) === "lasso" ? "bg-primary text-white" : ""], "flex justify-center items-center w-[43px] h-[43px] bg-page rounded-full mr-2 hover:bg-primary hover:text-white"])}" data-v-2043d927${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "local-icon-lasso",
                    size: "24"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: ["flex justify-center items-center w-[43px] h-[43px] bg-page rounded-full mr-2 hover:bg-primary hover:text-white", [unref(currentTool) === "lasso" ? "bg-primary text-white" : ""]],
                      onClick: ($event) => unref(changeTool)("LASSO")
                    }, [
                      createVNode(_component_Icon, {
                        name: "local-icon-lasso",
                        size: "24"
                      })
                    ], 10, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_tooltip, {
              effect: "dark",
              content: "\u8FD4\u56DE\u4E0A\u4E00\u6B65",
              placement: "top"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-center items-center w-[43px] h-[43px] bg-page rounded-full mr-2 hover:bg-primary hover:text-white" data-v-2043d927${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "local-icon-back",
                    size: "24"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "flex justify-center items-center w-[43px] h-[43px] bg-page rounded-full mr-2 hover:bg-primary hover:text-white",
                      onClick: unref(undo)
                    }, [
                      createVNode(_component_Icon, {
                        name: "local-icon-back",
                        size: "24"
                      })
                    ], 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-1 items-center" data-v-2043d927${_scopeId}><div class="flex h-full items-end flex-1 rounded-sm overflow-hidden" data-v-2043d927${_scopeId}><div class="flex items-center w-full min-h-full px-[6px] bg-page rounded-full" data-v-2043d927${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ElInput), {
              modelValue: unref(inputContent),
              "onUpdate:modelValue": ($event) => isRef(inputContent) ? inputContent.value = $event : null,
              "input-style": {
                "border-radius": "50px",
                backgroundColor: "var(--el-bg-color-page)"
              },
              class: "min-h-full py-[6px]",
              placeholder: "\u8BF7\u8F93\u5165\u91CD\u7ED8\u63CF\u8FF0 [\u63A8\u8350\u82F1\u6587]",
              type: "textarea",
              autosize: {
                maxRows: 3
              },
              resize: "none"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ElButton), {
              loading: unref(isLoading),
              type: "primary",
              icon: unref(promotion_default),
              circle: true,
              onClick: handleSubmit
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-center" }, [
                createVNode("div", { class: "w-[940px] h-[500px]" }, [
                  createVNode("canvas", {
                    id: "locality-canvas",
                    width: "940",
                    height: "500",
                    onMousedown: unref(onMouseDown),
                    onMousemove: unref(onMouseMove),
                    onMouseup: unref(onMouseUp),
                    onMouseleave: unref(onMouseUp)
                  }, null, 40, ["onMousedown", "onMousemove", "onMouseup", "onMouseleave"])
                ])
              ]),
              createVNode("div", { class: "dialog-footer flex items-center mt-6 mb-4 px-10 cursor-pointer" }, [
                createVNode(_component_el_tooltip, {
                  effect: "dark",
                  content: "\u77E9\u5F62\u5DE5\u5177",
                  placement: "top"
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: ["flex justify-center items-center w-[43px] h-[43px] bg-page rounded-full mr-2 hover:bg-primary hover:text-white", [unref(currentTool) === "rect" ? "bg-primary text-white" : ""]],
                      onClick: ($event) => unref(changeTool)("RECT")
                    }, [
                      createVNode(_component_Icon, {
                        name: "local-icon-rect",
                        size: "24"
                      })
                    ], 10, ["onClick"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_tooltip, {
                  effect: "dark",
                  content: "\u5957\u7D22\u5DE5\u5177",
                  placement: "top"
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: ["flex justify-center items-center w-[43px] h-[43px] bg-page rounded-full mr-2 hover:bg-primary hover:text-white", [unref(currentTool) === "lasso" ? "bg-primary text-white" : ""]],
                      onClick: ($event) => unref(changeTool)("LASSO")
                    }, [
                      createVNode(_component_Icon, {
                        name: "local-icon-lasso",
                        size: "24"
                      })
                    ], 10, ["onClick"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_tooltip, {
                  effect: "dark",
                  content: "\u8FD4\u56DE\u4E0A\u4E00\u6B65",
                  placement: "top"
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "flex justify-center items-center w-[43px] h-[43px] bg-page rounded-full mr-2 hover:bg-primary hover:text-white",
                      onClick: unref(undo)
                    }, [
                      createVNode(_component_Icon, {
                        name: "local-icon-back",
                        size: "24"
                      })
                    ], 8, ["onClick"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex flex-1 items-center" }, [
                  createVNode("div", { class: "flex h-full items-end flex-1 rounded-sm overflow-hidden" }, [
                    createVNode("div", { class: "flex items-center w-full min-h-full px-[6px] bg-page rounded-full" }, [
                      createVNode(unref(ElInput), {
                        modelValue: unref(inputContent),
                        "onUpdate:modelValue": ($event) => isRef(inputContent) ? inputContent.value = $event : null,
                        "input-style": {
                          "border-radius": "50px",
                          backgroundColor: "var(--el-bg-color-page)"
                        },
                        class: "min-h-full py-[6px]",
                        placeholder: "\u8BF7\u8F93\u5165\u91CD\u7ED8\u63CF\u8FF0 [\u63A8\u8350\u82F1\u6587]",
                        type: "textarea",
                        autosize: {
                          maxRows: 3
                        },
                        resize: "none"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(unref(ElButton), {
                        loading: unref(isLoading),
                        type: "primary",
                        icon: unref(promotion_default),
                        circle: true,
                        onClick: handleSubmit
                      }, null, 8, ["loading", "icon"])
                    ])
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/mj/image-editor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ImageEditor = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2043d927"]]);

export { ImageEditor as default };
//# sourceMappingURL=image-editor-CXRfZ5rL.mjs.map
