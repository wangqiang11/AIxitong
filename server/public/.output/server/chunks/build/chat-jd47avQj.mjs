function getChatSampleLists() {
  return $request.get({ url: "/chat.chatSample/samplesLists" });
}
function cleanChatRecord(params) {
  return $request.post({
    url: "/chat.chatRecord/chatClean",
    params
  });
}
function deleteChatRecord(params) {
  return $request.post({
    url: "/chat.chatRecord/del",
    params
  });
}
function getChatRecord(params) {
  return $request.get({
    url: "/chat.chatRecord/chatRecord",
    params
  });
}
function chatUpdate(params) {
  return $request.post({ url: "/chat.chatRecord/update", params });
}
function getChatCategoryLists(params) {
  return $request.get({ url: "/chat.chatCategory/lists", params });
}
function chatCategoryAdd(params) {
  return $request.post({ url: "/chat.chatCategory/add", params });
}
function chatCategoryEdit(params) {
  return $request.post({ url: "/chat.chatCategory/edit", params });
}
function chatCategoryDelete(params) {
  return $request.post({ url: "/chat.chatCategory/del", params });
}
function chatCategoryClear() {
  return $request.post({ url: "/chat.chatCategory/clear" });
}
function chatSendText(params) {
  return $request.sse({
    url: "/chat.chatDialog/completions",
    params,
    method: "POST"
  });
}
function getChatBroadcast(params, headers, config) {
  return $request.post(
    { url: "/broadcast/generate", params, headers },
    config
  );
}

export { getChatRecord as a, chatSendText as b, chatUpdate as c, deleteChatRecord as d, cleanChatRecord as e, getChatSampleLists as f, getChatBroadcast as g, getChatCategoryLists as h, chatCategoryAdd as i, chatCategoryEdit as j, chatCategoryClear as k, chatCategoryDelete as l };
//# sourceMappingURL=chat-jd47avQj.mjs.map
