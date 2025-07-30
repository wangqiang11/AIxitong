import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElInput, d as ElButton } from './server.mjs';
import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { E as ElTable, a as ElTableColumn } from './el-table-column-tZnWqVKO.mjs';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { defineComponent, reactive, shallowRef, mergeProps, withCtx, unref, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
import _sfc_main$1 from './add-menu-DbND_aK2.mjs';
import { cloneDeep } from 'lodash-es';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@vue/shared';
import 'lodash-unified';
import 'async-validator';
import 'vue-router';
import 'weixin-js-sdk';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './dropdown-C6fgV-Vy.mjs';
import './index-0xCxAaTZ.mjs';
import './index-53t5ntO1.mjs';
import './index-5Ia44xzE.mjs';
import 'normalize-wheel-es';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-DZM4Ziep.mjs';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';

const _imports_0 = "" + buildAssetsURL("robot_copyright.B2pMs7mY.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "interface-config",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formData = useVModel(props, "modelValue", emit);
    const menuState = reactive({
      show: false,
      type: "add",
      data: {},
      index: 0
    });
    const tableRef = shallowRef();
    const handleShowMenuPopup = (type = "add", data = {
      images: [],
      content: "",
      keyword: ""
    }) => {
      var _a;
      menuState.show = true;
      menuState.type = type;
      menuState.data = cloneDeep(data);
      menuState.index = (_a = formData.value.menus) == null ? void 0 : _a.indexOf(data);
    };
    const handleDelete = (index) => {
      var _a;
      (_a = formData.value.menus) == null ? void 0 : _a.splice(index, 1);
    };
    const handleConfirm = (data) => {
      var _a, _b, _c;
      switch (menuState.type) {
        case "add":
          if (((_a = formData.value.menus) == null ? void 0 : _a.length) < 3) {
            (_b = formData.value.menus) == null ? void 0 : _b.push(data);
          }
          break;
        case "edit":
          if (menuState.index !== -1) {
            (_c = formData.value.menus) == null ? void 0 : _c.splice(menuState.index, 1, data);
          }
          break;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_popover = ElPopover;
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _component_Icon = _sfc_main$2;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[10px]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_form_item, {
        label: "\u6B22\u8FCE\u8BED",
        prop: "welcome_introducer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-[600px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_input, {
              modelValue: unref(formData).welcome_introducer,
              "onUpdate:modelValue": ($event) => unref(formData).welcome_introducer = $event,
              placeholder: "",
              type: "textarea",
              autosize: { minRows: 8, maxRows: 8 },
              clearable: "",
              resize: "none"
            }, null, _parent2, _scopeId));
            _push2(`<div class="form-tips"${_scopeId}> \u6253\u5F00\u804A\u5929\u7A97\u53E3\u540E\u4F1A\u4E3B\u52A8\u53D1\u9001\uFF0C\u6DFB\u52A0\u53CC\u4E95\u53F7\u53EF\u6DFB\u52A0\u63D0\u95EE\u793A\u4F8B\uFF0C\u4F8B\u5982\uFF1A#\u5E2E\u6211\u5199\u4E00\u5219\u5173\u4E8Exxx\u7684\u6587\u6848# <br${_scopeId}> \u591A\u4E2A\u95EE\u9898\u8BF7\u7528\u56DE\u8F66\u6362\u884C </div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-[600px]" }, [
                createVNode(_component_el_input, {
                  modelValue: unref(formData).welcome_introducer,
                  "onUpdate:modelValue": ($event) => unref(formData).welcome_introducer = $event,
                  placeholder: "",
                  type: "textarea",
                  autosize: { minRows: 8, maxRows: 8 },
                  clearable: "",
                  resize: "none"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("div", { class: "form-tips" }, [
                  createTextVNode(" \u6253\u5F00\u804A\u5929\u7A97\u53E3\u540E\u4F1A\u4E3B\u52A8\u53D1\u9001\uFF0C\u6DFB\u52A0\u53CC\u4E95\u53F7\u53EF\u6DFB\u52A0\u63D0\u95EE\u793A\u4F8B\uFF0C\u4F8B\u5982\uFF1A#\u5E2E\u6211\u5199\u4E00\u5219\u5173\u4E8Exxx\u7684\u6587\u6848# "),
                  createVNode("br"),
                  createTextVNode(" \u591A\u4E2A\u95EE\u9898\u8BF7\u7528\u56DE\u8F66\u6362\u884C ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_form_item, {
        label: "\u5E95\u90E8\u6807\u8BC6",
        prop: "copyright"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-[600px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_input, {
              modelValue: unref(formData).copyright,
              "onUpdate:modelValue": ($event) => unref(formData).copyright = $event,
              placeholder: "",
              clearable: ""
            }, null, _parent2, _scopeId));
            _push2(`<div class="form-tips flex items-center"${_scopeId}> \u4E0D\u586B\u5199\u4E0D\u663E\u793A `);
            _push2(ssrRenderComponent(_component_el_popover, {
              placement: "top-start",
              width: "auto",
              "show-arrow": false,
              transition: "custom-popover",
              trigger: "hover"
            }, {
              reference: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-primary ml-[10px]"${_scopeId2}>\u67E5\u770B\u793A\u4F8B </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-primary ml-[10px]" }, "\u67E5\u770B\u793A\u4F8B ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="w-[250px] h-[310px] scale-110"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "",
                      class: "w-[250px] h-[310px] scale-110"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-[600px]" }, [
                createVNode(_component_el_input, {
                  modelValue: unref(formData).copyright,
                  "onUpdate:modelValue": ($event) => unref(formData).copyright = $event,
                  placeholder: "",
                  clearable: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("div", { class: "form-tips flex items-center" }, [
                  createTextVNode(" \u4E0D\u586B\u5199\u4E0D\u663E\u793A "),
                  createVNode(_component_el_popover, {
                    placement: "top-start",
                    width: "auto",
                    "show-arrow": false,
                    transition: "custom-popover",
                    trigger: "hover"
                  }, {
                    reference: withCtx(() => [
                      createVNode("span", { class: "text-primary ml-[10px]" }, "\u67E5\u770B\u793A\u4F8B ")
                    ]),
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "",
                        class: "w-[250px] h-[310px] scale-110"
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_form_item, { label: "\u83DC\u5355\u8BBE\u7F6E" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-1 min-w-0"${_scopeId}><div class="max-w-[600px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_table, {
              size: "large",
              data: unref(formData).menus,
              ref_key: "tableRef",
              ref: tableRef,
              "row-key": "id"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_table_column, { width: "50" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="move-icon cursor-move"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Icon, { name: "el-icon-Rank" }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "move-icon cursor-move" }, [
                            createVNode(_component_Icon, { name: "el-icon-Rank" })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    label: "\u5173\u952E\u8BCD",
                    prop: "keyword",
                    "min-width": "120"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    label: "\u56DE\u590D\u5185\u5BB9",
                    "min-width": "120"
                  }, {
                    default: withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      var _a, _b, _c, _d;
                      if (_push4) {
                        if (row.content) {
                          _push4(`<span${_scopeId3}> \u6587\u5B57 </span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (row.content && ((_a = row.images) == null ? void 0 : _a.length)) {
                          _push4(`<span${_scopeId3}> + </span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if ((_b = row.images) == null ? void 0 : _b.length) {
                          _push4(`<span${_scopeId3}> \u56FE\u7247 </span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          row.content ? (openBlock(), createBlock("span", { key: 0 }, " \u6587\u5B57 ")) : createCommentVNode("", true),
                          row.content && ((_c = row.images) == null ? void 0 : _c.length) ? (openBlock(), createBlock("span", { key: 1 }, " + ")) : createCommentVNode("", true),
                          ((_d = row.images) == null ? void 0 : _d.length) ? (openBlock(), createBlock("span", { key: 2 }, " \u56FE\u7247 ")) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    label: "\u64CD\u4F5C",
                    width: "200"
                  }, {
                    default: withCtx(({ $index, row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_button, {
                          type: "primary",
                          link: "",
                          onClick: ($event) => handleShowMenuPopup("view", row)
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u67E5\u770B `);
                            } else {
                              return [
                                createTextVNode(" \u67E5\u770B ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_button, {
                          type: "primary",
                          link: "",
                          onClick: ($event) => handleShowMenuPopup("edit", row)
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u7F16\u8F91 `);
                            } else {
                              return [
                                createTextVNode(" \u7F16\u8F91 ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_button, {
                          type: "danger",
                          link: "",
                          onClick: ($event) => handleDelete($index)
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u5220\u9664 `);
                            } else {
                              return [
                                createTextVNode(" \u5220\u9664 ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_button, {
                            type: "primary",
                            link: "",
                            onClick: ($event) => handleShowMenuPopup("view", row)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u67E5\u770B ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode(_component_el_button, {
                            type: "primary",
                            link: "",
                            onClick: ($event) => handleShowMenuPopup("edit", row)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u7F16\u8F91 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode(_component_el_button, {
                            type: "danger",
                            link: "",
                            onClick: ($event) => handleDelete($index)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u5220\u9664 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_table_column, { width: "50" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "move-icon cursor-move" }, [
                          createVNode(_component_Icon, { name: "el-icon-Rank" })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      label: "\u5173\u952E\u8BCD",
                      prop: "keyword",
                      "min-width": "120"
                    }),
                    createVNode(_component_el_table_column, {
                      label: "\u56DE\u590D\u5185\u5BB9",
                      "min-width": "120"
                    }, {
                      default: withCtx(({ row }) => {
                        var _a, _b;
                        return [
                          row.content ? (openBlock(), createBlock("span", { key: 0 }, " \u6587\u5B57 ")) : createCommentVNode("", true),
                          row.content && ((_a = row.images) == null ? void 0 : _a.length) ? (openBlock(), createBlock("span", { key: 1 }, " + ")) : createCommentVNode("", true),
                          ((_b = row.images) == null ? void 0 : _b.length) ? (openBlock(), createBlock("span", { key: 2 }, " \u56FE\u7247 ")) : createCommentVNode("", true)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      label: "\u64CD\u4F5C",
                      width: "200"
                    }, {
                      default: withCtx(({ $index, row }) => [
                        createVNode(_component_el_button, {
                          type: "primary",
                          link: "",
                          onClick: ($event) => handleShowMenuPopup("view", row)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u67E5\u770B ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        createVNode(_component_el_button, {
                          type: "primary",
                          link: "",
                          onClick: ($event) => handleShowMenuPopup("edit", row)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u7F16\u8F91 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        createVNode(_component_el_button, {
                          type: "danger",
                          link: "",
                          onClick: ($event) => handleDelete($index)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u5220\u9664 ")
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
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              disabled: unref(formData).menus.length >= 3,
              onClick: ($event) => handleShowMenuPopup()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` +\u6DFB\u52A0\u83DC\u5355 `);
                } else {
                  return [
                    createTextVNode(" +\u6DFB\u52A0\u83DC\u5355 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="form-tips"${_scopeId}> \u7528\u6237\u70B9\u51FB\u83DC\u5355\u540E\uFF0C\u5C06\u56DE\u590D\u5BF9\u5E94\u5185\u5BB9\u3002\u6B64\u7C7B\u6D88\u606F\u4E0D\u6D88\u8017\u4F59\u989D\u3002 </div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex-1 min-w-0" }, [
                createVNode("div", { class: "max-w-[600px]" }, [
                  createVNode(_component_el_table, {
                    size: "large",
                    data: unref(formData).menus,
                    ref_key: "tableRef",
                    ref: tableRef,
                    "row-key": "id"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_table_column, { width: "50" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "move-icon cursor-move" }, [
                            createVNode(_component_Icon, { name: "el-icon-Rank" })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_table_column, {
                        label: "\u5173\u952E\u8BCD",
                        prop: "keyword",
                        "min-width": "120"
                      }),
                      createVNode(_component_el_table_column, {
                        label: "\u56DE\u590D\u5185\u5BB9",
                        "min-width": "120"
                      }, {
                        default: withCtx(({ row }) => {
                          var _a, _b;
                          return [
                            row.content ? (openBlock(), createBlock("span", { key: 0 }, " \u6587\u5B57 ")) : createCommentVNode("", true),
                            row.content && ((_a = row.images) == null ? void 0 : _a.length) ? (openBlock(), createBlock("span", { key: 1 }, " + ")) : createCommentVNode("", true),
                            ((_b = row.images) == null ? void 0 : _b.length) ? (openBlock(), createBlock("span", { key: 2 }, " \u56FE\u7247 ")) : createCommentVNode("", true)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_el_table_column, {
                        label: "\u64CD\u4F5C",
                        width: "200"
                      }, {
                        default: withCtx(({ $index, row }) => [
                          createVNode(_component_el_button, {
                            type: "primary",
                            link: "",
                            onClick: ($event) => handleShowMenuPopup("view", row)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u67E5\u770B ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode(_component_el_button, {
                            type: "primary",
                            link: "",
                            onClick: ($event) => handleShowMenuPopup("edit", row)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u7F16\u8F91 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode(_component_el_button, {
                            type: "danger",
                            link: "",
                            onClick: ($event) => handleDelete($index)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u5220\u9664 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["data"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_el_button, {
                    type: "primary",
                    disabled: unref(formData).menus.length >= 3,
                    onClick: ($event) => handleShowMenuPopup()
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" +\u6DFB\u52A0\u83DC\u5355 ")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])
                ]),
                createVNode("div", { class: "form-tips" }, " \u7528\u6237\u70B9\u51FB\u83DC\u5355\u540E\uFF0C\u5C06\u56DE\u590D\u5BF9\u5E94\u5185\u5BB9\u3002\u6B64\u7C7B\u6D88\u606F\u4E0D\u6D88\u8017\u4F59\u989D\u3002 ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        show: unref(menuState).show,
        "onUpdate:show": ($event) => unref(menuState).show = $event,
        type: unref(menuState).type,
        data: unref(menuState).data,
        "onUpdate:data": ($event) => unref(menuState).data = $event,
        onConfirm: handleConfirm
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-edit/interface-config.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=interface-config-BWIUWMLo.mjs.map
