import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { d as ElButton, E as ElInput, aH as search_default } from './server.mjs';
import { u as usePaging } from './usePaging-DU8sXki3.mjs';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { useSSRContext, defineComponent, ref, reactive, mergeProps, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, withModifiers, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { p as postTeam, g as getTeamUser } from './knowledge-DiYwGYtC.mjs';
import { E as ElDialog } from './index-CzJm6kkT.mjs';
import { E as ElCheckbox } from './index-53t5ntO1.mjs';
import { E as ElAvatar } from './index-BV1cZAUE.mjs';
import { E as ElDivider } from './index-pT4w-4Lo.mjs';
import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
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
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './dropdown-C6fgV-Vy.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "add-user",
  __ssrInlineRender: true,
  props: { id: { type: Number, default: 0 } },
  emits: ["success"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const TEAM_MAP = {
      [
        1
        /* ADMIN */
      ]: "\u53EF\u7BA1\u7406",
      [
        2
        /* EDIT */
      ]: "\u53EF\u7F16\u8F91",
      [
        3
        /* VIEW */
      ]: "\u53EF\u67E5\u770B"
    };
    const emit = __emit;
    const props = __props;
    const isVisible = ref(false);
    const isSelectAll = ref(false);
    const isPermissionPopoverVisible = ref(false);
    const currentPopoverIndex = ref(-1);
    const queryParams = reactive({
      keyword: "",
      kb_id: props.id,
      page_type: 0
    });
    const selectedMembers = ref([]);
    const { pager, getLists, resetPage, resetParams } = usePaging({
      fetchFun: getTeamUser,
      params: queryParams
    });
    const fetchMemberList = () => {
      resetPage();
      getLists();
    };
    const handleMemberSelect = (member, action) => {
      if (member.is_added) return;
      const index = selectedMembers.value.findIndex((m) => m.id === member.id);
      if (index !== -1) {
        member.permission = 0;
        selectedMembers.value.splice(index, 1);
      } else if (!member.is_added) {
        member.permission = 3;
        selectedMembers.value.push(member);
      }
      if (action === "box") {
        member.isSelected = member.isSelected ? 0 : 1;
      } else {
        member.isSelected = member.isSelected ? 1 : 0;
      }
    };
    const handleSelectAll = (isSelected) => {
      pager.lists.forEach((member) => {
        if (!member.is_added) {
          member.isSelected = isSelected ? 1 : 0;
          member.permission = isSelected ? 3 : 0;
        }
      });
      selectedMembers.value = isSelected ? pager.lists.filter((member) => !member.is_added) : [];
    };
    const removeMember = (member) => {
      selectedMembers.value = selectedMembers.value.filter(
        (m) => m.id !== member.id
      );
      pager.lists.find((m) => m.id === member.id).isSelected = false;
    };
    const openPermissionPopover = (index) => {
      currentPopoverIndex.value = index;
      isPermissionPopoverVisible.value = true;
    };
    const closePermissionPopover = () => {
      isPermissionPopoverVisible.value = false;
    };
    const setPermission = (member, permission) => {
      member.permission = permission;
      closePermissionPopover();
    };
    const { lockFn: submit, isLock } = useLockFn(async () => {
      const users = {};
      selectedMembers.value.forEach((member) => {
        users[member.sn] = member.permission;
      });
      await postTeam({ kb_id: props.id, users });
      emit("success");
      isVisible.value = false;
    });
    __expose({
      show: () => {
        isVisible.value = true;
        resetParams();
        resetPage();
        selectedMembers.value = [];
        isSelectAll.value = false;
        getLists();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElScrollbar = ElScrollbar;
      const _component_Icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "locality-draw-popup" }, _attrs))} data-v-8e35f1ae>`);
      _push(ssrRenderComponent(unref(ElDialog), {
        modelValue: isVisible.value,
        "onUpdate:modelValue": ($event) => isVisible.value = $event,
        width: "980px",
        class: "!rounded-[12px]",
        center: true,
        draggable: true,
        "destroy-on-close": true,
        "close-on-click-modal": false
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full text-left" data-v-8e35f1ae${_scopeId}><div class="text-lg font-medium" data-v-8e35f1ae${_scopeId}>\u6DFB\u52A0\u6210\u5458</div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full text-left" }, [
                createVNode("div", { class: "text-lg font-medium" }, "\u6DFB\u52A0\u6210\u5458")
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end" data-v-8e35f1ae${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ElButton), {
              onClick: ($event) => isVisible.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u53D6\u6D88`);
                } else {
                  return [
                    createTextVNode("\u53D6\u6D88")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ElButton), {
              type: "primary",
              loading: unref(isLock),
              onClick: unref(submit)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u786E\u8BA4 `);
                } else {
                  return [
                    createTextVNode(" \u786E\u8BA4 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end" }, [
                createVNode(unref(ElButton), {
                  onClick: ($event) => isVisible.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u53D6\u6D88")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(unref(ElButton), {
                  type: "primary",
                  loading: unref(isLock),
                  onClick: unref(submit)
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u786E\u8BA4 ")
                  ]),
                  _: 1
                }, 8, ["loading", "onClick"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex" data-v-8e35f1ae${_scopeId}><div class="w-1/2" data-v-8e35f1ae${_scopeId}><div class="px-4" data-v-8e35f1ae${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ElInput), {
              modelValue: queryParams.keyword,
              "onUpdate:modelValue": ($event) => queryParams.keyword = $event,
              style: { "width": "100%" },
              size: "large",
              placeholder: "\u641C\u7D22\u6210\u5458",
              "prefix-icon": unref(search_default),
              onInput: fetchMemberList
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ElScrollbar, { height: "500px" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col" data-v-8e35f1ae${_scopeId2}>`);
                  if (unref(pager).lists.length === 0) {
                    _push3(`<div style="${ssrRenderStyle({ "height": "500px" })}" class="flex justify-center items-center text-tx-placeholder" data-v-8e35f1ae${_scopeId2}> \u8BF7\u641C\u7D22\u6210\u5458\u6DFB\u52A0 </div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="mt-4" data-v-8e35f1ae${_scopeId2}><div class="my-2 px-4" data-v-8e35f1ae${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(ElCheckbox), {
                    modelValue: isSelectAll.value,
                    "onUpdate:modelValue": ($event) => isSelectAll.value = $event,
                    "true-value": 1,
                    "false-value": 0,
                    label: "\u5168\u9009",
                    size: "large",
                    onChange: handleSelectAll
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (unref(pager).lists.length !== 0) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(pager).lists, (member) => {
                      _push3(`<div class="${ssrRenderClass([{
                        "!cursor-not-allowed": member.is_added
                      }, "my-4 mr-4 py-2 px-4 flex items-center cursor-pointer hover:bg-primary-light-9 rounded-[12px]"])}" data-v-8e35f1ae${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(ElCheckbox), {
                        modelValue: member.isSelected,
                        "onUpdate:modelValue": ($event) => member.isSelected = $event,
                        "true-value": 1,
                        "false-value": 0,
                        label: "",
                        size: "large",
                        disabled: member.is_added,
                        onClick: ($event) => handleMemberSelect(
                          member,
                          "checkbox"
                        )
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(ElAvatar), {
                        src: member.avatar,
                        size: "26",
                        class: "flex-none ml-2"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="ml-2 text-xs" data-v-8e35f1ae${_scopeId2}><span data-v-8e35f1ae${_scopeId2}>${ssrInterpolate(member.nickname)}</span>`);
                      if (member.is_added) {
                        _push3(`<div class="text-tx-placeholder" data-v-8e35f1ae${_scopeId2}> \u5DF2\u6DFB\u52A0 </div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div></div>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col" }, [
                      unref(pager).lists.length === 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        style: { "height": "500px" },
                        class: "flex justify-center items-center text-tx-placeholder"
                      }, " \u8BF7\u641C\u7D22\u6210\u5458\u6DFB\u52A0 ")) : createCommentVNode("", true),
                      createVNode("div", { class: "mt-4" }, [
                        createVNode("div", { class: "my-2 px-4" }, [
                          createVNode(unref(ElCheckbox), {
                            modelValue: isSelectAll.value,
                            "onUpdate:modelValue": ($event) => isSelectAll.value = $event,
                            "true-value": 1,
                            "false-value": 0,
                            label: "\u5168\u9009",
                            size: "large",
                            onChange: handleSelectAll
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        unref(pager).lists.length !== 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(pager).lists, (member) => {
                          return openBlock(), createBlock("div", {
                            class: ["my-4 mr-4 py-2 px-4 flex items-center cursor-pointer hover:bg-primary-light-9 rounded-[12px]", {
                              "!cursor-not-allowed": member.is_added
                            }],
                            key: member.id,
                            onClick: ($event) => handleMemberSelect(member, "box")
                          }, [
                            createVNode(unref(ElCheckbox), {
                              modelValue: member.isSelected,
                              "onUpdate:modelValue": ($event) => member.isSelected = $event,
                              "true-value": 1,
                              "false-value": 0,
                              label: "",
                              size: "large",
                              disabled: member.is_added,
                              onClick: withModifiers(($event) => handleMemberSelect(
                                member,
                                "checkbox"
                              ), ["stop"])
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onClick"]),
                            createVNode(unref(ElAvatar), {
                              src: member.avatar,
                              size: "26",
                              class: "flex-none ml-2"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "ml-2 text-xs" }, [
                              createVNode("span", null, toDisplayString(member.nickname), 1),
                              member.is_added ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-tx-placeholder"
                              }, " \u5DF2\u6DFB\u52A0 ")) : createCommentVNode("", true)
                            ])
                          ], 10, ["onClick"]);
                        }), 128)) : createCommentVNode("", true)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(ElDivider), {
              direction: "vertical",
              style: { "height": "500px" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElScrollbar, {
              height: "500px",
              class: "w-1/2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col px-4" data-v-8e35f1ae${_scopeId2}><div class="text-base" data-v-8e35f1ae${_scopeId2}> \u5DF2\u9009\u62E9\uFF1A${ssrInterpolate(selectedMembers.value.length)} \u4E2A </div><!--[-->`);
                  ssrRenderList(selectedMembers.value, (member, index) => {
                    _push3(`<div class="mt-4 py-2 px-4 flex items-center justify-between cursor-pointer hover:bg-primary-light-9 rounded-[12px]" data-v-8e35f1ae${_scopeId2}><div class="flex items-center" data-v-8e35f1ae${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(ElAvatar), {
                      src: member.avatar,
                      size: "26",
                      class: "flex-none ml-2"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="ml-2 text-tx-regular text-xs" data-v-8e35f1ae${_scopeId2}>${ssrInterpolate(member.nickname)}</div></div><div class="flex items-center" data-v-8e35f1ae${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(ElPopover), {
                      placement: "bottom-end",
                      width: 380,
                      trigger: "click",
                      "show-arrow": false,
                      transition: "custom-popover",
                      visible: isPermissionPopoverVisible.value && currentPopoverIndex.value === index
                    }, {
                      reference: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center cursor-pointer" data-v-8e35f1ae${_scopeId3}><span class="text-xs" data-v-8e35f1ae${_scopeId3}>${ssrInterpolate(TEAM_MAP[member.permission])}</span>`);
                          _push4(ssrRenderComponent(_component_Icon, { name: "el-icon-ArrowDown" }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "flex items-center cursor-pointer",
                              onClick: withModifiers(($event) => openPermissionPopover(index), ["stop"])
                            }, [
                              createVNode("span", { class: "text-xs" }, toDisplayString(TEAM_MAP[member.permission]), 1),
                              createVNode(_component_Icon, { name: "el-icon-ArrowDown" })
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="cursor-pointer" data-v-8e35f1ae${_scopeId3}><div class="flex items-center p-4 hover:bg-page rounded-xl" data-v-8e35f1ae${_scopeId3}><div style="${ssrRenderStyle({ "width": "320px" })}" data-v-8e35f1ae${_scopeId3}><div class="text-base text-tx-primary" data-v-8e35f1ae${_scopeId3}> \u53EF\u7F16\u8F91 </div><div class="text-xs text-tx-placeholder mt-2" data-v-8e35f1ae${_scopeId3}> \u53EA\u80FD\u64CD\u4F5C\u6570\u636E\u5B66\u4E60\uFF0C\u589E\u5220\u6539\u67E5\u81EA\u5DF1\u7684\u6570\u636E\uFF0C\u4E0D\u80FD\u4FEE\u6539\u4ED6\u4EBA </div></div>`);
                          _push4(ssrRenderComponent(unref(ElCheckbox), {
                            "model-value": member.permission,
                            "true-value": 2,
                            label: "",
                            size: "large",
                            onClick: ($event) => setPermission(
                              member,
                              2
                              /* EDIT */
                            )
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="flex items-center p-4 hover:bg-page rounded-xl" data-v-8e35f1ae${_scopeId3}><div style="${ssrRenderStyle({ "width": "320px" })}" data-v-8e35f1ae${_scopeId3}><div class="text-base text-tx-primary" data-v-8e35f1ae${_scopeId3}> \u53EF\u67E5\u770B </div><div class="text-xs text-tx-placeholder mt-2" data-v-8e35f1ae${_scopeId3}> \u67E5\u770B\u77E5\u8BC6\u5E93\u6240\u6709\u6570\u636E </div></div>`);
                          _push4(ssrRenderComponent(unref(ElCheckbox), {
                            "model-value": member.permission,
                            "true-value": 3,
                            label: "",
                            size: "large",
                            onClick: ($event) => setPermission(
                              member,
                              3
                              /* VIEW */
                            )
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="flex items-center p-4 hover:bg-page rounded-xl" data-v-8e35f1ae${_scopeId3}><div style="${ssrRenderStyle({ "width": "320px" })}" data-v-8e35f1ae${_scopeId3}><div class="text-base text-tx-primary" data-v-8e35f1ae${_scopeId3}> \u53EF\u7BA1\u7406 </div><div class="text-xs text-tx-placeholder mt-2" data-v-8e35f1ae${_scopeId3}> \u7BA1\u7406\u6574\u4E2A\u77E5\u8BC6\u5E93\u6570\u636E\u548C\u4FE1\u606F </div></div>`);
                          _push4(ssrRenderComponent(unref(ElCheckbox), {
                            "model-value": member.permission,
                            "true-value": 1,
                            label: "",
                            size: "large",
                            onClick: ($event) => setPermission(
                              member,
                              1
                              /* ADMIN */
                            )
                          }, null, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "cursor-pointer" }, [
                              createVNode("div", {
                                class: "flex items-center p-4 hover:bg-page rounded-xl",
                                onClick: ($event) => setPermission(
                                  member,
                                  2
                                  /* EDIT */
                                )
                              }, [
                                createVNode("div", { style: { "width": "320px" } }, [
                                  createVNode("div", { class: "text-base text-tx-primary" }, " \u53EF\u7F16\u8F91 "),
                                  createVNode("div", { class: "text-xs text-tx-placeholder mt-2" }, " \u53EA\u80FD\u64CD\u4F5C\u6570\u636E\u5B66\u4E60\uFF0C\u589E\u5220\u6539\u67E5\u81EA\u5DF1\u7684\u6570\u636E\uFF0C\u4E0D\u80FD\u4FEE\u6539\u4ED6\u4EBA ")
                                ]),
                                createVNode(unref(ElCheckbox), {
                                  "model-value": member.permission,
                                  "true-value": 2,
                                  label: "",
                                  size: "large",
                                  onClick: withModifiers(($event) => setPermission(
                                    member,
                                    2
                                    /* EDIT */
                                  ), ["stop"])
                                }, null, 8, ["model-value", "true-value", "onClick"])
                              ], 8, ["onClick"]),
                              createVNode("div", {
                                class: "flex items-center p-4 hover:bg-page rounded-xl",
                                onClick: ($event) => setPermission(
                                  member,
                                  3
                                  /* VIEW */
                                )
                              }, [
                                createVNode("div", { style: { "width": "320px" } }, [
                                  createVNode("div", { class: "text-base text-tx-primary" }, " \u53EF\u67E5\u770B "),
                                  createVNode("div", { class: "text-xs text-tx-placeholder mt-2" }, " \u67E5\u770B\u77E5\u8BC6\u5E93\u6240\u6709\u6570\u636E ")
                                ]),
                                createVNode(unref(ElCheckbox), {
                                  "model-value": member.permission,
                                  "true-value": 3,
                                  label: "",
                                  size: "large",
                                  onClick: withModifiers(($event) => setPermission(
                                    member,
                                    3
                                    /* VIEW */
                                  ), ["stop"])
                                }, null, 8, ["model-value", "true-value", "onClick"])
                              ], 8, ["onClick"]),
                              createVNode("div", {
                                class: "flex items-center p-4 hover:bg-page rounded-xl",
                                onClick: ($event) => setPermission(
                                  member,
                                  1
                                  /* ADMIN */
                                )
                              }, [
                                createVNode("div", { style: { "width": "320px" } }, [
                                  createVNode("div", { class: "text-base text-tx-primary" }, " \u53EF\u7BA1\u7406 "),
                                  createVNode("div", { class: "text-xs text-tx-placeholder mt-2" }, " \u7BA1\u7406\u6574\u4E2A\u77E5\u8BC6\u5E93\u6570\u636E\u548C\u4FE1\u606F ")
                                ]),
                                createVNode(unref(ElCheckbox), {
                                  "model-value": member.permission,
                                  "true-value": 1,
                                  label: "",
                                  size: "large",
                                  onClick: withModifiers(($event) => setPermission(
                                    member,
                                    1
                                    /* ADMIN */
                                  ), ["stop"])
                                }, null, 8, ["model-value", "true-value", "onClick"])
                              ], 8, ["onClick"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="flex items-center ml-6" data-v-8e35f1ae${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, { name: "el-icon-CloseBold" }, null, _parent3, _scopeId2));
                    _push3(`</div></div></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col px-4" }, [
                      createVNode("div", { class: "text-base" }, " \u5DF2\u9009\u62E9\uFF1A" + toDisplayString(selectedMembers.value.length) + " \u4E2A ", 1),
                      (openBlock(true), createBlock(Fragment, null, renderList(selectedMembers.value, (member, index) => {
                        return openBlock(), createBlock("div", {
                          class: "mt-4 py-2 px-4 flex items-center justify-between cursor-pointer hover:bg-primary-light-9 rounded-[12px]",
                          key: member.id
                        }, [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(unref(ElAvatar), {
                              src: member.avatar,
                              size: "26",
                              class: "flex-none ml-2"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "ml-2 text-tx-regular text-xs" }, toDisplayString(member.nickname), 1)
                          ]),
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(unref(ElPopover), {
                              placement: "bottom-end",
                              width: 380,
                              trigger: "click",
                              "show-arrow": false,
                              transition: "custom-popover",
                              visible: isPermissionPopoverVisible.value && currentPopoverIndex.value === index
                            }, {
                              reference: withCtx(() => [
                                createVNode("div", {
                                  class: "flex items-center cursor-pointer",
                                  onClick: withModifiers(($event) => openPermissionPopover(index), ["stop"])
                                }, [
                                  createVNode("span", { class: "text-xs" }, toDisplayString(TEAM_MAP[member.permission]), 1),
                                  createVNode(_component_Icon, { name: "el-icon-ArrowDown" })
                                ], 8, ["onClick"])
                              ]),
                              default: withCtx(() => [
                                createVNode("div", { class: "cursor-pointer" }, [
                                  createVNode("div", {
                                    class: "flex items-center p-4 hover:bg-page rounded-xl",
                                    onClick: ($event) => setPermission(
                                      member,
                                      2
                                      /* EDIT */
                                    )
                                  }, [
                                    createVNode("div", { style: { "width": "320px" } }, [
                                      createVNode("div", { class: "text-base text-tx-primary" }, " \u53EF\u7F16\u8F91 "),
                                      createVNode("div", { class: "text-xs text-tx-placeholder mt-2" }, " \u53EA\u80FD\u64CD\u4F5C\u6570\u636E\u5B66\u4E60\uFF0C\u589E\u5220\u6539\u67E5\u81EA\u5DF1\u7684\u6570\u636E\uFF0C\u4E0D\u80FD\u4FEE\u6539\u4ED6\u4EBA ")
                                    ]),
                                    createVNode(unref(ElCheckbox), {
                                      "model-value": member.permission,
                                      "true-value": 2,
                                      label: "",
                                      size: "large",
                                      onClick: withModifiers(($event) => setPermission(
                                        member,
                                        2
                                        /* EDIT */
                                      ), ["stop"])
                                    }, null, 8, ["model-value", "true-value", "onClick"])
                                  ], 8, ["onClick"]),
                                  createVNode("div", {
                                    class: "flex items-center p-4 hover:bg-page rounded-xl",
                                    onClick: ($event) => setPermission(
                                      member,
                                      3
                                      /* VIEW */
                                    )
                                  }, [
                                    createVNode("div", { style: { "width": "320px" } }, [
                                      createVNode("div", { class: "text-base text-tx-primary" }, " \u53EF\u67E5\u770B "),
                                      createVNode("div", { class: "text-xs text-tx-placeholder mt-2" }, " \u67E5\u770B\u77E5\u8BC6\u5E93\u6240\u6709\u6570\u636E ")
                                    ]),
                                    createVNode(unref(ElCheckbox), {
                                      "model-value": member.permission,
                                      "true-value": 3,
                                      label: "",
                                      size: "large",
                                      onClick: withModifiers(($event) => setPermission(
                                        member,
                                        3
                                        /* VIEW */
                                      ), ["stop"])
                                    }, null, 8, ["model-value", "true-value", "onClick"])
                                  ], 8, ["onClick"]),
                                  createVNode("div", {
                                    class: "flex items-center p-4 hover:bg-page rounded-xl",
                                    onClick: ($event) => setPermission(
                                      member,
                                      1
                                      /* ADMIN */
                                    )
                                  }, [
                                    createVNode("div", { style: { "width": "320px" } }, [
                                      createVNode("div", { class: "text-base text-tx-primary" }, " \u53EF\u7BA1\u7406 "),
                                      createVNode("div", { class: "text-xs text-tx-placeholder mt-2" }, " \u7BA1\u7406\u6574\u4E2A\u77E5\u8BC6\u5E93\u6570\u636E\u548C\u4FE1\u606F ")
                                    ]),
                                    createVNode(unref(ElCheckbox), {
                                      "model-value": member.permission,
                                      "true-value": 1,
                                      label: "",
                                      size: "large",
                                      onClick: withModifiers(($event) => setPermission(
                                        member,
                                        1
                                        /* ADMIN */
                                      ), ["stop"])
                                    }, null, 8, ["model-value", "true-value", "onClick"])
                                  ], 8, ["onClick"])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["visible"]),
                            createVNode("div", {
                              class: "flex items-center ml-6",
                              onClick: ($event) => removeMember(member)
                            }, [
                              createVNode(_component_Icon, { name: "el-icon-CloseBold" })
                            ], 8, ["onClick"])
                          ])
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "flex",
                onClick: closePermissionPopover
              }, [
                createVNode("div", { class: "w-1/2" }, [
                  createVNode("div", { class: "px-4" }, [
                    createVNode(unref(ElInput), {
                      modelValue: queryParams.keyword,
                      "onUpdate:modelValue": ($event) => queryParams.keyword = $event,
                      style: { "width": "100%" },
                      size: "large",
                      placeholder: "\u641C\u7D22\u6210\u5458",
                      "prefix-icon": unref(search_default),
                      onInput: fetchMemberList
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                  ]),
                  createVNode(_component_ElScrollbar, { height: "500px" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex flex-col" }, [
                        unref(pager).lists.length === 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          style: { "height": "500px" },
                          class: "flex justify-center items-center text-tx-placeholder"
                        }, " \u8BF7\u641C\u7D22\u6210\u5458\u6DFB\u52A0 ")) : createCommentVNode("", true),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode("div", { class: "my-2 px-4" }, [
                            createVNode(unref(ElCheckbox), {
                              modelValue: isSelectAll.value,
                              "onUpdate:modelValue": ($event) => isSelectAll.value = $event,
                              "true-value": 1,
                              "false-value": 0,
                              label: "\u5168\u9009",
                              size: "large",
                              onChange: handleSelectAll
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          unref(pager).lists.length !== 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(pager).lists, (member) => {
                            return openBlock(), createBlock("div", {
                              class: ["my-4 mr-4 py-2 px-4 flex items-center cursor-pointer hover:bg-primary-light-9 rounded-[12px]", {
                                "!cursor-not-allowed": member.is_added
                              }],
                              key: member.id,
                              onClick: ($event) => handleMemberSelect(member, "box")
                            }, [
                              createVNode(unref(ElCheckbox), {
                                modelValue: member.isSelected,
                                "onUpdate:modelValue": ($event) => member.isSelected = $event,
                                "true-value": 1,
                                "false-value": 0,
                                label: "",
                                size: "large",
                                disabled: member.is_added,
                                onClick: withModifiers(($event) => handleMemberSelect(
                                  member,
                                  "checkbox"
                                ), ["stop"])
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onClick"]),
                              createVNode(unref(ElAvatar), {
                                src: member.avatar,
                                size: "26",
                                class: "flex-none ml-2"
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "ml-2 text-xs" }, [
                                createVNode("span", null, toDisplayString(member.nickname), 1),
                                member.is_added ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "text-tx-placeholder"
                                }, " \u5DF2\u6DFB\u52A0 ")) : createCommentVNode("", true)
                              ])
                            ], 10, ["onClick"]);
                          }), 128)) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(unref(ElDivider), {
                  direction: "vertical",
                  style: { "height": "500px" }
                }),
                createVNode(_component_ElScrollbar, {
                  height: "500px",
                  class: "w-1/2"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-col px-4" }, [
                      createVNode("div", { class: "text-base" }, " \u5DF2\u9009\u62E9\uFF1A" + toDisplayString(selectedMembers.value.length) + " \u4E2A ", 1),
                      (openBlock(true), createBlock(Fragment, null, renderList(selectedMembers.value, (member, index) => {
                        return openBlock(), createBlock("div", {
                          class: "mt-4 py-2 px-4 flex items-center justify-between cursor-pointer hover:bg-primary-light-9 rounded-[12px]",
                          key: member.id
                        }, [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(unref(ElAvatar), {
                              src: member.avatar,
                              size: "26",
                              class: "flex-none ml-2"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "ml-2 text-tx-regular text-xs" }, toDisplayString(member.nickname), 1)
                          ]),
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(unref(ElPopover), {
                              placement: "bottom-end",
                              width: 380,
                              trigger: "click",
                              "show-arrow": false,
                              transition: "custom-popover",
                              visible: isPermissionPopoverVisible.value && currentPopoverIndex.value === index
                            }, {
                              reference: withCtx(() => [
                                createVNode("div", {
                                  class: "flex items-center cursor-pointer",
                                  onClick: withModifiers(($event) => openPermissionPopover(index), ["stop"])
                                }, [
                                  createVNode("span", { class: "text-xs" }, toDisplayString(TEAM_MAP[member.permission]), 1),
                                  createVNode(_component_Icon, { name: "el-icon-ArrowDown" })
                                ], 8, ["onClick"])
                              ]),
                              default: withCtx(() => [
                                createVNode("div", { class: "cursor-pointer" }, [
                                  createVNode("div", {
                                    class: "flex items-center p-4 hover:bg-page rounded-xl",
                                    onClick: ($event) => setPermission(
                                      member,
                                      2
                                      /* EDIT */
                                    )
                                  }, [
                                    createVNode("div", { style: { "width": "320px" } }, [
                                      createVNode("div", { class: "text-base text-tx-primary" }, " \u53EF\u7F16\u8F91 "),
                                      createVNode("div", { class: "text-xs text-tx-placeholder mt-2" }, " \u53EA\u80FD\u64CD\u4F5C\u6570\u636E\u5B66\u4E60\uFF0C\u589E\u5220\u6539\u67E5\u81EA\u5DF1\u7684\u6570\u636E\uFF0C\u4E0D\u80FD\u4FEE\u6539\u4ED6\u4EBA ")
                                    ]),
                                    createVNode(unref(ElCheckbox), {
                                      "model-value": member.permission,
                                      "true-value": 2,
                                      label: "",
                                      size: "large",
                                      onClick: withModifiers(($event) => setPermission(
                                        member,
                                        2
                                        /* EDIT */
                                      ), ["stop"])
                                    }, null, 8, ["model-value", "true-value", "onClick"])
                                  ], 8, ["onClick"]),
                                  createVNode("div", {
                                    class: "flex items-center p-4 hover:bg-page rounded-xl",
                                    onClick: ($event) => setPermission(
                                      member,
                                      3
                                      /* VIEW */
                                    )
                                  }, [
                                    createVNode("div", { style: { "width": "320px" } }, [
                                      createVNode("div", { class: "text-base text-tx-primary" }, " \u53EF\u67E5\u770B "),
                                      createVNode("div", { class: "text-xs text-tx-placeholder mt-2" }, " \u67E5\u770B\u77E5\u8BC6\u5E93\u6240\u6709\u6570\u636E ")
                                    ]),
                                    createVNode(unref(ElCheckbox), {
                                      "model-value": member.permission,
                                      "true-value": 3,
                                      label: "",
                                      size: "large",
                                      onClick: withModifiers(($event) => setPermission(
                                        member,
                                        3
                                        /* VIEW */
                                      ), ["stop"])
                                    }, null, 8, ["model-value", "true-value", "onClick"])
                                  ], 8, ["onClick"]),
                                  createVNode("div", {
                                    class: "flex items-center p-4 hover:bg-page rounded-xl",
                                    onClick: ($event) => setPermission(
                                      member,
                                      1
                                      /* ADMIN */
                                    )
                                  }, [
                                    createVNode("div", { style: { "width": "320px" } }, [
                                      createVNode("div", { class: "text-base text-tx-primary" }, " \u53EF\u7BA1\u7406 "),
                                      createVNode("div", { class: "text-xs text-tx-placeholder mt-2" }, " \u7BA1\u7406\u6574\u4E2A\u77E5\u8BC6\u5E93\u6570\u636E\u548C\u4FE1\u606F ")
                                    ]),
                                    createVNode(unref(ElCheckbox), {
                                      "model-value": member.permission,
                                      "true-value": 1,
                                      label: "",
                                      size: "large",
                                      onClick: withModifiers(($event) => setPermission(
                                        member,
                                        1
                                        /* ADMIN */
                                      ), ["stop"])
                                    }, null, 8, ["model-value", "true-value", "onClick"])
                                  ], 8, ["onClick"])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["visible"]),
                            createVNode("div", {
                              class: "flex items-center ml-6",
                              onClick: ($event) => removeMember(member)
                            }, [
                              createVNode(_component_Icon, { name: "el-icon-CloseBold" })
                            ], 8, ["onClick"])
                          ])
                        ]);
                      }), 128))
                    ])
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/_components/team-data-com/add-user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TeamAddUser = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8e35f1ae"]]);

export { TeamAddUser as default };
//# sourceMappingURL=add-user-CGCYccD1.mjs.map
