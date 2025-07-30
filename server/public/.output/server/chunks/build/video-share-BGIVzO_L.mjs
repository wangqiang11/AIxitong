import { E as ElSelect, a as ElOption } from './index-CUhOTuS-.mjs';
import { z as useUserStore, d as ElButton, bp as ShareSquareEnum } from './server.mjs';
import { useSSRContext, defineComponent, shallowRef, ref, reactive, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { h as shareVideo, b as getSquareCategory } from './task_reward-DRop0WtE.mjs';
import { P as Popup } from './index-BKj4TrcW.mjs';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-L-VTEUEA.mjs';
import '@vueuse/core';
import '@popperjs/core';
import '@vue/shared';
import 'lodash-unified';
import './index-0xCxAaTZ.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
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
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "video-share",
  __ssrInlineRender: true,
  emits: ["success", "close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const userStore = useUserStore();
    const emit = __emit;
    const popupRef = shallowRef();
    const cateLists = ref([]);
    const formData = reactive({
      category_id: "",
      records_id: ""
    });
    const getData = async () => {
      try {
        const list = await getSquareCategory({
          type: ShareSquareEnum.VIDEO,
          share: 1
        });
        list.unshift({ name: "\u5168\u90E8", id: "" });
        cateLists.value = list;
      } catch (error) {
        console.log("\u83B7\u53D6\u89C6\u9891\u5206\u7C7B\u5931\u8D25=>", error);
      }
    };
    const { lockFn: handleSubmit, isLock } = useLockFn(async () => {
      var _a;
      await shareVideo(formData);
      await userStore.getUser();
      (_a = popupRef.value) == null ? void 0 : _a.close();
      emit("success", formData.records_id);
    });
    const handleClose = () => {
      emit("close");
    };
    const open = (records_id) => {
      var _a;
      getData();
      (_a = popupRef.value) == null ? void 0 : _a.open();
      formData.records_id = records_id;
    };
    __expose({ open });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "share-popup" }, _attrs))} data-v-0874c328>`);
      _push(ssrRenderComponent(Popup, {
        ref_key: "popupRef",
        ref: popupRef,
        title: "\u5206\u4EAB\u81F3\u5E7F\u573A",
        async: true,
        width: "400px",
        center: true,
        cancelButtonText: "",
        confirmButtonText: "",
        appendToBody: false,
        onConfirm: unref(handleSubmit),
        onClose: handleClose
      }, {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dialog-footer flex justify-center pb-2" data-v-0874c328${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              loading: unref(isLock),
              class: "!rounded-md",
              onClick: unref(handleSubmit)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5206\u4EAB\u81F3\u5E7F\u573A `);
                } else {
                  return [
                    createTextVNode(" \u5206\u4EAB\u81F3\u5E7F\u573A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "dialog-footer flex justify-center pb-2" }, [
                createVNode(_component_el_button, {
                  type: "primary",
                  loading: unref(isLock),
                  class: "!rounded-md",
                  onClick: unref(handleSubmit)
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u5206\u4EAB\u81F3\u5E7F\u573A ")
                  ]),
                  _: 1
                }, 8, ["loading", "onClick"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-[100px]" data-v-0874c328${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_select, {
              size: "large",
              class: "w-[360px]",
              modelValue: unref(formData).category_id,
              "onUpdate:modelValue": ($event) => unref(formData).category_id = $event,
              placeholder: "\u5168\u90E8",
              style: { "--el-fill-color-blank": "#F7F7FB" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(cateLists), (item) => {
                    _push3(ssrRenderComponent(_component_el_option, {
                      key: item.id,
                      label: item.name,
                      value: item.id
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(cateLists), (item) => {
                      return openBlock(), createBlock(_component_el_option, {
                        key: item.id,
                        label: item.name,
                        value: item.id
                      }, null, 8, ["label", "value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "h-[100px]" }, [
                createVNode(_component_el_select, {
                  size: "large",
                  class: "w-[360px]",
                  modelValue: unref(formData).category_id,
                  "onUpdate:modelValue": ($event) => unref(formData).category_id = $event,
                  placeholder: "\u5168\u90E8",
                  style: { "--el-fill-color-blank": "#F7F7FB" }
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(cateLists), (item) => {
                      return openBlock(), createBlock(_component_el_option, {
                        key: item.id,
                        label: item.name,
                        value: item.id
                      }, null, 8, ["label", "value"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/video/_components/video-share.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VideoShare = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0874c328"]]);

export { VideoShare as default };
//# sourceMappingURL=video-share-BGIVzO_L.mjs.map
