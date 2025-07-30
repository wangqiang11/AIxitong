import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { z as useUserStore, a5 as useAppStore, d as ElButton } from './server.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import '@vueuse/core';
import '@vue/shared';
import 'vue-router';
import 'lodash-es';
import 'weixin-js-sdk';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';

const _imports_0 = "" + buildAssetsURL("avatar_example.DnuyDEq4.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const appStore = useAppStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElScrollbar = ElScrollbar;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ElButton = ElButton;
      const _component_Icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full" }, _attrs))} data-v-acf39e1b>`);
      _push(ssrRenderComponent(_component_ElScrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-main" data-v-acf39e1b${_scopeId}><div class="sm:p-[30px] lg:p-[40px] xl:p-[60px]" data-v-acf39e1b${_scopeId}><div class="flex flex-col items-center justify-center" data-v-acf39e1b${_scopeId}><h1 class="text-[32px] font-medium" data-v-acf39e1b${_scopeId}>${ssrInterpolate(unref(appStore).getAvatarConfig.title)}</h1><p class="max-w-[850px] mt-[24px] text-center text-lg" data-v-acf39e1b${_scopeId}>${ssrInterpolate(unref(appStore).getAvatarConfig.intro)}</p><div class="mt-[40px]" data-v-acf39e1b${_scopeId}><div class="p-main bg-white shadow-[0_0_16px_#006cff0f] rounded-2xl flex flex-col items-center" data-v-acf39e1b${_scopeId}><img class="w-[260px] h-[220px]"${ssrRenderAttr("src", _imports_0)} alt="" data-v-acf39e1b${_scopeId}><div class="text-2xl my-[10px]" data-v-acf39e1b${_scopeId}>\u6211\u7684\u5E10\u6237</div><div class="text-tx-regular" data-v-acf39e1b${_scopeId}> \u5269\u4F59\uFF1A${ssrInterpolate(unref(userStore).userInfo.video_num || 0)}\u5206\u949F </div><div class="my-[20px]" data-v-acf39e1b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/digital_human/aside/video_compositing" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    class: "enter-btn hover-to-right",
                    round: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u524D\u5F80\u5236\u4F5C `);
                        _push4(ssrRenderComponent(_component_Icon, {
                          class: "ml-[5px] target",
                          size: "18",
                          name: "el-icon-Right"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" \u524D\u5F80\u5236\u4F5C "),
                          createVNode(_component_Icon, {
                            class: "ml-[5px] target",
                            size: "18",
                            name: "el-icon-Right"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: "primary",
                      class: "enter-btn hover-to-right",
                      round: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u524D\u5F80\u5236\u4F5C "),
                        createVNode(_component_Icon, {
                          class: "ml-[5px] target",
                          size: "18",
                          name: "el-icon-Right"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-main" }, [
                createVNode("div", { class: "sm:p-[30px] lg:p-[40px] xl:p-[60px]" }, [
                  createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                    createVNode("h1", { class: "text-[32px] font-medium" }, toDisplayString(unref(appStore).getAvatarConfig.title), 1),
                    createVNode("p", { class: "max-w-[850px] mt-[24px] text-center text-lg" }, toDisplayString(unref(appStore).getAvatarConfig.intro), 1),
                    createVNode("div", { class: "mt-[40px]" }, [
                      createVNode("div", { class: "p-main bg-white shadow-[0_0_16px_#006cff0f] rounded-2xl flex flex-col items-center" }, [
                        createVNode("img", {
                          class: "w-[260px] h-[220px]",
                          src: _imports_0,
                          alt: ""
                        }),
                        createVNode("div", { class: "text-2xl my-[10px]" }, "\u6211\u7684\u5E10\u6237"),
                        createVNode("div", { class: "text-tx-regular" }, " \u5269\u4F59\uFF1A" + toDisplayString(unref(userStore).userInfo.video_num || 0) + "\u5206\u949F ", 1),
                        createVNode("div", { class: "my-[20px]" }, [
                          createVNode(_component_NuxtLink, { to: "/digital_human/aside/video_compositing" }, {
                            default: withCtx(() => [
                              createVNode(_component_ElButton, {
                                type: "primary",
                                class: "enter-btn hover-to-right",
                                round: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u524D\u5F80\u5236\u4F5C "),
                                  createVNode(_component_Icon, {
                                    class: "ml-[5px] target",
                                    size: "18",
                                    name: "el-icon-Right"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-acf39e1b"]]);

export { index as default };
//# sourceMappingURL=index-CrUnp2lA.mjs.map
