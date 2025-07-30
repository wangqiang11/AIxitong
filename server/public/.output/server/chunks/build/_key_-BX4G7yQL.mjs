import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { E as ElWatermark } from './index-VIyJ-gCg.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2$1, b as __nuxt_component_4 } from './index-c3Av-r7B.mjs';
import { _ as _sfc_main$2 } from './index-DRyhljQ3.mjs';
import { a5 as useAppStore, ag as useRoute, z as useUserStore, u as useHead, aL as AUTHORIZATION_KEY, A as feedback, d as ElButton } from './server.mjs';
import { _ as _sfc_main$3 } from './index-BoqjHllR.mjs';
import { _ as __nuxt_component_1$1 } from './index-BS4hxwV8.mjs';
import { u as useCopy } from './useCopy-CfS-iChu.mjs';
import { useSSRContext, defineComponent, shallowRef, ref, withAsyncContext, reactive, computed, watch, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, nextTick } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { u as useRenderAudioGraph, a as useRecorder } from './useRecorder-K_rLcXyS.mjs';
import { u as useAudioPlay } from './useAudioPlay-C6V9947w.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './loading-BBlOpNc6.mjs';
import { useWindowSize, useElementSize, watchThrottled, useLocalStorage } from '@vueuse/core';
import _sfc_main$1 from './login-SAVrBZnH.mjs';
import { C as getReleaseDetail, c as chatFeedBack, b as clearRobotChatRecord, r as robotChat, a as getRobotChatRecord, v as voiceTransfer, d as voiceGenerate } from './robot-BsB_E1H2.mjs';
import { P as Popup } from './index-BKj4TrcW.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
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
import './index-D7S5lb8a.mjs';
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
import './knowledge-DiYwGYtC.mjs';
import './chat-jd47avQj.mjs';
import './download-N0luyf1S.mjs';
import 'lodash-es';
import 'qrcode.vue';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import 'markdown-it';
import 'highlight.js';
import '@vscode/markdown-it-katex';
import 'vue-router';
import 'weixin-js-sdk';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import 'recorder-core/recorder.mp3.min.js';
import './index-DLL0sEcv.mjs';
import 'async-validator';

