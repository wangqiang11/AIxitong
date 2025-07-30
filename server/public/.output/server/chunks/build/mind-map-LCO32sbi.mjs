import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { bo as copy, d as ElButton } from './server.mjs';
import { useSSRContext, defineComponent, shallowRef, ref, watch, nextTick, withCtx, createVNode, unref, openBlock, createBlock } from 'vue';
import { ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import Collapse from './collapse-Dkv7cdT3.mjs';
import { Transformer } from 'markmap-lib';
import { useDark } from '@vueuse/core';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './el-collapse-item-DSo9CmH5.mjs';
import './index-DadLUs6d.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mind-map",
  __ssrInlineRender: true,
  props: {
    content: { default: "" },
    quote: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    const transformer = new Transformer();
    const svgRef = shallowRef();
    const svgWrapRef = shallowRef();
    const isDark = useDark();
    const isFullScreen = ref(false);
    let markmap = null;
    const transformQuote = (value) => {
      const pattern = /(`{3}[\s\S]*?`{3}(?:(?!.)))|(`{3}[\s\S]*)|(`[\s\S]*?`{1}?)|(`[\s\S]*)|(?:\[(?:(?:number )|\^)?([\d]{1,2})\])/g;
      return value.replaceAll(pattern, function($1, $2, $3, $4, $5, $6) {
        const item = props.quote[Number($6) - 1];
        if (item) {
          return `<a href="${item.seeMoreUrl}" 
title="${item.title}"
target="_blank"
style="display: inline-block;
width: 15px;
height: 15px;
border-radius: 50%;
font-size: 12px;
text-align: center;
background-color: var(--el-fill-color-lighter);
text-align: center;
font-size: 9px;
color:var(--el-text-color-secondary);
text-decoration: none !important;
vertical-align: middle;
margin: 0 2px 3px;
cursor: pointer;
line-height: 16px;">${$6}</a>`;
        } else {
          return "";
        }
      });
    };
    const renderMarkMap = (value) => {
      value = transformQuote(value);
      transformer.transform(value);
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
    watch(() => props.content, renderMarkMap);
    watch(isFullScreen, async () => {
      await nextTick();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$1;
      const _component_ElButton = ElButton;
      _push(ssrRenderComponent(Collapse, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "local-icon-mind_map",
              size: 16
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-2xl ml-1" data-v-6ed9d3f4${_scopeId}> \u8111\u56FE </span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "local-icon-mind_map",
                size: 16
              }),
              createVNode("span", { class: "text-2xl ml-1" }, " \u8111\u56FE ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-[600px] rounded-[12px] border border-solid border-br-light relative" data-v-6ed9d3f4${_scopeId}><div class="${ssrRenderClass([{
              "!fixed top-0 left-0 w-screen h-screen z-[9999] bg-body": unref(isFullScreen)
            }, "w-full h-full"])}" data-v-6ed9d3f4${_scopeId}><div class="toolbar" data-v-6ed9d3f4${_scopeId}><div class="toolbar-item" data-v-6ed9d3f4${_scopeId}>`);
            if (unref(isFullScreen)) {
              _push2(ssrRenderComponent(_component_ElButton, {
                link: "",
                onClick: ($event) => isFullScreen.value = false
              }, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "local-icon-fullscreen-exit",
                      size: 18
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "local-icon-fullscreen-exit",
                        size: 18
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_ElButton, {
                link: "",
                onClick: ($event) => isFullScreen.value = true
              }, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "local-icon-fullscreen",
                      size: 18
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "local-icon-fullscreen",
                        size: 18
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(`</div><div class="toolbar-item" data-v-6ed9d3f4${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElButton, {
              link: "",
              onClick: ($event) => {
                var _a;
                return (_a = unref(markmap)) == null ? void 0 : _a.fit();
              }
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "el-icon-Refresh",
                    size: 20
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "el-icon-Refresh",
                      size: 20
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="toolbar-item" data-v-6ed9d3f4${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElButton, {
              link: "",
              onClick: ($event) => {
                var _a;
                return (_a = unref(markmap)) == null ? void 0 : _a.rescale(1.25);
              }
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "el-icon-ZoomIn",
                    size: 20
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "el-icon-ZoomIn",
                      size: 20
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="toolbar-item" data-v-6ed9d3f4${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElButton, {
              link: "",
              onClick: ($event) => {
                var _a;
                return (_a = unref(markmap)) == null ? void 0 : _a.rescale(0.8);
              }
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "el-icon-ZoomOut",
                    size: 20
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "el-icon-ZoomOut",
                      size: 20
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="toolbar-item" data-v-6ed9d3f4${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElButton, {
              link: "",
              onClick: ($event) => unref(copy)(_ctx.content)
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "el-icon-CopyDocument",
                    size: 20
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "el-icon-CopyDocument",
                      size: 20
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><svg class="w-full h-full" data-v-6ed9d3f4${_scopeId}></svg></div></div>`);
          } else {
            return [
              createVNode("div", { class: "h-[600px] rounded-[12px] border border-solid border-br-light relative" }, [
                createVNode("div", {
                  ref_key: "svgWrapRef",
                  ref: svgWrapRef,
                  class: ["w-full h-full", {
                    "!fixed top-0 left-0 w-screen h-screen z-[9999] bg-body": unref(isFullScreen)
                  }]
                }, [
                  createVNode("div", { class: "toolbar" }, [
                    createVNode("div", { class: "toolbar-item" }, [
                      unref(isFullScreen) ? (openBlock(), createBlock(_component_ElButton, {
                        key: 0,
                        link: "",
                        onClick: ($event) => isFullScreen.value = false
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "local-icon-fullscreen-exit",
                            size: 18
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : (openBlock(), createBlock(_component_ElButton, {
                        key: 1,
                        link: "",
                        onClick: ($event) => isFullScreen.value = true
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "local-icon-fullscreen",
                            size: 18
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"]))
                    ]),
                    createVNode("div", { class: "toolbar-item" }, [
                      createVNode(_component_ElButton, {
                        link: "",
                        onClick: ($event) => {
                          var _a;
                          return (_a = unref(markmap)) == null ? void 0 : _a.fit();
                        }
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "el-icon-Refresh",
                            size: 20
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "toolbar-item" }, [
                      createVNode(_component_ElButton, {
                        link: "",
                        onClick: ($event) => {
                          var _a;
                          return (_a = unref(markmap)) == null ? void 0 : _a.rescale(1.25);
                        }
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "el-icon-ZoomIn",
                            size: 20
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "toolbar-item" }, [
                      createVNode(_component_ElButton, {
                        link: "",
                        onClick: ($event) => {
                          var _a;
                          return (_a = unref(markmap)) == null ? void 0 : _a.rescale(0.8);
                        }
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "el-icon-ZoomOut",
                            size: 20
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "toolbar-item" }, [
                      createVNode(_component_ElButton, {
                        link: "",
                        onClick: ($event) => unref(copy)(_ctx.content)
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "el-icon-CopyDocument",
                            size: 20
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ]),
                  (openBlock(), createBlock("svg", {
                    ref_key: "svgRef",
                    ref: svgRef,
                    class: "w-full h-full"
                  }, null, 512))
                ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/_components/search-result/mind-map.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MindMap = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6ed9d3f4"]]);

export { MindMap as default };
//# sourceMappingURL=mind-map-LCO32sbi.mjs.map
