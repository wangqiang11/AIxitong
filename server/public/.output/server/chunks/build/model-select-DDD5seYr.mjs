import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElInput } from './server.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, unref, isRef, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './position-DVxxNIGX.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "model-select",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    currentModelList: {},
    modelState: {}
  },
  emits: ["update:modelValue", "select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const searchKeyword = useVModel(props, "modelValue", emit);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = _sfc_main$1;
      const _component_el_input = ElInput;
      const _component_ElScrollbar = ElScrollbar;
      const _component_el_image = ElImage;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[300px] h-full bg-body rounded-[12px] flex flex-col" }, _attrs))} data-v-09db1b7d><div class="p-[15px]" data-v-09db1b7d><div class="flex items-center mb-4" data-v-09db1b7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex bg-body p-[5px] text-bold rounded-[50%] text-primary shadow-light",
        to: "/creation",
        replace: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "el-icon-Back",
              size: 18
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "el-icon-Back",
                size: 18
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-xl flex-1 min-w-0 ml-[10px]" data-v-09db1b7d>AI\u521B\u4F5C</div></div>`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: unref(searchKeyword),
        "onUpdate:modelValue": ($event) => isRef(searchKeyword) ? searchKeyword.value = $event : null,
        placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22",
        class: "create-search"
      }, {
        prefix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-Search" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "el-icon-Search" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 min-h-0" data-v-09db1b7d>`);
      _push(ssrRenderComponent(_component_ElScrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-[15px]" data-v-09db1b7d${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.currentModelList, (model) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                key: model.id,
                to: {
                  path: "",
                  query: {
                    cateId: _ctx.modelState.cateId,
                    modelId: model.id
                  }
                },
                class: ["flex mb-[15px] rounded-[10px] px-[15px] py-[10px] items-center border border-br-light bg-body", {
                  "text-white border-primary !bg-primary": _ctx.modelState.modelId == model.id
                }],
                onClick: ($event) => emit("select", model)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_image, {
                      class: "w-[50px] h-[50px] rounded-[50%]",
                      src: model.image,
                      alt: ""
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="flex-1 min-w-0 ml-[15px]" data-v-09db1b7d${_scopeId2}><div class="line-clamp-1 text-xl font-medium" data-v-09db1b7d${_scopeId2}>${ssrInterpolate(model.name)}</div><div class="${ssrRenderClass([{
                      "!text-white": _ctx.modelState.modelId == model.id
                    }, "line-clamp-1 mt-[4px] text-tx-secondary"])}" data-v-09db1b7d${_scopeId2}>${ssrInterpolate(model.tips)}</div></div>`);
                  } else {
                    return [
                      createVNode(_component_el_image, {
                        class: "w-[50px] h-[50px] rounded-[50%]",
                        src: model.image,
                        alt: ""
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "flex-1 min-w-0 ml-[15px]" }, [
                        createVNode("div", { class: "line-clamp-1 text-xl font-medium" }, toDisplayString(model.name), 1),
                        createVNode("div", {
                          class: ["line-clamp-1 mt-[4px] text-tx-secondary", {
                            "!text-white": _ctx.modelState.modelId == model.id
                          }]
                        }, toDisplayString(model.tips), 3)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "px-[15px]" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.currentModelList, (model) => {
                  return openBlock(), createBlock(_component_NuxtLink, {
                    key: model.id,
                    to: {
                      path: "",
                      query: {
                        cateId: _ctx.modelState.cateId,
                        modelId: model.id
                      }
                    },
                    class: ["flex mb-[15px] rounded-[10px] px-[15px] py-[10px] items-center border border-br-light bg-body", {
                      "text-white border-primary !bg-primary": _ctx.modelState.modelId == model.id
                    }],
                    onClick: ($event) => emit("select", model)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_image, {
                        class: "w-[50px] h-[50px] rounded-[50%]",
                        src: model.image,
                        alt: ""
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "flex-1 min-w-0 ml-[15px]" }, [
                        createVNode("div", { class: "line-clamp-1 text-xl font-medium" }, toDisplayString(model.name), 1),
                        createVNode("div", {
                          class: ["line-clamp-1 mt-[4px] text-tx-secondary", {
                            "!text-white": _ctx.modelState.modelId == model.id
                          }]
                        }, toDisplayString(model.tips), 3)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["to", "class", "onClick"]);
                }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/creation/_components/model-select.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ModelSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-09db1b7d"]]);

export { ModelSelect as default };
//# sourceMappingURL=model-select-DDD5seYr.mjs.map
