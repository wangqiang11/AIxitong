function getRobotLists(params) {
  return $request.get({ url: "/kb.robot/lists", params });
}
function getRobotDetail(params) {
  return $request.get({ url: "/kb.robot/detail", params });
}
function postRobot(params) {
  return $request.post({ url: "/kb.robot/add", params });
}
function putRobot(params) {
  return $request.post({ url: "/kb.robot/edit", params });
}
function delRobot(params) {
  return $request.post({ url: "/kb.robot/del", params });
}
function cancelShare(params) {
  return $request.post({ url: "/kb.robot/cancelShare", params });
}
function getRobotDataRecord(params) {
  return $request.get({ url: "/kb.chat/dataRecord", params });
}
function getRobotChatData(params) {
  return $request.get({ url: "/kb.chat/dataCount", params });
}
function delRobotChatRecord(params) {
  return $request.post({ url: "/kb.chat/dataDelete", params });
}
function getReleaseList(params) {
  return $request.get({ url: "/kb.share/lists", params });
}
function putRelease(params) {
  return $request.post({ url: "/kb.share/add", params });
}
function putReleaseSetBg(params) {
  return $request.post({ url: "/kb.share/setBg", params });
}
function postReleaseInfo(params) {
  return $request.post({ url: "/kb.share/update", params });
}
function getReleaseDetail(params) {
  return $request.get({ url: "/kb.share/detail", params });
}
function delRelease(params) {
  return $request.post({ url: "/kb.share/del", params });
}
function postRelease(params) {
  return $request.post({ url: "/kb.share/edit", params });
}
function getRobotCateLists(params) {
  return $request.get({ url: "/kb.chat/cateLists", params });
}
function postRobotCate(params) {
  return $request.post({ url: "/kb.chat/cateAdd", params });
}
function putRobotCate(params) {
  return $request.post({ url: "/kb.chat/cateEdit", params });
}
function delRobotCate(params) {
  return $request.post({ url: "/kb.chat/cateDel", params });
}
function clearRobotCate(params) {
  return $request.post({ url: "/kb.chat/cateClear", params });
}
function robotChat(params, headers) {
  return $request.sse({
    url: "/v1/chat/completions",
    method: "POST",
    params,
    headers
  });
}
function clearRobotChatRecord(params, headers) {
  return $request.post({ url: "/kb.chat/chatClean", params, headers });
}
function getRobotChatRecord(params, headers) {
  return $request.get({ url: "/kb.chat/chatRecord", params, headers });
}
function robotRecordsCorrect(params) {
  return $request.post({ url: "/kb.chat/chatCorrect", params });
}
function chatFeedBack(params, headers) {
  return $request.post({ url: "/kb.chat/feedback", params, headers });
}
function getRobotCategory(params) {
  return $request.get({ url: "/kb.square/category", params });
}
function getRobotSquare(params) {
  return $request.get({ url: "/kb.square/lists", params });
}
function getRobotRecord(params) {
  return $request.get({ url: "/kb.square/record", params });
}
function putRobotRecord(params) {
  return $request.post({ url: "/kb.square/add", params });
}
function voiceGenerate(params, headers) {
  return $request.post({ url: "/voice/generate", params, headers });
}
function voiceTransfer(params) {
  return $request.uploadFile({ url: "/voice/transfer" }, params);
}

export { postReleaseInfo as A, putReleaseSetBg as B, getReleaseDetail as C, getRobotSquare as D, putRobotRecord as E, getRobotRecord as F, getRobotChatRecord as a, clearRobotChatRecord as b, chatFeedBack as c, voiceGenerate as d, getRobotLists as e, delRobot as f, getRobotDetail as g, cancelShare as h, getRobotCateLists as i, postRobotCate as j, putRobotCate as k, clearRobotCate as l, delRobotCate as m, getRobotChatData as n, delRobotChatRecord as o, postRobot as p, robotRecordsCorrect as q, robotChat as r, getRobotDataRecord as s, getRobotCategory as t, putRobot as u, voiceTransfer as v, delRelease as w, putRelease as x, postRelease as y, getReleaseList as z };
//# sourceMappingURL=robot-BsB_E1H2.mjs.map
