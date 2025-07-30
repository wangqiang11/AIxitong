import { E as ElDialog } from './index-CzJm6kkT.mjs';
import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElTag } from './index-D7S5lb8a.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { w as withdrawDetail } from './promotion-sJBBK4gR.mjs';
import './server.mjs';
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
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import 'async-validator';
import './position-DVxxNIGX.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "detail",
  __ssrInlineRender: true,
  emits: ["closePop"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const popShow = ref(false);
    const formData = ref({});
    const open = async (option) => {
      popShow.value = true;
      formData.value = await withdrawDetail({ id: option.id });
    };
    const closePop = () => {
      popShow.value = false;
      emit("closePop");
    };
    __expose({ open });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElDialog = ElDialog;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_tag = ElTag;
      const _component_el_image = ElImage;
      _push(ssrRenderComponent(_component_ElDialog, mergeProps({
        modelValue: unref(popShow),
        "onUpdate:modelValue": ($event) => isRef(popShow) ? popShow.value = $event : null,
        width: "500px",
        title: "\u63D0\u73B0\u8BE6\u60C5",
        "close-on-click-modal": false,
        onClose: closePop
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form, { "label-width": "120px" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u63D0\u73B0\u72B6\u6001" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(formData).status == 1) {
                          _push4(ssrRenderComponent(_component_el_tag, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(formData).status_desc || "-")}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(formData).status_desc || "-"), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (unref(formData).status == 3) {
                          _push4(ssrRenderComponent(_component_el_tag, { type: "success" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(formData).status_desc || "-")}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(formData).status_desc || "-"), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (unref(formData).status == 2) {
                          _push4(ssrRenderComponent(_component_el_tag, { type: "warning" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(formData).status_desc || "-")}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(formData).status_desc || "-"), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (unref(formData).status == 4) {
                          _push4(ssrRenderComponent(_component_el_tag, { type: "danger" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(formData).status_desc || "-")}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(formData).status_desc || "-"), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(formData).status == 1 ? (openBlock(), createBlock(_component_el_tag, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(formData).status_desc || "-"), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          unref(formData).status == 3 ? (openBlock(), createBlock(_component_el_tag, {
                            key: 1,
                            type: "success"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(formData).status_desc || "-"), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          unref(formData).status == 2 ? (openBlock(), createBlock(_component_el_tag, {
                            key: 2,
                            type: "warning"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(formData).status_desc || "-"), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          unref(formData).status == 4 ? (openBlock(), createBlock(_component_el_tag, {
                            key: 3,
                            type: "danger"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(formData).status_desc || "-"), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u7528\u6237\u4FE1\u606F" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(formData).nickname || "-")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(formData).nickname || "-"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u63D0\u73B0\u91D1\u989D" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(formData).money || "-")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(formData).money || "-"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u624B\u7EED\u8D39" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(formData).handling_fee || "-")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(formData).handling_fee || "-"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u5230\u8D26\u91D1\u989D" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(formData).left_money || "-")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(formData).left_money || "-"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u63D0\u73B0\u65B9\u5F0F" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(formData).type_desc || "-")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(formData).type_desc || "-"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u771F\u5B9E\u59D3\u540D" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(formData).real_name || "-")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(formData).real_name || "-"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (unref(formData).type != 2) {
                    _push3(ssrRenderComponent(_component_el_form_item, {
                      label: `${unref(formData).type == 3 ? "\u5FAE\u4FE1" : "\u652F\u4ED8\u5B9D"}\u8D26\u53F7`
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(formData).account)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(formData).account), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(formData).type == 3 || unref(formData).type == 4) {
                    _push3(ssrRenderComponent(_component_el_form_item, { label: "\u6536\u6B3E\u7801" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_el_image, {
                            src: unref(formData).money_qr_code,
                            class: "w-[60px] h-[60px]",
                            "preview-src-list": [unref(formData).money_qr_code]
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_el_image, {
                              src: unref(formData).money_qr_code,
                              class: "w-[60px] h-[60px]",
                              "preview-src-list": [unref(formData).money_qr_code]
                            }, null, 8, ["src", "preview-src-list"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u7533\u8BF7\u65F6\u95F4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(formData).create_time || "-")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(formData).create_time || "-"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u5BA1\u6838\u65F6\u95F4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(formData).verify_time || "-")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(formData).verify_time || "-"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (unref(formData).status == 4) {
                    _push3(ssrRenderComponent(_component_el_form_item, { label: "\u5931\u8D25\u65F6\u95F4" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(formData).finish_time || "-")}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(formData).finish_time || "-"), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(formData).verify_remark) {
                    _push3(ssrRenderComponent(_component_el_form_item, { label: "\u5BA1\u6838\u8BF4\u660E" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(formData).verify_remark || "-")}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(formData).verify_remark || "-"), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(formData).transfer_remark) {
                    _push3(ssrRenderComponent(_component_el_form_item, { label: "\u8F6C\u8D26\u8BF4\u660E" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(formData).transfer_remark || "-")}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(formData).transfer_remark || "-"), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_el_form_item, { label: "\u63D0\u73B0\u72B6\u6001" }, {
                      default: withCtx(() => [
                        unref(formData).status == 1 ? (openBlock(), createBlock(_component_el_tag, { key: 0 }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(formData).status_desc || "-"), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        unref(formData).status == 3 ? (openBlock(), createBlock(_component_el_tag, {
                          key: 1,
                          type: "success"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(formData).status_desc || "-"), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        unref(formData).status == 2 ? (openBlock(), createBlock(_component_el_tag, {
                          key: 2,
                          type: "warning"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(formData).status_desc || "-"), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        unref(formData).status == 4 ? (openBlock(), createBlock(_component_el_tag, {
                          key: 3,
                          type: "danger"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(formData).status_desc || "-"), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u7528\u6237\u4FE1\u606F" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(formData).nickname || "-"), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u63D0\u73B0\u91D1\u989D" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(formData).money || "-"), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u624B\u7EED\u8D39" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(formData).handling_fee || "-"), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u5230\u8D26\u91D1\u989D" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(formData).left_money || "-"), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u63D0\u73B0\u65B9\u5F0F" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(formData).type_desc || "-"), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u771F\u5B9E\u59D3\u540D" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(formData).real_name || "-"), 1)
                      ]),
                      _: 1
                    }),
                    unref(formData).type != 2 ? (openBlock(), createBlock(_component_el_form_item, {
                      key: 0,
                      label: `${unref(formData).type == 3 ? "\u5FAE\u4FE1" : "\u652F\u4ED8\u5B9D"}\u8D26\u53F7`
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(formData).account), 1)
                      ]),
                      _: 1
                    }, 8, ["label"])) : createCommentVNode("", true),
                    unref(formData).type == 3 || unref(formData).type == 4 ? (openBlock(), createBlock(_component_el_form_item, {
                      key: 1,
                      label: "\u6536\u6B3E\u7801"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_image, {
                          src: unref(formData).money_qr_code,
                          class: "w-[60px] h-[60px]",
                          "preview-src-list": [unref(formData).money_qr_code]
                        }, null, 8, ["src", "preview-src-list"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_el_form_item, { label: "\u7533\u8BF7\u65F6\u95F4" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(formData).create_time || "-"), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { label: "\u5BA1\u6838\u65F6\u95F4" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(formData).verify_time || "-"), 1)
                      ]),
                      _: 1
                    }),
                    unref(formData).status == 4 ? (openBlock(), createBlock(_component_el_form_item, {
                      key: 2,
                      label: "\u5931\u8D25\u65F6\u95F4"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(formData).finish_time || "-"), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    unref(formData).verify_remark ? (openBlock(), createBlock(_component_el_form_item, {
                      key: 3,
                      label: "\u5BA1\u6838\u8BF4\u660E"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(formData).verify_remark || "-"), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    unref(formData).transfer_remark ? (openBlock(), createBlock(_component_el_form_item, {
                      key: 4,
                      label: "\u8F6C\u8D26\u8BF4\u660E"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(formData).transfer_remark || "-"), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_form, { "label-width": "120px" }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, { label: "\u63D0\u73B0\u72B6\u6001" }, {
                    default: withCtx(() => [
                      unref(formData).status == 1 ? (openBlock(), createBlock(_component_el_tag, { key: 0 }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(formData).status_desc || "-"), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      unref(formData).status == 3 ? (openBlock(), createBlock(_component_el_tag, {
                        key: 1,
                        type: "success"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(formData).status_desc || "-"), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      unref(formData).status == 2 ? (openBlock(), createBlock(_component_el_tag, {
                        key: 2,
                        type: "warning"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(formData).status_desc || "-"), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      unref(formData).status == 4 ? (openBlock(), createBlock(_component_el_tag, {
                        key: 3,
                        type: "danger"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(formData).status_desc || "-"), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u7528\u6237\u4FE1\u606F" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(formData).nickname || "-"), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u63D0\u73B0\u91D1\u989D" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(formData).money || "-"), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u624B\u7EED\u8D39" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(formData).handling_fee || "-"), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u5230\u8D26\u91D1\u989D" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(formData).left_money || "-"), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u63D0\u73B0\u65B9\u5F0F" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(formData).type_desc || "-"), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u771F\u5B9E\u59D3\u540D" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(formData).real_name || "-"), 1)
                    ]),
                    _: 1
                  }),
                  unref(formData).type != 2 ? (openBlock(), createBlock(_component_el_form_item, {
                    key: 0,
                    label: `${unref(formData).type == 3 ? "\u5FAE\u4FE1" : "\u652F\u4ED8\u5B9D"}\u8D26\u53F7`
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(formData).account), 1)
                    ]),
                    _: 1
                  }, 8, ["label"])) : createCommentVNode("", true),
                  unref(formData).type == 3 || unref(formData).type == 4 ? (openBlock(), createBlock(_component_el_form_item, {
                    key: 1,
                    label: "\u6536\u6B3E\u7801"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_image, {
                        src: unref(formData).money_qr_code,
                        class: "w-[60px] h-[60px]",
                        "preview-src-list": [unref(formData).money_qr_code]
                      }, null, 8, ["src", "preview-src-list"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_component_el_form_item, { label: "\u7533\u8BF7\u65F6\u95F4" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(formData).create_time || "-"), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u5BA1\u6838\u65F6\u95F4" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(formData).verify_time || "-"), 1)
                    ]),
                    _: 1
                  }),
                  unref(formData).status == 4 ? (openBlock(), createBlock(_component_el_form_item, {
                    key: 2,
                    label: "\u5931\u8D25\u65F6\u95F4"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(formData).finish_time || "-"), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(formData).verify_remark ? (openBlock(), createBlock(_component_el_form_item, {
                    key: 3,
                    label: "\u5BA1\u6838\u8BF4\u660E"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(formData).verify_remark || "-"), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(formData).transfer_remark ? (openBlock(), createBlock(_component_el_form_item, {
                    key: 4,
                    label: "\u8F6C\u8D26\u8BF4\u660E"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(formData).transfer_remark || "-"), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index/promotion/_components/withdraw/detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=detail-DN39nOVW.mjs.map
