import { E as ElDialog } from './index-CzJm6kkT.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { d as ElButton, B as vLoading } from './server.mjs';
import { defineComponent, reactive, ref, computed, watch, mergeProps, unref, isRef, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, withDirectives, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
import { c as getPPTTemplate } from './ai_ppt-C1HXY0_t.mjs';
import './use-dialog-DHq_GjFf.mjs';
import 'lodash-unified';
import './refs-CJvnaIJj.mjs';
import '@vue/shared';
import './position-DVxxNIGX.mjs';
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
  __name: "select-template",
  __ssrInlineRender: true,
  props: {
    visible: { type: Boolean },
    coverId: {},
    prompt: { default: "" }
  },
  emits: ["update:visible", "update:coverId", "confirm"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const visibleValue = useVModel(props, "visible", emit);
    const coverIdValue = useVModel(props, "coverId", emit);
    const templateStyle = ["\u79D1\u6280", "\u5546\u52A1", "\u5C0F\u6E05\u65B0", "\u6781\u7B80", "\u4E2D\u56FD\u98CE", "\u53EF\u7231\u5361\u901A"];
    const templateColor = [
      {
        label: "\u7EA2\u8272",
        value: "#D7000F"
      },
      {
        label: "\u6A59\u8272",
        value: "#FF7A00"
      },
      {
        label: "\u9EC4\u8272",
        value: "#FFC700"
      },
      {
        label: "\u7EFF\u8272",
        value: "#39D819"
      },
      {
        label: "\u9752\u8272",
        value: "#3f9097"
      },
      {
        label: "\u84DD\u8272",
        value: "#0385FF"
      },
      {
        label: "\u7D2B\u8272",
        value: "#C73AFF"
      },
      {
        label: "\u7C89\u8272",
        value: "#FF3AA0"
      }
    ];
    const options = reactive({
      color: "\u7EA2\u8272",
      style: "\u79D1\u6280"
    });
    let lastPrompt = "";
    const templateList = ref([]);
    const setSelectFirst = () => {
      const [first] = templateList.value;
      if (first && first.cover_id) {
        coverIdValue.value = first.cover_id;
      }
    };
    const { lockFn: getTemplate, isLock } = useLockFn(async () => {
      lastPrompt = props.prompt;
      templateList.value = await getPPTTemplate({
        prompt: props.prompt,
        ...options
      });
      setSelectFirst();
    });
    const currentTemplate = computed(
      () => templateList.value.find((item) => item.cover_id === props.coverId) || {}
    );
    watch(
      options,
      () => {
        getTemplate();
      },
      {
        deep: true
      }
    );
    watch(visibleValue, (value) => {
      if (!value) return;
      if (lastPrompt === props.prompt) {
        !coverIdValue.value && setSelectFirst();
        return;
      }
      getTemplate();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_dialog = ElDialog;
      const _component_ElImage = ElImage;
      const _component_Icon = _sfc_main$1;
      const _component_ElScrollbar = ElScrollbar;
      const _component_ElButton = ElButton;
      const _directive_loading = vLoading;
      _push(ssrRenderComponent(_component_el_dialog, mergeProps({
        modelValue: unref(visibleValue),
        "onUpdate:modelValue": ($event) => isRef(visibleValue) ? visibleValue.value = $event : null,
        width: "1100"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({ class: "flex text-tx-primary" }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLock))))}${_scopeId}><div class="flex-[3] h-full mr-[26px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElImage, {
              class: "w-full rounded-[10px] h-[350px]",
              src: unref(currentTemplate).cover_image
            }, {
              error: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="el-image__error"${_scopeId2}>\u9009\u4E2D\u53F3\u4FA7\u6A21\u677F\u4EE5\u9884\u89C8</div>`);
                } else {
                  return [
                    createVNode("div", { class: "el-image__error" }, "\u9009\u4E2D\u53F3\u4FA7\u6A21\u677F\u4EE5\u9884\u89C8")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex-[1.8] flex flex-col"${_scopeId}><div class="font-bold mb-[15px]"${_scopeId}>\u9009\u62E9PPT\u6A21\u677F</div><div class="flex text-xs"${_scopeId}><div class="flex-none mt-[5px] text-tx-regular mr-[8px]"${_scopeId}> \u6A21\u677F\u98CE\u683C: </div><div class="flex flex-wrap"${_scopeId}><!--[-->`);
            ssrRenderList(templateStyle, (item, index) => {
              _push2(`<div class="${ssrRenderClass([{
                "!bg-page": unref(options).style === item
              }, "mx-[1px] px-[8px] py-[5px] rounded cursor-pointer hover:bg-page mb-[8px]"])}"${_scopeId}>${ssrInterpolate(item)}</div>`);
            });
            _push2(`<!--]--></div></div><div class="flex text-xs"${_scopeId}><div class="flex-none text-tx-regular mr-[8px]"${_scopeId}> \u4E3B\u9898\u989C\u8272: </div><div class="flex flex-wrap mx-[-6px]"${_scopeId}><!--[-->`);
            ssrRenderList(templateColor, (item, index) => {
              _push2(`<div class="w-[18px] h-[18px] text-white mx-[6px] mb-[6px] rounded-[50%] flex items-center justify-center cursor-pointer" style="${ssrRenderStyle({
                background: item.value
              })}"${_scopeId}>`);
              if (unref(options).color === item.label) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "el-icon-Select",
                  size: 12
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div><div class="flex-1 min-h-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElScrollbar, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="overflow-hidden"${_scopeId2}><div class="flex flex-wrap mx-[-6px] py-[12px]"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(templateList), (item, index) => {
                    _push3(`<div class="w-[50%]"${_scopeId2}><div class="px-[6px]"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_ElImage, {
                      class: ["w-full h-[100px] rounded border-2 cursor-pointer border-solid border-[transparent]", {
                        "border-primary": unref(coverIdValue) === item.cover_id
                      }],
                      src: item.cover_image
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  });
                  _push3(`<!--]--></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "overflow-hidden" }, [
                      createVNode("div", { class: "flex flex-wrap mx-[-6px] py-[12px]" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(templateList), (item, index) => {
                          return openBlock(), createBlock("div", {
                            class: "w-[50%]",
                            key: item.cover_id,
                            onClick: ($event) => coverIdValue.value = item.cover_id
                          }, [
                            createVNode("div", { class: "px-[6px]" }, [
                              createVNode(_component_ElImage, {
                                class: ["w-full h-[100px] rounded border-2 cursor-pointer border-solid border-[transparent]", {
                                  "border-primary": unref(coverIdValue) === item.cover_id
                                }],
                                src: item.cover_image
                              }, null, 8, ["class", "src"])
                            ])
                          ], 8, ["onClick"]);
                        }), 128))
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElButton, {
              class: "w-full",
              type: "primary",
              size: "large",
              onClick: ($event) => emit("confirm")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u751F\u6210PPT <span class="flex ml-[10px]"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, { name: "el-icon-Right" }, null, _parent3, _scopeId2));
                  _push3(`</span>`);
                } else {
                  return [
                    createTextVNode(" \u751F\u6210PPT "),
                    createVNode("span", { class: "flex ml-[10px]" }, [
                      createVNode(_component_Icon, { name: "el-icon-Right" })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("div", { class: "flex text-tx-primary" }, [
                createVNode("div", { class: "flex-[3] h-full mr-[26px]" }, [
                  createVNode(_component_ElImage, {
                    class: "w-full rounded-[10px] h-[350px]",
                    src: unref(currentTemplate).cover_image
                  }, {
                    error: withCtx(() => [
                      createVNode("div", { class: "el-image__error" }, "\u9009\u4E2D\u53F3\u4FA7\u6A21\u677F\u4EE5\u9884\u89C8")
                    ]),
                    _: 1
                  }, 8, ["src"])
                ]),
                createVNode("div", { class: "flex-[1.8] flex flex-col" }, [
                  createVNode("div", { class: "font-bold mb-[15px]" }, "\u9009\u62E9PPT\u6A21\u677F"),
                  createVNode("div", { class: "flex text-xs" }, [
                    createVNode("div", { class: "flex-none mt-[5px] text-tx-regular mr-[8px]" }, " \u6A21\u677F\u98CE\u683C: "),
                    createVNode("div", { class: "flex flex-wrap" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(templateStyle, (item, index) => {
                        return createVNode("div", {
                          key: index,
                          class: ["mx-[1px] px-[8px] py-[5px] rounded cursor-pointer hover:bg-page mb-[8px]", {
                            "!bg-page": unref(options).style === item
                          }],
                          onClick: ($event) => unref(options).style = item
                        }, toDisplayString(item), 11, ["onClick"]);
                      }), 64))
                    ])
                  ]),
                  createVNode("div", { class: "flex text-xs" }, [
                    createVNode("div", { class: "flex-none text-tx-regular mr-[8px]" }, " \u4E3B\u9898\u989C\u8272: "),
                    createVNode("div", { class: "flex flex-wrap mx-[-6px]" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(templateColor, (item, index) => {
                        return createVNode("div", {
                          key: index,
                          class: "w-[18px] h-[18px] text-white mx-[6px] mb-[6px] rounded-[50%] flex items-center justify-center cursor-pointer",
                          style: {
                            background: item.value
                          },
                          onClick: ($event) => unref(options).color = item.label
                        }, [
                          unref(options).color === item.label ? (openBlock(), createBlock(_component_Icon, {
                            key: 0,
                            name: "el-icon-Select",
                            size: 12
                          })) : createCommentVNode("", true)
                        ], 12, ["onClick"]);
                      }), 64))
                    ])
                  ]),
                  createVNode("div", { class: "flex-1 min-h-0" }, [
                    createVNode(_component_ElScrollbar, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "overflow-hidden" }, [
                          createVNode("div", { class: "flex flex-wrap mx-[-6px] py-[12px]" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(templateList), (item, index) => {
                              return openBlock(), createBlock("div", {
                                class: "w-[50%]",
                                key: item.cover_id,
                                onClick: ($event) => coverIdValue.value = item.cover_id
                              }, [
                                createVNode("div", { class: "px-[6px]" }, [
                                  createVNode(_component_ElImage, {
                                    class: ["w-full h-[100px] rounded border-2 cursor-pointer border-solid border-[transparent]", {
                                      "border-primary": unref(coverIdValue) === item.cover_id
                                    }],
                                    src: item.cover_image
                                  }, null, 8, ["class", "src"])
                                ])
                              ], 8, ["onClick"]);
                            }), 128))
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_ElButton, {
                      class: "w-full",
                      type: "primary",
                      size: "large",
                      onClick: ($event) => emit("confirm")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u751F\u6210PPT "),
                        createVNode("span", { class: "flex ml-[10px]" }, [
                          createVNode(_component_Icon, { name: "el-icon-Right" })
                        ])
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai_ppt/_components/select-template.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=select-template-CAU51dfS.mjs.map
