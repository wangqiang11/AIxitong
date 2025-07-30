import { _ as _sfc_main$1 } from './index-DLVgZG5d.mjs';
import { a as ElMenuItem } from './el-menu-item-DBjUF0xW.mjs';
import { a5 as useAppStore, bu as objectToQuery } from './server.mjs';
import { useSSRContext, defineComponent, computed, unref, withCtx, openBlock, createBlock, toDisplayString, createCommentVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-l5zPv3vf.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'lodash-es';
import '@vueuse/core';
import 'lodash-unified';
import './index-DadLUs6d.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import '@vue/shared';
import '@ctrl/tinycolor';
import './index-5Ia44xzE.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'weixin-js-sdk';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "menu-item",
  __ssrInlineRender: true,
  props: {
    item: {},
    path: {},
    showName: { type: Boolean },
    isShowIcon: { type: [Number, Boolean] },
    isActive: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { getImageUrl } = useAppStore();
    const queryStr = computed(() => {
      const query = props.item.link.query;
      try {
        const queryObj = JSON.parse(query);
        return objectToQuery(queryObj);
      } catch (error) {
        return query;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_app_link = _sfc_main$1;
      const _component_el_menu_item = ElMenuItem;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-236bb885>`);
      _push(ssrRenderComponent(_component_app_link, {
        to: `${_ctx.path}${unref(queryStr) ? `?${unref(queryStr)}` : ""}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_menu_item, { index: _ctx.path }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  if (((_a = _ctx.item) == null ? void 0 : _a.showName) || _ctx.showName) {
                    _push3(`<span class="text-sm" data-v-236bb885${_scopeId2}>${ssrInterpolate(_ctx.item.name)}</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    ((_b = _ctx.item) == null ? void 0 : _b.showName) || _ctx.showName ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-sm"
                    }, toDisplayString(_ctx.item.name), 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (_ctx.isShowIcon) {
                    _push3(`<span class="mb-[6px]" data-v-236bb885${_scopeId2}>`);
                    if (_ctx.isActive && _ctx.item.selected) {
                      _push3(`<img class="menu-item-icon"${ssrRenderAttr("src", unref(getImageUrl)(_ctx.item.selected))} data-v-236bb885${_scopeId2}>`);
                    } else if (_ctx.item.unselected) {
                      _push3(`<img class="menu-item-icon"${ssrRenderAttr("src", unref(getImageUrl)(_ctx.item.unselected))} data-v-236bb885${_scopeId2}>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    _ctx.isShowIcon ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "mb-[6px]"
                    }, [
                      _ctx.isActive && _ctx.item.selected ? (openBlock(), createBlock("img", {
                        key: 0,
                        class: "menu-item-icon",
                        src: unref(getImageUrl)(_ctx.item.selected)
                      }, null, 8, ["src"])) : _ctx.item.unselected ? (openBlock(), createBlock("img", {
                        key: 1,
                        class: "menu-item-icon",
                        src: unref(getImageUrl)(_ctx.item.unselected)
                      }, null, 8, ["src"])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_menu_item, { index: _ctx.path }, {
                title: withCtx(() => {
                  var _a;
                  return [
                    ((_a = _ctx.item) == null ? void 0 : _a.showName) || _ctx.showName ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-sm"
                    }, toDisplayString(_ctx.item.name), 1)) : createCommentVNode("", true)
                  ];
                }),
                default: withCtx(() => [
                  _ctx.isShowIcon ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "mb-[6px]"
                  }, [
                    _ctx.isActive && _ctx.item.selected ? (openBlock(), createBlock("img", {
                      key: 0,
                      class: "menu-item-icon",
                      src: unref(getImageUrl)(_ctx.item.selected)
                    }, null, 8, ["src"])) : _ctx.item.unselected ? (openBlock(), createBlock("img", {
                      key: 1,
                      class: "menu-item-icon",
                      src: unref(getImageUrl)(_ctx.item.unselected)
                    }, null, 8, ["src"])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["index"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/aside/menu-item.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MenuItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-236bb885"]]);

export { MenuItem as default };
//# sourceMappingURL=menu-item-syjwFhcv.mjs.map
