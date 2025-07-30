var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const mosaic = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC+SURBVHhe7djBDYAwDATBuED6LydAAfiTj8UN3yhCshyfd2vvfa3mq6rueD332/Pp90sBdIAnYAYYglLguwLTY+w0ht+Qb2fA6Q/G31cAHeAJmAHdHjB+iJ3CmiGYPgThMByGw3AYDsPhYByOj0GbYPomqAN0ACFCiBAiTQV+b4TiFyEFIEQIEUKEECFEgoUIGkSDaBANosFkGpQC6SkAh+EwHIbDcBgOB+NwfAzaBNM3QR2gAxghRogRCjZCN8AuE04B1B91AAAAAElFTkSuQmCC";
class DrawingTool {
  constructor() {
    __publicField(this, "ctx", null);
    __publicField(this, "canvas", null);
    __publicField(this, "stepList", []);
    __publicField(this, "stage", null);
    __publicField(this, "mosaicImage");
    this.mosaicImage = new Image();
    this.mosaicImage.src = mosaic;
  }
  init(stage) {
    this.ctx = stage.ctx;
    this.canvas = stage.canvas;
    this.stepList = stage.stepList;
    this.stage = stage;
  }
  saveCurrentState() {
    var _a;
    if (this.stage.stepIndex < this.stepList.length - 1) {
      this.stepList.splice(this.stage.stepIndex + 1);
    }
    this.stepList.push(
      (_a = this.ctx) == null ? void 0 : _a.getImageData(0, 0, this.canvas.width, this.canvas.height)
    );
    this.stage.stepIndex++;
  }
  reapplyState() {
    var _a, _b;
    if (this.stage.stepIndex < 0) return;
    (_a = this.ctx) == null ? void 0 : _a.clearRect(0, 0, this.canvas.width, this.canvas.height);
    (_b = this.ctx) == null ? void 0 : _b.putImageData(this.stepList[this.stage.stepIndex], 0, 0);
  }
  drawLasso(points, stroke, strokeWidth = 1.5, close = false) {
    var _a, _b, _c, _d, _e, _f, _g;
    this.reapplyState();
    const len = points.length;
    (_a = this.ctx) == null ? void 0 : _a.beginPath();
    (_b = this.ctx) == null ? void 0 : _b.moveTo(points[0], points[1]);
    for (let i = 2; i < len - 3; i += 4) {
      (_c = this.ctx) == null ? void 0 : _c.bezierCurveTo(
        points[i],
        points[i + 1],
        points[i + 2],
        points[i + 3],
        points[i + 4],
        points[i + 5]
      );
    }
    if (close) {
      (_d = this.ctx) == null ? void 0 : _d.closePath();
    }
    this.ctx.strokeStyle = stroke;
    this.ctx.lineWidth = strokeWidth;
    (_e = this.ctx) == null ? void 0 : _e.stroke();
    this.ctx.fillStyle = (_f = this.ctx) == null ? void 0 : _f.createPattern(this.mosaicImage, "repeat");
    (_g = this.ctx) == null ? void 0 : _g.fill();
  }
  drawRect({ x, y, w, h, color }) {
    var _a, _b;
    this.reapplyState();
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = 2;
    this.ctx.rect(x, y, w, h);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.fillStyle = (_a = this.ctx) == null ? void 0 : _a.createPattern(this.mosaicImage, "repeat");
    (_b = this.ctx) == null ? void 0 : _b.fillRect(x, y, w, h);
  }
}

export { DrawingTool };
//# sourceMappingURL=DrawingTool-DEHEFSZT.mjs.map
