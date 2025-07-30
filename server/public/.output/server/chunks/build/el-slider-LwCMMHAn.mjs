import { defineComponent, reactive, toRefs, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createVNode, withCtx, createElementVNode, toDisplayString, computed, h, provide, createBlock, createCommentVNode, Fragment, renderList, ref, shallowRef, inject, watch, nextTick } from 'vue';
import { E as ElInputNumber } from './el-input-number-DH6NTUUv.mjs';
import { placements } from '@popperjs/core';
import { h as buildProps, j as definePropType, a6 as useSizeProp, k as useAriaProps, i as useNamespace, C as useLocale, aa as useFormItemInputId, v as useFormSize, G as useDeprecated, w as withInstall, $ as UPDATE_MODEL_EVENT, ai as INPUT_EVENT, a7 as CHANGE_EVENT, a9 as useFormItem, l as isNumber, _ as _export_sfc, t as throwError, o as debugWarn, af as EVENT_CODE } from './server.mjs';
import { isString, isArray } from '@vue/shared';
import { E as ElTooltip } from './index-L-VTEUEA.mjs';
import { debounce } from 'lodash-unified';

const sliderContextKey = Symbol("sliderContextKey");
const sliderProps = buildProps({
  modelValue: {
    type: definePropType([Number, Array]),
    default: 0
  },
  id: {
    type: String,
    default: void 0
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    type: Number,
    default: 1
  },
  showInput: Boolean,
  showInputControls: {
    type: Boolean,
    default: true
  },
  size: useSizeProp,
  inputSize: useSizeProp,
  showStops: Boolean,
  showTooltip: {
    type: Boolean,
    default: true
  },
  formatTooltip: {
    type: definePropType(Function),
    default: void 0
  },
  disabled: Boolean,
  range: Boolean,
  vertical: Boolean,
  height: String,
  debounce: {
    type: Number,
    default: 300
  },
  label: {
    type: String,
    default: void 0
  },
  rangeStartLabel: {
    type: String,
    default: void 0
  },
  rangeEndLabel: {
    type: String,
    default: void 0
  },
  formatValueText: {
    type: definePropType(Function),
    default: void 0
  },
  tooltipClass: {
    type: String,
    default: void 0
  },
  placement: {
    type: String,
    values: placements,
    default: "top"
  },
  marks: {
    type: definePropType(Object)
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(["ariaLabel"])
});
const isValidValue = (value) => isNumber(value) || isArray(value) && value.every(isNumber);
const sliderEmits = {
  [UPDATE_MODEL_EVENT]: isValidValue,
  [INPUT_EVENT]: isValidValue,
  [CHANGE_EVENT]: isValidValue
};
const useLifecycle = (props, initData, resetSize) => {
  const sliderWrapper = ref();
  return {
    sliderWrapper
  };
};
const useMarks = (props) => {
  return computed(() => {
    if (!props.marks) {
      return [];
    }
    const marksKeys = Object.keys(props.marks);
    return marksKeys.map(Number.parseFloat).sort((a, b) => a - b).filter((point) => point <= props.max && point >= props.min).map((point) => ({
      point,
      position: (point - props.min) * 100 / (props.max - props.min),
      mark: props.marks[point]
    }));
  });
};
const useSlide = (props, initData, emit) => {
  const { form: elForm, formItem: elFormItem } = useFormItem();
  const slider = shallowRef();
  const firstButton = ref();
  const secondButton = ref();
  const buttonRefs = {
    firstButton,
    secondButton
  };
  const sliderDisabled = computed(() => {
    return props.disabled || (elForm == null ? void 0 : elForm.disabled) || false;
  });
  const minValue = computed(() => {
    return Math.min(initData.firstValue, initData.secondValue);
  });
  const maxValue = computed(() => {
    return Math.max(initData.firstValue, initData.secondValue);
  });
  const barSize = computed(() => {
    return props.range ? `${100 * (maxValue.value - minValue.value) / (props.max - props.min)}%` : `${100 * (initData.firstValue - props.min) / (props.max - props.min)}%`;
  });
  const barStart = computed(() => {
    return props.range ? `${100 * (minValue.value - props.min) / (props.max - props.min)}%` : "0%";
  });
  const runwayStyle = computed(() => {
    return props.vertical ? { height: props.height } : {};
  });
  const barStyle = computed(() => {
    return props.vertical ? {
      height: barSize.value,
      bottom: barStart.value
    } : {
      width: barSize.value,
      left: barStart.value
    };
  });
  const resetSize = () => {
    if (slider.value) {
      initData.sliderSize = slider.value[`client${props.vertical ? "Height" : "Width"}`];
    }
  };
  const getButtonRefByPercent = (percent) => {
    const targetValue = props.min + percent * (props.max - props.min) / 100;
    if (!props.range) {
      return firstButton;
    }
    let buttonRefName;
    if (Math.abs(minValue.value - targetValue) < Math.abs(maxValue.value - targetValue)) {
      buttonRefName = initData.firstValue < initData.secondValue ? "firstButton" : "secondButton";
    } else {
      buttonRefName = initData.firstValue > initData.secondValue ? "firstButton" : "secondButton";
    }
    return buttonRefs[buttonRefName];
  };
  const setPosition = (percent) => {
    const buttonRef = getButtonRefByPercent(percent);
    buttonRef.value.setPosition(percent);
    return buttonRef;
  };
  const setFirstValue = (firstValue) => {
    initData.firstValue = firstValue;
    _emit(props.range ? [minValue.value, maxValue.value] : firstValue);
  };
  const setSecondValue = (secondValue) => {
    initData.secondValue = secondValue;
    if (props.range) {
      _emit([minValue.value, maxValue.value]);
    }
  };
  const _emit = (val) => {
    emit(UPDATE_MODEL_EVENT, val);
    emit(INPUT_EVENT, val);
  };
  const emitChange = async () => {
    await nextTick();
    emit(CHANGE_EVENT, props.range ? [minValue.value, maxValue.value] : props.modelValue);
  };
  const handleSliderPointerEvent = (event) => {
    var _a, _b, _c, _d, _e, _f;
    if (sliderDisabled.value || initData.dragging)
      return;
    resetSize();
    let newPercent = 0;
    if (props.vertical) {
      const clientY = (_c = (_b = (_a = event.touches) == null ? void 0 : _a.item(0)) == null ? void 0 : _b.clientY) != null ? _c : event.clientY;
      const sliderOffsetBottom = slider.value.getBoundingClientRect().bottom;
      newPercent = (sliderOffsetBottom - clientY) / initData.sliderSize * 100;
    } else {
      const clientX = (_f = (_e = (_d = event.touches) == null ? void 0 : _d.item(0)) == null ? void 0 : _e.clientX) != null ? _f : event.clientX;
      const sliderOffsetLeft = slider.value.getBoundingClientRect().left;
      newPercent = (clientX - sliderOffsetLeft) / initData.sliderSize * 100;
    }
    if (newPercent < 0 || newPercent > 100)
      return;
    return setPosition(newPercent);
  };
  const onSliderWrapperPrevent = (event) => {
    var _a, _b;
    if (((_a = buttonRefs["firstButton"].value) == null ? void 0 : _a.dragging) || ((_b = buttonRefs["secondButton"].value) == null ? void 0 : _b.dragging)) {
      event.preventDefault();
    }
  };
  const onSliderDown = async (event) => {
    const buttonRef = handleSliderPointerEvent(event);
    if (buttonRef) {
      await nextTick();
      buttonRef.value.onButtonDown(event);
    }
  };
  const onSliderClick = (event) => {
    const buttonRef = handleSliderPointerEvent(event);
    if (buttonRef) {
      emitChange();
    }
  };
  return {
    elFormItem,
    slider,
    firstButton,
    secondButton,
    sliderDisabled,
    minValue,
    maxValue,
    runwayStyle,
    barStyle,
    resetSize,
    setPosition,
    emitChange,
    onSliderWrapperPrevent,
    onSliderClick,
    onSliderDown,
    setFirstValue,
    setSecondValue
  };
};
const { left, down, right, up, home, end, pageUp, pageDown } = EVENT_CODE;
const useTooltip = (props, formatTooltip, showTooltip) => {
  const tooltip = ref();
  const tooltipVisible = ref(false);
  const enableFormat = computed(() => {
    return formatTooltip.value instanceof Function;
  });
  const formatValue = computed(() => {
    return enableFormat.value && formatTooltip.value(props.modelValue) || props.modelValue;
  });
  const displayTooltip = debounce(() => {
    showTooltip.value && (tooltipVisible.value = true);
  }, 50);
  const hideTooltip = debounce(() => {
    showTooltip.value && (tooltipVisible.value = false);
  }, 50);
  return {
    tooltip,
    tooltipVisible,
    formatValue,
    displayTooltip,
    hideTooltip
  };
};
const useSliderButton = (props, initData, emit) => {
  const {
    disabled,
    min,
    max,
    step,
    showTooltip,
    precision,
    sliderSize,
    formatTooltip,
    emitChange,
    resetSize,
    updateDragging
  } = inject(sliderContextKey);
  const { tooltip, tooltipVisible, formatValue, displayTooltip, hideTooltip } = useTooltip(props, formatTooltip, showTooltip);
  const button = ref();
  const currentPosition = computed(() => {
    return `${(props.modelValue - min.value) / (max.value - min.value) * 100}%`;
  });
  const wrapperStyle = computed(() => {
    return props.vertical ? { bottom: currentPosition.value } : { left: currentPosition.value };
  });
  const handleMouseEnter = () => {
    initData.hovering = true;
    displayTooltip();
  };
  const handleMouseLeave = () => {
    initData.hovering = false;
    if (!initData.dragging) {
      hideTooltip();
    }
  };
  const onButtonDown = (event) => {
    if (disabled.value)
      return;
    event.preventDefault();
    onDragStart(event);
    (void 0).addEventListener("mousemove", onDragging);
    (void 0).addEventListener("touchmove", onDragging);
    (void 0).addEventListener("mouseup", onDragEnd);
    (void 0).addEventListener("touchend", onDragEnd);
    (void 0).addEventListener("contextmenu", onDragEnd);
    button.value.focus();
  };
  const incrementPosition = (amount) => {
    if (disabled.value)
      return;
    initData.newPosition = Number.parseFloat(currentPosition.value) + amount / (max.value - min.value) * 100;
    setPosition(initData.newPosition);
    emitChange();
  };
  const onLeftKeyDown = () => {
    incrementPosition(-step.value);
  };
  const onRightKeyDown = () => {
    incrementPosition(step.value);
  };
  const onPageDownKeyDown = () => {
    incrementPosition(-step.value * 4);
  };
  const onPageUpKeyDown = () => {
    incrementPosition(step.value * 4);
  };
  const onHomeKeyDown = () => {
    if (disabled.value)
      return;
    setPosition(0);
    emitChange();
  };
  const onEndKeyDown = () => {
    if (disabled.value)
      return;
    setPosition(100);
    emitChange();
  };
  const onKeyDown = (event) => {
    let isPreventDefault = true;
    if ([left, down].includes(event.key)) {
      onLeftKeyDown();
    } else if ([right, up].includes(event.key)) {
      onRightKeyDown();
    } else if (event.key === home) {
      onHomeKeyDown();
    } else if (event.key === end) {
      onEndKeyDown();
    } else if (event.key === pageDown) {
      onPageDownKeyDown();
    } else if (event.key === pageUp) {
      onPageUpKeyDown();
    } else {
      isPreventDefault = false;
    }
    isPreventDefault && event.preventDefault();
  };
  const getClientXY = (event) => {
    let clientX;
    let clientY;
    if (event.type.startsWith("touch")) {
      clientY = event.touches[0].clientY;
      clientX = event.touches[0].clientX;
    } else {
      clientY = event.clientY;
      clientX = event.clientX;
    }
    return {
      clientX,
      clientY
    };
  };
  const onDragStart = (event) => {
    initData.dragging = true;
    initData.isClick = true;
    const { clientX, clientY } = getClientXY(event);
    if (props.vertical) {
      initData.startY = clientY;
    } else {
      initData.startX = clientX;
    }
    initData.startPosition = Number.parseFloat(currentPosition.value);
    initData.newPosition = initData.startPosition;
  };
  const onDragging = (event) => {
    if (initData.dragging) {
      initData.isClick = false;
      displayTooltip();
      resetSize();
      let diff;
      const { clientX, clientY } = getClientXY(event);
      if (props.vertical) {
        initData.currentY = clientY;
        diff = (initData.startY - initData.currentY) / sliderSize.value * 100;
      } else {
        initData.currentX = clientX;
        diff = (initData.currentX - initData.startX) / sliderSize.value * 100;
      }
      initData.newPosition = initData.startPosition + diff;
      setPosition(initData.newPosition);
    }
  };
  const onDragEnd = () => {
    if (initData.dragging) {
      setTimeout(() => {
        initData.dragging = false;
        if (!initData.hovering) {
          hideTooltip();
        }
        if (!initData.isClick) {
          setPosition(initData.newPosition);
        }
        emitChange();
      }, 0);
      (void 0).removeEventListener("mousemove", onDragging);
      (void 0).removeEventListener("touchmove", onDragging);
      (void 0).removeEventListener("mouseup", onDragEnd);
      (void 0).removeEventListener("touchend", onDragEnd);
      (void 0).removeEventListener("contextmenu", onDragEnd);
    }
  };
  const setPosition = async (newPosition) => {
    if (newPosition === null || Number.isNaN(+newPosition))
      return;
    if (newPosition < 0) {
      newPosition = 0;
    } else if (newPosition > 100) {
      newPosition = 100;
    }
    const lengthPerStep = 100 / ((max.value - min.value) / step.value);
    const steps = Math.round(newPosition / lengthPerStep);
    let value = steps * lengthPerStep * (max.value - min.value) * 0.01 + min.value;
    value = Number.parseFloat(value.toFixed(precision.value));
    if (value !== props.modelValue) {
      emit(UPDATE_MODEL_EVENT, value);
    }
    if (!initData.dragging && props.modelValue !== initData.oldValue) {
      initData.oldValue = props.modelValue;
    }
    await nextTick();
    initData.dragging && displayTooltip();
    tooltip.value.updatePopper();
  };
  watch(() => initData.dragging, (val) => {
    updateDragging(val);
  });
  return {
    disabled,
    button,
    tooltip,
    tooltipVisible,
    showTooltip,
    wrapperStyle,
    formatValue,
    handleMouseEnter,
    handleMouseLeave,
    onButtonDown,
    onKeyDown,
    setPosition
  };
};
const useStops = (props, initData, minValue, maxValue) => {
  const stops = computed(() => {
    if (!props.showStops || props.min > props.max)
      return [];
    if (props.step === 0) {
      return [];
    }
    const stopCount = (props.max - props.min) / props.step;
    const stepWidth = 100 * props.step / (props.max - props.min);
    const result = Array.from({ length: stopCount - 1 }).map((_, index) => (index + 1) * stepWidth);
    if (props.range) {
      return result.filter((step) => {
        return step < 100 * (minValue.value - props.min) / (props.max - props.min) || step > 100 * (maxValue.value - props.min) / (props.max - props.min);
      });
    } else {
      return result.filter((step) => step > 100 * (initData.firstValue - props.min) / (props.max - props.min));
    }
  });
  const getStopStyle = (position) => {
    return props.vertical ? { bottom: `${position}%` } : { left: `${position}%` };
  };
  return {
    stops,
    getStopStyle
  };
};
const useWatch = (props, initData, minValue, maxValue, emit, elFormItem) => {
  const _emit = (val) => {
    emit(UPDATE_MODEL_EVENT, val);
    emit(INPUT_EVENT, val);
  };
  const valueChanged = () => {
    if (props.range) {
      return ![minValue.value, maxValue.value].every((item, index) => item === initData.oldValue[index]);
    } else {
      return props.modelValue !== initData.oldValue;
    }
  };
  const setValues = () => {
    var _a, _b;
    if (props.min > props.max) {
      throwError("Slider", "min should not be greater than max.");
    }
    const val = props.modelValue;
    if (props.range && Array.isArray(val)) {
      if (val[1] < props.min) {
        _emit([props.min, props.min]);
      } else if (val[0] > props.max) {
        _emit([props.max, props.max]);
      } else if (val[0] < props.min) {
        _emit([props.min, val[1]]);
      } else if (val[1] > props.max) {
        _emit([val[0], props.max]);
      } else {
        initData.firstValue = val[0];
        initData.secondValue = val[1];
        if (valueChanged()) {
          if (props.validateEvent) {
            (_a = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change").catch((err) => debugWarn());
          }
          initData.oldValue = val.slice();
        }
      }
    } else if (!props.range && typeof val === "number" && !Number.isNaN(val)) {
      if (val < props.min) {
        _emit(props.min);
      } else if (val > props.max) {
        _emit(props.max);
      } else {
        initData.firstValue = val;
        if (valueChanged()) {
          if (props.validateEvent) {
            (_b = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _b.call(elFormItem, "change").catch((err) => debugWarn());
          }
          initData.oldValue = val;
        }
      }
    }
  };
  setValues();
  watch(() => initData.dragging, (val) => {
    if (!val) {
      setValues();
    }
  });
  watch(() => props.modelValue, (val, oldVal) => {
    if (initData.dragging || Array.isArray(val) && Array.isArray(oldVal) && val.every((item, index) => item === oldVal[index]) && initData.firstValue === val[0] && initData.secondValue === val[1]) {
      return;
    }
    setValues();
  }, {
    deep: true
  });
  watch(() => [props.min, props.max], () => {
    setValues();
  });
};
const sliderButtonProps = buildProps({
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: Boolean,
  tooltipClass: String,
  placement: {
    type: String,
    values: placements,
    default: "top"
  }
});
const sliderButtonEmits = {
  [UPDATE_MODEL_EVENT]: (value) => isNumber(value)
};
const _hoisted_1$1 = ["tabindex"];
const __default__$1 = defineComponent({
  name: "ElSliderButton"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: sliderButtonProps,
  emits: sliderButtonEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns = useNamespace("slider");
    const initData = reactive({
      hovering: false,
      dragging: false,
      isClick: false,
      startX: 0,
      currentX: 0,
      startY: 0,
      currentY: 0,
      startPosition: 0,
      newPosition: 0,
      oldValue: props.modelValue
    });
    const {
      disabled,
      button,
      tooltip,
      showTooltip,
      tooltipVisible,
      wrapperStyle,
      formatValue,
      handleMouseEnter,
      handleMouseLeave,
      onButtonDown,
      onKeyDown,
      setPosition
    } = useSliderButton(props, initData, emit);
    const { hovering, dragging } = toRefs(initData);
    expose({
      onButtonDown,
      onKeyDown,
      setPosition,
      hovering,
      dragging
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "button",
        ref: button,
        class: normalizeClass([unref(ns).e("button-wrapper"), { hover: unref(hovering), dragging: unref(dragging) }]),
        style: normalizeStyle(unref(wrapperStyle)),
        tabindex: unref(disabled) ? -1 : 0,
        onMouseenter: _cache[0] || (_cache[0] = (...args) => unref(handleMouseEnter) && unref(handleMouseEnter)(...args)),
        onMouseleave: _cache[1] || (_cache[1] = (...args) => unref(handleMouseLeave) && unref(handleMouseLeave)(...args)),
        onMousedown: _cache[2] || (_cache[2] = (...args) => unref(onButtonDown) && unref(onButtonDown)(...args)),
        onTouchstart: _cache[3] || (_cache[3] = (...args) => unref(onButtonDown) && unref(onButtonDown)(...args)),
        onFocus: _cache[4] || (_cache[4] = (...args) => unref(handleMouseEnter) && unref(handleMouseEnter)(...args)),
        onBlur: _cache[5] || (_cache[5] = (...args) => unref(handleMouseLeave) && unref(handleMouseLeave)(...args)),
        onKeydown: _cache[6] || (_cache[6] = (...args) => unref(onKeyDown) && unref(onKeyDown)(...args))
      }, [
        createVNode(unref(ElTooltip), {
          ref_key: "tooltip",
          ref: tooltip,
          visible: unref(tooltipVisible),
          placement: _ctx.placement,
          "fallback-placements": ["top", "bottom", "right", "left"],
          "stop-popper-mouse-event": false,
          "popper-class": _ctx.tooltipClass,
          disabled: !unref(showTooltip),
          persistent: ""
        }, {
          content: withCtx(() => [
            createElementVNode("span", null, toDisplayString(unref(formatValue)), 1)
          ]),
          default: withCtx(() => [
            createElementVNode("div", {
              class: normalizeClass([unref(ns).e("button"), { hover: unref(hovering), dragging: unref(dragging) }])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["visible", "placement", "popper-class", "disabled"])
      ], 46, _hoisted_1$1);
    };
  }
});
var SliderButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "button.vue"]]);
const sliderMarkerProps = buildProps({
  mark: {
    type: definePropType([String, Object]),
    default: void 0
  }
});
var SliderMarker = defineComponent({
  name: "ElSliderMarker",
  props: sliderMarkerProps,
  setup(props) {
    const ns = useNamespace("slider");
    const label = computed(() => {
      return isString(props.mark) ? props.mark : props.mark.label;
    });
    const style = computed(() => isString(props.mark) ? void 0 : props.mark.style);
    return () => h("div", {
      class: ns.e("marks-text"),
      style: style.value
    }, label.value);
  }
});
const _hoisted_1 = ["id", "role", "aria-label", "aria-labelledby"];
const _hoisted_2 = { key: 1 };
const __default__ = defineComponent({
  name: "ElSlider"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: sliderProps,
  emits: sliderEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns = useNamespace("slider");
    const { t } = useLocale();
    const initData = reactive({
      firstValue: 0,
      secondValue: 0,
      oldValue: 0,
      dragging: false,
      sliderSize: 1
    });
    const {
      elFormItem,
      slider,
      firstButton,
      secondButton,
      sliderDisabled,
      minValue,
      maxValue,
      runwayStyle,
      barStyle,
      resetSize,
      emitChange,
      onSliderWrapperPrevent,
      onSliderClick,
      onSliderDown,
      setFirstValue,
      setSecondValue
    } = useSlide(props, initData, emit);
    const { stops, getStopStyle } = useStops(props, initData, minValue, maxValue);
    const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: elFormItem
    });
    const sliderWrapperSize = useFormSize();
    const sliderInputSize = computed(() => props.inputSize || sliderWrapperSize.value);
    const groupLabel = computed(() => {
      return props.label || props.ariaLabel || t("el.slider.defaultLabel", {
        min: props.min,
        max: props.max
      });
    });
    const firstButtonLabel = computed(() => {
      if (props.range) {
        return props.rangeStartLabel || t("el.slider.defaultRangeStartLabel");
      } else {
        return groupLabel.value;
      }
    });
    const firstValueText = computed(() => {
      return props.formatValueText ? props.formatValueText(firstValue.value) : `${firstValue.value}`;
    });
    const secondButtonLabel = computed(() => {
      return props.rangeEndLabel || t("el.slider.defaultRangeEndLabel");
    });
    const secondValueText = computed(() => {
      return props.formatValueText ? props.formatValueText(secondValue.value) : `${secondValue.value}`;
    });
    const sliderKls = computed(() => [
      ns.b(),
      ns.m(sliderWrapperSize.value),
      ns.is("vertical", props.vertical),
      { [ns.m("with-input")]: props.showInput }
    ]);
    const markList = useMarks(props);
    useWatch(props, initData, minValue, maxValue, emit, elFormItem);
    const precision = computed(() => {
      const precisions = [props.min, props.max, props.step].map((item) => {
        const decimal = `${item}`.split(".")[1];
        return decimal ? decimal.length : 0;
      });
      return Math.max.apply(null, precisions);
    });
    const { sliderWrapper } = useLifecycle();
    const { firstValue, secondValue, sliderSize } = toRefs(initData);
    const updateDragging = (val) => {
      initData.dragging = val;
    };
    provide(sliderContextKey, {
      ...toRefs(props),
      sliderSize,
      disabled: sliderDisabled,
      precision,
      emitChange,
      resetSize,
      updateDragging
    });
    useDeprecated({
      from: "label",
      replacement: "aria-label",
      version: "2.8.0",
      scope: "el-slider",
      ref: "https://element-plus.org/en-US/component/slider.html"
    }, computed(() => !!props.label));
    expose({
      onSliderClick
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("div", {
        id: _ctx.range ? unref(inputId) : void 0,
        ref_key: "sliderWrapper",
        ref: sliderWrapper,
        class: normalizeClass(unref(sliderKls)),
        role: _ctx.range ? "group" : void 0,
        "aria-label": _ctx.range && !unref(isLabeledByFormItem) ? unref(groupLabel) : void 0,
        "aria-labelledby": _ctx.range && unref(isLabeledByFormItem) ? (_a = unref(elFormItem)) == null ? void 0 : _a.labelId : void 0,
        onTouchstart: _cache[2] || (_cache[2] = (...args) => unref(onSliderWrapperPrevent) && unref(onSliderWrapperPrevent)(...args)),
        onTouchmove: _cache[3] || (_cache[3] = (...args) => unref(onSliderWrapperPrevent) && unref(onSliderWrapperPrevent)(...args))
      }, [
        createElementVNode("div", {
          ref_key: "slider",
          ref: slider,
          class: normalizeClass([
            unref(ns).e("runway"),
            { "show-input": _ctx.showInput && !_ctx.range },
            unref(ns).is("disabled", unref(sliderDisabled))
          ]),
          style: normalizeStyle(unref(runwayStyle)),
          onMousedown: _cache[0] || (_cache[0] = (...args) => unref(onSliderDown) && unref(onSliderDown)(...args)),
          onTouchstart: _cache[1] || (_cache[1] = (...args) => unref(onSliderDown) && unref(onSliderDown)(...args))
        }, [
          createElementVNode("div", {
            class: normalizeClass(unref(ns).e("bar")),
            style: normalizeStyle(unref(barStyle))
          }, null, 6),
          createVNode(SliderButton, {
            id: !_ctx.range ? unref(inputId) : void 0,
            ref_key: "firstButton",
            ref: firstButton,
            "model-value": unref(firstValue),
            vertical: _ctx.vertical,
            "tooltip-class": _ctx.tooltipClass,
            placement: _ctx.placement,
            role: "slider",
            "aria-label": _ctx.range || !unref(isLabeledByFormItem) ? unref(firstButtonLabel) : void 0,
            "aria-labelledby": !_ctx.range && unref(isLabeledByFormItem) ? (_b = unref(elFormItem)) == null ? void 0 : _b.labelId : void 0,
            "aria-valuemin": _ctx.min,
            "aria-valuemax": _ctx.range ? unref(secondValue) : _ctx.max,
            "aria-valuenow": unref(firstValue),
            "aria-valuetext": unref(firstValueText),
            "aria-orientation": _ctx.vertical ? "vertical" : "horizontal",
            "aria-disabled": unref(sliderDisabled),
            "onUpdate:modelValue": unref(setFirstValue)
          }, null, 8, ["id", "model-value", "vertical", "tooltip-class", "placement", "aria-label", "aria-labelledby", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-orientation", "aria-disabled", "onUpdate:modelValue"]),
          _ctx.range ? (openBlock(), createBlock(SliderButton, {
            key: 0,
            ref_key: "secondButton",
            ref: secondButton,
            "model-value": unref(secondValue),
            vertical: _ctx.vertical,
            "tooltip-class": _ctx.tooltipClass,
            placement: _ctx.placement,
            role: "slider",
            "aria-label": unref(secondButtonLabel),
            "aria-valuemin": unref(firstValue),
            "aria-valuemax": _ctx.max,
            "aria-valuenow": unref(secondValue),
            "aria-valuetext": unref(secondValueText),
            "aria-orientation": _ctx.vertical ? "vertical" : "horizontal",
            "aria-disabled": unref(sliderDisabled),
            "onUpdate:modelValue": unref(setSecondValue)
          }, null, 8, ["model-value", "vertical", "tooltip-class", "placement", "aria-label", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-orientation", "aria-disabled", "onUpdate:modelValue"])) : createCommentVNode("v-if", true),
          _ctx.showStops ? (openBlock(), createElementBlock("div", _hoisted_2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(stops), (item, key) => {
              return openBlock(), createElementBlock("div", {
                key,
                class: normalizeClass(unref(ns).e("stop")),
                style: normalizeStyle(unref(getStopStyle)(item))
              }, null, 6);
            }), 128))
          ])) : createCommentVNode("v-if", true),
          unref(markList).length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createElementVNode("div", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(markList), (item, key) => {
                return openBlock(), createElementBlock("div", {
                  key,
                  style: normalizeStyle(unref(getStopStyle)(item.position)),
                  class: normalizeClass([unref(ns).e("stop"), unref(ns).e("marks-stop")])
                }, null, 6);
              }), 128))
            ]),
            createElementVNode("div", {
              class: normalizeClass(unref(ns).e("marks"))
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(markList), (item, key) => {
                return openBlock(), createBlock(unref(SliderMarker), {
                  key,
                  mark: item.mark,
                  style: normalizeStyle(unref(getStopStyle)(item.position))
                }, null, 8, ["mark", "style"]);
              }), 128))
            ], 2)
          ], 64)) : createCommentVNode("v-if", true)
        ], 38),
        _ctx.showInput && !_ctx.range ? (openBlock(), createBlock(unref(ElInputNumber), {
          key: 0,
          ref: "input",
          "model-value": unref(firstValue),
          class: normalizeClass(unref(ns).e("input")),
          step: _ctx.step,
          disabled: unref(sliderDisabled),
          controls: _ctx.showInputControls,
          min: _ctx.min,
          max: _ctx.max,
          debounce: _ctx.debounce,
          size: unref(sliderInputSize),
          "onUpdate:modelValue": unref(setFirstValue),
          onChange: unref(emitChange)
        }, null, 8, ["model-value", "class", "step", "disabled", "controls", "min", "max", "debounce", "size", "onUpdate:modelValue", "onChange"])) : createCommentVNode("v-if", true)
      ], 42, _hoisted_1);
    };
  }
});
var Slider = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "slider.vue"]]);
const ElSlider = withInstall(Slider);

export { ElSlider as E };
//# sourceMappingURL=el-slider-LwCMMHAn.mjs.map
