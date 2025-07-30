import { b0 as ElMessageBox, A as feedback, d as ElButton, E as ElInput, B as vLoading } from './server.mjs';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { E as ElTable, a as ElTableColumn } from './el-table-column-tZnWqVKO.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { E as ElTag } from './index-D7S5lb8a.mjs';
import { _ as _sfc_main$3 } from './index-D60of7Hb.mjs';
import { defineComponent, inject, ref, shallowRef, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, Fragment, withModifiers, isRef, useSSRContext, nextTick } from 'vue';
import { u as usePaging } from './usePaging-DU8sXki3.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate } from 'vue/server-renderer';
import { f as fileDataList, d as fileDelete, e as fileRetry } from './my_database-C6D0rbWD.mjs';
import _sfc_main$1 from './renamePop-BToUb_Ck.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-0xCxAaTZ.mjs';
import './index-L-VTEUEA.mjs';
import '@popperjs/core';
import './index-53t5ntO1.mjs';
import './index-5Ia44xzE.mjs';
import 'normalize-wheel-es';
import './position-DVxxNIGX.mjs';
import './el-pagination-ClrwtCwT.mjs';
import './index-CUhOTuS-.mjs';
import './strings-D1uxkXhq.mjs';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './index-DLL0sEcv.mjs';
import 'async-validator';

