import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { a as useRouter, ag as useRoute, a5 as useAppStore, z as useUserStore } from './server.mjs';
import { useSSRContext, defineComponent, ref, watch, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sidePop",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    useRouter();
    const route = useRoute();
    const appStore = useAppStore();
    useUserStore();
    const isSelect = ref(0);
    const props = __props;
    const emit = __emit;
    useVModel(props, "modelValue", emit);
    const menu = ref([
      {
        name: "\u5145\u503C\u4E2D\u5FC3",
        icon: "chongzhi",
        path: "/user/recharge",
        show: (appStore == null ? void 0 : appStore.getIsShowRecharge) || false
      },
      {
        name: "\u4F1A\u5458\u4E2D\u5FC3",
        icon: "open_vip",
        path: "/user/member",
        show: (appStore == null ? void 0 : appStore.getIsShowMember) || false
      },
      {
        name: "\u5206\u9500\u63A8\u5E7F",
        icon: "distribution",
        path: "/user/promotion/distribution",
        show: true
      },
      {
        name: "\u4EFB\u52A1\u5956\u52B1",
        icon: "task_reward",
        path: "/user/task_reward",
        show: true
      },
      {
        name: "\u8D2D\u4E70\u8BB0\u5F55",
        icon: "goumaijilu",
        path: "/user/record",
        show: true
      },
      {
        name: "\u6211\u7684\u4F5C\u54C1",
        icon: "my_works",
        path: "/user/works",
        show: true
      },
      {
        name: "\u4F59\u989D\u660E\u7EC6",
        icon: "yuemingxi",
        path: "/user/balance",
        show: true
      },
      {
        name: "\u6D88\u606F\u901A\u77E5",
        icon: "notice",
        path: "/user/notification",
        show: true
      },
      {
        name: "\u4E2A\u4EBA\u4FE1\u606F",
        icon: "gerenzhongxin",
        path: "/user/center",
        show: true
      }
    ]);
    watch(
      () => route.path,
      (value) => {
        console.log(value);
        const i = menu.value.findIndex((item) => value.includes(item.path));
        isSelect.value = i;
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full relative" }, _attrs))} data-v-4b6b8600><div class="w-[200px] bg-body rounded-[12px] h-full px-[16px] py-[20px]" data-v-4b6b8600><div class="text-base" data-v-4b6b8600>\u4E2A\u4EBA\u4E2D\u5FC3</div><div class="mt-[10px]" data-v-4b6b8600><!--[-->`);
      ssrRenderList(unref(menu), (item, index) => {
        _push(`<div class="py-[10px] cursor-pointer" style="${ssrRenderStyle(item.show ? null : { display: "none" })}" data-v-4b6b8600><div class="${ssrRenderClass([{ isSelect: unref(isSelect) == index }, "flex items-center h-[40px] leading-[40px] w-full pl-[15px]"])}" data-v-4b6b8600>`);
        _push(ssrRenderComponent(_component_icon, {
          name: `local-icon-${item.icon}`,
          size: "16px"
        }, null, _parent));
        _push(`<span class="ml-[10px]" data-v-4b6b8600>${ssrInterpolate(item.name)}</span></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/_components/sidePop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sidePop = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4b6b8600"]]);

export { sidePop as default };
//# sourceMappingURL=sidePop-DC0e2WFv.mjs.map
