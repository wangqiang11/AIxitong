import { P as Popup } from './index-BKj4TrcW.mjs';
import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { a5 as useAppStore, a as useRouter, E as ElInput } from './server.mjs';
import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { _ as __nuxt_component_7 } from './index-CXZnYiu9.mjs';
import { _ as __nuxt_component_1 } from './index-BaKT_MyR.mjs';
import { defineComponent, shallowRef, ref, reactive, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { a as knowKnowledgeEdit, c as knowKnowledgeAdd, k as knowKnowledgeDetail } from './my_database-C6D0rbWD.mjs';
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
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './dropdown-C6fgV-Vy.mjs';
import './index-CUhOTuS-.mjs';
import './index-0xCxAaTZ.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import './el-collapse-item-DSo9CmH5.mjs';
import './index-DadLUs6d.mjs';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "addPop",
  __ssrInlineRender: true,
  emits: ["close", "success"],
  setup(__props, { expose: __expose, emit: __emit }) {
    useAppStore();
    const emits = __emit;
    const popRef = shallowRef();
    const formRef = shallowRef();
    const id = ref(-1);
    const formData = reactive({
      name: "",
      //库的名称
      image: "",
      //封面图标
      intro: "",
      //知识库简介
      documents_model_id: "",
      //文件处理模型
      documents_model_sub_id: "",
      //文件处理模型
      embedding_model_id: ""
      //向量化的模型
      //   type: 1, //库的类型 1-问答型 2-检索型
      //   sort: 0, //排序编号
      //   is_enable: 1 //是否启用 0-否 1-是
    });
    const rules = reactive({
      name: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u5E93\u7684\u540D\u79F0",
          trigger: "change"
        }
      ],
      image: [
        {
          required: true,
          message: "\u8BF7\u9009\u62E9\u5C01\u9762\u56FE\u6807",
          trigger: "change"
        }
      ],
      type: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change"
        }
      ],
      embedding_model_id: [
        {
          required: true,
          message: "\u8BF7\u9009\u62E9\u5411\u91CF\u6A21\u578B"
        }
      ],
      documents_model_id: [
        {
          required: true,
          message: "\u8BF7\u9009\u62E9\u6587\u4EF6\u5904\u7406\u901A\u9053"
        }
      ],
      documents_model_sub_id: [
        {
          required: true,
          message: "\u8BF7\u9009\u62E9\u6587\u4EF6\u5904\u7406\u6A21\u578B"
        }
      ],
      sort: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u6392\u5E8F",
          trigger: "change"
        }
      ],
      is_enable: [
        {
          required: true,
          message: "\u8BF7\u9009\u62E9\u5E93\u7684\u72B6\u6001",
          trigger: "change"
        }
      ]
    });
    const router = useRouter();
    const submitData = async () => {
      var _a;
      await ((_a = formRef.value) == null ? void 0 : _a.validate());
      if (id.value != -1) {
        await knowKnowledgeEdit({ id: id.value, ...formData });
      } else {
        const { id: id2 } = await knowKnowledgeAdd({ ...formData });
        router.push({
          path: "/application/kb/detail",
          query: {
            id: id2
          }
        });
      }
      emits("success");
      popRef.value.close();
    };
    const getData = async (id2) => {
      const res = await knowKnowledgeDetail({ id: id2 });
      Object.keys(res).map((item) => {
        formData[item] = res[item];
      });
    };
    const open = async (option) => {
      var _a;
      (_a = formRef.value) == null ? void 0 : _a.resetFields();
      id.value = -1;
      popRef.value.open();
      if (option == null ? void 0 : option.id) {
        id.value = option.id;
        await getData(id.value);
      }
    };
    __expose({ open });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Popup = Popup;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_popover = ElPopover;
      const _component_Icon = _sfc_main$1;
      const _component_ModelPicker = __nuxt_component_7;
      const _component_UploadImg = __nuxt_component_1;
      _push(ssrRenderComponent(_component_Popup, mergeProps({
        ref_key: "popRef",
        ref: popRef,
        title: `${unref(id) != -1 ? "\u7F16\u8F91" : "\u65B0\u589E"}\u77E5\u8BC6\u5E93`,
        width: "500px",
        async: "",
        onConfirm: submitData
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form, {
              ref_key: "formRef",
              ref: formRef,
              "label-width": "130px",
              model: unref(formData),
              rules: unref(rules)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u77E5\u8BC6\u5E93\u540D\u79F0",
                    prop: "name"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(formData).name,
                          "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u77E5\u8BC6\u5E93\u540D\u79F0",
                          class: "w-[240px]"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(formData).name,
                            "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u77E5\u8BC6\u5E93\u540D\u79F0",
                            class: "w-[240px]"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u77E5\u8BC6\u5E93\u7B80\u4ECB" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          type: "textarea",
                          modelValue: unref(formData).intro,
                          "onUpdate:modelValue": ($event) => unref(formData).intro = $event,
                          placeholder: "\u8BF7\u7528\u4E00\u53E5\u8BDD\u63CF\u8FF0\u77E5\u8BC6\u5E93",
                          class: "w-[240px]",
                          rows: 3
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            type: "textarea",
                            modelValue: unref(formData).intro,
                            "onUpdate:modelValue": ($event) => unref(formData).intro = $event,
                            placeholder: "\u8BF7\u7528\u4E00\u53E5\u8BDD\u63CF\u8FF0\u77E5\u8BC6\u5E93",
                            class: "w-[240px]",
                            rows: 3
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u5411\u91CF\u6A21\u578B",
                    prop: "embedding_model_id"
                  }, {
                    label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_popover, {
                          placement: "right",
                          width: 300,
                          "show-arrow": false,
                          transition: "custom-popover",
                          trigger: "hover",
                          content: "\u5411\u91CF\u6A21\u578B\u53EF\u4EE5\u5C06\u81EA\u7136\u8BED\u8A00\u8F6C\u6210\u5411\u91CF(\u5373\u6570\u636E\u8BAD\u7EC3), \u7528\u4E8E\u8FDB\u884C\u8BED\u4E49\u68C0\u7D22, \u6CE8\u610F: \u4E0D\u540C\u5411\u91CF\u6A21\u578B\u65E0\u6CD5\u4E00\u8D77\u4F7F\u7528, \u9009\u62E9\u5B8C\u540E\u5C06\u65E0\u6CD5\u4FEE\u6539\u3002"
                        }, {
                          reference: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center cursor-pointer text-[#666]"${_scopeId4}><span class="mr-1"${_scopeId4}>\u5411\u91CF\u6A21\u578B</span>`);
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "el-icon-QuestionFilled",
                                size: 14
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center cursor-pointer text-[#666]" }, [
                                  createVNode("span", { class: "mr-1" }, "\u5411\u91CF\u6A21\u578B"),
                                  createVNode(_component_Icon, {
                                    name: "el-icon-QuestionFilled",
                                    size: 14
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_popover, {
                            placement: "right",
                            width: 300,
                            "show-arrow": false,
                            transition: "custom-popover",
                            trigger: "hover",
                            content: "\u5411\u91CF\u6A21\u578B\u53EF\u4EE5\u5C06\u81EA\u7136\u8BED\u8A00\u8F6C\u6210\u5411\u91CF(\u5373\u6570\u636E\u8BAD\u7EC3), \u7528\u4E8E\u8FDB\u884C\u8BED\u4E49\u68C0\u7D22, \u6CE8\u610F: \u4E0D\u540C\u5411\u91CF\u6A21\u578B\u65E0\u6CD5\u4E00\u8D77\u4F7F\u7528, \u9009\u62E9\u5B8C\u540E\u5C06\u65E0\u6CD5\u4FEE\u6539\u3002"
                          }, {
                            reference: withCtx(() => [
                              createVNode("div", { class: "flex items-center cursor-pointer text-[#666]" }, [
                                createVNode("span", { class: "mr-1" }, "\u5411\u91CF\u6A21\u578B"),
                                createVNode(_component_Icon, {
                                  name: "el-icon-QuestionFilled",
                                  size: 14
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ModelPicker, {
                          class: "flex-1",
                          id: unref(formData).embedding_model_id,
                          "onUpdate:id": ($event) => unref(formData).embedding_model_id = $event,
                          "set-default": false,
                          type: "vectorModels",
                          disabled: unref(id) != -1
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ModelPicker, {
                            class: "flex-1",
                            id: unref(formData).embedding_model_id,
                            "onUpdate:id": ($event) => unref(formData).embedding_model_id = $event,
                            "set-default": false,
                            type: "vectorModels",
                            disabled: unref(id) != -1
                          }, null, 8, ["id", "onUpdate:id", "disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u6587\u4EF6\u5904\u7406\u6A21\u578B",
                    prop: "documents_model_sub_id"
                  }, {
                    label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_popover, {
                          placement: "right",
                          width: 300,
                          "show-arrow": false,
                          transition: "custom-popover",
                          trigger: "hover",
                          content: "\u6587\u4EF6\u6A21\u578B\u7528\u4E8EQA\u62C6\u5206\u529F\u80FD(\u5BFC\u5165\u6570\u636E->\u81EA\u52A8\u62C6\u5206\u95EE\u7B54\u5BF9), \u5229\u7528\u8BE5AI\u6A21\u578B\u5BF9\u5BFC\u5165\u7684\u6587\u672C\u8FDB\u884C\u5904\u7406\uFF0C\u6700\u7EC8\u62C6\u5206\u6210\u4E00\u95EE\u4E00\u7B54\u7684\u6570\u636E\u5F62\u5F0F\u3002"
                        }, {
                          reference: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center cursor-pointer text-[#666]"${_scopeId4}><span class="mr-1"${_scopeId4}>\u6587\u4EF6\u5904\u7406\u6A21\u578B</span>`);
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "el-icon-QuestionFilled",
                                size: 14
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center cursor-pointer text-[#666]" }, [
                                  createVNode("span", { class: "mr-1" }, "\u6587\u4EF6\u5904\u7406\u6A21\u578B"),
                                  createVNode(_component_Icon, {
                                    name: "el-icon-QuestionFilled",
                                    size: 14
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_popover, {
                            placement: "right",
                            width: 300,
                            "show-arrow": false,
                            transition: "custom-popover",
                            trigger: "hover",
                            content: "\u6587\u4EF6\u6A21\u578B\u7528\u4E8EQA\u62C6\u5206\u529F\u80FD(\u5BFC\u5165\u6570\u636E->\u81EA\u52A8\u62C6\u5206\u95EE\u7B54\u5BF9), \u5229\u7528\u8BE5AI\u6A21\u578B\u5BF9\u5BFC\u5165\u7684\u6587\u672C\u8FDB\u884C\u5904\u7406\uFF0C\u6700\u7EC8\u62C6\u5206\u6210\u4E00\u95EE\u4E00\u7B54\u7684\u6570\u636E\u5F62\u5F0F\u3002"
                          }, {
                            reference: withCtx(() => [
                              createVNode("div", { class: "flex items-center cursor-pointer text-[#666]" }, [
                                createVNode("span", { class: "mr-1" }, "\u6587\u4EF6\u5904\u7406\u6A21\u578B"),
                                createVNode(_component_Icon, {
                                  name: "el-icon-QuestionFilled",
                                  size: 14
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ModelPicker, {
                          class: "flex-1",
                          id: unref(formData).documents_model_id,
                          "onUpdate:id": ($event) => unref(formData).documents_model_id = $event,
                          sub_id: unref(formData).documents_model_sub_id,
                          "onUpdate:sub_id": ($event) => unref(formData).documents_model_sub_id = $event,
                          "set-default": false,
                          disabled: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ModelPicker, {
                            class: "flex-1",
                            id: unref(formData).documents_model_id,
                            "onUpdate:id": ($event) => unref(formData).documents_model_id = $event,
                            sub_id: unref(formData).documents_model_sub_id,
                            "onUpdate:sub_id": ($event) => unref(formData).documents_model_sub_id = $event,
                            "set-default": false,
                            disabled: ""
                          }, null, 8, ["id", "onUpdate:id", "sub_id", "onUpdate:sub_id"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u5C01\u9762",
                    prop: "image"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UploadImg, {
                          modelValue: unref(formData).image,
                          "onUpdate:modelValue": ($event) => unref(formData).image = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="form-tips"${_scopeId3}>\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A200*160px</div></div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode(_component_UploadImg, {
                              modelValue: unref(formData).image,
                              "onUpdate:modelValue": ($event) => unref(formData).image = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("div", { class: "form-tips" }, "\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A200*160px")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_form_item, {
                      label: "\u77E5\u8BC6\u5E93\u540D\u79F0",
                      prop: "name"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(formData).name,
                          "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u77E5\u8BC6\u5E93\u540D\u79F0",
                          class: "w-[240px]"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u77E5\u8BC6\u5E93\u7B80\u4ECB" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          type: "textarea",
                          modelValue: unref(formData).intro,
                          "onUpdate:modelValue": ($event) => unref(formData).intro = $event,
                          placeholder: "\u8BF7\u7528\u4E00\u53E5\u8BDD\u63CF\u8FF0\u77E5\u8BC6\u5E93",
                          class: "w-[240px]",
                          rows: 3
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u5411\u91CF\u6A21\u578B",
                      prop: "embedding_model_id"
                    }, {
                      label: withCtx(() => [
                        createVNode(_component_el_popover, {
                          placement: "right",
                          width: 300,
                          "show-arrow": false,
                          transition: "custom-popover",
                          trigger: "hover",
                          content: "\u5411\u91CF\u6A21\u578B\u53EF\u4EE5\u5C06\u81EA\u7136\u8BED\u8A00\u8F6C\u6210\u5411\u91CF(\u5373\u6570\u636E\u8BAD\u7EC3), \u7528\u4E8E\u8FDB\u884C\u8BED\u4E49\u68C0\u7D22, \u6CE8\u610F: \u4E0D\u540C\u5411\u91CF\u6A21\u578B\u65E0\u6CD5\u4E00\u8D77\u4F7F\u7528, \u9009\u62E9\u5B8C\u540E\u5C06\u65E0\u6CD5\u4FEE\u6539\u3002"
                        }, {
                          reference: withCtx(() => [
                            createVNode("div", { class: "flex items-center cursor-pointer text-[#666]" }, [
                              createVNode("span", { class: "mr-1" }, "\u5411\u91CF\u6A21\u578B"),
                              createVNode(_component_Icon, {
                                name: "el-icon-QuestionFilled",
                                size: 14
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_ModelPicker, {
                          class: "flex-1",
                          id: unref(formData).embedding_model_id,
                          "onUpdate:id": ($event) => unref(formData).embedding_model_id = $event,
                          "set-default": false,
                          type: "vectorModels",
                          disabled: unref(id) != -1
                        }, null, 8, ["id", "onUpdate:id", "disabled"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u6587\u4EF6\u5904\u7406\u6A21\u578B",
                      prop: "documents_model_sub_id"
                    }, {
                      label: withCtx(() => [
                        createVNode(_component_el_popover, {
                          placement: "right",
                          width: 300,
                          "show-arrow": false,
                          transition: "custom-popover",
                          trigger: "hover",
                          content: "\u6587\u4EF6\u6A21\u578B\u7528\u4E8EQA\u62C6\u5206\u529F\u80FD(\u5BFC\u5165\u6570\u636E->\u81EA\u52A8\u62C6\u5206\u95EE\u7B54\u5BF9), \u5229\u7528\u8BE5AI\u6A21\u578B\u5BF9\u5BFC\u5165\u7684\u6587\u672C\u8FDB\u884C\u5904\u7406\uFF0C\u6700\u7EC8\u62C6\u5206\u6210\u4E00\u95EE\u4E00\u7B54\u7684\u6570\u636E\u5F62\u5F0F\u3002"
                        }, {
                          reference: withCtx(() => [
                            createVNode("div", { class: "flex items-center cursor-pointer text-[#666]" }, [
                              createVNode("span", { class: "mr-1" }, "\u6587\u4EF6\u5904\u7406\u6A21\u578B"),
                              createVNode(_component_Icon, {
                                name: "el-icon-QuestionFilled",
                                size: 14
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_ModelPicker, {
                          class: "flex-1",
                          id: unref(formData).documents_model_id,
                          "onUpdate:id": ($event) => unref(formData).documents_model_id = $event,
                          sub_id: unref(formData).documents_model_sub_id,
                          "onUpdate:sub_id": ($event) => unref(formData).documents_model_sub_id = $event,
                          "set-default": false,
                          disabled: ""
                        }, null, 8, ["id", "onUpdate:id", "sub_id", "onUpdate:sub_id"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u5C01\u9762",
                      prop: "image"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode(_component_UploadImg, {
                            modelValue: unref(formData).image,
                            "onUpdate:modelValue": ($event) => unref(formData).image = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "form-tips" }, "\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A200*160px")
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
                ref_key: "formRef",
                ref: formRef,
                "label-width": "130px",
                model: unref(formData),
                rules: unref(rules)
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, {
                    label: "\u77E5\u8BC6\u5E93\u540D\u79F0",
                    prop: "name"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: unref(formData).name,
                        "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                        placeholder: "\u8BF7\u8F93\u5165\u77E5\u8BC6\u5E93\u540D\u79F0",
                        class: "w-[240px]"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u77E5\u8BC6\u5E93\u7B80\u4ECB" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        type: "textarea",
                        modelValue: unref(formData).intro,
                        "onUpdate:modelValue": ($event) => unref(formData).intro = $event,
                        placeholder: "\u8BF7\u7528\u4E00\u53E5\u8BDD\u63CF\u8FF0\u77E5\u8BC6\u5E93",
                        class: "w-[240px]",
                        rows: 3
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, {
                    label: "\u5411\u91CF\u6A21\u578B",
                    prop: "embedding_model_id"
                  }, {
                    label: withCtx(() => [
                      createVNode(_component_el_popover, {
                        placement: "right",
                        width: 300,
                        "show-arrow": false,
                        transition: "custom-popover",
                        trigger: "hover",
                        content: "\u5411\u91CF\u6A21\u578B\u53EF\u4EE5\u5C06\u81EA\u7136\u8BED\u8A00\u8F6C\u6210\u5411\u91CF(\u5373\u6570\u636E\u8BAD\u7EC3), \u7528\u4E8E\u8FDB\u884C\u8BED\u4E49\u68C0\u7D22, \u6CE8\u610F: \u4E0D\u540C\u5411\u91CF\u6A21\u578B\u65E0\u6CD5\u4E00\u8D77\u4F7F\u7528, \u9009\u62E9\u5B8C\u540E\u5C06\u65E0\u6CD5\u4FEE\u6539\u3002"
                      }, {
                        reference: withCtx(() => [
                          createVNode("div", { class: "flex items-center cursor-pointer text-[#666]" }, [
                            createVNode("span", { class: "mr-1" }, "\u5411\u91CF\u6A21\u578B"),
                            createVNode(_component_Icon, {
                              name: "el-icon-QuestionFilled",
                              size: 14
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_ModelPicker, {
                        class: "flex-1",
                        id: unref(formData).embedding_model_id,
                        "onUpdate:id": ($event) => unref(formData).embedding_model_id = $event,
                        "set-default": false,
                        type: "vectorModels",
                        disabled: unref(id) != -1
                      }, null, 8, ["id", "onUpdate:id", "disabled"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, {
                    label: "\u6587\u4EF6\u5904\u7406\u6A21\u578B",
                    prop: "documents_model_sub_id"
                  }, {
                    label: withCtx(() => [
                      createVNode(_component_el_popover, {
                        placement: "right",
                        width: 300,
                        "show-arrow": false,
                        transition: "custom-popover",
                        trigger: "hover",
                        content: "\u6587\u4EF6\u6A21\u578B\u7528\u4E8EQA\u62C6\u5206\u529F\u80FD(\u5BFC\u5165\u6570\u636E->\u81EA\u52A8\u62C6\u5206\u95EE\u7B54\u5BF9), \u5229\u7528\u8BE5AI\u6A21\u578B\u5BF9\u5BFC\u5165\u7684\u6587\u672C\u8FDB\u884C\u5904\u7406\uFF0C\u6700\u7EC8\u62C6\u5206\u6210\u4E00\u95EE\u4E00\u7B54\u7684\u6570\u636E\u5F62\u5F0F\u3002"
                      }, {
                        reference: withCtx(() => [
                          createVNode("div", { class: "flex items-center cursor-pointer text-[#666]" }, [
                            createVNode("span", { class: "mr-1" }, "\u6587\u4EF6\u5904\u7406\u6A21\u578B"),
                            createVNode(_component_Icon, {
                              name: "el-icon-QuestionFilled",
                              size: 14
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_ModelPicker, {
                        class: "flex-1",
                        id: unref(formData).documents_model_id,
                        "onUpdate:id": ($event) => unref(formData).documents_model_id = $event,
                        sub_id: unref(formData).documents_model_sub_id,
                        "onUpdate:sub_id": ($event) => unref(formData).documents_model_sub_id = $event,
                        "set-default": false,
                        disabled: ""
                      }, null, 8, ["id", "onUpdate:id", "sub_id", "onUpdate:sub_id"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, {
                    label: "\u5C01\u9762",
                    prop: "image"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode(_component_UploadImg, {
                          modelValue: unref(formData).image,
                          "onUpdate:modelValue": ($event) => unref(formData).image = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("div", { class: "form-tips" }, "\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A200*160px")
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
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/_components/addPop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=addPop-CT4BzglM.mjs.map
