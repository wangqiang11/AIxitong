import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElInput, d as ElButton } from './server.mjs';
import { _ as __nuxt_component_1 } from './index-DZM4Ziep.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { defineComponent, shallowRef, mergeProps, withCtx, unref, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
import { P as Popup } from './index-BKj4TrcW.mjs';
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
  __name: "edit-qa",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    title: {},
    disabled: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "confirm"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formRef = shallowRef();
    const popupRef = shallowRef();
    const formData = useVModel(props, "modelValue", emit);
    const formRules = {
      question: [
        {
          validator(rule, value, callback, source, options) {
            if (!value) {
              if (formData.value.type === 1) {
                callback("\u8BF7\u8F93\u5165\u5185\u5BB9");
              } else if (formData.value.type === 2) {
                callback("\u8BF7\u8F93\u5165\u95EE\u9898");
              }
            } else {
              callback();
            }
          }
        }
      ],
      answer: [
        {
          validator(rule, value, callback, source, options) {
            if (!value) {
              callback("\u8BF7\u8F93\u5165\u7B54\u6848");
            } else {
              callback();
            }
          }
        }
      ]
    };
    const open = () => {
      var _a;
      (_a = popupRef.value) == null ? void 0 : _a.open();
    };
    const close = () => {
      var _a;
      (_a = popupRef.value) == null ? void 0 : _a.close();
    };
    const handleConfirm = async () => {
      var _a;
      await ((_a = formRef.value) == null ? void 0 : _a.validate());
      emit("confirm");
    };
    __expose({
      open,
      close
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_Upload = __nuxt_component_1;
      const _component_Icon = _sfc_main$1;
      const _component_el_button = ElButton;
      _push(ssrRenderComponent(Popup, mergeProps({
        ref_key: "popupRef",
        ref: popupRef,
        title: _ctx.title,
        width: "800px",
        "destroy-on-close": true,
        async: "",
        onConfirm: handleConfirm
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form, {
              ref_key: "formRef",
              ref: formRef,
              model: unref(formData),
              rules: formRules,
              "label-width": "100px",
              disabled: _ctx.disabled
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(formData).type === 1) {
                    _push3(ssrRenderComponent(_component_el_form_item, {
                      label: "\u5185\u5BB9",
                      prop: "question"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_el_input, {
                            modelValue: unref(formData).question,
                            "onUpdate:modelValue": ($event) => unref(formData).question = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
                            type: "textarea",
                            resize: "none",
                            rows: 20,
                            clearable: ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_el_input, {
                              modelValue: unref(formData).question,
                              "onUpdate:modelValue": ($event) => unref(formData).question = $event,
                              placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
                              type: "textarea",
                              resize: "none",
                              rows: 20,
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(formData).type === 2) {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(_component_el_form_item, {
                      label: "\u63D0\u95EE\u95EE\u9898",
                      prop: "question"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_el_input, {
                            modelValue: unref(formData).question,
                            "onUpdate:modelValue": ($event) => unref(formData).question = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u95EE\u9898",
                            type: "textarea",
                            resize: "none",
                            rows: 6,
                            maxlength: "600",
                            "show-word-limit": "",
                            clearable: ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_el_input, {
                              modelValue: unref(formData).question,
                              "onUpdate:modelValue": ($event) => unref(formData).question = $event,
                              placeholder: "\u8BF7\u8F93\u5165\u95EE\u9898",
                              type: "textarea",
                              resize: "none",
                              rows: 6,
                              maxlength: "600",
                              "show-word-limit": "",
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_el_form_item, {
                      label: "\u95EE\u9898\u7B54\u6848",
                      prop: "answer"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_el_input, {
                            modelValue: unref(formData).answer,
                            "onUpdate:modelValue": ($event) => unref(formData).answer = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u7B54\u6848",
                            type: "textarea",
                            resize: "none",
                            rows: 20,
                            clearable: ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_el_input, {
                              modelValue: unref(formData).answer,
                              "onUpdate:modelValue": ($event) => unref(formData).answer = $event,
                              placeholder: "\u8BF7\u8F93\u5165\u7B54\u6848",
                              type: "textarea",
                              resize: "none",
                              rows: 20,
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    if (unref(formData).type === 2 && unref(formData).method === 1) {
                      _push3(`<!--[-->`);
                      _push3(ssrRenderComponent(_component_el_form_item, { label: "\u4E0A\u4F20\u56FE\u7247" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="flex-1"${_scopeId3}><div${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_Upload, {
                              files: unref(formData).images,
                              "onUpdate:files": ($event) => unref(formData).images = $event,
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
                                    files: unref(formData).images,
                                    "onUpdate:files": ($event) => unref(formData).images = $event,
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
                      _push3(ssrRenderComponent(_component_el_form_item, { label: "\u4E0A\u4F20\u9644\u4EF6" }, {
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
                      _push3(`<!--]-->`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(formData).type === 1 ? (openBlock(), createBlock(_component_el_form_item, {
                      key: 0,
                      label: "\u5185\u5BB9",
                      prop: "question"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(formData).question,
                          "onUpdate:modelValue": ($event) => unref(formData).question = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
                          type: "textarea",
                          resize: "none",
                          rows: 20,
                          clearable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    unref(formData).type === 2 ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode(_component_el_form_item, {
                        label: "\u63D0\u95EE\u95EE\u9898",
                        prop: "question"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: unref(formData).question,
                            "onUpdate:modelValue": ($event) => unref(formData).question = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u95EE\u9898",
                            type: "textarea",
                            resize: "none",
                            rows: 6,
                            maxlength: "600",
                            "show-word-limit": "",
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "\u95EE\u9898\u7B54\u6848",
                        prop: "answer"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: unref(formData).answer,
                            "onUpdate:modelValue": ($event) => unref(formData).answer = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u7B54\u6848",
                            type: "textarea",
                            resize: "none",
                            rows: 20,
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      unref(formData).type === 2 && unref(formData).method === 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode(_component_el_form_item, { label: "\u4E0A\u4F20\u56FE\u7247" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex-1" }, [
                              createVNode("div", null, [
                                createVNode(_component_Upload, {
                                  files: unref(formData).images,
                                  "onUpdate:files": ($event) => unref(formData).images = $event,
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
                        createVNode(_component_el_form_item, { label: "\u4E0A\u4F20\u9644\u4EF6" }, {
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
                      ], 64)) : createCommentVNode("", true)
                    ], 64)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_form, {
                ref_key: "formRef",
                ref: formRef,
                model: unref(formData),
                rules: formRules,
                "label-width": "100px",
                disabled: _ctx.disabled
              }, {
                default: withCtx(() => [
                  unref(formData).type === 1 ? (openBlock(), createBlock(_component_el_form_item, {
                    key: 0,
                    label: "\u5185\u5BB9",
                    prop: "question"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: unref(formData).question,
                        "onUpdate:modelValue": ($event) => unref(formData).question = $event,
                        placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
                        type: "textarea",
                        resize: "none",
                        rows: 20,
                        clearable: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(formData).type === 2 ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode(_component_el_form_item, {
                      label: "\u63D0\u95EE\u95EE\u9898",
                      prop: "question"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(formData).question,
                          "onUpdate:modelValue": ($event) => unref(formData).question = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u95EE\u9898",
                          type: "textarea",
                          resize: "none",
                          rows: 6,
                          maxlength: "600",
                          "show-word-limit": "",
                          clearable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u95EE\u9898\u7B54\u6848",
                      prop: "answer"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(formData).answer,
                          "onUpdate:modelValue": ($event) => unref(formData).answer = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u7B54\u6848",
                          type: "textarea",
                          resize: "none",
                          rows: 20,
                          clearable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    unref(formData).type === 2 && unref(formData).method === 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(_component_el_form_item, { label: "\u4E0A\u4F20\u56FE\u7247" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex-1" }, [
                            createVNode("div", null, [
                              createVNode(_component_Upload, {
                                files: unref(formData).images,
                                "onUpdate:files": ($event) => unref(formData).images = $event,
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
                      createVNode(_component_el_form_item, { label: "\u4E0A\u4F20\u9644\u4EF6" }, {
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
                    ], 64)) : createCommentVNode("", true)
                  ], 64)) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["model", "disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/_components/edit-qa.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=edit-qa-6KyixAaD.mjs.map
