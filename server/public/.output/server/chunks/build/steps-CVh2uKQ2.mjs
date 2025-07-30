import { defineComponent, getCurrentInstance, watch, provide, openBlock, createElementBlock, normalizeClass, unref, renderSlot, ref, inject, computed, reactive, normalizeStyle, createCommentVNode, createElementVNode, createBlock, withCtx, resolveDynamicComponent, createVNode, toDisplayString, createTextVNode, mergeProps, Fragment, renderList, useSSRContext } from 'vue';
import { h as buildProps, i as useNamespace, a7 as CHANGE_EVENT, Z as iconPropType, l as isNumber, g as ElIcon, aP as check_default, x as close_default, w as withInstall, q as withNoopInstall, _ as _export_sfc } from './server.mjs';
import { u as useOrderedChildren } from './index-C5I0EtSx.mjs';
import { _ as _sfc_main$3 } from './index-BoqjHllR.mjs';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { useSearch } from './useSearch-BaJoxou4.mjs';
import { TypeEnums } from './searchEnums-Dgcx5RT8.mjs';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './search-DBP7Ii5U.mjs';

const stepsProps = buildProps({
  space: {
    type: [Number, String],
    default: ""
  },
  active: {
    type: Number,
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    values: ["horizontal", "vertical"]
  },
  alignCenter: {
    type: Boolean
  },
  simple: {
    type: Boolean
  },
  finishStatus: {
    type: String,
    values: ["wait", "process", "finish", "error", "success"],
    default: "finish"
  },
  processStatus: {
    type: String,
    values: ["wait", "process", "finish", "error", "success"],
    default: "process"
  }
});
const stepsEmits = {
  [CHANGE_EVENT]: (newVal, oldVal) => [newVal, oldVal].every(isNumber)
};
const __default__$1 = defineComponent({
  name: "ElSteps"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: stepsProps,
  emits: stepsEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("steps");
    const {
      children: steps,
      addChild: addStep,
      removeChild: removeStep
    } = useOrderedChildren(getCurrentInstance(), "ElStep");
    watch(steps, () => {
      steps.value.forEach((instance, index) => {
        instance.setIndex(index);
      });
    });
    provide("ElSteps", { props, steps, addStep, removeStep });
    watch(() => props.active, (newVal, oldVal) => {
      emit(CHANGE_EVENT, newVal, oldVal);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b(), unref(ns).m(_ctx.simple ? "simple" : _ctx.direction)])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Steps = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "steps.vue"]]);
