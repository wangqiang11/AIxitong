import { E as ElSegmented } from './el-segmented-KMsqQ2AI.mjs';
import { E as ElTag } from './index-D7S5lb8a.mjs';
import { _ as _sfc_main$3 } from './index-DRyhljQ3.mjs';
import { a5 as useAppStore, A as feedback, b3 as __nuxt_component_1$1, d as ElButton } from './server.mjs';
import { _ as _sfc_main$4 } from './index-BoqjHllR.mjs';
import { useSSRContext, defineComponent, ref, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, isRef, shallowRef, reactive, openBlock, createBlock, Fragment, renderList, createCommentVNode, withDirectives, nextTick } from 'vue';
import { u as useAudioPlay } from './useAudioPlay-C6V9947w.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrGetDirectiveProps } from 'vue/server-renderer';
import { c as chatUpdate, d as deleteChatRecord, g as getChatBroadcast } from './chat-jd47avQj.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { E as ElEmpty } from './el-empty-xbPr04pX.mjs';
import { E as ElDrawer } from './el-drawer-C2UOPjce.mjs';
import { _ as _sfc_main$5 } from './index-L3E_sDO1.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElInfiniteScroll } from './index-DNeGbNHc.mjs';
import { u as useCopy } from './useCopy-CfS-iChu.mjs';
import { c as create_record_null } from './create_record_null-C_UPv5do.mjs';
import { useVModel, useElementSize } from '@vueuse/core';
import '@vue/shared';
import 'markdown-it';
import 'highlight.js';
import '@vscode/markdown-it-katex';
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
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './use-dialog-DHq_GjFf.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './position-DVxxNIGX.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "record-item",
  __ssrInlineRender: true,
  props: {
    typing: { type: Boolean, default: false },
    title: { default: "" },
    time: { default: "" },
    content: { default: "" },
    showCopy: { type: Boolean, default: true },
    autoresize: { type: Boolean, default: true },
    showRewrite: { type: Boolean, default: false },
    overflow: { type: Boolean, default: false },
    showVoice: { type: Boolean, default: false },
    recordId: { default: 0 },
    index: { default: 0 },
    edit: { type: Boolean },
    modelName: { default: "" }
  },
  emits: ["content", "copy", "rewrite", "refresh"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const appStore = useAppStore();
    const props = __props;
    const recordEditorRef = ref();
    const showEdit = ref(false);
    watch(
      () => props.edit,
      (value) => {
        if (value) {
          showEdit.value = true;
        }
      },
      { immediate: true }
    );
    const continuation = async () => {
      try {
        showEdit.value = true;
        await nextTick();
        recordEditorRef.value.continuation();
      } catch (error) {
      }
    };
    const handleSave = async () => {
      try {
        await chatUpdate({
          id: props.recordId,
          content: recordEditorRef.value.getContent()
        });
        emit("refresh");
        showEdit.value = false;
      } catch (error) {
      }
    };
    const handleDel = async () => {
      try {
        await feedback.confirm("\u786E\u5B9A\u5220\u9664\u8BE5\u8BB0\u5F55\uFF1F");
        await deleteChatRecord({
          id: props.recordId
        });
        emit("refresh");
      } catch (error) {
      }
    };
    const chatBroadcast = async () => {
      const data = await getChatBroadcast({
        records_id: props.recordId,
        content: props.index
      });
      return data.file;
    };
    const { play, audioPlaying, pause, audioLoading } = useAudioPlay();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tag = ElTag;
      const _component_Markdown = _sfc_main$3;
      const _component_client_only = __nuxt_component_1$1;
      const _component_ElButton = ElButton;
      const _component_Icon = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["create-record-item", {
          "!pt-2": unref(showEdit)
        }]
      }, _attrs))} data-v-c73305ad><div style="${ssrRenderStyle(!unref(showEdit) ? null : { display: "none" })}" data-v-c73305ad><div class="" data-v-c73305ad><div class="mr-auto line-clamp-1 text-lg font-medium" data-v-c73305ad>${ssrInterpolate(_ctx.title)}</div>`);
      if (_ctx.modelName && unref(appStore).getChatConfig.is_show_model) {
        _push(ssrRenderComponent(_component_el_tag, {
          class: "mt-2",
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
      _push(`</div><div class="mt-[10px] overflow-hidden" style="${ssrRenderStyle({
        height: _ctx.autoresize ? "" : "calc(100vh - 340px)"
      })}" data-v-c73305ad>`);
      _push(ssrRenderComponent(_component_Markdown, {
        content: _ctx.content,
        lineClamp: 8,
        class: {
          "wait-typing": _ctx.typing && !_ctx.content,
          typing: _ctx.typing && _ctx.content
        }
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`<div class="flex items-center flex-none mt-[10px]" data-v-c73305ad><div class="text-xs text-tx-secondary mr-auto" data-v-c73305ad>${ssrInterpolate(_ctx.time)}</div>`);
      if (_ctx.showVoice) {
        _push(`<!--[-->`);
        if (unref(audioPlaying)) {
          _push(ssrRenderComponent(_component_ElButton, {
            round: "",
            size: "small",
            color: "#fff",
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
            round: "",
            size: "small",
            color: "#fff",
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
      if (_ctx.showRewrite) {
        _push(ssrRenderComponent(_component_ElButton, {
          round: "",
          size: "small",
          color: "#fff",
          onClick: continuation
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u7EED\u5199 `);
            } else {
              return [
                createTextVNode(" \u7EED\u5199 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.showRewrite) {
        _push(ssrRenderComponent(_component_ElButton, {
          round: "",
          size: "small",
          color: "#fff",
          onClick: ($event) => emit("rewrite")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u91CD\u5199 `);
            } else {
              return [
                createTextVNode(" \u91CD\u5199 ")
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
          round: "",
          size: "small",
          color: "#fff",
          onClick: ($event) => emit("copy", _ctx.content)
        }, {
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
      if (unref(showEdit)) {
        _push(ssrRenderComponent(_component_ElButton, {
          round: "",
          size: "small",
          color: "#fff",
          onClick: ($event) => showEdit.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u53D6\u6D88 `);
            } else {
              return [
                createTextVNode(" \u53D6\u6D88 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(showEdit)) {
        _push(ssrRenderComponent(_component_ElButton, {
          round: "",
          size: "small",
          type: "primary",
          onClick: handleSave
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u4FDD\u5B58 `);
            } else {
              return [
                createTextVNode(" \u4FDD\u5B58 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(showEdit)) {
        _push(ssrRenderComponent(_component_ElButton, {
          round: "",
          size: "small",
          color: "#fff",
          onClick: ($event) => showEdit.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u7F16\u8F91 `);
            } else {
              return [
                createTextVNode(" \u7F16\u8F91 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(showEdit)) {
        _push(ssrRenderComponent(_component_ElButton, {
          round: "",
          size: "small",
          color: "#fff",
          onClick: handleDel
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u5220\u9664 `);
            } else {
              return [
                createTextVNode(" \u5220\u9664 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/the-create/record-item.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c73305ad"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "record-preview",
  __ssrInlineRender: true,
  props: {
    title: { default: "" },
    time: { default: "" },
    content: { default: "" },
    overflow: { type: Boolean, default: false }
  },
  emits: ["copy"],
  setup(__props, { expose: __expose, emit: __emit }) {
    useAppStore();
    const emit = __emit;
    const visible = ref(false);
    const open = () => {
      visible.value = true;
    };
    __expose({
      open
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_drawer = ElDrawer;
      const _component_overflow_tooltip = _sfc_main$5;
      const _component_el_button = ElButton;
      const _component_Icon = _sfc_main$4;
      const _component_ElScrollbar = ElScrollbar;
      const _component_Markdown = _sfc_main$3;
      _push(ssrRenderComponent(_component_el_drawer, mergeProps({
        ref: "drawerRef",
        modelValue: unref(visible),
        "onUpdate:modelValue": ($event) => isRef(visible) ? visible.value = $event : null,
        title: "\u521B\u4F5C\u8BE6\u60C5",
        direction: "rtl",
        class: "record-preview-drawer",
        size: "50%",
        "append-to-body": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full flex flex-col"${_scopeId}><div class="flex items-center pb-[16px]"${_scopeId}><div class="text-lg flex-1 min-w-0 font-medium"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_overflow_tooltip, { content: _ctx.title }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_el_button, {
              link: "",
              onClick: ($event) => emit("copy", _ctx.content)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "el-icon-DocumentCopy",
                    size: 18
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="ml-[10px]"${_scopeId2}>\u590D\u5236</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "el-icon-DocumentCopy",
                      size: 18
                    }),
                    createVNode("span", { class: "ml-[10px]" }, "\u590D\u5236")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex-1 min-h-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElScrollbar, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="pt-[16px]"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Markdown, { content: _ctx.content }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "pt-[16px]" }, [
                      createVNode(_component_Markdown, { content: _ctx.content }, null, 8, ["content"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "h-full flex flex-col" }, [
                createVNode("div", { class: "flex items-center pb-[16px]" }, [
                  createVNode("div", { class: "text-lg flex-1 min-w-0 font-medium" }, [
                    createVNode(_component_overflow_tooltip, { content: _ctx.title }, null, 8, ["content"])
                  ]),
                  createVNode(_component_el_button, {
                    link: "",
                    onClick: ($event) => emit("copy", _ctx.content)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "el-icon-DocumentCopy",
                        size: 18
                      }),
                      createVNode("span", { class: "ml-[10px]" }, "\u590D\u5236")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                createVNode("div", { class: "flex-1 min-h-0" }, [
                  createVNode(_component_ElScrollbar, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "pt-[16px]" }, [
                        createVNode(_component_Markdown, { content: _ctx.content }, null, 8, ["content"])
                      ])
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/the-create/record-preview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create-results",
  __ssrInlineRender: true,
  props: {
    current: {},
    loading: { type: Boolean },
    currentCreationHistory: {},
    pageInfo: {}
  },
  emits: [
    "update:current",
    "load",
    "clean",
    "rewrite",
    "refresh"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const currentTab = useVModel(props, "current", emit);
    const scrollbarRef = ref();
    const createRecordPreviewRef = shallowRef();
    const currentCreationHistoryRef = shallowRef();
    const appStore = useAppStore();
    const { copy } = useCopy();
    const copyContent = async (content) => {
      await copy(content);
    };
    const previewData = reactive({
      title: "",
      content: ""
    });
    const updateCurrentCreationHistory = (parentIndex, childIndex, newContent) => {
      if (!props.currentCreationHistory.length) return;
      props.currentCreationHistory[parentIndex].reply[childIndex] = newContent;
    };
    const handelRecordPreview = (title, content) => {
      var _a;
      previewData.title = title;
      previewData.content = content;
      (_a = createRecordPreviewRef.value) == null ? void 0 : _a.open();
    };
    const { height } = useElementSize(currentCreationHistoryRef);
    watch(height, (value) => {
      var _a, _b, _c;
      if (props.loading) {
        const scrollContainerHeight = (_b = (_a = scrollbarRef.value) == null ? void 0 : _a.wrapRef) == null ? void 0 : _b.offsetHeight;
        (_c = scrollbarRef.value) == null ? void 0 : _c.setScrollTop(scrollContainerHeight);
      }
    });
    const load = () => {
      emit("load");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_segmented = ElSegmented;
      const _component_TheCreateRecordItem = __nuxt_component_1;
      const _component_ElButton = ElButton;
      const _component_el_empty = ElEmpty;
      const _component_TheCreateRecordPreview = _sfc_main$1;
      const _directive_infinite_scroll = ElInfiniteScroll;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-full creation-result flex-1 min-w-0" }, _attrs))} data-v-8f24cad8><div class="rounded-[12px] pt-4 pl-4" data-v-8f24cad8>`);
      _push(ssrRenderComponent(_component_el_segmented, {
        modelValue: unref(currentTab),
        "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
        block: false,
        class: "segmented !p-[8px] !rounded-[12px] !bg-[#f7f7f7] dark:!bg-page",
        options: [
          { name: "\u672C\u6B21\u521B\u4F5C\u7ED3\u679C", value: "current" },
          { name: "\u5386\u53F2\u521B\u4F5C\u7ED3\u679C", value: "history" }
        ]
      }, {
        default: withCtx(({ item, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center gap-1 p-2" data-v-8f24cad8${_scopeId}><div class="text-xl" data-v-8f24cad8${_scopeId}>${ssrInterpolate(item.name)}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center gap-1 p-2" }, [
                createVNode("div", { class: "text-xl" }, toDisplayString(item.name), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 min-h-0 h-full" data-v-8f24cad8>`);
      if (unref(currentTab) === "current") {
        _push(`<!--[-->`);
        if (_ctx.currentCreationHistory.length) {
          _push(ssrRenderComponent(unref(ElScrollbar), {
            ref_key: "scrollbarRef",
            ref: scrollbarRef
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (_ctx.currentCreationHistory.length) {
                  _push2(`<div class="px-[16px] pt-[16px]" data-v-8f24cad8${_scopeId}><!--[-->`);
                  ssrRenderList(_ctx.currentCreationHistory, (item, index) => {
                    _push2(`<!--[--><!--[-->`);
                    ssrRenderList(item.reply, (text, tindex) => {
                      _push2(ssrRenderComponent(_component_TheCreateRecordItem, {
                        key: tindex,
                        class: "mb-[16px]",
                        content: text,
                        typing: _ctx.loading,
                        time: item.create_time,
                        title: item.title,
                        "record-id": item.id,
                        edit: true,
                        autoresize: false,
                        "show-rewrite": !!item.extra && !_ctx.loading,
                        "model-name": item.model,
                        onCopy: copyContent,
                        onRewrite: ($event) => emit("rewrite", item),
                        onRefresh: ($event) => emit("refresh"),
                        onContent: (newContent) => updateCurrentCreationHistory(
                          index,
                          tindex,
                          newContent
                        )
                      }, null, _parent2, _scopeId));
                    });
                    _push2(`<!--]--><!--]-->`);
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  _ctx.currentCreationHistory.length ? (openBlock(), createBlock("div", {
                    key: 0,
                    ref_key: "currentCreationHistoryRef",
                    ref: currentCreationHistoryRef,
                    class: "px-[16px] pt-[16px]"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.currentCreationHistory, (item, index) => {
                      return openBlock(), createBlock(Fragment, { key: index }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.reply, (text, tindex) => {
                          return openBlock(), createBlock(_component_TheCreateRecordItem, {
                            key: tindex,
                            class: "mb-[16px]",
                            content: text,
                            typing: _ctx.loading,
                            time: item.create_time,
                            title: item.title,
                            "record-id": item.id,
                            edit: true,
                            autoresize: false,
                            "show-rewrite": !!item.extra && !_ctx.loading,
                            "model-name": item.model,
                            onCopy: copyContent,
                            onRewrite: ($event) => emit("rewrite", item),
                            onRefresh: ($event) => emit("refresh"),
                            onContent: (newContent) => updateCurrentCreationHistory(
                              index,
                              tindex,
                              newContent
                            )
                          }, null, 8, ["content", "typing", "time", "title", "record-id", "show-rewrite", "model-name", "onRewrite", "onRefresh", "onContent"]);
                        }), 128))
                      ], 64);
                    }), 128))
                  ], 512)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<div class="h-full flex flex-col items-center justify-center py-[100px]" data-v-8f24cad8><img class="w-[120px] h-[120px]"${ssrRenderAttr("src", create_record_null)} alt="" data-v-8f24cad8><div class="my-[16px] font-medium" data-v-8f24cad8> AI\u521B\u4F5C\u7ED3\u679C\u4F1A\u5728\u663E\u793A\u8FD9\u91CC\uFF0C\u73B0\u5728\u4F60\u53EA\u9700\u8981 </div><div class="text-tx-regular text-sm" data-v-8f24cad8> 1. \u5728\u5DE6\u4FA7\u586B\u597D\u5FC5\u8981\u7684\u4FE1\u606F\uFF0C\u586B\u5199\u8D8A\u8BE6\u7EC6\uFF0C\u7ED3\u679C\u8D8A\u51C6\u786E\u54E6 <br data-v-8f24cad8> 2.\u70B9\u51FB\u667A\u80FD\u521B\u4F5C\u6309\u94AE\uFF0C\u9759\u5F85AI\u5999\u7B14\u751F\u82B1\uFF0C\u4E00\u822C\u572810\u79D2\u5185\u641E\u5B9A </div></div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        if (_ctx.pageInfo.lists.length) {
          _push(ssrRenderComponent(unref(ElScrollbar), { class: "h-full" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div${ssrRenderAttrs(mergeProps({
                  "infinite-scroll-distance": "50",
                  class: "h-full px-[16px] pt-[16px]"
                }, ssrGetDirectiveProps(_ctx, _directive_infinite_scroll, load)))} data-v-8f24cad8${_scopeId}><div data-v-8f24cad8${_scopeId}>`);
                _push2(ssrRenderComponent(_component_ElButton, {
                  onClick: ($event) => emit("clean")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u6E05\u7A7A\u8BB0\u5F55`);
                    } else {
                      return [
                        createTextVNode(" \u6E05\u7A7A\u8BB0\u5F55")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><!--[-->`);
                ssrRenderList(_ctx.pageInfo.lists, (item) => {
                  _push2(`<div class="mt-[16px]" data-v-8f24cad8${_scopeId}><!--[-->`);
                  ssrRenderList(item.reply, (text, tindex) => {
                    _push2(`<div class="mb-[16px]" data-v-8f24cad8${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_TheCreateRecordItem, {
                      class: "cursor-pointer",
                      content: text,
                      time: item.create_time,
                      title: item.title,
                      overflow: true,
                      "show-rewrite": !!item.extra,
                      "show-voice": unref(appStore).getIsVoiceOpen,
                      "record-id": item.id,
                      "model-name": item.model,
                      index: tindex,
                      onClick: ($event) => handelRecordPreview(item.title, text),
                      onCopy: copyContent,
                      onRewrite: ($event) => emit("rewrite", item),
                      onRefresh: ($event) => emit("refresh")
                    }, null, _parent2, _scopeId));
                    _push2(`</div>`);
                  });
                  _push2(`<!--]--></div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                return [
                  withDirectives((openBlock(), createBlock("div", {
                    "infinite-scroll-distance": "50",
                    class: "h-full px-[16px] pt-[16px]"
                  }, [
                    createVNode("div", null, [
                      createVNode(_component_ElButton, {
                        onClick: ($event) => emit("clean")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u6E05\u7A7A\u8BB0\u5F55")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.pageInfo.lists, (item) => {
                      return openBlock(), createBlock("div", {
                        key: item.id,
                        class: "mt-[16px]"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.reply, (text, tindex) => {
                          return openBlock(), createBlock("div", {
                            key: tindex,
                            class: "mb-[16px]"
                          }, [
                            createVNode(_component_TheCreateRecordItem, {
                              class: "cursor-pointer",
                              content: text,
                              time: item.create_time,
                              title: item.title,
                              overflow: true,
                              "show-rewrite": !!item.extra,
                              "show-voice": unref(appStore).getIsVoiceOpen,
                              "record-id": item.id,
                              "model-name": item.model,
                              index: tindex,
                              onClick: ($event) => handelRecordPreview(item.title, text),
                              onCopy: copyContent,
                              onRewrite: ($event) => emit("rewrite", item),
                              onRefresh: ($event) => emit("refresh")
                            }, null, 8, ["content", "time", "title", "show-rewrite", "show-voice", "record-id", "model-name", "index", "onClick", "onRewrite", "onRefresh"])
                          ]);
                        }), 128))
                      ]);
                    }), 128))
                  ])), [
                    [_directive_infinite_scroll, load]
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<div class="h-full flex flex-col items-center justify-center py-[100px]" data-v-8f24cad8>`);
          _push(ssrRenderComponent(_component_el_empty, { image: unref(create_record_null) }, null, _parent));
          _push(`</div>`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_TheCreateRecordPreview, {
        ref_key: "createRecordPreviewRef",
        ref: createRecordPreviewRef,
        content: unref(previewData).content,
        title: unref(previewData).title,
        onCopy: copyContent
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/creation/_components/create-results.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CreateResults = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8f24cad8"]]);

export { CreateResults as default };
//# sourceMappingURL=create-results-93a7QIa8.mjs.map
