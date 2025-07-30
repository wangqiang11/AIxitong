function getVideoConfig() {
  return $request.get({ url: "/video/config" });
}
function getVideoLists(params) {
  return $request.get({ url: "/video/lists", params });
}
function postVideoGenerate(params) {
  return $request.post({ url: "/video/generate", params });
}
function deleteVideo(params) {
  return $request.post({ url: "/video/del", params });
}
function translate(params) {
  return $request.get({ url: "/video/translate", params });
}

export { getVideoConfig as a, deleteVideo as d, getVideoLists as g, postVideoGenerate as p, translate as t };
//# sourceMappingURL=video-DH7H33E1.mjs.map
