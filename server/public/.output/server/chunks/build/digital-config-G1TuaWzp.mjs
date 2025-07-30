import { a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElSwitch } from './el-switch-lh7eFiXh.mjs';
import { d as ElButton } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { u as useDictOptions } from './useDictOptions-DmOxg3R0.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
import { c as getDigitalList } from './digital-DHYaDV-C.mjs';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './position-DVxxNIGX.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "digital-config",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formData = useVModel(props, "modelValue", emit);
    const { optionsData, refresh } = useDictOptions({
      digitalLists: {
        api: getDigitalList,
        params: {
          page_type: 0
        },
        transformData(data) {
          return data.lists || [];
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form_item = ElFormItem;
      const _component_el_switch = ElSwitch;
      const _component_ElButton = ElButton;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = _sfc_main$1;
      const _component_ElImage = ElImage;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[10px]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_form_item, {
        label: "\u542F\u7528\u5F62\u8C61",
        prop: "is_digital"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_switch, {
              modelValue: unref(formData).is_digital,
              "onUpdate:modelValue": ($event) => unref(formData).is_digital = $event,
              "inline-prompt": "",
              "active-value": 1,
              "inactive-value": 0,
              "active-text": "\u5F00\u542F",
              "inactive-text": "\u5173\u95ED"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_el_switch, {
                  modelValue: unref(formData).is_digital,
                  "onUpdate:modelValue": ($event) => unref(formData).is_digital = $event,
                  "inline-prompt": "",
                  "active-value": 1,
                  "inactive-value": 0,
                  "active-text": "\u5F00\u542F",
                  "inactive-text": "\u5173\u95ED"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(formData).is_digital) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_el_form_item, {
          label: "\u9009\u62E9\u5F62\u8C61",
          prop: "digital_id"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ElButton, {
                type: "primary",
                link: "",
                onClick: unref(refresh)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u5237\u65B0`);
                  } else {
                    return [
                      createTextVNode("\u5237\u65B0")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ElButton, {
                  type: "primary",
                  link: "",
                  onClick: unref(refresh)
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u5237\u65B0")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="px-[16px]"><div class="flex flex-wrap">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/application/digital/edit",
          target: "_blank",
          class: "flex items-center justify-center p-[15px] border border-br-light border-solid w-[260px] rounded-[10px] h-[80px] mx-[7.5px] mb-[10px]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-Plus" }, null, _parent2, _scopeId));
              _push2(` \u65B0\u589E\u5F62\u8C61 `);
            } else {
              return [
                createVNode(_component_Icon, { name: "el-icon-Plus" }),
                createTextVNode(" \u65B0\u589E\u5F62\u8C61 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--[-->`);
        ssrRenderList(unref(optionsData).digitalLists, (item) => {
          _push(`<div class="${ssrRenderClass([{
            "!text-primary border-primary bg-primary-light-9": unref(formData).digital_id == item.id
          }, "flex items-center p-[15px] border border-br-light border-solid w-[260px] rounded-[10px] mx-[7.5px] cursor-pointer mb-[15px] h-[80px]"])}">`);
          _push(ssrRenderComponent(_component_ElImage, {
            class: "w-[50px] h-[50px] rounded-[50%] overflow-hidden border border-solid border-white flex-none",
            fit: "cover",
            src: item.avatar
          }, null, _parent));
          _push(`<div class="line-clamp-2 ml-[15px]">${ssrInterpolate(item.name)}</div></div>`);
        });
        _push(`<!--]--></div></div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-edit/digital-config.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=digital-config-G1TuaWzp.mjs.map
