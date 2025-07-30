import { E as ElDialog } from './index-CzJm6kkT.mjs';
import { a5 as useAppStore, z as useUserStore, A as feedback, d as ElButton } from './server.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { useSSRContext, defineComponent, ref, shallowRef, computed, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, openBlock, createBlock, toDisplayString, createCommentVNode } from 'vue';
import { u as useCopy } from './useCopy-CfS-iChu.mjs';
import { d as downloadHtml2Image } from './download-N0luyf1S.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import QrcodeVue from 'qrcode.vue';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "poster",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    const { getImageUrl, config } = appStore;
    const showPopup = ref(false);
    const downloadLoading = ref(false);
    const drawOptions = ref({});
    const loading = ref(false);
    const userStore = useUserStore();
    const posterRef = shallowRef();
    const inviteLink = computed(
      () => `${(void 0).origin}/mobile?user_sn=${userStore.userInfo.sn}`
    );
    const getPosterBg = computed(() => {
      const data = drawOptions.value;
      if (data.default == 1 && data.poster == 1) {
        return getImageUrl(data.defaultUrl1);
      } else if (data.default == 1 && data.poster == 2) {
        return getImageUrl(data.defaultUrl2);
      } else if (data.default == 2) {
        return getImageUrl(data.posterUrl);
      }
    });
    const { copy } = useCopy();
    const pcLink = computed(
      () => `${(void 0).origin}/?user_sn=${userStore.userInfo.sn}`
    );
    const download = async () => {
      try {
        downloadLoading.value = true;
        await downloadHtml2Image(posterRef.value);
      } catch (error) {
        feedback.msgError("\u4E0B\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
      } finally {
        downloadLoading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElDialog = ElDialog;
      const _component_el_button = ElButton;
      const _component_Icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "poster-container" }, _attrs))} data-v-c30aafc1><div class="inline-block" data-v-c30aafc1>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ElDialog, {
        modelValue: unref(showPopup),
        "onUpdate:modelValue": ($event) => isRef(showPopup) ? showPopup.value = $event : null,
        title: "\u5206\u9500\u6D77\u62A5",
        "show-close": "",
        class: "!rounded-[15px]",
        width: "390px"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "height": "548px" })}" class="flex justify-center overflow-hidden" data-v-c30aafc1${_scopeId}>`);
            if (!unref(loading)) {
              _push2(`<div class="poster h-[548px] overflow-hidden" data-v-c30aafc1${_scopeId}><div class="poster-bg flex flex-col" data-v-c30aafc1${_scopeId}><img class="w-full min-h-[548px] rounded-[10px]"${ssrRenderAttr("src", unref(getPosterBg))} alt="" data-v-c30aafc1${_scopeId}></div><div class="w-full h-full poster-contain1" data-v-c30aafc1${_scopeId}><div class="absolute z-10 bg-white rounded-[10px] p-[5px]" style="${ssrRenderStyle({
                top: `${((_b = (_a = unref(drawOptions)) == null ? void 0 : _a.code) == null ? void 0 : _b.y) * 1.218}px`,
                left: `${((_d = (_c = unref(drawOptions)) == null ? void 0 : _c.code) == null ? void 0 : _d.x) * 1.218}px`
              })}" data-v-c30aafc1${_scopeId}>`);
              _push2(ssrRenderComponent(QrcodeVue, {
                value: unref(inviteLink),
                size: 110,
                margin: 1
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(drawOptions).showData) {
                _push2(`<span class="text-white text-xl absolute z-10" style="${ssrRenderStyle({
                  top: `${((_f = (_e = unref(drawOptions)) == null ? void 0 : _e.data) == null ? void 0 : _f.y) * 1.218}px`,
                  left: `${((_h = (_g = unref(drawOptions)) == null ? void 0 : _g.data) == null ? void 0 : _h.x) * 1.218}px`
                })}" data-v-c30aafc1${_scopeId}>${ssrInterpolate((_j = (_i = unref(drawOptions)) == null ? void 0 : _i.data) == null ? void 0 : _j.content)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-6 px-5 grid grid-cols-2 gap-x-[10px]" data-v-c30aafc1${_scopeId}><div class="flex-1" data-v-c30aafc1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              class: "w-full",
              onClick: ($event) => unref(copy)(unref(pcLink))
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, { name: "el-icon-DocumentCopy" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, { name: "el-icon-DocumentCopy" })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u590D\u5236\u94FE\u63A5 `);
                } else {
                  return [
                    createTextVNode(" \u590D\u5236\u94FE\u63A5 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex-1" data-v-c30aafc1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              class: "w-full",
              loading: unref(downloadLoading),
              onClick: download
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, { name: "el-icon-Download" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, { name: "el-icon-Download" })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4E0B\u8F7D `);
                } else {
                  return [
                    createTextVNode(" \u4E0B\u8F7D ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", {
                style: { "height": "548px" },
                class: "flex justify-center overflow-hidden"
              }, [
                !unref(loading) ? (openBlock(), createBlock("div", {
                  key: 0,
                  ref_key: "posterRef",
                  ref: posterRef,
                  class: "poster h-[548px] overflow-hidden"
                }, [
                  createVNode("div", { class: "poster-bg flex flex-col" }, [
                    createVNode("img", {
                      class: "w-full min-h-[548px] rounded-[10px]",
                      src: unref(getPosterBg),
                      alt: ""
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", { class: "w-full h-full poster-contain1" }, [
                    createVNode("div", {
                      class: "absolute z-10 bg-white rounded-[10px] p-[5px]",
                      style: {
                        top: `${((_l = (_k = unref(drawOptions)) == null ? void 0 : _k.code) == null ? void 0 : _l.y) * 1.218}px`,
                        left: `${((_n = (_m = unref(drawOptions)) == null ? void 0 : _m.code) == null ? void 0 : _n.x) * 1.218}px`
                      }
                    }, [
                      createVNode(QrcodeVue, {
                        value: unref(inviteLink),
                        size: 110,
                        margin: 1
                      }, null, 8, ["value"])
                    ], 4),
                    unref(drawOptions).showData ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-white text-xl absolute z-10",
                      style: {
                        top: `${((_p = (_o = unref(drawOptions)) == null ? void 0 : _o.data) == null ? void 0 : _p.y) * 1.218}px`,
                        left: `${((_r = (_q = unref(drawOptions)) == null ? void 0 : _q.data) == null ? void 0 : _r.x) * 1.218}px`
                      }
                    }, toDisplayString((_t = (_s = unref(drawOptions)) == null ? void 0 : _s.data) == null ? void 0 : _t.content), 5)) : createCommentVNode("", true)
                  ])
                ], 512)) : createCommentVNode("", true)
              ]),
              createVNode("div", { class: "mt-6 px-5 grid grid-cols-2 gap-x-[10px]" }, [
                createVNode("div", { class: "flex-1" }, [
                  createVNode(_component_el_button, {
                    class: "w-full",
                    onClick: ($event) => unref(copy)(unref(pcLink))
                  }, {
                    icon: withCtx(() => [
                      createVNode(_component_Icon, { name: "el-icon-DocumentCopy" })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" \u590D\u5236\u94FE\u63A5 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                createVNode("div", { class: "flex-1" }, [
                  createVNode(_component_el_button, {
                    type: "primary",
                    class: "w-full",
                    loading: unref(downloadLoading),
                    onClick: download
                  }, {
                    icon: withCtx(() => [
                      createVNode(_component_Icon, { name: "el-icon-Download" })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" \u4E0B\u8F7D ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index/promotion/_components/poster.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Poster = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c30aafc1"]]);

export { Poster as default };
//# sourceMappingURL=poster-tSZTZBf8.mjs.map
