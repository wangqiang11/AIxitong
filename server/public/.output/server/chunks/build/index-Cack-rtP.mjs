import { E as ElInput, d as ElButton } from './server.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { useSSRContext, defineComponent, ref, computed, watch, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "item",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    name: {},
    itemId: {}
  },
  emits: ["update:modelValue", "edit", "delete"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const nameInput = ref("");
    const isEdit = ref(false);
    const activeId = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const isActive = computed(() => Number(activeId.value) === Number(props.itemId));
    watch(
      () => props.modelValue,
      () => {
        isEdit.value = false;
      }
    );
    watch(
      () => props.name,
      (value) => {
        nameInput.value = value;
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$2;
      const _component_ElInput = ElInput;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["px-[10px] h-[40px] flex items-center rounded-[8px] mb-[10px] cursor-pointer border border-solid border-[transparent]", {
          "!bg-[#ECEBF9] dark:!bg-[#333]": unref(isActive)
        }]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Icon, { name: "el-icon-ChatDotRound" }, null, _parent));
      _push(`<div class="ml-[10px] flex-1 min-w-0">`);
      if (unref(isEdit)) {
        _push(ssrRenderComponent(_component_ElInput, {
          modelValue: unref(nameInput),
          "onUpdate:modelValue": ($event) => isRef(nameInput) ? nameInput.value = $event : null,
          size: "small"
        }, null, _parent));
      } else {
        _push(`<div class="line-clamp-1">${ssrInterpolate(_ctx.name)}</div>`);
      }
      _push(`</div>`);
      if (unref(isActive)) {
        _push(`<!--[-->`);
        if (unref(isEdit)) {
          _push(`<!--[--><div class="cursor-pointer mr-[6px] flex">`);
          _push(ssrRenderComponent(_component_Icon, { name: "el-icon-Select" }, null, _parent));
          _push(`</div><div class="cursor-pointer flex">`);
          _push(ssrRenderComponent(_component_Icon, { name: "el-icon-CloseBold" }, null, _parent));
          _push(`</div><!--]-->`);
        } else {
          _push(`<!--[--><div class="cursor-pointer mr-[6px] flex">`);
          _push(ssrRenderComponent(_component_Icon, { name: "el-icon-EditPen" }, null, _parent));
          _push(`</div><div class="cursor-pointer flex">`);
          _push(ssrRenderComponent(_component_Icon, { name: "el-icon-Delete" }, null, _parent));
          _push(`</div><!--]-->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/the-session/item.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: {},
    modelValue: {}
  },
  emits: ["add", "clear", "edit", "delete", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const activeId = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const handleEdit = (name, id) => {
      emit("edit", {
        name,
        id
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElButton = ElButton;
      const _component_ElScrollbar = ElScrollbar;
      const _component_Icon = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "session bg-body rounded-[12px] flex flex-col" }, _attrs))} data-v-a88d677c>`);
      ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<div class="p-[16px]" data-v-a88d677c>`);
      _push(ssrRenderComponent(_component_ElButton, {
        type: "primary",
        class: "w-full session-add-btn",
        size: "large",
        onClick: ($event) => emit("add")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` + \u65B0\u5EFA\u4F1A\u8BDD `);
          } else {
            return [
              createTextVNode(" + \u65B0\u5EFA\u4F1A\u8BDD ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 min-h-0" data-v-a88d677c>`);
      _push(ssrRenderComponent(_component_ElScrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-[16px]" data-v-a88d677c${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.data, (item) => {
              _push2(`<div data-v-a88d677c${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$1, {
                modelValue: unref(activeId),
                "onUpdate:modelValue": ($event) => isRef(activeId) ? activeId.value = $event : null,
                "item-id": item.id,
                name: item.name,
                onDelete: ($event) => emit("delete", item.id),
                onEdit: ($event) => handleEdit($event, item.id)
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "px-[16px]" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data, (item) => {
                  return openBlock(), createBlock("div", {
                    key: item.id
                  }, [
                    createVNode(_sfc_main$1, {
                      modelValue: unref(activeId),
                      "onUpdate:modelValue": ($event) => isRef(activeId) ? activeId.value = $event : null,
                      "item-id": item.id,
                      name: item.name,
                      onDelete: ($event) => emit("delete", item.id),
                      onEdit: ($event) => handleEdit($event, item.id)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "item-id", "name", "onDelete", "onEdit"])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="p-[16px]" data-v-a88d677c>`);
      _push(ssrRenderComponent(_component_ElButton, {
        class: "w-full",
        plain: "",
        size: "large",
        onClick: ($event) => emit("clear")
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "el-icon-Delete" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "el-icon-Delete" })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6E05\u9664\u6240\u6709\u4F1A\u8BDD `);
          } else {
            return [
              createTextVNode(" \u6E05\u9664\u6240\u6709\u4F1A\u8BDD ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/the-session/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a88d677c"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=index-Cack-rtP.mjs.map
