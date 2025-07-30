import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { d as ElButton } from './server.mjs';
import { E as ElEmpty } from './el-empty-xbPr04pX.mjs';
import { u as useCanvasStore, a as useDesignTabs } from './canvas-DJ4hjlD7.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import Draggable from 'vuedraggable';
import { E as EmptyLayer } from './empty_layer-D7gB2S7C.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import '@vue/shared';
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
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './useAudioPlay-C6V9947w.mjs';
import './file-RP6bCPT_.mjs';
import 'jsdom';
import 'jsdom/lib/jsdom/living/generated/utils';
import 'jsdom/lib/jsdom/utils';
import 'fontfaceobserver';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const canvasStore = useCanvasStore();
    const { tabsState } = useDesignTabs();
    const getIcon = (type) => {
      const current = tabsState.value.tabs.find((item) => item.id == type);
      return (current == null ? void 0 : current.icon) || "local-icon-chuangyiwuliao";
    };
    const layerLists = computed({
      get() {
        return [...canvasStore.canvasJson.objects].reverse();
      },
      set(value) {
        canvasStore.setCanvasJson({
          ...canvasStore.canvasJson,
          objects: value.reverse()
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElScrollbar = ElScrollbar;
      const _component_Icon = _sfc_main$1;
      const _component_ElButton = ElButton;
      const _component_el_empty = ElEmpty;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full bg-white w-[240px]" }, _attrs))} data-v-eee95783>`);
      _push(ssrRenderComponent(_component_ElScrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-eee95783${_scopeId}><div class="font-medium p-main" data-v-eee95783${_scopeId}>\u56FE\u5C42</div>`);
            if (unref(layerLists).length) {
              _push2(`<div data-v-eee95783${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Draggable), {
                modelValue: unref(layerLists),
                "onUpdate:modelValue": ($event) => isRef(layerLists) ? layerLists.value = $event : null,
                "item-key": "id",
                handle: ".drag-icon",
                draggable: ".draggable"
              }, {
                item: withCtx(({ element }, _push3, _parent3, _scopeId2) => {
                  var _a, _b;
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass([{
                      active: element.id === ((_a = unref(canvasStore).activeObject) == null ? void 0 : _a.id),
                      draggable: element.customType !== "background"
                    }, "flex items-center h-[32px] pl-[15px] pr-[10px] layer-item cursor-pointer"])}" data-v-eee95783${_scopeId2}><span data-v-eee95783${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: getIcon(element.customType)
                    }, null, _parent3, _scopeId2));
                    _push3(`</span><span class="flex-1 min-w-0 line-clamp-1 ml-[10px]" data-v-eee95783${_scopeId2}>${ssrInterpolate(element.name)} `);
                    if (element.text) {
                      _push3(`<span class="text-tx-regular text-sm" data-v-eee95783${_scopeId2}> \uFF08${ssrInterpolate(element.text)}\uFF09 </span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</span><div class="layer-icon" data-v-eee95783${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_ElButton, {
                      link: "",
                      onClick: ($event) => unref(canvasStore).delObject(element.id)
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, { name: "local-icon-del" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, { name: "local-icon-del" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    if (element.customType !== "background") {
                      _push3(`<div class="drag-icon layer-icon" data-v-eee95783${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_ElButton, {
                        link: "",
                        class: "!cursor-move"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_Icon, { name: "local-icon-dot" }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_Icon, { name: "local-icon-dot" })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: ["flex items-center h-[32px] pl-[15px] pr-[10px] layer-item cursor-pointer", {
                          active: element.id === ((_b = unref(canvasStore).activeObject) == null ? void 0 : _b.id),
                          draggable: element.customType !== "background"
                        }],
                        onClick: ($event) => unref(canvasStore).setActiveObject(element.id)
                      }, [
                        createVNode("span", null, [
                          createVNode(_component_Icon, {
                            name: getIcon(element.customType)
                          }, null, 8, ["name"])
                        ]),
                        createVNode("span", { class: "flex-1 min-w-0 line-clamp-1 ml-[10px]" }, [
                          createTextVNode(toDisplayString(element.name) + " ", 1),
                          element.text ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-tx-regular text-sm"
                          }, " \uFF08" + toDisplayString(element.text) + "\uFF09 ", 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "layer-icon" }, [
                          createVNode(_component_ElButton, {
                            link: "",
                            onClick: ($event) => unref(canvasStore).delObject(element.id)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, { name: "local-icon-del" })
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        element.customType !== "background" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "drag-icon layer-icon"
                        }, [
                          createVNode(_component_ElButton, {
                            link: "",
                            class: "!cursor-move"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, { name: "local-icon-dot" })
                            ]),
                            _: 1
                          })
                        ])) : createCommentVNode("", true)
                      ], 10, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div data-v-eee95783${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_empty, {
                image: unref(EmptyLayer),
                description: "\u6682\u65E0\u56FE\u5C42\uFF5E",
                "image-size": 80
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "font-medium p-main" }, "\u56FE\u5C42"),
                unref(layerLists).length ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(unref(Draggable), {
                    modelValue: unref(layerLists),
                    "onUpdate:modelValue": ($event) => isRef(layerLists) ? layerLists.value = $event : null,
                    "item-key": "id",
                    handle: ".drag-icon",
                    draggable: ".draggable"
                  }, {
                    item: withCtx(({ element }) => {
                      var _a;
                      return [
                        createVNode("div", {
                          class: ["flex items-center h-[32px] pl-[15px] pr-[10px] layer-item cursor-pointer", {
                            active: element.id === ((_a = unref(canvasStore).activeObject) == null ? void 0 : _a.id),
                            draggable: element.customType !== "background"
                          }],
                          onClick: ($event) => unref(canvasStore).setActiveObject(element.id)
                        }, [
                          createVNode("span", null, [
                            createVNode(_component_Icon, {
                              name: getIcon(element.customType)
                            }, null, 8, ["name"])
                          ]),
                          createVNode("span", { class: "flex-1 min-w-0 line-clamp-1 ml-[10px]" }, [
                            createTextVNode(toDisplayString(element.name) + " ", 1),
                            element.text ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-tx-regular text-sm"
                            }, " \uFF08" + toDisplayString(element.text) + "\uFF09 ", 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "layer-icon" }, [
                            createVNode(_component_ElButton, {
                              link: "",
                              onClick: ($event) => unref(canvasStore).delObject(element.id)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, { name: "local-icon-del" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          element.customType !== "background" ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "drag-icon layer-icon"
                          }, [
                            createVNode(_component_ElButton, {
                              link: "",
                              class: "!cursor-move"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, { name: "local-icon-dot" })
                              ]),
                              _: 1
                            })
                          ])) : createCommentVNode("", true)
                        ], 10, ["onClick"])
                      ];
                    }),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode(_component_el_empty, {
                    image: unref(EmptyLayer),
                    description: "\u6682\u65E0\u56FE\u5C42\uFF5E",
                    "image-size": 80
                  }, null, 8, ["image"])
                ]))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/_components/design-right/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DesignRight = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eee95783"]]);

export { DesignRight as default };
//# sourceMappingURL=index-Dxej-YBv.mjs.map
