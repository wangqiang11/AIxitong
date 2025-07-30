import { E as ElForm, a as ElFormItem } from './index-DLL0sEcv.mjs';
import { A as feedback, E as ElInput, d as ElButton } from './server.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, isRef, createVNode, createTextVNode, useSSRContext } from 'vue';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
import { w as webHtmlCapture } from './my_database-C6D0rbWD.mjs';
import '@vue/shared';
import 'lodash-unified';
import 'async-validator';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "web-page",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formData = useVModel(props, "modelValue", emit);
    const url = ref("");
    const handleDelete = async (item) => {
      await feedback.confirm(`\u786E\u5B9A\u5220\u9664\uFF1A${item.name}\uFF1F`);
      const index = formData.value.indexOf(item);
      if (index !== -1) {
        formData.value.splice(index, 1);
      }
    };
    const { lockFn: parseUrl, isLock } = useLockFn(async () => {
      if (!url.value) return feedback.msgError("\u8BF7\u8F93\u5165\u7F51\u9875\u94FE\u63A5");
      const data = await webHtmlCapture({
        url: url.value.split("\n").filter(Boolean)
      });
      formData.value = [
        ...data.map((item) => ({
          data: [
            {
              a: "",
              q: item.content
            }
          ],
          path: "",
          name: item.url
        })),
        ...formData.value
      ];
      url.value = "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _component_el_input = ElInput;
      const _component_ElButton = ElButton;
      const _component_Icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "web-page" }, _attrs))}><div class="py-4">`);
      _push(ssrRenderComponent(_component_ElForm, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(url),
                    "onUpdate:modelValue": ($event) => isRef(url) ? url.value = $event : null,
                    placeholder: `\u8BF7\u8F93\u5165\u8981\u89E3\u6790\u7684\u7F51\u9875\u94FE\u63A5\uFF0C\u6DFB\u52A0\u591A\u4E2A\u8BF7\u6309\u56DE\u8F66\u952E\u5206\u9694`,
                    type: "textarea",
                    resize: "none",
                    rows: 6
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex-1" }, [
                      createVNode(_component_el_input, {
                        modelValue: unref(url),
                        "onUpdate:modelValue": ($event) => isRef(url) ? url.value = $event : null,
                        placeholder: `\u8BF7\u8F93\u5165\u8981\u89E3\u6790\u7684\u7F51\u9875\u94FE\u63A5\uFF0C\u6DFB\u52A0\u591A\u4E2A\u8BF7\u6309\u56DE\u8F66\u952E\u5206\u9694`,
                        type: "textarea",
                        resize: "none",
                        rows: 6
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElButton, {
                    type: "primary",
                    loading: unref(isLock),
                    onClick: unref(parseUrl)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u89E3\u6790 `);
                      } else {
                        return [
                          createTextVNode(" \u89E3\u6790 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElButton, {
                      type: "primary",
                      loading: unref(isLock),
                      onClick: unref(parseUrl)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u89E3\u6790 ")
                      ]),
                      _: 1
                    }, 8, ["loading", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElFormItem, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex-1" }, [
                    createVNode(_component_el_input, {
                      modelValue: unref(url),
                      "onUpdate:modelValue": ($event) => isRef(url) ? url.value = $event : null,
                      placeholder: `\u8BF7\u8F93\u5165\u8981\u89E3\u6790\u7684\u7F51\u9875\u94FE\u63A5\uFF0C\u6DFB\u52A0\u591A\u4E2A\u8BF7\u6309\u56DE\u8F66\u952E\u5206\u9694`,
                      type: "textarea",
                      resize: "none",
                      rows: 6
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_ElFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    loading: unref(isLock),
                    onClick: unref(parseUrl)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u89E3\u6790 ")
                    ]),
                    _: 1
                  }, 8, ["loading", "onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><!--[-->`);
      ssrRenderList(unref(formData), (item, index) => {
        _push(`<div class="mb-4"><div class="mb-2 text-tx-primary font-medium text-lg"> #${ssrInterpolate(index + 1)} ${ssrInterpolate(item.name)} `);
        _push(ssrRenderComponent(_component_ElButton, {
          link: "",
          type: "primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "el-icon-Delete",
                onClick: ($event) => handleDelete(item)
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "el-icon-Delete",
                  onClick: ($event) => handleDelete(item)
                }, null, 8, ["onClick"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><!--[-->`);
        ssrRenderList(item.data, (data, index2) => {
          _push(ssrRenderComponent(_component_el_input, {
            modelValue: data.q,
            "onUpdate:modelValue": ($event) => data.q = $event,
            placeholder: `\u6587\u4EF6\u5185\u5BB9\uFF0C\u7A7A\u5185\u5BB9\u4F1A\u81EA\u52A8\u7701\u7565`,
            type: "textarea",
            resize: "none",
            rows: 15
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/_components/import/web-page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=web-page-BYRtriXd.mjs.map
