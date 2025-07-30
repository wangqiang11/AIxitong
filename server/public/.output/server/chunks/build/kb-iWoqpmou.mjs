import { E as ElTabs, a as ElTabPane } from './el-tab-pane-C7DQ8faq.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as _sfc_main$3 } from './index-BoqjHllR.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { E as ElInfiniteScroll } from './index-DNeGbNHc.mjs';
import { a as useRouter, z as useUserStore, a5 as useAppStore, A as feedback } from './server.mjs';
import { useSSRContext, defineComponent, ref, reactive, shallowRef, unref, withCtx, createVNode, mergeProps, withDirectives, openBlock, createBlock, Fragment, renderList, withModifiers, toDisplayString, createCommentVNode, nextTick } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import _sfc_main$2 from './addPop-CT4BzglM.mjs';
import _sfc_main$1 from './tologin-BQv8QnLK.mjs';
import { r as knowKnowledgeList, b as knowKnowledgeDel } from './my_database-C6D0rbWD.mjs';
import { u as useRechargeStore } from './recharge-0plSVxH9.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import './strings-D1uxkXhq.mjs';
import '@vue/shared';
import './index-C5I0EtSx.mjs';
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
import './index-CJqYHNUB.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './dropdown-C6fgV-Vy.mjs';
import './index-CXZnYiu9.mjs';
import './index-CUhOTuS-.mjs';
import './index-D7S5lb8a.mjs';
import './index-5Ia44xzE.mjs';
import './el-collapse-item-DSo9CmH5.mjs';
import './index-DadLUs6d.mjs';
import './index-BaKT_MyR.mjs';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "kb",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const userStore = useUserStore();
    const rechargeStore = useRechargeStore();
    const appStore = useAppStore();
    const queryParams = ref({
      type: "0"
    });
    reactive({
      show: false,
      num: 0,
      kbId: 0,
      isOwner: false
    });
    const showPop = ref(false);
    const popRef = shallowRef();
    const pageInfo = reactive({
      pageNo: 1,
      count: 0,
      pageSize: 15,
      lists: []
    });
    const handleClick = async () => {
      pageInfo.pageNo = 1;
      await nextTick();
      await getLists();
    };
    const getLists = async () => {
      const data = await knowKnowledgeList({
        ...queryParams.value,
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
    const addDatabase = async () => {
      if (userStore.userInfo.kb_num <= 0) {
        if (!appStore.getIsShowRecharge) {
          feedback.msgError("\u77E5\u8BC6\u5E93\u6570\u91CF\u5DF2\u7528\u5B8C\u3002\u8BF7\u8054\u7CFB\u5BA2\u670D\u589E\u52A0");
        } else {
          await feedback.confirm("\u77E5\u8BC6\u5E93\u6570\u91CF\u5DF2\u7528\u5B8C\uFF0C\u8BF7\u524D\u5F80\u5145\u503C");
          rechargeStore.toggleShow(true);
        }
        return;
      }
      if (!userStore.isLogin) return userStore.toggleShowLogin();
      showPop.value = true;
      await nextTick();
      popRef.value.open();
    };
    const editDatabase = async (id) => {
      showPop.value = true;
      await nextTick();
      popRef.value.open({ id });
    };
    const delDatabase = async (id, name) => {
      await feedback.confirm(`\u786E\u8BA4\u5220\u9664 ${name} \u5417\uFF1F`);
      await knowKnowledgeDel({ id });
      getLists();
    };
    const toDetail = (id, type) => {
      router.push(`/application/kb/detail?id=${id}&type=${type}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_ElScrollbar = ElScrollbar;
      const _component_Icon = _sfc_main$3;
      const _component_el_image = ElImage;
      const _component_icon = _sfc_main$3;
      const _directive_infinite_scroll = ElInfiniteScroll;
      _push(`<!--[--><div class="h-full flex flex-col" data-v-84898f5a><div class="px-[20px] py-[16px] mt-[-8px]" data-v-84898f5a>`);
      _push(ssrRenderComponent(_component_el_tabs, {
        modelValue: unref(queryParams).type,
        "onUpdate:modelValue": ($event) => unref(queryParams).type = $event,
        class: "demo-tabs",
        onTabChange: handleClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_tab_pane, {
              label: "\u5168\u90E8\u77E5\u8BC6\u5E93",
              name: "0"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_tab_pane, {
              label: "\u6211\u7684\u77E5\u8BC6\u5E93",
              name: "1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_tab_pane, {
              label: "\u5171\u4EAB\u7ED9\u6211",
              name: "2"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_tab_pane, {
                label: "\u5168\u90E8\u77E5\u8BC6\u5E93",
                name: "0"
              }),
              createVNode(_component_el_tab_pane, {
                label: "\u6211\u7684\u77E5\u8BC6\u5E93",
                name: "1"
              }),
              createVNode(_component_el_tab_pane, {
                label: "\u5171\u4EAB\u7ED9\u6211",
                name: "2"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 min-h-0" data-v-84898f5a>`);
      _push(ssrRenderComponent(_component_ElScrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(userStore).isLogin) {
              _push2(`<div${ssrRenderAttrs(mergeProps({
                class: "flex flex-wrap px-[20px]",
                "infinite-scroll-distance": "50"
              }, ssrGetDirectiveProps(_ctx, _directive_infinite_scroll, load)))} data-v-84898f5a${_scopeId}><div class="sm:w-[200px] w-full bg-body rounded-[12px] overflow-hidden cursor-pointer mr-[20px] flex-none mb-[20px] flex flex-col items-center justify-center min-h-[150px]" data-v-84898f5a${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "el-icon-Plus",
                size: 24
              }, null, _parent2, _scopeId));
              _push2(`<div class="mt-[10px]" data-v-84898f5a${_scopeId}>\u65B0\u589E\u77E5\u8BC6\u5E93</div></div><!--[-->`);
              ssrRenderList(unref(pageInfo).lists, (item, index) => {
                _push2(`<div class="kb-item sm:w-[200px] w-full bg-body rounded-[12px] overflow-hidden cursor-pointer mr-[20px] flex-none mb-[20px]" data-v-84898f5a${_scopeId}><div class="flex relative" data-v-84898f5a${_scopeId}>`);
                _push2(ssrRenderComponent(_component_el_image, {
                  src: item.image,
                  class: "w-full h-[160px]",
                  fit: "cover"
                }, null, _parent2, _scopeId));
                _push2(`<div class="bg-[rgba(0,0,0,0.4)] text-white absolute px-1 right-[10px] top-[10px] rounded flex items-center" data-v-84898f5a${_scopeId}>`);
                _push2(ssrRenderComponent(_component_icon, { name: "el-icon-User" }, null, _parent2, _scopeId));
                _push2(`<span class="ml-1 text-sm" data-v-84898f5a${_scopeId}>${ssrInterpolate(item.team_people)}</span></div>`);
                if (item.is_super) {
                  _push2(`<div class="kb-btns absolute bottom-0 left-0 w-full flex bg-[rgba(0,0,0,0.4)] py-[6px] text-white" data-v-84898f5a${_scopeId}><div class="flex flex-1 items-center justify-center" data-v-84898f5a${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_icon, { name: "el-icon-Edit" }, null, _parent2, _scopeId));
                  _push2(`<span class="ml-1" data-v-84898f5a${_scopeId}> \u7F16\u8F91 </span></div><div class="flex flex-1 items-center justify-center" data-v-84898f5a${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_icon, { name: "el-icon-Delete" }, null, _parent2, _scopeId));
                  _push2(`<span class="ml-1" data-v-84898f5a${_scopeId}> \u5220\u9664 </span></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="px-[15px] py-[12px]" data-v-84898f5a${_scopeId}><div class="text-[18px] truncate" data-v-84898f5a${_scopeId}>${ssrInterpolate(item.name)}</div><div class="flex items-center mt-[10px]" data-v-84898f5a${_scopeId}><div class="text-info flex-1 min-w-0 truncate" data-v-84898f5a${_scopeId}>${ssrInterpolate(item.intro || "\u8FD9\u4E2A\u77E5\u8BC6\u5E93\u8FD8\u6CA1\u4ECB\u7ECD\u5462\uFF5E")}</div></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!unref(userStore).isLogin) {
              _push2(`<div data-v-84898f5a${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(userStore).isLogin ? withDirectives((openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-wrap px-[20px]",
                "infinite-scroll-distance": "50"
              }, [
                createVNode("div", {
                  class: "sm:w-[200px] w-full bg-body rounded-[12px] overflow-hidden cursor-pointer mr-[20px] flex-none mb-[20px] flex flex-col items-center justify-center min-h-[150px]",
                  onClick: addDatabase
                }, [
                  createVNode(_component_Icon, {
                    name: "el-icon-Plus",
                    size: 24
                  }),
                  createVNode("div", { class: "mt-[10px]" }, "\u65B0\u589E\u77E5\u8BC6\u5E93")
                ]),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(pageInfo).lists, (item, index) => {
                  return openBlock(), createBlock("div", {
                    key: index,
                    class: "kb-item sm:w-[200px] w-full bg-body rounded-[12px] overflow-hidden cursor-pointer mr-[20px] flex-none mb-[20px]",
                    onClick: ($event) => toDetail(item.id, "dataStudy")
                  }, [
                    createVNode("div", { class: "flex relative" }, [
                      createVNode(_component_el_image, {
                        src: item.image,
                        class: "w-full h-[160px]",
                        fit: "cover"
                      }, null, 8, ["src"]),
                      createVNode("div", {
                        class: "bg-[rgba(0,0,0,0.4)] text-white absolute px-1 right-[10px] top-[10px] rounded flex items-center",
                        onClick: withModifiers(($event) => toDetail(item.id, "teamData"), ["stop"])
                      }, [
                        createVNode(_component_icon, { name: "el-icon-User" }),
                        createVNode("span", { class: "ml-1 text-sm" }, toDisplayString(item.team_people), 1)
                      ], 8, ["onClick"]),
                      item.is_super ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "kb-btns absolute bottom-0 left-0 w-full flex bg-[rgba(0,0,0,0.4)] py-[6px] text-white"
                      }, [
                        createVNode("div", {
                          class: "flex flex-1 items-center justify-center",
                          onClick: withModifiers(($event) => editDatabase(item.id), ["stop"])
                        }, [
                          createVNode(_component_icon, { name: "el-icon-Edit" }),
                          createVNode("span", { class: "ml-1" }, " \u7F16\u8F91 ")
                        ], 8, ["onClick"]),
                        createVNode("div", {
                          class: "flex flex-1 items-center justify-center",
                          onClick: withModifiers(($event) => delDatabase(item.id, item.name), ["stop"])
                        }, [
                          createVNode(_component_icon, { name: "el-icon-Delete" }),
                          createVNode("span", { class: "ml-1" }, " \u5220\u9664 ")
                        ], 8, ["onClick"])
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "px-[15px] py-[12px]" }, [
                      createVNode("div", { class: "text-[18px] truncate" }, toDisplayString(item.name), 1),
                      createVNode("div", { class: "flex items-center mt-[10px]" }, [
                        createVNode("div", { class: "text-info flex-1 min-w-0 truncate" }, toDisplayString(item.intro || "\u8FD9\u4E2A\u77E5\u8BC6\u5E93\u8FD8\u6CA1\u4ECB\u7ECD\u5462\uFF5E"), 1)
                      ])
                    ])
                  ], 8, ["onClick"]);
                }), 128))
              ])), [
                [_directive_infinite_scroll, load]
              ]) : createCommentVNode("", true),
              !unref(userStore).isLogin ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode(_sfc_main$1)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (unref(showPop)) {
        _push(ssrRenderComponent(_sfc_main$2, {
          ref_key: "popRef",
          ref: popRef,
          onSuccess: () => {
            showPop.value = false;
            getLists();
          }
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/layout/kb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kb = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-84898f5a"]]);

export { kb as default };
//# sourceMappingURL=kb-iWoqpmou.mjs.map
