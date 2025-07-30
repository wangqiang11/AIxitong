import { shallowRef, defineComponent } from 'vue';
import { camelCase } from 'lodash-es';

function keysToCamelKebabCase(obj) {
  const newObj = {};
  for (const key in obj) newObj[camelCase(key)] = obj[key];
  return newObj;
}
const useTemplate = () => {
  const render = shallowRef();
  const define = defineComponent({
    setup(_, { slots }) {
      return () => {
        render.value = slots.default;
      };
    }
  });
  const reuse = defineComponent({
    setup(_, { attrs, slots }) {
      return () => {
        if (!render.value) {
          throw new Error("\u4F60\u8FD8\u6CA1\u5B9A\u4E49\u590D\u7528\u6A21\u677F\u5462\uFF01");
        }
        const vnode = render.value({
          ...keysToCamelKebabCase(attrs),
          $slots: slots
        });
        return vnode.length === 1 ? vnode[0] : vnode;
      };
    }
  });
  return [define, reuse];
};

export { useTemplate as u };
//# sourceMappingURL=useTemplate-BMZ5OoC1.mjs.map
