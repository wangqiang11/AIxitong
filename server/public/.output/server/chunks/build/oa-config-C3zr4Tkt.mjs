import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { P as Popup } from './index-BKj4TrcW.mjs';
import { E as ElLink } from './el-link-CHT85aXX.mjs';
import { defineComponent, ref, shallowRef, computed, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useCopy } from './useCopy-CfS-iChu.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './index-CzJm6kkT.mjs';
import './server.mjs';
import 'vue-router';
import 'lodash-es';
import '@vueuse/core';
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const wxoaConfgMenuImg = "" + buildAssetsURL("wxoa_config_menu.DpJ4F-gE.png");
const wxoaConfgReplyImg = "" + buildAssetsURL("wxoa_config_autoreply.CBOfNUld.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "oa-config",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const channel = ref("");
    const { copy } = useCopy();
    const popupRef = shallowRef();
    const link = computed(() => `${(void 0).origin}/chat/${channel.value}`);
    const open = (sn) => {
      var _a;
      channel.value = sn;
      (_a = popupRef.value) == null ? void 0 : _a.open();
    };
    __expose({
      open
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_popup = Popup;
      const _component_el_link = ElLink;
      _push(ssrRenderComponent(_component_popup, mergeProps({
        ref_key: "popupRef",
        ref: popupRef,
        title: "\u516C\u4F17\u53F7\u914D\u7F6E",
        async: true,
        width: "600px",
        "confirm-button-text": "",
        "cancel-button-text": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-xl text-tx-primary font-medium"${_scopeId}>\u6DFB\u52A0\u83DC\u5355</div><div class="mt-4"${_scopeId}><div${_scopeId}>1.\u8FDB\u5165\u5FAE\u4FE1<span class="text-success"${_scopeId}>\u516C\u4F17\u53F7\u540E\u53F0</span></div><div class="text-[#999] mt-2"${_scopeId}><div${_scopeId}>\u8BF7\u786E\u4FDD\u60A8\u7684\u516C\u4F17\u53F7\u5DF2\u8FC7\u5FAE\u4FE1\u8BA4\u8BC1</div><div class="flex items-center"${_scopeId}><span${_scopeId}>\u8DEF\u5F84\uFF1A\u5185\u5BB9\u4E0E\u4E92\u52A8 &gt; \u81EA\u5B9A\u4E49\u83DC\u5355 &gt; \u6DFB\u52A0\u83DC\u5355</span>`);
            _push2(ssrRenderComponent(_component_el_link, {
              href: unref(wxoaConfgMenuImg),
              target: "_blank",
              type: "primary",
              class: "ml-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u67E5\u770B\u586B\u5199\u793A\u4F8B `);
                } else {
                  return [
                    createTextVNode(" \u67E5\u770B\u586B\u5199\u793A\u4F8B ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="mt-6"${_scopeId}><div${_scopeId}>2.\u521B\u5EFA\u83DC\u5355</div><div class="text-[#999] mt-2"${_scopeId}><div${_scopeId}>\u586B\u5199\u83DC\u5355\u540D\u79F0\uFF0C\u5C06\u4EE5\u4E0B\u94FE\u63A5\u6216\u4E8C\u7EF4\u7801\uFF0C\u914D\u7F6E\u5230\u83DC\u5355\u91CC</div></div><div class="flex items-center mt-2"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(link))}</span><span class="ml-2 text-primary cursor-pointer"${_scopeId}>\u590D\u5236\u94FE\u63A5</span></div></div><div class="text-xl font-medium text-tx-primary mt-[16px]"${_scopeId}>\u81EA\u52A8\u56DE\u590D</div><div class="mt-4"${_scopeId}><div${_scopeId}>1.\u8FDB\u5165\u5FAE\u4FE1<span class="text-success"${_scopeId}>\u516C\u4F17\u53F7\u540E\u53F0</span></div><div class="text-[#999] mt-2"${_scopeId}><div${_scopeId}><span${_scopeId}>\u8DEF\u5F84\uFF1A\u5185\u5BB9\u4E0E\u4E92\u52A8 &gt; \u81EA\u52A8\u56DE\u590D &gt; \u6536\u5230\u6D88\u606F\u56DE\u590D</span>`);
            _push2(ssrRenderComponent(_component_el_link, {
              href: unref(wxoaConfgReplyImg),
              target: "_blank",
              type: "primary",
              class: "ml-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u67E5\u770B\u586B\u5199\u793A\u4F8B `);
                } else {
                  return [
                    createTextVNode(" \u67E5\u770B\u586B\u5199\u793A\u4F8B ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="mt-6"${_scopeId}><div${_scopeId}>2.\u521B\u5EFA\u81EA\u52A8\u56DE\u590D</div><div class="text-[#999] mt-2"${_scopeId}><div${_scopeId}>\u9009\u62E9\u81EA\u52A8\u56DE\u590D\u7C7B\u578B\uFF0C\u5C06\u4EE5\u4E0B\u94FE\u63A5\u6216\u4E8C\u7EF4\u7801\uFF0C\u914D\u7F6E\u5230\u56DE\u590D\u91CC</div></div><div class="flex items-center mt-2"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(link))}</span><span class="ml-2 text-primary cursor-pointer"${_scopeId}>\u590D\u5236\u94FE\u63A5</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-xl text-tx-primary font-medium" }, "\u6DFB\u52A0\u83DC\u5355"),
              createVNode("div", { class: "mt-4" }, [
                createVNode("div", null, [
                  createTextVNode("1.\u8FDB\u5165\u5FAE\u4FE1"),
                  createVNode("span", { class: "text-success" }, "\u516C\u4F17\u53F7\u540E\u53F0")
                ]),
                createVNode("div", { class: "text-[#999] mt-2" }, [
                  createVNode("div", null, "\u8BF7\u786E\u4FDD\u60A8\u7684\u516C\u4F17\u53F7\u5DF2\u8FC7\u5FAE\u4FE1\u8BA4\u8BC1"),
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("span", null, "\u8DEF\u5F84\uFF1A\u5185\u5BB9\u4E0E\u4E92\u52A8 > \u81EA\u5B9A\u4E49\u83DC\u5355 > \u6DFB\u52A0\u83DC\u5355"),
                    createVNode(_component_el_link, {
                      href: unref(wxoaConfgMenuImg),
                      target: "_blank",
                      type: "primary",
                      class: "ml-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u67E5\u770B\u586B\u5199\u793A\u4F8B ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ])
              ]),
              createVNode("div", { class: "mt-6" }, [
                createVNode("div", null, "2.\u521B\u5EFA\u83DC\u5355"),
                createVNode("div", { class: "text-[#999] mt-2" }, [
                  createVNode("div", null, "\u586B\u5199\u83DC\u5355\u540D\u79F0\uFF0C\u5C06\u4EE5\u4E0B\u94FE\u63A5\u6216\u4E8C\u7EF4\u7801\uFF0C\u914D\u7F6E\u5230\u83DC\u5355\u91CC")
                ]),
                createVNode("div", { class: "flex items-center mt-2" }, [
                  createVNode("span", null, toDisplayString(unref(link)), 1),
                  createVNode("span", {
                    class: "ml-2 text-primary cursor-pointer",
                    onClick: ($event) => unref(copy)(unref(link))
                  }, "\u590D\u5236\u94FE\u63A5", 8, ["onClick"])
                ])
              ]),
              createVNode("div", { class: "text-xl font-medium text-tx-primary mt-[16px]" }, "\u81EA\u52A8\u56DE\u590D"),
              createVNode("div", { class: "mt-4" }, [
                createVNode("div", null, [
                  createTextVNode("1.\u8FDB\u5165\u5FAE\u4FE1"),
                  createVNode("span", { class: "text-success" }, "\u516C\u4F17\u53F7\u540E\u53F0")
                ]),
                createVNode("div", { class: "text-[#999] mt-2" }, [
                  createVNode("div", null, [
                    createVNode("span", null, "\u8DEF\u5F84\uFF1A\u5185\u5BB9\u4E0E\u4E92\u52A8 > \u81EA\u52A8\u56DE\u590D > \u6536\u5230\u6D88\u606F\u56DE\u590D"),
                    createVNode(_component_el_link, {
                      href: unref(wxoaConfgReplyImg),
                      target: "_blank",
                      type: "primary",
                      class: "ml-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u67E5\u770B\u586B\u5199\u793A\u4F8B ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ])
              ]),
              createVNode("div", { class: "mt-6" }, [
                createVNode("div", null, "2.\u521B\u5EFA\u81EA\u52A8\u56DE\u590D"),
                createVNode("div", { class: "text-[#999] mt-2" }, [
                  createVNode("div", null, "\u9009\u62E9\u81EA\u52A8\u56DE\u590D\u7C7B\u578B\uFF0C\u5C06\u4EE5\u4E0B\u94FE\u63A5\u6216\u4E8C\u7EF4\u7801\uFF0C\u914D\u7F6E\u5230\u56DE\u590D\u91CC")
                ]),
                createVNode("div", { class: "flex items-center mt-2" }, [
                  createVNode("span", null, toDisplayString(unref(link)), 1),
                  createVNode("span", {
                    class: "ml-2 text-primary cursor-pointer",
                    onClick: ($event) => unref(copy)(unref(link))
                  }, "\u590D\u5236\u94FE\u63A5", 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-release/oa-config.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=oa-config-C3zr4Tkt.mjs.map
