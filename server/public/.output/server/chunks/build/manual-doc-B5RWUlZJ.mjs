import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElInput } from './server.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
import '@vue/shared';
import 'lodash-unified';
import 'async-validator';
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
  __name: "manual-doc",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formData = useVModel(props, "modelValue", emit);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _component_el_input = ElInput;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "manual-import" }, _attrs))}><div class="py-4 flex flex-col">`);
      _push(ssrRenderComponent(_component_ElForm, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex-1 min-w-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(formData).question,
                    "onUpdate:modelValue": ($event) => unref(formData).question = $event,
                    placeholder: `\u8BF7\u8F93\u5165\u6587\u672C\u5185\u5BB9\uFF0C10000\u4E2A\u5B57\u4EE5\u5185\u3002`,
                    type: "textarea",
                    resize: "none",
                    rows: 15,
                    maxlength: "10000"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex-1 min-w-0" }, [
                      createVNode(_component_el_input, {
                        modelValue: unref(formData).question,
                        "onUpdate:modelValue": ($event) => unref(formData).question = $event,
                        placeholder: `\u8BF7\u8F93\u5165\u6587\u672C\u5185\u5BB9\uFF0C10000\u4E2A\u5B57\u4EE5\u5185\u3002`,
                        type: "textarea",
                        resize: "none",
                        rows: 15,
                        maxlength: "10000"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElFormItem, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex-1 min-w-0" }, [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).question,
                      "onUpdate:modelValue": ($event) => unref(formData).question = $event,
                      placeholder: `\u8BF7\u8F93\u5165\u6587\u672C\u5185\u5BB9\uFF0C10000\u4E2A\u5B57\u4EE5\u5185\u3002`,
                      type: "textarea",
                      resize: "none",
                      rows: 15,
                      maxlength: "10000"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/_components/import/manual-doc.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=manual-doc-B5RWUlZJ.mjs.map
