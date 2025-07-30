import{E as i}from"./C3C96yZa.js";import{_ as r}from"./jkXhFcH6.js";import{P as s}from"./CquxfLG0.js";import{l as _,M as l,N as h,Z as t,a0 as e,a4 as u,a5 as m}from"./D5LW44Rr.js";const d=`
【接口地址】
请求方式: POST
接口地址: /api/v1/chat/completions
调用示例: http(s)://yourdomain.com/api/v1/chat/completions

【Body参数】
\`\`\` json
{
    "messages": [
        {
            "role": "user",
            "content": "你要提问的问题"
        }
    ]
}
\`\`\`

【Header参数】
Authorization: 此参数是发布渠道的 apikey (必须的)

【PHP代码示例】
\`\`\` php
public function chat()
{
    // 设置SSE响应
    header('Access-Control-Allow-Origin: *');
    header('Connection: keep-alive');
    header('Content-Type: text/event-stream');
    header('Cache-Control: no-cache');
    header('X-Accel-Buffering: no');
    
    // 处理响应回调
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

    // 请求的参数
    $data = [
        'messages'  => [
            ['role'=>'user', 'content'=>'你好吗?']
        ]
    ];

    // 请求头参数
    $headers  = [
        'Accept: application/json',
        'Content-Type: application/json',
        'Authorization: web-8b582192d72b20931b9142155d1476cc7Fnmp' // 此参数是 apikey (必须的)
    ];

    // 发起接口请求
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'http(s)://【你自己的域名】/api/v1/chat/completions');
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
`,$=`
【接口地址】
请求方式: POST
接口地址: /api/v1/chat/completions
调用示例: http(s)://yourdomain.com/api/v1/chat/completions

【参数说明】
open_ai_api_key:  apiKey密钥
open_ai_api_base: 请求的域名

\`\`\`
{
  "channel_type": "wx", // 渠道类型: wx=个人微信的意思
  "open_ai_api_key": "wx-f228079c92d0ab83548067bba13967d1xR1cu",          // 修改此处密钥
  "open_ai_api_base": "http(s)://yourdomain.com/api/v1", // 修改此处域名
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

【更详细的接入文档】
请参考官方产品对接微信文档。
`,f=`
【基础说明】
通过影刀RPA在微信或企业微信中模拟人类操作鼠标键盘进行智能体聊天

【影刀RPA】
应用地址: https://api.winrobot360.com/redirect/robot/share?inviteKey=39426041fae2e52c

【影刀RPA应用参数说明】
接口url: http(s)://yourdomain.com/api/v1/chat/completions（调用示例）
接口key: api密钥
微信昵称：群聊中充当AI客服的微信名称

【注意事项】
1，只能打开微信或者企业微信中的一个（最小化也算打开）
2，微信（或企业微信）窗口不能有遮挡，否则有可能发送不成功
3，微信昵称前增加@，便于影刀RPA监听群聊回复，例如'@AI客服'
4，企业微信需设置会话显示模式为消息气泡左对齐（设置-通用-会话显示模式-消息气泡左对齐）

【更详细的接入文档】
请参考官方产品对接影刀RPA文档。
`,C=_({__name:"call-description",props:{type:{type:String,default:""}},setup(o){const n={app:{name:"API调用说明",content:d},wx:{name:"微信调用说明",content:$},yd:{name:"影刀RPA调用说明",content:f}};return(R,P)=>{const a=i,c=r,p=s;return l(),h("div",null,[t(p,{ref:"popupRef",title:"调用说明","cancel-button-text":"","confirm-button-text":"",width:"900px"},{trigger:e(()=>[t(a,null,{default:e(()=>[u(m(n[o.type].name),1)]),_:1})]),default:e(()=>[t(c,{content:n[o.type].content},null,8,["content"])]),_:1},512)])}}});export{C as _};
