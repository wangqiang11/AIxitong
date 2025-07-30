import { a as ElFormItem } from './index-DLL0sEcv.mjs';
import { _ as __nuxt_component_1 } from './index-BaKT_MyR.mjs';
import { E as ElInput, d as ElButton } from './server.mjs';
import { E as ElSelect, a as ElOption } from './index-CUhOTuS-.mjs';
import { E as ElRadioGroup, a as ElRadio } from './el-radio-group-PXDiQVwm.mjs';
import { E as ElSlider } from './el-slider-LwCMMHAn.mjs';
import { E as ElInputNumber } from './el-input-number-DH6NTUUv.mjs';
import { defineComponent, shallowRef, ref, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, useSSRContext, nextTick } from 'vue';
import { u as useDictOptions } from './useDictOptions-DmOxg3R0.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
import { r as knowKnowledgeList } from './my_database-C6D0rbWD.mjs';
import _sfc_main$1 from './addPop-CT4BzglM.mjs';
import { t as getRobotCategory } from './robot-BsB_E1H2.mjs';
import '@vue/shared';
import 'lodash-unified';
import 'async-validator';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import './index-BoqjHllR.mjs';
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
import 'weixin-js-sdk';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-0xCxAaTZ.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import './index-iSFXrlfY.mjs';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-CJqYHNUB.mjs';
import './dropdown-C6fgV-Vy.mjs';
import './index-CXZnYiu9.mjs';
import './el-collapse-item-DSo9CmH5.mjs';
import './index-DadLUs6d.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "base-config",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const addkbPopRef = shallowRef();
    const popShow = ref(false);
    const props = __props;
    const emit = __emit;
    const formData = useVModel(props, "modelValue", emit);
    const { optionsData, refresh } = useDictOptions({
      knowledge: {
        api: knowKnowledgeList,
        params: {
          page_type: 0
        },
        transformData(data) {
          return data.lists || [];
        }
      },
      robotCategory: {
        api: getRobotCategory
      }
    });
    const addKb = async () => {
      popShow.value = true;
      await nextTick();
      addkbPopRef.value.open();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form_item = ElFormItem;
      const _component_UploadImg = __nuxt_component_1;
      const _component_el_input = ElInput;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_el_button = ElButton;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_radio = ElRadio;
      const _component_el_slider = ElSlider;
      const _component_el_input_number = ElInputNumber;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[10px]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_form_item, {
        label: "\u667A\u80FD\u4F53\u56FE\u6807",
        prop: "image"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UploadImg, {
              modelValue: unref(formData).image,
              "onUpdate:modelValue": ($event) => unref(formData).image = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="form-tips"${_scopeId}>\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A240*240px</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", null, [
                  createVNode(_component_UploadImg, {
                    modelValue: unref(formData).image,
                    "onUpdate:modelValue": ($event) => unref(formData).image = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "form-tips" }, "\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A240*240px")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_form_item, {
        label: "\u667A\u80FD\u4F53\u540D\u79F0",
        prop: "name"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-80"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_input, {
              modelValue: unref(formData).name,
              "onUpdate:modelValue": ($event) => unref(formData).name = $event,
              placeholder: "\u8BF7\u8F93\u5165\u667A\u80FD\u4F53\u540D\u79F0",
              clearable: ""
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-80" }, [
                createVNode(_component_el_input, {
                  modelValue: unref(formData).name,
                  "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                  placeholder: "\u8BF7\u8F93\u5165\u667A\u80FD\u4F53\u540D\u79F0",
                  clearable: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_form_item, {
        label: "\u7B80\u4ECB",
        prop: "intro"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-80"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_input, {
              modelValue: unref(formData).intro,
              "onUpdate:modelValue": ($event) => unref(formData).intro = $event,
              placeholder: "\u8BF7\u7B80\u5355\u63CF\u8FF0\u4E0B\u7ED9\u4F60\u7684\u667A\u80FD\u4F53",
              type: "textarea",
              autosize: { minRows: 3, maxRows: 6 },
              maxlength: 200,
              "show-word-limit": "",
              clearable: ""
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-80" }, [
                createVNode(_component_el_input, {
                  modelValue: unref(formData).intro,
                  "onUpdate:modelValue": ($event) => unref(formData).intro = $event,
                  placeholder: "\u8BF7\u7B80\u5355\u63CF\u8FF0\u4E0B\u7ED9\u4F60\u7684\u667A\u80FD\u4F53",
                  type: "textarea",
                  autosize: { minRows: 3, maxRows: 6 },
                  maxlength: 200,
                  "show-word-limit": "",
                  clearable: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_form_item, {
        label: "\u5173\u8054\u77E5\u8BC6\u5E93",
        prop: "kb_ids"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex"${_scopeId}><div class="w-80"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_select, {
              modelValue: unref(formData).kb_ids,
              "onUpdate:modelValue": ($event) => unref(formData).kb_ids = $event,
              placeholder: "\u8BF7\u9009\u62E9\u5173\u8054\u77E5\u8BC6\u5E93",
              clearable: "",
              multiple: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(optionsData).knowledge, (item) => {
                    _push3(ssrRenderComponent(_component_el_option, {
                      key: item.id,
                      label: `${item.name}`,
                      value: String(item.id)
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(optionsData).knowledge, (item) => {
                      return openBlock(), createBlock(_component_el_option, {
                        key: item.id,
                        label: `${item.name}`,
                        value: String(item.id)
                      }, null, 8, ["label", "value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ml-2 flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              link: "",
              onClick: addKb
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u65B0\u589E\u77E5\u8BC6\u5E93 `);
                } else {
                  return [
                    createTextVNode(" \u65B0\u589E\u77E5\u8BC6\u5E93 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="px-1"${_scopeId}>|</span>`);
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              link: "",
              onClick: unref(refresh)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5237\u65B0 `);
                } else {
                  return [
                    createTextVNode(" \u5237\u65B0 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="form-tips"${_scopeId}>\u9700\u9009\u62E9\u540C\u4E00\u79CD\u8BAD\u7EC3\u6A21\u578B\u7684\u77E5\u8BC6\u5E93</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex" }, [
                  createVNode("div", { class: "w-80" }, [
                    createVNode(_component_el_select, {
                      modelValue: unref(formData).kb_ids,
                      "onUpdate:modelValue": ($event) => unref(formData).kb_ids = $event,
                      placeholder: "\u8BF7\u9009\u62E9\u5173\u8054\u77E5\u8BC6\u5E93",
                      clearable: "",
                      multiple: ""
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(optionsData).knowledge, (item) => {
                          return openBlock(), createBlock(_component_el_option, {
                            key: item.id,
                            label: `${item.name}`,
                            value: String(item.id)
                          }, null, 8, ["label", "value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "ml-2 flex items-center" }, [
                    createVNode(_component_el_button, {
                      type: "primary",
                      link: "",
                      onClick: addKb
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u65B0\u589E\u77E5\u8BC6\u5E93 ")
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "px-1" }, "|"),
                    createVNode(_component_el_button, {
                      type: "primary",
                      link: "",
                      onClick: unref(refresh)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u5237\u65B0 ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]),
                createVNode("div", { class: "form-tips" }, "\u9700\u9009\u62E9\u540C\u4E00\u79CD\u8BAD\u7EC3\u6A21\u578B\u7684\u77E5\u8BC6\u5E93")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_form_item, {
        label: "\u89D2\u8272\u8BBE\u5B9A",
        prop: "roles_prompt"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-1 min-w-0"${_scopeId}><div class="flex"${_scopeId}><div class="w-80"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_input, {
              modelValue: unref(formData).roles_prompt,
              "onUpdate:modelValue": ($event) => unref(formData).roles_prompt = $event,
              placeholder: "\u8BF7\u8F93\u5165\u89D2\u8272\u8BBE\u5B9A",
              type: "textarea",
              autosize: { minRows: 4, maxRows: 6 },
              clearable: ""
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="form-tips"${_scopeId}> \u5F15\u5BFC\u5E94\u7528\u7684\u804A\u5929\u65B9\u5411\uFF0C\u8BE5\u5185\u5BB9\u4F1A\u88AB\u56FA\u5B9A\u5728\u4E0A\u4E0B\u6587\u7684\u5F00\u5934\u3002 </div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex-1 min-w-0" }, [
                createVNode("div", { class: "flex" }, [
                  createVNode("div", { class: "w-80" }, [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).roles_prompt,
                      "onUpdate:modelValue": ($event) => unref(formData).roles_prompt = $event,
                      placeholder: "\u8BF7\u8F93\u5165\u89D2\u8272\u8BBE\u5B9A",
                      type: "textarea",
                      autosize: { minRows: 4, maxRows: 6 },
                      clearable: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "form-tips" }, " \u5F15\u5BFC\u5E94\u7528\u7684\u804A\u5929\u65B9\u5411\uFF0C\u8BE5\u5185\u5BB9\u4F1A\u88AB\u56FA\u5B9A\u5728\u4E0A\u4E0B\u6587\u7684\u5F00\u5934\u3002 ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_form_item, { label: "\u5BF9\u8BDD\u56FE\u6807" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UploadImg, {
              modelValue: unref(formData).icons,
              "onUpdate:modelValue": ($event) => unref(formData).icons = $event,
              "exclude-domain": false,
              "can-close": true
            }, null, _parent2, _scopeId));
            _push2(`<div class="form-tips"${_scopeId}> \u4E0D\u8BBE\u7F6E\u7684\u8BDD\uFF0C\u5BF9\u8BDD\u56FE\u6807\u9ED8\u8BA4\u62FF\u667A\u80FD\u4F53\u5C01\u9762 </div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_UploadImg, {
                  modelValue: unref(formData).icons,
                  "onUpdate:modelValue": ($event) => unref(formData).icons = $event,
                  "exclude-domain": false,
                  "can-close": true
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("div", { class: "form-tips" }, " \u4E0D\u8BBE\u7F6E\u7684\u8BDD\uFF0C\u5BF9\u8BDD\u56FE\u6807\u9ED8\u8BA4\u62FF\u667A\u80FD\u4F53\u5C01\u9762 ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_form_item, {
        label: "\u5BF9\u8BDD\u4E0A\u4E0B\u6587",
        prop: "is_show_context"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_radio_group, {
              modelValue: unref(formData).is_show_context,
              "onUpdate:modelValue": ($event) => unref(formData).is_show_context = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_radio, { label: 1 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u663E\u793A `);
                      } else {
                        return [
                          createTextVNode(" \u663E\u793A ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_radio, { label: 0 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u5173\u95ED `);
                      } else {
                        return [
                          createTextVNode(" \u5173\u95ED ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_radio, { label: 1 }, {
                      default: withCtx(() => [
                        createTextVNode(" \u663E\u793A ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_radio, { label: 0 }, {
                      default: withCtx(() => [
                        createTextVNode(" \u5173\u95ED ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="form-tips"${_scopeId}>\u5728\u524D\u53F0\u663E\u793A\u5BF9\u8BDD\u4E0A\u4E0B\u6587\uFF0C\u9ED8\u8BA4\u663E\u793A</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_el_radio_group, {
                  modelValue: unref(formData).is_show_context,
                  "onUpdate:modelValue": ($event) => unref(formData).is_show_context = $event
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_radio, { label: 1 }, {
                      default: withCtx(() => [
                        createTextVNode(" \u663E\u793A ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_radio, { label: 0 }, {
                      default: withCtx(() => [
                        createTextVNode(" \u5173\u95ED ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("div", { class: "form-tips" }, "\u5728\u524D\u53F0\u663E\u793A\u5BF9\u8BDD\u4E0A\u4E0B\u6587\uFF0C\u9ED8\u8BA4\u663E\u793A")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_form_item, {
        label: "\u5F15\u7528\u5185\u5BB9",
        prop: "is_show_quote"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_radio_group, {
              modelValue: unref(formData).is_show_quote,
              "onUpdate:modelValue": ($event) => unref(formData).is_show_quote = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_radio, { label: 1 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u663E\u793A `);
                      } else {
                        return [
                          createTextVNode(" \u663E\u793A ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_radio, { label: 0 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u5173\u95ED `);
                      } else {
                        return [
                          createTextVNode(" \u5173\u95ED ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_radio, { label: 1 }, {
                      default: withCtx(() => [
                        createTextVNode(" \u663E\u793A ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_radio, { label: 0 }, {
                      default: withCtx(() => [
                        createTextVNode(" \u5173\u95ED ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="form-tips"${_scopeId}>\u5728\u524D\u53F0\u663E\u793A\u5F15\u7528\u5185\u5BB9\uFF0C\u9ED8\u8BA4\u663E\u793A</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_el_radio_group, {
                  modelValue: unref(formData).is_show_quote,
                  "onUpdate:modelValue": ($event) => unref(formData).is_show_quote = $event
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_radio, { label: 1 }, {
                      default: withCtx(() => [
                        createTextVNode(" \u663E\u793A ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_radio, { label: 0 }, {
                      default: withCtx(() => [
                        createTextVNode(" \u5173\u95ED ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("div", { class: "form-tips" }, "\u5728\u524D\u53F0\u663E\u793A\u5F15\u7528\u5185\u5BB9\uFF0C\u9ED8\u8BA4\u663E\u793A")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_form_item, {
        label: "\u95EE\u7B54\u76F8\u4F3C\u95EE\u9898\u63A8\u8350",
        prop: "related_issues_num",
        required: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex w-[400px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_slider, {
              modelValue: unref(formData).related_issues_num,
              "onUpdate:modelValue": ($event) => unref(formData).related_issues_num = $event,
              min: 0,
              max: 10
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_input_number, {
              modelValue: unref(formData).related_issues_num,
              "onUpdate:modelValue": ($event) => unref(formData).related_issues_num = $event,
              min: 0,
              max: 10,
              class: "ml-4 w-[180px]"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="form-tips"${_scopeId}>\u4F5C\u7528\u4E8E\u667A\u80FD\u4F53\u5BF9\u8BDD\u95EE\u9898\u63A8\u8350\uFF0C\u586B0\u5BF9\u8BDD\u95EE\u9898\u63A8\u8350\u4E0D\u751F\u6548</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex w-[400px]" }, [
                  createVNode(_component_el_slider, {
                    modelValue: unref(formData).related_issues_num,
                    "onUpdate:modelValue": ($event) => unref(formData).related_issues_num = $event,
                    min: 0,
                    max: 10
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_el_input_number, {
                    modelValue: unref(formData).related_issues_num,
                    "onUpdate:modelValue": ($event) => unref(formData).related_issues_num = $event,
                    min: 0,
                    max: 10,
                    class: "ml-4 w-[180px]"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "form-tips" }, "\u4F5C\u7528\u4E8E\u667A\u80FD\u4F53\u5BF9\u8BDD\u95EE\u9898\u63A8\u8350\uFF0C\u586B0\u5BF9\u8BDD\u95EE\u9898\u63A8\u8350\u4E0D\u751F\u6548")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(popShow)) {
        _push(ssrRenderComponent(_sfc_main$1, {
          ref_key: "addkbPopRef",
          ref: addkbPopRef,
          onSuccess: unref(refresh)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-edit/base-config.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=base-config-D2JCcEJz.mjs.map
