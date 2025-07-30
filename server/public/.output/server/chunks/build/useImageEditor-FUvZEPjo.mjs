import { reactive, shallowReactive, ref, computed } from 'vue';
import { DrawingTool } from './DrawingTool-DEHEFSZT.mjs';

function useImageEditor(callbacks) {
  const defaultCanvasAttr = reactive({
    width: null,
    height: null,
    name: "Stage",
    children: []
  });
  const drawToolMap = {
    RECT: "rect",
    LASSO: "lasso"
  };
  const state = shallowReactive({
    canvas: null,
    ctx: null,
    lineType: drawToolMap.LASSO,
    stepIndex: -1,
    stepList: [],
    stepAttr: defaultCanvasAttr
  });
  const image = ref(new Image());
  const drawingTool = new DrawingTool();
  const selectionPaths = ref([]);
  let drawPoints = [];
  let isMouseDown = false;
  const initCanvas = (canvasId, imageUrl) => {
    const canvas = (void 0).getElementById(canvasId);
    if (!canvas) return;
    state.canvas = canvas;
    state.ctx = canvas.getContext("2d");
    canvas.style.cursor = "crosshair";
    canvas.style.pointerEvents = "none";
    if (state.ctx) {
      state.ctx.fillStyle = "white";
      state.ctx.fillRect(0, 0, canvas.width, canvas.height);
      state.ctx.font = "20px Arial";
      state.ctx.fillStyle = "black";
      state.ctx.fillText("Loading...", canvas.width / 2 - 40, canvas.height / 2);
      state.ctx.imageSmoothingEnabled = true;
      state.ctx.imageSmoothingQuality = "high";
      image.value.onload = () => {
        var _a;
        canvas.style.pointerEvents = "auto";
        const aspectRatio = image.value.width / image.value.height;
        let newWidth, newHeight;
        if (aspectRatio > canvas.width / canvas.height) {
          newWidth = canvas.width;
          newHeight = canvas.width / aspectRatio;
        } else {
          newWidth = canvas.height * aspectRatio;
          newHeight = canvas.height;
        }
        const x = (canvas.width - newWidth) / 2;
        const y = (canvas.height - newHeight) / 2;
        (_a = state.ctx) == null ? void 0 : _a.drawImage(image.value, x, y, newWidth, newHeight);
        drawingTool.init(state);
        drawingTool.saveCurrentState();
      };
      image.value.onerror = (error) => {
        var _a, _b;
        (_a = state.ctx) == null ? void 0 : _a.clearRect(0, 0, canvas.width, canvas.height);
        (_b = state.ctx) == null ? void 0 : _b.fillText("Image load failed", canvas.width / 2 - 40, canvas.height / 2);
      };
      image.value.setAttribute("crossOrigin", "");
      image.value.setAttribute("src", imageUrl);
    }
  };
  const changeTool = (tool) => {
    state.lineType = drawToolMap[tool];
  };
  const handleDrawingTool = (...touch) => {
    const { x, y, w, h, color, move, closed } = touch[0];
    switch (state.lineType) {
      case drawToolMap.RECT:
        drawingTool.drawRect({ x, y, w: w - x, h: h - y, color });
        break;
      case drawToolMap.LASSO:
        if (move) drawPoints.push(w, h);
        drawingTool.drawLasso(drawPoints, color, 2, closed);
        break;
    }
  };
  const onMouseDown = (event) => {
    var _a;
    isMouseDown = true;
    (_a = state.ctx) == null ? void 0 : _a.beginPath();
    handleDrawingTool({
      x: event.offsetX,
      y: event.offsetY,
      color: "#11bdf7"
    });
    drawPoints = [event.offsetX, event.offsetY];
  };
  const onMouseMove = (event) => {
    if (!isMouseDown) return;
    handleDrawingTool({
      x: drawPoints[0],
      y: drawPoints[1],
      w: event.offsetX,
      h: event.offsetY,
      color: "#11bdf7",
      move: true
    });
  };
  const onMouseUp = (event) => {
    var _a;
    if (!drawPoints.length || drawPoints[0] === event.offsetX && drawPoints[1] === event.offsetY) {
      drawPoints = [];
      isMouseDown = false;
      return;
    }
    handleDrawingTool({
      x: drawPoints[0],
      y: drawPoints[1],
      w: event.offsetX,
      h: event.offsetY,
      closed: true
    });
    finalizeDrawing({ x: drawPoints[0], y: drawPoints[1], w: event.offsetX, h: event.offsetY });
    (_a = state.ctx) == null ? void 0 : _a.closePath();
    drawingTool.saveCurrentState();
    isMouseDown = false;
  };
  const finalizeDrawing = (touch) => {
    const { x, y, w, h } = touch;
    switch (state.lineType) {
      case drawToolMap.RECT:
        captureRectArea({ x, y, w: w - x, h: h - y });
        break;
      case drawToolMap.LASSO:
        captureLassoArea(drawPoints);
        break;
    }
    drawPoints = [];
  };
  const saveSelectionPath = (path) => {
    selectionPaths.value.push(path);
  };
  const captureRectArea = ({ x, y, w, h }) => {
    saveSelectionPath({ type: drawToolMap.RECT, x, y, w, h });
  };
  const captureLassoArea = (points) => {
    saveSelectionPath({ type: drawToolMap.LASSO, points: [...points] });
  };
  const captureCombinedSelections = () => {
    var _a;
    if (!image.value) return;
    const tempCanvas = (void 0).createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    tempCanvas.width = image.value.width;
    tempCanvas.height = image.value.height;
    tempCtx.fillStyle = "black";
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.fillStyle = "white";
    selectionPaths.value.forEach((path) => {
      if (path.type === drawToolMap.LASSO) {
        const points = path.points.map(
          (coord, index) => index % 2 === 0 ? coord / state.canvas.width * image.value.width : coord / state.canvas.height * image.value.height
        );
        tempCtx.beginPath();
        tempCtx.moveTo(points[0], points[1]);
        for (let i = 2; i < points.length; i += 2) {
          tempCtx.lineTo(points[i], points[i + 1]);
        }
        tempCtx.closePath();
        tempCtx.fill();
      } else if (path.type === drawToolMap.RECT) {
        const x = path.x / state.canvas.width * image.value.width;
        const y = path.y / state.canvas.height * image.value.height;
        const w = path.w / state.canvas.width * image.value.width;
        const h = path.h / state.canvas.height * image.value.height;
        tempCtx.beginPath();
        tempCtx.rect(x, y, w, h);
        tempCtx.closePath();
        tempCtx.fill();
      }
    });
    (_a = callbacks == null ? void 0 : callbacks.onData) == null ? void 0 : _a.call(callbacks, tempCanvas.toDataURL());
  };
  const undo = () => {
    if (state.stepIndex <= 0) return;
    state.stepIndex--;
    drawingTool.reapplyState();
    state.stepList.pop();
    selectionPaths.value.pop();
  };
  const clearState = () => {
    drawPoints = [];
    selectionPaths.value = [];
  };
  (void 0).addEventListener("focus", () => {
    var _a, _b;
    (_a = state.canvas) == null ? void 0 : _a.focus();
    (_b = state.ctx) == null ? void 0 : _b.putImageData(state.stepList[state.stepIndex], 0, 0);
  });
  return {
    initCanvas,
    currentTool: computed(() => state.lineType),
    changeTool,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    undo,
    clearState,
    captureCombinedSelections
  };
}

export { useImageEditor };
//# sourceMappingURL=useImageEditor-FUvZEPjo.mjs.map
