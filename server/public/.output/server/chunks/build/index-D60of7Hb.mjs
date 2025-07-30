import { E as ElPagination } from './el-pagination-ClrwtCwT.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: () => ({}) },
    pageSizes: { default: () => [15, 20, 30, 40] },
    layout: { default: "total, sizes, prev, pager, next, jumper" },
    hideOnSinglePage: { type: Boolean, default: false },
    background: { type: Boolean, default: false }
  },
  emits: ["change", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const pager = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const sizeChange = () => {
      pager.value.page = 1;
      emit("change");
    };
    const pageChange = () => {
      emit("change");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_pagination = ElPagination;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pagination" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_pagination, mergeProps(props, {
        background: _ctx.background,
        currentPage: unref(pager).page,
        "onUpdate:currentPage": ($event) => unref(pager).page = $event,
        pageSize: unref(pager).size,
        "onUpdate:pageSize": ($event) => unref(pager).size = $event,
        "pager-count": 5,
        "page-sizes": _ctx.pageSizes,
        layout: _ctx.layout,
        total: unref(pager).count,
        "hide-on-single-page": _ctx.hideOnSinglePage,
        onSizeChange: sizeChange,
        onCurrentChange: pageChange
      }), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pagination/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=index-D60of7Hb.mjs.map
