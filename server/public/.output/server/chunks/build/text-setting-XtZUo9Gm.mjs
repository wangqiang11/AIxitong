import { a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElSelect, a as ElOption } from './index-CUhOTuS-.mjs';
import { E as ElInputNumber } from './el-input-number-DH6NTUUv.mjs';
import { E as ElColorPicker } from './el-color-picker-BpaTgxgG.mjs';
import { a5 as useAppStore, A as feedback, E as ElInput } from './server.mjs';
import { defineComponent, withCtx, unref, openBlock, createBlock, Fragment, renderList, createVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { useVModels } from '@vueuse/core';
import FontFaceObserver from 'fontfaceobserver';
import '@vue/shared';
import 'lodash-unified';
import 'async-validator';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-0xCxAaTZ.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import './index-iSFXrlfY.mjs';
import './position-DVxxNIGX.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "text-setting",
  __ssrInlineRender: true,
  props: {
    font: {},
    fontSize: {},
    fontColor: {},
    strokeColor: {}
  },
  emits: ["update:font", "update:fontSize", "update:fontColor", "update:strokeColor"],
  setup(__props, { emit: __emit }) {
    const appStore = useAppStore();
    const props = __props;
    const emit = __emit;
    const {
      font: fontModel,
      fontSize: fontSizeModel,
      fontColor: fontColorModel,
      strokeColor: strokeColorModel
    } = useVModels(props, emit);
    const fontFamilyChange = async (font) => {
      feedback.loading("\u6B63\u5728\u52A0\u8F7D\u5B57\u4F53\u4E2D\uFF0C\u8BF7\u7A0D\u7B49...");
      try {
        await new FontFaceObserver(font).load(null, 100 * 1e3);
        fontModel.value = font;
      } catch (error) {
        console.log(error);
        feedback.msgError("\u5B57\u4F53\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
      } finally {
        feedback.closeLoading();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form_item = ElFormItem;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_el_input_number = ElInputNumber;
      const _component_el_color_picker = ElColorPicker;
      const _component_el_input = ElInput;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_el_form_item, { label: "\u8BBE\u7F6E\u5B57\u4F53" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_select, {
              class: "w-full",
              "model-value": unref(fontModel),
              onChange: fontFamilyChange
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(appStore).fontList, (item) => {
                    _push3(ssrRenderComponent(_component_el_option, {
                      key: item.code,
                      label: item.name,
                      value: item.code
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(appStore).fontList, (item) => {
                      return openBlock(), createBlock(_component_el_option, {
                        key: item.code,
                        label: item.name,
                        value: item.code
                      }, null, 8, ["label", "value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_select, {
                class: "w-full",
                "model-value": unref(fontModel),
                onChange: fontFamilyChange
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(appStore).fontList, (item) => {
                    return openBlock(), createBlock(_component_el_option, {
                      key: item.code,
                      label: item.name,
                      value: item.code
                    }, null, 8, ["label", "value"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["model-value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_form_item, { label: "\u5B57\u4F53\u5927\u5C0F" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_input_number, {
              modelValue: unref(fontSizeModel),
              "onUpdate:modelValue": ($event) => isRef(fontSizeModel) ? fontSizeModel.value = $event : null,
              min: 20,
              max: 160,
              "controls-position": "right"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_input_number, {
                modelValue: unref(fontSizeModel),
                "onUpdate:modelValue": ($event) => isRef(fontSizeModel) ? fontSizeModel.value = $event : null,
                min: 20,
                max: 160,
                "controls-position": "right"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_form_item, { label: "\u5B57\u4F53\u989C\u8272" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_color_picker, {
              modelValue: unref(fontColorModel),
              "onUpdate:modelValue": ($event) => isRef(fontColorModel) ? fontColorModel.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_input, {
              class: "flex-1 ml-[10px]",
              modelValue: unref(fontColorModel),
              "onUpdate:modelValue": ($event) => isRef(fontColorModel) ? fontColorModel.value = $event : null,
              readonly: ""
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-1" }, [
                createVNode(_component_el_color_picker, {
                  modelValue: unref(fontColorModel),
                  "onUpdate:modelValue": ($event) => isRef(fontColorModel) ? fontColorModel.value = $event : null
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_el_input, {
                  class: "flex-1 ml-[10px]",
                  modelValue: unref(fontColorModel),
                  "onUpdate:modelValue": ($event) => isRef(fontColorModel) ? fontColorModel.value = $event : null,
                  readonly: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_form_item, { label: "\u63CF\u8FB9\u989C\u8272" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_color_picker, {
              modelValue: unref(strokeColorModel),
              "onUpdate:modelValue": ($event) => isRef(strokeColorModel) ? strokeColorModel.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_input, {
              class: "flex-1 ml-[10px]",
              modelValue: unref(strokeColorModel),
              "onUpdate:modelValue": ($event) => isRef(strokeColorModel) ? strokeColorModel.value = $event : null,
              readonly: ""
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-1" }, [
                createVNode(_component_el_color_picker, {
                  modelValue: unref(strokeColorModel),
                  "onUpdate:modelValue": ($event) => isRef(strokeColorModel) ? strokeColorModel.value = $event : null
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_el_input, {
                  class: "flex-1 ml-[10px]",
                  modelValue: unref(strokeColorModel),
                  "onUpdate:modelValue": ($event) => isRef(strokeColorModel) ? strokeColorModel.value = $event : null,
                  readonly: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/_components/design-left/text-setting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=text-setting-XtZUo9Gm.mjs.map
