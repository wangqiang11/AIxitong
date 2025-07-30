import { d as ElButton } from './server.mjs';
import { defineComponent, ref, useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString } from 'vue';
import VueCountdown from '@chenfengyuan/vue-countdown';
import { useThrottleFn } from '@vueuse/core';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = defineComponent({
  components: {
    VueCountdown,
    ElButton
  },
  props: {
    // 倒计时总秒数
    seconds: {
      type: Number,
      default: 60
    },
    // 尚未开始时提示
    startText: {
      type: String,
      default: "\u83B7\u53D6\u9A8C\u8BC1\u7801"
    },
    // 正在倒计时中的提示
    changeText: {
      type: String,
      default: "x\u79D2\u91CD\u65B0\u83B7\u53D6"
    },
    // 倒计时结束时的提示
    endText: {
      type: String,
      default: "\u91CD\u65B0\u83B7\u53D6"
    }
  },
  emits: ["click-get"],
  setup(props, { emit }) {
    const isStart = ref(false);
    const isRetry = ref(false);
    const start = async () => {
      isStart.value = true;
    };
    const getChangeText = (second) => {
      return props.changeText.replace("x", second);
    };
    const handleEnd = () => {
      isStart.value = false;
      isRetry.value = true;
    };
    const handleStart = useThrottleFn(
      () => {
        emit("click-get");
      },
      1e3,
      false
    );
    return {
      getChangeText,
      isStart,
      start,
      isRetry,
      handleEnd,
      handleStart
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ElButton = ElButton;
  const _component_VueCountdown = resolveComponent("VueCountdown");
  if (!_ctx.isStart) {
    _push(ssrRenderComponent(_component_ElButton, mergeProps({
      link: "",
      onClick: _ctx.handleStart
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.isRetry ? _ctx.endText : _ctx.startText)}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.isRetry ? _ctx.endText : _ctx.startText), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(ssrRenderComponent(_component_VueCountdown, mergeProps({
      ref: "vueCountdownRef",
      time: _ctx.seconds * 1e3,
      onEnd: _ctx.handleEnd
    }, _attrs), {
      default: withCtx(({ totalSeconds }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.getChangeText(totalSeconds))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.getChangeText(totalSeconds)), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/verification-code/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=index-6v4EX2UV.mjs.map
