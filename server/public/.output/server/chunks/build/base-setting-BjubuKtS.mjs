import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { ag as useRoute, a as useRouter, A as feedback, E as ElInput, d as ElButton } from './server.mjs';
import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { _ as __nuxt_component_7 } from './index-CXZnYiu9.mjs';
import { _ as __nuxt_component_1 } from './index-BaKT_MyR.mjs';
import { useSSRContext, defineComponent, reactive, watch, mergeProps, withCtx, unref, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as knowKnowledgeEdit, b as knowKnowledgeDel } from './my_database-C6D0rbWD.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
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
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './dropdown-C6fgV-Vy.mjs';
import './index-CUhOTuS-.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import './el-collapse-item-DSo9CmH5.mjs';
import './index-DadLUs6d.mjs';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "base-setting",
  __ssrInlineRender: true,
  props: {
    data: { default: () => ({}) }
  },
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const route = useRoute();
    const router = useRouter();
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
      embedding_model_id: "",
      //向量化的模型
      is_owner: 1
    });
    watch(
      () => props.data,
      (value) => {
        Object.assign(formData, value);
      }
    );
    const submit = async () => {
      await knowKnowledgeEdit({ ...formData, id: route.query.id });
      emits("update");
    };
    const delDatabase = async () => {
      await feedback.confirm(`\u786E\u8BA4\u5220\u9664\u5417\uFF1F`);
      await knowKnowledgeDel({ id: route.query.id });
      router.push("/application/layout/kb");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElScrollbar = ElScrollbar;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_popover = ElPopover;
      const _component_Icon = _sfc_main$1;
      const _component_ModelPicker = __nuxt_component_7;
      const _component_upload_img = __nuxt_component_1;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full" }, _attrs))} data-v-50067880>`);
      _push(ssrRenderComponent(_component_ElScrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form, {
              "label-position": "top",
              class: "setup-form"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u77E5\u8BC6\u5E93\u540D\u79F0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          placeholder: "\u77E5\u8BC6\u5E93\u540D\u79F0",
                          modelValue: unref(formData).name,
                          "onUpdate:modelValue": ($event) => unref(formData).name = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            placeholder: "\u77E5\u8BC6\u5E93\u540D\u79F0",
                            modelValue: unref(formData).name,
                            "onUpdate:modelValue": ($event) => unref(formData).name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u7B80\u4ECB" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          type: "textarea",
                          placeholder: "\u77E5\u8BC6\u5E93\u540D\u79F0",
                          rows: 5,
                          resize: "none",
                          modelValue: unref(formData).intro,
                          "onUpdate:modelValue": ($event) => unref(formData).intro = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            type: "textarea",
                            placeholder: "\u77E5\u8BC6\u5E93\u540D\u79F0",
                            rows: 5,
                            resize: "none",
                            modelValue: unref(formData).intro,
                            "onUpdate:modelValue": ($event) => unref(formData).intro = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u5411\u91CF\u6A21\u578B" }, {
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
                              _push5(`<div class="flex items-center cursor-pointer text-[#666]" data-v-50067880${_scopeId4}><span class="mr-1" data-v-50067880${_scopeId4}>\u5411\u91CF\u6A21\u578B</span>`);
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
                          disabled: true
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ModelPicker, {
                            class: "flex-1",
                            id: unref(formData).embedding_model_id,
                            "onUpdate:id": ($event) => unref(formData).embedding_model_id = $event,
                            "set-default": false,
                            type: "vectorModels",
                            disabled: true
                          }, null, 8, ["id", "onUpdate:id"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u6587\u4EF6\u5904\u7406\u6A21\u578B" }, {
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
                              _push5(`<div class="flex items-center cursor-pointer text-[#666]" data-v-50067880${_scopeId4}><span class="mr-1" data-v-50067880${_scopeId4}>\u6587\u4EF6\u5904\u7406\u6A21\u578B</span>`);
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
                          "set-default": false
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ModelPicker, {
                            class: "flex-1",
                            id: unref(formData).documents_model_id,
                            "onUpdate:id": ($event) => unref(formData).documents_model_id = $event,
                            sub_id: unref(formData).documents_model_sub_id,
                            "onUpdate:sub_id": ($event) => unref(formData).documents_model_sub_id = $event,
                            "set-default": false
                          }, null, 8, ["id", "onUpdate:id", "sub_id", "onUpdate:sub_id"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u8BBE\u7F6E\u5C01\u9762" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_upload_img, {
                          modelValue: unref(formData).image,
                          "onUpdate:modelValue": ($event) => unref(formData).image = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_upload_img, {
                            modelValue: unref(formData).image,
                            "onUpdate:modelValue": ($event) => unref(formData).image = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_button, {
                          type: "primary",
                          disabled: _ctx.data.power >= 2,
                          onClick: submit
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u4FDD\u5B58\u8BBE\u7F6E `);
                            } else {
                              return [
                                createTextVNode(" \u4FDD\u5B58\u8BBE\u7F6E ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_button, {
                          onClick: delDatabase,
                          disabled: _ctx.data.power !== 1
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u5220\u9664 `);
                            } else {
                              return [
                                createTextVNode(" \u5220\u9664 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_button, {
                            type: "primary",
                            disabled: _ctx.data.power >= 2,
                            onClick: submit
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u4FDD\u5B58\u8BBE\u7F6E ")
                            ]),
                            _: 1
                          }, 8, ["disabled"]),
                          createVNode(_component_el_button, {
                            onClick: delDatabase,
                            disabled: _ctx.data.power !== 1
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u5220\u9664 ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_form_item, { label: "\u77E5\u8BC6\u5E93\u540D\u79F0" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          placeholder: "\u77E5\u8BC6\u5E93\u540D\u79F0",
                          modelValue: unref(formData).name,
                          "onUpdate:modelValue": ($event) => unref(formData).name = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u7B80\u4ECB" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          type: "textarea",
                          placeholder: "\u77E5\u8BC6\u5E93\u540D\u79F0",
                          rows: 5,
                          resize: "none",
                          modelValue: unref(formData).intro,
                          "onUpdate:modelValue": ($event) => unref(formData).intro = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u5411\u91CF\u6A21\u578B" }, {
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
                          disabled: true
                        }, null, 8, ["id", "onUpdate:id"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u6587\u4EF6\u5904\u7406\u6A21\u578B" }, {
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
                          "set-default": false
                        }, null, 8, ["id", "onUpdate:id", "sub_id", "onUpdate:sub_id"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u8BBE\u7F6E\u5C01\u9762" }, {
                      default: withCtx(() => [
                        createVNode(_component_upload_img, {
                          modelValue: unref(formData).image,
                          "onUpdate:modelValue": ($event) => unref(formData).image = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_button, {
                          type: "primary",
                          disabled: _ctx.data.power >= 2,
                          onClick: submit
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u4FDD\u5B58\u8BBE\u7F6E ")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        createVNode(_component_el_button, {
                          onClick: delDatabase,
                          disabled: _ctx.data.power !== 1
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u5220\u9664 ")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
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
                "label-position": "top",
                class: "setup-form"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, { label: "\u77E5\u8BC6\u5E93\u540D\u79F0" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        placeholder: "\u77E5\u8BC6\u5E93\u540D\u79F0",
                        modelValue: unref(formData).name,
                        "onUpdate:modelValue": ($event) => unref(formData).name = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u7B80\u4ECB" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        type: "textarea",
                        placeholder: "\u77E5\u8BC6\u5E93\u540D\u79F0",
                        rows: 5,
                        resize: "none",
                        modelValue: unref(formData).intro,
                        "onUpdate:modelValue": ($event) => unref(formData).intro = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u5411\u91CF\u6A21\u578B" }, {
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
                        disabled: true
                      }, null, 8, ["id", "onUpdate:id"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u6587\u4EF6\u5904\u7406\u6A21\u578B" }, {
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
                        "set-default": false
                      }, null, 8, ["id", "onUpdate:id", "sub_id", "onUpdate:sub_id"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u8BBE\u7F6E\u5C01\u9762" }, {
                    default: withCtx(() => [
                      createVNode(_component_upload_img, {
                        modelValue: unref(formData).image,
                        "onUpdate:modelValue": ($event) => unref(formData).image = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_button, {
                        type: "primary",
                        disabled: _ctx.data.power >= 2,
                        onClick: submit
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u4FDD\u5B58\u8BBE\u7F6E ")
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      createVNode(_component_el_button, {
                        onClick: delDatabase,
                        disabled: _ctx.data.power !== 1
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u5220\u9664 ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/_components/base-setting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BaseSetting = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-50067880"]]);

export { BaseSetting as default };
//# sourceMappingURL=base-setting-BjubuKtS.mjs.map
