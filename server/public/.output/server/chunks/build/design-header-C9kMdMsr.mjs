import { E as ElPageHeader } from './el-page-header-94hYPtex.mjs';
import { a as useRouter, ag as useRoute, bb as checkVideoStatus, A as feedback, ba as putVideoRename, d as ElButton } from './server.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElDialog } from './index-CzJm6kkT.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { defineComponent, ref, watch, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, isRef, openBlock, createBlock, Fragment, createCommentVNode, useSSRContext } from 'vue';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useCanvasStore } from './canvas-DJ4hjlD7.mjs';
import './index-pT4w-4Lo.mjs';
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
import '@vueuse/core';
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './position-DVxxNIGX.mjs';
import './useAudioPlay-C6V9947w.mjs';
import './file-RP6bCPT_.mjs';
import 'jsdom';
import 'jsdom/lib/jsdom/living/generated/utils';
import 'jsdom/lib/jsdom/utils';
import 'fontfaceobserver';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "design-header",
  __ssrInlineRender: true,
  setup(__props) {
    const canvasStore = useCanvasStore();
    const router = useRouter();
    const route = useRoute();
    const showLoading = ref(false);
    const compositeStatus = ref(-1);
    const goBack = () => {
      router.push("/digital_human/aside/video_compositing");
    };
    const { isLock: saveLoading, lockFn: handleSave } = useLockFn(async () => {
      await canvasStore.savaOrComposite();
      router.replace({
        path: "",
        query: {
          ...route.query,
          id: canvasStore.id
        }
      });
    });
    const { isLock: compositeLoading, lockFn: compositeVideo } = useLockFn(
      async () => {
        await canvasStore.putImgCover();
        await canvasStore.savaOrComposite(2);
        await checkCompositeStatus();
        showLoading.value = true;
      }
    );
    let timer = null;
    const checkCompositeStatus = async () => {
      const { status } = await checkVideoStatus({
        id: canvasStore.id
      });
      compositeStatus.value = status;
      if (status == 2) {
        timer = setTimeout(() => {
          checkCompositeStatus();
        }, 30 * 1e3);
      }
    };
    watch(showLoading, (value) => {
      console.log(value);
      if (!value) {
        timer && clearTimeout(timer);
      }
    });
    const changeName = async () => {
      const { value } = await feedback.prompt("\u4FEE\u6539\u89C6\u9891\u540D\u79F0", "", {
        inputValue: canvasStore.name
      });
      if (canvasStore.id) {
        await putVideoRename({
          name: value,
          id: canvasStore.id
        });
      }
      canvasStore.name = value;
    };
    const continueCreate = () => {
      canvasStore.voiceContent.text = "";
      canvasStore.voiceContent.voice_url = "";
      showLoading.value = false;
      canvasStore.id = void 0;
      router.replace({
        path: "",
        query: {
          ...route.query,
          id: void 0
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_page_header = ElPageHeader;
      const _component_el_button = ElButton;
      const _component_Icon = _sfc_main$1;
      const _component_el_dialog = ElDialog;
      const _component_ElImage = ElImage;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-primary h-[60px] flex items-center text-white px-main" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_page_header, { onBack: goBack }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-white text-base"${_scopeId}>${ssrInterpolate(unref(canvasStore).name)} `);
            _push2(ssrRenderComponent(_component_el_button, {
              link: "",
              text: "",
              onClick: changeName
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-white"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, { name: "el-icon-EditPen" }, null, _parent3, _scopeId2));
                  _push3(`</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-white" }, [
                      createVNode(_component_Icon, { name: "el-icon-EditPen" })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", { class: "text-white text-base" }, [
                createTextVNode(toDisplayString(unref(canvasStore).name) + " ", 1),
                createVNode(_component_el_button, {
                  link: "",
                  text: "",
                  onClick: changeName
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-white" }, [
                      createVNode(_component_Icon, { name: "el-icon-EditPen" })
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
      _push(`<div class="ml-auto">`);
      _push(ssrRenderComponent(_component_el_button, {
        plain: "",
        style: { "--el-button-bg-color": "transparent", "--el-button-text-color": "#fff" },
        loading: unref(saveLoading),
        onClick: unref(handleSave)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5B58\u4E3A\u8349\u7A3F `);
          } else {
            return [
              createTextVNode(" \u5B58\u4E3A\u8349\u7A3F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        onClick: unref(compositeVideo),
        loading: unref(compositeLoading)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5408\u6210\u89C6\u9891 `);
          } else {
            return [
              createTextVNode(" \u5408\u6210\u89C6\u9891 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_el_dialog, {
        modelValue: unref(showLoading),
        "onUpdate:modelValue": ($event) => isRef(showLoading) ? showLoading.value = $event : null,
        title: "\u89C6\u9891\u751F\u6210",
        width: "500px",
        "close-on-click-modal": false,
        "show-close": false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center justify-center"${_scopeId}><div class="w-[400px] h-[200px] relative text-white rounded-lg overflow-hidden"${_scopeId}><div class="loading absolute z-10 bg-[rgba(0,0,0,0.5)] inset-0 flex flex-col justify-center items-center"${_scopeId}>`);
            if (unref(compositeStatus) == 2) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_Icon, {
                class: "el-icon is-loading",
                size: 30,
                name: "el-icon-Loading"
              }, null, _parent2, _scopeId));
              _push2(`<div class="mt-[10px] text-lg"${_scopeId}>\u89C6\u9891\u751F\u6210\u4E2D</div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(compositeStatus) == 3) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_Icon, {
                size: 30,
                name: "el-icon-SuccessFilled"
              }, null, _parent2, _scopeId));
              _push2(`<div class="mt-[10px] text-lg"${_scopeId}>\u89C6\u9891\u5408\u6210\u6210\u529F</div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(compositeStatus) == 4) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_Icon, {
                size: 30,
                name: "el-icon-CircleCloseFilled"
              }, null, _parent2, _scopeId));
              _push2(`<div class="mt-[10px] text-lg"${_scopeId}>\u89C6\u9891\u5408\u6210\u5931\u8D25</div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (unref(canvasStore).cover) {
              _push2(ssrRenderComponent(_component_ElImage, {
                class: "w-full h-full",
                src: unref(canvasStore).cover,
                fit: "contain"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="my-[20px] flex items-center"${_scopeId}> \u53EF\u5728\u524D\u5F80 `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/digital_human/aside/video_compositing",
              replace: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="cursor-pointer text-primary"${_scopeId2}> \u89C6\u9891\u5408\u6210 </span>`);
                } else {
                  return [
                    createVNode("span", { class: "cursor-pointer text-primary" }, " \u89C6\u9891\u5408\u6210 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` \u5904\u67E5\u770B \uFF0C\u6216\u7559\u5728\u5F53\u524D\u9875\u9762 `);
            if (unref(compositeStatus) == 4) {
              _push2(`<span class="cursor-pointer text-primary"${_scopeId}> \u91CD\u65B0\u5408\u6210\u89C6\u9891 </span>`);
            } else {
              _push2(`<span class="cursor-pointer text-primary"${_scopeId}> \u7EE7\u7EED\u521B\u4F5C </span>`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                createVNode("div", { class: "w-[400px] h-[200px] relative text-white rounded-lg overflow-hidden" }, [
                  createVNode("div", { class: "loading absolute z-10 bg-[rgba(0,0,0,0.5)] inset-0 flex flex-col justify-center items-center" }, [
                    unref(compositeStatus) == 2 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(_component_Icon, {
                        class: "el-icon is-loading",
                        size: 30,
                        name: "el-icon-Loading"
                      }),
                      createVNode("div", { class: "mt-[10px] text-lg" }, "\u89C6\u9891\u751F\u6210\u4E2D")
                    ], 64)) : createCommentVNode("", true),
                    unref(compositeStatus) == 3 ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode(_component_Icon, {
                        size: 30,
                        name: "el-icon-SuccessFilled"
                      }),
                      createVNode("div", { class: "mt-[10px] text-lg" }, "\u89C6\u9891\u5408\u6210\u6210\u529F")
                    ], 64)) : createCommentVNode("", true),
                    unref(compositeStatus) == 4 ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                      createVNode(_component_Icon, {
                        size: 30,
                        name: "el-icon-CircleCloseFilled"
                      }),
                      createVNode("div", { class: "mt-[10px] text-lg" }, "\u89C6\u9891\u5408\u6210\u5931\u8D25")
                    ], 64)) : createCommentVNode("", true)
                  ]),
                  unref(canvasStore).cover ? (openBlock(), createBlock(_component_ElImage, {
                    key: 0,
                    class: "w-full h-full",
                    src: unref(canvasStore).cover,
                    fit: "contain"
                  }, null, 8, ["src"])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "my-[20px] flex items-center" }, [
                  createTextVNode(" \u53EF\u5728\u524D\u5F80 "),
                  createVNode(_component_NuxtLink, {
                    to: "/digital_human/aside/video_compositing",
                    replace: true
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "cursor-pointer text-primary" }, " \u89C6\u9891\u5408\u6210 ")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" \u5904\u67E5\u770B \uFF0C\u6216\u7559\u5728\u5F53\u524D\u9875\u9762 "),
                  unref(compositeStatus) == 4 ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "cursor-pointer text-primary",
                    onClick: ($event) => showLoading.value = false
                  }, " \u91CD\u65B0\u5408\u6210\u89C6\u9891 ", 8, ["onClick"])) : (openBlock(), createBlock("span", {
                    key: 1,
                    class: "cursor-pointer text-primary",
                    onClick: continueCreate
                  }, " \u7EE7\u7EED\u521B\u4F5C "))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/digital_human/_components/design-header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=design-header-C9kMdMsr.mjs.map
