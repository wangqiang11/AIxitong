import { P as Popup } from './index-BKj4TrcW.mjs';
import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElInput } from './server.mjs';
import { defineComponent, shallowRef, ref, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { m as fileRename } from './my_database-C6D0rbWD.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import '@vueuse/core';
import 'lodash-unified';
import './refs-CJvnaIJj.mjs';
import '@vue/shared';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
  __name: "renamePop",
  __ssrInlineRender: true,
  emits: ["success", "close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const popRef = shallowRef();
    const emits = __emit;
    const formData = ref({
      name: "",
      fd_id: -1
    });
    const submit = async () => {
      await fileRename({ ...formData.value });
      emits("success");
      popRef.value.close();
    };
    const open = (id) => {
      popRef.value.open();
      formData.value.fd_id = id;
    };
    __expose({ open });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Popup = Popup;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      _push(ssrRenderComponent(_component_Popup, mergeProps({
        title: "\u91CD\u547D\u540D",
        ref_key: "popRef",
        ref: popRef,
        async: "",
        onConfirm: submit,
        onClose: ($event) => _ctx.$emit("close")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u6587\u4EF6\u540D\u79F0",
                    class: "is-required"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          placeholder: "\u8BF7\u8F93\u5165\u6587\u4EF6\u540D\u79F0",
                          modelValue: unref(formData).name,
                          "onUpdate:modelValue": ($event) => unref(formData).name = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            placeholder: "\u8BF7\u8F93\u5165\u6587\u4EF6\u540D\u79F0",
                            modelValue: unref(formData).name,
                            "onUpdate:modelValue": ($event) => unref(formData).name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_form_item, {
                      label: "\u6587\u4EF6\u540D\u79F0",
                      class: "is-required"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          placeholder: "\u8BF7\u8F93\u5165\u6587\u4EF6\u540D\u79F0",
                          modelValue: unref(formData).name,
                          "onUpdate:modelValue": ($event) => unref(formData).name = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_form, null, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, {
                    label: "\u6587\u4EF6\u540D\u79F0",
                    class: "is-required"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        placeholder: "\u8BF7\u8F93\u5165\u6587\u4EF6\u540D\u79F0",
                        modelValue: unref(formData).name,
                        "onUpdate:modelValue": ($event) => unref(formData).name = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/_components/study_com/renamePop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=renamePop-BToUb_Ck.mjs.map
