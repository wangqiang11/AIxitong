import { defineComponent, computed, shallowRef, ref, watch, openBlock, createElementBlock, normalizeStyle, renderSlot } from 'vue';
import { useMutationObserver } from '@vueuse/core';
import { h as buildProps, j as definePropType, w as withInstall, _ as _export_sfc } from './server.mjs';

const watermarkProps = buildProps({
  zIndex: {
    type: Number,
    default: 9
  },
  rotate: {
    type: Number,
    default: -22
  },
  width: Number,
  height: Number,
  image: String,
  content: {
    type: definePropType([String, Array]),
    default: "Element Plus"
  },
  font: {
    type: definePropType(Object)
  },
  gap: {
    type: definePropType(Array),
    default: () => [100, 100]
  },
  offset: {
    type: definePropType(Array)
  }
});
function toLowercaseSeparator(key) {
  return key.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function getStyleStr(style) {
  return Object.keys(style).map((key) => `${toLowercaseSeparator(key)}: ${style[key]};`).join(" ");
}
function getPixelRatio() {
  return (void 0).devicePixelRatio || 1;
}
const reRendering = (mutation, watermarkElement) => {
  let flag = false;
  if (mutation.removedNodes.length && watermarkElement) {
    flag = Array.from(mutation.removedNodes).includes(watermarkElement);
  }
  if (mutation.type === "attributes" && mutation.target === watermarkElement) {
    flag = true;
  }
  return flag;
};
const FontGap = 3;
function prepareCanvas(width, height, ratio = 1) {
  const canvas = (void 0).createElement("canvas");
  const ctx = canvas.getContext("2d");
  const realWidth = width * ratio;
  const realHeight = height * ratio;
  canvas.setAttribute("width", `${realWidth}px`);
  canvas.setAttribute("height", `${realHeight}px`);
  ctx.save();
  return [ctx, canvas, realWidth, realHeight];
}
function useClips() {
  function getClips(content, rotate, ratio, width, height, font, gapX, gapY) {
    const [ctx, canvas, contentWidth, contentHeight] = prepareCanvas(width, height, ratio);
    if (content instanceof HTMLImageElement) {
      ctx.drawImage(content, 0, 0, contentWidth, contentHeight);
    } else {
      const {
        color,
        fontSize,
        fontStyle,
        fontWeight,
        fontFamily,
        textAlign,
        textBaseline
      } = font;
      const mergedFontSize = Number(fontSize) * ratio;
      ctx.font = `${fontStyle} normal ${fontWeight} ${mergedFontSize}px/${height}px ${fontFamily}`;
      ctx.fillStyle = color;
      ctx.textAlign = textAlign;
      ctx.textBaseline = textBaseline;
      const contents = Array.isArray(content) ? content : [content];
      contents == null ? void 0 : contents.forEach((item, index) => {
        ctx.fillText(item != null ? item : "", contentWidth / 2, index * (mergedFontSize + FontGap * ratio));
      });
    }
    const angle = Math.PI / 180 * Number(rotate);
    const maxSize = Math.max(width, height);
    const [rCtx, rCanvas, realMaxSize] = prepareCanvas(maxSize, maxSize, ratio);
    rCtx.translate(realMaxSize / 2, realMaxSize / 2);
    rCtx.rotate(angle);
    if (contentWidth > 0 && contentHeight > 0) {
      rCtx.drawImage(canvas, -contentWidth / 2, -contentHeight / 2);
    }
    function getRotatePos(x, y) {
      const targetX = x * Math.cos(angle) - y * Math.sin(angle);
      const targetY = x * Math.sin(angle) + y * Math.cos(angle);
      return [targetX, targetY];
    }
    let left = 0;
    let right = 0;
    let top = 0;
    let bottom = 0;
    const halfWidth = contentWidth / 2;
    const halfHeight = contentHeight / 2;
    const points = [
      [0 - halfWidth, 0 - halfHeight],
      [0 + halfWidth, 0 - halfHeight],
      [0 + halfWidth, 0 + halfHeight],
      [0 - halfWidth, 0 + halfHeight]
    ];
    points.forEach(([x, y]) => {
      const [targetX, targetY] = getRotatePos(x, y);
      left = Math.min(left, targetX);
      right = Math.max(right, targetX);
      top = Math.min(top, targetY);
      bottom = Math.max(bottom, targetY);
    });
    const cutLeft = left + realMaxSize / 2;
    const cutTop = top + realMaxSize / 2;
    const cutWidth = right - left;
    const cutHeight = bottom - top;
    const realGapX = gapX * ratio;
    const realGapY = gapY * ratio;
    const filledWidth = (cutWidth + realGapX) * 2;
    const filledHeight = cutHeight + realGapY;
    const [fCtx, fCanvas] = prepareCanvas(filledWidth, filledHeight);
    function drawImg(targetX = 0, targetY = 0) {
      fCtx.drawImage(rCanvas, cutLeft, cutTop, cutWidth, cutHeight, targetX, targetY, cutWidth, cutHeight);
    }
    drawImg();
    drawImg(cutWidth + realGapX, -cutHeight / 2 - realGapY / 2);
    drawImg(cutWidth + realGapX, +cutHeight / 2 + realGapY / 2);
    return [fCanvas.toDataURL(), filledWidth / ratio, filledHeight / ratio];
  }
  return getClips;
}
const __default__ = defineComponent({
  name: "ElWatermark"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: watermarkProps,
  setup(__props) {
    const props = __props;
    const style = {
      position: "relative"
    };
    const color = computed(() => {
      var _a, _b;
      return (_b = (_a = props.font) == null ? void 0 : _a.color) != null ? _b : "rgba(0,0,0,.15)";
    });
    const fontSize = computed(() => {
      var _a, _b;
      return (_b = (_a = props.font) == null ? void 0 : _a.fontSize) != null ? _b : 16;
    });
    const fontWeight = computed(() => {
      var _a, _b;
      return (_b = (_a = props.font) == null ? void 0 : _a.fontWeight) != null ? _b : "normal";
    });
    const fontStyle = computed(() => {
      var _a, _b;
      return (_b = (_a = props.font) == null ? void 0 : _a.fontStyle) != null ? _b : "normal";
    });
    const fontFamily = computed(() => {
      var _a, _b;
      return (_b = (_a = props.font) == null ? void 0 : _a.fontFamily) != null ? _b : "sans-serif";
    });
    const textAlign = computed(() => {
      var _a, _b;
      return (_b = (_a = props.font) == null ? void 0 : _a.textAlign) != null ? _b : "center";
    });
    const textBaseline = computed(() => {
      var _a, _b;
      return (_b = (_a = props.font) == null ? void 0 : _a.textBaseline) != null ? _b : "top";
    });
    const gapX = computed(() => props.gap[0]);
    const gapY = computed(() => props.gap[1]);
    const gapXCenter = computed(() => gapX.value / 2);
    const gapYCenter = computed(() => gapY.value / 2);
    const offsetLeft = computed(() => {
      var _a, _b;
      return (_b = (_a = props.offset) == null ? void 0 : _a[0]) != null ? _b : gapXCenter.value;
    });
    const offsetTop = computed(() => {
      var _a, _b;
      return (_b = (_a = props.offset) == null ? void 0 : _a[1]) != null ? _b : gapYCenter.value;
    });
    const getMarkStyle = () => {
      const markStyle = {
        zIndex: props.zIndex,
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        backgroundRepeat: "repeat"
      };
      let positionLeft = offsetLeft.value - gapXCenter.value;
      let positionTop = offsetTop.value - gapYCenter.value;
      if (positionLeft > 0) {
        markStyle.left = `${positionLeft}px`;
        markStyle.width = `calc(100% - ${positionLeft}px)`;
        positionLeft = 0;
      }
      if (positionTop > 0) {
        markStyle.top = `${positionTop}px`;
        markStyle.height = `calc(100% - ${positionTop}px)`;
        positionTop = 0;
      }
      markStyle.backgroundPosition = `${positionLeft}px ${positionTop}px`;
      return markStyle;
    };
    const containerRef = shallowRef(null);
    const watermarkRef = shallowRef();
    const stopObservation = ref(false);
    const destroyWatermark = () => {
      if (watermarkRef.value) {
        watermarkRef.value.remove();
        watermarkRef.value = void 0;
      }
    };
    const appendWatermark = (base64Url, markWidth) => {
      var _a;
      if (containerRef.value && watermarkRef.value) {
        stopObservation.value = true;
        watermarkRef.value.setAttribute("style", getStyleStr({
          ...getMarkStyle(),
          backgroundImage: `url('${base64Url}')`,
          backgroundSize: `${Math.floor(markWidth)}px`
        }));
        (_a = containerRef.value) == null ? void 0 : _a.append(watermarkRef.value);
        setTimeout(() => {
          stopObservation.value = false;
        });
      }
    };
    const getMarkSize = (ctx) => {
      let defaultWidth = 120;
      let defaultHeight = 64;
      const image = props.image;
      const content = props.content;
      const width = props.width;
      const height = props.height;
      if (!image && ctx.measureText) {
        ctx.font = `${Number(fontSize.value)}px ${fontFamily.value}`;
        const contents = Array.isArray(content) ? content : [content];
        const sizes = contents.map((item) => {
          const metrics = ctx.measureText(item);
          return [
            metrics.width,
            metrics.fontBoundingBoxAscent !== void 0 ? metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent : metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
          ];
        });
        defaultWidth = Math.ceil(Math.max(...sizes.map((size) => size[0])));
        defaultHeight = Math.ceil(Math.max(...sizes.map((size) => size[1]))) * contents.length + (contents.length - 1) * FontGap;
      }
      return [width != null ? width : defaultWidth, height != null ? height : defaultHeight];
    };
    const getClips = useClips();
    const renderWatermark = () => {
      const canvas = (void 0).createElement("canvas");
      const ctx = canvas.getContext("2d");
      const image = props.image;
      const content = props.content;
      const rotate = props.rotate;
      if (ctx) {
        if (!watermarkRef.value) {
          watermarkRef.value = (void 0).createElement("div");
        }
        const ratio = getPixelRatio();
        const [markWidth, markHeight] = getMarkSize(ctx);
        const drawCanvas = (drawContent) => {
          const [textClips, clipWidth] = getClips(drawContent || "", rotate, ratio, markWidth, markHeight, {
            color: color.value,
            fontSize: fontSize.value,
            fontStyle: fontStyle.value,
            fontWeight: fontWeight.value,
            fontFamily: fontFamily.value,
            textAlign: textAlign.value,
            textBaseline: textBaseline.value
          }, gapX.value, gapY.value);
          appendWatermark(textClips, clipWidth);
        };
        if (image) {
          const img = new Image();
          img.onload = () => {
            drawCanvas(img);
          };
          img.onerror = () => {
            drawCanvas(content);
          };
          img.crossOrigin = "anonymous";
          img.referrerPolicy = "no-referrer";
          img.src = image;
        } else {
          drawCanvas(content);
        }
      }
    };
    watch(() => props, () => {
      renderWatermark();
    }, {
      deep: true,
      flush: "post"
    });
    const onMutate = (mutations) => {
      if (stopObservation.value) {
        return;
      }
      mutations.forEach((mutation) => {
        if (reRendering(mutation, watermarkRef.value)) {
          destroyWatermark();
          renderWatermark();
        }
      });
    };
    useMutationObserver(containerRef, onMutate, {
      attributes: true,
      subtree: true,
      childList: true
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "containerRef",
        ref: containerRef,
        style: normalizeStyle([style])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 4);
    };
  }
});
var Watermark = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "watermark.vue"]]);
const ElWatermark = withInstall(Watermark);

export { ElWatermark as E };
//# sourceMappingURL=index-VIyJ-gCg.mjs.map
