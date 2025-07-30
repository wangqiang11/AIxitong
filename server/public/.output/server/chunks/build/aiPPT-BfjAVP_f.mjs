import { isObject, isString } from 'lodash-es';
import { y as defineStore, z as useUserStore, A as feedback, a as useRouter } from './server.mjs';
import { reactive, ref } from 'vue';
import { e as getPPTConfig, f as genPPT, h as getPPTOutline, i as getPPTExample } from './ai_ppt-C1HXY0_t.mjs';
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

const useAiPPTStore = defineStore({
  id: "aiPPT",
  state() {
    return {
      config: {
        status: 0,
        price: 0,
        isVipFree: true
      },
      options: {
        type: 1,
        prompt: "",
        cover_id: "",
        title: "",
        catalogs: []
      },
      isGenning: false,
      isGenningOutline: false,
      showTemplate: false,
      showOutline: false,
      outlineLists: []
    };
  },
  actions: {
    async getPPTConfig() {
      this.config = await getPPTConfig();
    },
    async genPPT(promptOrOptions) {
      const userStore = useUserStore();
      if (!userStore.isLogin) return userStore.toggleShowLogin();
      let params = {
        ...this.options
      };
      if (isObject(promptOrOptions)) {
        params = promptOrOptions;
      } else if (isString(promptOrOptions)) {
        params.prompt = promptOrOptions;
      }
      if (!params.prompt) {
        return feedback.msgError("\u8BF7\u8F93\u5165\u6807\u9898");
      }
      if (params.type === 1) {
        await this.genPPTSubmit(params);
      } else if (params.type === 2) {
        this.showTemplate = true;
      } else {
        this.showOutline = true;
        this.outlineLists = [];
        this.genOutline(params.prompt);
      }
    },
    async genPPTSubmit(params) {
      if (this.isGenning) return;
      this.isGenning = true;
      const router = useRouter();
      const userStore = useUserStore();
      try {
        await genPPT(params);
        await router.push({
          path: "/ai_ppt/history"
        });
        userStore.getUser();
        this.options.catalogs = [];
        this.options.cover_id = "";
        this.options.title = "";
        this.options.prompt = "";
      } catch (error) {
        console.error(error);
      } finally {
        this.isGenning = false;
      }
    },
    async genOutline(prompt = "") {
      if (this.isGenningOutline) return;
      this.isGenningOutline = true;
      const item = reactive({
        prompt: prompt || this.options.prompt,
        title: "",
        catalogs: [],
        status: 0
      });
      this.outlineLists.push(item);
      try {
        const data = await getPPTOutline({
          prompt: item.prompt
        });
        item.status = 1;
        item.title = data.title;
        item.catalogs = data.catalogs;
      } catch (error) {
        item.status = 2;
      } finally {
        this.isGenningOutline = false;
      }
    }
  }
});
const useSearchEx = () => {
  const searchEx = ref([]);
  const getSearchEx = async () => {
    searchEx.value = await getPPTExample();
  };
  return {
    searchEx,
    getSearchEx
  };
};

export { useAiPPTStore, useSearchEx };
//# sourceMappingURL=aiPPT-BfjAVP_f.mjs.map
