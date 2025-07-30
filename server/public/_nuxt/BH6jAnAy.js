import{_ as b}from"./jkXhFcH6.js";import{o as g,p as y}from"./C3C96yZa.js";import"./DP2rzg_V.js";/* empty css        */import{P as k}from"./CquxfLG0.js";import{l as C,j as m,m as s,M as E,N as $,Z as t,a0 as o,O as n,u as d}from"./D5LW44Rr.js";const R={class:"flex-1 min-w-0 rounded-md overflow-hidden"},B={class:"flex-1 min-w-0 rounded-md overflow-hidden"},J=C({__name:"js-embedding",props:{channelId:{}},emits:["confirm"],setup(f,{expose:p,emit:N}){const _=f,u=m(),r=m(),h=()=>{var e;(e=r.value)==null||e.open()},w=()=>{var e;(e=r.value)==null||e.close()},i=s(()=>`${location.origin}/chat/${_.channelId}`),v=s(()=>`\`\`\`html
<iframe 
    src="${i.value}" 
    class="chat-iframe"
    frameborder="0"
>
</iframe>
<style>
    /* iframe框默认占满全屏，可根据需求自行调整样式  */
    .chat-iframe {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        z-index: 9999;
    }
</style>
\`\`\``),x=s(()=>`\`\`\`html
<script>
    window.chat_iframe_src = '${i.value}'
    window.chat_iframe_width = '375px' //聊天窗口宽
    window.chat_iframe_height = '667px'  //聊天窗口高
    window.chat_icon_bg = '#3C5EFD' //聊天悬浮按钮背景
    window.chat_icon_color = '#fff' //聊天悬浮按钮颜色
    var js = document.createElement('script')
    js.type = 'text/javascript'
    js.async = true
    js.src = '${location.origin}/js-iframe.js'
    var header = document.getElementsByTagName('head')[0]
    header.appendChild(js)
<\/script>
\`\`\`
`);return p({open:h,close:w}),(e,a)=>{const l=b,c=g,j=y;return E(),$("div",null,[t(k,{ref_key:"popupRef",ref:r,title:"JS嵌入",async:!0,width:"900px","confirm-button-text":"","cancel-button-text":""},{default:o(()=>[t(j,{ref_key:"formRef",ref:u,"label-position":"top","label-width":"84px"},{default:o(()=>[t(c,null,{label:o(()=>a[0]||(a[0]=[n("div",{class:"flex items-start"},[n("div",{class:"mr-auto"}," 要在您网站的任何位置添加聊天智能体，请将此 iframe 添加到您的 html 代码中 ")],-1)])),default:o(()=>[n("div",R,[t(l,{content:d(v)},null,8,["content"])])]),_:1}),t(c,null,{label:o(()=>a[1]||(a[1]=[n("div",{class:"flex items-start"},[n("div",{class:"mr-auto"}," 要在您网站的右下角添加聊天气泡，请复制添加到您的 html中 ")],-1)])),default:o(()=>[n("div",B,[t(l,{content:d(x)},null,8,["content"])])]),_:1})]),_:1},512)]),_:1},512)])}}});export{J as _};
