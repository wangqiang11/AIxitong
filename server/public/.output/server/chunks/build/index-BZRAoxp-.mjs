import { a5 as useAppStore, z as useUserStore, A as feedback, ah as __nuxt_component_0, d as ElButton } from './server.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElForm } from './index-DLL0sEcv.mjs';
import { E as ElResult } from './el-result-V-Bl2idQ.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { defineComponent, shallowRef, reactive, watch, computed, withCtx, unref, openBlock, createBlock, createCommentVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as getVideoConfig, p as postVideoGenerate } from './video-DH7H33E1.mjs';
import _sfc_main$1 from './video-type-Ch-m1w_A.mjs';
import VideoSize from './video-size-7uLk9r-T.mjs';
import _sfc_main$2 from './prompt-DBQuSt40.mjs';
import _sfc_main$3 from './video-style-BtV9ixxb.mjs';
import UploaderPicture from './uploader-picture-BEoMd7qV.mjs';
import VideoResult from './video-result-PLYZQFsO.mjs';
import { e as emptyImg } from './empty_con-BDdV71_z.mjs';
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
import 'async-validator';
import './position-DVxxNIGX.mjs';
import './el-segmented-KMsqQ2AI.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-BS4hxwV8.mjs';
import './index-BoqjHllR.mjs';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import './uploader-BjIsDS-m.mjs';
import './index-D7S5lb8a.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-D8NbhMns.mjs';
import './index-DVLwoLV9.mjs';
import 'video.js';
import './index-CJqYHNUB.mjs';
import './dropdown-C6fgV-Vy.mjs';
import './index-DNeGbNHc.mjs';
import './download-N0luyf1S.mjs';
import './video_empty-DomB--q9.mjs';
import './error-BBvUyUA_.mjs';
import './video-share-BGIVzO_L.mjs';
import './index-CUhOTuS-.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import './task_reward-DRop0WtE.mjs';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    const userStore = useUserStore();
    const videoResultRef = shallowRef();
    const formData = reactive({
      type: 1,
      prompt: "",
      scale: "1:1",
      image: "",
      style_id: [],
      channel: ""
    });
    const { data: videoConfig, refresh } = useAsyncData(() => getVideoConfig(), {
      default() {
        return {
          model: {},
          style: [],
          example: {}
        };
      },
      lazy: true
    }, "$xAqLrLrbXd");
    watch(videoConfig, (value) => {
      formData.channel = value.channel;
    });
    const regenerate = (item) => {
      Object.assign(formData, item);
    };
    const currentModel = computed(() => {
      return videoConfig.value.model[formData.channel] || {};
    });
    const { lockFn: handelVideoGenerate, isLock: isLockGenerate } = useLockFn(
      async () => {
        var _a;
        try {
          if (!formData.prompt) {
            feedback.msgError(
              `\u8BF7\u8F93\u5165${formData.type === 1 ? "\u89C6\u9891\u573A\u666F" : "\u63CF\u8FF0\u8BCD"}`
            );
            return;
          }
          if (formData.type === 2 && !formData.image)
            return feedback.msgError("\u8BF7\u4E0A\u4F20\u4E0A\u4F20\u53C2\u8003\u56FE");
          await postVideoGenerate({
            ...formData
          });
          formData.prompt = "";
          formData.style_id = [];
          (_a = videoResultRef.value) == null ? void 0 : _a.refresh();
          userStore.getUser();
          refresh();
        } catch (error) {
        } finally {
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_el_scrollbar = ElScrollbar;
      const _component_el_form = ElForm;
      const _component_el_button = ElButton;
      const _component_el_result = ElResult;
      const _component_el_image = ElImage;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(appStore).config.switch.video_status) {
              _push2(`<div class="h-full p-[16px] flex"${_scopeId}><div class="bg-body w-[355px] h-full rounded-[12px] flex flex-col"${_scopeId}><div class="p-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$1, {
                modelValue: unref(formData).type,
                "onUpdate:modelValue": ($event) => unref(formData).type = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex-1 min-h-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_scrollbar, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_form, {
                      class: "px-4",
                      ref: "formRef",
                      model: unref(formData),
                      "label-position": "top",
                      "show-message": false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (unref(formData).type === 2) {
                            _push4(ssrRenderComponent(UploaderPicture, {
                              modelValue: unref(formData).image,
                              "onUpdate:modelValue": ($event) => unref(formData).image = $event
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(ssrRenderComponent(_sfc_main$2, {
                            type: unref(formData).type,
                            modelValue: unref(formData).prompt,
                            "onUpdate:modelValue": ($event) => unref(formData).prompt = $event,
                            config: unref(videoConfig).example,
                            showTranslate: !!unref(videoConfig).translate_switch
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VideoSize, {
                            modelValue: unref(formData).scale,
                            "onUpdate:modelValue": ($event) => unref(formData).scale = $event
                          }, null, _parent4, _scopeId3));
                          if (unref(videoConfig).style.length) {
                            _push4(ssrRenderComponent(_sfc_main$3, {
                              "style-list": unref(videoConfig).style,
                              modelValue: unref(formData).style_id,
                              "onUpdate:modelValue": ($event) => unref(formData).style_id = $event
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            unref(formData).type === 2 ? (openBlock(), createBlock(UploaderPicture, {
                              key: 0,
                              modelValue: unref(formData).image,
                              "onUpdate:modelValue": ($event) => unref(formData).image = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                            createVNode(_sfc_main$2, {
                              type: unref(formData).type,
                              modelValue: unref(formData).prompt,
                              "onUpdate:modelValue": ($event) => unref(formData).prompt = $event,
                              config: unref(videoConfig).example,
                              showTranslate: !!unref(videoConfig).translate_switch
                            }, null, 8, ["type", "modelValue", "onUpdate:modelValue", "config", "showTranslate"]),
                            createVNode(VideoSize, {
                              modelValue: unref(formData).scale,
                              "onUpdate:modelValue": ($event) => unref(formData).scale = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            unref(videoConfig).style.length ? (openBlock(), createBlock(_sfc_main$3, {
                              key: 1,
                              "style-list": unref(videoConfig).style,
                              modelValue: unref(formData).style_id,
                              "onUpdate:modelValue": ($event) => unref(formData).style_id = $event
                            }, null, 8, ["style-list", "modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_form, {
                        class: "px-4",
                        ref: "formRef",
                        model: unref(formData),
                        "label-position": "top",
                        "show-message": false
                      }, {
                        default: withCtx(() => [
                          unref(formData).type === 2 ? (openBlock(), createBlock(UploaderPicture, {
                            key: 0,
                            modelValue: unref(formData).image,
                            "onUpdate:modelValue": ($event) => unref(formData).image = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                          createVNode(_sfc_main$2, {
                            type: unref(formData).type,
                            modelValue: unref(formData).prompt,
                            "onUpdate:modelValue": ($event) => unref(formData).prompt = $event,
                            config: unref(videoConfig).example,
                            showTranslate: !!unref(videoConfig).translate_switch
                          }, null, 8, ["type", "modelValue", "onUpdate:modelValue", "config", "showTranslate"]),
                          createVNode(VideoSize, {
                            modelValue: unref(formData).scale,
                            "onUpdate:modelValue": ($event) => unref(formData).scale = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          unref(videoConfig).style.length ? (openBlock(), createBlock(_sfc_main$3, {
                            key: 1,
                            "style-list": unref(videoConfig).style,
                            modelValue: unref(formData).style_id,
                            "onUpdate:modelValue": ($event) => unref(formData).style_id = $event
                          }, null, 8, ["style-list", "modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["model"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="p-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_button, {
                size: "large",
                class: "w-full",
                type: "primary",
                loading: unref(isLockGenerate),
                onClick: unref(handelVideoGenerate)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div${_scopeId2}><span class="text-base font-bold"${_scopeId2}>\u7ACB\u5373\u751F\u6210</span>`);
                    if (unref(videoConfig).is_member) {
                      _push3(`<span class="text-sm ml-[4px]"${_scopeId2}> \u4F1A\u5458\u514D\u8D39 </span>`);
                    } else if (unref(currentModel).price > 0) {
                      _push3(`<span class="text-sm ml-[4px]"${_scopeId2}> \u6D88\u8017 ${ssrInterpolate(unref(currentModel).price)} ${ssrInterpolate(unref(appStore).getTokenUnit)}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode("span", { class: "text-base font-bold" }, "\u7ACB\u5373\u751F\u6210"),
                        unref(videoConfig).is_member ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-sm ml-[4px]"
                        }, " \u4F1A\u5458\u514D\u8D39 ")) : unref(currentModel).price > 0 ? (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-sm ml-[4px]"
                        }, " \u6D88\u8017 " + toDisplayString(unref(currentModel).price) + " " + toDisplayString(unref(appStore).getTokenUnit), 1)) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="ml-4 flex-1 min-w-0 h-full"${_scopeId}>`);
              _push2(ssrRenderComponent(VideoResult, {
                ref_key: "videoResultRef",
                ref: videoResultRef,
                onRegenerate: regenerate
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div class="h-full flex-1 flex p-4 justify-center items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_result, null, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_image, {
                      class: "w-[150px] dark:opacity-60",
                      src: unref(emptyImg)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_image, {
                        class: "w-[150px] dark:opacity-60",
                        src: unref(emptyImg)
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-info"${_scopeId2}>\u529F\u80FD\u6682\u672A\u5F00\u542F</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-info" }, "\u529F\u80FD\u6682\u672A\u5F00\u542F")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              unref(appStore).config.switch.video_status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "h-full p-[16px] flex"
              }, [
                createVNode("div", { class: "bg-body w-[355px] h-full rounded-[12px] flex flex-col" }, [
                  createVNode("div", { class: "p-4" }, [
                    createVNode(_sfc_main$1, {
                      modelValue: unref(formData).type,
                      "onUpdate:modelValue": ($event) => unref(formData).type = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex-1 min-h-0" }, [
                    createVNode(_component_el_scrollbar, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_form, {
                          class: "px-4",
                          ref: "formRef",
                          model: unref(formData),
                          "label-position": "top",
                          "show-message": false
                        }, {
                          default: withCtx(() => [
                            unref(formData).type === 2 ? (openBlock(), createBlock(UploaderPicture, {
                              key: 0,
                              modelValue: unref(formData).image,
                              "onUpdate:modelValue": ($event) => unref(formData).image = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                            createVNode(_sfc_main$2, {
                              type: unref(formData).type,
                              modelValue: unref(formData).prompt,
                              "onUpdate:modelValue": ($event) => unref(formData).prompt = $event,
                              config: unref(videoConfig).example,
                              showTranslate: !!unref(videoConfig).translate_switch
                            }, null, 8, ["type", "modelValue", "onUpdate:modelValue", "config", "showTranslate"]),
                            createVNode(VideoSize, {
                              modelValue: unref(formData).scale,
                              "onUpdate:modelValue": ($event) => unref(formData).scale = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            unref(videoConfig).style.length ? (openBlock(), createBlock(_sfc_main$3, {
                              key: 1,
                              "style-list": unref(videoConfig).style,
                              modelValue: unref(formData).style_id,
                              "onUpdate:modelValue": ($event) => unref(formData).style_id = $event
                            }, null, 8, ["style-list", "modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }, 8, ["model"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "p-4" }, [
                    createVNode(_component_el_button, {
                      size: "large",
                      class: "w-full",
                      type: "primary",
                      loading: unref(isLockGenerate),
                      onClick: unref(handelVideoGenerate)
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("span", { class: "text-base font-bold" }, "\u7ACB\u5373\u751F\u6210"),
                          unref(videoConfig).is_member ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-sm ml-[4px]"
                          }, " \u4F1A\u5458\u514D\u8D39 ")) : unref(currentModel).price > 0 ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-sm ml-[4px]"
                          }, " \u6D88\u8017 " + toDisplayString(unref(currentModel).price) + " " + toDisplayString(unref(appStore).getTokenUnit), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    }, 8, ["loading", "onClick"])
                  ])
                ]),
                createVNode("div", { class: "ml-4 flex-1 min-w-0 h-full" }, [
                  createVNode(VideoResult, {
                    ref_key: "videoResultRef",
                    ref: videoResultRef,
                    onRegenerate: regenerate
                  }, null, 512)
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "h-full flex-1 flex p-4 justify-center items-center"
              }, [
                createVNode(_component_el_result, null, {
                  icon: withCtx(() => [
                    createVNode(_component_el_image, {
                      class: "w-[150px] dark:opacity-60",
                      src: unref(emptyImg)
                    }, null, 8, ["src"])
                  ]),
                  title: withCtx(() => [
                    createVNode("div", { class: "text-info" }, "\u529F\u80FD\u6682\u672A\u5F00\u542F")
                  ]),
                  _: 1
                })
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/video/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BZRAoxp-.mjs.map
