import { b7 as useState, d as ElButton } from './server.mjs';
import { _ as _sfc_main$1 } from './index-BoqjHllR.mjs';
import { E as ElSlider } from './el-slider-LwCMMHAn.mjs';
import { computed, watch, useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { b as getMusicLists } from './music-A1_NVo6h.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const transTime = (time) => {
  let minute = parseInt(String(time / 60));
  let sec = Math.round(time % 60) + "";
  const isM0 = ":";
  if (minute == 0) {
    minute = "00";
  } else if (minute < 10) {
    minute = "0" + minute;
  }
  if (sec.length == 1) {
    sec = "0" + sec;
  }
  return minute + isM0 + sec;
};
const useMusicPlay = () => {
  const audioCtx = useState(() => new Audio(), "$DJSMRhR2S7");
  const currentTime = useState(() => 0, "$GS6UDXwhYk");
  const duration = useState(() => 0, "$PUrgbX7hfL");
  const playing = useState(() => false, "$0vj7SXLRdo");
  const idToItem = useState(() => /* @__PURE__ */ new Map(), "$8PwyUKyd2j");
  const currentId = useState(() => -1, "$1LKcW0IhcI");
  const musicList = useState(() => [], "$ff4BoCp0CW");
  const getMusic = async () => {
    const data = await getMusicLists({
      page_type: 0,
      status: 2
    });
    idToItem.value.clear();
    data.lists.forEach((item, index) => {
      idToItem.value.set(item.id, { ...item, index });
    });
    musicList.value = data.lists;
  };
  const setMusic = (lists) => {
    idToItem.value.clear();
    lists.forEach((item, index) => {
      idToItem.value.set(item.id, { ...item, index });
    });
    musicList.value = lists;
  };
  const onPlay = () => {
    if (!audioCtx.value.paused) {
      playing.value = true;
    }
  };
  const togglePlay = () => {
    if (!playing.value) {
      play();
    } else {
      pause();
    }
  };
  const pause = () => {
    audioCtx.value.pause();
  };
  const play = () => {
    audioCtx.value.play();
  };
  const onPause = () => {
    playing.value = false;
  };
  const onError = () => {
    onPause();
  };
  const onLoadedMetadata = () => {
    duration.value = audioCtx.value.duration;
  };
  const onTimeupdate = () => {
    currentTime.value = audioCtx.value.currentTime;
  };
  const setCurrentTime = (time) => {
    audioCtx.value.currentTime = time;
  };
  const setCurrentId = (id) => {
    currentId.value = id;
    setTimeout(() => {
      play();
    });
  };
  const prevOrNext = (num) => {
    let index = currentMusic.value.index;
    if (index === void 0) index = 0;
    let newIndex = index + num;
    if (newIndex <= 0) {
      newIndex = 0;
    }
    if (newIndex >= musicList.value.length - 1) {
      newIndex = musicList.value.length - 1;
    }
    playing.value = false;
    const item = musicList.value[newIndex];
    setCurrentId(item.id);
  };
  const durationTrans = computed(() => transTime(duration.value));
  const currentTimeTrans = computed(() => transTime(currentTime.value));
  const currentMusic = computed(
    () => idToItem.value.get(currentId.value) || {}
  );
  if (!audioCtx.value.onplay) {
    audioCtx.value.onloadedmetadata = onLoadedMetadata;
    audioCtx.value.onplay = onPlay;
    audioCtx.value.onpause = onPause;
    audioCtx.value.ontimeupdate = onTimeupdate;
    audioCtx.value.onseeking = onTimeupdate;
    audioCtx.value.onended = onPause;
    audioCtx.value.onerror = onError;
  }
  const setUrl = () => {
    const item = idToItem.value.get(currentId.value);
    if (item && audioCtx.value.src !== item.audio_url) {
      audioCtx.value.src = item.audio_url;
    }
  };
  watch(currentId, (value) => {
    if (value == -1) {
      audioCtx.value.src = "";
      duration.value = 0;
    } else {
      setUrl();
    }
  });
  watch(musicList, setUrl);
  return {
    audioCtx,
    currentTime,
    duration,
    durationTrans,
    currentTimeTrans,
    currentId,
    currentMusic,
    playing,
    musicList,
    pause,
    play,
    getMusic,
    setMusic,
    setCurrentTime,
    prevOrNext,
    togglePlay,
    setCurrentId
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "player",
  __ssrInlineRender: true,
  emits: ["title"],
  setup(__props, { emit: __emit }) {
    const {
      playing,
      duration,
      musicList,
      currentId,
      currentMusic,
      currentTime,
      currentTimeTrans,
      setCurrentTime,
      durationTrans,
      prevOrNext,
      togglePlay
    } = useMusicPlay();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElButton = ElButton;
      const _component_Icon = _sfc_main$1;
      const _component_el_slider = ElSlider;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center p-[13px]" }, _attrs))} data-v-53183250><div class="flex items-center w-[200px] h-[55px] cursor-pointer" data-v-53183250>`);
      if (unref(currentMusic).title) {
        _push(`<!--[--><img${ssrRenderAttr("src", unref(currentMusic).image_url)} class="w-[55px] h-full rounded-[8px]" data-v-53183250><div class="flex-1 min-w-0 ml-[15px]" data-v-53183250><div class="font-bold line-clamp-1" data-v-53183250>${ssrInterpolate(unref(currentMusic).title)}</div>`);
        if (unref(currentMusic).style_desc) {
          _push(`<div class="line-clamp-1 text-tx-secondary text-sm" data-v-53183250>${ssrInterpolate(unref(currentMusic).style_desc)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mx-[20px] flex items-center" data-v-53183250><div class="text-tx-regular" data-v-53183250>`);
      _push(ssrRenderComponent(_component_ElButton, {
        link: "",
        disabled: unref(currentId) <= 0 || unref(currentMusic).index <= 0,
        onClick: ($event) => unref(prevOrNext)(-1)
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "local-icon-up",
              size: 24
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "local-icon-up",
                size: 24
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mx-[20px]" data-v-53183250>`);
      _push(ssrRenderComponent(_component_ElButton, {
        type: "primary",
        circle: "",
        onClick: unref(togglePlay),
        disabled: unref(currentId) <= 0
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: `local-icon-${unref(playing) ? "pause1" : "play"}`,
              size: 14
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: `local-icon-${unref(playing) ? "pause1" : "play"}`,
                size: 14
              }, null, 8, ["name"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="text-tx-regular" data-v-53183250>`);
      _push(ssrRenderComponent(_component_ElButton, {
        link: "",
        disabled: unref(currentId) <= 0 || unref(currentMusic).index >= unref(musicList).length - 1,
        onClick: ($event) => unref(prevOrNext)(1)
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "local-icon-down",
              size: 24
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "local-icon-down",
                size: 24
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex items-center text-tx-secondary mx-[30px]" data-v-53183250><div class="w-[50px]" data-v-53183250>${ssrInterpolate(unref(currentTimeTrans))}</div><div class="mx-[20px] w-[250px]" data-v-53183250>`);
      _push(ssrRenderComponent(_component_el_slider, {
        "model-value": unref(currentTime),
        disabled: !unref(currentMusic).audio_url,
        size: "small",
        "show-tooltip": false,
        min: 0,
        max: unref(duration),
        onInput: unref(setCurrentTime)
      }, null, _parent));
      _push(`</div><div class="w-[50px]" data-v-53183250>${ssrInterpolate(unref(durationTrans))}</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/music/player.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-53183250"]]);

export { __nuxt_component_3 as _, useMusicPlay as u };
//# sourceMappingURL=player-DDfYp134.mjs.map
