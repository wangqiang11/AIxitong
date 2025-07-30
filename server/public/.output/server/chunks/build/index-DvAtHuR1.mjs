import { a5 as useAppStore, a as useRouter, ag as useRoute, ah as __nuxt_component_0 } from './server.mjs';
import { useSSRContext, defineComponent, computed, markRaw, ref, watch, withCtx, unref, createVNode, resolveDynamicComponent, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import Recharge from './recharge-CPxsnpho.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './index-DByyRwMr.mjs';
import './index-C2yEelJa.mjs';
import './position-DVxxNIGX.mjs';
import './index-BoqjHllR.mjs';
import './usePolling-DOP50YcO.mjs';
import './useLockFn-BWbjkhBs.mjs';
import './recharge-DUlermqD.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useAppStore();
    const router = useRouter();
    const route = useRoute();
    const tabLists = computed(() => {
      const tabs = [
        {
          name: "\u5145\u503C\u4E2D\u5FC3",
          type: "recharge",
          show: true,
          component: markRaw(Recharge)
        }
      ];
      return tabs.filter((item) => !!item.show);
    });
    const type = route.query.type;
    const currentType = ref(type);
    const tabChange = (type2) => {
      currentType.value = type2;
      router.replace({
        path: "",
        query: {
          type: type2
        }
      });
    };
    const currentItem = computed(() => {
      return tabLists.value.find((item) => item.type === currentType.value);
    });
    watch(
      tabLists,
      (value) => {
        if (!currentItem.value && value.length) {
          const [first] = value;
          currentType.value = first.type;
        }
      },
      {
        immediate: true
      }
    );
    watch(
      () => route.query.type,
      (value) => {
        currentType.value = value;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-db46a5c1>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-main" data-v-db46a5c1${_scopeId}>`);
            if (unref(tabLists).length) {
              _push2(`<div class="flex h-full flex-col pt-[10px] max-w-[1200px] mx-auto" data-v-db46a5c1${_scopeId}><div class="tab-lists" data-v-db46a5c1${_scopeId}><div class="flex mx-[-10px]" data-v-db46a5c1${_scopeId}><!--[-->`);
              ssrRenderList(unref(tabLists), (item, index2) => {
                _push2(`<div class="${ssrRenderClass([{
                  "is-active": unref(currentType) == item.type
                }, "tab-item"])}" data-v-db46a5c1${_scopeId}><span class="w-full" data-v-db46a5c1${_scopeId}>${ssrInterpolate(item.name)}</span></div>`);
              });
              _push2(`<!--]--></div></div><div class="flex-1 min-h-0" data-v-db46a5c1${_scopeId}>`);
              if (unref(currentItem)) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(currentItem).component), null, null), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            } else {
              _push2(`<div class="w-full h-full bg-white rounded-[12px] flex items-center justify-center" data-v-db46a5c1${_scopeId}><div class="text-xl" data-v-db46a5c1${_scopeId}>\u529F\u80FD\u672A\u5F00\u542F!</div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-main" }, [
                unref(tabLists).length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex h-full flex-col pt-[10px] max-w-[1200px] mx-auto"
                }, [
                  createVNode("div", { class: "tab-lists" }, [
                    createVNode("div", { class: "flex mx-[-10px]" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(tabLists), (item, index2) => {
                        return openBlock(), createBlock("div", {
                          class: ["tab-item", {
                            "is-active": unref(currentType) == item.type
                          }],
                          key: index2,
                          onClick: ($event) => tabChange(item.type)
                        }, [
                          createVNode("span", { class: "w-full" }, toDisplayString(item.name), 1)
                        ], 10, ["onClick"]);
                      }), 128))
                    ])
                  ]),
                  createVNode("div", { class: "flex-1 min-h-0" }, [
                    unref(currentItem) ? (openBlock(), createBlock(resolveDynamicComponent(unref(currentItem).component), { key: 0 })) : createCommentVNode("", true)
                  ])
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "w-full h-full bg-white rounded-[12px] flex items-center justify-center"
                }, [
                  createVNode("div", { class: "text-xl" }, "\u529F\u80FD\u672A\u5F00\u542F!")
                ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recharge/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-db46a5c1"]]);

export { index as default };
//# sourceMappingURL=index-DvAtHuR1.mjs.map
