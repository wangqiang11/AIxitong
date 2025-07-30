const CUSTOM_SPLIT_SIGN = "-----CUSTOM_SPLIT_SIGN-----";
const replaceRegChars = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const strIsMdTable = (str) => {
  if (!str.includes("|")) {
    return false;
  }
  const lines = str.split("\n");
  if (lines.length < 2) {
    return false;
  }
  const headerLine = lines[0].trim();
  if (!headerLine.startsWith("|") || !headerLine.endsWith("|")) {
    return false;
  }
  const separatorLine = lines[1].trim();
  const separatorRegex = /^(\|[\s:]*-+[\s:]*)+\|$/;
  if (!separatorRegex.test(separatorLine)) {
    return false;
  }
  for (let i = 2; i < lines.length; i++) {
    const dataLine = lines[i].trim();
    if (dataLine && (!dataLine.startsWith("|") || !dataLine.endsWith("|"))) {
      return false;
    }
  }
  return true;
};
const markdownTableSplit = (props) => {
  const { text = "", chunkLen } = props;
  const splitText2Lines = text.split("\n");
  const header = splitText2Lines[0];
  const headerSize = header.split("|").length - 2;
  const mdSplitString = `| ${new Array(headerSize > 0 ? headerSize : 1).fill(0).map(() => "---").join(" | ")} |`;
  const chunks = [];
  let chunk = `${header}
${mdSplitString}
`;
  for (let i = 2; i < splitText2Lines.length; i++) {
    if (chunk.length + splitText2Lines[i].length > chunkLen * 1.2) {
      chunks.push(chunk);
      chunk = `${header}
${mdSplitString}
`;
    }
    chunk += `${splitText2Lines[i]}
`;
  }
  if (chunk) {
    chunks.push(chunk);
  }
  return {
    chunks,
    chars: chunks.reduce((sum, chunk2) => sum + chunk2.length, 0)
  };
};
const commonSplit = (props) => {
  let { text = "", chunkLen, overlapRatio = 0.2, customReg = [] } = props;
  const splitMarker = "SPLIT_HERE_SPLIT_HERE";
  const codeBlockMarker = "CODE_BLOCK_LINE_MARKER";
  const overlapLen = Math.round(chunkLen * overlapRatio);
  text = text.replace(/(```[\s\S]*?```|~~~[\s\S]*?~~~)/g, function(match) {
    return match.replace(/\n/g, codeBlockMarker);
  });
  text = text.replace(/(\r?\n|\r){3,}/g, "\n\n\n");
  const stepReges = [
    ...customReg.map((text2) => ({
      reg: new RegExp(`(${replaceRegChars(text2)})`, "g"),
      maxLen: chunkLen * 1.4
    })),
    { reg: /^(#\s[^\n]+)\n/gm, maxLen: chunkLen * 1.2 },
    { reg: /^(##\s[^\n]+)\n/gm, maxLen: chunkLen * 1.2 },
    { reg: /^(###\s[^\n]+)\n/gm, maxLen: chunkLen * 1.2 },
    { reg: /^(####\s[^\n]+)\n/gm, maxLen: chunkLen * 1.2 },
    { reg: /([\n]([`~]))/g, maxLen: chunkLen * 4 },
    // code block
    // eslint-disable-next-line no-useless-escape
    { reg: /([\n](?!\s*[\*\-|>0-9]))/g, maxLen: chunkLen * 2 },
    // 增大块，尽可能保证它是一个完整的段落。 (?![\*\-|>`0-9]): markdown special char
    { reg: /([\n])/g, maxLen: chunkLen * 1.2 },
    // ------ There's no overlap on the top
    { reg: /([。]|([a-zA-Z])\.\s)/g, maxLen: chunkLen * 1.2 },
    { reg: /([！]|!\s)/g, maxLen: chunkLen * 1.2 },
    { reg: /([？]|\?\s)/g, maxLen: chunkLen * 1.4 },
    { reg: /([；]|;\s)/g, maxLen: chunkLen * 1.6 },
    { reg: /([，]|,\s)/g, maxLen: chunkLen * 2 }
  ];
  const customRegLen = customReg.length;
  const checkIsCustomStep = (step) => step < customRegLen;
  const checkIsMarkdownSplit = (step) => step >= customRegLen && step <= 3 + customRegLen;
  const checkIndependentChunk = (step) => step >= customRegLen && step <= 4 + customRegLen;
  const checkForbidOverlap = (step) => step <= 6 + customRegLen;
  const getSplitTexts = ({ text: text2, step }) => {
    if (step >= stepReges.length) {
      return [
        {
          text: text2,
          title: ""
        }
      ];
    }
    const isCustomSteep = checkIsCustomStep(step);
    const isMarkdownSplit = checkIsMarkdownSplit(step);
    const independentChunk = checkIndependentChunk(step);
    const { reg } = stepReges[step];
    const splitTexts = text2.replace(
      reg,
      (() => {
        if (isCustomSteep) return splitMarker;
        if (independentChunk) return `${splitMarker}$1`;
        return `$1${splitMarker}`;
      })()
    ).split(`${splitMarker}`).filter((part) => part.trim());
    return splitTexts.map((text3) => {
      var _a;
      const matchTitle = isMarkdownSplit ? ((_a = text3.match(reg)) == null ? void 0 : _a[0]) || "" : "";
      return {
        text: isMarkdownSplit ? text3.replace(matchTitle, "") : text3,
        title: matchTitle
      };
    }).filter((item) => item.text.trim());
  };
  const getOneTextOverlapText = ({
    text: text2,
    step
  }) => {
    const forbidOverlap = checkForbidOverlap(step);
    const maxOverlapLen = chunkLen * 0.4;
    if (forbidOverlap || overlapLen === 0 || step >= stepReges.length)
      return "";
    const splitTexts = getSplitTexts({ text: text2, step });
    let overlayText = "";
    for (let i = splitTexts.length - 1; i >= 0; i--) {
      const currentText = splitTexts[i].text;
      const newText = currentText + overlayText;
      const newTextLen = newText.length;
      if (newTextLen > overlapLen) {
        if (newTextLen > maxOverlapLen) {
          const text3 = getOneTextOverlapText({
            text: newText,
            step: step + 1
          });
          return text3 || overlayText;
        }
        return newText;
      }
      overlayText = newText;
    }
    return overlayText;
  };
  const splitTextRecursively = ({
    text: text2 = "",
    step,
    lastText,
    mdTitle = ""
  }) => {
    const independentChunk = checkIndependentChunk(step);
    const isCustomStep = checkIsCustomStep(step);
    if (step >= stepReges.length) {
      if (text2.length < chunkLen * 3) {
        return [text2];
      }
      const chunks2 = [];
      for (let i = 0; i < text2.length; i += chunkLen - overlapLen) {
        chunks2.push(`${mdTitle}${text2.slice(i, i + chunkLen)}`);
      }
      return chunks2;
    }
    const splitTexts = getSplitTexts({ text: text2, step });
    const maxLen = splitTexts.length > 1 ? stepReges[step].maxLen : chunkLen;
    const minChunkLen = chunkLen * 0.7;
    const miniChunkLen = 30;
    const chunks = [];
    for (let i = 0; i < splitTexts.length; i++) {
      const item = splitTexts[i];
      const currentTitle = `${mdTitle}${item.title}`;
      const currentText = item.text;
      const currentTextLen = currentText.length;
      const lastTextLen = lastText.length;
      const newText = lastText + currentText;
      const newTextLen = lastTextLen + currentTextLen;
      if (newTextLen > maxLen) {
        if (lastTextLen > minChunkLen) {
          chunks.push(`${currentTitle}${lastText}`);
          lastText = getOneTextOverlapText({ text: lastText, step });
          i--;
          continue;
        }
        const innerChunks = splitTextRecursively({
          text: newText,
          step: step + 1,
          lastText: "",
          mdTitle: currentTitle
        });
        const lastChunk = innerChunks[innerChunks.length - 1];
        if (!independentChunk && lastChunk.length < minChunkLen) {
          chunks.push(...innerChunks.slice(0, -1));
          lastText = lastChunk;
        } else {
          chunks.push(...innerChunks);
          lastText = getOneTextOverlapText({
            text: lastChunk,
            step
          });
        }
        continue;
      }
      lastText = newText;
      if (isCustomStep || independentChunk && newTextLen > miniChunkLen || newTextLen >= chunkLen) {
        chunks.push(`${currentTitle}${lastText}`);
        lastText = getOneTextOverlapText({ text: lastText, step });
      }
    }
    if (lastText && chunks[chunks.length - 1] && !chunks[chunks.length - 1].endsWith(lastText)) {
      if (lastText.length < chunkLen * 0.4) {
        chunks[chunks.length - 1] = chunks[chunks.length - 1] + lastText;
      } else {
        chunks.push(`${mdTitle}${lastText}`);
      }
    } else if (lastText && chunks.length === 0) {
      chunks.push(lastText);
    }
    return chunks;
  };
  try {
    const chunks = splitTextRecursively({
      text,
      step: 0,
      lastText: "",
      mdTitle: ""
    }).map((chunk) => (chunk == null ? void 0 : chunk.replaceAll(codeBlockMarker, "\n")) || "");
    const chars = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
    return {
      chunks,
      chars
    };
  } catch (err) {
    throw new Error(err);
  }
};
const splitText2ChunksArray = (props) => {
  const { text = "" } = props;
  const splitWithCustomSign = text.split(CUSTOM_SPLIT_SIGN);
  const splitResult = splitWithCustomSign.map((item) => {
    if (strIsMdTable(item)) {
      return markdownTableSplit(props);
    }
    return commonSplit(props);
  });
  return splitResult.map((item) => item.chunks).flat();
};

export { splitText2ChunksArray as s };
//# sourceMappingURL=textSplitter-DLWtBQu6.mjs.map
