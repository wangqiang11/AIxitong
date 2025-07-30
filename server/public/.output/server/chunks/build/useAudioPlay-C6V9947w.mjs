import { shallowRef, ref } from 'vue';

const audioSet = /* @__PURE__ */ new Set();
const useAudioPlay = (options) => {
  const { onstart, onstop, onerror } = options || {};
  const audio = shallowRef(null);
  const audioLoading = ref(false);
  const audioPlaying = ref(false);
  const play = async (urlOrFun, isCache = true) => {
    var _a;
    let fun;
    if (typeof urlOrFun === "string") {
      fun = () => urlOrFun;
    } else {
      fun = urlOrFun;
    }
    pauseAll();
    if (!audio.value) {
      createAudio();
    }
    if (isCache && ((_a = audio.value) == null ? void 0 : _a.src)) {
      audio.value.play();
      return;
    }
    audioLoading.value = true;
    try {
      const audioUrl = await Promise.resolve(fun());
      audio.value.src = audioUrl;
      audio.value.play();
    } catch (error) {
      console.error(error);
      onerror == null ? void 0 : onerror();
    } finally {
      audioLoading.value = false;
    }
  };
  const pause = () => {
    var _a;
    (_a = audio.value) == null ? void 0 : _a.pause();
    audioPlaying.value = false;
  };
  const pauseAll = () => {
    audioSet.forEach((audio2) => {
      audio2.pause();
      audio2.currentTime = 0;
      audio2.audioPlaying.value = false;
    });
  };
  const createAudio = () => {
    audio.value = new Audio();
    audio.value.audioPlaying = audioPlaying;
    audioSet.add(audio.value);
    audio.value.onplay = () => {
      onstart == null ? void 0 : onstart();
      audioPlaying.value = true;
    };
    audio.value.onended = () => {
      onstop == null ? void 0 : onstop();
      audioPlaying.value = false;
    };
    audio.value.onerror = () => {
      onerror == null ? void 0 : onerror();
      audioPlaying.value = false;
    };
  };
  return {
    play,
    audioLoading,
    audioPlaying,
    pause,
    pauseAll
  };
};

export { useAudioPlay as u };
//# sourceMappingURL=useAudioPlay-C6V9947w.mjs.map
