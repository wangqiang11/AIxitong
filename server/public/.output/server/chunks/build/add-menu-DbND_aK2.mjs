import { E as ElDialog } from './index-CzJm6kkT.mjs';
import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElInput, d as ElButton } from './server.mjs';
import { _ as __nuxt_component_1 } from './index-DZM4Ziep.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { defineComponent, shallowRef, computed, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { cloneDeep } from 'lodash-es';
import { useVModels } from '@vueuse/core';
import './use-dialog-DHq_GjFf.mjs';
import 'lodash-unified';
import './refs-CJvnaIJj.mjs';
import '@vue/shared';
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
import 'weixin-js-sdk';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "add-menu",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean },
    type: {},
    data: {}
  },
  emits: ["update:show", "update:data", "confirm"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formRef = shallowRef();
    const { show: showModel, data: formData } = useVModels(props, emit);
    const images = computed({
      get() {
        return formData.value.images.map((url) => ({ url }));
      },
      set(value) {
        formData.value.images = value.map((item) => item.url);
      }
    });
    const formRules = {
      keyword: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD"
        }
      ]
    };
    const handleConfirm = async () => {
      var _a;
      await ((_a = formRef.value) == null ? void 0 : _a.validate());
      emit("confirm", cloneDeep(formData.value));
      showModel.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_dialog = ElDialog;
      const _component_ElForm = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_Upload = __nuxt_component_1;
      const _component_Icon = _sfc_main$1;
      const _component_el_button = ElButton;
      _push(ssrRenderComponent(_component_el_dialog, mergeProps({
        modelValue: unref(showModel),
        "onUpdate:modelValue": ($event) => isRef(showModel) ? showModel.value = $event : null,
        title: "\u6DFB\u52A0\u83DC\u5355",
        width: "640px",
        "destroy-on-close": true
      }, _attrs), {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="dialog-footer"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              onClick: ($event) => showModel.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u53D6\u6D88`);
                } else {
                  return [
                    createTextVNode("\u53D6\u6D88")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              onClick: handleConfirm
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u786E\u5B9A `);
                } else {
                  return [
                    createTextVNode(" \u786E\u5B9A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", { class: "dialog-footer" }, [
                createVNode(_component_el_button, {
                  onClick: ($event) => showModel.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u53D6\u6D88")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_el_button, {
                  type: "primary",
                  onClick: handleConfirm
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u786E\u5B9A ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElForm, {
              ref_key: "formRef",
              ref: formRef,
              model: unref(formData),
              rules: formRules,
              "label-width": "100px",
              disabled: _ctx.type === "view"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u5173\u952E\u8BCD",
                    prop: "keyword"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(formData).keyword,
                          "onUpdate:modelValue": ($event) => unref(formData).keyword = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD",
                          clearable: "",
                          maxlength: 20,
                          "show-word-limit": true
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(formData).keyword,
                            "onUpdate:modelValue": ($event) => unref(formData).keyword = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD",
                            clearable: "",
                            maxlength: 20,
                            "show-word-limit": true
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u56DE\u590D\u5185\u5BB9",
                    prop: "content"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(formData).content,
                          "onUpdate:modelValue": ($event) => unref(formData).content = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u56DE\u590D\u5185\u5BB9",
                          type: "textarea",
                          autosize: { minRows: 8, maxRows: 8 },
                          clearable: "",
                          maxlength: 3e3,
                          "show-word-limit": true,
                          resize: "none"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(formData).content,
                            "onUpdate:modelValue": ($event) => unref(formData).content = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u56DE\u590D\u5185\u5BB9",
                            type: "textarea",
                            autosize: { minRows: 8, maxRows: 8 },
                            clearable: "",
                            maxlength: 3e3,
                            "show-word-limit": true,
                            resize: "none"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u4E0A\u4F20\u56FE\u7247",
                    prop: "image"
                  }, {
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
                } else {
                  return [
                    createVNode(_component_el_form_item, {
                      label: "\u5173\u952E\u8BCD",
                      prop: "keyword"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(formData).keyword,
                          "onUpdate:modelValue": ($event) => unref(formData).keyword = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD",
                          clearable: "",
                          maxlength: 20,
                          "show-word-limit": true
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u56DE\u590D\u5185\u5BB9",
                      prop: "content"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(formData).content,
                          "onUpdate:modelValue": ($event) => unref(formData).content = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u56DE\u590D\u5185\u5BB9",
                          type: "textarea",
                          autosize: { minRows: 8, maxRows: 8 },
                          clearable: "",
                          maxlength: 3e3,
                          "show-word-limit": true,
                          resize: "none"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u4E0A\u4F20\u56FE\u7247",
                      prop: "image"
                    }, {
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
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_ElForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  model: unref(formData),
                  rules: formRules,
                  "label-width": "100px",
                  disabled: _ctx.type === "view"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, {
                      label: "\u5173\u952E\u8BCD",
                      prop: "keyword"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(formData).keyword,
                          "onUpdate:modelValue": ($event) => unref(formData).keyword = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD",
                          clearable: "",
                          maxlength: 20,
                          "show-word-limit": true
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u56DE\u590D\u5185\u5BB9",
                      prop: "content"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(formData).content,
                          "onUpdate:modelValue": ($event) => unref(formData).content = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u56DE\u590D\u5185\u5BB9",
                          type: "textarea",
                          autosize: { minRows: 8, maxRows: 8 },
                          clearable: "",
                          maxlength: 3e3,
                          "show-word-limit": true,
                          resize: "none"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u4E0A\u4F20\u56FE\u7247",
                      prop: "image"
                    }, {
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
                    })
                  ]),
                  _: 1
                }, 8, ["model", "disabled"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-edit/add-menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=add-menu-DbND_aK2.mjs.map
