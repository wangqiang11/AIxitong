import { E as ElTag } from './index-D7S5lb8a.mjs';
import { a5 as useAppStore, z as useUserStore, y as defineStore, aJ as UUID_KEY, aK as uniqueId, aL as AUTHORIZATION_KEY, A as feedback, d as ElButton, B as vLoading, aM as uploadFile, E as ElInput, aI as getDecorate } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, createCommentVNode, ref, shallowRef, reactive, computed, isRef, withDirectives, watchEffect, nextTick } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderStyle, ssrGetDirectiveProps } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$9 } from './index-DRyhljQ3.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { _ as __nuxt_component_7 } from './file-BZUJNFp8.mjs';
import { E as ElLink } from './el-link-CHT85aXX.mjs';
import { _ as _sfc_main$a } from './index-BoqjHllR.mjs';
import { u as useAudioPlay } from './useAudioPlay-C6V9947w.mjs';
import { u as useCopy } from './useCopy-CfS-iChu.mjs';
import { E as ElDialog } from './index-CzJm6kkT.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { useVModel, useElementSize, useLocalStorage } from '@vueuse/core';
import { c as chatChannelsAuth } from './knowledge-DiYwGYtC.mjs';
import { g as getChatBroadcast } from './chat-jd47avQj.mjs';
import { d as downloadHtml2Image } from './download-N0luyf1S.mjs';
import { isString } from 'lodash-es';
import QrcodeVue from 'qrcode.vue';
import { E as ElUpload } from './el-upload-8WlOxHo4.mjs';

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "item",
  __ssrInlineRender: true,
  props: {
    type: { default: "left" },
    avatar: { default: "" },
    bg: { default: "" },
    color: { default: "black" },
    time: { default: "" },
    modelName: { default: "" }
  },
  setup(__props) {
    const appStore = useAppStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tag = ElTag;
      const _cssVars = { style: {
        "--75584782": _ctx.color
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "chat-msg-item",
        style: _ctx.bg ? `--item-bg: ${_ctx.bg}` : ""
      }, _attrs, _cssVars))} data-v-525ad2b6><div class="${ssrRenderClass(`chat-msg-item__${_ctx.type}`)}" data-v-525ad2b6>`);
      if (_ctx.avatar) {
        _push(`<img class="chat-msg-item__avatar"${ssrRenderAttr("src", _ctx.avatar)} data-v-525ad2b6>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([`chat-msg-item__${_ctx.type}-wrap`, { "has-time": _ctx.time }])}" data-v-525ad2b6>`);
      if (_ctx.time) {
        _push(`<div class="h-[20px] mb-[10px] text-tx-secondary text-xs" data-v-525ad2b6>${ssrInterpolate(_ctx.time)} `);
        if (_ctx.modelName && unref(appStore).getChatConfig.is_show_model) {
          _push(ssrRenderComponent(_component_el_tag, {
            class: "ml-2",
            type: "success",
            style: { "--el-tag-border-color": "transparent" }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.modelName)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.modelName), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="overflow-x-auto" data-v-525ad2b6><div class="${ssrRenderClass(`chat-msg-item__${_ctx.type}-content`)}" data-v-525ad2b6>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><div data-v-525ad2b6>`);
      ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
      _push(`</div></div></div>`);
      ssrRenderSlot(_ctx.$slots, "outer_actions", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/the-chat-msg/item.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-525ad2b6"]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAACJElEQVRYR+2YMWsUURSFz3m7s+nskjUIQSutbMRi7WzUVjSadMHCbVLkByjmLygaCVYWRqMEUhkFS9Gg0cJfYCPZjYUQFbPs+I7c2R1Q2ZjZfRNYYS4MAzPv3vnmvDvL3kMA2Hl5/CjLI9ckf4ZwY3Zt15C+gfwIao3So0rt3XsJtPUk9M/cAW6y9ap2DIyfAjgCwANwGeoYiEFtk/5e5CvXeer1D2neATcGgiTZM4+t9RNLEKcBtAFEGeBsiRWzl7EoSXo+8rV9gWc/fDc1B1VSEoEnDpj0KTB33tS26DGaEezvZQZpRxmODyoT5+vwBwS3zeTcT4yjTdZNJEiPSykk1bjZX6HeD/WQJ1zUApgq2w+etcsniBuAVlH9vELOx6Yo1VywgkmTB4X1kEGGhyAtg/Ecq3NNqnknDwVTrNBaactEts88OHs5b8Bw/Tof4M+kr4WrwwhoL9n5uRPWhxWwsxPEl+EGNMacP5I8evCPGgVgqKSFgoWCoQqE5hc9WCgYqkBoftGDeSiYz1/+UJLe+foftvh2A2B1fwQIrapkaFoDcK4PVyH0qVnyU4fjGdW4NQ2WlgDE5hLkMoJmQdh9zW9Dk59K5lhtLjyE01TX/jDILP5MGEbvbFPOJroIXvc5PjvTBbx7GM4vAjjd9WdSc2g/IPaqaTv5Aq58haP1TSb2Au20GGErvgTxIqiTAA7tVSnn+2Z9vAXdCsa4bD6Nsf0C/gYA5PMzcW0AAAAASUVORK5CYII=";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "context-popup",
  __ssrInlineRender: true,
  props: {
    context: { default: () => [] }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElDialog = ElDialog;
      const _component_ElScrollbar = ElScrollbar;
      _push(ssrRenderComponent(_component_ElDialog, mergeProps({
        title: `\u5BF9\u8BDD\u4E0A\u4E0B\u6587(${_ctx.context.length}\u6761)`,
        "model-value": true,
        width: "700px",
        onClose: ($event) => emit("close")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-[65vh]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElScrollbar, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.context, (item, index) => {
                    _push3(`<div class="py-[6px] px-[10px] border border-solid border-br-light rounded mb-[10px]"${_scopeId2}><div class="font-medium text-tx-primary"${_scopeId2}>${ssrInterpolate(item.role)}</div><div class="text-muted text-sm whitespace-pre-wrap"${_scopeId2}>${ssrInterpolate(item.content)}</div></div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.context, (item, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "py-[6px] px-[10px] border border-solid border-br-light rounded mb-[10px]"
                      }, [
                        createVNode("div", { class: "font-medium text-tx-primary" }, toDisplayString(item.role), 1),
                        createVNode("div", { class: "text-muted text-sm whitespace-pre-wrap" }, toDisplayString(item.content), 1)
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "h-[65vh]" }, [
                createVNode(_component_ElScrollbar, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.context, (item, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "py-[6px] px-[10px] border border-solid border-br-light rounded mb-[10px]"
                      }, [
                        createVNode("div", { class: "font-medium text-tx-primary" }, toDisplayString(item.role), 1),
                        createVNode("div", { class: "text-muted text-sm whitespace-pre-wrap" }, toDisplayString(item.content), 1)
                      ]);
                    }), 128))
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/the-chat-msg/context-popup.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "quote-popup",
  __ssrInlineRender: true,
  props: {
    quotes: { default: () => [] }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElDialog = ElDialog;
      const _component_ElScrollbar = ElScrollbar;
      _push(ssrRenderComponent(_component_ElDialog, mergeProps({
        title: `\u77E5\u8BC6\u5E93\u5F15\u7528(${_ctx.quotes.length}\u6761)`,
        "model-value": true,
        width: "700px",
        onClose: ($event) => emit("close")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-[65vh]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElScrollbar, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.quotes, (item, index) => {
                    _push3(`<div class="py-[6px] px-[10px] border border-solid border-br-light rounded mb-[10px]"${_scopeId2}>`);
                    if (item.question) {
                      _push3(`<div class="text-muted text-sm whitespace-pre-wrap"${_scopeId2}>${ssrInterpolate(item.question)}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (item.answer) {
                      _push3(`<div class="text-muted text-sm whitespace-pre-wrap"${_scopeId2}>${ssrInterpolate(item.answer)}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.quotes, (item, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "py-[6px] px-[10px] border border-solid border-br-light rounded mb-[10px]"
                      }, [
                        item.question ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-muted text-sm whitespace-pre-wrap"
                        }, toDisplayString(item.question), 1)) : createCommentVNode("", true),
                        item.answer ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-muted text-sm whitespace-pre-wrap"
                        }, toDisplayString(item.answer), 1)) : createCommentVNode("", true)
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "h-[65vh]" }, [
                createVNode(_component_ElScrollbar, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.quotes, (item, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "py-[6px] px-[10px] border border-solid border-br-light rounded mb-[10px]"
                      }, [
                        item.question ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-muted text-sm whitespace-pre-wrap"
                        }, toDisplayString(item.question), 1)) : createCommentVNode("", true),
                        item.answer ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-muted text-sm whitespace-pre-wrap"
                        }, toDisplayString(item.answer), 1)) : createCommentVNode("", true)
                      ]);
                    }), 128))
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/the-chat-msg/quote-popup.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const useChatStore = defineStore({
  id: "chatStore",
  state: () => {
    const uuid = useLocalStorage(UUID_KEY, "");
    if (!uuid.value) {
      uuid.value = uniqueId();
    }
    return {
      uuid: uuid.value || "",
      token: "",
      channelId: ""
    };
  },
  getters: {
    isAuth: (state) => !!state.token
  },
  actions: {
    init(channelId) {
      this.channelId = channelId;
      const tokens = useLocalStorage(
        AUTHORIZATION_KEY,
        {}
      );
      this.token = tokens.value[this.channelId] || "";
    },
    clearAuth() {
      const tokens = useLocalStorage(
        AUTHORIZATION_KEY,
        {}
      );
      delete tokens.value[this.channelId];
      this.token = "";
    },
    async auth(password = "") {
      const res = await chatChannelsAuth({
        password,
        channel: this.channelId,
        identity: this.uuid
      });
      this.token = res.token;
      const tokens = useLocalStorage(
        AUTHORIZATION_KEY,
        {}
      );
      tokens.value = Object.assign(
        {
          [this.channelId]: res.token
        },
        tokens.value
      );
    }
  }
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "record-image",
  __ssrInlineRender: true,
  props: {
    url: {},
    name: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_image = ElImage;
      if (_ctx.url) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex mb-[16px] bg-body rounded-[5px] p-[10px] max-w-[300px] items-center" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_el_image, {
          class: "flex-none w-[40px] h-[40px]",
          src: _ctx.url,
          "preview-src-list": [_ctx.url],
          "hide-on-click-modal": true
        }, null, _parent));
        _push(`<div class="line-clamp-2 flex-1 min-w-0 ml-[6px] text-tx-primary" style="${ssrRenderStyle({
          "word-break": "break-word"
        })}">${ssrInterpolate(_ctx.name)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/the-chat-msg/record-image.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "record-file",
  __ssrInlineRender: true,
  props: {
    url: {},
    name: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.url) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex mb-[16px] bg-white rounded-[5px] p-[10px] max-w-[300px] items-center cursor-pointer" }, _attrs))}><div class="line-clamp-2 flex-1 min-w-0 ml-[6px]" style="${ssrRenderStyle({
          "word-break": "break-word"
        })}">${ssrInterpolate(_ctx.name)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/the-chat-msg/record-file.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "dialog-poster",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const appStore = useAppStore();
    const showPopup = ref(false);
    const downloadLoading = ref(false);
    const drawOptions = ref({});
    const loading = ref(false);
    const userStore = useUserStore();
    const posterRef = shallowRef();
    const posterData = reactive({
      title: "",
      content: ""
    });
    const getData = async () => {
      var _a;
      loading.value = true;
      try {
        const { data } = await getDecorate({ id: 12 });
        drawOptions.value = ((_a = JSON.parse(data)[0]) == null ? void 0 : _a.content) || {};
      } finally {
        loading.value = false;
      }
    };
    const inviteLink = computed(
      () => `${(void 0).origin}/mobile?user_sn=${userStore.userInfo.sn}`
    );
    const { copy } = useCopy();
    const pcLink = computed(
      () => `${(void 0).origin}/?user_sn=${userStore.userInfo.sn}`
    );
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
    const open = (data) => {
      getData();
      showPopup.value = true;
      posterData.title = data.title;
      posterData.content = isString(data.content) ? [data.content] : data.content;
    };
    __expose({
      open
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElDialog = ElDialog;
      const _component_ElScrollbar = ElScrollbar;
      const _component_Markdown = _sfc_main$9;
      const _component_el_button = ElButton;
      const _component_Icon = _sfc_main$a;
      const _directive_loading = vLoading;
      _push(ssrRenderComponent(_component_ElDialog, mergeProps({
        modelValue: unref(showPopup),
        "onUpdate:modelValue": ($event) => isRef(showPopup) ? showPopup.value = $event : null,
        title: "\u751F\u6210\u6D77\u62A5",
        "show-close": "",
        width: "430px"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-[70vh]" data-v-4178ddb0${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElScrollbar, ssrGetDirectiveProps(_ctx, _directive_loading, unref(loading)), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!unref(loading)) {
                    _push3(`<div class="poster overflow-hidden pb-[10px] rounded-lg" data-v-4178ddb0${_scopeId2}><div class="poster-bg flex flex-col" data-v-4178ddb0${_scopeId2}><img class="w-full"${ssrRenderAttr(
                      "src",
                      unref(drawOptions).default == 2 ? unref(appStore).getImageUrl(
                        unref(drawOptions).posterUrl
                      ) : unref(drawOptions).poster == 1 ? unref(appStore).getImageUrl(
                        unref(drawOptions).defaultUrl1
                      ) : unref(appStore).getImageUrl(
                        unref(drawOptions).defaultUrl2
                      )
                    )} style="${ssrRenderStyle({
                      background: unref(drawOptions).bgColor
                    })}" alt="" data-v-4178ddb0${_scopeId2}><div class="flex-1 min-h-0" style="${ssrRenderStyle({
                      background: unref(drawOptions).bgColor
                    })}" data-v-4178ddb0${_scopeId2}></div></div><div class="w-full h-full poster-contain1 bg-[#BBBBBB]" style="${ssrRenderStyle({
                      color: unref(drawOptions).textColor
                    })}" data-v-4178ddb0${_scopeId2}><div class="px-[20px] pt-[135px]" data-v-4178ddb0${_scopeId2}><div class="bg-white rounded-lg p-[15px] text-tx-primary" data-v-4178ddb0${_scopeId2}><div class="flex justify-end text-[16px] items-baseline" data-v-4178ddb0${_scopeId2}><span class="bg-[#066cff] px-[10px] py-[6px] text-white" style="${ssrRenderStyle({ "border-radius": "8px 0 8px 8px" })}" data-v-4178ddb0${_scopeId2}><span class="line-clamp-2" data-v-4178ddb0${_scopeId2}>${ssrInterpolate(unref(posterData).title)}</span></span></div><span class="text-[14px]" data-v-4178ddb0${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(posterData).content, (text, index) => {
                      _push3(`<div style="${ssrRenderStyle({ "border-radius": "0 8px 8px 8px" })}" class="${ssrRenderClass([{
                        "pt-[15px]": index > 0
                      }, "mb-[15px] mt-4 p-[10px] bg-[#f0f5fe] text-tx-primary"])}" data-v-4178ddb0${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Markdown, {
                        content: text,
                        "line-numbers": true,
                        "line-clamp": unref(drawOptions).showContentType == 1 ? unref(drawOptions).contentNum : 0,
                        theme: "light"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    });
                    _push3(`<!--]--></span></div></div><div class="px-[20px] pt-[20px]" data-v-4178ddb0${_scopeId2}><div class="flex items-center justify-between" data-v-4178ddb0${_scopeId2}><div class="flex items-center" data-v-4178ddb0${_scopeId2}><img${ssrRenderAttr("src", unref(userStore).userInfo.avatar)} alt="" class="w-[60px] h-[60px] rounded-full" data-v-4178ddb0${_scopeId2}><div class="ml-[10px] text-[16px]" data-v-4178ddb0${_scopeId2}><div class="line-clamp-2" data-v-4178ddb0${_scopeId2}>${ssrInterpolate(unref(userStore).userInfo.nickname)}</div>`);
                    if (unref(drawOptions).showData == 1) {
                      _push3(`<div data-v-4178ddb0${_scopeId2}>${ssrInterpolate(unref(drawOptions).data)}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div><div class="w-[120px] flex flex-col justify-center items-end" data-v-4178ddb0${_scopeId2}>`);
                    _push3(ssrRenderComponent(QrcodeVue, {
                      value: unref(inviteLink),
                      size: 85,
                      margin: 1
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="text-xs mt-2" data-v-4178ddb0${_scopeId2}> \u957F\u6309\u8BC6\u522B\u4E8C\u7EF4\u7801 </div></div></div></div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    !unref(loading) ? (openBlock(), createBlock("div", {
                      key: 0,
                      ref_key: "posterRef",
                      ref: posterRef,
                      class: "poster overflow-hidden pb-[10px] rounded-lg"
                    }, [
                      createVNode("div", { class: "poster-bg flex flex-col" }, [
                        createVNode("img", {
                          class: "w-full",
                          src: unref(drawOptions).default == 2 ? unref(appStore).getImageUrl(
                            unref(drawOptions).posterUrl
                          ) : unref(drawOptions).poster == 1 ? unref(appStore).getImageUrl(
                            unref(drawOptions).defaultUrl1
                          ) : unref(appStore).getImageUrl(
                            unref(drawOptions).defaultUrl2
                          ),
                          style: {
                            background: unref(drawOptions).bgColor
                          },
                          alt: ""
                        }, null, 12, ["src"]),
                        createVNode("div", {
                          class: "flex-1 min-h-0",
                          style: {
                            background: unref(drawOptions).bgColor
                          }
                        }, null, 4)
                      ]),
                      createVNode("div", {
                        class: "w-full h-full poster-contain1 bg-[#BBBBBB]",
                        style: {
                          color: unref(drawOptions).textColor
                        }
                      }, [
                        createVNode("div", { class: "px-[20px] pt-[135px]" }, [
                          createVNode("div", { class: "bg-white rounded-lg p-[15px] text-tx-primary" }, [
                            createVNode("div", { class: "flex justify-end text-[16px] items-baseline" }, [
                              createVNode("span", {
                                class: "bg-[#066cff] px-[10px] py-[6px] text-white",
                                style: { "border-radius": "8px 0 8px 8px" }
                              }, [
                                createVNode("span", { class: "line-clamp-2" }, toDisplayString(unref(posterData).title), 1)
                              ])
                            ]),
                            createVNode("span", { class: "text-[14px]" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(posterData).content, (text, index) => {
                                return openBlock(), createBlock("div", {
                                  key: index,
                                  class: ["mb-[15px] mt-4 p-[10px] bg-[#f0f5fe] text-tx-primary", {
                                    "pt-[15px]": index > 0
                                  }],
                                  style: { "border-radius": "0 8px 8px 8px" }
                                }, [
                                  createVNode(_component_Markdown, {
                                    content: text,
                                    "line-numbers": true,
                                    "line-clamp": unref(drawOptions).showContentType == 1 ? unref(drawOptions).contentNum : 0,
                                    theme: "light"
                                  }, null, 8, ["content", "line-clamp"])
                                ], 2);
                              }), 128))
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "px-[20px] pt-[20px]" }, [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode("img", {
                                src: unref(userStore).userInfo.avatar,
                                alt: "",
                                class: "w-[60px] h-[60px] rounded-full"
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "ml-[10px] text-[16px]" }, [
                                createVNode("div", { class: "line-clamp-2" }, toDisplayString(unref(userStore).userInfo.nickname), 1),
                                unref(drawOptions).showData == 1 ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(unref(drawOptions).data), 1)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", { class: "w-[120px] flex flex-col justify-center items-end" }, [
                              createVNode(QrcodeVue, {
                                value: unref(inviteLink),
                                size: 85,
                                margin: 1
                              }, null, 8, ["value"]),
                              createVNode("div", { class: "text-xs mt-2" }, " \u957F\u6309\u8BC6\u522B\u4E8C\u7EF4\u7801 ")
                            ])
                          ])
                        ])
                      ], 4)
                    ], 512)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end mt-[10px]" data-v-4178ddb0${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              round: "",
              onClick: download,
              loading: unref(downloadLoading)
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, { name: "el-icon-Download" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, { name: "el-icon-Download" })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4E0B\u8F7D `);
                } else {
                  return [
                    createTextVNode(" \u4E0B\u8F7D ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_button, {
              round: "",
              onClick: ($event) => unref(copy)(unref(pcLink))
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, { name: "el-icon-DocumentCopy" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, { name: "el-icon-DocumentCopy" })
                  ];
                }
              }),
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
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "h-[70vh]" }, [
                withDirectives((openBlock(), createBlock(_component_ElScrollbar, null, {
                  default: withCtx(() => [
                    !unref(loading) ? (openBlock(), createBlock("div", {
                      key: 0,
                      ref_key: "posterRef",
                      ref: posterRef,
                      class: "poster overflow-hidden pb-[10px] rounded-lg"
                    }, [
                      createVNode("div", { class: "poster-bg flex flex-col" }, [
                        createVNode("img", {
                          class: "w-full",
                          src: unref(drawOptions).default == 2 ? unref(appStore).getImageUrl(
                            unref(drawOptions).posterUrl
                          ) : unref(drawOptions).poster == 1 ? unref(appStore).getImageUrl(
                            unref(drawOptions).defaultUrl1
                          ) : unref(appStore).getImageUrl(
                            unref(drawOptions).defaultUrl2
                          ),
                          style: {
                            background: unref(drawOptions).bgColor
                          },
                          alt: ""
                        }, null, 12, ["src"]),
                        createVNode("div", {
                          class: "flex-1 min-h-0",
                          style: {
                            background: unref(drawOptions).bgColor
                          }
                        }, null, 4)
                      ]),
                      createVNode("div", {
                        class: "w-full h-full poster-contain1 bg-[#BBBBBB]",
                        style: {
                          color: unref(drawOptions).textColor
                        }
                      }, [
                        createVNode("div", { class: "px-[20px] pt-[135px]" }, [
                          createVNode("div", { class: "bg-white rounded-lg p-[15px] text-tx-primary" }, [
                            createVNode("div", { class: "flex justify-end text-[16px] items-baseline" }, [
                              createVNode("span", {
                                class: "bg-[#066cff] px-[10px] py-[6px] text-white",
                                style: { "border-radius": "8px 0 8px 8px" }
                              }, [
                                createVNode("span", { class: "line-clamp-2" }, toDisplayString(unref(posterData).title), 1)
                              ])
                            ]),
                            createVNode("span", { class: "text-[14px]" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(posterData).content, (text, index) => {
                                return openBlock(), createBlock("div", {
                                  key: index,
                                  class: ["mb-[15px] mt-4 p-[10px] bg-[#f0f5fe] text-tx-primary", {
                                    "pt-[15px]": index > 0
                                  }],
                                  style: { "border-radius": "0 8px 8px 8px" }
                                }, [
                                  createVNode(_component_Markdown, {
                                    content: text,
                                    "line-numbers": true,
                                    "line-clamp": unref(drawOptions).showContentType == 1 ? unref(drawOptions).contentNum : 0,
                                    theme: "light"
                                  }, null, 8, ["content", "line-clamp"])
                                ], 2);
                              }), 128))
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "px-[20px] pt-[20px]" }, [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode("img", {
                                src: unref(userStore).userInfo.avatar,
                                alt: "",
                                class: "w-[60px] h-[60px] rounded-full"
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "ml-[10px] text-[16px]" }, [
                                createVNode("div", { class: "line-clamp-2" }, toDisplayString(unref(userStore).userInfo.nickname), 1),
                                unref(drawOptions).showData == 1 ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(unref(drawOptions).data), 1)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", { class: "w-[120px] flex flex-col justify-center items-end" }, [
                              createVNode(QrcodeVue, {
                                value: unref(inviteLink),
                                size: 85,
                                margin: 1
                              }, null, 8, ["value"]),
                              createVNode("div", { class: "text-xs mt-2" }, " \u957F\u6309\u8BC6\u522B\u4E8C\u7EF4\u7801 ")
                            ])
                          ])
                        ])
                      ], 4)
                    ], 512)) : createCommentVNode("", true)
                  ]),
                  _: 1
                })), [
                  [_directive_loading, unref(loading)]
                ])
              ]),
              createVNode("div", { class: "flex justify-end mt-[10px]" }, [
                createVNode(_component_el_button, {
                  round: "",
                  onClick: download,
                  loading: unref(downloadLoading)
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_Icon, { name: "el-icon-Download" })
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" \u4E0B\u8F7D ")
                  ]),
                  _: 1
                }, 8, ["loading"]),
                createVNode(_component_el_button, {
                  round: "",
                  onClick: ($event) => unref(copy)(unref(pcLink))
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_Icon, { name: "el-icon-DocumentCopy" })
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" \u590D\u5236\u94FE\u63A5 ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/the-chat-msg/dialog-poster.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DialogPoster = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4178ddb0"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "content",
  __ssrInlineRender: true,
  props: {
    type: { default: "text" },
    recordList: { default: () => [] },
    content: { default: "" },
    context: { default: () => [] },
    quotes: { default: () => [] },
    images: { default: () => [] },
    videos: { default: () => [] },
    files: { default: () => [] },
    filesPlugin: { default: () => [] },
    typing: { type: Boolean, default: false },
    lineNumbers: { type: Boolean, default: true },
    showRewrite: { type: Boolean, default: false },
    showCopy: { type: Boolean, default: false },
    showContext: { type: Boolean, default: false },
    showQuote: { type: Boolean, default: false },
    showVoice: { type: Boolean, default: false },
    showPoster: { type: Boolean, default: false },
    recordId: { default: 0 },
    index: { default: 0 },
    recordType: { default: 1 },
    channel: { default: "" },
    userId: { default: "" }
  },
  emits: ["click-custom-link", "rewrite"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    useChatStore();
    const props = __props;
    const showContextPopup = ref(false);
    const showQuotePopup = ref(false);
    const showPosterPopup = ref(false);
    const chatBroadcast = async () => {
      const data = await getChatBroadcast(
        {
          records_id: props.recordId,
          content: props.index,
          type: props.recordType
        },
        {
          Authorization: props.channel,
          Identity: props.userId
        }
      );
      return data.file;
    };
    const imagesList = computed(() => props.images.map(({ url }) => url));
    const { play, audioPlaying, pause, audioLoading } = useAudioPlay();
    const { copy } = useCopy();
    const chat = (content) => {
      emit("click-custom-link", content);
    };
    const posterRef = shallowRef();
    const handleDrawPoster = async () => {
      const result = props.recordList.filter((item) => {
        return item.id == props.recordId;
      });
      if (result.length != 2) {
        feedback.msgError("\u4E0A\u4E0B\u6587\u6570\u636E\u4E0D\u5BF9\uFF5E");
        return;
      }
      showPosterPopup.value = true;
      await nextTick();
      posterRef.value.open({
        title: result[0].content,
        content: result[1].content
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Markdown = _sfc_main$9;
      const _component_ElImage = ElImage;
      const _component_MaterialFile = __nuxt_component_7;
      const _component_ElLink = ElLink;
      const _component_ElButton = ElButton;
      const _component_Icon = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "chat-content" }, _attrs))} data-v-2b82ead0><div class="chat-text" data-v-2b82ead0>`);
      if (_ctx.filesPlugin.length) {
        _push(`<div data-v-2b82ead0><!--[-->`);
        ssrRenderList(_ctx.filesPlugin, (item, index) => {
          _push(`<!--[-->`);
          if (item.type == "image") {
            _push(ssrRenderComponent(_sfc_main$5, {
              url: item.url,
              name: item.name
            }, null, _parent));
          } else if (item.type == "file") {
            _push(ssrRenderComponent(_sfc_main$4, {
              url: item.url,
              name: item.name
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.type === "html") {
        _push(ssrRenderComponent(_component_Markdown, {
          content: _ctx.content,
          "line-numbers": _ctx.lineNumbers,
          typing: _ctx.typing,
          style: { "color": "inherit" },
          onClickCustomLink: ($event) => chat($event)
        }, null, _parent));
      } else if (_ctx.type === "text") {
        _push(`<div class="${ssrRenderClass([{
          "wait-typing": _ctx.typing
        }, "break-all text-lg"])}" style="${ssrRenderStyle({ "word-wrap": "break-word" })}" data-v-2b82ead0>${ssrInterpolate(_ctx.content)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(imagesList).length) {
        _push(`<div class="flex flex-wrap mx-[-5px]" data-v-2b82ead0><!--[-->`);
        ssrRenderList(unref(imagesList), (item, index) => {
          _push(ssrRenderComponent(_component_ElImage, {
            key: index,
            "preview-src-list": unref(imagesList),
            "preview-teleported": true,
            infinite: false,
            "initial-index": index,
            "hide-on-click-modal": true,
            class: "w-[120px] h-[120px] mx-[5px] mt-[10px]",
            src: item,
            fit: "cover"
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.videos.length) {
        _push(`<div class="flex flex-wrap mx-[-5px]" data-v-2b82ead0><div class="w-[120px] h-[120px] mx-[5px] mt-[10px]" data-v-2b82ead0><!--[-->`);
        ssrRenderList(_ctx.videos, (item, index) => {
          _push(ssrRenderComponent(_component_MaterialFile, {
            "file-size": "120px",
            key: index,
            uri: item.url,
            type: "video"
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_a = _ctx.files) == null ? void 0 : _a.length) {
        _push(`<div class="mt-[15px]" data-v-2b82ead0><!--[-->`);
        ssrRenderList(_ctx.files, (item, index) => {
          _push(`<div class="flex mb-[10px] items-center" data-v-2b82ead0><img class="w-[18px] h-[14px] mr-2"${ssrRenderAttr("src", _imports_0)} data-v-2b82ead0><div class="line-clamp-1 mr-[10px] text-tx-primary" data-v-2b82ead0>${ssrInterpolate(item.name)}</div>`);
          _push(ssrRenderComponent(_component_ElLink, {
            href: item.url,
            target: "_blank",
            type: "primary"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u4E0B\u8F7D `);
              } else {
                return [
                  createTextVNode(" \u4E0B\u8F7D ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!_ctx.typing && (_ctx.showCopy || _ctx.showVoice || _ctx.showQuote || _ctx.showContext)) {
        _push(`<div class="mt-[10px]" data-v-2b82ead0>`);
        if (_ctx.showRewrite) {
          _push(ssrRenderComponent(_component_ElButton, {
            link: "",
            onClick: ($event) => emit("rewrite")
          }, {
            icon: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-RefreshLeft" }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, { name: "el-icon-RefreshLeft" })
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u91CD\u65B0\u56DE\u7B54 `);
              } else {
                return [
                  createTextVNode(" \u91CD\u65B0\u56DE\u7B54 ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.showCopy) {
          _push(ssrRenderComponent(_component_ElButton, {
            link: "",
            onClick: ($event) => unref(copy)(_ctx.content)
          }, {
            icon: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-CopyDocument" }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, { name: "el-icon-CopyDocument" })
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u590D\u5236 `);
              } else {
                return [
                  createTextVNode(" \u590D\u5236 ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.showVoice) {
          _push(`<!--[-->`);
          if (unref(audioPlaying)) {
            _push(ssrRenderComponent(_component_ElButton, {
              link: "",
              onClick: unref(pause)
            }, {
              icon: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_Icon, { name: "local-icon-audio_voice" }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_Icon, { name: "local-icon-audio_voice" })
                  ];
                }
              }),
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
          } else {
            _push(ssrRenderComponent(_component_ElButton, {
              link: "",
              loading: unref(audioLoading),
              onClick: ($event) => unref(play)(chatBroadcast)
            }, {
              icon: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_Icon, { name: "local-icon-audio_voice" }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_Icon, { name: "local-icon-audio_voice" })
                  ];
                }
              }),
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` \u6717\u8BFB `);
                } else {
                  return [
                    createTextVNode(" \u6717\u8BFB ")
                  ];
                }
              }),
              _: 1
            }, _parent));
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.showPoster) {
          _push(ssrRenderComponent(_component_ElButton, {
            link: "",
            onClick: handleDrawPoster
          }, {
            icon: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-Picture" }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, { name: "el-icon-Picture" })
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u751F\u6210\u6D77\u62A5 `);
              } else {
                return [
                  createTextVNode(" \u751F\u6210\u6D77\u62A5 ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.quotes.length && _ctx.showQuote) {
          _push(ssrRenderComponent(_component_ElButton, {
            link: "",
            type: "primary",
            onClick: ($event) => showQuotePopup.value = true
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.quotes.length)}\u6761\u5F15\u7528 `);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.quotes.length) + "\u6761\u5F15\u7528 ", 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.context.length && _ctx.showContext) {
          _push(ssrRenderComponent(_component_ElButton, {
            link: "",
            type: "primary",
            onClick: ($event) => showContextPopup.value = true
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.context.length)}\u6761\u4E0A\u4E0B\u6587 `);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.context.length) + "\u6761\u4E0A\u4E0B\u6587 ", 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(showContextPopup)) {
        _push(ssrRenderComponent(_sfc_main$7, {
          context: _ctx.context,
          onClose: ($event) => showContextPopup.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(showQuotePopup)) {
        _push(ssrRenderComponent(_sfc_main$6, {
          quotes: _ctx.quotes,
          onClose: ($event) => showQuotePopup.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(showPosterPopup)) {
        _push(ssrRenderComponent(DialogPoster, {
          ref_key: "posterRef",
          ref: posterRef,
          onClose: ($event) => showPosterPopup.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/the-chat-msg/content.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2b82ead0"]]);
const _sfc_main$1 = defineComponent({
  props: {
    showClose: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(props, { emit }) {
    const handleClose = () => {
      emit("close");
    };
    return {
      handleClose
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon = _sfc_main$a;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "del-wrap" }, _attrs))} data-v-cad697f2>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if (_ctx.showClose) {
    _push(`<div class="icon-close" data-v-cad697f2>`);
    _push(ssrRenderComponent(_component_icon, {
      size: 12,
      name: "el-icon-CloseBold"
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/del-wrap/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cad697f2"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    placeholder: { default: "\u8BF7\u8F93\u5165\u95EE\u9898" },
    loading: { type: Boolean, default: false },
    showManual: { type: Boolean, default: false },
    showPause: { type: Boolean, default: true },
    showClear: { type: Boolean, default: true },
    showContinue: { type: Boolean, default: false },
    showFileUpload: { type: Boolean, default: false },
    menus: { default: () => [] },
    btnColor: { default: "#fff" },
    filePlugin: { default: () => ({}) }
  },
  emits: ["clear", "pause", "continue", "blur", "focus", "enter", "update:filePlugin"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const appStore = useAppStore();
    const userInput = ref("");
    const textContainerRef = shallowRef();
    const textareaRef = shallowRef();
    const isFocus = ref(false);
    const handleBlur = () => {
      isFocus.value = false;
      emit("blur");
    };
    const handleFocus = () => {
      isFocus.value = true;
      emit("focus");
    };
    const isInputChinese = ref(false);
    const getPlaceholderByClient = computed(() => {
      return `${props.placeholder} ${appStore.isMobile ? "" : "\uFF08Shift + Enter\uFF09= \u6362\u884C"}`;
    });
    const filePlugin = useVModel(props, "filePlugin", emit);
    const fileUploadLoading = ref(false);
    const handleSuccess = (response) => {
      filePlugin.value.url = response.uri;
      filePlugin.value.name = response.name;
    };
    const httpRequest = async (options) => {
      fileUploadLoading.value = true;
      try {
        const data = await uploadFile("image", {
          file: options.file,
          name: "file",
          header: {}
        });
        return data;
      } finally {
        fileUploadLoading.value = false;
      }
    };
    const handleInputEnter = (e) => {
      if (e.shiftKey && e.keyCode === 13) {
        return;
      }
      if (isInputChinese.value) return;
      if (e.keyCode === 13) {
        emit("enter", userInput.value);
        return e.preventDefault();
      }
    };
    const autosize = computed(() => {
      return appStore.isMobile ? {
        maxRows: 4,
        minRows: 1
      } : {
        maxRows: 6,
        minRows: 1
      };
    });
    const isTextAreaExpands = ref(false);
    const { height } = useElementSize(textContainerRef);
    let initHeight = 0;
    watchEffect(() => {
      if (initHeight === 0) {
        initHeight = height.value;
      }
      if (height.value > initHeight) {
        isTextAreaExpands.value = true;
      }
      if (userInput.value === "" && height.value > initHeight) {
        isTextAreaExpands.value = false;
      }
    });
    const setInputValue = (value = "") => {
      userInput.value = value;
    };
    __expose({
      setInputValue,
      focus: () => {
        var _a;
        return (_a = textareaRef.value) == null ? void 0 : _a.focus();
      },
      blur: () => {
        var _a;
        return (_a = textareaRef.value) == null ? void 0 : _a.blur();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElButton = ElButton;
      const _component_Icon = _sfc_main$a;
      const _component_DelWrap = __nuxt_component_2;
      const _component_ElImage = ElImage;
      const _component_el_upload = ElUpload;
      const _component_el_button = ElButton;
      const _component_ElInput = ElInput;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "chat-action" }, _attrs))} data-v-e757fefd>`);
      if (_ctx.showPause || _ctx.showContinue) {
        _push(`<div class="flex items-center pt-[10px] justify-center" data-v-e757fefd>`);
        if (_ctx.loading) {
          _push(ssrRenderComponent(_component_ElButton, {
            plain: "",
            onClick: ($event) => emit("pause")
          }, {
            icon: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-VideoPause" }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, { name: "el-icon-VideoPause" })
                ];
              }
            }),
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
        } else if (_ctx.showContinue) {
          _push(ssrRenderComponent(_component_ElButton, {
            plain: "",
            onClick: ($event) => emit("continue")
          }, {
            icon: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-VideoPlay" }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, { name: "el-icon-VideoPlay" })
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u7EE7\u7EED `);
              } else {
                return [
                  createTextVNode(" \u7EE7\u7EED ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="p-[10px]" data-v-e757fefd>`);
      if (unref(filePlugin).url) {
        _push(`<div class="flex mb-[10px]" data-v-e757fefd>`);
        _push(ssrRenderComponent(_component_DelWrap, {
          onClose: ($event) => unref(filePlugin).url = ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex bg-page p-[10px] rounded-[12px] items-center max-w-[400px]" data-v-e757fefd${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ElImage, {
                src: unref(filePlugin).url,
                "preview-src-list": [unref(filePlugin).url],
                "hide-on-click-modal": true,
                class: "w-[35px] h-[35px] flex-none"
              }, null, _parent2, _scopeId));
              _push2(`<span class="line-clamp-2 ml-[10px] flex-1 min-w-0" style="${ssrRenderStyle({
                "word-break": "break-word"
              })}" data-v-e757fefd${_scopeId}>${ssrInterpolate(unref(filePlugin).name)}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex bg-page p-[10px] rounded-[12px] items-center max-w-[400px]" }, [
                  createVNode(_component_ElImage, {
                    src: unref(filePlugin).url,
                    "preview-src-list": [unref(filePlugin).url],
                    "hide-on-click-modal": true,
                    class: "w-[35px] h-[35px] flex-none"
                  }, null, 8, ["src", "preview-src-list"]),
                  createVNode("span", {
                    class: "line-clamp-2 ml-[10px] flex-1 min-w-0",
                    style: {
                      "word-break": "break-word"
                    }
                  }, toDisplayString(unref(filePlugin).name), 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mb-[10px] flex flex-wrap items-center" data-v-e757fefd>`);
      ssrRenderSlot(_ctx.$slots, "btn", {}, null, _push, _parent);
      if (_ctx.showFileUpload) {
        _push(`<div class="mr-[10px]" data-v-e757fefd>`);
        _push(ssrRenderComponent(_component_el_upload, {
          ref: "uploadRef",
          "show-file-list": false,
          accept: ".jpg,.png,.jpeg",
          multiple: false,
          "on-success": handleSuccess,
          "http-request": httpRequest
        }, {
          trigger: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_button, {
                plain: "",
                class: "!rounded-[8px]",
                loading: unref(fileUploadLoading)
              }, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, { name: "el-icon-Upload" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, { name: "el-icon-Upload" })
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u4E0A\u4F20\u56FE\u7247 `);
                  } else {
                    return [
                      createTextVNode(" \u4E0A\u4F20\u56FE\u7247 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_el_button, {
                  plain: "",
                  class: "!rounded-[8px]",
                  loading: unref(fileUploadLoading)
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_Icon, { name: "el-icon-Upload" })
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" \u4E0A\u4F20\u56FE\u7247 ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.showClear) {
        _push(ssrRenderComponent(_component_ElButton, {
          disabled: _ctx.loading,
          class: "!rounded-[8px]",
          plain: "",
          onClick: ($event) => emit("clear")
        }, {
          icon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-Delete" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, { name: "el-icon-Delete" })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u6E05\u7A7A `);
            } else {
              return [
                createTextVNode(" \u6E05\u7A7A ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.menus, (item, index) => {
        _push(ssrRenderComponent(_component_ElButton, {
          color: _ctx.btnColor,
          style: { "--el-button-disabled-text-color": "var(\n                            --el-button-text-color\n                        )" },
          disabled: _ctx.loading,
          onClick: ($event) => emit("enter", item.keyword),
          key: index
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.keyword)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.keyword), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="chat-input relative text-container flex items-center" data-v-e757fefd>`);
      _push(ssrRenderComponent(_component_ElInput, {
        ref_key: "textareaRef",
        ref: textareaRef,
        modelValue: unref(userInput),
        "onUpdate:modelValue": ($event) => isRef(userInput) ? userInput.value = $event : null,
        autosize: unref(autosize),
        type: "textarea",
        placeholder: unref(getPlaceholderByClient),
        resize: "none",
        onCompositionstart: ($event) => isInputChinese.value = true,
        onCompositionend: ($event) => isInputChinese.value = false,
        onKeydown: handleInputEnter,
        onBlur: handleBlur,
        onFocus: handleFocus
      }, null, _parent));
      _push(`<div class="py-[3px] mr-[-7px] input-suffix" data-v-e757fefd>`);
      _push(ssrRenderComponent(_component_ElButton, {
        disabled: !unref(userInput) || _ctx.loading,
        type: "primary",
        style: {
          height: "40px"
        },
        onClick: ($event) => emit("enter", unref(userInput))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "el-icon-Promotion",
              size: 20
            }, null, _parent2, _scopeId));
            _push2(` \u53D1\u9001 `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "el-icon-Promotion",
                size: 20
              }),
              createTextVNode(" \u53D1\u9001 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/the-chat-action/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e757fefd"]]);

export { __nuxt_component_1 as _, __nuxt_component_2$1 as a, __nuxt_component_4 as b };
//# sourceMappingURL=index-c3Av-r7B.mjs.map
