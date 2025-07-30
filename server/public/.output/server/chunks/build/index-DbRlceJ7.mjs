import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { _ as _sfc_main$2 } from './index-L3E_sDO1.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElMenu, a as ElMenuItem } from './el-menu-item-DBjUF0xW.mjs';
import { a as useRouter } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, unref, openBlock, createBlock, createCommentVNode, createVNode, toDisplayString, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" },
    menuList: { default: () => [] },
    backPath: {},
    title: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useRouter();
    const currentTab = useVModel(props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$1;
      const _component_OverflowTooltip = _sfc_main$2;
      const _component_ElScrollbar = ElScrollbar;
      const _component_el_menu = ElMenu;
      const _component_el_menu_item = ElMenuItem;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "setting-aside p-4" }, _attrs))} data-v-80cd954f><div class="flex flex-col h-full bg-body w-[180px] rounded-[12px]" data-v-80cd954f><div class="px-[15px] pt-[15px]" data-v-80cd954f><div class="flex items-center cursor-pointer" data-v-80cd954f><div class="flex bg-body p-[5px] text-bold rounded-[50%] text-primary shadow-light" data-v-80cd954f>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "el-icon-Back",
        size: 18
      }, null, _parent));
      _push(`</div><div class="text-xl flex-1 min-w-0 ml-[10px]" data-v-80cd954f>`);
      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
        if (_ctx.title) {
          _push(ssrRenderComponent(_component_OverflowTooltip, {
            content: _ctx.title,
            teleported: true,
            effect: "light"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_ElScrollbar, { class: "tab-lists w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-[10px]" data-v-80cd954f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_menu, {
              "default-active": unref(currentTab),
              style: { "border": "none" },
              router: false,
              onSelect: ($event) => currentTab.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.menuList, (item) => {
                    _push3(ssrRenderComponent(_component_el_menu_item, {
                      key: item.key,
                      index: item.key
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (item.icon) {
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: item.icon
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<span data-v-80cd954f${_scopeId3}>${ssrInterpolate(item.name)}</span>`);
                        } else {
                          return [
                            item.icon ? (openBlock(), createBlock(_component_Icon, {
                              key: 0,
                              name: item.icon
                            }, null, 8, ["name"])) : createCommentVNode("", true),
                            createVNode("span", null, toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.menuList, (item) => {
                      return openBlock(), createBlock(_component_el_menu_item, {
                        key: item.key,
                        index: item.key
                      }, {
                        default: withCtx(() => [
                          item.icon ? (openBlock(), createBlock(_component_Icon, {
                            key: 0,
                            name: item.icon
                          }, null, 8, ["name"])) : createCommentVNode("", true),
                          createVNode("span", null, toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["index"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-[10px]" }, [
                createVNode(_component_el_menu, {
                  "default-active": unref(currentTab),
                  style: { "border": "none" },
                  router: false,
                  onSelect: ($event) => currentTab.value = $event
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.menuList, (item) => {
                      return openBlock(), createBlock(_component_el_menu_item, {
                        key: item.key,
                        index: item.key
                      }, {
                        default: withCtx(() => [
                          item.icon ? (openBlock(), createBlock(_component_Icon, {
                            key: 0,
                            name: item.icon
                          }, null, 8, ["name"])) : createCommentVNode("", true),
                          createVNode("span", null, toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["index"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["default-active", "onSelect"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/info-menu/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-80cd954f"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=index-DbRlceJ7.mjs.map
