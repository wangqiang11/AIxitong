import{_ as M}from"./BUR_EBmg.js";import{bw as B,bA as E,E as R}from"./C3C96yZa.js";import S from"./CZY3sff5.js";import{T as D,e as N}from"./D2W69hOi.js";import{l as I,j as g,b as T,c as _,F as Z,n as $,M as f,a3 as v,a0 as r,Z as o,O as l,X as q,u as d,N as A}from"./D5LW44Rr.js";import{_ as F}from"./DlAUqK2U.js";import"./BT_wnIjX.js";import"./qIf4bXs6.js";const L={class:"h-[600px] rounded-[12px] border border-solid border-br-light relative"},O={class:"toolbar"},V={class:"toolbar-item"},W={class:"toolbar-item"},j={class:"toolbar-item"},Q={class:"toolbar-item"},U={class:"toolbar-item"},X=I({__name:"mind-map",props:{content:{default:""},quote:{default:()=>[]}},setup(y){const u=y,w=new D,k=g(),z=g(),C=B(),m=T(!1);let t=null;const h=n=>{const e=/(`{3}[\s\S]*?`{3}(?:(?!.)))|(`{3}[\s\S]*)|(`[\s\S]*?`{1}?)|(`[\s\S]*)|(?:\[(?:(?:number )|\^)?([\d]{1,2})\])/g;return n.replaceAll(e,function(i,a,c,s,G,x){const p=u.quote[Number(x)-1];return p?`<a href="${p.seeMoreUrl}" 
title="${p.title}"
target="_blank"
style="display: inline-block;
width: 15px;
height: 15px;
border-radius: 50%;
font-size: 12px;
text-align: center;
background-color: var(--el-fill-color-lighter);
text-align: center;
font-size: 9px;
color:var(--el-text-color-secondary);
text-decoration: none !important;
vertical-align: middle;
margin: 0 2px 3px;
cursor: pointer;
line-height: 16px;">${x}</a>`:""})},b=n=>{n=h(n);const{root:e}=w.transform(n);t==null||t.setData(e),t==null||t.fit()};return _(C,n=>{n?document.documentElement.classList.add("markmap-dark"):document.documentElement.classList.remove("markmap-dark")},{immediate:!0}),_(()=>u.content,b),Z(async()=>{await $(),t=N.create(k.value),b(u.content)}),_(m,async()=>{await $(),t==null||t.fit()}),(n,e)=>{const i=M,a=R;return f(),v(S,null,{title:r(()=>[o(i,{name:"local-icon-mind_map",size:16}),e[6]||(e[6]=l("span",{class:"text-2xl ml-1"}," 脑图 ",-1))]),default:r(()=>[l("div",L,[l("div",{ref_key:"svgWrapRef",ref:z,class:q(["w-full h-full",{"!fixed top-0 left-0 w-screen h-screen z-[9999] bg-body":d(m)}])},[l("div",O,[l("div",V,[d(m)?(f(),v(a,{key:0,link:"",onClick:e[0]||(e[0]=c=>m.value=!1)},{icon:r(()=>[o(i,{name:"local-icon-fullscreen-exit",size:18})]),_:1})):(f(),v(a,{key:1,link:"",onClick:e[1]||(e[1]=c=>m.value=!0)},{icon:r(()=>[o(i,{name:"local-icon-fullscreen",size:18})]),_:1}))]),l("div",W,[o(a,{link:"",onClick:e[2]||(e[2]=c=>{var s;return(s=d(t))==null?void 0:s.fit()})},{icon:r(()=>[o(i,{name:"el-icon-Refresh",size:20})]),_:1})]),l("div",j,[o(a,{link:"",onClick:e[3]||(e[3]=c=>{var s;return(s=d(t))==null?void 0:s.rescale(1.25)})},{icon:r(()=>[o(i,{name:"el-icon-ZoomIn",size:20})]),_:1})]),l("div",Q,[o(a,{link:"",onClick:e[4]||(e[4]=c=>{var s;return(s=d(t))==null?void 0:s.rescale(.8)})},{icon:r(()=>[o(i,{name:"el-icon-ZoomOut",size:20})]),_:1})]),l("div",U,[o(a,{link:"",onClick:e[5]||(e[5]=c=>d(E)(n.content))},{icon:r(()=>[o(i,{name:"el-icon-CopyDocument",size:20})]),_:1})])]),(f(),A("svg",{ref_key:"svgRef",ref:k,class:"w-full h-full"},null,512))],2)])]),_:1})}}}),ne=F(X,[["__scopeId","data-v-6ed9d3f4"]]);export{ne as default};
