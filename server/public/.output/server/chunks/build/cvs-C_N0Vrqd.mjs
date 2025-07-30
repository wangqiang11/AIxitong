import { E as ElUpload } from './el-upload-8WlOxHo4.mjs';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { A as feedback, d as ElButton, B as vLoading } from './server.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { useSSRContext, defineComponent, ref, shallowRef, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, withModifiers, openBlock, createBlock, Fragment, renderList } from 'vue';
import { r as readXlsxContent, a as readCsvContent } from './fileReader-CRBF4dkT.mjs';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
import { isArray } from 'lodash-es';
import { isSameFile } from './hook-1nkmW8DG.mjs';
import _sfc_main$1 from './cvs-data-item-N7r8ecjG.mjs';
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
  __name: "cvs",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const data = useVModel(props, "modelValue", emit);
    const fileAccept = [".csv", ".xlsx"];
    const accept = fileAccept.join(", ");
    const fileList = ref([]);
    const uploadRef = shallowRef();
    const loading = ref(false);
    const showIndex = ref(-1);
    ref([
      {
        question: "\u4EC0\u4E48\u662F\u77E5\u8BC6\u5E93",
        answer: "\u77E5\u8BC6\u5E93\u662F\u6307\u4E00\u4E2A\u96C6\u4E2D\u5B58\u50A8\u548C\u7BA1\u7406\u77E5\u8BC6\u7684\u7CFB\u7EDF\u6216\u5E73..."
      },
      {
        question: "\u5982\u4F55\u521B\u5EFA\u77E5\u8BC6\u5E93",
        answer: "1.\u786E\u5B9A\u76EE\u6807\u548C\u8303\u56F4\uFF1A\u660E\u786E\u77E5\u8BC6\u5E93\u7684\u76EE\u6807\u548C\u7528\u9014\uFF0C\u786E\u5B9A..."
      }
    ]);
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
          if (!content || !content.length) {
            throw "\u89E3\u6790\u7ED3\u679C\u4E3A\u7A7A\uFF0C\u5DF2\u81EA\u52A8\u5FFD\u7565";
          }
          if (!isArray(content)) {
            throw "\u89E3\u6790\u5931\u8D25";
          }
          file.data = content;
          data.value.push({
            name: file.name,
            path: "",
            data: content
          });
          fileList.value.push(file);
          console.log(fileList.value[0].name);
          selectShow(fileList.value.length - 1);
        }
      } catch (error) {
        feedback.msgError(error);
      } finally {
        loading.value = false;
        (_b = uploadRef.value) == null ? void 0 : _b.clearFiles();
      }
    };
    const handleDelete = async (index) => {
      data.value[showIndex.value].data.splice(index, 1);
    };
    const parseFile = async (file) => {
      const suffix = file.name.substring(file.name.lastIndexOf(".") + 1);
      let res = "";
      switch (suffix) {
        case "csv":
          res = await readCsvContent(file);
          break;
        case "xlsx":
          res = await readXlsxContent(file);
          break;
      }
      return res;
    };
    const selectShow = (index) => {
      showIndex.value = index;
    };
    const delFile = (index) => {
      data.value.splice(index, 1);
      fileList.value.splice(index, 1);
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
      const _component_el_button = ElButton;
      const _component_el_scrollbar = ElScrollbar;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1c7e91aa><div class="h-full flex flex-col" data-v-1c7e91aa><div${ssrRenderAttrs(mergeProps({ class: "py-[16px]" }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(loading))))} data-v-1c7e91aa>`);
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
        tip: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="el-upload__tip" data-v-1c7e91aa${_scopeId}> \u5148\u5B8C\u6210\u586B\u5199\u540E\u518D\u4E0A\u4F20\uFF0C\u95EE\u9898\u603B\u6570\u5EFA\u8BAE\u4E0D\u8981\u8D85\u8FC71000\u6761\uFF0C\u5426\u5219\u4E0A\u4F20\u4F1A\u5361\u987F </div><div class="el-upload__tip" data-v-1c7e91aa${_scopeId}> \u5BFC\u5165\u524D\u4F1A\u8FDB\u884C\u53BB\u91CD\uFF0C\u5982\u679C\u95EE\u9898\u548C\u7B54\u6848\u5B8C\u5168\u76F8\u540C\uFF0C\u5219\u4E0D\u4F1A\u88AB\u5BFC\u5165\uFF0C\u6240\u4EE5\u6700\u7EC8\u5BFC\u5165\u7684\u5185\u5BB9\u53EF\u80FD\u4F1A\u6BD4\u6587\u4EF6\u7684\u5185\u5BB9\u5C11\u3002\u4F46\u662F\uFF0C\u5BF9\u4E8E\u5E26\u6709\u6362\u884C\u7684\u5185\u5BB9\uFF0C\u76EE\u524D\u65E0\u6CD5\u53BB\u91CD\u3002 </div>`);
          } else {
            return [
              createVNode("div", { class: "el-upload__tip" }, " \u5148\u5B8C\u6210\u586B\u5199\u540E\u518D\u4E0A\u4F20\uFF0C\u95EE\u9898\u603B\u6570\u5EFA\u8BAE\u4E0D\u8981\u8D85\u8FC71000\u6761\uFF0C\u5426\u5219\u4E0A\u4F20\u4F1A\u5361\u987F "),
              createVNode("div", { class: "el-upload__tip" }, " \u5BFC\u5165\u524D\u4F1A\u8FDB\u884C\u53BB\u91CD\uFF0C\u5982\u679C\u95EE\u9898\u548C\u7B54\u6848\u5B8C\u5168\u76F8\u540C\uFF0C\u5219\u4E0D\u4F1A\u88AB\u5BFC\u5165\uFF0C\u6240\u4EE5\u6700\u7EC8\u5BFC\u5165\u7684\u5185\u5BB9\u53EF\u80FD\u4F1A\u6BD4\u6587\u4EF6\u7684\u5185\u5BB9\u5C11\u3002\u4F46\u662F\uFF0C\u5BF9\u4E8E\u5E26\u6709\u6362\u884C\u7684\u5185\u5BB9\uFF0C\u76EE\u524D\u65E0\u6CD5\u53BB\u91CD\u3002 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="el-upload__text" data-v-1c7e91aa${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-Upload" }, null, _parent2, _scopeId));
            _push2(` \u62D6\u62FD\u6587\u4EF6\u81F3\u6B64\uFF0C\u6216\u70B9\u51FB<em data-v-1c7e91aa${_scopeId}> \u9009\u62E9\u6587\u4EF6 </em></div><div class="el-upload__text" data-v-1c7e91aa${_scopeId}>\u652F\u6301 ${ssrInterpolate(unref(accept))} \u6587\u4EF6</div><div class="el-upload__text" data-v-1c7e91aa${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              class: "ml-2",
              link: "",
              onClick: () => {
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a href="/static/xlsxTemplate.xlsx" target="_blank" data-v-1c7e91aa${_scopeId2}>\u70B9\u51FB\u4E0B\u8F7D\u6A21\u7248</a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: "/static/xlsxTemplate.xlsx",
                      target: "_blank"
                    }, "\u70B9\u51FB\u4E0B\u8F7D\u6A21\u7248")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "el-upload__text" }, [
                createVNode(_component_Icon, { name: "el-icon-Upload" }),
                createTextVNode(" \u62D6\u62FD\u6587\u4EF6\u81F3\u6B64\uFF0C\u6216\u70B9\u51FB"),
                createVNode("em", null, " \u9009\u62E9\u6587\u4EF6 ")
              ]),
              createVNode("div", { class: "el-upload__text" }, "\u652F\u6301 " + toDisplayString(unref(accept)) + " \u6587\u4EF6", 1),
              createVNode("div", { class: "el-upload__text" }, [
                createVNode(_component_el_button, {
                  type: "primary",
                  class: "ml-2",
                  link: "",
                  onClick: withModifiers(() => {
                  }, ["stop"])
                }, {
                  default: withCtx(() => [
                    createVNode("a", {
                      href: "/static/xlsxTemplate.xlsx",
                      target: "_blank"
                    }, "\u70B9\u51FB\u4E0B\u8F7D\u6A21\u7248")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(data).length > 0) {
        _push(`<div class="grid grid-cols-2 gap-4 flex-1 min-h-[500px]" data-v-1c7e91aa><div style="${ssrRenderStyle({ "border-right": "1px solid #eeeeee" })}" data-v-1c7e91aa><div class="mt-4 max-w-[500px]" data-v-1c7e91aa><!--[-->`);
        ssrRenderList(unref(data), (item, index) => {
          _push(`<div class="${ssrRenderClass([{ "bg-page": unref(showIndex) == index }, "fileItem flex items-center p-2 rounded-lg mt-1 hover:cursor-pointer hover:bg-page transition duration-300"])}" data-v-1c7e91aa>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "el-icon-Folder",
            size: 16,
            color: "#ffc94d"
          }, null, _parent));
          _push(`<div class="ml-2" data-v-1c7e91aa>${ssrInterpolate(item.name)}</div><div class="closeIcon ml-auto opacity-0 transition duration-300 flex items-center" data-v-1c7e91aa>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "el-icon-DeleteFilled",
            onClick: ($event) => delFile(index)
          }, null, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div><div class="flex flex-col" data-v-1c7e91aa><div class="text-lg" data-v-1c7e91aa> \u5206\u6BB5\u9884\u89C8\uFF08${ssrInterpolate((_a = unref(data)[unref(showIndex)]) == null ? void 0 : _a.data.length)}\u7EC4\uFF09 </div><div class="flex-auto mt-2 h-[100px]" data-v-1c7e91aa>`);
        _push(ssrRenderComponent(_component_el_scrollbar, { height: "100%" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList((_a2 = unref(data)[unref(showIndex)]) == null ? void 0 : _a2.data, (item, index) => {
                _push2(`<div class="bg-page rounded p-[10px] mt-2" data-v-1c7e91aa${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$1, {
                  index,
                  name: unref(data)[unref(showIndex)].name,
                  q: item.q,
                  "onUpdate:q": ($event) => item.q = $event,
                  a: item.a,
                  "onUpdate:a": ($event) => item.a = $event,
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
                      q: item.q,
                      "onUpdate:q": ($event) => item.q = $event,
                      a: item.a,
                      "onUpdate:a": ($event) => item.a = $event,
                      onDelete: ($event) => handleDelete(index)
                    }, null, 8, ["index", "name", "q", "onUpdate:q", "a", "onUpdate:a", "onDelete"])
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
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/_components/import/cvs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Cvs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1c7e91aa"]]);

export { Cvs as default };
//# sourceMappingURL=cvs-C_N0Vrqd.mjs.map
