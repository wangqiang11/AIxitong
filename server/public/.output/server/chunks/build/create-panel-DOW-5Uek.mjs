import { _ as _sfc_main$7 } from './index-BoqjHllR.mjs';
import { a5 as useAppStore, E as ElInput, A as feedback, d as ElButton } from './server.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, isRef, withCtx, openBlock, createBlock, Fragment, renderList, shallowRef, ref, watch, createVNode, resolveDynamicComponent, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderVNode, ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { E as ElSelect, a as ElOption } from './index-CUhOTuS-.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { E as ElRadioGroup, b as ElRadioButton } from './el-radio-group-PXDiQVwm.mjs';
import { a as ElCheckboxGroup, b as ElCheckboxButton } from './index-53t5ntO1.mjs';
import { useVModel } from '@vueuse/core';
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
import 'async-validator';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "input",
  __ssrInlineRender: true,
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value2) {
        emit("update:modelValue", value2);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElInput = ElInput;
      _push(ssrRenderComponent(_component_ElInput, mergeProps(props, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form-designer/widgets/input.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "textarea",
  __ssrInlineRender: true,
  props: {
    autosize: { type: [Boolean, Object] }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value2) {
        emit("update:modelValue", value2);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElInput = ElInput;
      _push(ssrRenderComponent(_component_ElInput, mergeProps(props, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        type: "textarea",
        autosize: _ctx.autosize ? { minRows: 2 } : false
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form-designer/widgets/textarea.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "select",
  __ssrInlineRender: true,
  props: {
    defaultValue: {},
    modelValue: {},
    options: { default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value2) {
        emit("update:modelValue", value2);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElSelect = ElSelect;
      const _component_ElOption = ElOption;
      _push(ssrRenderComponent(_component_ElSelect, mergeProps(_ctx.$attrs, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.options, (item, index) => {
              _push2(ssrRenderComponent(_component_ElOption, {
                key: index,
                label: item,
                value: item
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.options, (item, index) => {
                return openBlock(), createBlock(_component_ElOption, {
                  key: index,
                  label: item,
                  value: item
                }, null, 8, ["label", "value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form-designer/widgets/select.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const select = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-bf7a521e"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "radio",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    options: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value2) {
        emit("update:modelValue", value2);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_radio_button = ElRadioButton;
      _push(ssrRenderComponent(_component_el_radio_group, mergeProps(_ctx.$attrs, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.options, (item, index) => {
              _push2(ssrRenderComponent(_component_el_radio_button, {
                key: index,
                label: item,
                name: item
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.options, (item, index) => {
                return openBlock(), createBlock(_component_el_radio_button, {
                  key: index,
                  label: item,
                  name: item
                }, null, 8, ["label", "name"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form-designer/widgets/radio.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const radio = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-231e96fe"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "checkbox",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    options: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value2) {
        emit("update:modelValue", value2);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_checkbox_group = ElCheckboxGroup;
      const _component_el_checkbox_button = ElCheckboxButton;
      _push(ssrRenderComponent(_component_el_checkbox_group, mergeProps(_ctx.$attrs, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.options, (item, index) => {
              _push2(ssrRenderComponent(_component_el_checkbox_button, {
                key: index,
                label: item,
                name: item
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.options, (item, index) => {
                return openBlock(), createBlock(_component_el_checkbox_button, {
                  key: index,
                  label: item,
                  name: item
                }, null, 8, ["label", "name"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form-designer/widgets/checkbox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-71662013"]]);
const widgets = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WidgetCheckbox: checkbox,
  WidgetInput: _sfc_main$6,
  WidgetRadio: radio,
  WidgetSelect: select,
  WidgetTextarea: _sfc_main$5
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    formLists: { default: () => [] },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formRef = shallowRef();
    const formData = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const formRules = ref({});
    const getWidgetByName = (name) => {
      return widgets[name];
    };
    const validate = async () => {
      var _a;
      await ((_a = formRef.value) == null ? void 0 : _a.validate());
    };
    watch(
      () => props.formLists,
      async (value) => {
        formRules.value = value == null ? void 0 : value.reduce((prev, item) => {
          formData.value[item.props.field] = void 0;
          if (item.props.isRequired) {
            prev[item.props.field] = [
              {
                required: true,
                message: "\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",
                trigger: "blur"
              }
            ];
          }
          return prev;
        }, {});
        setTimeout(() => {
          var _a;
          (_a = formRef.value) == null ? void 0 : _a.resetFields();
        });
      }
    );
    __expose({
      validate
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      _push(ssrRenderComponent(_component_ElForm, mergeProps({
        ref_key: "formRef",
        ref: formRef
      }, props, {
        rules: unref(formRules),
        model: unref(formData),
        labelPosition: "top",
        onSubmit: () => {
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.formLists, (item) => {
              _push2(ssrRenderComponent(_component_ElFormItem, {
                key: item.id,
                prop: item.props.field,
                label: item.props.title
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(getWidgetByName(item.name)), mergeProps({ ref_for: true }, item.props, {
                      modelValue: unref(formData)[item.props.field],
                      "onUpdate:modelValue": ($event) => unref(formData)[item.props.field] = $event
                    }), null), _parent3, _scopeId2);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(getWidgetByName(item.name)), mergeProps({ ref_for: true }, item.props, {
                        modelValue: unref(formData)[item.props.field],
                        "onUpdate:modelValue": ($event) => unref(formData)[item.props.field] = $event
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.formLists, (item) => {
                return openBlock(), createBlock(_component_ElFormItem, {
                  key: item.id,
                  prop: item.props.field,
                  label: item.props.title
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(getWidgetByName(item.name)), mergeProps({ ref_for: true }, item.props, {
                      modelValue: unref(formData)[item.props.field],
                      "onUpdate:modelValue": ($event) => unref(formData)[item.props.field] = $event
                    }), null, 16, ["modelValue", "onUpdate:modelValue"]))
                  ]),
                  _: 2
                }, 1032, ["prop", "label"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form-designer/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create-panel",
  __ssrInlineRender: true,
  props: {
    modelData: {},
    modelValue: {},
    loading: { type: Boolean }
  },
  emits: [
    "update:modelValue",
    "insert",
    "create",
    "select",
    "update:modelKey"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formDesignerRef = shallowRef();
    const formData = useVModel(props, "modelValue", emit);
    const appStore = useAppStore();
    const handleCreate = async () => {
      var _a;
      try {
        await ((_a = formDesignerRef.value) == null ? void 0 : _a.validate());
      } catch (error) {
        feedback.msgError("\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A");
        return;
      }
      emit("create");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$7;
      const _component_ElButton = ElButton;
      const _component_ElScrollbar = ElScrollbar;
      const _component_FormDesigner = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col p-[16px] flex-1" }, _attrs))} data-v-eddebddc><div class="flex pb-[20px]" data-v-eddebddc><div class="text-lg font-medium flex flex-1 min-w-0 items-center mr-auto" data-v-eddebddc><span class="line-clamp-1" data-v-eddebddc>${ssrInterpolate(_ctx.modelData.name)}</span>`);
      if (unref(appStore).isMobile) {
        _push(ssrRenderComponent(_component_Icon, { name: "el-icon-CaretBottom" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ElButton, {
        link: "",
        type: "primary",
        onClick: ($event) => emit("insert")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u63D2\u5165\u793A\u4F8B `);
          } else {
            return [
              createTextVNode(" \u63D2\u5165\u793A\u4F8B ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 min-h-0" data-v-eddebddc>`);
      _push(ssrRenderComponent(_component_ElScrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="" data-v-eddebddc${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormDesigner, {
              ref_key: "formDesignerRef",
              ref: formDesignerRef,
              modelValue: unref(formData),
              "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null,
              "form-lists": _ctx.modelData.form,
              size: "large"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "" }, [
                createVNode(_component_FormDesigner, {
                  ref_key: "formDesignerRef",
                  ref: formDesignerRef,
                  modelValue: unref(formData),
                  "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null,
                  "form-lists": _ctx.modelData.form,
                  size: "large"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "form-lists"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div data-v-eddebddc><div class="flex flex-col justify-center items-center" data-v-eddebddc>`);
      ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
      if (_ctx.modelData.id) {
        _push(ssrRenderComponent(_component_ElButton, {
          class: "create-btn",
          type: "primary",
          loading: _ctx.loading,
          onClick: handleCreate
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u667A\u80FD\u521B\u4F5C `);
            } else {
              return [
                createTextVNode(" \u667A\u80FD\u521B\u4F5C ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/creation/_components/create-panel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CreatePanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eddebddc"]]);

export { CreatePanel as default };
//# sourceMappingURL=create-panel-DOW-5Uek.mjs.map
