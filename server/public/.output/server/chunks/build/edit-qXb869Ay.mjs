import { _ as __nuxt_component_0 } from './index-DbRlceJ7.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { a as useRouter, ag as useRoute, aV as baseUrl, E as ElInput, d as ElButton } from './server.mjs';
import { _ as __nuxt_component_1 } from './index-BaKT_MyR.mjs';
import { _ as __nuxt_component_8 } from './index-VFk_dz0n.mjs';
import { _ as _sfc_main$3 } from './index-BoqjHllR.mjs';
import { P as Popup } from './index-BKj4TrcW.mjs';
import { u as useAudioPlay } from './useAudioPlay-C6V9947w.mjs';
import { useSSRContext, defineComponent, computed, ref, withAsyncContext, shallowRef, shallowReactive, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, createSlots, openBlock, createBlock, withModifiers, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { g as getDigitalDetail, p as putDigital, a as postDigital, b as getDubbingList } from './digital-DHYaDV-C.mjs';
import { useVModel } from '@vueuse/core';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import './index-L3E_sDO1.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import '@vue/shared';
import 'lodash-unified';
import './el-menu-item-DBjUF0xW.mjs';
import './index-DadLUs6d.mjs';
import '@ctrl/tinycolor';
import './index-5Ia44xzE.mjs';
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
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-DVLwoLV9.mjs';
import 'video.js';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "item",
  __ssrInlineRender: true,
  props: {
    isActive: { type: Boolean },
    value: {},
    url: {}
  },
  setup(__props) {
    const { play, pause, audioPlaying } = useAudioPlay();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["dub-item", {
          "dub-item--is-active": _ctx.isActive
        }]
      }, _attrs))} data-v-1593ed02><div class="flex-1 min-w-0 line-clamp-1" data-v-1593ed02>${ssrInterpolate(_ctx.value)}</div>`);
      if (_ctx.url) {
        _push(`<!--[-->`);
        if (unref(audioPlaying)) {
          _push(ssrRenderComponent(_component_Icon, {
            name: "el-icon-VideoPause",
            size: 18,
            onClick: unref(pause)
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_Icon, {
            name: "el-icon-VideoPlay",
            size: 18,
            onClick: ($event) => unref(play)(_ctx.url)
          }, null, _parent));
        }
        _push(`<!--]-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dub/item.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1593ed02"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "picker",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const currentKey = ref("");
    const keyModel = useVModel(props, "modelValue", emit);
    const { play, pause, audioPlaying } = useAudioPlay();
    const dubList = ref({});
    const getData = async () => {
      dubList.value = await getDubbingList();
    };
    const current = computed(() => {
      return dubList.value[keyModel.value] || {};
    });
    getData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = ElInput;
      const _component_Icon = _sfc_main$3;
      const _component_Popup = Popup;
      const _component_el_button = ElButton;
      const _component_DubItem = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_input, {
        "model-value": unref(current).name || unref(keyModel),
        readonly: "",
        placeholder: "\u8BF7\u9009\u62E9\u914D\u97F3",
        clearable: ""
      }, createSlots({ _: 2 }, [
        unref(current).example ? {
          name: "suffix",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-tx-primary flex cursor-pointer"${_scopeId}>`);
              if (unref(audioPlaying)) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "el-icon-VideoPause",
                  size: 18,
                  onClick: unref(pause)
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "el-icon-VideoPlay",
                  size: 18,
                  onClick: ($event) => unref(play)(unref(current).example)
                }, null, _parent2, _scopeId));
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "text-tx-primary flex cursor-pointer" }, [
                  unref(audioPlaying) ? (openBlock(), createBlock(_component_Icon, {
                    key: 0,
                    name: "el-icon-VideoPause",
                    size: 18,
                    onClick: withModifiers(unref(pause), ["stop"])
                  }, null, 8, ["onClick"])) : (openBlock(), createBlock(_component_Icon, {
                    key: 1,
                    name: "el-icon-VideoPlay",
                    size: 18,
                    onClick: withModifiers(($event) => unref(play)(unref(current).example), ["stop"])
                  }, null, 8, ["onClick"]))
                ])
              ];
            }
          }),
          key: "0"
        } : void 0
      ]), _parent));
      _push(ssrRenderComponent(_component_Popup, {
        title: "\u9009\u62E9\u914D\u97F3",
        width: "500px",
        onOpen: ($event) => currentKey.value = unref(keyModel),
        onConfirm: ($event) => keyModel.value = unref(currentKey)
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="ml-[20px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              plain: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u9009\u62E9\u914D\u97F3 `);
                } else {
                  return [
                    createTextVNode(" \u9009\u62E9\u914D\u97F3 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "ml-[20px]" }, [
                createVNode(_component_el_button, {
                  type: "primary",
                  plain: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u9009\u62E9\u914D\u97F3 ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap mx-[-10px]"${_scopeId}><!--[-->`);
            ssrRenderList(unref(dubList), (item, value) => {
              _push2(`<div class="w-[50%] mb-[15px] px-[10px]"${_scopeId}><div class="w-full"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DubItem, {
                "is-active": value == unref(currentKey),
                value: item.name,
                url: item.example,
                onClick: ($event) => currentKey.value = value
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap mx-[-10px]" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(dubList), (item, value) => {
                  return openBlock(), createBlock("div", {
                    class: "w-[50%] mb-[15px] px-[10px]",
                    key: value
                  }, [
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_DubItem, {
                        "is-active": value == unref(currentKey),
                        value: item.name,
                        url: item.example,
                        onClick: ($event) => currentKey.value = value
                      }, null, 8, ["is-active", "value", "url", "onClick"])
                    ])
                  ]);
                }), 128))
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dub/picker.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "edit",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const router = useRouter();
    const route = useRoute();
    const id = computed(() => route.query.id);
    const name = ref("");
    const getData = async () => {
      if (id.value) {
        const data = await getDigitalDetail({ id: id.value });
        name.value = data.name;
        return data;
      } else {
        return Promise.reject();
      }
    };
    const currenTab = ref("edit");
    const tabList = [
      {
        name: "\u5F62\u8C61\u8BBE\u7F6E",
        icon: "el-icon-Setting",
        key: "edit"
      }
    ];
    const { data: formData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => getData(), {
      default() {
        return {
          name: "",
          avatar: "",
          image: "",
          wide_stay_video: "",
          wide_talk_video: "",
          vertical_stay_video: "",
          vertical_talk_video: "",
          channel: "",
          dubbing: "",
          idle_time: 10,
          idle_reply: ""
        };
      },
      lazy: true
    }, "$bL2ljimD45")), __temp = await __temp, __restore(), __temp);
    const formRef = shallowRef();
    const formRules = shallowReactive({
      name: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u5F62\u8C61\u540D\u79F0"
        }
      ],
      avatar: [
        {
          required: true,
          type: "string",
          message: "\u8BF7\u9009\u62E9\u5F62\u8C61\u5934\u50CF"
        }
      ],
      image: [
        {
          required: true,
          type: "string",
          message: "\u8BF7\u9009\u62E9\u5F62\u8C61\u5C01\u9762"
        }
      ],
      wide_stay_video: [
        {
          required: true,
          type: "string",
          message: "\u8BF7\u9009\u62E9\u5BBD\u5C4F\u4EBA\u7269\u5F85\u673A\u89C6\u9891"
        }
      ],
      wide_talk_video: [
        {
          required: true,
          type: "string",
          message: "\u8BF7\u9009\u62E9\u5BBD\u5C4F\u4EBA\u7269\u8BF4\u8BDD\u89C6\u9891"
        }
      ],
      vertical_stay_video: [
        {
          required: true,
          type: "string",
          message: "\u8BF7\u9009\u62E9\u7AD6\u5C4F\u4EBA\u7269\u5F85\u673A\u89C6\u9891"
        }
      ],
      vertical_talk_video: [
        {
          required: true,
          type: "string",
          message: "\u8BF7\u9009\u62E9\u7AD6\u5C4F\u4EBA\u7269\u8BF4\u8BDD\u89C6\u9891"
        }
      ],
      dubbing: [
        {
          required: true,
          message: "\u8BF7\u9009\u62E9\u914D\u97F3\u89D2\u8272"
        }
      ],
      idle_time: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u95F2\u65F6\u65F6\u95F4"
        }
      ],
      idle_reply: [
        {
          required: true,
          type: "string",
          message: "\u8BF7\u8F93\u5165\u95F2\u65F6\u56DE\u590D\u5185\u5BB9"
        }
      ]
    });
    const handleAddVideo = (field, value) => {
      formData.value[field] = baseUrl + "/resource/digital/" + value;
    };
    const handelSubmit = async () => {
      var _a;
      await ((_a = formRef.value) == null ? void 0 : _a.validate());
      formData.value.idle_time = Number(formData.value.idle_time);
      const request = id.value ? putDigital(formData.value) : postDigital(formData.value);
      await request;
      setTimeout(() => {
        router.replace({
          path: "/application/layout/digital"
        });
      }, 1e3);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InfoMenu = __nuxt_component_0;
      const _component_ElScrollbar = ElScrollbar;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_UploadImg = __nuxt_component_1;
      const _component_UploadVideo = __nuxt_component_8;
      const _component_DubPicker = _sfc_main$1;
      const _component_ElButton = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_InfoMenu, {
        modelValue: unref(currenTab),
        "onUpdate:modelValue": ($event) => isRef(currenTab) ? currenTab.value = $event : null,
        title: unref(name),
        "back-path": "/application/layout/digital",
        "menu-list": tabList
      }, null, _parent));
      _push(`<div class="h-full flex-1 min-w-0 py-[16px] pr-[16px]"><div class="h-full flex flex-col bg-body rounded-2xl"><div class="flex-1 min-h-0">`);
      _push(ssrRenderComponent(_component_ElScrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="lg:flex"${_scopeId}><div class="flex-1 min-w-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_form, {
              class: "p-4",
              ref_key: "formRef",
              ref: formRef,
              model: unref(formData),
              "label-width": "140px",
              rules: unref(formRules)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u5F62\u8C61\u540D\u79F0",
                    prop: "name"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="w-[420px]"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(formData).name,
                          "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u5F62\u8C61\u540D\u79F0",
                          clearable: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "w-[420px]" }, [
                            createVNode(_component_el_input, {
                              modelValue: unref(formData).name,
                              "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                              placeholder: "\u8BF7\u8F93\u5165\u5F62\u8C61\u540D\u79F0",
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u5F62\u8C61\u5934\u50CF",
                    prop: "avatar"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UploadImg, {
                          modelValue: unref(formData).avatar,
                          "onUpdate:modelValue": ($event) => unref(formData).avatar = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="form-tips"${_scopeId3}>\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A50*50px</div></div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode("div", null, [
                              createVNode(_component_UploadImg, {
                                modelValue: unref(formData).avatar,
                                "onUpdate:modelValue": ($event) => unref(formData).avatar = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "form-tips" }, "\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A50*50px")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u5F62\u8C61\u5C01\u9762",
                    prop: "image"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UploadImg, {
                          modelValue: unref(formData).image,
                          "onUpdate:modelValue": ($event) => unref(formData).image = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="form-tips"${_scopeId3}>\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A280px\xD7187px</div></div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode("div", null, [
                              createVNode(_component_UploadImg, {
                                modelValue: unref(formData).image,
                                "onUpdate:modelValue": ($event) => unref(formData).image = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "form-tips" }, "\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A280px\xD7187px")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u5BBD\u5C4F\u4EBA\u7269\u5F85\u673A\u89C6\u9891",
                    prop: "wide_stay_video"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UploadVideo, {
                          modelValue: unref(formData).wide_stay_video,
                          "onUpdate:modelValue": ($event) => unref(formData).wide_stay_video = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="form-tips"${_scopeId3}> \u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M <span class="text-primary cursor-pointer"${_scopeId3}> \u4F7F\u7528\u9ED8\u8BA4\u89C6\u9891 </span></div></div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode("div", null, [
                              createVNode(_component_UploadVideo, {
                                modelValue: unref(formData).wide_stay_video,
                                "onUpdate:modelValue": ($event) => unref(formData).wide_stay_video = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "form-tips" }, [
                              createTextVNode(" \u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M "),
                              createVNode("span", {
                                class: "text-primary cursor-pointer",
                                onClick: ($event) => handleAddVideo(
                                  "wide_stay_video",
                                  "wide_stay_video.mp4"
                                )
                              }, " \u4F7F\u7528\u9ED8\u8BA4\u89C6\u9891 ", 8, ["onClick"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u5BBD\u5C4F\u4EBA\u7269\u8BF4\u8BDD\u89C6\u9891",
                    prop: "wide_talk_video"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UploadVideo, {
                          modelValue: unref(formData).wide_talk_video,
                          "onUpdate:modelValue": ($event) => unref(formData).wide_talk_video = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="form-tips"${_scopeId3}> \u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M <span class="text-primary cursor-pointer"${_scopeId3}> \u4F7F\u7528\u9ED8\u8BA4\u89C6\u9891 </span></div></div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode("div", null, [
                              createVNode(_component_UploadVideo, {
                                modelValue: unref(formData).wide_talk_video,
                                "onUpdate:modelValue": ($event) => unref(formData).wide_talk_video = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "form-tips" }, [
                              createTextVNode(" \u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M "),
                              createVNode("span", {
                                class: "text-primary cursor-pointer",
                                onClick: ($event) => handleAddVideo(
                                  "wide_talk_video",
                                  "wide_talk_video.mp4"
                                )
                              }, " \u4F7F\u7528\u9ED8\u8BA4\u89C6\u9891 ", 8, ["onClick"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u7AD6\u5C4F\u4EBA\u7269\u5F85\u673A\u89C6\u9891",
                    prop: "vertical_stay_video"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UploadVideo, {
                          modelValue: unref(formData).vertical_stay_video,
                          "onUpdate:modelValue": ($event) => unref(formData).vertical_stay_video = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="form-tips"${_scopeId3}> \u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M <span class="text-primary cursor-pointer"${_scopeId3}> \u4F7F\u7528\u9ED8\u8BA4\u89C6\u9891 </span></div></div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode("div", null, [
                              createVNode(_component_UploadVideo, {
                                modelValue: unref(formData).vertical_stay_video,
                                "onUpdate:modelValue": ($event) => unref(formData).vertical_stay_video = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "form-tips" }, [
                              createTextVNode(" \u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M "),
                              createVNode("span", {
                                class: "text-primary cursor-pointer",
                                onClick: ($event) => handleAddVideo(
                                  "vertical_stay_video",
                                  "vertical_stay_video.mp4"
                                )
                              }, " \u4F7F\u7528\u9ED8\u8BA4\u89C6\u9891 ", 8, ["onClick"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u7AD6\u5C4F\u4EBA\u7269\u8BF4\u8BDD\u89C6\u9891",
                    prop: "vertical_talk_video"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UploadVideo, {
                          modelValue: unref(formData).vertical_talk_video,
                          "onUpdate:modelValue": ($event) => unref(formData).vertical_talk_video = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="form-tips"${_scopeId3}> \u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M <span class="text-primary cursor-pointer"${_scopeId3}> \u4F7F\u7528\u9ED8\u8BA4\u89C6\u9891 </span></div></div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode("div", null, [
                              createVNode(_component_UploadVideo, {
                                modelValue: unref(formData).vertical_talk_video,
                                "onUpdate:modelValue": ($event) => unref(formData).vertical_talk_video = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "form-tips" }, [
                              createTextVNode(" \u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M "),
                              createVNode("span", {
                                class: "text-primary cursor-pointer",
                                onClick: ($event) => handleAddVideo(
                                  "vertical_talk_video",
                                  "vertical_talk_video.mp4"
                                )
                              }, " \u4F7F\u7528\u9ED8\u8BA4\u89C6\u9891 ", 8, ["onClick"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u914D\u97F3\u89D2\u8272",
                    prop: "dubbing"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_DubPicker, {
                          modelValue: unref(formData).dubbing,
                          "onUpdate:modelValue": ($event) => unref(formData).dubbing = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex flex-1" }, [
                            createVNode(_component_DubPicker, {
                              modelValue: unref(formData).dubbing,
                              "onUpdate:modelValue": ($event) => unref(formData).dubbing = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u81EA\u5B9A\u4E49\u95F2\u65F6\u65F6\u95F4",
                    prop: "idle_time"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="w-[420px]"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(formData).idle_time,
                          "onUpdate:modelValue": ($event) => unref(formData).idle_time = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u95F2\u65F6\u65F6\u95F4",
                          type: "number"
                        }, {
                          append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u79D2`);
                            } else {
                              return [
                                createTextVNode("\u79D2")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="form-tips"${_scopeId3}> \u4F8B\u5982\uFF1A\u9009\u62E95s\uFF0C\u6BCF\u96945\u79D2\u5C31\u4F1A\u6709\u4E00\u4E2A\u56DE\u590D\u5185\u5BB9\uFF0C\u5185\u5BB9\u662F\u5728\u95F2\u65F6\u56DE\u590D\u5185\u5BB9\u7684\u6587\u6848 </div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "w-[420px]" }, [
                            createVNode(_component_el_input, {
                              modelValue: unref(formData).idle_time,
                              "onUpdate:modelValue": ($event) => unref(formData).idle_time = $event,
                              placeholder: "\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u95F2\u65F6\u65F6\u95F4",
                              type: "number"
                            }, {
                              append: withCtx(() => [
                                createTextVNode("\u79D2")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("div", { class: "form-tips" }, " \u4F8B\u5982\uFF1A\u9009\u62E95s\uFF0C\u6BCF\u96945\u79D2\u5C31\u4F1A\u6709\u4E00\u4E2A\u56DE\u590D\u5185\u5BB9\uFF0C\u5185\u5BB9\u662F\u5728\u95F2\u65F6\u56DE\u590D\u5185\u5BB9\u7684\u6587\u6848 ")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u95F2\u65F6\u56DE\u590D\u5185\u5BB9",
                    prop: "idle_reply"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="w-[420px]"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(formData).idle_reply,
                          "onUpdate:modelValue": ($event) => unref(formData).idle_reply = $event,
                          placeholder: "\u8BF7\u8F93\u5165\u95F2\u65F6\u56DE\u590D\u5185\u5BB9",
                          type: "textarea",
                          rows: 4,
                          clearable: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="form-tips"${_scopeId3}> \u6839\u636E\u81EA\u5B9A\u4E49\u95F2\u65F6\u65F6\u95F4\u6BB5\u8BBE\u7F6E\u540E\u5F62\u8C61\u56DE\u590D\u7684\u5185\u5BB9 </div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "w-[420px]" }, [
                            createVNode(_component_el_input, {
                              modelValue: unref(formData).idle_reply,
                              "onUpdate:modelValue": ($event) => unref(formData).idle_reply = $event,
                              placeholder: "\u8BF7\u8F93\u5165\u95F2\u65F6\u56DE\u590D\u5185\u5BB9",
                              type: "textarea",
                              rows: 4,
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("div", { class: "form-tips" }, " \u6839\u636E\u81EA\u5B9A\u4E49\u95F2\u65F6\u65F6\u95F4\u6BB5\u8BBE\u7F6E\u540E\u5F62\u8C61\u56DE\u590D\u7684\u5185\u5BB9 ")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_form_item, {
                      label: "\u5F62\u8C61\u540D\u79F0",
                      prop: "name"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-[420px]" }, [
                          createVNode(_component_el_input, {
                            modelValue: unref(formData).name,
                            "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u5F62\u8C61\u540D\u79F0",
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u5F62\u8C61\u5934\u50CF",
                      prop: "avatar"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("div", null, [
                            createVNode(_component_UploadImg, {
                              modelValue: unref(formData).avatar,
                              "onUpdate:modelValue": ($event) => unref(formData).avatar = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "form-tips" }, "\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A50*50px")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u5F62\u8C61\u5C01\u9762",
                      prop: "image"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("div", null, [
                            createVNode(_component_UploadImg, {
                              modelValue: unref(formData).image,
                              "onUpdate:modelValue": ($event) => unref(formData).image = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "form-tips" }, "\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A280px\xD7187px")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u5BBD\u5C4F\u4EBA\u7269\u5F85\u673A\u89C6\u9891",
                      prop: "wide_stay_video"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("div", null, [
                            createVNode(_component_UploadVideo, {
                              modelValue: unref(formData).wide_stay_video,
                              "onUpdate:modelValue": ($event) => unref(formData).wide_stay_video = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "form-tips" }, [
                            createTextVNode(" \u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M "),
                            createVNode("span", {
                              class: "text-primary cursor-pointer",
                              onClick: ($event) => handleAddVideo(
                                "wide_stay_video",
                                "wide_stay_video.mp4"
                              )
                            }, " \u4F7F\u7528\u9ED8\u8BA4\u89C6\u9891 ", 8, ["onClick"])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u5BBD\u5C4F\u4EBA\u7269\u8BF4\u8BDD\u89C6\u9891",
                      prop: "wide_talk_video"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("div", null, [
                            createVNode(_component_UploadVideo, {
                              modelValue: unref(formData).wide_talk_video,
                              "onUpdate:modelValue": ($event) => unref(formData).wide_talk_video = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "form-tips" }, [
                            createTextVNode(" \u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M "),
                            createVNode("span", {
                              class: "text-primary cursor-pointer",
                              onClick: ($event) => handleAddVideo(
                                "wide_talk_video",
                                "wide_talk_video.mp4"
                              )
                            }, " \u4F7F\u7528\u9ED8\u8BA4\u89C6\u9891 ", 8, ["onClick"])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u7AD6\u5C4F\u4EBA\u7269\u5F85\u673A\u89C6\u9891",
                      prop: "vertical_stay_video"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("div", null, [
                            createVNode(_component_UploadVideo, {
                              modelValue: unref(formData).vertical_stay_video,
                              "onUpdate:modelValue": ($event) => unref(formData).vertical_stay_video = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "form-tips" }, [
                            createTextVNode(" \u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M "),
                            createVNode("span", {
                              class: "text-primary cursor-pointer",
                              onClick: ($event) => handleAddVideo(
                                "vertical_stay_video",
                                "vertical_stay_video.mp4"
                              )
                            }, " \u4F7F\u7528\u9ED8\u8BA4\u89C6\u9891 ", 8, ["onClick"])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u7AD6\u5C4F\u4EBA\u7269\u8BF4\u8BDD\u89C6\u9891",
                      prop: "vertical_talk_video"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("div", null, [
                            createVNode(_component_UploadVideo, {
                              modelValue: unref(formData).vertical_talk_video,
                              "onUpdate:modelValue": ($event) => unref(formData).vertical_talk_video = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "form-tips" }, [
                            createTextVNode(" \u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M "),
                            createVNode("span", {
                              class: "text-primary cursor-pointer",
                              onClick: ($event) => handleAddVideo(
                                "vertical_talk_video",
                                "vertical_talk_video.mp4"
                              )
                            }, " \u4F7F\u7528\u9ED8\u8BA4\u89C6\u9891 ", 8, ["onClick"])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u914D\u97F3\u89D2\u8272",
                      prop: "dubbing"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-1" }, [
                          createVNode(_component_DubPicker, {
                            modelValue: unref(formData).dubbing,
                            "onUpdate:modelValue": ($event) => unref(formData).dubbing = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u81EA\u5B9A\u4E49\u95F2\u65F6\u65F6\u95F4",
                      prop: "idle_time"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-[420px]" }, [
                          createVNode(_component_el_input, {
                            modelValue: unref(formData).idle_time,
                            "onUpdate:modelValue": ($event) => unref(formData).idle_time = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u95F2\u65F6\u65F6\u95F4",
                            type: "number"
                          }, {
                            append: withCtx(() => [
                              createTextVNode("\u79D2")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "form-tips" }, " \u4F8B\u5982\uFF1A\u9009\u62E95s\uFF0C\u6BCF\u96945\u79D2\u5C31\u4F1A\u6709\u4E00\u4E2A\u56DE\u590D\u5185\u5BB9\uFF0C\u5185\u5BB9\u662F\u5728\u95F2\u65F6\u56DE\u590D\u5185\u5BB9\u7684\u6587\u6848 ")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "\u95F2\u65F6\u56DE\u590D\u5185\u5BB9",
                      prop: "idle_reply"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-[420px]" }, [
                          createVNode(_component_el_input, {
                            modelValue: unref(formData).idle_reply,
                            "onUpdate:modelValue": ($event) => unref(formData).idle_reply = $event,
                            placeholder: "\u8BF7\u8F93\u5165\u95F2\u65F6\u56DE\u590D\u5185\u5BB9",
                            type: "textarea",
                            rows: 4,
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "form-tips" }, " \u6839\u636E\u81EA\u5B9A\u4E49\u95F2\u65F6\u65F6\u95F4\u6BB5\u8BBE\u7F6E\u540E\u5F62\u8C61\u56DE\u590D\u7684\u5185\u5BB9 ")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "lg:flex" }, [
                createVNode("div", { class: "flex-1 min-w-0" }, [
                  createVNode(_component_el_form, {
                    class: "p-4",
                    ref_key: "formRef",
                    ref: formRef,
                    model: unref(formData),
                    "label-width": "140px",
                    rules: unref(formRules)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, {
                        label: "\u5F62\u8C61\u540D\u79F0",
                        prop: "name"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "w-[420px]" }, [
                            createVNode(_component_el_input, {
                              modelValue: unref(formData).name,
                              "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                              placeholder: "\u8BF7\u8F93\u5165\u5F62\u8C61\u540D\u79F0",
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "\u5F62\u8C61\u5934\u50CF",
                        prop: "avatar"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", null, [
                              createVNode(_component_UploadImg, {
                                modelValue: unref(formData).avatar,
                                "onUpdate:modelValue": ($event) => unref(formData).avatar = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "form-tips" }, "\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A50*50px")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "\u5F62\u8C61\u5C01\u9762",
                        prop: "image"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", null, [
                              createVNode(_component_UploadImg, {
                                modelValue: unref(formData).image,
                                "onUpdate:modelValue": ($event) => unref(formData).image = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "form-tips" }, "\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A280px\xD7187px")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "\u5BBD\u5C4F\u4EBA\u7269\u5F85\u673A\u89C6\u9891",
                        prop: "wide_stay_video"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", null, [
                              createVNode(_component_UploadVideo, {
                                modelValue: unref(formData).wide_stay_video,
                                "onUpdate:modelValue": ($event) => unref(formData).wide_stay_video = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "form-tips" }, [
                              createTextVNode(" \u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M "),
                              createVNode("span", {
                                class: "text-primary cursor-pointer",
                                onClick: ($event) => handleAddVideo(
                                  "wide_stay_video",
                                  "wide_stay_video.mp4"
                                )
                              }, " \u4F7F\u7528\u9ED8\u8BA4\u89C6\u9891 ", 8, ["onClick"])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "\u5BBD\u5C4F\u4EBA\u7269\u8BF4\u8BDD\u89C6\u9891",
                        prop: "wide_talk_video"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", null, [
                              createVNode(_component_UploadVideo, {
                                modelValue: unref(formData).wide_talk_video,
                                "onUpdate:modelValue": ($event) => unref(formData).wide_talk_video = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "form-tips" }, [
                              createTextVNode(" \u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M "),
                              createVNode("span", {
                                class: "text-primary cursor-pointer",
                                onClick: ($event) => handleAddVideo(
                                  "wide_talk_video",
                                  "wide_talk_video.mp4"
                                )
                              }, " \u4F7F\u7528\u9ED8\u8BA4\u89C6\u9891 ", 8, ["onClick"])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "\u7AD6\u5C4F\u4EBA\u7269\u5F85\u673A\u89C6\u9891",
                        prop: "vertical_stay_video"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", null, [
                              createVNode(_component_UploadVideo, {
                                modelValue: unref(formData).vertical_stay_video,
                                "onUpdate:modelValue": ($event) => unref(formData).vertical_stay_video = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "form-tips" }, [
                              createTextVNode(" \u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M "),
                              createVNode("span", {
                                class: "text-primary cursor-pointer",
                                onClick: ($event) => handleAddVideo(
                                  "vertical_stay_video",
                                  "vertical_stay_video.mp4"
                                )
                              }, " \u4F7F\u7528\u9ED8\u8BA4\u89C6\u9891 ", 8, ["onClick"])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "\u7AD6\u5C4F\u4EBA\u7269\u8BF4\u8BDD\u89C6\u9891",
                        prop: "vertical_talk_video"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", null, [
                              createVNode(_component_UploadVideo, {
                                modelValue: unref(formData).vertical_talk_video,
                                "onUpdate:modelValue": ($event) => unref(formData).vertical_talk_video = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "form-tips" }, [
                              createTextVNode(" \u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M "),
                              createVNode("span", {
                                class: "text-primary cursor-pointer",
                                onClick: ($event) => handleAddVideo(
                                  "vertical_talk_video",
                                  "vertical_talk_video.mp4"
                                )
                              }, " \u4F7F\u7528\u9ED8\u8BA4\u89C6\u9891 ", 8, ["onClick"])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "\u914D\u97F3\u89D2\u8272",
                        prop: "dubbing"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-1" }, [
                            createVNode(_component_DubPicker, {
                              modelValue: unref(formData).dubbing,
                              "onUpdate:modelValue": ($event) => unref(formData).dubbing = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "\u81EA\u5B9A\u4E49\u95F2\u65F6\u65F6\u95F4",
                        prop: "idle_time"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "w-[420px]" }, [
                            createVNode(_component_el_input, {
                              modelValue: unref(formData).idle_time,
                              "onUpdate:modelValue": ($event) => unref(formData).idle_time = $event,
                              placeholder: "\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u95F2\u65F6\u65F6\u95F4",
                              type: "number"
                            }, {
                              append: withCtx(() => [
                                createTextVNode("\u79D2")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("div", { class: "form-tips" }, " \u4F8B\u5982\uFF1A\u9009\u62E95s\uFF0C\u6BCF\u96945\u79D2\u5C31\u4F1A\u6709\u4E00\u4E2A\u56DE\u590D\u5185\u5BB9\uFF0C\u5185\u5BB9\u662F\u5728\u95F2\u65F6\u56DE\u590D\u5185\u5BB9\u7684\u6587\u6848 ")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "\u95F2\u65F6\u56DE\u590D\u5185\u5BB9",
                        prop: "idle_reply"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "w-[420px]" }, [
                            createVNode(_component_el_input, {
                              modelValue: unref(formData).idle_reply,
                              "onUpdate:modelValue": ($event) => unref(formData).idle_reply = $event,
                              placeholder: "\u8BF7\u8F93\u5165\u95F2\u65F6\u56DE\u590D\u5185\u5BB9",
                              type: "textarea",
                              rows: 4,
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("div", { class: "form-tips" }, " \u6839\u636E\u81EA\u5B9A\u4E49\u95F2\u65F6\u65F6\u95F4\u6BB5\u8BBE\u7F6E\u540E\u5F62\u8C61\u56DE\u590D\u7684\u5185\u5BB9 ")
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["model", "rules"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex p-4 items-center justify-center">`);
      _push(ssrRenderComponent(_component_ElButton, {
        type: "primary",
        onClick: handelSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u4FDD\u5B58`);
          } else {
            return [
              createTextVNode("\u4FDD\u5B58")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/digital/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=edit-qXb869Ay.mjs.map
