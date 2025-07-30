import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElRadioGroup, a as ElRadio } from './el-radio-group-PXDiQVwm.mjs';
import { aM as uploadFile, A as feedback, E as ElInput, d as ElButton, B as vLoading } from './server.mjs';
import { E as ElUpload } from './el-upload-8WlOxHo4.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { defineComponent, shallowRef, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, withDirectives, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useCanvasStore } from './canvas-DJ4hjlD7.mjs';
import '@vue/shared';
import 'lodash-unified';
import 'async-validator';
import '@vueuse/core';
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
import './el-progress-B1IVess1.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './useAudioPlay-C6V9947w.mjs';
import './file-RP6bCPT_.mjs';
import 'jsdom';
import 'jsdom/lib/jsdom/living/generated/utils';
import 'jsdom/lib/jsdom/utils';
import 'fontfaceobserver';

const fileAccept = ".wav,.mp3";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "center-setting",
  __ssrInlineRender: true,
  setup(__props) {
    const canvasStore = useCanvasStore();
    const uploadRef = shallowRef();
    const loading = ref(false);
    const typeChange = (value) => {
    };
    const fileInput = async ({ raw: file }) => {
      var _a;
      try {
        if (file) {
          loading.value = true;
          const res = await uploadFile("audio", { file, data: { use_type: 2 } });
          canvasStore.voiceContent.voice_url = res.uri;
          canvasStore.voiceContent.voice_name = res.name;
        }
      } catch (error) {
        feedback.msgError(error);
      } finally {
        loading.value = false;
        (_a = uploadRef.value) == null ? void 0 : _a.clearFiles();
      }
    };
    const removeAudio = () => {
      canvasStore.voiceContent.voice_url = "";
      canvasStore.voiceContent.voice_name = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElForm = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_radio = ElRadio;
      const _component_el_input = ElInput;
      const _component_el_upload = ElUpload;
      const _component_Icon = _sfc_main$1;
      const _component_ElButton = ElButton;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-[10px] p-main h-[420px]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ElForm, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form_item, { label: "\u64AD\u62A5\u5185\u5BB9" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_radio_group, {
                    modelValue: unref(canvasStore).voiceContent.type,
                    "onUpdate:modelValue": ($event) => unref(canvasStore).voiceContent.type = $event,
                    onChange: typeChange
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_radio, { label: 1 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u6587\u672C\u8F93\u5165`);
                            } else {
                              return [
                                createTextVNode("\u6587\u672C\u8F93\u5165")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_radio, { label: 2 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u97F3\u9891\u8F93\u5165`);
                            } else {
                              return [
                                createTextVNode("\u97F3\u9891\u8F93\u5165")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_radio, { label: 1 }, {
                            default: withCtx(() => [
                              createTextVNode("\u6587\u672C\u8F93\u5165")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_radio, { label: 2 }, {
                            default: withCtx(() => [
                              createTextVNode("\u97F3\u9891\u8F93\u5165")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_radio_group, {
                      modelValue: unref(canvasStore).voiceContent.type,
                      "onUpdate:modelValue": ($event) => unref(canvasStore).voiceContent.type = $event,
                      onChange: typeChange
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_radio, { label: 1 }, {
                          default: withCtx(() => [
                            createTextVNode("\u6587\u672C\u8F93\u5165")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_radio, { label: 2 }, {
                          default: withCtx(() => [
                            createTextVNode("\u97F3\u9891\u8F93\u5165")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(canvasStore).voiceContent.type == 1) {
              _push2(ssrRenderComponent(_component_el_form_item, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_input, {
                      modelValue: unref(canvasStore).voiceContent.text,
                      "onUpdate:modelValue": ($event) => unref(canvasStore).voiceContent.text = $event,
                      type: "textarea",
                      rows: 15,
                      resize: "none",
                      placeholder: "\u8BF7\u8F93\u5165\u64AD\u62A5\u5185\u5BB9..."
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_input, {
                        modelValue: unref(canvasStore).voiceContent.text,
                        "onUpdate:modelValue": ($event) => unref(canvasStore).voiceContent.text = $event,
                        type: "textarea",
                        rows: 15,
                        resize: "none",
                        placeholder: "\u8BF7\u8F93\u5165\u64AD\u62A5\u5185\u5BB9..."
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(canvasStore).voiceContent.type == 2) {
              _push2(ssrRenderComponent(_component_el_form_item, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_el_upload, mergeProps({
                      ref_key: "uploadRef",
                      ref: uploadRef,
                      drag: "",
                      "on-change": fileInput,
                      "auto-upload": false,
                      "show-file-list": false,
                      accept: fileAccept
                    }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(loading))), {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="el-upload__text flex items-center justify-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Icon, { name: "el-icon-Upload" }, null, _parent4, _scopeId3));
                          _push4(` \u62D6\u62FD\u6587\u4EF6\u81F3\u6B64\uFF0C\u6216\u70B9\u51FB<em${_scopeId3}> \u9009\u62E9\u6587\u4EF6 </em></div><div class="el-upload__text"${_scopeId3}> \u97F3\u9891\u652F\u6301\uFF1A${ssrInterpolate(fileAccept)}\u683C\u5F0F\uFF0C\u65F6\u957F\u4E0D\u8D85\u8FC730\u5206\u949F\uFF0C \u5927\u5C0F\u4E0D\u8D85\u8FC750MB </div>`);
                        } else {
                          return [
                            createVNode("div", { class: "el-upload__text flex items-center justify-center" }, [
                              createVNode(_component_Icon, { name: "el-icon-Upload" }),
                              createTextVNode(" \u62D6\u62FD\u6587\u4EF6\u81F3\u6B64\uFF0C\u6216\u70B9\u51FB"),
                              createVNode("em", null, " \u9009\u62E9\u6587\u4EF6 ")
                            ]),
                            createVNode("div", { class: "el-upload__text" }, " \u97F3\u9891\u652F\u6301\uFF1A" + toDisplayString(fileAccept) + "\u683C\u5F0F\uFF0C\u65F6\u957F\u4E0D\u8D85\u8FC730\u5206\u949F\uFF0C \u5927\u5C0F\u4E0D\u8D85\u8FC750MB ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    if (unref(canvasStore).voiceContent.voice_url) {
                      _push3(`<div class="mt-[10px]"${_scopeId2}><div class="flex flex-col items-center justify-center"${_scopeId2}><div${_scopeId2}>${ssrInterpolate(unref(canvasStore).voiceContent.voice_name)}</div><div class="flex mt-[10px] items-center"${_scopeId2}><div class="scale-90"${_scopeId2}><audio${ssrRenderAttr("src", unref(canvasStore).voiceContent.voice_url)} controls${_scopeId2}></audio></div>`);
                      _push3(ssrRenderComponent(_component_ElButton, {
                        link: "",
                        onClick: removeAudio
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_Icon, { name: "el-icon-Delete" }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_Icon, { name: "el-icon-Delete" })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</div></div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex-1" }, [
                        withDirectives((openBlock(), createBlock(_component_el_upload, {
                          ref_key: "uploadRef",
                          ref: uploadRef,
                          drag: "",
                          "on-change": fileInput,
                          "auto-upload": false,
                          "show-file-list": false,
                          accept: fileAccept
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "el-upload__text flex items-center justify-center" }, [
                              createVNode(_component_Icon, { name: "el-icon-Upload" }),
                              createTextVNode(" \u62D6\u62FD\u6587\u4EF6\u81F3\u6B64\uFF0C\u6216\u70B9\u51FB"),
                              createVNode("em", null, " \u9009\u62E9\u6587\u4EF6 ")
                            ]),
                            createVNode("div", { class: "el-upload__text" }, " \u97F3\u9891\u652F\u6301\uFF1A" + toDisplayString(fileAccept) + "\u683C\u5F0F\uFF0C\u65F6\u957F\u4E0D\u8D85\u8FC730\u5206\u949F\uFF0C \u5927\u5C0F\u4E0D\u8D85\u8FC750MB ")
                          ]),
                          _: 1
                        })), [
                          [_directive_loading, unref(loading)]
                        ]),
                        unref(canvasStore).voiceContent.voice_url ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mt-[10px]"
                        }, [
                          createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                            createVNode("div", null, toDisplayString(unref(canvasStore).voiceContent.voice_name), 1),
                            createVNode("div", { class: "flex mt-[10px] items-center" }, [
                              createVNode("div", { class: "scale-90" }, [
                                createVNode("audio", {
                                  src: unref(canvasStore).voiceContent.voice_url,
                                  controls: ""
                                }, null, 8, ["src"])
                              ]),
                              createVNode(_component_ElButton, {
                                link: "",
                                onClick: removeAudio
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, { name: "el-icon-Delete" })
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_el_form_item, { label: "\u64AD\u62A5\u5185\u5BB9" }, {
                default: withCtx(() => [
                  createVNode(_component_el_radio_group, {
                    modelValue: unref(canvasStore).voiceContent.type,
                    "onUpdate:modelValue": ($event) => unref(canvasStore).voiceContent.type = $event,
                    onChange: typeChange
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_radio, { label: 1 }, {
                        default: withCtx(() => [
                          createTextVNode("\u6587\u672C\u8F93\u5165")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_radio, { label: 2 }, {
                        default: withCtx(() => [
                          createTextVNode("\u97F3\u9891\u8F93\u5165")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              unref(canvasStore).voiceContent.type == 1 ? (openBlock(), createBlock(_component_el_form_item, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(canvasStore).voiceContent.text,
                    "onUpdate:modelValue": ($event) => unref(canvasStore).voiceContent.text = $event,
                    type: "textarea",
                    rows: 15,
                    resize: "none",
                    placeholder: "\u8BF7\u8F93\u5165\u64AD\u62A5\u5185\u5BB9..."
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(canvasStore).voiceContent.type == 2 ? (openBlock(), createBlock(_component_el_form_item, { key: 1 }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex-1" }, [
                    withDirectives((openBlock(), createBlock(_component_el_upload, {
                      ref_key: "uploadRef",
                      ref: uploadRef,
                      drag: "",
                      "on-change": fileInput,
                      "auto-upload": false,
                      "show-file-list": false,
                      accept: fileAccept
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "el-upload__text flex items-center justify-center" }, [
                          createVNode(_component_Icon, { name: "el-icon-Upload" }),
                          createTextVNode(" \u62D6\u62FD\u6587\u4EF6\u81F3\u6B64\uFF0C\u6216\u70B9\u51FB"),
                          createVNode("em", null, " \u9009\u62E9\u6587\u4EF6 ")
                        ]),
                        createVNode("div", { class: "el-upload__text" }, " \u97F3\u9891\u652F\u6301\uFF1A" + toDisplayString(fileAccept) + "\u683C\u5F0F\uFF0C\u65F6\u957F\u4E0D\u8D85\u8FC730\u5206\u949F\uFF0C \u5927\u5C0F\u4E0D\u8D85\u8FC750MB ")
                      ]),
                      _: 1
                    })), [
                      [_directive_loading, unref(loading)]
                    ]),
                    unref(canvasStore).voiceContent.voice_url ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-[10px]"
                    }, [
                      createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                        createVNode("div", null, toDisplayString(unref(canvasStore).voiceContent.voice_name), 1),
                        createVNode("div", { class: "flex mt-[10px] items-center" }, [
                          createVNode("div", { class: "scale-90" }, [
                            createVNode("audio", {
                              src: unref(canvasStore).voiceContent.voice_url,
                              controls: ""
                            }, null, 8, ["src"])
                          ]),
                          createVNode(_component_ElButton, {
                            link: "",
                            onClick: removeAudio
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, { name: "el-icon-Delete" })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/_components/design-center/center-setting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=center-setting-DPq2Wa2F.mjs.map
