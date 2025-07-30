import { defineComponent, shallowRef, ref, computed, watch, watchEffect, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createElementVNode, renderSlot, useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { useWindowSize, useElementBounding, useEventListener } from '@vueuse/core';
import { h as buildProps, j as definePropType, i as useNamespace, m as addUnit$1, w as withInstall, l as isNumber, a0 as isBoolean, a7 as CHANGE_EVENT, _ as _export_sfc, a5 as useAppStore } from './server.mjs';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import _sfc_main$2 from './title-logo-BNM0flCB.mjs';
import Menu from './menu-C91s3odr.mjs';
import _sfc_main$3 from './user-SBxKtT5H.mjs';
import { _ as _export_sfc$1 } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './nuxt-link-l5zPv3vf.mjs';
import './el-menu-item-DBjUF0xW.mjs';
import './index-DadLUs6d.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-5Ia44xzE.mjs';
import './menu-item-DyOqt2KJ.mjs';
import './index-DLVgZG5d.mjs';
import './index-BoqjHllR.mjs';
import './member-btn-MuRMgKHK.mjs';

const affixProps = buildProps({
  zIndex: {
    type: definePropType([Number, String]),
    default: 100
  },
  target: {
    type: String,
    default: ""
  },
  offset: {
    type: Number,
    default: 0
  },
  position: {
    type: String,
    values: ["top", "bottom"],
    default: "top"
  }
});
const affixEmits = {
  scroll: ({ scrollTop, fixed }) => isNumber(scrollTop) && isBoolean(fixed),
  [CHANGE_EVENT]: (fixed) => isBoolean(fixed)
};
const COMPONENT_NAME = "ElAffix";
const __default__ = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: affixProps,
  emits: affixEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns = useNamespace("affix");
    const target = shallowRef();
    const root = shallowRef();
    const scrollContainer = shallowRef();
    const { height: windowHeight } = useWindowSize();
    const {
      height: rootHeight,
      width: rootWidth,
      top: rootTop,
      bottom: rootBottom,
      update: updateRoot
    } = useElementBounding(root, { windowScroll: false });
    const targetRect = useElementBounding(target);
    const fixed = ref(false);
    const scrollTop = ref(0);
    const transform = ref(0);
    const rootStyle = computed(() => {
      return {
        height: fixed.value ? `${rootHeight.value}px` : "",
        width: fixed.value ? `${rootWidth.value}px` : ""
      };
    });
    const affixStyle = computed(() => {
      if (!fixed.value)
        return {};
      const offset = props.offset ? addUnit$1(props.offset) : 0;
      return {
        height: `${rootHeight.value}px`,
        width: `${rootWidth.value}px`,
        top: props.position === "top" ? offset : "",
        bottom: props.position === "bottom" ? offset : "",
        transform: transform.value ? `translateY(${transform.value}px)` : "",
        zIndex: props.zIndex
      };
    });
    const update = () => {
      if (!scrollContainer.value)
        return;
      scrollTop.value = scrollContainer.value instanceof Window ? (void 0).documentElement.scrollTop : scrollContainer.value.scrollTop || 0;
      if (props.position === "top") {
        if (props.target) {
          const difference = targetRect.bottom.value - props.offset - rootHeight.value;
          fixed.value = props.offset > rootTop.value && targetRect.bottom.value > 0;
          transform.value = difference < 0 ? difference : 0;
        } else {
          fixed.value = props.offset > rootTop.value;
        }
      } else if (props.target) {
        const difference = windowHeight.value - targetRect.top.value - props.offset - rootHeight.value;
        fixed.value = windowHeight.value - props.offset < rootBottom.value && windowHeight.value > targetRect.top.value;
        transform.value = difference < 0 ? -difference : 0;
      } else {
        fixed.value = windowHeight.value - props.offset < rootBottom.value;
      }
    };
    const handleScroll = () => {
      updateRoot();
      emit("scroll", {
        scrollTop: scrollTop.value,
        fixed: fixed.value
      });
    };
    watch(fixed, (val) => emit("change", val));
    useEventListener(scrollContainer, "scroll", handleScroll);
    watchEffect(update);
    expose({
      update,
      updateRoot
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "root",
        ref: root,
        class: normalizeClass(unref(ns).b()),
        style: normalizeStyle(unref(rootStyle))
      }, [
        createElementVNode("div", {
          class: normalizeClass({ [unref(ns).m("fixed")]: fixed.value }),
          style: normalizeStyle(unref(affixStyle))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 6)
      ], 6);
    };
  }
});
var Affix = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "affix.vue"]]);
const ElAffix = withInstall(Affix);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  props: {
    prop: {}
  },
  setup(__props) {
    const appStore = useAppStore();
    const percent = ref(0);
    const onScroll = ({ scrollTop }) => {
      const top = 80;
      percent.value = scrollTop / top > 0.8 ? 0.8 : scrollTop / top;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_affix = ElAffix;
      _push(ssrRenderComponent(_component_el_affix, mergeProps({
        target: "",
        style: { "height": "0", "width": "100%" },
        offset: 0,
        onScroll
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="header w-full h-[60px] flex items-center justify-center" style="${ssrRenderStyle({ background: "rgba(256,256, 256," + unref(percent) + ")" })}" data-v-85c3c1dc${_scopeId}><div class="max-w-[1200px] w-full mx-auto flex items-center" data-v-85c3c1dc${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mr-[50px]",
              logo: unref(appStore).getWebsiteConfig.pc_logo,
              title: unref(appStore).getWebsiteConfig.pc_name
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex-1 min-w-0" data-v-85c3c1dc${_scopeId}>`);
            _push2(ssrRenderComponent(Menu, { "is-home": true }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "ml-auto",
              isHidden: true
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "header w-full h-[60px] flex items-center justify-center",
                style: { background: "rgba(256,256, 256," + unref(percent) + ")" }
              }, [
                createVNode("div", { class: "max-w-[1200px] w-full mx-auto flex items-center" }, [
                  createVNode(_sfc_main$2, {
                    class: "mr-[50px]",
                    logo: unref(appStore).getWebsiteConfig.pc_logo,
                    title: unref(appStore).getWebsiteConfig.pc_name
                  }, null, 8, ["logo", "title"]),
                  createVNode("div", { class: "flex-1 min-w-0" }, [
                    createVNode(Menu, { "is-home": true })
                  ]),
                  createVNode(_sfc_main$3, {
                    class: "ml-auto",
                    isHidden: true
                  })
                ])
              ], 4)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/_components/header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const header = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-85c3c1dc"]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: header
});

export { __vite_glob_0_2 as _ };
//# sourceMappingURL=header-BSZGZ8i5.mjs.map
