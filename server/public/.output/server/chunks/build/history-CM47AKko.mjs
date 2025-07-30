import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElEmpty } from './el-empty-xbPr04pX.mjs';
import { A as feedback } from './server.mjs';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { a as getChatRecord, e as cleanChatRecord } from './chat-jd47avQj.mjs';
import { c as create_record_null } from './create_record_null-C_UPv5do.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import '@vue/shared';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "history",
  __ssrInlineRender: true,
  props: {
    currentId: {}
  },
  emits: ["view", "history"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const { data: chatContentList, refresh } = useAsyncData(
      () => getChatRecord({ type: 4, page_size: 5, page_no: 1 }),
      {
        transform(data) {
          return data.lists;
        },
        default() {
          return [];
        }
      },
      "$TSK1YU9dQd"
    );
    const handlePreview = (id, text) => {
      emit("view", { id, text });
    };
    const deleteChatLog = async (id) => {
      if (!chatContentList.value.length) return;
      await feedback.confirm(`\u786E\u5B9A${id ? "\u5220\u9664" : "\u6E05\u7A7A"}\u8BB0\u5F55\uFF1F`);
      await cleanChatRecord({ type: 4, id });
      refresh();
    };
    __expose({
      refresh
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElScrollbar = ElScrollbar;
      const _component_icon = _sfc_main$1;
      const _component_el_empty = ElEmpty;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full" }, _attrs))} data-v-f01564ba><div class="h-full flex flex-col" data-v-f01564ba><div class="flex justify-between items-center p-4" data-v-f01564ba><div class="font-bold" data-v-f01564ba>\u751F\u6210\u8BB0\u5F55</div><div class="text-sm cursor-pointer ml-[10px] text-primary" data-v-f01564ba> \u5168\u90E8\u8BB0\u5F55 </div></div><div class="flex-1 min-h-0" data-v-f01564ba>`);
      if (unref(chatContentList).length) {
        _push(ssrRenderComponent(_component_ElScrollbar, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="px-4" data-v-f01564ba${_scopeId}><div data-v-f01564ba${_scopeId}><!--[-->`);
              ssrRenderList(unref(chatContentList), (item) => {
                _push2(`<div class="mb-4" data-v-f01564ba${_scopeId}><div class="${ssrRenderClass([{
                  "!bg-primary-light-9": _ctx.currentId == item.id
                }, "p-[15px] bg-page rounded-[12px] h-full record-item hover:bg-primary-light-9"])}" data-v-f01564ba${_scopeId}><div class="text-lg font-medium line-clamp-1" data-v-f01564ba${_scopeId}> \u5E2E\u6211\u751F\u6210\uFF1A${ssrInterpolate(item.ask)}</div><!--[-->`);
                ssrRenderList(item.reply, (text, index) => {
                  _push2(`<div class="cursor-pointer" data-v-f01564ba${_scopeId}><div class="whitespace-pre-line line-clamp-5 my-[10px] h-[105px]" data-v-f01564ba${_scopeId}>${ssrInterpolate(text)}</div><div class="flex items-center" data-v-f01564ba${_scopeId}><div class="mr-auto text-tx-secondary text-sm" data-v-f01564ba${_scopeId}>${ssrInterpolate(item.create_time)}</div><div class="cursor-pointer text-tx-secondary flex" data-v-f01564ba${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_icon, { name: "el-icon-Delete" }, null, _parent2, _scopeId));
                  _push2(`</div></div></div>`);
                });
                _push2(`<!--]--></div></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              return [
                createVNode("div", { class: "px-4" }, [
                  createVNode("div", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(chatContentList), (item) => {
                      return openBlock(), createBlock("div", {
                        key: item.id,
                        class: "mb-4"
                      }, [
                        createVNode("div", {
                          class: ["p-[15px] bg-page rounded-[12px] h-full record-item hover:bg-primary-light-9", {
                            "!bg-primary-light-9": _ctx.currentId == item.id
                          }]
                        }, [
                          createVNode("div", { class: "text-lg font-medium line-clamp-1" }, " \u5E2E\u6211\u751F\u6210\uFF1A" + toDisplayString(item.ask), 1),
                          (openBlock(true), createBlock(Fragment, null, renderList(item.reply, (text, index) => {
                            return openBlock(), createBlock("div", {
                              class: "cursor-pointer",
                              key: index,
                              onClick: ($event) => handlePreview(item.id, text)
                            }, [
                              createVNode("div", { class: "whitespace-pre-line line-clamp-5 my-[10px] h-[105px]" }, toDisplayString(text), 1),
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode("div", { class: "mr-auto text-tx-secondary text-sm" }, toDisplayString(item.create_time), 1),
                                createVNode("div", {
                                  class: "cursor-pointer text-tx-secondary flex",
                                  onClick: ($event) => deleteChatLog(item.id)
                                }, [
                                  createVNode(_component_icon, { name: "el-icon-Delete" })
                                ], 8, ["onClick"])
                              ])
                            ], 8, ["onClick"]);
                          }), 128))
                        ], 2)
                      ]);
                    }), 128))
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="h-full flex flex-col items-center justify-center" data-v-f01564ba>`);
        _push(ssrRenderComponent(_component_el_empty, { image: unref(create_record_null) }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mind_map/component/history.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const History = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f01564ba"]]);

export { History as default };
//# sourceMappingURL=history-CM47AKko.mjs.map
