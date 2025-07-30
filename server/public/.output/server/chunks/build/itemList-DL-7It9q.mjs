import { _ as _sfc_main$3 } from './index-BoqjHllR.mjs';
import { ag as useRoute, a5 as useAppStore, z as useUserStore, A as feedback, d as ElButton, E as ElInput, B as vLoading } from './server.mjs';
import { P as Popup } from './index-BKj4TrcW.mjs';
import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElRadioGroup, a as ElRadio } from './el-radio-group-PXDiQVwm.mjs';
import { useSSRContext, defineComponent, ref, inject, shallowRef, unref, withCtx, createTextVNode, createVNode, mergeProps, openBlock, createBlock, createCommentVNode, toDisplayString, isRef, reactive, renderSlot, nextTick } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps, ssrRenderSlot } from 'vue/server-renderer';
import { E as ElSelect, a as ElOption } from './index-CUhOTuS-.mjs';
import { E as ElTable, a as ElTableColumn } from './el-table-column-tZnWqVKO.mjs';
import { _ as _sfc_main$4 } from './index-L3E_sDO1.mjs';
import { _ as _sfc_main$5 } from './index-D60of7Hb.mjs';
import { u as usePaging } from './usePaging-DU8sXki3.mjs';
import _sfc_main$2 from './editPop-BfSBoyhz.mjs';
import { i as itemFileDataList, h as itemDataRetry, j as itemDataDel, l as checkData } from './my_database-C6D0rbWD.mjs';
import { u as usePolling } from './usePolling-DOP50YcO.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import '@vueuse/core';
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import 'async-validator';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-0xCxAaTZ.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import './index-53t5ntO1.mjs';
import 'normalize-wheel-es';
import './el-pagination-ClrwtCwT.mjs';
import './index-DZM4Ziep.mjs';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import './index-VFk_dz0n.mjs';
import './index-DVLwoLV9.mjs';
import 'video.js';
import './useLockFn-BWbjkhBs.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    params: {
      type: Object,
      default: () => ({})
    },
    pageSize: {
      type: Number,
      default: 25
    },
    fetchFun: {
      type: Function,
      required: true
    },
    exportFun: {
      type: Function
    }
  },
  setup(__props) {
    const formRef = shallowRef();
    const props = __props;
    const popupRef = shallowRef();
    const formData = reactive({
      page_type: 0,
      page_start: 1,
      page_end: 200,
      file_name: ""
    });
    const formRules = {
      page_start: [
        { required: true, message: "\u8BF7\u8F93\u5165\u8D77\u59CB\u9875\u7801" },
        { type: "number", message: "\u9875\u7801\u5FC5\u987B\u662F\u6574\u6570" },
        {
          validator: (rule, value, callback) => {
            if (value <= 0) return callback(new Error("\u9875\u7801\u5FC5\u987B\u5927\u4E8E0"));
            callback();
          }
        }
      ],
      page_end: [
        { required: true, message: "\u8BF7\u8F93\u5165\u7ED3\u675F\u9875\u7801" },
        { type: "number", message: "\u9875\u7801\u5FC5\u987B\u662F\u6574\u6570" },
        {
          validator: (rule, value, callback) => {
            if (value <= 0) return callback(new Error("\u9875\u7801\u5FC5\u987B\u5927\u4E8E0"));
            callback();
          }
        }
      ]
    };
    const exportData = reactive({
      count: 0,
      sum_page: 0,
      page_size: 0,
      max_page: 0,
      all_max_size: 0
    });
    const getData = async () => {
      const res = await props.fetchFun({
        ...props.params,
        page_size: props.pageSize,
        export: 1
      });
      Object.assign(exportData, res);
      formData.file_name = res.file_name;
      formData.page_end = res.page_end;
      formData.page_start = res.page_start;
    };
    const handleConfirm = async () => {
      var _a, _b;
      await ((_a = formRef.value) == null ? void 0 : _a.validate());
      feedback.loading("\u6B63\u5728\u5BFC\u51FA\u4E2D...");
      try {
        const res = props.exportFun ? await props.exportFun({
          ...props.params,
          ...formData,
          page_size: props.pageSize,
          export: 2
        }) : await props.fetchFun({
          ...props.params,
          ...formData,
          page_size: props.pageSize,
          export: 2
        });
        (_b = popupRef.value) == null ? void 0 : _b.close();
        feedback.closeLoading();
        if (res == null ? void 0 : res.url) {
          (void 0).open(res.url, "blank");
        }
      } catch (error) {
        feedback.closeLoading();
      }
    };
    getData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_popup = Popup;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_radio = ElRadio;
      const _component_el_input = ElInput;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "export-data" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_popup, {
        ref_key: "popupRef",
        ref: popupRef,
        title: "\u5BFC\u51FA\u8BBE\u7F6E",
        width: "500px",
        "confirm-button-text": "\u786E\u8BA4\u5BFC\u51FA",
        async: true,
        onOpen: getData,
        onConfirm: handleConfirm
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "trigger", {}, () => {
              _push2(ssrRenderComponent(_component_el_button, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u5BFC\u51FA`);
                  } else {
                    return [
                      createTextVNode("\u5BFC\u51FA")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "trigger", {}, () => [
                createVNode(_component_el_button, null, {
                  default: withCtx(() => [
                    createTextVNode("\u5BFC\u51FA")
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
            _push2(ssrRenderComponent(_component_el_form, {
              ref_key: "formRef",
              ref: formRef,
              model: unref(formData),
              "label-width": "120px",
              rules: formRules
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u6570\u636E\u91CF\uFF1A" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u9884\u8BA1\u5BFC\u51FA${ssrInterpolate(unref(exportData).count)}\u6761\u6570\u636E\uFF0C \u5171${ssrInterpolate(unref(exportData).sum_page)}\u9875\uFF0C\u6BCF\u9875${ssrInterpolate(unref(exportData).page_size)}\u6761\u6570\u636E `);
                      } else {
                        return [
                          createTextVNode(" \u9884\u8BA1\u5BFC\u51FA" + toDisplayString(unref(exportData).count) + "\u6761\u6570\u636E\uFF0C \u5171" + toDisplayString(unref(exportData).sum_page) + "\u9875\uFF0C\u6BCF\u9875" + toDisplayString(unref(exportData).page_size) + "\u6761\u6570\u636E ", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u5BFC\u51FA\u9650\u5236\uFF1A" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u6BCF\u6B21\u5BFC\u51FA\u6700\u5927\u5141\u8BB8${ssrInterpolate(unref(exportData).max_page)}\u9875\uFF0C\u5171${ssrInterpolate(unref(exportData).all_max_size)}\u6761\u6570\u636E `);
                      } else {
                        return [
                          createTextVNode(" \u6BCF\u6B21\u5BFC\u51FA\u6700\u5927\u5141\u8BB8" + toDisplayString(unref(exportData).max_page) + "\u9875\uFF0C\u5171" + toDisplayString(unref(exportData).all_max_size) + "\u6761\u6570\u636E ", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    prop: "page_type",
                    label: "\u5BFC\u51FA\u8303\u56F4\uFF1A",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_radio_group, {
                          modelValue: unref(formData).page_type,
                          "onUpdate:modelValue": ($event) => unref(formData).page_type = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_radio, { label: 0 }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u5168\u90E8\u5BFC\u51FA`);
                                  } else {
                                    return [
                                      createTextVNode("\u5168\u90E8\u5BFC\u51FA")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_radio, { label: 1 }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u5206\u9875\u5BFC\u51FA`);
                                  } else {
                                    return [
                                      createTextVNode("\u5206\u9875\u5BFC\u51FA")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_radio, { label: 0 }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u5168\u90E8\u5BFC\u51FA")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_radio, { label: 1 }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u5206\u9875\u5BFC\u51FA")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_radio_group, {
                            modelValue: unref(formData).page_type,
                            "onUpdate:modelValue": ($event) => unref(formData).page_type = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_radio, { label: 0 }, {
                                default: withCtx(() => [
                                  createTextVNode("\u5168\u90E8\u5BFC\u51FA")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_radio, { label: 1 }, {
                                default: withCtx(() => [
                                  createTextVNode("\u5206\u9875\u5BFC\u51FA")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (unref(formData).page_type == 1) {
                    _push3(ssrRenderComponent(_component_el_form_item, { label: "\u5206\u9875\u8303\u56F4\uFF1A" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_el_form_item, { prop: "page_start" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_el_input, {
                                  style: { "width": "140px" },
                                  modelValue: unref(formData).page_start,
                                  "onUpdate:modelValue": ($event) => unref(formData).page_start = $event,
                                  modelModifiers: { number: true },
                                  placeholder: ""
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_el_input, {
                                    style: { "width": "140px" },
                                    modelValue: unref(formData).page_start,
                                    "onUpdate:modelValue": ($event) => unref(formData).page_start = $event,
                                    modelModifiers: { number: true },
                                    placeholder: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<span class="flex-none ml-2 mr-2"${_scopeId3}>\u9875\uFF0C\u81F3</span>`);
                          _push4(ssrRenderComponent(_component_el_form_item, { prop: "page_end" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_el_input, {
                                  style: { "width": "140px" },
                                  modelValue: unref(formData).page_end,
                                  "onUpdate:modelValue": ($event) => unref(formData).page_end = $event,
                                  modelModifiers: { number: true },
                                  placeholder: ""
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_el_input, {
                                    style: { "width": "140px" },
                                    modelValue: unref(formData).page_end,
                                    "onUpdate:modelValue": ($event) => unref(formData).page_end = $event,
                                    modelModifiers: { number: true },
                                    placeholder: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex" }, [
                              createVNode(_component_el_form_item, { prop: "page_start" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_input, {
                                    style: { "width": "140px" },
                                    modelValue: unref(formData).page_start,
                                    "onUpdate:modelValue": ($event) => unref(formData).page_start = $event,
                                    modelModifiers: { number: true },
                                    placeholder: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode("span", { class: "flex-none ml-2 mr-2" }, "\u9875\uFF0C\u81F3"),
                              createVNode(_component_el_form_item, { prop: "page_end" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_input, {
                                    style: { "width": "140px" },
                                    modelValue: unref(formData).page_end,
                                    "onUpdate:modelValue": ($event) => unref(formData).page_end = $event,
                                    modelModifiers: { number: true },
                                    placeholder: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u5BFC\u51FA\u6587\u4EF6\u540D\u79F0\uFF1A",
                    prop: "file_name"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(formData).file_name,
                          "onUpdate:modelValue": ($event) => unref(formData).file_name = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u5BFC\u51FA\u6587\u4EF6\u540D\u79F0"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(formData).file_name,
                            "onUpdate:modelValue": ($event) => unref(formData).file_name = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u5BFC\u51FA\u6587\u4EF6\u540D\u79F0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_form_item, { label: "\u6570\u636E\u91CF\uFF1A" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u9884\u8BA1\u5BFC\u51FA" + toDisplayString(unref(exportData).count) + "\u6761\u6570\u636E\uFF0C \u5171" + toDisplayString(unref(exportData).sum_page) + "\u9875\uFF0C\u6BCF\u9875" + toDisplayString(unref(exportData).page_size) + "\u6761\u6570\u636E ", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u5BFC\u51FA\u9650\u5236\uFF1A" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u6BCF\u6B21\u5BFC\u51FA\u6700\u5927\u5141\u8BB8" + toDisplayString(unref(exportData).max_page) + "\u9875\uFF0C\u5171" + toDisplayString(unref(exportData).all_max_size) + "\u6761\u6570\u636E ", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      prop: "page_type",
                      label: "\u5BFC\u51FA\u8303\u56F4\uFF1A",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_radio_group, {
                          modelValue: unref(formData).page_type,
                          "onUpdate:modelValue": ($event) => unref(formData).page_type = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_radio, { label: 0 }, {
                              default: withCtx(() => [
                                createTextVNode("\u5168\u90E8\u5BFC\u51FA")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_radio, { label: 1 }, {
                              default: withCtx(() => [
                                createTextVNode("\u5206\u9875\u5BFC\u51FA")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    unref(formData).page_type == 1 ? (openBlock(), createBlock(_component_el_form_item, {
                      key: 0,
                      label: "\u5206\u9875\u8303\u56F4\uFF1A"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex" }, [
                          createVNode(_component_el_form_item, { prop: "page_start" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                style: { "width": "140px" },
                                modelValue: unref(formData).page_start,
                                "onUpdate:modelValue": ($event) => unref(formData).page_start = $event,
                                modelModifiers: { number: true },
                                placeholder: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "flex-none ml-2 mr-2" }, "\u9875\uFF0C\u81F3"),
                          createVNode(_component_el_form_item, { prop: "page_end" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                style: { "width": "140px" },
                                modelValue: unref(formData).page_end,
                                "onUpdate:modelValue": ($event) => unref(formData).page_end = $event,
                                modelModifiers: { number: true },
                                placeholder: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_el_form_item, {
                      label: "\u5BFC\u51FA\u6587\u4EF6\u540D\u79F0\uFF1A",
                      prop: "file_name"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(formData).file_name,
                          "onUpdate:modelValue": ($event) => unref(formData).file_name = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u5BFC\u51FA\u6587\u4EF6\u540D\u79F0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                createVNode(_component_el_form, {
                  ref_key: "formRef",
                  ref: formRef,
                  model: unref(formData),
                  "label-width": "120px",
                  rules: formRules
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "\u6570\u636E\u91CF\uFF1A" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u9884\u8BA1\u5BFC\u51FA" + toDisplayString(unref(exportData).count) + "\u6761\u6570\u636E\uFF0C \u5171" + toDisplayString(unref(exportData).sum_page) + "\u9875\uFF0C\u6BCF\u9875" + toDisplayString(unref(exportData).page_size) + "\u6761\u6570\u636E ", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u5BFC\u51FA\u9650\u5236\uFF1A" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u6BCF\u6B21\u5BFC\u51FA\u6700\u5927\u5141\u8BB8" + toDisplayString(unref(exportData).max_page) + "\u9875\uFF0C\u5171" + toDisplayString(unref(exportData).all_max_size) + "\u6761\u6570\u636E ", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      prop: "page_type",
                      label: "\u5BFC\u51FA\u8303\u56F4\uFF1A",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_radio_group, {
                          modelValue: unref(formData).page_type,
                          "onUpdate:modelValue": ($event) => unref(formData).page_type = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_radio, { label: 0 }, {
                              default: withCtx(() => [
                                createTextVNode("\u5168\u90E8\u5BFC\u51FA")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_radio, { label: 1 }, {
                              default: withCtx(() => [
                                createTextVNode("\u5206\u9875\u5BFC\u51FA")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    unref(formData).page_type == 1 ? (openBlock(), createBlock(_component_el_form_item, {
                      key: 0,
                      label: "\u5206\u9875\u8303\u56F4\uFF1A"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex" }, [
                          createVNode(_component_el_form_item, { prop: "page_start" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                style: { "width": "140px" },
                                modelValue: unref(formData).page_start,
                                "onUpdate:modelValue": ($event) => unref(formData).page_start = $event,
                                modelModifiers: { number: true },
                                placeholder: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "flex-none ml-2 mr-2" }, "\u9875\uFF0C\u81F3"),
                          createVNode(_component_el_form_item, { prop: "page_end" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                style: { "width": "140px" },
                                modelValue: unref(formData).page_end,
                                "onUpdate:modelValue": ($event) => unref(formData).page_end = $event,
                                modelModifiers: { number: true },
                                placeholder: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_el_form_item, {
                      label: "\u5BFC\u51FA\u6587\u4EF6\u540D\u79F0\uFF1A",
                      prop: "file_name"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(formData).file_name,
                          "onUpdate:modelValue": ($event) => unref(formData).file_name = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u5BFC\u51FA\u6587\u4EF6\u540D\u79F0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/export-data/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "itemList",
  __ssrInlineRender: true,
  props: {
    itemId: {
      type: Number,
      default: 0
    },
    itemName: {
      type: String,
      default: ""
    }
  },
  emits: ["back"],
  setup(__props, { emit: __emit }) {
    const route = useRoute();
    const appStore = useAppStore();
    const userStore = useUserStore();
    const kb_id = route.query.id;
    const tableRef = ref();
    const props = __props;
    const knowDetail = inject("knowDetail");
    const popEntryShow = ref(false);
    const popEntryRef = shallowRef();
    const queryParams = ref({
      keyword: "",
      status: "",
      fd_id: props.itemId,
      kb_id: route.query.id
    });
    const { pager, getLists, resetPage, resetParams } = usePaging({
      fetchFun: itemFileDataList,
      params: queryParams.value
    });
    const waitinglen = ref(0);
    const checkWaitingData = async () => {
      const uuids = pager.lists.map((item) => item.uuid);
      const { tasks, lists } = await checkData({ ...queryParams.value, uuids });
      pager.lists.map((item) => {
        const index = lists.findIndex((item1) => item.uuid == item1.uuid);
        item.status = lists[index].status;
        item.tokens = lists[index].tokens;
      });
      waitinglen.value = tasks.length;
      if (tasks.length == 0) {
        end();
        userStore.getUser();
      }
    };
    const startPolling = async () => {
      checkWaitingData();
    };
    const { start, end } = usePolling(startPolling, { time: 3e3, key: "kb_id" });
    const toImportData = async () => {
      popEntryShow.value = true;
      await nextTick();
      popEntryRef.value.open({ kb_id: route.query.id, fd_id: props.itemId });
    };
    const toEdit = async (uuid) => {
      popEntryShow.value = true;
      await nextTick();
      popEntryRef.value.open({ kb_id: route.query.id, fd_id: props.itemId, uuid });
    };
    const toRetry = async (uuids) => {
      await itemDataRetry({ kb_id, uuids });
      getLists();
      start();
    };
    const toDel = async (uuids) => {
      await feedback.confirm("\u8BF7\u786E\u8BA4\u662F\u5426\u5220\u9664\uFF01");
      await itemDataDel({ kb_id, uuids });
      getLists();
      start();
    };
    const batchDelete = async () => {
      var _a;
      const uuids = (_a = tableRef.value) == null ? void 0 : _a.getSelectionRows().map((item) => item.uuid);
      await toDel(uuids);
    };
    const batchRetry = async () => {
      var _a;
      const uuids = (_a = tableRef.value) == null ? void 0 : _a.getSelectionRows().map((item) => item.uuid);
      await toRetry(uuids);
    };
    const selectChange = () => {
      resetPage();
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Icon = _sfc_main$3;
      const _component_el_button = ElButton;
      const _component_export_data = _sfc_main$1;
      const _component_el_input = ElInput;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_el_table_column = ElTableColumn;
      const _component_OverflowTooltip = _sfc_main$4;
      const _component_pagination = _sfc_main$5;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="pb-[20px] flex items-center font-bold cursor-pointer"><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "el-icon-Back",
        size: "16"
      }, null, _parent));
      _push(`<span class="ml-2">${ssrInterpolate(__props.itemName)}</span></div></div><div class="flex"><div>`);
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        disabled: unref(knowDetail).power === 3,
        onClick: toImportData
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5F55\u5165\u6570\u636E `);
          } else {
            return [
              createTextVNode(" \u5F55\u5165\u6570\u636E ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_export_data, {
        class: "mx-2.5 inline-block",
        "fetch-fun": unref(itemFileDataList),
        params: unref(queryParams),
        "page-size": unref(pager).size
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_button, {
              disabled: unref(knowDetail).power === 3
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4E00\u952E\u5BFC\u51FA `);
                } else {
                  return [
                    createTextVNode(" \u4E00\u952E\u5BFC\u51FA ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_button, {
                disabled: unref(knowDetail).power === 3
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u4E00\u952E\u5BFC\u51FA ")
                ]),
                _: 1
              }, 8, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        disabled: !((_a = unref(tableRef)) == null ? void 0 : _a.getSelectionRows().length),
        onClick: batchRetry
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6279\u91CF\u91CD\u8BD5 `);
          } else {
            return [
              createTextVNode(" \u6279\u91CF\u91CD\u8BD5 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        disabled: !((_b = unref(tableRef)) == null ? void 0 : _b.getSelectionRows().length),
        onClick: batchDelete
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6279\u91CF\u5220\u9664 `);
          } else {
            return [
              createTextVNode(" \u6279\u91CF\u5220\u9664 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ml-auto flex"><div class="min-w-[240px]">`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: unref(queryParams).keyword,
        "onUpdate:modelValue": ($event) => unref(queryParams).keyword = $event,
        placeholder: "\u8BF7\u8F93\u5165\u95EE\u9898/\u56DE\u7B54\u5185\u5BB9\u5173\u952E\u8BCD\u8FDB\u884C\u641C\u7D22",
        clearable: "",
        onKeyup: unref(resetPage)
      }, null, _parent));
      _push(`</div><div class="min-w-[180px] ml-2">`);
      _push(ssrRenderComponent(_component_el_select, {
        modelValue: unref(queryParams).status,
        "onUpdate:modelValue": ($event) => unref(queryParams).status = $event,
        onChange: selectChange
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_option, {
              label: "\u5168\u90E8",
              value: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_option, {
              label: "\u7B49\u5F85\u5B66\u4E60",
              value: 0
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_option, {
              label: "\u5B66\u4E60\u4E2D",
              value: 1
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_option, {
              label: "\u5B66\u4E60\u5931\u8D25",
              value: 3
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_option, {
              label: "\u5B66\u4E60\u6210\u529F",
              value: 2
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_option, {
                label: "\u5168\u90E8",
                value: ""
              }),
              createVNode(_component_el_option, {
                label: "\u7B49\u5F85\u5B66\u4E60",
                value: 0
              }),
              createVNode(_component_el_option, {
                label: "\u5B66\u4E60\u4E2D",
                value: 1
              }),
              createVNode(_component_el_option, {
                label: "\u5B66\u4E60\u5931\u8D25",
                value: 3
              }),
              createVNode(_component_el_option, {
                label: "\u5B66\u4E60\u6210\u529F",
                value: 2
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(unref(ElTable), mergeProps({
        ref_key: "tableRef",
        ref: tableRef,
        class: "mt-4",
        data: unref(pager).lists,
        size: "large",
        "row-class-name": "h-[70px]"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(pager).loading)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_table_column, {
              type: "selection",
              width: "55"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u6587\u6863\u5185\u5BB9",
              prop: "question",
              "min-width": "200"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_OverflowTooltip, {
                    content: row.question,
                    line: 2,
                    teleported: true,
                    effect: "light",
                    placement: "right"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_OverflowTooltip, {
                      content: row.question,
                      line: 2,
                      teleported: true,
                      effect: "light",
                      placement: "right"
                    }, null, 8, ["content"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u8865\u5145\u5185\u5BB9",
              prop: "answer",
              "min-width": "200"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_OverflowTooltip, {
                    content: row.answer || "-",
                    line: 2,
                    teleported: true,
                    effect: "light",
                    placement: "right"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_OverflowTooltip, {
                      content: row.answer || "-",
                      line: 2,
                      teleported: true,
                      effect: "light",
                      placement: "right"
                    }, null, 8, ["content"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u5B66\u4E60\u72B6\u6001",
              prop: "source",
              "min-width": "150"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (row.status == 0) {
                    _push3(`<div${_scopeId2}>\u7B49\u5F85\u5B66\u4E60</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (row.status == 1) {
                    _push3(`<div class="text-warning"${_scopeId2}> \u5B66\u4E60\u4E2D </div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (row.status == 2) {
                    _push3(`<div class="text-success"${_scopeId2}> \u5B66\u4E60\u6210\u529F </div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (row.status == 3) {
                    _push3(`<div class="text-danger"${_scopeId2}> \u5B66\u4E60\u5931\u8D25 </div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (row.status == 3) {
                    _push3(`<div class="text-danger"${_scopeId2}> \u539F\u56E0\uFF1A${ssrInterpolate(row.error)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    row.status == 0 ? (openBlock(), createBlock("div", { key: 0 }, "\u7B49\u5F85\u5B66\u4E60")) : createCommentVNode("", true),
                    row.status == 1 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-warning"
                    }, " \u5B66\u4E60\u4E2D ")) : createCommentVNode("", true),
                    row.status == 2 ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "text-success"
                    }, " \u5B66\u4E60\u6210\u529F ")) : createCommentVNode("", true),
                    row.status == 3 ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: "text-danger"
                    }, " \u5B66\u4E60\u5931\u8D25 ")) : createCommentVNode("", true),
                    row.status == 3 ? (openBlock(), createBlock("div", {
                      key: 4,
                      class: "text-danger"
                    }, " \u539F\u56E0\uFF1A" + toDisplayString(row.error), 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: `\u6D88\u8017${unref(appStore).getTokenUnit}`,
              prop: "tokens",
              "min-width": "150"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u6700\u540E\u66F4\u65B0\u65F6\u95F4",
              prop: "update_time",
              "min-width": "150"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u64CD\u4F5C",
              prop: "source",
              "min-width": "180"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (row.status != 1) {
                    _push3(ssrRenderComponent(_component_el_button, {
                      type: "primary",
                      onClick: ($event) => toEdit(row.uuid),
                      link: ""
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u4FEE\u6B63`);
                        } else {
                          return [
                            createTextVNode("\u4FEE\u6B63")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (row.status == 3) {
                    _push3(ssrRenderComponent(_component_el_button, {
                      type: "primary",
                      onClick: ($event) => toRetry([row.uuid]),
                      link: ""
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u91CD\u8BD5`);
                        } else {
                          return [
                            createTextVNode("\u91CD\u8BD5")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_el_button, {
                    type: "danger",
                    onClick: ($event) => toDel([row.uuid]),
                    link: ""
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u5220\u9664`);
                      } else {
                        return [
                          createTextVNode("\u5220\u9664")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    row.status != 1 ? (openBlock(), createBlock(_component_el_button, {
                      key: 0,
                      type: "primary",
                      onClick: ($event) => toEdit(row.uuid),
                      link: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u4FEE\u6B63")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : createCommentVNode("", true),
                    row.status == 3 ? (openBlock(), createBlock(_component_el_button, {
                      key: 1,
                      type: "primary",
                      onClick: ($event) => toRetry([row.uuid]),
                      link: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u91CD\u8BD5")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : createCommentVNode("", true),
                    createVNode(_component_el_button, {
                      type: "danger",
                      onClick: ($event) => toDel([row.uuid]),
                      link: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u5220\u9664")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_table_column, {
                type: "selection",
                width: "55"
              }),
              createVNode(_component_el_table_column, {
                label: "\u6587\u6863\u5185\u5BB9",
                prop: "question",
                "min-width": "200"
              }, {
                default: withCtx(({ row }) => [
                  createVNode(_component_OverflowTooltip, {
                    content: row.question,
                    line: 2,
                    teleported: true,
                    effect: "light",
                    placement: "right"
                  }, null, 8, ["content"])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u8865\u5145\u5185\u5BB9",
                prop: "answer",
                "min-width": "200"
              }, {
                default: withCtx(({ row }) => [
                  createVNode(_component_OverflowTooltip, {
                    content: row.answer || "-",
                    line: 2,
                    teleported: true,
                    effect: "light",
                    placement: "right"
                  }, null, 8, ["content"])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u5B66\u4E60\u72B6\u6001",
                prop: "source",
                "min-width": "150"
              }, {
                default: withCtx(({ row }) => [
                  row.status == 0 ? (openBlock(), createBlock("div", { key: 0 }, "\u7B49\u5F85\u5B66\u4E60")) : createCommentVNode("", true),
                  row.status == 1 ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "text-warning"
                  }, " \u5B66\u4E60\u4E2D ")) : createCommentVNode("", true),
                  row.status == 2 ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "text-success"
                  }, " \u5B66\u4E60\u6210\u529F ")) : createCommentVNode("", true),
                  row.status == 3 ? (openBlock(), createBlock("div", {
                    key: 3,
                    class: "text-danger"
                  }, " \u5B66\u4E60\u5931\u8D25 ")) : createCommentVNode("", true),
                  row.status == 3 ? (openBlock(), createBlock("div", {
                    key: 4,
                    class: "text-danger"
                  }, " \u539F\u56E0\uFF1A" + toDisplayString(row.error), 1)) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: `\u6D88\u8017${unref(appStore).getTokenUnit}`,
                prop: "tokens",
                "min-width": "150"
              }, null, 8, ["label"]),
              createVNode(_component_el_table_column, {
                label: "\u6700\u540E\u66F4\u65B0\u65F6\u95F4",
                prop: "update_time",
                "min-width": "150"
              }),
              createVNode(_component_el_table_column, {
                label: "\u64CD\u4F5C",
                prop: "source",
                "min-width": "180"
              }, {
                default: withCtx(({ row }) => [
                  row.status != 1 ? (openBlock(), createBlock(_component_el_button, {
                    key: 0,
                    type: "primary",
                    onClick: ($event) => toEdit(row.uuid),
                    link: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u4FEE\u6B63")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])) : createCommentVNode("", true),
                  row.status == 3 ? (openBlock(), createBlock(_component_el_button, {
                    key: 1,
                    type: "primary",
                    onClick: ($event) => toRetry([row.uuid]),
                    link: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u91CD\u8BD5")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])) : createCommentVNode("", true),
                  createVNode(_component_el_button, {
                    type: "danger",
                    onClick: ($event) => toDel([row.uuid]),
                    link: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u5220\u9664")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-end mt-4">`);
      _push(ssrRenderComponent(_component_pagination, {
        modelValue: unref(pager),
        "onUpdate:modelValue": ($event) => isRef(pager) ? pager.value = $event : null,
        onChange: () => {
          unref(start)();
          unref(getLists)();
        }
      }, null, _parent));
      _push(`</div>`);
      if (unref(popEntryShow)) {
        _push(ssrRenderComponent(_sfc_main$2, {
          ref_key: "popEntryRef",
          ref: popEntryRef,
          onSuccess: () => {
            popEntryShow.value = false;
            unref(getLists)();
            unref(start)();
          },
          onClose: ($event) => popEntryShow.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/_components/study_com/itemList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=itemList-DL-7It9q.mjs.map
