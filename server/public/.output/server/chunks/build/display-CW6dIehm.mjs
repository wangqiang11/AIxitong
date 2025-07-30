import { _ as _sfc_main$3 } from './index-BoqjHllR.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { E as ElTooltip } from './index-L-VTEUEA.mjs';
import { z as useUserStore, a5 as useAppStore, d as ElButton, A as feedback, bp as ShareSquareEnum } from './server.mjs';
import { useSSRContext, defineComponent, shallowRef, ref, reactive, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, withModifiers, toDisplayString, createCommentVNode, nextTick } from 'vue';
import { b as download } from './download-N0luyf1S.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { d as deleteMusic } from './music-A1_NVo6h.mjs';
import { u as useMusicPlay } from './player-DDfYp134.mjs';
import { E as ElSelect, a as ElOption } from './index-CUhOTuS-.mjs';
import { c as shareMusic, b as getSquareCategory } from './task_reward-DRop0WtE.mjs';
import { P as Popup } from './index-BKj4TrcW.mjs';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "music-share",
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
          type: ShareSquareEnum.MUSIC,
          share: 1
        });
        list.unshift({ name: "\u5168\u90E8", id: "" });
        cateLists.value = list;
      } catch (error) {
        console.log("\u83B7\u53D6\u97F3\u4E50\u5206\u7C7B\u5931\u8D25=>", error);
      }
    };
    const { lockFn: handleSubmit, isLock } = useLockFn(async () => {
      var _a;
      await shareMusic(formData);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "share-popup" }, _attrs))} data-v-0138da76>`);
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
            _push2(`<div class="dialog-footer flex justify-center pb-2" data-v-0138da76${_scopeId}>`);
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
            _push2(`<div class="h-[100px]" data-v-0138da76${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_select, {
              size: "large",
              class: "w-[360px]",
              placeholder: "\u5168\u90E8",
              modelValue: unref(formData).category_id,
              "onUpdate:modelValue": ($event) => unref(formData).category_id = $event,
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
                  placeholder: "\u5168\u90E8",
                  modelValue: unref(formData).category_id,
                  "onUpdate:modelValue": ($event) => unref(formData).category_id = $event,
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/music/music-share.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const MusicShare = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0138da76"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "list",
  __ssrInlineRender: true,
  props: {
    musicList: { default: () => [] }
  },
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const appStore = useAppStore();
    const emit = __emit;
    const showShare = ref(false);
    const shareRef = shallowRef(null);
    const sharedIds = ref([]);
    const { playing, currentId, setCurrentId, togglePlay, currentMusic, getMusic } = useMusicPlay();
    const downloadMusic = async (url, name) => {
      try {
        const res = await $request.get(
          { url, responseType: "blob", baseURL: "" },
          { isReturnDefaultResponse: true, apiPrefix: "" }
        );
        console.log(res);
        const blob = new Blob([res._data], {
          type: res.headers.get("Content-Type")
        });
        const link = (void 0).URL.createObjectURL(blob);
        download(link, name);
      } catch (error) {
        feedback.msgError("\u6587\u4EF6\u4E0B\u8F7D\u5931\u8D25");
      }
    };
    const shareMusic2 = async (records_id, is_share) => {
      try {
        if (sharedIds.value.includes(records_id) || is_share) {
          feedback.msgError("\u8BE5\u97F3\u4E50\u5DF2\u7ECF\u5206\u4EAB\u8FC7\u4E86\uFF01");
          return;
        }
        showShare.value = true;
        await nextTick();
        shareRef.value.open(records_id);
      } catch (error) {
        console.log(error);
      }
    };
    const handleDelete = async (id, index) => {
      await feedback.confirm("\u786E\u5B9A\u5220\u9664\uFF1F");
      await deleteMusic({
        id
      });
      await getMusic();
      currentId.value = -1;
      emit("update");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$3;
      const _component_el_image = ElImage;
      const _component_el_tooltip = ElTooltip;
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(_ctx.musicList, (item, index) => {
        _push(`<div><div class="flex bg-page mb-[20px] p-[20px] rounded-[12px] cursor-pointer"${ssrRenderAttr("id", `music-item-${item.id}`)}>`);
        if (item.status === 1) {
          _push(`<div class="flex-1 flex flex-col justify-center items-center min-h-[75px]">`);
          _push(ssrRenderComponent(_component_Icon, {
            class: "is-loading",
            name: "el-icon-Loading",
            size: 25
          }, null, _parent));
          _push(`<div class="mt-4">\u6B4C\u66F2\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u7B49\uFF01</div></div>`);
        } else {
          _push(`<!--[--><div class="flex-1 flex items-center"><div class="w-[75px] h-[75px] flex items-center justify-center flex-none relative">`);
          if (item.image_url) {
            _push(ssrRenderComponent(_component_el_image, {
              src: item.image_url,
              class: "w-full h-full rounded-[12px]"
            }, null, _parent));
          } else {
            _push(`<div class="text-tx-secondary">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "local-icon-music1",
              size: 45
            }, null, _parent));
            _push(`</div>`);
          }
          if (unref(currentId) == item.id && unref(playing)) {
            _push(`<div class="absolute inset-0 flex items-center justify-center text-white">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "local-icon-pause1",
              size: 20
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(currentId) == item.id && !unref(playing)) {
            _push(`<div class="absolute inset-0 flex items-center justify-center text-white">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "local-icon-play",
              size: 20
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (item.status === 2) {
            _push(`<div class="ml-[20px]"><div class="${ssrRenderClass([{
              "!text-primary": unref(currentId) === item.id
            }, "text-[16px] font-bold"])}">${ssrInterpolate(item.title)}</div>`);
            if (item.style_desc) {
              _push(`<div class="mt-[4px] text-tx-secondary">${ssrInterpolate(item.style_desc)}</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<div class="mt-[4px] text-tx-secondary">${ssrInterpolate(item.duration)}</div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (item.status === 3) {
            _push(`<div class="flex-1 flex justify-center"> \u6B4C\u66F2\u751F\u6210\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01 </div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex flex-col items-end"><div class="text-tx-secondary">${ssrInterpolate(item.create_time)}</div><div class="flex items-center mt-[25px]">`);
          if (item.audio_url) {
            _push(ssrRenderComponent(_component_el_tooltip, {
              effect: "dark",
              content: "\u4E0B\u8F7D",
              placement: "bottom"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="mr-6"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Icon, {
                    class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                    name: "el-icon-Download",
                    size: "18",
                    color: "#556477"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "mr-6",
                      onClick: withModifiers(($event) => downloadMusic(item.audio_url, item.title), ["stop"])
                    }, [
                      createVNode(_component_Icon, {
                        class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                        name: "el-icon-Download",
                        size: "18",
                        color: "#556477"
                      })
                    ], 8, ["onClick"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (item.audio_url && unref(appStore).getSquareConfig.music_award.is_open) {
            _push(ssrRenderComponent(_component_el_tooltip, {
              effect: "dark",
              content: "\u5206\u4EAB\u81F3\u5E7F\u573A",
              placement: "bottom"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md mr-6 pb-[7px] p-1 box-content"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "local-icon-share",
                    size: "17",
                    color: "#556477"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md mr-6 pb-[7px] p-1 box-content",
                      onClick: withModifiers(($event) => shareMusic2(item.id, item.is_share), ["stop"])
                    }, [
                      createVNode(_component_Icon, {
                        name: "local-icon-share",
                        size: "17",
                        color: "#556477"
                      })
                    ], 8, ["onClick"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_el_tooltip, {
            effect: "dark",
            content: "\u5220\u9664",
            placement: "bottom"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                  name: "el-icon-Delete",
                  size: "18",
                  color: "#556477"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", {
                    onClick: withModifiers(($event) => handleDelete(item.id), ["stop"])
                  }, [
                    createVNode(_component_Icon, {
                      class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",
                      name: "el-icon-Delete",
                      size: "18",
                      color: "#556477"
                    })
                  ], 8, ["onClick"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div><!--]-->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]-->`);
      if (unref(showShare)) {
        _push(ssrRenderComponent(MusicShare, {
          ref_key: "shareRef",
          ref: shareRef,
          onClose: ($event) => showShare.value = false,
          onSuccess: (val) => unref(sharedIds).push(val)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/music/list.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "display",
  __ssrInlineRender: true,
  setup(__props) {
    const { currentMusic } = useMusicPlay();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElScrollbar = ElScrollbar;
      const _component_Icon = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[360px] h-full ml-[16px] flex justify-center" }, _attrs))}><div class="h-full bg-page w-full rounded-[12px]">`);
      if (unref(currentMusic).lyric) {
        _push(ssrRenderComponent(_component_ElScrollbar, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="p-[40px] flex flex-col items-center"${_scopeId}><img${ssrRenderAttr("src", unref(currentMusic).image_url)} class="w-[200px] h-[200px] rounded-[12px]"${_scopeId}><div class="text-2xl font-bold mt-[30px]"${_scopeId}>${ssrInterpolate(unref(currentMusic).title)}</div>`);
              if (unref(currentMusic).style_desc) {
                _push2(`<div class="text-tx-secondary mt-[5px]"${_scopeId}> \u98CE\u683C\uFF1A${ssrInterpolate(unref(currentMusic).style_desc)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="whitespace-pre-wrap text-center mt-[20px] leading-7"${_scopeId}>${ssrInterpolate(unref(currentMusic).lyric)}</div></div>`);
            } else {
              return [
                createVNode("div", { class: "p-[40px] flex flex-col items-center" }, [
                  createVNode("img", {
                    src: unref(currentMusic).image_url,
                    class: "w-[200px] h-[200px] rounded-[12px]"
                  }, null, 8, ["src"]),
                  createVNode("div", { class: "text-2xl font-bold mt-[30px]" }, toDisplayString(unref(currentMusic).title), 1),
                  unref(currentMusic).style_desc ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-tx-secondary mt-[5px]"
                  }, " \u98CE\u683C\uFF1A" + toDisplayString(unref(currentMusic).style_desc), 1)) : createCommentVNode("", true),
                  createVNode("div", { class: "whitespace-pre-wrap text-center mt-[20px] leading-7" }, toDisplayString(unref(currentMusic).lyric), 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="h-full flex flex-col items-center justify-center"><div class="text-tx-secondary">`);
        _push(ssrRenderComponent(_component_Icon, {
          size: 45,
          name: "local-icon-music1"
        }, null, _parent));
        _push(`</div><div class="my-[10px] text-tx-secondary"> \u5F53\u524D\u8FD8\u6CA1\u6709\u9009\u4E2D\u97F3\u4E50\u54E6 </div></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/music/display.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=display-CW6dIehm.mjs.map
