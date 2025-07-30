import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { z as useUserStore, a as useRouter, A as feedback, bl as delVideoRecord, ba as putVideoRename, d as ElButton, E as ElInput, B as vLoading, bm as getVideoRecordsList } from './server.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElTable, a as ElTableColumn } from './el-table-column-tZnWqVKO.mjs';
import { _ as __nuxt_component_7, a as _sfc_main$1$1 } from './file-BZUJNFp8.mjs';
import { E as ElProgress } from './el-progress-B1IVess1.mjs';
import { _ as _sfc_main$2 } from './index-D60of7Hb.mjs';
import { defineComponent, reactive, ref, withAsyncContext, watch, mergeProps, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, Fragment, isRef, withDirectives, useSSRContext, nextTick } from 'vue';
import { u as usePaging } from './usePaging-DU8sXki3.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrGetDirectiveProps } from 'vue/server-renderer';
import { useDebounceFn } from '@vueuse/core';
import { a as downloadFile } from './file-RP6bCPT_.mjs';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-53t5ntO1.mjs';
import './index-5Ia44xzE.mjs';
import 'normalize-wheel-es';
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-DVLwoLV9.mjs';
import 'video.js';
import './el-pagination-ClrwtCwT.mjs';
import './index-CUhOTuS-.mjs';
import './index-D7S5lb8a.mjs';
import './strings-D1uxkXhq.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "video_compositing",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const userStore = useUserStore();
    useRouter();
    const previewState = reactive({
      show: false,
      url: ""
    });
    const queryParams = reactive({
      keyword: ""
    });
    const { pager, getLists, resetPage } = usePaging({
      fetchFun: getVideoRecordsList,
      params: queryParams
    });
    const selectData = ref([]);
    const handleSelectionChange = (val) => {
      selectData.value = val.map((item) => item.id);
    };
    const handleDelete = async (ids) => {
      await feedback.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F");
      await delVideoRecord({ ids });
      getLists();
    };
    const handleRename = async (id, name) => {
      const { value } = await feedback.prompt("\u4FEE\u6539\u89C6\u9891\u540D\u79F0", "", {
        inputValue: name
      });
      await putVideoRename({
        name: value,
        id
      });
      getLists();
    };
    const searchDebounce = useDebounceFn(() => {
      resetPage();
    }, 1e3);
    const showFail = (reason) => {
      feedback.confirm(`\u9519\u8BEF\u4FE1\u606F\uFF1A${reason}`, "\u5931\u8D25\u539F\u56E0", {
        showConfirmButton: false,
        type: "error",
        cancelButtonText: "\u5173\u95ED"
      });
    };
    const previewVideo = async (url) => {
      previewState.show = true;
      await nextTick();
      previewState.url = url;
    };
    const download = (url, name) => {
      downloadFile(url, name);
    };
    [__temp, __restore] = withAsyncContext(() => getLists()), await __temp, __restore();
    watch(
      () => pager.extend,
      (value) => {
        if (value.unfinished_num > 0) {
          setTimeout(() => {
            getLists();
          }, 30 * 1e3);
        } else {
          userStore.getUser();
        }
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElScrollbar = ElScrollbar;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ElButton = ElButton;
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      const _component_Icon = _sfc_main$1;
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _component_MaterialFile = __nuxt_component_7;
      const _component_el_progress = ElProgress;
      const _component_pagination = _sfc_main$2;
      const _component_material_preview = _sfc_main$1$1;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ElScrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-main"${_scopeId}><div class="bg-white rounded-lg p-[20px]"${_scopeId}><div class="border-b border-solid border-br-light pb-[10px]"${_scopeId}><span class="text-2xl font-medium"${_scopeId}>\u89C6\u9891\u5408\u6210</span><span class="text-tx-secondary ml-[10px]"${_scopeId}> \u5269\u4F59\u5408\u6210\u65F6\u957F\uFF1A${ssrInterpolate(unref(userStore).userInfo.video_num)}\u5206\u949F </span></div><div class="py-main"${_scopeId}><div class="flex items-center flex-wrap"${_scopeId}><div class="flex-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              custom: "",
              to: `/digital_human/design`
            }, {
              default: withCtx(({ href }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a${ssrRenderAttr("href", href)} class="mr-[10px]" target="_blank"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ElButton, { type: "primary" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u65B0\u5EFA\u89C6\u9891`);
                      } else {
                        return [
                          createTextVNode("\u65B0\u5EFA\u89C6\u9891")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</a>`);
                } else {
                  return [
                    createVNode("a", {
                      href,
                      class: "mr-[10px]",
                      target: "_blank"
                    }, [
                      createVNode(_component_ElButton, { type: "primary" }, {
                        default: withCtx(() => [
                          createTextVNode("\u65B0\u5EFA\u89C6\u9891")
                        ]),
                        _: 1
                      })
                    ], 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElButton, {
              disabled: !unref(selectData).length,
              onClick: ($event) => handleDelete(unref(selectData))
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u6279\u91CF\u5220\u9664`);
                } else {
                  return [
                    createTextVNode("\u6279\u91CF\u5220\u9664")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex-none flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_input, {
              modelValue: unref(queryParams).keyword,
              "onUpdate:modelValue": ($event) => unref(queryParams).keyword = $event,
              placeholder: "\u641C\u7D22",
              onInput: unref(searchDebounce)
            }, {
              prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_button, {
                    loading: unref(pager).loading
                  }, {
                    icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, { name: "el-icon-Search" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, { name: "el-icon-Search" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_button, {
                      loading: unref(pager).loading
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_Icon, { name: "el-icon-Search" })
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElButton, {
              circle: "",
              plain: "",
              class: "ml-[10px]",
              onClick: unref(getLists)
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, { name: "el-icon-Refresh" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, { name: "el-icon-Refresh" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="flex-1 min-h-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_table, mergeProps({
              height: "100%",
              size: "large",
              data: unref(pager).lists,
              onSelectionChange: handleSelectionChange
            }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(pager).loading)), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    type: "selection",
                    width: "55"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    label: "\u6587\u4EF6\u540D\u79F0",
                    "min-width": "200"
                  }, {
                    default: withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center"${_scopeId3}>`);
                        if (row.video_url) {
                          _push4(ssrRenderComponent(_component_MaterialFile, {
                            onClick: ($event) => previewVideo(row.video_url),
                            class: "cursor-pointer",
                            type: "video",
                            "file-size": "70px",
                            uri: row.video_url
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<div class="ml-2"${_scopeId3}>${ssrInterpolate(row.name)}</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center" }, [
                            row.video_url ? (openBlock(), createBlock(_component_MaterialFile, {
                              key: 0,
                              onClick: ($event) => previewVideo(row.video_url),
                              class: "cursor-pointer",
                              type: "video",
                              "file-size": "70px",
                              uri: row.video_url
                            }, null, 8, ["onClick", "uri"])) : createCommentVNode("", true),
                            createVNode("div", { class: "ml-2" }, toDisplayString(row.name), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    label: "\u751F\u6210\u8FDB\u5EA6",
                    "min-width": "200"
                  }, {
                    default: withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (row.status !== 1) {
                          _push4(ssrRenderComponent(_component_el_progress, {
                            percentage: row.synthetic_schedule
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!--[-->-<!--]-->`);
                        }
                      } else {
                        return [
                          row.status !== 1 ? (openBlock(), createBlock(_component_el_progress, {
                            key: 0,
                            percentage: row.synthetic_schedule
                          }, null, 8, ["percentage"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createTextVNode("-")
                          ], 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    label: "\u4EFB\u52A1\u72B6\u6001",
                    "min-width": "120"
                  }, {
                    default: withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (row.status == 1) {
                          _push4(`<span${_scopeId3}>${ssrInterpolate(row.status_desc)}</span>`);
                        } else if (row.status == 2) {
                          _push4(`<span class="text-warning"${_scopeId3}>${ssrInterpolate(row.status_desc)}</span>`);
                        } else if (row.status == 3) {
                          _push4(`<span class="text-success"${_scopeId3}>${ssrInterpolate(row.status_desc)}</span>`);
                        } else {
                          _push4(`<span class="text-error cursor-pointer"${_scopeId3}>${ssrInterpolate(row.status_desc)}</span>`);
                        }
                      } else {
                        return [
                          row.status == 1 ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(row.status_desc), 1)) : row.status == 2 ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-warning"
                          }, toDisplayString(row.status_desc), 1)) : row.status == 3 ? (openBlock(), createBlock("span", {
                            key: 2,
                            class: "text-success"
                          }, toDisplayString(row.status_desc), 1)) : (openBlock(), createBlock("span", {
                            key: 3,
                            class: "text-error cursor-pointer",
                            onClick: ($event) => showFail(row.fail_reason)
                          }, toDisplayString(row.status_desc), 9, ["onClick"]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    label: "\u6D88\u8017\u65F6\u957F",
                    prop: "consume_time",
                    "min-width": "120"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    label: "\u6700\u540E\u66F4\u65B0\u65F6\u95F4",
                    prop: "update_time",
                    "min-width": "180",
                    "show-tooltip-when-overflow": ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_table_column, {
                    label: "\u64CD\u4F5C",
                    width: "180",
                    fixed: "right"
                  }, {
                    default: withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (row.status == 3 && row.video_url) {
                          _push4(ssrRenderComponent(_component_el_button, {
                            type: "primary",
                            link: "",
                            onClick: ($event) => download(row.video_url, row.name)
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u4E0B\u8F7D `);
                              } else {
                                return [
                                  createTextVNode(" \u4E0B\u8F7D ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (row.status == 1 || row.status == 4) {
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            custom: "",
                            to: `/digital_human/design?id=${row.id}`
                          }, {
                            default: withCtx(({ href }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<a${ssrRenderAttr("href", href)} class="mr-[10px]" target="_blank"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_el_button, {
                                  type: "primary",
                                  link: ""
                                }, {
                                  default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` \u7F16\u8F91 `);
                                    } else {
                                      return [
                                        createTextVNode(" \u7F16\u8F91 ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</a>`);
                              } else {
                                return [
                                  createVNode("a", {
                                    href,
                                    class: "mr-[10px]",
                                    target: "_blank"
                                  }, [
                                    createVNode(_component_el_button, {
                                      type: "primary",
                                      link: ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u7F16\u8F91 ")
                                      ]),
                                      _: 1
                                    })
                                  ], 8, ["href"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(_component_el_button, {
                          type: "primary",
                          link: "",
                          onClick: ($event) => handleRename(row.id, row.name)
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u91CD\u547D\u540D `);
                            } else {
                              return [
                                createTextVNode(" \u91CD\u547D\u540D ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        if (row.delete_btn) {
                          _push4(ssrRenderComponent(_component_el_button, {
                            type: "danger",
                            link: "",
                            onClick: ($event) => handleDelete([row.id])
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u5220\u9664 `);
                              } else {
                                return [
                                  createTextVNode(" \u5220\u9664 ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          row.status == 3 && row.video_url ? (openBlock(), createBlock(_component_el_button, {
                            key: 0,
                            type: "primary",
                            link: "",
                            onClick: ($event) => download(row.video_url, row.name)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u4E0B\u8F7D ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : createCommentVNode("", true),
                          row.status == 1 || row.status == 4 ? (openBlock(), createBlock(_component_NuxtLink, {
                            key: 1,
                            custom: "",
                            to: `/digital_human/design?id=${row.id}`
                          }, {
                            default: withCtx(({ href }) => [
                              createVNode("a", {
                                href,
                                class: "mr-[10px]",
                                target: "_blank"
                              }, [
                                createVNode(_component_el_button, {
                                  type: "primary",
                                  link: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u7F16\u8F91 ")
                                  ]),
                                  _: 1
                                })
                              ], 8, ["href"])
                            ]),
                            _: 2
                          }, 1032, ["to"])) : createCommentVNode("", true),
                          createVNode(_component_el_button, {
                            type: "primary",
                            link: "",
                            onClick: ($event) => handleRename(row.id, row.name)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u91CD\u547D\u540D ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          row.delete_btn ? (openBlock(), createBlock(_component_el_button, {
                            key: 2,
                            type: "danger",
                            link: "",
                            onClick: ($event) => handleDelete([row.id])
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u5220\u9664 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_table_column, {
                      type: "selection",
                      width: "55"
                    }),
                    createVNode(_component_el_table_column, {
                      label: "\u6587\u4EF6\u540D\u79F0",
                      "min-width": "200"
                    }, {
                      default: withCtx(({ row }) => [
                        createVNode("div", { class: "flex items-center" }, [
                          row.video_url ? (openBlock(), createBlock(_component_MaterialFile, {
                            key: 0,
                            onClick: ($event) => previewVideo(row.video_url),
                            class: "cursor-pointer",
                            type: "video",
                            "file-size": "70px",
                            uri: row.video_url
                          }, null, 8, ["onClick", "uri"])) : createCommentVNode("", true),
                          createVNode("div", { class: "ml-2" }, toDisplayString(row.name), 1)
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      label: "\u751F\u6210\u8FDB\u5EA6",
                      "min-width": "200"
                    }, {
                      default: withCtx(({ row }) => [
                        row.status !== 1 ? (openBlock(), createBlock(_component_el_progress, {
                          key: 0,
                          percentage: row.synthetic_schedule
                        }, null, 8, ["percentage"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createTextVNode("-")
                        ], 64))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      label: "\u4EFB\u52A1\u72B6\u6001",
                      "min-width": "120"
                    }, {
                      default: withCtx(({ row }) => [
                        row.status == 1 ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(row.status_desc), 1)) : row.status == 2 ? (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-warning"
                        }, toDisplayString(row.status_desc), 1)) : row.status == 3 ? (openBlock(), createBlock("span", {
                          key: 2,
                          class: "text-success"
                        }, toDisplayString(row.status_desc), 1)) : (openBlock(), createBlock("span", {
                          key: 3,
                          class: "text-error cursor-pointer",
                          onClick: ($event) => showFail(row.fail_reason)
                        }, toDisplayString(row.status_desc), 9, ["onClick"]))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      label: "\u6D88\u8017\u65F6\u957F",
                      prop: "consume_time",
                      "min-width": "120"
                    }),
                    createVNode(_component_el_table_column, {
                      label: "\u6700\u540E\u66F4\u65B0\u65F6\u95F4",
                      prop: "update_time",
                      "min-width": "180",
                      "show-tooltip-when-overflow": ""
                    }),
                    createVNode(_component_el_table_column, {
                      label: "\u64CD\u4F5C",
                      width: "180",
                      fixed: "right"
                    }, {
                      default: withCtx(({ row }) => [
                        row.status == 3 && row.video_url ? (openBlock(), createBlock(_component_el_button, {
                          key: 0,
                          type: "primary",
                          link: "",
                          onClick: ($event) => download(row.video_url, row.name)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u4E0B\u8F7D ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : createCommentVNode("", true),
                        row.status == 1 || row.status == 4 ? (openBlock(), createBlock(_component_NuxtLink, {
                          key: 1,
                          custom: "",
                          to: `/digital_human/design?id=${row.id}`
                        }, {
                          default: withCtx(({ href }) => [
                            createVNode("a", {
                              href,
                              class: "mr-[10px]",
                              target: "_blank"
                            }, [
                              createVNode(_component_el_button, {
                                type: "primary",
                                link: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u7F16\u8F91 ")
                                ]),
                                _: 1
                              })
                            ], 8, ["href"])
                          ]),
                          _: 2
                        }, 1032, ["to"])) : createCommentVNode("", true),
                        createVNode(_component_el_button, {
                          type: "primary",
                          link: "",
                          onClick: ($event) => handleRename(row.id, row.name)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u91CD\u547D\u540D ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        row.delete_btn ? (openBlock(), createBlock(_component_el_button, {
                          key: 2,
                          type: "danger",
                          link: "",
                          onClick: ($event) => handleDelete([row.id])
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u5220\u9664 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_pagination, {
              modelValue: unref(pager),
              "onUpdate:modelValue": ($event) => isRef(pager) ? pager.value = $event : null,
              onChange: unref(getLists)
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-main" }, [
                createVNode("div", { class: "bg-white rounded-lg p-[20px]" }, [
                  createVNode("div", { class: "border-b border-solid border-br-light pb-[10px]" }, [
                    createVNode("span", { class: "text-2xl font-medium" }, "\u89C6\u9891\u5408\u6210"),
                    createVNode("span", { class: "text-tx-secondary ml-[10px]" }, " \u5269\u4F59\u5408\u6210\u65F6\u957F\uFF1A" + toDisplayString(unref(userStore).userInfo.video_num) + "\u5206\u949F ", 1)
                  ]),
                  createVNode("div", { class: "py-main" }, [
                    createVNode("div", { class: "flex items-center flex-wrap" }, [
                      createVNode("div", { class: "flex-1" }, [
                        createVNode(_component_NuxtLink, {
                          custom: "",
                          to: `/digital_human/design`
                        }, {
                          default: withCtx(({ href }) => [
                            createVNode("a", {
                              href,
                              class: "mr-[10px]",
                              target: "_blank"
                            }, [
                              createVNode(_component_ElButton, { type: "primary" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u65B0\u5EFA\u89C6\u9891")
                                ]),
                                _: 1
                              })
                            ], 8, ["href"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ElButton, {
                          disabled: !unref(selectData).length,
                          onClick: ($event) => handleDelete(unref(selectData))
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u6279\u91CF\u5220\u9664")
                          ]),
                          _: 1
                        }, 8, ["disabled", "onClick"])
                      ]),
                      createVNode("div", { class: "flex-none flex" }, [
                        createVNode(_component_el_input, {
                          modelValue: unref(queryParams).keyword,
                          "onUpdate:modelValue": ($event) => unref(queryParams).keyword = $event,
                          placeholder: "\u641C\u7D22",
                          onInput: unref(searchDebounce)
                        }, {
                          prepend: withCtx(() => [
                            createVNode(_component_el_button, {
                              loading: unref(pager).loading
                            }, {
                              icon: withCtx(() => [
                                createVNode(_component_Icon, { name: "el-icon-Search" })
                              ]),
                              _: 1
                            }, 8, ["loading"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "onInput"]),
                        createVNode(_component_ElButton, {
                          circle: "",
                          plain: "",
                          class: "ml-[10px]",
                          onClick: unref(getLists)
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_Icon, { name: "el-icon-Refresh" })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex-1 min-h-0" }, [
                    withDirectives((openBlock(), createBlock(_component_el_table, {
                      height: "100%",
                      size: "large",
                      data: unref(pager).lists,
                      onSelectionChange: handleSelectionChange
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_table_column, {
                          type: "selection",
                          width: "55"
                        }),
                        createVNode(_component_el_table_column, {
                          label: "\u6587\u4EF6\u540D\u79F0",
                          "min-width": "200"
                        }, {
                          default: withCtx(({ row }) => [
                            createVNode("div", { class: "flex items-center" }, [
                              row.video_url ? (openBlock(), createBlock(_component_MaterialFile, {
                                key: 0,
                                onClick: ($event) => previewVideo(row.video_url),
                                class: "cursor-pointer",
                                type: "video",
                                "file-size": "70px",
                                uri: row.video_url
                              }, null, 8, ["onClick", "uri"])) : createCommentVNode("", true),
                              createVNode("div", { class: "ml-2" }, toDisplayString(row.name), 1)
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_table_column, {
                          label: "\u751F\u6210\u8FDB\u5EA6",
                          "min-width": "200"
                        }, {
                          default: withCtx(({ row }) => [
                            row.status !== 1 ? (openBlock(), createBlock(_component_el_progress, {
                              key: 0,
                              percentage: row.synthetic_schedule
                            }, null, 8, ["percentage"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createTextVNode("-")
                            ], 64))
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_table_column, {
                          label: "\u4EFB\u52A1\u72B6\u6001",
                          "min-width": "120"
                        }, {
                          default: withCtx(({ row }) => [
                            row.status == 1 ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(row.status_desc), 1)) : row.status == 2 ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-warning"
                            }, toDisplayString(row.status_desc), 1)) : row.status == 3 ? (openBlock(), createBlock("span", {
                              key: 2,
                              class: "text-success"
                            }, toDisplayString(row.status_desc), 1)) : (openBlock(), createBlock("span", {
                              key: 3,
                              class: "text-error cursor-pointer",
                              onClick: ($event) => showFail(row.fail_reason)
                            }, toDisplayString(row.status_desc), 9, ["onClick"]))
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_table_column, {
                          label: "\u6D88\u8017\u65F6\u957F",
                          prop: "consume_time",
                          "min-width": "120"
                        }),
                        createVNode(_component_el_table_column, {
                          label: "\u6700\u540E\u66F4\u65B0\u65F6\u95F4",
                          prop: "update_time",
                          "min-width": "180",
                          "show-tooltip-when-overflow": ""
                        }),
                        createVNode(_component_el_table_column, {
                          label: "\u64CD\u4F5C",
                          width: "180",
                          fixed: "right"
                        }, {
                          default: withCtx(({ row }) => [
                            row.status == 3 && row.video_url ? (openBlock(), createBlock(_component_el_button, {
                              key: 0,
                              type: "primary",
                              link: "",
                              onClick: ($event) => download(row.video_url, row.name)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u4E0B\u8F7D ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : createCommentVNode("", true),
                            row.status == 1 || row.status == 4 ? (openBlock(), createBlock(_component_NuxtLink, {
                              key: 1,
                              custom: "",
                              to: `/digital_human/design?id=${row.id}`
                            }, {
                              default: withCtx(({ href }) => [
                                createVNode("a", {
                                  href,
                                  class: "mr-[10px]",
                                  target: "_blank"
                                }, [
                                  createVNode(_component_el_button, {
                                    type: "primary",
                                    link: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u7F16\u8F91 ")
                                    ]),
                                    _: 1
                                  })
                                ], 8, ["href"])
                              ]),
                              _: 2
                            }, 1032, ["to"])) : createCommentVNode("", true),
                            createVNode(_component_el_button, {
                              type: "primary",
                              link: "",
                              onClick: ($event) => handleRename(row.id, row.name)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u91CD\u547D\u540D ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            row.delete_btn ? (openBlock(), createBlock(_component_el_button, {
                              key: 2,
                              type: "danger",
                              link: "",
                              onClick: ($event) => handleDelete([row.id])
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u5220\u9664 ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["data"])), [
                      [_directive_loading, unref(pager).loading]
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-end mt-4" }, [
                    createVNode(_component_pagination, {
                      modelValue: unref(pager),
                      "onUpdate:modelValue": ($event) => isRef(pager) ? pager.value = $event : null,
                      onChange: unref(getLists)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_material_preview, {
        modelValue: unref(previewState).show,
        "onUpdate:modelValue": ($event) => unref(previewState).show = $event,
        url: unref(previewState).url,
        type: "video"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/aside/video_compositing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=video_compositing-Empy4Fed.mjs.map
