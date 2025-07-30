function getDrawSquare(params) {
  return $request.get({ url: "/draw.drawSquare/lists", params });
}
function drawSquareCollect(params) {
  return $request.post({ url: "/draw.draw/collect", params });
}
function getMusicSquare(params) {
  return $request.get({ url: "/musicSquare/lists", params });
}
function getMusicDetail(params) {
  return $request.get({ url: "/MusicSquare/detail", params });
}
function musicSquareCollect(params) {
  return $request.post({ url: "/music/collect", params });
}
function getVideoSquare(params) {
  return $request.get({ url: "/videoSquare/lists", params });
}
function videoSquareCollect(params) {
  return $request.post({ url: "/video/collect", params });
}

export { getDrawSquare as a, getMusicSquare as b, getVideoSquare as c, drawSquareCollect as d, getMusicDetail as g, musicSquareCollect as m, videoSquareCollect as v };
//# sourceMappingURL=square-BZJdPCMw.mjs.map
