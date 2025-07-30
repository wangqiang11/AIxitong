import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElSwitch } from './el-switch-lh7eFiXh.mjs';
import { defineComponent, reactive, computed, watch, watchEffect, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { cloneDeep } from 'lodash-es';
import { u as useCanvasStore, T as TextTypes } from './canvas-DJ4hjlD7.mjs';
import _sfc_main$1 from './text-setting-XtZUo9Gm.mjs';
import '@vueuse/core';
import './server.mjs';
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
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import 'async-validator';
import './useAudioPlay-C6V9947w.mjs';
import './file-RP6bCPT_.mjs';
import 'jsdom';
import 'jsdom/lib/jsdom/living/generated/utils';
import 'jsdom/lib/jsdom/utils';
import 'fontfaceobserver';
import './index-CUhOTuS-.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import './el-input-number-DH6NTUUv.mjs';
import './index-iSFXrlfY.mjs';
import './el-color-picker-BpaTgxgG.mjs';
import './position-DVxxNIGX.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "captions",
  __ssrInlineRender: true,
  setup(__props) {
    const canvasStore = useCanvasStore();
    const fontAttr = reactive({
      status: 0,
      fontSize: 64,
      fontFamily: "Alibaba PuHuiTi",
      fill: "#ffffff",
      stroke: ""
    });
    const isActive = computed(() => {
      var _a;
      return ((_a = canvasStore.activeObject) == null ? void 0 : _a.customType) === TextTypes.CAPTIONS;
    });
    const insertCaptions = (val) => {
      var _a, _b;
      if (val) {
        canvasStore.addText("\u6B64\u5904\u662F\u5B57\u5E55", TextTypes.CAPTIONS, fontAttr);
      } else {
        const objects = (_a = canvasStore.canvas) == null ? void 0 : _a.getObjects();
        const currentObject = objects == null ? void 0 : objects.find(
          (item) => item.customType === TextTypes.CAPTIONS
        );
        (_b = canvasStore.canvas) == null ? void 0 : _b.remove(currentObject);
      }
    };
    watch(
      () => canvasStore.activeObject,
      (value) => {
        var _a;
        if (isActive.value) {
          for (const key in fontAttr) {
            fontAttr[key] = (_a = value == null ? void 0 : value.data) == null ? void 0 : _a[key];
          }
        }
      },
      {
        immediate: true
      }
    );
    const objectKeys = ["fontSize", "fontFamily", "fill", "stroke"];
    watch(
      () => fontAttr,
      (value) => {
        var _a, _b, _c;
        if (!isActive.value) {
          return;
        }
        for (const key in fontAttr) {
          if (objectKeys.includes(key)) {
            let item = value[key];
            if (key === "fontSize") {
              item = canvasStore.calcFontSize(item);
            }
            (_a = canvasStore.activeObject) == null ? void 0 : _a.set(key, item);
          }
        }
        const data = cloneDeep(fontAttr);
        (_b = canvasStore.activeObject) == null ? void 0 : _b.set("data", data);
        (_c = canvasStore.canvas) == null ? void 0 : _c.renderAll();
      },
      {
        deep: true
      }
    );
    const objectRemoved = () => {
      var _a;
      const objects = (_a = canvasStore.canvas) == null ? void 0 : _a.getObjects();
      const currentObject = objects == null ? void 0 : objects.find(
        (item) => item.customType === TextTypes.CAPTIONS
      );
      if (currentObject) {
        fontAttr.status = 1;
      } else {
        fontAttr.status = 0;
      }
    };
    watchEffect(() => {
      var _a;
      if (canvasStore.canvas) {
        (_a = canvasStore.canvas) == null ? void 0 : _a.on("object:removed", objectRemoved);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_scrollbar = ElScrollbar;
      const _component_el_form = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _component_el_switch = ElSwitch;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "avatar-select h-full flex flex-col" }, _attrs))}><div class="flex-1 min-h-0"><div class="h-full">`);
      _push(ssrRenderComponent(_component_el_scrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-main"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_form, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElFormItem, { label: "\u5B57\u5E55\u663E\u793A" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_switch, {
                          modelValue: unref(fontAttr).status,
                          "onUpdate:modelValue": ($event) => unref(fontAttr).status = $event,
                          "inline-prompt": "",
                          "active-value": 1,
                          "inactive-value": 0,
                          "active-text": "\u5F00\u542F",
                          "inactive-text": "\u5173\u95ED",
                          onChange: insertCaptions
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_switch, {
                            modelValue: unref(fontAttr).status,
                            "onUpdate:modelValue": ($event) => unref(fontAttr).status = $event,
                            "inline-prompt": "",
                            "active-value": 1,
                            "inactive-value": 0,
                            "active-text": "\u5F00\u542F",
                            "inactive-text": "\u5173\u95ED",
                            onChange: insertCaptions
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    font: unref(fontAttr).fontFamily,
                    "onUpdate:font": ($event) => unref(fontAttr).fontFamily = $event,
                    "font-size": unref(fontAttr).fontSize,
                    "onUpdate:fontSize": ($event) => unref(fontAttr).fontSize = $event,
                    "font-color": unref(fontAttr).fill,
                    "onUpdate:fontColor": ($event) => unref(fontAttr).fill = $event,
                    "stroke-color": unref(fontAttr).stroke,
                    "onUpdate:strokeColor": ($event) => unref(fontAttr).stroke = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElFormItem, { label: "\u5B57\u5E55\u663E\u793A" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_switch, {
                          modelValue: unref(fontAttr).status,
                          "onUpdate:modelValue": ($event) => unref(fontAttr).status = $event,
                          "inline-prompt": "",
                          "active-value": 1,
                          "inactive-value": 0,
                          "active-text": "\u5F00\u542F",
                          "inactive-text": "\u5173\u95ED",
                          onChange: insertCaptions
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$1, {
                      font: unref(fontAttr).fontFamily,
                      "onUpdate:font": ($event) => unref(fontAttr).fontFamily = $event,
                      "font-size": unref(fontAttr).fontSize,
                      "onUpdate:fontSize": ($event) => unref(fontAttr).fontSize = $event,
                      "font-color": unref(fontAttr).fill,
                      "onUpdate:fontColor": ($event) => unref(fontAttr).fill = $event,
                      "stroke-color": unref(fontAttr).stroke,
                      "onUpdate:strokeColor": ($event) => unref(fontAttr).stroke = $event
                    }, null, 8, ["font", "onUpdate:font", "font-size", "onUpdate:fontSize", "font-color", "onUpdate:fontColor", "stroke-color", "onUpdate:strokeColor"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-main" }, [
                createVNode(_component_el_form, null, {
                  default: withCtx(() => [
                    createVNode(_component_ElFormItem, { label: "\u5B57\u5E55\u663E\u793A" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_switch, {
                          modelValue: unref(fontAttr).status,
                          "onUpdate:modelValue": ($event) => unref(fontAttr).status = $event,
                          "inline-prompt": "",
                          "active-value": 1,
                          "inactive-value": 0,
                          "active-text": "\u5F00\u542F",
                          "inactive-text": "\u5173\u95ED",
                          onChange: insertCaptions
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$1, {
                      font: unref(fontAttr).fontFamily,
                      "onUpdate:font": ($event) => unref(fontAttr).fontFamily = $event,
                      "font-size": unref(fontAttr).fontSize,
                      "onUpdate:fontSize": ($event) => unref(fontAttr).fontSize = $event,
                      "font-color": unref(fontAttr).fill,
                      "onUpdate:fontColor": ($event) => unref(fontAttr).fill = $event,
                      "stroke-color": unref(fontAttr).stroke,
                      "onUpdate:strokeColor": ($event) => unref(fontAttr).stroke = $event
                    }, null, 8, ["font", "onUpdate:font", "font-size", "onUpdate:fontSize", "font-color", "onUpdate:fontColor", "stroke-color", "onUpdate:strokeColor"])
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/_components/design-left/captions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=captions-DU0Kvo3l.mjs.map
