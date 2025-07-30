var DrawModeEnum = /* @__PURE__ */ ((DrawModeEnum2) => {
  DrawModeEnum2["SD"] = "sd";
  DrawModeEnum2["MJ"] = "mj";
  DrawModeEnum2["DALLE3"] = "dalle3";
  DrawModeEnum2["DOUBAO"] = "doubao";
  return DrawModeEnum2;
})(DrawModeEnum || {});
const DrawLink = {
  [
    "sd"
    /* SD */
  ]: "/draw/sd",
  [
    "mj"
    /* MJ */
  ]: "/draw/mj",
  [
    "dalle3"
    /* DALLE3 */
  ]: "/draw/dalle",
  [
    "doubao"
    /* DOUBAO */
  ]: "/draw/doubao"
};
var DrawTypeEnum = /* @__PURE__ */ ((DrawTypeEnum2) => {
  DrawTypeEnum2["txt2img"] = "txt2img";
  DrawTypeEnum2["img2img"] = "img2img";
  DrawTypeEnum2["SCALE2D"] = "scale2d";
  return DrawTypeEnum2;
})(DrawTypeEnum || {});
const DrawResultTypeEnum = {
  1: "\u6587\u751F\u56FE",
  2: "\u56FE\u751F\u56FE",
  3: "\u9009\u4E2D\u653E\u5927",
  4: "\u9009\u4E2D\u53D8\u6362"
};

export { DrawLink, DrawModeEnum, DrawResultTypeEnum, DrawTypeEnum };
//# sourceMappingURL=DrawEnum-CqAPEJOR.mjs.map
