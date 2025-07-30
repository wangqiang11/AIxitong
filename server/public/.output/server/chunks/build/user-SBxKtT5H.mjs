import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { bs as useSettingStore, z as useUserStore, a5 as useAppStore, bt as LoginPopupTypeEnum, b3 as __nuxt_component_1$1, d as ElButton } from './server.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import MemberBtn from './member-btn-MuRMgKHK.mjs';
import { useDark } from '@vueuse/core';
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
import '@vue/shared';
import 'lodash-unified';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAA3CAYAAAB+fggjAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAR8SURBVGiBxVlNjhtFFP5eOSwMk4znBs0NJidI+wSTLFiETWwEijMIsBdBCixsI4HY4ewROGIxEUSZRokYNELYR/ANpg8Q0WaBBOPueiz81z/VVdVuj+dbtLveq676+vnr16+qCQXw4S9BW0bosqSalABHAEuAJS1+Abls5/midZtZjG+Aml6v6ufNKQqQc5nxHYDaykjZfqQyxn0JN7uhlA3dvNYEWeCBVT+w3scJA5h4XzeeFcHWaeAQo6H2UqpFMbPCRzEzAUSVX0sTjCRcpYNXh5iJ9T5emxnwX/eq49IEIfCZ0l5SgwLcN09tQOs0cMA4NPVbwlqDhGkFM680Qa6gqwkKNtcgeV7vYFqaICS7uUEpocFKhZ8a5zYRfPQquMsEJ7fDhhokwsT7cm9SmqAEHmgkpYSNBiXBKnqAMgZztM4CByFfZF9d87ZcnsdfXRY+lvC9L/betSWYH0EZuSsZbVODhLEtOS1BgugqHsR0J4XJoEFUjLkvDiXB4/PgEICjCIIReg1i7D3Jr1xUUEdQzt8cqwhuKQ+C5bMi5PIJMrtATEZb0CCDfO/JrWFpgsfnbxrAPPdtU4Mkij0cuVN8fP7XiCN2V+kiSlbF2VRiXVFPpaQpx1KQlJjXhFHsuvWYPiHqJAi2R4Ezu5QX+gnL5cHEjfF6XJm8mfm1TJPEXxzNInd+xuvjtvNgfDzDuMxcS2pQUHd+QuvjtvMgJQyacQkQ6K8ItkeBy7wsDFIRLICiaxIN+n8OqsMVwQgytihKRfBK6sH8cRnw/hhUe0A8zUjcTXTBtWnQD6Nqc9kQAPDJ6E0D8fXuNWmQAF9UqD4e0KrSFgAgKL3mvRYN+iCq//5t8l0t2qPAYcBN3s3uNSiI76XJAYCACBvZu9mtBhnU+e0b9RJAAOIoa96dBonQP/v67UHeNYKJnax5Nxok8OD1V+/0dOMJAvUXvWPYgQaJvFe9vY5u5NUI7VFQA3AYhgtrCMTPgXVbhnCZqVtqf5DJF+HlbZuFuzY2Knzw/O8fWXIjr9xKlmlZH0v4oErdtvS33h9cQ7o6r1aDxNMi5ICCBFsngQOkdxoKrEmICpEDChK8rKT2CYvkQaKO97nddsfGBAl0lDKo+mRtjP7Lx3u5uU6Hghpk4z5hRoOEwYvHN3vF5lnDmuBHP88X81mPRoOCxi86N425Tgf7XX5S7FPrNejPovBeCW4AgBvWPQlHmQySr0Gf3orq3qfmRGyCPUFY7lMzTyFk/fmjA38jRinYfidxkai440iHkZrbIgdYEpSW30kY6Jwc3zLu3BeBFUEWuKN0UOK0f/Jwf6Ncp4OxWGifBrV/GIFuCwOgwU/N/VLpJA/GCP4LHOpugwiTqyIH2HzIEYr0sgAxfMFcOtfpYEwzDPUDQoAPyfVhc3tPbM48+WidBY78jy/S+4MyoikE3x7ev1pygOEvpnChv0yq4+YuyAGmL02EO5l1MaM/fP9gq7lOB3MejOc6Qv+H+we9q6OThf4vnuEpmCYgTEEYfP/ebskBwP/QmvI5TzhY8AAAAABJRU5ErkJggg==";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAnlSURBVHic7ZtbbFTHGcd/sxd7d20cgwHHsaELhlYNYOhF3AKKSYmqhqbASykoLdBUFU8JKA9VqRRAlZpKfYC8tJUi1aYkaqsqRS60VYQKpkoISG0xEAJ2wTa3lgWMN8HeXXsv04dz2XPOztld22tn1eYvgefMzDkz33+++eabmW/hU/x/Q0x1g1LKZUAtEFYUdwFRIUT/VPVnUgmQUoaBVuBpYJn+rxhE0cg4DXQKITonoXvAJBBgEXq7/leJ+48yjhdhVo3HrXoUaAc6Sk1GyQjQBd+HJnTYyI+NSq5G0ly5m+LGQJobAxmGExIkyAxICTIjkBJCfkHIL/h8o5fwTC+LmryEZ+WQ0gkcKBURJSFASrkfTXhAE/r8nSTv9ia5cjcFDkFlBiUBZNSktC7ysXyBj8VzvdZmOykBERMiQEq5CTiIPuIDwxk6PkzQHUlxf0iawuQnQBRZDxY1edmypsJJxCE0IqJTSoBz1I9dSdBxOeE+sm4Cj4kErd7iuV5efLaCefXm9OgH1o1n9RgzAfpcP4pu0W99lObnZ4d5MJzJL2ixU6BQPUve88v9fO+rFUbXosAeIUT7pBGgC38KXeWPdyc4djVeGsFcbECh6TJvtoe93wpQX2uKckAIsb9YmVzXnULCH+4a5nh33FZH5Hlyh1A8CjNbCEc1ka0C0HtX8tIvEvTeNZfVffr0HE/rakgpa4HzQDiWlBw8+4hbH6XHodqlsQGqb4YqBN//mp/1X/QZ3d4jhDhUSLZiNeAo+sgfOveI2x+nlcwV1gCRm1KObB4NcGlnOCE5+IdRLvamjYKDUspWpTQWFCRASnkQ3aM7cmmY24+0BqSqbp6noiH1/6TRfu7n8rXz47dGiQyaeW361HVFXgJ0BncDnLqR4OydUbNsfBqgwsRsgPP94bjkB2+MGCSEgbZ8rbsSoM/7NoB/DSZ5uzuGxrbG7vg0QOamjCGW2cHPqwG2eup2IoMZfnnMHKxWKeUORWeA/BqwGwjHU5I3Lw/rWQKD8XKzAc523r+c4cTfTXuwz20q+FSZ+ui/DHDqZoKHcWOJkWaDhTQg5Iegz6ONoMxa9myabJmZVlh5CUNxTbVV7Vj75MSbJ5K0NHuony7CaF7rzqIIQBv92nhKcvpWwpJtH0G7wIJVcyv4QoOfObVeQhWlP2roi2Toi2Q4eTHFpf603gH3diKDkqN/S7Frox9gk5TygNNdznlbH/0+oPYvfXH+3BvPu74HfIKvfy7I+ubK0klaBO5FJW+8M8LZK2nTP1D1sb5W8LNdldTPEKDwDVQ2YAf66Hfqo28f96wNWFjn4yfPPjblwgPMrhX8aEuAba0VitJsjyMPJReum17iy86aKgI2Apy7O0I85Zzp2eeVTRW88tQ0Qv4pP1a0YWurn9d2VlIdUPdDAkfeSRqPYadzZCPAcpzFpQej5EJrpKnGy/ZlVePvdYmxJOxl2zP+nHxDXyODkgvXTC3Ybq3j1IBWgHhKci1qsmZbveuCHnZ9uboE3S4tNq7ysXGVYdOzvorR9zMfmEui7WDWScDTgE14sNuADQsD1AWL3kROKbZ9xU9VIGunsKSu3zGHcZnVJ1BqgJMAA3VBDysbp97gFYvqgGDTU/aV3RD7wrU0Q1lfwtQCJwFhgIcjGVTr68IZbm5D+WDJvOx5oVMXrFpgJEwCrGpxeyiNym9vqVctOeWFlvkeqgJa2moDQFo1YKmRsGpA2EgMJtJYYbDYNM12Glu2aH4iK5aLBtQaCatO1wKKtT+LQsYvmUzS29vrWt7Q0EBNTU3eb5TiO7Oz54Oq/acNCgKM9XLsDk4ymaSnp8e1PBQKFU3ARL5THbTvWKX+ZJkCSg1wIP/Ozw11dXWuZaFQaEq+YwjqtAEWKAnoB5gRyJ3nxs5vIJ7JOw1CoRCrV6/O27liMNHv3Itmhc3uWoWpGeiywhiOxQEextOFK5UBhpRnB2o9thJg3q01VvtQ2YCeh6mJ926SERmU9P7HGHP7KqBviUGlAUKILiMd9NmPO4zUuTuqDVJ54VJf1odx2oAFjSYBF4yEcwp0ATRW2e2A8dpAPEPPQ7WbXC54669JVHuB6mABDdDRBbBkppvHJzlyMVaKfk4KOs6krHcCQFYDmhttRrDTSDgJ6AB3GwCCgXiG339YfiREopK3TubuYg0pWhaYWt1ljSVQakDQJ1gyM3vAYLcGkpN9IxzvSVAuiEQlP/xVQgu9AVQ2YGmzKWqn9V0bAfqJaSfYp4HqTPBPPXGOd3/yJPTezbC3LeFQfXuPW5o9LF1gitphfV/lBxwGWPF4JTMCzmK7LhzvjtN+PsZAzBHxNQUYTkh+czrJ3vYEkai7ryqB1Ytt6t9pLVc6/FLKPiBsHIsXcw1u3AkseyL3bK6U6ItkONeT5o9nkwzFZd5rdCSEKgW/3ltpGMCc4Am3vcBhYN+KhkrO/XuEBzHrzRCAyPGrztwY5b2+UYI+QV3IY/7FuPGR2G6JbH8RoDchM5brQSNPCvojaYbimqNj3Elk++QcR2n2cfNaryF8FC2gygY3AtqB7TMCnnDrnABvd8dMf9qA82bIyIsnJbcGjcuKdMljhHLbdr+DfHy6YPNaU8TXVZFkyr2AbgxfB2idG2CGuQHK71mrV+Axwhx+/dFu2MfUzivfrDBGvx/F6EOezZB+hdQP8NKXanT3WHG7a30nz5M7ShsfYGDTGh8t2aVvp1scYaHd4DrQToKeaw5iXVnHpwEKDZqE+ID5DYIX1puq354vmjQvAfpUOACw7jMBNiwIUu7xAbOnC179dqVV9fcoOmKi4HmAvmwcAnhuQZCVjZqDVI42oCogePWFSuqnm1Z/c6EQ2mIPRA6gu8nfaaliVVNF2dmA+umCn75YyfwGU6TN1i2+G4oiQGdxHQYJS6vY8NlgTr1PygbU1wpe+27AKvzOYqPIx3T0qwdPnEK/WXn/5ii/+yBGbITCAZEl8gOcec+0+NjaWmGEyo45Xnhcl/tSyja0QAoGYhna/hGj+35qSmOFZ9cInl/u5xsrTNe7nyLVfsIE6CTsRgs8qgXNFf5tV5zYqByjBoxdU9Yt9rF1bYX1AqQTTe37xyrHhMI79F+AmZGksaTkvb5RTvSM8GAoU/JY4XWL/WxZ42f2Y+Zcj6K5uPvHK0NJ4luc2gBw9V6Kf95K8u71JLEROW4bsKjJS+uTPhbN8VoFB22/khP1NVaULMBHN5A70AKRwtaym4PGj6Yy3BxIMzwC9z/O2AgI+WFmtYeZ1R5mTfOwqMnLk01eqipzuthOCQSfVEgpW6WUbVLKQVkanJdS7igU+DweTGqIl64Vy9BsxFI9HS7i1S7sP5zsn5weTjIBKuikuP10tr+sVftT/A/ivxtPeiHncPTPAAAAAElFTkSuQmCC";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "user",
  __ssrInlineRender: true,
  props: {
    isHidden: { type: Boolean }
  },
  setup(__props) {
    useSettingStore();
    const isDark = useDark();
    const userStore = useUserStore();
    const appStore = useAppStore();
    const handleToLogin = () => {
      userStore.setLoginPopupType(LoginPopupTypeEnum.LOGIN);
      userStore.toggleShowLogin(true);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_client_only = __nuxt_component_1$1;
      const _component_Icon = _sfc_main$1;
      const _component_ElButton = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-none" }, _attrs))}><div class="flex items-center">`);
      if (unref(userStore).isLogin) {
        _push(`<!--[-->`);
        if (!_ctx.isHidden) {
          _push(ssrRenderComponent(_component_NuxtLink, { to: "/user/balance" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="bg-[#F0F1F3] flex items-center py-[5px] px-[8px] rounded-[8px] mr-[10px] dark:bg-[#333]"${_scopeId}><img class="w-[10px] h-[14px] mr-1"${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}> ${ssrInterpolate(unref(userStore).userInfo.balance)}</div>`);
              } else {
                return [
                  createVNode("div", { class: "bg-[#F0F1F3] flex items-center py-[5px] px-[8px] rounded-[8px] mr-[10px] dark:bg-[#333]" }, [
                    createVNode("img", {
                      class: "w-[10px] h-[14px] mr-1",
                      src: _imports_0,
                      alt: ""
                    }),
                    createTextVNode(" " + toDisplayString(unref(userStore).userInfo.balance), 1)
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!_ctx.isHidden) {
          _push(ssrRenderComponent(_component_NuxtLink, { to: "/user/balance" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="bg-[#F0F1F3] flex items-center py-[5px] px-[8px] rounded-[8px] mr-[10px] dark:bg-[#333]"${_scopeId}><img class="w-[16px] h-[16px] mr-1"${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId}> ${ssrInterpolate(unref(userStore).userInfo.robot_num)}</div>`);
              } else {
                return [
                  createVNode("div", { class: "bg-[#F0F1F3] flex items-center py-[5px] px-[8px] rounded-[8px] mr-[10px] dark:bg-[#333]" }, [
                    createVNode("img", {
                      class: "w-[16px] h-[16px] mr-1",
                      src: _imports_1,
                      alt: ""
                    }),
                    createTextVNode(" " + toDisplayString(unref(userStore).userInfo.robot_num), 1)
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!_ctx.isHidden) {
          _push(`<div class="mr-[10px] bg-[#FFFBF3] rounded-full flex items-center">`);
          if (unref(appStore).getIsShowMember) {
            _push(ssrRenderComponent(MemberBtn, null, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      if (!_ctx.isHidden) {
        _push(`<div class="mx-[20px] cursor-pointer">`);
        if (unref(isDark)) {
          _push(ssrRenderComponent(_component_Icon, {
            name: "local-icon-dark",
            size: 22
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_Icon, {
            name: "local-icon-light",
            size: 22
          }, null, _parent));
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div>`);
      if (!unref(userStore).isLogin) {
        _push(ssrRenderComponent(_component_ElButton, {
          type: "primary",
          onClick: handleToLogin
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u767B\u5F55/\u6CE8\u518C `);
            } else {
              return [
                createTextVNode(" \u767B\u5F55/\u6CE8\u518C ")
              ];
            }
          }),
          _: 1
        }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/header/user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=user-SBxKtT5H.mjs.map
