function getDubbingList() {
  return $request.get({
    url: "/kb.digital/dubbing"
  });
}
function getDigitalList(params) {
  return $request.get({
    url: "/kb.digital/lists",
    params
  });
}
function getDigitalDetail(params) {
  return $request.get({
    url: "/kb.digital/detail",
    params
  });
}
function postDigital(params) {
  return $request.post({
    url: "/kb.digital/add",
    params
  });
}
function putDigital(params) {
  return $request.post({
    url: "/kb.digital/edit",
    params
  });
}
function delDigital(params) {
  return $request.post({
    url: "/kb.digital/del",
    params
  });
}

export { postDigital as a, getDubbingList as b, getDigitalList as c, delDigital as d, getDigitalDetail as g, putDigital as p };
//# sourceMappingURL=digital-DHYaDV-C.mjs.map
