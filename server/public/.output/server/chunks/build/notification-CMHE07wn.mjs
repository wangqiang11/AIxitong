import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { bO as noticeLists, bM as noticeAllRead, d as ElButton, bN as ElBadge } from './server.mjs';
import { E as EmptyNotice, _ as __nuxt_component_2 } from './empty_notice-Dpk159jp.mjs';
import { E as ElEmpty } from './el-empty-xbPr04pX.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as usePolling } from './usePolling-DOP50YcO.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-L-VTEUEA.mjs';
import '@vueuse/core';
import '@popperjs/core';
import '@vue/shared';
import 'lodash-unified';
import './dropdown-C6fgV-Vy.mjs';
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
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';

const _imports_0 = "data:image/png;base64,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";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "notification",
  __ssrInlineRender: true,
  setup(__props) {
    const { data, refresh: refreshNotice } = useAsyncData(() => noticeLists({
      page_no: 1,
      page_size: 5
    }), {
      default: () => {
        return [];
      },
      lazy: true
    }, "$psmlAs7MFW");
    usePolling(refreshNotice, {
      key: "notice",
      time: 2e4,
      totalTime: 1200 * 1e4,
      callback: () => {
      }
    });
    const handleAllRead = async () => {
      await noticeAllRead();
      await refreshNotice();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popover = ElPopover;
      const _component_ElButton = ElButton;
      const _component_NotificationCard = __nuxt_component_2;
      const _component_el_empty = ElEmpty;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_el_button = ElButton;
      const _component_Icon = _sfc_main$1;
      const _component_el_badge = ElBadge;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "notification cursor-pointer ml-[0px] mr-[30px]" }, _attrs))} data-v-cc651524>`);
      _push(ssrRenderComponent(_component_el_popover, {
        placement: "bottom",
        width: 380,
        trigger: "hover",
        "show-arrow": false,
        transition: "custom-popover",
        teleported: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="flex justify-between border-bottom pb-[20px] mb-[10px]" data-v-cc651524${_scopeId}><div class="text-xl text-tx-primary font-medium" data-v-cc651524${_scopeId}><div data-v-cc651524${_scopeId}>\u6D88\u606F\u901A\u77E5</div></div>`);
            _push2(ssrRenderComponent(_component_ElButton, {
              type: "primary",
              link: true,
              disabled: !unref(data).all_unread,
              onClick: handleAllRead
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5168\u90E8\u5DF2\u8BFB `);
                } else {
                  return [
                    createTextVNode(" \u5168\u90E8\u5DF2\u8BFB ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if ((_b = (_a = unref(data)) == null ? void 0 : _a.lists) == null ? void 0 : _b.length) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(data).lists, (item) => {
                _push2(ssrRenderComponent(_component_NotificationCard, {
                  key: item.id,
                  data: item,
                  class: "px-[8px]",
                  onRead: unref(refreshNotice)
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              _push2(ssrRenderComponent(_component_el_empty, {
                image: unref(EmptyNotice),
                "image-size": 150,
                description: "\u6682\u65E0\u6D88\u606F\u901A\u77E5"
              }, null, _parent2, _scopeId));
            }
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "flex justify-center items-center border-top pt-[20px] mt-[10px]",
              to: "/user/notification"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_button, { link: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-base mr-1" data-v-cc651524${_scopeId3}>\u67E5\u770B\u6240\u6709\u6D88\u606F</span>`);
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "el-icon-ArrowRightBold",
                          size: "14"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { class: "text-base mr-1" }, "\u67E5\u770B\u6240\u6709\u6D88\u606F"),
                          createVNode(_component_Icon, {
                            name: "el-icon-ArrowRightBold",
                            size: "14"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_button, { link: "" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-base mr-1" }, "\u67E5\u770B\u6240\u6709\u6D88\u606F"),
                        createVNode(_component_Icon, {
                          name: "el-icon-ArrowRightBold",
                          size: "14"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex justify-between border-bottom pb-[20px] mb-[10px]" }, [
                createVNode("div", { class: "text-xl text-tx-primary font-medium" }, [
                  createVNode("div", null, "\u6D88\u606F\u901A\u77E5")
                ]),
                createVNode(_component_ElButton, {
                  type: "primary",
                  link: true,
                  disabled: !unref(data).all_unread,
                  onClick: handleAllRead
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u5168\u90E8\u5DF2\u8BFB ")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              ((_d = (_c = unref(data)) == null ? void 0 : _c.lists) == null ? void 0 : _d.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(data).lists, (item) => {
                return openBlock(), createBlock(_component_NotificationCard, {
                  key: item.id,
                  data: item,
                  class: "px-[8px]",
                  onRead: unref(refreshNotice)
                }, null, 8, ["data", "onRead"]);
              }), 128)) : (openBlock(), createBlock(_component_el_empty, {
                key: 1,
                image: unref(EmptyNotice),
                "image-size": 150,
                description: "\u6682\u65E0\u6D88\u606F\u901A\u77E5"
              }, null, 8, ["image"])),
              createVNode(_component_NuxtLink, {
                class: "flex justify-center items-center border-top pt-[20px] mt-[10px]",
                to: "/user/notification"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_button, { link: "" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-base mr-1" }, "\u67E5\u770B\u6240\u6709\u6D88\u606F"),
                      createVNode(_component_Icon, {
                        name: "el-icon-ArrowRightBold",
                        size: "14"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        reference: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_badge, {
              value: unref(data).all_unread,
              "show-zero": !!unref(data).all_unread,
              offset: [0, 2]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} class="w-[22px] h-[22px]" alt="" data-v-cc651524${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      class: "w-[22px] h-[22px]",
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_badge, {
                value: unref(data).all_unread,
                "show-zero": !!unref(data).all_unread,
                offset: [0, 2]
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0,
                    class: "w-[22px] h-[22px]",
                    alt: ""
                  })
                ]),
                _: 1
              }, 8, ["value", "show-zero"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/header/notification.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const notification = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cc651524"]]);

export { notification as default };
//# sourceMappingURL=notification-CMHE07wn.mjs.map
