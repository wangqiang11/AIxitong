import { E as ElInput, B as vLoading } from './server.mjs';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { E as ElTooltip } from './index-L-VTEUEA.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useVModels } from '@vueuse/core';
import _sfc_main$1 from './sidbar-item-title-aTPs1IEb.mjs';
import PromptSelector from './prompt-selector-DeTNndAA.mjs';
import { b as checkUserLogin, a as config } from './useDrawEffect-B2jxDCVi.mjs';
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
import '@popperjs/core';
import './index-CJqYHNUB.mjs';
import './dropdown-C6fgV-Vy.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-0xCxAaTZ.mjs';
import './el-result-V-Bl2idQ.mjs';
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './usePaging-DU8sXki3.mjs';
import './usePolling-DOP50YcO.mjs';
import './DrawEnum-CqAPEJOR.mjs';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABHNCSVQICAgIfAhkiAAABl5JREFUeF7tXc1vW0UQ31n3iESRuHCqK8GZ9B+A5MyhrYQEnDDc8XuOkUAidt3YEiDFX8kVqQ2ncsK9cG36D4DFFSSCxBHRInEARHaYNXabkvexa+ftrPP2SbnE+3Z2fr+d/ZjdNwPiHJ56e3AdEG8IAVUBokpV6r9yPCiOhMApVOThqNOY2ioNti8sysed4WWlRAQCY/rf5WXruVDvIU6IiAYRcWyq11IExDt7N1DKYal6uimiQjwGCVum1mBNQL09vEW9vmPenlKWNCbBioCo1b8jAGqlhNRe6ePx7vbVvNeMCYhb/RoC3MmrMPz+FAGF2DjoNkdZmBgRQBNuFRX+lAcuIv5OK6GpAKSVQQkehE0A8XqGprlWYERA1Bo8oOXlZpogAv5nibI26jXKAfwpIOKd4aYCNQGA55PwoQn5ataqKJcALQAlPkgFX4hDKSEmIY9L0OcTVfyg1Y8lgF4VnnlA0Yooo2PmEkCbrLtU6N2kyhHFw/3udqpllIWQrCEaBd7e322mrhpzCYjag0cE5JmNlh7vZUVu2Gw6LjIhhBMmdtJVCMgafkja4f7udu0ig2qjm3MCQKmbo96HE5tGXuSyhRBQb/c7IODWMrP7RQY7STfnBNAuL3f+KBMJgQBmtgMBgQBmBJjFBwsIBJghQLvGjZMTTPSbmNVQbKmD7vbDZSR4bwH6CBNPlD5PoLNjr58pOdBu2u7wvSeAfEojWrdGXkO/aBwdtI+721s2bfWeAGqgPk+o2ijFWZas4AUbD6/3BNRb/Sn5zF/lBNVGtu1G03sCsnzmNsC4KEuOxvvkaLSaq7wnQAOX5VtyAayJDA0+HTDVbIYfXe9aELAAQLu5TcBwXuaSmNoCv2jjWhHgHFgHAgMBDkDOEhEICAQwI8AsPlhAIIAZAWbxwQICAcwIMIsPFhAIyEdgdoXvRNE1F6jml162xOx7rbGtP39ZaWuzE9YnYXTFXV/ydfE9mf5C5ZpLErwfguhAZkIHMtdX7Wmm77u+Ouk/Aa3+MZ0HXDEFcNVyrm9u+0+Aewuw9umvQrr3BOg5QJ2oo7QvSVZR/v/vzq/Ob5p+Knoesr0nQCupV0FK0YfdKDbOQ+nEOkBM6UBl5HIC1u1YCwIKA92DigMBzCQEAgIBzAgwiw8WEAhgRoBZfLCAQAAzAszigwUEApgRYBYfLCAQwIwAs/hgAYEAZgSYxQcLCAQwI8AsPlhAIIAZAWbxwQICAcwIMIsPFhAIYEaAWbwXFqCvnVAkFGe335gxf0a8BJ3I4eyzUtzQrA+rF5/yP8me8V8UFBcXb33CPbcthRGgw1aGJA65+NMdNDGmsAc6y0jikxn5MNUC6OYrxf3Jlx5KCLomeX+/20yNO7EcAQFYcwQUfjXuNd8+XwswF1/ukrORQn4+3m18HAhw3BVo6KFRmrLtrBK82ya8zCx7BsBEKkXxpCulyyWAUpzKsfA0kLoTArQQKaW+El464BeGVdhGjAYxSluV/lAGvfdG3eZdxxbunbjiCEAiIIWBPPPyDqUCG1QIAVF7+BnlSfwocYtNiXtofVstUKe1qroQAuo7lD9GJuePMcmRtVYIrtjYQgiIdvr3hIS3ktqWlx1oRX3W7vVCCKBQk0eUnikxUZltYNO1Q9Sywc4JsA1saqnP2hUPBDBT5pwAlJU39jvRN8x6eyO+EALiT4YxVjAlRZ86oDRWdW8QYG6IcwJI3x9pHniFWW9vxBdCgNau3hoo2gkn7oUlVt4ZdqN73qDA2JDCCKCKfyC9Xk7cDQv8k5xwL5XZCadxmQej+i4Fo9WSeWbNAzOBiL+JSmVr3Im/Z+yArKKzsoPkpXw0OtilYegRDUNZNx6UQPgSKuK26yglrMjrIbo9iAjE1LTl89Bp07R2GhGQawXP1I7/kAv7F25gCpL/Kx1x/fGkbpiF3UntmDrTeJ7D0ogALZDcEl+TW8Iqq0RBILBWSy54WpGYwWbirjeraa5y1oTMioqHwudRu6p5CxQrAmbL0vbgW3rpmoc6O2uSiRXkjf2LxloToF8kN/UXCPB+2v7AGRJMgrIImPV8xJppsuulCNB6N3t7V/7+Cw5pPHytVERk3ArUoTJlBWKbYIFLE3C680WtvU/pAtKb1IAX6SbMc3Q95RJT5yxUbBL2GnSak6dSwWTUaxzZNuBfs3fZnZsEI+4AAAAASUVORK5CYII=";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "prompt",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" },
    model: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const { modelValue: value } = useVModels(props, emit);
    const translateLoading = ref(false);
    const defaultPrompt = ref("");
    const exampleIndex = ref(0);
    const exampleList = ref([]);
    const randomInput = () => {
      if (exampleList.value.length > 0) {
        if (exampleIndex.value < exampleList.value.length - 1) {
          exampleIndex.value++;
        } else {
          exampleIndex.value = 0;
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_el_input = ElInput;
      const _component_Icon = _sfc_main$2;
      const _component_el_tooltip = ElTooltip;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "prompt_container" }, _attrs))} data-v-d1c71eed>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "\u63CF\u8FF0\u8BCD",
        required: "",
        tips: "\u8F93\u5165\u4F60\u5E0C\u671BAI\u7ED8\u5236\u7684\u5185\u5BB9\uFF0C\u65E0\u9700\u5B8C\u6574\u7684\u53E5\u5B50\uFF0C\u53EA\u9700\u8981\u5173\u952E\u7684\u63D0\u793A\u8BCD\u5373\u53EF\uFF0C\u4F46\u5FC5\u987B\u4E3A\u82F1\u6587\u3002\u4F8B\u5982\uFF1A1dog,black hair"
      }, null, _parent));
      _push(`<div data-v-d1c71eed><div class="text-tx-secondary text-xs mb-2" data-v-d1c71eed> \u53C2\u8003\u4E0B\u65B9\u793A\u4F8B\u8F93\u5165\u63CF\u8FF0 </div><div class="tag-container" data-v-d1c71eed><div class="tag" data-v-d1c71eed><span class="mr-1" data-v-d1c71eed>\u4E3B\u4F53\u7269</span><span class="text-tx-primary" data-v-d1c71eed>\u4E0A\u5B66\u7684\u5973\u5B69</span></div><span class="text-primary-light-7" data-v-d1c71eed>+</span><div class="tag" data-v-d1c71eed><span class="mr-1" data-v-d1c71eed>\u7EC6\u8282</span><span class="text-tx-primary" data-v-d1c71eed>\u5F00\u5FC3</span></div><span class="text-primary-light-7" data-v-d1c71eed>+</span><div class="tag" data-v-d1c71eed><span class="mr-1" data-v-d1c71eed>\u7279\u5F81\u8BCD</span><span class="text-tx-primary" data-v-d1c71eed>\u7CBE\u81F4\u4E94\u5B98</span></div></div></div><div${ssrRenderAttrs(mergeProps({
        "element-loading-text": "\u6B63\u5728\u7FFB\u8BD1",
        class: "bg-[var(--el-bg-color-page)] rounded-[12px]"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(translateLoading))))} data-v-d1c71eed>`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        rows: 4,
        "input-style": {
          boxShadow: "unset",
          backgroundColor: "transparent"
        },
        resize: "none",
        type: "textarea",
        placeholder: "\u8BF7\u8F93\u5165\u6B63\u5411\u63D0\u793A\u8BCD",
        onFocus: unref(checkUserLogin)
      }, null, _parent));
      _push(`<div class="flex items-center p-3 pb-2" data-v-d1c71eed>`);
      _push(ssrRenderComponent(PromptSelector, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center cursor-pointer text-[#6F7E8E] text-sm hover:text-primary" data-v-d1c71eed${_scopeId}><img class="w-[13px] h-[13px] align-middle"${ssrRenderAttr("src", _imports_0)} data-v-d1c71eed${_scopeId}><span class="ml-[4px]" data-v-d1c71eed${_scopeId}>\u63CF\u8FF0\u8BCD\u63A8\u8350</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center cursor-pointer text-[#6F7E8E] text-sm hover:text-primary" }, [
                createVNode("img", {
                  class: "w-[13px] h-[13px] align-middle",
                  src: _imports_0
                }),
                createVNode("span", { class: "ml-[4px]" }, "\u63CF\u8FF0\u8BCD\u63A8\u8350")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(config).translate_switch == 1) {
        _push(`<div class="flex items-center cursor-pointer text-[#6F7E8E] text-sm ml-2 hover:text-primary" data-v-d1c71eed>`);
        _push(ssrRenderComponent(_component_Icon, { name: "el-icon-Refresh" }, null, _parent));
        _push(`<span class="ml-[4px]" data-v-d1c71eed>\u7FFB\u8BD1\u6210\u82F1\u6587</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center cursor-pointer text-primary text-sm ml-auto" data-v-d1c71eed>`);
      _push(ssrRenderComponent(_component_Icon, { name: "el-icon-Delete" }, null, _parent));
      _push(`<span class="ml-[4px]" data-v-d1c71eed>\u6E05\u7A7A</span></div></div></div><div class="flex items-center text-sm text-[#798696] mt-2" data-v-d1c71eed><div class="flex items-center gap-1 flex-nowrap" data-v-d1c71eed><span class="whitespace-nowrap" data-v-d1c71eed>\u968F\u4FBF\u8BD5\u8BD5\uFF1A</span></div><div class="flex-[1_0_0] truncate text-[#333333] dark:text-white cursor-pointer hover:text-primary" data-v-d1c71eed>${ssrInterpolate(((_a = unref(exampleList)[unref(exampleIndex)]) == null ? void 0 : _a.prompt) || unref(defaultPrompt))}</div>`);
      _push(ssrRenderComponent(_component_el_tooltip, {
        effect: "dark",
        content: "\u5237\u65B0",
        placement: "bottom"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-d1c71eed${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] p-1 box-content",
              name: "el-icon-RefreshRight",
              size: "18",
              color: "#556477"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                onClick: ($event) => randomInput()
              }, [
                createVNode(_component_Icon, {
                  class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] p-1 box-content",
                  name: "el-icon-RefreshRight",
                  size: "18",
                  color: "#556477"
                })
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/common/prompt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Prompt = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d1c71eed"]]);

export { Prompt as default };
//# sourceMappingURL=prompt-RZrNgRXL.mjs.map
