import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { P as PayWayEnum, p as prepay, a as pay, _ as __nuxt_component_1, b as __nuxt_component_2 } from './index-DByyRwMr.mjs';
import { a as useRouter, a5 as useAppStore, z as useUserStore, A as feedback, by as wechatoa, c as useRuntimeConfig, d as ElButton } from './server.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, withCtx, unref, isRef, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, createTextVNode } from 'vue';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { r as rechargePlace, g as getRechargeLists } from './recharge-DUlermqD.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import '@vue/shared';
import './index-C2yEelJa.mjs';
import 'lodash-unified';
import './position-DVxxNIGX.mjs';
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
    const router = useRouter();
    const appStore = useAppStore();
    const userStore = useUserStore();
    const rechargeLists = ref([]);
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
    const accountData = ref({
      balance: "",
      robot_num: "",
      video_num: ""
    });
    const currentIndex = ref(0);
    const runtimeConfig = useRuntimeConfig();
    const payWay = ref(PayWayEnum.WECHAT);
    const currentPackage = computed(() => {
      return rechargeLists.value[currentIndex.value] || {};
    });
    const getData = async () => {
      const data = await getRechargeLists();
      rechargeLists.value = data.lists;
      accountData.value = data.extend;
      const selectIndex = rechargeLists.value.findIndex(
        (item) => item.is_recommend
      );
      currentIndex.value = selectIndex === -1 ? 0 : selectIndex;
    };
    getData();
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
        redirect: `${runtimeConfig.app.baseURL}user/record?type=recharge`,
        code: wechatoa.getAuthData().code
      });
      await pay.run({
        payWay: payWay.value,
        orderId: orderInfo.order_id,
        from: orderInfo.from,
        config: payInfo.config
      });
      await userStore.getUser();
      await feedback.alertSuccess("\u652F\u4ED8\u6210\u529F");
      router.push({
        path: "/user/record",
        query: {
          id: orderInfo.order_id,
          type: "recharge"
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElScrollbar = ElScrollbar;
      const _component_Price = __nuxt_component_1;
      const _component_PaymentSelect = __nuxt_component_2;
      const _component_ElButton = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col min-h-0 h-full" }, _attrs))} data-v-494a1cbe>`);
      _push(ssrRenderComponent(_component_ElScrollbar, { class: "scrollbar rounded-[12px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-3 md:grid-cols-3 gap-4 h-[150px] bg-[#EEF2FF] py-[20px] rounded-[12px] flex-none dark:bg-body" data-v-494a1cbe${_scopeId}><div class="flex flex-col pl-[30px] items-start justify-center" data-v-494a1cbe${_scopeId}><div class="flex flex-col items-center" data-v-494a1cbe${_scopeId}><img${ssrRenderAttr("src", unref(userStore).userInfo.avatar)} class="w-[64px] h-[64px] rounded-full" data-v-494a1cbe${_scopeId}><div class="mt-[10px] text-sm" data-v-494a1cbe${_scopeId}> \u7528\u6237ID: ${ssrInterpolate(unref(userStore).userInfo.sn)}</div></div></div><div class="flex flex-col items-center justify-center" data-v-494a1cbe${_scopeId}><div class="font-medium text-[25px] text-[#0256FF]" data-v-494a1cbe${_scopeId}>${ssrInterpolate(unref(accountData).balance)}</div><div class="mt-[4px]" data-v-494a1cbe${_scopeId}>\u5269\u4F59${ssrInterpolate(unref(appStore).getTokenUnit)}</div></div><div class="flex flex-col items-end justify-center pr-[30px]" data-v-494a1cbe${_scopeId}><div class="flex flex-col items-center" data-v-494a1cbe${_scopeId}><div class="font-medium text-[25px] text-[#0256FF]" data-v-494a1cbe${_scopeId}>${ssrInterpolate(unref(accountData).robot_num)}</div><div class="mt-[4px]" data-v-494a1cbe${_scopeId}>\u667A\u80FD\u4F53\u6570\u91CF</div></div></div></div>`);
            if (unref(appStore).getIsShowRecharge) {
              _push2(`<div class="bg-[#EEF2FF] mt-[16px] rounded-[12px] flex-1 min-h-0 dark:bg-body" data-v-494a1cbe${_scopeId}><div class="p-[26px] pb-[120px] bg-[#EEF2FF] dark:bg-[#1D2025]" data-v-494a1cbe${_scopeId}><div class="flex flex-col" data-v-494a1cbe${_scopeId}><div class="text-2xl font-medium" data-v-494a1cbe${_scopeId}>\u9009\u62E9\u5957\u9910</div><div class="recharge-lists flex flex-wrap" data-v-494a1cbe${_scopeId}><!--[-->`);
              ssrRenderList(unref(rechargeLists), (item, index) => {
                _push2(`<div class="${ssrRenderClass([{
                  active: index === unref(currentIndex)
                }, "recharge-item relative"])}" data-v-494a1cbe${_scopeId}>`);
                if (item.tags != "") {
                  _push2(`<div class="absolute top-[-8px] left-[-1px] bg-[#FF7272] px-[12px] py-[2px] text-white rounded-tl-[10px] rounded-br-[10px] text-xs" data-v-494a1cbe${_scopeId}>${ssrInterpolate(item.tags)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div data-v-494a1cbe${_scopeId}><div data-v-494a1cbe${_scopeId}><div class="text-xl font-medium mb-[10px] line-clamp-1" data-v-494a1cbe${_scopeId}>${ssrInterpolate(item.name)}</div>`);
                _push2(ssrRenderComponent(_component_Price, {
                  content: item.sell_price,
                  "main-size": "28px",
                  "minor-size": "16px"
                }, null, _parent2, _scopeId));
                _push2(`<div class="${ssrRenderClass([{
                  "opacity-0": item.line_price === "0.00"
                }, "mb-[20px]"])}" data-v-494a1cbe${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Price, {
                  prefix: "\u539F\u4EF7",
                  content: item.line_price,
                  "main-size": "14px",
                  "line-through": "",
                  color: "#999"
                }, null, _parent2, _scopeId));
                _push2(`</div></div><div class="border-t border-solid border-br-light pt-[10px]" data-v-494a1cbe${_scopeId}><!--[-->`);
                ssrRenderList(unref(packageBenefits), (bItem, index2) => {
                  _push2(`<div class="text-sm py-[8px]" data-v-494a1cbe${_scopeId}><div class="flex" data-v-494a1cbe${_scopeId}><span class="text-tx-secondary mr-auto" data-v-494a1cbe${_scopeId}>${ssrInterpolate(bItem.label)}</span><div class="relative" data-v-494a1cbe${_scopeId}>`);
                  if (item[bItem.key] > 0) {
                    _push2(`<span data-v-494a1cbe${_scopeId}>${ssrInterpolate(Number(
                      item[bItem.key]
                    ))}${ssrInterpolate(bItem.unit)}</span>`);
                  } else {
                    _push2(`<span data-v-494a1cbe${_scopeId}>-</span>`);
                  }
                  _push2(`</div></div></div>`);
                });
                _push2(`<!--]-->`);
                if (item.is_give) {
                  _push2(`<div class="py-[8px] text-primary text-sm" data-v-494a1cbe${_scopeId}> \u8D60: `);
                  if (item["give_chat_balance"]) {
                    _push2(`<span data-v-494a1cbe${_scopeId}>${ssrInterpolate(item["give_chat_balance"])}${ssrInterpolate(unref(appStore).getTokenUnit)} ${ssrInterpolate(item["give_robot_number"] ? "\uFF0C" : "")}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (item["give_robot_number"]) {
                    _push2(`<span data-v-494a1cbe${_scopeId}>${ssrInterpolate(item["give_robot_number"])}\u667A\u80FD\u4F53 </span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div></div>`);
              });
              _push2(`<!--]--></div></div><div class="mt-[10px]" data-v-494a1cbe${_scopeId}><div class="text-2xl font-medium mb-[5px]" data-v-494a1cbe${_scopeId}> \u652F\u4ED8\u65B9\u5F0F </div>`);
              _push2(ssrRenderComponent(_component_PaymentSelect, {
                modelValue: unref(payWay),
                "onUpdate:modelValue": ($event) => isRef(payWay) ? payWay.value = $event : null,
                from: "recharge"
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              _push2(`<div class="w-full h-full bg-[#EEF2FF] mt-[16px] p-[26px] rounded-[12px] flex items-center justify-center" data-v-494a1cbe${_scopeId}><div class="text-xl" data-v-494a1cbe${_scopeId}>\u529F\u80FD\u672A\u5F00\u542F!</div></div>`);
            }
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-3 md:grid-cols-3 gap-4 h-[150px] bg-[#EEF2FF] py-[20px] rounded-[12px] flex-none dark:bg-body" }, [
                createVNode("div", { class: "flex flex-col pl-[30px] items-start justify-center" }, [
                  createVNode("div", { class: "flex flex-col items-center" }, [
                    createVNode("img", {
                      src: unref(userStore).userInfo.avatar,
                      class: "w-[64px] h-[64px] rounded-full"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "mt-[10px] text-sm" }, " \u7528\u6237ID: " + toDisplayString(unref(userStore).userInfo.sn), 1)
                  ])
                ]),
                createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                  createVNode("div", { class: "font-medium text-[25px] text-[#0256FF]" }, toDisplayString(unref(accountData).balance), 1),
                  createVNode("div", { class: "mt-[4px]" }, "\u5269\u4F59" + toDisplayString(unref(appStore).getTokenUnit), 1)
                ]),
                createVNode("div", { class: "flex flex-col items-end justify-center pr-[30px]" }, [
                  createVNode("div", { class: "flex flex-col items-center" }, [
                    createVNode("div", { class: "font-medium text-[25px] text-[#0256FF]" }, toDisplayString(unref(accountData).robot_num), 1),
                    createVNode("div", { class: "mt-[4px]" }, "\u667A\u80FD\u4F53\u6570\u91CF")
                  ])
                ])
              ]),
              unref(appStore).getIsShowRecharge ? (openBlock(), createBlock("div", {
                key: 0,
                class: "bg-[#EEF2FF] mt-[16px] rounded-[12px] flex-1 min-h-0 dark:bg-body"
              }, [
                createVNode("div", { class: "p-[26px] pb-[120px] bg-[#EEF2FF] dark:bg-[#1D2025]" }, [
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("div", { class: "text-2xl font-medium" }, "\u9009\u62E9\u5957\u9910"),
                    createVNode("div", { class: "recharge-lists flex flex-wrap" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(rechargeLists), (item, index) => {
                        return openBlock(), createBlock("div", {
                          key: item.id,
                          class: ["recharge-item relative", {
                            active: index === unref(currentIndex)
                          }],
                          onClick: ($event) => currentIndex.value = index
                        }, [
                          item.tags != "" ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "absolute top-[-8px] left-[-1px] bg-[#FF7272] px-[12px] py-[2px] text-white rounded-tl-[10px] rounded-br-[10px] text-xs"
                          }, toDisplayString(item.tags), 1)) : createCommentVNode("", true),
                          createVNode("div", null, [
                            createVNode("div", null, [
                              createVNode("div", { class: "text-xl font-medium mb-[10px] line-clamp-1" }, toDisplayString(item.name), 1),
                              createVNode(_component_Price, {
                                content: item.sell_price,
                                "main-size": "28px",
                                "minor-size": "16px"
                              }, null, 8, ["content"]),
                              createVNode("div", {
                                class: [{
                                  "opacity-0": item.line_price === "0.00"
                                }, "mb-[20px]"]
                              }, [
                                createVNode(_component_Price, {
                                  prefix: "\u539F\u4EF7",
                                  content: item.line_price,
                                  "main-size": "14px",
                                  "line-through": "",
                                  color: "#999"
                                }, null, 8, ["content"])
                              ], 2)
                            ]),
                            createVNode("div", { class: "border-t border-solid border-br-light pt-[10px]" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(packageBenefits), (bItem, index2) => {
                                return openBlock(), createBlock("div", {
                                  class: "text-sm py-[8px]",
                                  key: index2
                                }, [
                                  createVNode("div", { class: "flex" }, [
                                    createVNode("span", { class: "text-tx-secondary mr-auto" }, toDisplayString(bItem.label), 1),
                                    createVNode("div", { class: "relative" }, [
                                      item[bItem.key] > 0 ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(Number(
                                        item[bItem.key]
                                      )) + toDisplayString(bItem.unit), 1)) : (openBlock(), createBlock("span", { key: 1 }, "-"))
                                    ])
                                  ])
                                ]);
                              }), 128)),
                              item.is_give ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "py-[8px] text-primary text-sm"
                              }, [
                                createTextVNode(" \u8D60: "),
                                item["give_chat_balance"] ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(item["give_chat_balance"]) + toDisplayString(unref(appStore).getTokenUnit) + " " + toDisplayString(item["give_robot_number"] ? "\uFF0C" : ""), 1)) : createCommentVNode("", true),
                                item["give_robot_number"] ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item["give_robot_number"]) + "\u667A\u80FD\u4F53 ", 1)) : createCommentVNode("", true)
                              ])) : createCommentVNode("", true)
                            ])
                          ])
                        ], 10, ["onClick"]);
                      }), 128))
                    ])
                  ]),
                  createVNode("div", { class: "mt-[10px]" }, [
                    createVNode("div", { class: "text-2xl font-medium mb-[5px]" }, " \u652F\u4ED8\u65B9\u5F0F "),
                    createVNode(_component_PaymentSelect, {
                      modelValue: unref(payWay),
                      "onUpdate:modelValue": ($event) => isRef(payWay) ? payWay.value = $event : null,
                      from: "recharge"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "w-full h-full bg-[#EEF2FF] mt-[16px] p-[26px] rounded-[12px] flex items-center justify-center"
              }, [
                createVNode("div", { class: "text-xl" }, "\u529F\u80FD\u672A\u5F00\u542F!")
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(appStore).getIsShowRecharge) {
        _push(`<div class="absolute left-0 bottom-0 w-full px-[26px]" data-v-494a1cbe><div class="mt-[40px] flex justify-between rounded-[12px] bg-white py-[15px] px-[20px] dark:bg-page" data-v-494a1cbe><div data-v-494a1cbe> \u5B9E\u4ED8\u91D1\u989D\uFF1A `);
        _push(ssrRenderComponent(_component_Price, {
          content: unref(currentPackage).sell_price,
          "main-size": "24px",
          "minor-size": "14px",
          color: "#FF7021"
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_ElButton, {
          type: "primary",
          size: "large",
          loading: unref(isLock),
          onClick: unref(payNow),
          style: { "border": "none", "border-radius": "6px", "padding": "0 54px" }
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
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index/recharge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const recharge = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-494a1cbe"]]);

export { recharge as default };
//# sourceMappingURL=recharge-NT6zxiEg.mjs.map
