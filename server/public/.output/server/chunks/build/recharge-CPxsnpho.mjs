import { P as PayWayEnum, p as prepay, a as pay, _ as __nuxt_component_1, b as __nuxt_component_2 } from './index-DByyRwMr.mjs';
import { z as useUserStore, a5 as useAppStore, a as useRouter, A as feedback, by as wechatoa, c as useRuntimeConfig, d as ElButton } from './server.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, unref, isRef, withCtx, createTextVNode } from 'vue';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { r as rechargePlace, g as getRechargeLists } from './recharge-DUlermqD.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-C2yEelJa.mjs';
import '@vueuse/core';
import 'lodash-unified';
import './position-DVxxNIGX.mjs';
import '@vue/shared';
import './index-BoqjHllR.mjs';
import './usePolling-DOP50YcO.mjs';
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
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "recharge",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const appStore = useAppStore();
    const router = useRouter();
    const rechargeLists = ref([]);
    const accountData = ref({
      balance: "",
      robot_num: "",
      video_num: ""
    });
    const packageBenefits = computed(() => [
      {
        key: "chat_balance",
        giveKey: "give_chat_balance",
        label: `${appStore.getTokenUnit}\u6570\u91CF`,
        unit: appStore.getTokenUnit
      },
      {
        key: "robot_number",
        giveKey: "give_robot_number",
        label: "\u667A\u80FD\u4F53\u4E2A\u6570",
        unit: "\u4E2A"
      }
      // {
      //   key: 'video_duration',
      //   giveKey: 'give_video_duration',
      //   label: '形象合成时长',
      //   unit: '分钟'
      // }
    ]);
    const currentIndex = ref(0);
    const getData = async () => {
      const data = await getRechargeLists();
      rechargeLists.value = data.lists;
      accountData.value = data.extend;
      const selectIndex = rechargeLists.value.findIndex(
        (item) => item.is_recommend
      );
      currentIndex.value = selectIndex === -1 ? 0 : selectIndex;
    };
    const runtimeConfig = useRuntimeConfig();
    const payWay = ref(PayWayEnum.WECHAT);
    const currentPackage = computed(() => {
      return rechargeLists.value[currentIndex.value] || {};
    });
    const { lockFn: payNow, isLock } = useLockFn(async () => {
      if (!currentPackage.value.id) {
        feedback.msgError("\u8BF7\u9009\u62E9\u5145\u503C\u5957\u9910");
      }
      if (!payWay.value) {
        feedback.msgError("\u8BF7\u9009\u62E9\u652F\u4ED8\u65B9\u5F0F");
      }
      const orderInfo = await rechargePlace({
        package_id: currentPackage.value.id,
        pay_way: payWay.value
      });
      const payInfo = await prepay({
        ...orderInfo,
        pay_way: payWay.value,
        redirect: `${runtimeConfig.app.baseURL}user/record`,
        code: wechatoa.getAuthData().code
      });
      await pay.run({
        payWay: payWay.value,
        orderId: orderInfo.order_id,
        from: orderInfo.from,
        config: payInfo.config
      });
      await feedback.alertSuccess("\u652F\u4ED8\u6210\u529F");
      userStore.getUser();
      router.push({
        path: "/user/record",
        query: {
          id: orderInfo.order_id
        }
      });
    });
    getData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Price = __nuxt_component_1;
      const _component_PaymentSelect = __nuxt_component_2;
      const _component_ElButton = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))} data-v-d8fdce6d><div class="text-tx-primary sm:py-[40px] sm:px-[60px] p-[20px]" data-v-d8fdce6d><div class="py-4 px-5 rounded-[16px] bg-[#FFF5ED] mb-5" data-v-d8fdce6d><div class="font-medium" data-v-d8fdce6d>\u6211\u7684\u8D26\u6237</div><div class="flex mt-4" data-v-d8fdce6d><div class="flex-1" data-v-d8fdce6d> \u5269\u4F59${ssrInterpolate(unref(appStore).getTokenUnit)}\uFF1A${ssrInterpolate(unref(accountData).balance)}</div><div class="flex-1" data-v-d8fdce6d> \u667A\u80FD\u4F53\u6570\u91CF\uFF1A${ssrInterpolate(unref(accountData).robot_num)}</div></div></div><div class="recharge-lists flex flex-wrap" data-v-d8fdce6d><!--[-->`);
      ssrRenderList(unref(rechargeLists), (item, index) => {
        _push(`<div class="${ssrRenderClass([{
          active: index === unref(currentIndex)
        }, "recharge-item relative"])}" data-v-d8fdce6d>`);
        if (item.tags != "") {
          _push(`<div class="absolute top-[-1px] left-[-1px] bg-[#FF7021] px-[12px] py-[2px] text-white rounded-tl-[15px] rounded-br-[15px]" data-v-d8fdce6d>${ssrInterpolate(item.tags)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div data-v-d8fdce6d><div data-v-d8fdce6d><div class="text-xl font-medium mb-[10px] line-clamp-1" data-v-d8fdce6d>${ssrInterpolate(item.name)}</div>`);
        _push(ssrRenderComponent(_component_Price, {
          content: item.sell_price,
          "main-size": "28px",
          "minor-size": "16px"
        }, null, _parent));
        _push(`<div class="${ssrRenderClass([{
          "opacity-0": item.line_price === "0.00"
        }, "mb-[20px]"])}" data-v-d8fdce6d>`);
        _push(ssrRenderComponent(_component_Price, {
          prefix: "\u539F\u4EF7",
          content: item.line_price,
          "main-size": "14px",
          "line-through": "",
          color: "#999"
        }, null, _parent));
        _push(`</div></div><div class="border-t border-solid border-br-light pt-[10px]" data-v-d8fdce6d><!--[-->`);
        ssrRenderList(unref(packageBenefits), (bItem, index2) => {
          _push(`<div class="text-sm flex py-[8px]" data-v-d8fdce6d><span class="text-tx-secondary mr-auto" data-v-d8fdce6d>${ssrInterpolate(bItem.label)}</span><div class="relative" data-v-d8fdce6d>`);
          if (item[bItem.key] > 0) {
            _push(`<span data-v-d8fdce6d>${ssrInterpolate(Number(item[bItem.key]))}${ssrInterpolate(bItem.unit)}</span>`);
          } else {
            _push(`<span data-v-d8fdce6d>-</span>`);
          }
          if (item.is_give && Number(item[bItem.giveKey])) {
            _push(`<div class="absolute right-0 top-0 translate-y-[-100%] translate-x-[100%] bg-[#FF7021] px-[8px] py-[1px] rounded-r-full rounded-tl-full whitespace-nowrap text-white text-xs" data-v-d8fdce6d> \u8D60${ssrInterpolate(item[bItem.giveKey])}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-[30px]" data-v-d8fdce6d><div class="text-lg mb-[5px]" data-v-d8fdce6d>\u652F\u4ED8\u65B9\u5F0F</div>`);
      _push(ssrRenderComponent(_component_PaymentSelect, {
        modelValue: unref(payWay),
        "onUpdate:modelValue": ($event) => isRef(payWay) ? payWay.value = $event : null,
        from: "recharge"
      }, null, _parent));
      _push(`</div><div class="mt-[20px] flex" data-v-d8fdce6d>`);
      _push(ssrRenderComponent(_component_ElButton, {
        type: "primary",
        size: "large",
        loading: unref(isLock),
        onClick: unref(payNow),
        style: { "background": "linear-gradient(\n                            90deg,\n                            #ffcb58 0%,\n                            #f7630e 100%\n                        )", "border": "none", "padding": "0 54px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u7ACB\u5373\u8D2D\u4E70 `);
          } else {
            return [
              createTextVNode(" \u7ACB\u5373\u8D2D\u4E70 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="ml-[20px]" data-v-d8fdce6d> \u5B9E\u4ED8\u91D1\u989D\uFF1A `);
      _push(ssrRenderComponent(_component_Price, {
        content: unref(currentPackage).sell_price,
        "main-size": "24px",
        "minor-size": "14px",
        color: "#FF7021"
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recharge/_components/recharge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Recharge = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d8fdce6d"]]);

export { Recharge as default };
//# sourceMappingURL=recharge-CPxsnpho.mjs.map
