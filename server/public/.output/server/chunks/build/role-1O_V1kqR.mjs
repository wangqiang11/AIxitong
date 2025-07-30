import { ag as useRoute, a as useRouter, a5 as useAppStore, z as useUserStore, A as feedback, ah as __nuxt_component_0, d as ElButton } from './server.mjs';
import { E as ElWatermark } from './index-VIyJ-gCg.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2$1, b as __nuxt_component_4 } from './index-c3Av-r7B.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { _ as __nuxt_component_7 } from './index-CXZnYiu9.mjs';
import { u as useCopy } from './useCopy-CfS-iChu.mjs';
import { useSSRContext, defineComponent, shallowRef, ref, withAsyncContext, reactive, nextTick, withCtx, unref, isRef, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, withModifiers, toDisplayString, createCommentVNode } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { useDark, useElementSize, watchThrottled, watchDebounced } from '@vueuse/core';
import { a as getChatRecord, b as chatSendText, e as cleanChatRecord } from './chat-jd47avQj.mjs';
import RoleSidebar from './role-sidebar-F3uWRt8C.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
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
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './index-D7S5lb8a.mjs';
import './index-DRyhljQ3.mjs';
import 'markdown-it';
import 'highlight.js';
import '@vscode/markdown-it-katex';
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './file-BZUJNFp8.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-DVLwoLV9.mjs';
import 'video.js';
import './el-link-CHT85aXX.mjs';
import './useAudioPlay-C6V9947w.mjs';
import './knowledge-DiYwGYtC.mjs';
import './download-N0luyf1S.mjs';
import 'qrcode.vue';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import './index-CUhOTuS-.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import './el-collapse-item-DSo9CmH5.mjs';
import './index-DadLUs6d.mjs';
import './index-BKj4TrcW.mjs';
import './nuxt-link-l5zPv3vf.mjs';

