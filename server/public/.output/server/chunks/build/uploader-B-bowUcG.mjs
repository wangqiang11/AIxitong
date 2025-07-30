import { E as ElUpload } from './el-upload-8WlOxHo4.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { ao as ElMessage, aM as uploadFile } from './server.mjs';
import { useSSRContext, defineComponent, ref, computed, unref, isRef, withCtx, createVNode, openBlock, createBlock, withModifiers, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './uploader-BjIsDS-m.mjs';
import { useVModels } from '@vueuse/core';
import { a as config, b as checkUserLogin } from './useDrawEffect-B2jxDCVi.mjs';
import _sfc_main$1 from './sidbar-item-title-aTPs1IEb.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './el-progress-B1IVess1.mjs';
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
import './usePaging-DU8sXki3.mjs';
import './usePolling-DOP50YcO.mjs';
import './DrawEnum-CqAPEJOR.mjs';
import './index-CJqYHNUB.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './dropdown-C6fgV-Vy.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "uploader",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" },
    type: {},
    files: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const { modelValue: fileData } = useVModels(props, emit);
    const fileList = ref([]);
    const beforeUpload = (file) => {
      if (checkUserLogin()) return false;
      if (parseInt(config.value.file_size) > 0 && file.size > parseInt(config.value.file_size) * 1024 * 1024) {
        ElMessage.error(`\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7${config.value.file_size}MB`);
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
        header: {},
        data: {
          type: "draw"
        }
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
      const _component_el_upload = ElUpload;
      const _component_el_image = ElImage;
      const _component_Icon = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3c65f031>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "\u4E0A\u4F20\u53C2\u8003\u56FE",
        required: "",
        tips: "\u4E0A\u4F20\u4E00\u5F20\u56FE\u7247\u505A\u4E3A\u57FA\u5E95\uFF0C\u7528\u6A21\u578B\u5728\u5176\u4E0A\u9762\u91CD\u65B0\u751F\u6210\u65B0\u7684\u56FE\u7247"
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_upload, {
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
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-3c65f031${_scopeId}>`);
            if (unref(fileData)) {
              _push2(`<div class="flex justify-center items-center h-[150px] relative" data-v-3c65f031${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_image, {
                class: "!block h-[100%]",
                src: unref(fileData),
                fit: "contain"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Icon, {
                class: "!absolute right-0 top-0 z-10 drop-shadow",
                name: "el-icon-CircleCloseFilled",
                color: "#ffffff",
                onClick: ($event) => fileData.value = ""
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="uploader-container" data-v-3c65f031${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="\u6587\u4EF6\u4E0A\u4F20" class="w-8 mx-auto mb-2" data-v-3c65f031${_scopeId}><div class="el-upload__text text-[#798696] !text-[13px]" data-v-3c65f031${_scopeId}> \u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904\u6216\u8005<em data-v-3c65f031${_scopeId}>\u70B9\u51FB\u4E0A\u4F20</em></div><div class="el-upload__tip text-[#798696]" data-v-3c65f031${_scopeId}>${ssrInterpolate(parseInt(unref(config).file_size) > 0 ? `\u652F\u6301\u56FE\u7247\u683C\u5F0F\uFF1AJPG/JPEG/PNG\uFF0C\u4F4E\u4E8E${unref(config).file_size}MB` : `\u652F\u6301\u56FE\u7247\u683C\u5F0F\uFF1AJPG/JPEG/PNG`)}</div></div>`);
            }
            _push2(`</div>`);
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
                  createVNode("div", { class: "el-upload__tip text-[#798696]" }, toDisplayString(parseInt(unref(config).file_size) > 0 ? `\u652F\u6301\u56FE\u7247\u683C\u5F0F\uFF1AJPG/JPEG/PNG\uFF0C\u4F4E\u4E8E${unref(config).file_size}MB` : `\u652F\u6301\u56FE\u7247\u683C\u5F0F\uFF1AJPG/JPEG/PNG`), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/common/uploader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Uploader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3c65f031"]]);

export { Uploader as default };
//# sourceMappingURL=uploader-B-bowUcG.mjs.map
