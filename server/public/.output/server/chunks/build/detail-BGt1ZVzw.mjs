import { ag as useRoute, a5 as useAppStore, ah as __nuxt_component_0, d as ElButton } from './server.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { E as ElInputNumber } from './el-input-number-DH6NTUUv.mjs';
import { useSSRContext, defineComponent, ref, shallowRef, computed, watch, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, isRef, createTextVNode, createCommentVNode } from 'vue';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { d as downloadPPT, g as getPPTDetail } from './ai_ppt-C1HXY0_t.mjs';
import { useAiPPTStore } from './aiPPT-BfjAVP_f.mjs';
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
import './position-DVxxNIGX.mjs';
import './index-iSFXrlfY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "detail",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const appStore = useAppStore();
    const aiPPTStore = useAiPPTStore();
    const pptInfo = ref({
      preview: []
    });
    const scrollBarRef = shallowRef();
    const itemsRef = shallowRef([]);
    const currentIndex = ref(0);
    const jumpIndex = computed({
      get() {
        return currentIndex.value + 1;
      },
      set(value) {
        currentIndex.value = value - 1;
      }
    });
    watch(currentIndex, (index) => {
      if (!itemsRef.value.length) return;
      const item = itemsRef.value[index];
      const itemRect = item.getBoundingClientRect();
      const scrollRect = scrollBarRef.value.wrapRef.getBoundingClientRect();
      if (itemRect.top < scrollRect.top) {
        scrollBarRef.value.setScrollTop(item.offsetTop - 4);
      }
      if (itemRect.bottom > scrollRect.bottom) {
        scrollBarRef.value.setScrollTop(
          item.offsetTop - scrollRect.height + itemRect.height + 4
        );
      }
    });
    const { lockFn: downloadPPTSubmit } = useLockFn(async () => {
      const { file_url } = await downloadPPT({ id: route.query.id });
      const a = (void 0).createElement("a");
      a.href = file_url;
      a.download = `${pptInfo.value.title}.pptx`;
      a.click();
    });
    const jump = (num) => {
      jumpIndex.value += num;
    };
    const getPPTInfo = async () => {
      const [first] = await getPPTDetail({
        id: route.query.id
      });
      if (first && first.id) {
        pptInfo.value = first;
      }
    };
    getPPTInfo();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Icon = _sfc_main$1;
      const _component_ElScrollbar = ElScrollbar;
      const _component_ElImage = ElImage;
      const _component_ElButton = ElButton;
      const _component_el_input_number = ElInputNumber;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f34bbcf4>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full p-4 flex ppt-history" data-v-f34bbcf4${_scopeId}><div class="h-full flex flex-col rounded-[15px] bg-body w-[350px] mr-4" data-v-f34bbcf4${_scopeId}><div class="px-[15px] py-[15px]" data-v-f34bbcf4${_scopeId}><div class="flex items-center cursor-pointer" data-v-f34bbcf4${_scopeId}><div class="flex bg-body p-[5px] text-bold rounded-[50%] text-primary shadow-light" data-v-f34bbcf4${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "el-icon-Back",
              size: 18
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-xl flex-1 min-w-0 ml-[10px]" data-v-f34bbcf4${_scopeId}> PPT </div></div></div><div class="flex-1 min-h-0" data-v-f34bbcf4${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElScrollbar, {
              ref_key: "scrollBarRef",
              ref: scrollBarRef
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="px-4 pt-1" data-v-f34bbcf4${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(pptInfo).preview, (item, index) => {
                    _push3(`<div class="${ssrRenderClass([{
                      "!outline-primary": unref(currentIndex) === index
                    }, "mb-4 flex relative cursor-pointer outline-4 outline outline-[transparent] rounded-[10px] overflow-hidden"])}" data-v-f34bbcf4${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_ElImage, {
                      class: "w-full",
                      src: item
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="absolute right-[10px] top-[10px] w-[24px] h-[24px] text-center leading-[24px] text-[#333] bg-[rgba(255,255,255,0.6)] text-xs font-bold rounded-[50%]" data-v-f34bbcf4${_scopeId2}>${ssrInterpolate(index + 1)}</div></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "px-4 pt-1" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(pptInfo).preview, (item, index) => {
                        return openBlock(), createBlock("div", {
                          ref_for: true,
                          ref_key: "itemsRef",
                          ref: itemsRef,
                          key: index,
                          class: ["mb-4 flex relative cursor-pointer outline-4 outline outline-[transparent] rounded-[10px] overflow-hidden", {
                            "!outline-primary": unref(currentIndex) === index
                          }],
                          onClick: ($event) => currentIndex.value = index
                        }, [
                          createVNode(_component_ElImage, {
                            class: "w-full",
                            src: item
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "absolute right-[10px] top-[10px] w-[24px] h-[24px] text-center leading-[24px] text-[#333] bg-[rgba(255,255,255,0.6)] text-xs font-bold rounded-[50%]" }, toDisplayString(index + 1), 1)
                        ], 10, ["onClick"]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            if (unref(pptInfo).preview.length) {
              _push2(`<div class="flex-1 h-full flex flex-col rounded-[15px] ppt-preview bg-body" data-v-f34bbcf4${_scopeId}><div class="p-4 flex items-center" data-v-f34bbcf4${_scopeId}><span class="font-bold" data-v-f34bbcf4${_scopeId}>${ssrInterpolate(unref(pptInfo).title)}</span><div class="ml-auto flex items-center" data-v-f34bbcf4${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ElButton, {
                onClick: ($event) => jump(-1),
                link: "",
                disabled: unref(jumpIndex) === 1
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "el-icon-ArrowLeftBold",
                      size: 16
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "el-icon-ArrowLeftBold",
                        size: 16
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<span class="mx-2" data-v-f34bbcf4${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_input_number, {
                modelValue: unref(jumpIndex),
                "onUpdate:modelValue": ($event) => isRef(jumpIndex) ? jumpIndex.value = $event : null,
                controls: false,
                min: 1,
                max: unref(pptInfo).preview.length,
                class: "!w-[32px]"
              }, null, _parent2, _scopeId));
              _push2(`</span><span class="mx-2" data-v-f34bbcf4${_scopeId}> /</span><span class="mx-2" data-v-f34bbcf4${_scopeId}>${ssrInterpolate(unref(pptInfo).preview.length)}</span>`);
              _push2(ssrRenderComponent(_component_ElButton, {
                onClick: ($event) => jump(1),
                link: "",
                disabled: unref(jumpIndex) === unref(pptInfo).preview.length
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "el-icon-ArrowRightBold",
                      size: 16
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "el-icon-ArrowRightBold",
                        size: 16
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="flex-1 min-h-0" data-v-f34bbcf4${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ElScrollbar, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b;
                  if (_push3) {
                    _push3(`<div class="p-4 max-w-[1200px] mx-auto min-h-full flex justify-center items-center" data-v-f34bbcf4${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_ElImage, {
                      src: (_a = unref(pptInfo).preview) == null ? void 0 : _a[unref(currentIndex)]
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-4 max-w-[1200px] mx-auto min-h-full flex justify-center items-center" }, [
                        createVNode(_component_ElImage, {
                          src: (_b = unref(pptInfo).preview) == null ? void 0 : _b[unref(currentIndex)]
                        }, null, 8, ["src"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex items-center justify-center pb-4" data-v-f34bbcf4${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ElButton, {
                size: "large",
                type: "primary",
                onClick: unref(downloadPPTSubmit)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u5BFC\u51FA\u4E3APPTX ${ssrInterpolate(unref(pptInfo).pay_status ? "" : unref(aiPPTStore).config.isVipFree ? "(\u4F1A\u5458\u514D\u8D39)" : unref(aiPPTStore).config.price > 0 ? "-" + unref(aiPPTStore).config.price + unref(appStore).getTokenUnit : "")}`);
                  } else {
                    return [
                      createTextVNode(" \u5BFC\u51FA\u4E3APPTX " + toDisplayString(unref(pptInfo).pay_status ? "" : unref(aiPPTStore).config.isVipFree ? "(\u4F1A\u5458\u514D\u8D39)" : unref(aiPPTStore).config.price > 0 ? "-" + unref(aiPPTStore).config.price + unref(appStore).getTokenUnit : ""), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "h-full p-4 flex ppt-history" }, [
                createVNode("div", { class: "h-full flex flex-col rounded-[15px] bg-body w-[350px] mr-4" }, [
                  createVNode("div", { class: "px-[15px] py-[15px]" }, [
                    createVNode("div", { class: "flex items-center cursor-pointer" }, [
                      createVNode("div", {
                        class: "flex bg-body p-[5px] text-bold rounded-[50%] text-primary shadow-light",
                        onClick: ($event) => _ctx.$router.back()
                      }, [
                        createVNode(_component_Icon, {
                          name: "el-icon-Back",
                          size: 18
                        })
                      ], 8, ["onClick"]),
                      createVNode("div", { class: "text-xl flex-1 min-w-0 ml-[10px]" }, " PPT ")
                    ])
                  ]),
                  createVNode("div", { class: "flex-1 min-h-0" }, [
                    createVNode(_component_ElScrollbar, {
                      ref_key: "scrollBarRef",
                      ref: scrollBarRef
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "px-4 pt-1" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(pptInfo).preview, (item, index) => {
                            return openBlock(), createBlock("div", {
                              ref_for: true,
                              ref_key: "itemsRef",
                              ref: itemsRef,
                              key: index,
                              class: ["mb-4 flex relative cursor-pointer outline-4 outline outline-[transparent] rounded-[10px] overflow-hidden", {
                                "!outline-primary": unref(currentIndex) === index
                              }],
                              onClick: ($event) => currentIndex.value = index
                            }, [
                              createVNode(_component_ElImage, {
                                class: "w-full",
                                src: item
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "absolute right-[10px] top-[10px] w-[24px] h-[24px] text-center leading-[24px] text-[#333] bg-[rgba(255,255,255,0.6)] text-xs font-bold rounded-[50%]" }, toDisplayString(index + 1), 1)
                            ], 10, ["onClick"]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    }, 512)
                  ])
                ]),
                unref(pptInfo).preview.length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex-1 h-full flex flex-col rounded-[15px] ppt-preview bg-body"
                }, [
                  createVNode("div", { class: "p-4 flex items-center" }, [
                    createVNode("span", { class: "font-bold" }, toDisplayString(unref(pptInfo).title), 1),
                    createVNode("div", { class: "ml-auto flex items-center" }, [
                      createVNode(_component_ElButton, {
                        onClick: ($event) => jump(-1),
                        link: "",
                        disabled: unref(jumpIndex) === 1
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "el-icon-ArrowLeftBold",
                            size: 16
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick", "disabled"]),
                      createVNode("span", { class: "mx-2" }, [
                        createVNode(_component_el_input_number, {
                          modelValue: unref(jumpIndex),
                          "onUpdate:modelValue": ($event) => isRef(jumpIndex) ? jumpIndex.value = $event : null,
                          controls: false,
                          min: 1,
                          max: unref(pptInfo).preview.length,
                          class: "!w-[32px]"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "max"])
                      ]),
                      createVNode("span", { class: "mx-2" }, " /"),
                      createVNode("span", { class: "mx-2" }, toDisplayString(unref(pptInfo).preview.length), 1),
                      createVNode(_component_ElButton, {
                        onClick: ($event) => jump(1),
                        link: "",
                        disabled: unref(jumpIndex) === unref(pptInfo).preview.length
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "el-icon-ArrowRightBold",
                            size: 16
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick", "disabled"])
                    ])
                  ]),
                  createVNode("div", { class: "flex-1 min-h-0" }, [
                    createVNode(_component_ElScrollbar, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode("div", { class: "p-4 max-w-[1200px] mx-auto min-h-full flex justify-center items-center" }, [
                            createVNode(_component_ElImage, {
                              src: (_a = unref(pptInfo).preview) == null ? void 0 : _a[unref(currentIndex)]
                            }, null, 8, ["src"])
                          ])
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "flex items-center justify-center pb-4" }, [
                    createVNode(_component_ElButton, {
                      size: "large",
                      type: "primary",
                      onClick: unref(downloadPPTSubmit)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u5BFC\u51FA\u4E3APPTX " + toDisplayString(unref(pptInfo).pay_status ? "" : unref(aiPPTStore).config.isVipFree ? "(\u4F1A\u5458\u514D\u8D39)" : unref(aiPPTStore).config.price > 0 ? "-" + unref(aiPPTStore).config.price + unref(appStore).getTokenUnit : ""), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai_ppt/detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f34bbcf4"]]);

export { detail as default };
//# sourceMappingURL=detail-BGt1ZVzw.mjs.map
