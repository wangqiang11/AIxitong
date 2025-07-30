import { E as ElDropdown, a as ElDropdownMenu, b as ElDropdownItem } from './el-dropdown-item-BcYIrjsW.mjs';
import { d as ElButton } from './server.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { defineComponent, shallowRef, watch, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { d as downloadHtml2Image } from './download-N0luyf1S.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Transformer } from 'markmap-lib';
import { useDark } from '@vueuse/core';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import '@vue/shared';
import 'lodash-unified';
import './index-0xCxAaTZ.mjs';
import './dropdown-C6fgV-Vy.mjs';
import './refs-CJvnaIJj.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mind-map-preview",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const transformer = new Transformer();
    shallowRef();
    const svgWrapRef = shallowRef();
    const isDark = useDark();
    const renderMarkMap = (value) => {
      transformer.transform(value);
    };
    const handleExport = (command) => {
      switch (command) {
        case "html":
          exportHtml();
          break;
        case "png":
          exportImg("png");
          break;
        case "jpg":
          exportImg("jpeg");
          break;
      }
    };
    watch(
      isDark,
      (value) => {
        if (value) {
          (void 0).documentElement.classList.add("markmap-dark");
        } else {
          (void 0).documentElement.classList.remove("markmap-dark");
        }
      },
      {
        immediate: true
      }
    );
    const exportHtml = () => {
      const html = `<style>*{margin: 0;padding:0} .markmap{width: 100vw;height:100vh}</style>
${svgWrapRef.value.innerHTML}`;
      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const link = (void 0).createElement("a");
      link.href = url;
      link.download = "markmap.html";
      link.click();
      URL.revokeObjectURL(url);
    };
    const exportImg = (type) => {
      downloadHtml2Image(
        svgWrapRef.value,
        { type, name: "markmap" },
        {
          backgroundColor: "#fff",
          scale: (void 0).devicePixelRatio * 1.5
        }
      );
    };
    __expose({
      renderMarkMap
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_dropdown = ElDropdown;
      const _component_el_button = ElButton;
      const _component_Icon = _sfc_main$1;
      const _component_el_dropdown_menu = ElDropdownMenu;
      const _component_el_dropdown_item = ElDropdownItem;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full relative" }, _attrs))}><div class="w-full h-full flex flex-col"><div class="flex justify-end">`);
      _push(ssrRenderComponent(_component_el_dropdown, { onCommand: handleExport }, {
        dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_dropdown_menu, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_dropdown_item, { command: "html" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u5BFC\u51FAHTML `);
                      } else {
                        return [
                          createTextVNode(" \u5BFC\u51FAHTML ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_dropdown_item, { command: "png" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u5BFC\u51FAPNG `);
                      } else {
                        return [
                          createTextVNode(" \u5BFC\u51FAPNG ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_dropdown_item, { command: "jpg" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u5BFC\u51FAJPG `);
                      } else {
                        return [
                          createTextVNode(" \u5BFC\u51FAJPG ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_dropdown_item, { command: "html" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u5BFC\u51FAHTML ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_dropdown_item, { command: "png" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u5BFC\u51FAPNG ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_dropdown_item, { command: "jpg" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u5BFC\u51FAJPG ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_dropdown_menu, null, {
                default: withCtx(() => [
                  createVNode(_component_el_dropdown_item, { command: "html" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u5BFC\u51FAHTML ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_dropdown_item, { command: "png" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u5BFC\u51FAPNG ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_dropdown_item, { command: "jpg" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u5BFC\u51FAJPG ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_button, {
              text: "",
              bg: ""
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, { name: "el-icon-Download" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, { name: "el-icon-Download" })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5BFC\u51FA\u6587\u4EF6 `);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "el-icon-ArrowDown",
                    class: "el-icon--right"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" \u5BFC\u51FA\u6587\u4EF6 "),
                    createVNode(_component_Icon, {
                      name: "el-icon-ArrowDown",
                      class: "el-icon--right"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_button, {
                text: "",
                bg: ""
              }, {
                icon: withCtx(() => [
                  createVNode(_component_Icon, { name: "el-icon-Download" })
                ]),
                default: withCtx(() => [
                  createTextVNode(" \u5BFC\u51FA\u6587\u4EF6 "),
                  createVNode(_component_Icon, {
                    name: "el-icon-ArrowDown",
                    class: "el-icon--right"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 min-h-0"><svg class="w-full h-full"></svg></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mind_map/component/mind-map-preview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=mind-map-preview-J5CqpYbM.mjs.map
