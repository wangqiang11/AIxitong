import { E as ElUpload } from './el-upload-8WlOxHo4.mjs';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { A as feedback, B as vLoading } from './server.mjs';
import { useSSRContext, defineComponent, ref, shallowRef, reactive, inject, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { b as readTxtContent, c as readDocContent, d as readPdfContent } from './fileReader-CRBF4dkT.mjs';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
import { isSameFile } from './hook-1nkmW8DG.mjs';
import { s as splitText2ChunksArray } from './textSplitter-DLWtBQu6.mjs';
import _sfc_main$1 from './data-item-CQ7fNu3a.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './el-progress-B1IVess1.mjs';
import '@vue/shared';
import 'lodash-unified';
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
import 'mammoth';
import 'pdfjs-dist/build/pdf.js';
import 'papaparse';
import 'xlsx';
import 'turndown';
import 'joplin-turndown-plugin-gfm';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "QASplit",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const data = useVModel(props, "modelValue", emit);
    const fileAccept = [".txt", ".docx", ".pdf", ".md"];
    const accept = fileAccept.join(", ");
    const fileList = ref([]);
    const uploadRef = shallowRef();
    const loading = ref(false);
    const showIndex = ref(-1);
    const showContent = reactive([]);
    const knowDetail = inject("knowDetail");
    const fileInput = async ({ raw: file }) => {
      var _a, _b;
      try {
        if (file) {
          const fileExtension = "." + ((_a = file.name.split(".").pop()) == null ? void 0 : _a.toLowerCase());
          if (!fileAccept.includes(fileExtension)) {
            throw `\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C\u8BF7\u4E0A\u4F20 ${accept} \u683C\u5F0F\u7684\u6587\u4EF6`;
          }
          loading.value = true;
          await isSameFile(file, fileList.value);
          const content = await parseFile(file);
          if (!content) {
            throw "\u89E3\u6790\u7ED3\u679C\u4E3A\u7A7A\uFF0C\u5DF2\u81EA\u52A8\u5FFD\u7565";
          }
          const isSplitContent = splitContent(content);
          data.value.push({
            name: file.name,
            path: "",
            data: isSplitContent
          });
          fileList.value.push(file);
          selectShow(fileList.value.length - 1);
        }
      } catch (error) {
        feedback.msgError(error);
      } finally {
        loading.value = false;
        (_b = uploadRef.value) == null ? void 0 : _b.clearFiles();
      }
    };
    const parseFile = async (file) => {
      const suffix = file.name.substring(file.name.lastIndexOf(".") + 1);
      let res = "";
      switch (suffix) {
        case "md":
        case "txt":
          res = await readTxtContent(file);
          break;
        case "pdf":
          res = await readPdfContent(file);
          break;
        case "doc":
        case "docx":
          res = await readDocContent(file);
          break;
        default:
          res = await readTxtContent(file);
          break;
      }
      return res;
    };
    const selectShow = (index) => {
      showIndex.value = index;
      showContent.length = 0;
    };
    const splitContent = (content) => {
      const data2 = [];
      const contentList = splitText2ChunksArray({
        text: content,
        chunkLen: knowDetail.qa_length
      });
      contentList.forEach((item) => {
        data2.push({ q: item, a: "" });
      });
      return data2;
    };
    const handleDelete = async (index) => {
      data.value[showIndex.value].data.splice(index, 1);
    };
    const delFile = (index) => {
      data.value.splice(index, 1);
      fileList.value.splice(index, 1);
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_el_upload = ElUpload;
      const _component_Icon = _sfc_main$2;
      const _component_el_scrollbar = ElScrollbar;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col" }, _attrs))} data-v-fdad676b><div${ssrRenderAttrs(mergeProps({ class: "py-[16px]" }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(loading))))} data-v-fdad676b>`);
      _push(ssrRenderComponent(_component_el_upload, {
        ref_key: "uploadRef",
        ref: uploadRef,
        drag: "",
        "on-change": fileInput,
        "auto-upload": false,
        "show-file-list": false,
        accept: unref(accept),
        multiple: true,
        limit: 50
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="el-upload__text" data-v-fdad676b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-Upload" }, null, _parent2, _scopeId));
            _push2(` \u62D6\u62FD\u6587\u4EF6\u81F3\u6B64\uFF0C\u6216\u70B9\u51FB<em data-v-fdad676b${_scopeId}> \u9009\u62E9\u6587\u4EF6 </em></div><div class="el-upload__text" data-v-fdad676b${_scopeId}>\u652F\u6301 ${ssrInterpolate(unref(accept))} \u6587\u4EF6</div>`);
          } else {
            return [
              createVNode("div", { class: "el-upload__text" }, [
                createVNode(_component_Icon, { name: "el-icon-Upload" }),
                createTextVNode(" \u62D6\u62FD\u6587\u4EF6\u81F3\u6B64\uFF0C\u6216\u70B9\u51FB"),
                createVNode("em", null, " \u9009\u62E9\u6587\u4EF6 ")
              ]),
              createVNode("div", { class: "el-upload__text" }, "\u652F\u6301 " + toDisplayString(unref(accept)) + " \u6587\u4EF6", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(data).length > 0) {
        _push(`<div class="grid grid-cols-2 gap-4 flex-1 min-h-[500px]" data-v-fdad676b><div style="${ssrRenderStyle({ "border-right": "1px solid #eeeeee" })}" data-v-fdad676b><div class="mt-4 max-w-[500px]" data-v-fdad676b><!--[-->`);
        ssrRenderList(unref(data), (item, index) => {
          _push(`<div class="${ssrRenderClass([{ "bg-page": unref(showIndex) == index }, "fileItem flex items-center p-2 rounded-lg mt-1 hover:cursor-pointer hover:bg-page transition duration-300"])}" data-v-fdad676b>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "el-icon-Folder",
            size: 16,
            color: "#ffc94d"
          }, null, _parent));
          _push(`<div class="ml-2" data-v-fdad676b>${ssrInterpolate(item.name)}</div><div class="closeIcon ml-auto opacity-0 transition duration-300 flex items-center" data-v-fdad676b>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "el-icon-DeleteFilled",
            onClick: ($event) => delFile(index)
          }, null, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div><div class="flex flex-col" data-v-fdad676b><div class="text-lg" data-v-fdad676b> \u5206\u6BB5\u9884\u89C8\uFF08${ssrInterpolate((_a = unref(data)[unref(showIndex)]) == null ? void 0 : _a.data.length)}\u7EC4\uFF09 </div><div class="flex-auto mt-2 h-[100px]" data-v-fdad676b>`);
        _push(ssrRenderComponent(_component_el_scrollbar, { height: "100%" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList((_a2 = unref(data)[unref(showIndex)]) == null ? void 0 : _a2.data, (item, index) => {
                _push2(`<div class="bg-page rounded p-[10px] mt-2" data-v-fdad676b${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$1, {
                  index,
                  name: unref(data)[unref(showIndex)].name,
                  data: item.q,
                  "onUpdate:data": ($event) => item.q = $event,
                  onDelete: ($event) => handleDelete(index)
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList((_b = unref(data)[unref(showIndex)]) == null ? void 0 : _b.data, (item, index) => {
                  return openBlock(), createBlock("div", {
                    class: "bg-page rounded p-[10px] mt-2",
                    key: index
                  }, [
                    createVNode(_sfc_main$1, {
                      index,
                      name: unref(data)[unref(showIndex)].name,
                      data: item.q,
                      "onUpdate:data": ($event) => item.q = $event,
                      onDelete: ($event) => handleDelete(index)
                    }, null, 8, ["index", "name", "data", "onUpdate:data", "onDelete"])
                  ]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/_components/import/QASplit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const QASplit = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fdad676b"]]);

export { QASplit as default };
//# sourceMappingURL=QASplit-BEI1cWI8.mjs.map
