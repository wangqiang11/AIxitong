import { E as ElForm } from './index-DLL0sEcv.mjs';
import { E as ElTabs, a as ElTabPane } from './el-tab-pane-C7DQ8faq.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { A as feedback, d as ElButton } from './server.mjs';
import { useSSRContext, defineComponent, ref, computed, watchEffect, shallowRef, shallowReactive, unref, mergeProps, withCtx, isRef, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { cloneDeep } from 'lodash-es';
import _sfc_main$1 from './base-config-D2JCcEJz.mjs';
import _sfc_main$2 from './search-config-CUeFuQKo.mjs';
import _sfc_main$3 from './interface-config-BWIUWMLo.mjs';
import _sfc_main$4 from './digital-config-G1TuaWzp.mjs';
import { u as putRobot } from './robot-BsB_E1H2.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vue/shared';
import 'lodash-unified';
import 'async-validator';
import '@vueuse/core';
import './strings-D1uxkXhq.mjs';
import './index-C5I0EtSx.mjs';
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
import './index-BaKT_MyR.mjs';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import './index-BoqjHllR.mjs';
import './index-CUhOTuS-.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-D7S5lb8a.mjs';
import './index-5Ia44xzE.mjs';
import './el-radio-group-PXDiQVwm.mjs';
import './el-slider-LwCMMHAn.mjs';
import './el-input-number-DH6NTUUv.mjs';
import './index-iSFXrlfY.mjs';
import './useDictOptions-DmOxg3R0.mjs';
import './my_database-C6D0rbWD.mjs';
import './addPop-CT4BzglM.mjs';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-CJqYHNUB.mjs';
import './dropdown-C6fgV-Vy.mjs';
import './index-CXZnYiu9.mjs';
import './el-collapse-item-DSo9CmH5.mjs';
import './index-DadLUs6d.mjs';
import './el-table-column-tZnWqVKO.mjs';
import './index-53t5ntO1.mjs';
import 'normalize-wheel-es';
import './add-menu-DbND_aK2.mjs';
import './index-DZM4Ziep.mjs';
import './el-switch-lh7eFiXh.mjs';
import './nuxt-link-l5zPv3vf.mjs';
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './digital-DHYaDV-C.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["success"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formData = ref({});
    const isRenderForm = computed(() => !!Object.keys(formData.value).length);
    watchEffect(() => {
      formData.value = cloneDeep(props.modelValue);
    });
    const formRef = shallowRef();
    const formRules = shallowReactive({
      image: [
        {
          required: true,
          type: "string",
          message: "\u8BF7\u9009\u62E9\u5E94\u7528\u56FE\u6807"
        }
      ],
      name: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u5E94\u7528\u540D\u79F0"
        }
      ],
      model_id: [
        {
          required: true,
          message: "\u8BF7\u9009\u62E9AI\u901A\u9053",
          trigger: ["blur"]
        }
      ],
      model_sub_id: [
        {
          required: true,
          message: "\u8BF7\u9009\u62E9AI\u6A21\u578B",
          trigger: ["blur"]
        }
      ],
      cate_id: [
        {
          required: true,
          message: "\u8BF7\u9009\u62E9\u5206\u7C7B",
          trigger: ["blur"]
        }
      ],
      digital_id: [
        {
          required: true,
          message: "\u8BF7\u9009\u62E9\u5F62\u8C61",
          trigger: ["change"]
        },
        {
          validator(rule, value, callback) {
            if (Number(value) === 0) {
              callback(new Error("\u8BF7\u9009\u62E9\u5F62\u8C61"));
            }
            callback();
          }
        }
      ]
    });
    const handelSubmit = async () => {
      var _a, _b;
      try {
        await ((_a = formRef.value) == null ? void 0 : _a.validate());
        await putRobot(formData.value);
        emit("success");
      } catch (error) {
        for (const err in error) {
          const isInRules = Object.keys(formRules).includes(err);
          isInRules && feedback.msgError((_b = error[err][0]) == null ? void 0 : _b.message);
          break;
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_ElScrollbar = ElScrollbar;
      const _component_el_button = ElButton;
      if (unref(isRenderForm)) {
        _push(ssrRenderComponent(_component_el_form, mergeProps({
          ref_key: "formRef",
          ref: formRef,
          model: unref(formData),
          "label-width": "140px",
          rules: unref(formRules),
          class: "app-edit flex flex-col"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex-1 min-h-0" data-v-046fb527${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_tabs, { "model-value": "base" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_tab_pane, {
                      label: "\u57FA\u672C\u914D\u7F6E",
                      name: "base"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElScrollbar, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$1, {
                                  modelValue: unref(formData),
                                  "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$1, {
                                    modelValue: unref(formData),
                                    "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElScrollbar, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$1, {
                                  modelValue: unref(formData),
                                  "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_el_tab_pane, {
                      label: "AI\u6A21\u578B/\u641C\u7D22\u914D\u7F6E",
                      name: "search"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElScrollbar, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$2, {
                                  modelValue: unref(formData),
                                  "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$2, {
                                    modelValue: unref(formData),
                                    "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElScrollbar, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$2, {
                                  modelValue: unref(formData),
                                  "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_el_tab_pane, {
                      label: "\u754C\u9762\u914D\u7F6E",
                      name: "interface"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElScrollbar, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$3, {
                                  modelValue: unref(formData),
                                  "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$3, {
                                    modelValue: unref(formData),
                                    "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElScrollbar, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$3, {
                                  modelValue: unref(formData),
                                  "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_el_tab_pane, {
                      label: "\u5F62\u8C61\u914D\u7F6E",
                      name: "digital"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElScrollbar, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$4, {
                                  modelValue: unref(formData),
                                  "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$4, {
                                    modelValue: unref(formData),
                                    "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElScrollbar, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$4, {
                                  modelValue: unref(formData),
                                  "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                      createVNode(_component_el_tab_pane, {
                        label: "\u57FA\u672C\u914D\u7F6E",
                        name: "base"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElScrollbar, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1, {
                                modelValue: unref(formData),
                                "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_tab_pane, {
                        label: "AI\u6A21\u578B/\u641C\u7D22\u914D\u7F6E",
                        name: "search"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElScrollbar, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, {
                                modelValue: unref(formData),
                                "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_tab_pane, {
                        label: "\u754C\u9762\u914D\u7F6E",
                        name: "interface"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElScrollbar, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$3, {
                                modelValue: unref(formData),
                                "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_tab_pane, {
                        label: "\u5F62\u8C61\u914D\u7F6E",
                        name: "digital"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElScrollbar, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4, {
                                modelValue: unref(formData),
                                "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
              }, _parent2, _scopeId));
              _push2(`</div><div class="my-[15px] flex justify-center" data-v-046fb527${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_button, {
                type: "primary",
                onClick: handelSubmit
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u4FDD\u5B58`);
                  } else {
                    return [
                      createTextVNode(" \u4FDD\u5B58")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex-1 min-h-0" }, [
                  createVNode(_component_el_tabs, { "model-value": "base" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_tab_pane, {
                        label: "\u57FA\u672C\u914D\u7F6E",
                        name: "base"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElScrollbar, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1, {
                                modelValue: unref(formData),
                                "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_tab_pane, {
                        label: "AI\u6A21\u578B/\u641C\u7D22\u914D\u7F6E",
                        name: "search"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElScrollbar, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, {
                                modelValue: unref(formData),
                                "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_tab_pane, {
                        label: "\u754C\u9762\u914D\u7F6E",
                        name: "interface"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElScrollbar, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$3, {
                                modelValue: unref(formData),
                                "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_tab_pane, {
                        label: "\u5F62\u8C61\u914D\u7F6E",
                        name: "digital"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElScrollbar, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4, {
                                modelValue: unref(formData),
                                "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "my-[15px] flex justify-center" }, [
                  createVNode(_component_el_button, {
                    type: "primary",
                    onClick: handelSubmit
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u4FDD\u5B58")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-edit/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppEdit = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-046fb527"]]);

export { AppEdit as default };
//# sourceMappingURL=index-D0pNL-gw.mjs.map
