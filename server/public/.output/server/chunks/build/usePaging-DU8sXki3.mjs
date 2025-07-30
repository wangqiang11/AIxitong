import { toRaw, reactive } from 'vue';

function usePaging(options) {
  const {
    page = 1,
    size = 15,
    fetchFun,
    params = {},
    firstLoading = false,
    afterFetch = () => {
    }
  } = options;
  const paramsInit = Object.assign({}, toRaw(params));
  const pager = reactive({
    page,
    size,
    loading: firstLoading,
    count: 0,
    lists: [],
    extend: {}
  });
  const getLists = () => {
    pager.loading = true;
    return fetchFun({
      page_no: pager.page,
      page_size: pager.size,
      ...params
    }).then((res) => {
      Reflect.ownKeys(res).map((item) => {
        pager[item] = res[item];
      });
      afterFetch();
      return Promise.resolve(res);
    }).catch((err) => {
      return Promise.reject(err);
    }).finally(() => {
      pager.loading = false;
    });
  };
  const resetPage = () => {
    pager.page = 1;
    getLists();
  };
  const resetParams = () => {
    Object.keys(paramsInit).forEach((item) => {
      params[item] = paramsInit[item];
    });
    getLists();
  };
  return {
    pager,
    getLists,
    resetParams,
    resetPage
  };
}

export { usePaging as u };
//# sourceMappingURL=usePaging-DU8sXki3.mjs.map
