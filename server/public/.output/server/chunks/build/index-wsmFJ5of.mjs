import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { a5 as useAppStore, z as useUserStore, a as useRouter, A as feedback, d as ElButton } from './server.mjs';
import { E as ElWatermark } from './index-VIyJ-gCg.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2$1, b as __nuxt_component_4 } from './index-c3Av-r7B.mjs';
import { _ as _sfc_main$1 } from './index-DRyhljQ3.mjs';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { _ as __nuxt_component_1$1 } from './index-BS4hxwV8.mjs';
import { useSSRContext, defineComponent, ref, shallowRef, reactive, withAsyncContext, watch, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, withModifiers, withDirectives, vShow, nextTick } from 'vue';
import { u as useCopy } from './useCopy-CfS-iChu.mjs';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { u as useRenderAudioGraph, a as useRecorder } from './useRecorder-K_rLcXyS.mjs';
import { u as useAudioPlay } from './useAudioPlay-C6V9947w.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { useDark, useElementSize, watchThrottled } from '@vueuse/core';
import { g as getRobotDetail, c as chatFeedBack, a as getRobotChatRecord, b as clearRobotChatRecord, r as robotChat, v as voiceTransfer, d as voiceGenerate } from './robot-BsB_E1H2.mjs';
import { u as useRobotStore } from './robot-yG1zBFXI.mjs';
import { P as Popup } from './index-BKj4TrcW.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    robotId: {},
    squareId: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const isDark = useDark();
    const appStore = useAppStore();
    const userStore = useUserStore();
    const robotStore = useRobotStore();
    const chatType = ref(
      1
      /* TEXT */
    );
    const { copy } = useCopy();
    const popupRef = shallowRef();
    const feedbackParams = reactive({
      _index: -1,
      robot_id: props.robotId,
      record_id: -1,
      content: ""
    });
    const openFeedBackPop = (row, index) => {
      var _a;
      feedbackParams.record_id = row.id;
      feedbackParams._index = index;
      (_a = popupRef.value) == null ? void 0 : _a.open();
    };
    const handleFeedBack = async () => {
      var _a;
      try {
        await chatFeedBack(feedbackParams);
        (_a = popupRef.value) == null ? void 0 : _a.close();
        feedbackParams.content = "";
        chatList.value[feedbackParams._index].is_feedback = 1;
      } catch (error) {
        console.log("\u53CD\u9988\u63D0\u4EA4\u5931\u8D25-->", error);
      }
    };
    const getSession = async () => {
      if (!props.squareId) {
        await robotStore.getSessionLists();
        robotStore.setSessionSelect();
      } else {
        return [];
      }
    };
    [__temp, __restore] = withAsyncContext(() => useAsyncData(() => getSession(), {
      lazy: true
    }, "$kMIVzocZNF")), await __temp, __restore();
    const chatList = ref([]);
    const router = useRouter();
    let lastPlayId = 0;
    const getChatList = async () => {
      if (!robotStore.sessionId && !props.squareId) return [];
      const data = await getRobotChatRecord({
        square_id: props.squareId,
        category_id: robotStore.sessionId,
        robot_id: props.robotId,
        page_size: 25e3
      });
      chatList.value = data.lists || [];
      if (chatType.value === 2 && chatStatus.value == 3) {
        const last = chatList.value[chatList.value.length - 1];
        if (last && last.id !== lastPlayId) {
          lastPlayId = last.id;
          playRecord(lastPlayId);
        }
      }
    };
    [__temp, __restore] = withAsyncContext(() => useAsyncData(() => getChatList(), {
      lazy: true
    }, "$RvfqdxlKCY")), await __temp, __restore();
    const { data: appInfo, refresh: getDetail } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => getRobotDetail({
        id: props.robotId
      }),
      {
        default() {
          return {};
        },
        lazy: true
      },
      "$atbZEM2Qb5"
    )), __temp = await __temp, __restore(), __temp);
    watch(
      () => props.robotId,
      () => {
        getDetail();
      }
    );
    const clearChatRecord = async () => {
      if (!userStore.isLogin) return userStore.toggleShowLogin();
      if (!robotStore.sessionId && !props.squareId) return;
      await feedback.confirm("\u786E\u5B9A\u6E05\u7A7A\u8BB0\u5F55\uFF1F");
      await clearRobotChatRecord({
        square_id: props.squareId,
        category_id: robotStore.sessionId,
        robot_id: props.robotId
      });
      getChatList();
    };
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
    let isSessionAdd = false;
    const relatedIssuesArr = ref([]);
    const chat = async (value, type = "input") => {
      var _a;
      if (!userStore.isLogin) return userStore.toggleShowLogin();
      if (!value) return feedback.msgError("\u8BF7\u8F93\u5165\u95EE\u9898");
      if (isReceiving.value) return;
      if (!props.robotId) return;
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
      if (!props.squareId) {
        if (!robotStore.sessionId) {
          isSessionAdd = true;
          await robotStore.sessionAdd();
          isSessionAdd = false;
        }
        if (robotStore.getCurrentSession.name === "\u65B0\u7684\u4F1A\u8BDD") {
          await robotStore.sessionEdit({
            id: robotStore.sessionId,
            name: value
          });
        }
      }
      sseInstance = robotChat({
        square_id: props.squareId,
        cate_id: robotStore.sessionId,
        robot_id: props.robotId,
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
      sseInstance.addEventListener("question", ({ data: dataJson }) => {
        relatedIssuesArr.value = JSON.parse(dataJson.data);
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
      sseInstance.addEventListener("video", ({ data: dataJson }) => {
        try {
          const urls = JSON.parse(dataJson.data);
          currentChat.videos = urls;
        } catch (error) {
          console.error(error);
        }
      });
      sseInstance.addEventListener("close", async () => {
        await userStore.getUser();
        setTimeout(async () => {
          await getChatList();
          currentChat.typing = false;
          isReceiving.value = false;
          await nextTick();
          scrollToBottom();
        }, 500);
      });
      sseInstance.addEventListener("error", async (ev) => {
        var _a2, _b;
        isAutoOpen.value && changeChatStatus(
          2
          /* RECORDING */
        );
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
    const containerRef = shallowRef();
    const { height: containerHeight, width: containerWidth } = useElementSize(containerRef);
    const isVertical = computed(() => {
      if (containerWidth.value / containerHeight.value > 1) {
        return false;
      }
      return true;
    });
    const removeSse = () => {
      sseInstance == null ? void 0 : sseInstance.removeEventListener("close");
      sseInstance == null ? void 0 : sseInstance.removeEventListener("chat");
      sseInstance == null ? void 0 : sseInstance.removeEventListener("error");
      sseInstance == null ? void 0 : sseInstance.abort();
      isReceiving.value = false;
    };
    watch(
      () => robotStore.sessionId,
      async (value) => {
        if (value && !isSessionAdd) {
          removeSse();
          await getChatList();
          scrollToBottom();
        }
      },
      {
        immediate: true
      }
    );
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
    const changeChatStatus = (status) => {
      if (chatType.value === 2) {
        chatStatus.value = status;
      }
    };
    const isAutoStop = ref(false);
    const startTimer = ref(0);
    const hasVoice = ref(false);
    const recordTimer = ref(0);
    const idleReplyTimer = ref(0);
    const canvasOptions = reactive({
      id: "audio-canvas",
      width: 100,
      height: 40,
      minHeight: 5,
      scale: 2
    });
    const { render, stopRender, draw } = useRenderAudioGraph(canvasOptions);
    const { start, stop, isRecording, authorize, close, isOpen } = useRecorder({
      onstart() {
        hasVoice.value = false;
        startTimer.value = Date.now();
      },
      async onstop(result) {
        stopRender();
        draw(new Float64Array(new Array(128).fill(0)), 0);
        if (!isAutoStop.value) {
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
            isAutoOpen.value && changeChatStatus(
              2
              /* RECORDING */
            );
            return;
          }
          chat(res.text, "voice");
        } catch (error) {
          isAutoOpen.value && changeChatStatus(
            2
            /* RECORDING */
          );
        }
      },
      ondata(result) {
        render(result);
        const now = Date.now();
        if (result.powerLevel > 15) {
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
        if (now - startTimer.value >= 5e3) {
          if (!hasVoice.value) ;
        }
      }
    });
    const createIdleReplyTimer = () => {
      var _a;
      idleReplyTimer.value = setTimeout(() => {
        playIdleReply();
      }, ((_a = appInfo.value.digital) == null ? void 0 : _a.idle_time) * 1e3 || 0);
    };
    const { play, pause, audioPlaying } = useAudioPlay({
      onstart() {
        chatStatus.value = 4;
        if (isPlayIdleReply.value) {
          isPlayIdleReply.value = false;
          stop();
        }
      },
      onstop() {
        createIdleReplyTimer();
        if (!isAutoOpen.value) {
          changeChatStatus(
            1
            /* DEFAULT */
          );
        } else {
          changeChatStatus(
            2
            /* RECORDING */
          );
        }
      },
      onerror() {
        changeChatStatus(
          1
          /* DEFAULT */
        );
      }
    });
    const getFile = async (params) => {
      const { url } = await voiceGenerate(params);
      return url;
    };
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
      if (isRecording.value || chatType.value !== 2) {
        return;
      }
      start();
      return;
    };
    const isAutoOpen = ref(true);
    const changeRecorder = async () => {
      if ([
        4,
        3
        /* THINKING */
      ].includes(chatStatus.value)) {
        return;
      }
      if (isRecording.value) {
        isAutoOpen.value = false;
        stop();
        changeChatStatus(
          1
          /* DEFAULT */
        );
      } else {
        isAutoOpen.value = true;
        changeChatStatus(
          2
          /* RECORDING */
        );
      }
    };
    const file = ref("");
    const isPlayIdleReply = ref(false);
    const playIdleReply = async () => {
      if (chatType.value !== 2) {
        return Promise.reject();
      }
      if (!appInfo.value.is_digital || !appInfo.value.digital_id || appInfo.value.is_disable) {
        return Promise.reject();
      }
      if (!file.value) {
        file.value = await getFile({
          type: 3,
          record_id: appInfo.value.id
        });
      }
      if (!file.value) return Promise.reject();
      isPlayIdleReply.value = true;
      const key = Date.now();
      chatList.value.push({
        type: 2,
        typing: false,
        content: appInfo.value.digital.idle_reply,
        key
      });
      await nextTick();
      scrollToBottom();
      play(file.value, false);
    };
    watch(chatStatus, (value) => {
      switch (value) {
        case 2: {
          startRecord();
        }
      }
    });
    watch(
      () => props.robotId,
      async (value) => {
        removeSse();
        robotStore.setRobotId(value);
        await getChatList();
        scrollToBottom();
        await getSession();
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ElButton = ElButton;
      const _component_el_watermark = ElWatermark;
      const _component_TheChatMsgItem = __nuxt_component_1;
      const _component_Markdown = _sfc_main$1;
      const _component_TheChatMsgContent = __nuxt_component_2$1;
      const _component_Icon = _sfc_main$2;
      const _component_TheChatAction = __nuxt_component_4;
      const _component_LTextarea = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col" }, _attrs))} data-v-9289f797><div class="flex items-center p-4 px-[40px] border-b border-solid border-br-light" data-v-9289f797><img class="flex-none w-[40px] h-[40px] rounded-full"${ssrRenderAttr("src", unref(appInfo).image)} alt="" data-v-9289f797><div class="ml-[15px]" data-v-9289f797><div class="flex items-center" data-v-9289f797><div class="text-2xl line-clamp-1" data-v-9289f797>${ssrInterpolate(unref(appInfo).name)}</div>`);
      if (!_ctx.squareId) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/application/layout/robot",
          class: "ml-[10px]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElButton, {
                type: "info",
                round: "",
                text: "",
                bg: "",
                style: { "border": "none", "--el-button-hover-text-color": "var(\n                                    --el-color-info\n                                )" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u5207\u6362\u667A\u80FD\u4F53 `);
                  } else {
                    return [
                      createTextVNode(" \u5207\u6362\u667A\u80FD\u4F53 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ElButton, {
                  type: "info",
                  round: "",
                  text: "",
                  bg: "",
                  style: { "border": "none", "--el-button-hover-text-color": "var(\n                                    --el-color-info\n                                )" }
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u5207\u6362\u667A\u80FD\u4F53 ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="text-tx-secondary mt-[4px] line-clamp-2" data-v-9289f797>${ssrInterpolate(unref(appInfo).intro)}</div></div></div>`);
      _push(ssrRenderComponent(_component_el_watermark, {
        class: "flex-1 min-h-0",
        content: unref(appStore).getChatConfig.watermark,
        font: {
          color: unref(isDark) ? "rgba(256,256,256,0.08)" : "rgba(0,0,0,0.06)",
          fontSize: 12
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(`<div class="h-full flex flex-col rounded relative" style="${ssrRenderStyle({
              background: unref(chatType) == 2 ? unref(appInfo).digital_bg : ""
            })}" data-v-9289f797${_scopeId}><div class="absolute top-0 left-0 w-full h-full flex flex-col z-10" data-v-9289f797${_scopeId}><div class="flex-1 min-h-0" data-v-9289f797${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ElScrollbar), {
              ref_key: "scrollbarRef",
              ref: scrollbarRef
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="py-4 px-8" data-v-9289f797${_scopeId2}><div data-v-9289f797${_scopeId2}>`);
                  if (unref(appInfo).welcome_introducer) {
                    _push3(ssrRenderComponent(_component_TheChatMsgItem, {
                      class: ["mb-[20px]", {
                        "opacity-70": unref(chatType) === 2
                        /* DIGITAL */
                      }],
                      type: "left",
                      bg: "var(--el-bg-color-page)",
                      avatar: unref(appInfo).icons ? unref(appInfo).icons : unref(appInfo).image
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Markdown, {
                            content: unref(appInfo).welcome_introducer,
                            onClickCustomLink: ($event) => chat($event, "link")
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Markdown, {
                              content: unref(appInfo).welcome_introducer,
                              onClickCustomLink: ($event) => chat($event, "link")
                            }, null, 8, ["content", "onClickCustomLink"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(chatList), (item, index) => {
                    _push3(`<div class="mt-4 sm:pb-[20px]" data-v-9289f797${_scopeId2}>`);
                    if (item.type == 1) {
                      _push3(ssrRenderComponent(_component_TheChatMsgItem, {
                        type: "right",
                        avatar: unref(userStore).userInfo.avatar,
                        color: "white",
                        class: {
                          "opacity-70": unref(chatType) === 2
                          /* DIGITAL */
                        }
                      }, {
                        actions: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="my-[5px]" data-v-9289f797${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_ElButton, {
                              link: "",
                              type: "info",
                              onClick: ($event) => unref(copy)(item.content)
                            }, {
                              icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, { name: "el-icon-CopyDocument" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, { name: "el-icon-CopyDocument" })
                                  ];
                                }
                              }),
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` \u590D\u5236 `);
                                } else {
                                  return [
                                    createTextVNode(" \u590D\u5236 ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            return [
                              createVNode("div", { class: "my-[5px]" }, [
                                createVNode(_component_ElButton, {
                                  link: "",
                                  type: "info",
                                  onClick: ($event) => unref(copy)(item.content)
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
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_TheChatMsgContent, {
                              content: String(item.content)
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_TheChatMsgContent, {
                                content: String(item.content)
                              }, null, 8, ["content"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (item.type == 2) {
                      _push3(ssrRenderComponent(_component_TheChatMsgItem, {
                        type: "left",
                        time: item.create_time,
                        avatar: unref(appInfo).icons ? unref(appInfo).icons : unref(appInfo).image,
                        bg: "var(--el-bg-color-page)",
                        class: {
                          "opacity-70": unref(chatType) === 2
                          /* DIGITAL */
                        },
                        modelName: item.model
                      }, {
                        outer_actions: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            if (item.create_time) {
                              _push4(ssrRenderComponent(_component_ElButton, {
                                class: "ml-[52px] mt-2",
                                style: { "--el-button-border-color": "transparent", "--el-color-info-light-8": "transparent" },
                                type: item.is_feedback ? "info" : "primary",
                                plain: true,
                                bg: "",
                                size: "small",
                                disabled: item.is_feedback,
                                onClick: ($event) => openFeedBackPop(
                                  item,
                                  index
                                )
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(item.is_feedback ? "\u5DF2\u53CD\u9988" : "\u53CD\u9988")}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(item.is_feedback ? "\u5DF2\u53CD\u9988" : "\u53CD\u9988"), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            if (index === unref(chatList).length - 1 && !unref(isReceiving)) {
                              _push4(`<div class="flex flex-col" style="${ssrRenderStyle({ "margin-left": "52px" })}" data-v-9289f797${_scopeId3}><!--[-->`);
                              ssrRenderList(unref(relatedIssuesArr).length ? unref(relatedIssuesArr) : item.correlation, (text, textIndex) => {
                                _push4(`<div class="inline-flex items-center rounded-[12px] bg-page cursor-pointer mt-[10px] hover:bg-primary-light-9" style="${ssrRenderStyle({ "padding": "8px 12px", "width": "fit-content" })}" data-v-9289f797${_scopeId3}><span class="mr-2 text-tx-primary" data-v-9289f797${_scopeId3}>${ssrInterpolate(text)}</span>`);
                                _push4(ssrRenderComponent(_component_Icon, {
                                  name: "el-icon-Right",
                                  color: "#999",
                                  size: "20"
                                }, null, _parent4, _scopeId3));
                                _push4(`</div>`);
                              });
                              _push4(`<!--]--></div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                          } else {
                            return [
                              item.create_time ? (openBlock(), createBlock(_component_ElButton, {
                                key: 0,
                                class: "ml-[52px] mt-2",
                                style: { "--el-button-border-color": "transparent", "--el-color-info-light-8": "transparent" },
                                type: item.is_feedback ? "info" : "primary",
                                plain: true,
                                bg: "",
                                size: "small",
                                disabled: item.is_feedback,
                                onClick: ($event) => openFeedBackPop(
                                  item,
                                  index
                                )
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.is_feedback ? "\u5DF2\u53CD\u9988" : "\u53CD\u9988"), 1)
                                ]),
                                _: 2
                              }, 1032, ["type", "disabled", "onClick"])) : createCommentVNode("", true),
                              index === unref(chatList).length - 1 && !unref(isReceiving) ? (openBlock(), createBlock("div", {
                                key: 1,
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
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_TheChatMsgContent, {
                              content: String(item.content),
                              type: "html",
                              typing: item.typing,
                              "line-numbers": !unref(appStore).isMobile,
                              "show-copy": "",
                              "show-context": !!unref(appInfo).is_show_context,
                              "show-quote": !!unref(appInfo).is_show_quote,
                              "show-voice": unref(appStore).getIsVoiceOpen,
                              context: item.context,
                              "show-poster": "",
                              "record-list": unref(chatList),
                              quotes: item.quotes,
                              images: item.images,
                              files: item.files,
                              videos: item.videos,
                              "record-id": item.id,
                              "record-type": 2
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_TheChatMsgContent, {
                                content: String(item.content),
                                type: "html",
                                typing: item.typing,
                                "line-numbers": !unref(appStore).isMobile,
                                "show-copy": "",
                                "show-context": !!unref(appInfo).is_show_context,
                                "show-quote": !!unref(appInfo).is_show_quote,
                                "show-voice": unref(appStore).getIsVoiceOpen,
                                context: item.context,
                                "show-poster": "",
                                "record-list": unref(chatList),
                                quotes: item.quotes,
                                images: item.images,
                                files: item.files,
                                videos: item.videos,
                                "record-id": item.id,
                                "record-type": 2
                              }, null, 8, ["content", "typing", "line-numbers", "show-context", "show-quote", "show-voice", "context", "record-list", "quotes", "images", "files", "videos", "record-id"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "py-4 px-8" }, [
                      createVNode("div", {
                        ref_key: "innerRef",
                        ref: innerRef
                      }, [
                        unref(appInfo).welcome_introducer ? (openBlock(), createBlock(_component_TheChatMsgItem, {
                          key: 0,
                          class: ["mb-[20px]", {
                            "opacity-70": unref(chatType) === 2
                            /* DIGITAL */
                          }],
                          type: "left",
                          bg: "var(--el-bg-color-page)",
                          avatar: unref(appInfo).icons ? unref(appInfo).icons : unref(appInfo).image
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Markdown, {
                              content: unref(appInfo).welcome_introducer,
                              onClickCustomLink: ($event) => chat($event, "link")
                            }, null, 8, ["content", "onClickCustomLink"])
                          ]),
                          _: 1
                        }, 8, ["avatar", "class"])) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(chatList), (item, index) => {
                          return openBlock(), createBlock("div", {
                            key: item.id + "" + index,
                            class: "mt-4 sm:pb-[20px]"
                          }, [
                            item.type == 1 ? (openBlock(), createBlock(_component_TheChatMsgItem, {
                              key: 0,
                              type: "right",
                              avatar: unref(userStore).userInfo.avatar,
                              color: "white",
                              class: {
                                "opacity-70": unref(chatType) === 2
                                /* DIGITAL */
                              }
                            }, {
                              actions: withCtx(() => [
                                createVNode("div", { class: "my-[5px]" }, [
                                  createVNode(_component_ElButton, {
                                    link: "",
                                    type: "info",
                                    onClick: ($event) => unref(copy)(item.content)
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
                                  content: String(item.content)
                                }, null, 8, ["content"])
                              ]),
                              _: 2
                            }, 1032, ["avatar", "class"])) : createCommentVNode("", true),
                            item.type == 2 ? (openBlock(), createBlock(_component_TheChatMsgItem, {
                              key: 1,
                              type: "left",
                              time: item.create_time,
                              avatar: unref(appInfo).icons ? unref(appInfo).icons : unref(appInfo).image,
                              bg: "var(--el-bg-color-page)",
                              class: {
                                "opacity-70": unref(chatType) === 2
                                /* DIGITAL */
                              },
                              modelName: item.model
                            }, {
                              outer_actions: withCtx(() => [
                                item.create_time ? (openBlock(), createBlock(_component_ElButton, {
                                  key: 0,
                                  class: "ml-[52px] mt-2",
                                  style: { "--el-button-border-color": "transparent", "--el-color-info-light-8": "transparent" },
                                  type: item.is_feedback ? "info" : "primary",
                                  plain: true,
                                  bg: "",
                                  size: "small",
                                  disabled: item.is_feedback,
                                  onClick: ($event) => openFeedBackPop(
                                    item,
                                    index
                                  )
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.is_feedback ? "\u5DF2\u53CD\u9988" : "\u53CD\u9988"), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["type", "disabled", "onClick"])) : createCommentVNode("", true),
                                index === unref(chatList).length - 1 && !unref(isReceiving) ? (openBlock(), createBlock("div", {
                                  key: 1,
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
                                createVNode(_component_TheChatMsgContent, {
                                  content: String(item.content),
                                  type: "html",
                                  typing: item.typing,
                                  "line-numbers": !unref(appStore).isMobile,
                                  "show-copy": "",
                                  "show-context": !!unref(appInfo).is_show_context,
                                  "show-quote": !!unref(appInfo).is_show_quote,
                                  "show-voice": unref(appStore).getIsVoiceOpen,
                                  context: item.context,
                                  "show-poster": "",
                                  "record-list": unref(chatList),
                                  quotes: item.quotes,
                                  images: item.images,
                                  files: item.files,
                                  videos: item.videos,
                                  "record-id": item.id,
                                  "record-type": 2
                                }, null, 8, ["content", "typing", "line-numbers", "show-context", "show-quote", "show-voice", "context", "record-list", "quotes", "images", "files", "videos", "record-id"])
                              ]),
                              _: 2
                            }, 1032, ["time", "avatar", "class", "modelName"])) : createCommentVNode("", true)
                          ]);
                        }), 128))
                      ], 512)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div style="${ssrRenderStyle(unref(chatType) == 2 ? null : { display: "none" })}" class="flex flex-col justify-center items-center" data-v-9289f797${_scopeId}><canvas style="${ssrRenderStyle({
              width: `${unref(canvasOptions).width}px`,
              height: `${unref(canvasOptions).height}px`
            })}"${ssrRenderAttr("width", unref(canvasOptions).width * unref(canvasOptions).scale)}${ssrRenderAttr("height", unref(canvasOptions).height * unref(canvasOptions).scale)}${ssrRenderAttr("id", unref(canvasOptions).id)} data-v-9289f797${_scopeId}></canvas><div class="text-xs text-white" data-v-9289f797${_scopeId}><div data-v-9289f797${_scopeId}>${ssrInterpolate(unref(statusToTextMap)[unref(chatStatus)])}</div></div></div><div class="px-[30px]" data-v-9289f797${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TheChatAction, {
              ref_key: "chatActionRef",
              ref: chatActionRef,
              loading: unref(isReceiving) || unref(chatStatus) === 3,
              "show-manual": !!unref(appInfo).is_artificial,
              "btn-color": unref(isDark) ? "#333" : "#f6f6f6",
              onEnter: chat,
              onClear: clearChatRecord,
              onPause: ($event) => {
                var _a2;
                return (_a2 = unref(sseInstance)) == null ? void 0 : _a2.abort();
              },
              onFocus: inputFocus,
              menus: unref(appInfo).menus
            }, {
              btn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(appInfo).is_digital) {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      target: "_blank",
                      to: {
                        path: "/digital/chat",
                        query: {
                          id: _ctx.robotId,
                          squareId: _ctx.squareId,
                          cateId: unref(robotStore).sessionId
                        }
                      },
                      class: "flex items-center mr-[10px]"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ElButton, {
                            type: "primary",
                            round: "",
                            plain: ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u5F62\u8C61\u5BF9\u8BDD`);
                              } else {
                                return [
                                  createTextVNode(" \u5F62\u8C61\u5BF9\u8BDD")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ElButton, {
                              type: "primary",
                              round: "",
                              plain: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u5F62\u8C61\u5BF9\u8BDD")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(appInfo).is_digital ? (openBlock(), createBlock(_component_NuxtLink, {
                      key: 0,
                      target: "_blank",
                      to: {
                        path: "/digital/chat",
                        query: {
                          id: _ctx.robotId,
                          squareId: _ctx.squareId,
                          cateId: unref(robotStore).sessionId
                        }
                      },
                      class: "flex items-center mr-[10px]"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElButton, {
                          type: "primary",
                          round: "",
                          plain: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u5F62\u8C61\u5BF9\u8BDD")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["to"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(chatType) == 2) {
              _push2(`<div class="${ssrRenderClass([{
                "recorder--stop": !unref(isRecording)
              }, "recorder"])}" data-v-9289f797${_scopeId}>`);
              if (unref(isRecording)) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "el-icon-Microphone",
                  size: 40
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "el-icon-Mute",
                  size: 40
                }, null, _parent2, _scopeId));
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="absolute top-0 left-0 w-full h-full flex justify-center items-center" style="${ssrRenderStyle(unref(chatType) == 2 ? null : { display: "none" })}" data-v-9289f797${_scopeId}><video style="${ssrRenderStyle(!unref(audioPlaying) ? null : { display: "none" })}" class="h-full w-full object-scale-down"${ssrRenderAttr(
              "src",
              unref(isVertical) ? (_a = unref(appInfo).digital) == null ? void 0 : _a.vertical_stay_video : (_b = unref(appInfo).digital) == null ? void 0 : _b.wide_stay_video
            )} autoplay muted loop data-v-9289f797${_scopeId}></video><video style="${ssrRenderStyle(unref(audioPlaying) ? null : { display: "none" })}" class="h-full w-full object-scale-down"${ssrRenderAttr(
              "src",
              unref(isVertical) ? (_c = unref(appInfo).digital) == null ? void 0 : _c.vertical_talk_video : (_d = unref(appInfo).digital) == null ? void 0 : _d.wide_talk_video
            )} autoplay muted loop data-v-9289f797${_scopeId}></video></div></div>`);
          } else {
            return [
              createVNode("div", {
                ref_key: "containerRef",
                ref: containerRef,
                class: "h-full flex flex-col rounded relative",
                style: {
                  background: unref(chatType) == 2 ? unref(appInfo).digital_bg : ""
                }
              }, [
                createVNode("div", { class: "absolute top-0 left-0 w-full h-full flex flex-col z-10" }, [
                  createVNode("div", { class: "flex-1 min-h-0" }, [
                    createVNode(unref(ElScrollbar), {
                      ref_key: "scrollbarRef",
                      ref: scrollbarRef
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "py-4 px-8" }, [
                          createVNode("div", {
                            ref_key: "innerRef",
                            ref: innerRef
                          }, [
                            unref(appInfo).welcome_introducer ? (openBlock(), createBlock(_component_TheChatMsgItem, {
                              key: 0,
                              class: ["mb-[20px]", {
                                "opacity-70": unref(chatType) === 2
                                /* DIGITAL */
                              }],
                              type: "left",
                              bg: "var(--el-bg-color-page)",
                              avatar: unref(appInfo).icons ? unref(appInfo).icons : unref(appInfo).image
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Markdown, {
                                  content: unref(appInfo).welcome_introducer,
                                  onClickCustomLink: ($event) => chat($event, "link")
                                }, null, 8, ["content", "onClickCustomLink"])
                              ]),
                              _: 1
                            }, 8, ["avatar", "class"])) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(chatList), (item, index) => {
                              return openBlock(), createBlock("div", {
                                key: item.id + "" + index,
                                class: "mt-4 sm:pb-[20px]"
                              }, [
                                item.type == 1 ? (openBlock(), createBlock(_component_TheChatMsgItem, {
                                  key: 0,
                                  type: "right",
                                  avatar: unref(userStore).userInfo.avatar,
                                  color: "white",
                                  class: {
                                    "opacity-70": unref(chatType) === 2
                                    /* DIGITAL */
                                  }
                                }, {
                                  actions: withCtx(() => [
                                    createVNode("div", { class: "my-[5px]" }, [
                                      createVNode(_component_ElButton, {
                                        link: "",
                                        type: "info",
                                        onClick: ($event) => unref(copy)(item.content)
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
                                      content: String(item.content)
                                    }, null, 8, ["content"])
                                  ]),
                                  _: 2
                                }, 1032, ["avatar", "class"])) : createCommentVNode("", true),
                                item.type == 2 ? (openBlock(), createBlock(_component_TheChatMsgItem, {
                                  key: 1,
                                  type: "left",
                                  time: item.create_time,
                                  avatar: unref(appInfo).icons ? unref(appInfo).icons : unref(appInfo).image,
                                  bg: "var(--el-bg-color-page)",
                                  class: {
                                    "opacity-70": unref(chatType) === 2
                                    /* DIGITAL */
                                  },
                                  modelName: item.model
                                }, {
                                  outer_actions: withCtx(() => [
                                    item.create_time ? (openBlock(), createBlock(_component_ElButton, {
                                      key: 0,
                                      class: "ml-[52px] mt-2",
                                      style: { "--el-button-border-color": "transparent", "--el-color-info-light-8": "transparent" },
                                      type: item.is_feedback ? "info" : "primary",
                                      plain: true,
                                      bg: "",
                                      size: "small",
                                      disabled: item.is_feedback,
                                      onClick: ($event) => openFeedBackPop(
                                        item,
                                        index
                                      )
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.is_feedback ? "\u5DF2\u53CD\u9988" : "\u53CD\u9988"), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["type", "disabled", "onClick"])) : createCommentVNode("", true),
                                    index === unref(chatList).length - 1 && !unref(isReceiving) ? (openBlock(), createBlock("div", {
                                      key: 1,
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
                                    createVNode(_component_TheChatMsgContent, {
                                      content: String(item.content),
                                      type: "html",
                                      typing: item.typing,
                                      "line-numbers": !unref(appStore).isMobile,
                                      "show-copy": "",
                                      "show-context": !!unref(appInfo).is_show_context,
                                      "show-quote": !!unref(appInfo).is_show_quote,
                                      "show-voice": unref(appStore).getIsVoiceOpen,
                                      context: item.context,
                                      "show-poster": "",
                                      "record-list": unref(chatList),
                                      quotes: item.quotes,
                                      images: item.images,
                                      files: item.files,
                                      videos: item.videos,
                                      "record-id": item.id,
                                      "record-type": 2
                                    }, null, 8, ["content", "typing", "line-numbers", "show-context", "show-quote", "show-voice", "context", "record-list", "quotes", "images", "files", "videos", "record-id"])
                                  ]),
                                  _: 2
                                }, 1032, ["time", "avatar", "class", "modelName"])) : createCommentVNode("", true)
                              ]);
                            }), 128))
                          ], 512)
                        ])
                      ]),
                      _: 1
                    }, 512)
                  ]),
                  withDirectives(createVNode("div", { class: "flex flex-col justify-center items-center" }, [
                    createVNode("canvas", {
                      style: {
                        width: `${unref(canvasOptions).width}px`,
                        height: `${unref(canvasOptions).height}px`
                      },
                      width: unref(canvasOptions).width * unref(canvasOptions).scale,
                      height: unref(canvasOptions).height * unref(canvasOptions).scale,
                      id: unref(canvasOptions).id
                    }, null, 12, ["width", "height", "id"]),
                    createVNode("div", { class: "text-xs text-white" }, [
                      createVNode("div", null, toDisplayString(unref(statusToTextMap)[unref(chatStatus)]), 1)
                    ])
                  ], 512), [
                    [
                      vShow,
                      unref(chatType) == 2
                      /* DIGITAL */
                    ]
                  ]),
                  createVNode("div", { class: "px-[30px]" }, [
                    createVNode(_component_TheChatAction, {
                      ref_key: "chatActionRef",
                      ref: chatActionRef,
                      loading: unref(isReceiving) || unref(chatStatus) === 3,
                      "show-manual": !!unref(appInfo).is_artificial,
                      "btn-color": unref(isDark) ? "#333" : "#f6f6f6",
                      onEnter: chat,
                      onClear: clearChatRecord,
                      onPause: ($event) => {
                        var _a2;
                        return (_a2 = unref(sseInstance)) == null ? void 0 : _a2.abort();
                      },
                      onFocus: inputFocus,
                      menus: unref(appInfo).menus
                    }, {
                      btn: withCtx(() => [
                        unref(appInfo).is_digital ? (openBlock(), createBlock(_component_NuxtLink, {
                          key: 0,
                          target: "_blank",
                          to: {
                            path: "/digital/chat",
                            query: {
                              id: _ctx.robotId,
                              squareId: _ctx.squareId,
                              cateId: unref(robotStore).sessionId
                            }
                          },
                          class: "flex items-center mr-[10px]"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElButton, {
                              type: "primary",
                              round: "",
                              plain: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u5F62\u8C61\u5BF9\u8BDD")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["to"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["loading", "show-manual", "btn-color", "onPause", "menus"])
                  ]),
                  unref(chatType) == 2 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: ["recorder", {
                      "recorder--stop": !unref(isRecording)
                    }],
                    onClick: changeRecorder
                  }, [
                    unref(isRecording) ? (openBlock(), createBlock(_component_Icon, {
                      key: 0,
                      name: "el-icon-Microphone",
                      size: 40
                    })) : (openBlock(), createBlock(_component_Icon, {
                      key: 1,
                      name: "el-icon-Mute",
                      size: 40
                    }))
                  ], 2)) : createCommentVNode("", true)
                ]),
                withDirectives(createVNode("div", { class: "absolute top-0 left-0 w-full h-full flex justify-center items-center" }, [
                  withDirectives(createVNode("video", {
                    class: "h-full w-full object-scale-down",
                    src: unref(isVertical) ? (_e = unref(appInfo).digital) == null ? void 0 : _e.vertical_stay_video : (_f = unref(appInfo).digital) == null ? void 0 : _f.wide_stay_video,
                    autoplay: "",
                    muted: "",
                    loop: ""
                  }, null, 8, ["src"]), [
                    [vShow, !unref(audioPlaying)]
                  ]),
                  withDirectives(createVNode("video", {
                    class: "h-full w-full object-scale-down",
                    src: unref(isVertical) ? (_g = unref(appInfo).digital) == null ? void 0 : _g.vertical_talk_video : (_h = unref(appInfo).digital) == null ? void 0 : _h.wide_talk_video,
                    autoplay: "",
                    muted: "",
                    loop: ""
                  }, null, 8, ["src"]), [
                    [vShow, unref(audioPlaying)]
                  ])
                ], 512), [
                  [
                    vShow,
                    unref(chatType) == 2
                    /* DIGITAL */
                  ]
                ])
              ], 4)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Popup, {
        ref_key: "popupRef",
        ref: popupRef,
        async: true,
        title: "\u95EE\u9898\u53CD\u9988",
        appendToBody: false,
        class: "feedback-pop"
      }, {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-center mt-4" data-v-9289f797${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElButton, {
              type: "primary",
              onClick: handleFeedBack
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u63D0\u4EA4\u53CD\u9988 `);
                } else {
                  return [
                    createTextVNode(" \u63D0\u4EA4\u53CD\u9988 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-center mt-4" }, [
                createVNode(_component_ElButton, {
                  type: "primary",
                  onClick: handleFeedBack
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u63D0\u4EA4\u53CD\u9988 ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LTextarea, {
              modelValue: unref(feedbackParams).content,
              "onUpdate:modelValue": ($event) => unref(feedbackParams).content = $event,
              rows: "8",
              placeholder: "\u63CF\u8FF0\u4E00\u4E0B\u4F60\u9047\u5230\u4E86\u4EC0\u4E48\u95EE\u9898"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LTextarea, {
                modelValue: unref(feedbackParams).content,
                "onUpdate:modelValue": ($event) => unref(feedbackParams).content = $event,
                rows: "8",
                placeholder: "\u63CF\u8FF0\u4E00\u4E0B\u4F60\u9047\u5230\u4E86\u4EC0\u4E48\u95EE\u9898"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/the-chat/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9289f797"]]);

export { __nuxt_component_5 as _ };
//# sourceMappingURL=index-wsmFJ5of.mjs.map
