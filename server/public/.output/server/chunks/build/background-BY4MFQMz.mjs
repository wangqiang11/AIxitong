import { E as ElTabs, a as ElTabPane } from './el-tab-pane-C7DQ8faq.mjs';
import { _ as __nuxt_component_3 } from './index-x5xEUu1d.mjs';
import { E as ElRadioGroup, b as ElRadioButton } from './el-radio-group-PXDiQVwm.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { E as ElEmpty } from './el-empty-xbPr04pX.mjs';
import { bd as getBgCategory, be as getBgList, A as feedback } from './server.mjs';
import { useSSRContext, defineComponent, reactive, withAsyncContext, computed, mergeProps, unref, withCtx, openBlock, createBlock, Fragment, renderList, createVNode, createTextVNode, toDisplayString, createCommentVNode } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useCanvasStore, I as ImageTypes, c as canvasSizeData } from './canvas-DJ4hjlD7.mjs';
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
  __name: "background",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const canvasStore = useCanvasStore();
    const tabList = [
      {
        type: 1,
        label: "\u7AD6\u7248\u80CC\u666F"
      },
      {
        type: 2,
        label: "\u6A2A\u7248\u80CC\u666F"
      }
    ];
    const state = reactive({
      type: 1,
      category_id: 0
    });
    const { data: category } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => getBgCategory(), {
      lazy: true
    }, "$kOs1tBC3ke")), __temp = await __temp, __restore(), __temp);
    const {
      data: bgList,
      refresh: refreshList,
      pending
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => getBgList(state), { lazy: true }, "$92jT89Nd84")), __temp = await __temp, __restore(), __temp);
    const insertBackground = async (item) => {
      var _a, _b, _c;
      if (((_a = currentTab.value) == null ? void 0 : _a.type) !== canvasStore.defaultSize.resolution) {
        const size = canvasSizeData[(_b = currentTab.value) == null ? void 0 : _b.type];
        if ((_c = canvasStore.getCanvasJson()) == null ? void 0 : _c.objects.length) {
          await feedback.confirm(
            "\u662F\u5426\u786E\u8BA4\u66F4\u6539\u753B\u5E03\u5C3A\u5BF8\uFF1F\u5F53\u524D\u753B\u9762\u6240\u6709\u8BBE\u7F6E\u5C06\u88AB\u91CD\u7F6E\u4E14\u65E0\u6CD5\u6062\u590D"
          );
        }
        canvasStore.changeSize(size);
        canvasStore.initObject();
      }
      canvasStore.addImage(item.url, ImageTypes.BACKGROUND, item);
    };
    const currentTab = computed(
      () => tabList.find((item) => item.type === state.type)
    );
    const currentBg = computed(() => {
      var _a;
      const object = (_a = canvasStore.canvasJson.objects) == null ? void 0 : _a.find(
        (item) => item.customType === ImageTypes.BACKGROUND
      );
      if (object == null ? void 0 : object.data) {
        return object.data;
      }
      return null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_DropdownMore = __nuxt_component_3;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_radio_button = ElRadioButton;
      const _component_el_scrollbar = ElScrollbar;
      const _component_ElImage = ElImage;
      const _component_ElEmpty = ElEmpty;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "avatar-select h-full flex flex-col" }, _attrs))} data-v-c2d2a601><div class="px-main" data-v-c2d2a601><div class="pt-[5px]" data-v-c2d2a601>`);
      _push(ssrRenderComponent(_component_el_tabs, {
        modelValue: unref(state).type,
        "onUpdate:modelValue": ($event) => unref(state).type = $event,
        onTabChange: ($event) => {
          bgList.value = [], unref(refreshList)();
        }
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
      _push(`</div>`);
      _push(ssrRenderComponent(_component_DropdownMore, {
        "default-height": 42,
        class: "my-[-5px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_radio_group, {
              modelValue: unref(state).category_id,
              "onUpdate:modelValue": ($event) => unref(state).category_id = $event,
              class: "el-radio-group-margin",
              onChange: ($event) => unref(refreshList)()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(category), (item) => {
                    _push3(ssrRenderComponent(_component_el_radio_button, {
                      key: item.id,
                      label: item.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(category), (item) => {
                      return openBlock(), createBlock(_component_el_radio_button, {
                        key: item.id,
                        label: item.id
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_radio_group, {
                modelValue: unref(state).category_id,
                "onUpdate:modelValue": ($event) => unref(state).category_id = $event,
                class: "el-radio-group-margin",
                onChange: ($event) => unref(refreshList)()
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(category), (item) => {
                    return openBlock(), createBlock(_component_el_radio_button, {
                      key: item.id,
                      label: item.id
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["label"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 min-h-0" data-v-c2d2a601>`);
      _push(ssrRenderComponent(_component_el_scrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-main" data-v-c2d2a601${_scopeId}>`);
            if (unref(bgList).length) {
              _push2(`<div class="flex flex-wrap mx-[-7px]" data-v-c2d2a601${_scopeId}><!--[-->`);
              ssrRenderList(unref(bgList), (item) => {
                var _a;
                _push2(`<div class="w-[50%]" data-v-c2d2a601${_scopeId}><div class="px-[7px] mb-[14px]" data-v-c2d2a601${_scopeId}><div class="${ssrRenderClass([{
                  "!border-primary": ((_a = unref(currentBg)) == null ? void 0 : _a.id) == item.id
                }, "border border-solid border-br-light rounded-md p-[10px] cursor-pointer"])}" data-v-c2d2a601${_scopeId}><div data-v-c2d2a601${_scopeId}><div class="${ssrRenderClass([{
                  "pt-[177%]": unref(state).type == 1,
                  "pt-[56.3%]": unref(state).type == 2
                }, "pic-wrap h-0 relative"])}" data-v-c2d2a601${_scopeId}><div class="absolute inset-0" data-v-c2d2a601${_scopeId}>`);
                _push2(ssrRenderComponent(_component_ElImage, {
                  src: item.url,
                  class: "w-full h-full",
                  fit: "contain",
                  lazy: ""
                }, null, _parent2, _scopeId));
                _push2(`</div></div></div></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else if (!unref(pending)) {
              _push2(ssrRenderComponent(_component_ElEmpty, {
                image: unref(emptyImg),
                description: "\u6682\u65E0\u6570\u636E\uFF5E"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-main" }, [
                unref(bgList).length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex flex-wrap mx-[-7px]"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(bgList), (item) => {
                    var _a;
                    return openBlock(), createBlock("div", {
                      key: item.id,
                      class: "w-[50%]"
                    }, [
                      createVNode("div", {
                        class: "px-[7px] mb-[14px]",
                        onClick: ($event) => insertBackground(item)
                      }, [
                        createVNode("div", {
                          class: ["border border-solid border-br-light rounded-md p-[10px] cursor-pointer", {
                            "!border-primary": ((_a = unref(currentBg)) == null ? void 0 : _a.id) == item.id
                          }]
                        }, [
                          createVNode("div", null, [
                            createVNode("div", {
                              class: ["pic-wrap h-0 relative", {
                                "pt-[177%]": unref(state).type == 1,
                                "pt-[56.3%]": unref(state).type == 2
                              }]
                            }, [
                              createVNode("div", { class: "absolute inset-0" }, [
                                createVNode(_component_ElImage, {
                                  src: item.url,
                                  class: "w-full h-full",
                                  fit: "contain",
                                  lazy: ""
                                }, null, 8, ["src"])
                              ])
                            ], 2)
                          ])
                        ], 2)
                      ], 8, ["onClick"])
                    ]);
                  }), 128))
                ])) : !unref(pending) ? (openBlock(), createBlock(_component_ElEmpty, {
                  key: 1,
                  image: unref(emptyImg),
                  description: "\u6682\u65E0\u6570\u636E\uFF5E"
                }, null, 8, ["image"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/_components/design-left/background.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Background = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c2d2a601"]]);

export { Background as default };
//# sourceMappingURL=background-BY4MFQMz.mjs.map
