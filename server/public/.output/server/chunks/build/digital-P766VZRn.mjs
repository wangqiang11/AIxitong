import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as _sfc_main$3 } from './index-BoqjHllR.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { E as ElInfiniteScroll } from './index-DNeGbNHc.mjs';
import { z as useUserStore, a as useRouter, a5 as useAppStore, A as feedback } from './server.mjs';
import { useSSRContext, defineComponent, reactive, withAsyncContext, mergeProps, withCtx, unref, createVNode, withDirectives, openBlock, createBlock, Fragment, renderList, createTextVNode, createCommentVNode, toDisplayString, withModifiers } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import _sfc_main$2 from './tologin-BQv8QnLK.mjs';
import { c as getDigitalList, d as delDigital } from './digital-DHYaDV-C.mjs';
import _sfc_main$1 from './add-2Mfhn0Pq.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import '@vue/shared';
import 'lodash-unified';
import './position-DVxxNIGX.mjs';
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
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-DLL0sEcv.mjs';
import 'async-validator';
import './index-BaKT_MyR.mjs';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "digital",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const userStore = useUserStore();
    const router = useRouter();
    useAppStore();
    const goDetail = async (item) => {
      if (!userStore.isLogin) return userStore.toggleShowLogin();
      if (item.is_disable) {
        return;
      }
      router.push({
        path: "/application/digital/edit",
        query: {
          id: item.id
        }
      });
    };
    const pageInfo = reactive({
      pageNo: 1,
      count: 0,
      pageSize: 15,
      lists: []
    });
    const getLists = async () => {
      const data = await getDigitalList({
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
    [__temp, __restore] = withAsyncContext(() => useAsyncData(() => getLists(), {
      lazy: true
    }, "$MfOeuGnAXC")), await __temp, __restore();
    const handelDel = async (id) => {
      await feedback.confirm("\u786E\u5B9A\u5220\u9664\uFF1F");
      await delDigital({ id });
      getLists();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElScrollbar = ElScrollbar;
      const _component_Icon = _sfc_main$3;
      const _component_ElImage = ElImage;
      const _directive_infinite_scroll = ElInfiniteScroll;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col" }, _attrs))} data-v-41695735><div class="px-[20px] py-[16px]" data-v-41695735><div class="font-medium text-xl" data-v-41695735>\u6211\u7684\u5F62\u8C61</div></div><div class="flex-1 min-h-0" data-v-41695735>`);
      _push(ssrRenderComponent(_component_ElScrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({
              class: "px-[20px]",
              "infinite-scroll-distance": "50"
            }, ssrGetDirectiveProps(_ctx, _directive_infinite_scroll, load)))} data-v-41695735${_scopeId}>`);
            if (unref(userStore).isLogin) {
              _push2(`<div data-v-41695735${_scopeId}><div class="flex flex-wrap items-stretch mx-[-10px]" data-v-41695735${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$1, { onSuccess: getLists }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-[280px] h-[250px] mb-[20px]" data-v-41695735${_scopeId2}><div class="mx-[10px] bg-body h-full rounded-[12px] p-[20px] overflow-hidden flex flex-col justify-center items-center cursor-pointer border-[rgba(67,111,246,0.2)] border-solid border" data-v-41695735${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "el-icon-Plus",
                      size: 24
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="mt-[10px]" data-v-41695735${_scopeId2}>\u65B0\u589E\u5F62\u8C61</div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-[280px] h-[250px] mb-[20px]" }, [
                        createVNode("div", { class: "mx-[10px] bg-body h-full rounded-[12px] p-[20px] overflow-hidden flex flex-col justify-center items-center cursor-pointer border-[rgba(67,111,246,0.2)] border-solid border" }, [
                          createVNode(_component_Icon, {
                            name: "el-icon-Plus",
                            size: 24
                          }),
                          createVNode("div", { class: "mt-[10px]" }, "\u65B0\u589E\u5F62\u8C61")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--[-->`);
              ssrRenderList(unref(pageInfo).lists, (item, index) => {
                _push2(`<div class="w-[280px] h-[250px] mb-[10px] card" data-v-41695735${_scopeId}><div class="mx-[10px] bg-body h-full rounded-[12px] overflow-hidden flex flex-col border-[rgba(67,111,246,0.3)] border-solid border text-primary cursor-pointer relative" data-v-41695735${_scopeId}>`);
                if (item.is_disable) {
                  _push2(`<div class="flex text-center items-center justify-center text-white absolute inset-0 bg-[rgba(0,0,0,0.5)] z-[1000]" data-v-41695735${_scopeId}><div data-v-41695735${_scopeId}> \u8BE5\u5F62\u8C61\u6D89\u6743\u8FDD\u89C4\uFF0C\u5DF2\u7981\u7528 <br data-v-41695735${_scopeId}> \u8BF7\u91CD\u65B0\u521B\u5EFA\u5F62\u8C61 </div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(ssrRenderComponent(_component_ElImage, {
                  src: item.image,
                  class: "w-full h-[190px] !flex",
                  fit: "cover"
                }, null, _parent2, _scopeId));
                _push2(`<div class="card-info" data-v-41695735${_scopeId}>`);
                _push2(ssrRenderComponent(_component_ElImage, {
                  class: "w-[40px] h-[40px] rounded-[50%] overflow-hidden border border-solid border-white flex-none",
                  fit: "cover",
                  src: item.avatar
                }, null, _parent2, _scopeId));
                _push2(`<div class="flex-1 text-white ml-[10px] line-clamp-2 text-bold" style="${ssrRenderStyle({ "word-break": "break-all" })}" data-v-41695735${_scopeId}>${ssrInterpolate(item.name)}</div><div class="bg-white rounded-[50%] flex p-[4px] ml-[5px]" data-v-41695735${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-ArrowRight" }, null, _parent2, _scopeId));
                _push2(`</div></div><div class="delete-icon rounded-[50%] flex p-[6px] ml-[5px] absolute top-[10px] right-[14px] cursor-pointer text-tx-primary z-[10000]" data-v-41695735${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-Delete" }, null, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!unref(userStore).isLogin) {
              _push2(`<div data-v-41695735${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
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
                    createVNode(_sfc_main$1, { onSuccess: getLists }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-[280px] h-[250px] mb-[20px]" }, [
                          createVNode("div", { class: "mx-[10px] bg-body h-full rounded-[12px] p-[20px] overflow-hidden flex flex-col justify-center items-center cursor-pointer border-[rgba(67,111,246,0.2)] border-solid border" }, [
                            createVNode(_component_Icon, {
                              name: "el-icon-Plus",
                              size: 24
                            }),
                            createVNode("div", { class: "mt-[10px]" }, "\u65B0\u589E\u5F62\u8C61")
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(pageInfo).lists, (item, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "w-[280px] h-[250px] mb-[10px] card"
                      }, [
                        createVNode("div", {
                          class: "mx-[10px] bg-body h-full rounded-[12px] overflow-hidden flex flex-col border-[rgba(67,111,246,0.3)] border-solid border text-primary cursor-pointer relative",
                          onClick: ($event) => goDetail(item)
                        }, [
                          item.is_disable ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex text-center items-center justify-center text-white absolute inset-0 bg-[rgba(0,0,0,0.5)] z-[1000]"
                          }, [
                            createVNode("div", null, [
                              createTextVNode(" \u8BE5\u5F62\u8C61\u6D89\u6743\u8FDD\u89C4\uFF0C\u5DF2\u7981\u7528 "),
                              createVNode("br"),
                              createTextVNode(" \u8BF7\u91CD\u65B0\u521B\u5EFA\u5F62\u8C61 ")
                            ])
                          ])) : createCommentVNode("", true),
                          createVNode(_component_ElImage, {
                            src: item.image,
                            class: "w-full h-[190px] !flex",
                            fit: "cover"
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "card-info" }, [
                            createVNode(_component_ElImage, {
                              class: "w-[40px] h-[40px] rounded-[50%] overflow-hidden border border-solid border-white flex-none",
                              fit: "cover",
                              src: item.avatar
                            }, null, 8, ["src"]),
                            createVNode("div", {
                              class: "flex-1 text-white ml-[10px] line-clamp-2 text-bold",
                              style: { "word-break": "break-all" }
                            }, toDisplayString(item.name), 1),
                            createVNode("div", { class: "bg-white rounded-[50%] flex p-[4px] ml-[5px]" }, [
                              createVNode(_component_Icon, { name: "el-icon-ArrowRight" })
                            ])
                          ]),
                          createVNode("div", {
                            class: "delete-icon rounded-[50%] flex p-[6px] ml-[5px] absolute top-[10px] right-[14px] cursor-pointer text-tx-primary z-[10000]",
                            onClick: withModifiers(($event) => handelDel(item.id), ["stop"])
                          }, [
                            createVNode(_component_Icon, { name: "el-icon-Delete" })
                          ], 8, ["onClick"])
                        ], 8, ["onClick"])
                      ]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true),
                !unref(userStore).isLogin ? (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode(_sfc_main$2)
                ])) : createCommentVNode("", true)
              ])), [
                [_directive_infinite_scroll, load]
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/layout/digital.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const digital = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-41695735"]]);

export { digital as default };
//# sourceMappingURL=digital-P766VZRn.mjs.map
