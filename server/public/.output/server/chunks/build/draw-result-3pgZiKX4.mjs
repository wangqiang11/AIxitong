import { E as ElSegmented } from './el-segmented-KMsqQ2AI.mjs';
import { E as ElTag } from './index-D7S5lb8a.mjs';
import { E as ElTooltip } from './index-L-VTEUEA.mjs';
import { _ as _sfc_main$1 } from './index-D8NbhMns.mjs';
import { _ as _sfc_main$2 } from './index-BoqjHllR.mjs';
import { E as ElResult } from './el-result-V-Bl2idQ.mjs';
import { E as ElImage } from './index-C2yEelJa.mjs';
import { _ as _sfc_main$3 } from './index-D60of7Hb.mjs';
import { a5 as useAppStore, bo as copy, A as feedback, B as vLoading } from './server.mjs';
import { useSSRContext, defineComponent, ref, shallowRef, watch, unref, isRef, withCtx, createTextVNode, toDisplayString, createVNode, mergeProps, openBlock, createBlock, Fragment, renderList, createCommentVNode, withDirectives, nextTick } from 'vue';
import { ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrGetDirectiveProps } from 'vue/server-renderer';
import { s as scroll, t as taskStatusChange, p as pager, e as deleteHandle, g as pageLoading, h as getLists, r as resetFormData, d as createTask, f as formData } from './useDrawEffect-B2jxDCVi.mjs';
import { useImageSplit } from './useImageSplit-WhIb7DvG.mjs';
import { a as downloadImgFile } from './download-N0luyf1S.mjs';
import { DrawResultTypeEnum } from './DrawEnum-CqAPEJOR.mjs';
import DrawShare from './draw-share-CqwfKs_W.mjs';
import ImageEditor from './image-editor-CXRfZ5rL.mjs';
import { D as DrawingEmpty } from './empty-image-DpkSTY4G.mjs';
import { d as drawError } from './error-BBvUyUA_.mjs';
import { E as ElScrollbar } from './index-0xCxAaTZ.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import '@vue/shared';
import '@popperjs/core';
import 'lodash-unified';
import './index-DVLwoLV9.mjs';
import 'video.js';
import './position-DVxxNIGX.mjs';
import './el-pagination-ClrwtCwT.mjs';
import './index-CUhOTuS-.mjs';
import './strings-D1uxkXhq.mjs';
import './index-5Ia44xzE.mjs';
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
import 'weixin-js-sdk';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './usePaging-DU8sXki3.mjs';
import './usePolling-DOP50YcO.mjs';
import './task_reward-DRop0WtE.mjs';
import './index-BKj4TrcW.mjs';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import './refs-CJvnaIJj.mjs';
import './useLockFn-BWbjkhBs.mjs';
import './useImageEditor-FUvZEPjo.mjs';
import './DrawingTool-DEHEFSZT.mjs';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAASeSURBVHic7Zs9b+NGEIbfWRKHcyrlHyhdkGvkpEsaqkt3DiAd1FkGKMClXJzNzlJHJ4VVCrEA6zrBOuDkLp3VBLjqrCrt8Sco1QE+UZOCtCHxQxcuP5XoAQzIQ2k4O+TO7uzOEkJo6IZmEw7BXAFQBlAK+24WEMFihsXg28Xiq+Fk2JknotcraBwbZXuBa4C1JG6QFgTqPiye9+I6Ys0BNf20TaDLeKZlBxEsoVB11DctaR2PH7at8SvMFZX2ZZ1AAFBvva6Axf2G780ASqTPycElbIhDcd4E1dEvAp88gbpCxTDOK5YkNd3QCHwOQFuVM6Ns2zgHcBRVJ7lK7/xXlvvjq99mssamySvd6LDjiDUUlb6J+rCEAL/0CgnULWrjAeBmYHYA+Oyz7fU3498gQDjwCh8Wz3tSlmWIAjrxCRmHUfUI5vXAQgQrqUlGmowG5hTAmp1EXI6qR8ATWZnJimFXxtBaN2BGOaoGkZgteUCwPJLIcUtNxpKccgdmr6RS188ehXMizMGYLEG3b50u4yO2Ax5zBxuswWdPrpTc+NYmcLuun01ByxPv6BarC9T007a94I9FT5xcNLC4r+mn7VWhtAO2NXcg0OWqE6S6gJM7bGx8zrmDMySGjQoEumwcG5NR37TkYkBI7gCioaKgW5Tc4aDZKT1TP50z0PZec9Y8UKWVqOlC0/HArIYpDc8d6Gh8ZQ5jW50C9ZbRBPO1V66AqpFjQHDugF5RGw8A4ytzCKKhV24TDqMHwcDcYa8rZ1p2KAr8NjJXIjtga3MHJy55Z4plmWFwm3MH74MqbXcukACJ5QJJUW+9rhDEO2bMQcujtBdmivcGsLh0JzAVsPANXUlTPAesL3hW0r5ZER2QKTsH5G1A3uwckLcBebNzQN4G5M3OAXkbkDep5wJu7cE1JGd1/hWrJwKXuaOS/hsQo/FfQCOId3GVpO4Aonyry75E6g5gLH8BME1B9czVHYvUY4DbR0NXmb14+/x4cOEr5UuS//0oIMi3xcyp5+BFQgQsapYauqHlYEsuCBDeeIU2eOs2PWURihIYoSuvdKOTsS25IEZ90wraNmLweV0/u6tl3x1mIZ9TQQWcbaOlDS1gO1kjsFbXz+YALAKmqReB0PIILK6JUFpyQClc0rd7/OCUuvA9Itf2bN5NLhJ13bjzVrM8zQNGfdNSVNr3D4v/bdYmQqO+aT183tsnUOF3e5PCNxOcDDvzm4HZ+bzY+5rBJwCmK29FYeuHZQnNBdwt757798SG/Hwr2eUCEr/x7LFzofP9VQKKqecyDrA8/1cax4ZXceE4aHZK3nkOkYwDiHyB0D2uUmieqZ/8NjImkR2gsD95AnOz3jKaUpZlQL1lNINqBZegW6nVlqAZFeCUyz0s9rpFKZpqHBvOYSrmZsDl6XhwUZVygDtt/hh23TnmmnfxFJewaTXaPRQmvd62rcXSAMDgk7eDX3sAoMgq+evDn++/+/6nvwn0c3Kmpc9q44EYDgAcJ7z44cdbgL4Fop/XyRaaKipVb36/+GNNmpT6mm5oAvwShAO3mjTvCdIcgAWimcJ4Mwo5MvMPuv+737QxZD0AAAAASUVORK5CYII=";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPASURBVHic7ZvBUuJKFIb/04BV7niEPAI8wcgTDFYJxRJqQhVLWajZGXeRWeDsrIIpuTsKrJJ5AnkDeYPJI7DTUpIzC+K9XBJESMixnHwr7ba6//yEc/p0twRhSvWTHEHdMWMKcmvDzvdJnPOrOCcLhFWbGRqAHFjdxD29vAHAwcLPubgn/wgGiJIYIC1AmsQAaQHSJAZIC5AmMUBagDSJAdICpEkMkBYgTWKAtABpEgOkBUiTGCAtQJrEAGkB0iQGSAuQJjFAWoA06UrD0JwZ3wHQiDB+ftmvjXrmVFrYLihWzWwm89QGcxXAOJWmmnJmfIP5kVSWGcW99OO5rMzdsZd+OvYeHgAOnBnfKfz/bA4Miv18Li4Y+LLUlEtiQNgBSvWT12PtHLzvVf/askMreweVhqE5Ds4JfABgolLU3HTu8G/Afw8PzL9XD0e6cRB63DVUGobmOnwP5iozNGYUvWC+EaENIEJ2qSlL4Psj/fQ47NirKH87LTozfvAuViyy/PtaQhvgMv8IaidQu6wbZtjxlznST4+Z6A7wGQ8GX2w6XmgDbrutKxDVAPjWDgw+L9XPbopV0yd2G8q6YRKoHdRHoIvbbutq0zEjyQLDjtUDuQUi2L5ORjWTfryvNAwtzBxl/azN4KA1ypSYDwddy9xm3MjS4LDzfaJSFGwCkHMd3sqESsPQSvrZAwO+mEIEG+QWBj9boy0kA4i4FuhfW7ZKUQGA76obM7RNM8S/kT7g8hQRbJWiQthrdZEvhPrXlv0y2y+A0AvofneGKNVPcq7D9wGRHpjn/EIU642drARHPXM67FzWCBQYlddliPK30yJYBT48AVfD7mU+qsXWTpfCg65lMrgZ1PeaIZbby7phrkpzBLoYdC8Dx9uWndcCt93WFTEfIiBNglH1NwVGejC4uW2kf4tYiqHBz9ZoZZpcz5RBhW1y/HuIrRpckyYDIYKdSlP+tmuNd6Ur1nK4f23Zzy/7eQLe82mOo4r0bxG6HN4Ub7uteaQbvxT4KwhFZmQxD3oTItiK6Ud/h5/6IrEb8Ir3Wo8BRBrVN+Wv3xFKDJAWIE1igLQAaRIDpAVI85cZwL4KU8FXpXEuqk3Mj4T3TNpS81QBtLyllM1kHtufyYT5qfBjG/49hgmV6kYVzIH/sbll+frhWLGtBgY3CQDK9bPfq/7os0IE+/llP68AgOEeSguKG4Z7OOqZUwXMNytAbv6zvPJv4Z0l5F+302mxs1g1s3vpp2MGf4F3a0RC5A6YAjQB4Z9hx+otdvwBWkxh8jN8G8MAAAAASUVORK5CYII=";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAA6RJREFUaEPtWV1u2kAYLCAQb6UnKDlBkxOUG5ScoEYCxBvhBDEnCHlDgBTnBEluQE4QcoLQG4RXENAZtI7Msru2g81CVUsIy+ufmf3m+9vNfDmCw3GcUqFQaK/X62omkzknJJyPcT6ez+e3nue962BmbONvNptVgL0D2JIKC8beMVYbDAaPqnGrBAgeoB4iTuKlioQ1ApRNPp9/0828TIqWWCwWZ7KcrBHA7LsAeS0B7UDzXrFYLK1WK0c1Div0gs9YI9BoNOikPwNgOjI4mSSs8DwcDitHQQDg1kEgmPlvsjxarVYZlngL3geSW5NuzQInTUDE/RfMbPnkJATtM1Ex7m8SVvCAxq9yudwTr0E6v/FHRw8eO35yUAkBfBvAt6JIxBzA22bwk7KVMCokcwcQTFyfPewksnq9XsGsP2gS1r2oeWiVrxpmM1x3rJQSiDQ3+PiVAtgWKGEh3kcL/RD3v+L/EbLpHbyYY/xeLpecdZWjPsNRnX6/P/2sloLPJe7EcFQHH7jRSKYLKciRZS8eiREwOSp0/gc/ZzQajfdCq3g4EQKM7XRUvL8sfwPAn1BFOiYd70PKSEDM6jVAMJL4ndIE53SuTacER2VFqZLFjIkJxZe3D8CwZ7UEQrTMlo9t3lTlqLj+SskA/CQMwL7jSgIED2BMPLEPAL8FcFXojP2uKA/sEIjbKQU+MkP9Uk3DUU1EdghoOqVuNpvdaJkgGSaDL2WUgaOep+WosQhAPi+SrlWdEiXyQQIEJpDNRRSTJ32PygJbnRJm/kzOmlE6paSB6t73TxJg6PMLKhLfSf+KZlu55HEIK0R1YhdSuhdOrOqUNnnBtIKWFhllGMU65RQf1NXnRiwg4iEidQ4VkRJPZILdFOG2doicoC0lxLolY7+xU8I4ayR5hc23Ug81UzdNa0Qp5kI7JVGNkmzQ+X0SU8jqMq26KJFy2keqyeL+sItmppu0MydKgOBEE+8hIn2XwTJj41otSWskToCgRUHogkRbM+Nb1pB3aESpzr7D7g5NiDXGaO5raP4rIKnrof2+o6NrjFKxQHDWhTUoqV8KSTH5KbeWFJazs7AVcHCW4aawHJYg7e/QmKwB9FzscrlDQyaoBhxKS2Jld3HXB6NpWf/v0CSdY4zvQ9LjqsZHmXJyW0yKTb4ofcdRbfK5sIBcBIb1HcfhxH62jtl32Nuh0TlDzAU0u4kshIRxh8a0YJZ6KREltCl2aLgw7Bdzxh2av7NNTU+S4JOoAAAAAElFTkSuQmCC";
const _imports_3 = "data:image/png;base64,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";
const _imports_4 = "data:image/png;base64,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";
const _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAN4SURBVHic7Zs/T9tQFMXPdQyqOuUb1DNTylpVCls3EqlGbE2lRGIrGVC8kUwNLDAiEdSwRaQS9BMkSK3UCdKhXeuPkC4FVY5vhwYEtvPXz7mh+Dc+552cdxJf28/vERRjFqwcgVcBpJhhqNAkgg2gw6BPzcNqXYXmrbYqofUNy3B73FI16EEQwdYStNI4qNpK9FSImIWtFFhrAUiq0BuDbkKn5ypC0MIKZHLlJEE7xewGDwBJt8ctFUJ6aAH9d46ZjOCj1A6rD3ASgAFPwMwwzIKVC1sTQgdAoNWA5k5Cp6yq83RgfWG8AVAPox36FACQ8jYwqKhq8ADQOKjaGtNb/xH2ffekqAjAd+7rOmwFuh7RQM3QdUdFAA+aOABpA9KEvgoE4fa4tVYoqdZUqncD9e/iPiCgmv/ntEFuUSdop4xo79/nlDRBO330NUBjuFkAbWkjAnQYbtb3NGjmS95q0wWoMyNTIeEUPDdHzdrO0CfeMa4C1GnWqiuhfM0IM2+1AE5P0ieuAdIGpIkDkDYgTRyAtAFp4gCkDUgTyePw+oZlOI6bAQDHeVo/q5e7kjrDUP4PuJnBJdAegfYWF64u1zcsQ0pnFMoDcB3k7k5fM+P2V5wEx3EzXh3XQU6JyTsoD4AJz/xfok08exvUJ0g7LI++CMYBSBuQJg5A2oA0cQDSBqSJA5A2IE0cgLQBaeIApA1IEwcgbUCaOABpA9LEAUgbkEZ5AMSsfOo6SiKYFKVv/kZ38hUmwX3Op7A0FOUBNA+rdQYXAXQBdAlUOTnaPZtU5+Ro94zBxf52mS6BKqq3ywARvRn6WNvdB7A/LzrDiItgQNuDKmL3Ye/LlJFjCQrA9oimM7nyLPcDTUXfo3G3jWiaAMi/JnBRv94M4W0m9D3e/6EYI4uvL4AE49jbxuBts7A1t4upzcJWisHb3nYX9GlU38BVlGuF0s+gDZAEqvxxnuxH8Z5+GjK5cnJRv94MGjyAdrO2M3KBZ+BlkJHIAr1LfztvL+hX78x8yQZoDkK4Sg/aRcCgyjgKA9fRruWt8oBk5x4GF/v3ECNJDDrw/eJze2n5xS8CvVJnLXoIVGnWdqrjfn5gAADw4+LL16Xll+f07/JihPQWKUSwQYmVZu19Y6J+437wdd5Ka+BVEDLMSGK2e4WD6AKwQdRJMI4btWp7GpG/LfYqa6tBN3MAAAAASUVORK5CYII=";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "draw-result",
  __ssrInlineRender: true,
  emits: ["pageChange", "taskStatusChange"],
  setup(__props, { emit: __emit }) {
    const appStore = useAppStore();
    const resultScrollBar = ref();
    const statusMap = {
      0: {
        label: "\u751F\u6210\u4E2D",
        type: "warning"
      },
      1: {
        label: "\u751F\u6210\u4E2D",
        type: "warning"
      },
      2: {
        label: "\u751F\u6210\u5931\u8D25",
        type: "danger"
      },
      3: {
        label: "\u751F\u6210\u6210\u529F",
        type: "success"
      }
    };
    const taskStatus = ref(-1);
    const taskStatusOptions = [
      {
        label: "\u5168\u90E8",
        value: -1
      },
      {
        label: "\u5B8C\u6210",
        value: 3
      },
      {
        label: "\u8FDB\u884C\u4E2D",
        value: 1
      },
      {
        label: "\u5931\u8D25",
        value: 2
      }
    ];
    const showShare = ref(false);
    const shareRef = shallowRef(null);
    const sharedIds = ref([]);
    const showImageEditor = ref(false);
    const imageEditorRef = shallowRef(null);
    watch(
      () => scroll.value,
      () => {
        var _a;
        (_a = resultScrollBar.value) == null ? void 0 : _a.scrollTo(0, 0);
      }
    );
    const shareDraw = async (drawing, base64) => {
      const params = {
        image: drawing.image,
        prompts: drawing.prompt,
        records_id: drawing.id
      };
      if (base64) {
        params.is_base64 = 1;
        params.base64 = base64;
      }
      if (sharedIds.value.includes(drawing.id) || drawing.is_share) {
        await feedback.confirm("\u8BE5\u56FE\u7247\u5DF2\u5206\u4EAB\u8FC7\uFF0C\u662F\u5426\u786E\u8BA4\u91CD\u590D\u5206\u4EAB\uFF1F");
      }
      showShare.value = true;
      await nextTick();
      shareRef.value.open(params);
    };
    const { images, splitImage } = useImageSplit();
    const handleSplit = async (item) => {
      try {
        item.loading = true;
        await splitImage(item.image);
        console.log(images.value);
        item.image = images.value;
      } finally {
        item.loading = false;
      }
    };
    const scrollTop = async () => {
      var _a;
      pageLoading.value = true;
      await getLists();
      (_a = resultScrollBar.value) == null ? void 0 : _a.scrollTo(0, 0);
      pageLoading.value = false;
    };
    const reDrawHandle = (item) => {
      const params = {
        draw_model: item.engine,
        image_mask: item.image_base,
        negative_prompt: item.negative_prompt,
        prompt: item.prompt,
        size: item.scale,
        draw_loras: item.loras,
        version: item.version
      };
      if (item.image_base) {
        params.draw_type = "img2img";
      }
      resetFormData(params);
    };
    const handleMjEdit = async (item, action) => {
      const params = {
        action,
        draw_model: item.engine,
        image_mask: item.image_mask,
        negative_prompt: item.negative_prompt,
        prompt: item.prompt,
        size: item.scale,
        origin_task_id: item.task_id,
        complex_params: JSON.parse(item == null ? void 0 : item.complex_params)
      };
      if (params.image_mask === void 0 && item.image_base) {
        params.draw_type = "img2img";
        params.image_mask = item.image_base;
      }
      await createTask({
        ...formData.value,
        ...params
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_segmented = ElSegmented;
      const _component_el_tag = ElTag;
      const _component_el_tooltip = ElTooltip;
      const _component_aspect_ratio = _sfc_main$1;
      const _component_Icon = _sfc_main$2;
      const _component_el_result = ElResult;
      const _component_el_image = ElImage;
      const _component_pagination = _sfc_main$3;
      const _directive_loading = vLoading;
      let _temp0;
      _push(`<!--[--><div class="bg-body flex-1 rounded-[12px] p-4 flex flex-col gap-4 relative" data-v-2fa59074><div class="sticky top-0" data-v-2fa59074><div class="border-b border-b-[#eff0f2] dark:border-[#333333] pb-4" data-v-2fa59074> \u7ED8\u56FE\u4EFB\u52A1 </div><div class="mt-4" style="${ssrRenderStyle({ "--el-border-radius-base": "12px" })}" data-v-2fa59074>`);
      _push(ssrRenderComponent(_component_el_segmented, {
        class: "task_type !bg-[transparent]",
        modelValue: unref(taskStatus),
        "onUpdate:modelValue": ($event) => isRef(taskStatus) ? taskStatus.value = $event : null,
        options: taskStatusOptions,
        x: "",
        onChange: unref(taskStatusChange)
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(unref(ElScrollbar), {
        class: "draw_result flex-1",
        ref_key: "resultScrollBar",
        ref: resultScrollBar
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(pager).lists.length > 0) {
              _push2(`<div data-v-2fa59074${_scopeId}><div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 5xl:grid-cols-5 gap-4" data-v-2fa59074${_scopeId}><!--[-->`);
              ssrRenderList(unref(pager).lists, (item, index) => {
                var _a2;
                var _a, _b, _c, _d, _e, _f, _g;
                _push2(`<div class="rounded-[12px] p-4 flex flex-col gap-2 border border-[#eff0f2] dark:border-[#333333] min-w-[272px] flex-none" data-v-2fa59074${_scopeId}><div class="flex justify-between relative" data-v-2fa59074${_scopeId}>`);
                _push2(ssrRenderComponent(_component_el_tag, {
                  type: statusMap[item.status].type,
                  effect: "light"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(statusMap[item.status].label)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(statusMap[item.status].label), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                if (item.status !== 1 || item.status === 0) {
                  _push2(`<div class="flex items-center justify-center" style="${ssrRenderStyle({ "position": "absolute", "right": "0", "top": "-5px" })}" data-v-2fa59074${_scopeId}>`);
                  if (item.status === 3) {
                    _push2(ssrRenderComponent(_component_el_tooltip, {
                      effect: "dark",
                      content: "\u590D\u5236\u63D0\u793A\u8BCD",
                      placement: "bottom"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<div data-v-2fa59074${_scopeId2}><div class="cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content" data-v-2fa59074${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} class="w-[16px] h-[16px] object-contain" data-v-2fa59074${_scopeId2}></div></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              onClick: ($event) => unref(copy)(item.prompt)
                            }, [
                              createVNode("div", { class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content" }, [
                                createVNode("img", {
                                  src: _imports_0,
                                  class: "w-[16px] h-[16px] object-contain"
                                })
                              ])
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  if (item.status === 3) {
                    _push2(`<!--[-->`);
                    _push2(ssrRenderComponent(_component_el_tooltip, {
                      effect: "dark",
                      content: "\u4E0B\u8F7D\u56FE\u7247",
                      placement: "bottom"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<div data-v-2fa59074${_scopeId2}><div class="cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content" data-v-2fa59074${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} class="w-[16px] h-[16px] object-contain" data-v-2fa59074${_scopeId2}></div></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              onClick: ($event) => unref(downloadImgFile)(item.image)
                            }, [
                              createVNode("div", { class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content" }, [
                                createVNode("img", {
                                  src: _imports_1,
                                  class: "w-[16px] h-[16px] object-contain"
                                })
                              ])
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    if (unref(appStore).getSquareConfig.draw_award.is_open) {
                      _push2(ssrRenderComponent(_component_el_tooltip, {
                        effect: "dark",
                        content: "\u5206\u4EAB\u81F3\u5E7F\u573A",
                        placement: "bottom"
                      }, {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(`<div data-v-2fa59074${_scopeId2}><div class="cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content" data-v-2fa59074${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} class="w-[16px] h-[16px] object-contain" data-v-2fa59074${_scopeId2}></div></div>`);
                          } else {
                            return [
                              createVNode("div", {
                                onClick: ($event) => shareDraw(item)
                              }, [
                                createVNode("div", { class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content" }, [
                                  createVNode("img", {
                                    src: _imports_2,
                                    class: "w-[16px] h-[16px] object-contain"
                                  })
                                ])
                              ], 8, ["onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                    if (item.engine === "mj" && (item == null ? void 0 : item.able_cut)) {
                      _push2(ssrRenderComponent(_component_el_tooltip, {
                        effect: "dark",
                        content: "\u4E00\u952E\u5207\u56FE",
                        placement: "bottom"
                      }, {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(`<div data-v-2fa59074${_scopeId2}><div class="cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content" data-v-2fa59074${_scopeId2}><img${ssrRenderAttr("src", _imports_3)} class="w-[16px] h-[16px] object-contain" data-v-2fa59074${_scopeId2}></div></div>`);
                          } else {
                            return [
                              createVNode("div", {
                                onClick: ($event) => handleSplit(item)
                              }, [
                                createVNode("div", { class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content" }, [
                                  createVNode("img", {
                                    src: _imports_3,
                                    class: "w-[16px] h-[16px] object-contain"
                                  })
                                ])
                              ], 8, ["onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<!--]-->`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(ssrRenderComponent(_component_el_tooltip, {
                    effect: "dark",
                    content: "\u91CD\u65B0\u751F\u6210",
                    placement: "bottom"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div data-v-2fa59074${_scopeId2}><div class="cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content" data-v-2fa59074${_scopeId2}><img${ssrRenderAttr("src", _imports_4)} class="w-[16px] h-[16px] object-contain" data-v-2fa59074${_scopeId2}></div></div>`);
                      } else {
                        return [
                          createVNode("div", {
                            onClick: ($event) => reDrawHandle(item)
                          }, [
                            createVNode("div", { class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content" }, [
                              createVNode("img", {
                                src: _imports_4,
                                class: "w-[16px] h-[16px] object-contain"
                              })
                            ])
                          ], 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_el_tooltip, {
                    effect: "dark",
                    content: "\u5220\u9664",
                    placement: "bottom"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div data-v-2fa59074${_scopeId2}><div class="cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content" data-v-2fa59074${_scopeId2}><img${ssrRenderAttr("src", _imports_5)} class="w-[16px] h-[16px] object-contain" data-v-2fa59074${_scopeId2}></div></div>`);
                      } else {
                        return [
                          createVNode("div", {
                            onClick: ($event) => unref(deleteHandle)(item.id)
                          }, [
                            createVNode("div", { class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content" }, [
                              createVNode("img", {
                                src: _imports_5,
                                class: "w-[16px] h-[16px] object-contain"
                              })
                            ])
                          ], 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="relative rounded-[12px] overflow-hidden flex-1" data-v-2fa59074${_scopeId}><div${ssrRenderAttrs(mergeProps({ class: "bg-[var(--el-bg-color-page)]" }, ssrGetDirectiveProps(_ctx, _directive_loading, item.loading)))} data-v-2fa59074${_scopeId}>`);
                if (Array.isArray(item.image)) {
                  _push2(`<div class="grid grid-cols-2 align-center justify-center" data-v-2fa59074${_scopeId}><!--[-->`);
                  ssrRenderList(item.image, (img, index2) => {
                    _push2(`<div class="m-2 image__item relative" style="${ssrRenderStyle({ "flex-basis": "calc(50% - 10px)" })}" data-v-2fa59074${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_aspect_ratio, {
                      src: img,
                      ratio: [1, 1],
                      fit: "cover"
                    }, null, _parent2, _scopeId));
                    _push2(`<div class="image__item__icon cursor-default" data-v-2fa59074${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_Icon, {
                      name: "el-icon-Share",
                      color: "#ffffff",
                      size: "16"
                    }, null, _parent2, _scopeId));
                    _push2(`</div></div>`);
                  });
                  _push2(`<!--]--></div>`);
                } else if (item.status === 3) {
                  _push2(ssrRenderComponent(_component_aspect_ratio, {
                    thumbnail: item.thumbnail,
                    src: item.image,
                    ratio: [1, 1]
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
                if (item.status === 2) {
                  _push2(`<div class="w-full pb-[100%]" data-v-2fa59074${_scopeId}><div class="w-full h-full pb-9 px-4 flex flex-col justify-center items-center absolute left-0 top-0" data-v-2fa59074${_scopeId}><img class="w-1/2 mb-4"${ssrRenderAttr("src", unref(drawError))} alt="\u7ED8\u56FE\u5931\u8D25" data-v-2fa59074${_scopeId}><div data-v-2fa59074${_scopeId}>\u7ED8\u56FE\u5931\u8D25</div><div class="text-xs text-[#798696] dark:text-white line-clamp-3 w-full break-all" data-v-2fa59074${_scopeId}> \u9519\u8BEF\u4FE1\u606F\uFF1A${ssrInterpolate(item.fail_reason)}</div></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.status === 0 || item.status === 1) {
                  _push2(`<div${ssrRenderAttrs(_temp0 = mergeProps({
                    class: "draw_loading w-full pb-[100%]",
                    "element-loading-svg": "none",
                    "element-loading-text": "\u6B63\u5728\u751F\u6210\u4E2D..."
                  }, ssrGetDirectiveProps(_ctx, _directive_loading, true)))} data-v-2fa59074${_scopeId}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : (_a2 = _temp0.innerHTML) != null ? _a2 : ""}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="w-full box-border" data-v-2fa59074${_scopeId}><div class="line-clamp-1" data-v-2fa59074${_scopeId}>${ssrInterpolate(item.prompt)}</div></div>`);
                if (item.status === 3 && item.engine === "mj") {
                  _push2(`<div class="" data-v-2fa59074${_scopeId}>`);
                  if (!((_a = item == null ? void 0 : item.able_actions) == null ? void 0 : _a.includes(
                    "low_variation"
                  )) && ((_b = item == null ? void 0 : item.able_actions) == null ? void 0 : _b.length)) {
                    _push2(`<!--[--><div class="flex flex-none" data-v-2fa59074${_scopeId}><span class="text-xs flex-none" data-v-2fa59074${_scopeId}>\u653E\u5927\u56FE\u7247</span><div class="flex flex-wrap gap-y-[10px]" data-v-2fa59074${_scopeId}><div class="opt-btn" data-v-2fa59074${_scopeId}> \u5DE6\u4E0A </div><div class="opt-btn" data-v-2fa59074${_scopeId}> \u53F3\u4E0A </div><div class="opt-btn" data-v-2fa59074${_scopeId}> \u5DE6\u4E0B </div><div class="opt-btn" data-v-2fa59074${_scopeId}> \u53F3\u4E0B </div></div></div><div class="flex flex-none mt-[15px]" data-v-2fa59074${_scopeId}><span class="text-xs flex-none" data-v-2fa59074${_scopeId}>\u53D8\u4F53\u56FE\u7247</span><div class="flex flex-wrap gap-y-[10px]" data-v-2fa59074${_scopeId}><div class="opt-btn" data-v-2fa59074${_scopeId}> \u5DE6\u4E0A </div><div class="opt-btn" data-v-2fa59074${_scopeId}> \u53F3\u4E0A </div><div class="opt-btn" data-v-2fa59074${_scopeId}> \u5DE6\u4E0B </div><div class="opt-btn" data-v-2fa59074${_scopeId}> \u53F3\u4E0B </div></div></div><!--]-->`);
                  } else if ((_c = item == null ? void 0 : item.able_actions) == null ? void 0 : _c.length) {
                    _push2(`<!--[--><div data-v-2fa59074${_scopeId}><span class="text-xs flex-none" data-v-2fa59074${_scopeId}>\u8C03\u6574</span><div class="opt-btn" data-v-2fa59074${_scopeId}> \u5FAE\u8C03(\u5F3A) </div><div class="opt-btn" data-v-2fa59074${_scopeId}> \u5FAE\u8C03(\u5F31) </div></div><div class="flex flex-none mt-[15px]" data-v-2fa59074${_scopeId}><span class="text-xs flex-none" data-v-2fa59074${_scopeId}>\u53D8\u5316</span><div class="flex flex-wrap gap-y-[10px]" data-v-2fa59074${_scopeId}>`);
                    if ((_d = item == null ? void 0 : item.able_actions) == null ? void 0 : _d.includes(
                      "outpaint_1.5x"
                    )) {
                      _push2(`<!--[--><div class="opt-btn" data-v-2fa59074${_scopeId}> \u53D8\u71261.5x </div><div class="opt-btn" data-v-2fa59074${_scopeId}> \u53D8\u71262x </div><!--]-->`);
                    } else {
                      _push2(`<!---->`);
                    }
                    if ((_e = item == null ? void 0 : item.able_actions) == null ? void 0 : _e.includes(
                      "upscale_2x"
                    )) {
                      _push2(`<!--[--><div class="opt-btn" data-v-2fa59074${_scopeId}> \u9AD8\u6E052x </div><div class="opt-btn" data-v-2fa59074${_scopeId}> \u9AD8\u6E054x </div><!--]-->`);
                    } else {
                      _push2(`<!---->`);
                    }
                    if ((_f = item == null ? void 0 : item.able_actions) == null ? void 0 : _f.includes(
                      "upscale_subtle"
                    )) {
                      _push2(`<!--[--><div class="opt-btn" data-v-2fa59074${_scopeId}> \u5F31\u53D8\u5316 </div><div class="opt-btn" data-v-2fa59074${_scopeId}> \u5F3A\u53D8\u5316 </div><!--]-->`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div></div>`);
                    if ((_g = item == null ? void 0 : item.able_actions) == null ? void 0 : _g.includes("pan_down")) {
                      _push2(`<div class="flex flex-none mt-[15px]" data-v-2fa59074${_scopeId}><span class="text-xs flex-none" data-v-2fa59074${_scopeId}>\u62C9\u4F38</span><div class="flex flex-wrap gap-y-[10px]" data-v-2fa59074${_scopeId}><div class="opt-btn" data-v-2fa59074${_scopeId}> \u2B05\uFE0F </div><div class="opt-btn" data-v-2fa59074${_scopeId}> \u27A1\uFE0F </div><div class="opt-btn" data-v-2fa59074${_scopeId}> \u2B06\uFE0F </div><div class="opt-btn" data-v-2fa59074${_scopeId}> \u2B07\uFE0F </div></div></div>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<!--]-->`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="flex justify-between items-center" data-v-2fa59074${_scopeId}><span class="text-[#8794A3]" data-v-2fa59074${_scopeId}>${ssrInterpolate(item.create_time)}</span>`);
                _push2(ssrRenderComponent(_component_el_tag, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(DrawResultTypeEnum)[item.type])}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(DrawResultTypeEnum)[item.type]), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<div class="h-full flex items-center justify-center" data-v-2fa59074${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_result, null, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_image, {
                      class: "w-[150px] dark:opacity-60",
                      src: unref(DrawingEmpty)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_image, {
                        class: "w-[150px] dark:opacity-60",
                        src: unref(DrawingEmpty)
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-xl" data-v-2fa59074${_scopeId2}>\u5F53\u524D\u4EFB\u52A1\u662F\u7A7A\u7684\u54E6</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-xl" }, "\u5F53\u524D\u4EFB\u52A1\u662F\u7A7A\u7684\u54E6")
                    ];
                  }
                }),
                "sub-title": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-info" data-v-2fa59074${_scopeId2}> \u5728\u5DE6\u4FA7\u8F93\u5165\u63CF\u8FF0\uFF0C\u521B\u5EFA\u4F60\u7684\u4F5C\u54C1\u5427! </div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-info" }, " \u5728\u5DE6\u4FA7\u8F93\u5165\u63CF\u8FF0\uFF0C\u521B\u5EFA\u4F60\u7684\u4F5C\u54C1\u5427! ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              unref(pager).lists.length > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("div", { class: "grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 5xl:grid-cols-5 gap-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(pager).lists, (item, index) => {
                    var _a, _b, _c, _d, _e, _f, _g;
                    return openBlock(), createBlock("div", {
                      key: item.id,
                      class: "rounded-[12px] p-4 flex flex-col gap-2 border border-[#eff0f2] dark:border-[#333333] min-w-[272px] flex-none"
                    }, [
                      createVNode("div", { class: "flex justify-between relative" }, [
                        createVNode(_component_el_tag, {
                          type: statusMap[item.status].type,
                          effect: "light"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(statusMap[item.status].label), 1)
                          ]),
                          _: 2
                        }, 1032, ["type"]),
                        item.status !== 1 || item.status === 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex items-center justify-center",
                          style: { "position": "absolute", "right": "0", "top": "-5px" }
                        }, [
                          item.status === 3 ? (openBlock(), createBlock(_component_el_tooltip, {
                            key: 0,
                            effect: "dark",
                            content: "\u590D\u5236\u63D0\u793A\u8BCD",
                            placement: "bottom"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                onClick: ($event) => unref(copy)(item.prompt)
                              }, [
                                createVNode("div", { class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content" }, [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "w-[16px] h-[16px] object-contain"
                                  })
                                ])
                              ], 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          item.status === 3 ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createVNode(_component_el_tooltip, {
                              effect: "dark",
                              content: "\u4E0B\u8F7D\u56FE\u7247",
                              placement: "bottom"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  onClick: ($event) => unref(downloadImgFile)(item.image)
                                }, [
                                  createVNode("div", { class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content" }, [
                                    createVNode("img", {
                                      src: _imports_1,
                                      class: "w-[16px] h-[16px] object-contain"
                                    })
                                  ])
                                ], 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024),
                            unref(appStore).getSquareConfig.draw_award.is_open ? (openBlock(), createBlock(_component_el_tooltip, {
                              key: 0,
                              effect: "dark",
                              content: "\u5206\u4EAB\u81F3\u5E7F\u573A",
                              placement: "bottom"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  onClick: ($event) => shareDraw(item)
                                }, [
                                  createVNode("div", { class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content" }, [
                                    createVNode("img", {
                                      src: _imports_2,
                                      class: "w-[16px] h-[16px] object-contain"
                                    })
                                  ])
                                ], 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            item.engine === "mj" && (item == null ? void 0 : item.able_cut) ? (openBlock(), createBlock(_component_el_tooltip, {
                              key: 1,
                              effect: "dark",
                              content: "\u4E00\u952E\u5207\u56FE",
                              placement: "bottom"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  onClick: ($event) => handleSplit(item)
                                }, [
                                  createVNode("div", { class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content" }, [
                                    createVNode("img", {
                                      src: _imports_3,
                                      class: "w-[16px] h-[16px] object-contain"
                                    })
                                  ])
                                ], 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ], 64)) : createCommentVNode("", true),
                          createVNode(_component_el_tooltip, {
                            effect: "dark",
                            content: "\u91CD\u65B0\u751F\u6210",
                            placement: "bottom"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                onClick: ($event) => reDrawHandle(item)
                              }, [
                                createVNode("div", { class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content" }, [
                                  createVNode("img", {
                                    src: _imports_4,
                                    class: "w-[16px] h-[16px] object-contain"
                                  })
                                ])
                              ], 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_el_tooltip, {
                            effect: "dark",
                            content: "\u5220\u9664",
                            placement: "bottom"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                onClick: ($event) => unref(deleteHandle)(item.id)
                              }, [
                                createVNode("div", { class: "cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content" }, [
                                  createVNode("img", {
                                    src: _imports_5,
                                    class: "w-[16px] h-[16px] object-contain"
                                  })
                                ])
                              ], 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "relative rounded-[12px] overflow-hidden flex-1" }, [
                        withDirectives((openBlock(), createBlock("div", { class: "bg-[var(--el-bg-color-page)]" }, [
                          Array.isArray(item.image) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "grid grid-cols-2 align-center justify-center"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.image, (img, index2) => {
                              return openBlock(), createBlock("div", {
                                class: "m-2 image__item relative",
                                style: { "flex-basis": "calc(50% - 10px)" },
                                key: index2
                              }, [
                                createVNode(_component_aspect_ratio, {
                                  src: img,
                                  ratio: [1, 1],
                                  fit: "cover"
                                }, null, 8, ["src"]),
                                createVNode("div", {
                                  class: "image__item__icon cursor-default",
                                  onClick: ($event) => shareDraw(item, img)
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "el-icon-Share",
                                    color: "#ffffff",
                                    size: "16"
                                  })
                                ], 8, ["onClick"])
                              ]);
                            }), 128))
                          ])) : item.status === 3 ? (openBlock(), createBlock(_component_aspect_ratio, {
                            key: 1,
                            thumbnail: item.thumbnail,
                            src: item.image,
                            ratio: [1, 1]
                          }, null, 8, ["thumbnail", "src"])) : createCommentVNode("", true)
                        ])), [
                          [_directive_loading, item.loading]
                        ]),
                        item.status === 2 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "w-full pb-[100%]"
                        }, [
                          createVNode("div", { class: "w-full h-full pb-9 px-4 flex flex-col justify-center items-center absolute left-0 top-0" }, [
                            createVNode("img", {
                              class: "w-1/2 mb-4",
                              src: unref(drawError),
                              alt: "\u7ED8\u56FE\u5931\u8D25"
                            }, null, 8, ["src"]),
                            createVNode("div", null, "\u7ED8\u56FE\u5931\u8D25"),
                            createVNode("div", { class: "text-xs text-[#798696] dark:text-white line-clamp-3 w-full break-all" }, " \u9519\u8BEF\u4FE1\u606F\uFF1A" + toDisplayString(item.fail_reason), 1)
                          ])
                        ])) : createCommentVNode("", true),
                        item.status === 0 || item.status === 1 ? withDirectives((openBlock(), createBlock("div", {
                          key: 1,
                          class: "draw_loading w-full pb-[100%]",
                          "element-loading-svg": "none",
                          "element-loading-text": "\u6B63\u5728\u751F\u6210\u4E2D..."
                        }, null, 512)), [
                          [_directive_loading, true]
                        ]) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "w-full box-border" }, [
                        createVNode("div", { class: "line-clamp-1" }, toDisplayString(item.prompt), 1)
                      ]),
                      item.status === 3 && item.engine === "mj" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ""
                      }, [
                        !((_a = item == null ? void 0 : item.able_actions) == null ? void 0 : _a.includes(
                          "low_variation"
                        )) && ((_b = item == null ? void 0 : item.able_actions) == null ? void 0 : _b.length) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode("div", { class: "flex flex-none" }, [
                            createVNode("span", { class: "text-xs flex-none" }, "\u653E\u5927\u56FE\u7247"),
                            createVNode("div", { class: "flex flex-wrap gap-y-[10px]" }, [
                              createVNode("div", {
                                class: "opt-btn",
                                onClick: ($event) => handleMjEdit(item, "upscale1")
                              }, " \u5DE6\u4E0A ", 8, ["onClick"]),
                              createVNode("div", {
                                class: "opt-btn",
                                onClick: ($event) => handleMjEdit(item, "upscale2")
                              }, " \u53F3\u4E0A ", 8, ["onClick"]),
                              createVNode("div", {
                                class: "opt-btn",
                                onClick: ($event) => handleMjEdit(item, "upscale3")
                              }, " \u5DE6\u4E0B ", 8, ["onClick"]),
                              createVNode("div", {
                                class: "opt-btn",
                                onClick: ($event) => handleMjEdit(item, "upscale4")
                              }, " \u53F3\u4E0B ", 8, ["onClick"])
                            ])
                          ]),
                          createVNode("div", { class: "flex flex-none mt-[15px]" }, [
                            createVNode("span", { class: "text-xs flex-none" }, "\u53D8\u4F53\u56FE\u7247"),
                            createVNode("div", { class: "flex flex-wrap gap-y-[10px]" }, [
                              createVNode("div", {
                                class: "opt-btn",
                                onClick: ($event) => handleMjEdit(item, "variation1")
                              }, " \u5DE6\u4E0A ", 8, ["onClick"]),
                              createVNode("div", {
                                class: "opt-btn",
                                onClick: ($event) => handleMjEdit(item, "variation2")
                              }, " \u53F3\u4E0A ", 8, ["onClick"]),
                              createVNode("div", {
                                class: "opt-btn",
                                onClick: ($event) => handleMjEdit(item, "variation3")
                              }, " \u5DE6\u4E0B ", 8, ["onClick"]),
                              createVNode("div", {
                                class: "opt-btn",
                                onClick: ($event) => handleMjEdit(item, "variation4")
                              }, " \u53F3\u4E0B ", 8, ["onClick"])
                            ])
                          ])
                        ], 64)) : ((_c = item == null ? void 0 : item.able_actions) == null ? void 0 : _c.length) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createVNode("div", null, [
                            createVNode("span", { class: "text-xs flex-none" }, "\u8C03\u6574"),
                            createVNode("div", {
                              class: "opt-btn",
                              onClick: ($event) => handleMjEdit(item, "high_variation")
                            }, " \u5FAE\u8C03(\u5F3A) ", 8, ["onClick"]),
                            createVNode("div", {
                              class: "opt-btn",
                              onClick: ($event) => handleMjEdit(item, "low_variation")
                            }, " \u5FAE\u8C03(\u5F31) ", 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "flex flex-none mt-[15px]" }, [
                            createVNode("span", { class: "text-xs flex-none" }, "\u53D8\u5316"),
                            createVNode("div", { class: "flex flex-wrap gap-y-[10px]" }, [
                              ((_d = item == null ? void 0 : item.able_actions) == null ? void 0 : _d.includes(
                                "outpaint_1.5x"
                              )) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createVNode("div", {
                                  class: "opt-btn",
                                  onClick: ($event) => handleMjEdit(
                                    item,
                                    "outpaint_1.5x"
                                  )
                                }, " \u53D8\u71261.5x ", 8, ["onClick"]),
                                createVNode("div", {
                                  class: "opt-btn",
                                  onClick: ($event) => handleMjEdit(
                                    item,
                                    "outpaint_2x"
                                  )
                                }, " \u53D8\u71262x ", 8, ["onClick"])
                              ], 64)) : createCommentVNode("", true),
                              ((_e = item == null ? void 0 : item.able_actions) == null ? void 0 : _e.includes(
                                "upscale_2x"
                              )) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                createVNode("div", {
                                  class: "opt-btn",
                                  onClick: ($event) => handleMjEdit(
                                    item,
                                    "upscale_2x"
                                  )
                                }, " \u9AD8\u6E052x ", 8, ["onClick"]),
                                createVNode("div", {
                                  class: "opt-btn",
                                  onClick: ($event) => handleMjEdit(
                                    item,
                                    "upscale_4x"
                                  )
                                }, " \u9AD8\u6E054x ", 8, ["onClick"])
                              ], 64)) : createCommentVNode("", true),
                              ((_f = item == null ? void 0 : item.able_actions) == null ? void 0 : _f.includes(
                                "upscale_subtle"
                              )) ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                createVNode("div", {
                                  class: "opt-btn",
                                  onClick: ($event) => handleMjEdit(
                                    item,
                                    "upscale_subtle"
                                  )
                                }, " \u5F31\u53D8\u5316 ", 8, ["onClick"]),
                                createVNode("div", {
                                  class: "opt-btn",
                                  onClick: ($event) => handleMjEdit(
                                    item,
                                    "upscale_creative"
                                  )
                                }, " \u5F3A\u53D8\u5316 ", 8, ["onClick"])
                              ], 64)) : createCommentVNode("", true)
                            ])
                          ]),
                          ((_g = item == null ? void 0 : item.able_actions) == null ? void 0 : _g.includes("pan_down")) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex flex-none mt-[15px]"
                          }, [
                            createVNode("span", { class: "text-xs flex-none" }, "\u62C9\u4F38"),
                            createVNode("div", { class: "flex flex-wrap gap-y-[10px]" }, [
                              createVNode("div", {
                                class: "opt-btn",
                                onClick: ($event) => handleMjEdit(item, "pan_left")
                              }, " \u2B05\uFE0F ", 8, ["onClick"]),
                              createVNode("div", {
                                class: "opt-btn",
                                onClick: ($event) => handleMjEdit(item, "pan_right")
                              }, " \u27A1\uFE0F ", 8, ["onClick"]),
                              createVNode("div", {
                                class: "opt-btn",
                                onClick: ($event) => handleMjEdit(item, "pan_up")
                              }, " \u2B06\uFE0F ", 8, ["onClick"]),
                              createVNode("div", {
                                class: "opt-btn",
                                onClick: ($event) => handleMjEdit(item, "pan_down")
                              }, " \u2B07\uFE0F ", 8, ["onClick"])
                            ])
                          ])) : createCommentVNode("", true)
                        ], 64)) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "text-[#8794A3]" }, toDisplayString(item.create_time), 1),
                        createVNode(_component_el_tag, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(DrawResultTypeEnum)[item.type]), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ]);
                  }), 128))
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "h-full flex items-center justify-center"
              }, [
                createVNode(_component_el_result, null, {
                  icon: withCtx(() => [
                    createVNode(_component_el_image, {
                      class: "w-[150px] dark:opacity-60",
                      src: unref(DrawingEmpty)
                    }, null, 8, ["src"])
                  ]),
                  title: withCtx(() => [
                    createVNode("div", { class: "text-xl" }, "\u5F53\u524D\u4EFB\u52A1\u662F\u7A7A\u7684\u54E6")
                  ]),
                  "sub-title": withCtx(() => [
                    createVNode("div", { class: "text-info" }, " \u5728\u5DE6\u4FA7\u8F93\u5165\u63CF\u8FF0\uFF0C\u521B\u5EFA\u4F60\u7684\u4F5C\u54C1\u5427! ")
                  ]),
                  _: 1
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full flex justify-end" data-v-2fa59074>`);
      _push(ssrRenderComponent(_component_pagination, {
        modelValue: unref(pager),
        "onUpdate:modelValue": ($event) => isRef(pager) ? pager.value = $event : null,
        background: "",
        onChange: scrollTop
      }, null, _parent));
      _push(`</div></div>`);
      if (unref(showShare)) {
        _push(ssrRenderComponent(DrawShare, {
          ref_key: "shareRef",
          ref: shareRef,
          onClose: ($event) => showShare.value = false,
          onSuccess: (val) => unref(sharedIds).push(val)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(showImageEditor)) {
        _push(ssrRenderComponent(ImageEditor, {
          ref_key: "imageEditorRef",
          ref: imageEditorRef,
          "draw-func": handleMjEdit,
          onSuccess: ($event) => showImageEditor.value = false,
          onClose: ($event) => showImageEditor.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/draw/components/common/draw-result.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DrawResult = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2fa59074"]]);

export { DrawResult as default };
//# sourceMappingURL=draw-result-3pgZiKX4.mjs.map
