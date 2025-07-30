import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, getCurrentInstance, ref, computed, watch, inject, watchEffect, reactive, nextTick, provide, createBlock, withCtx, withDirectives, withKeys, createVNode, createCommentVNode, createTextVNode, toDisplayString, vShow, shallowRef, Fragment, renderList } from 'vue';
import { debounce, isNil } from 'lodash-unified';
import { h as buildProps, j as definePropType, i as useNamespace, a6 as useSizeProp, k as useAriaProps, C as useLocale, a9 as useFormItem, v as useFormSize, a8 as useFormDisabled, aa as useFormItemInputId, au as useFocusController, G as useDeprecated, E as ElInput, d as ElButton, g as ElIcon, ak as arrow_down_default, x as close_default, w as withInstall, m as addUnit$1, _ as _export_sfc, $ as UPDATE_MODEL_EVENT, a7 as CHANGE_EVENT, o as debugWarn, af as EVENT_CODE } from './server.mjs';
import { a as useTooltipContentProps, E as ElTooltip } from './index-L-VTEUEA.mjs';
import { a as getClientXY } from './position-DVxxNIGX.mjs';
import { isString, hasOwn } from '@vue/shared';
import { C as ClickOutside } from './index-5Ia44xzE.mjs';

const alphaSliderProps = buildProps({
  color: {
    type: definePropType(Object),
    required: true
  },
  vertical: {
    type: Boolean,
    default: false
  }
});
const useAlphaSlider = (props) => {
  const instance = getCurrentInstance();
  const thumb = shallowRef();
  const bar = shallowRef();
  function handleClick(event) {
    const target = event.target;
    if (target !== thumb.value) {
      handleDrag(event);
    }
  }
  function handleDrag(event) {
    if (!bar.value || !thumb.value)
      return;
    const el = instance.vnode.el;
    const rect = el.getBoundingClientRect();
    const { clientX, clientY } = getClientXY(event);
    if (!props.vertical) {
      let left = clientX - rect.left;
      left = Math.max(thumb.value.offsetWidth / 2, left);
      left = Math.min(left, rect.width - thumb.value.offsetWidth / 2);
      props.color.set("alpha", Math.round((left - thumb.value.offsetWidth / 2) / (rect.width - thumb.value.offsetWidth) * 100));
    } else {
      let top = clientY - rect.top;
      top = Math.max(thumb.value.offsetHeight / 2, top);
      top = Math.min(top, rect.height - thumb.value.offsetHeight / 2);
      props.color.set("alpha", Math.round((top - thumb.value.offsetHeight / 2) / (rect.height - thumb.value.offsetHeight) * 100));
    }
  }
  return {
    thumb,
    bar,
    handleDrag,
    handleClick
  };
};
const useAlphaSliderDOM = (props, {
  bar,
  thumb,
  handleDrag
}) => {
  const instance = getCurrentInstance();
  const ns = useNamespace("color-alpha-slider");
  const thumbLeft = ref(0);
  const thumbTop = ref(0);
  const background = ref();
  function getThumbLeft() {
    if (!thumb.value)
      return 0;
    if (props.vertical)
      return 0;
    const el = instance.vnode.el;
    const alpha = props.color.get("alpha");
    if (!el)
      return 0;
    return Math.round(alpha * (el.offsetWidth - thumb.value.offsetWidth / 2) / 100);
  }
  function getThumbTop() {
    if (!thumb.value)
      return 0;
    const el = instance.vnode.el;
    if (!props.vertical)
      return 0;
    const alpha = props.color.get("alpha");
    if (!el)
      return 0;
    return Math.round(alpha * (el.offsetHeight - thumb.value.offsetHeight / 2) / 100);
  }
  function getBackground() {
    if (props.color && props.color.value) {
      const { r, g, b } = props.color.toRgb();
      return `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0) 0%, rgba(${r}, ${g}, ${b}, 1) 100%)`;
    }
    return "";
  }
  function update() {
    thumbLeft.value = getThumbLeft();
    thumbTop.value = getThumbTop();
    background.value = getBackground();
  }
  watch(() => props.color.get("alpha"), () => update());
  watch(() => props.color.value, () => update());
  const rootKls = computed(() => [ns.b(), ns.is("vertical", props.vertical)]);
  const barKls = computed(() => ns.e("bar"));
  const thumbKls = computed(() => ns.e("thumb"));
  const barStyle = computed(() => ({ background: background.value }));
  const thumbStyle = computed(() => ({
    left: addUnit$1(thumbLeft.value),
    top: addUnit$1(thumbTop.value)
  }));
  return { rootKls, barKls, barStyle, thumbKls, thumbStyle, update };
};
const COMPONENT_NAME = "ElColorAlphaSlider";
const __default__$1 = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: alphaSliderProps,
  setup(__props, { expose }) {
    const props = __props;
    const { bar, thumb, handleDrag, handleClick } = useAlphaSlider(props);
    const { rootKls, barKls, barStyle, thumbKls, thumbStyle, update } = useAlphaSliderDOM(props, {
      bar,
      thumb,
      handleDrag
    });
    expose({
      update,
      bar,
      thumb
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(rootKls))
      }, [
        createElementVNode("div", {
          ref_key: "bar",
          ref: bar,
          class: normalizeClass(unref(barKls)),
          style: normalizeStyle(unref(barStyle)),
          onClick: _cache[0] || (_cache[0] = (...args) => unref(handleClick) && unref(handleClick)(...args))
        }, null, 6),
        createElementVNode("div", {
          ref_key: "thumb",
          ref: thumb,
          class: normalizeClass(unref(thumbKls)),
          style: normalizeStyle(unref(thumbStyle))
        }, null, 6)
      ], 2);
    };
  }
});
var AlphaSlider = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "alpha-slider.vue"]]);
const _sfc_main$3 = defineComponent({
  name: "ElColorHueSlider",
  props: {
    color: {
      type: Object,
      required: true
    },
    vertical: Boolean
  },
  setup(props) {
    const ns = useNamespace("color-hue-slider");
    const instance = getCurrentInstance();
    const thumb = ref();
    const bar = ref();
    const thumbLeft = ref(0);
    const thumbTop = ref(0);
    const hueValue = computed(() => {
      return props.color.get("hue");
    });
    watch(() => hueValue.value, () => {
      update();
    });
    function handleClick(event) {
      const target = event.target;
      if (target !== thumb.value) {
        handleDrag(event);
      }
    }
    function handleDrag(event) {
      if (!bar.value || !thumb.value)
        return;
      const el = instance.vnode.el;
      const rect = el.getBoundingClientRect();
      const { clientX, clientY } = getClientXY(event);
      let hue;
      if (!props.vertical) {
        let left = clientX - rect.left;
        left = Math.min(left, rect.width - thumb.value.offsetWidth / 2);
        left = Math.max(thumb.value.offsetWidth / 2, left);
        hue = Math.round((left - thumb.value.offsetWidth / 2) / (rect.width - thumb.value.offsetWidth) * 360);
      } else {
        let top = clientY - rect.top;
        top = Math.min(top, rect.height - thumb.value.offsetHeight / 2);
        top = Math.max(thumb.value.offsetHeight / 2, top);
        hue = Math.round((top - thumb.value.offsetHeight / 2) / (rect.height - thumb.value.offsetHeight) * 360);
      }
      props.color.set("hue", hue);
    }
    function getThumbLeft() {
      if (!thumb.value)
        return 0;
      const el = instance.vnode.el;
      if (props.vertical)
        return 0;
      const hue = props.color.get("hue");
      if (!el)
        return 0;
      return Math.round(hue * (el.offsetWidth - thumb.value.offsetWidth / 2) / 360);
    }
    function getThumbTop() {
      if (!thumb.value)
        return 0;
      const el = instance.vnode.el;
      if (!props.vertical)
        return 0;
      const hue = props.color.get("hue");
      if (!el)
        return 0;
      return Math.round(hue * (el.offsetHeight - thumb.value.offsetHeight / 2) / 360);
    }
    function update() {
      thumbLeft.value = getThumbLeft();
      thumbTop.value = getThumbTop();
    }
    return {
      bar,
      thumb,
      thumbLeft,
      thumbTop,
      hueValue,
      handleClick,
      update,
      ns
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b(), _ctx.ns.is("vertical", _ctx.vertical)])
  }, [
    createElementVNode("div", {
      ref: "bar",
      class: normalizeClass(_ctx.ns.e("bar")),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, null, 2),
    createElementVNode("div", {
      ref: "thumb",
      class: normalizeClass(_ctx.ns.e("thumb")),
      style: normalizeStyle({
        left: _ctx.thumbLeft + "px",
        top: _ctx.thumbTop + "px"
      })
    }, null, 6)
  ], 2);
}
var HueSlider = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "hue-slider.vue"]]);
const colorPickerProps = buildProps({
  modelValue: String,
  id: String,
  showAlpha: Boolean,
  colorFormat: String,
  disabled: Boolean,
  size: useSizeProp,
  popperClass: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  teleported: useTooltipContentProps.teleported,
  predefine: {
    type: definePropType(Array)
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(["ariaLabel"])
});
const colorPickerEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNil(val),
  [CHANGE_EVENT]: (val) => isString(val) || isNil(val),
  activeChange: (val) => isString(val) || isNil(val),
  focus: (event) => event instanceof FocusEvent,
  blur: (event) => event instanceof FocusEvent
};
const colorPickerContextKey = Symbol("colorPickerContextKey");
const hsv2hsl = function(hue, sat, val) {
  return [
    hue,
    sat * val / ((hue = (2 - sat) * val) < 1 ? hue : 2 - hue) || 0,
    hue / 2
  ];
};
const isOnePointZero = function(n) {
  return typeof n === "string" && n.includes(".") && Number.parseFloat(n) === 1;
};
const isPercentage = function(n) {
  return typeof n === "string" && n.includes("%");
};
const bound01 = function(value, max) {
  if (isOnePointZero(value))
    value = "100%";
  const processPercent = isPercentage(value);
  value = Math.min(max, Math.max(0, Number.parseFloat(`${value}`)));
  if (processPercent) {
    value = Number.parseInt(`${value * max}`, 10) / 100;
  }
  if (Math.abs(value - max) < 1e-6) {
    return 1;
  }
  return value % max / Number.parseFloat(max);
};
const INT_HEX_MAP = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F"
};
const hexOne = (value) => {
  value = Math.min(Math.round(value), 255);
  const high = Math.floor(value / 16);
  const low = value % 16;
  return `${INT_HEX_MAP[high] || high}${INT_HEX_MAP[low] || low}`;
};
const toHex = function({ r, g, b }) {
  if (Number.isNaN(+r) || Number.isNaN(+g) || Number.isNaN(+b))
    return "";
  return `#${hexOne(r)}${hexOne(g)}${hexOne(b)}`;
};
const HEX_INT_MAP = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
};
const parseHexChannel = function(hex) {
  if (hex.length === 2) {
    return (HEX_INT_MAP[hex[0].toUpperCase()] || +hex[0]) * 16 + (HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1]);
  }
  return HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1];
};
const hsl2hsv = function(hue, sat, light) {
  sat = sat / 100;
  light = light / 100;
  let smin = sat;
  const lmin = Math.max(light, 0.01);
  light *= 2;
  sat *= light <= 1 ? light : 2 - light;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  const v = (light + sat) / 2;
  const sv = light === 0 ? 2 * smin / (lmin + smin) : 2 * sat / (light + sat);
  return {
    h: hue,
    s: sv * 100,
    v: v * 100
  };
};
const rgb2hsv = (r, g, b) => {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h;
  const v = max;
  const d = max - min;
  const s = max === 0 ? 0 : d / max;
  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r: {
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      }
      case g: {
        h = (b - r) / d + 2;
        break;
      }
      case b: {
        h = (r - g) / d + 4;
        break;
      }
    }
    h /= 6;
  }
  return { h: h * 360, s: s * 100, v: v * 100 };
};
const hsv2rgb = function(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  const i = Math.floor(h);
  const f = h - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  const mod = i % 6;
  const r = [v, q, p, p, t, v][mod];
  const g = [t, v, v, q, p, p][mod];
  const b = [p, p, t, v, v, q][mod];
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
};
class Color {
  constructor(options = {}) {
    this._hue = 0;
    this._saturation = 100;
    this._value = 100;
    this._alpha = 100;
    this.enableAlpha = false;
    this.format = "hex";
    this.value = "";
    for (const option in options) {
      if (hasOwn(options, option)) {
        this[option] = options[option];
      }
    }
    if (options.value) {
      this.fromString(options.value);
    } else {
      this.doOnChange();
    }
  }
  set(prop, value) {
    if (arguments.length === 1 && typeof prop === "object") {
      for (const p in prop) {
        if (hasOwn(prop, p)) {
          this.set(p, prop[p]);
        }
      }
      return;
    }
    this[`_${prop}`] = value;
    this.doOnChange();
  }
  get(prop) {
    if (prop === "alpha") {
      return Math.floor(this[`_${prop}`]);
    }
    return this[`_${prop}`];
  }
  toRgb() {
    return hsv2rgb(this._hue, this._saturation, this._value);
  }
  fromString(value) {
    if (!value) {
      this._hue = 0;
      this._saturation = 100;
      this._value = 100;
      this.doOnChange();
      return;
    }
    const fromHSV = (h, s, v) => {
      this._hue = Math.max(0, Math.min(360, h));
      this._saturation = Math.max(0, Math.min(100, s));
      this._value = Math.max(0, Math.min(100, v));
      this.doOnChange();
    };
    if (value.includes("hsl")) {
      const parts = value.replace(/hsla|hsl|\(|\)/gm, "").split(/\s|,/g).filter((val) => val !== "").map((val, index) => index > 2 ? Number.parseFloat(val) : Number.parseInt(val, 10));
      if (parts.length === 4) {
        this._alpha = Number.parseFloat(parts[3]) * 100;
      } else if (parts.length === 3) {
        this._alpha = 100;
      }
      if (parts.length >= 3) {
        const { h, s, v } = hsl2hsv(parts[0], parts[1], parts[2]);
        fromHSV(h, s, v);
      }
    } else if (value.includes("hsv")) {
      const parts = value.replace(/hsva|hsv|\(|\)/gm, "").split(/\s|,/g).filter((val) => val !== "").map((val, index) => index > 2 ? Number.parseFloat(val) : Number.parseInt(val, 10));
      if (parts.length === 4) {
        this._alpha = Number.parseFloat(parts[3]) * 100;
      } else if (parts.length === 3) {
        this._alpha = 100;
      }
      if (parts.length >= 3) {
        fromHSV(parts[0], parts[1], parts[2]);
      }
    } else if (value.includes("rgb")) {
      const parts = value.replace(/rgba|rgb|\(|\)/gm, "").split(/\s|,/g).filter((val) => val !== "").map((val, index) => index > 2 ? Number.parseFloat(val) : Number.parseInt(val, 10));
      if (parts.length === 4) {
        this._alpha = Number.parseFloat(parts[3]) * 100;
      } else if (parts.length === 3) {
        this._alpha = 100;
      }
      if (parts.length >= 3) {
        const { h, s, v } = rgb2hsv(parts[0], parts[1], parts[2]);
        fromHSV(h, s, v);
      }
    } else if (value.includes("#")) {
      const hex = value.replace("#", "").trim();
      if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(hex))
        return;
      let r, g, b;
      if (hex.length === 3) {
        r = parseHexChannel(hex[0] + hex[0]);
        g = parseHexChannel(hex[1] + hex[1]);
        b = parseHexChannel(hex[2] + hex[2]);
      } else if (hex.length === 6 || hex.length === 8) {
        r = parseHexChannel(hex.slice(0, 2));
        g = parseHexChannel(hex.slice(2, 4));
        b = parseHexChannel(hex.slice(4, 6));
      }
      if (hex.length === 8) {
        this._alpha = parseHexChannel(hex.slice(6)) / 255 * 100;
      } else if (hex.length === 3 || hex.length === 6) {
        this._alpha = 100;
      }
      const { h, s, v } = rgb2hsv(r, g, b);
      fromHSV(h, s, v);
    }
  }
  compare(color) {
    return Math.abs(color._hue - this._hue) < 2 && Math.abs(color._saturation - this._saturation) < 1 && Math.abs(color._value - this._value) < 1 && Math.abs(color._alpha - this._alpha) < 1;
  }
  doOnChange() {
    const { _hue, _saturation, _value, _alpha, format } = this;
    if (this.enableAlpha) {
      switch (format) {
        case "hsl": {
          const hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
          this.value = `hsla(${_hue}, ${Math.round(hsl[1] * 100)}%, ${Math.round(hsl[2] * 100)}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hsv": {
          this.value = `hsva(${_hue}, ${Math.round(_saturation)}%, ${Math.round(_value)}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hex": {
          this.value = `${toHex(hsv2rgb(_hue, _saturation, _value))}${hexOne(_alpha * 255 / 100)}`;
          break;
        }
        default: {
          const { r, g, b } = hsv2rgb(_hue, _saturation, _value);
          this.value = `rgba(${r}, ${g}, ${b}, ${this.get("alpha") / 100})`;
        }
      }
    } else {
      switch (format) {
        case "hsl": {
          const hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
          this.value = `hsl(${_hue}, ${Math.round(hsl[1] * 100)}%, ${Math.round(hsl[2] * 100)}%)`;
          break;
        }
        case "hsv": {
          this.value = `hsv(${_hue}, ${Math.round(_saturation)}%, ${Math.round(_value)}%)`;
          break;
        }
        case "rgb": {
          const { r, g, b } = hsv2rgb(_hue, _saturation, _value);
          this.value = `rgb(${r}, ${g}, ${b})`;
          break;
        }
        default: {
          this.value = toHex(hsv2rgb(_hue, _saturation, _value));
        }
      }
    }
  }
}
const _sfc_main$2 = defineComponent({
  props: {
    colors: {
      type: Array,
      required: true
    },
    color: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const ns = useNamespace("color-predefine");
    const { currentColor } = inject(colorPickerContextKey);
    const rgbaColors = ref(parseColors(props.colors, props.color));
    watch(() => currentColor.value, (val) => {
      const color = new Color();
      color.fromString(val);
      rgbaColors.value.forEach((item) => {
        item.selected = color.compare(item);
      });
    });
    watchEffect(() => {
      rgbaColors.value = parseColors(props.colors, props.color);
    });
    function handleSelect(index) {
      props.color.fromString(props.colors[index]);
    }
    function parseColors(colors, color) {
      return colors.map((value) => {
        const c = new Color();
        c.enableAlpha = true;
        c.format = "rgba";
        c.fromString(value);
        c.selected = c.value === color.value;
        return c;
      });
    }
    return {
      rgbaColors,
      handleSelect,
      ns
    };
  }
});
const _hoisted_1$2 = ["onClick"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.ns.b())
  }, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.ns.e("colors"))
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rgbaColors, (item, index) => {
        return openBlock(), createElementBlock("div", {
          key: _ctx.colors[index],
          class: normalizeClass([
            _ctx.ns.e("color-selector"),
            _ctx.ns.is("alpha", item._alpha < 100),
            { selected: item.selected }
          ]),
          onClick: ($event) => _ctx.handleSelect(index)
        }, [
          createElementVNode("div", {
            style: normalizeStyle({ backgroundColor: item.value })
          }, null, 4)
        ], 10, _hoisted_1$2);
      }), 128))
    ], 2)
  ], 2);
}
var Predefine = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "predefine.vue"]]);
const _sfc_main$1 = defineComponent({
  name: "ElSlPanel",
  props: {
    color: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const ns = useNamespace("color-svpanel");
    const instance = getCurrentInstance();
    const cursorTop = ref(0);
    const cursorLeft = ref(0);
    const background = ref("hsl(0, 100%, 50%)");
    const colorValue = computed(() => {
      const hue = props.color.get("hue");
      const value = props.color.get("value");
      return { hue, value };
    });
    function update() {
      const saturation = props.color.get("saturation");
      const value = props.color.get("value");
      const el = instance.vnode.el;
      const { clientWidth: width, clientHeight: height } = el;
      cursorLeft.value = saturation * width / 100;
      cursorTop.value = (100 - value) * height / 100;
      background.value = `hsl(${props.color.get("hue")}, 100%, 50%)`;
    }
    function handleDrag(event) {
      const el = instance.vnode.el;
      const rect = el.getBoundingClientRect();
      const { clientX, clientY } = getClientXY(event);
      let left = clientX - rect.left;
      let top = clientY - rect.top;
      left = Math.max(0, left);
      left = Math.min(left, rect.width);
      top = Math.max(0, top);
      top = Math.min(top, rect.height);
      cursorLeft.value = left;
      cursorTop.value = top;
      props.color.set({
        saturation: left / rect.width * 100,
        value: 100 - top / rect.height * 100
      });
    }
    watch(() => colorValue.value, () => {
      update();
    });
    return {
      cursorTop,
      cursorLeft,
      background,
      colorValue,
      handleDrag,
      update,
      ns
    };
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createElementVNode("div", null, null, -1);
const _hoisted_2$1 = [
  _hoisted_1$1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.ns.b()),
    style: normalizeStyle({
      backgroundColor: _ctx.background
    })
  }, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.ns.e("white"))
    }, null, 2),
    createElementVNode("div", {
      class: normalizeClass(_ctx.ns.e("black"))
    }, null, 2),
    createElementVNode("div", {
      class: normalizeClass(_ctx.ns.e("cursor")),
      style: normalizeStyle({
        top: _ctx.cursorTop + "px",
        left: _ctx.cursorLeft + "px"
      })
    }, _hoisted_2$1, 6)
  ], 6);
}
var SvPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "sv-panel.vue"]]);
const _hoisted_1 = ["onKeydown"];
const _hoisted_2 = ["id", "aria-label", "aria-labelledby", "aria-description", "aria-disabled", "tabindex"];
const __default__ = defineComponent({
  name: "ElColorPicker"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: colorPickerProps,
  emits: colorPickerEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { t } = useLocale();
    const ns = useNamespace("color");
    const { formItem } = useFormItem();
    const colorSize = useFormSize();
    const colorDisabled = useFormDisabled();
    const { inputId: buttonId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const hue = ref();
    const sv = ref();
    const alpha = ref();
    const popper = ref();
    const triggerRef = ref();
    const inputRef = ref();
    const {
      isFocused,
      handleFocus: _handleFocus,
      handleBlur
    } = useFocusController(triggerRef, {
      beforeBlur(event) {
        var _a;
        return (_a = popper.value) == null ? void 0 : _a.isFocusInsideContent(event);
      },
      afterBlur() {
        setShowPicker(false);
        resetColor();
      }
    });
    const handleFocus = (event) => {
      if (colorDisabled.value)
        return blur();
      _handleFocus(event);
    };
    let shouldActiveChange = true;
    const color = reactive(new Color({
      enableAlpha: props.showAlpha,
      format: props.colorFormat || "",
      value: props.modelValue
    }));
    const showPicker = ref(false);
    const showPanelColor = ref(false);
    const customInput = ref("");
    const displayedColor = computed(() => {
      if (!props.modelValue && !showPanelColor.value) {
        return "transparent";
      }
      return displayedRgb(color, props.showAlpha);
    });
    const currentColor = computed(() => {
      return !props.modelValue && !showPanelColor.value ? "" : color.value;
    });
    const buttonAriaLabel = computed(() => {
      return !isLabeledByFormItem.value ? props.label || props.ariaLabel || t("el.colorpicker.defaultLabel") : void 0;
    });
    useDeprecated({
      from: "label",
      replacement: "aria-label",
      version: "2.8.0",
      scope: "el-color-picker",
      ref: "https://element-plus.org/en-US/component/color-picker.html"
    }, computed(() => !!props.label));
    const buttonAriaLabelledby = computed(() => {
      return isLabeledByFormItem.value ? formItem == null ? void 0 : formItem.labelId : void 0;
    });
    const btnKls = computed(() => {
      return [
        ns.b("picker"),
        ns.is("disabled", colorDisabled.value),
        ns.bm("picker", colorSize.value),
        ns.is("focused", isFocused.value)
      ];
    });
    function displayedRgb(color2, showAlpha) {
      if (!(color2 instanceof Color)) {
        throw new TypeError("color should be instance of _color Class");
      }
      const { r, g, b } = color2.toRgb();
      return showAlpha ? `rgba(${r}, ${g}, ${b}, ${color2.get("alpha") / 100})` : `rgb(${r}, ${g}, ${b})`;
    }
    function setShowPicker(value) {
      showPicker.value = value;
    }
    const debounceSetShowPicker = debounce(setShowPicker, 100, { leading: true });
    function show() {
      if (colorDisabled.value)
        return;
      setShowPicker(true);
    }
    function hide() {
      debounceSetShowPicker(false);
      resetColor();
    }
    function resetColor() {
      nextTick(() => {
        if (props.modelValue) {
          color.fromString(props.modelValue);
        } else {
          color.value = "";
          nextTick(() => {
            showPanelColor.value = false;
          });
        }
      });
    }
    function handleTrigger() {
      if (colorDisabled.value)
        return;
      debounceSetShowPicker(!showPicker.value);
    }
    function handleConfirm() {
      color.fromString(customInput.value);
    }
    function confirmValue() {
      const value = color.value;
      emit(UPDATE_MODEL_EVENT, value);
      emit("change", value);
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
      }
      debounceSetShowPicker(false);
      nextTick(() => {
        const newColor = new Color({
          enableAlpha: props.showAlpha,
          format: props.colorFormat || "",
          value: props.modelValue
        });
        if (!color.compare(newColor)) {
          resetColor();
        }
      });
    }
    function clear() {
      debounceSetShowPicker(false);
      emit(UPDATE_MODEL_EVENT, null);
      emit("change", null);
      if (props.modelValue !== null && props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
      }
      resetColor();
    }
    function handleClickOutside(event) {
      if (!showPicker.value)
        return;
      hide();
      if (isFocused.value) {
        const _event = new FocusEvent("focus", event);
        handleBlur(_event);
      }
    }
    function handleEsc(event) {
      event.preventDefault();
      event.stopPropagation();
      setShowPicker(false);
      resetColor();
    }
    function handleKeyDown(event) {
      switch (event.code) {
        case EVENT_CODE.enter:
        case EVENT_CODE.space:
          event.preventDefault();
          event.stopPropagation();
          show();
          inputRef.value.focus();
          break;
        case EVENT_CODE.esc:
          handleEsc(event);
          break;
      }
    }
    function focus() {
      triggerRef.value.focus();
    }
    function blur() {
      triggerRef.value.blur();
    }
    watch(() => props.modelValue, (newVal) => {
      if (!newVal) {
        showPanelColor.value = false;
      } else if (newVal && newVal !== color.value) {
        shouldActiveChange = false;
        color.fromString(newVal);
      }
    });
    watch(() => currentColor.value, (val) => {
      customInput.value = val;
      shouldActiveChange && emit("activeChange", val);
      shouldActiveChange = true;
    });
    watch(() => color.value, () => {
      if (!props.modelValue && !showPanelColor.value) {
        showPanelColor.value = true;
      }
    });
    watch(() => showPicker.value, () => {
      nextTick(() => {
        var _a, _b, _c;
        (_a = hue.value) == null ? void 0 : _a.update();
        (_b = sv.value) == null ? void 0 : _b.update();
        (_c = alpha.value) == null ? void 0 : _c.update();
      });
    });
    provide(colorPickerContextKey, {
      currentColor
    });
    expose({
      color,
      show,
      hide,
      focus,
      blur
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTooltip), {
        ref_key: "popper",
        ref: popper,
        visible: showPicker.value,
        "show-arrow": false,
        "fallback-placements": ["bottom", "top", "right", "left"],
        offset: 0,
        "gpu-acceleration": false,
        "popper-class": [unref(ns).be("picker", "panel"), unref(ns).b("dropdown"), _ctx.popperClass],
        "stop-popper-mouse-event": false,
        effect: "light",
        trigger: "click",
        teleported: _ctx.teleported,
        transition: `${unref(ns).namespace.value}-zoom-in-top`,
        persistent: "",
        onHide: _cache[2] || (_cache[2] = ($event) => setShowPicker(false))
      }, {
        content: withCtx(() => [
          withDirectives((openBlock(), createElementBlock("div", {
            onKeydown: withKeys(handleEsc, ["esc"])
          }, [
            createElementVNode("div", {
              class: normalizeClass(unref(ns).be("dropdown", "main-wrapper"))
            }, [
              createVNode(HueSlider, {
                ref_key: "hue",
                ref: hue,
                class: "hue-slider",
                color: unref(color),
                vertical: ""
              }, null, 8, ["color"]),
              createVNode(SvPanel, {
                ref_key: "sv",
                ref: sv,
                color: unref(color)
              }, null, 8, ["color"])
            ], 2),
            _ctx.showAlpha ? (openBlock(), createBlock(AlphaSlider, {
              key: 0,
              ref_key: "alpha",
              ref: alpha,
              color: unref(color)
            }, null, 8, ["color"])) : createCommentVNode("v-if", true),
            _ctx.predefine ? (openBlock(), createBlock(Predefine, {
              key: 1,
              ref: "predefine",
              color: unref(color),
              colors: _ctx.predefine
            }, null, 8, ["color", "colors"])) : createCommentVNode("v-if", true),
            createElementVNode("div", {
              class: normalizeClass(unref(ns).be("dropdown", "btns"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(unref(ns).be("dropdown", "value"))
              }, [
                createVNode(unref(ElInput), {
                  ref_key: "inputRef",
                  ref: inputRef,
                  modelValue: customInput.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => customInput.value = $event),
                  "validate-event": false,
                  size: "small",
                  onKeyup: withKeys(handleConfirm, ["enter"]),
                  onBlur: handleConfirm
                }, null, 8, ["modelValue", "onKeyup"])
              ], 2),
              createVNode(unref(ElButton), {
                class: normalizeClass(unref(ns).be("dropdown", "link-btn")),
                text: "",
                size: "small",
                onClick: clear
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("el.colorpicker.clear")), 1)
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(unref(ElButton), {
                plain: "",
                size: "small",
                class: normalizeClass(unref(ns).be("dropdown", "btn")),
                onClick: confirmValue
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("el.colorpicker.confirm")), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ], 2)
          ], 40, _hoisted_1)), [
            [unref(ClickOutside), handleClickOutside]
          ])
        ]),
        default: withCtx(() => [
          createElementVNode("div", {
            id: unref(buttonId),
            ref_key: "triggerRef",
            ref: triggerRef,
            class: normalizeClass(unref(btnKls)),
            role: "button",
            "aria-label": unref(buttonAriaLabel),
            "aria-labelledby": unref(buttonAriaLabelledby),
            "aria-description": unref(t)("el.colorpicker.description", { color: _ctx.modelValue || "" }),
            "aria-disabled": unref(colorDisabled),
            tabindex: unref(colorDisabled) ? -1 : _ctx.tabindex,
            onKeydown: handleKeyDown,
            onFocus: handleFocus,
            onBlur: _cache[1] || (_cache[1] = (...args) => unref(handleBlur) && unref(handleBlur)(...args))
          }, [
            unref(colorDisabled) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref(ns).be("picker", "mask"))
            }, null, 2)) : createCommentVNode("v-if", true),
            createElementVNode("div", {
              class: normalizeClass(unref(ns).be("picker", "trigger")),
              onClick: handleTrigger
            }, [
              createElementVNode("span", {
                class: normalizeClass([unref(ns).be("picker", "color"), unref(ns).is("alpha", _ctx.showAlpha)])
              }, [
                createElementVNode("span", {
                  class: normalizeClass(unref(ns).be("picker", "color-inner")),
                  style: normalizeStyle({
                    backgroundColor: unref(displayedColor)
                  })
                }, [
                  withDirectives(createVNode(unref(ElIcon), {
                    class: normalizeClass([unref(ns).be("picker", "icon"), unref(ns).is("icon-arrow-down")])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_down_default))
                    ]),
                    _: 1
                  }, 8, ["class"]), [
                    [vShow, _ctx.modelValue || showPanelColor.value]
                  ]),
                  withDirectives(createVNode(unref(ElIcon), {
                    class: normalizeClass([unref(ns).be("picker", "empty"), unref(ns).is("icon-close")])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(close_default))
                    ]),
                    _: 1
                  }, 8, ["class"]), [
                    [vShow, !_ctx.modelValue && !showPanelColor.value]
                  ])
                ], 6)
              ], 2)
            ], 2)
          ], 42, _hoisted_2)
        ]),
        _: 1
      }, 8, ["visible", "popper-class", "teleported", "transition"]);
    };
  }
});
var ColorPicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "color-picker.vue"]]);
const ElColorPicker = withInstall(ColorPicker);

export { ElColorPicker as E };
//# sourceMappingURL=el-color-picker-BpaTgxgG.mjs.map
