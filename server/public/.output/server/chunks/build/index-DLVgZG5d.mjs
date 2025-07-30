import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, renderSlot } from 'vue';
import { br as isExternal } from './server.mjs';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { isString, isObject } from 'lodash-es';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    to: {}
  },
  setup(__props) {
    const props = __props;
    const isExternalLink = computed(() => {
      let path = "";
      if (isString(props.to)) {
        path = props.to;
      } else if (isObject(props.to)) {
        path = props.to.path;
      }
      return isExternal(path);
    });
    const linkProps = computed(() => {
      if (isExternalLink.value) {
        return {
          ...props,
          target: "blank",
          to: isObject(props.to) ? props.to.path : props.to
        };
      }
      return props;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps(unref(linkProps), { external: unref(isExternalLink) }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app-link/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=index-DLVgZG5d.mjs.map
