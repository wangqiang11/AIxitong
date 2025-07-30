function getCategoryList(params) {
  return $request.get({ url: "/chat.creation/category", params });
}
function getCreantionList(params) {
  return $request.get({ url: "/chat.creation/lists", params });
}
function getCreationDetail(params) {
  return $request.get({ url: "/chat.creation/detail", params });
}
function collection(params) {
  return $request.post({ url: "/chat.creation/collect", params });
}

export { getCreantionList as a, getCreationDetail as b, collection as c, getCategoryList as g };
//# sourceMappingURL=create-DFvp87Fg.mjs.map
