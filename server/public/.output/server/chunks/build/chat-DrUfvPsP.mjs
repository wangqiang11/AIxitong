import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2$1, b as __nuxt_component_4 } from './index-c3Av-r7B.mjs';
import { a as useRouter, z as useUserStore, ag as useRoute, a5 as useAppStore, A as feedback, d as ElButton } from './server.mjs';
import { E as ElEmpty } from './el-empty-xbPr04pX.mjs';
import { useSSRContext, defineComponent, shallowRef, computed, ref, withAsyncContext, reactive, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, createTextVNode, nextTick } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { u as useRenderAudioGraph, a as useRecorder } from './useRecorder-K_rLcXyS.mjs';
import { u as useAudioPlay } from './useAudioPlay-C6V9947w.mjs';
import { ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './loading-BBlOpNc6.mjs';
import { useElementSize, watchThrottled, useWindowSize } from '@vueuse/core';
import { a as getRobotChatRecord, r as robotChat, v as voiceTransfer, d as voiceGenerate } from './robot-BsB_E1H2.mjs';
import { c as create_record_null } from './create_record_null-C_UPv5do.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-D7S5lb8a.mjs';
import './index-DRyhljQ3.mjs';
import 'markdown-it';
import 'highlight.js';
import '@vscode/markdown-it-katex';
import './index-C2yEelJa.mjs';
import 'lodash-unified';
import './position-DVxxNIGX.mjs';
import '@vue/shared';
import './file-BZUJNFp8.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-DVLwoLV9.mjs';
import 'video.js';
import './el-link-CHT85aXX.mjs';
import './useCopy-CfS-iChu.mjs';
import './knowledge-DiYwGYtC.mjs';
import './chat-jd47avQj.mjs';
import './download-N0luyf1S.mjs';
import 'lodash-es';
import 'qrcode.vue';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
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
import 'weixin-js-sdk';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import 'recorder-core/recorder.mp3.min.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "chat",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    shallowRef();
    const router = useRouter();
    const userStore = useUserStore();
    const route = useRoute();
    const robotId = computed(() => route.query.id);
    const squareId = computed(() => route.query.squareId);
    const cateId = computed(() => route.query.cateId);
    const appStore = useAppStore();
    const robotInfo = ref({});
    const chatList = ref([]);
    let lastPlayId = 0;
    const getChatList = async () => {
      const data = await getRobotChatRecord({
        square_id: squareId.value,
        category_id: cateId.value,
        robot_id: robotId.value,
        page_size: 25e3
      });
      chatList.value = data.lists || [];
      if (chatStatus.value == 3) {
        const last = chatList.value[chatList.value.length - 1];
        if (last && last.id !== lastPlayId) {
          lastPlayId = last.id;
          playRecord(lastPlayId);
        }
      }
    };
    [__temp, __restore] = withAsyncContext(() => useAsyncData(() => getChatList(), { lazy: true }, "$Mtlbt2SHcf")), await __temp, __restore();
    const back = () => {
      if (squareId.value) {
        router.replace({
          path: "/robot_square"
        });
      } else {
        router.replace({
          path: "/application/layout/robot"
        });
      }
    };
    const chatStatus = ref(
      0
      /* INITIALING */
    );
    const statusToTextMap = reactive({
      [
        0
        /* INITIALING */
      ]: "\u6B63\u5728\u521D\u59CB\u5316\u5BF9\u8BDD...",
      [
        1
        /* DEFAULT */
      ]: "\u70B9\u51FB\u5F00\u59CB\u8BF4\u8BDD",
      [
        2
        /* RECORDING */
      ]: "\u6211\u5728\u542C\uFF0C\u60A8\u8BF7\u8BF4...",
      [
        3
        /* THINKING */
      ]: "\u7A0D\u7B49\uFF0C\u8BA9\u6211\u60F3\u4E00\u60F3",
      [
        4
        /* PLAYING */
      ]: "\u6B63\u5728\u56DE\u590D\u4E2D..."
    });
    shallowRef();
    computed(() => {
      if (chatStatus.value == 4) {
        return robotInfo.value.digital.wide_talk_video;
      } else {
        return robotInfo.value.digital.wide_stay_video;
      }
    });
    const chatActionRef = shallowRef();
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
    const chat2 = async (value, type = "input") => {
      var _a;
      if (!userStore.isLogin) return userStore.toggleShowLogin();
      if (!value) return feedback.msgError("\u8BF7\u8F93\u5165\u95EE\u9898");
      if (isReceiving.value) return;
      if (!robotId.value) return;
      stop();
      changeChatStatus(
        3
        /* THINKING */
      );
      const key = Date.now();
      isReceiving.value = true;
      chatList.value.push({
        type: 1,
        content: value
      });
      chatList.value.push({
        type: 2,
        typing: true,
        content: "",
        key
      });
      (_a = chatActionRef.value) == null ? void 0 : _a.setInputValue();
      const currentChat = chatList.value.find((item) => item.key === key);
      sseInstance = robotChat({
        square_id: squareId.value,
        cate_id: cateId.value,
        robot_id: robotId.value,
        question: value,
        stream: true
      });
      sseInstance.addEventListener("chat", ({ data: dataJson }) => {
        const { data, index } = dataJson;
        if (!currentChat.content) {
          currentChat.content = "";
        }
        currentChat.content += data;
      });
      sseInstance.addEventListener("file", ({ data: dataJson }) => {
        try {
          const urls = JSON.parse(dataJson.data);
          currentChat.files = urls;
        } catch (error) {
          console.error(error);
        }
      });
      sseInstance.addEventListener("image", ({ data: dataJson }) => {
        try {
          const urls = JSON.parse(dataJson.data);
          currentChat.images = urls;
        } catch (error) {
          console.error(error);
        }
      });
      sseInstance.addEventListener("close", async () => {
        setTimeout(async () => {
          await getChatList();
          currentChat.typing = false;
          isReceiving.value = false;
          scrollToBottom();
        }, 500);
      });
      sseInstance.addEventListener("error", async (ev) => {
        var _a2, _b, _c;
        changeChatStatus(
          1
          /* DEFAULT */
        );
        if (((_a2 = ev.data) == null ? void 0 : _a2.code) === 1100) {
          try {
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
          } finally {
            type === "input" && ((_b = chatActionRef.value) == null ? void 0 : _b.setInputValue(value));
          }
          return;
        }
        if (ev.errorType === "connectError") {
          feedback.msgError("\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
        }
        if (["connectError", "responseError"].includes(ev.errorType)) {
          chatList.value.splice(chatList.value.length - 2, 2);
          type === "input" && ((_c = chatActionRef.value) == null ? void 0 : _c.setInputValue(value));
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
      { throttle: 500, immediate: true }
    );
    const idleReplyTimer = ref();
    const isAutoOpen = ref(true);
    const changeChatStatus = (status) => {
      chatStatus.value = status;
    };
    const isAutoStop = ref(false);
    const startTimer = ref(0);
    const hasVoice = ref(false);
    const recordTimer = ref(0);
    const canvasOptions = reactive({
      id: "audio-canvas",
      width: 80,
      height: 40,
      minHeight: 5,
      scale: 2
    });
    const { render, stopRender, draw } = useRenderAudioGraph(canvasOptions);
    const { start, stop, isRecording, authorize, close, isOpen } = useRecorder({
      onstart() {
        changeChatStatus(
          2
          /* RECORDING */
        );
        clearTimeout(idleReplyTimer.value);
        hasVoice.value = false;
        startTimer.value = Date.now();
      },
      async onstop(result) {
        stopRender();
        hasVoice.value = false;
        if (!isAutoStop.value) {
          changeChatStatus(
            1
            /* DEFAULT */
          );
          return;
        }
        isAutoStop.value = false;
        changeChatStatus(
          3
          /* THINKING */
        );
        try {
          const res = await voiceTransfer({
            file: result.blob
          });
          if (!res.text) {
            isAutoOpen.value && startRecord();
            return;
          }
          chat2(res.text, "voice");
        } catch (error) {
          isAutoOpen.value && startRecord();
        }
      },
      ondata(result) {
        var _a;
        const now = Date.now();
        if (hasVoice.value) {
          render(result);
        }
        if (result.powerLevel >= 10) {
          clearTimeout(recordTimer.value);
          chatStatus.value = 2;
          hasVoice.value = true;
          startTimer.value = now;
          recordTimer.value = setTimeout(() => {
            isAutoStop.value = true;
            clearTimeout(idleReplyTimer.value);
            pause();
            stop();
          }, 2e3);
        }
        if (now - startTimer.value >= ((_a = robotInfo.value.digital) == null ? void 0 : _a.idle_time) * 1e3) {
          if (!hasVoice.value) {
            playIdleReply();
            stop();
          }
        }
      }
    });
    const { play, pause, audioPlaying } = useAudioPlay({
      onstart() {
        chatStatus.value = 4;
        if (isPlayIdleReply.value) {
          isPlayIdleReply.value = false;
        }
      },
      onstop() {
        changeChatStatus(
          2
          /* RECORDING */
        );
        if (!isAutoOpen.value) {
          changeChatStatus(
            1
            /* DEFAULT */
          );
        } else {
          startRecord();
        }
      },
      onerror() {
        changeChatStatus(
          1
          /* DEFAULT */
        );
      }
    });
    const playRecord = async (id) => {
      const fun = async () => {
        return await getFile({
          type: 2,
          record_id: id
        });
      };
      play(fun, false);
    };
    const startRecord = async () => {
      if (isRecording.value) {
        return;
      }
      start();
      return;
    };
    const getFile = async (params) => {
      try {
        const { url } = await voiceGenerate(params);
        return url;
      } catch (error) {
        changeChatStatus(
          1
          /* DEFAULT */
        );
        return Promise.reject();
      }
    };
    const file = ref("");
    const isPlayIdleReply = ref(false);
    const playIdleReply = async () => {
      if (!robotInfo.value.is_digital || !robotInfo.value.digital_id || robotInfo.value.digital.is_disable) {
        return Promise.reject();
      }
      if (!file.value) {
        file.value = await getFile({
          type: 3,
          record_id: robotInfo.value.id
        });
      }
      if (!file.value) return Promise.reject();
      isPlayIdleReply.value = true;
      const key = Date.now();
      chatList.value.push({
        type: 2,
        typing: false,
        content: robotInfo.value.digital.idle_reply,
        key
      });
      await nextTick();
      scrollToBottom();
      play(file.value, false);
    };
    shallowRef();
    const { width, height: cHeight } = useWindowSize();
    shallowRef();
    shallowRef();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Icon = _sfc_main$1;
      const _component_TheChatMsgItem = __nuxt_component_1;
      const _component_TheChatMsgContent = __nuxt_component_2$1;
      const _component_ElButton = ElButton;
      const _component_TheChatAction = __nuxt_component_4;
      const _component_el_empty = ElEmpty;
      _push(`<!--[--><div style="${ssrRenderStyle(unref(chatStatus) === 0 ? null : { display: "none" })}" class="h-screen w-screen flex justify-center items-center" data-v-3e566265><img class="w-[400px]"${ssrRenderAttr("src", _imports_0)} alt="" data-v-3e566265></div><div style="${ssrRenderStyle(unref(chatStatus) !== 0 ? null : { display: "none" })}" data-v-3e566265>`);
      if (unref(robotInfo).digital_id && !((_a = unref(robotInfo).digital) == null ? void 0 : _a.is_disable)) {
        _push(`<div class="h-screen w-screen relative overflow-hidden" style="${ssrRenderStyle({
          background: unref(robotInfo).digital_bg
        })}" data-v-3e566265><canvas id="digital-canvas"${ssrRenderAttr("width", unref(width) * 2)}${ssrRenderAttr("height", unref(cHeight) * 2)} data-v-3e566265></canvas><div class="p-[20px] flex h-full relative z-10" data-v-3e566265><div class="flex-1 h-full flex flex-col" data-v-3e566265><div class="flex-1 min-h-0" data-v-3e566265><div class="flex items-center cursor-pointer" data-v-3e566265><div class="flex bg-white p-[5px] text-bold rounded-[50%] text-primary shadow-light" data-v-3e566265>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "el-icon-Back",
          size: 18
        }, null, _parent));
        _push(`</div><div class="text-xl flex-1 min-w-0 ml-[10px] text-white" data-v-3e566265>${ssrInterpolate(unref(robotInfo).name)}</div></div></div><div class="flex justify-center" data-v-3e566265></div></div><div class="h-full flex" data-v-3e566265><div class="h-full flex flex-col items-center w-[160px] justify-end" data-v-3e566265><div class="${ssrRenderClass([{
          "recorder--stop": !unref(isRecording) && !unref(audioPlaying)
        }, "recorder gradient-button"])}" data-v-3e566265>`);
        if (unref(hasVoice)) {
          _push(`<canvas style="${ssrRenderStyle({
            width: `${unref(canvasOptions).width}px`,
            height: `${unref(canvasOptions).height}px`
          })}"${ssrRenderAttr("width", unref(canvasOptions).width * unref(canvasOptions).scale)}${ssrRenderAttr("height", unref(canvasOptions).height * unref(canvasOptions).scale)}${ssrRenderAttr("id", unref(canvasOptions).id)} data-v-3e566265></canvas>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(isRecording) && !unref(hasVoice)) {
          _push(ssrRenderComponent(_component_Icon, {
            name: "el-icon-Microphone",
            size: 40
          }, null, _parent));
        } else if (unref(audioPlaying)) {
          _push(ssrRenderComponent(_component_Icon, {
            name: "local-icon-pause",
            size: 40
          }, null, _parent));
        } else if (!unref(isRecording)) {
          _push(ssrRenderComponent(_component_Icon, {
            name: "el-icon-Mute",
            size: 40
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="text-xs text-white bg-[rgba(51,51,51,0.3)] py-[5px] px-[10px] rounded my-[10px]" data-v-3e566265><div data-v-3e566265>${ssrInterpolate(unref(statusToTextMap)[unref(chatStatus)])}</div></div></div><div class="w-[400px] h-full flex flex-col mr-[20px] pt-[100px]" data-v-3e566265><div class="flex-1 min-h-0 bg-[rgba(0,0,0,0.5)] rounded-[20px] overflow-hidden flex flex-col" data-v-3e566265><div class="flex-1 min-h-0" data-v-3e566265>`);
        if (unref(chatList).length) {
          _push(ssrRenderComponent(unref(ElScrollbar), {
            ref_key: "scrollbarRef",
            ref: scrollbarRef
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="py-4 px-[20px]" data-v-3e566265${_scopeId}><div data-v-3e566265${_scopeId}><!--[-->`);
                ssrRenderList(unref(chatList), (item, index) => {
                  _push2(`<div class="mt-4 sm:pb-[20px]" data-v-3e566265${_scopeId}>`);
                  if (item.type == 1) {
                    _push2(ssrRenderComponent(_component_TheChatMsgItem, {
                      type: "right",
                      avatar: unref(userStore).userInfo.avatar,
                      color: "white"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(_component_TheChatMsgContent, {
                            content: String(item.content)
                          }, null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(_component_TheChatMsgContent, {
                              content: String(item.content)
                            }, null, 8, ["content"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  if (item.type == 2) {
                    _push2(ssrRenderComponent(_component_TheChatMsgItem, {
                      type: "left",
                      time: item.create_time,
                      avatar: unref(robotInfo).icons ? unref(robotInfo).icons : unref(robotInfo).image,
                      bg: "#fff"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(_component_TheChatMsgContent, {
                            content: String(item.content),
                            type: "html",
                            typing: item.typing,
                            images: item.images,
                            files: item.files,
                            "record-id": item.id,
                            "record-type": 2
                          }, null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(_component_TheChatMsgContent, {
                              content: String(item.content),
                              type: "html",
                              typing: item.typing,
                              images: item.images,
                              files: item.files,
                              "record-id": item.id,
                              "record-type": 2
                            }, null, 8, ["content", "typing", "images", "files", "record-id"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "py-4 px-[20px]" }, [
                    createVNode("div", {
                      ref_key: "innerRef",
                      ref: innerRef
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
                            default: withCtx(() => [
                              createVNode(_component_TheChatMsgContent, {
                                content: String(item.content)
                              }, null, 8, ["content"])
                            ]),
                            _: 2
                          }, 1032, ["avatar"])) : createCommentVNode("", true),
                          item.type == 2 ? (openBlock(), createBlock(_component_TheChatMsgItem, {
                            key: 1,
                            type: "left",
                            time: item.create_time,
                            avatar: unref(robotInfo).icons ? unref(robotInfo).icons : unref(robotInfo).image,
                            bg: "#fff"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_TheChatMsgContent, {
                                content: String(item.content),
                                type: "html",
                                typing: item.typing,
                                images: item.images,
                                files: item.files,
                                "record-id": item.id,
                                "record-type": 2
                              }, null, 8, ["content", "typing", "images", "files", "record-id"])
                            ]),
                            _: 2
                          }, 1032, ["time", "avatar"])) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ], 512)
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<div class="h-full flex justify-center text-tx-secondary items-center" data-v-3e566265> \u6682\u65E0\u804A\u5929\u8BB0\u5F55 </div>`);
        }
        _push(`</div>`);
        if (unref(isReceiving)) {
          _push(`<div class="flex justify-center items-center py-[10px]" data-v-3e566265>`);
          _push(ssrRenderComponent(_component_ElButton, {
            color: "#fff",
            round: "",
            onClick: ($event) => {
              var _a2;
              return (_a2 = unref(sseInstance)) == null ? void 0 : _a2.abort();
            }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u505C\u6B62 `);
              } else {
                return [
                  createTextVNode(" \u505C\u6B62 ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div data-v-3e566265>`);
        _push(ssrRenderComponent(_component_TheChatAction, {
          ref_key: "chatActionRef",
          ref: chatActionRef,
          loading: [
            3,
            4
            /* PLAYING */
          ].includes(unref(chatStatus)),
          menus: unref(robotInfo).menus,
          "show-pause": false,
          "show-clear": false,
          onEnter: chat2,
          onFocus: inputFocus
        }, null, _parent));
        _push(`</div></div><div class="flex flex-col justify-center items-center" data-v-3e566265><div class="gradient-button" data-v-3e566265>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "local-icon-clear",
          size: 24
        }, null, _parent));
        _push(`</div></div></div></div></div>`);
      } else {
        _push(`<div class="h-screen w-screen flex flex-col items-center justify-center" data-v-3e566265>`);
        _push(ssrRenderComponent(_component_el_empty, {
          description: "\u8BE5\u667A\u80FD\u4F53\u6682\u672A\u914D\u7F6E\u5F62\u8C61\u6216\u5F62\u8C61\u5DF2\u88AB\u7981\u7528",
          image: unref(create_record_null)
        }, null, _parent));
        _push(ssrRenderComponent(_component_ElButton, {
          type: "primary",
          round: "",
          onClick: back
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u8FD4\u56DE\u667A\u80FD\u4F53 `);
            } else {
              return [
                createTextVNode(" \u8FD4\u56DE\u667A\u80FD\u4F53 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital/chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chat = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3e566265"]]);

export { chat as default };
//# sourceMappingURL=chat-DrUfvPsP.mjs.map
