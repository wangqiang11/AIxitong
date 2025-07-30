import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { useSSRContext, defineComponent, ref, shallowRef, computed, watch, nextTick, watchEffect, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import { useElementSize, useElementBounding, useEventListener } from '@vueuse/core';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    defaultHeight: { default: 32 },
    bg: { default: "white" },
    iconColor: { default: "inherit" },
    zIndex: { default: 999 }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const showMore = ref(false);
    const showMoreIcon = ref(false);
    const slotRef = shallowRef();
    const contentHeight = ref("auto");
    const contentRef = shallowRef();
    const contentStyle = computed(() => {
      const height2 = showMore.value ? contentHeight.value : props.defaultHeight;
      return {
        height: typeof height2 === "number" ? `${height2}px` : height2,
        backgroundColor: props.bg
      };
    });
    watch(showMore, async (value) => {
      if (value) {
        await nextTick();
        contentHeight.value = slotHeight.value ? slotHeight.value : "auto";
      } else {
        contentHeight.value = props.defaultHeight;
      }
    });
    const { height: slotHeight } = useElementSize(slotRef);
    const { x, y, height, width } = useElementBounding(contentRef);
    watchEffect(() => {
      if (slotHeight.value > props.defaultHeight) {
        showMoreIcon.value = true;
      } else {
        showMoreIcon.value = false;
      }
    });
    useEventListener(
      void 0,
      "click",
      (e) => {
        if (e.clientX > x.value && e.clientX < x.value + width.value && e.clientY > y.value && e.clientY < y.value + height.value) {
          return;
        }
        showMore.value = false;
      },
      {
        capture: true
      }
    );
    __expose({
      hidden() {
        showMore.value = false;
      },
      show() {
        showMore.value = true;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "dropdown-more",
        style: {
          "--dropdown-more-default-height": `${_ctx.defaultHeight}px`,
          "--dropdown-more-z-index": _ctx.zIndex
        }
      }, _attrs))} data-v-a93115e1><div class="dropdown-placeholder" data-v-a93115e1></div><div class="dropdown-content" style="${ssrRenderStyle(unref(contentStyle))}" data-v-a93115e1><div class="dropdown-slot" data-v-a93115e1>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (unref(showMoreIcon)) {
        _push(`<div style="${ssrRenderStyle({
          transform: `rotateZ(${unref(showMore) ? "180deg" : "0"})`
        })}" class="dropdown-icon cursor-pointer" data-v-a93115e1>`);
        _push(ssrRenderComponent(_component_Icon, {
          color: _ctx.iconColor,
          name: "el-icon-ArrowDown"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dropdown-more/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a93115e1"]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=index-x5xEUu1d.mjs.map
