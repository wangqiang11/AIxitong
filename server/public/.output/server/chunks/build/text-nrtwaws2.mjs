import { d as ElButton } from './server.mjs';
import { E as ElTabs, a as ElTabPane } from './el-tab-pane-C7DQ8faq.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElForm } from './index-DLL0sEcv.mjs';
import { E as ElEmpty } from './el-empty-xbPr04pX.mjs';
import { useSSRContext, defineComponent, reactive, computed, watch, mergeProps, withCtx, createTextVNode, unref, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useCanvasStore, T as TextTypes } from './canvas-DJ4hjlD7.mjs';
import { cloneDeep } from 'lodash-es';
import _sfc_main$1 from './text-setting-XtZUo9Gm.mjs';
import EffectList from './effect-list-DJPn3tRr.mjs';
import { e as emptyImg } from './empty_con-BDdV71_z.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import '@vueuse/core';
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './strings-D1uxkXhq.mjs';
import './index-C5I0EtSx.mjs';
import 'async-validator';
import './useAudioPlay-C6V9947w.mjs';
import './file-RP6bCPT_.mjs';
import 'jsdom';
import 'jsdom/lib/jsdom/living/generated/utils';
import 'jsdom/lib/jsdom/utils';
import 'fontfaceobserver';
import './index-CUhOTuS-.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-D7S5lb8a.mjs';
import './index-5Ia44xzE.mjs';
import './el-input-number-DH6NTUUv.mjs';
import './index-iSFXrlfY.mjs';
import './el-color-picker-BpaTgxgG.mjs';
import './position-DVxxNIGX.mjs';
import './index-x5xEUu1d.mjs';
import './index-BoqjHllR.mjs';
import './el-radio-group-PXDiQVwm.mjs';
import './index-C2yEelJa.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "text",
  __ssrInlineRender: true,
  setup(__props) {
    const canvasStore = useCanvasStore();
    const state = reactive({
      currentTab: "setting"
    });
    const initFontAttr = {
      fontSize: 64,
      fontFamily: "Alibaba PuHuiTi",
      fill: "#ffffff",
      stroke: "",
      effect: {
        name: "",
        server_key: "",
        type: "",
        url: ""
      }
    };
    const fontAttr = reactive(cloneDeep(initFontAttr));
    const isActive = computed(
      () => {
        var _a;
        return ((_a = canvasStore.activeObject) == null ? void 0 : _a.customType) === TextTypes.TEXT;
      }
    );
    const addWord = () => {
      state.currentTab = "setting";
      const data = cloneDeep(initFontAttr);
      canvasStore.addText("\u8FD9\u91CC\u662F\u6587\u5B57", TextTypes.TEXT, data);
    };
    watch(
      () => canvasStore.activeObject,
      (value) => {
        var _a;
        if (isActive.value) {
          for (const key in fontAttr) {
            fontAttr[key] = (_a = value == null ? void 0 : value.data) == null ? void 0 : _a[key];
          }
        } else {
          Object.assign(fontAttr, cloneDeep(initFontAttr));
        }
      },
      {
        immediate: true
      }
    );
    const objectKeys = ["fontSize", "fontFamily", "fill", "stroke"];
    watch(
      () => fontAttr,
      (value) => {
        var _a, _b, _c;
        if (!isActive.value) {
          return;
        }
        for (const key in fontAttr) {
          if (objectKeys.includes(key)) {
            let item = value[key];
            if (key === "fontSize") {
              item = canvasStore.calcFontSize(item);
            }
            (_a = canvasStore.activeObject) == null ? void 0 : _a.set(key, item);
          }
        }
        const data = cloneDeep(fontAttr);
        (_b = canvasStore.activeObject) == null ? void 0 : _b.set("data", data);
        (_c = canvasStore.canvas) == null ? void 0 : _c.renderAll();
      },
      {
        deep: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_button = ElButton;
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_el_scrollbar = ElScrollbar;
      const _component_el_form = ElForm;
      const _component_ElEmpty = ElEmpty;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "avatar-select h-full flex flex-col" }, _attrs))} data-v-002da2fb><div class="px-main pt-main" data-v-002da2fb>`);
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        class: "w-full",
        size: "large",
        onClick: addWord
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6DFB\u52A0\u6587\u5B57 `);
          } else {
            return [
              createTextVNode(" \u6DFB\u52A0\u6587\u5B57 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(isActive)) {
        _push(`<div class="mt-[5px] flex-1 min-h-0" data-v-002da2fb>`);
        _push(ssrRenderComponent(_component_el_tabs, {
          modelValue: unref(state).currentTab,
          "onUpdate:modelValue": ($event) => unref(state).currentTab = $event,
          stretch: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_tab_pane, { name: "setting" }, {
                label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="el-tab__label-text" data-v-002da2fb${_scopeId2}>\u6587\u5B57\u8BBE\u7F6E</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "el-tab__label-text" }, "\u6587\u5B57\u8BBE\u7F6E")
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="h-full" data-v-002da2fb${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_el_scrollbar, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="p-main" data-v-002da2fb${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_el_form, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$1, {
                                  font: unref(fontAttr).fontFamily,
                                  "onUpdate:font": ($event) => unref(fontAttr).fontFamily = $event,
                                  "font-size": unref(fontAttr).fontSize,
                                  "onUpdate:fontSize": ($event) => unref(fontAttr).fontSize = $event,
                                  "font-color": unref(fontAttr).fill,
                                  "onUpdate:fontColor": ($event) => unref(fontAttr).fill = $event,
                                  "stroke-color": unref(fontAttr).stroke,
                                  "onUpdate:strokeColor": ($event) => unref(fontAttr).stroke = $event
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$1, {
                                    font: unref(fontAttr).fontFamily,
                                    "onUpdate:font": ($event) => unref(fontAttr).fontFamily = $event,
                                    "font-size": unref(fontAttr).fontSize,
                                    "onUpdate:fontSize": ($event) => unref(fontAttr).fontSize = $event,
                                    "font-color": unref(fontAttr).fill,
                                    "onUpdate:fontColor": ($event) => unref(fontAttr).fill = $event,
                                    "stroke-color": unref(fontAttr).stroke,
                                    "onUpdate:strokeColor": ($event) => unref(fontAttr).stroke = $event
                                  }, null, 8, ["font", "onUpdate:font", "font-size", "onUpdate:fontSize", "font-color", "onUpdate:fontColor", "stroke-color", "onUpdate:strokeColor"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "p-main" }, [
                              createVNode(_component_el_form, null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$1, {
                                    font: unref(fontAttr).fontFamily,
                                    "onUpdate:font": ($event) => unref(fontAttr).fontFamily = $event,
                                    "font-size": unref(fontAttr).fontSize,
                                    "onUpdate:fontSize": ($event) => unref(fontAttr).fontSize = $event,
                                    "font-color": unref(fontAttr).fill,
                                    "onUpdate:fontColor": ($event) => unref(fontAttr).fill = $event,
                                    "stroke-color": unref(fontAttr).stroke,
                                    "onUpdate:strokeColor": ($event) => unref(fontAttr).stroke = $event
                                  }, null, 8, ["font", "onUpdate:font", "font-size", "onUpdate:fontSize", "font-color", "onUpdate:fontColor", "stroke-color", "onUpdate:strokeColor"])
                                ]),
                                _: 1
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "h-full" }, [
                        createVNode(_component_el_scrollbar, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "p-main" }, [
                              createVNode(_component_el_form, null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$1, {
                                    font: unref(fontAttr).fontFamily,
                                    "onUpdate:font": ($event) => unref(fontAttr).fontFamily = $event,
                                    "font-size": unref(fontAttr).fontSize,
                                    "onUpdate:fontSize": ($event) => unref(fontAttr).fontSize = $event,
                                    "font-color": unref(fontAttr).fill,
                                    "onUpdate:fontColor": ($event) => unref(fontAttr).fill = $event,
                                    "stroke-color": unref(fontAttr).stroke,
                                    "onUpdate:strokeColor": ($event) => unref(fontAttr).stroke = $event
                                  }, null, 8, ["font", "onUpdate:font", "font-size", "onUpdate:fontSize", "font-color", "onUpdate:fontColor", "stroke-color", "onUpdate:strokeColor"])
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_tab_pane, { name: "special" }, {
                label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="el-tab__label-text" data-v-002da2fb${_scopeId2}>\u6587\u5B57\u7279\u6548</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "el-tab__label-text" }, "\u6587\u5B57\u7279\u6548")
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="h-full" data-v-002da2fb${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_el_scrollbar, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="p-main" data-v-002da2fb${_scopeId3}>`);
                          _push4(ssrRenderComponent(EffectList, {
                            modelValue: unref(fontAttr).effect,
                            "onUpdate:modelValue": ($event) => unref(fontAttr).effect = $event
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "p-main" }, [
                              createVNode(EffectList, {
                                modelValue: unref(fontAttr).effect,
                                "onUpdate:modelValue": ($event) => unref(fontAttr).effect = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "h-full" }, [
                        createVNode(_component_el_scrollbar, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "p-main" }, [
                              createVNode(EffectList, {
                                modelValue: unref(fontAttr).effect,
                                "onUpdate:modelValue": ($event) => unref(fontAttr).effect = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_el_tab_pane, { name: "setting" }, {
                  label: withCtx(() => [
                    createVNode("span", { class: "el-tab__label-text" }, "\u6587\u5B57\u8BBE\u7F6E")
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "h-full" }, [
                      createVNode(_component_el_scrollbar, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "p-main" }, [
                            createVNode(_component_el_form, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$1, {
                                  font: unref(fontAttr).fontFamily,
                                  "onUpdate:font": ($event) => unref(fontAttr).fontFamily = $event,
                                  "font-size": unref(fontAttr).fontSize,
                                  "onUpdate:fontSize": ($event) => unref(fontAttr).fontSize = $event,
                                  "font-color": unref(fontAttr).fill,
                                  "onUpdate:fontColor": ($event) => unref(fontAttr).fill = $event,
                                  "stroke-color": unref(fontAttr).stroke,
                                  "onUpdate:strokeColor": ($event) => unref(fontAttr).stroke = $event
                                }, null, 8, ["font", "onUpdate:font", "font-size", "onUpdate:fontSize", "font-color", "onUpdate:fontColor", "stroke-color", "onUpdate:strokeColor"])
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_tab_pane, { name: "special" }, {
                  label: withCtx(() => [
                    createVNode("span", { class: "el-tab__label-text" }, "\u6587\u5B57\u7279\u6548")
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "h-full" }, [
                      createVNode(_component_el_scrollbar, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "p-main" }, [
                            createVNode(EffectList, {
                              modelValue: unref(fontAttr).effect,
                              "onUpdate:modelValue": ($event) => unref(fontAttr).effect = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="p-main" data-v-002da2fb>`);
        _push(ssrRenderComponent(_component_ElEmpty, {
          image: unref(emptyImg),
          description: "\u8BF7\u6DFB\u52A0\u6587\u5B57\uFF0C\u6216\u5728\u53F3\u4FA7\u9009\u4E2D\u6587\u5B57\uFF5E"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/_components/design-left/text.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Text = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-002da2fb"]]);

export { Text as default };
//# sourceMappingURL=text-nrtwaws2.mjs.map
