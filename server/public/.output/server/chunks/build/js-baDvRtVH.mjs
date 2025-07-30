import { E as ElPageHeader } from './el-page-header-94hYPtex.mjs';
import { d as ElButton, B as vLoading, A as feedback } from './server.mjs';
import { E as ElTable, a as ElTableColumn } from './el-table-column-tZnWqVKO.mjs';
import { E as ElDropdown, a as ElDropdownMenu, b as ElDropdownItem } from './el-dropdown-item-BcYIrjsW.mjs';
import { _ as _sfc_main$4 } from './index-BoqjHllR.mjs';
import { _ as _sfc_main$5 } from './index-D60of7Hb.mjs';
import { defineComponent, shallowRef, ref, toRefs, reactive, watch, withCtx, createTextVNode, mergeProps, unref, createVNode, isRef, useSSRContext } from 'vue';
import { u as usePaging } from './usePaging-DU8sXki3.mjs';
import { ssrRenderComponent, ssrGetDirectiveProps } from 'vue/server-renderer';
import _sfc_main$1 from './create-share-5dUrzWP0.mjs';
import _sfc_main$2 from './js-embedding-DqJ9JY5f.mjs';
import _sfc_main$3 from './usage-settings-D9Rk2FPz.mjs';
import { x as putRelease, A as postReleaseInfo, y as postRelease, z as getReleaseList, w as delRelease } from './robot-BsB_E1H2.mjs';
import './index-pT4w-4Lo.mjs';
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
import './index-0xCxAaTZ.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-53t5ntO1.mjs';
import './index-5Ia44xzE.mjs';
import 'normalize-wheel-es';
import './dropdown-C6fgV-Vy.mjs';
import './refs-CJvnaIJj.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './el-pagination-ClrwtCwT.mjs';
import './index-CUhOTuS-.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-DLL0sEcv.mjs';
import 'async-validator';
import './el-radio-group-PXDiQVwm.mjs';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './index-DRyhljQ3.mjs';
import 'markdown-it';
import 'highlight.js';
import '@vscode/markdown-it-katex';
import './el-input-number-DH6NTUUv.mjs';
import './index-iSFXrlfY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "js",
  __ssrInlineRender: true,
  props: {
    appId: {}
  },
  emits: ["back"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const createShareRef = shallowRef();
    const jsEmbeddingRef = shallowRef();
    const usageSettingsRef = shallowRef();
    const currentData = ref({});
    const { appId } = toRefs(props);
    const queryParams = reactive({
      robot_id: appId,
      type: 2
    });
    const { pager, getLists } = usePaging({
      fetchFun: getReleaseList,
      params: queryParams
    });
    getLists();
    const shareDelete = async (id) => {
      await feedback.confirm("\u786E\u5B9A\u5220\u9664\uFF1F");
      await delRelease({
        id,
        type: queryParams.type
      });
      getLists();
    };
    const handleCommand = (command, row) => {
      switch (command) {
        case "delete":
          shareDelete(row.id);
          break;
        case "edit":
          showCreatePopup(row);
          break;
        case "usage":
          showUsageSettings(row);
      }
    };
    const showCreatePopup = (row) => {
      var _a;
      let data = null;
      if (row) {
        data = {
          id: row.id,
          name: row.name,
          password: row.secret
        };
      }
      (_a = createShareRef.value) == null ? void 0 : _a.open(data);
    };
    const handleCreateShare = async (formData, type) => {
      var _a;
      await (type == "add" ? putRelease({
        ...formData,
        ...queryParams
      }) : postReleaseInfo({
        id: formData.id,
        name: formData.name,
        password: formData.password
      }));
      (_a = createShareRef.value) == null ? void 0 : _a.close();
      getLists();
    };
    const setCurrentData = (data) => {
      currentData.value = data;
    };
    const jsEmbedding = (row) => {
      var _a;
      setCurrentData(row);
      (_a = jsEmbeddingRef.value) == null ? void 0 : _a.open();
    };
    const showUsageSettings = (row) => {
      var _a, _b;
      (_a = usageSettingsRef.value) == null ? void 0 : _a.open();
      (_b = usageSettingsRef.value) == null ? void 0 : _b.setFormData(row);
    };
    const handelUsageSettings = async (formData) => {
      var _a;
      await postRelease({
        ...formData,
        ...queryParams
      });
      (_a = usageSettingsRef.value) == null ? void 0 : _a.close();
      getLists();
    };
    watch(
      () => props.appId,
      () => {
        getLists();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_page_header = ElPageHeader;
      const _component_el_button = ElButton;
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _component_el_dropdown = ElDropdown;
      const _component_Icon = _sfc_main$4;
      const _component_el_dropdown_menu = ElDropdownMenu;
      const _component_el_dropdown_item = ElDropdownItem;
      const _component_pagination = _sfc_main$5;
      const _directive_loading = vLoading;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_el_page_header, {
        content: "\u53D1\u5E03JS\u5D4C\u5165",
        onBack: ($event) => emit("back")
      }, null, _parent));
      _push(`<div class="mt-4">`);
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        onClick: ($event) => showCreatePopup()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u521B\u5EFA\u94FE\u63A5 `);
          } else {
            return [
              createTextVNode(" \u521B\u5EFA\u94FE\u63A5 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-4">`);
      _push(ssrRenderComponent(_component_el_table, mergeProps({
        data: unref(pager).lists,
        size: "large"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(pager).loading)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "apikey",
              prop: "apikey",
              "min-width": "200"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u5206\u4EAB\u540D\u79F0",
              prop: "name",
              "min-width": "180",
              "show-tooltip-when-overflow": ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u8BBF\u95EE\u5BC6\u7801",
              prop: "secret",
              "min-width": "120"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u6700\u540E\u4F7F\u7528\u65F6\u95F4",
              prop: "use_time",
              "min-width": "180"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u64CD\u4F5C",
              "min-width": "150",
              fixed: "right"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_button, {
                    type: "primary",
                    link: "",
                    onClick: ($event) => jsEmbedding(row)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u67E5\u770B\u4EE3\u7801 `);
                      } else {
                        return [
                          createTextVNode(" \u67E5\u770B\u4EE3\u7801 ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_dropdown, {
                    class: "ml-[10px]",
                    onCommand: ($event) => handleCommand($event, row)
                  }, {
                    dropdown: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_dropdown_menu, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_dropdown_item, { command: "edit" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_button, {
                                      type: "primary",
                                      link: ""
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u7F16\u8F91 `);
                                        } else {
                                          return [
                                            createTextVNode(" \u7F16\u8F91 ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_el_button, {
                                        type: "primary",
                                        link: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u7F16\u8F91 ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_dropdown_item, { command: "usage" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_button, {
                                      type: "primary",
                                      link: ""
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u7528\u91CF\u8BBE\u7F6E `);
                                        } else {
                                          return [
                                            createTextVNode(" \u7528\u91CF\u8BBE\u7F6E ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_el_button, {
                                        type: "primary",
                                        link: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u7528\u91CF\u8BBE\u7F6E ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_dropdown_item, { command: "delete" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_button, {
                                      type: "danger",
                                      link: ""
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u5220\u9664 `);
                                        } else {
                                          return [
                                            createTextVNode(" \u5220\u9664 ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_el_button, {
                                        type: "danger",
                                        link: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u5220\u9664 ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_dropdown_item, { command: "edit" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_button, {
                                      type: "primary",
                                      link: ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u7F16\u8F91 ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_dropdown_item, { command: "usage" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_button, {
                                      type: "primary",
                                      link: ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u7528\u91CF\u8BBE\u7F6E ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_dropdown_item, { command: "delete" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_button, {
                                      type: "danger",
                                      link: ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u5220\u9664 ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_dropdown_menu, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_dropdown_item, { command: "edit" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_button, {
                                    type: "primary",
                                    link: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u7F16\u8F91 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_dropdown_item, { command: "usage" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_button, {
                                    type: "primary",
                                    link: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u7528\u91CF\u8BBE\u7F6E ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_dropdown_item, { command: "delete" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_button, {
                                    type: "danger",
                                    link: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u5220\u9664 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_button, {
                          type: "primary",
                          link: ""
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u66F4\u591A `);
                              _push5(ssrRenderComponent(_component_Icon, { name: "el-icon-ArrowDown" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" \u66F4\u591A "),
                                createVNode(_component_Icon, { name: "el-icon-ArrowDown" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_button, {
                            type: "primary",
                            link: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u66F4\u591A "),
                              createVNode(_component_Icon, { name: "el-icon-ArrowDown" })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode(_component_el_button, {
                        type: "primary",
                        link: "",
                        onClick: ($event) => jsEmbedding(row)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u67E5\u770B\u4EE3\u7801 ")
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createVNode(_component_el_dropdown, {
                        class: "ml-[10px]",
                        onCommand: ($event) => handleCommand($event, row)
                      }, {
                        dropdown: withCtx(() => [
                          createVNode(_component_el_dropdown_menu, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_dropdown_item, { command: "edit" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_button, {
                                    type: "primary",
                                    link: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u7F16\u8F91 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_dropdown_item, { command: "usage" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_button, {
                                    type: "primary",
                                    link: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u7528\u91CF\u8BBE\u7F6E ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_dropdown_item, { command: "delete" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_button, {
                                    type: "danger",
                                    link: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u5220\u9664 ")
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
                        default: withCtx(() => [
                          createVNode(_component_el_button, {
                            type: "primary",
                            link: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u66F4\u591A "),
                              createVNode(_component_Icon, { name: "el-icon-ArrowDown" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1032, ["onCommand"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_table_column, {
                label: "apikey",
                prop: "apikey",
                "min-width": "200"
              }),
              createVNode(_component_el_table_column, {
                label: "\u5206\u4EAB\u540D\u79F0",
                prop: "name",
                "min-width": "180",
                "show-tooltip-when-overflow": ""
              }),
              createVNode(_component_el_table_column, {
                label: "\u8BBF\u95EE\u5BC6\u7801",
                prop: "secret",
                "min-width": "120"
              }),
              createVNode(_component_el_table_column, {
                label: "\u6700\u540E\u4F7F\u7528\u65F6\u95F4",
                prop: "use_time",
                "min-width": "180"
              }),
              createVNode(_component_el_table_column, {
                label: "\u64CD\u4F5C",
                "min-width": "150",
                fixed: "right"
              }, {
                default: withCtx(({ row }) => [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(_component_el_button, {
                      type: "primary",
                      link: "",
                      onClick: ($event) => jsEmbedding(row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u67E5\u770B\u4EE3\u7801 ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_el_dropdown, {
                      class: "ml-[10px]",
                      onCommand: ($event) => handleCommand($event, row)
                    }, {
                      dropdown: withCtx(() => [
                        createVNode(_component_el_dropdown_menu, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_dropdown_item, { command: "edit" }, {
                              default: withCtx(() => [
                                createVNode(_component_el_button, {
                                  type: "primary",
                                  link: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u7F16\u8F91 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_dropdown_item, { command: "usage" }, {
                              default: withCtx(() => [
                                createVNode(_component_el_button, {
                                  type: "primary",
                                  link: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u7528\u91CF\u8BBE\u7F6E ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_dropdown_item, { command: "delete" }, {
                              default: withCtx(() => [
                                createVNode(_component_el_button, {
                                  type: "danger",
                                  link: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u5220\u9664 ")
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
                      default: withCtx(() => [
                        createVNode(_component_el_button, {
                          type: "primary",
                          link: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u66F4\u591A "),
                            createVNode(_component_Icon, { name: "el-icon-ArrowDown" })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onCommand"])
                  ])
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
        onChange: unref(getLists)
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        ref_key: "createShareRef",
        ref: createShareRef,
        isShowChatType: false,
        onConfirm: handleCreateShare
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        ref_key: "jsEmbeddingRef",
        ref: jsEmbeddingRef,
        "channel-id": unref(currentData).apikey
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        ref_key: "usageSettingsRef",
        ref: usageSettingsRef,
        onConfirm: handelUsageSettings
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-release/js.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=js-baDvRtVH.mjs.map
