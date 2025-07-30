import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElInput, d as ElButton } from './server.mjs';
import { _ as __nuxt_component_1 } from './index-DZM4Ziep.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { defineComponent, ref, watch, mergeProps, withCtx, unref, createVNode, isRef, createTextVNode, useSSRContext } from 'vue';
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
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "manual",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formData = useVModel(props, "modelValue", emit);
    const images = ref([]);
    watch(images, (value) => {
      formData.value.images = value.map(({ url }) => url);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_scrollbar = ElScrollbar;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_Upload = __nuxt_component_1;
      const _component_Icon = _sfc_main$1;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "manual-import" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_scrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_form, { "label-width": "0px" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(formData).question,
                          "onUpdate:modelValue": ($event) => unref(formData).question = $event,
                          placeholder: `\u8BF7\u8F93\u5165\u95EE\u9898`
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(formData).question,
                            "onUpdate:modelValue": ($event) => unref(formData).question = $event,
                            placeholder: `\u8BF7\u8F93\u5165\u95EE\u9898`
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(formData).answer,
                          "onUpdate:modelValue": ($event) => unref(formData).answer = $event,
                          placeholder: `\u8BF7\u8F93\u5165\u95EE\u9898\u7B54\u6848\uFF0C10000\u4E2A\u5B57\u4EE5\u5185\u3002`,
                          type: "textarea",
                          resize: "none",
                          rows: 15,
                          maxlength: "10000"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(formData).answer,
                            "onUpdate:modelValue": ($event) => unref(formData).answer = $event,
                            placeholder: `\u8BF7\u8F93\u5165\u95EE\u9898\u7B54\u6848\uFF0C10000\u4E2A\u5B57\u4EE5\u5185\u3002`,
                            type: "textarea",
                            resize: "none",
                            rows: 15,
                            maxlength: "10000"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex-1"${_scopeId3}><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Upload, {
                          files: unref(images),
                          "onUpdate:files": ($event) => isRef(images) ? images.value = $event : null,
                          type: "image",
                          "list-type": "picture-card",
                          limit: 9,
                          multiple: "",
                          "show-file-list": ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "el-icon-Plus",
                                size: 20
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Icon, {
                                  name: "el-icon-Plus",
                                  size: 20
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="form-tips"${_scopeId3}>\u6700\u591A\u652F\u6301\u4E0A\u4F20 9 \u5F20\u56FE</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex-1" }, [
                            createVNode("div", null, [
                              createVNode(_component_Upload, {
                                files: unref(images),
                                "onUpdate:files": ($event) => isRef(images) ? images.value = $event : null,
                                type: "image",
                                "list-type": "picture-card",
                                limit: 9,
                                multiple: "",
                                "show-file-list": ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "el-icon-Plus",
                                    size: 20
                                  })
                                ]),
                                _: 1
                              }, 8, ["files", "onUpdate:files"])
                            ]),
                            createVNode("div", { class: "form-tips" }, "\u6700\u591A\u652F\u6301\u4E0A\u4F20 9 \u5F20\u56FE")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex-1"${_scopeId3}><div class="max-w-[600px]"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Upload, {
                          files: unref(formData).files,
                          "onUpdate:files": ($event) => unref(formData).files = $event,
                          type: "file",
                          "show-file-list": ""
                        }, {
                          tip: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="el-upload__tip"${_scopeId4}> \u652F\u6301\u4E0A\u4F20PDF\u3001docx\u3001excel\u3001\u7B49\u6587\u4EF6\u683C\u5F0F </div>`);
                            } else {
                              return [
                                createVNode("div", { class: "el-upload__tip" }, " \u652F\u6301\u4E0A\u4F20PDF\u3001docx\u3001excel\u3001\u7B49\u6587\u4EF6\u683C\u5F0F ")
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_button, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u4E0A\u4F20\u9644\u4EF6`);
                                  } else {
                                    return [
                                      createTextVNode("\u4E0A\u4F20\u9644\u4EF6")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_button, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u4E0A\u4F20\u9644\u4EF6")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex-1" }, [
                            createVNode("div", { class: "max-w-[600px]" }, [
                              createVNode(_component_Upload, {
                                files: unref(formData).files,
                                "onUpdate:files": ($event) => unref(formData).files = $event,
                                type: "file",
                                "show-file-list": ""
                              }, {
                                tip: withCtx(() => [
                                  createVNode("div", { class: "el-upload__tip" }, " \u652F\u6301\u4E0A\u4F20PDF\u3001docx\u3001excel\u3001\u7B49\u6587\u4EF6\u683C\u5F0F ")
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_el_button, null, {
                                    default: withCtx(() => [
                                      createTextVNode("\u4E0A\u4F20\u9644\u4EF6")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["files", "onUpdate:files"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_form_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(formData).question,
                          "onUpdate:modelValue": ($event) => unref(formData).question = $event,
                          placeholder: `\u8BF7\u8F93\u5165\u95EE\u9898`
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(formData).answer,
                          "onUpdate:modelValue": ($event) => unref(formData).answer = $event,
                          placeholder: `\u8BF7\u8F93\u5165\u95EE\u9898\u7B54\u6848\uFF0C10000\u4E2A\u5B57\u4EE5\u5185\u3002`,
                          type: "textarea",
                          resize: "none",
                          rows: 15,
                          maxlength: "10000"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex-1" }, [
                          createVNode("div", null, [
                            createVNode(_component_Upload, {
                              files: unref(images),
                              "onUpdate:files": ($event) => isRef(images) ? images.value = $event : null,
                              type: "image",
                              "list-type": "picture-card",
                              limit: 9,
                              multiple: "",
                              "show-file-list": ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: "el-icon-Plus",
                                  size: 20
                                })
                              ]),
                              _: 1
                            }, 8, ["files", "onUpdate:files"])
                          ]),
                          createVNode("div", { class: "form-tips" }, "\u6700\u591A\u652F\u6301\u4E0A\u4F20 9 \u5F20\u56FE")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex-1" }, [
                          createVNode("div", { class: "max-w-[600px]" }, [
                            createVNode(_component_Upload, {
                              files: unref(formData).files,
                              "onUpdate:files": ($event) => unref(formData).files = $event,
                              type: "file",
                              "show-file-list": ""
                            }, {
                              tip: withCtx(() => [
                                createVNode("div", { class: "el-upload__tip" }, " \u652F\u6301\u4E0A\u4F20PDF\u3001docx\u3001excel\u3001\u7B49\u6587\u4EF6\u683C\u5F0F ")
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_el_button, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u4E0A\u4F20\u9644\u4EF6")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["files", "onUpdate:files"])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "py-4" }, [
                createVNode(_component_el_form, { "label-width": "0px" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(formData).question,
                          "onUpdate:modelValue": ($event) => unref(formData).question = $event,
                          placeholder: `\u8BF7\u8F93\u5165\u95EE\u9898`
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(formData).answer,
                          "onUpdate:modelValue": ($event) => unref(formData).answer = $event,
                          placeholder: `\u8BF7\u8F93\u5165\u95EE\u9898\u7B54\u6848\uFF0C10000\u4E2A\u5B57\u4EE5\u5185\u3002`,
                          type: "textarea",
                          resize: "none",
                          rows: 15,
                          maxlength: "10000"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex-1" }, [
                          createVNode("div", null, [
                            createVNode(_component_Upload, {
                              files: unref(images),
                              "onUpdate:files": ($event) => isRef(images) ? images.value = $event : null,
                              type: "image",
                              "list-type": "picture-card",
                              limit: 9,
                              multiple: "",
                              "show-file-list": ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: "el-icon-Plus",
                                  size: 20
                                })
                              ]),
                              _: 1
                            }, 8, ["files", "onUpdate:files"])
                          ]),
                          createVNode("div", { class: "form-tips" }, "\u6700\u591A\u652F\u6301\u4E0A\u4F20 9 \u5F20\u56FE")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex-1" }, [
                          createVNode("div", { class: "max-w-[600px]" }, [
                            createVNode(_component_Upload, {
                              files: unref(formData).files,
                              "onUpdate:files": ($event) => unref(formData).files = $event,
                              type: "file",
                              "show-file-list": ""
                            }, {
                              tip: withCtx(() => [
                                createVNode("div", { class: "el-upload__tip" }, " \u652F\u6301\u4E0A\u4F20PDF\u3001docx\u3001excel\u3001\u7B49\u6587\u4EF6\u683C\u5F0F ")
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_el_button, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u4E0A\u4F20\u9644\u4EF6")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["files", "onUpdate:files"])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/_components/import/manual.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=manual-BntScZJB.mjs.map
