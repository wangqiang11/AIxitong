import { E as ElDialog } from './index-CzJm6kkT.mjs';
import { a as useRouter, a5 as useAppStore, z as useUserStore, bo as copy, bZ as checkRedeemCode, b_ as useRedeemCode, A as feedback, d as ElButton, E as ElInput } from './server.mjs';
import { a as ElFormItem } from './index-DLL0sEcv.mjs';
import { useSSRContext, defineComponent, ref, unref, isRef, withCtx, createTextVNode, openBlock, createBlock, createVNode, toDisplayString, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './use-dialog-DHq_GjFf.mjs';
import '@vueuse/core';
import 'lodash-unified';
import './refs-CJvnaIJj.mjs';
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
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import 'async-validator';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "redeem-code-pop",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const router = useRouter();
    const appStore = useAppStore();
    const userStore = useUserStore();
    const code = ref("");
    const queryVisible = ref(true);
    const checkVisible = ref(false);
    const checkResult = ref({
      content: "",
      failure_time: "",
      id: "",
      sn: "",
      type: "",
      type_desc: "",
      valid_time: ""
    });
    const { isLock: isQuery, lockFn: queryRedeem } = useLockFn(async () => {
      try {
        const data = await checkRedeemCode({ sn: code.value });
        checkVisible.value = true;
        checkResult.value = data;
      } catch (error) {
        code.value = "";
        console.log("\u67E5\u8BE2\u5361\u5BC6\u5931\u8D25=>", error);
      }
    });
    const { isLock: isUse, lockFn: onUseRedeemCode } = useLockFn(async () => {
      try {
        await useRedeemCode({ sn: code.value });
        feedback.msgSuccess("\u5151\u6362\u6210\u529F");
        checkVisible.value = false;
        queryVisible.value = false;
        code.value = "";
        await userStore.getUser();
        await router.push({
          path: "/user/record",
          query: {
            time: (/* @__PURE__ */ new Date()).getTime()
          }
        });
        emit("close");
      } catch (error) {
        console.log("\u5151\u6362\u5361\u5BC6\u5931\u8D25=>", error);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElDialog = ElDialog;
      const _component_ElButton = ElButton;
      const _component_ElInput = ElInput;
      const _component_el_button = ElButton;
      const _component_el_form_item = ElFormItem;
      _push(`<!--[-->`);
      if (unref(queryVisible)) {
        _push(`<div class="redeem-code-query-pop" data-v-c4e52e63>`);
        _push(ssrRenderComponent(_component_ElDialog, {
          modelValue: unref(queryVisible),
          "onUpdate:modelValue": ($event) => isRef(queryVisible) ? queryVisible.value = $event : null,
          title: "\u5361\u5BC6\u5151\u6362",
          width: "600",
          onClose: ($event) => emit("close")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              if ((_a = unref(appStore).getRedeemCode) == null ? void 0 : _a.is_show) {
                _push2(`<div class="flex justify-between pt-4 text-base" data-v-c4e52e63${_scopeId}><div data-v-c4e52e63${_scopeId}><span class="mr-2" data-v-c4e52e63${_scopeId}>\u8D2D\u4E70\u94FE\u63A5:</span><span data-v-c4e52e63${_scopeId}>${ssrInterpolate(unref(appStore).getRedeemCode.buy_site)}</span></div>`);
                _push2(ssrRenderComponent(_component_ElButton, {
                  type: "primary",
                  link: true,
                  onClick: ($event) => unref(copy)(unref(appStore).getRedeemCode.buy_site)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`\u590D\u5236`);
                    } else {
                      return [
                        createTextVNode("\u590D\u5236")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex pt-[40px]" data-v-c4e52e63${_scopeId}><div class="flex-1" data-v-c4e52e63${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ElInput, {
                modelValue: unref(code),
                "onUpdate:modelValue": ($event) => isRef(code) ? code.value = $event : null,
                placeholder: "\u8BF7\u8F93\u5165\u5361\u5BC6\u7F16\u53F7",
                size: "large"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex justify-end w-[110px]" data-v-c4e52e63${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_button, {
                type: "primary",
                size: "large",
                loading: unref(isQuery),
                onClick: unref(queryRedeem)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u67E5\u8BE2 `);
                  } else {
                    return [
                      createTextVNode(" \u67E5\u8BE2 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                ((_b = unref(appStore).getRedeemCode) == null ? void 0 : _b.is_show) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex justify-between pt-4 text-base"
                }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "mr-2" }, "\u8D2D\u4E70\u94FE\u63A5:"),
                    createVNode("span", null, toDisplayString(unref(appStore).getRedeemCode.buy_site), 1)
                  ]),
                  createVNode(_component_ElButton, {
                    type: "primary",
                    link: true,
                    onClick: ($event) => unref(copy)(unref(appStore).getRedeemCode.buy_site)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u590D\u5236")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "flex pt-[40px]" }, [
                  createVNode("div", { class: "flex-1" }, [
                    createVNode(_component_ElInput, {
                      modelValue: unref(code),
                      "onUpdate:modelValue": ($event) => isRef(code) ? code.value = $event : null,
                      placeholder: "\u8BF7\u8F93\u5165\u5361\u5BC6\u7F16\u53F7",
                      size: "large"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex justify-end w-[110px]" }, [
                    createVNode(_component_el_button, {
                      type: "primary",
                      size: "large",
                      loading: unref(isQuery),
                      onClick: unref(queryRedeem)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u67E5\u8BE2 ")
                      ]),
                      _: 1
                    }, 8, ["loading", "onClick"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(checkVisible)) {
        _push(`<div class="redeem-code-check-pop" data-v-c4e52e63>`);
        _push(ssrRenderComponent(_component_ElDialog, {
          modelValue: unref(checkVisible),
          "onUpdate:modelValue": ($event) => isRef(checkVisible) ? checkVisible.value = $event : null,
          width: "400"
        }, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-lg text-center font-medium" data-v-c4e52e63${_scopeId}>\u67E5\u8BE2\u7ED3\u679C</div>`);
            } else {
              return [
                createVNode("div", { class: "text-lg text-center font-medium" }, "\u67E5\u8BE2\u7ED3\u679C")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="h-full" data-v-c4e52e63${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_form_item, { label: "\u5361\u5BC6\u7C7B\u578B\uFF1A" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(checkResult).type_desc)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(checkResult).type_desc), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_form_item, { label: "\u5361\u5BC6\u9762\u989D\uFF1A" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(checkResult).content)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(checkResult).content), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_form_item, { label: "\u5151\u6362\u65F6\u95F4\uFF1A" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(checkResult).failure_time)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(checkResult).failure_time), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (unref(checkResult).valid_time) {
                _push2(ssrRenderComponent(_component_el_form_item, { label: "\u6709\u6548\u671F\u81F3\uFF1A" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(checkResult).valid_time)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(checkResult).valid_time), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex-1 flex justify-center items-center bg-white pt-[20px]" data-v-c4e52e63${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_button, {
                class: "w-full",
                type: "primary",
                size: "large",
                loading: unref(isUse),
                onClick: unref(onUseRedeemCode)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u7ACB\u5373\u5151\u6362 `);
                  } else {
                    return [
                      createTextVNode(" \u7ACB\u5373\u5151\u6362 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "h-full" }, [
                  createVNode(_component_el_form_item, { label: "\u5361\u5BC6\u7C7B\u578B\uFF1A" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(checkResult).type_desc), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u5361\u5BC6\u9762\u989D\uFF1A" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(checkResult).content), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "\u5151\u6362\u65F6\u95F4\uFF1A" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(checkResult).failure_time), 1)
                    ]),
                    _: 1
                  }),
                  unref(checkResult).valid_time ? (openBlock(), createBlock(_component_el_form_item, {
                    key: 0,
                    label: "\u6709\u6548\u671F\u81F3\uFF1A"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(checkResult).valid_time), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "flex-1 flex justify-center items-center bg-white pt-[20px]" }, [
                  createVNode(_component_el_button, {
                    class: "w-full",
                    type: "primary",
                    size: "large",
                    loading: unref(isUse),
                    onClick: unref(onUseRedeemCode)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u7ACB\u5373\u5151\u6362 ")
                    ]),
                    _: 1
                  }, 8, ["loading", "onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/header/redeem-code-pop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RedeemCodePop = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4e52e63"]]);

export { RedeemCodePop as default };
//# sourceMappingURL=redeem-code-pop-abs7srJ_.mjs.map
