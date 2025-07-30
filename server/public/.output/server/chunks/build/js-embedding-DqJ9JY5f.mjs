import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { _ as _sfc_main$1 } from './index-DRyhljQ3.mjs';
import { defineComponent, shallowRef, computed, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { P as Popup } from './index-BKj4TrcW.mjs';
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
import '@vueuse/core';
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import 'async-validator';
import 'markdown-it';
import 'highlight.js';
import '@vscode/markdown-it-katex';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "js-embedding",
  __ssrInlineRender: true,
  props: {
    channelId: {}
  },
  emits: ["confirm"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const formRef = shallowRef();
    const popupRef = shallowRef();
    const open = () => {
      var _a;
      (_a = popupRef.value) == null ? void 0 : _a.open();
    };
    const close = () => {
      var _a;
      (_a = popupRef.value) == null ? void 0 : _a.close();
    };
    const chatLink = computed(() => {
      return `${(void 0).origin}/chat/${props.channelId}`;
    });
    const htmlCode = computed(() => {
      return `\`\`\`html
<iframe 
    src="${chatLink.value}" 
    class="chat-iframe"
    frameborder="0"
>
</iframe>
<style>
    /* iframe\u6846\u9ED8\u8BA4\u5360\u6EE1\u5168\u5C4F\uFF0C\u53EF\u6839\u636E\u9700\u6C42\u81EA\u884C\u8C03\u6574\u6837\u5F0F  */
    .chat-iframe {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        z-index: 9999;
    }
</style>
\`\`\``;
    });
    const jsCode = computed(() => {
      return `\`\`\`html
<script>
    window.chat_iframe_src = '${chatLink.value}'
    window.chat_iframe_width = '375px' //\u804A\u5929\u7A97\u53E3\u5BBD
    window.chat_iframe_height = '667px'  //\u804A\u5929\u7A97\u53E3\u9AD8
    window.chat_icon_bg = '#3C5EFD' //\u804A\u5929\u60AC\u6D6E\u6309\u94AE\u80CC\u666F
    window.chat_icon_color = '#fff' //\u804A\u5929\u60AC\u6D6E\u6309\u94AE\u989C\u8272
    var js = document.createElement('script')
    js.type = 'text/javascript'
    js.async = true
    js.src = '${(void 0).origin}/js-iframe.js'
    var header = document.getElementsByTagName('head')[0]
    header.appendChild(js)
<\/script>
\`\`\`
`;
    });
    __expose({
      open,
      close
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_markdown = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Popup, {
        ref_key: "popupRef",
        ref: popupRef,
        title: "JS\u5D4C\u5165",
        async: true,
        width: "900px",
        "confirm-button-text": "",
        "cancel-button-text": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form, {
              ref_key: "formRef",
              ref: formRef,
              "label-position": "top",
              "label-width": "84px"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, null, {
                    label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-start"${_scopeId3}><div class="mr-auto"${_scopeId3}> \u8981\u5728\u60A8\u7F51\u7AD9\u7684\u4EFB\u4F55\u4F4D\u7F6E\u6DFB\u52A0\u804A\u5929\u667A\u80FD\u4F53\uFF0C\u8BF7\u5C06\u6B64 iframe \u6DFB\u52A0\u5230\u60A8\u7684 html \u4EE3\u7801\u4E2D </div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-start" }, [
                            createVNode("div", { class: "mr-auto" }, " \u8981\u5728\u60A8\u7F51\u7AD9\u7684\u4EFB\u4F55\u4F4D\u7F6E\u6DFB\u52A0\u804A\u5929\u667A\u80FD\u4F53\uFF0C\u8BF7\u5C06\u6B64 iframe \u6DFB\u52A0\u5230\u60A8\u7684 html \u4EE3\u7801\u4E2D ")
                          ])
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex-1 min-w-0 rounded-md overflow-hidden"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_markdown, { content: unref(htmlCode) }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex-1 min-w-0 rounded-md overflow-hidden" }, [
                            createVNode(_component_markdown, { content: unref(htmlCode) }, null, 8, ["content"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, null, {
                    label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-start"${_scopeId3}><div class="mr-auto"${_scopeId3}> \u8981\u5728\u60A8\u7F51\u7AD9\u7684\u53F3\u4E0B\u89D2\u6DFB\u52A0\u804A\u5929\u6C14\u6CE1\uFF0C\u8BF7\u590D\u5236\u6DFB\u52A0\u5230\u60A8\u7684 html\u4E2D </div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-start" }, [
                            createVNode("div", { class: "mr-auto" }, " \u8981\u5728\u60A8\u7F51\u7AD9\u7684\u53F3\u4E0B\u89D2\u6DFB\u52A0\u804A\u5929\u6C14\u6CE1\uFF0C\u8BF7\u590D\u5236\u6DFB\u52A0\u5230\u60A8\u7684 html\u4E2D ")
                          ])
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex-1 min-w-0 rounded-md overflow-hidden"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_markdown, { content: unref(jsCode) }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex-1 min-w-0 rounded-md overflow-hidden" }, [
                            createVNode(_component_markdown, { content: unref(jsCode) }, null, 8, ["content"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_form_item, null, {
                      label: withCtx(() => [
                        createVNode("div", { class: "flex items-start" }, [
                          createVNode("div", { class: "mr-auto" }, " \u8981\u5728\u60A8\u7F51\u7AD9\u7684\u4EFB\u4F55\u4F4D\u7F6E\u6DFB\u52A0\u804A\u5929\u667A\u80FD\u4F53\uFF0C\u8BF7\u5C06\u6B64 iframe \u6DFB\u52A0\u5230\u60A8\u7684 html \u4EE3\u7801\u4E2D ")
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "flex-1 min-w-0 rounded-md overflow-hidden" }, [
                          createVNode(_component_markdown, { content: unref(htmlCode) }, null, 8, ["content"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, null, {
                      label: withCtx(() => [
                        createVNode("div", { class: "flex items-start" }, [
                          createVNode("div", { class: "mr-auto" }, " \u8981\u5728\u60A8\u7F51\u7AD9\u7684\u53F3\u4E0B\u89D2\u6DFB\u52A0\u804A\u5929\u6C14\u6CE1\uFF0C\u8BF7\u590D\u5236\u6DFB\u52A0\u5230\u60A8\u7684 html\u4E2D ")
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "flex-1 min-w-0 rounded-md overflow-hidden" }, [
                          createVNode(_component_markdown, { content: unref(jsCode) }, null, 8, ["content"])
                        ])
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
              createVNode(_component_el_form, {
                ref_key: "formRef",
                ref: formRef,
                "label-position": "top",
                "label-width": "84px"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, null, {
                    label: withCtx(() => [
                      createVNode("div", { class: "flex items-start" }, [
                        createVNode("div", { class: "mr-auto" }, " \u8981\u5728\u60A8\u7F51\u7AD9\u7684\u4EFB\u4F55\u4F4D\u7F6E\u6DFB\u52A0\u804A\u5929\u667A\u80FD\u4F53\uFF0C\u8BF7\u5C06\u6B64 iframe \u6DFB\u52A0\u5230\u60A8\u7684 html \u4EE3\u7801\u4E2D ")
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode("div", { class: "flex-1 min-w-0 rounded-md overflow-hidden" }, [
                        createVNode(_component_markdown, { content: unref(htmlCode) }, null, 8, ["content"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, null, {
                    label: withCtx(() => [
                      createVNode("div", { class: "flex items-start" }, [
                        createVNode("div", { class: "mr-auto" }, " \u8981\u5728\u60A8\u7F51\u7AD9\u7684\u53F3\u4E0B\u89D2\u6DFB\u52A0\u804A\u5929\u6C14\u6CE1\uFF0C\u8BF7\u590D\u5236\u6DFB\u52A0\u5230\u60A8\u7684 html\u4E2D ")
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode("div", { class: "flex-1 min-w-0 rounded-md overflow-hidden" }, [
                        createVNode(_component_markdown, { content: unref(jsCode) }, null, 8, ["content"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 512)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-release/js-embedding.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=js-embedding-DqJ9JY5f.mjs.map
