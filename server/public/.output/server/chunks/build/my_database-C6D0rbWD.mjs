function knowKnowledgeList(params) {
  return $request.get({ url: "/kb.know/lists", params });
}
function knowKnowledgeDetail(params) {
  return $request.get({ url: "/kb.know/detail", params });
}
function knowKnowledgeAdd(params) {
  return $request.post({ url: "/kb.know/add", params });
}
function knowKnowledgeEdit(params) {
  return $request.post({ url: "/kb.know/edit", params });
}
function knowKnowledgeDel(params) {
  return $request.post({ url: "/kb.know/del", params });
}
function fileDataList(params) {
  return $request.get({ url: "/kb.know/files", params });
}
function fileDataimport(params) {
  return $request.post({ url: "/kb.teach/import", params });
}
function itemFileDataList(params) {
  return $request.get({ url: "/kb.teach/datas", params });
}
function fileRename(params) {
  return $request.post({ url: "/kb.know/fileRename", params });
}
function fileDelete(params) {
  return $request.post({ url: "/kb.know/fileRemove", params });
}
function fileRetry(params) {
  return $request.post({ url: "/kb.teach/qaRetry", params });
}
function itemDatatest(params) {
  return $request.post({ url: "/kb.teach/tests", params });
}
function itemDataImport(params) {
  return $request.post({ url: "/kb.teach/insert", params });
}
function itemDataEdit(params) {
  return $request.post({ url: "/kb.teach/update", params });
}
function itemDataRetry(params) {
  return $request.post({ url: "/kb.teach/reset", params });
}
function itemDataDel(params) {
  return $request.post({ url: "/kb.teach/delete", params });
}
function itemDataDetail(params) {
  return $request.get({ url: "/kb.teach/detail", params });
}
function webHtmlCapture(params) {
  return $request.post({ url: "/kb.teach/capture", params });
}
function checkData(params) {
  return $request.post({ url: "/kb.teach/detection", params });
}

export { knowKnowledgeEdit as a, knowKnowledgeDel as b, knowKnowledgeAdd as c, fileDelete as d, fileRetry as e, fileDataList as f, fileDataimport as g, itemDataRetry as h, itemFileDataList as i, itemDataDel as j, knowKnowledgeDetail as k, checkData as l, fileRename as m, itemDataEdit as n, itemDataImport as o, itemDataDetail as p, itemDatatest as q, knowKnowledgeList as r, webHtmlCapture as w };
//# sourceMappingURL=my_database-C6D0rbWD.mjs.map
