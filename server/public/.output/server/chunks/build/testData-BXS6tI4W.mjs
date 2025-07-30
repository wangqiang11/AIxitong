import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElInput, d as ElButton } from './server.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { E as ElProgress } from './el-progress-B1IVess1.mjs';
import { useSSRContext, defineComponent, ref, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { q as itemDatatest } from './my_database-C6D0rbWD.mjs';
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
import '@vueuse/core';
import '@vue/shared';
import 'lodash-unified';
import 'async-validator';
import 'vue-router';
import 'lodash-es';
import 'weixin-js-sdk';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './position-DVxxNIGX.mjs';

const empty = "" + buildAssetsURL("empty.C6MrDaor.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "testData",
  __ssrInlineRender: true,
  props: {
    id: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const answerList = ref([]);
    const formData = ref({
      kb_id: props.id,
      question: ""
    });
    const dataTest = async () => {
      answerList.value = await itemDatatest({ ...formData.value });
    };
    const { lockFn: dataTestFn, isLock } = useLockFn(dataTest);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_scrollbar = ElScrollbar;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      const _component_el_image = ElImage;
      const _component_el_progress = ElProgress;
      _push(ssrRenderComponent(_component_el_scrollbar, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-main" data-v-efecb610${_scopeId}><div class="grid lg:grid-cols-2 gap-4 grid-cols-1 h-full" data-v-efecb610${_scopeId}><div data-v-efecb610${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_form, { "label-width": "90px" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, { label: "\u6D4B\u8BD5\u6587\u672C" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(formData).question,
                          "onUpdate:modelValue": ($event) => unref(formData).question = $event,
                          type: "textarea",
                          rows: "20"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(formData).question,
                            "onUpdate:modelValue": ($event) => unref(formData).question = $event,
                            type: "textarea",
                            rows: "20"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div data-v-efecb610${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_button, {
                          loading: unref(isLock),
                          disabled: unref(formData).question == "" || unref(formData).kb_id == "",
                          type: "primary",
                          onClick: unref(dataTestFn)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u6D4B\u8BD5 `);
                            } else {
                              return [
                                createTextVNode(" \u6D4B\u8BD5 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode(_component_el_button, {
                              loading: unref(isLock),
                              disabled: unref(formData).question == "" || unref(formData).kb_id == "",
                              type: "primary",
                              onClick: unref(dataTestFn)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u6D4B\u8BD5 ")
                              ]),
                              _: 1
                            }, 8, ["loading", "disabled", "onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_form_item, { label: "\u6D4B\u8BD5\u6587\u672C" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(formData).question,
                          "onUpdate:modelValue": ($event) => unref(formData).question = $event,
                          type: "textarea",
                          rows: "20"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, null, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode(_component_el_button, {
                            loading: unref(isLock),
                            disabled: unref(formData).question == "" || unref(formData).kb_id == "",
                            type: "primary",
                            onClick: unref(dataTestFn)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u6D4B\u8BD5 ")
                            ]),
                            _: 1
                          }, 8, ["loading", "disabled", "onClick"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="px-[10px] py-[5px] h-full lg:borderLeft" data-v-efecb610${_scopeId}>`);
            if (unref(answerList).length == 0) {
              _push2(`<div class="flex flex-col items-center justify-center h-full" data-v-efecb610${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_image, { src: unref(empty) }, null, _parent2, _scopeId));
              _push2(`<div class="mt-[10px] text-[#5a646e]" data-v-efecb610${_scopeId}> \u6D4B\u8BD5\u7ED3\u679C\u5C06\u5728\u8FD9\u91CC\u5C55\u793A </div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_el_scrollbar, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(answerList).length != 0) {
                    _push3(`<div data-v-efecb610${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(answerList), (item, index) => {
                      _push3(`<div class="p-[10px] border border-solid border-br-light mb-[10px] rounded" data-v-efecb610${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_el_progress, {
                        percentage: Math.abs(item.score / 1) * 100,
                        color: "var(--el-text-color-disabled)"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span data-v-efecb610${_scopeId3}>${ssrInterpolate(Math.abs(item.score).toFixed(5))}</span>`);
                          } else {
                            return [
                              createVNode("span", null, toDisplayString(Math.abs(item.score).toFixed(5)), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<div class="text-sm text-tx-secondary mt-[5px] whitespace-pre-line" data-v-efecb610${_scopeId2}>${ssrInterpolate(item.question)}</div><div class="text-sm text-tx-secondary whitespace-pre-line" data-v-efecb610${_scopeId2}>${ssrInterpolate(item.answer)}</div></div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(answerList).length != 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(answerList), (item, index) => {
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: "p-[10px] border border-solid border-br-light mb-[10px] rounded"
                        }, [
                          createVNode(_component_el_progress, {
                            percentage: Math.abs(item.score / 1) * 100,
                            color: "var(--el-text-color-disabled)"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, toDisplayString(Math.abs(item.score).toFixed(5)), 1)
                            ]),
                            _: 2
                          }, 1032, ["percentage"]),
                          createVNode("div", { class: "text-sm text-tx-secondary mt-[5px] whitespace-pre-line" }, toDisplayString(item.question), 1),
                          createVNode("div", { class: "text-sm text-tx-secondary whitespace-pre-line" }, toDisplayString(item.answer), 1)
                        ]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-main" }, [
                createVNode("div", { class: "grid lg:grid-cols-2 gap-4 grid-cols-1 h-full" }, [
                  createVNode("div", null, [
                    createVNode(_component_el_form, { "label-width": "90px" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_form_item, { label: "\u6D4B\u8BD5\u6587\u672C" }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: unref(formData).question,
                              "onUpdate:modelValue": ($event) => unref(formData).question = $event,
                              type: "textarea",
                              rows: "20"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_form_item, null, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode(_component_el_button, {
                                loading: unref(isLock),
                                disabled: unref(formData).question == "" || unref(formData).kb_id == "",
                                type: "primary",
                                onClick: unref(dataTestFn)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u6D4B\u8BD5 ")
                                ]),
                                _: 1
                              }, 8, ["loading", "disabled", "onClick"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "px-[10px] py-[5px] h-full lg:borderLeft" }, [
                    unref(answerList).length == 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-col items-center justify-center h-full"
                    }, [
                      createVNode(_component_el_image, { src: unref(empty) }, null, 8, ["src"]),
                      createVNode("div", { class: "mt-[10px] text-[#5a646e]" }, " \u6D4B\u8BD5\u7ED3\u679C\u5C06\u5728\u8FD9\u91CC\u5C55\u793A ")
                    ])) : createCommentVNode("", true),
                    createVNode(_component_el_scrollbar, null, {
                      default: withCtx(() => [
                        unref(answerList).length != 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(answerList), (item, index) => {
                            return openBlock(), createBlock("div", {
                              key: index,
                              class: "p-[10px] border border-solid border-br-light mb-[10px] rounded"
                            }, [
                              createVNode(_component_el_progress, {
                                percentage: Math.abs(item.score / 1) * 100,
                                color: "var(--el-text-color-disabled)"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, toDisplayString(Math.abs(item.score).toFixed(5)), 1)
                                ]),
                                _: 2
                              }, 1032, ["percentage"]),
                              createVNode("div", { class: "text-sm text-tx-secondary mt-[5px] whitespace-pre-line" }, toDisplayString(item.question), 1),
                              createVNode("div", { class: "text-sm text-tx-secondary whitespace-pre-line" }, toDisplayString(item.answer), 1)
                            ]);
                          }), 128))
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/_components/testData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const testData = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-efecb610"]]);

export { testData as default };
//# sourceMappingURL=testData-BXS6tI4W.mjs.map
