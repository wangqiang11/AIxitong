import { _ as __nuxt_component_3 } from './index-x5xEUu1d.mjs';
import { E as ElRadioGroup, b as ElRadioButton } from './el-radio-group-PXDiQVwm.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElEmpty } from './el-empty-xbPr04pX.mjs';
import { bh as getMusicCategory, bi as getMusicList } from './server.mjs';
import { defineComponent, reactive, withAsyncContext, mergeProps, withCtx, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, useSSRContext, toRaw } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useDebounceFn } from '@vueuse/core';
import { u as useCanvasStore } from './canvas-DJ4hjlD7.mjs';
import DubItem from './dub-item-QlRowzhf.mjs';
import { e as emptyImg } from './empty_con-BDdV71_z.mjs';
import './index-BoqjHllR.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "music",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const canvasStore = useCanvasStore();
    const state = reactive({
      keyword: "",
      category_id: 0
    });
    const { data: category } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => getMusicCategory(), {
      lazy: true
    }, "$62OqCgsHxi")), __temp = await __temp, __restore(), __temp);
    const {
      data: musicList,
      refresh: refreshMusicList,
      pending
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => getMusicList(state), {
      lazy: true
    }, "$XfxmNfcMJb")), __temp = await __temp, __restore(), __temp);
    useDebounceFn(() => {
      refreshMusicList();
    }, 1e3);
    const selectItem = (item) => {
      canvasStore.music = toRaw(item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DropdownMore = __nuxt_component_3;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_radio_button = ElRadioButton;
      const _component_el_scrollbar = ElScrollbar;
      const _component_ElEmpty = ElEmpty;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col" }, _attrs))}><div><div class="pt-[15px] px-main">`);
      _push(ssrRenderComponent(_component_DropdownMore, {
        class: "my-[-5px]",
        "default-height": 42
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_radio_group, {
              modelValue: unref(state).category_id,
              "onUpdate:modelValue": ($event) => unref(state).category_id = $event,
              class: "el-radio-group-margin",
              onChange: ($event) => unref(refreshMusicList)()
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
                onChange: ($event) => unref(refreshMusicList)()
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
      _push(`</div></div><div class="flex-1 min-h-0">`);
      _push(ssrRenderComponent(_component_el_scrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-main"${_scopeId}>`);
            if (unref(musicList).length) {
              _push2(`<div${_scopeId}><!--[-->`);
              ssrRenderList(unref(musicList), (item) => {
                _push2(ssrRenderComponent(DubItem, {
                  "active-id": unref(canvasStore).music.id,
                  "item-id": item.id,
                  key: item.id,
                  class: "mb-[15px]",
                  name: item.name,
                  pic: item.cover,
                  url: item.url,
                  onClick: ($event) => selectItem(item)
                }, null, _parent2, _scopeId));
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
              createVNode("div", { class: "p-main" }, [
                unref(musicList).length ? (openBlock(), createBlock("div", { key: 0 }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(musicList), (item) => {
                    return openBlock(), createBlock(DubItem, {
                      "active-id": unref(canvasStore).music.id,
                      "item-id": item.id,
                      key: item.id,
                      class: "mb-[15px]",
                      name: item.name,
                      pic: item.cover,
                      url: item.url,
                      onClick: ($event) => selectItem(item)
                    }, null, 8, ["active-id", "item-id", "name", "pic", "url", "onClick"]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/_components/design-left/music.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=music-B1eYyUpS.mjs.map
