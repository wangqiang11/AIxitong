import { P as Popup } from './index-BKj4TrcW.mjs';
import { d as ElButton } from './server.mjs';
import { _ as _sfc_main$1 } from './index-DRyhljQ3.mjs';
import { defineComponent, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './index-CzJm6kkT.mjs';
import './use-dialog-DHq_GjFf.mjs';
import '@vueuse/core';
import 'lodash-unified';
import './refs-CJvnaIJj.mjs';
import '@vue/shared';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import 'markdown-it';
import 'highlight.js';
import '@vscode/markdown-it-katex';

const AppContent = `
\u3010\u63A5\u53E3\u5730\u5740\u3011
\u8BF7\u6C42\u65B9\u5F0F: POST
\u63A5\u53E3\u5730\u5740: /api/v1/chat/completions
\u8C03\u7528\u793A\u4F8B: http(s)://yourdomain.com/api/v1/chat/completions

\u3010Body\u53C2\u6570\u3011
\`\`\` json
{
    "messages": [
        {
            "role": "user",
            "content": "\u4F60\u8981\u63D0\u95EE\u7684\u95EE\u9898"
        }
    ]
}
\`\`\`

\u3010Header\u53C2\u6570\u3011
Authorization: \u6B64\u53C2\u6570\u662F\u53D1\u5E03\u6E20\u9053\u7684 apikey (\u5FC5\u987B\u7684)

\u3010PHP\u4EE3\u7801\u793A\u4F8B\u3011
\`\`\` php
public function chat()
{
    // \u8BBE\u7F6ESSE\u54CD\u5E94
    header('Access-Control-Allow-Origin: *');
    header('Connection: keep-alive');
    header('Content-Type: text/event-stream');
    header('Cache-Control: no-cache');
    header('X-Accel-Buffering: no');
    
    // \u5904\u7406\u54CD\u5E94\u56DE\u8C03
    $response = true;
    $callback = function ($ch, $data) use (&$response, &$total) {
        if (str_starts_with($data, 'data:')) {
            echo $data;
        }

        if(!connection_aborted()){
            return strlen($data);
        } else {
            return 1;
        }
    };

    // \u8BF7\u6C42\u7684\u53C2\u6570
    $data = [
        'messages'  => [
            ['role'=>'user', 'content'=>'\u4F60\u597D\u5417?']
        ]
    ];

    // \u8BF7\u6C42\u5934\u53C2\u6570
    $headers  = [
        'Accept: application/json',
        'Content-Type: application/json',
        'Authorization: web-8b582192d72b20931b9142155d1476cc7Fnmp' // \u6B64\u53C2\u6570\u662F apikey (\u5FC5\u987B\u7684)
    ];

    // \u53D1\u8D77\u63A5\u53E3\u8BF7\u6C42
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'http(s)://\u3010\u4F60\u81EA\u5DF1\u7684\u57DF\u540D\u3011/api/v1/chat/completions');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_TIMEOUT, 100);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_WRITEFUNCTION, $callback);
    curl_exec($ch);
    curl_close($ch);

    if(true !== $response){
        throw new Exception($response);
    }

    exit();
}
\`\`\`
`;
const WXContent = `
\u3010\u63A5\u53E3\u5730\u5740\u3011
\u8BF7\u6C42\u65B9\u5F0F: POST
\u63A5\u53E3\u5730\u5740: /api/v1/chat/completions
\u8C03\u7528\u793A\u4F8B: http(s)://yourdomain.com/api/v1/chat/completions

\u3010\u53C2\u6570\u8BF4\u660E\u3011
open_ai_api_key:  apiKey\u5BC6\u94A5
open_ai_api_base: \u8BF7\u6C42\u7684\u57DF\u540D

\`\`\`
{
  "channel_type": "wx", // \u6E20\u9053\u7C7B\u578B: wx=\u4E2A\u4EBA\u5FAE\u4FE1\u7684\u610F\u601D
  "open_ai_api_key": "wx-f228079c92d0ab83548067bba13967d1xR1cu",          // \u4FEE\u6539\u6B64\u5904\u5BC6\u94A5
  "open_ai_api_base": "http(s)://yourdomain.com/api/v1", // \u4FEE\u6539\u6B64\u5904\u57DF\u540D
    "model": "gpt-3.5-turbo",
    "text_to_image": "dall-e-2",
    "voice_to_text": "openai",
    "text_to_voice": "openai",
    "proxy": "",
    "hot_reload": false,
    "single_chat_prefix": [
        "bot",
        "@bot"
    ],
    "single_chat_reply_prefix": "[bot] ",
    "group_chat_prefix": [
        "@bot"
    ]
    ......
}
\`\`\`

\u3010\u66F4\u8BE6\u7EC6\u7684\u63A5\u5165\u6587\u6863\u3011
\u8BF7\u53C2\u8003\u5B98\u65B9\u4EA7\u54C1\u5BF9\u63A5\u5FAE\u4FE1\u6587\u6863\u3002
`;
const YDContent = `
\u3010\u57FA\u7840\u8BF4\u660E\u3011
\u901A\u8FC7\u5F71\u5200RPA\u5728\u5FAE\u4FE1\u6216\u4F01\u4E1A\u5FAE\u4FE1\u4E2D\u6A21\u62DF\u4EBA\u7C7B\u64CD\u4F5C\u9F20\u6807\u952E\u76D8\u8FDB\u884C\u667A\u80FD\u4F53\u804A\u5929

\u3010\u5F71\u5200RPA\u3011
\u5E94\u7528\u5730\u5740: https://api.winrobot360.com/redirect/robot/share?inviteKey=39426041fae2e52c

\u3010\u5F71\u5200RPA\u5E94\u7528\u53C2\u6570\u8BF4\u660E\u3011
\u63A5\u53E3url: http(s)://yourdomain.com/api/v1/chat/completions\uFF08\u8C03\u7528\u793A\u4F8B\uFF09
\u63A5\u53E3key: api\u5BC6\u94A5
\u5FAE\u4FE1\u6635\u79F0\uFF1A\u7FA4\u804A\u4E2D\u5145\u5F53AI\u5BA2\u670D\u7684\u5FAE\u4FE1\u540D\u79F0

\u3010\u6CE8\u610F\u4E8B\u9879\u3011
1\uFF0C\u53EA\u80FD\u6253\u5F00\u5FAE\u4FE1\u6216\u8005\u4F01\u4E1A\u5FAE\u4FE1\u4E2D\u7684\u4E00\u4E2A\uFF08\u6700\u5C0F\u5316\u4E5F\u7B97\u6253\u5F00\uFF09
2\uFF0C\u5FAE\u4FE1\uFF08\u6216\u4F01\u4E1A\u5FAE\u4FE1\uFF09\u7A97\u53E3\u4E0D\u80FD\u6709\u906E\u6321\uFF0C\u5426\u5219\u6709\u53EF\u80FD\u53D1\u9001\u4E0D\u6210\u529F
3\uFF0C\u5FAE\u4FE1\u6635\u79F0\u524D\u589E\u52A0@\uFF0C\u4FBF\u4E8E\u5F71\u5200RPA\u76D1\u542C\u7FA4\u804A\u56DE\u590D\uFF0C\u4F8B\u5982'@AI\u5BA2\u670D'
4\uFF0C\u4F01\u4E1A\u5FAE\u4FE1\u9700\u8BBE\u7F6E\u4F1A\u8BDD\u663E\u793A\u6A21\u5F0F\u4E3A\u6D88\u606F\u6C14\u6CE1\u5DE6\u5BF9\u9F50\uFF08\u8BBE\u7F6E-\u901A\u7528-\u4F1A\u8BDD\u663E\u793A\u6A21\u5F0F-\u6D88\u606F\u6C14\u6CE1\u5DE6\u5BF9\u9F50\uFF09

\u3010\u66F4\u8BE6\u7EC6\u7684\u63A5\u5165\u6587\u6863\u3011
\u8BF7\u53C2\u8003\u5B98\u65B9\u4EA7\u54C1\u5BF9\u63A5\u5F71\u5200RPA\u6587\u6863\u3002
`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "call-description",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const contentList = {
      app: {
        name: "API\u8C03\u7528\u8BF4\u660E",
        content: AppContent
      },
      wx: {
        name: "\u5FAE\u4FE1\u8C03\u7528\u8BF4\u660E",
        content: WXContent
      },
      yd: {
        name: "\u5F71\u5200RPA\u8C03\u7528\u8BF4\u660E",
        content: YDContent
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_popup = Popup;
      const _component_ElButton = ElButton;
      const _component_Markdown = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_popup, {
        ref: "popupRef",
        title: "\u8C03\u7528\u8BF4\u660E",
        "cancel-button-text": "",
        "confirm-button-text": "",
        width: "900px"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(contentList[__props.type].name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(contentList[__props.type].name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElButton, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(contentList[__props.type].name), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Markdown, {
              content: contentList[__props.type].content
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Markdown, {
                content: contentList[__props.type].content
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-release/call-description.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=call-description-Dq-CqIt6.mjs.map
