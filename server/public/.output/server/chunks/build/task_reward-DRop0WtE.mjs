function getShareTaskList() {
  return $request.get({ url: "/share/task" });
}
function getShareId() {
  return $request.get({ url: "/share/share" });
}
function signClick() {
  return $request.post({ url: "/share/sign" });
}
function getSquareCategory(params) {
  return $request.get({ url: "/squareCategory/lists", params });
}
function shareDraw(params) {
  return $request.post({ url: "/draw.DrawSquare/add", params });
}
function shareMusic(params) {
  return $request.post({ url: "/MusicSquare/add", params });
}
function shareVideo(params) {
  return $request.post({ url: "/VideoSquare/add", params });
}
function getAgentCategoryList() {
  return $request.get({ url: "/kb.robot/categoryLists" });
}
function shareAgent(params) {
  return $request.post({ url: "/kb.robot/share", params });
}

export { shareDraw as a, getSquareCategory as b, shareMusic as c, getShareTaskList as d, getShareId as e, signClick as f, getAgentCategoryList as g, shareVideo as h, shareAgent as s };
//# sourceMappingURL=task_reward-DRop0WtE.mjs.map
