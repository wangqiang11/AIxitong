import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { aH as search_default, E as ElInput } from './server.mjs';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { useSSRContext, defineComponent, ref, unref, mergeProps, withCtx, createVNode, isRef, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { useVModel } from '@vueuse/core';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    length: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const arrowStatus = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-2b7032c7><div class="flex items-center justify-between mt-[15px] text-info" data-v-2b7032c7><div class="cursor-default" data-v-2b7032c7>${ssrInterpolate(__props.title)}</div><div class="${ssrRenderClass([{ "rotate-180": !unref(arrowStatus) }, "transition-transform rotate-"])}" data-v-2b7032c7>`);
      _push(ssrRenderComponent(_component_Icon, { name: "el-icon-ArrowUp" }, null, _parent));
      _push(`</div></div>`);
      if (unref(arrowStatus)) {
        _push(`<div style="${ssrRenderStyle({ "max-height": __props.length * 110 + "px" })}" class="dropDownList overflow-hidden" data-v-2b7032c7>`);
        ssrRenderSlot(_ctx.$slots, "menu", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/drop-down/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2b7032c7"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "role-sidebar",
  __ssrInlineRender: true,
  props: {
    sidebarList: { default: () => [] },
    currentId: { default: () => 0 },
    keyword: { default: "" }
  },
  emits: ["ontoggle", "update:keyword"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const searchContent = useVModel(props, "keyword", emit);
    const sidebarRef = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_el_input = ElInput;
      const _component_DropDown = __nuxt_component_2;
      const _component_ElImage = ElImage;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "bg-body rounded-[12px] flex flex-col h-full overflow-hidden text-tx-primary",
        style: { "width": "var(--aside-panel-width)" }
      }, _attrs))} data-v-5ed71039><div class="flex items-center justify-around text-xl font-medium px-[16px] pt-[16px] cursor-pointer" data-v-5ed71039>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dialogue/chat" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pb-[8px]" data-v-5ed71039${_scopeId}>\u95EE\u7B54\u52A9\u624B</div>`);
          } else {
            return [
              createVNode("div", { class: "pb-[8px]" }, "\u95EE\u7B54\u52A9\u624B")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pb-[6px] text-primary border-solid border-b-[2px] border-primary" data-v-5ed71039> \u89D2\u8272\u52A9\u624B </div></div><div class="px-[16px] pt-[16px] pb-[6px]" data-v-5ed71039>`);
      _push(ssrRenderComponent(_component_el_input, {
        class: "w-full leading-[32px] role-search",
        modelValue: unref(searchContent),
        "onUpdate:modelValue": ($event) => isRef(searchContent) ? searchContent.value = $event : null,
        "prefix-icon": unref(search_default),
        placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      }, null, _parent));
      _push(`</div><div class="flex-1 min-h-0" data-v-5ed71039>`);
      _push(ssrRenderComponent(unref(ElScrollbar), {
        class: "",
        ref_key: "sidebarRef",
        ref: sidebarRef
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-[16px] pb-[16px]" data-v-5ed71039${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.sidebarList, (item, index) => {
              _push2(ssrRenderComponent(_component_DropDown, {
                title: item.name,
                length: item.skill.length,
                key: index
              }, {
                menu: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(item.skill, (item1, index1) => {
                      _push3(`<div class="${ssrRenderClass([{
                        "role-active": _ctx.currentId == item1.id
                      }, "flex items-center mt-[15px] p-[10px] cursor-pointer rounded-[12px]"])}" data-v-5ed71039${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_ElImage, {
                        src: item1.image,
                        class: "w-[42px] h-[42px] rounded-[8px]"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="ml-2 flex-1" data-v-5ed71039${_scopeId2}><div class="text-base font-bold role-name" data-v-5ed71039${_scopeId2}>${ssrInterpolate(item1.name)}</div><div class="text-xs role-desc text-tx-placeholder line-clamp-1" data-v-5ed71039${_scopeId2}>${ssrInterpolate(item1.describe)}</div></div></div>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.skill, (item1, index1) => {
                        return openBlock(), createBlock("div", {
                          class: ["flex items-center mt-[15px] p-[10px] cursor-pointer rounded-[12px]", {
                            "role-active": _ctx.currentId == item1.id
                          }],
                          key: index1,
                          onClick: ($event) => emit("ontoggle", item1)
                        }, [
                          createVNode(_component_ElImage, {
                            src: item1.image,
                            class: "w-[42px] h-[42px] rounded-[8px]"
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "ml-2 flex-1" }, [
                            createVNode("div", { class: "text-base font-bold role-name" }, toDisplayString(item1.name), 1),
                            createVNode("div", { class: "text-xs role-desc text-tx-placeholder line-clamp-1" }, toDisplayString(item1.describe), 1)
                          ])
                        ], 10, ["onClick"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "px-[16px] pb-[16px]" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.sidebarList, (item, index) => {
                  return openBlock(), createBlock(_component_DropDown, {
                    title: item.name,
                    length: item.skill.length,
                    key: index
                  }, {
                    menu: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.skill, (item1, index1) => {
                        return openBlock(), createBlock("div", {
                          class: ["flex items-center mt-[15px] p-[10px] cursor-pointer rounded-[12px]", {
                            "role-active": _ctx.currentId == item1.id
                          }],
                          key: index1,
                          onClick: ($event) => emit("ontoggle", item1)
                        }, [
                          createVNode(_component_ElImage, {
                            src: item1.image,
                            class: "w-[42px] h-[42px] rounded-[8px]"
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "ml-2 flex-1" }, [
                            createVNode("div", { class: "text-base font-bold role-name" }, toDisplayString(item1.name), 1),
                            createVNode("div", { class: "text-xs role-desc text-tx-placeholder line-clamp-1" }, toDisplayString(item1.describe), 1)
                          ])
                        ], 10, ["onClick"]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1032, ["title", "length"]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dialogue/_components/role-sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RoleSidebar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5ed71039"]]);

export { RoleSidebar as default };
//# sourceMappingURL=role-sidebar-F3uWRt8C.mjs.map
