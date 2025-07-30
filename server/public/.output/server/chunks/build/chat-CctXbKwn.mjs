import { a5 as useAppStore, z as useUserStore, a as useRouter, A as feedback, y as defineStore, ah as __nuxt_component_0, b3 as __nuxt_component_1$1, d as ElButton } from './server.mjs';
import { _ as __nuxt_component_1 } from './index-Cack-rtP.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-l5zPv3vf.mjs';
import { E as ElWatermark } from './index-VIyJ-gCg.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as __nuxt_component_1$2, a as __nuxt_component_2$1, b as __nuxt_component_4 } from './index-c3Av-r7B.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { _ as __nuxt_component_7 } from './index-CXZnYiu9.mjs';
import { useSSRContext, defineComponent, shallowRef, ref, withAsyncContext, reactive, nextTick, watch, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, createCommentVNode, withModifiers, toDisplayString, isRef } from 'vue';
import { u as useCopy } from './useCopy-CfS-iChu.mjs';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useDark, useElementSize, watchThrottled } from '@vueuse/core';
import SampleLists from './sample-lists-DYEJfgLd.mjs';
import { a as getChatRecord, b as chatSendText, e as cleanChatRecord, h as getChatCategoryLists, i as chatCategoryAdd, j as chatCategoryEdit, k as chatCategoryClear, l as chatCategoryDelete } from './chat-jd47avQj.mjs';
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
import './el-tab-pane-C7DQ8faq.mjs';
import './index-C5I0EtSx.mjs';

