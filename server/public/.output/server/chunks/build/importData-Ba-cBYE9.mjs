import { _ as _sfc_main$3 } from './index-BoqjHllR.mjs';
import { useSSRContext, defineComponent, mergeProps, ref, computed, reactive, unref, createVNode, resolveDynamicComponent, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { a5 as useAppStore, d as ElButton } from './server.mjs';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ImportTypeEnum } from './hook-1nkmW8DG.mjs';
import Cvs from './cvs-C_N0Vrqd.mjs';
import Doc from './doc-CFxCD4qQ.mjs';
import QASplit from './QASplit-BEI1cWI8.mjs';
import _sfc_main$2 from './web-page-BYRtriXd.mjs';
import { g as fileDataimport } from './my_database-C6D0rbWD.mjs';
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
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import './index-0xCxAaTZ.mjs';
import './fileReader-CRBF4dkT.mjs';
import 'mammoth';
import 'pdfjs-dist/build/pdf.js';
import 'papaparse';
import 'xlsx';
import 'turndown';
import 'joplin-turndown-plugin-gfm';
import './cvs-data-item-N7r8ecjG.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './textSplitter-DLWtBQu6.mjs';
import './data-item-CQ7fNu3a.mjs';
import './index-DLL0sEcv.mjs';
import 'async-validator';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    fixed: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-btns" }, _attrs))} data-v-4b8d4336><div class="footer-btns__content" style="${ssrRenderStyle(__props.fixed ? "position: fixed" : "")}" data-v-4b8d4336>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer-btns/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4b8d4336"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "importData",
  __ssrInlineRender: true,
  props: {
    id: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: ""
    }
  },
  emits: ["success", "back"],
  setup(__props, { emit: __emit }) {
    const appStore = useAppStore();
    const emits = __emit;
    const props = __props;
    const isSelectType = ref(0);
    const docData = ref([]);
    const cvsData = ref([]);
    const QASplitData = ref([]);
    const webData = ref([]);
    const tabList = computed(() => {
      const list = reactive([
        // {
        //   name: '手动输入',
        //   type: ImportTypeEnum.MANUAL,
        //   component: ManualDoc,
        //   describe: '手动输入内容，是最精准的数据',
        //   show: Number(props.type) === 1,
        //   data: manualDocData
        // },
        // {
        //   name: '手动输入',
        //   type: ImportTypeEnum.MANUAL,
        //   describe: '手动输入问答对，是最精准的数据',
        //   component: Manual,
        //   show: Number(props.type) === 2,
        //   data: manualData
        // },
        {
          name: "\u6587\u6863\u5BFC\u5165",
          type: ImportTypeEnum.DOC,
          describe: "\u9009\u62E9\u6587\u672C\u6587\u4EF6\uFF0C\u76F4\u63A5\u5C06\u5176\u6309\u5206\u6BB5\u8FDB\u884C\u5904\u7406",
          component: Doc,
          //   show: Number(props.type) === 1,
          show: true,
          data: docData
        },
        {
          name: "\u95EE\u7B54\u5BF9\u5BFC\u5165",
          type: ImportTypeEnum.CVS,
          describe: "\u6279\u91CF\u5BFC\u5165\u95EE\u7B54\u5BF9\uFF0C\u6548\u679C\u6700\u4F73",
          component: Cvs,
          //   show: Number(props.type) === 2,
          show: true,
          data: cvsData
        },
        {
          name: "\u81EA\u52A8\u62C6\u5206\u95EE\u7B54\u5BF9",
          type: ImportTypeEnum.QASplit,
          describe: "\u9009\u62E9\u6587\u672C\u6587\u4EF6\uFF0C\u8BA9\u5927\u6A21\u578B\u81EA\u52A8\u751F\u6210\u95EE\u7B54\u5BF9",
          component: QASplit,
          //   show: Number(props.type) === 2,
          show: true,
          data: QASplitData
        },
        {
          name: "\u7F51\u9875\u89E3\u6790",
          type: ImportTypeEnum.WEB_PAGE,
          describe: "\u8F93\u5165\u7F51\u9875\u94FE\u63A5\uFF0C\u5FEB\u901F\u5BFC\u5165\u5185\u5BB9",
          component: _sfc_main$2,
          //   show: Number(props.type) === 1,
          show: true,
          data: webData
        }
      ]);
      return list.filter(({ show }) => show);
    });
    const { lockFn: handleSubmit } = useLockFn(async () => {
      const selectTab = tabList.value.find(
        ({ type: type2 }) => type2 === isSelectType.value
      );
      console.log(selectTab == null ? void 0 : selectTab.data);
      const { data, type } = selectTab;
      const params = {
        kb_id: props.id,
        method: type,
        documents: data
      };
      await fileDataimport({ ...params });
      toBack();
    });
    const toBack = () => {
      emits("back");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$3;
      const _component_FooterBtns = __nuxt_component_1;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col relative" }, _attrs))} data-v-0ebde116><div class="pb-[20px] flex items-center font-bold cursor-pointer" data-v-0ebde116><div class="flex items-center" data-v-0ebde116>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "el-icon-Back",
        size: "16"
      }, null, _parent));
      _push(`<span class="ml-2" data-v-0ebde116>\u6587\u4EF6\u5BFC\u5165</span></div></div><div class="flex" data-v-0ebde116><!--[-->`);
      ssrRenderList(unref(tabList), (item, index) => {
        _push(`<div class="${ssrRenderClass([{ isselect: item.type == unref(isSelectType) }, "unselect w-[290px] p-[16px] text-center rounded-md cursor-pointer mr-4"])}" data-v-0ebde116><div data-v-0ebde116>${ssrInterpolate(item.name)}</div><div class="text-info text-[14px]" data-v-0ebde116>${ssrInterpolate(item.describe)}</div></div>`);
      });
      _push(`<!--]--></div><div class="flex-1" data-v-0ebde116><!--[-->`);
      ssrRenderList(unref(tabList), (item, index) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.component), {
          style: item.type == unref(isSelectType) ? null : { display: "none" },
          modelValue: item.data,
          "onUpdate:modelValue": ($event) => item.data = $event,
          type: props.type
        }, null), _parent);
      });
      _push(`<!--]--></div>`);
      if (unref(tabList).length > 0) {
        _push(`<div data-v-0ebde116>`);
        _push(ssrRenderComponent(_component_FooterBtns, {
          fixed: !unref(appStore).isMobile
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_button, {
                type: "primary",
                onClick: unref(handleSubmit)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u4FDD\u5B58 `);
                  } else {
                    return [
                      createTextVNode(" \u4FDD\u5B58 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_el_button, {
                  type: "primary",
                  onClick: unref(handleSubmit)
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u4FDD\u5B58 ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/_components/study_com/importData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const importData = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0ebde116"]]);

export { importData as default };
//# sourceMappingURL=importData-Ba-cBYE9.mjs.map
