import { E as ElTabs, a as ElTabPane } from './el-tab-pane-C7DQ8faq.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as __nuxt_component_3 } from './index-x5xEUu1d.mjs';
import { E as ElRadioGroup, b as ElRadioButton } from './el-radio-group-PXDiQVwm.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { E as ElEmpty } from './el-empty-xbPr04pX.mjs';
import { bj as getMapsList } from './server.mjs';
import { useSSRContext, defineComponent, reactive, withAsyncContext, computed, mergeProps, unref, withCtx, openBlock, createBlock, Fragment, renderList, createVNode, createTextVNode, toDisplayString } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useCanvasStore, I as ImageTypes } from './canvas-DJ4hjlD7.mjs';
import { e as emptyImg } from './empty_con-BDdV71_z.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import './strings-D1uxkXhq.mjs';
import '@vue/shared';
import './index-C5I0EtSx.mjs';
import './index-BoqjHllR.mjs';
import 'lodash-unified';
import './position-DVxxNIGX.mjs';
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
import './useAudioPlay-C6V9947w.mjs';
import './file-RP6bCPT_.mjs';
import 'jsdom';
import 'jsdom/lib/jsdom/living/generated/utils';
import 'jsdom/lib/jsdom/utils';
import 'fontfaceobserver';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "maps",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const canvasStore = useCanvasStore();
    const tabList = [
      {
        type: 1,
        label: "\u7CFB\u7EDF\u8D34\u56FE"
      }
    ];
    const state = reactive({
      type: 1,
      index: 0
    });
    const { data: mapsCategory } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => getMapsList(), {
      lazy: true
    }, "$Ult9WlnVjn")), __temp = await __temp, __restore(), __temp);
    const mapsLists = computed(() => {
      return mapsCategory.value[state.index].decals || [];
    });
    const insertMaps = (item) => {
      canvasStore.addImage(item.url, ImageTypes.MAPS, item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_ElScrollbar = ElScrollbar;
      const _component_DropdownMore = __nuxt_component_3;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_radio_button = ElRadioButton;
      const _component_ElImage = ElImage;
      const _component_ElEmpty = ElEmpty;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "maps-select h-full flex flex-col" }, _attrs))} data-v-4e32725f><div class="mt-[5px] px-main" data-v-4e32725f>`);
      _push(ssrRenderComponent(_component_el_tabs, {
        modelValue: unref(state).type,
        "onUpdate:modelValue": ($event) => unref(state).type = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(tabList, (item) => {
              _push2(ssrRenderComponent(_component_el_tab_pane, {
                key: item.type,
                label: item.label,
                name: item.type
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(tabList, (item) => {
                return createVNode(_component_el_tab_pane, {
                  key: item.type,
                  label: item.label,
                  name: item.type
                }, null, 8, ["label", "name"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 min-h-0" data-v-4e32725f>`);
      _push(ssrRenderComponent(_component_ElScrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-main pt-0" data-v-4e32725f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DropdownMore, {
              class: "mb-[10px] mt-[-5px]",
              "default-height": 42
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_radio_group, {
                    modelValue: unref(state).index,
                    "onUpdate:modelValue": ($event) => unref(state).index = $event,
                    class: "el-radio-group-margin"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(mapsCategory), (item, index) => {
                          _push4(ssrRenderComponent(_component_el_radio_button, {
                            key: index,
                            label: index
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(mapsCategory), (item, index) => {
                            return openBlock(), createBlock(_component_el_radio_button, {
                              key: index,
                              label: index
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["label"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_radio_group, {
                      modelValue: unref(state).index,
                      "onUpdate:modelValue": ($event) => unref(state).index = $event,
                      class: "el-radio-group-margin"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(mapsCategory), (item, index) => {
                          return openBlock(), createBlock(_component_el_radio_button, {
                            key: index,
                            label: index
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["label"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(mapsLists).length) {
              _push2(`<div class="flex flex-wrap mx-[-7px]" data-v-4e32725f${_scopeId}><!--[-->`);
              ssrRenderList(unref(mapsLists), (item) => {
                _push2(`<div class="w-[33.33%]" data-v-4e32725f${_scopeId}><div class="px-[7px] mb-[14px]" data-v-4e32725f${_scopeId}><div class="bg-[#101010] rounded-md cursor-pointer" data-v-4e32725f${_scopeId}><div data-v-4e32725f${_scopeId}><div class="pic-wrap h-0 pt-[100%] relative" data-v-4e32725f${_scopeId}><div class="absolute inset-0" data-v-4e32725f${_scopeId}>`);
                _push2(ssrRenderComponent(_component_ElImage, {
                  src: item.url,
                  class: "w-full h-full",
                  fit: "contain",
                  lazy: ""
                }, null, _parent2, _scopeId));
                _push2(`</div></div></div></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(ssrRenderComponent(_component_ElEmpty, {
                image: unref(emptyImg),
                description: "\u6682\u65E0\u6570\u636E\uFF5E"
              }, null, _parent2, _scopeId));
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-main pt-0" }, [
                createVNode(_component_DropdownMore, {
                  class: "mb-[10px] mt-[-5px]",
                  "default-height": 42
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_radio_group, {
                      modelValue: unref(state).index,
                      "onUpdate:modelValue": ($event) => unref(state).index = $event,
                      class: "el-radio-group-margin"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(mapsCategory), (item, index) => {
                          return openBlock(), createBlock(_component_el_radio_button, {
                            key: index,
                            label: index
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["label"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                unref(mapsLists).length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex flex-wrap mx-[-7px]"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(mapsLists), (item) => {
                    return openBlock(), createBlock("div", {
                      key: item.id,
                      class: "w-[33.33%]"
                    }, [
                      createVNode("div", {
                        class: "px-[7px] mb-[14px]",
                        onClick: ($event) => insertMaps(item)
                      }, [
                        createVNode("div", { class: "bg-[#101010] rounded-md cursor-pointer" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "pic-wrap h-0 pt-[100%] relative" }, [
                              createVNode("div", { class: "absolute inset-0" }, [
                                createVNode(_component_ElImage, {
                                  src: item.url,
                                  class: "w-full h-full",
                                  fit: "contain",
                                  lazy: ""
                                }, null, 8, ["src"])
                              ])
                            ])
                          ])
                        ])
                      ], 8, ["onClick"])
                    ]);
                  }), 128))
                ])) : (openBlock(), createBlock(_component_ElEmpty, {
                  key: 1,
                  image: unref(emptyImg),
                  description: "\u6682\u65E0\u6570\u636E\uFF5E"
                }, null, 8, ["image"]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/_components/design-left/maps.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Maps = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4e32725f"]]);

export { Maps as default };
//# sourceMappingURL=maps-KaeC0uWT.mjs.map
