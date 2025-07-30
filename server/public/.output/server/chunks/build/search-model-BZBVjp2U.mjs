import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { E as ElSegmented } from './el-segmented-KMsqQ2AI.mjs';
import { E as ElTooltip } from './index-L-VTEUEA.mjs';
import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { E as ElTag } from './index-D7S5lb8a.mjs';
import { u as useTemplate } from './useTemplate-BMZ5OoC1.mjs';
import { defineComponent, ref, computed, watch, unref, withCtx, createVNode, toDisplayString, isRef, openBlock, createBlock, Fragment, renderList, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useVModels } from '@vueuse/core';
import _sfc_main$1 from './search-type-BDTcaOnm.mjs';
import { ModelEnums, TypeEnums } from './searchEnums-Dgcx5RT8.mjs';
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
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@popperjs/core';
import './dropdown-C6fgV-Vy.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search-model",
  __ssrInlineRender: true,
  props: {
    type: {},
    mode: { default: "segmented" },
    model: {}
  },
  emits: ["update:model", "update:type"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const [DefineTemplate, ReuseTemplate] = useTemplate();
    const { type: typeModel, model: modelValue } = useVModels(props, emit);
    const showModel = ref(false);
    const hoverModel = ref("");
    const modelOptions = [
      {
        label: "\u57FA\u7840",
        value: ModelEnums.BASE,
        icon: "local-icon-search_base"
      },
      {
        label: "\u589E\u5F3A",
        value: ModelEnums.ENHANCE,
        icon: "local-icon-search_copilot",
        desc: "\u68C0\u7D22\u66F4\u591A\u7F51\u9875\uFF0C\u63D0\u4F9B\u66F4\u5168\u9762\u4E2A\u6027\u5316\u7B54\u6848"
      },
      {
        label: "\u7814\u7A76",
        value: ModelEnums.STUDY,
        icon: "local-icon-search_research",
        desc: `\u7ED3\u6784\u66F4\u7EC6\u81F4\uFF0C\u5185\u5BB9\u66F4\u6DF1\u5165\u3002\u81EA\u52A8\u603B\u7ED3\u5927\u7EB2\u548C\u56FE\u8C31\uFF0C\u7B54\u6848\u66F4\u6E05\u6670`
      }
    ];
    const typeOptions = [
      {
        label: "\u5168\u7F51",
        value: TypeEnums.ALL
      },
      {
        label: "\u6587\u6863",
        value: TypeEnums.DOC
      },
      {
        label: "\u5B66\u672F",
        value: TypeEnums.SCHOLAR
      }
    ];
    const currentType = computed(() => {
      const current = typeOptions.find((item) => item.value == typeModel.value);
      return current || {};
    });
    const currentModel = computed(() => {
      const current = modelOptions.find((item) => item.value == modelValue.value);
      return current || {};
    });
    watch(showModel, () => {
      hoverModel.value = "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$2;
      const _component_el_segmented = ElSegmented;
      const _component_el_tooltip = ElTooltip;
      const _component_el_popover = ElPopover;
      const _component_el_tag = ElTag;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineTemplate), null, {
        default: withCtx(({ item, select }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-center"${_scopeId}><span class="${ssrRenderClass({
              "text-primary": !select
            })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              size: "15",
              name: item.icon
            }, null, _parent2, _scopeId));
            _push2(`</span><div class="ml-1"${_scopeId}>${ssrInterpolate(item.label)}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-center" }, [
                createVNode("span", {
                  class: {
                    "text-primary": !select
                  }
                }, [
                  createVNode(_component_Icon, {
                    size: "15",
                    name: item.icon
                  }, null, 8, ["name"])
                ], 2),
                createVNode("div", { class: "ml-1" }, toDisplayString(item.label), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.mode == "segmented") {
        _push(ssrRenderComponent(_component_el_segmented, {
          modelValue: unref(modelValue),
          "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : null,
          options: modelOptions,
          style: {
            width: `${modelOptions.length * 90}px`,
            "--el-border-radius-base": "10px",
            "--el-segmented-color": "var(--el-text-color-primary)"
          }
        }, {
          default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_tooltip, {
                effect: "dark",
                content: item.desc,
                disabled: !item.desc,
                placement: "top"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="py-[10px]"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(ReuseTemplate), {
                      item,
                      select: item.value == unref(modelValue)
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "py-[10px]" }, [
                        createVNode(unref(ReuseTemplate), {
                          item,
                          select: item.value == unref(modelValue)
                        }, null, 8, ["item", "select"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_el_tooltip, {
                  effect: "dark",
                  content: item.desc,
                  disabled: !item.desc,
                  placement: "top"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "py-[10px]" }, [
                      createVNode(unref(ReuseTemplate), {
                        item,
                        select: item.value == unref(modelValue)
                      }, null, 8, ["item", "select"])
                    ])
                  ]),
                  _: 2
                }, 1032, ["content", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="flex items-center">`);
        _push(ssrRenderComponent(_component_el_popover, {
          placement: "bottom",
          trigger: "click",
          width: 120,
          "popper-style": {
            minWidth: "120px",
            padding: 0
          },
          visible: unref(showModel),
          "onUpdate:visible": ($event) => isRef(showModel) ? showModel.value = $event : null
        }, {
          reference: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center cursor-pointer"${_scopeId}><span class="flex text-primary"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: unref(currentModel).icon
              }, null, _parent2, _scopeId));
              _push2(`</span><span class="px-[6px]"${_scopeId}>${ssrInterpolate(unref(currentModel).label)}</span>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-CaretBottom" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center cursor-pointer" }, [
                  createVNode("span", { class: "flex text-primary" }, [
                    createVNode(_component_Icon, {
                      name: unref(currentModel).icon
                    }, null, 8, ["name"])
                  ]),
                  createVNode("span", { class: "px-[6px]" }, toDisplayString(unref(currentModel).label), 1),
                  createVNode(_component_Icon, { name: "el-icon-CaretBottom" })
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="py-[10px]"${_scopeId}><!--[-->`);
              ssrRenderList(modelOptions, (item) => {
                _push2(`<div class="${ssrRenderClass({
                  "bg-primary-light-9": unref(hoverModel) == item.value
                })}"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$1, {
                  model: item.value,
                  type: unref(typeModel),
                  "onUpdate:type": [($event) => isRef(typeModel) ? typeModel.value = $event : null, ($event) => modelValue.value = item.value],
                  trigger: "hover",
                  placement: "right"
                }, {
                  item: withCtx(({ icon, label }, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="py-[6px]"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(ReuseTemplate), {
                        class: "px-[10px]",
                        item,
                        select: false
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "py-[6px]" }, [
                          createVNode(unref(ReuseTemplate), {
                            class: "px-[10px]",
                            item,
                            select: false
                          }, null, 8, ["item"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "py-[10px]" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(modelOptions, (item) => {
                    return createVNode("div", {
                      key: item.value,
                      class: {
                        "bg-primary-light-9": unref(hoverModel) == item.value
                      },
                      onMouseover: ($event) => hoverModel.value = item.value
                    }, [
                      createVNode(_sfc_main$1, {
                        model: item.value,
                        type: unref(typeModel),
                        "onUpdate:type": [($event) => isRef(typeModel) ? typeModel.value = $event : null, ($event) => modelValue.value = item.value],
                        trigger: "hover",
                        placement: "right"
                      }, {
                        item: withCtx(({ icon, label }) => [
                          createVNode("div", { class: "py-[6px]" }, [
                            createVNode(unref(ReuseTemplate), {
                              class: "px-[10px]",
                              item,
                              select: false
                            }, null, 8, ["item"])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["model", "type", "onUpdate:type"])
                    ], 42, ["onMouseover"]);
                  }), 64))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="border-l border-solid border-br-light ml-[8px] pl-[8px]">`);
        _push(ssrRenderComponent(_component_el_tag, {
          type: "primary",
          size: "small"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(currentType).label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(currentType).label), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/_components/common/search-model.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=search-model-BZBVjp2U.mjs.map
