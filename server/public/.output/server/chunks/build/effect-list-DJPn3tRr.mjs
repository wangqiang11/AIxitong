import { _ as __nuxt_component_3 } from './index-x5xEUu1d.mjs';
import { E as ElRadioGroup, b as ElRadioButton } from './el-radio-group-PXDiQVwm.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { E as ElEmpty } from './el-empty-xbPr04pX.mjs';
import { bg as getEffectList } from './server.mjs';
import { useSSRContext, defineComponent, reactive, withAsyncContext, computed, watch, withCtx, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { e as emptyImg } from './empty_con-BDdV71_z.mjs';
import { useQuery } from '@tanstack/vue-query';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import '@vue/shared';
import 'lodash-unified';
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
import 'css-color-function';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "effect-list",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const props = __props;
    const state = reactive({
      type: "in"
    });
    const { data: effectCategory, suspense } = useQuery(["effectList"], {
      queryFn: getEffectList
    });
    [__temp, __restore] = withAsyncContext(() => suspense()), await __temp, __restore();
    const effectList = computed(() => {
      var _a;
      return ((_a = effectCategory.value.find((item) => item.type === state.type)) == null ? void 0 : _a.list) || [];
    });
    watch(
      () => props.modelValue.type,
      (value) => {
        state.type = value || "in";
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DropdownMore = __nuxt_component_3;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_radio_button = ElRadioButton;
      const _component_Icon = _sfc_main$1;
      const _component_ElImage = ElImage;
      const _component_ElEmpty = ElEmpty;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-4be02811>`);
      _push(ssrRenderComponent(_component_DropdownMore, {
        class: "mt-[-5px]",
        "default-height": 42
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_radio_group, {
              modelValue: unref(state).type,
              "onUpdate:modelValue": ($event) => unref(state).type = $event,
              class: "el-radio-group-margin"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(effectCategory), (item) => {
                    _push3(ssrRenderComponent(_component_el_radio_button, {
                      key: item.type,
                      label: item.type
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(effectCategory), (item) => {
                      return openBlock(), createBlock(_component_el_radio_button, {
                        key: item.type,
                        label: item.type
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["label"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_radio_group, {
                modelValue: unref(state).type,
                "onUpdate:modelValue": ($event) => unref(state).type = $event,
                class: "el-radio-group-margin"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(effectCategory), (item) => {
                    return openBlock(), createBlock(_component_el_radio_button, {
                      key: item.type,
                      label: item.type
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["label"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(effectList).length) {
        _push(`<div class="flex flex-wrap mx-[-7px] mt-[10px]" data-v-4be02811><div class="w-[33.3%]" data-v-4be02811><div class="px-[7px] mb-[14px]" data-v-4be02811><div class="cursor-pointer overflow-hidden border border-solid border-br-light rounded-lg p-[5px]" data-v-4be02811><div class="rounded-lg overflow-hidden bg-[black]" data-v-4be02811><div class="pic-wrap h-0 pt-[75%] relative text-white" data-v-4be02811><div class="absolute inset-0 flex items-center justify-center" data-v-4be02811>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "local-icon-cancel",
          size: 25
        }, null, _parent));
        _push(`</div></div></div></div></div></div><!--[-->`);
        ssrRenderList(unref(effectList), (item) => {
          _push(`<div class="w-[33.3%]" data-v-4be02811><div class="px-[7px] mb-[14px]" data-v-4be02811><div class="${ssrRenderClass([{
            "border-primary": item.server_key === _ctx.modelValue.server_key
          }, "cursor-pointer overflow-hidden border border-solid border-br-light rounded-lg p-[5px]"])}" data-v-4be02811><div class="rounded-lg overflow-hidden" data-v-4be02811><div class="pic-wrap h-0 pt-[75%] relative" data-v-4be02811><div class="absolute inset-0" data-v-4be02811>`);
          _push(ssrRenderComponent(_component_ElImage, {
            src: item.url,
            class: "w-full h-full",
            fit: "contain"
          }, null, _parent));
          _push(`</div></div></div></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(ssrRenderComponent(_component_ElEmpty, {
          image: unref(emptyImg),
          description: "\u6682\u65E0\u6570\u636E\uFF5E"
        }, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/_components/design-left/effect-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EffectList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4be02811"]]);

export { EffectList as default };
//# sourceMappingURL=effect-list-DJPn3tRr.mjs.map
