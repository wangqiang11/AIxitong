import { a as ElFormItem } from './index-DLL0sEcv.mjs';
import { E as ElUpload } from './el-upload-8WlOxHo4.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { ao as ElMessage, aM as uploadFile } from './server.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, withCtx, createVNode, unref, isRef, openBlock, createBlock, withModifiers, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './uploader-BjIsDS-m.mjs';
import { useVModels } from '@vueuse/core';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vue/shared';
import 'lodash-unified';
import 'async-validator';
import './el-progress-B1IVess1.mjs';
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

const size = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "uploader-picture",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" },
    type: { default: "image" },
    files: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const { modelValue: fileData } = useVModels(props, emit);
    const fileList = ref([]);
    const beforeUpload = (file) => {
      if (file.size > size * 1024 * 1024) {
        ElMessage.error(`\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7${size}MB`);
        return false;
      }
      return true;
    };
    const handleSuccess = (response) => {
      emit("update:modelValue", response.uri);
      fileData.value = response.uri;
      fileList.value = [
        {
          name: response.name,
          url: response.uri
        }
      ];
    };
    const httpRequest = (options) => {
      return uploadFile(props.type, {
        file: options.file,
        name: "file",
        header: {}
      });
    };
    const getAccept = computed(() => {
      switch (props.type) {
        case "image":
          return ".jpg,.png,.jpeg";
        case "video":
          return ".wmv,.avi,.mpg,.mpeg,.3gp,.mov,.mp4,.flv,.rmvb,.mkv";
        case "audio":
          return;
        default:
          return "*";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form_item = ElFormItem;
      const _component_el_upload = ElUpload;
      const _component_el_image = ElImage;
      const _component_Icon = _sfc_main$1;
      _push(ssrRenderComponent(_component_el_form_item, mergeProps({
        prop: "image",
        required: ""
      }, _attrs), {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-bold text-tx-primary" data-v-cd547139${_scopeId}> \u4E0A\u4F20\u53C2\u8003\u56FE </span>`);
          } else {
            return [
              createVNode("span", { class: "font-bold text-tx-primary" }, " \u4E0A\u4F20\u53C2\u8003\u56FE ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-1 leading-snug" data-v-cd547139${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_upload, {
              "file-list": unref(fileList),
              "onUpdate:fileList": ($event) => isRef(fileList) ? fileList.value = $event : null,
              class: "uploader",
              drag: "",
              multiple: false,
              "show-file-list": false,
              "on-success": handleSuccess,
              "http-request": httpRequest,
              "before-upload": beforeUpload,
              accept: unref(getAccept)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div data-v-cd547139${_scopeId2}>`);
                  if (unref(fileData)) {
                    _push3(`<div class="flex justify-center items-center h-[150px] relative" data-v-cd547139${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_el_image, {
                      class: "!block h-[100%]",
                      src: unref(fileData),
                      fit: "contain"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_Icon, {
                      class: "!absolute right-0 top-0 z-10 drop-shadow",
                      name: "el-icon-CircleCloseFilled",
                      color: "#ffffff",
                      onClick: ($event) => fileData.value = ""
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<div class="uploader-container" data-v-cd547139${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt="\u6587\u4EF6\u4E0A\u4F20" class="w-8 mx-auto mb-2" data-v-cd547139${_scopeId2}><div class="el-upload__text text-[#798696] !text-[13px]" data-v-cd547139${_scopeId2}> \u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904\u6216\u8005<em data-v-cd547139${_scopeId2}>\u70B9\u51FB\u4E0A\u4F20</em></div><div class="el-upload__tip text-[#798696]" data-v-cd547139${_scopeId2}>${ssrInterpolate(`\u652F\u6301\u56FE\u7247\u683C\u5F0F\uFF1AJPG/JPEG/PNG\uFF0C\u4F4E\u4E8E${size}MB`)}</div></div>`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      unref(fileData) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex justify-center items-center h-[150px] relative"
                      }, [
                        createVNode(_component_el_image, {
                          class: "!block h-[100%]",
                          src: unref(fileData),
                          fit: "contain"
                        }, null, 8, ["src"]),
                        createVNode(_component_Icon, {
                          class: "!absolute right-0 top-0 z-10 drop-shadow",
                          name: "el-icon-CircleCloseFilled",
                          color: "#ffffff",
                          onClick: withModifiers(($event) => fileData.value = "", ["stop"])
                        }, null, 8, ["onClick"])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "uploader-container"
                      }, [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "\u6587\u4EF6\u4E0A\u4F20",
                          class: "w-8 mx-auto mb-2"
                        }),
                        createVNode("div", { class: "el-upload__text text-[#798696] !text-[13px]" }, [
                          createTextVNode(" \u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904\u6216\u8005"),
                          createVNode("em", null, "\u70B9\u51FB\u4E0A\u4F20")
                        ]),
                        createVNode("div", { class: "el-upload__tip text-[#798696]" }, toDisplayString(`\u652F\u6301\u56FE\u7247\u683C\u5F0F\uFF1AJPG/JPEG/PNG\uFF0C\u4F4E\u4E8E${size}MB`), 1)
                      ]))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex-1 leading-snug" }, [
                createVNode(_component_el_upload, {
                  "file-list": unref(fileList),
                  "onUpdate:fileList": ($event) => isRef(fileList) ? fileList.value = $event : null,
                  class: "uploader",
                  drag: "",
                  multiple: false,
                  "show-file-list": false,
                  "on-success": handleSuccess,
                  "http-request": httpRequest,
                  "before-upload": beforeUpload,
                  accept: unref(getAccept)
                }, {
                  default: withCtx(() => [
                    createVNode("div", null, [
                      unref(fileData) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex justify-center items-center h-[150px] relative"
                      }, [
                        createVNode(_component_el_image, {
                          class: "!block h-[100%]",
                          src: unref(fileData),
                          fit: "contain"
                        }, null, 8, ["src"]),
                        createVNode(_component_Icon, {
                          class: "!absolute right-0 top-0 z-10 drop-shadow",
                          name: "el-icon-CircleCloseFilled",
                          color: "#ffffff",
                          onClick: withModifiers(($event) => fileData.value = "", ["stop"])
                        }, null, 8, ["onClick"])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "uploader-container"
                      }, [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "\u6587\u4EF6\u4E0A\u4F20",
                          class: "w-8 mx-auto mb-2"
                        }),
                        createVNode("div", { class: "el-upload__text text-[#798696] !text-[13px]" }, [
                          createTextVNode(" \u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904\u6216\u8005"),
                          createVNode("em", null, "\u70B9\u51FB\u4E0A\u4F20")
                        ]),
                        createVNode("div", { class: "el-upload__tip text-[#798696]" }, toDisplayString(`\u652F\u6301\u56FE\u7247\u683C\u5F0F\uFF1AJPG/JPEG/PNG\uFF0C\u4F4E\u4E8E${size}MB`), 1)
                      ]))
                    ])
                  ]),
                  _: 1
                }, 8, ["file-list", "onUpdate:fileList", "accept"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/video/_components/uploader-picture.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UploaderPicture = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cd547139"]]);

export { UploaderPicture as default };
//# sourceMappingURL=uploader-picture-BEoMd7qV.mjs.map
