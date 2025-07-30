import { defineComponent, watch, useSSRContext, ref, computed, mergeProps } from 'vue';
import { useDebounceFn, useResizeObserver } from '@vueuse/core';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const getItemWidth = ({ breakpoints, wrapperWidth, gutter, hasAroundGutter, initWidth }) => {
  const sizeList = Object.keys(breakpoints).map((key) => {
    return Number(key);
  }).sort((a, b) => a - b);
  let validSize = wrapperWidth;
  let breakpoint = false;
  for (const size of sizeList) {
    if (wrapperWidth <= size) {
      validSize = size;
      breakpoint = true;
      break;
    }
  }
  if (!breakpoint)
    return initWidth;
  const col = breakpoints[validSize].rowPerView;
  if (hasAroundGutter)
    return (wrapperWidth - gutter) / col - gutter;
  else
    return (wrapperWidth - (col - 1) * gutter) / col;
};
function useCalculateCols(props) {
  const wrapperWidth = ref(0);
  const waterfallWrapper = ref(null);
  useResizeObserver(waterfallWrapper, (entries) => {
    const entry = entries[0];
    const { width } = entry.contentRect;
    wrapperWidth.value = width;
  });
  const colWidth = computed(() => {
    return getItemWidth({
      wrapperWidth: wrapperWidth.value,
      breakpoints: props.breakpoints,
      gutter: props.gutter,
      hasAroundGutter: props.hasAroundGutter,
      initWidth: props.width
    });
  });
  const cols = computed(() => {
    const offset = props.hasAroundGutter ? -props.gutter : props.gutter;
    return Math.floor((wrapperWidth.value + offset) / (colWidth.value + props.gutter));
  });
  const offsetX = computed(() => {
    const offset = props.hasAroundGutter ? props.gutter : -props.gutter;
    const contextWidth = cols.value * (colWidth.value + props.gutter) + offset;
    return (wrapperWidth.value - contextWidth) / 2;
  });
  return {
    waterfallWrapper,
    wrapperWidth,
    colWidth,
    cols,
    offsetX
  };
}
function hasClass(el, className) {
  const reg = new RegExp(`(^|\\s)${className}(\\s|$)`);
  return reg.test(el.className);
}
function addClass(el, className) {
  if (hasClass(el, className))
    return;
  const newClass = el.className.split(/\s+/);
  newClass.push(className);
  el.className = newClass.join(" ");
}
function prefixStyle(style) {
  return false;
}
const transform = prefixStyle();
const duration = prefixStyle();
const delay = prefixStyle();
const transition = prefixStyle();
const fillMode = prefixStyle();
function useLayout(props, colWidth, cols, offsetX, waterfallWrapper) {
  const posY = ref([]);
  const wrapperHeight = ref(0);
  const getX = (index) => {
    const count = props.hasAroundGutter ? index + 1 : index;
    return props.gutter * count + colWidth.value * index + offsetX.value;
  };
  const initY = () => {
    posY.value = new Array(cols.value).fill(props.hasAroundGutter ? props.gutter : 0);
  };
  const animation = addAnimation(props);
  const layoutHandle = async () => {
    initY();
    const items = [];
    if (waterfallWrapper && waterfallWrapper.value) {
      waterfallWrapper.value.childNodes.forEach((el) => {
        if (el.className === "waterfall-item")
          items.push(el);
      });
    }
    if (items.length === 0) return false;
    for (let i = 0; i < items.length; i++) {
      const curItem = items[i];
      const minY = Math.min.apply(null, posY.value);
      const minYIndex = posY.value.indexOf(minY);
      const curX = getX(minYIndex);
      const style = curItem.style;
      if (transform) style[transform] = `translate3d(${curX}px,${minY}px, 0)`;
      style.width = `${colWidth.value}px`;
      const { height } = curItem.getBoundingClientRect();
      posY.value[minYIndex] += height + props.gutter;
      animation(curItem, () => {
        if (transition) style[transition] = `transform ${props.animationDuration / 1e3}s`;
      });
    }
    wrapperHeight.value = Math.max.apply(null, posY.value);
  };
  return {
    wrapperHeight,
    layoutHandle
  };
}
function addAnimation(props) {
  return (item, callback) => {
    const content = item.firstChild;
    if (content && !hasClass(content, props.animationPrefix)) {
      const durationSec = `${props.animationDuration / 1e3}s`;
      const delaySec = `${props.animationDelay / 1e3}s`;
      const style = content.style;
      style.visibility = "visible";
      if (duration)
        style[duration] = durationSec;
      if (delay)
        style[delay] = delaySec;
      if (fillMode)
        style[fillMode] = "both";
      addClass(content, props.animationPrefix);
      addClass(content, props.animationEffect);
      if (callback) {
        setTimeout(() => {
          callback();
        }, props.animationDuration + props.animationDelay);
      }
    }
  };
}
const __default__ = defineComponent({
  props: {
    list: {
      type: Array,
      default: () => []
    },
    rowKey: {
      type: String,
      default: "id"
    },
    imgSelector: {
      type: String,
      default: "src"
    },
    width: {
      type: Number,
      default: 200
    },
    breakpoints: {
      type: Object,
      default: () => ({
        1200: {
          rowPerView: 3
        },
        800: {
          rowPerView: 2
        },
        500: {
          rowPerView: 1
        }
      })
    },
    gutter: {
      type: Number,
      default: 10
    },
    hasAroundGutter: {
      type: Boolean,
      default: true
    },
    animationPrefix: {
      type: String,
      default: "animate__animated"
    },
    animationEffect: {
      type: String,
      default: "fadeIn"
    },
    animationDuration: {
      type: Number,
      default: 1e3
    },
    animationDelay: {
      type: Number,
      default: 300
    },
    backgroundColor: {
      type: String,
      default: "#fff"
    },
    delay: {
      type: Number,
      default: 300
    }
  },
  setup(props) {
    const { waterfallWrapper, wrapperWidth, colWidth, cols, offsetX } = useCalculateCols(props);
    const { wrapperHeight, layoutHandle } = useLayout(
      props,
      colWidth,
      cols,
      offsetX,
      waterfallWrapper
    );
    const renderer = useDebounceFn(() => {
      layoutHandle();
    }, props.delay);
    watch(
      () => [wrapperWidth, colWidth, props.list],
      () => {
        if (wrapperWidth.value > 0) renderer();
      },
      { deep: true }
    );
    const getKey = (item, index) => {
      return item[props.rowKey] || index;
    };
    return {
      colWidth,
      waterfallWrapper,
      wrapperHeight,
      getKey,
      renderer
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _cssVars = { style: {
    "--4507f2cc": _ctx.backgroundColor
  } };
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "waterfallWrapper",
    class: "waterfall-list",
    style: { height: `${_ctx.wrapperHeight}px` }
  }, _attrs, _cssVars))} data-v-300c382b><!--[-->`);
  ssrRenderList(_ctx.list, (item, index) => {
    _push(`<div class="waterfall-item" style="${ssrRenderStyle({ "--col-width": _ctx.colWidth })}" data-v-300c382b><div class="waterfall-card" data-v-300c382b>`);
    ssrRenderSlot(_ctx.$slots, "item", {
      item,
      index
    }, null, _push, _parent);
    _push(`</div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = __default__.setup;
__default__.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/waterfall/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Waterfall = /* @__PURE__ */ _export_sfc(__default__, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-300c382b"]]);

export { Waterfall as W };
//# sourceMappingURL=index-CbOzFVxN.mjs.map
