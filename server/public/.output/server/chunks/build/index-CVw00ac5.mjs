import { _ as _sfc_main$5 } from './index-BoqjHllR.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElSkeleton } from './el-skeleton-item-P_GLWXGa.mjs';
import { _ as _sfc_main$6 } from './index-DRyhljQ3.mjs';
import { a as useRouter } from './server.mjs';
import { defineComponent, mergeProps, withCtx, unref, openBlock, createBlock, createCommentVNode, createVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import InputSelect from './input-select-BWZY0ed0.mjs';
import _sfc_main$1 from './steps-CVh2uKQ2.mjs';
import _sfc_main$4 from './doc-DoNecCCG.mjs';
import _sfc_main$3 from './suggestion-DUZ5Re6M.mjs';
import _sfc_main$2 from './action-btns-BACVGK4l.mjs';
import MindMap from './mind-map-LCO32sbi.mjs';
import Outline from './outline-9dEanu7b.mjs';
import { useSearch } from './useSearch-BaJoxou4.mjs';
import { StatusEnums } from './searchEnums-Dgcx5RT8.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import '@vue/shared';
import 'markdown-it';
import 'highlight.js';
import '@vscode/markdown-it-katex';
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
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './search-model-BZBVjp2U.mjs';
import './el-segmented-KMsqQ2AI.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-CJqYHNUB.mjs';
import './dropdown-C6fgV-Vy.mjs';
import './index-D7S5lb8a.mjs';
import './useTemplate-BMZ5OoC1.mjs';
import './search-type-BDTcaOnm.mjs';
import './search-btn-Bu4r_Ca5.mjs';
import './search-DBP7Ii5U.mjs';
import './index-C5I0EtSx.mjs';
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './el-pagination-ClrwtCwT.mjs';
import './index-CUhOTuS-.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
import './collapse-Dkv7cdT3.mjs';
import './el-collapse-item-DSo9CmH5.mjs';
import './index-DadLUs6d.mjs';
import './search-ex-US3m0iO4.mjs';
import 'markmap-lib';
import './index-53t5ntO1.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const { result, abortSearch, showSearchResult, options, initResult } = useSearch();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$5;
      const _component_ElScrollbar = ElScrollbar;
      const _component_el_skeleton = ElSkeleton;
      const _component_Markdown = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full p-4" }, _attrs))}><div class="h-full bg-body rounded-[15px] flex flex-col"><div class="p-4"><div class="flex items-center mb-4"><div class="flex bg-body p-[5px] text-bold rounded-[50%] text-primary shadow-light cursor-pointer">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "el-icon-Back",
        size: 18
      }, null, _parent));
      _push(`</div><div class="text-xl flex-1 min-w-0 ml-[10px]">AI\u641C\u7D22</div></div>`);
      _push(ssrRenderComponent(InputSelect, { class: "w-[550px]" }, null, _parent));
      _push(`</div><div class="flex-1 min-h-0"><div class="h-full flex"><div class="flex-[2.7] h-full">`);
      _push(ssrRenderComponent(_component_ElScrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            if (unref(result).status < unref(StatusEnums).SUCCESS) {
              _push2(`<div class="py-[10px]"${_scopeId}>`);
              if (unref(result).query) {
                _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="pl-4 pr-[40px]"${_scopeId}>`);
            if (unref(result).query) {
              _push2(`<div${_scopeId}><div class="break-words text-3xl font-medium"${_scopeId}>${ssrInterpolate(unref(result).query)}</div><div class="pt-1 text-tx-secondary text-xs"${_scopeId}> \u5185\u5BB9\u7531 AI \u751F\u6210\uFF0C\u4E0D\u80FD\u4FDD\u8BC1\u771F\u5B9E </div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-4"${_scopeId}>`);
            if (unref(result).status < unref(StatusEnums).SUMMARY) {
              _push2(ssrRenderComponent(_component_el_skeleton, { rows: 5 }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><!--[-->`);
            ssrRenderList(unref(result).data, (item, index) => {
              var _a2;
              _push2(`<div class="mt-4"${_scopeId}>`);
              if (item.type === "markdown" || item.type === "expand_query") {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Markdown, {
                  "link-list": ((_a2 = unref(result).data[index - 1]) == null ? void 0 : _a2.content) || [],
                  content: item.content,
                  typing: item.target === "update"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
            if (unref(result).suggestion.type) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, { class: "mt-4" }, null, _parent2, _scopeId));
              if ((_a = unref(result).suggestion.content) == null ? void 0 : _a.length) {
                _push2(ssrRenderComponent(_sfc_main$3, {
                  class: "mt-4",
                  lists: unref(result).suggestion.content
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (unref(result).outline.text) {
                _push2(ssrRenderComponent(MindMap, {
                  class: "mt-4",
                  content: unref(result).outline.text,
                  quote: unref(result).outline.source_attributions
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (unref(result).outline_json.text) {
                _push2(ssrRenderComponent(Outline, {
                  class: "mt-4",
                  content: unref(result).outline_json.text,
                  quote: unref(result).outline_json.source_attributions
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              unref(result).status < unref(StatusEnums).SUCCESS ? (openBlock(), createBlock("div", {
                key: 0,
                class: "py-[10px]"
              }, [
                unref(result).query ? (openBlock(), createBlock(_sfc_main$1, { key: 0 })) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "pl-4 pr-[40px]" }, [
                unref(result).query ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("div", { class: "break-words text-3xl font-medium" }, toDisplayString(unref(result).query), 1),
                  createVNode("div", { class: "pt-1 text-tx-secondary text-xs" }, " \u5185\u5BB9\u7531 AI \u751F\u6210\uFF0C\u4E0D\u80FD\u4FDD\u8BC1\u771F\u5B9E ")
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "mt-4" }, [
                  unref(result).status < unref(StatusEnums).SUMMARY ? (openBlock(), createBlock(_component_el_skeleton, {
                    key: 0,
                    rows: 5
                  })) : createCommentVNode("", true)
                ]),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(result).data, (item, index) => {
                  var _a2;
                  return openBlock(), createBlock("div", {
                    key: index,
                    class: "mt-4"
                  }, [
                    item.type === "markdown" || item.type === "expand_query" ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(_component_Markdown, {
                        "link-list": ((_a2 = unref(result).data[index - 1]) == null ? void 0 : _a2.content) || [],
                        content: item.content,
                        typing: item.target === "update"
                      }, null, 8, ["link-list", "content", "typing"])
                    ])) : createCommentVNode("", true)
                  ]);
                }), 128)),
                unref(result).suggestion.type ? (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode(_sfc_main$2, { class: "mt-4" }),
                  ((_b = unref(result).suggestion.content) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_sfc_main$3, {
                    key: 0,
                    class: "mt-4",
                    lists: unref(result).suggestion.content
                  }, null, 8, ["lists"])) : createCommentVNode("", true),
                  unref(result).outline.text ? (openBlock(), createBlock(MindMap, {
                    key: 1,
                    class: "mt-4",
                    content: unref(result).outline.text,
                    quote: unref(result).outline.source_attributions
                  }, null, 8, ["content", "quote"])) : createCommentVNode("", true),
                  unref(result).outline_json.text ? (openBlock(), createBlock(Outline, {
                    key: 2,
                    class: "mt-4",
                    content: unref(result).outline_json.text,
                    quote: unref(result).outline_json.source_attributions
                  }, null, 8, ["content", "quote"])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 h-full">`);
      _push(ssrRenderComponent(_component_ElScrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4"${_scopeId}>`);
            if (unref(result).search.length) {
              _push2(`<div class=""${_scopeId}><div class="text-xl font-medium"${_scopeId}> \u4FE1\u606F\u6765\u6E90 </div><div class="mt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "px-4" }, [
                unref(result).search.length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ""
                }, [
                  createVNode("div", { class: "text-xl font-medium" }, " \u4FE1\u606F\u6765\u6E90 "),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_sfc_main$4)
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/_components/search-result/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CVw00ac5.mjs.map
