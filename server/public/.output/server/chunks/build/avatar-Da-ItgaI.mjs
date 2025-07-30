import { E as ElTabs, a as ElTabPane } from './el-tab-pane-C7DQ8faq.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { E as ElEmpty } from './el-empty-xbPr04pX.mjs';
import { bc as getAvatarList } from './server.mjs';
import { defineComponent, computed, reactive, withAsyncContext, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { u as useCanvasStore, I as ImageTypes } from './canvas-DJ4hjlD7.mjs';
import { e as emptyImg } from './empty_con-BDdV71_z.mjs';
import '@vueuse/core';
import './strings-D1uxkXhq.mjs';
import '@vue/shared';
import './index-C5I0EtSx.mjs';
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
  __name: "avatar",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const canvasStore = useCanvasStore();
    const insertAvatar = (item) => {
      canvasStore.addImage(item.cover_url, ImageTypes.AVATAR, item);
    };
    const currentAvatar = computed(() => {
      var _a;
      const object = (_a = canvasStore.canvasJson.objects) == null ? void 0 : _a.find(
        (item) => item.customType === ImageTypes.AVATAR
      );
      if (object == null ? void 0 : object.data) {
        return object.data;
      }
    });
    const state = reactive({
      keyword: "",
      currentTab: "2d"
    });
    const { data: lists } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => getAvatarList(), {
      lazy: true
    }, "$ax15cTFL79")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_el_scrollbar = ElScrollbar;
      const _component_ElImage = ElImage;
      const _component_ElEmpty = ElEmpty;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "avatar-select h-full flex flex-col" }, _attrs))}><div class="px-main"><div class="mt-[5px]">`);
      _push(ssrRenderComponent(_component_el_tabs, {
        modelValue: unref(state).currentTab,
        "onUpdate:modelValue": ($event) => unref(state).currentTab = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_tab_pane, {
              label: "2D\u5F62\u8C61",
              name: "2d"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_tab_pane, {
                label: "2D\u5F62\u8C61",
                name: "2d"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex-1 min-h-0">`);
      _push(ssrRenderComponent(_component_el_scrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-main pb-main"${_scopeId}>`);
            if (unref(lists).length) {
              _push2(`<div class="flex flex-wrap mx-[-7px]"${_scopeId}><!--[-->`);
              ssrRenderList(unref(lists), (item) => {
                var _a;
                _push2(`<div class="w-[50%]"${_scopeId}><div class="px-[7px] mb-[14px]"${_scopeId}><div class="${ssrRenderClass([{
                  "!border-primary": ((_a = unref(currentAvatar)) == null ? void 0 : _a.avatar_id) == item.avatar_id
                }, "border border-solid border-br-light rounded-md p-[10px] cursor-pointer"])}"${_scopeId}><div${_scopeId}><div class="pic-wrap h-0 pt-[110%] relative"${_scopeId}><div class="absolute inset-0 bg-[#f4f6ff] rounded-lg"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_ElImage, {
                  src: item.cover_url,
                  class: "w-full h-full",
                  fit: "contain",
                  lazy: ""
                }, null, _parent2, _scopeId));
                _push2(`</div></div><div class="mt-[10px] line-clamp-1 text-center"${_scopeId}>${ssrInterpolate(item.name)}</div></div></div></div></div>`);
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
              createVNode("div", { class: "px-main pb-main" }, [
                unref(lists).length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex flex-wrap mx-[-7px]"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(lists), (item) => {
                    var _a;
                    return openBlock(), createBlock("div", {
                      key: item.type,
                      class: "w-[50%]",
                      onClick: ($event) => insertAvatar(item)
                    }, [
                      createVNode("div", { class: "px-[7px] mb-[14px]" }, [
                        createVNode("div", {
                          class: ["border border-solid border-br-light rounded-md p-[10px] cursor-pointer", {
                            "!border-primary": ((_a = unref(currentAvatar)) == null ? void 0 : _a.avatar_id) == item.avatar_id
                          }]
                        }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "pic-wrap h-0 pt-[110%] relative" }, [
                              createVNode("div", { class: "absolute inset-0 bg-[#f4f6ff] rounded-lg" }, [
                                createVNode(_component_ElImage, {
                                  src: item.cover_url,
                                  class: "w-full h-full",
                                  fit: "contain",
                                  lazy: ""
                                }, null, 8, ["src"])
                              ])
                            ]),
                            createVNode("div", { class: "mt-[10px] line-clamp-1 text-center" }, toDisplayString(item.name), 1)
                          ])
                        ], 2)
                      ])
                    ], 8, ["onClick"]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/_components/design-left/avatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=avatar-Da-ItgaI.mjs.map