const user_avatar = "" + buildAssetsURL("user_avatar.B42E77Pp.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[key]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const appStore = useAppStore();
    const route = useRoute();
    const userStore = useUserStore();
    const { copy } = useCopy();
    const loginRef = shallowRef();
    const { key = "" } = route.params;
    const password = ref("");
    const { height: windowHeight, width: windowWidth } = useWindowSize();
    const { data: robotInfo } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => getReleaseDetail({
        apikey: key
      }),
      {
        default() {
          return {
            robot: {}
          };
        }
      },
      "$89nQiJhyNZ"
    )), __temp = await __temp, __restore(), __temp);
    const popupRef = shallowRef();
    const feedbackParams = reactive({
      _index: -1,
      robot_id: robotInfo.value.robot.id,
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
    const chatType = computed(() => {
      if (robotInfo.value.chat_type === 2) {
        if (robotInfo.value.robot.is_digital && robotInfo.value.digital.id && !robotInfo.value.digital.is_disable) {
          return 2;
        }
        return 1;
      }
      return 1;
    });
    if (appStore.isMobile && chatType.value === 2) {
      (void 0).location.replace(
        `/mobile/packages/pages/digital_chat/share_chat?key=${key}`
      );
    }
    const chatMenus = computed(
      () => {
        var _a;
        return ((_a = robotInfo.value.menus) == null ? void 0 : _a.map((keyword) => ({ keyword }))) || [];
      }
    );
    const checkNeedPwd = async () => {
      var _a;
      const pwd = useLocalStorage(AUTHORIZATION_KEY, {});
      password.value = pwd.value[key] || "";
      if (robotInfo.value.pwd && !password.value) {
        (_a = loginRef.value) == null ? void 0 : _a.open();
        return Promise.reject();
      }
    };
    const login = async (data) => {
      var _a;
      const pwd = useLocalStorage(AUTHORIZATION_KEY, {});
      password.value = data.password;
      pwd.value = Object.assign(pwd.value, {
        [key]: data.password
      });
      (_a = loginRef.value) == null ? void 0 : _a.close();
      init();
    };
    const logout = () => {
      const pwd = useLocalStorage(AUTHORIZATION_KEY, {});
      pwd.value = Object.assign(pwd.value, {
        [key]: ""
      });
    };
    const chatList = ref([]);
    let lastPlayId = 0;
    const getChatList = async () => {
      try {
        const data = await getRobotChatRecord(
          {
            share_apikey: key,
            identity: userStore.visitorId,
            page_size: 25e3
          },
          {
            password: password.value,
            authorization: key,
            identity: userStore.visitorId
          }
        );
        chatList.value = data.lists || [];
        setTimeout(() => {
          scrollToBottom();
        });
        if (chatType.value === 2 && chatStatus.value == 3) {
          const last = chatList.value[chatList.value.length - 1];
          if (last && last.id !== lastPlayId) {
            lastPlayId = last.id;
            playRecord(lastPlayId);
          }
        }
      } catch (error) {
        if (error == "\u8BBF\u95EE\u5BC6\u7801\u9519\u8BEF!") {
          logout();
          await checkNeedPwd();
        }
        return Promise.reject();
      }
    };
    const clearChatRecord = async () => {
      await checkNeedPwd();
      await feedback.confirm("\u786E\u5B9A\u6E05\u7A7A\u8BB0\u5F55\uFF1F");
      await clearRobotChatRecord(
        {},
        {
          password: password.value,
          authorization: key,
          identity: userStore.visitorId
        }
      );
      getChatList();
    };
    let sseInstance = null;
    const isReceiving = ref(false);
    const chatActionRef = shallowRef();
    const chat = async (value, type = "input") => {
      var _a;
      await userStore.getFingerprint();
      await checkNeedPwd();
      if (!value) return feedback.msgError("\u8BF7\u8F93\u5165\u95EE\u9898");
      if (isReceiving.value) return;
      isReceiving.value = true;
      changeChatStatus(
        3
        /* THINKING */
      );
      const chatKey = Date.now();
      chatList.value.push({
        type: 1,
        content: value
      });
      chatList.value.push({
        type: 2,
        typing: true,
        content: "",
        key: chatKey
      });
      (_a = chatActionRef.value) == null ? void 0 : _a.setInputValue();
      const currentChat = chatList.value.find((item) => item.key === chatKey);
      sseInstance = robotChat(
        {
          question: value,
          stream: true
        },
        {
          password: password.value,
          authorization: key,
          identity: userStore.visitorId
        }
      );
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
      sseInstance.addEventListener("video", ({ data: dataJson }) => {
        try {
          const urls = JSON.parse(dataJson.data);
          currentChat.videos = urls;
        } catch (error) {
          console.error(error);
        }
      });
      sseInstance.addEventListener("close", () => {
        setTimeout(async () => {
          await getChatList();
          currentChat.typing = false;
          isReceiving.value = false;
          scrollToBottom();
        }, 600);
      });
      sseInstance.addEventListener("error", (ev) => {
        var _a2, _b, _c;
        changeChatStatus(
          1
          /* DEFAULT */
        );
        if (ev.errorType === "connectError") {
          feedback.msgError("\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
        }
        if (((_a2 = ev.data) == null ? void 0 : _a2.code) === 1200) {
          feedback.msgError((_b = ev.data) == null ? void 0 : _b.message);
          logout();
          setTimeout(() => {
            checkNeedPwd();
          }, 10);
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
    const idleReplyTimer = ref();
    const isAutoOpen = ref(true);
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
          chat(res.text, "voice");
        } catch (error) {
          isAutoOpen.value && startRecord();
        }
      },
      async ondata(result) {
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
      await authorize();
      start();
      return;
    };
    const getFile = async (params) => {
      try {
        const { url } = await voiceGenerate(params, {
          password: password.value,
          authorization: key,
          identity: userStore.visitorId
        });
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
      if (!robotInfo.value.robot.is_digital || !robotInfo.value.digital.id) {
        return Promise.reject();
      }
      if (!file.value) {
        file.value = await getFile({
          type: 3,
          record_id: robotInfo.value.robot.id
        });
      }
      if (!file.value) return Promise.reject();
      isPlayIdleReply.value = true;
      const key2 = Date.now();
      chatList.value.push({
        type: 2,
        typing: false,
        content: robotInfo.value.digital.idle_reply,
        key: key2
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
    shallowRef();
    const canvasRef = shallowRef();
    const { width, height: cHeight } = useWindowSize();
    const stayVideo = shallowRef();
    const talkVideo = shallowRef();
    const loadVideo = async (src) => {
      return new Promise((resolve, reject) => {
        const video = (void 0).createElement("video");
        video.src = src;
        video.preload = "auto";
        video.loop = true;
        video.muted = true;
        video.autoplay = false;
        video.playsInline = true;
        video.play();
        video.addEventListener("loadedmetadata", (e) => {
          video.width = video.videoWidth;
          video.height = video.videoHeight;
          resolve(video);
        });
        video.addEventListener("error", (e) => {
          reject(e);
        });
        video.addEventListener("play", (e) => {
          playVideo();
        });
      });
    };
    const playVideo = () => {
      if (!canvasRef.value) return;
      const w = width.value * 2;
      const h = cHeight.value * 2;
      const ctx = canvasRef.value.getContext("2d");
      if (!ctx) return;
      const video = chatStatus.value === 4 ? talkVideo.value : stayVideo.value;
      if (!video) return;
      ctx.clearRect(0, 0, w, h);
      const { videoHeight, videoWidth } = video;
      let cx = 0;
      let cy = 0;
      let cw = videoWidth;
      let ch = videoHeight;
      if (videoWidth / videoHeight >= w / h) {
        const sW = w * videoHeight / h;
        cx = (videoWidth - sW) / 2;
        cw = sW;
      } else {
        const sH = h * videoWidth / w;
        cy = (videoHeight - sH) / 2;
        ch = sH;
      }
      ctx.drawImage(video, cx, cy, cw, ch, 0, 0, w, h);
      requestAnimationFrame(playVideo);
    };
    const init = async () => {
      await getChatList();
      if (chatType.value == 2) {
        stayVideo.value = await loadVideo(
          robotInfo.value.digital.wide_stay_video
        );
        talkVideo.value = await loadVideo(
          robotInfo.value.digital.wide_talk_video
        );
        isAutoOpen.value = true;
        try {
          await authorize();
          startRecord();
        } catch (error) {
          changeChatStatus(
            1
            /* DEFAULT */
          );
        }
        setTimeout(() => {
          scrollToBottom();
        }, 100);
      }
    };
    useHead({
      title: robotInfo.value.name
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_watermark = ElWatermark;
      const _component_TheChatMsgItem = __nuxt_component_1;
      const _component_Markdown = _sfc_main$2;
      const _component_TheChatMsgContent = __nuxt_component_2$1;
      const _component_ElButton = ElButton;
      const _component_Icon = _sfc_main$3;
      const _component_TheChatAction = __nuxt_component_4;
      const _component_LTextarea = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b030a425><div class="layout-bg" style="${ssrRenderStyle({
        height: `${unref(windowHeight) == "Infinity" ? "100vh" : unref(windowHeight) + "px"}`
      })}" data-v-b030a425>`);
      if (unref(chatType) === 1) {
        _push(`<div class="${ssrRenderClass([{
          "p-main": !unref(appStore).isMobile
        }, "h-full"])}" data-v-b030a425><div class="h-full flex flex-col max-w-[720px] mx-auto bg-page rounded-[10px] overflow-hidden" style="${ssrRenderStyle({ "box-shadow": "0px 5px 40px 0px rgba(0, 0, 0, 0.05)" })}" data-v-b030a425><div class="flex p-main items-center bg-body" data-v-b030a425>`);
        if (unref(robotInfo).robot.image) {
          _push(`<img${ssrRenderAttr("src", unref(robotInfo).robot.image)} class="w-[40px] h-[40px] mr-[10px] flex-none rounded-full" alt="" data-v-b030a425>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div data-v-b030a425><div class="text-2xl line-clamp-1" data-v-b030a425>${ssrInterpolate(unref(robotInfo).robot.name)}</div><div class="text-tx-secondary line-clamp-1" data-v-b030a425>${ssrInterpolate(unref(robotInfo).robot.intro)}</div></div></div><div class="flex-1 min-h-0" data-v-b030a425>`);
        _push(ssrRenderComponent(_component_el_watermark, {
          class: "h-full",
          content: unref(appStore).getChatConfig.watermark,
          font: {
            color: "rgba(0,0,0,0.06)",
            fontSize: 12
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d;
            if (_push2) {
              _push2(`<div class="h-full flex flex-col rounded relative" data-v-b030a425${_scopeId}><div class="absolute top-0 left-0 w-full h-full flex flex-col z-10" data-v-b030a425${_scopeId}><div class="flex-1 min-h-0" data-v-b030a425${_scopeId}>`);
              _push2(ssrRenderComponent(unref(ElScrollbar), {
                ref_key: "scrollbarRef",
                ref: scrollbarRef
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="p-main" data-v-b030a425${_scopeId2}><div data-v-b030a425${_scopeId2}>`);
                    if (unref(robotInfo).robot.welcome_introducer) {
                      _push3(ssrRenderComponent(_component_TheChatMsgItem, {
                        class: "mb-[20px]",
                        type: "left",
                        avatar: `${unref(robotInfo).robot.icons ? unref(robotInfo).robot.icons : unref(robotInfo).robot.image}`,
                        bg: "var(--el-bg-color)"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_Markdown, {
                              content: unref(robotInfo).robot.welcome_introducer,
                              onClickCustomLink: ($event) => chat(
                                $event,
                                "link"
                              )
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_Markdown, {
                                content: unref(robotInfo).robot.welcome_introducer,
                                onClickCustomLink: ($event) => chat(
                                  $event,
                                  "link"
                                )
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
                      _push3(`<div class="mt-4" data-v-b030a425${_scopeId2}>`);
                      if (item.type == 1) {
                        _push3(ssrRenderComponent(_component_TheChatMsgItem, {
                          type: "right",
                          bg: "var(--el-color-primary)",
                          color: "white",
                          avatar: unref(user_avatar)
                        }, {
                          actions: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div class="my-[5px]" data-v-b030a425${_scopeId3}>`);
                              _push4(ssrRenderComponent(_component_ElButton, {
                                link: "",
                                type: "info",
                                onClick: ($event) => unref(copy)(
                                  item.content
                                )
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
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_TheChatMsgContent, {
                                content: item.content
                              }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_TheChatMsgContent, {
                                  content: item.content
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
                          avatar: `${unref(robotInfo).robot.icons ? unref(robotInfo).robot.icons : unref(robotInfo).robot.image}`,
                          bg: "var(--el-bg-color)"
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
                                }, 1032, ["type", "disabled", "onClick"])) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_TheChatMsgContent, {
                                content: String(
                                  item.content
                                ),
                                type: "html",
                                typing: item.typing,
                                "show-copy": "",
                                "show-context": !!unref(robotInfo).robot.is_show_context,
                                "show-quote": !!unref(robotInfo).robot.is_show_quote,
                                "show-voice": unref(appStore).getIsVoiceOpen,
                                context: item.context,
                                quotes: item.quotes,
                                images: item.images,
                                files: item.files,
                                videos: item.videos,
                                "record-id": item.id,
                                "record-type": 2,
                                channel: unref(key),
                                "user-id": unref(userStore).visitorId
                              }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_TheChatMsgContent, {
                                  content: String(
                                    item.content
                                  ),
                                  type: "html",
                                  typing: item.typing,
                                  "show-copy": "",
                                  "show-context": !!unref(robotInfo).robot.is_show_context,
                                  "show-quote": !!unref(robotInfo).robot.is_show_quote,
                                  "show-voice": unref(appStore).getIsVoiceOpen,
                                  context: item.context,
                                  quotes: item.quotes,
                                  images: item.images,
                                  files: item.files,
                                  videos: item.videos,
                                  "record-id": item.id,
                                  "record-type": 2,
                                  channel: unref(key),
                                  "user-id": unref(userStore).visitorId
                                }, null, 8, ["content", "typing", "show-context", "show-quote", "show-voice", "context", "quotes", "images", "files", "videos", "record-id", "channel", "user-id"])
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
                      createVNode("div", { class: "p-main" }, [
                        createVNode("div", {
                          ref_key: "innerRef",
                          ref: innerRef
                        }, [
                          unref(robotInfo).robot.welcome_introducer ? (openBlock(), createBlock(_component_TheChatMsgItem, {
                            key: 0,
                            class: "mb-[20px]",
                            type: "left",
                            avatar: `${unref(robotInfo).robot.icons ? unref(robotInfo).robot.icons : unref(robotInfo).robot.image}`,
                            bg: "var(--el-bg-color)"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Markdown, {
                                content: unref(robotInfo).robot.welcome_introducer,
                                onClickCustomLink: ($event) => chat(
                                  $event,
                                  "link"
                                )
                              }, null, 8, ["content", "onClickCustomLink"])
                            ]),
                            _: 1
                          }, 8, ["avatar"])) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(chatList), (item, index) => {
                            return openBlock(), createBlock("div", {
                              key: item.id + "" + index,
                              class: "mt-4"
                            }, [
                              item.type == 1 ? (openBlock(), createBlock(_component_TheChatMsgItem, {
                                key: 0,
                                type: "right",
                                bg: "var(--el-color-primary)",
                                color: "white",
                                avatar: unref(user_avatar)
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
                                    content: item.content
                                  }, null, 8, ["content"])
                                ]),
                                _: 2
                              }, 1032, ["avatar"])) : createCommentVNode("", true),
                              item.type == 2 ? (openBlock(), createBlock(_component_TheChatMsgItem, {
                                key: 1,
                                type: "left",
                                time: item.create_time,
                                avatar: `${unref(robotInfo).robot.icons ? unref(robotInfo).robot.icons : unref(robotInfo).robot.image}`,
                                bg: "var(--el-bg-color)"
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
                                  }, 1032, ["type", "disabled", "onClick"])) : createCommentVNode("", true)
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_TheChatMsgContent, {
                                    content: String(
                                      item.content
                                    ),
                                    type: "html",
                                    typing: item.typing,
                                    "show-copy": "",
                                    "show-context": !!unref(robotInfo).robot.is_show_context,
                                    "show-quote": !!unref(robotInfo).robot.is_show_quote,
                                    "show-voice": unref(appStore).getIsVoiceOpen,
                                    context: item.context,
                                    quotes: item.quotes,
                                    images: item.images,
                                    files: item.files,
                                    videos: item.videos,
                                    "record-id": item.id,
                                    "record-type": 2,
                                    channel: unref(key),
                                    "user-id": unref(userStore).visitorId
                                  }, null, 8, ["content", "typing", "show-context", "show-quote", "show-voice", "context", "quotes", "images", "files", "videos", "record-id", "channel", "user-id"])
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
              }, _parent2, _scopeId));
              _push2(`</div><div class="bg-body" data-v-b030a425${_scopeId}>`);
              _push2(ssrRenderComponent(_component_TheChatAction, {
                ref_key: "chatActionRef",
                ref: chatActionRef,
                loading: unref(isReceiving),
                menus: unref(chatMenus),
                "btn-color": "#f6f6f6",
                onEnter: chat,
                onClear: clearChatRecord,
                onPause: ($event) => {
                  var _a2;
                  return (_a2 = unref(sseInstance)) == null ? void 0 : _a2.abort();
                }
              }, null, _parent2, _scopeId));
              if ((_a = unref(robotInfo).robot) == null ? void 0 : _a.copyright) {
                _push2(`<div class="pb-[10px] text-center text-tx-regular" data-v-b030a425${_scopeId}>${ssrInterpolate((_b = unref(robotInfo).robot) == null ? void 0 : _b.copyright)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div>`);
            } else {
              return [
                createVNode("div", {
                  ref: "containerRef",
                  class: "h-full flex flex-col rounded relative"
                }, [
                  createVNode("div", { class: "absolute top-0 left-0 w-full h-full flex flex-col z-10" }, [
                    createVNode("div", { class: "flex-1 min-h-0" }, [
                      createVNode(unref(ElScrollbar), {
                        ref_key: "scrollbarRef",
                        ref: scrollbarRef
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "p-main" }, [
                            createVNode("div", {
                              ref_key: "innerRef",
                              ref: innerRef
                            }, [
                              unref(robotInfo).robot.welcome_introducer ? (openBlock(), createBlock(_component_TheChatMsgItem, {
                                key: 0,
                                class: "mb-[20px]",
                                type: "left",
                                avatar: `${unref(robotInfo).robot.icons ? unref(robotInfo).robot.icons : unref(robotInfo).robot.image}`,
                                bg: "var(--el-bg-color)"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Markdown, {
                                    content: unref(robotInfo).robot.welcome_introducer,
                                    onClickCustomLink: ($event) => chat(
                                      $event,
                                      "link"
                                    )
                                  }, null, 8, ["content", "onClickCustomLink"])
                                ]),
                                _: 1
                              }, 8, ["avatar"])) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(chatList), (item, index) => {
                                return openBlock(), createBlock("div", {
                                  key: item.id + "" + index,
                                  class: "mt-4"
                                }, [
                                  item.type == 1 ? (openBlock(), createBlock(_component_TheChatMsgItem, {
                                    key: 0,
                                    type: "right",
                                    bg: "var(--el-color-primary)",
                                    color: "white",
                                    avatar: unref(user_avatar)
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
                                        content: item.content
                                      }, null, 8, ["content"])
                                    ]),
                                    _: 2
                                  }, 1032, ["avatar"])) : createCommentVNode("", true),
                                  item.type == 2 ? (openBlock(), createBlock(_component_TheChatMsgItem, {
                                    key: 1,
                                    type: "left",
                                    time: item.create_time,
                                    avatar: `${unref(robotInfo).robot.icons ? unref(robotInfo).robot.icons : unref(robotInfo).robot.image}`,
                                    bg: "var(--el-bg-color)"
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
                                      }, 1032, ["type", "disabled", "onClick"])) : createCommentVNode("", true)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_TheChatMsgContent, {
                                        content: String(
                                          item.content
                                        ),
                                        type: "html",
                                        typing: item.typing,
                                        "show-copy": "",
                                        "show-context": !!unref(robotInfo).robot.is_show_context,
                                        "show-quote": !!unref(robotInfo).robot.is_show_quote,
                                        "show-voice": unref(appStore).getIsVoiceOpen,
                                        context: item.context,
                                        quotes: item.quotes,
                                        images: item.images,
                                        files: item.files,
                                        videos: item.videos,
                                        "record-id": item.id,
                                        "record-type": 2,
                                        channel: unref(key),
                                        "user-id": unref(userStore).visitorId
                                      }, null, 8, ["content", "typing", "show-context", "show-quote", "show-voice", "context", "quotes", "images", "files", "videos", "record-id", "channel", "user-id"])
                                    ]),
                                    _: 2
                                  }, 1032, ["time", "avatar"])) : createCommentVNode("", true)
                                ]);
                              }), 128))
                            ], 512)
                          ])
                        ]),
                        _: 1
                      }, 512)
                    ]),
                    createVNode("div", { class: "bg-body" }, [
                      createVNode(_component_TheChatAction, {
                        ref_key: "chatActionRef",
                        ref: chatActionRef,
                        loading: unref(isReceiving),
                        menus: unref(chatMenus),
                        "btn-color": "#f6f6f6",
                        onEnter: chat,
                        onClear: clearChatRecord,
                        onPause: ($event) => {
                          var _a2;
                          return (_a2 = unref(sseInstance)) == null ? void 0 : _a2.abort();
                        }
                      }, null, 8, ["loading", "menus", "onPause"]),
                      ((_c = unref(robotInfo).robot) == null ? void 0 : _c.copyright) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "pb-[10px] text-center text-tx-regular"
                      }, toDisplayString((_d = unref(robotInfo).robot) == null ? void 0 : _d.copyright), 1)) : createCommentVNode("", true)
                    ])
                  ])
                ], 512)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(chatType) === 2) {
        _push(`<div class="h-full relative" data-v-b030a425><canvas id="digital-canvas"${ssrRenderAttr("width", unref(width) * 2)}${ssrRenderAttr("height", unref(cHeight) * 2)} data-v-b030a425></canvas> ${ssrInterpolate(unref(chatStatus))} <div style="${ssrRenderStyle(unref(chatStatus) === 0 ? null : { display: "none" })}" class="h-full flex justify-center items-center" data-v-b030a425><img class="w-[400px]"${ssrRenderAttr("src", _imports_0)} alt="" data-v-b030a425></div><div class="h-full" style="${ssrRenderStyle([
          unref(chatStatus) !== 0 ? null : { display: "none" },
          {
            background: unref(robotInfo).robot.digital_bg
          }
        ])}" data-v-b030a425><div class="p-[20px] h-full flex relative z-10" data-v-b030a425><div class="flex-1 h-full flex flex-col" data-v-b030a425><div class="flex-1 min-h-0" data-v-b030a425><div class="flex items-center cursor-pointer" data-v-b030a425><div class="text-xl flex-1 min-w-0 text-white" data-v-b030a425>${ssrInterpolate(unref(robotInfo).name)}</div></div></div><div class="flex justify-center" data-v-b030a425></div></div><div class="h-full flex" data-v-b030a425><div class="h-full flex flex-col items-center w-[160px] justify-end" data-v-b030a425><div class="${ssrRenderClass([{
          "recorder--stop": !unref(isRecording) && !unref(audioPlaying)
        }, "recorder gradient-button"])}" data-v-b030a425>`);
        if (unref(hasVoice)) {
          _push(`<canvas style="${ssrRenderStyle({
            width: `${unref(canvasOptions).width}px`,
            height: `${unref(canvasOptions).height}px`
          })}"${ssrRenderAttr("width", unref(canvasOptions).width * unref(canvasOptions).scale)}${ssrRenderAttr("height", unref(canvasOptions).height * unref(canvasOptions).scale)}${ssrRenderAttr("id", unref(canvasOptions).id)} data-v-b030a425></canvas>`);
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
        _push(`</div><div class="text-xs text-white bg-[rgba(51,51,51,0.3)] py-[5px] px-[10px] rounded my-[10px]" data-v-b030a425><div data-v-b030a425>${ssrInterpolate(unref(statusToTextMap)[unref(chatStatus)])}</div></div></div><div class="w-[400px] h-full flex flex-col mr-[20px] pt-[100px]" data-v-b030a425><div class="flex-1 min-h-0 bg-[rgba(0,0,0,0.5)] rounded-[20px] overflow-hidden flex flex-col" data-v-b030a425><div class="flex-1 min-h-0" data-v-b030a425>`);
        if (unref(chatList).length) {
          _push(ssrRenderComponent(unref(ElScrollbar), {
            ref_key: "scrollbarRef",
            ref: scrollbarRef
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="py-4 px-[20px]" data-v-b030a425${_scopeId}><div data-v-b030a425${_scopeId}><!--[-->`);
                ssrRenderList(unref(chatList), (item, index) => {
                  _push2(`<div class="mt-4 sm:pb-[20px]" data-v-b030a425${_scopeId}>`);
                  if (item.type == 1) {
                    _push2(ssrRenderComponent(_component_TheChatMsgItem, {
                      type: "right",
                      avatar: unref(user_avatar),
                      color: "white"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(_component_TheChatMsgContent, {
                            content: String(
                              item.content
                            )
                          }, null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(_component_TheChatMsgContent, {
                              content: String(
                                item.content
                              )
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
                      avatar: unref(robotInfo).robot.icons ? unref(robotInfo).robot.icons : unref(robotInfo).robot.image,
                      bg: "#fff"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(_component_TheChatMsgContent, {
                            content: String(
                              item.content
                            ),
                            type: "html",
                            typing: item.typing,
                            images: item.images,
                            files: item.files,
                            videos: item.videos,
                            "record-id": item.id,
                            "record-type": 2
                          }, null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(_component_TheChatMsgContent, {
                              content: String(
                                item.content
                              ),
                              type: "html",
                              typing: item.typing,
                              images: item.images,
                              files: item.files,
                              videos: item.videos,
                              "record-id": item.id,
                              "record-type": 2
                            }, null, 8, ["content", "typing", "images", "files", "videos", "record-id"])
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
                            avatar: unref(user_avatar),
                            color: "white"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_TheChatMsgContent, {
                                content: String(
                                  item.content
                                )
                              }, null, 8, ["content"])
                            ]),
                            _: 2
                          }, 1032, ["avatar"])) : createCommentVNode("", true),
                          item.type == 2 ? (openBlock(), createBlock(_component_TheChatMsgItem, {
                            key: 1,
                            type: "left",
                            time: item.create_time,
                            avatar: unref(robotInfo).robot.icons ? unref(robotInfo).robot.icons : unref(robotInfo).robot.image,
                            bg: "#fff"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_TheChatMsgContent, {
                                content: String(
                                  item.content
                                ),
                                type: "html",
                                typing: item.typing,
                                images: item.images,
                                files: item.files,
                                videos: item.videos,
                                "record-id": item.id,
                                "record-type": 2
                              }, null, 8, ["content", "typing", "images", "files", "videos", "record-id"])
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
          _push(`<div class="h-full flex justify-center text-tx-secondary items-center" data-v-b030a425> \u6682\u65E0\u804A\u5929\u8BB0\u5F55 </div>`);
        }
        _push(`</div>`);
        if (unref(isReceiving)) {
          _push(`<div class="flex justify-center items-center py-[10px]" data-v-b030a425>`);
          _push(ssrRenderComponent(_component_ElButton, {
            color: "#fff",
            round: "",
            onClick: ($event) => {
              var _a;
              return (_a = unref(sseInstance)) == null ? void 0 : _a.abort();
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
        _push(`</div><div data-v-b030a425>`);
        _push(ssrRenderComponent(_component_TheChatAction, {
          ref_key: "chatActionRef",
          ref: chatActionRef,
          loading: [
            3,
            4
            /* PLAYING */
          ].includes(unref(chatStatus)),
          menus: unref(chatMenus),
          "show-pause": false,
          "show-clear": false,
          onEnter: chat
        }, null, _parent));
        _push(`</div></div><div class="flex flex-col justify-center items-center" data-v-b030a425><div class="gradient-button" data-v-b030a425>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "local-icon-clear",
          size: 24
        }, null, _parent));
        _push(`</div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        ref_key: "loginRef",
        ref: loginRef,
        onConfirm: login
      }, null, _parent));
      _push(ssrRenderComponent(Popup, {
        ref_key: "popupRef",
        ref: popupRef,
        async: true,
        width: "390",
        title: "\u95EE\u9898\u53CD\u9988",
        appendToBody: false,
        class: "feedback-pop"
      }, {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-center mt-4" data-v-b030a425${_scopeId}>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chat/[key].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _key_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b030a425"]]);

export { _key_ as default };
//# sourceMappingURL=_key_-BX4G7yQL.mjs.map
