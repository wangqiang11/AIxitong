import { a as buildAssetsURL } from '../routes/renderer.mjs';
import mammoth from 'mammoth';
import * as pdfjsLib from 'pdfjs-dist/build/pdf.js';
import Papa from 'papaparse';
import { read, utils } from 'xlsx';
import TurndownService from 'turndown';
import * as turndownPluginGfm from 'joplin-turndown-plugin-gfm';

const workerSrc = "" + buildAssetsURL("pdf.worker.FgE2PeTN.js");
function cleanAttribute(attribute) {
  return attribute ? attribute.replace(/(\n+\s*)+/g, "\n") : "";
}
function generateRandomString() {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  const hexString = Array.from(array).map((byte) => byte.toString(16).padStart(2, "0")).join("");
  return hexString;
}
const html2md = (html) => {
  const turndownService = new TurndownService({
    headingStyle: "atx",
    bulletListMarker: "-",
    codeBlockStyle: "fenced",
    fence: "```",
    emDelimiter: "_",
    strongDelimiter: "**",
    linkStyle: "inlined",
    linkReferenceStyle: "full"
  });
  try {
    turndownService.remove(["i", "script", "iframe", "img"]);
    turndownService.addRule("codeBlock", {
      filter: "pre",
      replacement(_, node) {
        var _a, _b, _c, _d;
        const content = ((_a = node.textContent) == null ? void 0 : _a.trim()) || "";
        const codeName = ((_d = (_c = (_b = node == null ? void 0 : node._attrsByQName) == null ? void 0 : _b.class) == null ? void 0 : _c.data) == null ? void 0 : _d.trim()) || "";
        return `
\`\`\`${codeName}
${content}
\`\`\`
`;
      }
    });
    turndownService.addRule("imgElement", {
      filter: "img",
      replacement(_, node) {
        const alt = cleanAttribute(node.getAttribute("alt"));
        const src = node.getAttribute("src") || "";
        const title = cleanAttribute(node.getAttribute("title"));
        const titlePart = title ? ' "' + title + '"' : "";
        return src ? "![" + alt + "](/uploads/images/" + generateRandomString() + ".png" + titlePart + ")" : "";
      }
    });
    turndownService.addRule("brElement", {
      filter: "br",
      replacement(_, node) {
        return "";
      }
    });
    turndownService.use(turndownPluginGfm.gfm);
    return turndownService.turndown(html);
  } catch (error) {
    console.log("html 2 markdown error", error);
    return "";
  }
};
pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;
const readTxtContent = (file) => {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (err) => {
        console.log("error txt read:", err);
        reject("\u8BFB\u53D6 txt \u6587\u4EF6\u5931\u8D25");
      };
      reader.readAsText(file);
    } catch (error) {
      reject("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6587\u4EF6\u5185\u5BB9\u8BFB\u53D6");
    }
  });
};
const readPdfContent = (file) => new Promise(async (resolve, reject) => {
  try {
    const readPDFPage = async (doc, pageNo) => {
      try {
        const page = await doc.getPage(pageNo);
        const tokenizedText = await page.getTextContent();
        const viewport = page.getViewport({ scale: 1 });
        const pageHeight = viewport.height;
        const headerThreshold = pageHeight * 0.95;
        const footerThreshold = pageHeight * 0.05;
        const pageTexts = tokenizedText.items.filter(
          (token) => {
            return !token.transform || token.transform[5] < headerThreshold && token.transform[5] > footerThreshold;
          }
        );
        for (let i = 0; i < pageTexts.length; i++) {
          const item = pageTexts[i];
          if (item.str === "" && pageTexts[i - 1]) {
            pageTexts[i - 1].hasEOL = item.hasEOL;
            pageTexts.splice(i, 1);
            i--;
          }
        }
        page.cleanup();
        return pageTexts.map((token) => {
          const paragraphEnd = token.hasEOL && /([。？！.?!\n\r]|(\r\n))$/.test(token.str);
          return paragraphEnd ? `${token.str}
` : token.str;
        }).join("");
      } catch (error) {
        console.log("pdf read error", error);
        return "";
      }
    };
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = async (event) => {
      var _a;
      if (!((_a = event == null ? void 0 : event.target) == null ? void 0 : _a.result)) return reject("\u89E3\u6790 PDF \u5931\u8D25");
      try {
        const loadingTask = pdfjsLib.getDocument({
          data: event.target.result,
          cMapUrl: "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.5.207/cmaps/",
          cMapPacked: true
        });
        const doc = await loadingTask.promise;
        const pageTextPromises = [];
        for (let pageNo = 1; pageNo <= doc.numPages; pageNo++) {
          pageTextPromises.push(readPDFPage(doc, pageNo));
        }
        const pageTexts = await Promise.all(pageTextPromises);
        loadingTask.destroy();
        resolve(pageTexts.join("\n"));
      } catch (err) {
        console.log(err, "pdfjs error");
        reject("\u89E3\u6790 PDF \u5931\u8D25");
      }
    };
    reader.onerror = (err) => {
      console.log(err, "reader error");
      reject("\u89E3\u6790 PDF \u5931\u8D25");
    };
  } catch (error) {
    console.log(error);
    reject("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6587\u4EF6\u5185\u5BB9\u8BFB\u53D6");
  }
});
const readDocContent = (file) => new Promise((resolve, reject) => {
  try {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = async ({ target }) => {
      if (!(target == null ? void 0 : target.result)) return reject("\u8BFB\u53D6 doc \u6587\u4EF6\u5931\u8D25");
      try {
        const { value: html } = await mammoth.convertToHtml({
          arrayBuffer: target.result
        });
        console.log(html);
        const rawText = html2md(html);
        console.log({ rawText });
        resolve(rawText);
      } catch (error) {
        console.log(error);
        reject("\u8BFB\u53D6 doc \u6587\u4EF6\u5931\u8D25, \u8BF7\u8F6C\u6362\u6210 PDF");
      }
    };
    reader.onerror = (err) => {
      console.log("error doc read:", err);
      reject("\u8BFB\u53D6 doc \u6587\u4EF6\u5931\u8D25");
    };
  } catch (error) {
    reject("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6587\u4EF6\u5185\u5BB9\u8BFB\u53D6");
  }
});
const readCsvContent = async (file) => {
  var _a;
  try {
    const textArr = await readTxtContent(file);
    const json = Papa.parse(textArr).data;
    if (json.length === 0) {
      throw new Error("csv \u89E3\u6790\u5931\u8D25");
    }
    const totolData = [];
    const list = {
      header: (_a = json.shift()) == null ? void 0 : _a.filter((item) => item),
      data: json.map((item) => item == null ? void 0 : item.filter((item2) => item2))
    };
    list.data.map((item) => {
      const obj = {};
      obj[list.header[0]] = item[0];
      obj[list.header[1]] = item[1];
      if (item[0] != void 0) {
        totolData.push(obj);
      }
    });
    return totolData;
  } catch (error) {
    return Promise.reject("\u89E3\u6790 csv \u6587\u4EF6\u5931\u8D25");
  }
};
const readXlsxContent = (file) => {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = read(data, { type: "binary" });
        const jsonData = {};
        const totolData = [];
        if (workbook.SheetNames && workbook.SheetNames.length > 0) {
          for (let i = 0; i < workbook.SheetNames.length; i++) {
            const sheetName = workbook.SheetNames[i], sheetJson = utils.sheet_to_json(
              workbook.Sheets[sheetName]
            );
            jsonData[sheetName] = sheetJson;
          }
        }
        Object.keys(jsonData).map((itemKey) => {
          jsonData[itemKey].forEach(
            (itemData) => {
              totolData.push(itemData);
            }
          );
        });
        resolve(totolData);
      };
      reader.onerror = (err) => {
        console.log("error doc read:", err);
        reject("\u8BFB\u53D6 doc \u6587\u4EF6\u5931\u8D25");
      };
    } catch (error) {
      reject("\u8BFB\u53D6\u6587\u4EF6\u5931\u8D25\uFF01");
    }
  });
};

export { readCsvContent as a, readTxtContent as b, readDocContent as c, readPdfContent as d, readXlsxContent as r };
//# sourceMappingURL=fileReader-CRBF4dkT.mjs.map
