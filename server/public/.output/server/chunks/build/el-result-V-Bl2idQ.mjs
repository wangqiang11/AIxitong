import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot, createBlock, resolveDynamicComponent, createCommentVNode, toDisplayString } from 'vue';
import { h as buildProps, i as useNamespace, w as withInstall, aA as circle_check_filled_default, aB as warning_filled_default, aC as circle_close_filled_default, aD as info_filled_default, _ as _export_sfc } from './server.mjs';

const IconMap = {
  success: "icon-success",
  warning: "icon-warning",
  error: "icon-error",
  info: "icon-info"
};
const IconComponentMap = {
  [IconMap.success]: circle_check_filled_default,
  [IconMap.warning]: warning_filled_default,
  [IconMap.error]: circle_close_filled_default,
  [IconMap.info]: info_filled_default
};
const resultProps = buildProps({
  title: {
    type: String,
    default: ""
  },
  subTitle: {
    type: String,
    default: ""
  },
  icon: {
    type: String,
    values: ["success", "warning", "info", "error"],
    default: "info"
  }
});
const __default__ = defineComponent({
  name: "ElResult"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: resultProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("result");
    const resultIcon = computed(() => {
      const icon = props.icon;
      const iconClass = icon && IconMap[icon] ? IconMap[icon] : "icon-info";
      const iconComponent = IconComponentMap[iconClass] || IconComponentMap["icon-info"];
      return {
        class: iconClass,
        component: iconComponent
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b())
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("icon"))
        }, [
          renderSlot(_ctx.$slots, "icon", {}, () => [
            unref(resultIcon).component ? (openBlock(), createBlock(resolveDynamicComponent(unref(resultIcon).component), {
              key: 0,
              class: normalizeClass(unref(resultIcon).class)
            }, null, 8, ["class"])) : createCommentVNode("v-if", true)
          ])
        ], 2),
        _ctx.title || _ctx.$slots.title ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).e("title"))
        }, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createElementVNode("p", null, toDisplayString(_ctx.title), 1)
          ])
        ], 2)) : createCommentVNode("v-if", true),
        _ctx.subTitle || _ctx.$slots["sub-title"] ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(ns).e("subtitle"))
        }, [
          renderSlot(_ctx.$slots, "sub-title", {}, () => [
            createElementVNode("p", null, toDisplayString(_ctx.subTitle), 1)
          ])
        ], 2)) : createCommentVNode("v-if", true),
        _ctx.$slots.extra ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(unref(ns).e("extra"))
        }, [
          renderSlot(_ctx.$slots, "extra")
        ], 2)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Result = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "result.vue"]]);
const ElResult = withInstall(Result);

export { ElResult as E };
//# sourceMappingURL=el-result-V-Bl2idQ.mjs.map
