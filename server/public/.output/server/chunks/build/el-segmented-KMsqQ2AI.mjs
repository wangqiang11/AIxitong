import { defineComponent, ref, reactive, computed, watch, openBlock, createElementBlock, unref, normalizeClass, createElementVNode, normalizeStyle, Fragment, renderList, renderSlot, createTextVNode, toDisplayString } from 'vue';
import { useActiveElement, useResizeObserver } from '@vueuse/core';
import { h as buildProps, j as definePropType, a6 as useSizeProp, k as useAriaProps, i as useNamespace, a1 as useId, v as useFormSize, a8 as useFormDisabled, a9 as useFormItem, aa as useFormItemInputId, o as debugWarn, w as withInstall, $ as UPDATE_MODEL_EVENT, l as isNumber, a7 as CHANGE_EVENT, _ as _export_sfc } from './server.mjs';
import { isString, isObject } from '@vue/shared';

const segmentedProps = buildProps({
  options: {
    type: definePropType(Array),
    default: () => []
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: void 0
  },
  block: Boolean,
  size: useSizeProp,
  disabled: Boolean,
  validateEvent: {
    type: Boolean,
    default: true
  },
  id: String,
  name: String,
  ...useAriaProps(["ariaLabel"])
});
const segmentedEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val),
  [CHANGE_EVENT]: (val) => isString(val) || isNumber(val)
};
const _hoisted_1 = ["id", "aria-label", "aria-labelledby"];
const _hoisted_2 = ["name", "disabled", "checked", "onChange"];
const __default__ = defineComponent({
  name: "ElSegmented"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: segmentedProps,
  emits: segmentedEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("segmented");
    const segmentedId = useId();
    const segmentedSize = useFormSize();
    const _disabled = useFormDisabled();
    const { formItem } = useFormItem();
    const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const segmentedRef = ref(null);
    const activeElement = useActiveElement();
    const state = reactive({
      isInit: false,
      width: 0,
      translateX: 0,
      disabled: false,
      focusVisible: false
    });
    const handleChange = (item) => {
      const value = getValue(item);
      emit(UPDATE_MODEL_EVENT, value);
      emit(CHANGE_EVENT, value);
    };
    const getValue = (item) => {
      return isObject(item) ? item.value : item;
    };
    const getLabel = (item) => {
      return isObject(item) ? item.label : item;
    };
    const getDisabled = (item) => {
      return !!(_disabled.value || (isObject(item) ? item.disabled : false));
    };
    const getSelected = (item) => {
      return props.modelValue === getValue(item);
    };
    const getOption = (value) => {
      return props.options.find((item) => getValue(item) === value);
    };
    const getItemCls = (item) => {
      return [
        ns.e("item"),
        ns.is("selected", getSelected(item)),
        ns.is("disabled", getDisabled(item))
      ];
    };
    const updateSelect = () => {
      if (!segmentedRef.value)
        return;
      const selectedItem = segmentedRef.value.querySelector(".is-selected");
      const selectedItemInput = segmentedRef.value.querySelector(".is-selected input");
      if (!selectedItem || !selectedItemInput) {
        state.width = 0;
        state.translateX = 0;
        state.disabled = false;
        state.focusVisible = false;
        return;
      }
      const rect = selectedItem.getBoundingClientRect();
      state.isInit = true;
      state.width = rect.width;
      state.translateX = selectedItem.offsetLeft;
      state.disabled = getDisabled(getOption(props.modelValue));
      try {
        state.focusVisible = selectedItemInput.matches(":focus-visible");
      } catch (e) {
      }
    };
    const segmentedCls = computed(() => [
      ns.b(),
      ns.m(segmentedSize.value),
      ns.is("block", props.block)
    ]);
    const selectedStyle = computed(() => ({
      width: `${state.width}px`,
      transform: `translateX(${state.translateX}px)`,
      display: state.isInit ? "block" : "none"
    }));
    const selectedCls = computed(() => [
      ns.e("item-selected"),
      ns.is("disabled", state.disabled),
      ns.is("focus-visible", state.focusVisible)
    ]);
    const name = computed(() => {
      return props.name || segmentedId.value;
    });
    useResizeObserver(segmentedRef, updateSelect);
    watch(activeElement, updateSelect);
    watch(() => props.modelValue, () => {
      var _a;
      updateSelect();
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "change").catch((err) => debugWarn());
      }
    }, {
      flush: "post"
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: unref(inputId),
        ref_key: "segmentedRef",
        ref: segmentedRef,
        class: normalizeClass(unref(segmentedCls)),
        role: "radiogroup",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.ariaLabel || "segmented" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? unref(formItem).labelId : void 0
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("group"))
        }, [
          createElementVNode("div", {
            style: normalizeStyle(unref(selectedStyle)),
            class: normalizeClass(unref(selectedCls))
          }, null, 6),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.options, (item, index) => {
            return openBlock(), createElementBlock("label", {
              key: index,
              class: normalizeClass(getItemCls(item))
            }, [
              createElementVNode("input", {
                class: normalizeClass(unref(ns).e("item-input")),
                type: "radio",
                name: unref(name),
                disabled: getDisabled(item),
                checked: getSelected(item),
                onChange: ($event) => handleChange(item)
              }, null, 42, _hoisted_2),
              createElementVNode("div", {
                class: normalizeClass(unref(ns).e("item-label"))
              }, [
                renderSlot(_ctx.$slots, "default", { item }, () => [
                  createTextVNode(toDisplayString(getLabel(item)), 1)
                ])
              ], 2)
            ], 2);
          }), 128))
        ], 2)
      ], 10, _hoisted_1);
    };
  }
});
var Segmented = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "segmented.vue"]]);
const ElSegmented = withInstall(Segmented);

export { ElSegmented as E };
//# sourceMappingURL=el-segmented-KMsqQ2AI.mjs.map
