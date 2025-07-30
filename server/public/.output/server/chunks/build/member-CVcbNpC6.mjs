import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { a as useRouter, a5 as useAppStore, z as useUserStore, A as feedback, by as wechatoa, c as useRuntimeConfig, b3 as __nuxt_component_1$1, d as ElButton } from './server.mjs';
import { E as ElSegmented } from './el-segmented-KMsqQ2AI.mjs';
import { P as PayWayEnum, p as prepay, a as pay, _ as __nuxt_component_1, b as __nuxt_component_2 } from './index-DByyRwMr.mjs';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { useSSRContext, defineComponent, withAsyncContext, ref, computed, mergeProps, withCtx, unref, isRef, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList } from 'vue';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import '@vue/shared';
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
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './index-BoqjHllR.mjs';
import './usePolling-DOP50YcO.mjs';

function memberPackageList() {
  return $request.get({ url: "/memberPackage/lists" });
}
function memberPackageBuy(params) {
  return $request.post({ url: "/memberPackage/buy", params });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "member",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const router = useRouter();
    const appStore = useAppStore();
    const userStore = useUserStore();
    const runtimeConfig = useRuntimeConfig();
    const { data: memberLists } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => memberPackageList(), {
      default() {
        return [];
      },
      lazy: true
    }, "$eeO01m0hJa")), __temp = await __temp, __restore(), __temp);
    ref("");
    const payWay = ref(PayWayEnum.WECHAT);
    const memberActiveIndex = ref(-1);
    const memberPackageActiveIndex = ref(-1);
    const memberDurationMap = { "1": "\u5929", "2": "\u4E2A\u6708" };
    const memberActiveData = computed(() => {
      var _a;
      if (memberActiveIndex.value === -1 && ((_a = memberLists.value) == null ? void 0 : _a.length)) {
        const i = memberLists.value.findIndex(
          (item) => item.is_recommend
        );
        memberActiveIndex.value = i !== -1 ? i : 0;
      }
      return memberLists.value[memberActiveIndex.value];
    });
    const memberPackageActiveData = computed(() => {
      var _a, _b, _c, _d;
      if (memberPackageActiveIndex.value === -1 && ((_b = (_a = memberActiveData.value) == null ? void 0 : _a.price_list) == null ? void 0 : _b.length)) {
        const i = ((_c = memberActiveData.value) == null ? void 0 : _c.price_list.findIndex(
          (item) => item.is_recommend
        )) || 0;
        memberPackageActiveIndex.value = i !== -1 ? i : 0;
      }
      return ((_d = memberActiveData.value) == null ? void 0 : _d.price_list) || [];
    });
    const { lockFn: payNow, isLock } = useLockFn(async () => {
      if (!memberPackageActiveData.value[memberPackageActiveIndex.value].id) {
        feedback.msgError("\u8BF7\u9009\u62E9\u4F1A\u5458\u5957\u9910");
      }
      if (!payWay.value) {
        feedback.msgError("\u8BF7\u9009\u62E9\u652F\u4ED8\u65B9\u5F0F");
      }
      const orderInfo = await memberPackageBuy({
        member_price_id: memberPackageActiveData.value[memberPackageActiveIndex.value].id
      });
      const payInfo = await prepay({
        ...orderInfo,
        pay_way: payWay.value,
        redirect: `${runtimeConfig.app.baseURL}user/record?type=member`,
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
          type: "member"
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ElScrollbar = ElScrollbar;
      const _component_client_only = __nuxt_component_1$1;
      const _component_el_segmented = ElSegmented;
      const _component_Price = __nuxt_component_1;
      const _component_PaymentSelect = __nuxt_component_2;
      const _component_ElButton = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col min-h-0 h-full" }, _attrs))} data-v-cd9bd32c>`);
      _push(ssrRenderComponent(_component_ElScrollbar, { class: "scrollbar rounded-[12px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(`<div class="grid grid-cols-3 md:grid-cols-3 gap-4 h-[150px] bg-[#EEF2FF] py-[20px] rounded-[12px] flex-none dark:bg-body" data-v-cd9bd32c${_scopeId}><div class="flex flex-col pl-[30px] items-start justify-center" data-v-cd9bd32c${_scopeId}><div class="flex flex-col items-center" data-v-cd9bd32c${_scopeId}><img${ssrRenderAttr("src", unref(userStore).userInfo.avatar)} class="w-[64px] h-[64px] rounded-full" data-v-cd9bd32c${_scopeId}><div class="mt-[10px] text-sm" data-v-cd9bd32c${_scopeId}> \u7528\u6237ID: ${ssrInterpolate(unref(userStore).userInfo.sn)}</div></div></div><div class="flex flex-col items-center justify-center" data-v-cd9bd32c${_scopeId}><div class="font-medium text-[18px] text-[#0256FF]" data-v-cd9bd32c${_scopeId}>${ssrInterpolate(unref(userStore).userInfo.package_name || "-")}</div><div class="mt-[4px] text-[16px]" data-v-cd9bd32c${_scopeId}>\u5F53\u524D\u7B49\u7EA7</div></div><div class="flex flex-col items-end justify-center pr-[30px]" data-v-cd9bd32c${_scopeId}><div class="flex flex-col items-center" data-v-cd9bd32c${_scopeId}><div class="font-medium text-[18px] text-[#0256FF]" data-v-cd9bd32c${_scopeId}>${ssrInterpolate(unref(userStore).userInfo.package_time || "-")} `);
            if ((_a2 = unref(userStore).userInfo) == null ? void 0 : _a2.package_is_overdue) {
              _push2(`<span data-v-cd9bd32c${_scopeId}>(\u5DF2\u5230\u671F)</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-[4px] text-[16px]" data-v-cd9bd32c${_scopeId}>\u6709\u6548\u671F</div></div></div></div>`);
            if (unref(appStore).getIsShowMember) {
              _push2(`<div class="h-full bg-[#EEF2FF] mt-[16px] rounded-[12px] dark:bg-body" data-v-cd9bd32c${_scopeId}><div class="flex pt-4 ml-4 flex-none" data-v-cd9bd32c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_client_only, null, {}, _parent2, _scopeId));
              _push2(`</div><div class="px-[26px] pb-[120px] bg-[#EEF2FF] dark:bg-[#1D2025]" data-v-cd9bd32c${_scopeId}><div class="flex flex-col mt-4" data-v-cd9bd32c${_scopeId}><div class="text-2xl font-medium" data-v-cd9bd32c${_scopeId}>\u9009\u62E9\u5957\u9910</div><div class="member-lists flex flex-wrap" data-v-cd9bd32c${_scopeId}><!--[-->`);
              ssrRenderList(unref(memberPackageActiveData), (item, index) => {
                _push2(`<div class="${ssrRenderClass([{
                  active: index === unref(memberPackageActiveIndex)
                }, "member-item relative"])}" data-v-cd9bd32c${_scopeId}>`);
                if (item.tags != "") {
                  _push2(`<div class="absolute top-[-8px] left-[-1px] bg-[#FF7272] px-[12px] py-[2px] text-white rounded-tl-[10px] rounded-br-[10px] text-xs" data-v-cd9bd32c${_scopeId}>${ssrInterpolate(item.tags)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div data-v-cd9bd32c${_scopeId}><div class="flex flex-col items-center" data-v-cd9bd32c${_scopeId}><div class="text-xl font-medium mb-[10px] line-clamp-1" data-v-cd9bd32c${_scopeId}>${ssrInterpolate(memberDurationMap[item.duration_type] ? item.duration + memberDurationMap[item.duration_type] : "\u6C38\u4E45")}</div>`);
                _push2(ssrRenderComponent(_component_Price, {
                  content: item.sell_price,
                  "main-size": "28px",
                  "minor-size": "16px"
                }, null, _parent2, _scopeId));
                _push2(`<div class="${ssrRenderClass([{
                  "opacity-0": item.lineation_price === "0.00"
                }, "mb-[20px]"])}" data-v-cd9bd32c${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Price, {
                  prefix: "\u539F\u4EF7",
                  content: item.lineation_price,
                  "main-size": "14px",
                  "line-through": "",
                  color: "#999"
                }, null, _parent2, _scopeId));
                _push2(`</div></div><div class="border-t border-solid border-br-light pt-[10px]" data-v-cd9bd32c${_scopeId}><div class="font-medium text-xl pt-1" data-v-cd9bd32c${_scopeId}> \u4F1A\u5458\u6743\u76CA </div><!--[-->`);
                ssrRenderList(unref(memberActiveData).benefits_list, (bItem, index2) => {
                  _push2(`<div class="text-base py-[8px]" data-v-cd9bd32c${_scopeId}><div class="flex justify-between" data-v-cd9bd32c${_scopeId}><div class="flex flex-1" data-v-cd9bd32c${_scopeId}><img${ssrRenderAttr("src", bItem.image)} class="w-[18px] h-[18px]" data-v-cd9bd32c${_scopeId}><span class="text-tx-primary ml-[10px] line-clamp-1" data-v-cd9bd32c${_scopeId}>${ssrInterpolate(bItem.name)}</span></div><div class="text-primary flex-none ml-2" data-v-cd9bd32c${_scopeId}>${ssrInterpolate(bItem.describe)}</div></div></div>`);
                });
                _push2(`<!--]-->`);
                if (item.is_give) {
                  _push2(`<div class="text-base mt-2 p-[8px] bg-[#f7f7f7] rounded-[12px] dark:!bg-[#2d2d2d]" style="${ssrRenderStyle({
                    background: index === unref(memberPackageActiveIndex) ? "linear-gradient(90deg, rgba(179, 217, 242, 0.5) 0%, rgba(159, 181, 249, 0.5) 100%)" : "#f7f7f7"
                  })}" data-v-cd9bd32c${_scopeId}>`);
                  if (item.give_balance != 0) {
                    _push2(`<div class="pb-[8px]" data-v-cd9bd32c${_scopeId}><span data-v-cd9bd32c${_scopeId}>\u8D60\u9001${ssrInterpolate(unref(appStore).getTokenUnit)}\uFF1A</span><span data-v-cd9bd32c${_scopeId}>${ssrInterpolate(item.give_balance)}</span></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (item.give_robot != 0) {
                    _push2(`<div data-v-cd9bd32c${_scopeId}><span data-v-cd9bd32c${_scopeId}>\u8D60\u9001\u667A\u80FD\u4F53\uFF1A</span><span data-v-cd9bd32c${_scopeId}>${ssrInterpolate(item.give_robot)}</span></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div></div>`);
              });
              _push2(`<!--]--></div></div><div class="mt-[10px]" data-v-cd9bd32c${_scopeId}><div class="text-2xl font-medium mb-[5px]" data-v-cd9bd32c${_scopeId}> \u652F\u4ED8\u65B9\u5F0F </div>`);
              _push2(ssrRenderComponent(_component_PaymentSelect, {
                modelValue: unref(payWay),
                "onUpdate:modelValue": ($event) => isRef(payWay) ? payWay.value = $event : null,
                from: "recharge"
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              _push2(`<div class="w-full h-full bg-[#EEF2FF] mt-[16px] p-[26px] rounded-[12px] flex items-center justify-center" data-v-cd9bd32c${_scopeId}><div class="text-xl" data-v-cd9bd32c${_scopeId}>\u529F\u80FD\u672A\u5F00\u542F!</div></div>`);
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
                  createVNode("div", { class: "font-medium text-[18px] text-[#0256FF]" }, toDisplayString(unref(userStore).userInfo.package_name || "-"), 1),
                  createVNode("div", { class: "mt-[4px] text-[16px]" }, "\u5F53\u524D\u7B49\u7EA7")
                ]),
                createVNode("div", { class: "flex flex-col items-end justify-center pr-[30px]" }, [
                  createVNode("div", { class: "flex flex-col items-center" }, [
                    createVNode("div", { class: "font-medium text-[18px] text-[#0256FF]" }, [
                      createTextVNode(toDisplayString(unref(userStore).userInfo.package_time || "-") + " ", 1),
                      ((_b = unref(userStore).userInfo) == null ? void 0 : _b.package_is_overdue) ? (openBlock(), createBlock("span", { key: 0 }, "(\u5DF2\u5230\u671F)")) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "mt-[4px] text-[16px]" }, "\u6709\u6548\u671F")
                  ])
                ])
              ]),
              unref(appStore).getIsShowMember ? (openBlock(), createBlock("div", {
                key: 0,
                class: "h-full bg-[#EEF2FF] mt-[16px] rounded-[12px] dark:bg-body"
              }, [
                createVNode("div", { class: "flex pt-4 ml-4 flex-none" }, [
                  createVNode(_component_client_only, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_segmented, {
                        modelValue: unref(memberActiveIndex),
                        "onUpdate:modelValue": ($event) => isRef(memberActiveIndex) ? memberActiveIndex.value = $event : null,
                        block: false,
                        class: "segmented !p-[8px] h-[70px] !rounded-[12px] !bg-white dark:!bg-page",
                        options: unref(memberLists).map((item, i) => ({
                          name: item.name,
                          value: i,
                          desc: item.describe
                        }))
                      }, {
                        default: withCtx(({ item, index }) => [
                          createVNode("div", { class: "flex flex-col items-center gap-1 p-2" }, [
                            createVNode("div", { class: "text-xl" }, toDisplayString(item.name), 1),
                            createVNode("div", { class: "text-xs text-tx-secondary tabs-active_desc" }, toDisplayString(item.desc), 1)
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "px-[26px] pb-[120px] bg-[#EEF2FF] dark:bg-[#1D2025]" }, [
                  createVNode("div", { class: "flex flex-col mt-4" }, [
                    createVNode("div", { class: "text-2xl font-medium" }, "\u9009\u62E9\u5957\u9910"),
                    createVNode("div", { class: "member-lists flex flex-wrap" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(memberPackageActiveData), (item, index) => {
                        return openBlock(), createBlock("div", {
                          key: item.id,
                          class: ["member-item relative", {
                            active: index === unref(memberPackageActiveIndex)
                          }],
                          onClick: ($event) => memberPackageActiveIndex.value = index
                        }, [
                          item.tags != "" ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "absolute top-[-8px] left-[-1px] bg-[#FF7272] px-[12px] py-[2px] text-white rounded-tl-[10px] rounded-br-[10px] text-xs"
                          }, toDisplayString(item.tags), 1)) : createCommentVNode("", true),
                          createVNode("div", null, [
                            createVNode("div", { class: "flex flex-col items-center" }, [
                              createVNode("div", { class: "text-xl font-medium mb-[10px] line-clamp-1" }, toDisplayString(memberDurationMap[item.duration_type] ? item.duration + memberDurationMap[item.duration_type] : "\u6C38\u4E45"), 1),
                              createVNode(_component_Price, {
                                content: item.sell_price,
                                "main-size": "28px",
                                "minor-size": "16px"
                              }, null, 8, ["content"]),
                              createVNode("div", {
                                class: [{
                                  "opacity-0": item.lineation_price === "0.00"
                                }, "mb-[20px]"]
                              }, [
                                createVNode(_component_Price, {
                                  prefix: "\u539F\u4EF7",
                                  content: item.lineation_price,
                                  "main-size": "14px",
                                  "line-through": "",
                                  color: "#999"
                                }, null, 8, ["content"])
                              ], 2)
                            ]),
                            createVNode("div", { class: "border-t border-solid border-br-light pt-[10px]" }, [
                              createVNode("div", { class: "font-medium text-xl pt-1" }, " \u4F1A\u5458\u6743\u76CA "),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(memberActiveData).benefits_list, (bItem, index2) => {
                                return openBlock(), createBlock("div", {
                                  class: "text-base py-[8px]",
                                  key: index2
                                }, [
                                  createVNode("div", { class: "flex justify-between" }, [
                                    createVNode("div", { class: "flex flex-1" }, [
                                      createVNode("img", {
                                        src: bItem.image,
                                        class: "w-[18px] h-[18px]"
                                      }, null, 8, ["src"]),
                                      createVNode("span", { class: "text-tx-primary ml-[10px] line-clamp-1" }, toDisplayString(bItem.name), 1)
                                    ]),
                                    createVNode("div", { class: "text-primary flex-none ml-2" }, toDisplayString(bItem.describe), 1)
                                  ])
                                ]);
                              }), 128)),
                              item.is_give ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-base mt-2 p-[8px] bg-[#f7f7f7] rounded-[12px] dark:!bg-[#2d2d2d]",
                                style: {
                                  background: index === unref(memberPackageActiveIndex) ? "linear-gradient(90deg, rgba(179, 217, 242, 0.5) 0%, rgba(159, 181, 249, 0.5) 100%)" : "#f7f7f7"
                                }
                              }, [
                                item.give_balance != 0 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "pb-[8px]"
                                }, [
                                  createVNode("span", null, "\u8D60\u9001" + toDisplayString(unref(appStore).getTokenUnit) + "\uFF1A", 1),
                                  createVNode("span", null, toDisplayString(item.give_balance), 1)
                                ])) : createCommentVNode("", true),
                                item.give_robot != 0 ? (openBlock(), createBlock("div", { key: 1 }, [
                                  createVNode("span", null, "\u8D60\u9001\u667A\u80FD\u4F53\uFF1A"),
                                  createVNode("span", null, toDisplayString(item.give_robot), 1)
                                ])) : createCommentVNode("", true)
                              ], 4)) : createCommentVNode("", true)
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
      if (unref(appStore).getIsShowMember) {
        _push(`<div class="absolute left-0 bottom-0 w-full px-[26px]" data-v-cd9bd32c><div class="mt-[40px] flex justify-between rounded-[12px] bg-white py-[15px] px-[20px] dark:bg-page" data-v-cd9bd32c><div data-v-cd9bd32c> \u5B9E\u4ED8\u91D1\u989D\uFF1A `);
        _push(ssrRenderComponent(_component_Price, {
          content: (_a = unref(memberPackageActiveData)[unref(memberPackageActiveIndex)]) == null ? void 0 : _a.sell_price,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index/member.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const member = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cd9bd32c"]]);

export { member as default };
//# sourceMappingURL=member-CVcbNpC6.mjs.map
