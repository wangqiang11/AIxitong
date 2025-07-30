import { s as setInterval } from './download-N0luyf1S.mjs';
import { ref, shallowRef, watch } from 'vue';
import Recorder from 'recorder-core/recorder.mp3.min.js';

const genFFT = function(bufferSize) {
  let FFT_N_LOG, FFT_N, MINY;
  let real, imag, sintable, costable;
  let bitReverse;
  const FFT_Fn = function(bufferSize2) {
    FFT_N_LOG = Math.round(Math.log(bufferSize2) / Math.log(2));
    FFT_N = 1 << FFT_N_LOG;
    MINY = (FFT_N << 2) * Math.sqrt(2);
    real = [];
    imag = [];
    sintable = [0];
    costable = [0];
    bitReverse = [];
    let i, j, k, reve;
    for (i = 0; i < FFT_N; i++) {
      k = i;
      for (j = 0, reve = 0; j != FFT_N_LOG; j++) {
        reve <<= 1;
        reve |= k & 1;
        k >>>= 1;
      }
      bitReverse[i] = reve;
    }
    let theta, dt = 2 * Math.PI / FFT_N;
    for (i = (FFT_N >> 1) - 1; i > 0; i--) {
      theta = i * dt;
      costable[i] = Math.cos(theta);
      sintable[i] = Math.sin(theta);
    }
  };
  const getModulus = function(inBuffer) {
    let i, j, k, ir, j0 = 1, idx = FFT_N_LOG - 1;
    let cosv, sinv, tmpr, tmpi;
    for (i = 0; i != FFT_N; i++) {
      real[i] = inBuffer[bitReverse[i]];
      imag[i] = 0;
    }
    for (i = FFT_N_LOG; i != 0; i--) {
      for (j = 0; j != j0; j++) {
        cosv = costable[j << idx];
        sinv = sintable[j << idx];
        for (k = j; k < FFT_N; k += j0 << 1) {
          ir = k + j0;
          tmpr = cosv * real[ir] - sinv * imag[ir];
          tmpi = cosv * imag[ir] + sinv * real[ir];
          real[ir] = real[k] - tmpr;
          imag[ir] = imag[k] - tmpi;
          real[k] += tmpr;
          imag[k] += tmpi;
        }
      }
      j0 <<= 1;
      idx--;
    }
    j = FFT_N >> 1;
    const outBuffer = new Float64Array(j);
    sinv = MINY;
    cosv = -MINY;
    for (i = j; i != 0; i--) {
      tmpr = real[i];
      tmpi = imag[i];
      if (tmpr > cosv && tmpr < sinv && tmpi > cosv && tmpi < sinv)
        outBuffer[i - 1] = 0;
      else outBuffer[i - 1] = Math.round(tmpr * tmpr + tmpi * tmpi);
    }
    return outBuffer;
  };
  FFT_Fn(bufferSize);
  return { transform: getModulus, bufferSize: FFT_N };
};
const useRecorder = (callbacks, options) => {
  options = options || {
    type: "mp3",
    sampleRate: 32e3,
    bitRate: 32,
    duration: 6e5,
    numberOfChannels: 1,
    //录音通道数
    encodeBitRate: 64e3,
    format: "mp3",
    //音频格式，有效值 aac/mp3 等
    frameSize: 1
    //指定帧大小，单位 KB
  };
  const isRecording = ref(false);
  const isOpen = ref(false);
  const mediaRecorder = shallowRef();
  const createMediaRecorder = () => {
    mediaRecorder.value = Recorder({
      ...options,
      async onProcess(pcmdata, powerLevel, duration, sampleRate) {
        var _a;
        (_a = callbacks == null ? void 0 : callbacks.ondata) == null ? void 0 : _a.call(callbacks, {
          pcmData: pcmdata[pcmdata.length - 1],
          powerLevel,
          sampleRate
        });
      }
    });
  };
  const authorize = () => {
    return new Promise(async (resolve, reject) => {
      if (!mediaRecorder.value) {
        createMediaRecorder();
      }
      mediaRecorder.value.open(
        () => {
          isOpen.value = true;
          resolve();
        },
        (msg) => {
          isOpen.value = false;
          reject("\u65E0\u6CD5\u5F55\u97F3:" + msg);
        }
      );
    });
  };
  const start = async () => {
    var _a;
    try {
      if (!mediaRecorder.value) {
        createMediaRecorder();
      }
      mediaRecorder.value.start(options);
      isRecording.value = true;
      (_a = callbacks.onstart) == null ? void 0 : _a.call(callbacks);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };
  const stop = () => {
    var _a;
    if (mediaRecorder.value && isRecording.value) {
      (_a = mediaRecorder.value) == null ? void 0 : _a.stop(
        (blob, duration) => {
          var _a2;
          const tempFilePath = (void 0).URL.createObjectURL(blob);
          isRecording.value = false;
          return (_a2 = callbacks.onstop) == null ? void 0 : _a2.call(callbacks, {
            tempFilePath,
            duration,
            blob
          });
        },
        () => {
          isRecording.value = false;
        }
      );
    }
  };
  const close = () => {
    var _a, _b;
    (_b = (_a = mediaRecorder.value) == null ? void 0 : _a.close) == null ? void 0 : _b.call(_a, () => {
      isRecording.value = false;
      isOpen.value = false;
    });
    mediaRecorder.value = null;
  };
  return {
    isRecording,
    isOpen,
    mediaRecorder,
    start,
    authorize,
    stop,
    close
  };
};
const defaultAudioGraphOptions = {
  id: "",
  width: 0,
  height: 0,
  scale: 2,
  fps: 30,
  fftSize: 1024,
  lineCount: 6,
  widthRatio: 0.6,
  spaceWidth: 0,
  minHeight: 8,
  position: 0,
  mirrorEnable: false,
  fallDuration: 600,
  linear: [
    {
      pos: 0,
      color: "white"
    },
    {
      pos: 1,
      color: "white"
    }
  ],
  round: true,
  fullFreq: false
};
const useRenderAudioGraph = (options) => {
  const canvasId = options.id;
  if (!canvasId) {
    console.error("\u7ED8\u5236\u56FE\u5F62\u524D\u5FC5\u987B\u6307\u5B9A`canvasId`");
  }
  let opt = Object.assign(
    {},
    defaultAudioGraphOptions,
    options
  );
  if (!opt.width || !opt.height) {
    console.error("\u5FC5\u987B\u6307\u5B9A\u753B\u5E03\u7684\u5BBD\u9AD8");
  }
  const fft = genFFT(opt.fftSize);
  let fragment = void 0;
  let pcmPos = 0;
  let inputTime = 0;
  let scheduleTimer = 0;
  let drawTime = 0;
  let lastH = [];
  const render = (data) => {
    fragment = data;
    pcmPos = 0;
    inputTime = Date.now();
    schedule();
  };
  const genLinear = (ctx, colors, from, to) => {
    const rtv = ctx.createLinearGradient(0, from, 0, to);
    for (let i = 0; i < colors.length; i++) {
      rtv.addColorStop(colors[i].pos, colors[i].color);
    }
    return rtv;
  };
  const drawRect = (ctx, x, y, width, height, r) => {
    const [r1, r2, r3, r4] = r;
    ctx.beginPath();
    ctx.moveTo(x + r1, y);
    ctx.lineTo(x + width - r1, y);
    ctx.arc(x + width - r2, y + r2, r2, Math.PI * 1.5, Math.PI * 2);
    ctx.lineTo(x + width, y + height - r3);
    ctx.arc(x + width - r3, y + height - r3, r3, 0, Math.PI * 0.5);
    ctx.lineTo(x + r4, y + height);
    ctx.arc(x + r4, y + height - r4, r4, Math.PI * 0.5, Math.PI);
    ctx.lineTo(x, y + r1);
    ctx.arc(x + r1, y + r1, r1, Math.PI, Math.PI * 1.5);
    ctx.fill();
  };
  const onDraw = opt.onDraw ? opt.onDraw : (ctx, { frequencyData, sampleRate, options: options2 }) => {
    const {
      scale,
      width,
      height,
      lineCount,
      round,
      fftSize,
      position,
      fallDuration,
      fps,
      fullFreq,
      linear,
      mirrorEnable
    } = options2;
    const realWidth = width * scale;
    const realHeight = height * scale;
    const posAbs = Math.abs(position);
    let originY = position == 1 ? 0 : realHeight;
    let heightY = realHeight;
    if (posAbs < 1) {
      heightY = heightY / 2;
      originY = heightY;
      heightY = Math.floor(heightY * (1 + posAbs));
      originY = Math.floor(
        position > 0 ? originY * (1 - posAbs) : originY * (1 + posAbs)
      );
    }
    const lastHeight = lastH;
    const speed = Math.ceil(heightY / (fallDuration / (1e3 / fps)));
    const Y0 = 1 << (Math.round(Math.log(fftSize) / Math.log(2) + 3) << 1);
    const logY0 = Math.log(Y0) / Math.log(10);
    const dBmax = 20 * Math.log(32767) / Math.log(10);
    const fftSizeHalf = fftSize / 2.5;
    let fftSize5k = fftSizeHalf;
    if (!fullFreq) {
      fftSize5k = Math.min(
        fftSizeHalf,
        Math.floor(fftSizeHalf * 5e3 / (sampleRate / 2))
      );
    }
    const isFullFreq = fftSize5k == fftSize;
    const line80 = isFullFreq ? lineCount : Math.round(lineCount * 0.8);
    const fftSizeStep1 = fftSize5k / line80;
    const fftSizeStep2 = isFullFreq ? 0 : (fftSizeHalf - fftSize5k) / (lineCount - line80);
    let fftIdx = 0;
    for (let i = 0; i < lineCount; i++) {
      const start = Math.ceil(fftIdx);
      if (i < line80) {
        fftIdx += fftSizeStep1;
      } else {
        fftIdx += fftSizeStep2;
      }
      let end = Math.ceil(fftIdx);
      if (end == start) end++;
      end = Math.min(end, fftSizeHalf);
      let maxAmp = 0;
      if (frequencyData) {
        for (let j = start; j < end; j++) {
          maxAmp = Math.max(maxAmp, Math.abs(frequencyData[j]));
        }
      }
      const dB = maxAmp > Y0 ? Math.floor((Math.log(maxAmp) / Math.log(10) - logY0) * 17) : 0;
      let h = heightY * Math.min(dB / dBmax, 1);
      lastHeight[i] = (lastHeight[i] || 0) - speed;
      if (h < lastHeight[i]) {
        h = lastHeight[i];
      }
      if (h < 0) {
        h = 0;
      }
      lastHeight[i] = h;
    }
    ctx.clearRect(0, 0, realWidth, realHeight);
    const linear1 = genLinear(ctx, linear, originY, originY - heightY);
    const linear2 = genLinear(ctx, linear, originY, originY + heightY);
    const mirrorCount = mirrorEnable ? lineCount * 2 - 1 : lineCount;
    const spaceWidth = options2.spaceWidth * scale;
    let widthRatio = options2.widthRatio;
    if (spaceWidth != 0) {
      widthRatio = (realWidth - spaceWidth * (mirrorCount + 1)) / realWidth;
    }
    let lineWN = 0, spaceFloat = 0, lineWF = 0;
    for (let i = 0; i < 2; i++) {
      const lineFloat = Math.max(
        1 * scale,
        realWidth * widthRatio / mirrorCount
      );
      lineWN = Math.floor(lineFloat);
      lineWF = lineFloat - lineWN;
      spaceFloat = (realWidth - mirrorCount * lineFloat) / (mirrorCount + 1);
      if (spaceFloat > 0 && spaceFloat < 1) {
        widthRatio = 1;
        spaceFloat = 0;
      } else break;
    }
    const minHeight = options2.minHeight * scale;
    const XFloat = mirrorEnable ? (realWidth - lineWN) / 2 - spaceFloat : 0;
    for (let iMirror = 0; iMirror < 2; iMirror++) {
      if (iMirror) {
        ctx.save();
        ctx.scale(-1, 1);
      }
      const xMirror = iMirror ? realWidth : 0;
      for (let i = 0, xFloat = XFloat, wFloat = 0, x, y, w, h; i < lineCount; i++) {
        xFloat += spaceFloat;
        x = Math.floor(xFloat) - xMirror;
        w = lineWN;
        wFloat += lineWF;
        if (wFloat >= 1) {
          w++;
          wFloat--;
        }
        h = Math.max(lastH[i], minHeight);
        const radius = round ? w / 2 : 0;
        let r = new Array(4).fill(radius);
        if (originY != 0) {
          y = originY - h;
          ctx.fillStyle = linear1;
          if (originY != realHeight) {
            r = [radius, radius, 0, 0];
          }
          drawRect(ctx, x, y, w, h, r);
        }
        if (originY != realHeight) {
          ctx.fillStyle = linear2;
          if (originY != 0) {
            r = [0, 0, radius, radius];
          }
          drawRect(ctx, x, originY, w, h, r);
        }
        xFloat += w;
      }
      if (iMirror) {
        ctx.restore();
      }
      if (!mirrorEnable) break;
    }
  };
  delete opt.onDraw;
  const draw = (frequencyData, sampleRate) => {
    const canvas = (void 0).getElementById(canvasId);
    if (!canvas) {
      console.error(`canvasId\uFF1A${canvasId}\u65E0\u6548`);
      return;
    }
    const canvasCtx = canvas.getContext("2d");
    onDraw(canvasCtx, {
      frequencyData,
      sampleRate,
      options: opt
    });
  };
  const schedule = () => {
    const interval = Math.floor(1e3 / opt.fps);
    if (!scheduleTimer) {
      scheduleTimer = setInterval();
    }
    const now = Date.now();
    drawTime = drawTime || 0;
    if (now - inputTime > (opt == null ? void 0 : opt.fallDuration) * 1.5) {
      clearInterval(scheduleTimer);
      lastH = [];
      draw(null, fragment.sampleRate);
      return;
    }
    if (now - drawTime < interval) {
      return;
    }
    drawTime = now;
    const bufferSize = fft.bufferSize;
    const pcm = fragment.pcmData;
    let pos = pcmPos;
    const arr = new Int16Array(bufferSize);
    for (let i = 0; i < bufferSize && pos < pcm.length; i++, pos++) {
      arr[i] = pcm[pos];
    }
    pcmPos = pos;
    const frequencyData = fft.transform(arr);
    draw(frequencyData, fragment.sampleRate);
  };
  const stopRender = () => {
    clearInterval(scheduleTimer);
  };
  watch(
    () => options,
    () => {
      opt = Object.assign(opt, options);
    },
    {
      deep: true
    }
  );
  return {
    render,
    draw,
    stopRender
  };
};

export { useRecorder as a, useRenderAudioGraph as u };
//# sourceMappingURL=useRecorder-K_rLcXyS.mjs.map
