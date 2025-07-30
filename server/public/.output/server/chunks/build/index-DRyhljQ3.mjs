import { useSSRContext, defineComponent, ref, shallowRef, computed, reactive, watchEffect, nextTick, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import mdKatex from '@vscode/markdown-it-katex';
import { useDark } from '@vueuse/core';

const languageBash = {
  name: "bash",
  ext: "sh",
  aliases: ["bash", "sh", "shell", "zsh"]
};
const languageCsharp = {
  name: "csharp",
  ext: "cs",
  aliases: ["cs", "csharp"]
};
const languageDocker = {
  name: "docker",
  ext: "docker",
  aliases: ["docker", "dockerfile"]
};
const languageFsharp = {
  name: "fsharp",
  ext: "fs",
  aliases: ["fs", "fsharp"]
};
const languageJavascript = {
  name: "javascript",
  ext: "js",
  aliases: ["javascript", "js"]
};
const languageKotlin = {
  name: "kotlin",
  ext: "kt",
  aliases: ["kotlin", "kt"]
};
const languageMarkdown = {
  name: "markdown",
  ext: "md",
  aliases: ["markdown", "md"]
};
const languagePython = {
  name: "python",
  ext: "py",
  aliases: ["py", "python"]
};
const languageRuby = {
  name: "ruby",
  ext: "rb",
  aliases: ["rb", "ruby"]
};
const languageRust = {
  name: "rust",
  ext: "rs",
  aliases: ["rs", "rust"]
};
const languageStylus = {
  name: "stylus",
  ext: "styl",
  aliases: ["styl", "stylus"]
};
const languageTypescript = {
  name: "typescript",
  ext: "ts",
  aliases: ["ts", "typescript"]
};
const languageYaml = {
  name: "yaml",
  ext: "yml",
  aliases: ["yaml", "yml"]
};
const languages = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  languageBash,
  languageCsharp,
  languageDocker,
  languageFsharp,
  languageJavascript,
  languageKotlin,
  languageMarkdown,
  languagePython,
  languageRuby,
  languageRust,
  languageStylus,
  languageTypescript,
  languageYaml
});
let languagesMap;
const getLanguagesMap = () => {
  if (!languagesMap) {
    languagesMap = Object.values(languages).reduce((result, item) => {
      item.aliases.forEach((alias) => {
        result[alias] = item;
      });
      return result;
    }, {});
  }
  return languagesMap;
};
const resolveLanguage = (info) => {
  var _a2;
  var _a;
  const alias = ((_a = info.match(/^([^ :[{]+)/)) == null ? void 0 : _a[1]) || "";
  return (_a2 = getLanguagesMap()[alias]) != null ? _a2 : {
    name: alias,
    ext: alias,
    aliases: [alias]
  };
};
const resolveLineNumbers = (info) => {
  if (/:line-numbers\b/.test(info)) {
    return true;
  }
  if (/:no-line-numbers\b/.test(info)) {
    return false;
  }
  return null;
};
const codePlugin = (md, { lineNumbers = true } = {}) => {
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    var _a2;
    var _a;
    const token = tokens[idx];
    const info = token.info ? md.utils.unescapeAll(token.info).trim() : "";
    const language = resolveLanguage(info);
    const languageClass = `${options.langPrefix}${language.name}`;
    const code = ((_a = options.highlight) == null ? void 0 : _a.call(options, token.content, language.name, "")) || md.utils.escapeHtml(token.content);
    token.attrJoin("class", languageClass);
    let result = code.startsWith("<pre") ? code : `<pre${slf.renderAttrs(token)}><code>${code}</code></pre>`;
    result = `<div  data-ext="${language.ext}" v-pre class="code-copy-line">
      <div class="code-copy-btn">\u590D\u5236\u4EE3\u7801</div>
    </div>${result}`;
    const lines = code.split("\n").slice(0, -1);
    const useLineNumbers = (_a2 = resolveLineNumbers(info)) != null ? _a2 : typeof lineNumbers === "number" ? lines.length >= lineNumbers : lineNumbers;
    if (useLineNumbers) {
      const lineNumbersCode = lines.map(() => `<div class="line-number"></div>`).join("");
      result = `<div class="line-numbers" aria-hidden="true">${lineNumbersCode}</div>${result}`;
    }
    result = `<div><div class="${languageClass}${useLineNumbers ? " line-numbers-mode" : ""}"><div class="pre-code-scroll">${result}</div></div></div>`;
    return result;
  };
};
const defaultMarker = "#";
const customLinkPlugin = (md, options = {}) => {
  const marker = options.marker || defaultMarker;
  md.block.ruler.before(
    "paragraph",
    "custom_link",
    function(state, startLine, endLine, silent) {
      const pos = state.bMarks[startLine] + state.tShift[startLine];
      const max = state.eMarks[startLine];
      if (pos >= max) {
        return false;
      }
      if (silent) {
        return true;
      }
      const text = state.src.substring(pos, max);
      const start = text.indexOf(marker);
      const end = text.lastIndexOf(marker);
      if (start < 0 || end < 0 || start == end) {
        return false;
      }
      const startContent = text.substring(0, start);
      const endContent = text.substring(end + 1);
      const content = text.substring(start + 1, end);
      const token_div_o = state.push("div_open", "div", 1);
      token_div_o.attrs = [["class", "mt-[8px]"]];
      token_div_o.map = [startLine, state.line];
      const token_s = state.push("inline", "", 0);
      token_s.content = startContent;
      token_s.children = [];
      const token_a_o = state.push("link_open", "a", 1);
      token_a_o.attrs = [["class", "markdown-custom-link"]];
      token_a_o.map = [startLine, state.line];
      const token = state.push("inline", "", 0);
      token.content = content;
      token.children = [];
      state.push("link_close", "a", -1);
      const token_e = state.push("inline", "", 0);
      token_e.content = endContent;
      token_e.children = [];
      state.push("div_close", "div", -1);
      state.line = startLine + 1;
      return true;
    },
    {
      alt: ["paragraph"]
      //         'reference', 'blockquote'
    }
  );
};
const aPlugin = (md, options = {}) => {
  md.renderer.rules.link_open = (tokens, idx, options2, env, slf) => {
    const aIndex = tokens[idx].attrIndex("href");
    if (aIndex !== -1) {
      tokens[idx].attrs.push(["target", "_blank"]);
    }
    return slf.renderToken(tokens, idx, options2);
  };
};
const docQuotePlugin = (md) => {
  md.inline.ruler.push(
    "doc_quote",
    function(state, silent) {
      const pos = state.pos;
      if (state.src.charCodeAt(pos) !== 91) {
        return false;
      }
      if (silent) {
        return false;
      }
      const end = state.src.indexOf("]", pos);
      if (end < 0) {
        return false;
      }
      const content = state.src.substring(pos + 1, end);
      if (isNaN(Number(content))) {
        return false;
      }
      const { linkList } = state.env;
      const docItem = linkList == null ? void 0 : linkList[Number(content) - 1];
      if (!docItem) return false;
      state.pos = end + 1;
      state.posMax = end + 1;
      const token_o = state.push("link_open", "a", 1);
      token_o.attrs = [
        ["href", docItem.seeMoreUrl],
        ["target", "_blank"],
        ["title", docItem.title],
        ["class", "markdown-doc-link-quote"]
      ];
      const token_t = state.push("text", "", 0);
      token_t.content = content;
      state.push("link_close", "a", -1);
      return true;
    },
    {
      alt: ["paragraph"]
    }
  );
};
const createMarkdown = (options) => {
  const md = new MarkdownIt({
    ...options,
    langPrefix: "language-",
    highlight(str, lang) {
      try {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(lang, str, true).value;
        }
        return hljs.highlightAuto(str).value;
      } catch (error) {
        return str;
      }
    }
  });
  md.use(codePlugin, {
    lineNumbers: options.lineNumbers
  });
  md.use(mdKatex, {
    output: "mathml"
  });
  md.use(aPlugin).use(docQuotePlugin).use(customLinkPlugin);
  return md;
};
const preprocessContent = (content) => {
  return content.replace(/\\\(/g, "$$").replace(/\\\)/g, "$$").replace(/\\\]/g, "$$$").replace(/\\\[/g, "$$$");
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    content: { default: "" },
    linkList: { default: () => [] },
    html: { type: Boolean, default: true },
    breaks: { type: Boolean, default: true },
    linkify: { type: Boolean, default: true },
    typographer: { type: Boolean, default: true },
    lineNumbers: { type: Boolean, default: true },
    typing: { type: Boolean, default: false },
    lineClamp: { default: 0 },
    theme: {}
  },
  emits: ["click-custom-link"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const result = ref("");
    const markdownBodyRef = shallowRef();
    const isDark = useDark();
    const themeComputed = computed(() => {
      if (props.theme) return props.theme;
      else {
        return isDark.value ? "dark" : "light";
      }
    });
    let md = createMarkdown({
      html: props.html,
      breaks: props.breaks,
      typographer: props.typographer,
      linkify: props.linkify,
      lineNumbers: props.lineNumbers
    });
    const findLastTextNode = (parent) => {
      var _a;
      const children = parent.childNodes;
      for (let i = children.length - 1; i >= 0; i--) {
        const node = children[i];
        if (node.nodeType === Node.TEXT_NODE && /\S/.test(node.nodeValue)) {
          (_a = node.nodeValue) == null ? void 0 : _a.replace(/\S+$/, "");
          return node;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const lastNode = findLastTextNode(node);
          if (lastNode) {
            return lastNode;
          }
        }
      }
    };
    const cursorPosition = reactive({
      top: "auto",
      left: "auto"
    });
    const updateCursor = () => {
      var _a, _b, _c;
      if (!props.typing) return;
      if (markdownBodyRef.value) {
        const lastTextNode = findLastTextNode(markdownBodyRef.value);
        const textNode = (void 0).createTextNode("\u200B");
        if (lastTextNode) {
          (_a = lastTextNode.parentElement) == null ? void 0 : _a.appendChild(textNode);
        } else {
          (_b = markdownBodyRef.value) == null ? void 0 : _b.appendChild(textNode);
        }
        const range = (void 0).createRange();
        range.setStart(textNode, 0);
        range.setEnd(textNode, 0);
        const textRect = range.getBoundingClientRect();
        const markdownBodyRect = (_c = markdownBodyRef.value) == null ? void 0 : _c.getBoundingClientRect();
        cursorPosition.left = `${textRect.left - markdownBodyRect.left}px`;
        cursorPosition.top = `${textRect.top - markdownBodyRect.top}px`;
        textNode.remove();
      }
    };
    watchEffect(
      async () => {
        md = createMarkdown({
          html: props.html,
          breaks: props.breaks,
          typographer: props.typographer,
          linkify: props.linkify,
          lineNumbers: props.lineNumbers
        });
        result.value = md == null ? void 0 : md.render(preprocessContent(props.content), {
          linkList: props.linkList
        });
        await nextTick();
        updateCursor();
      },
      {
        flush: "post"
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "markdown-it-container",
        style: {
          "-webkit-line-clamp": _ctx.lineClamp
        }
      }, _attrs))}><div class="${ssrRenderClass([[unref(themeComputed)], "markdown-body"])}">${(_a = unref(result)) != null ? _a : ""}</div>`);
      if (_ctx.typing) {
        _push(`<div class="markdown-typing" style="${ssrRenderStyle(unref(cursorPosition))}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/markdown/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=index-DRyhljQ3.mjs.map
