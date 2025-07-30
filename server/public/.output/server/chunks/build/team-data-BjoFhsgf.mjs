import { E as ElTable, a as ElTableColumn } from './el-table-column-tZnWqVKO.mjs';
import { E as ElAvatar } from './index-BV1cZAUE.mjs';
import { _ as _sfc_main$1 } from './index-L3E_sDO1.mjs';
import { E as ElTag } from './index-D7S5lb8a.mjs';
import { E as ElPopover } from './index-CJqYHNUB.mjs';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { a as useRouter, z as useUserStore, d as ElButton, A as feedback } from './server.mjs';
import { useSSRContext, defineComponent, ref, computed, reactive, shallowRef, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, withModifiers, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { a as getTeamLists, d as deleteTeam, b as putTeam, t as transferTeam } from './knowledge-DiYwGYtC.mjs';
import TeamAddUser from './add-user-CGCYccD1.mjs';
import PermissionOption from './permission-option-4Rq1I_93.mjs';
import { E as ElDialog } from './index-CzJm6kkT.mjs';
import { E as ElCheckbox } from './index-53t5ntO1.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'lodash-unified';
import './index-0xCxAaTZ.mjs';
import '@vueuse/core';
import '@vue/shared';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-5Ia44xzE.mjs';
import 'normalize-wheel-es';
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
import './usePaging-DU8sXki3.mjs';
import './useLockFn-BWbjkhBs.mjs';
import './index-pT4w-4Lo.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "team-data",
  __ssrInlineRender: true,
  props: { id: { type: Number, default: 0 } },
  setup(__props) {
    const TEAM_PERMISSIONS = {
      1: "\u53EF\u7BA1\u7406",
      2: "\u53EF\u7F16\u8F91",
      3: "\u53EF\u67E5\u770B"
    };
    const props = __props;
    const router = useRouter();
    const teamId = ref(props.id);
    const members = ref([]);
    const currentUser = computed(
      () => members.value.find(
        (member) => member.sn === useUserStore().userInfo.sn
      ) || {}
    );
    const selectedPermission = ref(null);
    const isTransferModalVisible = ref(false);
    const transferType = ref("all");
    const isTransferInProgress = ref(false);
    const transferTarget = reactive({ sn: -1 });
    const addUserModal = shallowRef();
    const fetchTeamMembers = async () => {
      members.value = await getTeamLists({ kb_id: teamId.value });
    };
    const showAddUserModal = () => {
      var _a;
      (_a = addUserModal.value) == null ? void 0 : _a.show();
    };
    const removeState = reactive({ visible: false, memberId: "" });
    const toggleRemovePopover = (member) => {
      removeState.visible = !removeState.visible;
      removeState.memberId = member.id.toString();
    };
    const isRemovePopoverVisible = (member) => removeState.visible && removeState.memberId === member.id.toString();
    const removeMember = async (member) => {
      try {
        await feedback.confirm("\u786E\u5B9A\u5220\u9664\u8BE5\u6210\u5458\uFF1F", "\u5220\u9664\u6210\u5458");
        await deleteTeam({ id: member.id });
        if (currentUser.value.sn === member.sn) {
          setTimeout(() => {
            router.back();
          }, 1e3);
        }
        fetchTeamMembers();
      } finally {
        removeState.visible = false;
      }
    };
    const powerState = reactive({ visible: false, memberId: "" });
    const showPermissionPopover = (member) => {
      powerState.visible = true;
      powerState.memberId = member.id.toString();
      selectedPermission.value = member.power;
    };
    const isPermissionPopoverVisible = (member) => powerState.visible && powerState.memberId === member.id.toString();
    const updatePermissions = async (member, power) => {
      selectedPermission.value = power;
      await putTeam({ id: member.id, power });
      powerState.visible = false;
      fetchTeamMembers();
    };
    const showTransferModal = (member) => {
      transferTarget.sn = member.sn;
      isTransferModalVisible.value = true;
    };
    const transferOwnership = async () => {
      isTransferInProgress.value = true;
      await transferTeam({
        sn: transferTarget.sn,
        kb_id: teamId.value,
        type: transferType.value
      });
      isTransferInProgress.value = false;
      if (transferType.value === "kb") {
        setTimeout(() => {
          router.back();
        }, 1e3);
      } else {
        isTransferModalVisible.value = false;
        fetchTeamMembers();
      }
    };
    const permissionLabel = (power) => TEAM_PERMISSIONS[power] || "\u672A\u77E5\u6743\u9650";
    const isCurrentUserPower = computed(() => currentUser.value.power === 1);
    const isCurrentUserOwned = computed(() => currentUser.value.owned === 1);
    const canTransferOwnership = (member) => member.sn !== currentUser.value.sn && isCurrentUserPower.value;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _component_el_avatar = ElAvatar;
      const _component_OverflowTooltip = _sfc_main$1;
      const _component_el_tag = ElTag;
      const _component_el_popover = ElPopover;
      const _component_Icon = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-0 h-full p-5" }, _attrs))} data-v-c7524e81><div class="text-xl font-bold" data-v-c7524e81>\u6211\u7684\u56E2\u961F</div><div class="flex justify-between items-center py-2" data-v-c7524e81><div data-v-c7524e81>\u56E2\u961F\u6210\u5458(\u5171${ssrInterpolate(members.value.length)}\u4EBA)</div>`);
      if (currentUser.value.owned === 1) {
        _push(ssrRenderComponent(unref(ElButton), {
          type: "primary",
          plain: "",
          onClick: showAddUserModal
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` + \u6DFB\u52A0\u6210\u5458 `);
            } else {
              return [
                createTextVNode(" + \u6DFB\u52A0\u6210\u5458 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_el_table, {
        class: "mt-4 cursor-pointer flex-1 min-h-0",
        data: members.value,
        size: "large",
        height: "100%",
        "row-class-name": "h-[70px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u6210\u5458\u4FE1\u606F",
              prop: "name",
              "min-width": "160"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center" data-v-c7524e81${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_avatar, {
                    src: row.avatar,
                    size: "26",
                    class: "flex-none"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_OverflowTooltip, {
                    class: "ml-2",
                    content: row.nickname,
                    teleported: true,
                    effect: "light"
                  }, null, _parent3, _scopeId2));
                  if (row.sn === currentUser.value.sn) {
                    _push3(ssrRenderComponent(_component_el_tag, {
                      type: "primary",
                      size: "small",
                      class: "ml-2"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u6211 `);
                        } else {
                          return [
                            createTextVNode(" \u6211 ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode(_component_el_avatar, {
                        src: row.avatar,
                        size: "26",
                        class: "flex-none"
                      }, null, 8, ["src"]),
                      createVNode(_component_OverflowTooltip, {
                        class: "ml-2",
                        content: row.nickname,
                        teleported: true,
                        effect: "light"
                      }, null, 8, ["content"]),
                      row.sn === currentUser.value.sn ? (openBlock(), createBlock(_component_el_tag, {
                        key: 0,
                        type: "primary",
                        size: "small",
                        class: "ml-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u6211 ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u6210\u5458\u89D2\u8272",
              prop: "role",
              "min-width": "160"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center" data-v-c7524e81${_scopeId2}>`);
                  if (row.owned === 1) {
                    _push3(`<div data-v-c7524e81${_scopeId2}>\u6240\u6709\u8005</div>`);
                  } else if (isCurrentUserPower.value && currentUser.value.sn !== row.sn) {
                    _push3(ssrRenderComponent(_component_el_popover, {
                      placement: "bottom",
                      width: 180,
                      trigger: "click",
                      "show-arrow": false,
                      transition: "custom-popover",
                      visible: isRemovePopoverVisible(row)
                    }, {
                      reference: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center cursor-pointer" data-v-c7524e81${_scopeId3}><span class="text-base mr-1" data-v-c7524e81${_scopeId3}>\u6210\u5458</span>`);
                          _push4(ssrRenderComponent(_component_Icon, { name: "el-icon-ArrowDown" }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "flex items-center cursor-pointer",
                              onClick: withModifiers(($event) => toggleRemovePopover(row), ["stop"])
                            }, [
                              createVNode("span", { class: "text-base mr-1" }, "\u6210\u5458"),
                              createVNode(_component_Icon, { name: "el-icon-ArrowDown" })
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center leading-10 cursor-pointer hover:bg-page px-2 rounded text-error" data-v-c7524e81${_scopeId3}> \u79FB\u51FA\u56E2\u961F </div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "flex items-center leading-10 cursor-pointer hover:bg-page px-2 rounded text-error",
                              onClick: ($event) => removeMember(row)
                            }, " \u79FB\u51FA\u56E2\u961F ", 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else if (currentUser.value.power >= 1 && currentUser.value.sn === row.sn) {
                    _push3(ssrRenderComponent(_component_el_popover, {
                      placement: "bottom",
                      width: 180,
                      trigger: "click",
                      "show-arrow": false,
                      transition: "custom-popover",
                      visible: isRemovePopoverVisible(row)
                    }, {
                      reference: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center cursor-pointer" data-v-c7524e81${_scopeId3}><span class="text-base mr-1" data-v-c7524e81${_scopeId3}>\u6210\u5458</span>`);
                          _push4(ssrRenderComponent(_component_Icon, { name: "el-icon-ArrowDown" }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "flex items-center cursor-pointer",
                              onClick: withModifiers(($event) => toggleRemovePopover(row), ["stop"])
                            }, [
                              createVNode("span", { class: "text-base mr-1" }, "\u6210\u5458"),
                              createVNode(_component_Icon, { name: "el-icon-ArrowDown" })
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center leading-10 cursor-pointer hover:bg-page px-2 rounded text-error" data-v-c7524e81${_scopeId3}> \u9000\u51FA\u56E2\u961F </div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "flex items-center leading-10 cursor-pointer hover:bg-page px-2 rounded text-error",
                              onClick: ($event) => removeMember(row)
                            }, " \u9000\u51FA\u56E2\u961F ", 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<div class="text-base" data-v-c7524e81${_scopeId2}>\u6210\u5458</div>`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      row.owned === 1 ? (openBlock(), createBlock("div", { key: 0 }, "\u6240\u6709\u8005")) : isCurrentUserPower.value && currentUser.value.sn !== row.sn ? (openBlock(), createBlock(_component_el_popover, {
                        key: 1,
                        placement: "bottom",
                        width: 180,
                        trigger: "click",
                        "show-arrow": false,
                        transition: "custom-popover",
                        visible: isRemovePopoverVisible(row)
                      }, {
                        reference: withCtx(() => [
                          createVNode("div", {
                            class: "flex items-center cursor-pointer",
                            onClick: withModifiers(($event) => toggleRemovePopover(row), ["stop"])
                          }, [
                            createVNode("span", { class: "text-base mr-1" }, "\u6210\u5458"),
                            createVNode(_component_Icon, { name: "el-icon-ArrowDown" })
                          ], 8, ["onClick"])
                        ]),
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "flex items-center leading-10 cursor-pointer hover:bg-page px-2 rounded text-error",
                            onClick: ($event) => removeMember(row)
                          }, " \u79FB\u51FA\u56E2\u961F ", 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1032, ["visible"])) : currentUser.value.power >= 1 && currentUser.value.sn === row.sn ? (openBlock(), createBlock(_component_el_popover, {
                        key: 2,
                        placement: "bottom",
                        width: 180,
                        trigger: "click",
                        "show-arrow": false,
                        transition: "custom-popover",
                        visible: isRemovePopoverVisible(row)
                      }, {
                        reference: withCtx(() => [
                          createVNode("div", {
                            class: "flex items-center cursor-pointer",
                            onClick: withModifiers(($event) => toggleRemovePopover(row), ["stop"])
                          }, [
                            createVNode("span", { class: "text-base mr-1" }, "\u6210\u5458"),
                            createVNode(_component_Icon, { name: "el-icon-ArrowDown" })
                          ], 8, ["onClick"])
                        ]),
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "flex items-center leading-10 cursor-pointer hover:bg-page px-2 rounded text-error",
                            onClick: ($event) => removeMember(row)
                          }, " \u9000\u51FA\u56E2\u961F ", 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1032, ["visible"])) : (openBlock(), createBlock("div", {
                        key: 3,
                        class: "text-base"
                      }, "\u6210\u5458"))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u9ED8\u8BA4\u6743\u9650",
              prop: "permissions",
              "min-width": "160"
            }, {
              default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center" data-v-c7524e81${_scopeId2}>`);
                  if (row.owned === 1) {
                    _push3(`<div data-v-c7524e81${_scopeId2}>\u5168\u90E8</div>`);
                  } else if (isCurrentUserPower.value) {
                    _push3(ssrRenderComponent(_component_el_popover, {
                      placement: "bottom-end",
                      width: 390,
                      trigger: "click",
                      "show-arrow": false,
                      transition: "custom-popover",
                      visible: isPermissionPopoverVisible(row)
                    }, {
                      reference: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center cursor-pointer" data-v-c7524e81${_scopeId3}><span class="text-base mr-1" data-v-c7524e81${_scopeId3}>${ssrInterpolate(permissionLabel(row.power))}</span>`);
                          _push4(ssrRenderComponent(_component_Icon, { name: "el-icon-ArrowDown" }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "flex items-center cursor-pointer",
                              onClick: withModifiers(($event) => showPermissionPopover(row), ["stop"])
                            }, [
                              createVNode("span", { class: "text-base mr-1" }, toDisplayString(permissionLabel(row.power)), 1),
                              createVNode(_component_Icon, { name: "el-icon-ArrowDown" })
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="cursor-pointer" data-v-c7524e81${_scopeId3}>`);
                          _push4(ssrRenderComponent(PermissionOption, {
                            label: "\u53EF\u7F16\u8F91",
                            description: "\u53EA\u80FD\u64CD\u4F5C\u6570\u636E\u5B66\u4E60\uFF0C\u589E\u5220\u6539\u67E5\u81EA\u5DF1\u7684\u6570\u636E\uFF0C\u4E0D\u80FD\u4FEE\u6539\u4ED6\u4EBA",
                            value: 2,
                            "model-value": selectedPermission.value,
                            onChange: ($event) => updatePermissions(row, 2)
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(PermissionOption, {
                            label: "\u53EF\u67E5\u770B",
                            description: "\u67E5\u770B\u77E5\u8BC6\u5E93\u6240\u6709\u6570\u636E",
                            value: 3,
                            "model-value": selectedPermission.value,
                            onChange: ($event) => updatePermissions(row, 3)
                          }, null, _parent4, _scopeId3));
                          if (isCurrentUserPower.value) {
                            _push4(ssrRenderComponent(PermissionOption, {
                              label: "\u53EF\u7BA1\u7406",
                              description: "\u7BA1\u7406\u6574\u4E2A\u77E5\u8BC6\u5E93\u6570\u636E\u548C\u4FE1\u606F",
                              value: 1,
                              "model-value": row.power,
                              onChange: ($event) => updatePermissions(row, 1)
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "cursor-pointer" }, [
                              createVNode(PermissionOption, {
                                label: "\u53EF\u7F16\u8F91",
                                description: "\u53EA\u80FD\u64CD\u4F5C\u6570\u636E\u5B66\u4E60\uFF0C\u589E\u5220\u6539\u67E5\u81EA\u5DF1\u7684\u6570\u636E\uFF0C\u4E0D\u80FD\u4FEE\u6539\u4ED6\u4EBA",
                                value: 2,
                                "model-value": selectedPermission.value,
                                onChange: ($event) => updatePermissions(row, 2)
                              }, null, 8, ["model-value", "onChange"]),
                              createVNode(PermissionOption, {
                                label: "\u53EF\u67E5\u770B",
                                description: "\u67E5\u770B\u77E5\u8BC6\u5E93\u6240\u6709\u6570\u636E",
                                value: 3,
                                "model-value": selectedPermission.value,
                                onChange: ($event) => updatePermissions(row, 3)
                              }, null, 8, ["model-value", "onChange"]),
                              isCurrentUserPower.value ? (openBlock(), createBlock(PermissionOption, {
                                key: 0,
                                label: "\u53EF\u7BA1\u7406",
                                description: "\u7BA1\u7406\u6574\u4E2A\u77E5\u8BC6\u5E93\u6570\u636E\u548C\u4FE1\u606F",
                                value: 1,
                                "model-value": row.power,
                                onChange: ($event) => updatePermissions(row, 1)
                              }, null, 8, ["model-value", "onChange"])) : createCommentVNode("", true)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<div class="text-base" data-v-c7524e81${_scopeId2}>${ssrInterpolate(permissionLabel(row.power))}</div>`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      row.owned === 1 ? (openBlock(), createBlock("div", { key: 0 }, "\u5168\u90E8")) : isCurrentUserPower.value ? (openBlock(), createBlock(_component_el_popover, {
                        key: 1,
                        placement: "bottom-end",
                        width: 390,
                        trigger: "click",
                        "show-arrow": false,
                        transition: "custom-popover",
                        visible: isPermissionPopoverVisible(row)
                      }, {
                        reference: withCtx(() => [
                          createVNode("div", {
                            class: "flex items-center cursor-pointer",
                            onClick: withModifiers(($event) => showPermissionPopover(row), ["stop"])
                          }, [
                            createVNode("span", { class: "text-base mr-1" }, toDisplayString(permissionLabel(row.power)), 1),
                            createVNode(_component_Icon, { name: "el-icon-ArrowDown" })
                          ], 8, ["onClick"])
                        ]),
                        default: withCtx(() => [
                          createVNode("div", { class: "cursor-pointer" }, [
                            createVNode(PermissionOption, {
                              label: "\u53EF\u7F16\u8F91",
                              description: "\u53EA\u80FD\u64CD\u4F5C\u6570\u636E\u5B66\u4E60\uFF0C\u589E\u5220\u6539\u67E5\u81EA\u5DF1\u7684\u6570\u636E\uFF0C\u4E0D\u80FD\u4FEE\u6539\u4ED6\u4EBA",
                              value: 2,
                              "model-value": selectedPermission.value,
                              onChange: ($event) => updatePermissions(row, 2)
                            }, null, 8, ["model-value", "onChange"]),
                            createVNode(PermissionOption, {
                              label: "\u53EF\u67E5\u770B",
                              description: "\u67E5\u770B\u77E5\u8BC6\u5E93\u6240\u6709\u6570\u636E",
                              value: 3,
                              "model-value": selectedPermission.value,
                              onChange: ($event) => updatePermissions(row, 3)
                            }, null, 8, ["model-value", "onChange"]),
                            isCurrentUserPower.value ? (openBlock(), createBlock(PermissionOption, {
                              key: 0,
                              label: "\u53EF\u7BA1\u7406",
                              description: "\u7BA1\u7406\u6574\u4E2A\u77E5\u8BC6\u5E93\u6570\u636E\u548C\u4FE1\u606F",
                              value: 1,
                              "model-value": row.power,
                              onChange: ($event) => updatePermissions(row, 1)
                            }, null, 8, ["model-value", "onChange"])) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["visible"])) : (openBlock(), createBlock("div", {
                        key: 2,
                        class: "text-base"
                      }, toDisplayString(permissionLabel(row.power)), 1))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u52A0\u5165\u65F6\u95F4",
              prop: "create_time",
              "min-width": "150"
            }, null, _parent2, _scopeId));
            if (isCurrentUserOwned.value) {
              _push2(ssrRenderComponent(_component_el_table_column, {
                label: "\u64CD\u4F5C",
                "min-width": "200",
                fixed: "right"
              }, {
                default: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (canTransferOwnership(row)) {
                      _push3(ssrRenderComponent(unref(ElButton), {
                        type: "primary",
                        link: "",
                        onClick: ($event) => showTransferModal(row)
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u8F6C\u79FB\u6240\u6709\u6743 `);
                          } else {
                            return [
                              createTextVNode(" \u8F6C\u79FB\u6240\u6709\u6743 ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      canTransferOwnership(row) ? (openBlock(), createBlock(unref(ElButton), {
                        key: 0,
                        type: "primary",
                        link: "",
                        onClick: ($event) => showTransferModal(row)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u8F6C\u79FB\u6240\u6709\u6743 ")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_el_table_column, {
                label: "\u6210\u5458\u4FE1\u606F",
                prop: "name",
                "min-width": "160"
              }, {
                default: withCtx(({ row }) => [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(_component_el_avatar, {
                      src: row.avatar,
                      size: "26",
                      class: "flex-none"
                    }, null, 8, ["src"]),
                    createVNode(_component_OverflowTooltip, {
                      class: "ml-2",
                      content: row.nickname,
                      teleported: true,
                      effect: "light"
                    }, null, 8, ["content"]),
                    row.sn === currentUser.value.sn ? (openBlock(), createBlock(_component_el_tag, {
                      key: 0,
                      type: "primary",
                      size: "small",
                      class: "ml-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u6211 ")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u6210\u5458\u89D2\u8272",
                prop: "role",
                "min-width": "160"
              }, {
                default: withCtx(({ row }) => [
                  createVNode("div", { class: "flex items-center" }, [
                    row.owned === 1 ? (openBlock(), createBlock("div", { key: 0 }, "\u6240\u6709\u8005")) : isCurrentUserPower.value && currentUser.value.sn !== row.sn ? (openBlock(), createBlock(_component_el_popover, {
                      key: 1,
                      placement: "bottom",
                      width: 180,
                      trigger: "click",
                      "show-arrow": false,
                      transition: "custom-popover",
                      visible: isRemovePopoverVisible(row)
                    }, {
                      reference: withCtx(() => [
                        createVNode("div", {
                          class: "flex items-center cursor-pointer",
                          onClick: withModifiers(($event) => toggleRemovePopover(row), ["stop"])
                        }, [
                          createVNode("span", { class: "text-base mr-1" }, "\u6210\u5458"),
                          createVNode(_component_Icon, { name: "el-icon-ArrowDown" })
                        ], 8, ["onClick"])
                      ]),
                      default: withCtx(() => [
                        createVNode("div", {
                          class: "flex items-center leading-10 cursor-pointer hover:bg-page px-2 rounded text-error",
                          onClick: ($event) => removeMember(row)
                        }, " \u79FB\u51FA\u56E2\u961F ", 8, ["onClick"])
                      ]),
                      _: 2
                    }, 1032, ["visible"])) : currentUser.value.power >= 1 && currentUser.value.sn === row.sn ? (openBlock(), createBlock(_component_el_popover, {
                      key: 2,
                      placement: "bottom",
                      width: 180,
                      trigger: "click",
                      "show-arrow": false,
                      transition: "custom-popover",
                      visible: isRemovePopoverVisible(row)
                    }, {
                      reference: withCtx(() => [
                        createVNode("div", {
                          class: "flex items-center cursor-pointer",
                          onClick: withModifiers(($event) => toggleRemovePopover(row), ["stop"])
                        }, [
                          createVNode("span", { class: "text-base mr-1" }, "\u6210\u5458"),
                          createVNode(_component_Icon, { name: "el-icon-ArrowDown" })
                        ], 8, ["onClick"])
                      ]),
                      default: withCtx(() => [
                        createVNode("div", {
                          class: "flex items-center leading-10 cursor-pointer hover:bg-page px-2 rounded text-error",
                          onClick: ($event) => removeMember(row)
                        }, " \u9000\u51FA\u56E2\u961F ", 8, ["onClick"])
                      ]),
                      _: 2
                    }, 1032, ["visible"])) : (openBlock(), createBlock("div", {
                      key: 3,
                      class: "text-base"
                    }, "\u6210\u5458"))
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u9ED8\u8BA4\u6743\u9650",
                prop: "permissions",
                "min-width": "160"
              }, {
                default: withCtx(({ row }) => [
                  createVNode("div", { class: "flex items-center" }, [
                    row.owned === 1 ? (openBlock(), createBlock("div", { key: 0 }, "\u5168\u90E8")) : isCurrentUserPower.value ? (openBlock(), createBlock(_component_el_popover, {
                      key: 1,
                      placement: "bottom-end",
                      width: 390,
                      trigger: "click",
                      "show-arrow": false,
                      transition: "custom-popover",
                      visible: isPermissionPopoverVisible(row)
                    }, {
                      reference: withCtx(() => [
                        createVNode("div", {
                          class: "flex items-center cursor-pointer",
                          onClick: withModifiers(($event) => showPermissionPopover(row), ["stop"])
                        }, [
                          createVNode("span", { class: "text-base mr-1" }, toDisplayString(permissionLabel(row.power)), 1),
                          createVNode(_component_Icon, { name: "el-icon-ArrowDown" })
                        ], 8, ["onClick"])
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "cursor-pointer" }, [
                          createVNode(PermissionOption, {
                            label: "\u53EF\u7F16\u8F91",
                            description: "\u53EA\u80FD\u64CD\u4F5C\u6570\u636E\u5B66\u4E60\uFF0C\u589E\u5220\u6539\u67E5\u81EA\u5DF1\u7684\u6570\u636E\uFF0C\u4E0D\u80FD\u4FEE\u6539\u4ED6\u4EBA",
                            value: 2,
                            "model-value": selectedPermission.value,
                            onChange: ($event) => updatePermissions(row, 2)
                          }, null, 8, ["model-value", "onChange"]),
                          createVNode(PermissionOption, {
                            label: "\u53EF\u67E5\u770B",
                            description: "\u67E5\u770B\u77E5\u8BC6\u5E93\u6240\u6709\u6570\u636E",
                            value: 3,
                            "model-value": selectedPermission.value,
                            onChange: ($event) => updatePermissions(row, 3)
                          }, null, 8, ["model-value", "onChange"]),
                          isCurrentUserPower.value ? (openBlock(), createBlock(PermissionOption, {
                            key: 0,
                            label: "\u53EF\u7BA1\u7406",
                            description: "\u7BA1\u7406\u6574\u4E2A\u77E5\u8BC6\u5E93\u6570\u636E\u548C\u4FE1\u606F",
                            value: 1,
                            "model-value": row.power,
                            onChange: ($event) => updatePermissions(row, 1)
                          }, null, 8, ["model-value", "onChange"])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["visible"])) : (openBlock(), createBlock("div", {
                      key: 2,
                      class: "text-base"
                    }, toDisplayString(permissionLabel(row.power)), 1))
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u52A0\u5165\u65F6\u95F4",
                prop: "create_time",
                "min-width": "150"
              }),
              isCurrentUserOwned.value ? (openBlock(), createBlock(_component_el_table_column, {
                key: 0,
                label: "\u64CD\u4F5C",
                "min-width": "200",
                fixed: "right"
              }, {
                default: withCtx(({ row }) => [
                  canTransferOwnership(row) ? (openBlock(), createBlock(unref(ElButton), {
                    key: 0,
                    type: "primary",
                    link: "",
                    onClick: ($event) => showTransferModal(row)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u8F6C\u79FB\u6240\u6709\u6743 ")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])) : createCommentVNode("", true)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TeamAddUser, {
        ref_key: "addUserModal",
        ref: addUserModal,
        id: teamId.value,
        onSuccess: fetchTeamMembers
      }, null, _parent));
      _push(ssrRenderComponent(unref(ElDialog), {
        modelValue: isTransferModalVisible.value,
        "onUpdate:modelValue": ($event) => isTransferModalVisible.value = $event,
        width: "450px",
        class: "!rounded-[12px]",
        center: "",
        draggable: "",
        "destroy-on-close": "",
        "close-on-click-modal": "false"
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full text-left" data-v-c7524e81${_scopeId}><div class="text-lg font-medium" data-v-c7524e81${_scopeId}>\u6210\u5458\u5904\u7406\u65B9\u5F0F</div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full text-left" }, [
                createVNode("div", { class: "text-lg font-medium" }, "\u6210\u5458\u5904\u7406\u65B9\u5F0F")
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end" data-v-c7524e81${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ElButton), {
              onClick: ($event) => isTransferModalVisible.value = false
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
              loading: isTransferInProgress.value,
              onClick: transferOwnership
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u786E\u8BA4 `);
                } else {
                  return [
                    createTextVNode("\u786E\u8BA4 ")
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
                  onClick: ($event) => isTransferModalVisible.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u53D6\u6D88")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(unref(ElButton), {
                  type: "primary",
                  loading: isTransferInProgress.value,
                  onClick: transferOwnership
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u786E\u8BA4 ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-c7524e81${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ElCheckbox), {
              modelValue: transferType.value,
              "onUpdate:modelValue": ($event) => transferType.value = $event,
              "true-value": "all",
              label: "\u540C\u6B65\u8F6C\u79FB\u6240\u6709\u8005\u7684\u6240\u6709\u6210\u5458\u3002",
              size: "large"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ElCheckbox), {
              modelValue: transferType.value,
              "onUpdate:modelValue": ($event) => transferType.value = $event,
              "true-value": "kb",
              label: "\u4E0D\u540C\u6B65\u8F6C\u79FB\u6240\u6709\u8005\u7684\u6240\u6709\u6210\u5458\uFF0C\u53EA\u8F6C\u79FB\u77E5\u8BC6\u5E93\u3002",
              size: "large"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(unref(ElCheckbox), {
                  modelValue: transferType.value,
                  "onUpdate:modelValue": ($event) => transferType.value = $event,
                  "true-value": "all",
                  label: "\u540C\u6B65\u8F6C\u79FB\u6240\u6709\u8005\u7684\u6240\u6709\u6210\u5458\u3002",
                  size: "large"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(unref(ElCheckbox), {
                  modelValue: transferType.value,
                  "onUpdate:modelValue": ($event) => transferType.value = $event,
                  "true-value": "kb",
                  label: "\u4E0D\u540C\u6B65\u8F6C\u79FB\u6240\u6709\u8005\u7684\u6240\u6709\u6210\u5458\uFF0C\u53EA\u8F6C\u79FB\u77E5\u8BC6\u5E93\u3002",
                  size: "large"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/_components/team-data.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const teamData = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c7524e81"]]);

export { teamData as default };
//# sourceMappingURL=team-data-BjoFhsgf.mjs.map
