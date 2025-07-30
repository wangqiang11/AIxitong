import { a as ElFormItem } from './index-DLL0sEcv.mjs';
import { _ as __nuxt_component_1 } from './index-BS4hxwV8.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { ao as ElMessage, d as ElButton, B as vLoading } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, unref, createVNode, toDisplayString, isRef, createTextVNode, openBlock, createBlock, createCommentVNode, withDirectives, useSSRContext } from 'vue';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrGetDirectiveProps } from 'vue/server-renderer';
import { useVModels } from '@vueuse/core';
import { t as translate } from './video-DH7H33E1.mjs';
import '@vue/shared';
import 'lodash-unified';
import 'async-validator';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "prompt",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" },
    config: { default: () => ({}) },
    type: { default: 1 },
    showTranslate: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const { modelValue: value } = useVModels(props, emit);
    const isText2Video = computed(() => props.type === 1);
    const configMap = {
      "1": {
        label: "\u89C6\u9891\u573A\u666F",
        placeholder: "\u5728\u6B64\u63CF\u8FF0\u4F60\u7684\u89C6\u9891\u573A\u666F\uFF0C\u5305\u542B\u5185\u5BB9\u4E3B\u4F53+\u52A8\u4F5C/\u573A\u666F"
      },
      "2": {
        label: "\u63CF\u8FF0\u8BCD",
        placeholder: "\u63CF\u8FF0\u89C6\u9891\u4E2D\u9700\u8981\u53D8\u5316\u7684\u5185\u5BB9\u5373\u53EF\uFF5E"
      }
    };
    const currentConfig = computed(() => configMap[props.type] || {});
    const currentIndex = ref(-1);
    const useExample = () => {
      var _a;
      const length = (_a = props.config.data) == null ? void 0 : _a.length;
      if (length) {
        let index = Math.round(Math.random() * (length - 1));
        if (currentIndex.value === index) {
          if (index < length - 1) {
            index++;
          } else {
            index--;
          }
        }
        if (index < 0) {
          index = 0;
        }
        currentIndex.value = index;
        const content = props.config.data[index];
        if (content) value.value = content;
      }
    };
    const { lockFn: translatePrompt, isLock } = useLockFn(async () => {
      if (!value.value) {
        return ElMessage.error("\u8BF7\u8F93\u5165\u63CF\u8FF0\u8BCD");
      }
      const data = await translate({
        prompt: value.value
      });
      value.value = data.result;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form_item = ElFormItem;
      const _component_LTextarea = __nuxt_component_1;
      const _component_Icon = _sfc_main$1;
      const _component_ElButton = ElButton;
      const _directive_loading = vLoading;
      _push(ssrRenderComponent(_component_el_form_item, mergeProps({
        prop: "prompt",
        required: ""
      }, _attrs), {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-bold text-tx-primary"${_scopeId}>${ssrInterpolate(unref(currentConfig).label)}</span>`);
          } else {
            return [
              createVNode("span", { class: "font-bold text-tx-primary" }, toDisplayString(unref(currentConfig).label), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({
              class: "flex-1",
              "element-loading-text": "\u6B63\u5728\u7FFB\u8BD1"
            }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLock))))}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LTextarea, {
              modelValue: unref(value),
              "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
              placeholder: unref(currentConfig).placeholder,
              contentStyle: {
                height: "120px"
              }
            }, {
              "length-suffix": withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<div class="flex p-[10px]"${_scopeId2}><div class="flex-1 flex items-center"${_scopeId2}>`);
                  if (unref(isText2Video) && _ctx.config.status && ((_a = _ctx.config.data) == null ? void 0 : _a.length)) {
                    _push3(`<div class="flex items-center cursor-pointer text-[#6F7E8E] text-sm mr-2 hover:text-primary"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, { name: "el-icon-Refresh" }, null, _parent3, _scopeId2));
                    _push3(`<span class="ml-[4px]"${_scopeId2}>\u8BD5\u8BD5\u793A\u4F8B</span></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (_ctx.showTranslate) {
                    _push3(`<div class="flex items-center cursor-pointer text-[#6F7E8E] text-sm hover:text-primary"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, { name: "el-icon-Switch" }, null, _parent3, _scopeId2));
                    _push3(`<span class="ml-[4px]"${_scopeId2}>\u7FFB\u8BD1\u6210\u82F1\u6587</span></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_ElButton, {
                    link: "",
                    size: "small",
                    type: "primary",
                    onClick: ($event) => value.value = ""
                  }, {
                    icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "el-icon-Delete",
                          size: 12
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "el-icon-Delete",
                            size: 12
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u6E05\u7A7A `);
                      } else {
                        return [
                          createTextVNode(" \u6E05\u7A7A ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex p-[10px]" }, [
                      createVNode("div", { class: "flex-1 flex items-center" }, [
                        unref(isText2Video) && _ctx.config.status && ((_b = _ctx.config.data) == null ? void 0 : _b.length) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex items-center cursor-pointer text-[#6F7E8E] text-sm mr-2 hover:text-primary",
                          onClick: useExample
                        }, [
                          createVNode(_component_Icon, { name: "el-icon-Refresh" }),
                          createVNode("span", { class: "ml-[4px]" }, "\u8BD5\u8BD5\u793A\u4F8B")
                        ])) : createCommentVNode("", true),
                        _ctx.showTranslate ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "flex items-center cursor-pointer text-[#6F7E8E] text-sm hover:text-primary",
                          onClick: unref(translatePrompt)
                        }, [
                          createVNode(_component_Icon, { name: "el-icon-Switch" }),
                          createVNode("span", { class: "ml-[4px]" }, "\u7FFB\u8BD1\u6210\u82F1\u6587")
                        ], 8, ["onClick"])) : createCommentVNode("", true)
                      ]),
                      createVNode(_component_ElButton, {
                        link: "",
                        size: "small",
                        type: "primary",
                        onClick: ($event) => value.value = ""
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
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("div", {
                class: "flex-1",
                "element-loading-text": "\u6B63\u5728\u7FFB\u8BD1"
              }, [
                createVNode(_component_LTextarea, {
                  modelValue: unref(value),
                  "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                  placeholder: unref(currentConfig).placeholder,
                  contentStyle: {
                    height: "120px"
                  }
                }, {
                  "length-suffix": withCtx(() => {
                    var _a;
                    return [
                      createVNode("div", { class: "flex p-[10px]" }, [
                        createVNode("div", { class: "flex-1 flex items-center" }, [
                          unref(isText2Video) && _ctx.config.status && ((_a = _ctx.config.data) == null ? void 0 : _a.length) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex items-center cursor-pointer text-[#6F7E8E] text-sm mr-2 hover:text-primary",
                            onClick: useExample
                          }, [
                            createVNode(_component_Icon, { name: "el-icon-Refresh" }),
                            createVNode("span", { class: "ml-[4px]" }, "\u8BD5\u8BD5\u793A\u4F8B")
                          ])) : createCommentVNode("", true),
                          _ctx.showTranslate ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "flex items-center cursor-pointer text-[#6F7E8E] text-sm hover:text-primary",
                            onClick: unref(translatePrompt)
                          }, [
                            createVNode(_component_Icon, { name: "el-icon-Switch" }),
                            createVNode("span", { class: "ml-[4px]" }, "\u7FFB\u8BD1\u6210\u82F1\u6587")
                          ], 8, ["onClick"])) : createCommentVNode("", true)
                        ]),
                        createVNode(_component_ElButton, {
                          link: "",
                          size: "small",
                          type: "primary",
                          onClick: ($event) => value.value = ""
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
                  }),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
              ])), [
                [_directive_loading, unref(isLock)]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/video/_components/prompt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=prompt-DBQuSt40.mjs.map
