import { E as ElDialog } from './index-CzJm6kkT.mjs';
import { _ as __nuxt_component_1 } from './index-DZM4Ziep.mjs';
import { A as feedback, aV as baseUrl, d as ElButton, E as ElInput } from './server.mjs';
import { useSSRContext, defineComponent, ref, shallowRef, computed, watch, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString } from 'vue';
import { d as downloadHtml2Image } from './download-N0luyf1S.mjs';
import { u as useLockFn } from './useLockFn-BWbjkhBs.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
import { B as putReleaseSetBg } from './robot-BsB_E1H2.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './use-dialog-DHq_GjFf.mjs';
import 'lodash-unified';
import './refs-CJvnaIJj.mjs';
import '@vue/shared';
import './el-upload-8WlOxHo4.mjs';
import './el-progress-B1IVess1.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'lodash-es';
import 'weixin-js-sdk';
import '@ctrl/tinycolor';
import '@vue/reactivity';
import 'jsonc-parser';
import '@tanstack/vue-query';
import 'css-color-function';

const parse = (stream, schema, result = {}, parent = result) => {
  if (Array.isArray(schema)) {
    schema.forEach(partSchema => parse(stream, partSchema, result, parent));
  } else if (typeof schema === 'function') {
    schema(stream, result, parent, parse);
  } else {
    const key = Object.keys(schema)[0];
    if (Array.isArray(schema[key])) {
      parent[key] = {};
      parse(stream, schema[key], result, parent[key]);
    } else {
      parent[key] = schema[key](stream, result, parent, parse);
    }
  }
  return result
};

const conditional = (schema, conditionFunc) => (
  stream,
  result,
  parent,
  parse
) => {
  if (conditionFunc(stream, result, parent)) {
    parse(stream, schema, result, parent);
  }
};

const loop = (schema, continueFunc) => (
  stream,
  result,
  parent,
  parse
) => {
  const arr = [];
  let lastStreamPos = stream.pos;
  while (continueFunc(stream, result, parent)) {
    const newParent = {};
    parse(stream, schema, result, newParent);
    // cases when whole file is parsed but no termination is there and stream position is not getting updated as well
    // it falls into infinite recursion, null check to avoid the same
    if(stream.pos === lastStreamPos) {
      break
    }
    lastStreamPos = stream.pos;
    arr.push(newParent);
  }
  return arr
};

// Default stream and parsers for Uint8TypedArray data type

const buildStream = uint8Data => ({
  data: uint8Data,
  pos: 0
});

const readByte = () => stream => {
  return stream.data[stream.pos++]
};

const peekByte = (offset = 0) => stream => {
  return stream.data[stream.pos + offset]
};

const readBytes = length => stream => {
  return stream.data.subarray(stream.pos, (stream.pos += length))
};

const peekBytes = length => stream => {
  return stream.data.subarray(stream.pos, stream.pos + length)
};

const readString = length => stream => {
  return Array.from(readBytes(length)(stream))
    .map(value => String.fromCharCode(value))
    .join('')
};

const readUnsigned = littleEndian => stream => {
  const bytes = readBytes(2)(stream);
  return littleEndian ? (bytes[1] << 8) + bytes[0] : (bytes[0] << 8) + bytes[1]
};

const readArray = (byteSize, totalOrFunc) => (
  stream,
  result,
  parent
) => {
  const total =
    typeof totalOrFunc === 'function'
      ? totalOrFunc(stream, result, parent)
      : totalOrFunc;

  const parser = readBytes(byteSize);
  const arr = new Array(total);
  for (var i = 0; i < total; i++) {
    arr[i] = parser(stream);
  }
  return arr
};

const subBitsTotal = (bits, startIndex, length) => {
  var result = 0;
  for (var i = 0; i < length; i++) {
    result += bits[startIndex + i] && 2 ** (length - i - 1);
  }
  return result
};

const readBits = schema => stream => {
  const byte = readByte()(stream);
  // convert the byte to bit array
  const bits = new Array(8);
  for (var i = 0; i < 8; i++) {
    bits[7 - i] = !!(byte & (1 << i));
  }
  // convert the bit array to values based on the schema
  return Object.keys(schema).reduce((res, key) => {
    const def = schema[key];
    if (def.length) {
      res[key] = subBitsTotal(bits, def.index, def.length);
    } else {
      res[key] = bits[def.index];
    }
    return res
  }, {})
};

// a set of 0x00 terminated subblocks
var subBlocksSchema = {
  blocks: (stream) => {
    const terminator = 0x00;
    const chunks = [];
    const streamSize = stream.data.length;
    var total = 0;
    for (
      var size = readByte()(stream);
      size !== terminator;
      size = readByte()(stream)
    ) {
      // size becomes undefined for some case when file is corrupted and  terminator is not proper 
      // null check to avoid recursion
      if(!size) break;
      // catch corrupted files with no terminator
      if (stream.pos + size >= streamSize) {
        const availableSize = streamSize - stream.pos;
        chunks.push(readBytes(availableSize)(stream));
        total += availableSize;
        break
      }
      chunks.push(readBytes(size)(stream));
      total += size;
    }
    const result = new Uint8Array(total);
    var offset = 0;
    for (var i = 0; i < chunks.length; i++) {
      result.set(chunks[i], offset);
      offset += chunks[i].length;
    }
    return result
  },
};

// global control extension
const gceSchema = conditional(
  {
    gce: [
      { codes: readBytes(2) },
      { byteSize: readByte() },
      {
        extras: readBits({
          future: { index: 0, length: 3 },
          disposal: { index: 3, length: 3 },
          userInput: { index: 6 },
          transparentColorGiven: { index: 7 },
        }),
      },
      { delay: readUnsigned(true) },
      { transparentColorIndex: readByte() },
      { terminator: readByte() },
    ],
  },
  (stream) => {
    var codes = peekBytes(2)(stream);
    return codes[0] === 0x21 && codes[1] === 0xf9
  }
);

// image pipeline block
const imageSchema = conditional(
  {
    image: [
      { code: readByte() },
      {
        descriptor: [
          { left: readUnsigned(true) },
          { top: readUnsigned(true) },
          { width: readUnsigned(true) },
          { height: readUnsigned(true) },
          {
            lct: readBits({
              exists: { index: 0 },
              interlaced: { index: 1 },
              sort: { index: 2 },
              future: { index: 3, length: 2 },
              size: { index: 5, length: 3 },
            }),
          },
        ],
      },
      conditional(
        {
          lct: readArray(3, (stream, result, parent) => {
            return Math.pow(2, parent.descriptor.lct.size + 1)
          }),
        },
        (stream, result, parent) => {
          return parent.descriptor.lct.exists
        }
      ),
      { data: [{ minCodeSize: readByte() }, subBlocksSchema] },
    ],
  },
  (stream) => {
    return peekByte()(stream) === 0x2c
  }
);

// plain text block
const textSchema = conditional(
  {
    text: [
      { codes: readBytes(2) },
      { blockSize: readByte() },
      {
        preData: (stream, result, parent) =>
          readBytes(parent.text.blockSize)(stream),
      },
      subBlocksSchema,
    ],
  },
  (stream) => {
    var codes = peekBytes(2)(stream);
    return codes[0] === 0x21 && codes[1] === 0x01
  }
);

// application block
const applicationSchema = conditional(
  {
    application: [
      { codes: readBytes(2) },
      { blockSize: readByte() },
      { id: (stream, result, parent) => readString(parent.blockSize)(stream) },
      subBlocksSchema,
    ],
  },
  (stream) => {
    var codes = peekBytes(2)(stream);
    return codes[0] === 0x21 && codes[1] === 0xff
  }
);

// comment block
const commentSchema = conditional(
  {
    comment: [{ codes: readBytes(2) }, subBlocksSchema],
  },
  (stream) => {
    var codes = peekBytes(2)(stream);
    return codes[0] === 0x21 && codes[1] === 0xfe
  }
);

const schema = [
  { header: [{ signature: readString(3) }, { version: readString(3) }] },
  {
    lsd: [
      { width: readUnsigned(true) },
      { height: readUnsigned(true) },
      {
        gct: readBits({
          exists: { index: 0 },
          resolution: { index: 1, length: 3 },
          sort: { index: 4 },
          size: { index: 5, length: 3 },
        }),
      },
      { backgroundColorIndex: readByte() },
      { pixelAspectRatio: readByte() },
    ],
  },
  conditional(
    {
      gct: readArray(3, (stream, result) =>
        Math.pow(2, result.lsd.gct.size + 1)
      ),
    },
    (stream, result) => result.lsd.gct.exists
  ),
  // content frames
  {
    frames: loop(
      [gceSchema, applicationSchema, commentSchema, imageSchema, textSchema],
      (stream) => {
        var nextCode = peekByte()(stream);
        // rather than check for a terminator, we should check for the existence
        // of an ext or image block to avoid infinite loops
        //var terminator = 0x3B;
        //return nextCode !== terminator;
        return nextCode === 0x21 || nextCode === 0x2c
      }
    ),
  },
];

function toBoolean(val) {
  if (val === "") return val;
  return val === "true" || val == "1";
}
function readAsArrayBuffer(url, callback) {
  return new Promise((resolve2, reject) => {
    var xhr = new (void 0)();
    xhr.responseType = "blob";
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        resolve2(reader.result);
      };
      reader.readAsArrayBuffer(xhr.response);
    };
    xhr.open("GET", url);
    xhr.send();
  });
}
function assertPath(path) {
  if (typeof path !== "string") {
    throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
  }
}
function normalizeStringPosix(path, allowAboveRoot) {
  var res = "";
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length)
      code = path.charCodeAt(i);
    else if (code === 47)
      break;
    else
      code = 47;
    if (code === 47) {
      if (lastSlash === i - 1 || dots === 1) ;
      else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = "";
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += "/..";
          else
            res = "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += "/" + path.slice(lastSlash + 1, i);
        else
          res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}
var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = "";
    var resolvedAbsolute = false;
    var cwd;
    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0)
        path = arguments[i];
      else {
        if (cwd === void 0)
          cwd = process.cwd();
        path = cwd;
      }
      assertPath(path);
      if (path.length === 0) {
        continue;
      }
      resolvedPath = path + "/" + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47;
    }
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return "/" + resolvedPath;
      else
        return "/";
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return ".";
    }
  },
  normalize: function normalize(path) {
    assertPath(path);
    if (path.length === 0) return ".";
    var isAbsolute2 = path.charCodeAt(0) === 47;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47;
    path = normalizeStringPosix(path, !isAbsolute2);
    if (path.length === 0 && !isAbsolute2) path = ".";
    if (path.length > 0 && trailingSeparator) path += "/";
    if (isAbsolute2) return "/" + path;
    return path;
  },
  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47;
  },
  join: function join() {
    if (arguments.length === 0)
      return ".";
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === void 0)
          joined = arg;
        else
          joined += "/" + arg;
      }
    }
    if (joined === void 0)
      return ".";
    return posix.normalize(joined);
  },
  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);
    if (from === to) return "";
    from = posix.resolve(from);
    to = posix.resolve(to);
    if (from === to) return "";
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47)
        break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47)
        break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47) {
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47) {
            lastCommonSep = i;
          } else if (i === 0) {
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47)
        lastCommonSep = i;
    }
    var out = "";
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47) {
        if (out.length === 0)
          out += "..";
        else
          out += "/..";
      }
    }
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47)
        ++toStart;
      return to.slice(toStart);
    }
  },
  _makeLong: function _makeLong(path) {
    return path;
  },
  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0) return ".";
    var code = path.charCodeAt(0);
    var hasRoot = code === 47;
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
        matchedSlash = false;
      }
    }
    if (end === -1) return hasRoot ? "/" : ".";
    if (hasRoot && end === 1) return "//";
    return path.slice(0, end);
  },
  basename: function basename2(path, ext) {
    if (ext !== void 0 && typeof ext !== "string") throw new TypeError('"ext" argument must be a string');
    assertPath(path);
    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;
    if (ext !== void 0 && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return "";
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47) {
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                end = i;
              }
            } else {
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }
      if (start === end) end = firstNonSlashEnd;
      else if (end === -1) end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47) {
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else if (end === -1) {
          matchedSlash = false;
          end = i + 1;
        }
      }
      if (end === -1) return "";
      return path.slice(start, end);
    }
  },
  extname: function extname2(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47) {
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46) {
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }
    if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return "";
    }
    return path.slice(startDot, end);
  },
  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== "object") {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format("/", pathObject);
  },
  parse: function parse2(path) {
    assertPath(path);
    var ret = { root: "", dir: "", base: "", ext: "", name: "" };
    if (path.length === 0) return ret;
    var code = path.charCodeAt(0);
    var isAbsolute2 = code === 47;
    var start;
    if (isAbsolute2) {
      ret.root = "/";
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;
    var preDotState = 0;
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === 47) {
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46) {
        if (startDot === -1) startDot = i;
        else if (preDotState !== 1) preDotState = 1;
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }
    if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute2) ret.base = ret.name = path.slice(1, end);
        else ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute2) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }
    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
    else if (isAbsolute2) ret.dir = "/";
    return ret;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
