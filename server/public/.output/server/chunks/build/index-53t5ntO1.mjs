import { defineComponent, useSlots, computed, openBlock, createBlock, resolveDynamicComponent, unref, normalizeClass, withCtx, createElementVNode, withDirectives, createElementBlock, isRef, withModifiers, vModelCheckbox, renderSlot, Fragment, createTextVNode, toDisplayString, createCommentVNode, inject, normalizeStyle, provide, toRefs, watch, nextTick, getCurrentInstance, ref, toRaw } from 'vue';
import { a6 as useSizeProp, k as useAriaProps, i as useNamespace, h as buildProps, j as definePropType, a9 as useFormItem, aa as useFormItemInputId, G as useDeprecated, o as debugWarn, w as withInstall, q as withNoopInstall, $ as UPDATE_MODEL_EVENT, l as isNumber, a0 as isBoolean, b2 as isPropAbsent, _ as _export_sfc, aj as isUndefined, a8 as useFormDisabled, v as useFormSize } from './server.mjs';
import { isString, isArray, isObject } from '@vue/shared';
import { pick, isEqual } from 'lodash-unified';

const checkboxProps = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  value: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueValue: {
    type: [String, Number],
    default: void 0
  },
  falseValue: {
    type: [String, Number],
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: useSizeProp,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(["ariaControls"])
};
const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val),
  change: (val) => isString(val) || isNumber(val) || isBoolean(val)
};
const checkboxGroupContextKey = Symbol("checkboxGroupContextKey");
const useCheckboxDisabled = ({
  model,
  isChecked
}) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isLimitDisabled = computed(() => {
    var _a, _b;
    const max = (_a = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a.value;
    const min = (_b = checkboxGroup == null ? void 0 : checkboxGroup.min) == null ? void 0 : _b.value;
    return !isUndefined(max) && model.value.length >= max && !isChecked.value || !isUndefined(min) && model.value.length <= min && isChecked.value;
  });
  const isDisabled = useFormDisabled(computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.disabled.value) || isLimitDisabled.value));
  return {
    isDisabled,
    isLimitDisabled
  };
};
const useCheckboxEvent = (props, {
  model,
  isLimitExceeded,
  hasOwnLabel,
  isDisabled,
  isLabeledByFormItem
}) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const { formItem } = useFormItem();
  const { emit } = getCurrentInstance();
  function getLabeledValue(value) {
    var _a, _b, _c, _d;
    return [true, props.trueValue, props.trueLabel].includes(value) ? (_b = (_a = props.trueValue) != null ? _a : props.trueLabel) != null ? _b : true : (_d = (_c = props.falseValue) != null ? _c : props.falseLabel) != null ? _d : false;
  }
  function emitChangeEvent(checked, e) {
    emit("change", getLabeledValue(checked), e);
  }
  function handleChange(e) {
    if (isLimitExceeded.value)
      return;
    const target = e.target;
    emit("change", getLabeledValue(target.checked), e);
  }
  async function onClickRoot(e) {
    if (isLimitExceeded.value)
      return;
    if (!hasOwnLabel.value && !isDisabled.value && isLabeledByFormItem.value) {
      const eventTargets = e.composedPath();
      const hasLabel = eventTargets.some((item) => item.tagName === "LABEL");
      if (!hasLabel) {
        model.value = getLabeledValue([false, props.falseValue, props.falseLabel].includes(model.value));
        await nextTick();
        emitChangeEvent(model.value, e);
      }
    }
  }
  const validateEvent = computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.validateEvent) || props.validateEvent);
  watch(() => props.modelValue, () => {
    if (validateEvent.value) {
      formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
    }
  });
  return {
    handleChange,
    onClickRoot
  };
};
const useCheckboxModel = (props) => {
  const selfModel = ref(false);
  const { emit } = getCurrentInstance();
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isGroup = computed(() => isUndefined(checkboxGroup) === false);
  const isLimitExceeded = ref(false);
  const model = computed({
    get() {
      var _a, _b;
      return isGroup.value ? (_a = checkboxGroup == null ? void 0 : checkboxGroup.modelValue) == null ? void 0 : _a.value : (_b = props.modelValue) != null ? _b : selfModel.value;
    },
    set(val) {
      var _a, _b;
      if (isGroup.value && isArray(val)) {
        isLimitExceeded.value = ((_a = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a.value) !== void 0 && val.length > (checkboxGroup == null ? void 0 : checkboxGroup.max.value) && val.length > model.value.length;
        isLimitExceeded.value === false && ((_b = checkboxGroup == null ? void 0 : checkboxGroup.changeEvent) == null ? void 0 : _b.call(checkboxGroup, val));
      } else {
        emit(UPDATE_MODEL_EVENT, val);
        selfModel.value = val;
      }
    }
  });
  return {
    model,
    isGroup,
    isLimitExceeded
  };
};
const useCheckboxStatus = (props, slots, { model }) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isFocused = ref(false);
  const actualValue = computed(() => {
    if (!isPropAbsent(props.value)) {
      return props.value;
    }
    return props.label;
  });
  const isChecked = computed(() => {
    const value = model.value;
    if (isBoolean(value)) {
      return value;
    } else if (isArray(value)) {
      if (isObject(actualValue.value)) {
        return value.map(toRaw).some((o) => isEqual(o, actualValue.value));
      } else {
        return value.map(toRaw).includes(actualValue.value);
      }
    } else if (value !== null && value !== void 0) {
      return value === props.trueValue || value === props.trueLabel;
    } else {
      return !!value;
    }
  });
  const checkboxButtonSize = useFormSize(computed(() => {
    var _a;
    return (_a = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a.value;
  }), {
    prop: true
  });
  const checkboxSize = useFormSize(computed(() => {
    var _a;
    return (_a = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a.value;
  }));
  const hasOwnLabel = computed(() => {
    return !!slots.default || !isPropAbsent(actualValue.value);
  });
  return {
    checkboxButtonSize,
    isChecked,
    isFocused,
    checkboxSize,
    hasOwnLabel,
    actualValue
  };
};
const useCheckbox = (props, slots) => {
  const { formItem: elFormItem } = useFormItem();
  const { model, isGroup, isLimitExceeded } = useCheckboxModel(props);
  const {
    isFocused,
    isChecked,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel,
    actualValue
  } = useCheckboxStatus(props, slots, { model });
  const { isDisabled } = useCheckboxDisabled({ model, isChecked });
  const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: elFormItem,
    disableIdGeneration: hasOwnLabel,
    disableIdManagement: isGroup
  });
  const { handleChange, onClickRoot } = useCheckboxEvent(props, {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
    isLabeledByFormItem
  });
  const setStoreValue = () => {
    function addToStore() {
      var _a, _b;
      if (isArray(model.value) && !model.value.includes(actualValue.value)) {
        model.value.push(actualValue.value);
      } else {
        model.value = (_b = (_a = props.trueValue) != null ? _a : props.trueLabel) != null ? _b : true;
      }
    }
    props.checked && addToStore();
  };
  setStoreValue();
  useDeprecated({
    from: "controls",
    replacement: "aria-controls",
    version: "2.8.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, computed(() => !!props.controls));
  useDeprecated({
    from: "label act as value",
    replacement: "value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, computed(() => isGroup.value && isPropAbsent(props.value)));
  useDeprecated({
    from: "true-label",
    replacement: "true-value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, computed(() => !!props.trueLabel));
  useDeprecated({
    from: "false-label",
    replacement: "false-value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, computed(() => !!props.falseLabel));
  return {
    inputId,
    isLabeledByFormItem,
    isChecked,
    isDisabled,
    isFocused,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel,
    model,
    actualValue,
    handleChange,
    onClickRoot
  };
};
const _hoisted_1$1 = ["id", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_2$1 = ["id", "indeterminate", "disabled", "value", "name", "tabindex"];
const __default__$2 = defineComponent({
  name: "ElCheckbox"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const {
      inputId,
      isLabeledByFormItem,
      isChecked,
      isDisabled,
      isFocused,
      checkboxSize,
      hasOwnLabel,
      model,
      actualValue,
      handleChange,
      onClickRoot
    } = useCheckbox(props, slots);
    const ns = useNamespace("checkbox");
    const compKls = computed(() => {
      return [
        ns.b(),
        ns.m(checkboxSize.value),
        ns.is("disabled", isDisabled.value),
        ns.is("bordered", props.border),
        ns.is("checked", isChecked.value)
      ];
    });
    const spanKls = computed(() => {
      return [
        ns.e("input"),
        ns.is("disabled", isDisabled.value),
        ns.is("checked", isChecked.value),
        ns.is("indeterminate", props.indeterminate),
        ns.is("focus", isFocused.value)
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(!unref(hasOwnLabel) && unref(isLabeledByFormItem) ? "span" : "label"), {
        class: normalizeClass(unref(compKls)),
        "aria-controls": _ctx.indeterminate ? _ctx.controls || _ctx.ariaControls : null,
        onClick: unref(onClickRoot)
      }, {
        default: withCtx(() => {
          var _a, _b;
          return [
            createElementVNode("span", {
              class: normalizeClass(unref(spanKls))
            }, [
              _ctx.trueValue || _ctx.falseValue || _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
                key: 0,
                id: unref(inputId),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
                class: normalizeClass(unref(ns).e("original")),
                type: "checkbox",
                indeterminate: _ctx.indeterminate,
                name: _ctx.name,
                tabindex: _ctx.tabindex,
                disabled: unref(isDisabled),
                "true-value": (_a = _ctx.trueValue) != null ? _a : _ctx.trueLabel,
                "false-value": (_b = _ctx.falseValue) != null ? _b : _ctx.falseLabel,
                onChange: _cache[1] || (_cache[1] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
                onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
                onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false),
                onClick: _cache[4] || (_cache[4] = withModifiers(() => {
                }, ["stop"]))
              }, null, 42, _hoisted_1$1)), [
                [vModelCheckbox, unref(model)]
              ]) : withDirectives((openBlock(), createElementBlock("input", {
                key: 1,
                id: unref(inputId),
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(model) ? model.value = $event : null),
                class: normalizeClass(unref(ns).e("original")),
                type: "checkbox",
                indeterminate: _ctx.indeterminate,
                disabled: unref(isDisabled),
                value: unref(actualValue),
                name: _ctx.name,
                tabindex: _ctx.tabindex,
                onChange: _cache[6] || (_cache[6] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
                onFocus: _cache[7] || (_cache[7] = ($event) => isFocused.value = true),
                onBlur: _cache[8] || (_cache[8] = ($event) => isFocused.value = false),
                onClick: _cache[9] || (_cache[9] = withModifiers(() => {
                }, ["stop"]))
              }, null, 42, _hoisted_2$1)), [
                [vModelCheckbox, unref(model)]
              ]),
              createElementVNode("span", {
                class: normalizeClass(unref(ns).e("inner"))
              }, null, 2)
            ], 2),
            unref(hasOwnLabel) ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(unref(ns).e("label"))
            }, [
              renderSlot(_ctx.$slots, "default"),
              !_ctx.$slots.default ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(_ctx.label), 1)
              ], 64)) : createCommentVNode("v-if", true)
            ], 2)) : createCommentVNode("v-if", true)
          ];
        }),
        _: 3
      }, 8, ["class", "aria-controls", "onClick"]);
    };
  }
});
var Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "checkbox.vue"]]);
const _hoisted_1 = ["name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_2 = ["name", "tabindex", "disabled", "value"];
const __default__$1 = defineComponent({
  name: "ElCheckboxButton"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const {
      isFocused,
      isChecked,
      isDisabled,
      checkboxButtonSize,
      model,
      actualValue,
      handleChange
    } = useCheckbox(props, slots);
    const checkboxGroup = inject(checkboxGroupContextKey, void 0);
    const ns = useNamespace("checkbox");
    const activeStyle = computed(() => {
      var _a, _b, _c, _d;
      const fillValue = (_b = (_a = checkboxGroup == null ? void 0 : checkboxGroup.fill) == null ? void 0 : _a.value) != null ? _b : "";
      return {
        backgroundColor: fillValue,
        borderColor: fillValue,
        color: (_d = (_c = checkboxGroup == null ? void 0 : checkboxGroup.textColor) == null ? void 0 : _c.value) != null ? _d : "",
        boxShadow: fillValue ? `-1px 0 0 0 ${fillValue}` : void 0
      };
    });
    const labelKls = computed(() => {
      return [
        ns.b("button"),
        ns.bm("button", checkboxButtonSize.value),
        ns.is("disabled", isDisabled.value),
        ns.is("checked", isChecked.value),
        ns.is("focus", isFocused.value)
      ];
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(unref(labelKls))
      }, [
        _ctx.trueValue || _ctx.falseValue || _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
          key: 0,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
          class: normalizeClass(unref(ns).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: unref(isDisabled),
          "true-value": (_a = _ctx.trueValue) != null ? _a : _ctx.trueLabel,
          "false-value": (_b = _ctx.falseValue) != null ? _b : _ctx.falseLabel,
          onChange: _cache[1] || (_cache[1] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
          onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false),
          onClick: _cache[4] || (_cache[4] = withModifiers(() => {
          }, ["stop"]))
        }, null, 42, _hoisted_1)), [
          [vModelCheckbox, unref(model)]
        ]) : withDirectives((openBlock(), createElementBlock("input", {
          key: 1,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(model) ? model.value = $event : null),
          class: normalizeClass(unref(ns).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: unref(isDisabled),
          value: unref(actualValue),
          onChange: _cache[6] || (_cache[6] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onFocus: _cache[7] || (_cache[7] = ($event) => isFocused.value = true),
          onBlur: _cache[8] || (_cache[8] = ($event) => isFocused.value = false),
          onClick: _cache[9] || (_cache[9] = withModifiers(() => {
          }, ["stop"]))
        }, null, 42, _hoisted_2)), [
          [vModelCheckbox, unref(model)]
        ]),
        _ctx.$slots.default || _ctx.label ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass(unref(ns).be("button", "inner")),
          style: normalizeStyle(unref(isChecked) ? unref(activeStyle) : void 0)
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 6)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var CheckboxButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "checkbox-button.vue"]]);
const checkboxGroupProps = buildProps({
  modelValue: {
    type: definePropType(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: useSizeProp,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(["ariaLabel"])
});
const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isArray(val),
  change: (val) => isArray(val)
};
const __default__ = defineComponent({
  name: "ElCheckboxGroup"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: checkboxGroupProps,
  emits: checkboxGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("checkbox");
    const { formItem } = useFormItem();
    const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const changeEvent = async (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      await nextTick();
      emit("change", value);
    };
    const modelValue = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    provide(checkboxGroupContextKey, {
      ...pick(toRefs(props), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue,
      changeEvent
    });
    useDeprecated({
      from: "label",
      replacement: "aria-label",
      version: "2.8.0",
      scope: "el-checkbox-group",
      ref: "https://element-plus.org/en-US/component/checkbox.html"
    }, computed(() => !!props.label));
    watch(() => props.modelValue, () => {
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
      }
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        id: unref(groupId),
        class: normalizeClass(unref(ns).b("group")),
        role: "group",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.label || _ctx.ariaLabel || "checkbox-group" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? (_a = unref(formItem)) == null ? void 0 : _a.labelId : void 0
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var CheckboxGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "checkbox-group.vue"]]);
const ElCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup
});
const ElCheckboxButton = withNoopInstall(CheckboxButton);
const ElCheckboxGroup = withNoopInstall(CheckboxGroup);

export { ElCheckbox as E, ElCheckboxGroup as a, ElCheckboxButton as b };
//# sourceMappingURL=index-53t5ntO1.mjs.map
