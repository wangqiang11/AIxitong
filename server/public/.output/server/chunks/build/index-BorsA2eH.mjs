import { E as ElTooltip } from './index-L-VTEUEA.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { a5 as useAppStore, z as useUserStore, A as feedback, E as ElInput, d as ElButton } from './server.mjs';
import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { _ as __nuxt_component_1 } from './index-BS4hxwV8.mjs';
import { E as ElSwitch } from './el-switch-lh7eFiXh.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { useSSRContext, defineComponent, ref, shallowRef, reactive, computed, watch, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { g as getMusicConfig, p as postMusicImagine, a as postMusicGenerate } from './music-A1_NVo6h.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import '@popperjs/core';
import '@vue/shared';
import 'lodash-unified';
import 'async-validator';
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
import './dropdown-C6fgV-Vy.mjs';
import './position-DVxxNIGX.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const appStore = useAppStore();
    const userStore = useUserStore();
    const musicModeList = ref([
      {
        mode: 0,
        name: "\u7075\u611F\u6A21\u5F0F",
        tips: "\u53EA\u9700\u8F93\u5165\u4E00\u6BB5\u6B4C\u66F2\u63CF\u8FF0\uFF0C\u5373\u53EF\u751F\u6210\u4E00\u9996\u6B4C"
      },
      {
        mode: 1,
        name: "\u6B4C\u8BCD\u6A21\u5F0F",
        tips: "\u8F93\u5165\u81EA\u5DF1\u7684\u6B4C\u8BCD\uFF0C\u5373\u53EF\u751F\u6210\u4E00\u9996\u6B4C"
      }
    ]);
    const formRef = shallowRef();
    const formData = reactive({
      channel: "go_api",
      custom_mode: 0,
      title: "",
      prompt: "",
      style_id: [],
      is_style_custom: 0,
      make_instrumental: 0,
      style_custom: "",
      version: ""
    });
    const changeStyleCustom = () => {
      formData.is_style_custom = formData.is_style_custom ? 0 : 1;
    };
    ref(8);
    const selectStyle = (id) => {
      const index = formData.style_id.findIndex((item) => item === id);
      if (index !== -1) {
        formData.style_id.splice(index, 1);
      } else {
        formData.style_id.push(id);
      }
    };
    const isMuseMode = computed(
      () => formData.custom_mode === 0
      /* MUSE */
    );
    const formRules = computed(() => ({
      title: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u6B4C\u66F2\u540D\u79F0"
        }
      ],
      prompt: [
        {
          required: true,
          message: `\u8BF7\u8F93\u5165${isMuseMode.value ? "\u6B4C\u66F2\u63CF\u8FF0" : "\u6B4C\u8BCD"}`
        }
      ],
      version: [
        {
          required: true,
          message: `\u8BF7\u9009\u62E9\u7248\u672C`
        }
      ]
    }));
    const onFocus = () => {
      if (!userStore.isLogin) {
        userStore.toggleShowLogin();
      }
    };
    const { data: musicConfig, refresh } = useAsyncData(() => getMusicConfig(), {
      default() {
        return {
          model: {},
          style: [],
          imagine: {}
        };
      },
      lazy: true
    }, "$MBLbBPlEM9");
    watch(musicConfig, (value) => {
      formData.channel = value.channel;
      if (!formData.version) {
        formData.version = Object.keys(currentModel.value.version)[0] || "";
      }
    });
    const isShowImagine = computed(() => {
      return !isMuseMode.value && musicConfig.value.imagine.status;
    });
    const currentModel = computed(() => {
      return musicConfig.value.model[formData.channel] || {};
    });
    const { lockFn: handelImagine, isLock } = useLockFn(async () => {
      if (!formData.title) return feedback.msgError("\u8BF7\u8F93\u5165\u6B4C\u66F2\u540D\u79F0");
      const data = await postMusicImagine({
        prompt: formData.title
      });
      userStore.getUser();
      formData.prompt = data.content;
    });
    const { lockFn: handelMusicGenerate, isLock: isLockGenerate } = useLockFn(
      async () => {
        try {
          if (!formData.title) return feedback.msgError("\u8BF7\u8F93\u5165\u6B4C\u66F2\u540D\u79F0");
          if (!formData.prompt)
            return feedback.msgError(
              `\u8BF7\u8F93\u5165${!isMuseMode.value ? "\u6B4C\u8BCD" : "\u6B4C\u66F2\u63CF\u8FF0"}`
            );
          if (!formData.version) return feedback.msgError("\u8BF7\u9009\u62E9\u7248\u672C");
          await postMusicGenerate({
            ...formData,
            style_id: formData.is_style_custom ? [] : formData.style_id
          });
          formData.prompt = "";
          formData.title = "";
          formData.style_id = [];
          formData.style_custom = "";
          userStore.getUser();
          refresh();
          emit("update");
        } catch (error) {
        } finally {
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tooltip = ElTooltip;
      const _component_Icon = _sfc_main$1;
      const _component_ElScrollbar = ElScrollbar;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_popover = ElPopover;
      const _component_ElButton = ElButton;
      const _component_LTextarea = __nuxt_component_1;
      const _component_el_button = ElButton;
      const _component_el_switch = ElSwitch;
      const _component_el_image = ElImage;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full py-[16px] bg-body w-[350px] rounded-[12px] flex flex-col" }, _attrs))} data-v-30a57f21><div class="px-[16px]" data-v-30a57f21><div class="bg-page p-[8px] flex rounded-[10px]" data-v-30a57f21><!--[-->`);
      ssrRenderList(unref(musicModeList), (item) => {
        _push(`<div class="${ssrRenderClass([{
          "!bg-primary !text-white": unref(formData).custom_mode === item.mode
        }, "flex-1 flex items-center justify-center cursor-pointer py-[7px] text-tx-regular rounded-[10px]"])}" data-v-30a57f21><span class="mr-[5px]" data-v-30a57f21>${ssrInterpolate(item.name)}</span>`);
        _push(ssrRenderComponent(_component_el_tooltip, {
          content: item.tips,
          placement: "bottom",
          effect: "light",
          teleported: true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="flex" data-v-30a57f21${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-QuestionFilled" }, null, _parent2, _scopeId));
              _push2(`</span>`);
            } else {
              return [
                createVNode("span", { class: "flex" }, [
                  createVNode(_component_Icon, { name: "el-icon-QuestionFilled" })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="flex-1 min-h-0" data-v-30a57f21>`);
      _push(ssrRenderComponent(_component_ElScrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-[16px]" data-v-30a57f21${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_form, {
              ref_key: "formRef",
              ref: formRef,
              model: unref(formData),
              "label-position": "top",
              rules: unref(formRules),
              "show-message": false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, { prop: "title" }, {
                    label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="font-bold text-tx-primary" data-v-30a57f21${_scopeId3}>\u6B4C\u66F2\u540D\u79F0</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "font-bold text-tx-primary" }, "\u6B4C\u66F2\u540D\u79F0")
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex-1" data-v-30a57f21${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_input, {
                          class: "custom-input",
                          modelValue: unref(formData).title,
                          "onUpdate:modelValue": ($event) => unref(formData).title = $event,
                          size: "large",
                          placeholder: "\u7ED9\u4F60\u7684\u6B4C\u66F2\u8D77\u4E2A\u597D\u542C\u7684\u540D\u5B57",
                          onFocus
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex-1" }, [
                            createVNode(_component_el_input, {
                              class: "custom-input",
                              modelValue: unref(formData).title,
                              "onUpdate:modelValue": ($event) => unref(formData).title = $event,
                              size: "large",
                              placeholder: "\u7ED9\u4F60\u7684\u6B4C\u66F2\u8D77\u4E2A\u597D\u542C\u7684\u540D\u5B57",
                              onFocus
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { prop: "prompt" }, {
                    label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="inline-flex w-[96%]" data-v-30a57f21${_scopeId3}><div class="flex-1 mr-auto flex items-center" data-v-30a57f21${_scopeId3}><span class="font-bold text-tx-primary mr-[8px]" data-v-30a57f21${_scopeId3}>${ssrInterpolate(unref(isMuseMode) ? "\u6B4C\u66F2\u63CF\u8FF0" : "\u6B4C\u8BCD")}</span>`);
                        if (!unref(isMuseMode)) {
                          _push4(ssrRenderComponent(_component_el_popover, {
                            placement: "right",
                            "show-arrow": false,
                            transition: "custom-popover",
                            width: 200,
                            trigger: "hover",
                            content: "\u5EFA\u8BAE\u6B4C\u8BCD\u957F\u5EA6100-1250\uFF0C\u592A\u957F\u6216\u592A\u77ED\u5BB9\u6613\u751F\u6210\u5931\u8D25"
                          }, {
                            reference: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex items-center cursor-pointer text-[#999999]" data-v-30a57f21${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "el-icon-QuestionFilled",
                                  size: 14
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center cursor-pointer text-[#999999]" }, [
                                    createVNode(_component_Icon, {
                                      name: "el-icon-QuestionFilled",
                                      size: 14
                                    })
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(_component_ElButton, {
                          link: "",
                          size: "small",
                          onClick: ($event) => unref(formData).prompt = ""
                        }, {
                          icon: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "el-icon-Delete",
                                size: 12
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Icon, {
                                  name: "el-icon-Delete",
                                  size: 12
                                })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u6E05\u7A7A `);
                            } else {
                              return [
                                createTextVNode(" \u6E05\u7A7A ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "inline-flex w-[96%]" }, [
                            createVNode("div", { class: "flex-1 mr-auto flex items-center" }, [
                              createVNode("span", { class: "font-bold text-tx-primary mr-[8px]" }, toDisplayString(unref(isMuseMode) ? "\u6B4C\u66F2\u63CF\u8FF0" : "\u6B4C\u8BCD"), 1),
                              !unref(isMuseMode) ? (openBlock(), createBlock(_component_el_popover, {
                                key: 0,
                                placement: "right",
                                "show-arrow": false,
                                transition: "custom-popover",
                                width: 200,
                                trigger: "hover",
                                content: "\u5EFA\u8BAE\u6B4C\u8BCD\u957F\u5EA6100-1250\uFF0C\u592A\u957F\u6216\u592A\u77ED\u5BB9\u6613\u751F\u6210\u5931\u8D25"
                              }, {
                                reference: withCtx(() => [
                                  createVNode("div", { class: "flex items-center cursor-pointer text-[#999999]" }, [
                                    createVNode(_component_Icon, {
                                      name: "el-icon-QuestionFilled",
                                      size: 14
                                    })
                                  ])
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            createVNode(_component_ElButton, {
                              link: "",
                              size: "small",
                              onClick: ($event) => unref(formData).prompt = ""
                            }, {
                              icon: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: "el-icon-Delete",
                                  size: 12
                                })
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" \u6E05\u7A7A ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex-1" data-v-30a57f21${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_LTextarea, {
                          modelValue: unref(formData).prompt,
                          "onUpdate:modelValue": ($event) => unref(formData).prompt = $event,
                          placeholder: `\u8BF7\u8F93\u5165${unref(isMuseMode) ? "\u7075\u611F\uFF0C\u4F8B\u5982\u5199\u4E00\u9996\u5173\u4E8E\u590F\u5929\u7684\u6B4C\u66F2" : "\u6B4C\u8BCD"}`,
                          contentStyle: {
                            height: "160px"
                          },
                          showWordLimit: "",
                          maxlength: "1300",
                          onFocus
                        }, {
                          "length-suffix": withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex p-[10px]" data-v-30a57f21${_scopeId4}><div class="flex-1" data-v-30a57f21${_scopeId4}>`);
                              if (unref(isShowImagine)) {
                                _push5(ssrRenderComponent(_component_el_button, {
                                  size: "small",
                                  type: "primary",
                                  plain: "",
                                  style: { "border": "none", "--el-button-hover-bg-color": "var(\n                                                            --el-button-bg-color\n                                                        )", "--el-button-hover-text-color": "var(\n                                                            --el-button-text-color\n                                                        )" },
                                  loading: unref(isLock),
                                  onClick: unref(handelImagine)
                                }, {
                                  icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_Icon, {
                                        name: "local-icon-bulb",
                                        size: 12
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_Icon, {
                                          name: "local-icon-bulb",
                                          size: 12
                                        })
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span data-v-30a57f21${_scopeId5}> \u667A\u80FD\u8054\u60F3 </span>`);
                                      if (unref(musicConfig).imagine.price > 0) {
                                        _push6(`<span data-v-30a57f21${_scopeId5}>\uFF1A\u6D88\u8017${ssrInterpolate(unref(musicConfig).imagine.price)}${ssrInterpolate(unref(appStore).getTokenUnit)}</span>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                    } else {
                                      return [
                                        createVNode("span", null, " \u667A\u80FD\u8054\u60F3 "),
                                        unref(musicConfig).imagine.price > 0 ? (openBlock(), createBlock("span", { key: 0 }, "\uFF1A\u6D88\u8017" + toDisplayString(unref(musicConfig).imagine.price) + toDisplayString(unref(appStore).getTokenUnit), 1)) : createCommentVNode("", true)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`</div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex p-[10px]" }, [
                                  createVNode("div", { class: "flex-1" }, [
                                    unref(isShowImagine) ? (openBlock(), createBlock(_component_el_button, {
                                      key: 0,
                                      size: "small",
                                      type: "primary",
                                      plain: "",
                                      style: { "border": "none", "--el-button-hover-bg-color": "var(\n                                                            --el-button-bg-color\n                                                        )", "--el-button-hover-text-color": "var(\n                                                            --el-button-text-color\n                                                        )" },
                                      loading: unref(isLock),
                                      onClick: unref(handelImagine)
                                    }, {
                                      icon: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "local-icon-bulb",
                                          size: 12
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode("span", null, " \u667A\u80FD\u8054\u60F3 "),
                                        unref(musicConfig).imagine.price > 0 ? (openBlock(), createBlock("span", { key: 0 }, "\uFF1A\u6D88\u8017" + toDisplayString(unref(musicConfig).imagine.price) + toDisplayString(unref(appStore).getTokenUnit), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["loading", "onClick"])) : createCommentVNode("", true)
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex-1" }, [
                            createVNode(_component_LTextarea, {
                              modelValue: unref(formData).prompt,
                              "onUpdate:modelValue": ($event) => unref(formData).prompt = $event,
                              placeholder: `\u8BF7\u8F93\u5165${unref(isMuseMode) ? "\u7075\u611F\uFF0C\u4F8B\u5982\u5199\u4E00\u9996\u5173\u4E8E\u590F\u5929\u7684\u6B4C\u66F2" : "\u6B4C\u8BCD"}`,
                              contentStyle: {
                                height: "160px"
                              },
                              showWordLimit: "",
                              maxlength: "1300",
                              onFocus
                            }, {
                              "length-suffix": withCtx(() => [
                                createVNode("div", { class: "flex p-[10px]" }, [
                                  createVNode("div", { class: "flex-1" }, [
                                    unref(isShowImagine) ? (openBlock(), createBlock(_component_el_button, {
                                      key: 0,
                                      size: "small",
                                      type: "primary",
                                      plain: "",
                                      style: { "border": "none", "--el-button-hover-bg-color": "var(\n                                                            --el-button-bg-color\n                                                        )", "--el-button-hover-text-color": "var(\n                                                            --el-button-text-color\n                                                        )" },
                                      loading: unref(isLock),
                                      onClick: unref(handelImagine)
                                    }, {
                                      icon: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "local-icon-bulb",
                                          size: 12
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode("span", null, " \u667A\u80FD\u8054\u60F3 "),
                                        unref(musicConfig).imagine.price > 0 ? (openBlock(), createBlock("span", { key: 0 }, "\uFF1A\u6D88\u8017" + toDisplayString(unref(musicConfig).imagine.price) + toDisplayString(unref(appStore).getTokenUnit), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["loading", "onClick"])) : createCommentVNode("", true)
                                  ])
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { prop: "version" }, {
                    label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="font-bold text-tx-primary" data-v-30a57f21${_scopeId3}> \u9009\u62E9\u7248\u672C </span>`);
                      } else {
                        return [
                          createVNode("span", { class: "font-bold text-tx-primary" }, " \u9009\u62E9\u7248\u672C ")
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div data-v-30a57f21${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(currentModel).version, (item, value) => {
                          _push4(ssrRenderComponent(_component_el_button, {
                            key: item,
                            class: {
                              "!text-primary !border-primary": unref(formData).version === String(value)
                            },
                            onClick: ($event) => unref(formData).version = String(value)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]--></div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(currentModel).version, (item, value) => {
                              return openBlock(), createBlock(_component_el_button, {
                                key: item,
                                class: {
                                  "!text-primary !border-primary": unref(formData).version === String(value)
                                },
                                onClick: ($event) => unref(formData).version = String(value)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item), 1)
                                ]),
                                _: 2
                              }, 1032, ["class", "onClick"]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (unref(isMuseMode)) {
                    _push3(ssrRenderComponent(_component_el_form_item, null, {
                      label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="font-bold text-tx-primary" data-v-30a57f21${_scopeId3}> \u7EAF\u97F3\u4E50 </span>`);
                        } else {
                          return [
                            createVNode("span", { class: "font-bold text-tx-primary" }, " \u7EAF\u97F3\u4E50 ")
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div data-v-30a57f21${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_el_switch, {
                            modelValue: unref(formData).make_instrumental,
                            "onUpdate:modelValue": ($event) => unref(formData).make_instrumental = $event,
                            "active-value": 1,
                            "inactive-value": 0
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", null, [
                              createVNode(_component_el_switch, {
                                modelValue: unref(formData).make_instrumental,
                                "onUpdate:modelValue": ($event) => unref(formData).make_instrumental = $event,
                                "active-value": 1,
                                "inactive-value": 0
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_el_form_item, null, {
                      label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="w-full flex items-center" data-v-30a57f21${_scopeId3}><span class="font-bold text-tx-primary flex-1" data-v-30a57f21${_scopeId3}> \u97F3\u4E50\u98CE\u683C </span>`);
                          _push4(ssrRenderComponent(_component_ElButton, {
                            link: "",
                            type: "primary",
                            onClick: changeStyleCustom
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(formData).is_style_custom ? "\u7CFB\u7EDF\u98CE\u683C" : "\u81EA\u5B9A\u4E49\u98CE\u683C")}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(formData).is_style_custom ? "\u7CFB\u7EDF\u98CE\u683C" : "\u81EA\u5B9A\u4E49\u98CE\u683C"), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "w-full flex items-center" }, [
                              createVNode("span", { class: "font-bold text-tx-primary flex-1" }, " \u97F3\u4E50\u98CE\u683C "),
                              createVNode(_component_ElButton, {
                                link: "",
                                type: "primary",
                                onClick: changeStyleCustom
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(formData).is_style_custom ? "\u7CFB\u7EDF\u98CE\u683C" : "\u81EA\u5B9A\u4E49\u98CE\u683C"), 1)
                                ]),
                                _: 1
                              })
                            ])
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (!unref(formData).is_style_custom) {
                            _push4(`<div class="flex-1 min-w-0 flex flex-wrap mx-[-6px]" data-v-30a57f21${_scopeId3}><!--[-->`);
                            ssrRenderList(unref(musicConfig).style, (item) => {
                              _push4(`<div class="w-[25%] px-[6px]" data-v-30a57f21${_scopeId3}><div class="h-full cursor-pointer" data-v-30a57f21${_scopeId3}><div class="pt-[100%] relative h-0 rounded-[12px] overflow-hidden" data-v-30a57f21${_scopeId3}><div class="absolute inset-0 left-0 top-0" data-v-30a57f21${_scopeId3}>`);
                              _push4(ssrRenderComponent(_component_el_image, {
                                src: item.image,
                                class: "h-full w-full"
                              }, null, _parent4, _scopeId3));
                              _push4(`</div>`);
                              if (unref(formData).style_id.includes(
                                item.id
                              )) {
                                _push4(`<div class="absolute bg-[var(--el-overlay-color-lighter)] inset-0 left-0 top-0 flex items-center justify-center text-white" data-v-30a57f21${_scopeId3}>`);
                                _push4(ssrRenderComponent(_component_Icon, {
                                  name: "el-icon-SuccessFilled",
                                  size: 20
                                }, null, _parent4, _scopeId3));
                                _push4(`</div>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div><div class="text-center text-xs" data-v-30a57f21${_scopeId3}>${ssrInterpolate(item.name)}</div></div></div>`);
                            });
                            _push4(`<!--]--></div>`);
                          } else {
                            _push4(ssrRenderComponent(_component_LTextarea, {
                              modelValue: unref(formData).style_custom,
                              "onUpdate:modelValue": ($event) => unref(formData).style_custom = $event,
                              placeholder: "\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u98CE\u683C\uFF0C\u591A\u4E2A\u98CE\u683C\u4EE5,\u9694\u5F00",
                              contentStyle: {
                                height: "120px"
                              },
                              onFocus
                            }, null, _parent4, _scopeId3));
                          }
                        } else {
                          return [
                            !unref(formData).is_style_custom ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "flex-1 min-w-0 flex flex-wrap mx-[-6px]"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(musicConfig).style, (item) => {
                                return openBlock(), createBlock("div", {
                                  class: "w-[25%] px-[6px]",
                                  key: item.id
                                }, [
                                  createVNode("div", {
                                    class: "h-full cursor-pointer",
                                    onClick: ($event) => selectStyle(item.id)
                                  }, [
                                    createVNode("div", { class: "pt-[100%] relative h-0 rounded-[12px] overflow-hidden" }, [
                                      createVNode("div", { class: "absolute inset-0 left-0 top-0" }, [
                                        createVNode(_component_el_image, {
                                          src: item.image,
                                          class: "h-full w-full"
                                        }, null, 8, ["src"])
                                      ]),
                                      unref(formData).style_id.includes(
                                        item.id
                                      ) ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "absolute bg-[var(--el-overlay-color-lighter)] inset-0 left-0 top-0 flex items-center justify-center text-white"
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "el-icon-SuccessFilled",
                                          size: 20
                                        })
                                      ])) : createCommentVNode("", true)
                                    ]),
                                    createVNode("div", { class: "text-center text-xs" }, toDisplayString(item.name), 1)
                                  ], 8, ["onClick"])
                                ]);
                              }), 128))
                            ])) : (openBlock(), createBlock(_component_LTextarea, {
                              key: 1,
                              modelValue: unref(formData).style_custom,
                              "onUpdate:modelValue": ($event) => unref(formData).style_custom = $event,
                              placeholder: "\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u98CE\u683C\uFF0C\u591A\u4E2A\u98CE\u683C\u4EE5,\u9694\u5F00",
                              contentStyle: {
                                height: "120px"
                              },
                              onFocus
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    createVNode(_component_el_form_item, { prop: "title" }, {
                      label: withCtx(() => [
                        createVNode("span", { class: "font-bold text-tx-primary" }, "\u6B4C\u66F2\u540D\u79F0")
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "flex-1" }, [
                          createVNode(_component_el_input, {
                            class: "custom-input",
                            modelValue: unref(formData).title,
                            "onUpdate:modelValue": ($event) => unref(formData).title = $event,
                            size: "large",
                            placeholder: "\u7ED9\u4F60\u7684\u6B4C\u66F2\u8D77\u4E2A\u597D\u542C\u7684\u540D\u5B57",
                            onFocus
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { prop: "prompt" }, {
                      label: withCtx(() => [
                        createVNode("div", { class: "inline-flex w-[96%]" }, [
                          createVNode("div", { class: "flex-1 mr-auto flex items-center" }, [
                            createVNode("span", { class: "font-bold text-tx-primary mr-[8px]" }, toDisplayString(unref(isMuseMode) ? "\u6B4C\u66F2\u63CF\u8FF0" : "\u6B4C\u8BCD"), 1),
                            !unref(isMuseMode) ? (openBlock(), createBlock(_component_el_popover, {
                              key: 0,
                              placement: "right",
                              "show-arrow": false,
                              transition: "custom-popover",
                              width: 200,
                              trigger: "hover",
                              content: "\u5EFA\u8BAE\u6B4C\u8BCD\u957F\u5EA6100-1250\uFF0C\u592A\u957F\u6216\u592A\u77ED\u5BB9\u6613\u751F\u6210\u5931\u8D25"
                            }, {
                              reference: withCtx(() => [
                                createVNode("div", { class: "flex items-center cursor-pointer text-[#999999]" }, [
                                  createVNode(_component_Icon, {
                                    name: "el-icon-QuestionFilled",
                                    size: 14
                                  })
                                ])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          createVNode(_component_ElButton, {
                            link: "",
                            size: "small",
                            onClick: ($event) => unref(formData).prompt = ""
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "el-icon-Delete",
                                size: 12
                              })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" \u6E05\u7A7A ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "flex-1" }, [
                          createVNode(_component_LTextarea, {
                            modelValue: unref(formData).prompt,
                            "onUpdate:modelValue": ($event) => unref(formData).prompt = $event,
                            placeholder: `\u8BF7\u8F93\u5165${unref(isMuseMode) ? "\u7075\u611F\uFF0C\u4F8B\u5982\u5199\u4E00\u9996\u5173\u4E8E\u590F\u5929\u7684\u6B4C\u66F2" : "\u6B4C\u8BCD"}`,
                            contentStyle: {
                              height: "160px"
                            },
                            showWordLimit: "",
                            maxlength: "1300",
                            onFocus
                          }, {
                            "length-suffix": withCtx(() => [
                              createVNode("div", { class: "flex p-[10px]" }, [
                                createVNode("div", { class: "flex-1" }, [
                                  unref(isShowImagine) ? (openBlock(), createBlock(_component_el_button, {
                                    key: 0,
                                    size: "small",
                                    type: "primary",
                                    plain: "",
                                    style: { "border": "none", "--el-button-hover-bg-color": "var(\n                                                            --el-button-bg-color\n                                                        )", "--el-button-hover-text-color": "var(\n                                                            --el-button-text-color\n                                                        )" },
                                    loading: unref(isLock),
                                    onClick: unref(handelImagine)
                                  }, {
                                    icon: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "local-icon-bulb",
                                        size: 12
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode("span", null, " \u667A\u80FD\u8054\u60F3 "),
                                      unref(musicConfig).imagine.price > 0 ? (openBlock(), createBlock("span", { key: 0 }, "\uFF1A\u6D88\u8017" + toDisplayString(unref(musicConfig).imagine.price) + toDisplayString(unref(appStore).getTokenUnit), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }, 8, ["loading", "onClick"])) : createCommentVNode("", true)
                                ])
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { prop: "version" }, {
                      label: withCtx(() => [
                        createVNode("span", { class: "font-bold text-tx-primary" }, " \u9009\u62E9\u7248\u672C ")
                      ]),
                      default: withCtx(() => [
                        createVNode("div", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(currentModel).version, (item, value) => {
                            return openBlock(), createBlock(_component_el_button, {
                              key: item,
                              class: {
                                "!text-primary !border-primary": unref(formData).version === String(value)
                              },
                              onClick: ($event) => unref(formData).version = String(value)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item), 1)
                              ]),
                              _: 2
                            }, 1032, ["class", "onClick"]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    }),
                    unref(isMuseMode) ? (openBlock(), createBlock(_component_el_form_item, { key: 0 }, {
                      label: withCtx(() => [
                        createVNode("span", { class: "font-bold text-tx-primary" }, " \u7EAF\u97F3\u4E50 ")
                      ]),
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode(_component_el_switch, {
                            modelValue: unref(formData).make_instrumental,
                            "onUpdate:modelValue": ($event) => unref(formData).make_instrumental = $event,
                            "active-value": 1,
                            "inactive-value": 0
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_el_form_item, { key: 1 }, {
                      label: withCtx(() => [
                        createVNode("div", { class: "w-full flex items-center" }, [
                          createVNode("span", { class: "font-bold text-tx-primary flex-1" }, " \u97F3\u4E50\u98CE\u683C "),
                          createVNode(_component_ElButton, {
                            link: "",
                            type: "primary",
                            onClick: changeStyleCustom
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(formData).is_style_custom ? "\u7CFB\u7EDF\u98CE\u683C" : "\u81EA\u5B9A\u4E49\u98CE\u683C"), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      default: withCtx(() => [
                        !unref(formData).is_style_custom ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex-1 min-w-0 flex flex-wrap mx-[-6px]"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(musicConfig).style, (item) => {
                            return openBlock(), createBlock("div", {
                              class: "w-[25%] px-[6px]",
                              key: item.id
                            }, [
                              createVNode("div", {
                                class: "h-full cursor-pointer",
                                onClick: ($event) => selectStyle(item.id)
                              }, [
                                createVNode("div", { class: "pt-[100%] relative h-0 rounded-[12px] overflow-hidden" }, [
                                  createVNode("div", { class: "absolute inset-0 left-0 top-0" }, [
                                    createVNode(_component_el_image, {
                                      src: item.image,
                                      class: "h-full w-full"
                                    }, null, 8, ["src"])
                                  ]),
                                  unref(formData).style_id.includes(
                                    item.id
                                  ) ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "absolute bg-[var(--el-overlay-color-lighter)] inset-0 left-0 top-0 flex items-center justify-center text-white"
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: "el-icon-SuccessFilled",
                                      size: 20
                                    })
                                  ])) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "text-center text-xs" }, toDisplayString(item.name), 1)
                              ], 8, ["onClick"])
                            ]);
                          }), 128))
                        ])) : (openBlock(), createBlock(_component_LTextarea, {
                          key: 1,
                          modelValue: unref(formData).style_custom,
                          "onUpdate:modelValue": ($event) => unref(formData).style_custom = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u98CE\u683C\uFF0C\u591A\u4E2A\u98CE\u683C\u4EE5,\u9694\u5F00",
                          contentStyle: {
                            height: "120px"
                          },
                          onFocus
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-[16px]" }, [
                createVNode(_component_el_form, {
                  ref_key: "formRef",
                  ref: formRef,
                  model: unref(formData),
                  "label-position": "top",
                  rules: unref(formRules),
                  "show-message": false
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { prop: "title" }, {
                      label: withCtx(() => [
                        createVNode("span", { class: "font-bold text-tx-primary" }, "\u6B4C\u66F2\u540D\u79F0")
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "flex-1" }, [
                          createVNode(_component_el_input, {
                            class: "custom-input",
                            modelValue: unref(formData).title,
                            "onUpdate:modelValue": ($event) => unref(formData).title = $event,
                            size: "large",
                            placeholder: "\u7ED9\u4F60\u7684\u6B4C\u66F2\u8D77\u4E2A\u597D\u542C\u7684\u540D\u5B57",
                            onFocus
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { prop: "prompt" }, {
                      label: withCtx(() => [
                        createVNode("div", { class: "inline-flex w-[96%]" }, [
                          createVNode("div", { class: "flex-1 mr-auto flex items-center" }, [
                            createVNode("span", { class: "font-bold text-tx-primary mr-[8px]" }, toDisplayString(unref(isMuseMode) ? "\u6B4C\u66F2\u63CF\u8FF0" : "\u6B4C\u8BCD"), 1),
                            !unref(isMuseMode) ? (openBlock(), createBlock(_component_el_popover, {
                              key: 0,
                              placement: "right",
                              "show-arrow": false,
                              transition: "custom-popover",
                              width: 200,
                              trigger: "hover",
                              content: "\u5EFA\u8BAE\u6B4C\u8BCD\u957F\u5EA6100-1250\uFF0C\u592A\u957F\u6216\u592A\u77ED\u5BB9\u6613\u751F\u6210\u5931\u8D25"
                            }, {
                              reference: withCtx(() => [
                                createVNode("div", { class: "flex items-center cursor-pointer text-[#999999]" }, [
                                  createVNode(_component_Icon, {
                                    name: "el-icon-QuestionFilled",
                                    size: 14
                                  })
                                ])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          createVNode(_component_ElButton, {
                            link: "",
                            size: "small",
                            onClick: ($event) => unref(formData).prompt = ""
                          }, {
                            icon: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "el-icon-Delete",
                                size: 12
                              })
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" \u6E05\u7A7A ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "flex-1" }, [
                          createVNode(_component_LTextarea, {
                            modelValue: unref(formData).prompt,
                            "onUpdate:modelValue": ($event) => unref(formData).prompt = $event,
                            placeholder: `\u8BF7\u8F93\u5165${unref(isMuseMode) ? "\u7075\u611F\uFF0C\u4F8B\u5982\u5199\u4E00\u9996\u5173\u4E8E\u590F\u5929\u7684\u6B4C\u66F2" : "\u6B4C\u8BCD"}`,
                            contentStyle: {
                              height: "160px"
                            },
                            showWordLimit: "",
                            maxlength: "1300",
                            onFocus
                          }, {
                            "length-suffix": withCtx(() => [
                              createVNode("div", { class: "flex p-[10px]" }, [
                                createVNode("div", { class: "flex-1" }, [
                                  unref(isShowImagine) ? (openBlock(), createBlock(_component_el_button, {
                                    key: 0,
                                    size: "small",
                                    type: "primary",
                                    plain: "",
                                    style: { "border": "none", "--el-button-hover-bg-color": "var(\n                                                            --el-button-bg-color\n                                                        )", "--el-button-hover-text-color": "var(\n                                                            --el-button-text-color\n                                                        )" },
                                    loading: unref(isLock),
                                    onClick: unref(handelImagine)
                                  }, {
                                    icon: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "local-icon-bulb",
                                        size: 12
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode("span", null, " \u667A\u80FD\u8054\u60F3 "),
                                      unref(musicConfig).imagine.price > 0 ? (openBlock(), createBlock("span", { key: 0 }, "\uFF1A\u6D88\u8017" + toDisplayString(unref(musicConfig).imagine.price) + toDisplayString(unref(appStore).getTokenUnit), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }, 8, ["loading", "onClick"])) : createCommentVNode("", true)
                                ])
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { prop: "version" }, {
                      label: withCtx(() => [
                        createVNode("span", { class: "font-bold text-tx-primary" }, " \u9009\u62E9\u7248\u672C ")
                      ]),
                      default: withCtx(() => [
                        createVNode("div", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(currentModel).version, (item, value) => {
                            return openBlock(), createBlock(_component_el_button, {
                              key: item,
                              class: {
                                "!text-primary !border-primary": unref(formData).version === String(value)
                              },
                              onClick: ($event) => unref(formData).version = String(value)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item), 1)
                              ]),
                              _: 2
                            }, 1032, ["class", "onClick"]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    }),
                    unref(isMuseMode) ? (openBlock(), createBlock(_component_el_form_item, { key: 0 }, {
                      label: withCtx(() => [
                        createVNode("span", { class: "font-bold text-tx-primary" }, " \u7EAF\u97F3\u4E50 ")
                      ]),
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode(_component_el_switch, {
                            modelValue: unref(formData).make_instrumental,
                            "onUpdate:modelValue": ($event) => unref(formData).make_instrumental = $event,
                            "active-value": 1,
                            "inactive-value": 0
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_el_form_item, { key: 1 }, {
                      label: withCtx(() => [
                        createVNode("div", { class: "w-full flex items-center" }, [
                          createVNode("span", { class: "font-bold text-tx-primary flex-1" }, " \u97F3\u4E50\u98CE\u683C "),
                          createVNode(_component_ElButton, {
                            link: "",
                            type: "primary",
                            onClick: changeStyleCustom
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(formData).is_style_custom ? "\u7CFB\u7EDF\u98CE\u683C" : "\u81EA\u5B9A\u4E49\u98CE\u683C"), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      default: withCtx(() => [
                        !unref(formData).is_style_custom ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex-1 min-w-0 flex flex-wrap mx-[-6px]"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(musicConfig).style, (item) => {
                            return openBlock(), createBlock("div", {
                              class: "w-[25%] px-[6px]",
                              key: item.id
                            }, [
                              createVNode("div", {
                                class: "h-full cursor-pointer",
                                onClick: ($event) => selectStyle(item.id)
                              }, [
                                createVNode("div", { class: "pt-[100%] relative h-0 rounded-[12px] overflow-hidden" }, [
                                  createVNode("div", { class: "absolute inset-0 left-0 top-0" }, [
                                    createVNode(_component_el_image, {
                                      src: item.image,
                                      class: "h-full w-full"
                                    }, null, 8, ["src"])
                                  ]),
                                  unref(formData).style_id.includes(
                                    item.id
                                  ) ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "absolute bg-[var(--el-overlay-color-lighter)] inset-0 left-0 top-0 flex items-center justify-center text-white"
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: "el-icon-SuccessFilled",
                                      size: 20
                                    })
                                  ])) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "text-center text-xs" }, toDisplayString(item.name), 1)
                              ], 8, ["onClick"])
                            ]);
                          }), 128))
                        ])) : (openBlock(), createBlock(_component_LTextarea, {
                          key: 1,
                          modelValue: unref(formData).style_custom,
                          "onUpdate:modelValue": ($event) => unref(formData).style_custom = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u98CE\u683C\uFF0C\u591A\u4E2A\u98CE\u683C\u4EE5,\u9694\u5F00",
                          contentStyle: {
                            height: "120px"
                          },
                          onFocus
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                      ]),
                      _: 1
                    }))
                  ]),
                  _: 1
                }, 8, ["model", "rules"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="px-[16px] pt-[16px]" data-v-30a57f21>`);
      _push(ssrRenderComponent(_component_el_button, {
        size: "large",
        class: "w-full",
        type: "primary",
        loading: unref(isLockGenerate),
        onClick: unref(handelMusicGenerate)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-30a57f21${_scopeId}><span class="text-base font-bold" data-v-30a57f21${_scopeId}>\u7ACB\u5373\u751F\u6210</span>`);
            if (unref(musicConfig).is_member) {
              _push2(`<span class="text-sm ml-[4px]" data-v-30a57f21${_scopeId}>\u4F1A\u5458\u514D\u8D39</span>`);
            } else if (unref(currentModel).price > 0) {
              _push2(`<span class="text-sm ml-[4px] font-normal" data-v-30a57f21${_scopeId}> \u6D88\u8017 ${ssrInterpolate(unref(currentModel).price)} ${ssrInterpolate(unref(appStore).getTokenUnit)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("span", { class: "text-base font-bold" }, "\u7ACB\u5373\u751F\u6210"),
                unref(musicConfig).is_member ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "text-sm ml-[4px]"
                }, "\u4F1A\u5458\u514D\u8D39")) : unref(currentModel).price > 0 ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: "text-sm ml-[4px] font-normal"
                }, " \u6D88\u8017 " + toDisplayString(unref(currentModel).price) + " " + toDisplayString(unref(appStore).getTokenUnit), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/music/_components/form/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Form = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-30a57f21"]]);

export { Form as default };
//# sourceMappingURL=index-BorsA2eH.mjs.map
