import { E as ElSelect, a as ElOption } from './index-CUhOTuS-.mjs';
import { z as useUserStore, a as useRouter, a5 as useAppStore, A as feedback, E as ElInput, d as ElButton, B as vLoading } from './server.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { E as ElTag } from './index-D7S5lb8a.mjs';
import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { _ as _sfc_main$3 } from './index-L3E_sDO1.mjs';
import { E as ElInfiniteScroll } from './index-DNeGbNHc.mjs';
import { useSSRContext, defineComponent, ref, shallowRef, reactive, withAsyncContext, mergeProps, unref, withCtx, createVNode, createTextVNode, withModifiers, openBlock, createBlock, createCommentVNode, toDisplayString, withDirectives, Fragment, renderList, nextTick } from 'vue';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import _sfc_main$1 from './tologin-BQv8QnLK.mjs';
import { u as useRobotStore } from './robot-yG1zBFXI.mjs';
import RobotShare from './robot-share-CHXRXlHd.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-L-VTEUEA.mjs';
import '@vueuse/core';
import '@popperjs/core';
import '@vue/shared';
import 'lodash-unified';
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
import './dropdown-C6fgV-Vy.mjs';
import './position-DVxxNIGX.mjs';
import './index-C2yEelJa.mjs';
import './robot-BsB_E1H2.mjs';
import './task_reward-DRop0WtE.mjs';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "robot",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const userStore = useUserStore();
    const router = useRouter();
    const appStore = useAppStore();
    const robotStore = useRobotStore();
    const showShare = ref(false);
    const shareRef = shallowRef(null);
    const sharedIds = ref([]);
    const shareRobot = async (records_id, is_share) => {
      if (sharedIds.value.includes(records_id) || is_share) {
        await feedback.confirm("\u8BE5\u667A\u80FD\u4F53\u5DF2\u5206\u4EAB\u8FC7\uFF0C\u662F\u5426\u786E\u8BA4\u91CD\u590D\u5206\u4EAB\uFF1F");
      }
      showShare.value = true;
      await nextTick();
      shareRef.value.open(records_id);
    };
    const shareSuccess = (value) => {
      sharedIds.value.push(value);
      robotStore.getRobot();
      resetPage();
    };
    const { isLock, lockFn: handleAppAdd } = useLockFn(async () => {
      if (!userStore.isLogin) return userStore.toggleShowLogin();
      if (userStore.userInfo.robot_num <= 0) {
        if (!appStore.getIsShowRecharge) {
          feedback.msgError("\u667A\u80FD\u4F53\u6570\u91CF\u5DF2\u7528\u5B8C\u3002\u8BF7\u8054\u7CFB\u5BA2\u670D\u589E\u52A0");
        } else {
          await feedback.confirm("\u667A\u80FD\u4F53\u6570\u91CF\u5DF2\u7528\u5B8C\uFF0C\u8BF7\u524D\u5F80\u5145\u503C");
          router.push({
            path: "/user/recharge"
          });
        }
        return Promise.reject();
      }
      const id = await robotStore.addRobot();
      userStore.getUser();
      router.push({
        path: "/application/robot/setting",
        query: {
          id
        }
      });
    });
    const queryParams = reactive({
      type: " ",
      keyword: ""
    });
    const pageInfo = reactive({
      pageNo: 1,
      count: 0,
      pageSize: 15,
      lists: []
    });
    const getLists = async () => {
      const data = await robotStore.getRobot({
        ...queryParams,
        page_no: pageInfo.pageNo,
        page_size: pageInfo.pageSize
      });
      pageInfo.count = data.count;
      if (pageInfo.pageNo === 1) {
        pageInfo.lists = [];
      }
      pageInfo.lists.push(...data.lists);
    };
    const load = () => {
      if (!userStore.isLogin) return;
      if (pageInfo.count >= pageInfo.pageNo * pageInfo.pageSize) {
        pageInfo.pageNo++;
        getLists();
      }
    };
    const resetPage = () => {
      pageInfo.pageNo = 1;
      getLists();
    };
    [__temp, __restore] = withAsyncContext(() => useAsyncData(() => getLists(), {
      lazy: true
    }, "$Iyd8pwcMuC")), await __temp, __restore();
    const handleCommand = async (command, row) => {
      switch (command) {
        case "delete":
          await robotStore.delRobot(row.id);
          userStore.getUser();
          resetPage();
          break;
        case "release":
        case "dialogue":
          router.push({
            path: "/application/robot/setting",
            query: {
              id: row.id,
              currentTab: command
            }
          });
        case "share":
          shareRobot(row.id, row.is_share);
          break;
        case "cancelPublic":
          await robotStore.cancelShareRobot(row.id);
          resetPage();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_el_input = ElInput;
      const _component_ElButton = ElButton;
      const _component_ElScrollbar = ElScrollbar;
      const _component_Icon = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_el_tag = ElTag;
      const _component_el_popover = ElPopover;
      const _component_OverflowTooltip = _sfc_main$3;
      const _directive_loading = vLoading;
      const _directive_infinite_scroll = ElInfiniteScroll;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col" }, _attrs))} data-v-bbcfd3ef><div class="flex px-[20px] py-[16px]" data-v-bbcfd3ef><div class="font-medium text-xl" data-v-bbcfd3ef>\u6211\u7684\u667A\u80FD\u4F53</div><div class="flex items-center flex-none ml-auto" data-v-bbcfd3ef><div class="flex-none mr-[10px]" data-v-bbcfd3ef>\u7B5B\u9009</div>`);
      _push(ssrRenderComponent(_component_el_select, {
        class: "!w-[100px] flex-none",
        modelValue: unref(queryParams).type,
        "onUpdate:modelValue": ($event) => unref(queryParams).type = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_option, {
              label: "\u5168\u90E8",
              value: " "
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_option, {
              label: "\u516C\u5F00",
              value: 1
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_option, {
              label: "\u79C1\u6709",
              value: 0
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_option, {
                label: "\u5168\u90E8",
                value: " "
              }),
              createVNode(_component_el_option, {
                label: "\u516C\u5F00",
                value: 1
              }),
              createVNode(_component_el_option, {
                label: "\u79C1\u6709",
                value: 0
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_input, {
        class: "mx-[10px]",
        modelValue: unref(queryParams).keyword,
        "onUpdate:modelValue": ($event) => unref(queryParams).keyword = $event,
        placeholder: "\u8BF7\u8F93\u5165"
      }, null, _parent));
      _push(`<div data-v-bbcfd3ef>`);
      _push(ssrRenderComponent(_component_ElButton, {
        onClick: resetPage,
        type: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u641C\u7D22`);
          } else {
            return [
              createTextVNode("\u641C\u7D22")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="flex-1 min-h-0" data-v-bbcfd3ef>`);
      _push(ssrRenderComponent(_component_ElScrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({
              class: "px-[20px]",
              "infinite-scroll-distance": "50"
            }, ssrGetDirectiveProps(_ctx, _directive_infinite_scroll, load)))} data-v-bbcfd3ef${_scopeId}>`);
            if (unref(userStore).isLogin) {
              _push2(`<div data-v-bbcfd3ef${_scopeId}><div class="flex flex-wrap items-stretch mx-[-10px]" data-v-bbcfd3ef${_scopeId}><div class="w-1/4 2xl:w-1/5 sm:mb-[20px] mb-[10px] app-item" data-v-bbcfd3ef${_scopeId}><div${ssrRenderAttrs(mergeProps({ class: "mx-[10px] bg-body h-full rounded-[12px] p-[20px] overflow-hidden flex flex-col justify-center items-center cursor-pointer min-h-[200px]" }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLock))))} data-v-bbcfd3ef${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "el-icon-Plus",
                size: 24
              }, null, _parent2, _scopeId));
              _push2(`<div class="mt-[10px]" data-v-bbcfd3ef${_scopeId}>\u65B0\u589E\u667A\u80FD\u4F53</div></div></div><!--[-->`);
              ssrRenderList(unref(pageInfo).lists, (item, index) => {
                _push2(`<div class="w-1/4 2xl:w-1/5 sm:mb-[20px] mb-[10px] app-item" data-v-bbcfd3ef${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: {
                    path: "/application/robot/setting",
                    query: {
                      id: item.id
                    }
                  },
                  class: "mx-[10px] bg-body h-full rounded-[12px] overflow-hidden relative flex flex-col"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex px-[15px] py-[12px]" data-v-bbcfd3ef${_scopeId2}><div class="flex-1 text-tx-secondary" data-v-bbcfd3ef${_scopeId2}>`);
                      if (item.is_public) {
                        _push3(ssrRenderComponent(_component_el_tag, { type: "warning" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`\u516C\u5F00`);
                            } else {
                              return [
                                createTextVNode("\u516C\u5F00")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(ssrRenderComponent(_component_el_tag, { type: "primary" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`\u79C1\u6709`);
                            } else {
                              return [
                                createTextVNode("\u79C1\u6709")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      }
                      _push3(`</div>`);
                      _push3(ssrRenderComponent(_component_el_popover, {
                        placement: "bottom",
                        trigger: "hover",
                        offset: "12",
                        teleported: true,
                        "show-arrow": false,
                        transition: "custom-popover",
                        "popper-class": "cursor-pointer",
                        width: 190
                      }, {
                        reference: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_ElButton, {
                              link: "",
                              class: "el-dropdown-link"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, { name: "el-icon-MoreFilled" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, { name: "el-icon-MoreFilled" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_ElButton, {
                                link: "",
                                class: "el-dropdown-link"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, { name: "el-icon-MoreFilled" })
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          var _a, _b, _c, _d;
                          if (_push4) {
                            _push4(`<div class="flex items-center dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] px-[12px] py-[10px]" data-v-bbcfd3ef${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_Icon, { name: "el-icon-Position" }, null, _parent4, _scopeId3));
                            _push4(`<span class="ml-2" data-v-bbcfd3ef${_scopeId3}>\u53D1\u5E03\u667A\u80FD\u4F53</span></div><div class="flex items-center dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] px-[12px] py-[10px]" data-v-bbcfd3ef${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_Icon, { name: "el-icon-ChatDotRound" }, null, _parent4, _scopeId3));
                            _push4(`<span class="ml-2" data-v-bbcfd3ef${_scopeId3}>\u5BF9\u8BDD\u6570\u636E</span></div>`);
                            if (item.is_public && ((_a = unref(appStore).getSquareConfig.robot_award) == null ? void 0 : _a.is_open)) {
                              _push4(`<div class="flex items-center dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] px-[12px] py-[10px]" data-v-bbcfd3ef${_scopeId3}>`);
                              _push4(ssrRenderComponent(_component_Icon, { name: "el-icon-Share" }, null, _parent4, _scopeId3));
                              _push4(`<span class="ml-2" data-v-bbcfd3ef${_scopeId3}>\u53D6\u6D88\u53D1\u5E03\u81F3\u5E7F\u573A</span></div>`);
                            } else if ((_b = unref(appStore).getSquareConfig.robot_award) == null ? void 0 : _b.is_open) {
                              _push4(`<div class="flex items-center dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] px-[12px] py-[10px]" data-v-bbcfd3ef${_scopeId3}>`);
                              _push4(ssrRenderComponent(_component_Icon, { name: "el-icon-Share" }, null, _parent4, _scopeId3));
                              _push4(`<span class="ml-2" data-v-bbcfd3ef${_scopeId3}>\u53D1\u5E03\u81F3\u5E7F\u573A</span></div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`<div class="flex items-center dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] px-[12px] py-[10px]" data-v-bbcfd3ef${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_Icon, { name: "el-icon-Delete" }, null, _parent4, _scopeId3));
                            _push4(`<span class="ml-2" data-v-bbcfd3ef${_scopeId3}>\u5220\u9664</span></div>`);
                          } else {
                            return [
                              createVNode("div", {
                                class: "flex items-center dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] px-[12px] py-[10px]",
                                onClick: withModifiers(($event) => handleCommand("release", item), ["stop"])
                              }, [
                                createVNode(_component_Icon, { name: "el-icon-Position" }),
                                createVNode("span", { class: "ml-2" }, "\u53D1\u5E03\u667A\u80FD\u4F53")
                              ], 8, ["onClick"]),
                              createVNode("div", {
                                class: "flex items-center dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] px-[12px] py-[10px]",
                                onClick: withModifiers(($event) => handleCommand("dialogue", item), ["stop"])
                              }, [
                                createVNode(_component_Icon, { name: "el-icon-ChatDotRound" }),
                                createVNode("span", { class: "ml-2" }, "\u5BF9\u8BDD\u6570\u636E")
                              ], 8, ["onClick"]),
                              item.is_public && ((_c = unref(appStore).getSquareConfig.robot_award) == null ? void 0 : _c.is_open) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "flex items-center dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] px-[12px] py-[10px]",
                                onClick: withModifiers(($event) => handleCommand("cancelPublic", item), ["stop"])
                              }, [
                                createVNode(_component_Icon, { name: "el-icon-Share" }),
                                createVNode("span", { class: "ml-2" }, "\u53D6\u6D88\u53D1\u5E03\u81F3\u5E7F\u573A")
                              ], 8, ["onClick"])) : ((_d = unref(appStore).getSquareConfig.robot_award) == null ? void 0 : _d.is_open) ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "flex items-center dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] px-[12px] py-[10px]",
                                onClick: withModifiers(($event) => handleCommand("share", item), ["stop"])
                              }, [
                                createVNode(_component_Icon, { name: "el-icon-Share" }),
                                createVNode("span", { class: "ml-2" }, "\u53D1\u5E03\u81F3\u5E7F\u573A")
                              ], 8, ["onClick"])) : createCommentVNode("", true),
                              createVNode("div", {
                                class: "flex items-center dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] px-[12px] py-[10px]",
                                onClick: withModifiers(($event) => handleCommand("delete", item), ["stop"])
                              }, [
                                createVNode(_component_Icon, { name: "el-icon-Delete" }),
                                createVNode("span", { class: "ml-2" }, "\u5220\u9664")
                              ], 8, ["onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div><div class="px-[15px] flex flex-col items-center text-center flex-1" data-v-bbcfd3ef${_scopeId2}><img class="flex-none w-[74px] h-[74px] rounded-full"${ssrRenderAttr("src", item.image)} alt="" data-v-bbcfd3ef${_scopeId2}><div class="text-2xl mt-[6px] mb-[12px]" data-v-bbcfd3ef${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_OverflowTooltip, {
                        content: item.name
                      }, null, _parent3, _scopeId2));
                      _push3(`</div><div class="text-tx-secondary leading-5 h-[60px] line-clamp-3" data-v-bbcfd3ef${_scopeId2}>${ssrInterpolate(item.intro || "\u8FD9\u4E2A\u667A\u80FD\u4F53\u8FD8\u6CA1\u4ECB\u7ECD\u5462\uFF5E")}</div></div><div class="flex mt-4 items-center border-t border-solid border-br-light" data-v-bbcfd3ef${_scopeId2}><div class="flex-1 text-tx-regular border-r border-solid border-br-light flex items-center justify-center h-[50px] cursor-pointer hover:text-primary" data-v-bbcfd3ef${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "el-icon-Position",
                        size: 18
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="ml-[8px]" data-v-bbcfd3ef${_scopeId2}> \u8BBE\u7F6E\u667A\u80FD\u4F53 </div></div>`);
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        to: {
                          path: "/application/chat",
                          query: {
                            id: item.id
                          }
                        },
                        class: "flex-1 text-tx-regular flex items-center justify-center h-[50px] cursor-pointer hover:text-primary"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "el-icon-ChatLineSquare",
                              size: 18
                            }, null, _parent4, _scopeId3));
                            _push4(`<div class="ml-[8px]" data-v-bbcfd3ef${_scopeId3}>\u5F00\u59CB\u5BF9\u8BDD</div>`);
                          } else {
                            return [
                              createVNode(_component_Icon, {
                                name: "el-icon-ChatLineSquare",
                                size: 18
                              }),
                              createVNode("div", { class: "ml-[8px]" }, "\u5F00\u59CB\u5BF9\u8BDD")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex px-[15px] py-[12px]" }, [
                          createVNode("div", { class: "flex-1 text-tx-secondary" }, [
                            item.is_public ? (openBlock(), createBlock(_component_el_tag, {
                              key: 0,
                              type: "warning"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u516C\u5F00")
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(_component_el_tag, {
                              key: 1,
                              type: "primary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u79C1\u6709")
                              ]),
                              _: 1
                            }))
                          ]),
                          createVNode(_component_el_popover, {
                            placement: "bottom",
                            trigger: "hover",
                            offset: "12",
                            teleported: true,
                            "show-arrow": false,
                            transition: "custom-popover",
                            "popper-class": "cursor-pointer",
                            width: 190
                          }, {
                            reference: withCtx(() => [
                              createVNode(_component_ElButton, {
                                link: "",
                                class: "el-dropdown-link"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, { name: "el-icon-MoreFilled" })
                                ]),
                                _: 1
                              })
                            ]),
                            default: withCtx(() => {
                              var _a, _b;
                              return [
                                createVNode("div", {
                                  class: "flex items-center dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] px-[12px] py-[10px]",
                                  onClick: withModifiers(($event) => handleCommand("release", item), ["stop"])
                                }, [
                                  createVNode(_component_Icon, { name: "el-icon-Position" }),
                                  createVNode("span", { class: "ml-2" }, "\u53D1\u5E03\u667A\u80FD\u4F53")
                                ], 8, ["onClick"]),
                                createVNode("div", {
                                  class: "flex items-center dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] px-[12px] py-[10px]",
                                  onClick: withModifiers(($event) => handleCommand("dialogue", item), ["stop"])
                                }, [
                                  createVNode(_component_Icon, { name: "el-icon-ChatDotRound" }),
                                  createVNode("span", { class: "ml-2" }, "\u5BF9\u8BDD\u6570\u636E")
                                ], 8, ["onClick"]),
                                item.is_public && ((_a = unref(appStore).getSquareConfig.robot_award) == null ? void 0 : _a.is_open) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "flex items-center dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] px-[12px] py-[10px]",
                                  onClick: withModifiers(($event) => handleCommand("cancelPublic", item), ["stop"])
                                }, [
                                  createVNode(_component_Icon, { name: "el-icon-Share" }),
                                  createVNode("span", { class: "ml-2" }, "\u53D6\u6D88\u53D1\u5E03\u81F3\u5E7F\u573A")
                                ], 8, ["onClick"])) : ((_b = unref(appStore).getSquareConfig.robot_award) == null ? void 0 : _b.is_open) ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex items-center dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] px-[12px] py-[10px]",
                                  onClick: withModifiers(($event) => handleCommand("share", item), ["stop"])
                                }, [
                                  createVNode(_component_Icon, { name: "el-icon-Share" }),
                                  createVNode("span", { class: "ml-2" }, "\u53D1\u5E03\u81F3\u5E7F\u573A")
                                ], 8, ["onClick"])) : createCommentVNode("", true),
                                createVNode("div", {
                                  class: "flex items-center dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] px-[12px] py-[10px]",
                                  onClick: withModifiers(($event) => handleCommand("delete", item), ["stop"])
                                }, [
                                  createVNode(_component_Icon, { name: "el-icon-Delete" }),
                                  createVNode("span", { class: "ml-2" }, "\u5220\u9664")
                                ], 8, ["onClick"])
                              ];
                            }),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode("div", { class: "px-[15px] flex flex-col items-center text-center flex-1" }, [
                          createVNode("img", {
                            class: "flex-none w-[74px] h-[74px] rounded-full",
                            src: item.image,
                            alt: ""
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "text-2xl mt-[6px] mb-[12px]" }, [
                            createVNode(_component_OverflowTooltip, {
                              content: item.name
                            }, null, 8, ["content"])
                          ]),
                          createVNode("div", { class: "text-tx-secondary leading-5 h-[60px] line-clamp-3" }, toDisplayString(item.intro || "\u8FD9\u4E2A\u667A\u80FD\u4F53\u8FD8\u6CA1\u4ECB\u7ECD\u5462\uFF5E"), 1)
                        ]),
                        createVNode("div", { class: "flex mt-4 items-center border-t border-solid border-br-light" }, [
                          createVNode("div", { class: "flex-1 text-tx-regular border-r border-solid border-br-light flex items-center justify-center h-[50px] cursor-pointer hover:text-primary" }, [
                            createVNode(_component_Icon, {
                              name: "el-icon-Position",
                              size: 18
                            }),
                            createVNode("div", { class: "ml-[8px]" }, " \u8BBE\u7F6E\u667A\u80FD\u4F53 ")
                          ]),
                          createVNode(_component_NuxtLink, {
                            to: {
                              path: "/application/chat",
                              query: {
                                id: item.id
                              }
                            },
                            class: "flex-1 text-tx-regular flex items-center justify-center h-[50px] cursor-pointer hover:text-primary"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "el-icon-ChatLineSquare",
                                size: 18
                              }),
                              createVNode("div", { class: "ml-[8px]" }, "\u5F00\u59CB\u5BF9\u8BDD")
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!unref(userStore).isLogin) {
              _push2(`<div data-v-bbcfd3ef${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("div", {
                class: "px-[20px]",
                "infinite-scroll-distance": "50"
              }, [
                unref(userStore).isLogin ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("div", { class: "flex flex-wrap items-stretch mx-[-10px]" }, [
                    createVNode("div", { class: "w-1/4 2xl:w-1/5 sm:mb-[20px] mb-[10px] app-item" }, [
                      withDirectives((openBlock(), createBlock("div", {
                        class: "mx-[10px] bg-body h-full rounded-[12px] p-[20px] overflow-hidden flex flex-col justify-center items-center cursor-pointer min-h-[200px]",
                        onClick: unref(handleAppAdd)
                      }, [
                        createVNode(_component_Icon, {
                          name: "el-icon-Plus",
                          size: 24
                        }),
                        createVNode("div", { class: "mt-[10px]" }, "\u65B0\u589E\u667A\u80FD\u4F53")
                      ], 8, ["onClick"])), [
                        [_directive_loading, unref(isLock)]
                      ])
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(pageInfo).lists, (item, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "w-1/4 2xl:w-1/5 sm:mb-[20px] mb-[10px] app-item"
                      }, [
                        createVNode(_component_NuxtLink, {
                          to: {
                            path: "/application/robot/setting",
                            query: {
                              id: item.id
                            }
                          },
                          class: "mx-[10px] bg-body h-full rounded-[12px] overflow-hidden relative flex flex-col"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex px-[15px] py-[12px]" }, [
                              createVNode("div", { class: "flex-1 text-tx-secondary" }, [
                                item.is_public ? (openBlock(), createBlock(_component_el_tag, {
                                  key: 0,
                                  type: "warning"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u516C\u5F00")
                                  ]),
                                  _: 1
                                })) : (openBlock(), createBlock(_component_el_tag, {
                                  key: 1,
                                  type: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u79C1\u6709")
                                  ]),
                                  _: 1
                                }))
                              ]),
                              createVNode(_component_el_popover, {
                                placement: "bottom",
                                trigger: "hover",
                                offset: "12",
                                teleported: true,
                                "show-arrow": false,
                                transition: "custom-popover",
                                "popper-class": "cursor-pointer",
                                width: 190
                              }, {
                                reference: withCtx(() => [
                                  createVNode(_component_ElButton, {
                                    link: "",
                                    class: "el-dropdown-link"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, { name: "el-icon-MoreFilled" })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                default: withCtx(() => {
                                  var _a, _b;
                                  return [
                                    createVNode("div", {
                                      class: "flex items-center dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] px-[12px] py-[10px]",
                                      onClick: withModifiers(($event) => handleCommand("release", item), ["stop"])
                                    }, [
                                      createVNode(_component_Icon, { name: "el-icon-Position" }),
                                      createVNode("span", { class: "ml-2" }, "\u53D1\u5E03\u667A\u80FD\u4F53")
                                    ], 8, ["onClick"]),
                                    createVNode("div", {
                                      class: "flex items-center dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] px-[12px] py-[10px]",
                                      onClick: withModifiers(($event) => handleCommand("dialogue", item), ["stop"])
                                    }, [
                                      createVNode(_component_Icon, { name: "el-icon-ChatDotRound" }),
                                      createVNode("span", { class: "ml-2" }, "\u5BF9\u8BDD\u6570\u636E")
                                    ], 8, ["onClick"]),
                                    item.is_public && ((_a = unref(appStore).getSquareConfig.robot_award) == null ? void 0 : _a.is_open) ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "flex items-center dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] px-[12px] py-[10px]",
                                      onClick: withModifiers(($event) => handleCommand("cancelPublic", item), ["stop"])
                                    }, [
                                      createVNode(_component_Icon, { name: "el-icon-Share" }),
                                      createVNode("span", { class: "ml-2" }, "\u53D6\u6D88\u53D1\u5E03\u81F3\u5E7F\u573A")
                                    ], 8, ["onClick"])) : ((_b = unref(appStore).getSquareConfig.robot_award) == null ? void 0 : _b.is_open) ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "flex items-center dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] px-[12px] py-[10px]",
                                      onClick: withModifiers(($event) => handleCommand("share", item), ["stop"])
                                    }, [
                                      createVNode(_component_Icon, { name: "el-icon-Share" }),
                                      createVNode("span", { class: "ml-2" }, "\u53D1\u5E03\u81F3\u5E7F\u573A")
                                    ], 8, ["onClick"])) : createCommentVNode("", true),
                                    createVNode("div", {
                                      class: "flex items-center dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-[12px] px-[12px] py-[10px]",
                                      onClick: withModifiers(($event) => handleCommand("delete", item), ["stop"])
                                    }, [
                                      createVNode(_component_Icon, { name: "el-icon-Delete" }),
                                      createVNode("span", { class: "ml-2" }, "\u5220\u9664")
                                    ], 8, ["onClick"])
                                  ];
                                }),
                                _: 2
                              }, 1024)
                            ]),
                            createVNode("div", { class: "px-[15px] flex flex-col items-center text-center flex-1" }, [
                              createVNode("img", {
                                class: "flex-none w-[74px] h-[74px] rounded-full",
                                src: item.image,
                                alt: ""
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "text-2xl mt-[6px] mb-[12px]" }, [
                                createVNode(_component_OverflowTooltip, {
                                  content: item.name
                                }, null, 8, ["content"])
                              ]),
                              createVNode("div", { class: "text-tx-secondary leading-5 h-[60px] line-clamp-3" }, toDisplayString(item.intro || "\u8FD9\u4E2A\u667A\u80FD\u4F53\u8FD8\u6CA1\u4ECB\u7ECD\u5462\uFF5E"), 1)
                            ]),
                            createVNode("div", { class: "flex mt-4 items-center border-t border-solid border-br-light" }, [
                              createVNode("div", { class: "flex-1 text-tx-regular border-r border-solid border-br-light flex items-center justify-center h-[50px] cursor-pointer hover:text-primary" }, [
                                createVNode(_component_Icon, {
                                  name: "el-icon-Position",
                                  size: 18
                                }),
                                createVNode("div", { class: "ml-[8px]" }, " \u8BBE\u7F6E\u667A\u80FD\u4F53 ")
                              ]),
                              createVNode(_component_NuxtLink, {
                                to: {
                                  path: "/application/chat",
                                  query: {
                                    id: item.id
                                  }
                                },
                                class: "flex-1 text-tx-regular flex items-center justify-center h-[50px] cursor-pointer hover:text-primary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "el-icon-ChatLineSquare",
                                    size: 18
                                  }),
                                  createVNode("div", { class: "ml-[8px]" }, "\u5F00\u59CB\u5BF9\u8BDD")
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true),
                !unref(userStore).isLogin ? (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode(_sfc_main$1)
                ])) : createCommentVNode("", true)
              ])), [
                [_directive_infinite_scroll, load]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(showShare)) {
        _push(ssrRenderComponent(RobotShare, {
          ref_key: "shareRef",
          ref: shareRef,
          onClose: ($event) => showShare.value = false,
          onSuccess: shareSuccess
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/layout/robot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const robot = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bbcfd3ef"]]);

export { robot as default };
//# sourceMappingURL=robot-B5jbdbL1.mjs.map
