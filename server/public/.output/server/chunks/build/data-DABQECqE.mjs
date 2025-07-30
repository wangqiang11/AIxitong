import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { defineComponent, toRefs, ref, watch, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { u as useAsyncData } from './asyncData-BagoRZi2.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { n as getRobotChatData } from './robot-BsB_E1H2.mjs';
import { get } from 'lodash-es';
import '@vueuse/core';
import './server.mjs';
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
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "data",
  __ssrInlineRender: true,
  props: {
    appId: {}
  },
  setup(__props) {
    const props = __props;
    const { appId } = toRefs(props);
    const dataList = ref([
      {
        title: "\u4ECA\u65E5\u5BF9\u8BDD\u6B21\u6570",
        key: "robot.todayChatCount"
      },
      {
        title: "\u6628\u65E5\u5BF9\u8BDD\u6B21\u6570",
        key: "robot.yesterdayChatCount"
      },
      {
        title: "\u672C\u5468\u5BF9\u8BDD\u6B21\u6570",
        key: "robot.weekChatCount"
      },
      {
        title: "\u5168\u90E8\u5BF9\u8BDD\u6B21\u6570",
        key: "robot.wholeChatCount"
      },
      {
        title: "\u4ECA\u65E5\u8BBF\u95EE\u7528\u6237/\u4EBA",
        key: "visitor.todayVisitorCount"
      },
      {
        title: "\u6628\u65E5\u8BBF\u95EE\u7528\u6237/\u4EBA",
        key: "visitor.yesterdayVisitorCount"
      },
      {
        title: "\u672C\u5468\u8BBF\u95EE\u7528\u6237/\u4EBA",
        key: "visitor.weekVisitorCount"
      },
      {
        title: "\u5168\u90E8\u7528\u6237/\u4EBA",
        key: "visitor.wholeVisitorCount"
      }
    ]);
    const { data, refresh } = useAsyncData(
      () => getRobotChatData({
        robot_id: appId.value
      }),
      {
        default() {
          return {
            robot: {},
            visitor: {}
          };
        },
        lazy: true
      },
      "$cREFFgsltp"
    );
    watch(
      () => props.appId,
      () => {
        refresh();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElScrollbar = ElScrollbar;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-full overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ElScrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap py-[20px] mx-[-10px]"${_scopeId}><!--[-->`);
            ssrRenderList(unref(dataList), (item, index) => {
              _push2(`<div class="md:w-[25%] w-[50%] px-[10px] mb-[20px]"${_scopeId}><div class="bg-[#fafafc] flex flex-col items-center rounded-[10px] p-main border border-solid border-br-light h-full dark:bg-page"${_scopeId}><div class="text-lg"${_scopeId}>${ssrInterpolate(item.title)}</div><div class="text-[30px] mt-[12px]"${_scopeId}>${ssrInterpolate(unref(get)(unref(data), item.key))}</div></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap py-[20px] mx-[-10px]" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(dataList), (item, index) => {
                  return openBlock(), createBlock("div", {
                    class: "md:w-[25%] w-[50%] px-[10px] mb-[20px]",
                    key: item.key
                  }, [
                    createVNode("div", { class: "bg-[#fafafc] flex flex-col items-center rounded-[10px] p-main border border-solid border-br-light h-full dark:bg-page" }, [
                      createVNode("div", { class: "text-lg" }, toDisplayString(item.title), 1),
                      createVNode("div", { class: "text-[30px] mt-[12px]" }, toDisplayString(unref(get)(unref(data), item.key)), 1)
                    ])
                  ]);
                }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-dialogue/data.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=data-DABQECqE.mjs.map
