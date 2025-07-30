import { P as Popup } from './index-BKj4TrcW.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElDivider } from './index-pT4w-4Lo.mjs';
import { z as useUserStore, a5 as useAppStore, A as feedback, d as ElButton } from './server.mjs';
import { useSSRContext, defineComponent, shallowRef, ref, computed, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString } from 'vue';
import { u as useCopy } from './useCopy-CfS-iChu.mjs';
import { d as downloadHtml2Image } from './download-N0luyf1S.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import QrcodeVue from 'qrcode.vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import '@vueuse/core';
import 'lodash-unified';
import './refs-CJvnaIJj.mjs';
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
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "posterPop",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const popRef = shallowRef();
    const posterRef = shallowRef();
    const userStore = useUserStore();
    const { getWebsiteConfig, config } = useAppStore();
    const imgContent = ref({});
    const open = (option) => {
      popRef.value.open();
      imgContent.value = option;
    };
    const inviteLink = computed(
      () => `${config.current_domain}/mobile/packages/pages/robot_square/robot_square?type=2?user_sn=${userStore.userInfo.sn}`
    );
    const { copy } = useCopy();
    const pcLink = computed(
      () => `${config.current_domain}/robot_square?type=2&user_sn=${userStore.userInfo.sn}`
    );
    const downloadLoading = ref(false);
    const download = async () => {
      try {
        downloadLoading.value = true;
        await downloadHtml2Image(posterRef.value);
      } catch (error) {
        feedback.msgError("\u4E0B\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
      } finally {
        downloadLoading.value = false;
      }
    };
    __expose({
      open
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_popup = Popup;
      const _component_ElScrollbar = ElScrollbar;
      const _component_el_divider = ElDivider;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "share-pop" }, _attrs))} data-v-90c13495>`);
      _push(ssrRenderComponent(_component_popup, {
        ref_key: "popRef",
        ref: popRef,
        width: "auto",
        title: "\u751F\u6210\u6D77\u62A5",
        "append-to-body": false,
        "click-modal-close": true,
        confirmButtonText: "",
        cancelButtonText: ""
      }, {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex px-[10px]" data-v-90c13495${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              class: "flex-1",
              text: "",
              bg: "",
              plain: "",
              size: "large",
              onClick: ($event) => unref(copy)(unref(pcLink))
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u590D\u5236\u94FE\u63A5 `);
                } else {
                  return [
                    createTextVNode(" \u590D\u5236\u94FE\u63A5 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_button, {
              class: "flex-1",
              type: "primary",
              size: "large",
              onClick: download
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4E0B\u8F7D\u6D77\u62A5 `);
                } else {
                  return [
                    createTextVNode(" \u4E0B\u8F7D\u6D77\u62A5 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex px-[10px]" }, [
                createVNode(_component_el_button, {
                  class: "flex-1",
                  text: "",
                  bg: "",
                  plain: "",
                  size: "large",
                  onClick: ($event) => unref(copy)(unref(pcLink))
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u590D\u5236\u94FE\u63A5 ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_el_button, {
                  class: "flex-1",
                  type: "primary",
                  size: "large",
                  onClick: download
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u4E0B\u8F7D\u6D77\u62A5 ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col" data-v-90c13495${_scopeId}><div class="flex-1 min-h-0" data-v-90c13495${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElScrollbar, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<div class="w-[430px] bg-[#F8F8FB] rounded-[10px]" data-v-90c13495${_scopeId2}><div class="flex justify-center bg-[#F2F3F6] rounded-t-[10px] overflow-hidden" data-v-90c13495${_scopeId2}><img class="w-full object-contain"${ssrRenderAttr("src", unref(imgContent).thumbnail || unref(imgContent).image)} alt="" data-v-90c13495${_scopeId2}></div><div class="px-[16px] mt-[12px]" data-v-90c13495${_scopeId2}><div class="title text-[16px] font-medium text-[#101010] line-clamp-2" data-v-90c13495${_scopeId2}>${ssrInterpolate(((_a = unref(imgContent)) == null ? void 0 : _a.prompts_cn) || unref(imgContent).original_prompts.prompt)}</div></div><div class="px-[15px]" data-v-90c13495${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_divider, { "border-style": "solid" }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex items-center px-[16px] pt-[0px] pb-[30px]" data-v-90c13495${_scopeId2}><div data-v-90c13495${_scopeId2}><div class="flex items-center" data-v-90c13495${_scopeId2}><img class="w-[45px] h-[45px] rounded-full"${ssrRenderAttr("src", unref(userStore).userInfo.avatar)} data-v-90c13495${_scopeId2}><div class="ml-2" data-v-90c13495${_scopeId2}>${ssrInterpolate(unref(userStore).userInfo.nickname)}</div></div><div class="mt-[16px] font-medium text-[#101010] text-xl" data-v-90c13495${_scopeId2}>${ssrInterpolate(unref(getWebsiteConfig).pc_title)}</div><div class="mt-[10px] text-primary" data-v-90c13495${_scopeId2}>${ssrInterpolate(unref(config).current_domain)}</div></div><div class="ml-auto h-[80px] p-[5px] bg-white rounded-[5px]" data-v-90c13495${_scopeId2}>`);
                  _push3(ssrRenderComponent(QrcodeVue, {
                    value: unref(inviteLink),
                    size: 80,
                    margin: 1
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      ref_key: "posterRef",
                      ref: posterRef,
                      class: "w-[430px] bg-[#F8F8FB] rounded-[10px]"
                    }, [
                      createVNode("div", { class: "flex justify-center bg-[#F2F3F6] rounded-t-[10px] overflow-hidden" }, [
                        createVNode("img", {
                          class: "w-full object-contain",
                          src: unref(imgContent).thumbnail || unref(imgContent).image,
                          alt: ""
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "px-[16px] mt-[12px]" }, [
                        createVNode("div", { class: "title text-[16px] font-medium text-[#101010] line-clamp-2" }, toDisplayString(((_b = unref(imgContent)) == null ? void 0 : _b.prompts_cn) || unref(imgContent).original_prompts.prompt), 1)
                      ]),
                      createVNode("div", { class: "px-[15px]" }, [
                        createVNode(_component_el_divider, { "border-style": "solid" })
                      ]),
                      createVNode("div", { class: "flex items-center px-[16px] pt-[0px] pb-[30px]" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("img", {
                              class: "w-[45px] h-[45px] rounded-full",
                              src: unref(userStore).userInfo.avatar
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "ml-2" }, toDisplayString(unref(userStore).userInfo.nickname), 1)
                          ]),
                          createVNode("div", { class: "mt-[16px] font-medium text-[#101010] text-xl" }, toDisplayString(unref(getWebsiteConfig).pc_title), 1),
                          createVNode("div", { class: "mt-[10px] text-primary" }, toDisplayString(unref(config).current_domain), 1)
                        ]),
                        createVNode("div", { class: "ml-auto h-[80px] p-[5px] bg-white rounded-[5px]" }, [
                          createVNode(QrcodeVue, {
                            value: unref(inviteLink),
                            size: 80,
                            margin: 1
                          }, null, 8, ["value"])
                        ])
                      ])
                    ], 512)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode("div", { class: "flex-1 min-h-0" }, [
                  createVNode(_component_ElScrollbar, null, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode("div", {
                          ref_key: "posterRef",
                          ref: posterRef,
                          class: "w-[430px] bg-[#F8F8FB] rounded-[10px]"
                        }, [
                          createVNode("div", { class: "flex justify-center bg-[#F2F3F6] rounded-t-[10px] overflow-hidden" }, [
                            createVNode("img", {
                              class: "w-full object-contain",
                              src: unref(imgContent).thumbnail || unref(imgContent).image,
                              alt: ""
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "px-[16px] mt-[12px]" }, [
                            createVNode("div", { class: "title text-[16px] font-medium text-[#101010] line-clamp-2" }, toDisplayString(((_a = unref(imgContent)) == null ? void 0 : _a.prompts_cn) || unref(imgContent).original_prompts.prompt), 1)
                          ]),
                          createVNode("div", { class: "px-[15px]" }, [
                            createVNode(_component_el_divider, { "border-style": "solid" })
                          ]),
                          createVNode("div", { class: "flex items-center px-[16px] pt-[0px] pb-[30px]" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode("img", {
                                  class: "w-[45px] h-[45px] rounded-full",
                                  src: unref(userStore).userInfo.avatar
                                }, null, 8, ["src"]),
                                createVNode("div", { class: "ml-2" }, toDisplayString(unref(userStore).userInfo.nickname), 1)
                              ]),
                              createVNode("div", { class: "mt-[16px] font-medium text-[#101010] text-xl" }, toDisplayString(unref(getWebsiteConfig).pc_title), 1),
                              createVNode("div", { class: "mt-[10px] text-primary" }, toDisplayString(unref(config).current_domain), 1)
                            ]),
                            createVNode("div", { class: "ml-auto h-[80px] p-[5px] bg-white rounded-[5px]" }, [
                              createVNode(QrcodeVue, {
                                value: unref(inviteLink),
                                size: 80,
                                margin: 1
                              }, null, 8, ["value"])
                            ])
                          ])
                        ], 512)
                      ];
                    }),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/robot_square/_components/posterPop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PosterPop = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-90c13495"]]);

export { PosterPop as default };
//# sourceMappingURL=posterPop-CHjpMb7r.mjs.map