const byHandImg = "data:image/png;base64,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";
const xlsx = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAABXFJREFUWEfdmXtQVHUUx793dwUExBeIFEaCYIiYaySglDZSU8pkk6HRhMlYIsJI0TgitolubYBKg2TTMKyWj9HBpiwLBns51UQyhkSBUko4gDxUGHk/9zZnY7f94YV73b2g9ftnh3vP48P3nt+557fLwXLtgAIh6hQYuE3g4MHck+GPiSpnrHJ/TNfW151xIij9pjUhOcbpiwX+UKAEgIM1wcR8JqkmIN4rsq2h9/o+fWDqG2L2QvdZ4C/Vq8BxH1sTSIoPASfeHwUePGq7GnVtfV23rTQLXPBQJHg+T0pya2xMwOTbz/dbpfQdAyZoo9LdDdr6zuY9BSHZrVJEuKPAg0rfrO9q2ntg/i7tfwKYIA0woK6z4c367pYsMaXvuMImVfv4/psNEpS+a4ClKn1XARO0mNJjCuykdMDrM6PBgU07dLNRTdd2N2lutHZmfR6W0WZ5f0yBKXGUx5Pwc7pPtCEYle69lnEgcKdueOB89XMAd0I0mg0GDgo7+Dh6wtVusmgUHgb+ckdNeN2y09+ajMdcYVHKoQY81mBFifnte1vAkdPDEekRzoRs7GnGu9VHUdVZNyLLeKU91ns+g0enqBm7H1tKoa/5DB0DXcL+tgB7OrijKPQg6NPcPw39RuCtlftGBH7cNQSH5+2Cu/1Us12PoQ+LitahpPXi8L62AFPUcNeFODRPCw97VyZJeHEcvrlRLJiYbL8P0WOWo6f5fmt/B5IuZkJfc3LkKrEV2F5hh20+MdgxawOTiGDXlaWitruRuU72Wt84bPFey1zX155E0oVMEPiIy1ZgU/CCoGw84RYKhUVPJYiNv+vQzw+YGWJnrMJe/9fgpBxvvna+tRKhRevQY+gV34NyAQdN9DeWhr/zTIua7EXEuUR8PVgaQjVPT+Dl37QovF4kDksWcgFTrBXTwpA3Px2Oyn9PVGVtf+KF0hQ09bYgN1CDp6ctMYMN8AOILtPg2NVCabByA6s4JbLmbEHsjGeh5JRGCCqHnJpPUNleDd3sBKYUjtcXIvpXDVMyouRyKkzJqAN8MDeFUZKuU33ShjMtKgEqhaGbcsyBKeG8Cb74IUQPF5WTYH5J/XY4crkVNuV58Z7l2B+QfAu05H471sCznbyQp043qm25KtqrsPr8VpS3V4k+fUGD0VCYNt97AcnGzSe0hPqzZPrRAF7uFoY8dRrTESyBaANGlW7Hp43mKVEyr6x9mLIunvwgDgamwtdiKG/uawXNvZb9ubrrKmLKUnGm+RfpsHL3YYp3+uH9WDY1GArun0mV1Hzrsh5Txrlgs9fz5v5M92iUpCFJ0ivZ9G/JVRI0327zjoFm1iuMYh/VncLmij2g85tQf95ddQg7L+UMP/8O1V8u4IhpjyB3roaZb6mFLfxpLSo7qo1pqWMULzoMe8U4M8a13hbEl6fjRMNX0kpDDmAaakoWH4WbxbmMYOPL03Dkaj4DkuC1Bu/4JcBZ5chALz27AdTyRJetwC4qZ2T6J2G950om15G6fMRXpN0y37raTTI+iZXuSxn7Y/WFSChPA23QEZetwFq/OCR7x4B6r2n90XEFYT+vBz1uoSU0ZtKQlF193HjqGDXgBS4P4LvgHOb1S6WQWLEbH9adGjEvDfL0ZCxbHR08I869ijPN54b3tVZhUonmW4K2XDRKai/lirYqOnGk+sbipXsjGP8L7X9hY7kO9Cm4rAWmvjrH2QcqTsHEpYFdtA4HPWiTBjh7M/4G8KjsuILGnhvyAovu5tEysFbh0eIRjfv/Ah7ln71E1RQy4Ayr8VSp+QvKMf1h0QrgbhiwABElF0y+LDD9dBus3g5wmwBMtyKBfC48GsDx7+Ps+bexEwZT4L8Bn330S/1bvzIAAAAASUVORK5CYII=";
const csv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFF0lEQVR4nO2bX0xbVRzHfwXZTEF5YIss29gCxk1kkOGcwuLQGKpbMkc3EnERgjoNxDnJwEwfFqrypMw/82GYaDTwIA8bxZhsS4mKM5txw39z8U8iZBsPAs5EEJiU0vr73nlqb3vLei/H2FvPJyH3/O69hfP7nN855zalDorDA96ae4IOxzMhClVx+J+yu3DXmw/d8uBebkrHUEClt6aer7zLzaSgdm01Tfgn2/YU1x/gUCoxAjDycw76hJtJAwSAsenLrS2lDS9yUxoxAlzemt6Qg7ZzM2kQAsAf/sl9TxXXv8ZNKcQIqOytCfEhqYgUkO5I+zNIwYdr11T3crhgbCcABEPBK6NXxrbtL93zEYcLwpYCgCwJthUAIME/5694suiRsxxawtYCwExgZngqNH1H07onRjk0je0FgIVISAkBwKqElBEA+GnxEj8truJmwqSUADA+M/Hx0yWP3cfNhEg5AcCMhJQUABKVYAsBrrwKusm5lFvmGPr94lueu5obuBkXWwgozSmi25au5ZZ5rvUO0hYCnGnX07YCFy1KX8SReeaTYAsBYHXmcrp7ZRm3rDEw+k3ToYq2N7ipwzYCQE5GNm1eUUZZi7M4Mge/Z6ALE8M728r293AYxlYCQGB2lm5Ic9J1lEYrspfzmcTxzwX8Hfe/vJibYWwnQDAXCNCsf4Zb5vhs14e6nHUBsIsAq/RVdety1gVACVAClAAlgA8pixKgBCgBupx1AVAClAAlQAngQ8qiBCgBSoAuZ10AlAAlwJqA4pxbqWRJIbeIRqZ/pc9HvqTJ2SmOYsG9BdmrKSvDSYPjF+ncbz/o7sWnQLn88+3l7zkyJisjk/JvzNNeawbpAspzN1DDujqtw+Acd7r4bxFdPx6hrp+Ocusq6HTrxn2aKCSO12SyBCTvHTwevrdlfSOVL7uddhzbzZExjUV15C7Yot2D1yeKVAGulRXEn7hoybR/fVg7AiTqzt/CH2rupI7vOqln6DifJXpl0wHtmufMQRrlKgEY7do11bRp2QZyH3ucz1yV6rmzmdq/6iDf8Kd8JpaerW/TEP+9llMvcZQ40gSg412Vh7SkG/uf4zOxiJEWI+Tb/j5XxVEe6SMczQ9+N6bSswYJCvHzCYqHNAGiBJE8kkwE79Z36OfxC/TCmVfDUuKBqkAF1fbtDVeLAJV0M68homLMIE1AO3cCC5mZToikMLKnfznLPwNxFzFRYdEVI85jzTh8vpPPmEOaAKtzEOWLyinIXsURaZWAZLxDJ7R2JJ6NzZTP99VxFQiERKPKSARpAlABwKwAAUayJKeQXHmbtV1jkKdGY//zfOUfxGLo+eIgnR4Z4DNEnTz6Y5y41b8rTQC2KnTe7DZkxA7eMbCVRiYqQLljjcHOYSTELNIEYIXHYhQ9R60Sb4cQJQ/RLesbtKmD8reKNAEAc7Sc92+j7QgdbeXreA7AaCFGAh3nu2Ke8LAuYFsz2lEwVVAFkAMROEZLMoNUAXioQVKQgDmMVR2g0/jHJiSDfRxTBPeiYiDiFO8AWECBuNd36aT2MGWEEA0w+lYWP4FUAQJMh0oexVznEi0hdBAyfMMnteQjwWgjGdwHpvg6ko+uoEggDc8d17ovEf4VAXZCCVAClABdzroAKAH/dwHJ+MVJWThC9IHP3V3FzTAxApLxq7OySA/RvSfc3f0UQYwAkGxfnpZCiB7tc3e/R1EYCgCohCBRk92nA8o+jej16JEX/AVS3+lfWhLTjQAAAABJRU5ErkJggg==";
const doc = "data:image/png;base64,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";
const pdf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACyUlEQVR4nO2bMUjjUBjH/1FwENo70EVQJ9FFsK5dxAZXrzc52sVFB+/Awe16u3C3u3R1K7oIWuktrnVwURw8FEVQEAU3yX3/exculLY2bWOT9PvBl3x5fUnf98tLCiWx0OOoAImeRgVI+MLJZj/i+XlZ0qxEsPT1fbUODk4kCwz/Amy7AsdJSfoePKK/fz5ICb4EOJnMF1n9QDIJjI9LGhAPD8DtrSR/CVSCPwG2XZCzv4zpaeDlRVoCgnLLZXgITII/AZlMGcBcFwSQQCRESQDpuISoCZARWydIJOatYvFRttomegJIByVEUwDpkIToCiAdkBBtAaRNCdEXQNqQEA8BpEUJ8RFAWpAQLwGG79bRUR5NogIkmubdBCQS/C9AEh/c3QE3N5LEQUArDA4Cp6eSqAAVoAJUgArIo0lUgETTqAAVoALKUAEqQAWoABWgAlSAClABVQImJ2VRxfX1/35DQya88EkQhguLGB2VpAbn57JoAPftqoDtbVPM/b1sCFNTps/ODnB8DCwuArYNXF2ZwY6NSSfh8ND0IdxnYwM4O5ONKra2ZNEAHrPrAvb2gN1d2fjH2pqZGevrRgBzbyGzs0AuB5RKZj9XwMoKfBNKASxwddUUVEsAYTtnBiXFSgAHlMuZolgcC60lgJ+z6M1NYHjY5O4xXHhp8TJqBL+v6wKqYZ9CAahU3hbgtjOvvgfwvuHeJ+oRCgE8SwwXbyH1BHgvE1cGc7+EQoD3EqimngAWTNgeewEzM2Yqc7D8GUynTc7iOc0jLYAD5/Rn1CKdNuGFNzcK45pQytKSEeKXrgvoNipABagAFaACghZg20U4zqfeFZDJ5AF8w8QEMDIiaYjgKzYXF1KR9dkqlYrS0hT+BPCNsaenSwAfJMLIbySTqcAelCTOwkIKr68/JZ2TCBO/MDCQs/b3L+ED3wLihgqQ6Gl6XsAfGqGLXxM1sLEAAAAASUVORK5CYII=";
const txt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD00lEQVR4nO2bT0gUURzHf2/+rIsRGVRS0db2HwS1gxoFVkR1sjzkoUNlhw5BUoeORVAdFYoOHVQyT0FdqlvRH+vUerAEISkKkwrDyBDM/eO8vm/8k7M7u85sI7szvQ/MvN9vZnm77zNv3rzd2WGUhWRveK9B/Bxx3oi0oCirzjzTN9zYj9BzbAUkYuFmTsZthEWBuvYiPtS3O1r0VjN5TIYA88hz4znCosEUAHhi+LIebb+C0DMyBMRjoS4iOomlaJgVIPBagp2APhTVWIqG+QIEXkqwE8BRFBXpAogbv9X4cAPb1PkU2T/hTwECjyT4V4DAAwn+FiAQEhIfd7KN3f3IXON/AYAZE8NKaLSGlXeMIHVFIAQI8pUQGAGCfCQESoDJ1K9eLdJWi8gRwRMAePKH4y9PgRQgcCrBFwKUFSeIlUQQucOJBF8IYKX1pCyvR+Sehb43+EIA52FSV7cQU0uQuSeXBF8IMAlVkbqyAUF+ZJPgHwEm5TgVDuGUiCDOg8TQMS3aeRfRHD4TgCOZwspYhksDFrcY8VR497COaA7fCZiFG1iJxSXhXQlLmy2JwC8C8qWkVgqwtNmSCKQAKUAKkAJQBBYpQAqQAixttiQCKUAKkAKkABSBRQqQAqQAS5stiUAKcCiAlVYt+MMkn+jHzcoxvK4Md3bWI3+LrTaI/aiPj/cgcVj3+Eus3eOZAK2il5TSSkTZSb5vIj72kJTyFtIirZR8dxAfvAd7rGgVMawZpQZqUBLpO74T03ILSA7UZheaA88EpBOqidPUl2s09fUqskyEMBaKULJ/23SvmEGNtJFafjZngxaq2w0FE0ChDaTjSIsekPrQhA1487LDpG+5R6nPF8gYuYkt9ixYtwsKJwBYGvzzEYS8hpBXEHIUe7PjpG6nFFSAQI12kLriOBno7gyDn+j6808JO5zW7YSCCxAjvl45iEGujFKfTpMx2o2NuXFctwMKLkBdc8n8xwePDyHj6AF1/08PYEv3kL79sfk6A5dHbdsTjAF/B8VsOKnbKYUTMNP1xeQoNXgAG6b/+qJF26cHxaBfBcRkh+FSmOzfauny2ub7uOffgFMhwPOAucmO3UxQ9AzIyTUe5KrbLYsmQBzJKYzoYuqbjhj4eGIo64gv5v7qutbpscBGgFk3Gp+th7hh0QT4BSlACpACLG22JAIpIBZ6g6IKSyBxIqCLiuzBSc/g7EFJXbwR0RwZAhKxJdWYkvQhDBwKU/bpNZMvaB4ZAgTF9vC0FzBSToVqJ7soDVsBAvMhaoOfJ8aPIPUv6PaKwq6nH/lZ/gBjD5Nf2bkbBQAAAABJRU5ErkJggg==";
const markdown = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADWUlEQVR4nO2Z3XHaQBDHVx77OaSCyB24g0AFwR1cKrCZ8cerX/0xg12B6cCkApMKQgfgDvCzPVZ+68EaEIIs4YQluN/Mzp6Ovdu9v4Q4pEi2nCAAttUEATAT19fX9SRJ7mnGsj56e3t7h61Wa0S7ECLMxNXV1QAXy/rpI0KjKBEizAQCJLjPojARqiKAUogIZRXgGfuCZfEuQlkF+I11ROQey+JVhAgzsW4Bzs7O6uR0UrAIpRZAgLxOChSh9AIo5HZSkAiVEEAhv5MCRKiMAAo1OPEsQqUEUKjDiUcRKieAQi1OPIlQSQEU6nHiQYTKCqBQk5N8EXqMb+D/SYSZIFmCWxcmARTqcpIjAuNNazMFKSRKcOtiGEVRR4zwnKKJO8BSqi7AygQBggBBANPaTEFKECAIEAQIAuCW5Y5NyggvbGxquCPMwh3xXfzHJsc6LqUUAmSLYI6eiHzHFjGzDWZcglsK5pjKPQ9TkOKjiJubm+bb29sDzbns7OwcnpycdGmm+Mg9D1OQ4qsI5hmKyDcsjyfGxJKBMQluKZhnJncepiDFVxG8ZD3me92mOQPf+9bp6ektzSl85c7DFKT4KqLdbtdeXl6GMvvm55kHGXHegwxfufMwBSk+i2CuW9wRNskd8cf4GYj3ljuLKUjxWQRXQcxVMKCZwtnf5+wPJQefubOYghTfRTBfF/cDU34R28TnQqzX3JOYgpRVi+DmV9/d3e1zlkccvh9zM3ykqTe/Bje/noBeHa+vr/HHsbJq7kWYgpRVi9AFsweon5+fX8gY+vqIUCMuljGXl5cX7AV6GykAi32g7yuH7zCnE6CvI8DZ11+IAVfE4aYK8EjzJ/0dyYEcTnjCiwDpV0KhP8EtBTnS3IswBSmrFjEhwJD+ffwM5Bjg4k0XQLILVCb/J2Q/XzX3IkxByqpFTAoAPT5r4FOYXz+rC2yDAFMbH+Y+wP3B3tkKAWDIQjsC9DsRiWUM/ZsnAOOdcIfHLEz9UjA2wS0F49PcizAFKf9TBPQ5m118bXyWa5iFEeM6gmdcE3+ALUVZBPg0ggBBgCCAaW2mICUIEAQIAgQBcJWhCAFGuC9YFXhCgFgMmAUY/5npyPzXWmXhKYoiN/lnahFmATaVIAC21Wy9AH8BUf5iXxuxTnAAAAAASUVORK5CYII=";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "datalist",
  __ssrInlineRender: true,
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  emits: ["toImport", "toItemList"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const knowDetail = inject("knowDetail");
    const popShow = ref(false);
    const renamePopRef = shallowRef();
    const suffixUnitMap = {
      doc,
      pdf,
      txt,
      xlsx,
      csv,
      mark: markdown
    };
    const getUnitImg = (name) => {
      const suffix = name.split(".").pop();
      for (const nameKey in suffixUnitMap) {
        if (suffix == null ? void 0 : suffix.includes(nameKey)) {
          return suffixUnitMap[nameKey];
        } else {
          return "";
        }
      }
    };
    const showText = (text) => {
      ElMessageBox.alert(`\u5931\u8D25\u539F\u56E0\uFF1A${text}`, "\u62C6\u5206\u5931\u8D25", {
        customStyle: {
          maxWidth: "400px"
        }
      });
    };
    const queryParams = ref({
      keyword: "",
      status: "",
      kb_id: props.id
    });
    const selectData = ref([]);
    const handleSelectionChange = (val) => {
      selectData.value = val.map((item) => item.uuid);
    };
    const dataDel = async (fd_id) => {
      await feedback.confirm("\u786E\u5B9A\u5220\u9664\uFF1F");
      await fileDelete({ fd_id });
      getLists();
    };
    const tableItemClick = (row) => {
      console.log(row);
      emits("toItemList", row.id, row.name);
    };
    const rename = async (id) => {
      popShow.value = true;
      await nextTick();
      renamePopRef.value.open(id);
    };
    const retry = async (id) => {
      await feedback.confirm("\u786E\u5B9A\u91CD\u65B0\u62C6\u5206\uFF1F");
      await fileRetry({ kb_id: props.id, fd_id: id });
      getLists();
    };
    const { pager, getLists, resetPage, resetParams } = usePaging({
      fetchFun: fileDataList,
      params: queryParams.value
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_el_button = ElButton;
      const _component_Icon = _sfc_main$2;
      const _component_el_input = ElInput;
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _component_el_image = ElImage;
      const _component_el_tag = ElTag;
      const _component_pagination = _sfc_main$3;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-main flex flex-col" }, _attrs))}><div class="flex justify-between"><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        disabled: ((_a = unref(knowDetail)) == null ? void 0 : _a.power) === 3,
        onClick: ($event) => _ctx.$emit("toImport")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5BFC\u5165\u6570\u636E `);
          } else {
            return [
              createTextVNode(" \u5BFC\u5165\u6570\u636E ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center ml-4 cursor-pointer">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "el-icon-RefreshLeft",
        size: "24",
        color: "#666666"
      }, null, _parent));
      _push(`</div></div><div class="mt-2 md:mt-0">`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: unref(queryParams).keyword,
        "onUpdate:modelValue": ($event) => unref(queryParams).keyword = $event,
        class: "!w-[280px]",
        placeholder: "\u8BF7\u8F93\u5165\u95EE\u9898/\u56DE\u7B54\u5185\u5BB9\u5173\u952E\u8BCD\u8FDB\u884C\u641C\u7D22",
        clearable: "",
        onKeyup: unref(resetPage)
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        class: "ml-2",
        type: "primary",
        onClick: unref(resetPage)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u67E5\u8BE2 `);
          } else {
            return [
              createTextVNode(" \u67E5\u8BE2 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_button, { onClick: unref(resetParams) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u91CD\u7F6E`);
          } else {
            return [
              createTextVNode(" \u91CD\u7F6E")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_el_table, mergeProps({
        class: "mt-4 cursor-pointer flex-1 min-h-0",
        data: unref(pager).lists,
        size: "large",
        "row-class-name": "h-[70px]",
        onSelectionChange: handleSelectionChange,
        onRowClick: tableItemClick,
        "row-key": "id"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(pager).loading)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u540D\u79F0",
              prop: "name",
              "min-width": "250"
            }, {
              default: withCtx(({ row, $index }, _push3, _parent3, _scopeId2) => {
                var _a2, _b, _c, _d, _e, _f;
                if (_push3) {
                  _push3(`<div class="flex items-center"${_scopeId2}>`);
                  if (row.is_default == 1) {
                    _push3(ssrRenderComponent(_component_el_image, {
                      class: "w-[22px] h-[22px] flex-none",
                      src: unref(byHandImg)
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (row.is_default != 1 && getUnitImg(row.name)) {
                    _push3(ssrRenderComponent(_component_el_image, {
                      class: "w-[22px] h-[22px] flex-none",
                      src: getUnitImg(row.name)
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="ml-2"${_scopeId2}><div${_scopeId2}>${ssrInterpolate(row.name)}</div>`);
                  if (row.is_qa == 1) {
                    _push3(`<!--[-->`);
                    if (((_a2 = row.qa) == null ? void 0 : _a2.status) == 0) {
                      _push3(ssrRenderComponent(_component_el_tag, { type: "info" }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`\u7B49\u5F85\u62C6\u5206 `);
                          } else {
                            return [
                              createTextVNode("\u7B49\u5F85\u62C6\u5206 ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (((_b = row.qa) == null ? void 0 : _b.status) == 1) {
                      _push3(ssrRenderComponent(_component_el_tag, { type: "warning" }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u62C6\u5206\u4E2D `);
                          } else {
                            return [
                              createTextVNode(" \u62C6\u5206\u4E2D ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (((_c = row.qa) == null ? void 0 : _c.status) == 3) {
                      _push3(ssrRenderComponent(_component_el_tag, {
                        type: "danger",
                        onClick: ($event) => {
                          var _a3;
                          return showText((_a3 = row.qa) == null ? void 0 : _a3.error);
                        }
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u62C6\u5206\u5931\u8D25 `);
                          } else {
                            return [
                              createTextVNode(" \u62C6\u5206\u5931\u8D25 ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      row.is_default == 1 ? (openBlock(), createBlock(_component_el_image, {
                        key: 0,
                        class: "w-[22px] h-[22px] flex-none",
                        src: unref(byHandImg)
                      }, null, 8, ["src"])) : createCommentVNode("", true),
                      row.is_default != 1 && getUnitImg(row.name) ? (openBlock(), createBlock(_component_el_image, {
                        key: 1,
                        class: "w-[22px] h-[22px] flex-none",
                        src: getUnitImg(row.name)
                      }, null, 8, ["src"])) : createCommentVNode("", true),
                      createVNode("div", { class: "ml-2" }, [
                        createVNode("div", null, toDisplayString(row.name), 1),
                        row.is_qa == 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          ((_d = row.qa) == null ? void 0 : _d.status) == 0 ? (openBlock(), createBlock(_component_el_tag, {
                            key: 0,
                            type: "info"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u7B49\u5F85\u62C6\u5206 ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          ((_e = row.qa) == null ? void 0 : _e.status) == 1 ? (openBlock(), createBlock(_component_el_tag, {
                            key: 1,
                            type: "warning"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u62C6\u5206\u4E2D ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          ((_f = row.qa) == null ? void 0 : _f.status) == 3 ? (openBlock(), createBlock(_component_el_tag, {
                            key: 2,
                            type: "danger",
                            onClick: withModifiers(($event) => {
                              var _a3;
                              return showText((_a3 = row.qa) == null ? void 0 : _a3.error);
                            }, ["stop"])
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u62C6\u5206\u5931\u8D25 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : createCommentVNode("", true)
                        ], 64)) : createCommentVNode("", true)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u5F85\u8BAD\u7EC3",
              prop: "wait_sum",
              "min-width": "150"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u5DF2\u8BAD\u7EC3",
              prop: "ok_sum",
              "min-width": "150"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u6570\u636E\u603B\u91CF",
              prop: "total_sum",
              "min-width": "150"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u521B\u5EFA\u65F6\u95F4",
              prop: "create_time",
              "min-width": "150"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_table_column, {
              label: "\u64CD\u4F5C",
              "min-width": "200",
              fixed: "right"
            }, {
              default: withCtx(({ row, $index }, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_button, {
                    type: "primary",
                    link: "",
                    onClick: ($event) => rename(row.id)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u91CD\u547D\u540D `);
                      } else {
                        return [
                          createTextVNode(" \u91CD\u547D\u540D ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  if (((_a2 = row.qa) == null ? void 0 : _a2.status) == 3) {
                    _push3(ssrRenderComponent(_component_el_button, {
                      type: "primary",
                      link: "",
                      onClick: ($event) => retry(row.id)
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u91CD\u65B0\u62C6\u5206 `);
                        } else {
                          return [
                            createTextVNode(" \u91CD\u65B0\u62C6\u5206 ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if ($index != 0) {
                    _push3(ssrRenderComponent(_component_el_button, {
                      type: "danger",
                      link: "",
                      onClick: ($event) => dataDel(row.id)
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u5220\u9664 `);
                        } else {
                          return [
                            createTextVNode(" \u5220\u9664 ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_el_button, {
                      type: "primary",
                      link: "",
                      onClick: withModifiers(($event) => rename(row.id), ["stop"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u91CD\u547D\u540D ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    ((_b = row.qa) == null ? void 0 : _b.status) == 3 ? (openBlock(), createBlock(_component_el_button, {
                      key: 0,
                      type: "primary",
                      link: "",
                      onClick: withModifiers(($event) => retry(row.id), ["stop"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u91CD\u65B0\u62C6\u5206 ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : createCommentVNode("", true),
                    $index != 0 ? (openBlock(), createBlock(_component_el_button, {
                      key: 1,
                      type: "danger",
                      link: "",
                      onClick: withModifiers(($event) => dataDel(row.id), ["stop"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u5220\u9664 ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_table_column, {
                label: "\u540D\u79F0",
                prop: "name",
                "min-width": "250"
              }, {
                default: withCtx(({ row, $index }) => {
                  var _a2, _b, _c;
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      row.is_default == 1 ? (openBlock(), createBlock(_component_el_image, {
                        key: 0,
                        class: "w-[22px] h-[22px] flex-none",
                        src: unref(byHandImg)
                      }, null, 8, ["src"])) : createCommentVNode("", true),
                      row.is_default != 1 && getUnitImg(row.name) ? (openBlock(), createBlock(_component_el_image, {
                        key: 1,
                        class: "w-[22px] h-[22px] flex-none",
                        src: getUnitImg(row.name)
                      }, null, 8, ["src"])) : createCommentVNode("", true),
                      createVNode("div", { class: "ml-2" }, [
                        createVNode("div", null, toDisplayString(row.name), 1),
                        row.is_qa == 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          ((_a2 = row.qa) == null ? void 0 : _a2.status) == 0 ? (openBlock(), createBlock(_component_el_tag, {
                            key: 0,
                            type: "info"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u7B49\u5F85\u62C6\u5206 ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          ((_b = row.qa) == null ? void 0 : _b.status) == 1 ? (openBlock(), createBlock(_component_el_tag, {
                            key: 1,
                            type: "warning"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u62C6\u5206\u4E2D ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          ((_c = row.qa) == null ? void 0 : _c.status) == 3 ? (openBlock(), createBlock(_component_el_tag, {
                            key: 2,
                            type: "danger",
                            onClick: withModifiers(($event) => {
                              var _a3;
                              return showText((_a3 = row.qa) == null ? void 0 : _a3.error);
                            }, ["stop"])
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u62C6\u5206\u5931\u8D25 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : createCommentVNode("", true)
                        ], 64)) : createCommentVNode("", true)
                      ])
                    ])
                  ];
                }),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "\u5F85\u8BAD\u7EC3",
                prop: "wait_sum",
                "min-width": "150"
              }),
              createVNode(_component_el_table_column, {
                label: "\u5DF2\u8BAD\u7EC3",
                prop: "ok_sum",
                "min-width": "150"
              }),
              createVNode(_component_el_table_column, {
                label: "\u6570\u636E\u603B\u91CF",
                prop: "total_sum",
                "min-width": "150"
              }),
              createVNode(_component_el_table_column, {
                label: "\u521B\u5EFA\u65F6\u95F4",
                prop: "create_time",
                "min-width": "150"
              }),
              createVNode(_component_el_table_column, {
                label: "\u64CD\u4F5C",
                "min-width": "200",
                fixed: "right"
              }, {
                default: withCtx(({ row, $index }) => {
                  var _a2;
                  return [
                    createVNode(_component_el_button, {
                      type: "primary",
                      link: "",
                      onClick: withModifiers(($event) => rename(row.id), ["stop"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u91CD\u547D\u540D ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    ((_a2 = row.qa) == null ? void 0 : _a2.status) == 3 ? (openBlock(), createBlock(_component_el_button, {
                      key: 0,
                      type: "primary",
                      link: "",
                      onClick: withModifiers(($event) => retry(row.id), ["stop"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u91CD\u65B0\u62C6\u5206 ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : createCommentVNode("", true),
                    $index != 0 ? (openBlock(), createBlock(_component_el_button, {
                      key: 1,
                      type: "danger",
                      link: "",
                      onClick: withModifiers(($event) => dataDel(row.id), ["stop"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u5220\u9664 ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : createCommentVNode("", true)
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-end mt-4">`);
      _push(ssrRenderComponent(_component_pagination, {
        modelValue: unref(pager),
        "onUpdate:modelValue": ($event) => isRef(pager) ? pager.value = $event : null,
        onChange: unref(getLists)
      }, null, _parent));
      _push(`</div>`);
      if (unref(popShow)) {
        _push(ssrRenderComponent(_sfc_main$1, {
          ref_key: "renamePopRef",
          ref: renamePopRef,
          onSuccess: unref(getLists),
          onClose: ($event) => popShow.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/kb/detail/_components/study_com/datalist.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=datalist-BecEn16X.mjs.map
