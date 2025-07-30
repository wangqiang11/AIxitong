import { _ as _sfc_main$1 } from './index-DLVgZG5d.mjs';
import { a as ElMenuItem } from './el-menu-item-DBjUF0xW.mjs';
import { a5 as useAppStore, bu as objectToQuery } from './server.mjs';
import { useSSRContext, defineComponent, computed, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-eaa55001>`);
      _push(ssrRenderComponent(_component_app_link, {
        to: `${_ctx.path}${unref(queryStr) ? `?${unref(queryStr)}` : ""}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_menu_item, { index: _ctx.path }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-eaa55001${_scopeId2}>${ssrInterpolate(_ctx.item.name)}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(_ctx.item.name), 1)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (_ctx.isActive && _ctx.item.selected && _ctx.isShowIcon) {
                    _push3(`<img class="menu-item-icon"${ssrRenderAttr("src", unref(getImageUrl)(_ctx.item.selected))} data-v-eaa55001${_scopeId2}>`);
                  } else if (_ctx.item.unselected && _ctx.isShowIcon) {
                    _push3(`<img class="menu-item-icon"${ssrRenderAttr("src", unref(getImageUrl)(_ctx.item.unselected))} data-v-eaa55001${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    _ctx.isActive && _ctx.item.selected && _ctx.isShowIcon ? (openBlock(), createBlock("img", {
                      key: 0,
                      class: "menu-item-icon",
                      src: unref(getImageUrl)(_ctx.item.selected)
                    }, null, 8, ["src"])) : _ctx.item.unselected && _ctx.isShowIcon ? (openBlock(), createBlock("img", {
                      key: 1,
                      class: "menu-item-icon",
                      src: unref(getImageUrl)(_ctx.item.unselected)
                    }, null, 8, ["src"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_menu_item, { index: _ctx.path }, {
                title: withCtx(() => [
                  createVNode("span", null, toDisplayString(_ctx.item.name), 1)
                ]),
                default: withCtx(() => [
                  _ctx.isActive && _ctx.item.selected && _ctx.isShowIcon ? (openBlock(), createBlock("img", {
                    key: 0,
                    class: "menu-item-icon",
                    src: unref(getImageUrl)(_ctx.item.selected)
                  }, null, 8, ["src"])) : _ctx.item.unselected && _ctx.isShowIcon ? (openBlock(), createBlock("img", {
                    key: 1,
                    class: "menu-item-icon",
                    src: unref(getImageUrl)(_ctx.item.unselected)
                  }, null, 8, ["src"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/header/menu-item.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MenuItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eaa55001"]]);

export { MenuItem as default };
//# sourceMappingURL=menu-item-DyOqt2KJ.mjs.map
