function getRechargeLists(params) {
  return $request.get({ url: "/recharge/lists", params });
}
function rechargePlace(params) {
  return $request.post({ url: "/recharge/place", params });
}
function getRechargeRecord(params) {
  return $request.get({ url: "/recharge/record", params });
}

export { getRechargeRecord as a, getRechargeLists as g, rechargePlace as r };
//# sourceMappingURL=recharge-DUlermqD.mjs.map
