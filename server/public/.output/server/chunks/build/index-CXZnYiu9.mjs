import { E as ElSelect, a as ElOption } from './index-CUhOTuS-.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { E as ElCollapse, a as ElCollapseItem } from './el-collapse-item-DSo9CmH5.mjs';
import { a5 as useAppStore, a$ as getAiModels } from './server.mjs';
import { useSSRContext, defineComponent, shallowRef, ref, reactive, computed, watch, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { useQuery } from '@tanstack/vue-query';
import { useVModel } from '@vueuse/core';
import { P as Popup } from './index-BKj4TrcW.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    id: {
      type: [String, Number],
      default: ""
    },
    sub_id: {
      type: [String, Number],
      default: ""
    },
    setDefault: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "chatModels"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:id", "update:sub_id", "update:modelConfig"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const model = useVModel(props, "id", emit);
    const subModel = useVModel(props, "sub_id", emit);
    const appStore = useAppStore();
    const popupRef = shallowRef();
    const activeName = ref(-1);
    const chatModel = reactive({
      modelList: []
    });
    const evenArray = computed(
      () => chatModel.modelList.filter((_, index) => index % 2 === 0)
    );
    const oddArray = computed(
      () => chatModel.modelList.filter((_, index) => index % 2 !== 0)
    );
    const currentModel = computed(() => {
      if (props.type == "chatModels") {
        return chatModel.modelList.flatMap((item) => item.models).find((item) => item.id === subModel.value) || {};
      } else {
        return chatModel.modelList.find((item) => item.id === model.value) || {};
      }
    });
    watch(
      () => currentModel.value,
      (value) => {
        emit("update:modelConfig", value);
      }
    );
    const { suspense } = useQuery(["modelLists"], {
      queryFn: getAiModels,
      cacheTime: 1e3
    });
    const getChatModelFunc = async () => {
      try {
        const { data } = await suspense();
        chatModel.modelList = data[props.type];
        if (props.setDefault) {
          setDefaultModel();
        }
      } catch (error) {
        console.log("\u83B7\u53D6\u804A\u5929\u6A21\u578B\u6570\u636E\u9519\u8BEF=>", error);
      }
    };
    const setDefaultModel = () => {
      const defaultGroupIndex = chatModel.modelList.findIndex((item) => item.is_default) || 0;
      const defaultModel = chatModel.modelList[defaultGroupIndex].models[0];
      if (defaultModel) {
        model.value = chatModel.modelList[defaultGroupIndex].id;
        subModel.value = defaultModel.id;
        activeName.value = defaultGroupIndex;
      }
    };
    const findItemIndex = (fIndex, index) => fIndex === 0 ? index * 2 : index * 2 + 1;
    const isActiveItem = (fIndex, index) => chatModel.modelList[findItemIndex(fIndex, index)].models.some(
      (item) => item.id === subModel.value
    );
    const setModelAndClose = (id, sub_id) => {
      model.value = id;
      subModel.value = sub_id;
      popupRef.value.close();
    };
    getChatModelFunc();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_Icon = _sfc_main$1;
      const _component_el_scrollbar = ElScrollbar;
      const _component_el_collapse = ElCollapse;
      const _component_el_collapse_item = ElCollapseItem;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))} data-v-648801bb>`);
      if (__props.type === "vectorModels") {
        _push(ssrRenderComponent(_component_el_select, {
          class: "flex-1",
          modelValue: unref(model),
          "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
          filterable: "",
          disabled: __props.disabled
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(chatModel).modelList, (item) => {
                _push2(ssrRenderComponent(_component_el_option, {
                  class: "!h-fit",
                  value: item.id,
                  key: item.name,
                  label: item.alias
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="my-1" data-v-648801bb${_scopeId2}><div class="leading-6" data-v-648801bb${_scopeId2}>${ssrInterpolate(item.alias)}</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "my-1" }, [
                          createVNode("div", { class: "leading-6" }, toDisplayString(item.alias), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(chatModel).modelList, (item) => {
                  return openBlock(), createBlock(_component_el_option, {
                    class: "!h-fit",
                    value: item.id,
                    key: item.name,
                    label: item.alias
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "my-1" }, [
                        createVNode("div", { class: "leading-6" }, toDisplayString(item.alias), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["value", "label"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.type === "chatModels") {
        _push(`<div class="${ssrRenderClass([[
          unref(subModel) ? "" : "text-tx-placeholder",
          __props.disabled ? "text-tx-placeholder cursor-no-drop bg-[--el-disabled-bg-color]" : ""
        ], "select-input flex items-center justify-between flex-1 cursor-pointer rounded-[8px] w-[266px] h-[32px] px-[15px]"])}" data-v-648801bb><div class="line-clamp-1 flex-1" data-v-648801bb>`);
        if (unref(currentModel).alias) {
          _push(`<span data-v-648801bb>${ssrInterpolate(unref(currentModel).alias)}</span>`);
        } else {
          _push(`<span class="text-[#a8abb2]" data-v-648801bb>\u8BF7\u9009\u62E9</span>`);
        }
        if (unref(currentModel).alias && unref(currentModel).price == "0") {
          _push(`<span data-v-648801bb> (\u514D\u8D39) </span>`);
        } else if (unref(currentModel).alias) {
          _push(`<span data-v-648801bb> (${ssrInterpolate(`\u6D88\u8017${unref(currentModel).price}${unref(appStore).getTokenUnit}/1000\u5B57\u7B26`)}) </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex-none ml-2 flex items-center" data-v-648801bb>`);
        _push(ssrRenderComponent(_component_Icon, { name: "el-icon-ArrowDown" }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.type === "chatModels") {
        _push(ssrRenderComponent(Popup, {
          ref_key: "popupRef",
          ref: popupRef,
          width: "780px",
          title: "\u6A21\u578B\u9009\u62E9",
          customClass: "!rounded-[15px]"
        }, {
          footer: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div data-v-648801bb${_scopeId}></div>`);
            } else {
              return [
                createVNode("div")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_scrollbar, {
                height: "50vh",
                "max-height": "70vh"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="model-container" data-v-648801bb${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_el_collapse, {
                      "active-name": unref(activeName),
                      "onUpdate:activeName": ($event) => isRef(activeName) ? activeName.value = $event : null,
                      class: "flex flex-wrap justify-between",
                      accordion: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList([unref(evenArray), unref(oddArray)], (items, fIndex) => {
                            _push4(`<div data-v-648801bb${_scopeId3}><!--[-->`);
                            ssrRenderList(items, (item, index) => {
                              _push4(`<div class="w-[350px] mt-[15px]" data-v-648801bb${_scopeId3}>`);
                              _push4(ssrRenderComponent(_component_el_collapse_item, {
                                class: ["bg-[#f8f8f8] dark:bg-[#0d0e10] border border-solid border-[transparent]", {
                                  "el-collapse-item--active": isActiveItem(fIndex, index)
                                }],
                                name: findItemIndex(fIndex, index)
                              }, {
                                title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div data-v-648801bb${_scopeId4}><div class="flex items-center h-[46px] py-2" data-v-648801bb${_scopeId4}>`);
                                    if (item.logo) {
                                      _push5(`<img${ssrRenderAttr("src", item.logo)} class="w-[30px] h-[30px]" alt="\u6A21\u578Blogo" data-v-648801bb${_scopeId4}>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                    _push5(`<span class="mx-2 leading-[24px] mt-[2px] font-medium" data-v-648801bb${_scopeId4}>${ssrInterpolate(item.name)}</span>`);
                                    if (item.is_free) {
                                      _push5(`<span class="bg-[#E3FFF2] text-[#23B571] px-[5px] py-[2px] leading-[20px] rounded-[5px]" data-v-648801bb${_scopeId4}> \u4F1A\u5458\u514D\u8D39 </span>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                    _push5(`</div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", null, [
                                        createVNode("div", { class: "flex items-center h-[46px] py-2" }, [
                                          item.logo ? (openBlock(), createBlock("img", {
                                            key: 0,
                                            src: item.logo,
                                            class: "w-[30px] h-[30px]",
                                            alt: "\u6A21\u578Blogo"
                                          }, null, 8, ["src"])) : createCommentVNode("", true),
                                          createVNode("span", { class: "mx-2 leading-[24px] mt-[2px] font-medium" }, toDisplayString(item.name), 1),
                                          item.is_free ? (openBlock(), createBlock("span", {
                                            key: 1,
                                            class: "bg-[#E3FFF2] text-[#23B571] px-[5px] py-[2px] leading-[20px] rounded-[5px]"
                                          }, " \u4F1A\u5458\u514D\u8D39 ")) : createCommentVNode("", true)
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(_component_el_scrollbar, {
                                      height: "100%",
                                      "max-height": "250px"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<!--[-->`);
                                          ssrRenderList(item.models, (cItem) => {
                                            _push6(`<div class="${ssrRenderClass([{
                                              "text-primary": unref(subModel) === cItem.id
                                            }, "flex justify-between mb-[14px] px-[15px] cursor-pointer hover:text-primary"])}" data-v-648801bb${_scopeId5}><div class="flex items-center" data-v-648801bb${_scopeId5}><span class="mr-2" data-v-648801bb${_scopeId5}>${ssrInterpolate(cItem.alias || "\u8BF7\u9009\u62E9")}</span>`);
                                            if (cItem.alias && cItem.price == "0") {
                                              _push6(`<span class="text-tx-placeholder" data-v-648801bb${_scopeId5}> (\u514D\u8D39) </span>`);
                                            } else {
                                              _push6(`<span class="text-tx-placeholder" data-v-648801bb${_scopeId5}> (${ssrInterpolate(`\u6D88\u8017${cItem.price}${unref(appStore).getTokenUnit}/1\u5343\u5B57\u7B26`)}) </span>`);
                                            }
                                            _push6(`</div>`);
                                            if (unref(subModel) === cItem.id) {
                                              _push6(`<div class="flex items-center" data-v-648801bb${_scopeId5}>`);
                                              _push6(ssrRenderComponent(_component_Icon, {
                                                name: "el-icon-CircleCheck",
                                                size: "20"
                                              }, null, _parent6, _scopeId5));
                                              _push6(`</div>`);
                                            } else {
                                              _push6(`<div class="flex items-center" data-v-648801bb${_scopeId5}><div class="w-[18px] h-[18px] rounded-full border border-solid border-[#cacbd3]" data-v-648801bb${_scopeId5}></div></div>`);
                                            }
                                            _push6(`</div>`);
                                          });
                                          _push6(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.models, (cItem) => {
                                              return openBlock(), createBlock("div", {
                                                key: cItem.id,
                                                class: ["flex justify-between mb-[14px] px-[15px] cursor-pointer hover:text-primary", {
                                                  "text-primary": unref(subModel) === cItem.id
                                                }],
                                                onClick: ($event) => setModelAndClose(
                                                  item.id,
                                                  cItem.id
                                                )
                                              }, [
                                                createVNode("div", { class: "flex items-center" }, [
                                                  createVNode("span", { class: "mr-2" }, toDisplayString(cItem.alias || "\u8BF7\u9009\u62E9"), 1),
                                                  cItem.alias && cItem.price == "0" ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: "text-tx-placeholder"
                                                  }, " (\u514D\u8D39) ")) : (openBlock(), createBlock("span", {
                                                    key: 1,
                                                    class: "text-tx-placeholder"
                                                  }, " (" + toDisplayString(`\u6D88\u8017${cItem.price}${unref(appStore).getTokenUnit}/1\u5343\u5B57\u7B26`) + ") ", 1))
                                                ]),
                                                unref(subModel) === cItem.id ? (openBlock(), createBlock("div", {
                                                  key: 0,
                                                  class: "flex items-center"
                                                }, [
                                                  createVNode(_component_Icon, {
                                                    name: "el-icon-CircleCheck",
                                                    size: "20"
                                                  })
                                                ])) : (openBlock(), createBlock("div", {
                                                  key: 1,
                                                  class: "flex items-center"
                                                }, [
                                                  createVNode("div", { class: "w-[18px] h-[18px] rounded-full border border-solid border-[#cacbd3]" })
                                                ]))
                                              ], 10, ["onClick"]);
                                            }), 128))
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(_component_el_scrollbar, {
                                        height: "100%",
                                        "max-height": "250px"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.models, (cItem) => {
                                            return openBlock(), createBlock("div", {
                                              key: cItem.id,
                                              class: ["flex justify-between mb-[14px] px-[15px] cursor-pointer hover:text-primary", {
                                                "text-primary": unref(subModel) === cItem.id
                                              }],
                                              onClick: ($event) => setModelAndClose(
                                                item.id,
                                                cItem.id
                                              )
                                            }, [
                                              createVNode("div", { class: "flex items-center" }, [
                                                createVNode("span", { class: "mr-2" }, toDisplayString(cItem.alias || "\u8BF7\u9009\u62E9"), 1),
                                                cItem.alias && cItem.price == "0" ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: "text-tx-placeholder"
                                                }, " (\u514D\u8D39) ")) : (openBlock(), createBlock("span", {
                                                  key: 1,
                                                  class: "text-tx-placeholder"
                                                }, " (" + toDisplayString(`\u6D88\u8017${cItem.price}${unref(appStore).getTokenUnit}/1\u5343\u5B57\u7B26`) + ") ", 1))
                                              ]),
                                              unref(subModel) === cItem.id ? (openBlock(), createBlock("div", {
                                                key: 0,
                                                class: "flex items-center"
                                              }, [
                                                createVNode(_component_Icon, {
                                                  name: "el-icon-CircleCheck",
                                                  size: "20"
                                                })
                                              ])) : (openBlock(), createBlock("div", {
                                                key: 1,
                                                class: "flex items-center"
                                              }, [
                                                createVNode("div", { class: "w-[18px] h-[18px] rounded-full border border-solid border-[#cacbd3]" })
                                              ]))
                                            ], 10, ["onClick"]);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`</div>`);
                            });
                            _push4(`<!--]--></div>`);
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList([unref(evenArray), unref(oddArray)], (items, fIndex) => {
                              return openBlock(), createBlock("div", { key: fIndex }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                                  return openBlock(), createBlock("div", {
                                    key: item.id,
                                    class: "w-[350px] mt-[15px]"
                                  }, [
                                    createVNode(_component_el_collapse_item, {
                                      class: ["bg-[#f8f8f8] dark:bg-[#0d0e10] border border-solid border-[transparent]", {
                                        "el-collapse-item--active": isActiveItem(fIndex, index)
                                      }],
                                      name: findItemIndex(fIndex, index)
                                    }, {
                                      title: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("div", { class: "flex items-center h-[46px] py-2" }, [
                                            item.logo ? (openBlock(), createBlock("img", {
                                              key: 0,
                                              src: item.logo,
                                              class: "w-[30px] h-[30px]",
                                              alt: "\u6A21\u578Blogo"
                                            }, null, 8, ["src"])) : createCommentVNode("", true),
                                            createVNode("span", { class: "mx-2 leading-[24px] mt-[2px] font-medium" }, toDisplayString(item.name), 1),
                                            item.is_free ? (openBlock(), createBlock("span", {
                                              key: 1,
                                              class: "bg-[#E3FFF2] text-[#23B571] px-[5px] py-[2px] leading-[20px] rounded-[5px]"
                                            }, " \u4F1A\u5458\u514D\u8D39 ")) : createCommentVNode("", true)
                                          ])
                                        ])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_el_scrollbar, {
                                          height: "100%",
                                          "max-height": "250px"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.models, (cItem) => {
                                              return openBlock(), createBlock("div", {
                                                key: cItem.id,
                                                class: ["flex justify-between mb-[14px] px-[15px] cursor-pointer hover:text-primary", {
                                                  "text-primary": unref(subModel) === cItem.id
                                                }],
                                                onClick: ($event) => setModelAndClose(
                                                  item.id,
                                                  cItem.id
                                                )
                                              }, [
                                                createVNode("div", { class: "flex items-center" }, [
                                                  createVNode("span", { class: "mr-2" }, toDisplayString(cItem.alias || "\u8BF7\u9009\u62E9"), 1),
                                                  cItem.alias && cItem.price == "0" ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: "text-tx-placeholder"
                                                  }, " (\u514D\u8D39) ")) : (openBlock(), createBlock("span", {
                                                    key: 1,
                                                    class: "text-tx-placeholder"
                                                  }, " (" + toDisplayString(`\u6D88\u8017${cItem.price}${unref(appStore).getTokenUnit}/1\u5343\u5B57\u7B26`) + ") ", 1))
                                                ]),
                                                unref(subModel) === cItem.id ? (openBlock(), createBlock("div", {
                                                  key: 0,
                                                  class: "flex items-center"
                                                }, [
                                                  createVNode(_component_Icon, {
                                                    name: "el-icon-CircleCheck",
                                                    size: "20"
                                                  })
                                                ])) : (openBlock(), createBlock("div", {
                                                  key: 1,
                                                  class: "flex items-center"
                                                }, [
                                                  createVNode("div", { class: "w-[18px] h-[18px] rounded-full border border-solid border-[#cacbd3]" })
                                                ]))
                                              ], 10, ["onClick"]);
                                            }), 128))
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["class", "name"])
                                  ]);
                                }), 128))
                              ]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "model-container" }, [
                        createVNode(_component_el_collapse, {
                          "active-name": unref(activeName),
                          "onUpdate:activeName": ($event) => isRef(activeName) ? activeName.value = $event : null,
                          class: "flex flex-wrap justify-between",
                          accordion: ""
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList([unref(evenArray), unref(oddArray)], (items, fIndex) => {
                              return openBlock(), createBlock("div", { key: fIndex }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                                  return openBlock(), createBlock("div", {
                                    key: item.id,
                                    class: "w-[350px] mt-[15px]"
                                  }, [
                                    createVNode(_component_el_collapse_item, {
                                      class: ["bg-[#f8f8f8] dark:bg-[#0d0e10] border border-solid border-[transparent]", {
                                        "el-collapse-item--active": isActiveItem(fIndex, index)
                                      }],
                                      name: findItemIndex(fIndex, index)
                                    }, {
                                      title: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("div", { class: "flex items-center h-[46px] py-2" }, [
                                            item.logo ? (openBlock(), createBlock("img", {
                                              key: 0,
                                              src: item.logo,
                                              class: "w-[30px] h-[30px]",
                                              alt: "\u6A21\u578Blogo"
                                            }, null, 8, ["src"])) : createCommentVNode("", true),
                                            createVNode("span", { class: "mx-2 leading-[24px] mt-[2px] font-medium" }, toDisplayString(item.name), 1),
                                            item.is_free ? (openBlock(), createBlock("span", {
                                              key: 1,
                                              class: "bg-[#E3FFF2] text-[#23B571] px-[5px] py-[2px] leading-[20px] rounded-[5px]"
                                            }, " \u4F1A\u5458\u514D\u8D39 ")) : createCommentVNode("", true)
                                          ])
                                        ])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_el_scrollbar, {
                                          height: "100%",
                                          "max-height": "250px"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.models, (cItem) => {
                                              return openBlock(), createBlock("div", {
                                                key: cItem.id,
                                                class: ["flex justify-between mb-[14px] px-[15px] cursor-pointer hover:text-primary", {
                                                  "text-primary": unref(subModel) === cItem.id
                                                }],
                                                onClick: ($event) => setModelAndClose(
                                                  item.id,
                                                  cItem.id
                                                )
                                              }, [
                                                createVNode("div", { class: "flex items-center" }, [
                                                  createVNode("span", { class: "mr-2" }, toDisplayString(cItem.alias || "\u8BF7\u9009\u62E9"), 1),
                                                  cItem.alias && cItem.price == "0" ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: "text-tx-placeholder"
                                                  }, " (\u514D\u8D39) ")) : (openBlock(), createBlock("span", {
                                                    key: 1,
                                                    class: "text-tx-placeholder"
                                                  }, " (" + toDisplayString(`\u6D88\u8017${cItem.price}${unref(appStore).getTokenUnit}/1\u5343\u5B57\u7B26`) + ") ", 1))
                                                ]),
                                                unref(subModel) === cItem.id ? (openBlock(), createBlock("div", {
                                                  key: 0,
                                                  class: "flex items-center"
                                                }, [
                                                  createVNode(_component_Icon, {
                                                    name: "el-icon-CircleCheck",
                                                    size: "20"
                                                  })
                                                ])) : (openBlock(), createBlock("div", {
                                                  key: 1,
                                                  class: "flex items-center"
                                                }, [
                                                  createVNode("div", { class: "w-[18px] h-[18px] rounded-full border border-solid border-[#cacbd3]" })
                                                ]))
                                              ], 10, ["onClick"]);
                                            }), 128))
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["class", "name"])
                                  ]);
                                }), 128))
                              ]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["active-name", "onUpdate:activeName"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_el_scrollbar, {
                  height: "50vh",
                  "max-height": "70vh"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "model-container" }, [
                      createVNode(_component_el_collapse, {
                        "active-name": unref(activeName),
                        "onUpdate:activeName": ($event) => isRef(activeName) ? activeName.value = $event : null,
                        class: "flex flex-wrap justify-between",
                        accordion: ""
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList([unref(evenArray), unref(oddArray)], (items, fIndex) => {
                            return openBlock(), createBlock("div", { key: fIndex }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                                return openBlock(), createBlock("div", {
                                  key: item.id,
                                  class: "w-[350px] mt-[15px]"
                                }, [
                                  createVNode(_component_el_collapse_item, {
                                    class: ["bg-[#f8f8f8] dark:bg-[#0d0e10] border border-solid border-[transparent]", {
                                      "el-collapse-item--active": isActiveItem(fIndex, index)
                                    }],
                                    name: findItemIndex(fIndex, index)
                                  }, {
                                    title: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode("div", { class: "flex items-center h-[46px] py-2" }, [
                                          item.logo ? (openBlock(), createBlock("img", {
                                            key: 0,
                                            src: item.logo,
                                            class: "w-[30px] h-[30px]",
                                            alt: "\u6A21\u578Blogo"
                                          }, null, 8, ["src"])) : createCommentVNode("", true),
                                          createVNode("span", { class: "mx-2 leading-[24px] mt-[2px] font-medium" }, toDisplayString(item.name), 1),
                                          item.is_free ? (openBlock(), createBlock("span", {
                                            key: 1,
                                            class: "bg-[#E3FFF2] text-[#23B571] px-[5px] py-[2px] leading-[20px] rounded-[5px]"
                                          }, " \u4F1A\u5458\u514D\u8D39 ")) : createCommentVNode("", true)
                                        ])
                                      ])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_el_scrollbar, {
                                        height: "100%",
                                        "max-height": "250px"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.models, (cItem) => {
                                            return openBlock(), createBlock("div", {
                                              key: cItem.id,
                                              class: ["flex justify-between mb-[14px] px-[15px] cursor-pointer hover:text-primary", {
                                                "text-primary": unref(subModel) === cItem.id
                                              }],
                                              onClick: ($event) => setModelAndClose(
                                                item.id,
                                                cItem.id
                                              )
                                            }, [
                                              createVNode("div", { class: "flex items-center" }, [
                                                createVNode("span", { class: "mr-2" }, toDisplayString(cItem.alias || "\u8BF7\u9009\u62E9"), 1),
                                                cItem.alias && cItem.price == "0" ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: "text-tx-placeholder"
                                                }, " (\u514D\u8D39) ")) : (openBlock(), createBlock("span", {
                                                  key: 1,
                                                  class: "text-tx-placeholder"
                                                }, " (" + toDisplayString(`\u6D88\u8017${cItem.price}${unref(appStore).getTokenUnit}/1\u5343\u5B57\u7B26`) + ") ", 1))
                                              ]),
                                              unref(subModel) === cItem.id ? (openBlock(), createBlock("div", {
                                                key: 0,
                                                class: "flex items-center"
                                              }, [
                                                createVNode(_component_Icon, {
                                                  name: "el-icon-CircleCheck",
                                                  size: "20"
                                                })
                                              ])) : (openBlock(), createBlock("div", {
                                                key: 1,
                                                class: "flex items-center"
                                              }, [
                                                createVNode("div", { class: "w-[18px] h-[18px] rounded-full border border-solid border-[#cacbd3]" })
                                              ]))
                                            ], 10, ["onClick"]);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "name"])
                                ]);
                              }), 128))
                            ]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["active-name", "onUpdate:activeName"])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/model-picker/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-648801bb"]]);

export { __nuxt_component_7 as _ };
//# sourceMappingURL=index-CXZnYiu9.mjs.map
