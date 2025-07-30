function dataURLtoFile(dataUrl, filename) {
  var _a, _b;
  const arr = dataUrl.split(",");
  const mime = (_b = (_a = arr[0]) == null ? void 0 : _a.match(/:(.*?);/u)) == null ? void 0 : _b[1];
  if (!mime) {
    throw "dataUrl \u89E3\u6790\u9519\u8BEF";
  }
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  const blob = new Blob([u8arr], { type: mime });
  return new File([blob], filename, { type: mime, lastModified: Date.now() });
}
function downloadFile(url, name) {
  const aTag = (void 0).createElement("a");
  (void 0).body.appendChild(aTag);
  aTag.href = url;
  aTag.download = name;
  aTag.click();
  aTag.remove();
}

export { downloadFile as a, dataURLtoFile as d };
//# sourceMappingURL=file-RP6bCPT_.mjs.map
