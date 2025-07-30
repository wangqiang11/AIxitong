import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElSelect, a as ElOption } from './index-CUhOTuS-.mjs';
import { E as ElInput, d as ElButton } from './server.mjs';
import { _ as __nuxt_component_1 } from './index-DZM4Ziep.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { _ as __nuxt_component_8 } from './index-VFk_dz0n.mjs';
import { defineComponent, shallowRef, ref, watch, mergeProps, withCtx, unref, openBlock, createBlock, Fragment, renderList, createVNode, isRef, createTextVNode, useSSRContext } from 'vue';
import { u as useDictOptions } from './useDictOptions-DmOxg3R0.mjs';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { r as knowKnowledgeList } from './my_database-C6D0rbWD.mjs';
import { P as Popup } from './index-BKj4TrcW.mjs';
import '@vueuse/core';
import '@vue/shared';
import 'lodash-unified';
import 'async-validator';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
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
import './index-DVLwoLV9.mjs';
import 'video.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "correct-popup",
  __ssrInlineRender: true,
  emits: ["confirm"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const formRef = shallowRef();
    const popupRef = shallowRef();
    const video = ref("");
    const formData = ref({
      name: "",
      kb_id: "",
      ask: "",
      reply: "",
      images: [],
      video: [],
      files: []
    });
    watch(video, (value) => {
      formData.value.video = [{ url: value, name: "" }];
    });
    const formRules = {
      kb_id: [
        {
          required: true,
          message: "\u9009\u62E9\u77E5\u8BC6\u5E93"
        }
      ],
      ask: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u95EE\u9898"
        }
      ],
      reply: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u7B54\u6848"
        }
      ]
    };
    const open = (data) => {
      var _a;
      formData.value = {
        ...formData.value,
        ask: data.ask,
        reply: data.reply,
        name: data.name
      };
      (_a = popupRef.value) == null ? void 0 : _a.open();
    };
    const close = () => {
      var _a;
      (_a = popupRef.value) == null ? void 0 : _a.close();
    };
    const handleConfirm = async () => {
      var _a;
      await ((_a = formRef.value) == null ? void 0 : _a.validate());
      emit("confirm", formData.value);
    };
    const { optionsData } = useDictOptions({
      knowledge: {
        api: knowKnowledgeList,
        params: {
          page_type: 0
        },
        transformData(data) {
          return data.lists || [];
        }
      }
    });
    __expose({
      open,
      close
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElScrollbar = ElScrollbar;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_el_input = ElInput;
      const _component_Upload = __nuxt_component_1;
      const _component_Icon = _sfc_main$1;
      const _component_UploadVideo = __nuxt_component_8;
      const _component_el_button = ElButton;
      _push(ssrRenderComponent(Popup, mergeProps({
        ref_key: "popupRef",
        ref: popupRef,
        center: "",
        title: "\u4FEE\u6B63\u95EE\u7B54",
        async: "",
        width: "900px",
        onConfirm: handleConfirm
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElScrollbar, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form, {
                    ref_key: "formRef",
                    ref: formRef,
                    model: unref(formData),
                    rules: formRules,
                    "label-width": "120px"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_form_item, {
                          label: "\u9009\u62E9\u77E5\u8BC6\u5E93",
                          prop: "kb_id"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_select, {
                                modelValue: unref(formData).kb_id,
                                "onUpdate:modelValue": ($event) => unref(formData).kb_id = $event,
                                class: "w-[240px]"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(optionsData).knowledge, (item, index) => {
                                      _push6(ssrRenderComponent(_component_el_option, {
                                        key: index,
                                        label: `${item.name}`,
                                        value: item.id
                                      }, null, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(optionsData).knowledge, (item, index) => {
                                        return openBlock(), createBlock(_component_el_option, {
                                          key: index,
                                          label: `${item.name}`,
                                          value: item.id
                                        }, null, 8, ["label", "value"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_select, {
                                  modelValue: unref(formData).kb_id,
                                  "onUpdate:modelValue": ($event) => unref(formData).kb_id = $event,
                                  class: "w-[240px]"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(optionsData).knowledge, (item, index) => {
                                      return openBlock(), createBlock(_component_el_option, {
                                        key: index,
                                        label: `${item.name}`,
                                        value: item.id
                                      }, null, 8, ["label", "value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_form_item, {
                          label: "\u63D0\u95EE\u95EE\u9898",
                          prop: "ask"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_input, {
                                modelValue: unref(formData).ask,
                                "onUpdate:modelValue": ($event) => unref(formData).ask = $event,
                                placeholder: "\u8BF7\u8F93\u5165\u95EE\u9898",
                                type: "textarea",
                                resize: "none",
                                rows: 4,
                                maxlength: "600",
                                "show-word-limit": "",
                                clearable: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_input, {
                                  modelValue: unref(formData).ask,
                                  "onUpdate:modelValue": ($event) => unref(formData).ask = $event,
                                  placeholder: "\u8BF7\u8F93\u5165\u95EE\u9898",
                                  type: "textarea",
                                  resize: "none",
                                  rows: 4,
                                  maxlength: "600",
                                  "show-word-limit": "",
                                  clearable: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_form_item, {
                          label: "\u95EE\u9898\u7B54\u6848",
                          prop: "reply"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_input, {
                                modelValue: unref(formData).reply,
                                "onUpdate:modelValue": ($event) => unref(formData).reply = $event,
                                placeholder: "\u8BF7\u8F93\u5165\u7B54\u6848",
                                type: "textarea",
                                resize: "none",
                                rows: 15,
                                clearable: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_input, {
                                  modelValue: unref(formData).reply,
                                  "onUpdate:modelValue": ($event) => unref(formData).reply = $event,
                                  placeholder: "\u8BF7\u8F93\u5165\u7B54\u6848",
                                  type: "textarea",
                                  resize: "none",
                                  rows: 15,
                                  clearable: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_form_item, { label: "\u4E0A\u4F20\u56FE\u7247" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex-1"${_scopeId4}><div${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Upload, {
                                files: unref(formData).images,
                                "onUpdate:files": ($event) => unref(formData).images = $event,
                                type: "image",
                                "list-type": "picture-card",
                                limit: 9,
                                multiple: "",
                                "show-file-list": ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Icon, {
                                      name: "el-icon-Plus",
                                      size: 20
                                    }, null, _parent6, _scopeId5));
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
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="form-tips"${_scopeId4}>\u6700\u591A\u652F\u6301\u4E0A\u4F20 9 \u5F20\u56FE</div></div>`);
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_form_item, { label: "\u4E0A\u4F20\u89C6\u9891" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex-1"${_scopeId4}><div${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UploadVideo, {
                                modelValue: unref(video),
                                "onUpdate:modelValue": ($event) => isRef(video) ? video.value = $event : null,
                                size: "80px"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="form-tips"${_scopeId4}>\u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M</div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex-1" }, [
                                  createVNode("div", null, [
                                    createVNode(_component_UploadVideo, {
                                      modelValue: unref(video),
                                      "onUpdate:modelValue": ($event) => isRef(video) ? video.value = $event : null,
                                      size: "80px"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "form-tips" }, "\u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_form_item, { label: "\u4E0A\u4F20\u9644\u4EF6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex-1"${_scopeId4}><div class="max-w-[600px]"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Upload, {
                                files: unref(formData).files,
                                "onUpdate:files": ($event) => unref(formData).files = $event,
                                type: "file",
                                "show-file-list": ""
                              }, {
                                tip: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="el-upload__tip"${_scopeId5}> \u652F\u6301\u4E0A\u4F20PDF\u3001docx\u3001excel\u3001\u7B49\u6587\u4EF6\u683C\u5F0F </div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "el-upload__tip" }, " \u652F\u6301\u4E0A\u4F20PDF\u3001docx\u3001excel\u3001\u7B49\u6587\u4EF6\u683C\u5F0F ")
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_button, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u4E0A\u4F20\u9644\u4EF6`);
                                        } else {
                                          return [
                                            createTextVNode("\u4E0A\u4F20\u9644\u4EF6")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
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
                              }, _parent5, _scopeId4));
                              _push5(`</div></div>`);
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_form_item, {
                            label: "\u9009\u62E9\u77E5\u8BC6\u5E93",
                            prop: "kb_id"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_select, {
                                modelValue: unref(formData).kb_id,
                                "onUpdate:modelValue": ($event) => unref(formData).kb_id = $event,
                                class: "w-[240px]"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(optionsData).knowledge, (item, index) => {
                                    return openBlock(), createBlock(_component_el_option, {
                                      key: index,
                                      label: `${item.name}`,
                                      value: item.id
                                    }, null, 8, ["label", "value"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_form_item, {
                            label: "\u63D0\u95EE\u95EE\u9898",
                            prop: "ask"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: unref(formData).ask,
                                "onUpdate:modelValue": ($event) => unref(formData).ask = $event,
                                placeholder: "\u8BF7\u8F93\u5165\u95EE\u9898",
                                type: "textarea",
                                resize: "none",
                                rows: 4,
                                maxlength: "600",
                                "show-word-limit": "",
                                clearable: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_form_item, {
                            label: "\u95EE\u9898\u7B54\u6848",
                            prop: "reply"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: unref(formData).reply,
                                "onUpdate:modelValue": ($event) => unref(formData).reply = $event,
                                placeholder: "\u8BF7\u8F93\u5165\u7B54\u6848",
                                type: "textarea",
                                resize: "none",
                                rows: 15,
                                clearable: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
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
                          createVNode(_component_el_form_item, { label: "\u4E0A\u4F20\u89C6\u9891" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex-1" }, [
                                createVNode("div", null, [
                                  createVNode(_component_UploadVideo, {
                                    modelValue: unref(video),
                                    "onUpdate:modelValue": ($event) => isRef(video) ? video.value = $event : null,
                                    size: "80px"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "form-tips" }, "\u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M")
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
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_form, {
                      ref_key: "formRef",
                      ref: formRef,
                      model: unref(formData),
                      rules: formRules,
                      "label-width": "120px"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_form_item, {
                          label: "\u9009\u62E9\u77E5\u8BC6\u5E93",
                          prop: "kb_id"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_select, {
                              modelValue: unref(formData).kb_id,
                              "onUpdate:modelValue": ($event) => unref(formData).kb_id = $event,
                              class: "w-[240px]"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(optionsData).knowledge, (item, index) => {
                                  return openBlock(), createBlock(_component_el_option, {
                                    key: index,
                                    label: `${item.name}`,
                                    value: item.id
                                  }, null, 8, ["label", "value"]);
                                }), 128))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_form_item, {
                          label: "\u63D0\u95EE\u95EE\u9898",
                          prop: "ask"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: unref(formData).ask,
                              "onUpdate:modelValue": ($event) => unref(formData).ask = $event,
                              placeholder: "\u8BF7\u8F93\u5165\u95EE\u9898",
                              type: "textarea",
                              resize: "none",
                              rows: 4,
                              maxlength: "600",
                              "show-word-limit": "",
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_form_item, {
                          label: "\u95EE\u9898\u7B54\u6848",
                          prop: "reply"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: unref(formData).reply,
                              "onUpdate:modelValue": ($event) => unref(formData).reply = $event,
                              placeholder: "\u8BF7\u8F93\u5165\u7B54\u6848",
                              type: "textarea",
                              resize: "none",
                              rows: 15,
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
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
                        createVNode(_component_el_form_item, { label: "\u4E0A\u4F20\u89C6\u9891" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex-1" }, [
                              createVNode("div", null, [
                                createVNode(_component_UploadVideo, {
                                  modelValue: unref(video),
                                  "onUpdate:modelValue": ($event) => isRef(video) ? video.value = $event : null,
                                  size: "80px"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "form-tips" }, "\u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M")
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
                      ]),
                      _: 1
                    }, 8, ["model"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElScrollbar, null, {
                default: withCtx(() => [
                  createVNode(_component_el_form, {
                    ref_key: "formRef",
                    ref: formRef,
                    model: unref(formData),
                    rules: formRules,
                    "label-width": "120px"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, {
                        label: "\u9009\u62E9\u77E5\u8BC6\u5E93",
                        prop: "kb_id"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_select, {
                            modelValue: unref(formData).kb_id,
                            "onUpdate:modelValue": ($event) => unref(formData).kb_id = $event,
                            class: "w-[240px]"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(optionsData).knowledge, (item, index) => {
                                return openBlock(), createBlock(_component_el_option, {
                                  key: index,
                                  label: `${item.name}`,
                                  value: item.id
                                }, null, 8, ["label", "value"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "\u63D0\u95EE\u95EE\u9898",
                        prop: "ask"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: unref(formData).ask,
                            "onUpdate:modelValue": ($event) => unref(formData).ask = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u95EE\u9898",
                            type: "textarea",
                            resize: "none",
                            rows: 4,
                            maxlength: "600",
                            "show-word-limit": "",
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "\u95EE\u9898\u7B54\u6848",
                        prop: "reply"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: unref(formData).reply,
                            "onUpdate:modelValue": ($event) => unref(formData).reply = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u7B54\u6848",
                            type: "textarea",
                            resize: "none",
                            rows: 15,
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
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
                      createVNode(_component_el_form_item, { label: "\u4E0A\u4F20\u89C6\u9891" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex-1" }, [
                            createVNode("div", null, [
                              createVNode(_component_UploadVideo, {
                                modelValue: unref(video),
                                "onUpdate:modelValue": ($event) => isRef(video) ? video.value = $event : null,
                                size: "80px"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "form-tips" }, "\u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M")
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
                    ]),
                    _: 1
                  }, 8, ["model"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-dialogue/correct-popup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=correct-popup-W2_Kapug.mjs.map
