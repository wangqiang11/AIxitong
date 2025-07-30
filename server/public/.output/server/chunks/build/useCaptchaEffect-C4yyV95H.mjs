import { ref } from 'vue';
import { bY as captcha } from './server.mjs';
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
import 'lodash-es';
import '@vueuse/core';
import 'weixin-js-sdk';
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';

const useCaptchaEffect = () => {
  const captchaKey = ref("");
  const captchaImage = ref("");
  const getCaptchaFn = async () => {
    try {
      const data = await captcha();
      captchaKey.value = data.key;
      captchaImage.value = data.image;
    } catch (error) {
      console.log("\u83B7\u53D6\u56FE\u5F62\u7801\u5931\u8D25=>", error);
    }
  };
  return {
    captchaKey,
    captchaImage,
    getCaptchaFn
  };
};

export { useCaptchaEffect as default };
//# sourceMappingURL=useCaptchaEffect-C4yyV95H.mjs.map
