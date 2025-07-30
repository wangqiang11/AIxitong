import { ag as useRoute, ah as __nuxt_component_0 } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-l5zPv3vf.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { _ as __nuxt_component_5 } from './index-wsmFJ5of.mjs';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { defineComponent, withAsyncContext, computed, withCtx, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { F as getRobotRecord } from './robot-BsB_E1H2.mjs';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './position-DVxxNIGX.mjs';
import './index-VIyJ-gCg.mjs';
import './index-c3Av-r7B.mjs';
import './index-D7S5lb8a.mjs';
import './index-DRyhljQ3.mjs';
import 'markdown-it';
import 'highlight.js';
import '@vscode/markdown-it-katex';
import './file-BZUJNFp8.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-DVLwoLV9.mjs';
import 'video.js';
import './el-link-CHT85aXX.mjs';
import './useAudioPlay-C6V9947w.mjs';
import './useCopy-CfS-iChu.mjs';
import './knowledge-DiYwGYtC.mjs';
import './chat-jd47avQj.mjs';
import './download-N0luyf1S.mjs';
import 'qrcode.vue';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import './index-BS4hxwV8.mjs';
import './useRecorder-K_rLcXyS.mjs';
import 'recorder-core/recorder.mp3.min.js';
import './robot-yG1zBFXI.mjs';
import './index-BKj4TrcW.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "chat",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: robotRecord } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => getRobotRecord(), {
      default() {
        return [];
      },
      lazy: true
    }, "$X7Lic9ZOFl")), __temp = await __temp, __restore(), __temp);
    const currentId = computed(() => route.query.id);
    const currentRobot = computed(() => {
      return robotRecord.value.find(
        (item) => item.id === Number(currentId.value)
      ) || {};
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = _sfc_main$1;
      const _component_ElScrollbar = ElScrollbar;
      const _component_el_image = ElImage;
      const _component_TheChat = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full flex"${_scopeId}><div class="p-4 h-full"${_scopeId}><div class="w-[300px] h-full flex flex-col bg-body rounded-lg"${_scopeId}><div class="p-[15px]"${_scopeId}><div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "flex bg-body p-[5px] text-bold rounded-[50%] text-primary shadow-light",
              to: "/robot_square",
              replace: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "el-icon-Back",
                    size: 18
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "el-icon-Back",
                      size: 18
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="text-xl flex-1 min-w-0 ml-[10px]"${_scopeId}> \u667A\u80FD\u4F53\u5E7F\u573A </div></div></div><div class="flex-1 min-h-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElScrollbar, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="px-[15px]"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(robotRecord), (item) => {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      key: item.id,
                      to: {
                        path: "",
                        query: {
                          id: item.id
                        }
                      },
                      class: ["flex mb-[15px] rounded-[10px] px-[15px] py-[10px] items-center border border-br-light bg-body", {
                        "text-white !border-primary !bg-primary": unref(currentId) == item.id
                      }],
                      replace: true
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_el_image, {
                            class: "w-[50px] h-[50px] rounded-[50%]",
                            src: item.image,
                            alt: ""
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="flex-1 min-w-0 ml-[15px]"${_scopeId3}><div class="line-clamp-1 text-xl font-medium"${_scopeId3}>${ssrInterpolate(item.name)}</div><div class="${ssrRenderClass([{
                            "!text-white": unref(currentId) == item.id
                          }, "line-clamp-1 mt-[4px] text-tx-secondary"])}"${_scopeId3}>${ssrInterpolate(item.intro)}</div></div>`);
                        } else {
                          return [
                            createVNode(_component_el_image, {
                              class: "w-[50px] h-[50px] rounded-[50%]",
                              src: item.image,
                              alt: ""
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "flex-1 min-w-0 ml-[15px]" }, [
                              createVNode("div", { class: "line-clamp-1 text-xl font-medium" }, toDisplayString(item.name), 1),
                              createVNode("div", {
                                class: ["line-clamp-1 mt-[4px] text-tx-secondary", {
                                  "!text-white": unref(currentId) == item.id
                                }]
                              }, toDisplayString(item.intro), 3)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "px-[15px]" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(robotRecord), (item) => {
                        return openBlock(), createBlock(_component_NuxtLink, {
                          key: item.id,
                          to: {
                            path: "",
                            query: {
                              id: item.id
                            }
                          },
                          class: ["flex mb-[15px] rounded-[10px] px-[15px] py-[10px] items-center border border-br-light bg-body", {
                            "text-white !border-primary !bg-primary": unref(currentId) == item.id
                          }],
                          replace: true
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_image, {
                              class: "w-[50px] h-[50px] rounded-[50%]",
                              src: item.image,
                              alt: ""
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "flex-1 min-w-0 ml-[15px]" }, [
                              createVNode("div", { class: "line-clamp-1 text-xl font-medium" }, toDisplayString(item.name), 1),
                              createVNode("div", {
                                class: ["line-clamp-1 mt-[4px] text-tx-secondary", {
                                  "!text-white": unref(currentId) == item.id
                                }]
                              }, toDisplayString(item.intro), 3)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to", "class"]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="flex-1 min-w-0 pr-4 py-4"${_scopeId}><div class="bg-body rounded-[10px] h-full"${_scopeId}>`);
            if (unref(currentRobot).id) {
              _push2(ssrRenderComponent(_component_TheChat, {
                "robot-id": unref(currentRobot).robot_id,
                "square-id": unref(currentRobot).id
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "h-full flex" }, [
                createVNode("div", { class: "p-4 h-full" }, [
                  createVNode("div", { class: "w-[300px] h-full flex flex-col bg-body rounded-lg" }, [
                    createVNode("div", { class: "p-[15px]" }, [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_component_NuxtLink, {
                          class: "flex bg-body p-[5px] text-bold rounded-[50%] text-primary shadow-light",
                          to: "/robot_square",
                          replace: true
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "el-icon-Back",
                              size: 18
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "text-xl flex-1 min-w-0 ml-[10px]" }, " \u667A\u80FD\u4F53\u5E7F\u573A ")
                      ])
                    ]),
                    createVNode("div", { class: "flex-1 min-h-0" }, [
                      createVNode(_component_ElScrollbar, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "px-[15px]" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(robotRecord), (item) => {
                              return openBlock(), createBlock(_component_NuxtLink, {
                                key: item.id,
                                to: {
                                  path: "",
                                  query: {
                                    id: item.id
                                  }
                                },
                                class: ["flex mb-[15px] rounded-[10px] px-[15px] py-[10px] items-center border border-br-light bg-body", {
                                  "text-white !border-primary !bg-primary": unref(currentId) == item.id
                                }],
                                replace: true
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_image, {
                                    class: "w-[50px] h-[50px] rounded-[50%]",
                                    src: item.image,
                                    alt: ""
                                  }, null, 8, ["src"]),
                                  createVNode("div", { class: "flex-1 min-w-0 ml-[15px]" }, [
                                    createVNode("div", { class: "line-clamp-1 text-xl font-medium" }, toDisplayString(item.name), 1),
                                    createVNode("div", {
                                      class: ["line-clamp-1 mt-[4px] text-tx-secondary", {
                                        "!text-white": unref(currentId) == item.id
                                      }]
                                    }, toDisplayString(item.intro), 3)
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["to", "class"]);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex-1 min-w-0 pr-4 py-4" }, [
                  createVNode("div", { class: "bg-body rounded-[10px] h-full" }, [
                    unref(currentRobot).id ? (openBlock(), createBlock(_component_TheChat, {
                      key: 0,
                      "robot-id": unref(currentRobot).robot_id,
                      "square-id": unref(currentRobot).id
                    }, null, 8, ["robot-id", "square-id"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/robot_square/chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=chat-DwiBx6R1.mjs.map
