import { a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { defineComponent, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useVModels } from '@vueuse/core';
import './server.mjs';
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
import 'async-validator';
import './position-DVxxNIGX.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "video-style",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: () => [] },
    styleList: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const { modelValue: styleIds } = useVModels(props, emit);
    const selectStyle = (id) => {
      const index = styleIds.value.findIndex((item) => item === id);
      if (index !== -1) {
        styleIds.value.splice(index, 1);
      } else {
        styleIds.value.push(id);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form_item = ElFormItem;
      const _component_el_image = ElImage;
      const _component_Icon = _sfc_main$1;
      _push(ssrRenderComponent(_component_el_form_item, _attrs, {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex items-center"${_scopeId}><span class="font-bold text-tx-primary flex-1"${_scopeId}> \u9009\u62E9\u98CE\u683C </span></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex items-center" }, [
                createVNode("span", { class: "font-bold text-tx-primary flex-1" }, " \u9009\u62E9\u98CE\u683C ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-1 overflow-hidden"${_scopeId}><div class="flex flex-wrap mx-[-6px]"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.styleList, (item) => {
              _push2(`<div class="w-[25%] px-[6px]"${_scopeId}><div class="h-full cursor-pointer"${_scopeId}><div class="pt-[100%] relative h-0 rounded-[12px] overflow-hidden"${_scopeId}><div class="absolute inset-0 left-0 top-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_image, {
                src: item.image,
                class: "h-full w-full"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(styleIds).includes(item.id) || unref(styleIds).includes(String(item.id))) {
                _push2(`<div class="absolute bg-[var(--el-overlay-color-lighter)] inset-0 left-0 top-0 flex items-center justify-center text-white"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "el-icon-SuccessFilled",
                  size: 20
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="text-center text-xs"${_scopeId}>${ssrInterpolate(item.name)}</div></div></div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex-1 overflow-hidden" }, [
                createVNode("div", { class: "flex flex-wrap mx-[-6px]" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.styleList, (item) => {
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
                          unref(styleIds).includes(item.id) || unref(styleIds).includes(String(item.id)) ? (openBlock(), createBlock("div", {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/video/_components/video-style.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=video-style-BtV9ixxb.mjs.map
