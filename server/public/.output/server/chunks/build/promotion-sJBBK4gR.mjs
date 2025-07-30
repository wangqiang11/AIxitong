function applyDistribution(params) {
  return $request.post({ url: "/distribution/distributionApply", params });
}
function distributionCenter(params) {
  return $request.get({ url: "/distribution/index", params });
}
function fansList(params) {
  return $request.get({ url: "/distribution/distributionFans", params });
}
function MoneyChangeType(params) {
  return $request.get({ url: "/account_log/getMoneyChangeType", params });
}
function MoneyList(params) {
  return $request.get({ url: "/account_log/lists", params });
}
function withdrawList(params) {
  return $request.get({ url: "/withdraw/lists", params });
}
function applyWithdraw(params) {
  return $request.post({ url: "/withdraw/apply", params });
}
function withdrawDetail(params) {
  return $request.get({ url: "/withdraw/detail", params });
}

export { MoneyList as M, applyDistribution as a, MoneyChangeType as b, applyWithdraw as c, withdrawList as d, distributionCenter as e, fansList as f, withdrawDetail as w };
//# sourceMappingURL=promotion-sJBBK4gR.mjs.map
