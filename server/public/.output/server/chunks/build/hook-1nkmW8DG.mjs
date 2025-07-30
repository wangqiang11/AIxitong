var ImportTypeEnum = /* @__PURE__ */ ((ImportTypeEnum2) => {
  ImportTypeEnum2[ImportTypeEnum2["DOC"] = 1] = "DOC";
  ImportTypeEnum2[ImportTypeEnum2["CVS"] = 3] = "CVS";
  ImportTypeEnum2[ImportTypeEnum2["QASplit"] = 2] = "QASplit";
  ImportTypeEnum2[ImportTypeEnum2["WEB_PAGE"] = 4] = "WEB_PAGE";
  return ImportTypeEnum2;
})(ImportTypeEnum || {});
const isSameFile = (file, fileList) => {
  return new Promise((resolve, reject) => {
    const index = fileList.findIndex(({ name, lastModified, size }) => {
      return name === file.name && size === file.size && lastModified == file.lastModified;
    });
    if (index == -1) {
      resolve("");
    } else {
      reject("\u8BF7\u52FF\u9009\u62E9\u76F8\u540C\u6587\u4EF6\uFF01");
    }
  });
};

export { ImportTypeEnum, isSameFile };
//# sourceMappingURL=hook-1nkmW8DG.mjs.map