posix.posix = posix;
const extname = posix.extname;
const basename = posix.basename;
class Format {
  constructor() {
    let isWeb = /* @__PURE__ */ (() => typeof global == "undefined")(), png = "image/png", jpg = "image/jpeg", jpeg = "image/jpeg", webp = "image/webp", pdf = "application/pdf", svg = "image/svg+xml";
    Object.assign(this, {
      toMime: this.toMime.bind(this),
      fromMime: this.fromMime.bind(this),
      expected: isWeb ? `"png", "jpg", or "webp"` : `"png", "jpg", "pdf", or "svg"`,
      formats: isWeb ? { png, jpg, jpeg, webp } : { png, jpg, jpeg, pdf, svg },
      mimes: isWeb ? { [png]: "png", [jpg]: "jpg", [webp]: "webp" } : { [png]: "png", [jpg]: "jpg", [pdf]: "pdf", [svg]: "svg" }
    });
  }
  toMime(ext) {
    return this.formats[(ext || "").replace(/^\./, "").toLowerCase()];
  }
  fromMime(mime) {
    return this.mimes[mime];
  }
}
function options$1(pages, {
  filename = "",
  extension = "",
  format: format2,
  page,
  quality,
  matte,
  density,
  outline,
  archive
} = {}) {
  var { fromMime, toMime, expected } = new Format(), archive = archive || "canvas", ext = format2 || extension.replace(/@\d+x$/i, "") || extname(filename), format2 = fromMime(toMime(ext) || ext), mime = toMime(format2), pp = pages.length;
  if (!ext)
    throw new Error(
      `Cannot determine image format (use a filename extension or 'format' argument)`
    );
  if (!format2)
    throw new Error(`Unsupported file format "${ext}" (expected ${expected})`);
  if (!pp)
    throw new RangeError(
      `Canvas has no associated contexts (try calling getContext or newPage first)`
    );
  let padding, isSequence, pattern = filename.replace(/{(\d*)}/g, (_, width) => {
    isSequence = true;
    width = parseInt(width, 10);
    padding = isFinite(width) ? width : isFinite(padding) ? padding : -1;
    return "{}";
  });
  let idx = page > 0 ? page - 1 : page < 0 ? pp + page : void 0;
  if (isFinite(idx) && idx < 0 || idx >= pp)
    throw new RangeError(
      pp == 1 ? `Canvas only has a \u2018page 1\u2019 (${idx} is out of bounds)` : `Canvas has pages 1\u2013${pp} (${idx} is out of bounds)`
    );
  pages = isFinite(idx) ? [pages[idx]] : isSequence || format2 == "pdf" ? pages : pages.slice(-1);
  if (quality === void 0) {
    quality = 0.92;
  } else {
    if (typeof quality != "number" || !isFinite(quality) || quality < 0 || quality > 1) {
      throw new TypeError(
        "The quality option must be an number in the 0.0\u20131.0 range"
      );
    }
  }
  if (density === void 0) {
    let m = (extension || basename(filename, ext)).match(/@(\d+)x$/i);
    density = m ? parseInt(m[1], 10) : 1;
  } else if (typeof density != "number" || !Number.isInteger(density) || density < 1) {
    throw new TypeError("The density option must be a non-negative integer");
  }
  if (outline === void 0) {
    outline = true;
  } else if (format2 == "svg") {
    outline = !!outline;
  }
  return {
    filename,
    pattern,
    format: format2,
    mime,
    pages,
    padding,
    quality,
    matte,
    density,
    outline,
    archive
  };
}
class Crc32 {
  static for(data) {
    return new Crc32().append(data).get();
  }
  constructor() {
    this.crc = -1;
  }
  get() {
    return ~this.crc;
  }
  append(data) {
    var crc = this.crc | 0, table = this.table;
    for (var offset = 0, len = data.length | 0; offset < len; offset++) {
      crc = crc >>> 8 ^ table[(crc ^ data[offset]) & 255];
    }
    this.crc = crc;
    return this;
  }
}
Crc32.prototype.table = (() => {
  var i, j, t, table = [];
  for (i = 0; i < 256; i++) {
    t = i;
    for (j = 0; j < 8; j++) {
      t = t & 1 ? t >>> 1 ^ 3988292384 : t >>> 1;
    }
    table[i] = t;
  }
  return table;
})();
function calloc(size) {
  let array = new Uint8Array(size), view = new DataView(array.buffer), buf = {
    array,
    view,
    size,
    set8(at, to) {
      view.setUint8(at, to);
      return buf;
    },
    set16(at, to) {
      view.setUint16(at, to, true);
      return buf;
    },
    set32(at, to) {
      view.setUint32(at, to, true);
      return buf;
    },
    bytes(at, to) {
      array.set(to, at);
      return buf;
    }
  };
  return buf;
}
class Zip {
  constructor(directory) {
    let now = /* @__PURE__ */ new Date();
    Object.assign(this, {
      directory,
      offset: 0,
      files: [],
      time: (now.getHours() << 6 | now.getMinutes()) << 5 | now.getSeconds() / 2,
      date: (now.getFullYear() - 1980 << 4 | now.getMonth() + 1) << 5 | now.getDate()
    });
    this.add(directory);
  }
  async add(filename, blob) {
    let folder = !blob, name = Zip.encoder.encode(`${this.directory}/${folder ? "" : filename}`), data = new Uint8Array(folder ? 0 : await blob.arrayBuffer()), preamble = 30 + name.length, descriptor = preamble + data.length, postamble = 16, { offset } = this;
    let header = calloc(26).set32(0, 134742036).set16(6, this.time).set16(8, this.date).set32(10, Crc32.for(data)).set32(14, data.length).set32(18, data.length).set16(22, name.length);
    offset += preamble;
    let payload = calloc(preamble + data.length + postamble).set32(0, 67324752).bytes(4, header.array).bytes(30, name).bytes(preamble, data);
    offset += data.length;
    payload.set32(descriptor, 134695760).bytes(descriptor + 4, header.array.slice(10, 22));
    offset += postamble;
    this.files.push({ offset, folder, name, header, payload });
    this.offset = offset;
  }
  toBuffer() {
    let length = this.files.reduce(
      (len, { name: name2 }) => 46 + name2.length + len,
      0
    ), cdr = calloc(length + 22), index = 0;
    for (var { offset, name, header, folder } of this.files) {
      cdr.set32(index, 33639248).set16(index + 4, 20).bytes(index + 6, header.array).set8(index + 38, folder ? 16 : 0).set32(index + 42, offset).bytes(index + 46, name);
      index += 46 + name.length;
    }
    cdr.set32(index, 101010256).set16(index + 8, this.files.length).set16(index + 10, this.files.length).set32(index + 12, length).set32(index + 16, this.offset);
    let output = new Uint8Array(this.offset + cdr.size), cursor = 0;
    for (var { payload } of this.files) {
      output.set(payload.array, cursor);
      cursor += payload.size;
    }
    output.set(cdr.array, cursor);
    return output;
  }
  get blob() {
    return new Blob([this.toBuffer()], { type: "application/zip" });
  }
}
Zip.encoder = new TextEncoder();
const asBlob = (canvas, mime, quality, matte) => {
  if (matte) {
    let { width, height } = canvas, comp = Object.assign((void 0).createElement("canvas"), { width, height }), ctx = comp.getContext("2d");
    ctx.fillStyle = matte;
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(canvas, 0, 0);
    canvas = comp;
  }
  return new Promise((res, rej) => canvas.toBlob(res, mime, quality));
};
const asBuffer$1 = (...args) => asBlob(...args).then((b) => b.arrayBuffer());
const asDownload$1 = async (canvas, mime, quality, matte, filename) => {
  _download(filename, await asBlob(canvas, mime, quality, matte));
};
const asZipDownload$1 = async (pages, mime, quality, matte, archive, pattern, padding) => {
  let filenames = (i) => pattern.replace("{}", String(i + 1).padStart(padding, "0")), folder = basename(archive, ".zip") || "archive", zip = new Zip(folder);
  await Promise.all(
    pages.map(async (page, i) => {
      let filename = filenames(i);
      await zip.add(filename, await asBlob(page, mime, quality, matte));
    })
  );
  _download(`${folder}.zip`, zip.blob);
};
const _download = (filename, blob) => {
  const href = (void 0).URL.createObjectURL(blob), link = (void 0).createElement("a");
  link.style.display = "none";
  link.href = href;
  link.setAttribute("download", filename);
  if (typeof link.download === "undefined") {
    link.setAttribute("target", "_blank");
  }
  (void 0).body.appendChild(link);
  link.click();
  (void 0).body.removeChild(link);
  setTimeout(() => (void 0).URL.revokeObjectURL(href), 100);
};
const atScale$1 = (pages, density, matte) => pages.map((page) => {
  if (density == 1 && !matte) return page.canvas;
  let scaled = (void 0).createElement("canvas"), ctx = scaled.getContext("2d"), src = page.canvas ? page.canvas : page;
  scaled.width = src.width * density;
  scaled.height = src.height * density;
  if (matte) {
    ctx.fillStyle = matte;
    ctx.fillRect(0, 0, scaled.width, scaled.height);
  }
  ctx.scale(density, density);
  ctx.drawImage(src, 0, 0);
  return scaled;
});
const obj$1 = { asBuffer: asBuffer$1, asDownload: asDownload$1, asZipDownload: asZipDownload$1, atScale: atScale$1, options: options$1 };
const { asBuffer, asDownload, asZipDownload, atScale, options } = obj$1;
const _toURL_ = Symbol.for("toDataURL");
const loadImage$1 = (src) => new Promise(
  (onload, onerror) => Object.assign(new Image$1(), {
    crossOrigin: "Anonymous",
    onload,
    onerror,
    src
  })
);
let Canvas$1 = class Canvas {
  constructor(width, height) {
    let elt = (void 0).createElement("canvas"), pages = [];
    Object.defineProperty(elt, "async", {
      value: true,
      writable: false,
      enumerable: true
    });
    for (var [prop, get] of Object.entries({
      png: () => asBuffer(elt, "image/png"),
      jpg: () => asBuffer(elt, "image/jpeg"),
      pages: () => pages.concat(elt).map((c) => c.getContext("2d"))
    }))
      Object.defineProperty(elt, prop, { get });
    return Object.assign(elt, {
      width,
      height,
      newPage(...size) {
        var { width: width2, height: height2 } = elt, page = Object.assign((void 0).createElement("canvas"), {
          width: width2,
          height: height2
        });
        page.getContext("2d").drawImage(elt, 0, 0);
        pages.push(page);
        var [width2, height2] = size.length ? size : [width2, height2];
        return Object.assign(elt, { width: width2, height: height2 }).getContext("2d");
      },
      saveAs(filename, args) {
        args = typeof args == "number" ? { quality: args } : args;
        let opts = options(this.pages, { filename, ...args }), { pattern, padding, mime, quality, matte, density, archive } = opts, pages2 = atScale(opts.pages, density);
        return padding == void 0 ? asDownload(pages2[0], mime, quality, matte, filename) : asZipDownload(
          pages2,
          mime,
          quality,
          matte,
          archive,
          pattern,
          padding
        );
      },
      toBuffer(extension = "png", args = {}) {
        args = typeof args == "number" ? { quality: args } : args;
        let opts = options(this.pages, { extension, ...args }), { mime, quality, matte, pages: pages2, density } = opts, canvas = atScale(pages2, density, matte)[0];
        return asBuffer(canvas, mime, quality, matte);
      },
      [_toURL_]: elt.toDataURL.bind(elt),
      toDataURL(extension = "png", args = {}) {
        args = typeof args == "number" ? { quality: args } : args;
        let opts = options(this.pages, { extension, ...args }), { mime, quality, matte, pages: pages2, density } = opts, canvas = atScale(pages2, density, matte)[0], url = canvas[canvas === elt ? _toURL_ : "toDataURL"](mime, quality);
        return Promise.resolve(url);
      }
    });
  }
};
const {
  CanvasRenderingContext2D,
  CanvasGradient,
  CanvasPattern,
  Image: Image$1,
  ImageData,
  Path2D,
  DOMMatrix,
  DOMRect,
  DOMPoint
} = void 0;
const obj = {
  Canvas: Canvas$1,
  loadImage: loadImage$1,
  CanvasRenderingContext2D,
  CanvasGradient,
  CanvasPattern,
  Image: Image$1,
  ImageData,
  Path2D,
  DOMMatrix,
  DOMRect,
  DOMPoint
};
const deinterlace = (pixels, width) => {
  const newPixels = new Array(pixels.length);
  const rows = pixels.length / width;
  const cpRow = function(toRow2, fromRow2) {
    const fromPixels = pixels.slice(fromRow2 * width, (fromRow2 + 1) * width);
    newPixels.splice.apply(newPixels, [toRow2 * width, width].concat(fromPixels));
  };
  const offsets = [0, 4, 2, 1];
  const steps = [8, 8, 4, 2];
  var fromRow = 0;
  for (var pass = 0; pass < 4; pass++) {
    for (var toRow = offsets[pass]; toRow < rows; toRow += steps[pass]) {
      cpRow(toRow, fromRow);
      fromRow++;
    }
  }
  return newPixels;
};
const lzw = (minCodeSize, data, pixelCount) => {
  const MAX_STACK_SIZE = 4096;
  const nullCode = -1;
  const npix = pixelCount;
  var available, clear, code_mask, code_size, end_of_information, in_code, old_code, bits, code, i, datum, data_size, first, top, bi, pi;
  const dstPixels = new Array(pixelCount);
  const prefix = new Array(MAX_STACK_SIZE);
  const suffix = new Array(MAX_STACK_SIZE);
  const pixelStack = new Array(MAX_STACK_SIZE + 1);
  data_size = minCodeSize;
  clear = 1 << data_size;
  end_of_information = clear + 1;
  available = clear + 2;
  old_code = nullCode;
  code_size = data_size + 1;
  code_mask = (1 << code_size) - 1;
  for (code = 0; code < clear; code++) {
    prefix[code] = 0;
    suffix[code] = code;
  }
  var datum, bits, first, top, pi, bi;
  datum = bits = first = top = pi = bi = 0;
  for (i = 0; i < npix; ) {
    if (top === 0) {
      if (bits < code_size) {
        datum += data[bi] << bits;
        bits += 8;
        bi++;
        continue;
      }
      code = datum & code_mask;
      datum >>= code_size;
      bits -= code_size;
      if (code > available || code == end_of_information) {
        break;
      }
      if (code == clear) {
        code_size = data_size + 1;
        code_mask = (1 << code_size) - 1;
        available = clear + 2;
        old_code = nullCode;
        continue;
      }
      if (old_code == nullCode) {
        pixelStack[top++] = suffix[code];
        old_code = code;
        first = code;
        continue;
      }
      in_code = code;
      if (code == available) {
        pixelStack[top++] = first;
        code = old_code;
      }
      while (code > clear) {
        pixelStack[top++] = suffix[code];
        code = prefix[code];
      }
      first = suffix[code] & 255;
      pixelStack[top++] = first;
      if (available < MAX_STACK_SIZE) {
        prefix[available] = old_code;
        suffix[available] = first;
        available++;
        if ((available & code_mask) === 0 && available < MAX_STACK_SIZE) {
          code_size++;
          code_mask += available;
        }
      }
      old_code = in_code;
    }
    top--;
    dstPixels[pi++] = pixelStack[top];
    i++;
  }
  for (i = pi; i < npix; i++) {
    dstPixels[i] = 0;
  }
  return dstPixels;
};
const parseGIF = (arrayBuffer) => {
  const byteData = new Uint8Array(arrayBuffer);
  return parse(buildStream(byteData), schema);
};
const generatePatch = (image) => {
  const totalPixels = image.pixels.length;
  const patchData = new Uint8ClampedArray(totalPixels * 4);
  for (var i = 0; i < totalPixels; i++) {
    const pos = i * 4;
    const colorIndex = image.pixels[i];
    const color = image.colorTable[colorIndex];
    patchData[pos] = color[0];
    patchData[pos + 1] = color[1];
    patchData[pos + 2] = color[2];
    patchData[pos + 3] = colorIndex !== image.transparentIndex ? 255 : 0;
  }
  return patchData;
};
const decompressFrame = (frame, gct, buildImagePatch) => {
  if (!frame.image) {
    console.warn("gif frame does not have associated image.");
    return;
  }
  const { image } = frame;
  const totalPixels = image.descriptor.width * image.descriptor.height;
  var pixels = lzw(image.data.minCodeSize, image.data.blocks, totalPixels);
  if (image.descriptor.lct.interlaced) {
    pixels = deinterlace(pixels, image.descriptor.width);
  }
  const resultImage = {
    pixels,
    dims: {
      top: frame.image.descriptor.top,
      left: frame.image.descriptor.left,
      width: frame.image.descriptor.width,
      height: frame.image.descriptor.height
    }
  };
  if (image.descriptor.lct && image.descriptor.lct.exists) {
    resultImage.colorTable = image.lct;
  } else {
    resultImage.colorTable = gct;
  }
  if (frame.gce) {
    resultImage.delay = (frame.gce.delay || 10) * 10;
    resultImage.disposalType = frame.gce.extras.disposal;
    if (frame.gce.extras.transparentColorGiven) {
      resultImage.transparentIndex = frame.gce.transparentColorIndex;
    }
  }
  {
    resultImage.patch = generatePatch(resultImage);
  }
  return resultImage;
};
const decompressFrames = (parsedGif, buildImagePatches) => {
  return parsedGif.frames.filter((f) => f.image).map((f) => decompressFrame(f, parsedGif.gct));
};
function checkQRVersion(version, sText, nCorrectLevel) {
  const length = _getUTF8Length(sText);
  const i = version - 1;
  let nLimit = 0;
  switch (nCorrectLevel) {
    case QRErrorCorrectLevel.L:
      nLimit = QRCodeLimitLength[i][0];
      break;
    case QRErrorCorrectLevel.M:
      nLimit = QRCodeLimitLength[i][1];
      break;
    case QRErrorCorrectLevel.Q:
      nLimit = QRCodeLimitLength[i][2];
      break;
    case QRErrorCorrectLevel.H:
      nLimit = QRCodeLimitLength[i][3];
      break;
  }
  return length <= nLimit;
}
function _getTypeNumber(sText, nCorrectLevel) {
  var nType = 1;
  var length = _getUTF8Length(sText);
  for (var i = 0, len = QRCodeLimitLength.length; i < len; i++) {
    var nLimit = 0;
    switch (nCorrectLevel) {
      case QRErrorCorrectLevel.L:
        nLimit = QRCodeLimitLength[i][0];
        break;
      case QRErrorCorrectLevel.M:
        nLimit = QRCodeLimitLength[i][1];
        break;
      case QRErrorCorrectLevel.Q:
        nLimit = QRCodeLimitLength[i][2];
        break;
      case QRErrorCorrectLevel.H:
        nLimit = QRCodeLimitLength[i][3];
        break;
    }
    if (length <= nLimit) {
      break;
    } else {
      nType++;
    }
  }
  if (nType > QRCodeLimitLength.length) {
    throw new Error("Too long data");
  }
  return nType;
}
function _getUTF8Length(sText) {
  var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
  return replacedText.length + (replacedText.length != Number(sText) ? 3 : 0);
}
class QR8bitByte {
  constructor(data) {
    this.mode = QRMode.MODE_8BIT_BYTE;
    this.parsedData = [];
    this.data = data;
    const byteArrays = [];
    for (let i = 0, l = this.data.length; i < l; i++) {
      const byteArray = [];
      const code = this.data.charCodeAt(i);
      if (code > 65536) {
        byteArray[0] = 240 | (code & 1835008) >>> 18;
        byteArray[1] = 128 | (code & 258048) >>> 12;
        byteArray[2] = 128 | (code & 4032) >>> 6;
        byteArray[3] = 128 | code & 63;
      } else if (code > 2048) {
        byteArray[0] = 224 | (code & 61440) >>> 12;
        byteArray[1] = 128 | (code & 4032) >>> 6;
        byteArray[2] = 128 | code & 63;
      } else if (code > 128) {
        byteArray[0] = 192 | (code & 1984) >>> 6;
        byteArray[1] = 128 | code & 63;
      } else {
        byteArray[0] = code;
      }
      byteArrays.push(byteArray);
    }
    this.parsedData = Array.prototype.concat.apply([], byteArrays);
    if (this.parsedData.length != this.data.length) {
      this.parsedData.unshift(191);
      this.parsedData.unshift(187);
      this.parsedData.unshift(239);
    }
  }
  getLength() {
    return this.parsedData.length;
  }
  write(buffer) {
    for (let i = 0, l = this.parsedData.length; i < l; i++) {
      buffer.put(this.parsedData[i], 8);
    }
  }
}
class QRCodeModel {
  constructor(typeNumber = -1, errorCorrectLevel = QRErrorCorrectLevel.L) {
    this.moduleCount = 0;
    this.dataList = [];
    this.typeNumber = typeNumber;
    this.errorCorrectLevel = errorCorrectLevel;
    this.moduleCount = 0;
    this.dataList = [];
  }
  addData(data) {
    if (this.typeNumber <= 0) {
      this.typeNumber = _getTypeNumber(data, this.errorCorrectLevel);
    } else if (this.typeNumber > 40) {
      throw new Error(`Invalid QR version: ${this.typeNumber}`);
    } else {
      if (!checkQRVersion(this.typeNumber, data, this.errorCorrectLevel)) {
        throw new Error(`Data is too long for QR version: ${this.typeNumber}`);
      }
    }
    const newData = new QR8bitByte(data);
    this.dataList.push(newData);
    this.dataCache = void 0;
  }
  isDark(row, col) {
    if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
      throw new Error(`${row},${col}`);
    }
    return this.modules[row][col];
  }
  getModuleCount() {
    return this.moduleCount;
  }
  make() {
    this.makeImpl(false, this.getBestMaskPattern());
  }
  makeImpl(test, maskPattern) {
    this.moduleCount = this.typeNumber * 4 + 17;
    this.modules = new Array(this.moduleCount);
    for (let row = 0; row < this.moduleCount; row++) {
      this.modules[row] = new Array(this.moduleCount);
      for (let col = 0; col < this.moduleCount; col++) {
        this.modules[row][col] = null;
      }
    }
    this.setupPositionProbePattern(0, 0);
    this.setupPositionProbePattern(this.moduleCount - 7, 0);
    this.setupPositionProbePattern(0, this.moduleCount - 7);
    this.setupPositionAdjustPattern();
    this.setupTimingPattern();
    this.setupTypeInfo(test, maskPattern);
    if (this.typeNumber >= 7) {
      this.setupTypeNumber(test);
    }
    if (this.dataCache == null) {
      this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
    }
    this.mapData(this.dataCache, maskPattern);
  }
  setupPositionProbePattern(row, col) {
    for (let r = -1; r <= 7; r++) {
      if (row + r <= -1 || this.moduleCount <= row + r)
        continue;
      for (let c = -1; c <= 7; c++) {
        if (col + c <= -1 || this.moduleCount <= col + c)
          continue;
        if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
          this.modules[row + r][col + c] = true;
        } else {
          this.modules[row + r][col + c] = false;
        }
      }
    }
  }
  getBestMaskPattern() {
    if (Number.isInteger(this.maskPattern) && Object.values(QRMaskPattern).includes(this.maskPattern)) {
      return this.maskPattern;
    }
    let minLostPoint = 0;
    let pattern = 0;
    for (let i = 0; i < 8; i++) {
      this.makeImpl(true, i);
      const lostPoint = QRUtil.getLostPoint(this);
      if (i == 0 || minLostPoint > lostPoint) {
        minLostPoint = lostPoint;
        pattern = i;
      }
    }
    return pattern;
  }
  setupTimingPattern() {
    for (let r = 8; r < this.moduleCount - 8; r++) {
      if (this.modules[r][6] != null) {
        continue;
      }
      this.modules[r][6] = r % 2 == 0;
    }
    for (let c = 8; c < this.moduleCount - 8; c++) {
      if (this.modules[6][c] != null) {
        continue;
      }
      this.modules[6][c] = c % 2 == 0;
    }
  }
  setupPositionAdjustPattern() {
    const pos = QRUtil.getPatternPosition(this.typeNumber);
    for (let i = 0; i < pos.length; i++) {
      for (let j = 0; j < pos.length; j++) {
        const row = pos[i];
        const col = pos[j];
        if (this.modules[row][col] != null) {
          continue;
        }
        for (let r = -2; r <= 2; r++) {
          for (let c = -2; c <= 2; c++) {
            if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
              this.modules[row + r][col + c] = true;
            } else {
              this.modules[row + r][col + c] = false;
            }
          }
        }
      }
    }
  }
  setupTypeNumber(test) {
    const bits = QRUtil.getBCHTypeNumber(this.typeNumber);
    for (var i = 0; i < 18; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
    }
    for (var i = 0; i < 18; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
    }
  }
  setupTypeInfo(test, maskPattern) {
    const data = this.errorCorrectLevel << 3 | maskPattern;
    const bits = QRUtil.getBCHTypeInfo(data);
    for (var i = 0; i < 15; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      if (i < 6) {
        this.modules[i][8] = mod;
      } else if (i < 8) {
        this.modules[i + 1][8] = mod;
      } else {
        this.modules[this.moduleCount - 15 + i][8] = mod;
      }
    }
    for (var i = 0; i < 15; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      if (i < 8) {
        this.modules[8][this.moduleCount - i - 1] = mod;
      } else if (i < 9) {
        this.modules[8][15 - i - 1 + 1] = mod;
      } else {
        this.modules[8][15 - i - 1] = mod;
      }
    }
    this.modules[this.moduleCount - 8][8] = !test;
  }
  mapData(data, maskPattern) {
    let inc = -1;
    let row = this.moduleCount - 1;
    let bitIndex = 7;
    let byteIndex = 0;
    for (let col = this.moduleCount - 1; col > 0; col -= 2) {
      if (col == 6)
        col--;
      while (true) {
        for (let c = 0; c < 2; c++) {
          if (this.modules[row][col - c] == null) {
            let dark = false;
            if (byteIndex < data.length) {
              dark = (data[byteIndex] >>> bitIndex & 1) == 1;
            }
            const mask = QRUtil.getMask(maskPattern, row, col - c);
            if (mask) {
              dark = !dark;
            }
            this.modules[row][col - c] = dark;
            bitIndex--;
            if (bitIndex == -1) {
              byteIndex++;
              bitIndex = 7;
            }
          }
        }
        row += inc;
        if (row < 0 || this.moduleCount <= row) {
          row -= inc;
          inc = -inc;
          break;
        }
      }
    }
  }
  static createData(typeNumber, errorCorrectLevel, dataList) {
    const rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
    const buffer = new QRBitBuffer();
    for (var i = 0; i < dataList.length; i++) {
      const data = dataList[i];
      buffer.put(data.mode, 4);
      buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
      data.write(buffer);
    }
    let totalDataCount = 0;
    for (var i = 0; i < rsBlocks.length; i++) {
      totalDataCount += rsBlocks[i].dataCount;
    }
    if (buffer.getLengthInBits() > totalDataCount * 8) {
      throw new Error(`code length overflow. (${buffer.getLengthInBits()}>${totalDataCount * 8})`);
    }
    if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
      buffer.put(0, 4);
    }
    while (buffer.getLengthInBits() % 8 != 0) {
      buffer.putBit(false);
    }
    while (true) {
      if (buffer.getLengthInBits() >= totalDataCount * 8) {
        break;
      }
      buffer.put(QRCodeModel.PAD0, 8);
      if (buffer.getLengthInBits() >= totalDataCount * 8) {
        break;
      }
      buffer.put(QRCodeModel.PAD1, 8);
    }
    return QRCodeModel.createBytes(buffer, rsBlocks);
  }
  static createBytes(buffer, rsBlocks) {
    let offset = 0;
    let maxDcCount = 0;
    let maxEcCount = 0;
    const dcdata = new Array(rsBlocks.length);
    const ecdata = new Array(rsBlocks.length);
    for (var r = 0; r < rsBlocks.length; r++) {
      const dcCount = rsBlocks[r].dataCount;
      const ecCount = rsBlocks[r].totalCount - dcCount;
      maxDcCount = Math.max(maxDcCount, dcCount);
      maxEcCount = Math.max(maxEcCount, ecCount);
      dcdata[r] = new Array(dcCount);
      for (var i = 0; i < dcdata[r].length; i++) {
        dcdata[r][i] = 255 & buffer.buffer[i + offset];
      }
      offset += dcCount;
      const rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
      const rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
      const modPoly = rawPoly.mod(rsPoly);
      ecdata[r] = new Array(rsPoly.getLength() - 1);
      for (var i = 0; i < ecdata[r].length; i++) {
        const modIndex = i + modPoly.getLength() - ecdata[r].length;
        ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
      }
    }
    let totalCodeCount = 0;
    for (var i = 0; i < rsBlocks.length; i++) {
      totalCodeCount += rsBlocks[i].totalCount;
    }
    const data = new Array(totalCodeCount);
    let index = 0;
    for (var i = 0; i < maxDcCount; i++) {
      for (var r = 0; r < rsBlocks.length; r++) {
        if (i < dcdata[r].length) {
          data[index++] = dcdata[r][i];
        }
      }
    }
    for (var i = 0; i < maxEcCount; i++) {
      for (var r = 0; r < rsBlocks.length; r++) {
        if (i < ecdata[r].length) {
          data[index++] = ecdata[r][i];
        }
      }
    }
    return data;
  }
}
QRCodeModel.PAD0 = 236;
QRCodeModel.PAD1 = 17;
const QRErrorCorrectLevel = { L: 1, M: 0, Q: 3, H: 2 };
const QRMode = { MODE_NUMBER: 1 << 0, MODE_ALPHA_NUM: 1 << 1, MODE_8BIT_BYTE: 1 << 2, MODE_KANJI: 1 << 3 };
const QRMaskPattern = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
};
class QRUtil {
  static getBCHTypeInfo(data) {
    let d = data << 10;
    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
      d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
    }
    return (data << 10 | d) ^ QRUtil.G15_MASK;
  }
  static getBCHTypeNumber(data) {
    let d = data << 12;
    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
      d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
    }
    return data << 12 | d;
  }
  static getBCHDigit(data) {
    let digit = 0;
    while (data != 0) {
      digit++;
      data >>>= 1;
    }
    return digit;
  }
  static getPatternPosition(typeNumber) {
    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
  }
  static getMask(maskPattern, i, j) {
    switch (maskPattern) {
      case QRMaskPattern.PATTERN000:
        return (i + j) % 2 == 0;
      case QRMaskPattern.PATTERN001:
        return i % 2 == 0;
      case QRMaskPattern.PATTERN010:
        return j % 3 == 0;
      case QRMaskPattern.PATTERN011:
        return (i + j) % 3 == 0;
      case QRMaskPattern.PATTERN100:
        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
      case QRMaskPattern.PATTERN101:
        return i * j % 2 + i * j % 3 == 0;
      case QRMaskPattern.PATTERN110:
        return (i * j % 2 + i * j % 3) % 2 == 0;
      case QRMaskPattern.PATTERN111:
        return (i * j % 3 + (i + j) % 2) % 2 == 0;
      default:
        throw new Error(`bad maskPattern:${maskPattern}`);
    }
  }
  static getErrorCorrectPolynomial(errorCorrectLength) {
    let a = new QRPolynomial([1], 0);
    for (let i = 0; i < errorCorrectLength; i++) {
      a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
    }
    return a;
  }
  static getLengthInBits(mode, type) {
    if (1 <= type && type < 10) {
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 10;
        case QRMode.MODE_ALPHA_NUM:
          return 9;
        case QRMode.MODE_8BIT_BYTE:
          return 8;
        case QRMode.MODE_KANJI:
          return 8;
        default:
          throw new Error(`mode:${mode}`);
      }
    } else if (type < 27) {
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 12;
        case QRMode.MODE_ALPHA_NUM:
          return 11;
        case QRMode.MODE_8BIT_BYTE:
          return 16;
        case QRMode.MODE_KANJI:
          return 10;
        default:
          throw new Error(`mode:${mode}`);
      }
    } else if (type < 41) {
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 14;
        case QRMode.MODE_ALPHA_NUM:
          return 13;
        case QRMode.MODE_8BIT_BYTE:
          return 16;
        case QRMode.MODE_KANJI:
          return 12;
        default:
          throw new Error(`mode:${mode}`);
      }
    } else {
      throw new Error(`type:${type}`);
    }
  }
  static getLostPoint(qrCode) {
    const moduleCount = qrCode.getModuleCount();
    let lostPoint = 0;
    for (var row = 0; row < moduleCount; row++) {
      for (var col = 0; col < moduleCount; col++) {
        let sameCount = 0;
        const dark = qrCode.isDark(row, col);
        for (let r = -1; r <= 1; r++) {
          if (row + r < 0 || moduleCount <= row + r) {
            continue;
          }
          for (let c = -1; c <= 1; c++) {
            if (col + c < 0 || moduleCount <= col + c) {
              continue;
            }
            if (r == 0 && c == 0) {
              continue;
            }
            if (dark == qrCode.isDark(row + r, col + c)) {
              sameCount++;
            }
          }
        }
        if (sameCount > 5) {
          lostPoint += 3 + sameCount - 5;
        }
      }
    }
    for (var row = 0; row < moduleCount - 1; row++) {
      for (var col = 0; col < moduleCount - 1; col++) {
        let count = 0;
        if (qrCode.isDark(row, col))
          count++;
        if (qrCode.isDark(row + 1, col))
          count++;
        if (qrCode.isDark(row, col + 1))
          count++;
        if (qrCode.isDark(row + 1, col + 1))
          count++;
        if (count == 0 || count == 4) {
          lostPoint += 3;
        }
      }
    }
    for (var row = 0; row < moduleCount; row++) {
      for (var col = 0; col < moduleCount - 6; col++) {
        if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
          lostPoint += 40;
        }
      }
    }
    for (var col = 0; col < moduleCount; col++) {
      for (var row = 0; row < moduleCount - 6; row++) {
        if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
          lostPoint += 40;
        }
      }
    }
    let darkCount = 0;
    for (var col = 0; col < moduleCount; col++) {
      for (var row = 0; row < moduleCount; row++) {
        if (qrCode.isDark(row, col)) {
          darkCount++;
        }
      }
    }
    const ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
    lostPoint += ratio * 10;
    return lostPoint;
  }
}
QRUtil.PATTERN_POSITION_TABLE = [
  [],
  [6, 18],
  [6, 22],
  [6, 26],
  [6, 30],
  [6, 34],
  [6, 22, 38],
  [6, 24, 42],
  [6, 26, 46],
  [6, 28, 50],
  [6, 30, 54],
  [6, 32, 58],
  [6, 34, 62],
  [6, 26, 46, 66],
  [6, 26, 48, 70],
  [6, 26, 50, 74],
  [6, 30, 54, 78],
  [6, 30, 56, 82],
  [6, 30, 58, 86],
  [6, 34, 62, 90],
  [6, 28, 50, 72, 94],
  [6, 26, 50, 74, 98],
  [6, 30, 54, 78, 102],
  [6, 28, 54, 80, 106],
  [6, 32, 58, 84, 110],
  [6, 30, 58, 86, 114],
  [6, 34, 62, 90, 118],
  [6, 26, 50, 74, 98, 122],
  [6, 30, 54, 78, 102, 126],
  [6, 26, 52, 78, 104, 130],
  [6, 30, 56, 82, 108, 134],
  [6, 34, 60, 86, 112, 138],
  [6, 30, 58, 86, 114, 142],
  [6, 34, 62, 90, 118, 146],
  [6, 30, 54, 78, 102, 126, 150],
  [6, 24, 50, 76, 102, 128, 154],
  [6, 28, 54, 80, 106, 132, 158],
  [6, 32, 58, 84, 110, 136, 162],
  [6, 26, 54, 82, 110, 138, 166],
  [6, 30, 58, 86, 114, 142, 170]
];
QRUtil.G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
QRUtil.G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
QRUtil.G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
class QRMath {
  static glog(n) {
    if (n < 1) {
      throw new Error(`glog(${n})`);
    }
    return QRMath.LOG_TABLE[n];
  }
  static gexp(n) {
    while (n < 0) {
      n += 255;
    }
    while (n >= 256) {
      n -= 255;
    }
    return QRMath.EXP_TABLE[n];
  }
}
QRMath.EXP_TABLE = new Array(256);
QRMath.LOG_TABLE = new Array(256);
QRMath._constructor = function() {
  for (var i = 0; i < 8; i++) {
    QRMath.EXP_TABLE[i] = 1 << i;
  }
  for (var i = 8; i < 256; i++) {
    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
  }
  for (var i = 0; i < 255; i++) {
    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
  }
}();
class QRPolynomial {
  constructor(num, shift) {
    if (num.length == void 0) {
      throw new Error(`${num.length}/${shift}`);
    }
    let offset = 0;
    while (offset < num.length && num[offset] == 0) {
      offset++;
    }
    this.num = new Array(num.length - offset + shift);
    for (let i = 0; i < num.length - offset; i++) {
      this.num[i] = num[i + offset];
    }
  }
  get(index) {
    return this.num[index];
  }
  getLength() {
    return this.num.length;
  }
  multiply(e) {
    const num = new Array(this.getLength() + e.getLength() - 1);
    for (let i = 0; i < this.getLength(); i++) {
      for (let j = 0; j < e.getLength(); j++) {
        num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
      }
    }
    return new QRPolynomial(num, 0);
  }
  mod(e) {
    if (this.getLength() - e.getLength() < 0) {
      return this;
    }
    const ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
    const num = new Array(this.getLength());
    for (var i = 0; i < this.getLength(); i++) {
      num[i] = this.get(i);
    }
    for (var i = 0; i < e.getLength(); i++) {
      num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
    }
    return new QRPolynomial(num, 0).mod(e);
  }
}
class QRRSBlock {
  constructor(totalCount, dataCount) {
    this.totalCount = totalCount;
    this.dataCount = dataCount;
  }
  static getRSBlocks(typeNumber, errorCorrectLevel) {
    const rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
    if (rsBlock == void 0) {
      throw new Error(`bad rs block @ typeNumber:${typeNumber}/errorCorrectLevel:${errorCorrectLevel}`);
    }
    const length = rsBlock.length / 3;
    const list = [];
    for (let i = 0; i < length; i++) {
      const count = rsBlock[i * 3 + 0];
      const totalCount = rsBlock[i * 3 + 1];
      const dataCount = rsBlock[i * 3 + 2];
      for (let j = 0; j < count; j++) {
        list.push(new QRRSBlock(totalCount, dataCount));
      }
    }
    return list;
  }
  static getRsBlockTable(typeNumber, errorCorrectLevel) {
    switch (errorCorrectLevel) {
      case QRErrorCorrectLevel.L:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
      case QRErrorCorrectLevel.M:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
      case QRErrorCorrectLevel.Q:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
      case QRErrorCorrectLevel.H:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
      default:
        return void 0;
    }
  }
}
QRRSBlock.RS_BLOCK_TABLE = [
  [1, 26, 19],
  [1, 26, 16],
  [1, 26, 13],
  [1, 26, 9],
  [1, 44, 34],
  [1, 44, 28],
  [1, 44, 22],
  [1, 44, 16],
  [1, 70, 55],
  [1, 70, 44],
  [2, 35, 17],
  [2, 35, 13],
  [1, 100, 80],
  [2, 50, 32],
  [2, 50, 24],
  [4, 25, 9],
  [1, 134, 108],
  [2, 67, 43],
  [2, 33, 15, 2, 34, 16],
  [2, 33, 11, 2, 34, 12],
  [2, 86, 68],
  [4, 43, 27],
  [4, 43, 19],
  [4, 43, 15],
  [2, 98, 78],
  [4, 49, 31],
  [2, 32, 14, 4, 33, 15],
  [4, 39, 13, 1, 40, 14],
  [2, 121, 97],
  [2, 60, 38, 2, 61, 39],
  [4, 40, 18, 2, 41, 19],
  [4, 40, 14, 2, 41, 15],
  [2, 146, 116],
  [3, 58, 36, 2, 59, 37],
  [4, 36, 16, 4, 37, 17],
  [4, 36, 12, 4, 37, 13],
  [2, 86, 68, 2, 87, 69],
  [4, 69, 43, 1, 70, 44],
  [6, 43, 19, 2, 44, 20],
  [6, 43, 15, 2, 44, 16],
  [4, 101, 81],
  [1, 80, 50, 4, 81, 51],
  [4, 50, 22, 4, 51, 23],
  [3, 36, 12, 8, 37, 13],
  [2, 116, 92, 2, 117, 93],
  [6, 58, 36, 2, 59, 37],
  [4, 46, 20, 6, 47, 21],
  [7, 42, 14, 4, 43, 15],
  [4, 133, 107],
  [8, 59, 37, 1, 60, 38],
  [8, 44, 20, 4, 45, 21],
  [12, 33, 11, 4, 34, 12],
  [3, 145, 115, 1, 146, 116],
  [4, 64, 40, 5, 65, 41],
  [11, 36, 16, 5, 37, 17],
  [11, 36, 12, 5, 37, 13],
  [5, 109, 87, 1, 110, 88],
  [5, 65, 41, 5, 66, 42],
  [5, 54, 24, 7, 55, 25],
  [11, 36, 12],
  [5, 122, 98, 1, 123, 99],
  [7, 73, 45, 3, 74, 46],
  [15, 43, 19, 2, 44, 20],
  [3, 45, 15, 13, 46, 16],
  [1, 135, 107, 5, 136, 108],
  [10, 74, 46, 1, 75, 47],
  [1, 50, 22, 15, 51, 23],
  [2, 42, 14, 17, 43, 15],
  [5, 150, 120, 1, 151, 121],
  [9, 69, 43, 4, 70, 44],
  [17, 50, 22, 1, 51, 23],
  [2, 42, 14, 19, 43, 15],
  [3, 141, 113, 4, 142, 114],
  [3, 70, 44, 11, 71, 45],
  [17, 47, 21, 4, 48, 22],
  [9, 39, 13, 16, 40, 14],
  [3, 135, 107, 5, 136, 108],
  [3, 67, 41, 13, 68, 42],
  [15, 54, 24, 5, 55, 25],
  [15, 43, 15, 10, 44, 16],
  [4, 144, 116, 4, 145, 117],
  [17, 68, 42],
  [17, 50, 22, 6, 51, 23],
  [19, 46, 16, 6, 47, 17],
  [2, 139, 111, 7, 140, 112],
  [17, 74, 46],
  [7, 54, 24, 16, 55, 25],
  [34, 37, 13],
  [4, 151, 121, 5, 152, 122],
  [4, 75, 47, 14, 76, 48],
  [11, 54, 24, 14, 55, 25],
  [16, 45, 15, 14, 46, 16],
  [6, 147, 117, 4, 148, 118],
  [6, 73, 45, 14, 74, 46],
  [11, 54, 24, 16, 55, 25],
  [30, 46, 16, 2, 47, 17],
  [8, 132, 106, 4, 133, 107],
  [8, 75, 47, 13, 76, 48],
  [7, 54, 24, 22, 55, 25],
  [22, 45, 15, 13, 46, 16],
  [10, 142, 114, 2, 143, 115],
  [19, 74, 46, 4, 75, 47],
  [28, 50, 22, 6, 51, 23],
  [33, 46, 16, 4, 47, 17],
  [8, 152, 122, 4, 153, 123],
  [22, 73, 45, 3, 74, 46],
  [8, 53, 23, 26, 54, 24],
  [12, 45, 15, 28, 46, 16],
  [3, 147, 117, 10, 148, 118],
  [3, 73, 45, 23, 74, 46],
  [4, 54, 24, 31, 55, 25],
  [11, 45, 15, 31, 46, 16],
  [7, 146, 116, 7, 147, 117],
  [21, 73, 45, 7, 74, 46],
  [1, 53, 23, 37, 54, 24],
  [19, 45, 15, 26, 46, 16],
  [5, 145, 115, 10, 146, 116],
  [19, 75, 47, 10, 76, 48],
  [15, 54, 24, 25, 55, 25],
  [23, 45, 15, 25, 46, 16],
  [13, 145, 115, 3, 146, 116],
  [2, 74, 46, 29, 75, 47],
  [42, 54, 24, 1, 55, 25],
  [23, 45, 15, 28, 46, 16],
  [17, 145, 115],
  [10, 74, 46, 23, 75, 47],
  [10, 54, 24, 35, 55, 25],
  [19, 45, 15, 35, 46, 16],
  [17, 145, 115, 1, 146, 116],
  [14, 74, 46, 21, 75, 47],
  [29, 54, 24, 19, 55, 25],
  [11, 45, 15, 46, 46, 16],
  [13, 145, 115, 6, 146, 116],
  [14, 74, 46, 23, 75, 47],
  [44, 54, 24, 7, 55, 25],
  [59, 46, 16, 1, 47, 17],
  [12, 151, 121, 7, 152, 122],
  [12, 75, 47, 26, 76, 48],
  [39, 54, 24, 14, 55, 25],
  [22, 45, 15, 41, 46, 16],
  [6, 151, 121, 14, 152, 122],
  [6, 75, 47, 34, 76, 48],
  [46, 54, 24, 10, 55, 25],
  [2, 45, 15, 64, 46, 16],
  [17, 152, 122, 4, 153, 123],
  [29, 74, 46, 14, 75, 47],
  [49, 54, 24, 10, 55, 25],
  [24, 45, 15, 46, 46, 16],
  [4, 152, 122, 18, 153, 123],
  [13, 74, 46, 32, 75, 47],
  [48, 54, 24, 14, 55, 25],
  [42, 45, 15, 32, 46, 16],
  [20, 147, 117, 4, 148, 118],
  [40, 75, 47, 7, 76, 48],
  [43, 54, 24, 22, 55, 25],
  [10, 45, 15, 67, 46, 16],
  [19, 148, 118, 6, 149, 119],
  [18, 75, 47, 31, 76, 48],
  [34, 54, 24, 34, 55, 25],
  [20, 45, 15, 61, 46, 16]
];
class QRBitBuffer {
  constructor() {
    this.buffer = [];
    this.length = 0;
  }
  get(index) {
    const bufIndex = Math.floor(index / 8);
    return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
  }
  put(num, length) {
    for (let i = 0; i < length; i++) {
      this.putBit((num >>> length - i - 1 & 1) == 1);
    }
  }
  getLengthInBits() {
    return this.length;
  }
  putBit(bit) {
    const bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }
    if (bit) {
      this.buffer[bufIndex] |= 128 >>> this.length % 8;
    }
    this.length++;
  }
}
const QRCodeLimitLength = [
  [17, 14, 11, 7],
  [32, 26, 20, 14],
  [53, 42, 32, 24],
  [78, 62, 46, 34],
  [106, 84, 60, 44],
  [134, 106, 74, 58],
  [154, 122, 86, 64],
  [192, 152, 108, 84],
  [230, 180, 130, 98],
  [271, 213, 151, 119],
  [321, 251, 177, 137],
  [367, 287, 203, 155],
  [425, 331, 241, 177],
  [458, 362, 258, 194],
  [520, 412, 292, 220],
  [586, 450, 322, 250],
  [644, 504, 364, 280],
  [718, 560, 394, 310],
  [792, 624, 442, 338],
  [858, 666, 482, 382],
  [929, 711, 509, 403],
  [1003, 779, 565, 439],
  [1091, 857, 611, 461],
  [1171, 911, 661, 511],
  [1273, 997, 715, 535],
  [1367, 1059, 751, 593],
  [1465, 1125, 805, 625],
  [1528, 1190, 868, 658],
  [1628, 1264, 908, 698],
  [1732, 1370, 982, 742],
  [1840, 1452, 1030, 790],
  [1952, 1538, 1112, 842],
  [2068, 1628, 1168, 898],
  [2188, 1722, 1228, 958],
  [2303, 1809, 1283, 983],
  [2431, 1911, 1351, 1051],
  [2563, 1989, 1423, 1093],
  [2699, 2099, 1499, 1139],
  [2809, 2213, 1579, 1219],
  [2953, 2331, 1663, 1273]
];
var ncycles = 100;
var netsize = 256;
var maxnetpos = netsize - 1;
var netbiasshift = 4;
var intbiasshift = 16;
var intbias = 1 << intbiasshift;
var gammashift = 10;
var betashift = 10;
var beta = intbias >> betashift;
var betagamma = intbias << gammashift - betashift;
var initrad = netsize >> 3;
var radiusbiasshift = 6;
var radiusbias = 1 << radiusbiasshift;
var initradius = initrad * radiusbias;
var radiusdec = 30;
var alphabiasshift = 10;
var initalpha = 1 << alphabiasshift;
var radbiasshift = 8;
var radbias = 1 << radbiasshift;
var alpharadbshift = alphabiasshift + radbiasshift;
var alpharadbias = 1 << alpharadbshift;
var prime1 = 499;
var prime2 = 491;
var prime3 = 487;
var prime4 = 503;
var minpicturebytes = 3 * prime4;
function NeuQuant(pixels, samplefac) {
  var network;
  var netindex;
  var bias;
  var freq;
  var radpower;
  function init() {
    network = [];
    netindex = new Int32Array(256);
    bias = new Int32Array(netsize);
    freq = new Int32Array(netsize);
    radpower = new Int32Array(netsize >> 3);
    var i, v;
    for (i = 0; i < netsize; i++) {
      v = (i << netbiasshift + 8) / netsize;
      network[i] = new Float64Array([v, v, v, 0]);
      freq[i] = intbias / netsize;
      bias[i] = 0;
    }
  }
  function unbiasnet() {
    for (var i = 0; i < netsize; i++) {
      network[i][0] >>= netbiasshift;
      network[i][1] >>= netbiasshift;
      network[i][2] >>= netbiasshift;
      network[i][3] = i;
    }
  }
  function altersingle(alpha, i, b, g, r) {
    network[i][0] -= alpha * (network[i][0] - b) / initalpha;
    network[i][1] -= alpha * (network[i][1] - g) / initalpha;
    network[i][2] -= alpha * (network[i][2] - r) / initalpha;
  }
  function alterneigh(radius, i, b, g, r) {
    var lo = Math.abs(i - radius);
    var hi = Math.min(i + radius, netsize);
    var j = i + 1;
    var k = i - 1;
    var m = 1;
    var p, a;
    while (j < hi || k > lo) {
      a = radpower[m++];
      if (j < hi) {
        p = network[j++];
        p[0] -= a * (p[0] - b) / alpharadbias;
        p[1] -= a * (p[1] - g) / alpharadbias;
        p[2] -= a * (p[2] - r) / alpharadbias;
      }
      if (k > lo) {
        p = network[k--];
        p[0] -= a * (p[0] - b) / alpharadbias;
        p[1] -= a * (p[1] - g) / alpharadbias;
        p[2] -= a * (p[2] - r) / alpharadbias;
      }
    }
  }
  function contest(b, g, r) {
    var bestd = ~(1 << 31);
    var bestbiasd = bestd;
    var bestpos = -1;
    var bestbiaspos = bestpos;
    var i, n, dist, biasdist, betafreq;
    for (i = 0; i < netsize; i++) {
      n = network[i];
      dist = Math.abs(n[0] - b) + Math.abs(n[1] - g) + Math.abs(n[2] - r);
      if (dist < bestd) {
        bestd = dist;
        bestpos = i;
      }
      biasdist = dist - (bias[i] >> intbiasshift - netbiasshift);
      if (biasdist < bestbiasd) {
        bestbiasd = biasdist;
        bestbiaspos = i;
      }
      betafreq = freq[i] >> betashift;
      freq[i] -= betafreq;
      bias[i] += betafreq << gammashift;
    }
    freq[bestpos] += beta;
    bias[bestpos] -= betagamma;
    return bestbiaspos;
  }
  function inxbuild() {
    var i, j, p, q, smallpos, smallval, previouscol = 0, startpos = 0;
    for (i = 0; i < netsize; i++) {
      p = network[i];
      smallpos = i;
      smallval = p[1];
      for (j = i + 1; j < netsize; j++) {
        q = network[j];
        if (q[1] < smallval) {
          smallpos = j;
          smallval = q[1];
        }
      }
      q = network[smallpos];
      if (i != smallpos) {
        j = q[0];
        q[0] = p[0];
        p[0] = j;
        j = q[1];
        q[1] = p[1];
        p[1] = j;
        j = q[2];
        q[2] = p[2];
        p[2] = j;
        j = q[3];
        q[3] = p[3];
        p[3] = j;
      }
      if (smallval != previouscol) {
        netindex[previouscol] = startpos + i >> 1;
        for (j = previouscol + 1; j < smallval; j++)
          netindex[j] = i;
        previouscol = smallval;
        startpos = i;
      }
    }
    netindex[previouscol] = startpos + maxnetpos >> 1;
    for (j = previouscol + 1; j < 256; j++)
      netindex[j] = maxnetpos;
  }
  function inxsearch(b, g, r) {
    var a, p, dist;
    var bestd = 1e3;
    var best = -1;
    var i = netindex[g];
    var j = i - 1;
    while (i < netsize || j >= 0) {
      if (i < netsize) {
        p = network[i];
        dist = p[1] - g;
        if (dist >= bestd)
          i = netsize;
        else {
          i++;
          if (dist < 0)
            dist = -dist;
          a = p[0] - b;
          if (a < 0)
            a = -a;
          dist += a;
          if (dist < bestd) {
            a = p[2] - r;
            if (a < 0)
              a = -a;
            dist += a;
            if (dist < bestd) {
              bestd = dist;
              best = p[3];
            }
          }
        }
      }
      if (j >= 0) {
        p = network[j];
        dist = g - p[1];
        if (dist >= bestd)
          j = -1;
        else {
          j--;
          if (dist < 0)
            dist = -dist;
          a = p[0] - b;
          if (a < 0)
            a = -a;
          dist += a;
          if (dist < bestd) {
            a = p[2] - r;
            if (a < 0)
              a = -a;
            dist += a;
            if (dist < bestd) {
              bestd = dist;
              best = p[3];
            }
          }
        }
      }
    }
    return best;
  }
  function learn() {
    var i;
    var lengthcount = pixels.length;
    var alphadec2 = 30 + (samplefac - 1) / 3;
    var samplepixels = lengthcount / (3 * samplefac);
    var delta = ~~(samplepixels / ncycles);
    var alpha = initalpha;
    var radius = initradius;
    var rad = radius >> radiusbiasshift;
    if (rad <= 1)
      rad = 0;
    for (i = 0; i < rad; i++)
      radpower[i] = alpha * ((rad * rad - i * i) * radbias / (rad * rad));
    var step;
    if (lengthcount < minpicturebytes) {
      samplefac = 1;
      step = 3;
    } else if (lengthcount % prime1 !== 0) {
      step = 3 * prime1;
    } else if (lengthcount % prime2 !== 0) {
      step = 3 * prime2;
    } else if (lengthcount % prime3 !== 0) {
      step = 3 * prime3;
    } else {
      step = 3 * prime4;
    }
    var b, g, r, j;
    var pix = 0;
    i = 0;
    while (i < samplepixels) {
      b = (pixels[pix] & 255) << netbiasshift;
      g = (pixels[pix + 1] & 255) << netbiasshift;
      r = (pixels[pix + 2] & 255) << netbiasshift;
      j = contest(b, g, r);
      altersingle(alpha, j, b, g, r);
      if (rad !== 0)
        alterneigh(rad, j, b, g, r);
      pix += step;
      if (pix >= lengthcount)
        pix -= lengthcount;
      i++;
      if (delta === 0)
        delta = 1;
      if (i % delta === 0) {
        alpha -= alpha / alphadec2;
        radius -= radius / radiusdec;
        rad = radius >> radiusbiasshift;
        if (rad <= 1)
          rad = 0;
        for (j = 0; j < rad; j++)
          radpower[j] = alpha * ((rad * rad - j * j) * radbias / (rad * rad));
      }
    }
  }
  function buildColormap() {
    init();
    learn();
    unbiasnet();
    inxbuild();
  }
  this.buildColormap = buildColormap;
  function getColormap() {
    var map = [];
    var index = [];
    for (var i = 0; i < netsize; i++)
      index[network[i][3]] = i;
    var k = 0;
    for (var l = 0; l < netsize; l++) {
      var j = index[l];
      map[k++] = network[j][0];
      map[k++] = network[j][1];
      map[k++] = network[j][2];
    }
    return map;
  }
  this.getColormap = getColormap;
  this.lookupRGB = inxsearch;
}
var EOF = -1;
var BITS = 12;
var HSIZE = 5003;
var masks = [
  0,
  1,
  3,
  7,
  15,
  31,
  63,
  127,
  255,
  511,
  1023,
  2047,
  4095,
  8191,
  16383,
  32767,
  65535
];
function LZWEncoder(width, height, pixels, colorDepth) {
  var initCodeSize = Math.max(2, colorDepth);
  var accum = new Uint8Array(256);
  var htab = new Int32Array(HSIZE);
  var codetab = new Int32Array(HSIZE);
  var cur_accum, cur_bits = 0;
  var a_count;
  var free_ent = 0;
  var maxcode;
  var clear_flg = false;
  var g_init_bits, ClearCode, EOFCode;
  var remaining, curPixel, n_bits;
  function char_out(c, outs) {
    accum[a_count++] = c;
    if (a_count >= 254)
      flush_char(outs);
  }
  function cl_block(outs) {
    cl_hash(HSIZE);
    free_ent = ClearCode + 2;
    clear_flg = true;
    output(ClearCode, outs);
  }
  function cl_hash(hsize) {
    for (var i = 0; i < hsize; ++i)
      htab[i] = -1;
  }
  function compress(init_bits, outs) {
    var fcode, c, i, ent, disp, hsize_reg, hshift;
    g_init_bits = init_bits;
    clear_flg = false;
    n_bits = g_init_bits;
    maxcode = MAXCODE(n_bits);
    ClearCode = 1 << init_bits - 1;
    EOFCode = ClearCode + 1;
    free_ent = ClearCode + 2;
    a_count = 0;
    ent = nextPixel();
    hshift = 0;
    for (fcode = HSIZE; fcode < 65536; fcode *= 2)
      ++hshift;
    hshift = 8 - hshift;
    hsize_reg = HSIZE;
    cl_hash(hsize_reg);
    output(ClearCode, outs);
    outer_loop: while ((c = nextPixel()) != EOF) {
      fcode = (c << BITS) + ent;
      i = c << hshift ^ ent;
      if (htab[i] === fcode) {
        ent = codetab[i];
        continue;
      } else if (htab[i] >= 0) {
        disp = hsize_reg - i;
        if (i === 0)
          disp = 1;
        do {
          if ((i -= disp) < 0)
            i += hsize_reg;
          if (htab[i] === fcode) {
            ent = codetab[i];
            continue outer_loop;
          }
        } while (htab[i] >= 0);
      }
      output(ent, outs);
      ent = c;
      if (free_ent < 1 << BITS) {
        codetab[i] = free_ent++;
        htab[i] = fcode;
      } else {
        cl_block(outs);
      }
    }
    output(ent, outs);
    output(EOFCode, outs);
  }
  function encode(outs) {
    outs.writeByte(initCodeSize);
    remaining = width * height;
    curPixel = 0;
    compress(initCodeSize + 1, outs);
    outs.writeByte(0);
  }
  function flush_char(outs) {
    if (a_count > 0) {
      outs.writeByte(a_count);
      outs.writeBytes(accum, 0, a_count);
      a_count = 0;
    }
  }
  function MAXCODE(n_bits2) {
    return (1 << n_bits2) - 1;
  }
  function nextPixel() {
    if (remaining === 0)
      return EOF;
    --remaining;
    var pix = pixels[curPixel++];
    return pix & 255;
  }
  function output(code, outs) {
    cur_accum &= masks[cur_bits];
    if (cur_bits > 0)
      cur_accum |= code << cur_bits;
    else
      cur_accum = code;
    cur_bits += n_bits;
    while (cur_bits >= 8) {
      char_out(cur_accum & 255, outs);
      cur_accum >>= 8;
      cur_bits -= 8;
    }
    if (free_ent > maxcode || clear_flg) {
      if (clear_flg) {
        maxcode = MAXCODE(n_bits = g_init_bits);
        clear_flg = false;
      } else {
        ++n_bits;
        if (n_bits == BITS)
          maxcode = 1 << BITS;
        else
          maxcode = MAXCODE(n_bits);
      }
    }
    if (code == EOFCode) {
      while (cur_bits > 0) {
        char_out(cur_accum & 255, outs);
        cur_accum >>= 8;
        cur_bits -= 8;
      }
      flush_char(outs);
    }
  }
  this.encode = encode;
}
function ByteArray() {
  this.page = -1;
  this.pages = [];
  this.newPage();
}
ByteArray.pageSize = 4096;
ByteArray.charMap = {};
for (var i = 0; i < 256; i++)
  ByteArray.charMap[i] = String.fromCharCode(i);
