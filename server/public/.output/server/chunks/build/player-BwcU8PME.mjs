import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { E as ElTooltip } from './index-L-VTEUEA.mjs';
import { E as ElAvatar } from './index-BV1cZAUE.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { u as useMusicPlay, _ as __nuxt_component_3 } from './player-DDfYp134.mjs';
import { ag as useRoute, a as useRouter, z as useUserStore, A as feedback, B as vLoading } from './server.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, mergeProps, unref, withCtx, createVNode, withModifiers, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { b as download } from './download-N0luyf1S.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { c as getMusicRecommendList } from './music-A1_NVo6h.mjs';
import { g as getMusicDetail, m as musicSquareCollect } from './square-BZJdPCMw.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import 'lodash-unified';
import './position-DVxxNIGX.mjs';
import '@vue/shared';
import '@popperjs/core';
import './el-slider-LwCMMHAn.mjs';
import './el-input-number-DH6NTUUv.mjs';
import './index-iSFXrlfY.mjs';
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
  __name: "player",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const userStore = useUserStore();
    const selectDetailId = ref(0);
    const { playing, currentId, setCurrentId, togglePlay, setMusic } = useMusicPlay();
    const {
      data: musicDetail,
      pending,
      refresh: refreshMusicDetail
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => getMusicDetail({
        id: selectDetailId.value || route.query.id
      }),
      {
        default() {
          return {
            audio_url: "",
            create_time: "",
            duration: "",
            image_large_url: "",
            image_url: "",
            is_collect: 0,
            id: -1,
            lyric: "",
            prompt: "",
            style_desc: "",
            tags: "",
            title: "",
            video_url: ""
          };
        },
        transform: (data) => {
          return data;
        },
        lazy: true,
        immediate: false
      },
      "$xU1RrCMzZJ"
    )), __temp = await __temp, __restore(), __temp);
    const { data: recommendList, refresh: refreshRecommendList } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => getMusicRecommendList(), {
      default() {
        return [];
      },
      lazy: true,
      immediate: false
    }, "$MZz6IZCXHw")), __temp = await __temp, __restore(), __temp);
    const selectRecommendMusic = async (item) => {
      if (item.square_id === currentId.value) return;
      selectDetailId.value = item.square_id;
      await refreshMusicDetail();
      await refreshRecommendList();
      const filter = recommendList.value.filter(
        (item2) => item2.square_id === selectDetailId.value
      );
      setMusic(recommendList.value);
      selectMusic(filter[0]);
      console.log(musicDetail.value);
      router.replace({
        path: "",
        query: {
          id: musicDetail.value.id
        }
      });
    };
    const selectMusic = (item) => {
      if (item.square_id == currentId.value) {
        togglePlay();
        console.log("\u64AD\u653E");
        return;
      }
      setCurrentId(item.id);
    };
    const handlePraise = async (val) => {
      if (!userStore.isLogin) {
        userStore.toggleShowLogin(true);
        return;
      }
      await musicSquareCollect({
        records_id: (val == null ? void 0 : val.square_id) || route.query.id,
        status: val.is_collect ? 0 : 1
      });
      val.is_collect = val.is_collect ? 0 : 1;
    };
    const downloadMusic = async (url, name) => {
      if (!userStore.isLogin) {
        userStore.toggleShowLogin(true);
        return;
      }
      try {
        const res = await $request.get(
          { url, responseType: "blob", baseURL: "" },
          { isReturnDefaultResponse: true, apiPrefix: "" }
        );
        console.log("\u4E0B\u8F7D\u97F3\u4E50", res);
        const blob = new Blob([res._data], {
          type: res.headers.get("Content-Type")
        });
        const link = (void 0).URL.createObjectURL(blob);
        download(link, name);
      } catch (error) {
        feedback.msgError("\u6587\u4EF6\u4E0B\u8F7D\u5931\u8D25");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_Icon = _sfc_main$1;
      const _component_el_image = ElImage;
      const _component_el_tooltip = ElTooltip;
      const _component_ElAvatar = ElAvatar;
      const _component_el_scrollbar = ElScrollbar;
      const _component_MusicPlayer = __nuxt_component_3;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "music-player-container h-full p-[16px]" }, _attrs))} data-v-2b59b763><div class="music-player flex flex-col min-h-0 h-full bg-body rounded-xl" data-v-2b59b763><div class="flex flex-1 min-h-0 h-full" data-v-2b59b763><div class="flex flex-col flex-1 h-full min-h-0 p-[16px]" data-v-2b59b763><div class="flex items-center cursor-pointer" data-v-2b59b763><div class="flex w-[30px] bg-body p-[5px] text-bold rounded-[50%] text-primary shadow-light" data-v-2b59b763>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "el-icon-Back",
        size: 18
      }, null, _parent));
      _push(`</div><div class="text-xl flex-1 min-w-0 ml-[10px]" data-v-2b59b763> \u97F3\u4E50\u5E7F\u573A </div></div><div${ssrRenderAttrs(mergeProps({
        class: "flex flex-col flex-1 h-full min-h-0",
        "element-loading-text": "\u52A0\u8F7D\u4E2D...",
        "element-loading-background": "rgba(0, 0, 0, 0)"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(pending))))} data-v-2b59b763><div class="flex items-center" style="${ssrRenderStyle({ "margin-top": "30px" })}" data-v-2b59b763><div class="w-[200px] h-[200px] flex items-center justify-center flex-none relative" data-v-2b59b763>`);
      if ((_a = unref(musicDetail)) == null ? void 0 : _a.image_url) {
        _push(ssrRenderComponent(_component_el_image, {
          src: (_b = unref(musicDetail)) == null ? void 0 : _b.image_url,
          class: "w-full h-full rounded-[15px]"
        }, null, _parent));
      } else {
        _push(`<div class="text-tx-secondary" data-v-2b59b763>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "local-icon-music1",
          size: 45
        }, null, _parent));
        _push(`</div>`);
      }
      if (unref(currentId) == unref(musicDetail).id && unref(playing)) {
        _push(`<div class="absolute inset-0 flex items-center justify-center text-white" data-v-2b59b763>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "local-icon-pause1",
          size: 20
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(currentId) == unref(musicDetail).id && !unref(playing)) {
        _push(`<div class="absolute inset-0 flex items-center justify-center text-white" data-v-2b59b763>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "local-icon-play",
          size: 20
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="ml-[15px] py-[8px]" data-v-2b59b763><div class="text-xl font-medium" data-v-2b59b763>${ssrInterpolate(unref(musicDetail).title)}</div><div class="mt-[20px] text-base text-tx-placeholder" data-v-2b59b763>${ssrInterpolate(unref(musicDetail).style_desc)}</div><div class="flex items-center" style="${ssrRenderStyle({ "margin-top": "30px" })}" data-v-2b59b763><div class="flex items-center w-[150px]" data-v-2b59b763>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "cursor-pointer p-1",
        name: "el-icon-Timer",
        size: "30",
        color: "#556477"
      }, null, _parent));
      _push(`<span class="ml-1 text-tx-primary" data-v-2b59b763>${ssrInterpolate(unref(musicDetail).duration)}</span></div>`);
      _push(ssrRenderComponent(_component_el_tooltip, {
        effect: "dark",
        content: "\u6536\u85CF / \u53D6\u6D88\u6536\u85CF",
        placement: "bottom"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="image-praise relative dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content" data-v-2b59b763${_scopeId}><div class="${ssrRenderClass([
              unref(musicDetail).is_collect ? "praise-entry" : "praise-leave",
              "praise-animate"
            ])}" data-v-2b59b763${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "image-praise relative dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                onClick: withModifiers(($event) => handlePraise(unref(musicDetail)), ["stop"])
              }, [
                createVNode("div", {
                  class: [
                    "praise-animate",
                    unref(musicDetail).is_collect ? "praise-entry" : "praise-leave"
                  ]
                }, null, 2)
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_tooltip, {
        effect: "dark",
        content: "\u4E0B\u8F7D\u97F3\u4E50",
        placement: "bottom"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-2b59b763${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
              name: "el-icon-Download",
              size: "24",
              color: "#556477"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_Icon, {
                  class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                  name: "el-icon-Download",
                  size: "24",
                  color: "#556477"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-[20px]" data-v-2b59b763>`);
      if ((_c = unref(musicDetail)) == null ? void 0 : _c.avatar) {
        _push(`<div class="flex items-center" data-v-2b59b763>`);
        _push(ssrRenderComponent(_component_ElAvatar, {
          size: 40,
          src: (_d = unref(musicDetail)) == null ? void 0 : _d.avatar
        }, null, _parent));
        _push(`<p class="text-[#BBBBBB] ml-[6px] w-[200px] truncate" data-v-2b59b763>${ssrInterpolate(unref(musicDetail).nickname)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_el_scrollbar, { style: { "margin-top": "30px" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="whitespace-pre" data-v-2b59b763${_scopeId}>${ssrInterpolate(unref(musicDetail).lyric)}</div>`);
          } else {
            return [
              createVNode("div", { class: "whitespace-pre" }, toDisplayString(unref(musicDetail).lyric), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex flex-col h-full min-h-0 w-[600px] p-[16px]" data-v-2b59b763><div class="text-xl font-medium" data-v-2b59b763>\u70ED\u95E8\u63A8\u8350</div>`);
      _push(ssrRenderComponent(_component_el_scrollbar, { style: { "margin-top": "20px" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(recommendList), (item) => {
              _push2(`<div class="flex bg-page rounded-[15px] cursor-pointer hover:bg-[#EEF2FF] mb-[20px] p-[20px]"${ssrRenderAttr("id", `music-item-${item.id}`)} data-v-2b59b763${_scopeId}><div class="w-[100px] h-[100px] flex items-center justify-center flex-none relative" data-v-2b59b763${_scopeId}>`);
              if (item.image_url) {
                _push2(ssrRenderComponent(_component_el_image, {
                  src: item.image_url,
                  class: "w-full h-full rounded-[15px]"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<div class="text-tx-secondary" data-v-2b59b763${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "local-icon-music1",
                  size: 45
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              }
              if (unref(currentId) == item.id && unref(playing)) {
                _push2(`<div class="absolute inset-0 flex items-center justify-center text-white" data-v-2b59b763${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "local-icon-pause1",
                  size: 20
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(currentId) == item.id && !unref(playing)) {
                _push2(`<div class="absolute inset-0 flex items-center justify-center text-white" data-v-2b59b763${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "local-icon-play",
                  size: 20
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex-1 ml-[20px]" data-v-2b59b763${_scopeId}><div class="${ssrRenderClass([{
                "!text-primary": unref(currentId) === item.id
              }, "text-[16px] font-bold"])}" data-v-2b59b763${_scopeId}>${ssrInterpolate(item.title)}</div>`);
              if (item.tags) {
                _push2(`<div class="mt-[12px] text-tx-secondary" data-v-2b59b763${_scopeId}>${ssrInterpolate(item.tags)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex justify-between mt-[12px]" data-v-2b59b763${_scopeId}>`);
              if (item.nickname) {
                _push2(`<div class="flex items-center" data-v-2b59b763${_scopeId}>`);
                _push2(ssrRenderComponent(_component_ElAvatar, {
                  size: 28,
                  src: item == null ? void 0 : item.avatar
                }, null, _parent2, _scopeId));
                _push2(`<p class="text-[#BBBBBB] ml-[6px] w-[100px] truncate" data-v-2b59b763${_scopeId}>${ssrInterpolate(item.nickname)}</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="mt-[4px] text-tx-secondary" data-v-2b59b763${_scopeId}>${ssrInterpolate(item.duration)}</div><div class="flex items-center" data-v-2b59b763${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_tooltip, {
                effect: "dark",
                content: "\u6536\u85CF / \u53D6\u6D88\u6536\u85CF",
                placement: "bottom"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="image-praise relative dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content" data-v-2b59b763${_scopeId2}><div class="${ssrRenderClass([
                      item.is_collect ? "praise-entry" : "praise-leave",
                      "praise-animate"
                    ])}" data-v-2b59b763${_scopeId2}></div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "image-praise relative dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                        onClick: withModifiers(($event) => handlePraise(item), ["stop"])
                      }, [
                        createVNode("div", {
                          class: [
                            "praise-animate",
                            item.is_collect ? "praise-entry" : "praise-leave"
                          ]
                        }, null, 2)
                      ], 8, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_tooltip, {
                effect: "dark",
                content: "\u4E0B\u8F7D\u97F3\u4E50",
                placement: "bottom"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div data-v-2b59b763${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                      name: "el-icon-Download",
                      size: "24",
                      color: "#556477"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        onClick: withModifiers(($event) => downloadMusic(
                          item.audio_url,
                          item.title
                        ), ["stop"])
                      }, [
                        createVNode(_component_Icon, {
                          class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                          name: "el-icon-Download",
                          size: "24",
                          color: "#556477"
                        })
                      ], 8, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div></div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(recommendList), (item) => {
                return openBlock(), createBlock("div", {
                  class: "flex bg-page rounded-[15px] cursor-pointer hover:bg-[#EEF2FF] mb-[20px] p-[20px]",
                  id: `music-item-${item.id}`,
                  onClick: ($event) => selectRecommendMusic(item)
                }, [
                  createVNode("div", { class: "w-[100px] h-[100px] flex items-center justify-center flex-none relative" }, [
                    item.image_url ? (openBlock(), createBlock(_component_el_image, {
                      key: 0,
                      src: item.image_url,
                      class: "w-full h-full rounded-[15px]"
                    }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-tx-secondary"
                    }, [
                      createVNode(_component_Icon, {
                        name: "local-icon-music1",
                        size: 45
                      })
                    ])),
                    unref(currentId) == item.id && unref(playing) ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "absolute inset-0 flex items-center justify-center text-white"
                    }, [
                      createVNode(_component_Icon, {
                        name: "local-icon-pause1",
                        size: 20
                      })
                    ])) : createCommentVNode("", true),
                    unref(currentId) == item.id && !unref(playing) ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: "absolute inset-0 flex items-center justify-center text-white"
                    }, [
                      createVNode(_component_Icon, {
                        name: "local-icon-play",
                        size: 20
                      })
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "flex-1 ml-[20px]" }, [
                    createVNode("div", {
                      class: ["text-[16px] font-bold", {
                        "!text-primary": unref(currentId) === item.id
                      }]
                    }, toDisplayString(item.title), 3),
                    item.tags ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-[12px] text-tx-secondary"
                    }, toDisplayString(item.tags), 1)) : createCommentVNode("", true),
                    createVNode("div", { class: "flex justify-between mt-[12px]" }, [
                      item.nickname ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center"
                      }, [
                        createVNode(_component_ElAvatar, {
                          size: 28,
                          src: item == null ? void 0 : item.avatar
                        }, null, 8, ["src"]),
                        createVNode("p", { class: "text-[#BBBBBB] ml-[6px] w-[100px] truncate" }, toDisplayString(item.nickname), 1)
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "mt-[4px] text-tx-secondary" }, toDisplayString(item.duration), 1),
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_component_el_tooltip, {
                          effect: "dark",
                          content: "\u6536\u85CF / \u53D6\u6D88\u6536\u85CF",
                          placement: "bottom"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "image-praise relative dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                              onClick: withModifiers(($event) => handlePraise(item), ["stop"])
                            }, [
                              createVNode("div", {
                                class: [
                                  "praise-animate",
                                  item.is_collect ? "praise-entry" : "praise-leave"
                                ]
                              }, null, 2)
                            ], 8, ["onClick"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_el_tooltip, {
                          effect: "dark",
                          content: "\u4E0B\u8F7D\u97F3\u4E50",
                          placement: "bottom"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              onClick: withModifiers(($event) => downloadMusic(
                                item.audio_url,
                                item.title
                              ), ["stop"])
                            }, [
                              createVNode(_component_Icon, {
                                class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                                name: "el-icon-Download",
                                size: "24",
                                color: "#556477"
                              })
                            ], 8, ["onClick"])
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ])
                  ])
                ], 8, ["id", "onClick"]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="px-[16px] pb-[16px]" data-v-2b59b763>`);
      _push(ssrRenderComponent(_component_MusicPlayer, {
        ref: "musicPlayerRef",
        class: "bg-page rounded-lg"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/music/player.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const player = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2b59b763"]]);

export { player as default };
//# sourceMappingURL=player-BwcU8PME.mjs.map
