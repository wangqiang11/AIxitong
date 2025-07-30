import { P as Popup } from './index-BKj4TrcW.mjs';
import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { a as useRouter, E as ElInput } from './server.mjs';
import { _ as __nuxt_component_1 } from './index-BaKT_MyR.mjs';
import { defineComponent, shallowRef, ref, shallowReactive, mergeProps, withCtx, renderSlot, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { a as postDigital } from './digital-DHYaDV-C.mjs';
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
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import './index-BoqjHllR.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "add",
  __ssrInlineRender: true,
  emits: ["success"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const router = useRouter();
    const popRef = shallowRef();
    const formData = ref({
      name: "",
      avatar: "",
      image: ""
    });
    const formRef = shallowRef();
    const formRules = shallowReactive({
      name: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u5F62\u8C61\u540D\u79F0"
        }
      ],
      avatar: [
        {
          required: true,
          type: "string",
          message: "\u8BF7\u9009\u62E9\u5F62\u8C61\u5934\u50CF"
        }
      ],
      image: [
        {
          required: true,
          type: "string",
          message: "\u8BF7\u9009\u62E9\u5F62\u8C61\u5C01\u9762"
        }
      ]
    });
    const handelSubmit = async () => {
      var _a, _b;
      await ((_a = formRef.value) == null ? void 0 : _a.validate());
      const { id } = await postDigital(formData.value);
      (_b = popRef.value) == null ? void 0 : _b.close();
      router.push({
        path: "/application/digital/edit",
        query: {
          id
        }
      });
      emits("success");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Popup = Popup;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_UploadImg = __nuxt_component_1;
      _push(ssrRenderComponent(_component_Popup, mergeProps({
        ref_key: "popRef",
        ref: popRef,
        title: "\u521B\u5EFA\u5F62\u8C61",
        width: "500px",
        async: "",
        onConfirm: handelSubmit
      }, _attrs), {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form, {
              class: "p-4",
              ref_key: "formRef",
              ref: formRef,
              model: unref(formData),
              "label-width": "100px",
              rules: unref(formRules)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u5F62\u8C61\u540D\u79F0",
                    prop: "name"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="w-[420px]"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(formData).name,
                          "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u5F62\u8C61\u540D\u79F0",
                          clearable: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "w-[420px]" }, [
                            createVNode(_component_el_input, {
                              modelValue: unref(formData).name,
                              "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                              placeholder: "\u8BF7\u8F93\u5165\u5F62\u8C61\u540D\u79F0",
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u5F62\u8C61\u5934\u50CF",
                    prop: "avatar"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UploadImg, {
                          modelValue: unref(formData).avatar,
                          "onUpdate:modelValue": ($event) => unref(formData).avatar = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="form-tips"${_scopeId3}>\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A50*50px</div></div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode("div", null, [
                              createVNode(_component_UploadImg, {
                                modelValue: unref(formData).avatar,
                                "onUpdate:modelValue": ($event) => unref(formData).avatar = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "form-tips" }, "\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A50*50px")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u5F62\u8C61\u5C01\u9762",
                    prop: "image"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UploadImg, {
                          modelValue: unref(formData).image,
                          "onUpdate:modelValue": ($event) => unref(formData).image = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="form-tips"${_scopeId3}>\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A280px\xD7187px</div></div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode("div", null, [
                              createVNode(_component_UploadImg, {
                                modelValue: unref(formData).image,
                                "onUpdate:modelValue": ($event) => unref(formData).image = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "form-tips" }, "\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A280px\xD7187px")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_form_item, {
                      label: "\u5F62\u8C61\u540D\u79F0",
                      prop: "name"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-[420px]" }, [
                          createVNode(_component_el_input, {
                            modelValue: unref(formData).name,
                            "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u5F62\u8C61\u540D\u79F0",
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u5F62\u8C61\u5934\u50CF",
                      prop: "avatar"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("div", null, [
                            createVNode(_component_UploadImg, {
                              modelValue: unref(formData).avatar,
                              "onUpdate:modelValue": ($event) => unref(formData).avatar = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "form-tips" }, "\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A50*50px")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u5F62\u8C61\u5C01\u9762",
                      prop: "image"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("div", null, [
                            createVNode(_component_UploadImg, {
                              modelValue: unref(formData).image,
                              "onUpdate:modelValue": ($event) => unref(formData).image = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "form-tips" }, "\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A280px\xD7187px")
                        ])
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
              createVNode(_component_el_form, {
                class: "p-4",
                ref_key: "formRef",
                ref: formRef,
                model: unref(formData),
                "label-width": "100px",
                rules: unref(formRules)
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, {
                    label: "\u5F62\u8C61\u540D\u79F0",
                    prop: "name"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-[420px]" }, [
                        createVNode(_component_el_input, {
                          modelValue: unref(formData).name,
                          "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u5F62\u8C61\u540D\u79F0",
                          clearable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, {
                    label: "\u5F62\u8C61\u5934\u50CF",
                    prop: "avatar"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode("div", null, [
                          createVNode(_component_UploadImg, {
                            modelValue: unref(formData).avatar,
                            "onUpdate:modelValue": ($event) => unref(formData).avatar = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "form-tips" }, "\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A50*50px")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, {
                    label: "\u5F62\u8C61\u5C01\u9762",
                    prop: "image"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode("div", null, [
                          createVNode(_component_UploadImg, {
                            modelValue: unref(formData).image,
                            "onUpdate:modelValue": ($event) => unref(formData).image = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "form-tips" }, "\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A280px\xD7187px")
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model", "rules"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/digital/_components/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=add-2Mfhn0Pq.mjs.map
