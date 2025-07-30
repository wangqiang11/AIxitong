import { bz as formatPrice, bA as handleClientCallback, by as wechatoa, b0 as ElMessageBox, A as feedback } from './server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, ref, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { useVModel } from '@vueuse/core';
import { u as usePolling } from './usePolling-DOP50YcO.mjs';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    content: { default: "" },
    prec: { default: 2 },
    autoPrec: { type: Boolean, default: true },
    color: { default: "inherit" },
    mainSize: { default: "18px" },
    minorSize: { default: "14px" },
    lineThrough: { type: Boolean, default: false },
    fontWeight: { default: "normal" },
    prefix: { default: "\uFFE5" },
    suffix: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const integer = computed(() => {
      return formatPrice({
        price: props.content,
        take: "int"
      });
    });
    const decimals = computed(() => {
      let decimals2 = formatPrice({
        price: props.content,
        take: "dec",
        prec: props.prec
      });
      decimals2 = decimals2 % 10 === 0 ? decimals2.substr(0, decimals2.length - 1) : decimals2;
      return props.autoPrec ? decimals2 * 1 ? `.${decimals2}` : "" : props.prec ? `.${decimals2}` : "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "price-container" }, _attrs))} data-v-8332824e><div class="${ssrRenderClass(["price-wrap", { "price-wrap--disabled": _ctx.lineThrough }])}" style="${ssrRenderStyle({ color: _ctx.color })}" data-v-8332824e><div class="fix-pre" style="${ssrRenderStyle({ fontSize: _ctx.minorSize })}" data-v-8332824e>`);
      ssrRenderSlot(_ctx.$slots, "prefix", {}, () => {
        _push(`${ssrInterpolate(_ctx.prefix)}`);
      }, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle({ "font-weight": _ctx.fontWeight })}" data-v-8332824e><text style="${ssrRenderStyle({ fontSize: _ctx.mainSize })}" data-v-8332824e>${ssrInterpolate(integer.value)}</text><text style="${ssrRenderStyle({ fontSize: _ctx.minorSize })}" data-v-8332824e>${ssrInterpolate(decimals.value)}</text></div><div class="fix-suf" style="${ssrRenderStyle({ fontSize: _ctx.minorSize })}" data-v-8332824e>`);
      ssrRenderSlot(_ctx.$slots, "suffix", {}, () => {
        _push(`${ssrInterpolate(_ctx.suffix)}`);
      }, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/price/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8332824e"]]);
function getPayWayList(params) {
  return $request.get({ url: "/pay/payWay", params });
}
function prepay(params) {
  return $request.post({ url: "/pay/prepay", params });
}
function getOrderStatus(params) {
  return $request.get({ url: "/pay/payStatus", params });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "select",
  __ssrInlineRender: true,
  props: {
    from: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const payWay = useVModel(props, "modelValue", emit);
    const payWayList = ref([]);
    const getPayWay = async () => {
      var _a;
      const data = await getPayWayList({
        from: props.from
      });
      payWayList.value = data.lists;
      let selectIndex = payWayList.value.findIndex((item) => item.is_default == 1);
      if (selectIndex === -1) selectIndex = 0;
      payWay.value = ((_a = payWayList.value[selectIndex]) == null ? void 0 : _a.pay_way) || "-1";
    };
    getPayWay();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElImage = ElImage;
      const _component_Icon = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap mx-[-8px]" }, _attrs))} data-v-47ace0fb><!--[-->`);
      ssrRenderList(unref(payWayList), (item, index) => {
        _push(`<div class="${ssrRenderClass([{
          active: unref(payWay) == item.pay_way
        }, "flex items-center px-[35px] py-[20px] mx-[8px] mt-[10px] rounded-lg inactive cursor-pointer bg-body"])}" data-v-47ace0fb>`);
        _push(ssrRenderComponent(_component_ElImage, {
          src: item.icon,
          class: "h-[24px] w-[24px]"
        }, null, _parent));
        _push(`<div class="ml-[10px]" data-v-47ace0fb>${ssrInterpolate(item.name)}</div>`);
        if (unref(payWay) == item.pay_way) {
          _push(`<div class="select-icon" data-v-47ace0fb>`);
          _push(ssrRenderComponent(_component_Icon, {
            class: "el-icon-select",
            name: "el-icon-Select"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/payment/select.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-47ace0fb"]]);
class Alipay {
  init(name, pay2) {
    pay2[name] = this;
  }
  run(options) {
    return new Promise((resolve, reject) => {
    });
  }
}
const _Pay = class _Pay2 {
  static inject(name, module) {
    this.modules.set(name, module);
  }
  constructor() {
    for (const [name, module] of _Pay2.modules.entries()) {
      module.init(name, this);
    }
  }
  //调用支付
  async run(options) {
    try {
      const module = this[PayWayEnum[options.payWay]];
      if (!module) {
        return Promise.reject(`can not find pay way ${options.payWay}`);
      }
      return await module.run(options);
    } catch (error) {
      return Promise.reject(error);
    }
  }
};
__publicField(_Pay, "modules", /* @__PURE__ */ new Map());
let Pay = _Pay;
class Wechat {
  init(name, pay2) {
    pay2[name] = this;
  }
  run(options) {
    return new Promise((resolve, reject) => {
      handleClientCallback({
        PC: () => {
          this.sanCodePay(options, resolve, reject);
        },
        H5: () => {
        },
        WEIXIN_OA: () => {
          wechatoa.pay(options.config, resolve, reject);
        }
      });
    });
  }
  sanCodePay(options, resolve, reject) {
    const { start, end } = usePolling(
      async () => {
        const { pay_status } = await getOrderStatus({
          order_id: options.orderId,
          from: options.from
        });
        if (pay_status === 1) {
          resolve("success");
          ElMessageBox.close();
          end();
        }
      },
      {
        key: "payment",
        totalTime: 300 * 1e3,
        callback: () => {
          reject("\u652F\u4ED8\u8D85\u65F6");
          ElMessageBox.close();
          feedback.alertWarning("\u652F\u4ED8\u8D85\u65F6\uFF01");
        }
      }
    );
    start();
  }
  async showQrCode(options) {
  }
}
var PayWayEnum = /* @__PURE__ */ ((PayWayEnum2) => {
  PayWayEnum2[PayWayEnum2["WECHAT"] = 2] = "WECHAT";
  PayWayEnum2[PayWayEnum2["ALIPAY"] = 3] = "ALIPAY";
  return PayWayEnum2;
})(PayWayEnum || {});
const wechat = new Wechat();
Pay.inject(PayWayEnum[2], wechat);
const alipay = new Alipay();
Pay.inject(PayWayEnum[3], alipay);
const pay = new Pay();

export { PayWayEnum as P, __nuxt_component_1 as _, pay as a, __nuxt_component_2 as b, prepay as p };
//# sourceMappingURL=index-DByyRwMr.mjs.map
