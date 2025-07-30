function getPPTConfig() {
  return $request.get({ url: "/ppt/config" });
}
function getPPTExample() {
  return $request.get({ url: "/ppt/example" });
}
function getPPTLists(params) {
  return $request.get({ url: "/ppt/lists", params });
}
function getPPTDetail(params) {
  return $request.get({ url: "/ppt/detail", params });
}
function getPPTOutline(params) {
  return $request.post({ url: "/ppt/structure", params });
}
function getPPTTemplate(params) {
  return $request.post({ url: "/ppt/cover", params });
}
function genPPT(params) {
  return $request.post({ url: "/ppt/submit", params });
}
function delPPT(params) {
  return $request.post({ url: "/ppt/del", params });
}
function downloadPPT(params) {
  return $request.post({ url: "/ppt/download", params });
}

export { getPPTLists as a, delPPT as b, getPPTTemplate as c, downloadPPT as d, getPPTConfig as e, genPPT as f, getPPTDetail as g, getPPTOutline as h, getPPTExample as i };
//# sourceMappingURL=ai_ppt-C1HXY0_t.mjs.map
