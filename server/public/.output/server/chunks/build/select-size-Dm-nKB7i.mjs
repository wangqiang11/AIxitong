import { E as ElDropdown, a as ElDropdownMenu, b as ElDropdownItem } from './el-dropdown-item-BcYIrjsW.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { A as feedback } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { c as canvasSizeData, u as useCanvasStore } from './canvas-DJ4hjlD7.mjs';
import './index-L-VTEUEA.mjs';
import '@vueuse/core';
import '@popperjs/core';
import '@vue/shared';
import 'lodash-unified';
import './index-0xCxAaTZ.mjs';
import './dropdown-C6fgV-Vy.mjs';
import './refs-CJvnaIJj.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './useAudioPlay-C6V9947w.mjs';
import './file-RP6bCPT_.mjs';
import 'jsdom';
import 'jsdom/lib/jsdom/living/generated/utils';
import 'jsdom/lib/jsdom/utils';
import 'fontfaceobserver';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "select-size",
  __ssrInlineRender: true,
  setup(__props) {
    const sizeData = ref(canvasSizeData);
    const canvasStore = useCanvasStore();
    const changeSize = async (item) => {
      var _a;
      if (item.id === canvasStore.defaultSize.resolution) {
        return;
      }
      if (!((_a = canvasStore.getCanvasJson()) == null ? void 0 : _a.objects.length)) {
        canvasStore.changeSize(item);
        return;
      }
      await feedback.confirm(
        "\u662F\u5426\u786E\u8BA4\u66F4\u6539\u753B\u5E03\u5C3A\u5BF8\uFF1F\u5F53\u524D\u753B\u9762\u6240\u6709\u8BBE\u7F6E\u5C06\u88AB\u91CD\u7F6E\u4E14\u65E0\u6CD5\u6062\u590D"
      );
      canvasStore.changeSize(item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_dropdown = ElDropdown;
      const _component_Icon = _sfc_main$1;
      const _component_el_dropdown_menu = ElDropdownMenu;
      const _component_el_dropdown_item = ElDropdownItem;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center" }, _attrs))}><span class="mr-[10px]">\u753B\u5E03\u5C3A\u5BF8</span>`);
      _push(ssrRenderComponent(_component_el_dropdown, null, {
        dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_dropdown_menu, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(sizeData), (item, key) => {
                    _push3(ssrRenderComponent(_component_el_dropdown_item, {
                      key,
                      onClick: ($event) => changeSize(item)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.label)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.label), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(sizeData), (item, key) => {
                      return openBlock(), createBlock(_component_el_dropdown_item, {
                        key,
                        onClick: ($event) => changeSize(item)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_dropdown_menu, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(sizeData), (item, key) => {
                    return openBlock(), createBlock(_component_el_dropdown_item, {
                      key,
                      onClick: ($event) => changeSize(item)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white min-w-[90px] flex item-center py-[6px] px-[10px] text-tx-primary rounded-md shadow-[0_2px_6px_#ebefff]"${_scopeId}><span class="flex-1 mr-[4px]"${_scopeId}>${ssrInterpolate(unref(canvasStore).defaultSize.label)}</span>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-ArrowDown" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white min-w-[90px] flex item-center py-[6px] px-[10px] text-tx-primary rounded-md shadow-[0_2px_6px_#ebefff]" }, [
                createVNode("span", { class: "flex-1 mr-[4px]" }, toDisplayString(unref(canvasStore).defaultSize.label), 1),
                createVNode(_component_Icon, { name: "el-icon-ArrowDown" })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/_components/design-center/select-size.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=select-size-Dm-nKB7i.mjs.map