function getRoleList(params) {
  return $request.get({ url: "/chat.skill/lists", params });
}
function getRoleDetail(params) {
  return $request.get({ url: "/chat.skill/detail", params });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "role",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const isDark = useDark();
    const { copy } = useCopy();
    const route = useRoute();
    const router = useRouter();
    const appStore = useAppStore();
    const userStore = useUserStore();
    const chatActionRef = shallowRef();
    const scrollbarRef = shallowRef();
    const innerRef = ref();
    const model = ref("");
    const keyword = ref("");
    const currentId = ref(Number(route.query.id));
    const { data: sidebarList, refresh: getSidebarList } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => getRoleList({
        keyword: keyword.value
      }),
      {
        default() {
          return [];
        },
        lazy: true,
        immediate: false
      },
      "$sJo73HUy0r"
    )), __temp = await __temp, __restore(), __temp);
    const { data: roleDetail, refresh: getRoleInfo } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => getRoleDetail({
        id: currentId.value
      }),
      {
        lazy: true,
        immediate: false
      },
      "$FeZRwM0ASG"
    )), __temp = await __temp, __restore(), __temp);
    const { data: chatList, refresh: getChatList } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => getChatRecord({
        type: 3,
        other_id: currentId.value,
        page_type: 0
      }),
      {
        transform(data) {
          return data.lists || [];
        },
        default() {
          return [];
        },
        lazy: true
      },
      "$xhlnmU1xdY"
    )), __temp = await __temp, __restore(), __temp);
    const filePlugin = reactive({
      show: false,
      data: {
        url: "",
        name: "",
        type: "image"
      }
    });
    const changeModel = (value) => {
      filePlugin.show = !!value.support_image;
      if (!filePlugin.show) filePlugin.data.url = "";
    };
    const toggleRole = ({ id, image }) => {
      router.push({
        path: "/dialogue/role",
        query: {
          id
        }
      });
      currentId.value = Number(id);
      nextTick(async () => {
        await getChatList();
        roleDetail.value = {
          image
        };
        await getRoleInfo();
        scrollToBottom();
      });
    };
    const clearChatRecord = async () => {
      if (!userStore.isLogin) return userStore.toggleShowLogin();
      await feedback.confirm("\u786E\u5B9A\u6E05\u7A7A\u8BB0\u5F55\uFF1F");
      await cleanChatRecord({
        other_id: currentId.value,
        type: 3
      });
      getChatList();
    };
    const cacheLastId = ref(-1);
    const { lockFn: rewrite } = useLockFn(async () => {
      const last = chatList.value[chatList.value.length - 1];
      const userInput = chatList.value.find(({ id }) => id === last.id);
      if (userInput) {
        cacheLastId.value = last.id;
        chatList.value.splice(chatList.value.length - 2, 2);
        chat(userInput.content);
      }
    });
    const inputFocus = () => {
      var _a;
      if (!userStore.isLogin) {
        (_a = chatActionRef.value) == null ? void 0 : _a.blur();
        return userStore.toggleShowLogin();
      }
      scrollToBottom();
    };
    let sseInstance = null;
    const isReceiving = ref(false);
    const relatedIssuesArr = ref([]);
    const chat = async (value, type = "input") => {
      var _a;
      if (!userStore.isLogin) return userStore.toggleShowLogin();
      if (!value) return feedback.msgError("\u8BF7\u8F93\u5165\u95EE\u9898");
      if (isReceiving.value) return;
      const key = Date.now();
      isReceiving.value = true;
      chatList.value.push({
        type: 1,
        content: value,
        files_plugin: [{ ...filePlugin.data }]
      });
      chatList.value.push({
        type: 2,
        typing: true,
        content: [""],
        key
      });
      (_a = chatActionRef.value) == null ? void 0 : _a.setInputValue();
      const currentChat = chatList.value.find((item) => item.key === key);
      sseInstance = chatSendText({
        type: 3,
        other_id: currentId.value,
        question: value,
        model: model.value,
        file: filePlugin.data.url
      });
      sseInstance.addEventListener("chat", ({ data: dataJson }) => {
        const { data, index } = dataJson;
        if (!currentChat.content[index]) {
          currentChat.content[index] = "";
        }
        currentChat.content[index] += data;
      });
      sseInstance.addEventListener("question", ({ data: dataJson }) => {
        relatedIssuesArr.value = JSON.parse(dataJson.data);
      });
      sseInstance.addEventListener("finish", ({ data: dataJson }) => {
        const { data, index } = dataJson;
        if (data) {
          currentChat.content[index] += data;
        }
        filePlugin.data.url = "";
      });
      sseInstance.addEventListener("close", async () => {
        if (cacheLastId.value !== -1 && currentChat.content[0].length) {
          await cleanChatRecord({
            type: 1,
            id: cacheLastId.value
          });
          cacheLastId.value = -1;
        }
        await userStore.getUser();
        setTimeout(async () => {
          await getChatList();
          isReceiving.value = false;
          currentChat.typing = false;
          await nextTick();
          scrollToBottom();
        }, 600);
      });
      sseInstance.addEventListener("error", async (ev) => {
        var _a2, _b;
        type === "input" && ((_a2 = chatActionRef.value) == null ? void 0 : _a2.setInputValue(value));
        if (((_b = ev.data) == null ? void 0 : _b.code) === 1100) {
          if (!appStore.getIsShowRecharge) {
            feedback.msgError(
              `${appStore.getTokenUnit}\u6570\u91CF\u5DF2\u7528\u5B8C\u3002\u8BF7\u8054\u7CFB\u5BA2\u670D\u589E\u52A0`
            );
          } else {
            await feedback.confirm(
              `${appStore.getTokenUnit}\u6570\u91CF\u5DF2\u7528\u5B8C\uFF0C\u8BF7\u524D\u5F80\u5145\u503C`
            );
            router.push("/user/recharge");
          }
          return;
        }
        if (ev.errorType === "connectError") {
          feedback.msgError("\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
        }
        if (["connectError", "responseError"].includes(ev.errorType)) {
          chatList.value.splice(chatList.value.length - 2, 2);
        }
        currentChat.typing = false;
        setTimeout(() => {
          isReceiving.value = false;
        }, 200);
      });
    };
    const scrollToBottom = async () => {
      var _a, _b, _c;
      const scrollHeight = (_b = (_a = scrollbarRef.value) == null ? void 0 : _a.wrapRef) == null ? void 0 : _b.scrollHeight;
      (_c = scrollbarRef.value) == null ? void 0 : _c.setScrollTop(scrollHeight);
    };
    const { height } = useElementSize(innerRef);
    watchThrottled(
      height,
      () => {
        isReceiving.value && scrollToBottom();
      },
      { immediate: true }
    );
    watchDebounced(
      keyword,
      (value) => {
        getSidebarList();
      },
      {
        debounce: 500
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_el_watermark = ElWatermark;
      const _component_TheChatMsgItem = __nuxt_component_1;
      const _component_TheChatMsgContent = __nuxt_component_2$1;
      const _component_ElButton = ElButton;
      const _component_Icon = _sfc_main$1;
      const _component_TheChatAction = __nuxt_component_4;
      const _component_ModelPicker = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6c59986f>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full flex" data-v-6c59986f${_scopeId}><div class="p-[16px]" data-v-6c59986f${_scopeId}>`);
            _push2(ssrRenderComponent(RoleSidebar, {
              keyword: unref(keyword),
              "onUpdate:keyword": ($event) => isRef(keyword) ? keyword.value = $event : null,
              sidebarList: unref(sidebarList),
              currentId: unref(currentId),
              onOntoggle: toggleRole
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex-1 min-w-0 pr-4 py-4" data-v-6c59986f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_watermark, {
              class: "h-full",
              content: unref(appStore).getChatConfig.watermark,
              font: {
                color: unref(isDark) ? "rgba(256,256,256,0.08)" : "rgba(0,0,0,0.06)",
                fontSize: 12
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-full flex flex-col bg-body rounded-[12px]" data-v-6c59986f${_scopeId2}><div class="flex-1 min-h-0" data-v-6c59986f${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(ElScrollbar), {
                    ref_key: "scrollbarRef",
                    ref: scrollbarRef
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`<div data-v-6c59986f${_scopeId3}>`);
                        if (!unref(chatList).length && ((_a = unref(roleDetail)) == null ? void 0 : _a.tips)) {
                          _push4(`<div class="px-[40px] pt-[40px]" data-v-6c59986f${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_TheChatMsgItem, {
                            type: "left",
                            avatar: unref(roleDetail).image,
                            bg: "var(--el-bg-color-page)"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a2, _b2;
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_TheChatMsgContent, {
                                  content: (_a2 = unref(roleDetail)) == null ? void 0 : _a2.tips,
                                  type: "html",
                                  typing: false,
                                  "line-numbers": !unref(appStore).isMobile,
                                  "show-collect-btn": false,
                                  "show-copy-btn": false,
                                  "show-poster": false,
                                  "show-voice": false,
                                  class: "mb-[15px] last-of-type:mb-0",
                                  onClickCustomLink: ($event) => chat($event, "link")
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_TheChatMsgContent, {
                                    content: (_b2 = unref(roleDetail)) == null ? void 0 : _b2.tips,
                                    type: "html",
                                    typing: false,
                                    "line-numbers": !unref(appStore).isMobile,
                                    "show-collect-btn": false,
                                    "show-copy-btn": false,
                                    "show-poster": false,
                                    "show-voice": false,
                                    class: "mb-[15px] last-of-type:mb-0",
                                    onClickCustomLink: ($event) => chat($event, "link")
                                  }, null, 8, ["content", "line-numbers", "onClickCustomLink"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (unref(chatList).length) {
                          _push4(`<div class="px-8" data-v-6c59986f${_scopeId3}><!--[-->`);
                          ssrRenderList(unref(chatList), (item, index) => {
                            var _a2;
                            _push4(`<div class="mt-4 sm:pb-[20px]" data-v-6c59986f${_scopeId3}>`);
                            if (item.type == 1) {
                              _push4(ssrRenderComponent(_component_TheChatMsgItem, {
                                type: "right",
                                avatar: unref(userStore).userInfo.avatar,
                                color: "white"
                              }, {
                                actions: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div class="my-[5px]" data-v-6c59986f${_scopeId4}>`);
                                    _push5(ssrRenderComponent(_component_ElButton, {
                                      link: "",
                                      type: "info",
                                      onClick: ($event) => unref(copy)(
                                        item.content
                                      )
                                    }, {
                                      icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(_component_Icon, { name: "el-icon-CopyDocument" }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(_component_Icon, { name: "el-icon-CopyDocument" })
                                          ];
                                        }
                                      }),
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(` \u590D\u5236 `);
                                        } else {
                                          return [
                                            createTextVNode(" \u590D\u5236 ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    _push5(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "my-[5px]" }, [
                                        createVNode(_component_ElButton, {
                                          link: "",
                                          type: "info",
                                          onClick: ($event) => unref(copy)(
                                            item.content
                                          )
                                        }, {
                                          icon: withCtx(() => [
                                            createVNode(_component_Icon, { name: "el-icon-CopyDocument" })
                                          ]),
                                          default: withCtx(() => [
                                            createTextVNode(" \u590D\u5236 ")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])
                                    ];
                                  }
                                }),
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(_component_TheChatMsgContent, {
                                      content: item.content,
                                      "files-plugin": item.files_plugin
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(_component_TheChatMsgContent, {
                                        content: item.content,
                                        "files-plugin": item.files_plugin
                                      }, null, 8, ["content", "files-plugin"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            if (item.type == 2) {
                              _push4(ssrRenderComponent(_component_TheChatMsgItem, {
                                type: "left",
                                avatar: (_a2 = unref(roleDetail)) == null ? void 0 : _a2.image,
                                time: item.create_time,
                                bg: "var(--el-bg-color-page)",
                                modelName: item.model
                              }, {
                                outer_actions: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    if (index === unref(chatList).length - 1 && !unref(isReceiving)) {
                                      _push5(`<div class="flex flex-col" style="${ssrRenderStyle({ "margin-left": "52px" })}" data-v-6c59986f${_scopeId4}><!--[-->`);
                                      ssrRenderList(unref(relatedIssuesArr).length ? unref(relatedIssuesArr) : item.correlation, (text, textIndex) => {
                                        _push5(`<div class="inline-flex items-center rounded-[12px] bg-page cursor-pointer mt-[10px] hover:bg-primary-light-9" style="${ssrRenderStyle({ "padding": "8px 12px", "width": "fit-content" })}" data-v-6c59986f${_scopeId4}><span class="mr-2 text-tx-primary" data-v-6c59986f${_scopeId4}>${ssrInterpolate(text)}</span>`);
                                        _push5(ssrRenderComponent(_component_Icon, {
                                          name: "el-icon-Right",
                                          color: "#999",
                                          size: "20"
                                        }, null, _parent5, _scopeId4));
                                        _push5(`</div>`);
                                      });
                                      _push5(`<!--]--></div>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      index === unref(chatList).length - 1 && !unref(isReceiving) ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "flex flex-col",
                                        style: { "margin-left": "52px" }
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(relatedIssuesArr).length ? unref(relatedIssuesArr) : item.correlation, (text, textIndex) => {
                                          return openBlock(), createBlock("div", {
                                            key: textIndex,
                                            class: "inline-flex items-center rounded-[12px] bg-page cursor-pointer mt-[10px] hover:bg-primary-light-9",
                                            style: { "padding": "8px 12px", "width": "fit-content" },
                                            onClick: withModifiers(($event) => chat(text, "input"), ["stop"])
                                          }, [
                                            createVNode("span", { class: "mr-2 text-tx-primary" }, toDisplayString(text), 1),
                                            createVNode(_component_Icon, {
                                              name: "el-icon-Right",
                                              color: "#999",
                                              size: "20"
                                            })
                                          ], 8, ["onClick"]);
                                        }), 128))
                                      ])) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<!--[-->`);
                                    ssrRenderList(item.content, (text, i) => {
                                      _push5(ssrRenderComponent(_component_TheChatMsgContent, {
                                        content: text,
                                        type: "html",
                                        typing: item.typing,
                                        "line-numbers": !unref(appStore).isMobile,
                                        "show-rewrite": index === unref(chatList).length - 1,
                                        "show-copy": "",
                                        "show-voice": unref(appStore).getIsVoiceOpen,
                                        class: ["mb-[15px] last-of-type:mb-0", {
                                          "pt-[15px] border-t border-solid border-br-light": i > 0
                                        }],
                                        index: i,
                                        "record-id": item.id,
                                        "show-poster": "",
                                        "record-list": unref(chatList),
                                        onRewrite: unref(rewrite)
                                      }, null, _parent5, _scopeId4));
                                    });
                                    _push5(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.content, (text, i) => {
                                        return openBlock(), createBlock(_component_TheChatMsgContent, {
                                          key: i,
                                          content: text,
                                          type: "html",
                                          typing: item.typing,
                                          "line-numbers": !unref(appStore).isMobile,
                                          "show-rewrite": index === unref(chatList).length - 1,
                                          "show-copy": "",
                                          "show-voice": unref(appStore).getIsVoiceOpen,
                                          class: ["mb-[15px] last-of-type:mb-0", {
                                            "pt-[15px] border-t border-solid border-br-light": i > 0
                                          }],
                                          index: i,
                                          "record-id": item.id,
                                          "show-poster": "",
                                          "record-list": unref(chatList),
                                          onRewrite: unref(rewrite)
                                        }, null, 8, ["content", "typing", "line-numbers", "show-rewrite", "show-voice", "class", "index", "record-id", "record-list", "onRewrite"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div>`);
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            !unref(chatList).length && ((_b = unref(roleDetail)) == null ? void 0 : _b.tips) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "px-[40px] pt-[40px]"
                            }, [
                              createVNode(_component_TheChatMsgItem, {
                                type: "left",
                                avatar: unref(roleDetail).image,
                                bg: "var(--el-bg-color-page)"
                              }, {
                                default: withCtx(() => {
                                  var _a2;
                                  return [
                                    createVNode(_component_TheChatMsgContent, {
                                      content: (_a2 = unref(roleDetail)) == null ? void 0 : _a2.tips,
                                      type: "html",
                                      typing: false,
                                      "line-numbers": !unref(appStore).isMobile,
                                      "show-collect-btn": false,
                                      "show-copy-btn": false,
                                      "show-poster": false,
                                      "show-voice": false,
                                      class: "mb-[15px] last-of-type:mb-0",
                                      onClickCustomLink: ($event) => chat($event, "link")
                                    }, null, 8, ["content", "line-numbers", "onClickCustomLink"])
                                  ];
                                }),
                                _: 1
                              }, 8, ["avatar"])
                            ])) : createCommentVNode("", true),
                            unref(chatList).length ? (openBlock(), createBlock("div", {
                              key: 1,
                              ref_key: "innerRef",
                              ref: innerRef,
                              class: "px-8"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(chatList), (item, index) => {
                                var _a2;
                                return openBlock(), createBlock("div", {
                                  key: item.id + "" + index,
                                  class: "mt-4 sm:pb-[20px]"
                                }, [
                                  item.type == 1 ? (openBlock(), createBlock(_component_TheChatMsgItem, {
                                    key: 0,
                                    type: "right",
                                    avatar: unref(userStore).userInfo.avatar,
                                    color: "white"
                                  }, {
                                    actions: withCtx(() => [
                                      createVNode("div", { class: "my-[5px]" }, [
                                        createVNode(_component_ElButton, {
                                          link: "",
                                          type: "info",
                                          onClick: ($event) => unref(copy)(
                                            item.content
                                          )
                                        }, {
                                          icon: withCtx(() => [
                                            createVNode(_component_Icon, { name: "el-icon-CopyDocument" })
                                          ]),
                                          default: withCtx(() => [
                                            createTextVNode(" \u590D\u5236 ")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_TheChatMsgContent, {
                                        content: item.content,
                                        "files-plugin": item.files_plugin
                                      }, null, 8, ["content", "files-plugin"])
                                    ]),
                                    _: 2
                                  }, 1032, ["avatar"])) : createCommentVNode("", true),
                                  item.type == 2 ? (openBlock(), createBlock(_component_TheChatMsgItem, {
                                    key: 1,
                                    type: "left",
                                    avatar: (_a2 = unref(roleDetail)) == null ? void 0 : _a2.image,
                                    time: item.create_time,
                                    bg: "var(--el-bg-color-page)",
                                    modelName: item.model
                                  }, {
                                    outer_actions: withCtx(() => [
                                      index === unref(chatList).length - 1 && !unref(isReceiving) ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "flex flex-col",
                                        style: { "margin-left": "52px" }
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(relatedIssuesArr).length ? unref(relatedIssuesArr) : item.correlation, (text, textIndex) => {
                                          return openBlock(), createBlock("div", {
                                            key: textIndex,
                                            class: "inline-flex items-center rounded-[12px] bg-page cursor-pointer mt-[10px] hover:bg-primary-light-9",
                                            style: { "padding": "8px 12px", "width": "fit-content" },
                                            onClick: withModifiers(($event) => chat(text, "input"), ["stop"])
                                          }, [
                                            createVNode("span", { class: "mr-2 text-tx-primary" }, toDisplayString(text), 1),
                                            createVNode(_component_Icon, {
                                              name: "el-icon-Right",
                                              color: "#999",
                                              size: "20"
                                            })
                                          ], 8, ["onClick"]);
                                        }), 128))
                                      ])) : createCommentVNode("", true)
                                    ]),
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.content, (text, i) => {
                                        return openBlock(), createBlock(_component_TheChatMsgContent, {
                                          key: i,
                                          content: text,
                                          type: "html",
                                          typing: item.typing,
                                          "line-numbers": !unref(appStore).isMobile,
                                          "show-rewrite": index === unref(chatList).length - 1,
                                          "show-copy": "",
                                          "show-voice": unref(appStore).getIsVoiceOpen,
                                          class: ["mb-[15px] last-of-type:mb-0", {
                                            "pt-[15px] border-t border-solid border-br-light": i > 0
                                          }],
                                          index: i,
                                          "record-id": item.id,
                                          "show-poster": "",
                                          "record-list": unref(chatList),
                                          onRewrite: unref(rewrite)
                                        }, null, 8, ["content", "typing", "line-numbers", "show-rewrite", "show-voice", "class", "index", "record-id", "record-list", "onRewrite"]);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1032, ["avatar", "time", "modelName"])) : createCommentVNode("", true)
                                ]);
                              }), 128))
                            ], 512)) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="mb-[10px] px-[30px]" data-v-6c59986f${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_TheChatAction, {
                    ref_key: "chatActionRef",
                    ref: chatActionRef,
                    loading: unref(isReceiving),
                    "show-continue": unref(chatList).length,
                    "show-file-upload": unref(filePlugin).show,
                    "file-plugin": unref(filePlugin).data,
                    "onUpdate:filePlugin": ($event) => unref(filePlugin).data = $event,
                    onEnter: chat,
                    onClear: clearChatRecord,
                    onPause: ($event) => {
                      var _a;
                      return (_a = unref(sseInstance)) == null ? void 0 : _a.abort();
                    },
                    onFocus: inputFocus,
                    onContinue: ($event) => chat("\u7EE7\u7EED", "btn")
                  }, {
                    btn: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mr-[10px]" data-v-6c59986f${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ModelPicker, {
                          class: "min-w-[280px] select-class",
                          sub_id: unref(model),
                          "onUpdate:sub_id": ($event) => isRef(model) ? model.value = $event : null,
                          "onUpdate:modelConfig": changeModel
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "mr-[10px]" }, [
                            createVNode(_component_ModelPicker, {
                              class: "min-w-[280px] select-class",
                              sub_id: unref(model),
                              "onUpdate:sub_id": ($event) => isRef(model) ? model.value = $event : null,
                              "onUpdate:modelConfig": changeModel
                            }, null, 8, ["sub_id", "onUpdate:sub_id", "onUpdate:modelConfig"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-full flex flex-col bg-body rounded-[12px]" }, [
                      createVNode("div", { class: "flex-1 min-h-0" }, [
                        createVNode(unref(ElScrollbar), {
                          ref_key: "scrollbarRef",
                          ref: scrollbarRef
                        }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode("div", null, [
                                !unref(chatList).length && ((_a = unref(roleDetail)) == null ? void 0 : _a.tips) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "px-[40px] pt-[40px]"
                                }, [
                                  createVNode(_component_TheChatMsgItem, {
                                    type: "left",
                                    avatar: unref(roleDetail).image,
                                    bg: "var(--el-bg-color-page)"
                                  }, {
                                    default: withCtx(() => {
                                      var _a2;
                                      return [
                                        createVNode(_component_TheChatMsgContent, {
                                          content: (_a2 = unref(roleDetail)) == null ? void 0 : _a2.tips,
                                          type: "html",
                                          typing: false,
                                          "line-numbers": !unref(appStore).isMobile,
                                          "show-collect-btn": false,
                                          "show-copy-btn": false,
                                          "show-poster": false,
                                          "show-voice": false,
                                          class: "mb-[15px] last-of-type:mb-0",
                                          onClickCustomLink: ($event) => chat($event, "link")
                                        }, null, 8, ["content", "line-numbers", "onClickCustomLink"])
                                      ];
                                    }),
                                    _: 1
                                  }, 8, ["avatar"])
                                ])) : createCommentVNode("", true),
                                unref(chatList).length ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  ref_key: "innerRef",
                                  ref: innerRef,
                                  class: "px-8"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(chatList), (item, index) => {
                                    var _a2;
                                    return openBlock(), createBlock("div", {
                                      key: item.id + "" + index,
                                      class: "mt-4 sm:pb-[20px]"
                                    }, [
                                      item.type == 1 ? (openBlock(), createBlock(_component_TheChatMsgItem, {
                                        key: 0,
                                        type: "right",
                                        avatar: unref(userStore).userInfo.avatar,
                                        color: "white"
                                      }, {
                                        actions: withCtx(() => [
                                          createVNode("div", { class: "my-[5px]" }, [
                                            createVNode(_component_ElButton, {
                                              link: "",
                                              type: "info",
                                              onClick: ($event) => unref(copy)(
                                                item.content
                                              )
                                            }, {
                                              icon: withCtx(() => [
                                                createVNode(_component_Icon, { name: "el-icon-CopyDocument" })
                                              ]),
                                              default: withCtx(() => [
                                                createTextVNode(" \u590D\u5236 ")
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_TheChatMsgContent, {
                                            content: item.content,
                                            "files-plugin": item.files_plugin
                                          }, null, 8, ["content", "files-plugin"])
                                        ]),
                                        _: 2
                                      }, 1032, ["avatar"])) : createCommentVNode("", true),
                                      item.type == 2 ? (openBlock(), createBlock(_component_TheChatMsgItem, {
                                        key: 1,
                                        type: "left",
                                        avatar: (_a2 = unref(roleDetail)) == null ? void 0 : _a2.image,
                                        time: item.create_time,
                                        bg: "var(--el-bg-color-page)",
                                        modelName: item.model
                                      }, {
                                        outer_actions: withCtx(() => [
                                          index === unref(chatList).length - 1 && !unref(isReceiving) ? (openBlock(), createBlock("div", {
                                            key: 0,
                                            class: "flex flex-col",
                                            style: { "margin-left": "52px" }
                                          }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(relatedIssuesArr).length ? unref(relatedIssuesArr) : item.correlation, (text, textIndex) => {
                                              return openBlock(), createBlock("div", {
                                                key: textIndex,
                                                class: "inline-flex items-center rounded-[12px] bg-page cursor-pointer mt-[10px] hover:bg-primary-light-9",
                                                style: { "padding": "8px 12px", "width": "fit-content" },
                                                onClick: withModifiers(($event) => chat(text, "input"), ["stop"])
                                              }, [
                                                createVNode("span", { class: "mr-2 text-tx-primary" }, toDisplayString(text), 1),
                                                createVNode(_component_Icon, {
                                                  name: "el-icon-Right",
                                                  color: "#999",
                                                  size: "20"
                                                })
                                              ], 8, ["onClick"]);
                                            }), 128))
                                          ])) : createCommentVNode("", true)
                                        ]),
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.content, (text, i) => {
                                            return openBlock(), createBlock(_component_TheChatMsgContent, {
                                              key: i,
                                              content: text,
                                              type: "html",
                                              typing: item.typing,
                                              "line-numbers": !unref(appStore).isMobile,
                                              "show-rewrite": index === unref(chatList).length - 1,
                                              "show-copy": "",
                                              "show-voice": unref(appStore).getIsVoiceOpen,
                                              class: ["mb-[15px] last-of-type:mb-0", {
                                                "pt-[15px] border-t border-solid border-br-light": i > 0
                                              }],
                                              index: i,
                                              "record-id": item.id,
                                              "show-poster": "",
                                              "record-list": unref(chatList),
                                              onRewrite: unref(rewrite)
                                            }, null, 8, ["content", "typing", "line-numbers", "show-rewrite", "show-voice", "class", "index", "record-id", "record-list", "onRewrite"]);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1032, ["avatar", "time", "modelName"])) : createCommentVNode("", true)
                                    ]);
                                  }), 128))
                                ], 512)) : createCommentVNode("", true)
                              ])
                            ];
                          }),
                          _: 1
                        }, 512)
                      ]),
                      createVNode("div", { class: "mb-[10px] px-[30px]" }, [
                        createVNode(_component_TheChatAction, {
                          ref_key: "chatActionRef",
                          ref: chatActionRef,
                          loading: unref(isReceiving),
                          "show-continue": unref(chatList).length,
                          "show-file-upload": unref(filePlugin).show,
                          "file-plugin": unref(filePlugin).data,
                          "onUpdate:filePlugin": ($event) => unref(filePlugin).data = $event,
                          onEnter: chat,
                          onClear: clearChatRecord,
                          onPause: ($event) => {
                            var _a;
                            return (_a = unref(sseInstance)) == null ? void 0 : _a.abort();
                          },
                          onFocus: inputFocus,
                          onContinue: ($event) => chat("\u7EE7\u7EED", "btn")
                        }, {
                          btn: withCtx(() => [
                            createVNode("div", { class: "mr-[10px]" }, [
                              createVNode(_component_ModelPicker, {
                                class: "min-w-[280px] select-class",
                                sub_id: unref(model),
                                "onUpdate:sub_id": ($event) => isRef(model) ? model.value = $event : null,
                                "onUpdate:modelConfig": changeModel
                              }, null, 8, ["sub_id", "onUpdate:sub_id", "onUpdate:modelConfig"])
                            ])
                          ]),
                          _: 1
                        }, 8, ["loading", "show-continue", "show-file-upload", "file-plugin", "onUpdate:filePlugin", "onPause", "onContinue"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "h-full flex" }, [
                createVNode("div", { class: "p-[16px]" }, [
                  createVNode(RoleSidebar, {
                    keyword: unref(keyword),
                    "onUpdate:keyword": ($event) => isRef(keyword) ? keyword.value = $event : null,
                    sidebarList: unref(sidebarList),
                    currentId: unref(currentId),
                    onOntoggle: toggleRole
                  }, null, 8, ["keyword", "onUpdate:keyword", "sidebarList", "currentId"])
                ]),
                createVNode("div", { class: "flex-1 min-w-0 pr-4 py-4" }, [
                  createVNode(_component_el_watermark, {
                    class: "h-full",
                    content: unref(appStore).getChatConfig.watermark,
                    font: {
                      color: unref(isDark) ? "rgba(256,256,256,0.08)" : "rgba(0,0,0,0.06)",
                      fontSize: 12
                    }
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "h-full flex flex-col bg-body rounded-[12px]" }, [
                        createVNode("div", { class: "flex-1 min-h-0" }, [
                          createVNode(unref(ElScrollbar), {
                            ref_key: "scrollbarRef",
                            ref: scrollbarRef
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode("div", null, [
                                  !unref(chatList).length && ((_a = unref(roleDetail)) == null ? void 0 : _a.tips) ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "px-[40px] pt-[40px]"
                                  }, [
                                    createVNode(_component_TheChatMsgItem, {
                                      type: "left",
                                      avatar: unref(roleDetail).image,
                                      bg: "var(--el-bg-color-page)"
                                    }, {
                                      default: withCtx(() => {
                                        var _a2;
                                        return [
                                          createVNode(_component_TheChatMsgContent, {
                                            content: (_a2 = unref(roleDetail)) == null ? void 0 : _a2.tips,
                                            type: "html",
                                            typing: false,
                                            "line-numbers": !unref(appStore).isMobile,
                                            "show-collect-btn": false,
                                            "show-copy-btn": false,
                                            "show-poster": false,
                                            "show-voice": false,
                                            class: "mb-[15px] last-of-type:mb-0",
                                            onClickCustomLink: ($event) => chat($event, "link")
                                          }, null, 8, ["content", "line-numbers", "onClickCustomLink"])
                                        ];
                                      }),
                                      _: 1
                                    }, 8, ["avatar"])
                                  ])) : createCommentVNode("", true),
                                  unref(chatList).length ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    ref_key: "innerRef",
                                    ref: innerRef,
                                    class: "px-8"
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(chatList), (item, index) => {
                                      var _a2;
                                      return openBlock(), createBlock("div", {
                                        key: item.id + "" + index,
                                        class: "mt-4 sm:pb-[20px]"
                                      }, [
                                        item.type == 1 ? (openBlock(), createBlock(_component_TheChatMsgItem, {
                                          key: 0,
                                          type: "right",
                                          avatar: unref(userStore).userInfo.avatar,
                                          color: "white"
                                        }, {
                                          actions: withCtx(() => [
                                            createVNode("div", { class: "my-[5px]" }, [
                                              createVNode(_component_ElButton, {
                                                link: "",
                                                type: "info",
                                                onClick: ($event) => unref(copy)(
                                                  item.content
                                                )
                                              }, {
                                                icon: withCtx(() => [
                                                  createVNode(_component_Icon, { name: "el-icon-CopyDocument" })
                                                ]),
                                                default: withCtx(() => [
                                                  createTextVNode(" \u590D\u5236 ")
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"])
                                            ])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(_component_TheChatMsgContent, {
                                              content: item.content,
                                              "files-plugin": item.files_plugin
                                            }, null, 8, ["content", "files-plugin"])
                                          ]),
                                          _: 2
                                        }, 1032, ["avatar"])) : createCommentVNode("", true),
                                        item.type == 2 ? (openBlock(), createBlock(_component_TheChatMsgItem, {
                                          key: 1,
                                          type: "left",
                                          avatar: (_a2 = unref(roleDetail)) == null ? void 0 : _a2.image,
                                          time: item.create_time,
                                          bg: "var(--el-bg-color-page)",
                                          modelName: item.model
                                        }, {
                                          outer_actions: withCtx(() => [
                                            index === unref(chatList).length - 1 && !unref(isReceiving) ? (openBlock(), createBlock("div", {
                                              key: 0,
                                              class: "flex flex-col",
                                              style: { "margin-left": "52px" }
                                            }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(relatedIssuesArr).length ? unref(relatedIssuesArr) : item.correlation, (text, textIndex) => {
                                                return openBlock(), createBlock("div", {
                                                  key: textIndex,
                                                  class: "inline-flex items-center rounded-[12px] bg-page cursor-pointer mt-[10px] hover:bg-primary-light-9",
                                                  style: { "padding": "8px 12px", "width": "fit-content" },
                                                  onClick: withModifiers(($event) => chat(text, "input"), ["stop"])
                                                }, [
                                                  createVNode("span", { class: "mr-2 text-tx-primary" }, toDisplayString(text), 1),
                                                  createVNode(_component_Icon, {
                                                    name: "el-icon-Right",
                                                    color: "#999",
                                                    size: "20"
                                                  })
                                                ], 8, ["onClick"]);
                                              }), 128))
                                            ])) : createCommentVNode("", true)
                                          ]),
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.content, (text, i) => {
                                              return openBlock(), createBlock(_component_TheChatMsgContent, {
                                                key: i,
                                                content: text,
                                                type: "html",
                                                typing: item.typing,
                                                "line-numbers": !unref(appStore).isMobile,
                                                "show-rewrite": index === unref(chatList).length - 1,
                                                "show-copy": "",
                                                "show-voice": unref(appStore).getIsVoiceOpen,
                                                class: ["mb-[15px] last-of-type:mb-0", {
                                                  "pt-[15px] border-t border-solid border-br-light": i > 0
                                                }],
                                                index: i,
                                                "record-id": item.id,
                                                "show-poster": "",
                                                "record-list": unref(chatList),
                                                onRewrite: unref(rewrite)
                                              }, null, 8, ["content", "typing", "line-numbers", "show-rewrite", "show-voice", "class", "index", "record-id", "record-list", "onRewrite"]);
                                            }), 128))
                                          ]),
                                          _: 2
                                        }, 1032, ["avatar", "time", "modelName"])) : createCommentVNode("", true)
                                      ]);
                                    }), 128))
                                  ], 512)) : createCommentVNode("", true)
                                ])
                              ];
                            }),
                            _: 1
                          }, 512)
                        ]),
                        createVNode("div", { class: "mb-[10px] px-[30px]" }, [
                          createVNode(_component_TheChatAction, {
                            ref_key: "chatActionRef",
                            ref: chatActionRef,
                            loading: unref(isReceiving),
                            "show-continue": unref(chatList).length,
                            "show-file-upload": unref(filePlugin).show,
                            "file-plugin": unref(filePlugin).data,
                            "onUpdate:filePlugin": ($event) => unref(filePlugin).data = $event,
                            onEnter: chat,
                            onClear: clearChatRecord,
                            onPause: ($event) => {
                              var _a;
                              return (_a = unref(sseInstance)) == null ? void 0 : _a.abort();
                            },
                            onFocus: inputFocus,
                            onContinue: ($event) => chat("\u7EE7\u7EED", "btn")
                          }, {
                            btn: withCtx(() => [
                              createVNode("div", { class: "mr-[10px]" }, [
                                createVNode(_component_ModelPicker, {
                                  class: "min-w-[280px] select-class",
                                  sub_id: unref(model),
                                  "onUpdate:sub_id": ($event) => isRef(model) ? model.value = $event : null,
                                  "onUpdate:modelConfig": changeModel
                                }, null, 8, ["sub_id", "onUpdate:sub_id", "onUpdate:modelConfig"])
                              ])
                            ]),
                            _: 1
                          }, 8, ["loading", "show-continue", "show-file-upload", "file-plugin", "onUpdate:filePlugin", "onPause", "onContinue"])
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["content", "font"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dialogue/role.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const role = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6c59986f"]]);

export { role as default };
//# sourceMappingURL=role-1O_V1kqR.mjs.map