ByteArray.prototype.newPage = function() {
  this.pages[++this.page] = new Uint8Array(ByteArray.pageSize);
  this.cursor = 0;
};
ByteArray.prototype.getData = function() {
  var rv = "";
  for (var p = 0; p < this.pages.length; p++) {
    for (var i = 0; i < ByteArray.pageSize; i++) {
      rv += ByteArray.charMap[this.pages[p][i]];
    }
  }
  return rv;
};
ByteArray.prototype.toFlattenUint8Array = function() {
  const chunks = [];
  for (var p = 0; p < this.pages.length; p++) {
    if (p === this.pages.length - 1) {
      const chunk = Uint8Array.from(this.pages[p].slice(0, this.cursor));
      chunks.push(chunk);
    } else {
      chunks.push(this.pages[p]);
    }
  }
  const flatten = new Uint8Array(chunks.reduce((acc, chunk) => acc + chunk.length, 0));
  chunks.reduce((lastLength, chunk) => {
    flatten.set(chunk, lastLength);
    return lastLength + chunk.length;
  }, 0);
  return flatten;
};
ByteArray.prototype.writeByte = function(val) {
  if (this.cursor >= ByteArray.pageSize)
    this.newPage();
  this.pages[this.page][this.cursor++] = val;
};
ByteArray.prototype.writeUTFBytes = function(string) {
  for (var l = string.length, i = 0; i < l; i++)
    this.writeByte(string.charCodeAt(i));
};
ByteArray.prototype.writeBytes = function(array, offset, length) {
  for (var l = length || array.length, i = offset || 0; i < l; i++)
    this.writeByte(array[i]);
};
function GIFEncoder(width, height) {
  this.width = ~~width;
  this.height = ~~height;
  this.transparent = null;
  this.transIndex = 0;
  this.repeat = -1;
  this.delay = 0;
  this.image = null;
  this.pixels = null;
  this.indexedPixels = null;
  this.colorDepth = null;
  this.colorTab = null;
  this.neuQuant = null;
  this.usedEntry = new Array();
  this.palSize = 7;
  this.dispose = -1;
  this.firstFrame = true;
  this.sample = 10;
  this.dither = false;
  this.globalPalette = false;
  this.out = new ByteArray();
}
GIFEncoder.prototype.setDelay = function(milliseconds) {
  this.delay = Math.round(milliseconds / 10);
};
GIFEncoder.prototype.setFrameRate = function(fps) {
  this.delay = Math.round(100 / fps);
};
GIFEncoder.prototype.setDispose = function(disposalCode) {
  if (disposalCode >= 0)
    this.dispose = disposalCode;
};
GIFEncoder.prototype.setRepeat = function(repeat) {
  this.repeat = repeat;
};
GIFEncoder.prototype.setTransparent = function(color) {
  this.transparent = color;
};
GIFEncoder.prototype.addFrame = function(imageData) {
  this.image = imageData;
  this.colorTab = this.globalPalette && this.globalPalette.slice ? this.globalPalette : null;
  this.getImagePixels();
  this.analyzePixels();
  if (this.globalPalette === true)
    this.globalPalette = this.colorTab;
  if (this.firstFrame) {
    this.writeHeader();
    this.writeLSD();
    this.writePalette();
    if (this.repeat >= 0) {
      this.writeNetscapeExt();
    }
  }
  this.writeGraphicCtrlExt();
  this.writeImageDesc();
  if (!this.firstFrame && !this.globalPalette)
    this.writePalette();
  this.writePixels();
  this.firstFrame = false;
};
GIFEncoder.prototype.finish = function() {
  this.out.writeByte(59);
};
GIFEncoder.prototype.setQuality = function(quality) {
  if (quality < 1)
    quality = 1;
  this.sample = quality;
};
GIFEncoder.prototype.setDither = function(dither) {
  if (dither === true)
    dither = "FloydSteinberg";
  this.dither = dither;
};
GIFEncoder.prototype.setGlobalPalette = function(palette) {
  this.globalPalette = palette;
};
GIFEncoder.prototype.getGlobalPalette = function() {
  return this.globalPalette && this.globalPalette.slice && this.globalPalette.slice(0) || this.globalPalette;
};
GIFEncoder.prototype.writeHeader = function() {
  this.out.writeUTFBytes("GIF89a");
};
GIFEncoder.prototype.analyzePixels = function() {
  if (!this.colorTab) {
    this.neuQuant = new NeuQuant(this.pixels, this.sample);
    this.neuQuant.buildColormap();
    this.colorTab = this.neuQuant.getColormap();
  }
  if (this.dither) {
    this.ditherPixels(this.dither.replace("-serpentine", ""), this.dither.match(/-serpentine/) !== null);
  } else {
    this.indexPixels();
  }
  this.pixels = null;
  this.colorDepth = 8;
  this.palSize = 7;
  if (this.transparent !== null) {
    this.transIndex = this.findClosest(this.transparent, true);
  }
};
GIFEncoder.prototype.indexPixels = function(imgq) {
  var nPix = this.pixels.length / 3;
  this.indexedPixels = new Uint8Array(nPix);
  var k = 0;
  for (var j = 0; j < nPix; j++) {
    var index = this.findClosestRGB(this.pixels[k++] & 255, this.pixels[k++] & 255, this.pixels[k++] & 255);
    this.usedEntry[index] = true;
    this.indexedPixels[j] = index;
  }
};
GIFEncoder.prototype.ditherPixels = function(kernel, serpentine) {
  var kernels = {
    FalseFloydSteinberg: [
      [3 / 8, 1, 0],
      [3 / 8, 0, 1],
      [2 / 8, 1, 1]
    ],
    FloydSteinberg: [
      [7 / 16, 1, 0],
      [3 / 16, -1, 1],
      [5 / 16, 0, 1],
      [1 / 16, 1, 1]
    ],
    Stucki: [
      [8 / 42, 1, 0],
      [4 / 42, 2, 0],
      [2 / 42, -2, 1],
      [4 / 42, -1, 1],
      [8 / 42, 0, 1],
      [4 / 42, 1, 1],
      [2 / 42, 2, 1],
      [1 / 42, -2, 2],
      [2 / 42, -1, 2],
      [4 / 42, 0, 2],
      [2 / 42, 1, 2],
      [1 / 42, 2, 2]
    ],
    Atkinson: [
      [1 / 8, 1, 0],
      [1 / 8, 2, 0],
      [1 / 8, -1, 1],
      [1 / 8, 0, 1],
      [1 / 8, 1, 1],
      [1 / 8, 0, 2]
    ]
  };
  if (!kernel || !kernels[kernel]) {
    throw "Unknown dithering kernel: " + kernel;
  }
  var ds = kernels[kernel];
  var index = 0, height = this.height, width = this.width, data = this.pixels;
  var direction = serpentine ? -1 : 1;
  this.indexedPixels = new Uint8Array(this.pixels.length / 3);
  for (var y = 0; y < height; y++) {
    if (serpentine)
      direction = direction * -1;
    for (var x = direction == 1 ? 0 : width - 1, xend = direction == 1 ? width : 0; x !== xend; x += direction) {
      index = y * width + x;
      var idx = index * 3;
      var r1 = data[idx];
      var g1 = data[idx + 1];
      var b1 = data[idx + 2];
      idx = this.findClosestRGB(r1, g1, b1);
      this.usedEntry[idx] = true;
      this.indexedPixels[index] = idx;
      idx *= 3;
      var r2 = this.colorTab[idx];
      var g2 = this.colorTab[idx + 1];
      var b2 = this.colorTab[idx + 2];
      var er = r1 - r2;
      var eg = g1 - g2;
      var eb = b1 - b2;
      for (var i = direction == 1 ? 0 : ds.length - 1, end = direction == 1 ? ds.length : 0; i !== end; i += direction) {
        var x1 = ds[i][1];
        var y1 = ds[i][2];
        if (x1 + x >= 0 && x1 + x < width && y1 + y >= 0 && y1 + y < height) {
          var d = ds[i][0];
          idx = index + x1 + y1 * width;
          idx *= 3;
          data[idx] = Math.max(0, Math.min(255, data[idx] + er * d));
          data[idx + 1] = Math.max(0, Math.min(255, data[idx + 1] + eg * d));
          data[idx + 2] = Math.max(0, Math.min(255, data[idx + 2] + eb * d));
        }
      }
    }
  }
};
GIFEncoder.prototype.findClosest = function(c, used) {
  return this.findClosestRGB((c & 16711680) >> 16, (c & 65280) >> 8, c & 255, used);
};
GIFEncoder.prototype.findClosestRGB = function(r, g, b, used) {
  if (this.colorTab === null)
    return -1;
  if (this.neuQuant && !used) {
    return this.neuQuant.lookupRGB(r, g, b);
  }
  var minpos = 0;
  var dmin = 256 * 256 * 256;
  var len = this.colorTab.length;
  for (var i = 0, index = 0; i < len; index++) {
    var dr = r - (this.colorTab[i++] & 255);
    var dg = g - (this.colorTab[i++] & 255);
    var db = b - (this.colorTab[i++] & 255);
    var d = dr * dr + dg * dg + db * db;
    if ((!used || this.usedEntry[index]) && d < dmin) {
      dmin = d;
      minpos = index;
    }
  }
  return minpos;
};
GIFEncoder.prototype.getImagePixels = function() {
  var w = this.width;
  var h = this.height;
  this.pixels = new Uint8Array(w * h * 3);
  var data = this.image;
  var srcPos = 0;
  var count = 0;
  for (var i = 0; i < h; i++) {
    for (var j = 0; j < w; j++) {
      this.pixels[count++] = data[srcPos++];
      this.pixels[count++] = data[srcPos++];
      this.pixels[count++] = data[srcPos++];
      srcPos++;
    }
  }
};
GIFEncoder.prototype.writeGraphicCtrlExt = function() {
  this.out.writeByte(33);
  this.out.writeByte(249);
  this.out.writeByte(4);
  var transp, disp;
  if (this.transparent === null) {
    transp = 0;
    disp = 0;
  } else {
    transp = 1;
    disp = 2;
  }
  if (this.dispose >= 0) {
    disp = this.dispose & 7;
  }
  disp <<= 2;
  this.out.writeByte(
    0 | // 1:3 reserved
    disp | // 4:6 disposal
    0 | // 7 user input - 0 = none
    transp
    // 8 transparency flag
  );
  this.writeShort(this.delay);
  this.out.writeByte(this.transIndex);
  this.out.writeByte(0);
};
GIFEncoder.prototype.writeImageDesc = function() {
  this.out.writeByte(44);
  this.writeShort(0);
  this.writeShort(0);
  this.writeShort(this.width);
  this.writeShort(this.height);
  if (this.firstFrame || this.globalPalette) {
    this.out.writeByte(0);
  } else {
    this.out.writeByte(
      128 | // 1 local color table 1=yes
      0 | // 2 interlace - 0=no
      0 | // 3 sorted - 0=no
      0 | // 4-5 reserved
      this.palSize
      // 6-8 size of color table
    );
  }
};
GIFEncoder.prototype.writeLSD = function() {
  this.writeShort(this.width);
  this.writeShort(this.height);
  this.out.writeByte(
    128 | // 1 : global color table flag = 1 (gct used)
    112 | // 2-4 : color resolution = 7
    0 | // 5 : gct sort flag = 0
    this.palSize
    // 6-8 : gct size
  );
  this.out.writeByte(0);
  this.out.writeByte(0);
};
GIFEncoder.prototype.writeNetscapeExt = function() {
  this.out.writeByte(33);
  this.out.writeByte(255);
  this.out.writeByte(11);
  this.out.writeUTFBytes("NETSCAPE2.0");
  this.out.writeByte(3);
  this.out.writeByte(1);
  this.writeShort(this.repeat);
  this.out.writeByte(0);
};
GIFEncoder.prototype.writePalette = function() {
  this.out.writeBytes(this.colorTab);
  var n = 3 * 256 - this.colorTab.length;
  for (var i = 0; i < n; i++)
    this.out.writeByte(0);
};
GIFEncoder.prototype.writeShort = function(pValue) {
  this.out.writeByte(pValue & 255);
  this.out.writeByte(pValue >> 8 & 255);
};
GIFEncoder.prototype.writePixels = function() {
  var enc = new LZWEncoder(this.width, this.height, this.indexedPixels, this.colorDepth);
  enc.encode(this.out);
};
GIFEncoder.prototype.stream = function() {
  return this.out;
};
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
const { Canvas: Canvas2 } = obj;
const defaultScale = 0.4;
function loadImage(url) {
  if (!url) {
    return void 0;
  }
  function cleanup(img) {
    img.onload = null;
    img.onerror = null;
  }
  return new Promise(function(resolve2, reject) {
    if (url.slice(0, 4) == "data") {
      let img2 = new Image();
      img2.onload = function() {
        resolve2(img2);
        cleanup(img2);
      };
      img2.onerror = function() {
        reject("Image load error");
        cleanup(img2);
      };
      img2.src = url;
      return;
    }
    let img = new Image();
    img.setAttribute("crossOrigin", "Anonymous");
    img.onload = function() {
      resolve2(img);
    };
    img.onerror = function() {
      reject("Image load error");
    };
    img.src = url;
  });
}
class AwesomeQR {
  constructor(options2) {
    const _options = Object.assign({}, options2);
    Object.keys(AwesomeQR.defaultOptions).forEach((k) => {
      if (!(k in _options)) {
        Object.defineProperty(_options, k, { value: AwesomeQR.defaultOptions[k], enumerable: true, writable: true });
      }
    });
    if (!_options.components) {
      _options.components = AwesomeQR.defaultComponentOptions;
    } else if (typeof _options.components === "object") {
      Object.keys(AwesomeQR.defaultComponentOptions).forEach((k) => {
        if (!(k in _options.components)) {
          Object.defineProperty(_options.components, k, {
            value: AwesomeQR.defaultComponentOptions[k],
            enumerable: true,
            writable: true
          });
        } else {
          Object.defineProperty(_options.components, k, {
            value: Object.assign(Object.assign({}, AwesomeQR.defaultComponentOptions[k]), _options.components[k]),
            enumerable: true,
            writable: true
          });
        }
      });
    }
    if (_options.dotScale !== null && _options.dotScale !== void 0) {
      if (_options.dotScale <= 0 || _options.dotScale > 1) {
        throw new Error("dotScale should be in range (0, 1].");
      }
      _options.components.data.scale = _options.dotScale;
      _options.components.timing.scale = _options.dotScale;
      _options.components.alignment.scale = _options.dotScale;
    }
    this.options = _options;
    this.canvas = new Canvas2(options2.size, options2.size);
    this.canvasContext = this.canvas.getContext("2d");
    this.qrCode = new QRCodeModel(-1, this.options.correctLevel);
    if (Number.isInteger(this.options.maskPattern)) {
      this.qrCode.maskPattern = this.options.maskPattern;
    }
    if (Number.isInteger(this.options.version)) {
      this.qrCode.typeNumber = this.options.version;
    }
    this.qrCode.addData(this.options.text);
    this.qrCode.make();
  }
  draw() {
    return new Promise((resolve2) => this._draw().then(resolve2));
  }
  _clear() {
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  static _prepareRoundedCornerClip(canvasContext, x, y, w, h, r) {
    canvasContext.beginPath();
    canvasContext.moveTo(x, y);
    canvasContext.arcTo(x + w, y, x + w, y + h, r);
    canvasContext.arcTo(x + w, y + h, x, y + h, r);
    canvasContext.arcTo(x, y + h, x, y, r);
    canvasContext.arcTo(x, y, x + w, y, r);
    canvasContext.closePath();
  }
  static _getAverageRGB(image) {
    const blockSize = 5;
    const defaultRGB = {
      r: 0,
      g: 0,
      b: 0
    };
    let width, height;
    let i = -4;
    const rgb = {
      r: 0,
      g: 0,
      b: 0
    };
    let count = 0;
    height = image.naturalHeight || image.height;
    width = image.naturalWidth || image.width;
    const canvas2 = new Canvas2(width, height);
    const context = canvas2.getContext("2d");
    if (!context) {
      return defaultRGB;
    }
    context.drawImage(image, 0, 0);
    let data;
    try {
      data = context.getImageData(0, 0, width, height);
    } catch (e) {
      return defaultRGB;
    }
    while ((i += blockSize * 4) < data.data.length) {
      if (data.data[i] > 200 || data.data[i + 1] > 200 || data.data[i + 2] > 200)
        continue;
      ++count;
      rgb.r += data.data[i];
      rgb.g += data.data[i + 1];
      rgb.b += data.data[i + 2];
    }
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);
    return rgb;
  }
  static _drawDot(canvasContext, centerX, centerY, nSize, xyOffset = 0, dotScale = 1) {
    canvasContext.fillRect((centerX + xyOffset) * nSize, (centerY + xyOffset) * nSize, dotScale * nSize, dotScale * nSize);
  }
  static _drawAlignProtector(canvasContext, centerX, centerY, nSize) {
    canvasContext.clearRect((centerX - 2) * nSize, (centerY - 2) * nSize, 5 * nSize, 5 * nSize);
    canvasContext.fillRect((centerX - 2) * nSize, (centerY - 2) * nSize, 5 * nSize, 5 * nSize);
  }
  static _drawAlign(canvasContext, centerX, centerY, nSize, xyOffset = 0, dotScale = 1, colorDark, hasProtector) {
    const oldFillStyle = canvasContext.fillStyle;
    canvasContext.fillStyle = colorDark;
    new Array(4).fill(0).map((_, i) => {
      AwesomeQR._drawDot(canvasContext, centerX - 2 + i, centerY - 2, nSize, xyOffset, dotScale);
      AwesomeQR._drawDot(canvasContext, centerX + 2, centerY - 2 + i, nSize, xyOffset, dotScale);
      AwesomeQR._drawDot(canvasContext, centerX + 2 - i, centerY + 2, nSize, xyOffset, dotScale);
      AwesomeQR._drawDot(canvasContext, centerX - 2, centerY + 2 - i, nSize, xyOffset, dotScale);
    });
    AwesomeQR._drawDot(canvasContext, centerX, centerY, nSize, xyOffset, dotScale);
    if (!hasProtector) {
      canvasContext.fillStyle = "rgba(255, 255, 255, 0.6)";
      new Array(2).fill(0).map((_, i) => {
        AwesomeQR._drawDot(canvasContext, centerX - 1 + i, centerY - 1, nSize, xyOffset, dotScale);
        AwesomeQR._drawDot(canvasContext, centerX + 1, centerY - 1 + i, nSize, xyOffset, dotScale);
        AwesomeQR._drawDot(canvasContext, centerX + 1 - i, centerY + 1, nSize, xyOffset, dotScale);
        AwesomeQR._drawDot(canvasContext, centerX - 1, centerY + 1 - i, nSize, xyOffset, dotScale);
      });
    }
    canvasContext.fillStyle = oldFillStyle;
  }
  _draw() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
    return __awaiter(this, void 0, void 0, function* () {
      const nCount = (_a = this.qrCode) === null || _a === void 0 ? void 0 : _a.moduleCount;
      const rawSize = this.options.size;
      let rawMargin = this.options.margin;
      if (rawMargin < 0 || rawMargin * 2 >= rawSize) {
        rawMargin = 0;
      }
      const margin = Math.ceil(rawMargin);
      const rawViewportSize = rawSize - 2 * rawMargin;
      const whiteMargin = this.options.whiteMargin;
      const backgroundDimming = this.options.backgroundDimming;
      const nSize = Math.ceil(rawViewportSize / nCount);
      const viewportSize = nSize * nCount;
      const size = viewportSize + 2 * margin;
      const mainCanvas = new Canvas2(size, size);
      const mainCanvasContext = mainCanvas.getContext("2d");
      this._clear();
      mainCanvasContext.save();
      mainCanvasContext.translate(margin, margin);
      const backgroundCanvas = new Canvas2(size, size);
      const backgroundCanvasContext = backgroundCanvas.getContext("2d");
      let parsedGIFBackground = null;
      let gifFrames = [];
      if (!!this.options.gifBackground) {
        const gif = parseGIF(this.options.gifBackground);
        parsedGIFBackground = gif;
        gifFrames = decompressFrames(gif);
        if (this.options.autoColor) {
          let r = 0, g = 0, b = 0;
          let count = 0;
          for (let i = 0; i < gifFrames[0].colorTable.length; i++) {
            const c = gifFrames[0].colorTable[i];
            if (c[0] > 200 || c[1] > 200 || c[2] > 200)
              continue;
            if (c[0] === 0 && c[1] === 0 && c[2] === 0)
              continue;
            count++;
            r += c[0];
            g += c[1];
            b += c[2];
          }
          r = ~~(r / count);
          g = ~~(g / count);
          b = ~~(b / count);
          this.options.colorDark = `rgb(${r},${g},${b})`;
        }
      } else if (!!this.options.backgroundImage) {
        const backgroundImage = yield loadImage(this.options.backgroundImage);
        if (this.options.autoColor) {
          const avgRGB = AwesomeQR._getAverageRGB(backgroundImage);
          this.options.colorDark = `rgb(${avgRGB.r},${avgRGB.g},${avgRGB.b})`;
        }
        backgroundCanvasContext.drawImage(backgroundImage, 0, 0, backgroundImage.width, backgroundImage.height, 0, 0, size, size);
        backgroundCanvasContext.rect(0, 0, size, size);
        backgroundCanvasContext.fillStyle = backgroundDimming;
        backgroundCanvasContext.fill();
      } else {
        backgroundCanvasContext.rect(0, 0, size, size);
        backgroundCanvasContext.fillStyle = this.options.colorLight;
        backgroundCanvasContext.fill();
      }
      const alignmentPatternCenters = QRUtil.getPatternPosition(this.qrCode.typeNumber);
      const dataScale = ((_c = (_b = this.options.components) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.scale) || defaultScale;
      const dataXyOffset = (1 - dataScale) * 0.5;
      for (let row = 0; row < nCount; row++) {
        for (let col = 0; col < nCount; col++) {
          const bIsDark = this.qrCode.isDark(row, col);
          const isBlkPosCtr = col < 8 && (row < 8 || row >= nCount - 8) || col >= nCount - 8 && row < 8;
          const isTiming = row == 6 && col >= 8 && col <= nCount - 8 || col == 6 && row >= 8 && row <= nCount - 8;
          let isProtected = isBlkPosCtr || isTiming;
          for (let i = 1; i < alignmentPatternCenters.length - 1; i++) {
            isProtected = isProtected || row >= alignmentPatternCenters[i] - 2 && row <= alignmentPatternCenters[i] + 2 && col >= alignmentPatternCenters[i] - 2 && col <= alignmentPatternCenters[i] + 2;
          }
          const nLeft = col * nSize + (isProtected ? 0 : dataXyOffset * nSize);
          const nTop = row * nSize + (isProtected ? 0 : dataXyOffset * nSize);
          mainCanvasContext.strokeStyle = bIsDark ? this.options.colorDark : this.options.colorLight;
          mainCanvasContext.lineWidth = 0.5;
          mainCanvasContext.fillStyle = bIsDark ? this.options.colorDark : this.options.colorLight;
          if (alignmentPatternCenters.length === 0) {
            if (!isProtected) {
              mainCanvasContext.fillRect(nLeft, nTop, (isProtected ? isBlkPosCtr ? 1 : 1 : dataScale) * nSize, (isProtected ? isBlkPosCtr ? 1 : 1 : dataScale) * nSize);
            }
          } else {
            const inAgnRange = col < nCount - 4 && col >= nCount - 4 - 5 && row < nCount - 4 && row >= nCount - 4 - 5;
            if (!isProtected && !inAgnRange) {
              mainCanvasContext.fillRect(nLeft, nTop, (isProtected ? isBlkPosCtr ? 1 : 1 : dataScale) * nSize, (isProtected ? isBlkPosCtr ? 1 : 1 : dataScale) * nSize);
            }
          }
        }
      }
      const cornerAlignmentCenter = alignmentPatternCenters[alignmentPatternCenters.length - 1];
      const protectorStyle = this.options.colorLight;
      mainCanvasContext.fillStyle = protectorStyle;
      mainCanvasContext.fillRect(0, 0, 8 * nSize, 8 * nSize);
      mainCanvasContext.fillRect(0, (nCount - 8) * nSize, 8 * nSize, 8 * nSize);
      mainCanvasContext.fillRect((nCount - 8) * nSize, 0, 8 * nSize, 8 * nSize);
      if ((_e = (_d = this.options.components) === null || _d === void 0 ? void 0 : _d.timing) === null || _e === void 0 ? void 0 : _e.protectors) {
        mainCanvasContext.fillRect(8 * nSize, 6 * nSize, (nCount - 8 - 8) * nSize, nSize);
        mainCanvasContext.fillRect(6 * nSize, 8 * nSize, nSize, (nCount - 8 - 8) * nSize);
      }
      if ((_g = (_f = this.options.components) === null || _f === void 0 ? void 0 : _f.cornerAlignment) === null || _g === void 0 ? void 0 : _g.protectors) {
        AwesomeQR._drawAlignProtector(mainCanvasContext, cornerAlignmentCenter, cornerAlignmentCenter, nSize);
      }
      if ((_j = (_h = this.options.components) === null || _h === void 0 ? void 0 : _h.alignment) === null || _j === void 0 ? void 0 : _j.protectors) {
        for (let i = 0; i < alignmentPatternCenters.length; i++) {
          for (let j = 0; j < alignmentPatternCenters.length; j++) {
            const agnX = alignmentPatternCenters[j];
            const agnY = alignmentPatternCenters[i];
            if (agnX === 6 && (agnY === 6 || agnY === cornerAlignmentCenter)) {
              continue;
            } else if (agnY === 6 && (agnX === 6 || agnX === cornerAlignmentCenter)) {
              continue;
            } else if (agnX === cornerAlignmentCenter && agnY === cornerAlignmentCenter) {
              continue;
            } else {
              AwesomeQR._drawAlignProtector(mainCanvasContext, agnX, agnY, nSize);
            }
          }
        }
      }
      mainCanvasContext.fillStyle = this.options.colorDark;
      mainCanvasContext.fillRect(0, 0, 7 * nSize, nSize);
      mainCanvasContext.fillRect((nCount - 7) * nSize, 0, 7 * nSize, nSize);
      mainCanvasContext.fillRect(0, 6 * nSize, 7 * nSize, nSize);
      mainCanvasContext.fillRect((nCount - 7) * nSize, 6 * nSize, 7 * nSize, nSize);
      mainCanvasContext.fillRect(0, (nCount - 7) * nSize, 7 * nSize, nSize);
      mainCanvasContext.fillRect(0, (nCount - 7 + 6) * nSize, 7 * nSize, nSize);
      mainCanvasContext.fillRect(0, 0, nSize, 7 * nSize);
      mainCanvasContext.fillRect(6 * nSize, 0, nSize, 7 * nSize);
      mainCanvasContext.fillRect((nCount - 7) * nSize, 0, nSize, 7 * nSize);
      mainCanvasContext.fillRect((nCount - 7 + 6) * nSize, 0, nSize, 7 * nSize);
      mainCanvasContext.fillRect(0, (nCount - 7) * nSize, nSize, 7 * nSize);
      mainCanvasContext.fillRect(6 * nSize, (nCount - 7) * nSize, nSize, 7 * nSize);
      mainCanvasContext.fillRect(2 * nSize, 2 * nSize, 3 * nSize, 3 * nSize);
      mainCanvasContext.fillRect((nCount - 7 + 2) * nSize, 2 * nSize, 3 * nSize, 3 * nSize);
      mainCanvasContext.fillRect(2 * nSize, (nCount - 7 + 2) * nSize, 3 * nSize, 3 * nSize);
      const timingScale = ((_l = (_k = this.options.components) === null || _k === void 0 ? void 0 : _k.timing) === null || _l === void 0 ? void 0 : _l.scale) || defaultScale;
      const timingXyOffset = (1 - timingScale) * 0.5;
      for (let i = 0; i < nCount - 8; i += 2) {
        AwesomeQR._drawDot(mainCanvasContext, 8 + i, 6, nSize, timingXyOffset, timingScale);
        AwesomeQR._drawDot(mainCanvasContext, 6, 8 + i, nSize, timingXyOffset, timingScale);
      }
      const cornerAlignmentScale = ((_o = (_m = this.options.components) === null || _m === void 0 ? void 0 : _m.cornerAlignment) === null || _o === void 0 ? void 0 : _o.scale) || defaultScale;
      const cornerAlignmentXyOffset = (1 - cornerAlignmentScale) * 0.5;
      AwesomeQR._drawAlign(mainCanvasContext, cornerAlignmentCenter, cornerAlignmentCenter, nSize, cornerAlignmentXyOffset, cornerAlignmentScale, this.options.colorDark, ((_q = (_p = this.options.components) === null || _p === void 0 ? void 0 : _p.cornerAlignment) === null || _q === void 0 ? void 0 : _q.protectors) || false);
      const alignmentScale = ((_s = (_r = this.options.components) === null || _r === void 0 ? void 0 : _r.alignment) === null || _s === void 0 ? void 0 : _s.scale) || defaultScale;
      const alignmentXyOffset = (1 - alignmentScale) * 0.5;
      for (let i = 0; i < alignmentPatternCenters.length; i++) {
        for (let j = 0; j < alignmentPatternCenters.length; j++) {
          const agnX = alignmentPatternCenters[j];
          const agnY = alignmentPatternCenters[i];
          if (agnX === 6 && (agnY === 6 || agnY === cornerAlignmentCenter)) {
            continue;
          } else if (agnY === 6 && (agnX === 6 || agnX === cornerAlignmentCenter)) {
            continue;
          } else if (agnX === cornerAlignmentCenter && agnY === cornerAlignmentCenter) {
            continue;
          } else {
            AwesomeQR._drawAlign(mainCanvasContext, agnX, agnY, nSize, alignmentXyOffset, alignmentScale, this.options.colorDark, ((_u = (_t = this.options.components) === null || _t === void 0 ? void 0 : _t.alignment) === null || _u === void 0 ? void 0 : _u.protectors) || false);
          }
        }
      }
      if (whiteMargin) {
        mainCanvasContext.fillStyle = this.options.backgroundColor;
        mainCanvasContext.fillRect(-margin, -margin, size, margin);
        mainCanvasContext.fillRect(-margin, viewportSize, size, margin);
        mainCanvasContext.fillRect(viewportSize, -margin, margin, size);
        mainCanvasContext.fillRect(-margin, -margin, margin, size);
      }
      if (!!this.options.logoImage) {
        const logoImage = yield loadImage(this.options.logoImage);
        let logoScale = this.options.logoScale;
        let logoMargin = this.options.logoMargin;
        let logoCornerRadius = this.options.logoCornerRadius;
        if (logoScale <= 0 || logoScale >= 1) {
          logoScale = 0.2;
        }
        if (logoMargin < 0) {
          logoMargin = 0;
        }
        if (logoCornerRadius < 0) {
          logoCornerRadius = 0;
        }
        const logoSize = viewportSize * logoScale;
        const x = 0.5 * (size - logoSize);
        const y = x;
        mainCanvasContext.restore();
        mainCanvasContext.fillStyle = this.options.logoBackgroundColor;
        mainCanvasContext.save();
        AwesomeQR._prepareRoundedCornerClip(mainCanvasContext, x - logoMargin, y - logoMargin, logoSize + 2 * logoMargin, logoSize + 2 * logoMargin, logoCornerRadius + logoMargin);
        mainCanvasContext.clip();
        const oldGlobalCompositeOperation = mainCanvasContext.globalCompositeOperation;
        mainCanvasContext.globalCompositeOperation = "destination-out";
        mainCanvasContext.fill();
        mainCanvasContext.globalCompositeOperation = oldGlobalCompositeOperation;
        mainCanvasContext.restore();
        mainCanvasContext.save();
        AwesomeQR._prepareRoundedCornerClip(mainCanvasContext, x, y, logoSize, logoSize, logoCornerRadius);
        mainCanvasContext.clip();
        mainCanvasContext.drawImage(logoImage, x, y, logoSize, logoSize);
        mainCanvasContext.restore();
        mainCanvasContext.save();
        mainCanvasContext.translate(margin, margin);
      }
      if (!!parsedGIFBackground) {
        let gifOutput;
        let backgroundCanvas2;
        let backgroundCanvasContext2;
        let patchCanvas;
        let patchCanvasContext;
        let patchData;
        gifFrames.forEach(function(frame) {
          if (!gifOutput) {
            gifOutput = new GIFEncoder(rawSize, rawSize);
            gifOutput.setDelay(frame.delay);
            gifOutput.setRepeat(0);
          }
          const { width, height } = frame.dims;
          if (!backgroundCanvas2) {
            backgroundCanvas2 = new Canvas2(width, height);
            backgroundCanvasContext2 = backgroundCanvas2.getContext("2d");
            backgroundCanvasContext2.rect(0, 0, backgroundCanvas2.width, backgroundCanvas2.height);
            backgroundCanvasContext2.fillStyle = "#ffffff";
            backgroundCanvasContext2.fill();
          }
          if (!patchCanvas || !patchData || width !== patchCanvas.width || height !== patchCanvas.height) {
            patchCanvas = new Canvas2(width, height);
            patchCanvasContext = patchCanvas.getContext("2d");
            patchData = patchCanvasContext.createImageData(width, height);
          }
          patchData.data.set(frame.patch);
          patchCanvasContext.putImageData(patchData, 0, 0);
          backgroundCanvasContext2.drawImage(patchCanvas.getContext("2d").canvas, frame.dims.left, frame.dims.top);
          const unscaledCanvas = new Canvas2(size, size);
          const unscaledCanvasContext = unscaledCanvas.getContext("2d");
          unscaledCanvasContext.drawImage(backgroundCanvas2.getContext("2d").canvas, 0, 0, size, size);
          unscaledCanvasContext.rect(0, 0, size, size);
          unscaledCanvasContext.fillStyle = backgroundDimming;
          unscaledCanvasContext.fill();
          unscaledCanvasContext.drawImage(mainCanvas.getContext("2d").canvas, 0, 0, size, size);
          const outCanvas = new Canvas2(rawSize, rawSize);
          const outCanvasContext = outCanvas.getContext("2d");
          outCanvasContext.drawImage(unscaledCanvas.getContext("2d").canvas, 0, 0, rawSize, rawSize);
          gifOutput.addFrame(outCanvasContext.getImageData(0, 0, outCanvas.width, outCanvas.height).data);
        });
        if (!gifOutput) {
          throw new Error("No frames.");
        }
        gifOutput.finish();
        if (isElement(this.canvas)) {
          const u8array = gifOutput.stream().toFlattenUint8Array();
          const binary = u8array.reduce((bin, u8) => bin + String.fromCharCode(u8), "");
          return Promise.resolve(`data:image/gif;base64,${(void 0).btoa(binary)}`);
        }
        return Promise.resolve(Buffer.from(gifOutput.stream().toFlattenUint8Array()));
      } else {
        backgroundCanvasContext.drawImage(mainCanvas.getContext("2d").canvas, 0, 0, size, size);
        mainCanvasContext.drawImage(backgroundCanvas.getContext("2d").canvas, -margin, -margin, size, size);
        const outCanvas = new Canvas2(rawSize, rawSize);
        const outCanvasContext = outCanvas.getContext("2d");
        outCanvasContext.drawImage(mainCanvas.getContext("2d").canvas, 0, 0, rawSize, rawSize);
        this.canvas = outCanvas;
        const format2 = this.options.gifBackground ? "gif" : "png";
        if (isElement(this.canvas)) {
          return Promise.resolve(this.canvas.toDataURL(format2));
        }
        return Promise.resolve(this.canvas.toBuffer(format2));
      }
    });
  }
}
AwesomeQR.CorrectLevel = QRErrorCorrectLevel;
AwesomeQR.defaultComponentOptions = {
  data: {
    scale: 0.4
  },
  timing: {
    scale: 0.5,
    protectors: false
  },
  alignment: {
    scale: 0.5,
    protectors: false
  },
  cornerAlignment: {
    scale: 0.5,
    protectors: true
  }
};
AwesomeQR.defaultOptions = {
  text: "",
  size: 400,
  margin: 20,
  colorDark: "#000000",
  colorLight: "rgba(255, 255, 255, 0.6)",
  correctLevel: QRErrorCorrectLevel.M,
  backgroundImage: void 0,
  backgroundDimming: "rgba(0,0,0,0)",
  logoImage: void 0,
  logoScale: 0.2,
  logoMargin: 4,
  logoCornerRadius: 8,
  whiteMargin: true,
  components: AwesomeQR.defaultComponentOptions,
  autoColor: true,
  logoBackgroundColor: "#ffffff",
  backgroundColor: "#ffffff"
};
function isElement(obj2) {
  try {
    return obj2 instanceof HTMLElement;
  } catch (e) {
    return typeof obj2 === "object" && obj2.nodeType === 1 && typeof obj2.style === "object" && typeof obj2.ownerDocument === "object";
  }
}
const _sfc_main$1 = {
  props: {
    text: {
      type: String,
      required: true
    },
    qid: {
      type: String
    },
    correctLevel: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 200
    },
    margin: {
      type: Number,
      default: 20
    },
    colorDark: {
      type: String,
      default: "#000000"
    },
    colorLight: {
      type: String,
      default: "#FFFFFF"
    },
    bgSrc: {
      type: String,
      default: void 0
    },
    background: {
      type: String,
      default: "rgba(0,0,0,0)"
    },
    backgroundDimming: {
      type: String,
      default: "rgba(0,0,0,0)"
    },
    logoSrc: {
      type: String,
      default: void 0
    },
    logoBackgroundColor: {
      type: String,
      default: "rgba(255,255,255,1)"
    },
    gifBgSrc: {
      type: String,
      default: void 0
    },
    logoScale: {
      type: Number,
      default: 0.2
    },
    logoMargin: {
      type: Number,
      default: 0
    },
    logoCornerRadius: {
      type: Number,
      default: 8
    },
    whiteMargin: {
      type: [Boolean, String],
      default: true
    },
    dotScale: {
      type: Number,
      default: 1
    },
    autoColor: {
      type: [Boolean, String],
      default: true
    },
    binarize: {
      type: [Boolean, String],
      default: false
    },
    binarizeThreshold: {
      type: Number,
      default: 128
    },
    callback: {
      type: Function,
      default: function() {
        return void 0;
      }
    },
    bindElement: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: "#FFFFFF"
    },
    components: {
      default: function() {
        return {
          data: {
            scale: 1
          },
          timing: {
            scale: 1,
            protectors: false
          },
          alignment: {
            scale: 1,
            protectors: false
          },
          cornerAlignment: {
            scale: 1,
            protectors: true
          }
        };
      }
    }
  },
  name: "vue-qr",
  data() {
    return {
      imgUrl: ""
    };
  },
  watch: {
    $props: {
      deep: true,
      handler() {
        this.main();
      }
    }
  },
  mounted() {
    this.main();
  },
  methods: {
    async main() {
      if (this.gifBgSrc) {
        const gifImg = await readAsArrayBuffer(this.gifBgSrc);
        const logoImg2 = this.logoSrc;
        this.render(void 0, logoImg2, gifImg);
        return;
      }
      const bgImg = this.bgSrc;
      const logoImg = this.logoSrc;
      this.render(bgImg, logoImg);
    },
    async render(img, logoImg, gifBgSrc) {
      const that = this;
      new AwesomeQR({
        gifBackground: gifBgSrc,
        text: that.text,
        size: that.size,
        margin: that.margin,
        colorDark: that.colorDark,
        colorLight: that.colorLight,
        backgroundColor: that.backgroundColor,
        backgroundImage: img,
        backgroundDimming: that.backgroundDimming,
        logoImage: logoImg,
        logoScale: that.logoScale,
        logoBackgroundColor: that.logoBackgroundColor,
        correctLevel: that.correctLevel,
        logoMargin: that.logoMargin,
        logoCornerRadius: that.logoCornerRadius,
        whiteMargin: toBoolean(that.whiteMargin),
        dotScale: that.dotScale,
        autoColor: toBoolean(that.autoColor),
        binarize: toBoolean(that.binarize),
        binarizeThreshold: that.binarizeThreshold,
        components: that.components
      }).draw().then((dataUri) => {
        this.imgUrl = dataUri;
        that.callback && that.callback(dataUri, that.qid);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.bindElement) {
    _push(`<img${ssrRenderAttrs(mergeProps({
      style: { "display": "inline-block" },
      src: $data.imgUrl
    }, _attrs))}>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vue-qr@4.0.9/node_modules/vue-qr/src/packages/vue-qr.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const VueQr = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "poster",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean },
    url: {},
    apikey: {},
    shareId: {}
  },
  emits: ["update:show", "update"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const showModel = useVModel(props, "show", emit);
    const defaultBg = `${baseUrl}/resource/image/other/ai_share_bg.png`;
    const bgUrl = ref(defaultBg);
    const title = ref("\u5FEB\u6765\u626B\u7801");
    const description = ref("\u548C\u6211\u7684\u667A\u80FD\u4F53\u5BF9\u8BDD\u5427");
    const uploadFileSuccess = (res) => {
      bgUrl.value = res.uri;
    };
    const posterRef = shallowRef();
    const link = computed(() => `${(void 0).origin}/chat/${props.apikey}`);
    const { lockFn: download, isLock } = useLockFn(async () => {
      try {
        await putReleaseSetBg({
          id: props.shareId,
          url: bgUrl.value
        });
        emit("update");
        await downloadHtml2Image(posterRef.value);
      } catch (error) {
        feedback.msgError("\u4E0B\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
        return Promise.reject();
      }
    });
    const useDefaultBg = () => {
      bgUrl.value = defaultBg;
    };
    watch(
      () => props.url,
      (value) => {
        if (!value) {
          bgUrl.value = defaultBg;
        } else {
          bgUrl.value = value;
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElDialog = ElDialog;
      const _component_Upload = __nuxt_component_1;
      const _component_el_button = ElButton;
      const _component_el_input = ElInput;
      _push(ssrRenderComponent(_component_ElDialog, mergeProps({
        modelValue: unref(showModel),
        "onUpdate:modelValue": ($event) => isRef(showModel) ? showModel.value = $event : null,
        title: "\u751F\u6210\u6D77\u62A5",
        width: "400"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="poster relative" data-v-4f9d7aed${_scopeId}>`);
            if (unref(bgUrl)) {
              _push2(`<img class="object-cover w-full h-full"${ssrRenderAttr("src", unref(bgUrl))} data-v-4f9d7aed${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center" data-v-4f9d7aed${_scopeId}>`);
            _push2(ssrRenderComponent(VueQr, {
              text: unref(link),
              size: "200",
              class: "rounded-[10px]",
              dotScale: "1",
              margin: "12"
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-center text-white mt-[15px] text-[18px] font-bold" data-v-4f9d7aed${_scopeId}><div data-v-4f9d7aed${_scopeId}>${ssrInterpolate(unref(title))}</div><div data-v-4f9d7aed${_scopeId}>${ssrInterpolate(unref(description))}</div></div></div></div><div class="flex py-3 ml-[-5px] items-center" data-v-4f9d7aed${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Upload, {
              limit: 1,
              onSuccess: uploadFileSuccess
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_button, {
                    type: "primary",
                    link: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE`);
                      } else {
                        return [
                          createTextVNode("\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_button, {
                      type: "primary",
                      link: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex-1 ml-3" data-v-4f9d7aed${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              link: "",
              onClick: useDefaultBg
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u4F7F\u7528\u9ED8\u8BA4\u56FE`);
                } else {
                  return [
                    createTextVNode("\u4F7F\u7528\u9ED8\u8BA4\u56FE")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="text-tx-regular" data-v-4f9d7aed${_scopeId}>\u80CC\u666F\u56FE\u5C3A\u5BF8\uFF1A430*670</div></div><div class="" data-v-4f9d7aed${_scopeId}><div class="flex items-center" data-v-4f9d7aed${_scopeId}><div class="text-tx-regular flex-none mr-2" data-v-4f9d7aed${_scopeId}>\u6807\u9898</div>`);
            _push2(ssrRenderComponent(_component_el_input, {
              modelValue: unref(title),
              "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null,
              placeholder: "\u8BF7\u8F93\u5165\u80CC\u666F\u56FE\u5730\u5740"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center" data-v-4f9d7aed${_scopeId}><div class="text-tx-regular flex-none mr-2" data-v-4f9d7aed${_scopeId}>\u63CF\u8FF0</div>`);
            _push2(ssrRenderComponent(_component_el_input, {
              modelValue: unref(description),
              "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : null,
              placeholder: "\u8BF7\u8F93\u5165\u80CC\u666F\u56FE\u5730\u5740",
              class: "py-3"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div data-v-4f9d7aed${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              size: "large",
              class: "w-full",
              loading: unref(isLock),
              onClick: unref(download)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4FDD\u5B58 `);
                } else {
                  return [
                    createTextVNode(" \u4FDD\u5B58 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "poster relative",
                ref_key: "posterRef",
                ref: posterRef
              }, [
                unref(bgUrl) ? (openBlock(), createBlock("img", {
                  key: 0,
                  class: "object-cover w-full h-full",
                  src: unref(bgUrl)
                }, null, 8, ["src"])) : createCommentVNode("", true),
                createVNode("div", { class: "absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center" }, [
                  createVNode(VueQr, {
                    text: unref(link),
                    size: "200",
                    class: "rounded-[10px]",
                    dotScale: "1",
                    margin: "12"
                  }, null, 8, ["text"]),
                  createVNode("div", { class: "text-center text-white mt-[15px] text-[18px] font-bold" }, [
                    createVNode("div", null, toDisplayString(unref(title)), 1),
                    createVNode("div", null, toDisplayString(unref(description)), 1)
                  ])
                ])
              ], 512),
              createVNode("div", { class: "flex py-3 ml-[-5px] items-center" }, [
                createVNode(_component_Upload, {
                  limit: 1,
                  onSuccess: uploadFileSuccess
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_button, {
                      type: "primary",
                      link: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex-1 ml-3" }, [
                  createVNode(_component_el_button, {
                    type: "primary",
                    link: "",
                    onClick: useDefaultBg
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u4F7F\u7528\u9ED8\u8BA4\u56FE")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "text-tx-regular" }, "\u80CC\u666F\u56FE\u5C3A\u5BF8\uFF1A430*670")
              ]),
              createVNode("div", { class: "" }, [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode("div", { class: "text-tx-regular flex-none mr-2" }, "\u6807\u9898"),
                  createVNode(_component_el_input, {
                    modelValue: unref(title),
                    "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null,
                    placeholder: "\u8BF7\u8F93\u5165\u80CC\u666F\u56FE\u5730\u5740"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "flex items-center" }, [
                  createVNode("div", { class: "text-tx-regular flex-none mr-2" }, "\u63CF\u8FF0"),
                  createVNode(_component_el_input, {
                    modelValue: unref(description),
                    "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : null,
                    placeholder: "\u8BF7\u8F93\u5165\u80CC\u666F\u56FE\u5730\u5740",
                    class: "py-3"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ]),
              createVNode("div", null, [
                createVNode(_component_el_button, {
                  type: "primary",
                  size: "large",
                  class: "w-full",
                  loading: unref(isLock),
                  onClick: unref(download)
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u4FDD\u5B58 ")
                  ]),
                  _: 1
                }, 8, ["loading", "onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-release/poster.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Poster = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4f9d7aed"]]);

export { Poster as default };
//# sourceMappingURL=poster-5CDeCzu_.mjs.map
