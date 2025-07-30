import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as __nuxt_component_1 } from './index-BS4hxwV8.mjs';
import { a as useRouter, a5 as useAppStore, z as useUserStore, bv as getMindMapConfig, A as feedback, d as ElButton } from './server.mjs';
import { useSSRContext, defineComponent, ref, shallowRef, watch, mergeProps, withCtx, unref, isRef, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, withDirectives, vModelText, toDisplayString } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { watchThrottled } from '@vueuse/core';
import { b as chatSendText } from './chat-jd47avQj.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "control-panel",
  __ssrInlineRender: true,
  emits: ["update", "history", "refresh"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const router = useRouter();
    const appStore = useAppStore();
    const userStore = useUserStore();
    const userInput = ref("");
    const descInput = ref("");
    const textareaRef = shallowRef(null);
    const isReceiving = ref(false);
    const { data: configs, refresh } = useAsyncData(() => getMindMapConfig(), {
      lazy: true,
      default() {
        return {};
      }
    }, "$UJscNzO9rO");
    const currentIndex = ref(-1);
    const useExample = () => {
      var _a;
      const length = (_a = configs.value.example_content) == null ? void 0 : _a.length;
      if (length) {
        let index = Math.round(Math.random() * (length - 1));
        if (currentIndex.value === index) {
          if (index < length - 1) {
            index++;
          } else {
            index--;
          }
        }
        currentIndex.value = index;
      }
    };
    watch(configs, () => {
      !descInput.value && useExample();
    });
    watch(currentIndex, (value) => {
      if (!configs.value.example_content) return;
      const content = configs.value.example_content[value];
      if (content) {
        descInput.value = content;
      }
    });
    const handleClick = () => {
      if (!userStore.isLogin) {
        userStore.toggleShowLogin();
      }
    };
    let sseInstance = null;
    const handleCreate = async () => {
      if (!userStore.isLogin) return userStore.toggleShowLogin();
      if (!userInput.value) return feedback.msgError("\u8BF7\u8F93\u5165\u5185\u5BB9");
      if (isReceiving.value) return;
      isReceiving.value = true;
      sseInstance = chatSendText({
        type: 4,
        question: userInput.value
      });
      descInput.value = "";
      sseInstance.addEventListener("chat", ({ data: dataJson }) => {
        const { data, index } = dataJson;
        descInput.value += data;
      });
      sseInstance.addEventListener("finish", ({ data: dataJson }) => {
        const { data, index } = dataJson;
        if (data) {
          descInput.value += data;
        }
      });
      sseInstance.addEventListener("close", async () => {
        refresh();
        emit("refresh");
        await userStore.getUser();
        setTimeout(async () => {
          isReceiving.value = false;
          scrollToBottom();
        }, 600);
      });
      sseInstance.addEventListener("error", async (ev) => {
        var _a;
        if (((_a = ev.data) == null ? void 0 : _a.code) === 1100) {
          if (!appStore.getIsShowRecharge) {
            feedback.msgError(
              `${appStore.getTokenUnit}\u6570\u91CF\u5DF2\u7528\u5B8C\u3002\u8BF7\u8054\u7CFB\u5BA2\u670D\u589E\u52A0`
            );
          } else {
            await feedback.confirm(
              `${appStore.getTokenUnit}\u6570\u91CF\u5DF2\u7528\u5B8C\uFF0C\u8BF7\u524D\u5F80\u5145\u503C`
            );
            router.push("/user/recharge");
          }
          return;
        }
        if (ev.errorType === "connectError") {
          feedback.msgError("\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
        }
        setTimeout(() => {
          isReceiving.value = false;
        }, 200);
      });
    };
    const scrollToBottom = () => {
      var _a, _b;
      (_b = textareaRef.value) == null ? void 0 : _b.scrollTo({
        top: (_a = textareaRef.value) == null ? void 0 : _a.scrollHeight
      });
    };
    watchThrottled(
      descInput,
      async (value) => {
        setTimeout(() => {
          emit("update", value);
        }, 500);
        isReceiving.value && scrollToBottom();
      },
      {
        throttle: 500
      }
    );
    __expose({
      changDescInput(value) {
        descInput.value = value;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElScrollbar = ElScrollbar;
      const _component_l_textarea = __nuxt_component_1;
      const _component_ElButton = ElButton;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-body rounded-[12px] w-[330px] h-full flex flex-col" }, _attrs))} data-v-fcf65801><div class="flex-1 min-h-0" data-v-fcf65801>`);
      _push(ssrRenderComponent(_component_ElScrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-[15px] py-[15px]" data-v-fcf65801${_scopeId}><div data-v-fcf65801${_scopeId}><div data-v-fcf65801${_scopeId}><h3 class="font-bold" data-v-fcf65801${_scopeId}><span data-v-fcf65801${_scopeId}>\u5E2E\u6211\u751F\u6210</span><span class="text-error" data-v-fcf65801${_scopeId}>*</span></h3><div class="mt-[10px] flex" data-v-fcf65801${_scopeId}>`);
            _push2(ssrRenderComponent(_component_l_textarea, {
              modelValue: unref(userInput),
              "onUpdate:modelValue": ($event) => isRef(userInput) ? userInput.value = $event : null,
              maxlength: "99999",
              rows: 7,
              clearable: true,
              "show-word-limit": false,
              customStyle: {
                paddingBottom: "24px"
              },
              placeholder: "\u8BF7\u8F93\u5165\u7B80\u5355\u63CF\u8FF0\uFF0CAI\u5C06\u667A\u80FD\u8F93\u51FAmarkdown\u5185\u5BB9",
              onClick: handleClick
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="mt-[15px]" data-v-fcf65801${_scopeId}><div class="flex" data-v-fcf65801${_scopeId}><h3 class="font-bold mr-auto" data-v-fcf65801${_scopeId}><span data-v-fcf65801${_scopeId}>\u9700\u6C42\u63CF\u8FF0</span></h3>`);
            if (unref(configs).is_example) {
              _push2(ssrRenderComponent(_component_ElButton, {
                link: "",
                type: "primary",
                onClick: useExample
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u8BD5\u8BD5\u793A\u4F8B `);
                  } else {
                    return [
                      createTextVNode(" \u8BD5\u8BD5\u793A\u4F8B ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><textarea class="bg-page h-[400px] w-full mt-[10px] rounded-[12px] p-[10px] resize-none border-[1px] border-solid border-[transparent] focus:border-primary" data-v-fcf65801${_scopeId}>${ssrInterpolate(unref(descInput))}</textarea></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "px-[15px] py-[15px]" }, [
                createVNode("div", null, [
                  createVNode("div", null, [
                    createVNode("h3", { class: "font-bold" }, [
                      createVNode("span", null, "\u5E2E\u6211\u751F\u6210"),
                      createVNode("span", { class: "text-error" }, "*")
                    ]),
                    createVNode("div", { class: "mt-[10px] flex" }, [
                      createVNode(_component_l_textarea, {
                        modelValue: unref(userInput),
                        "onUpdate:modelValue": ($event) => isRef(userInput) ? userInput.value = $event : null,
                        maxlength: "99999",
                        rows: 7,
                        clearable: true,
                        "show-word-limit": false,
                        customStyle: {
                          paddingBottom: "24px"
                        },
                        placeholder: "\u8BF7\u8F93\u5165\u7B80\u5355\u63CF\u8FF0\uFF0CAI\u5C06\u667A\u80FD\u8F93\u51FAmarkdown\u5185\u5BB9",
                        onClick: handleClick
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "mt-[15px]" }, [
                    createVNode("div", { class: "flex" }, [
                      createVNode("h3", { class: "font-bold mr-auto" }, [
                        createVNode("span", null, "\u9700\u6C42\u63CF\u8FF0")
                      ]),
                      unref(configs).is_example ? (openBlock(), createBlock(_component_ElButton, {
                        key: 0,
                        link: "",
                        type: "primary",
                        onClick: useExample
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u8BD5\u8BD5\u793A\u4F8B ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    withDirectives(createVNode("textarea", {
                      ref_key: "textareaRef",
                      ref: textareaRef,
                      "onUpdate:modelValue": ($event) => isRef(descInput) ? descInput.value = $event : null,
                      class: "bg-page h-[400px] w-full mt-[10px] rounded-[12px] p-[10px] resize-none border-[1px] border-solid border-[transparent] focus:border-primary"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(descInput)]
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="px-[15px] pb-[15px]" data-v-fcf65801>`);
      _push(ssrRenderComponent(_component_el_button, {
        size: "large",
        type: "primary",
        class: "w-full !border-none",
        onClick: handleCreate,
        loading: unref(isReceiving)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-base font-bold" data-v-fcf65801${_scopeId}>\u751F\u6210\u601D\u7EF4\u5BFC\u56FE</span>`);
            if (unref(configs).member_free) {
              _push2(`<span class="text-sm ml-[10px]" data-v-fcf65801${_scopeId}> \u4F1A\u5458\u514D\u8D39 </span>`);
            } else if (unref(configs).balance > 0) {
              _push2(`<span class="text-sm ml-[10px]" data-v-fcf65801${_scopeId}> \u6D88\u8017 ${ssrInterpolate(unref(configs).balance)} ${ssrInterpolate(unref(appStore).getTokenUnit)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("span", { class: "text-base font-bold" }, "\u751F\u6210\u601D\u7EF4\u5BFC\u56FE"),
              unref(configs).member_free ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-sm ml-[10px]"
              }, " \u4F1A\u5458\u514D\u8D39 ")) : unref(configs).balance > 0 ? (openBlock(), createBlock("span", {
                key: 1,
                class: "text-sm ml-[10px]"
              }, " \u6D88\u8017 " + toDisplayString(unref(configs).balance) + " " + toDisplayString(unref(appStore).getTokenUnit), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mind_map/component/control-panel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ControlPanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fcf65801"]]);

export { ControlPanel as default };
//# sourceMappingURL=control-panel-CGiAGGdB.mjs.map
