import { ref, watch } from 'vue';
import { b7 as useState, z as useUserStore, a as useRouter, A as feedback } from './server.mjs';
import { isString, isArray } from 'lodash-es';
import { g as getSearchConfig, p as postSearch, a as getSearchDetail, b as getSearchExample } from './search-DBP7Ii5U.mjs';
import { ModelEnums, TypeEnums, StatusEnums } from './searchEnums-Dgcx5RT8.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';

const options = ref({
  model: ModelEnums.BASE,
  type: TypeEnums.ALL,
  ask: "",
  probe: 0
});
watch(
  () => options.value.model,
  (value) => {
    if (value !== ModelEnums.STUDY) {
      options.value.type = TypeEnums.ALL;
    }
  },
  { flush: "post", immediate: true }
);
let sse;
const useSearch = () => {
  const result = useState(() => ({
    id: -1,
    query: "",
    data: [],
    status: -1,
    search: [],
    outline: {},
    outline_json: {},
    suggestion: {}
  }), "$sd7cibyGCt");
  const isSearching = useState(() => false, "$843Kh9xI0P");
  const showSearchResult = useState(() => false, "$T48Tb6Ybal");
  const useStore = useUserStore();
  const router = useRouter();
  const config = useState(() => ({
    status: 0,
    price: 0,
    isVipFree: false
  }), "$JUXG1OFsCM");
  const getConfig = async () => {
    config.value = await getSearchConfig();
  };
  const initResult = () => {
    result.value.id = -1;
    result.value.query = options.value.ask;
    result.value.data = [];
    result.value.status = StatusEnums.ANALYSIS;
    result.value.search = [];
    result.value.outline = {};
    result.value.outline_json = {};
    result.value.suggestion = {};
  };
  const pushData = (type, target, data) => {
    const current = result.value.data.find(
      (item) => item.type == "markdown" && item.target == "update"
    );
    if (current) {
      if (isString(current.content)) {
        current.content += data;
      }
      if (isArray(current.content)) {
        current.content.push(data);
      }
      current.target = target;
    } else {
      result.value.data.push({
        type,
        target,
        content: data
      });
    }
  };
  const getSearchResult = (data) => {
    var _a;
    const searchResult = data.findLast(
      (item) => item.type === "search_result"
    );
    return ((_a = searchResult == null ? void 0 : searchResult.content) == null ? void 0 : _a.map((item, index) => ({
      ...item,
      index: index + 1
    }))) || [];
  };
  const launchSearch = async (text = "") => {
    if (text) {
      options.value.ask = text;
    }
    if (!useStore.isLogin) return useStore.toggleShowLogin();
    if (!options.value.ask) return feedback.msgError("\u8BF7\u8F93\u5165\u4F60\u60F3\u641C\u7D22\u7684\u95EE\u9898");
    if (isSearching.value) return feedback.msgWarning("\u6B63\u5728\u641C\u7D22\u4E2D...");
    isSearching.value = true;
    initResult();
    showSearchResult.value = true;
    sse = postSearch({ ...options.value, stream: true });
    sse.onmessage = ({ data: dataJson }) => {
      const { card_type, target, data } = dataJson;
      switch (card_type) {
        case "error":
          feedback.msgError(data);
          isSearching.value = false;
          showSearchResult.value = false;
          break;
        case "action": {
          result.value.status = StatusEnums.SEARCH;
          break;
        }
        case "markdown": {
          result.value.status = StatusEnums.SUMMARY;
        }
        case "expand_query":
        case "search_result": {
          pushData(card_type, target, data);
          break;
        }
        case "suggestion": {
          result.value.suggestion = {
            type: card_type,
            content: data
          };
          break;
        }
        case "outline_json": {
          result.value.outline_json = data;
          break;
        }
        case "outline": {
          result.value.outline = data;
          break;
        }
        case "done": {
          result.value.status = StatusEnums.SUCCESS + 1;
          result.value.search = getSearchResult(result.value.data);
          useStore.getUser();
          getConfig();
          break;
        }
        case "finish": {
          result.value.id = data.id;
          router.push({
            query: {
              id: data.id
            }
          });
          break;
        }
      }
    };
    sse.onerror = () => {
      isSearching.value = false;
      showSearchResult.value = false;
    };
    sse.onclose = () => {
      isSearching.value = false;
    };
  };
  const abortSearch = () => {
    sse == null ? void 0 : sse.abort();
  };
  const getSearchInfo = async (id) => {
    var _a, _b;
    try {
      initResult();
      result.value.status = StatusEnums.ANALYSIS;
      showSearchResult.value = true;
      const {
        ask,
        model,
        type,
        results: data
      } = await getSearchDetail({ id });
      if (!data) {
        feedback.msgError("\u6570\u636E\u4E0D\u5B58\u5728");
        router.back();
        return;
      }
      options.value.ask = ask;
      options.value.model = model;
      options.value.type = type;
      result.value.query = ask;
      result.value.status = StatusEnums.SUCCESS + 1;
      if (Array.isArray(data)) {
        result.value.data = data.filter(
          (item) => ["markdown", "expand_query", "search_result"].includes(
            item.type
          )
        );
        result.value.search = getSearchResult(data);
        result.value.suggestion = data.find((item) => item.type == "suggestion") || [];
        result.value.outline_json = ((_a = data.find((item) => item.type == "outline_json")) == null ? void 0 : _a.content) || {};
        result.value.outline = ((_b = data.find((item) => item.type == "outline")) == null ? void 0 : _b.content) || {};
      } else {
        result.value.data = [
          {
            content: data.markdown,
            type: "markdown"
          },
          {
            type: "search_result",
            content: data.search_result
          }
        ];
        result.value.search = getSearchResult(result.value.data);
        result.value.suggestion = {
          type: "suggestion",
          content: data.suggestion
        };
        result.value.outline = data.outline || {};
        result.value.outline_json = data.outline_json || {};
      }
    } catch (e) {
      console.error(e);
      showSearchResult.value = false;
    }
  };
  return {
    config,
    getConfig,
    showSearchResult,
    options,
    result,
    launchSearch,
    abortSearch,
    initResult,
    getSearchInfo
  };
};
const useSearchEx = () => {
  const searchEx = ref([]);
  const getSearchEx = async () => {
    searchEx.value = await getSearchExample();
  };
  return {
    searchEx,
    getSearchEx
  };
};

export { useSearch, useSearchEx };
//# sourceMappingURL=useSearch-BaJoxou4.mjs.map
