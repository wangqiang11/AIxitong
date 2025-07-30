import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { a as useRouter, A as feedback, bo as copy, d as ElButton, B as vLoading } from './server.mjs';
import { E as ElTabs, a as ElTabPane } from './el-tab-pane-C7DQ8faq.mjs';
import { E as ElTable, a as ElTableColumn } from './el-table-column-tZnWqVKO.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { _ as _sfc_main$4 } from './index-D60of7Hb.mjs';
import { defineComponent, ref, shallowRef, reactive, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, isRef, openBlock, createBlock, createCommentVNode, withDirectives, useSSRContext, nextTick } from 'vue';
import { u as usePaging } from './usePaging-DU8sXki3.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrGetDirectiveProps } from 'vue/server-renderer';
import { useDark } from '@vueuse/core';
import { f as fansList, e as distributionCenter } from './promotion-sJBBK4gR.mjs';
import Poster from './poster-tSZTZBf8.mjs';
import _sfc_main$1 from './apply-CXBsbW7R.mjs';
import _sfc_main$2 from './income-detail-rOlQLrv4.mjs';
import _sfc_main$3 from './record-BkhBQb3M.mjs';
import WithdrawApply from './apply-BxZl1gZW.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@vue/shared';
import 'vue-router';
import 'lodash-es';
import 'weixin-js-sdk';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './strings-D1uxkXhq.mjs';
import './index-C5I0EtSx.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-53t5ntO1.mjs';
import './index-5Ia44xzE.mjs';
import 'normalize-wheel-es';
import './position-DVxxNIGX.mjs';
import './el-pagination-ClrwtCwT.mjs';
import './index-CUhOTuS-.mjs';
import './index-D7S5lb8a.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-BoqjHllR.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './useCopy-CfS-iChu.mjs';
import './download-N0luyf1S.mjs';
import 'qrcode.vue';
import './nuxt-link-l5zPv3vf.mjs';
import './index-DLL0sEcv.mjs';
import 'async-validator';
import 'dayjs';
import 'dayjs/plugin/customParseFormat.js';
import 'dayjs/plugin/advancedFormat.js';
import 'dayjs/plugin/localeData.js';
import 'dayjs/plugin/weekOfYear.js';
import 'dayjs/plugin/weekYear.js';
import 'dayjs/plugin/dayOfYear.js';
import 'dayjs/plugin/isSameOrAfter.js';
import 'dayjs/plugin/isSameOrBefore.js';
import './index-iSFXrlfY.mjs';
import './detail-DN39nOVW.mjs';
import './index-DtwHx2ze.mjs';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';

