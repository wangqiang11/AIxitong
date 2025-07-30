function chatChannelsAuth(params) {
  return $request.post(
    { url: "/KnowDialogue/shareAuth", params },
    { withToken: false }
  );
}
function getTeamUser(params) {
  return $request.get({ url: "/kb.know/teamUsers", params });
}
function getTeamLists(params) {
  return $request.get({ url: "/kb.know/teamLists", params });
}
function postTeam(params) {
  return $request.post({ url: "/kb.know/teamAdd", params });
}
function putTeam(params) {
  return $request.post({ url: "/kb.know/teamEdit", params });
}
function deleteTeam(params) {
  return $request.post({ url: "/kb.know/teamDel", params });
}
function transferTeam(params) {
  return $request.post({ url: "/kb.know/transfer", params });
}

export { getTeamLists as a, putTeam as b, chatChannelsAuth as c, deleteTeam as d, getTeamUser as g, postTeam as p, transferTeam as t };
//# sourceMappingURL=knowledge-DiYwGYtC.mjs.map
