import { a as ElFormItem } from './index-DLL0sEcv.mjs';
import { useSSRContext, defineComponent, reactive, mergeProps, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { useVModels } from '@vueuse/core';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "video-size",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "1:1" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const { modelValue: value } = useVModels(props, emit);
    const pictureSize = reactive({
      lists: [
        {
          scaleValue: "1:1",
          class: "w-[20px] h-[20px]"
        },
        {
          scaleValue: "3:4",
          class: "w-[15px] h-[20px]"
        },
        {
          scaleValue: "4:3",
          class: "w-[20px] h-[15px]"
        },
        {
          scaleValue: "9:16",
          class: "w-[13px] h-[20px]"
        },
        {
          scaleValue: "16:9",
          class: "w-[20px] h-[12px]"
        }
      ]
    });
    value.value = "1:1";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form_item = ElFormItem;
      _push(ssrRenderComponent(_component_el_form_item, mergeProps({
        prop: "scale",
        required: ""
      }, _attrs), {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-bold text-tx-primary" data-v-ea183e0a${_scopeId}> \u751F\u6210\u5C3A\u5BF8 </span>`);
          } else {
            return [
              createVNode("span", { class: "font-bold text-tx-primary" }, " \u751F\u6210\u5C3A\u5BF8 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-1 min-w-0 overflow-hidden" data-v-ea183e0a${_scopeId}><div class="flex flex-wrap mx-[-6px] mb-[-10px]" data-v-ea183e0a${_scopeId}><!--[-->`);
            ssrRenderList(unref(pictureSize).lists, (item, index) => {
              _push2(`<div class="w-[33.3%] px-[6px]" data-v-ea183e0a${_scopeId}><div class="${ssrRenderClass([{
                "picture-size-active": unref(value) == (item == null ? void 0 : item.scaleValue),
                "picture-size-disable": !(item == null ? void 0 : item.scaleValue)
              }, "picture-size cursor-pointer text-center hover:text-primary"])}" data-v-ea183e0a${_scopeId}><div class="flex justify-center items-center h-[20px]" data-v-ea183e0a${_scopeId}><div class="${ssrRenderClass([item.class, "rect"])}" data-v-ea183e0a${_scopeId}></div></div><div class="text-base text-[#101010] dark:text-white mt-[4px] size-scale" data-v-ea183e0a${_scopeId}>${ssrInterpolate(item.scaleValue)}</div></div></div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex-1 min-w-0 overflow-hidden" }, [
                createVNode("div", { class: "flex flex-wrap mx-[-6px] mb-[-10px]" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(pictureSize).lists, (item, index) => {
                    return openBlock(), createBlock("div", {
                      key: index,
                      class: "w-[33.3%] px-[6px]"
                    }, [
                      createVNode("div", {
                        class: ["picture-size cursor-pointer text-center hover:text-primary", {
                          "picture-size-active": unref(value) == (item == null ? void 0 : item.scaleValue),
                          "picture-size-disable": !(item == null ? void 0 : item.scaleValue)
                        }],
                        onClick: ($event) => value.value = item.scaleValue
                      }, [
                        createVNode("div", { class: "flex justify-center items-center h-[20px]" }, [
                          createVNode("div", {
                            class: ["rect", item.class]
                          }, null, 2)
                        ]),
                        createVNode("div", { class: "text-base text-[#101010] dark:text-white mt-[4px] size-scale" }, toDisplayString(item.scaleValue), 1)
                      ], 10, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/video/_components/video-size.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VideoSize = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ea183e0a"]]);

export { VideoSize as default };
//# sourceMappingURL=video-size-7uLk9r-T.mjs.map
