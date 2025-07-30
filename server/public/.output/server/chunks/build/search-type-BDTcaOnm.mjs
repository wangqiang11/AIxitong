import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { defineComponent, computed, ref, mergeProps, unref, isRef, withCtx, renderSlot, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
import { TypeEnums, ModelEnums } from './searchEnums-Dgcx5RT8.mjs';
import './index-L-VTEUEA.mjs';
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
import '@popperjs/core';
import './dropdown-C6fgV-Vy.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search-type",
  __ssrInlineRender: true,
  props: {
    model: {},
    type: {},
    trigger: { default: "click" },
    placement: { default: "bottom-start" }
  },
  emits: ["update:type"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const typeModel = useVModel(props, "type", emit);
    const typeOptions = computed(() => {
      return [
        {
          label: "\u5168\u7F51\u641C\u7D22",
          value: TypeEnums.ALL,
          icon: "local-icon-whole_network",
          desc: "\u5728\u6574\u4E2A\u4E92\u8054\u7F51\u4E2D\u641C\u7D22"
        },
        {
          label: "\u6587\u6863\u641C\u7D22",
          value: TypeEnums.DOC,
          icon: "local-icon-document",
          desc: "\u5728\u4E92\u8054\u7F51\u5F00\u653E\u6587\u5E93\u4E2D\u641C\u7D22",
          disabled: props.model !== ModelEnums.STUDY
        },
        {
          label: "\u5B66\u672F\u641C\u7D22",
          value: TypeEnums.SCHOLAR,
          icon: "local-icon-science",
          desc: "\u5728\u5DF2\u53D1\u8868\u7684\u8BBA\u6587\u4E2D\u641C\u7D22",
          disabled: props.model !== ModelEnums.STUDY
        }
      ];
    });
    const showTypeSelect = ref(false);
    const currentType = computed(() => {
      const current = typeOptions.value.find(
        (item) => item.value == typeModel.value
      );
      return current || {};
    });
    const selectType = (item) => {
      showTypeSelect.value = false;
      if (item.disabled) return;
      typeModel.value = item.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popover = ElPopover;
      const _component_Icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mr-auto cursor-pointer" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_popover, {
        visible: unref(showTypeSelect),
        "onUpdate:visible": ($event) => isRef(showTypeSelect) ? showTypeSelect.value = $event : null,
        trigger: _ctx.trigger,
        "popper-style": {
          "border-radius": "15px"
        },
        "show-arrow": false,
        transition: "custom-popover",
        width: "auto",
        teleported: true,
        "hide-after": 0,
        placement: _ctx.placement
      }, {
        reference: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "item", unref(currentType), null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "item", unref(currentType))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="text-tx-secondary"${_scopeId}>\u641C\u7D22\u8303\u56F4</div><div class="flex mx-[-5px] mt-[10px]"${_scopeId}><!--[-->`);
            ssrRenderList(unref(typeOptions), (item, index) => {
              _push2(`<!--[-->`);
              if (!item.disabled) {
                _push2(`<div class="${ssrRenderClass([{
                  " text-primary bg-primary-light-9 border-primary": unref(currentType).value === item.value,
                  " !text-tx-disabled !cursor-not-allowed": item.disabled
                }, "p-[12px] cursor-pointer rounded-[12px] mx-[5px] border-br-extra-light border-solid border"])}"${_scopeId}><div class="flex items-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: item.icon
                }, null, _parent2, _scopeId));
                _push2(`<span class="ml-[6px]"${_scopeId}>${ssrInterpolate(item.label)}</span></div><div class="${ssrRenderClass([{
                  "!text-tx-disabled": item.disabled
                }, "line-clamp-2 text-tx-secondary mt-[8px] text-sm"])}"${_scopeId}>${ssrInterpolate(item.desc)}</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "text-tx-secondary" }, "\u641C\u7D22\u8303\u56F4"),
                createVNode("div", { class: "flex mx-[-5px] mt-[10px]" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(typeOptions), (item, index) => {
                    return openBlock(), createBlock(Fragment, null, [
                      !item.disabled ? (openBlock(), createBlock("div", {
                        key: index,
                        class: ["p-[12px] cursor-pointer rounded-[12px] mx-[5px] border-br-extra-light border-solid border", {
                          " text-primary bg-primary-light-9 border-primary": unref(currentType).value === item.value,
                          " !text-tx-disabled !cursor-not-allowed": item.disabled
                        }],
                        onClick: ($event) => selectType(item)
                      }, [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode(_component_Icon, {
                            name: item.icon
                          }, null, 8, ["name"]),
                          createVNode("span", { class: "ml-[6px]" }, toDisplayString(item.label), 1)
                        ]),
                        createVNode("div", {
                          class: ["line-clamp-2 text-tx-secondary mt-[8px] text-sm", {
                            "!text-tx-disabled": item.disabled
                          }]
                        }, toDisplayString(item.desc), 3)
                      ], 10, ["onClick"])) : createCommentVNode("", true)
                    ], 64);
                  }), 256))
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/_components/common/search-type.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=search-type-BDTcaOnm.mjs.map
