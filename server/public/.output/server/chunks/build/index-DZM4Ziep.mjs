import { E as ElUpload } from './el-upload-8WlOxHo4.mjs';
import { E as ElDialog } from './index-CzJm6kkT.mjs';
import { E as ElProgress } from './el-progress-B1IVess1.mjs';
import { A as feedback, aM as uploadFile } from './server.mjs';
import { useSSRContext, defineComponent, ref, shallowRef, computed, watch, mergeProps, unref, isRef, createSlots, renderList, withCtx, renderSlot, createVNode, openBlock, createBlock, Fragment, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    files: {
      type: Array,
      default: () => []
    },
    // 上传文件类型
    type: {
      type: String,
      default: "image"
    },
    // 是否支持多选
    multiple: {
      type: Boolean,
      default: true
    },
    // 多选时最多选择几条
    limit: {
      type: Number,
      default: 10
    },
    // 上传时的额外参数
    data: {
      type: Object,
      default: () => ({})
    },
    // 上传文件的字段名
    name: {
      type: String,
      default: "file"
    },
    // 上传时的请求头额外参数
    header: {
      type: Object,
      default: () => ({})
    },
    //是否显示列表进度，显示列表进度将
    showFileList: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "end",
    "start",
    "change",
    "error",
    "success",
    "update:files"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const dialogImageUrl = ref("");
    const dialogVisible = ref(false);
    const handlePictureCardPreview = (uploadFile2) => {
      dialogImageUrl.value = uploadFile2.url;
      dialogVisible.value = true;
    };
    const loading = ref(false);
    const emit = __emit;
    const uploadRefs = shallowRef();
    const visible = ref(false);
    const fileList = ref([]);
    const handleProgress = () => {
      visible.value = true;
    };
    const handleChange = (file) => {
      emit("change", file);
      if (fileList.value.length == 0) {
        loading.value = false;
        emit("end");
      }
    };
    const handleSuccess = (response, file) => {
      emit("success", response);
      emit("update:files", [
        ...props.files,
        {
          url: response.uri,
          name: response.name
        }
      ]);
      const fileIndex = fileList.value.indexOf(file);
      !props.showFileList && fileList.value.splice(fileIndex, 1);
      handleChange(file);
    };
    const handleRemove = (file) => {
      const fileIndex = fileList.value.indexOf(file);
      const newFiles = props.files;
      newFiles.splice(fileIndex, 1);
      emit("update:files", [...newFiles]);
    };
    const handleError = (event, file) => {
      var _a;
      feedback.msgError(`${file.name}\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25`);
      (_a = uploadRefs.value) == null ? void 0 : _a.abort(file);
      visible.value = false;
      emit("error", file);
      handleChange(file);
    };
    const handleExceed = () => {
      feedback.msgError(`\u8D85\u51FA\u4E0A\u4F20\u4E0A\u9650${props.limit}\uFF0C\u8BF7\u91CD\u65B0\u4E0A\u4F20`);
    };
    const handleClose = () => {
      fileList.value = [];
      visible.value = false;
    };
    const getAccept = computed(() => {
      switch (props.type) {
        case "image":
          return ".jpg,.png,.gif,.jpeg";
        case "video":
          return ".wmv,.avi,.mpg,.mpeg,.3gp,.mov,.mp4,.flv,.rmvb,.mkv";
        case "audio":
          return;
        default:
          return "*";
      }
    });
    const httpRequest = (options) => {
      return uploadFile(props.type, {
        file: options.file,
        name: props.name,
        header: props.header,
        data: props.data
      });
    };
    const handelBeforeUpload = (rawFile) => {
      loading.value = true;
      emit("start", rawFile);
    };
    watch(
      () => props.files,
      (value) => {
        if (!fileList.value.length && (value == null ? void 0 : value.length)) {
          fileList.value = [...value];
        }
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_upload = ElUpload;
      const _component_el_dialog = ElDialog;
      const _component_el_progress = ElProgress;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "upload" }, _attrs))} data-v-1e31db6a>`);
      _push(ssrRenderComponent(_component_el_upload, mergeProps({
        ref_key: "uploadRefs",
        ref: uploadRefs,
        "file-list": unref(fileList),
        "onUpdate:fileList": ($event) => isRef(fileList) ? fileList.value = $event : null
      }, _ctx.$attrs, {
        multiple: __props.multiple,
        limit: __props.limit,
        "show-file-list": __props.showFileList,
        "on-progress": handleProgress,
        "on-success": handleSuccess,
        "on-exceed": handleExceed,
        "on-error": handleError,
        accept: unref(getAccept),
        "on-remove": handleRemove,
        "http-request": httpRequest,
        "before-upload": handelBeforeUpload,
        "on-preview": handlePictureCardPreview
      }), createSlots({ _: 2 }, [
        renderList(_ctx.$slots, (slot, key) => {
          return {
            name: key,
            fn: withCtx((slotData, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, key, mergeProps(slotData, { loading: unref(loading) }), null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, key, mergeProps(slotData, { loading: unref(loading) }), void 0, true)
                ];
              }
            })
          };
        })
      ]), _parent));
      if (!__props.showFileList && unref(fileList).length) {
        _push(ssrRenderComponent(_component_el_dialog, {
          modelValue: unref(visible),
          "onUpdate:modelValue": ($event) => isRef(visible) ? visible.value = $event : null,
          title: "\u4E0A\u4F20\u8FDB\u5EA6",
          "close-on-click-modal": false,
          width: "500px",
          modal: false,
          onClose: handleClose
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="file-list p-4" data-v-1e31db6a${_scopeId}><!--[-->`);
              ssrRenderList(unref(fileList), (item, index) => {
                _push2(`<div class="mb-5" data-v-1e31db6a${_scopeId}><div data-v-1e31db6a${_scopeId}>${ssrInterpolate(item.name)}</div><div class="flex-1" data-v-1e31db6a${_scopeId}>`);
                _push2(ssrRenderComponent(_component_el_progress, {
                  percentage: parseInt(String(item.percentage))
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "file-list p-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(fileList), (item, index) => {
                    return openBlock(), createBlock("div", {
                      key: index,
                      class: "mb-5"
                    }, [
                      createVNode("div", null, toDisplayString(item.name), 1),
                      createVNode("div", { class: "flex-1" }, [
                        createVNode(_component_el_progress, {
                          percentage: parseInt(String(item.percentage))
                        }, null, 8, ["percentage"])
                      ])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_el_dialog, {
        modelValue: unref(dialogVisible),
        "onUpdate:modelValue": ($event) => isRef(dialogVisible) ? dialogVisible.value = $event : null,
        width: "50vw"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img w-full${ssrRenderAttr("src", unref(dialogImageUrl))} alt="Preview Image" data-v-1e31db6a${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                "w-full": "",
                src: unref(dialogImageUrl),
                alt: "Preview Image"
              }, null, 8, ["src"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/upload/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1e31db6a"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=index-DZM4Ziep.mjs.map