const useDialogueStore = defineStore({
  id: "dialogueSate",
  state: () => {
    return {
      sessionId: "",
      sessionLists: []
    };
  },
  getters: {
    getCurrentSession: (state) => {
      return state.sessionLists.find(
        (item) => String(item.id) === String(state.sessionId)
      ) || {};
    }
  },
  actions: {
    setSessionId(id = "") {
      this.sessionId = String(id);
    },
    setSessionSelect(item) {
      if (!item) {
        [item] = this.sessionLists;
      }
      this.setSessionId((item == null ? void 0 : item.id) || "");
    },
    async getSessionLists() {
      const data = await getChatCategoryLists({
        page_type: 0
      });
      this.sessionLists = data.lists || [];
      this.setSessionSelect();
      return this.sessionLists;
    },
    async sessionAdd() {
      await chatCategoryAdd({});
      await this.getSessionLists();
      this.setSessionSelect();
    },
    async sessionEdit(value) {
      await chatCategoryEdit({
        ...value
      });
      await this.getSessionLists();
      this.setSessionSelect(value);
    },
    async sessionClear() {
      await chatCategoryClear();
      await this.getSessionLists();
    },
    async sessionDelete(id) {
      await chatCategoryDelete({
        id
      });
      await this.getSessionLists();
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "chat",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const appStore = useAppStore();
    const userStore = useUserStore();
    const chatActionRef = shallowRef();
    const dialogueStore = useDialogueStore();
    const router = useRouter();
    const model = ref("");
    const { copy } = useCopy();
    [__temp, __restore] = withAsyncContext(() => useAsyncData(() => dialogueStore.getSessionLists(), {
      lazy: true
    }, "$SUo5FcMjp8")), await __temp, __restore();
    const isDark = useDark();
    const { data: chatList, refresh: getChatList } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => getChatRecord({
        type: 1,
        category_id: dialogueStore.sessionId,
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
      "$5oItIRu1UV"
    )), __temp = await __temp, __restore(), __temp);
    if ((_a = appStore.getChatConfig) == null ? void 0 : _a.is_reopen) {
      dialogueStore.sessionAdd();
      appStore.getChatConfig.is_reopen = 0;
    }
    const clearChatRecord = async () => {
      if (!userStore.isLogin) return userStore.toggleShowLogin();
      if (!dialogueStore.sessionId) return;
      await feedback.confirm("\u786E\u5B9A\u6E05\u7A7A\u8BB0\u5F55\uFF1F");
      await cleanChatRecord({
        category_id: dialogueStore.sessionId,
        type: 1
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
        chat2(userInput.content);
      }
    });
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
    const inputFocus = () => {
      var _a2;
      if (!userStore.isLogin) {
        (_a2 = chatActionRef.value) == null ? void 0 : _a2.blur();
        return userStore.toggleShowLogin();
      }
      scrollToBottom();
    };
    let sseInstance = null;
    const isReceiving = ref(false);
    let isSessionAdd = false;
    const relatedIssuesArr = ref([]);
    const chat2 = async (value, type = "input") => {
      var _a2;
      if (!userStore.isLogin) return userStore.toggleShowLogin();
      if (!value) return feedback.msgError("\u8BF7\u8F93\u5165\u95EE\u9898");
      if (isReceiving.value) return;
      const key = Date.now();
      relatedIssuesArr.value = [];
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
      (_a2 = chatActionRef.value) == null ? void 0 : _a2.setInputValue();
      const currentChat = chatList.value.find((item) => item.key === key);
      if (!dialogueStore.sessionId) {
        isSessionAdd = true;
        await dialogueStore.sessionAdd();
        isSessionAdd = false;
      }
      sseInstance = chatSendText({
        type: 1,
        other_id: dialogueStore.sessionId,
        question: value,
        model: model.value,
        file: filePlugin.data.url
      });
      sseInstance.addEventListener("chat", ({ data: dataJson }) => {
        console.log(dataJson);
        const { data, index } = dataJson;
        if (!currentChat.content[index]) {
          currentChat.content[index] = "";
        }
        currentChat.content[index] += data;
      });
      sseInstance.addEventListener("finish", ({ data: dataJson }) => {
        const { data, index } = dataJson;
        if (data) {
          currentChat.content[index] += data;
        }
        filePlugin.data.url = "";
      });
      sseInstance.addEventListener("question", ({ data: dataJson }) => {
        relatedIssuesArr.value = JSON.parse(dataJson.data);
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
        if (dialogueStore.getCurrentSession.name === "\u65B0\u7684\u4F1A\u8BDD") {
          await dialogueStore.sessionEdit({
            id: dialogueStore.sessionId,
            name: value
          });
        }
        setTimeout(async () => {
          await getChatList();
          isReceiving.value = false;
          currentChat.typing = false;
          await nextTick();
          scrollToBottom();
        }, 600);
      });
      sseInstance.addEventListener("error", async (ev) => {
        var _a3, _b;
        type === "input" && ((_a3 = chatActionRef.value) == null ? void 0 : _a3.setInputValue(value));
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
    const scrollbarRef = shallowRef();
    const innerRef = ref();
    const scrollToBottom = async () => {
      var _a2, _b, _c;
      const scrollHeight = (_b = (_a2 = scrollbarRef.value) == null ? void 0 : _a2.wrapRef) == null ? void 0 : _b.scrollHeight;
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
    const removeSse = () => {
      sseInstance == null ? void 0 : sseInstance.removeEventListener("chat");
      sseInstance == null ? void 0 : sseInstance.removeEventListener("close");
      sseInstance == null ? void 0 : sseInstance.removeEventListener("error");
      sseInstance == null ? void 0 : sseInstance.removeEventListener("finish");
      sseInstance == null ? void 0 : sseInstance.abort();
      isReceiving.value = false;
      relatedIssuesArr.value = [];
    };
    watch(
      () => dialogueStore.sessionId,
      async (newValue, oldValue) => {
        if (!isSessionAdd && newValue != oldValue) {
          removeSse();
          await getChatList();
          scrollToBottom();
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_TheSession = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_el_watermark = ElWatermark;
      const _component_ElScrollbar = ElScrollbar;
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_TheChatMsgItem = __nuxt_component_1$2;
      const _component_TheChatMsgContent = __nuxt_component_2$1;
      const _component_ElButton = ElButton;
      const _component_Icon = _sfc_main$1;
      const _component_TheChatAction = __nuxt_component_4;
      const _component_ModelPicker = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-4e36a7c5>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full flex" data-v-4e36a7c5${_scopeId}><div class="p-[16px]" data-v-4e36a7c5${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TheSession, {
              modelValue: unref(dialogueStore).sessionId,
              "onUpdate:modelValue": ($event) => unref(dialogueStore).sessionId = $event,
              data: unref(dialogueStore).sessionLists,
              onAdd: unref(dialogueStore).sessionAdd,
              onEdit: unref(dialogueStore).sessionEdit,
              onDelete: unref(dialogueStore).sessionDelete,
              onClear: unref(dialogueStore).sessionClear,
              onClickItem: unref(dialogueStore).setSessionSelect
            }, {
              top: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-around text-xl font-medium px-[16px] pt-[16px] cursor-pointer" data-v-4e36a7c5${_scopeId2}><div class="pb-[6px] text-primary border-solid border-b-[2px] border-primary" data-v-4e36a7c5${_scopeId2}> \u95EE\u7B54\u52A9\u624B </div>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/dialogue/role" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="pb-[8px]" data-v-4e36a7c5${_scopeId3}>\u89D2\u8272\u52A9\u624B</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "pb-[8px]" }, "\u89D2\u8272\u52A9\u624B")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-around text-xl font-medium px-[16px] pt-[16px] cursor-pointer" }, [
                      createVNode("div", { class: "pb-[6px] text-primary border-solid border-b-[2px] border-primary" }, " \u95EE\u7B54\u52A9\u624B "),
                      createVNode(_component_NuxtLink, { to: "/dialogue/role" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "pb-[8px]" }, "\u89D2\u8272\u52A9\u624B")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex-1 min-w-0 pr-4 py-4" data-v-4e36a7c5${_scopeId}>`);
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
                  _push3(`<div class="h-full flex flex-col bg-body rounded-[12px]" data-v-4e36a7c5${_scopeId2}><div class="flex-1 min-h-0" data-v-4e36a7c5${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ElScrollbar, {
                    ref_key: "scrollbarRef",
                    ref: scrollbarRef
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ClientOnly, null, {}, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              unref(chatList).length ? (openBlock(), createBlock("div", {
                                key: 0,
                                ref_key: "innerRef",
                                ref: innerRef,
                                class: "px-8"
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(chatList), (item, index) => {
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
                                      avatar: unref(appStore).getChatConfig.chat_logo,
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
                                              onClick: withModifiers(($event) => chat2(text, "input"), ["stop"])
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
                                            "show-poster": "",
                                            "record-list": unref(chatList),
                                            index: i,
                                            "record-id": item.id,
                                            onRewrite: unref(rewrite)
                                          }, null, 8, ["content", "typing", "line-numbers", "show-rewrite", "show-voice", "class", "record-list", "index", "record-id", "onRewrite"]);
                                        }), 128))
                                      ]),
                                      _: 2
                                    }, 1032, ["avatar", "time", "modelName"])) : createCommentVNode("", true)
                                  ]);
                                }), 128))
                              ], 512)) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "max-w-[1200px] mx-auto"
                              }, [
                                createVNode(SampleLists, {
                                  onClickItem: ($event) => chat2($event, "sample")
                                }, null, 8, ["onClickItem"])
                              ]))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="mb-[10px] px-[30px]" data-v-4e36a7c5${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_TheChatAction, {
                    ref_key: "chatActionRef",
                    ref: chatActionRef,
                    loading: unref(isReceiving),
                    "file-plugin": unref(filePlugin).data,
                    "onUpdate:filePlugin": ($event) => unref(filePlugin).data = $event,
                    onEnter: chat2,
                    onClear: clearChatRecord,
                    onPause: ($event) => {
                      var _a2;
                      return (_a2 = unref(sseInstance)) == null ? void 0 : _a2.abort();
                    },
                    onFocus: inputFocus,
                    "show-continue": unref(chatList).length,
                    "show-file-upload": unref(filePlugin).show,
                    onContinue: ($event) => chat2("\u7EE7\u7EED", "btn")
                  }, {
                    btn: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mr-[10px]" data-v-4e36a7c5${_scopeId3}>`);
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
                        createVNode(_component_ElScrollbar, {
                          ref_key: "scrollbarRef",
                          ref: scrollbarRef
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                unref(chatList).length ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  ref_key: "innerRef",
                                  ref: innerRef,
                                  class: "px-8"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(chatList), (item, index) => {
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
                                        avatar: unref(appStore).getChatConfig.chat_logo,
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
                                                onClick: withModifiers(($event) => chat2(text, "input"), ["stop"])
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
                                              "show-poster": "",
                                              "record-list": unref(chatList),
                                              index: i,
                                              "record-id": item.id,
                                              onRewrite: unref(rewrite)
                                            }, null, 8, ["content", "typing", "line-numbers", "show-rewrite", "show-voice", "class", "record-list", "index", "record-id", "onRewrite"]);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1032, ["avatar", "time", "modelName"])) : createCommentVNode("", true)
                                    ]);
                                  }), 128))
                                ], 512)) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "max-w-[1200px] mx-auto"
                                }, [
                                  createVNode(SampleLists, {
                                    onClickItem: ($event) => chat2($event, "sample")
                                  }, null, 8, ["onClickItem"])
                                ]))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 512)
                      ]),
                      createVNode("div", { class: "mb-[10px] px-[30px]" }, [
                        createVNode(_component_TheChatAction, {
                          ref_key: "chatActionRef",
                          ref: chatActionRef,
                          loading: unref(isReceiving),
                          "file-plugin": unref(filePlugin).data,
                          "onUpdate:filePlugin": ($event) => unref(filePlugin).data = $event,
                          onEnter: chat2,
                          onClear: clearChatRecord,
                          onPause: ($event) => {
                            var _a2;
                            return (_a2 = unref(sseInstance)) == null ? void 0 : _a2.abort();
                          },
                          onFocus: inputFocus,
                          "show-continue": unref(chatList).length,
                          "show-file-upload": unref(filePlugin).show,
                          onContinue: ($event) => chat2("\u7EE7\u7EED", "btn")
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
                        }, 8, ["loading", "file-plugin", "onUpdate:filePlugin", "onPause", "show-continue", "show-file-upload", "onContinue"])
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
                  createVNode(_component_TheSession, {
                    modelValue: unref(dialogueStore).sessionId,
                    "onUpdate:modelValue": ($event) => unref(dialogueStore).sessionId = $event,
                    data: unref(dialogueStore).sessionLists,
                    onAdd: unref(dialogueStore).sessionAdd,
                    onEdit: unref(dialogueStore).sessionEdit,
                    onDelete: unref(dialogueStore).sessionDelete,
                    onClear: unref(dialogueStore).sessionClear,
                    onClickItem: unref(dialogueStore).setSessionSelect
                  }, {
                    top: withCtx(() => [
                      createVNode("div", { class: "flex items-center justify-around text-xl font-medium px-[16px] pt-[16px] cursor-pointer" }, [
                        createVNode("div", { class: "pb-[6px] text-primary border-solid border-b-[2px] border-primary" }, " \u95EE\u7B54\u52A9\u624B "),
                        createVNode(_component_NuxtLink, { to: "/dialogue/role" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "pb-[8px]" }, "\u89D2\u8272\u52A9\u624B")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "data", "onAdd", "onEdit", "onDelete", "onClear", "onClickItem"])
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
                          createVNode(_component_ElScrollbar, {
                            ref_key: "scrollbarRef",
                            ref: scrollbarRef
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  unref(chatList).length ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    ref_key: "innerRef",
                                    ref: innerRef,
                                    class: "px-8"
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(chatList), (item, index) => {
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
                                          avatar: unref(appStore).getChatConfig.chat_logo,
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
                                                  onClick: withModifiers(($event) => chat2(text, "input"), ["stop"])
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
                                                "show-poster": "",
                                                "record-list": unref(chatList),
                                                index: i,
                                                "record-id": item.id,
                                                onRewrite: unref(rewrite)
                                              }, null, 8, ["content", "typing", "line-numbers", "show-rewrite", "show-voice", "class", "record-list", "index", "record-id", "onRewrite"]);
                                            }), 128))
                                          ]),
                                          _: 2
                                        }, 1032, ["avatar", "time", "modelName"])) : createCommentVNode("", true)
                                      ]);
                                    }), 128))
                                  ], 512)) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "max-w-[1200px] mx-auto"
                                  }, [
                                    createVNode(SampleLists, {
                                      onClickItem: ($event) => chat2($event, "sample")
                                    }, null, 8, ["onClickItem"])
                                  ]))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 512)
                        ]),
                        createVNode("div", { class: "mb-[10px] px-[30px]" }, [
                          createVNode(_component_TheChatAction, {
                            ref_key: "chatActionRef",
                            ref: chatActionRef,
                            loading: unref(isReceiving),
                            "file-plugin": unref(filePlugin).data,
                            "onUpdate:filePlugin": ($event) => unref(filePlugin).data = $event,
                            onEnter: chat2,
                            onClear: clearChatRecord,
                            onPause: ($event) => {
                              var _a2;
                              return (_a2 = unref(sseInstance)) == null ? void 0 : _a2.abort();
                            },
                            onFocus: inputFocus,
                            "show-continue": unref(chatList).length,
                            "show-file-upload": unref(filePlugin).show,
                            onContinue: ($event) => chat2("\u7EE7\u7EED", "btn")
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
                          }, 8, ["loading", "file-plugin", "onUpdate:filePlugin", "onPause", "show-continue", "show-file-upload", "onContinue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dialogue/chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chat = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4e36a7c5"]]);

export { chat as default };
//# sourceMappingURL=chat-CctXbKwn.mjs.map
