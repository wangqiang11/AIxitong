import { isFunction } from '@vue/shared';

const composeRefs = (...refs) => {
  return (el) => {
    refs.forEach((ref) => {
      if (isFunction(ref)) {
        ref(el);
      } else {
        ref.value = el;
      }
    });
  };
};

export { composeRefs as c };
//# sourceMappingURL=refs-CJvnaIJj.mjs.map
