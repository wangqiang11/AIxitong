import { P as Popup } from './index-BKj4TrcW.mjs';
import { E as ElInput, d as ElButton } from './server.mjs';
import { _ as __nuxt_component_1 } from './index-DZM4Ziep.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { _ as __nuxt_component_8 } from './index-VFk_dz0n.mjs';
import { defineComponent, shallowRef, ref, watch, mergeProps, unref, withCtx, createVNode, isRef, createTextVNode, useSSRContext } from 'vue';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { n as itemDataEdit, o as itemDataImport, p as itemDataDetail } from './my_database-C6D0rbWD.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import '@vueuse/core';
import 'lodash-unified';
import './refs-CJvnaIJj.mjs';
import '@vue/shared';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import './index-DVLwoLV9.mjs';
import 'video.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "editPop",
  __ssrInlineRender: true,
  emits: ["success", "close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emits = __emit;
    const popRef = shallowRef();
    const video = ref("");
    const formData = ref({
      kb_id: "",
      fd_id: "",
      question: "",
      answer: "",
      files: [],
      images: [],
      video: [],
      uuid: ""
    });
    watch(video, (value) => {
      formData.value.video = [{ url: value, name: "" }];
    });
    const { lockFn: submit } = useLockFn(async () => {
      console.log(formData.value);
      if (formData.value.uuid) {
        await itemDataEdit({ ...formData.value });
      } else {
        await itemDataImport({ ...formData.value });
      }
      emits("success");
    });
    const getDetail = async () => {
      var _a;
      const res = await itemDataDetail({ uuid: formData.value.uuid });
      Object.keys(formData.value).map((item) => {
        formData.value[item] = res[item];
      });
      video.value = ((_a = res.video[0]) == null ? void 0 : _a.url) || "";
      console.log(formData.value);
    };
    const open = (ids) => {
      popRef.value.open();
      [formData.value.kb_id, formData.value.fd_id, formData.value.uuid] = [
        ids.kb_id,
        ids.fd_id,
        ids.uuid || ""
      ];
      if (ids.hasOwnProperty("uuid")) {
        getDetail();
      }
    };
    __expose({ open });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Popup = Popup;
      const _component_el_input = ElInput;
      const _component_Upload = __nuxt_component_1;
      const _component_Icon = _sfc_main$1;
      const _component_UploadVideo = __nuxt_component_8;
      const _component_el_button = ElButton;
      _push(ssrRenderComponent(_component_Popup, mergeProps({
        ref_key: "popRef",
        ref: popRef,
        title: "\u5F55\u5165\u6570\u636E",
        width: "800px",
        async: "",
        onConfirm: unref(submit),
        onClose: ($event) => _ctx.$emit("close")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="grid grid-cols-2 gap-x-[20px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_input, {
              modelValue: unref(formData).question,
              "onUpdate:modelValue": ($event) => unref(formData).question = $event,
              type: "textarea",
              placeholder: "\u8BF7\u8F93\u5165\u6587\u6863\u5185\u5BB9\uFF0C\u4F60\u53EF\u4EE5\u7406\u89E3\u4E3A\u63D0\u95EE\u7684\u95EE\u9898\uFF08\u5FC5\u586B\uFF09",
              rows: "10"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_input, {
              modelValue: unref(formData).answer,
              "onUpdate:modelValue": ($event) => unref(formData).answer = $event,
              type: "textarea",
              placeholder: "\u8BF7\u586B\u5165\u8865\u5145\u5185\u5BB9\uFF0C\u4F60\u53EF\u4EE5\u7406\u89E3\u4E3A\u95EE\u9898\u7684\u7B54\u6848",
              rows: "10"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Upload, {
              files: unref(formData).images,
              "onUpdate:files": ($event) => unref(formData).images = $event,
              type: "image",
              "list-type": "picture-card",
              limit: 9,
              multiple: "",
              "show-file-list": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col items-center justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "el-icon-Plus",
                    size: 20
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-info mt-2 text-sm"${_scopeId2}>\u4E0A\u4F20\u56FE\u7247</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                      createVNode(_component_Icon, {
                        name: "el-icon-Plus",
                        size: 20
                      }),
                      createVNode("div", { class: "text-info mt-2 text-sm" }, "\u4E0A\u4F20\u56FE\u7247")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="form-tips"${_scopeId}>\u6700\u591A\u4E0A\u4F209\u5F20</div></div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UploadVideo, {
              modelValue: unref(video),
              "onUpdate:modelValue": ($event) => isRef(video) ? video.value = $event : null,
              size: "80px"
            }, null, _parent2, _scopeId));
            _push2(`<div class="form-tips"${_scopeId}>\u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M</div></div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Upload, {
              files: unref(formData).files,
              "onUpdate:files": ($event) => unref(formData).files = $event,
              type: "file",
              "show-file-list": ""
            }, {
              tip: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="el-upload__tip"${_scopeId2}> \u652F\u6301\u4E0A\u4F20PDF\u3001docx\u3001excel\u3001\u7B49\u6587\u4EF6\u683C\u5F0F </div>`);
                } else {
                  return [
                    createVNode("div", { class: "el-upload__tip" }, " \u652F\u6301\u4E0A\u4F20PDF\u3001docx\u3001excel\u3001\u7B49\u6587\u4EF6\u683C\u5F0F ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_button, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u4E0A\u4F20\u9644\u4EF6`);
                      } else {
                        return [
                          createTextVNode("\u4E0A\u4F20\u9644\u4EF6")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_button, null, {
                      default: withCtx(() => [
                        createTextVNode("\u4E0A\u4F20\u9644\u4EF6")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "grid grid-cols-2 gap-x-[20px]" }, [
                  createVNode(_component_el_input, {
                    modelValue: unref(formData).question,
                    "onUpdate:modelValue": ($event) => unref(formData).question = $event,
                    type: "textarea",
                    placeholder: "\u8BF7\u8F93\u5165\u6587\u6863\u5185\u5BB9\uFF0C\u4F60\u53EF\u4EE5\u7406\u89E3\u4E3A\u63D0\u95EE\u7684\u95EE\u9898\uFF08\u5FC5\u586B\uFF09",
                    rows: "10"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_el_input, {
                    modelValue: unref(formData).answer,
                    "onUpdate:modelValue": ($event) => unref(formData).answer = $event,
                    type: "textarea",
                    placeholder: "\u8BF7\u586B\u5165\u8865\u5145\u5185\u5BB9\uFF0C\u4F60\u53EF\u4EE5\u7406\u89E3\u4E3A\u95EE\u9898\u7684\u7B54\u6848",
                    rows: "10"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_Upload, {
                    files: unref(formData).images,
                    "onUpdate:files": ($event) => unref(formData).images = $event,
                    type: "image",
                    "list-type": "picture-card",
                    limit: 9,
                    multiple: "",
                    "show-file-list": ""
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                        createVNode(_component_Icon, {
                          name: "el-icon-Plus",
                          size: 20
                        }),
                        createVNode("div", { class: "text-info mt-2 text-sm" }, "\u4E0A\u4F20\u56FE\u7247")
                      ])
                    ]),
                    _: 1
                  }, 8, ["files", "onUpdate:files"]),
                  createVNode("div", { class: "form-tips" }, "\u6700\u591A\u4E0A\u4F209\u5F20")
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_UploadVideo, {
                    modelValue: unref(video),
                    "onUpdate:modelValue": ($event) => isRef(video) ? video.value = $event : null,
                    size: "80px"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("div", { class: "form-tips" }, "\u683C\u5F0F\u4E3AMP4\uFF0C\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M")
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_Upload, {
                    files: unref(formData).files,
                    "onUpdate:files": ($event) => unref(formData).files = $event,
                    type: "file",
                    "show-file-list": ""
                  }, {
                    tip: withCtx(() => [
                      createVNode("div", { class: "el-upload__tip" }, " \u652F\u6301\u4E0A\u4F20PDF\u3001docx\u3001excel\u3001\u7B49\u6587\u4EF6\u683C\u5F0F ")
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_el_button, null, {
                        default: withCtx(() => [
                          createTextVNode("\u4E0A\u4F20\u9644\u4EF6")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["files", "onUpdate:files"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/_components/study_com/editPop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=editPop-BfSBoyhz.mjs.map
