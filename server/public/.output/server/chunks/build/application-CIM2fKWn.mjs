import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { a as useRouter, a5 as useAppStore, z as useUserStore } from './server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, withDirectives, toDisplayString, vShow, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import RedeemCodePop from './redeem-code-pop-abs7srJ_.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './index-L-VTEUEA.mjs';
import '@vueuse/core';
import '@popperjs/core';
import '@vue/shared';
import 'lodash-unified';
import './dropdown-C6fgV-Vy.mjs';
import 'vue-router';
import 'lodash-es';
import 'weixin-js-sdk';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-DLL0sEcv.mjs';
import 'async-validator';
import './useLockFn-BWbjkhBs.mjs';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAQvSURBVHic7ZxNdhpHFIW/142VKUtAOyArCJ7ZSOeYrCDyONEPKxCsoBEkJ0ORFUQ5J3A8C16BlRWYHYRpMPTLII1iEVlQP91qUH0zIdW7XZeiKfW73RAIBAKBQCAQCAQCgcDzQnwXbCVaXVSoL6EqSvXuFzG3B3OmN22Z7YPmCm8GNvt6IsJ3qjQeFRQmKL+9WDJ0nZiJpqa8P0jp+TbT2cBmX0+AS6BmKDxTaI/PZGiq+XqgLVESG02gOzqTnqnmIzXtaV5pB+HS8QB6ozNpF6oZMRz9IG9datzVsh141NdE4cLLQWw5IR/m/SfKzfhUvnUtE9kMOurrhS/zADTlpHmlnU2a3swDUFqbNLfBeAW+SrQWx3xQPvu280S65PBdW6brr7cSrX6K+ZiHJjFfj7+XW9vhxiswirnMZSJZ7Yden0dc5KUpKYnTeJM/biVancf85SK4ifVVmOvqW+GwCo1W4DymZSNiQrym8XeFRq7mASzs52VkoER8Yyu0LSr3NSLNX9NlXmbnQDXbuNog66stynn1AS4r3Gobkye6/iYV8Kahe2TgrhEMdCQY6Ijpl4j1jr3UiP28jAxU+NNWqMyI8t52rJGB6ZKJrVCZ0dh+XkYGZv9iDW3FyogIk0IvJqRLutmV3b1AoOsy3tjAbBU6iZYGpfv7qUxcSlhtY0Zn0kN320SJGI7PpeNax3ofOD6Xzq6aKNDz1RNx2kiPz6UTCS+BqY+DKYAp8NakibWJimuB7BxyeDzQhsIlSj3363eGiDBR5RebFuomnA1ckRk5AWj9rLXFws9VFI1oR6ndG5JGzFy2KIFA+fEeLgJo/qR1Xx8711p5h4u8nQNXQR+Uui6ppraFlkyBw9WPkpKkG8JDj9TiU8zsaKC3vgJN6zhfDzweaKPZ14/AtWoBHTRDFKrZcSXzmA+vB+q1s+hkYPNKO6nyB4YpqSekJsqvR311aqZ/jrWBXoM+BaNwcfSjXvuoZR0u2lXzVmwTaNoGYwNfJVqD3TbvDuEym481pQoXPQVxBaePspGBrUSrQv75mCJRpeGyCo3DRfu0+lasB5pMKF246EkQ3tgONWtrOmRIykxh4aL/Jaf2hRAuejqCgY6Uz0C533PWkvegSxcukrWgj2gBDau9Chel9zVSsQ/+2GqaULpw0Yvl/ezNVwsmeUdJomhPwkUiTNavGN+0ZaZwk6emS7zDKlxkK7YJjXiw4Z1pTvPQfJpwUR6RDqX7pR7uu7ZMBa58Swr0XMNFz/Z2VxEmo1N56VrHeh84OpO2j5VoEvTxFWgS6PkwL6vlhu3t9/x7Tuva5FWOB9pIlesiNb+El8Z6dkflCcKbTQ+AQLhFufIxiW0fOrHSTJdMHrof2YVcHnsyP6DGkvrqNRVmMcwqC27zeuxJ0ZqBQCAQCAQCgUAgEAg8V/4BdOHB8rGc27EAAAAASUVORK5CYII=";
const DistributionBg = "" + buildAssetsURL("distribution_bg.BLJKEUmh.png");
const RedeemCodeBg = "" + buildAssetsURL("redeem_code_bg.DbIVCKno.png");
const TaskRewardBg = "" + buildAssetsURL("task_reward_bg.B2TpBv6W.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "application",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const router = useRouter();
    const appStore = useAppStore();
    useUserStore();
    const showRedeemCode = ref(false);
    const navList = [
      {
        title: "\u5206\u9500\u63A8\u5E7F",
        description: "\u9080\u8BF7\u4F19\u4F34\u4E00\u8D77\u52A0\u5165\u5427\uFF01",
        background: DistributionBg,
        link: "/user/promotion/distribution",
        show: (_b = (_a = appStore == null ? void 0 : appStore.config) == null ? void 0 : _a.distribution) == null ? void 0 : _b.is_open
      },
      {
        title: "\u5361\u5BC6\u5151\u6362",
        description: `\u53EF\u5151\u6362\u4F1A\u5458\u3001\u5957\u9910\u3001${appStore.getTokenUnit}\uFF01`,
        background: RedeemCodeBg,
        link: "",
        show: (_c = appStore == null ? void 0 : appStore.getRedeemCode) == null ? void 0 : _c.is_open
      },
      {
        title: "\u4EFB\u52A1\u5956\u52B1",
        description: "\u9080\u8BF7\u597D\u53CB\uFF0C\u5206\u4EAB\u7ED8\u753B\u3001\u97F3\u4E50\u7B49\uFF01",
        background: TaskRewardBg,
        link: "/user/task_reward",
        show: true
      }
    ];
    const handleNavList = async (row) => {
      if (row.link.length) {
        router.push(row.link);
      } else {
        showRedeemCode.value = true;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popover = ElPopover;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "application cursor-pointer ml-[20px]" }, _attrs))} data-v-5d3f4170>`);
      _push(ssrRenderComponent(_component_el_popover, {
        placement: "bottom",
        width: 350,
        trigger: "hover",
        "show-arrow": false,
        transition: "custom-popover",
        teleported: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 gap-y-[15px]" data-v-5d3f4170${_scopeId}><!--[-->`);
            ssrRenderList(navList, (item) => {
              _push2(`<div style="${ssrRenderStyle([
                item.show ? null : { display: "none" },
                {
                  "background-image": `url(${item.background})`
                }
              ])}" class="card-item rounded-[12px] p-[20px]" data-v-5d3f4170${_scopeId}><div class="text-[#333333] text-base font-medium" data-v-5d3f4170${_scopeId}>${ssrInterpolate(item.title)}</div><div class="text-tx-secondary text-xs mt-[10px]" data-v-5d3f4170${_scopeId}>${ssrInterpolate(item.description)}</div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 gap-y-[15px]" }, [
                (openBlock(), createBlock(Fragment, null, renderList(navList, (item) => {
                  return withDirectives(createVNode("div", {
                    key: item.background,
                    class: "card-item rounded-[12px] p-[20px]",
                    style: {
                      "background-image": `url(${item.background})`
                    },
                    onClick: ($event) => handleNavList(item)
                  }, [
                    createVNode("div", { class: "text-[#333333] text-base font-medium" }, toDisplayString(item.title), 1),
                    createVNode("div", { class: "text-tx-secondary text-xs mt-[10px]" }, toDisplayString(item.description), 1)
                  ], 12, ["onClick"]), [
                    [vShow, item.show]
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        reference: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} class="w-[24px] h-[24px]" alt="" data-v-5d3f4170${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                class: "w-[24px] h-[24px]",
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(showRedeemCode)) {
        _push(ssrRenderComponent(RedeemCodePop, {
          onClose: ($event) => showRedeemCode.value = false
        }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/header/application.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const application = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5d3f4170"]]);

export { application as default };
//# sourceMappingURL=application-CIM2fKWn.mjs.map
