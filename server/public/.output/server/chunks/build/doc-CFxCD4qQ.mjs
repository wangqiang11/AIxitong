import { E as ElUpload } from './el-upload-8WlOxHo4.mjs';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { E as ElTooltip } from './index-L-VTEUEA.mjs';
import { A as feedback, E as ElInput, d as ElButton, B as vLoading } from './server.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { useSSRContext, defineComponent, ref, shallowRef, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, isRef, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
import { isSameFile } from './hook-1nkmW8DG.mjs';
import { b as readTxtContent, c as readDocContent, d as readPdfContent } from './fileReader-CRBF4dkT.mjs';
import { s as splitText2ChunksArray } from './textSplitter-DLWtBQu6.mjs';
import _sfc_main$1 from './data-item-CQ7fNu3a.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './el-progress-B1IVess1.mjs';
import '@vue/shared';
import 'lodash-unified';
import '@popperjs/core';
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
  __name: "doc",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const data = useVModel(props, "modelValue", emit);
    const fileAccept = [".txt", "doc", ".docx", ".pdf", ".md"];
    const accept = fileAccept.join(", ");
    const fileList = ref([]);
    const uploadRef = shallowRef();
    const loading = ref(false);
    const showIndex = ref(-1);
    ref("");
    const step = ref(512);
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
          data.value.push({
            name: file.name,
            path: "",
            data: []
          });
          file.data = content;
          fileList.value.push(file);
          selectShow(fileList.value.length - 1);
          reSplit();
        }
      } catch (error) {
        feedback.msgError(error);
      } finally {
        loading.value = false;
        (_b = uploadRef.value) == null ? void 0 : _b.clearFiles();
      }
    };
    const reSplit = () => {
      data.value.forEach((item) => {
        item.data = [];
        const index = fileList.value.findIndex(
          (fileItem) => fileItem.name == item.name
        );
        const contentList = splitText2ChunksArray({
          //@ts-ignore
          text: fileList.value[index].data,
          chunkLen: step.value
        });
        contentList.forEach((contentListItem) => {
          item.data.push({ q: contentListItem, a: "" });
        });
      });
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
    const handleDelete = async (index) => {
      data.value[showIndex.value].data.splice(index, 1);
    };
    const delFile = (index) => {
      data.value.splice(index, 1);
      fileList.value.splice(index, 1);
    };
    const selectShow = (index) => {
      showIndex.value = index;
    };
    __expose({
      clearFiles: () => {
        fileList.value = [];
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_el_upload = ElUpload;
      const _component_Icon = _sfc_main$2;
      const _component_el_tooltip = ElTooltip;
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      const _component_el_scrollbar = ElScrollbar;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col min-h-0" }, _attrs))} data-v-b76b91ef><div${ssrRenderAttrs(mergeProps({ class: "py-[16px]" }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(loading))))} data-v-b76b91ef>`);
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
            _push2(`<div class="el-upload__text" data-v-b76b91ef${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-Upload" }, null, _parent2, _scopeId));
            _push2(` \u62D6\u62FD\u6587\u4EF6\u81F3\u6B64\uFF0C\u6216\u70B9\u51FB<em data-v-b76b91ef${_scopeId}> \u9009\u62E9\u6587\u4EF6 </em></div><div class="el-upload__text" data-v-b76b91ef${_scopeId}>\u652F\u6301 ${ssrInterpolate(unref(accept))} \u6587\u4EF6</div>`);
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
        _push(`<div class="grid grid-cols-2 gap-4 flex-1 min-h-[500px]" data-v-b76b91ef><div style="${ssrRenderStyle({ "border-right": "1px solid #eeeeee" })}" data-v-b76b91ef><div class="mt-4 max-w-[500px]" data-v-b76b91ef><!--[-->`);
        ssrRenderList(unref(data), (item, index) => {
          _push(`<div class="${ssrRenderClass([{ "bg-page": unref(showIndex) == index }, "fileItem flex items-center p-2 rounded-lg mt-1 hover:cursor-pointer hover:bg-page transition duration-300"])}" data-v-b76b91ef>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "el-icon-Folder",
            size: 16,
            color: "#ffc94d"
          }, null, _parent));
          _push(`<div class="ml-2" data-v-b76b91ef>${ssrInterpolate(item.name)}</div><div class="closeIcon ml-auto opacity-0 transition duration-300 flex items-center" data-v-b76b91ef>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "el-icon-DeleteFilled",
            onClick: ($event) => delFile(index)
          }, null, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div><div class="mt-4" data-v-b76b91ef><div class="flex" data-v-b76b91ef><div data-v-b76b91ef>\u5206\u6BB5\u957F\u5EA6</div>`);
        _push(ssrRenderComponent(_component_el_tooltip, {
          content: "\u6309\u7ED3\u675F\u7B26\u53F7\u8FDB\u884C\u5206\u6BB5\u3002\u6211\u4EEC\u5EFA\u8BAE\u60A8\u7684\u6587\u6863\u5E94\u5408\u7406\u7684\u4F7F\u7528\u6807\u70B9\u7B26\u53F7\uFF0C\u4EE5\u786E\u4FDD\u6BCF\u4E2A\u5B8C\u6574\u7684\u53E5\u5B50\u957F\u5EA6\u4E0D\u8981\u8D85\u8FC7\u8BE5\u503C\u4E2D\u6587\u6587\u6863\u5EFA\u8BAE400~1000\u82F1\u6587\u6587\u6863\u5EFA\u8BAE600~1200",
          placement: "top"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-b76b91ef${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-QuestionFilled" }, null, _parent2, _scopeId));
              _push2(`</span>`);
            } else {
              return [
                createVNode("span", null, [
                  createVNode(_component_Icon, { name: "el-icon-QuestionFilled" })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_el_input, {
          class: "mt-2 !w-[300px]",
          modelValue: unref(step),
          "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : null
        }, null, _parent));
        _push(`<div class="mt-2" data-v-b76b91ef>`);
        _push(ssrRenderComponent(_component_el_button, {
          type: "primary",
          onClick: reSplit
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u91CD\u65B0\u9884\u89C8`);
            } else {
              return [
                createTextVNode("\u91CD\u65B0\u9884\u89C8")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div><div class="flex flex-col" data-v-b76b91ef><div class="text-lg" data-v-b76b91ef> \u5206\u6BB5\u9884\u89C8\uFF08${ssrInterpolate((_a = unref(data)[unref(showIndex)]) == null ? void 0 : _a.data.length)}\u7EC4\uFF09 </div><div class="flex-auto mt-2 h-[100px]" data-v-b76b91ef>`);
        _push(ssrRenderComponent(_component_el_scrollbar, { height: "100%" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList((_a2 = unref(data)[unref(showIndex)]) == null ? void 0 : _a2.data, (item, index) => {
                _push2(`<div class="bg-page rounded p-[10px] mt-2" data-v-b76b91ef${_scopeId}>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/_components/import/doc.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Doc = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b76b91ef"]]);

export { Doc as default };
//# sourceMappingURL=doc-CFxCD4qQ.mjs.map
