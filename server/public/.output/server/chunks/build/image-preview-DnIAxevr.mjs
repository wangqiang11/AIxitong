import { E as ElDialog } from './index-CzJm6kkT.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { a as useRouter, d as ElButton } from './server.mjs';
import { u as useCopy } from './useCopy-CfS-iChu.mjs';
import { defineComponent, computed, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { r as resetFormData } from './useDrawEffect-B2jxDCVi.mjs';
import { useVModel } from '@vueuse/core';
import { a as downloadImgFile } from './download-N0luyf1S.mjs';
import './use-dialog-DHq_GjFf.mjs';
import 'lodash-unified';
import './refs-CJvnaIJj.mjs';
import '@vue/shared';
import './position-DVxxNIGX.mjs';
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
import './usePaging-DU8sXki3.mjs';
import './usePolling-DOP50YcO.mjs';
import './DrawEnum-CqAPEJOR.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "image-preview",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean },
    data: { default: () => ({}) }
  },
  emits: ["update:show"],
  setup(__props, { emit: __emit }) {
    const router = useRouter();
    const { copy } = useCopy();
    const props = __props;
    const emit = __emit;
    const showModel = useVModel(props, "show", emit);
    const complexParams = computed(() => {
      if (props.data.complex_params) {
        return JSON.parse(props.data.complex_params);
      } else {
        return {};
      }
    });
    const reDrawHandle = () => {
      const item = props.data;
      const params = {
        draw_model: item.engine,
        image_mask: item.image_base,
        negative_prompt: item.negative_prompt,
        prompt: item.prompt,
        size: item.scale,
        draw_loras: item.loras
      };
      if (item.image_base) {
        params.draw_type = "img2img";
      }
      resetFormData(params);
      showModel.value = false;
      if (item.model === "dalle3") {
        router.push("/draw/dalle");
      } else if (item.model === "sd") {
        router.push("/draw/sd");
      } else {
        router.push("/draw/mj");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElDialog = ElDialog;
      const _component_ElImage = ElImage;
      const _component_ElButton = ElButton;
      _push(ssrRenderComponent(_component_ElDialog, mergeProps({
        modelValue: unref(showModel),
        "onUpdate:modelValue": ($event) => isRef(showModel) ? showModel.value = $event : null,
        width: "900px"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex text-tx-primary"${_scopeId}><div class="flex w-[510px] justify-center items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElImage, {
              class: "w-full rounded-[12px]",
              src: _ctx.data.image,
              "preview-src-list": [_ctx.data.image],
              "hide-on-click-modal": ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-[350px] ml-[20px] flex flex-col"${_scopeId}><div class="bg-page p-[20px] rounded-[15px] flex-1 min-h-0"${_scopeId}><div class="mb-[15px]"${_scopeId}><div class="flex items-center mb-[15px]"${_scopeId}><div class="font-medium mr-auto"${_scopeId}>\u63CF\u8FF0\u8BCD</div>`);
            _push2(ssrRenderComponent(_component_ElButton, {
              link: "",
              type: "primary",
              onClick: ($event) => unref(copy)(_ctx.data.prompt)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u590D\u5236 `);
                } else {
                  return [
                    createTextVNode(" \u590D\u5236 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="bg-body rounded-[10px] h-[110px] overflow-y-auto"${_scopeId}><div class="p-[10px]"${_scopeId}>${ssrInterpolate(_ctx.data.prompt)}</div></div></div>`);
            if (_ctx.data.negative_prompt) {
              _push2(`<div class="mb-[15px]"${_scopeId}><div class="flex items-center mb-[15px]"${_scopeId}><div class="font-medium mr-auto"${_scopeId}>\u53CD\u5411\u8BCD</div>`);
              _push2(ssrRenderComponent(_component_ElButton, {
                link: "",
                type: "primary",
                onClick: ($event) => unref(copy)(_ctx.data.negative_prompt)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u590D\u5236 `);
                  } else {
                    return [
                      createTextVNode(" \u590D\u5236 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="bg-body rounded-[10px] h-[110px] overflow-y-auto"${_scopeId}><div class="p-[10px]"${_scopeId}>${ssrInterpolate(_ctx.data.negative_prompt)}</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mb-[15px]"${_scopeId}><div class="flex items-center mb-[15px]"${_scopeId}><div class="font-medium mr-auto"${_scopeId}>\u521B\u4F5C\u4FE1\u606F</div></div><div class="bg-body rounded-[10px] p-[10px]"${_scopeId}><div class="flex mb-[15px]"${_scopeId}><div class="mr-auto flex-none"${_scopeId}>\u751F\u6210\u65F6\u95F4</div><div class="ml-[20px] text-right"${_scopeId}>${ssrInterpolate(_ctx.data.create_time)}</div></div><div class="flex mb-[15px]"${_scopeId}><div class="mr-auto flex-none"${_scopeId}>\u7ED8\u753B\u7C7B\u578B</div><div class="ml-[20px] text-right"${_scopeId}>${ssrInterpolate(_ctx.data.draw_type === "txt2img" ? "\u6587\u751F\u56FE" : "\u56FE\u751F\u56FE")}</div></div><div class="flex mb-[15px]"${_scopeId}><div class="mr-auto flex-none"${_scopeId}>\u7ED8\u753B\u6A21\u578B</div><div class="ml-[20px] text-right"${_scopeId}>${ssrInterpolate(_ctx.data.engine)}</div></div>`);
            if (_ctx.data.loras.length) {
              _push2(`<div class="flex mb-[15px]"${_scopeId}><div class="mr-auto flex-none"${_scopeId}>\u5FAE\u8C03\u6A21\u578B</div><div class="ml-[20px] text-right"${_scopeId}>${ssrInterpolate(_ctx.data.loras)}</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex mb-[15px]"${_scopeId}><div class="mr-auto flex-none"${_scopeId}>\u56FE\u7247\u5C3A\u5BF8</div><div class="ml-[20px] text-right"${_scopeId}>${ssrInterpolate(_ctx.data.scale)}</div></div><div class="flex mb-[15px]"${_scopeId}><div class="mr-auto flex-none"${_scopeId}>\u7ED8\u753B\u6B65\u6570</div><div class="ml-[20px] text-right"${_scopeId}>${ssrInterpolate(unref(complexParams).step)}</div></div></div></div></div><div class="flex justify-end mt-[20px]"${_scopeId}><div class="flex-1 mr-[20px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElButton, {
              class: "w-full",
              type: "primary",
              onClick: reDrawHandle
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u753B\u540C\u6B3E `);
                } else {
                  return [
                    createTextVNode(" \u753B\u540C\u6B3E ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElButton, {
              class: "w-full",
              plain: "",
              type: "primary",
              onClick: ($event) => unref(downloadImgFile)(_ctx.data.image)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4E0B\u8F7D\u56FE\u7247 `);
                } else {
                  return [
                    createTextVNode(" \u4E0B\u8F7D\u56FE\u7247 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex text-tx-primary" }, [
                createVNode("div", { class: "flex w-[510px] justify-center items-center" }, [
                  createVNode(_component_ElImage, {
                    class: "w-full rounded-[12px]",
                    src: _ctx.data.image,
                    "preview-src-list": [_ctx.data.image],
                    "hide-on-click-modal": ""
                  }, null, 8, ["src", "preview-src-list"])
                ]),
                createVNode("div", { class: "w-[350px] ml-[20px] flex flex-col" }, [
                  createVNode("div", { class: "bg-page p-[20px] rounded-[15px] flex-1 min-h-0" }, [
                    createVNode("div", { class: "mb-[15px]" }, [
                      createVNode("div", { class: "flex items-center mb-[15px]" }, [
                        createVNode("div", { class: "font-medium mr-auto" }, "\u63CF\u8FF0\u8BCD"),
                        createVNode(_component_ElButton, {
                          link: "",
                          type: "primary",
                          onClick: ($event) => unref(copy)(_ctx.data.prompt)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u590D\u5236 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "bg-body rounded-[10px] h-[110px] overflow-y-auto" }, [
                        createVNode("div", { class: "p-[10px]" }, toDisplayString(_ctx.data.prompt), 1)
                      ])
                    ]),
                    _ctx.data.negative_prompt ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mb-[15px]"
                    }, [
                      createVNode("div", { class: "flex items-center mb-[15px]" }, [
                        createVNode("div", { class: "font-medium mr-auto" }, "\u53CD\u5411\u8BCD"),
                        createVNode(_component_ElButton, {
                          link: "",
                          type: "primary",
                          onClick: ($event) => unref(copy)(_ctx.data.negative_prompt)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u590D\u5236 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "bg-body rounded-[10px] h-[110px] overflow-y-auto" }, [
                        createVNode("div", { class: "p-[10px]" }, toDisplayString(_ctx.data.negative_prompt), 1)
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "mb-[15px]" }, [
                      createVNode("div", { class: "flex items-center mb-[15px]" }, [
                        createVNode("div", { class: "font-medium mr-auto" }, "\u521B\u4F5C\u4FE1\u606F")
                      ]),
                      createVNode("div", { class: "bg-body rounded-[10px] p-[10px]" }, [
                        createVNode("div", { class: "flex mb-[15px]" }, [
                          createVNode("div", { class: "mr-auto flex-none" }, "\u751F\u6210\u65F6\u95F4"),
                          createVNode("div", { class: "ml-[20px] text-right" }, toDisplayString(_ctx.data.create_time), 1)
                        ]),
                        createVNode("div", { class: "flex mb-[15px]" }, [
                          createVNode("div", { class: "mr-auto flex-none" }, "\u7ED8\u753B\u7C7B\u578B"),
                          createVNode("div", { class: "ml-[20px] text-right" }, toDisplayString(_ctx.data.draw_type === "txt2img" ? "\u6587\u751F\u56FE" : "\u56FE\u751F\u56FE"), 1)
                        ]),
                        createVNode("div", { class: "flex mb-[15px]" }, [
                          createVNode("div", { class: "mr-auto flex-none" }, "\u7ED8\u753B\u6A21\u578B"),
                          createVNode("div", { class: "ml-[20px] text-right" }, toDisplayString(_ctx.data.engine), 1)
                        ]),
                        _ctx.data.loras.length ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex mb-[15px]"
                        }, [
                          createVNode("div", { class: "mr-auto flex-none" }, "\u5FAE\u8C03\u6A21\u578B"),
                          createVNode("div", { class: "ml-[20px] text-right" }, toDisplayString(_ctx.data.loras), 1)
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "flex mb-[15px]" }, [
                          createVNode("div", { class: "mr-auto flex-none" }, "\u56FE\u7247\u5C3A\u5BF8"),
                          createVNode("div", { class: "ml-[20px] text-right" }, toDisplayString(_ctx.data.scale), 1)
                        ]),
                        createVNode("div", { class: "flex mb-[15px]" }, [
                          createVNode("div", { class: "mr-auto flex-none" }, "\u7ED8\u753B\u6B65\u6570"),
                          createVNode("div", { class: "ml-[20px] text-right" }, toDisplayString(unref(complexParams).step), 1)
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-end mt-[20px]" }, [
                    createVNode("div", { class: "flex-1 mr-[20px]" }, [
                      createVNode(_component_ElButton, {
                        class: "w-full",
                        type: "primary",
                        onClick: reDrawHandle
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u753B\u540C\u6B3E ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode(_component_ElButton, {
                        class: "w-full",
                        plain: "",
                        type: "primary",
                        onClick: ($event) => unref(downloadImgFile)(_ctx.data.image)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u4E0B\u8F7D\u56FE\u7247 ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index/works/_components/image-preview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=image-preview-DnIAxevr.mjs.map