const stepProps = buildProps({
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: iconPropType
  },
  description: {
    type: String,
    default: ""
  },
  status: {
    type: String,
    values: ["", "wait", "process", "finish", "error", "success"],
    default: ""
  }
});
const __default__ = defineComponent({
  name: "ElStep"
});
const _sfc_main$1 = defineComponent({
  ...__default__,
  props: stepProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("step");
    const index = ref(-1);
    const lineStyle = ref({});
    const internalStatus = ref("");
    const parent = inject("ElSteps");
    const currentInstance = getCurrentInstance();
    const currentStatus = computed(() => {
      return props.status || internalStatus.value;
    });
    computed(() => {
      const prevStep = parent.steps.value[index.value - 1];
      return prevStep ? prevStep.currentStatus : "wait";
    });
    const isCenter = computed(() => {
      return parent.props.alignCenter;
    });
    const isVertical = computed(() => {
      return parent.props.direction === "vertical";
    });
    const isSimple = computed(() => {
      return parent.props.simple;
    });
    const stepsCount = computed(() => {
      return parent.steps.value.length;
    });
    const isLast = computed(() => {
      var _a;
      return ((_a = parent.steps.value[stepsCount.value - 1]) == null ? void 0 : _a.uid) === (currentInstance == null ? void 0 : currentInstance.uid);
    });
    const space = computed(() => {
      return isSimple.value ? "" : parent.props.space;
    });
    const containerKls = computed(() => {
      return [
        ns.b(),
        ns.is(isSimple.value ? "simple" : parent.props.direction),
        ns.is("flex", isLast.value && !space.value && !isCenter.value),
        ns.is("center", isCenter.value && !isVertical.value && !isSimple.value)
      ];
    });
    const style = computed(() => {
      const style2 = {
        flexBasis: isNumber(space.value) ? `${space.value}px` : space.value ? space.value : `${100 / (stepsCount.value - (isCenter.value ? 0 : 1))}%`
      };
      if (isVertical.value)
        return style2;
      if (isLast.value) {
        style2.maxWidth = `${100 / stepsCount.value}%`;
      }
      return style2;
    });
    const setIndex = (val) => {
      index.value = val;
    };
    const calcProgress = (status) => {
      const isWait = status === "wait";
      const style2 = {
        transitionDelay: `${isWait ? "-" : ""}${150 * index.value}ms`
      };
      const step = status === parent.props.processStatus || isWait ? 0 : 100;
      style2.borderWidth = step && !isSimple.value ? "1px" : 0;
      style2[parent.props.direction === "vertical" ? "height" : "width"] = `${step}%`;
      lineStyle.value = style2;
    };
    const stepItemState = reactive({
      uid: currentInstance.uid,
      currentStatus,
      setIndex,
      calcProgress
    });
    parent.addStep(stepItemState);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        style: normalizeStyle(unref(style)),
        class: normalizeClass(unref(containerKls))
      }, [
        createCommentVNode(" icon & line "),
        createElementVNode("div", {
          class: normalizeClass([unref(ns).e("head"), unref(ns).is(unref(currentStatus))])
        }, [
          !unref(isSimple) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).e("line"))
          }, [
            createElementVNode("i", {
              class: normalizeClass(unref(ns).e("line-inner")),
              style: normalizeStyle(lineStyle.value)
            }, null, 6)
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            class: normalizeClass([unref(ns).e("icon"), unref(ns).is(_ctx.icon || _ctx.$slots.icon ? "icon" : "text")])
          }, [
            renderSlot(_ctx.$slots, "icon", {}, () => [
              _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: normalizeClass(unref(ns).e("icon-inner"))
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
                ]),
                _: 1
              }, 8, ["class"])) : unref(currentStatus) === "success" ? (openBlock(), createBlock(unref(ElIcon), {
                key: 1,
                class: normalizeClass([unref(ns).e("icon-inner"), unref(ns).is("status")])
              }, {
                default: withCtx(() => [
                  createVNode(unref(check_default))
                ]),
                _: 1
              }, 8, ["class"])) : unref(currentStatus) === "error" ? (openBlock(), createBlock(unref(ElIcon), {
                key: 2,
                class: normalizeClass([unref(ns).e("icon-inner"), unref(ns).is("status")])
              }, {
                default: withCtx(() => [
                  createVNode(unref(close_default))
                ]),
                _: 1
              }, 8, ["class"])) : !unref(isSimple) ? (openBlock(), createElementBlock("div", {
                key: 3,
                class: normalizeClass(unref(ns).e("icon-inner"))
              }, toDisplayString(index.value + 1), 3)) : createCommentVNode("v-if", true)
            ])
          ], 2)
        ], 2),
        createCommentVNode(" title & description "),
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("main"))
        }, [
          createElementVNode("div", {
            class: normalizeClass([unref(ns).e("title"), unref(ns).is(unref(currentStatus))])
          }, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ])
          ], 2),
          unref(isSimple) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).e("arrow"))
          }, null, 2)) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass([unref(ns).e("description"), unref(ns).is(unref(currentStatus))])
          }, [
            renderSlot(_ctx.$slots, "description", {}, () => [
              createTextVNode(toDisplayString(_ctx.description), 1)
            ])
          ], 2))
        ], 2)
      ], 6);
    };
  }
});
var Step = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "item.vue"]]);
const ElSteps = withInstall(Steps, {
  Step
});
const ElStep = withNoopInstall(Step);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "steps",
  __ssrInlineRender: true,
  setup(__props) {
    const { options, result } = useSearch();
    const getTypeText = computed(() => {
      switch (options.value.type) {
        case TypeEnums.ALL:
          return "\u5168\u7F51";
        case TypeEnums.DOC:
          return "\u6587\u6863";
        case TypeEnums.SCHOLAR:
          return "\u5B66\u672F";
      }
    });
    const stepsOptions = computed(() => {
      return [
        {
          title: "\u95EE\u9898\u5206\u6790"
        },
        {
          title: `${getTypeText.value}\u641C\u7D22`
        },
        {
          title: "\u6574\u7406\u7B54\u6848"
        },
        {
          title: "\u5B8C\u6210"
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_steps = ElSteps;
      const _component_el_step = ElStep;
      const _component_Icon = _sfc_main$3;
      _push(ssrRenderComponent(_component_el_steps, mergeProps({
        active: unref(result).status,
        style: { "max-width": "500px" },
        "align-center": "",
        "process-status": "finish"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(stepsOptions), (item, index) => {
              _push2(ssrRenderComponent(_component_el_step, {
                key: index,
                title: item.title
              }, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(result).status === index) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "el-icon-Loading",
                        style: { "animation": "loading-rotate 2s linear infinite" },
                        size: 24
                      }, null, _parent3, _scopeId2));
                    } else if (unref(result).status > index) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "el-icon-SuccessFilled",
                        size: 24
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "local-icon-circular",
                        size: 24
                      }, null, _parent3, _scopeId2));
                    }
                  } else {
                    return [
                      unref(result).status === index ? (openBlock(), createBlock(_component_Icon, {
                        key: 0,
                        name: "el-icon-Loading",
                        style: { "animation": "loading-rotate 2s linear infinite" },
                        size: 24
                      })) : unref(result).status > index ? (openBlock(), createBlock(_component_Icon, {
                        key: 1,
                        name: "el-icon-SuccessFilled",
                        size: 24
                      })) : (openBlock(), createBlock(_component_Icon, {
                        key: 2,
                        name: "local-icon-circular",
                        size: 24
                      }))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(stepsOptions), (item, index) => {
                return openBlock(), createBlock(_component_el_step, {
                  key: index,
                  title: item.title
                }, {
                  icon: withCtx(() => [
                    unref(result).status === index ? (openBlock(), createBlock(_component_Icon, {
                      key: 0,
                      name: "el-icon-Loading",
                      style: { "animation": "loading-rotate 2s linear infinite" },
                      size: 24
                    })) : unref(result).status > index ? (openBlock(), createBlock(_component_Icon, {
                      key: 1,
                      name: "el-icon-SuccessFilled",
                      size: 24
                    })) : (openBlock(), createBlock(_component_Icon, {
                      key: 2,
                      name: "local-icon-circular",
                      size: 24
                    }))
                  ]),
                  _: 2
                }, 1032, ["title"]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/_components/search-result/steps.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=steps-CVh2uKQ2.mjs.map
