import { reactive, toRaw } from 'vue';

function useDictOptions(options) {
  const optionsData = reactive({});
  const optionsKey = Object.keys(options);
  const apiLists = optionsKey.map((key) => {
    const value = options[key];
    optionsData[key] = [];
    return () => value.api(toRaw(value.params) || {});
  });
  const refresh = async () => {
    const res = await Promise.allSettled(
      apiLists.map((api) => api())
    );
    res.forEach((item, index) => {
      const key = optionsKey[index];
      if (item.status == "fulfilled") {
        const { transformData } = options[key];
        const data = transformData ? transformData(item.value) : item.value;
        optionsData[key] = data;
      }
    });
  };
  refresh();
  return {
    optionsData,
    refresh
  };
}

export { useDictOptions as u };
//# sourceMappingURL=useDictOptions-DmOxg3R0.mjs.map
