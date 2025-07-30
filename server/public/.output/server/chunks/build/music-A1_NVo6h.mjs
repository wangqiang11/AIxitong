function getMusicConfig() {
  return $request.get({ url: "/music/config" });
}
function getMusicLists(params) {
  return $request.get({ url: "/music/lists", params });
}
function postMusicImagine(params) {
  return $request.post({ url: "/music/imagine", params });
}
function postMusicGenerate(params) {
  return $request.post({ url: "/music/generate", params });
}
function getMusicRecommendList() {
  return $request.get({ url: "/musicSquare/recommendLits" });
}
function deleteMusic(params) {
  return $request.post({ url: "/music/del", params });
}

export { postMusicGenerate as a, getMusicLists as b, getMusicRecommendList as c, deleteMusic as d, getMusicConfig as g, postMusicImagine as p };
//# sourceMappingURL=music-A1_NVo6h.mjs.map
