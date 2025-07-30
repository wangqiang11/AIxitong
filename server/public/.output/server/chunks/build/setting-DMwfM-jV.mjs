import { _ as __nuxt_component_0 } from './index-DbRlceJ7.mjs';
import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as _sfc_main$2 } from './index-L3E_sDO1.mjs';
import { _ as _sfc_main$3 } from './index-BoqjHllR.mjs';
import { ag as useRoute, a as useRouter, a5 as useAppStore, b3 as __nuxt_component_1$1 } from './server.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, watch, mergeProps, unref, isRef, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import AppEdit from './index-D0pNL-gw.mjs';
import _sfc_main$1 from './index-CDoCTF-s.mjs';
import { g as getRobotDetail } from './robot-BsB_E1H2.mjs';
import { u as useRobotStore } from './robot-yG1zBFXI.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './el-menu-item-DBjUF0xW.mjs';
import '@vueuse/core';
import 'lodash-unified';
import './index-DadLUs6d.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import '@vue/shared';
import '@ctrl/tinycolor';
import './index-5Ia44xzE.mjs';
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
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './index-DLL0sEcv.mjs';
import 'async-validator';
import './el-tab-pane-C7DQ8faq.mjs';
import './strings-D1uxkXhq.mjs';
import './index-C5I0EtSx.mjs';
import './base-config-D2JCcEJz.mjs';
import './index-BaKT_MyR.mjs';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import './index-CUhOTuS-.mjs';
import './index-D7S5lb8a.mjs';
import './el-radio-group-PXDiQVwm.mjs';
import './el-slider-LwCMMHAn.mjs';
import './el-input-number-DH6NTUUv.mjs';
import './index-iSFXrlfY.mjs';
import './useDictOptions-DmOxg3R0.mjs';
import './my_database-C6D0rbWD.mjs';
import './addPop-CT4BzglM.mjs';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-CXZnYiu9.mjs';
import './el-collapse-item-DSo9CmH5.mjs';
import './search-config-CUeFuQKo.mjs';
import './interface-config-BWIUWMLo.mjs';
import './el-table-column-tZnWqVKO.mjs';
import './index-53t5ntO1.mjs';
import 'normalize-wheel-es';
import './add-menu-DbND_aK2.mjs';
import './index-DZM4Ziep.mjs';
import './digital-config-G1TuaWzp.mjs';
import './el-switch-lh7eFiXh.mjs';
import './nuxt-link-l5zPv3vf.mjs';
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './digital-DHYaDV-C.mjs';
import './data-DABQECqE.mjs';
import './record-BAVzAhl8.mjs';
import './index-D60of7Hb.mjs';
import './el-pagination-ClrwtCwT.mjs';
import './usePaging-DU8sXki3.mjs';
import './reply-popup-DA2FFVvQ.mjs';
import './correct-popup-W2_Kapug.mjs';
import './index-VFk_dz0n.mjs';
import './index-DVLwoLV9.mjs';
import 'video.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "setting",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    useAppStore();
    const robotStore = useRobotStore();
    robotStore.getRobot();
    const showAppLists = ref(false);
    const appId = ref(route.query.id);
    const { data: appInfo, refresh } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => getRobotDetail({
        id: appId.value
      }),
      {
        transform(data) {
          if ((data == null ? void 0 : data.category_id) === 0) {
            data.category_id = "";
          }
          return data;
        },
        default() {
          return {};
        },
        lazy: true
      },
      "$3nIwi7TB6J"
    )), __temp = await __temp, __restore(), __temp);
    const defaultTab = ref("edit");
    const tabList = [
      {
        name: "\u667A\u80FD\u4F53\u8BBE\u7F6E",
        icon: "el-icon-Setting",
        key: "edit"
      },
      {
        name: "\u53D1\u5E03\u667A\u80FD\u4F53",
        key: "release",
        icon: "el-icon-Position"
      },
      {
        name: "\u5BF9\u8BDD\u6570\u636E",
        key: "dialogue",
        icon: "el-icon-ChatDotRound"
      },
      {
        name: "\u7ACB\u5373\u5BF9\u8BDD",
        key: "chat",
        icon: "el-icon-ChatLineRound"
      }
    ];
    const handleSelect = (key) => {
      switch (key) {
        case "chat":
          router.push({
            path: "/application/chat",
            query: {
              id: appId.value
            }
          });
          break;
        default:
          router.replace({
            path: route.path,
            query: {
              ...route.query,
              currentTab: key
            }
          });
      }
    };
    const changeApp = async (id) => {
      showAppLists.value = false;
      if (id == route.query.id) return;
      appId.value = id;
      await refresh();
      router.replace({
        path: route.path,
        query: {
          ...route.query,
          id
        }
      });
    };
    watch(
      () => route.query,
      (query) => {
        defaultTab.value = query.currentTab || "edit";
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InfoMenu = __nuxt_component_0;
      const _component_el_popover = ElPopover;
      const _component_ElScrollbar = ElScrollbar;
      const _component_OverflowTooltip = _sfc_main$2;
      const _component_Icon = _sfc_main$3;
      const _component_client_only = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex" }, _attrs))} data-v-21d9b61a>`);
      _push(ssrRenderComponent(_component_InfoMenu, {
        modelValue: unref(defaultTab),
        "onUpdate:modelValue": [($event) => isRef(defaultTab) ? defaultTab.value = $event : null, handleSelect],
        "menu-list": tabList,
        "back-path": "/application/layout/robot"
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-21d9b61a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_popover, {
              placement: "bottom",
              width: 180,
              trigger: "click",
              "show-arrow": false,
              transition: "custom-popover",
              visible: unref(showAppLists),
              "onUpdate:visible": ($event) => isRef(showAppLists) ? showAppLists.value = $event : null
            }, {
              reference: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center cursor-pointer" data-v-21d9b61a${_scopeId2}><div class="text-xl flex-1 min-w-0" data-v-21d9b61a${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_OverflowTooltip, {
                    content: unref(appInfo).name,
                    teleported: true,
                    effect: "light"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_Icon, { name: "el-icon-ArrowDown" }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center cursor-pointer" }, [
                      createVNode("div", { class: "text-xl flex-1 min-w-0" }, [
                        createVNode(_component_OverflowTooltip, {
                          content: unref(appInfo).name,
                          teleported: true,
                          effect: "light"
                        }, null, 8, ["content"])
                      ]),
                      createVNode(_component_Icon, { name: "el-icon-ArrowDown" })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div data-v-21d9b61a${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ElScrollbar, { style: { "height": "250px" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(robotStore).robotLists, (item) => {
                          _push4(`<div class="flex items-center leading-10 cursor-pointer hover:bg-primary-light-9 px-[10px] my-[5px] rounded-[12px] hover:text-primary" data-v-21d9b61a${_scopeId3}><img class="rounded-[50%] w-[28px] h-[28px] flex-none"${ssrRenderAttr("src", item.image)} alt="" data-v-21d9b61a${_scopeId3}><div class="ml-[8px] line-clamp-1" data-v-21d9b61a${_scopeId3}>${ssrInterpolate(item.name)}</div></div>`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(robotStore).robotLists, (item) => {
                            return openBlock(), createBlock("div", {
                              class: "flex items-center leading-10 cursor-pointer hover:bg-primary-light-9 px-[10px] my-[5px] rounded-[12px] hover:text-primary",
                              key: item.id,
                              onClick: ($event) => changeApp(item.id)
                            }, [
                              createVNode("img", {
                                class: "rounded-[50%] w-[28px] h-[28px] flex-none",
                                src: item.image,
                                alt: ""
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "ml-[8px] line-clamp-1" }, toDisplayString(item.name), 1)
                            ], 8, ["onClick"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode(_component_ElScrollbar, { style: { "height": "250px" } }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(robotStore).robotLists, (item) => {
                            return openBlock(), createBlock("div", {
                              class: "flex items-center leading-10 cursor-pointer hover:bg-primary-light-9 px-[10px] my-[5px] rounded-[12px] hover:text-primary",
                              key: item.id,
                              onClick: ($event) => changeApp(item.id)
                            }, [
                              createVNode("img", {
                                class: "rounded-[50%] w-[28px] h-[28px] flex-none",
                                src: item.image,
                                alt: ""
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "ml-[8px] line-clamp-1" }, toDisplayString(item.name), 1)
                            ], 8, ["onClick"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_el_popover, {
                  placement: "bottom",
                  width: 180,
                  trigger: "click",
                  "show-arrow": false,
                  transition: "custom-popover",
                  visible: unref(showAppLists),
                  "onUpdate:visible": ($event) => isRef(showAppLists) ? showAppLists.value = $event : null
                }, {
                  reference: withCtx(() => [
                    createVNode("div", { class: "flex items-center cursor-pointer" }, [
                      createVNode("div", { class: "text-xl flex-1 min-w-0" }, [
                        createVNode(_component_OverflowTooltip, {
                          content: unref(appInfo).name,
                          teleported: true,
                          effect: "light"
                        }, null, 8, ["content"])
                      ]),
                      createVNode(_component_Icon, { name: "el-icon-ArrowDown" })
                    ])
                  ]),
                  default: withCtx(() => [
                    createVNode("div", null, [
                      createVNode(_component_ElScrollbar, { style: { "height": "250px" } }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(robotStore).robotLists, (item) => {
                            return openBlock(), createBlock("div", {
                              class: "flex items-center leading-10 cursor-pointer hover:bg-primary-light-9 px-[10px] my-[5px] rounded-[12px] hover:text-primary",
                              key: item.id,
                              onClick: ($event) => changeApp(item.id)
                            }, [
                              createVNode("img", {
                                class: "rounded-[50%] w-[28px] h-[28px] flex-none",
                                src: item.image,
                                alt: ""
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "ml-[8px] line-clamp-1" }, toDisplayString(item.name), 1)
                            ], 8, ["onClick"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["visible", "onUpdate:visible"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="sm:h-full py-[16px] pr-[16px] flex flex-col sm:flex-row flex-1 min-w-0" data-v-21d9b61a><div class="sm:h-full flex-1 min-w-0 min-h-0 bg-body rounded-[12px]" data-v-21d9b61a>`);
      if (unref(defaultTab) === "edit") {
        _push(ssrRenderComponent(AppEdit, {
          "model-value": unref(appInfo),
          onSuccess: ($event) => unref(router).push("/application/layout/robot")
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      if (unref(defaultTab) === "dialogue") {
        _push(ssrRenderComponent(_sfc_main$1, { "app-id": unref(appId) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/setting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const setting = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-21d9b61a"]]);

export { setting as default };
//# sourceMappingURL=setting-DMwfM-jV.mjs.map