const applyBg = "" + buildAssetsURL("distribution_apply_bg.CkYfuHoF.png");
const linkBg = "" + buildAssetsURL("distribution_url_bg.BVazyjv5.png");
const posterBg = "" + buildAssetsURL("distribution_poster_bg.OxyEI-6k.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "distribution",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = useDark();
    useRouter();
    const showApplyPop = ref(false);
    const showIncomeDetailPop = ref(false);
    const showWithdrawApplyPop = ref(false);
    const applyPopRef = shallowRef();
    const incomeDetailPopRef = shallowRef();
    const withdrawRecordPopRef = shallowRef();
    const withdrawApplyPopRef = shallowRef();
    const params = reactive({
      level: ""
      //1-直接用户 2-间接用户
    });
    const { pager, getLists, resetPage, resetParams } = usePaging({
      fetchFun: fansList,
      params
    });
    const centerData = ref();
    const getCenterData = async () => {
      centerData.value = await distributionCenter();
    };
    const openIncomePop = async () => {
      showIncomeDetailPop.value = true;
      await nextTick();
      incomeDetailPopRef.value.open();
    };
    const openApplyPop = async () => {
      var _a;
      if (((_a = centerData.value.apply_detail) == null ? void 0 : _a.status) == 1) {
        feedback.msgWarning("\u6B63\u5728\u5BA1\u6838\u4E2D\uFF01");
        return;
      }
      showApplyPop.value = true;
      await nextTick();
      applyPopRef.value.open();
    };
    const openWithdrawPop = async () => {
      if (centerData.value.withdraw_config.type.length == 0) {
        feedback.alertWarning("\u540E\u53F0\u672A\u8BBE\u7F6E\u63D0\u73B0\u65B9\u5F0F\uFF01");
        return;
      }
      showWithdrawApplyPop.value = true;
      await nextTick();
      withdrawApplyPopRef.value.open();
    };
    const copyLink = () => {
      copy(centerData.value.config.pc_promotion_url);
    };
    const closePop = () => {
      getLists();
      getCenterData();
      showApplyPop.value = false;
      showIncomeDetailPop.value = false;
      showWithdrawApplyPop.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElScrollbar = ElScrollbar;
      const _component_ElButton = ElButton;
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _component_el_image = ElImage;
      const _component_pagination = _sfc_main$4;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-0 h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ElScrollbar, { class: "bg-white dark:bg-body rounded-[12px] p-[20px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na;
          if (_push2) {
            if (((_a = unref(centerData)) == null ? void 0 : _a.is_open) != 1) {
              _push2(`<div class="w-full flex-1"${_scopeId}><div class="text-xl"${_scopeId}>\u63A8\u5E7F\u529F\u80FD\u672A\u5F00\u542F!</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (((_b = unref(centerData)) == null ? void 0 : _b.is_open) == 1) {
              _push2(`<div class="h-full w-full"${_scopeId}>`);
              if (!((_d = (_c = unref(centerData)) == null ? void 0 : _c.user) == null ? void 0 : _d.is_distribution)) {
                _push2(`<div class="grid grid-cols-2 gap-x-[20px]"${_scopeId}><div class="bg-page rounded-[12px] px-[30px] py-[25px]"${_scopeId}><div class="font-medium text-xl"${_scopeId}>\u5206\u9500\u89C4\u5219</div><div class="mt-[23px] flex"${_scopeId}>`);
                if (((_e = unref(centerData)) == null ? void 0 : _e.config.level) >= 1) {
                  _push2(`<div class="flex-1 bg-[#EDF6FE] p-[25px] rounded-[10px]"${_scopeId}><div class="text-xl text-primary"${_scopeId}> \u4E00\u7EA7\u5206\u9500\uFF08\u5206\u4F63${ssrInterpolate((_g = (_f = unref(centerData)) == null ? void 0 : _f.config) == null ? void 0 : _g.first_ratio)}%\uFF09 </div><div class="text-base mt-[12px] text-[#9E9E9E]"${_scopeId}> \u6210\u4E3A\u5206\u9500\u5546\uFF0C\u4E0B\u7EA7\u6D88\u8D39\u60A8\u83B7\u5F97 ${ssrInterpolate((_i = (_h = unref(centerData)) == null ? void 0 : _h.config) == null ? void 0 : _i.first_ratio)}%\u5956\u52B1 </div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (((_j = unref(centerData)) == null ? void 0 : _j.config.level) == 2) {
                  _push2(`<div class="flex-1 bg-[#FFEAD5] p-[25px] rounded-[10px] ml-[20px]"${_scopeId}><div class="text-xl text-[#FF8F1F]"${_scopeId}> \u4E8C\u7EA7\u5206\u9500\uFF08\u5206\u4F63${ssrInterpolate((_l = (_k = unref(centerData)) == null ? void 0 : _k.config) == null ? void 0 : _l.second_ratio)}%\uFF09 </div><div class="text-base mt-[12px] text-[#9E9E9E]"${_scopeId}> \u6210\u4E3A\u5206\u9500\u5546\uFF0C\u4E0B2\u7EA7\u6D88\u8D39\u60A8\u83B7\u5F97 ${ssrInterpolate((_n = (_m = unref(centerData)) == null ? void 0 : _m.config) == null ? void 0 : _n.second_ratio)}%\u5956\u52B1 </div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div><div class="flex flex-col min-h-0 bg-page rounded-[12px] px-[30px] py-[25px]"${_scopeId}><div class="font-medium text-xl"${_scopeId}>\u7533\u8BF7\u5206\u9500</div><div class="flex justify-between items-center h-full mt-[23px] p-[25px] rounded-[10px] bg-cover" style="${ssrRenderStyle({ "background-image": `url(${unref(applyBg)})` })}"${_scopeId}><div class="text-black"${_scopeId}>\u60A8\u5F53\u524D\u8FD8\u4E0D\u662F\u5206\u9500\u5546\uFF0C\u8BF7\u7533\u8BF7\u6210\u4E3A\u5206\u9500\u5546</div>`);
                _push2(ssrRenderComponent(_component_ElButton, {
                  type: "primary",
                  onClick: openApplyPop
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`\u7533\u8BF7\u6210\u4E3A\u5206\u9500\u5546`);
                    } else {
                      return [
                        createTextVNode("\u7533\u8BF7\u6210\u4E3A\u5206\u9500\u5546")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              } else {
                _push2(`<div${_scopeId}><div class="grid grid-cols-2 xl:grid-cols-4 gap-x-[20px] gap-y-[20px]"${_scopeId}><div class="bg-page rounded-[12px] px-[30px] py-[25px]"${_scopeId}><div class="font-medium text-xl pt-[20px] pb-[15px]"${_scopeId}>\u53EF\u63D0\u73B0\u4F59\u989D\uFF08\u5143\uFF09</div><div class="flex justify-between items-center"${_scopeId}><div class="text-primary text-[30px] font-medium"${_scopeId}>${ssrInterpolate((_p = (_o = unref(centerData)) == null ? void 0 : _o.user) == null ? void 0 : _p.user_money)}</div>`);
                _push2(ssrRenderComponent(_component_ElButton, {
                  type: "primary",
                  class: "!border-none",
                  style: { "--el-button-bg-color": "#4A92FF" },
                  onClick: openWithdrawPop
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u53BB\u63D0\u73B0 `);
                    } else {
                      return [
                        createTextVNode(" \u53BB\u63D0\u73B0 ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div><div class="bg-page rounded-[12px] px-[30px] py-[25px]"${_scopeId}><div class="font-medium text-xl pt-[20px] pb-[15px]"${_scopeId}>\u4ECA\u65E5\u6536\u76CA\uFF08\u5143\uFF09</div><div class="flex justify-between items-center"${_scopeId}><div class="text-primary text-[30px] font-medium"${_scopeId}>${ssrInterpolate((_r = (_q = unref(centerData)) == null ? void 0 : _q.user) == null ? void 0 : _r.today_money)}</div></div></div><div class="bg-page rounded-[12px] px-[30px] py-[25px]"${_scopeId}><div class="font-medium text-xl pt-[20px] pb-[15px]"${_scopeId}>\u5DF2\u63D0\u73B0\uFF08\u5143\uFF09</div><div class="flex justify-between items-center"${_scopeId}><div class="text-primary text-[30px] font-medium"${_scopeId}>${ssrInterpolate((_t = (_s = unref(centerData)) == null ? void 0 : _s.user) == null ? void 0 : _t.withdrawn_money)}</div>`);
                _push2(ssrRenderComponent(_component_ElButton, {
                  type: "warning",
                  class: "!border-none",
                  style: { "--el-button-bg-color": "#FFA64C" },
                  onClick: ($event) => unref(withdrawRecordPopRef).open()
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u63D0\u73B0\u8BB0\u5F55 `);
                    } else {
                      return [
                        createTextVNode(" \u63D0\u73B0\u8BB0\u5F55 ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div><div class="bg-page rounded-[12px] px-[30px] py-[25px]"${_scopeId}><div class="font-medium text-xl pt-[20px] pb-[15px]"${_scopeId}>\u7D2F\u8BA1\u6536\u76CA\uFF08\u5143\uFF09</div><div class="flex justify-between items-center"${_scopeId}><div class="text-primary text-[30px] font-medium"${_scopeId}>${ssrInterpolate((_v = (_u = unref(centerData)) == null ? void 0 : _u.user) == null ? void 0 : _v.total_user_money)}</div>`);
                _push2(ssrRenderComponent(_component_ElButton, {
                  type: "warning",
                  class: "!border-none",
                  style: { "--el-button-bg-color": "#F5BE0A" },
                  onClick: openIncomePop
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u6536\u76CA\u660E\u7EC6 `);
                    } else {
                      return [
                        createTextVNode(" \u6536\u76CA\u660E\u7EC6 ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div></div><div class="grid grid-cols-2 gap-x-[20px] mt-4"${_scopeId}><div class="w-full bg-page rounded-[12px] px-[30px] py-[25px]"${_scopeId}><div class="font-medium text-xl"${_scopeId}>\u5206\u9500\u89C4\u5219</div><div class="mt-[23px] flex"${_scopeId}>`);
                if (((_w = unref(centerData)) == null ? void 0 : _w.config.level) >= 1) {
                  _push2(`<div class="flex-1 bg-[#EDF6FE] p-[25px] rounded-[10px]"${_scopeId}><div class="text-xl text-primary"${_scopeId}> \u4E00\u7EA7\u5206\u9500\uFF08\u5206\u4F63${ssrInterpolate((_y = (_x = unref(centerData)) == null ? void 0 : _x.config) == null ? void 0 : _y.first_ratio)}%\uFF09 </div><div class="text-base mt-[12px] text-[#9E9E9E]"${_scopeId}> \u6210\u4E3A\u5206\u9500\u5546\uFF0C\u4E0B\u7EA7\u6D88\u8D39\u60A8\u83B7\u5F97 ${ssrInterpolate((_A = (_z = unref(centerData)) == null ? void 0 : _z.config) == null ? void 0 : _A.first_ratio)}%\u5956\u52B1 </div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (((_B = unref(centerData)) == null ? void 0 : _B.config.level) == 2) {
                  _push2(`<div class="flex-1 bg-[#FFEAD5] p-[25px] rounded-[10px] ml-[20px]"${_scopeId}><div class="text-xl text-[#FF8F1F]"${_scopeId}> \u4E8C\u7EA7\u5206\u9500\uFF08\u5206\u4F63${ssrInterpolate((_D = (_C = unref(centerData)) == null ? void 0 : _C.config) == null ? void 0 : _D.second_ratio)}%\uFF09 </div><div class="text-base mt-[12px] text-[#9E9E9E]"${_scopeId}> \u6210\u4E3A\u5206\u9500\u5546\uFF0C\u4E0B2\u7EA7\u6D88\u8D39\u60A8\u83B7\u5F97 ${ssrInterpolate((_F = (_E = unref(centerData)) == null ? void 0 : _E.config) == null ? void 0 : _F.second_ratio)}%\u5956\u52B1 </div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div><div class="flex flex-col min-h-0 w-full bg-page rounded-[12px] px-[30px] py-[25px]"${_scopeId}><div class="font-medium text-xl"${_scopeId}>\u63A8\u5E7F\u65B9\u5F0F</div><div class="grid grid-cols-2 gap-x-[20px] h-full"${_scopeId}><div class="flex flex-col mt-[23px] p-[25px] rounded-[10px] bg-cover relative" style="${ssrRenderStyle({ "background-image": `url(${unref(linkBg)})` })}"${_scopeId}><div class="text-xl text-[#333333]"${_scopeId}>\u9080\u8BF7\u94FE\u63A5</div><div class="line-clamp-2 text-[#9E9E9E] mt-[12px]" style="${ssrRenderStyle({ "word-break": "break-all" })}"${_scopeId}>${ssrInterpolate((_H = (_G = unref(centerData)) == null ? void 0 : _G.config) == null ? void 0 : _H.pc_promotion_url)}</div><div class="absolute top-[15px] right-[15px]"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_ElButton, {
                  type: "primary",
                  size: "small",
                  class: "!border-none",
                  style: { "--el-button-bg-color": "#4A92FF" },
                  onClick: copyLink
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u590D\u5236 `);
                    } else {
                      return [
                        createTextVNode(" \u590D\u5236 ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div><div class="flex flex-col mt-[23px] p-[25px] rounded-[10px] bg-cover relative" style="${ssrRenderStyle({ "background-image": `url(${unref(posterBg)})` })}"${_scopeId}><div class="text-xl text-[#333333]"${_scopeId}>\u5206\u4EAB\u6D77\u62A5</div><div class="text-[#9E9E9E] mt-[12px]"${_scopeId}> \u626B\u63CF\u4E8C\u7EF4\u7801\uFF0C\u4E00\u8D77\u52A0\u5165\u5427\uFF01 </div><div class="absolute top-[15px] right-[15px]"${_scopeId}>`);
                _push2(ssrRenderComponent(Poster, { class: "inline-block" }, {
                  trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_ElButton, {
                        type: "primary",
                        size: "small",
                        class: "!border-none",
                        style: { "--el-button-bg-color": "#4A92FF" }
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u5206\u4EAB `);
                          } else {
                            return [
                              createTextVNode(" \u5206\u4EAB ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_ElButton, {
                          type: "primary",
                          size: "small",
                          class: "!border-none",
                          style: { "--el-button-bg-color": "#4A92FF" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u5206\u4EAB ")
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div></div></div></div><div class="bg-page rounded-[12px] px-[30px] py-[25px] mt-4"${_scopeId}><div class="font-medium text-xl"${_scopeId}> \u9080\u8BF7\u5217\u8868 </div>`);
                _push2(ssrRenderComponent(_component_el_tabs, {
                  modelValue: unref(params).level,
                  "onUpdate:modelValue": ($event) => unref(params).level = $event,
                  class: "mt-2",
                  onTabChange: unref(getLists)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_el_tab_pane, {
                        label: `\u5168\u90E8(${unref(pager).extend.all})`,
                        name: ""
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_el_tab_pane, {
                        label: `\u76F4\u63A5\u7528\u6237(${unref(pager).extend.first})`,
                        name: 1
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_el_tab_pane, {
                        label: `\u95F4\u63A5\u7528\u6237(${unref(pager).extend.second})`,
                        name: 2
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_el_tab_pane, {
                          label: `\u5168\u90E8(${unref(pager).extend.all})`,
                          name: ""
                        }, null, 8, ["label"]),
                        createVNode(_component_el_tab_pane, {
                          label: `\u76F4\u63A5\u7528\u6237(${unref(pager).extend.first})`,
                          name: 1
                        }, null, 8, ["label"]),
                        createVNode(_component_el_tab_pane, {
                          label: `\u95F4\u63A5\u7528\u6237(${unref(pager).extend.second})`,
                          name: 2
                        }, null, 8, ["label"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<div class="w-full mt-1 bg-white dark:bg-page pb-[20px]"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_el_table, mergeProps({
                  size: "large",
                  data: unref(pager).lists,
                  style: {
                    "--el-table-header-bg-color": unref(isDark) ? "#000" : "#EFEFEF"
                  }
                }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(pager).loading)), {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_el_table_column, { label: "\u7528\u6237\u6635\u79F0" }, {
                        default: withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="flex items-center"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_el_image, {
                              class: "w-[48px] h-[48px]",
                              src: row.avatar
                            }, null, _parent4, _scopeId3));
                            _push4(`<div class="ml-2"${_scopeId3}>${ssrInterpolate(row.nickname)}</div></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(_component_el_image, {
                                  class: "w-[48px] h-[48px]",
                                  src: row.avatar
                                }, null, 8, ["src"]),
                                createVNode("div", { class: "ml-2" }, toDisplayString(row.nickname), 1)
                              ])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_el_table_column, {
                        label: "\u8BA2\u5355\u91CF",
                        prop: "order_num"
                      }, {
                        default: withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(row.order_num ? row.order_num : "0")}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(row.order_num ? row.order_num : "0"), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_el_table_column, {
                        label: "\u7D2F\u8BA1\u6D88\u8D39",
                        prop: "total_amount"
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_el_table_column, {
                        label: "\u9080\u8BF7\u4EBA\u6570",
                        prop: "invite_num"
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_el_table_column, {
                        label: "\u5206\u9500\u8D44\u683C",
                        prop: "is_distribution_desc"
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_el_table_column, {
                        label: "\u6CE8\u518C\u65F6\u95F4",
                        prop: "create_time"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_el_table_column, { label: "\u7528\u6237\u6635\u79F0" }, {
                          default: withCtx(({ row }) => [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_el_image, {
                                class: "w-[48px] h-[48px]",
                                src: row.avatar
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "ml-2" }, toDisplayString(row.nickname), 1)
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_table_column, {
                          label: "\u8BA2\u5355\u91CF",
                          prop: "order_num"
                        }, {
                          default: withCtx(({ row }) => [
                            createTextVNode(toDisplayString(row.order_num ? row.order_num : "0"), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_table_column, {
                          label: "\u7D2F\u8BA1\u6D88\u8D39",
                          prop: "total_amount"
                        }),
                        createVNode(_component_el_table_column, {
                          label: "\u9080\u8BF7\u4EBA\u6570",
                          prop: "invite_num"
                        }),
                        createVNode(_component_el_table_column, {
                          label: "\u5206\u9500\u8D44\u683C",
                          prop: "is_distribution_desc"
                        }),
                        createVNode(_component_el_table_column, {
                          label: "\u6CE8\u518C\u65F6\u95F4",
                          prop: "create_time"
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<div class="flex justify-end mt-5 mr-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_pagination, {
                  modelValue: unref(pager),
                  "onUpdate:modelValue": ($event) => isRef(pager) ? pager.value = $event : null,
                  onChange: unref(getLists)
                }, null, _parent2, _scopeId));
                _push2(`</div></div></div></div>`);
              }
              if (unref(showApplyPop)) {
                _push2(ssrRenderComponent(_sfc_main$1, {
                  ref_key: "applyPopRef",
                  ref: applyPopRef,
                  onClosePop: closePop
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (unref(showWithdrawApplyPop)) {
                _push2(ssrRenderComponent(WithdrawApply, {
                  ref_key: "withdrawApplyPopRef",
                  ref: withdrawApplyPopRef,
                  onClosePop: closePop
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (unref(showIncomeDetailPop)) {
                _push2(ssrRenderComponent(_sfc_main$2, {
                  ref_key: "incomeDetailPopRef",
                  ref: incomeDetailPopRef,
                  onClosePop: closePop
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_sfc_main$3, {
                ref_key: "withdrawRecordPopRef",
                ref: withdrawRecordPopRef
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              ((_I = unref(centerData)) == null ? void 0 : _I.is_open) != 1 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "w-full flex-1"
              }, [
                createVNode("div", { class: "text-xl" }, "\u63A8\u5E7F\u529F\u80FD\u672A\u5F00\u542F!")
              ])) : createCommentVNode("", true),
              ((_J = unref(centerData)) == null ? void 0 : _J.is_open) == 1 ? (openBlock(), createBlock("div", {
                key: 1,
                class: "h-full w-full"
              }, [
                !((_L = (_K = unref(centerData)) == null ? void 0 : _K.user) == null ? void 0 : _L.is_distribution) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid grid-cols-2 gap-x-[20px]"
                }, [
                  createVNode("div", { class: "bg-page rounded-[12px] px-[30px] py-[25px]" }, [
                    createVNode("div", { class: "font-medium text-xl" }, "\u5206\u9500\u89C4\u5219"),
                    createVNode("div", { class: "mt-[23px] flex" }, [
                      ((_M = unref(centerData)) == null ? void 0 : _M.config.level) >= 1 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex-1 bg-[#EDF6FE] p-[25px] rounded-[10px]"
                      }, [
                        createVNode("div", { class: "text-xl text-primary" }, " \u4E00\u7EA7\u5206\u9500\uFF08\u5206\u4F63" + toDisplayString((_O = (_N = unref(centerData)) == null ? void 0 : _N.config) == null ? void 0 : _O.first_ratio) + "%\uFF09 ", 1),
                        createVNode("div", { class: "text-base mt-[12px] text-[#9E9E9E]" }, " \u6210\u4E3A\u5206\u9500\u5546\uFF0C\u4E0B\u7EA7\u6D88\u8D39\u60A8\u83B7\u5F97 " + toDisplayString((_Q = (_P = unref(centerData)) == null ? void 0 : _P.config) == null ? void 0 : _Q.first_ratio) + "%\u5956\u52B1 ", 1)
                      ])) : createCommentVNode("", true),
                      ((_R = unref(centerData)) == null ? void 0 : _R.config.level) == 2 ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "flex-1 bg-[#FFEAD5] p-[25px] rounded-[10px] ml-[20px]"
                      }, [
                        createVNode("div", { class: "text-xl text-[#FF8F1F]" }, " \u4E8C\u7EA7\u5206\u9500\uFF08\u5206\u4F63" + toDisplayString((_T = (_S = unref(centerData)) == null ? void 0 : _S.config) == null ? void 0 : _T.second_ratio) + "%\uFF09 ", 1),
                        createVNode("div", { class: "text-base mt-[12px] text-[#9E9E9E]" }, " \u6210\u4E3A\u5206\u9500\u5546\uFF0C\u4E0B2\u7EA7\u6D88\u8D39\u60A8\u83B7\u5F97 " + toDisplayString((_V = (_U = unref(centerData)) == null ? void 0 : _U.config) == null ? void 0 : _V.second_ratio) + "%\u5956\u52B1 ", 1)
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col min-h-0 bg-page rounded-[12px] px-[30px] py-[25px]" }, [
                    createVNode("div", { class: "font-medium text-xl" }, "\u7533\u8BF7\u5206\u9500"),
                    createVNode("div", {
                      class: "flex justify-between items-center h-full mt-[23px] p-[25px] rounded-[10px] bg-cover",
                      style: { "background-image": `url(${unref(applyBg)})` }
                    }, [
                      createVNode("div", { class: "text-black" }, "\u60A8\u5F53\u524D\u8FD8\u4E0D\u662F\u5206\u9500\u5546\uFF0C\u8BF7\u7533\u8BF7\u6210\u4E3A\u5206\u9500\u5546"),
                      createVNode(_component_ElButton, {
                        type: "primary",
                        onClick: openApplyPop
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u7533\u8BF7\u6210\u4E3A\u5206\u9500\u5546")
                        ]),
                        _: 1
                      })
                    ], 4)
                  ])
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("div", { class: "grid grid-cols-2 xl:grid-cols-4 gap-x-[20px] gap-y-[20px]" }, [
                    createVNode("div", { class: "bg-page rounded-[12px] px-[30px] py-[25px]" }, [
                      createVNode("div", { class: "font-medium text-xl pt-[20px] pb-[15px]" }, "\u53EF\u63D0\u73B0\u4F59\u989D\uFF08\u5143\uFF09"),
                      createVNode("div", { class: "flex justify-between items-center" }, [
                        createVNode("div", { class: "text-primary text-[30px] font-medium" }, toDisplayString((_X = (_W = unref(centerData)) == null ? void 0 : _W.user) == null ? void 0 : _X.user_money), 1),
                        createVNode(_component_ElButton, {
                          type: "primary",
                          class: "!border-none",
                          style: { "--el-button-bg-color": "#4A92FF" },
                          onClick: openWithdrawPop
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u53BB\u63D0\u73B0 ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "bg-page rounded-[12px] px-[30px] py-[25px]" }, [
                      createVNode("div", { class: "font-medium text-xl pt-[20px] pb-[15px]" }, "\u4ECA\u65E5\u6536\u76CA\uFF08\u5143\uFF09"),
                      createVNode("div", { class: "flex justify-between items-center" }, [
                        createVNode("div", { class: "text-primary text-[30px] font-medium" }, toDisplayString((_Z = (_Y = unref(centerData)) == null ? void 0 : _Y.user) == null ? void 0 : _Z.today_money), 1)
                      ])
                    ]),
                    createVNode("div", { class: "bg-page rounded-[12px] px-[30px] py-[25px]" }, [
                      createVNode("div", { class: "font-medium text-xl pt-[20px] pb-[15px]" }, "\u5DF2\u63D0\u73B0\uFF08\u5143\uFF09"),
                      createVNode("div", { class: "flex justify-between items-center" }, [
                        createVNode("div", { class: "text-primary text-[30px] font-medium" }, toDisplayString((_$ = (__ = unref(centerData)) == null ? void 0 : __.user) == null ? void 0 : _$.withdrawn_money), 1),
                        createVNode(_component_ElButton, {
                          type: "warning",
                          class: "!border-none",
                          style: { "--el-button-bg-color": "#FFA64C" },
                          onClick: ($event) => unref(withdrawRecordPopRef).open()
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u63D0\u73B0\u8BB0\u5F55 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ]),
                    createVNode("div", { class: "bg-page rounded-[12px] px-[30px] py-[25px]" }, [
                      createVNode("div", { class: "font-medium text-xl pt-[20px] pb-[15px]" }, "\u7D2F\u8BA1\u6536\u76CA\uFF08\u5143\uFF09"),
                      createVNode("div", { class: "flex justify-between items-center" }, [
                        createVNode("div", { class: "text-primary text-[30px] font-medium" }, toDisplayString((_ba = (_aa = unref(centerData)) == null ? void 0 : _aa.user) == null ? void 0 : _ba.total_user_money), 1),
                        createVNode(_component_ElButton, {
                          type: "warning",
                          class: "!border-none",
                          style: { "--el-button-bg-color": "#F5BE0A" },
                          onClick: openIncomePop
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u6536\u76CA\u660E\u7EC6 ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "grid grid-cols-2 gap-x-[20px] mt-4" }, [
                    createVNode("div", { class: "w-full bg-page rounded-[12px] px-[30px] py-[25px]" }, [
                      createVNode("div", { class: "font-medium text-xl" }, "\u5206\u9500\u89C4\u5219"),
                      createVNode("div", { class: "mt-[23px] flex" }, [
                        ((_ca = unref(centerData)) == null ? void 0 : _ca.config.level) >= 1 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex-1 bg-[#EDF6FE] p-[25px] rounded-[10px]"
                        }, [
                          createVNode("div", { class: "text-xl text-primary" }, " \u4E00\u7EA7\u5206\u9500\uFF08\u5206\u4F63" + toDisplayString((_ea = (_da = unref(centerData)) == null ? void 0 : _da.config) == null ? void 0 : _ea.first_ratio) + "%\uFF09 ", 1),
                          createVNode("div", { class: "text-base mt-[12px] text-[#9E9E9E]" }, " \u6210\u4E3A\u5206\u9500\u5546\uFF0C\u4E0B\u7EA7\u6D88\u8D39\u60A8\u83B7\u5F97 " + toDisplayString((_ga = (_fa = unref(centerData)) == null ? void 0 : _fa.config) == null ? void 0 : _ga.first_ratio) + "%\u5956\u52B1 ", 1)
                        ])) : createCommentVNode("", true),
                        ((_ha = unref(centerData)) == null ? void 0 : _ha.config.level) == 2 ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "flex-1 bg-[#FFEAD5] p-[25px] rounded-[10px] ml-[20px]"
                        }, [
                          createVNode("div", { class: "text-xl text-[#FF8F1F]" }, " \u4E8C\u7EA7\u5206\u9500\uFF08\u5206\u4F63" + toDisplayString((_ja = (_ia = unref(centerData)) == null ? void 0 : _ia.config) == null ? void 0 : _ja.second_ratio) + "%\uFF09 ", 1),
                          createVNode("div", { class: "text-base mt-[12px] text-[#9E9E9E]" }, " \u6210\u4E3A\u5206\u9500\u5546\uFF0C\u4E0B2\u7EA7\u6D88\u8D39\u60A8\u83B7\u5F97 " + toDisplayString((_la = (_ka = unref(centerData)) == null ? void 0 : _ka.config) == null ? void 0 : _la.second_ratio) + "%\u5956\u52B1 ", 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col min-h-0 w-full bg-page rounded-[12px] px-[30px] py-[25px]" }, [
                      createVNode("div", { class: "font-medium text-xl" }, "\u63A8\u5E7F\u65B9\u5F0F"),
                      createVNode("div", { class: "grid grid-cols-2 gap-x-[20px] h-full" }, [
                        createVNode("div", {
                          class: "flex flex-col mt-[23px] p-[25px] rounded-[10px] bg-cover relative",
                          style: { "background-image": `url(${unref(linkBg)})` }
                        }, [
                          createVNode("div", { class: "text-xl text-[#333333]" }, "\u9080\u8BF7\u94FE\u63A5"),
                          createVNode("div", {
                            class: "line-clamp-2 text-[#9E9E9E] mt-[12px]",
                            style: { "word-break": "break-all" }
                          }, toDisplayString((_na = (_ma = unref(centerData)) == null ? void 0 : _ma.config) == null ? void 0 : _na.pc_promotion_url), 1),
                          createVNode("div", { class: "absolute top-[15px] right-[15px]" }, [
                            createVNode(_component_ElButton, {
                              type: "primary",
                              size: "small",
                              class: "!border-none",
                              style: { "--el-button-bg-color": "#4A92FF" },
                              onClick: copyLink
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u590D\u5236 ")
                              ]),
                              _: 1
                            })
                          ])
                        ], 4),
                        createVNode("div", {
                          class: "flex flex-col mt-[23px] p-[25px] rounded-[10px] bg-cover relative",
                          style: { "background-image": `url(${unref(posterBg)})` }
                        }, [
                          createVNode("div", { class: "text-xl text-[#333333]" }, "\u5206\u4EAB\u6D77\u62A5"),
                          createVNode("div", { class: "text-[#9E9E9E] mt-[12px]" }, " \u626B\u63CF\u4E8C\u7EF4\u7801\uFF0C\u4E00\u8D77\u52A0\u5165\u5427\uFF01 "),
                          createVNode("div", { class: "absolute top-[15px] right-[15px]" }, [
                            createVNode(Poster, { class: "inline-block" }, {
                              trigger: withCtx(() => [
                                createVNode(_component_ElButton, {
                                  type: "primary",
                                  size: "small",
                                  class: "!border-none",
                                  style: { "--el-button-bg-color": "#4A92FF" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u5206\u4EAB ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ], 4)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "bg-page rounded-[12px] px-[30px] py-[25px] mt-4" }, [
                    createVNode("div", { class: "font-medium text-xl" }, " \u9080\u8BF7\u5217\u8868 "),
                    createVNode(_component_el_tabs, {
                      modelValue: unref(params).level,
                      "onUpdate:modelValue": ($event) => unref(params).level = $event,
                      class: "mt-2",
                      onTabChange: unref(getLists)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_tab_pane, {
                          label: `\u5168\u90E8(${unref(pager).extend.all})`,
                          name: ""
                        }, null, 8, ["label"]),
                        createVNode(_component_el_tab_pane, {
                          label: `\u76F4\u63A5\u7528\u6237(${unref(pager).extend.first})`,
                          name: 1
                        }, null, 8, ["label"]),
                        createVNode(_component_el_tab_pane, {
                          label: `\u95F4\u63A5\u7528\u6237(${unref(pager).extend.second})`,
                          name: 2
                        }, null, 8, ["label"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "onTabChange"]),
                    createVNode("div", { class: "w-full mt-1 bg-white dark:bg-page pb-[20px]" }, [
                      withDirectives((openBlock(), createBlock(_component_el_table, {
                        size: "large",
                        data: unref(pager).lists,
                        style: {
                          "--el-table-header-bg-color": unref(isDark) ? "#000" : "#EFEFEF"
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_table_column, { label: "\u7528\u6237\u6635\u79F0" }, {
                            default: withCtx(({ row }) => [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(_component_el_image, {
                                  class: "w-[48px] h-[48px]",
                                  src: row.avatar
                                }, null, 8, ["src"]),
                                createVNode("div", { class: "ml-2" }, toDisplayString(row.nickname), 1)
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_table_column, {
                            label: "\u8BA2\u5355\u91CF",
                            prop: "order_num"
                          }, {
                            default: withCtx(({ row }) => [
                              createTextVNode(toDisplayString(row.order_num ? row.order_num : "0"), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_table_column, {
                            label: "\u7D2F\u8BA1\u6D88\u8D39",
                            prop: "total_amount"
                          }),
                          createVNode(_component_el_table_column, {
                            label: "\u9080\u8BF7\u4EBA\u6570",
                            prop: "invite_num"
                          }),
                          createVNode(_component_el_table_column, {
                            label: "\u5206\u9500\u8D44\u683C",
                            prop: "is_distribution_desc"
                          }),
                          createVNode(_component_el_table_column, {
                            label: "\u6CE8\u518C\u65F6\u95F4",
                            prop: "create_time"
                          })
                        ]),
                        _: 1
                      }, 8, ["data", "style"])), [
                        [_directive_loading, unref(pager).loading]
                      ]),
                      createVNode("div", { class: "flex justify-end mt-5 mr-4" }, [
                        createVNode(_component_pagination, {
                          modelValue: unref(pager),
                          "onUpdate:modelValue": ($event) => isRef(pager) ? pager.value = $event : null,
                          onChange: unref(getLists)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                      ])
                    ])
                  ])
                ])),
                unref(showApplyPop) ? (openBlock(), createBlock(_sfc_main$1, {
                  key: 2,
                  ref_key: "applyPopRef",
                  ref: applyPopRef,
                  onClosePop: closePop
                }, null, 512)) : createCommentVNode("", true),
                unref(showWithdrawApplyPop) ? (openBlock(), createBlock(WithdrawApply, {
                  key: 3,
                  ref_key: "withdrawApplyPopRef",
                  ref: withdrawApplyPopRef,
                  onClosePop: closePop
                }, null, 512)) : createCommentVNode("", true),
                unref(showIncomeDetailPop) ? (openBlock(), createBlock(_sfc_main$2, {
                  key: 4,
                  ref_key: "incomeDetailPopRef",
                  ref: incomeDetailPopRef,
                  onClosePop: closePop
                }, null, 512)) : createCommentVNode("", true),
                createVNode(_sfc_main$3, {
                  ref_key: "withdrawRecordPopRef",
                  ref: withdrawRecordPopRef
                }, null, 512)
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index/promotion/distribution.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=distribution-DZ_bH2-W.mjs.map
