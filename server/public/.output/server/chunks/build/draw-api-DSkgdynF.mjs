import { Swiper, SwiperSlide } from 'swiper/vue';
import { useSSRContext, defineComponent, ref, shallowRef, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "draw-api",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const currentModel = ref("sd");
    const modelList = [
      {
        name: "SD\u7ED8\u56FE",
        model: "sd",
        balance: 0,
        default: false,
        member_free: true
      }
      // {
      //     name: 'DALLE绘图',
      //     model: 'dalle3',
      //     balance: 0,
      //     default: false,
      //     member_free: true
      // }
      // {
      //     name: '意间-SD',
      //     model: 'yijian_sd',
      //     balance: 0,
      //     default: false,
      //     member_free: true
      // },
      // {
      //     name: '知数云-慢速',
      //     model: 'zhishuyun_relax',
      //     balance: 0,
      //     default: false,
      //     member_free: true
      // },
      // {
      //     name: '官方直连-MJ',
      //     model: 'mddai_mj',
      //     balance: 0,
      //     default: false,
      //     member_free: true
      // },
      // {
      //     name: '知数云-快速',
      //     model: 'zhishuyun_fast',
      //     balance: 0,
      //     default: true,
      //     member_free: true
      // },
      // {
      //     name: '知数云-极速',
      //     model: 'zhishuyun_turbo',
      //     balance: 0,
      //     default: false,
      //     member_free: true
      // }
    ];
    const swiperInstance = shallowRef();
    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
    };
    const handleClick = (index) => {
      emit("update:modelValue", modelList[index].model);
      currentModel.value = modelList[index].model;
      if (swiperInstance.value) {
        swiperInstance.value.slideTo(--index, 500, false);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      if (modelList.length > 1) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[var(--el-bg-color-page)] rounded-[12px] h-[50px]" }, _attrs))} data-v-fcdf8f1e>`);
        _push(ssrRenderComponent(_component_swiper, {
          class: "draw_type_swiper h-full",
          slidesPerView: "auto",
          spaceBetween: 16,
          speed: 500,
          onSwiper
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(modelList, (item, index) => {
                _push2(ssrRenderComponent(_component_swiper_slide, {
                  class: "cursor-pointer",
                  key: item.model,
                  style: { "width": "auto" }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="${ssrRenderClass([{
                        "tabs-item__active": item.model == unref(currentModel)
                      }, "tabs-item h-full flex justify-center pt-[10px]"])}" data-v-fcdf8f1e${_scopeId2}>${ssrInterpolate(item.name)}</div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: ["tabs-item h-full flex justify-center pt-[10px]", {
                            "tabs-item__active": item.model == unref(currentModel)
                          }],
                          onClick: ($event) => handleClick(index)
                        }, toDisplayString(item.name), 11, ["onClick"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(), createBlock(Fragment, null, renderList(modelList, (item, index) => {
                  return createVNode(_component_swiper_slide, {
                    class: "cursor-pointer",
                    key: item.model,
                    style: { "width": "auto" }
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: ["tabs-item h-full flex justify-center pt-[10px]", {
                          "tabs-item__active": item.model == unref(currentModel)
                        }],
                        onClick: ($event) => handleClick(index)
                      }, toDisplayString(item.name), 11, ["onClick"])
                    ]),
                    _: 2
                  }, 1024);
                }), 64))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/common/draw-api.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DrawApi = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fcdf8f1e"]]);

export { DrawApi as default };
//# sourceMappingURL=draw-api-DSkgdynF.mjs.map
