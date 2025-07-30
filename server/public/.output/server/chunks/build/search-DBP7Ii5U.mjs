function getSearchExample() {
  return $request.get({ url: "/search/example" });
}
function postSearch(params) {
  return $request.sse({ url: "/search/query", params, method: "POST" });
}
function getSearchConfig() {
  return $request.get({ url: "/search/config" });
}
function getSearchLists(params) {
  return $request.get({ url: "/search/lists", params });
}
function getSearchDetail(params) {
  return $request.get({ url: "/search/detail", params });
}

export { getSearchDetail as a, getSearchExample as b, getSearchLists as c, getSearchConfig as g, postSearch as p };
//# sourceMappingURL=search-DBP7Ii5U.mjs.map
