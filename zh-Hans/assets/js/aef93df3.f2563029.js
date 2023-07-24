"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[10278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={description:"CONCEPTS"},c="\u9644\u52a0\u5c5e\u6027",i={unversionedId:"concepts/attached-property",id:"concepts/attached-property",title:"\u9644\u52a0\u5c5e\u6027",description:"CONCEPTS",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/attached-property.md",sourceDirName:"concepts",slug:"/concepts/attached-property",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/attached-property",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/concepts/attached-property.md",tags:[],version:"current",frontMatter:{description:"CONCEPTS"},sidebar:"documentationSidebar",previous:{title:"\u5e94\u7528\u7a0b\u5e8f\u751f\u547d\u5468\u671f",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/application-lifetimes"},next:{title:"\u63a7\u4ef6\u6811",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/control-trees"}},p={},l=[{value:"\u9644\u52a0\u63a7\u4ef6",id:"\u9644\u52a0\u63a7\u4ef6",level:2},{value:"\u5e03\u5c40\u63a7\u4ef6",id:"\u5e03\u5c40\u63a7\u4ef6",level:2}],s={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u9644\u52a0\u5c5e\u6027"},"\u9644\u52a0\u5c5e\u6027"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Avalonia UI")," \u63a7\u4ef6\u652f\u6301",(0,a.kt)("strong",{parentName:"p"},"\u9644\u52a0\u5c5e\u6027"),"\u7684\u6982\u5ff5\u3002\u8fd9\u662f\u5e94\u7528\u4e8e\u5b50\u63a7\u4ef6\u7684\u5c5e\u6027\uff0c\u5b83\u5f15\u7528\u5176\u5bb9\u5668\u63a7\u4ef6\u3002"),(0,a.kt)("p",null,"\u5728 XMAL \u4e2d\uff0c\u9644\u52a0\u5c5e\u6027\u88ab\u5b9a\u4e49\u4e3a\u5b50\u63a7\u4ef6\u5143\u7d20\u7684\u5c5e\u6027\uff0c\u4f7f\u7528\u4ee5\u4e0b\u683c\u5f0f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},'ContainerClassName.AttachedPropertyName="value"')),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u4f7f\u7528\u9644\u52a0\u5c5e\u6027\u7684\u573a\u666f\uff1a"),(0,a.kt)("h2",{id:"\u9644\u52a0\u63a7\u4ef6"},"\u9644\u52a0\u63a7\u4ef6"),(0,a.kt)("p",null,"\u9644\u52a0\u63a7\u4ef6\u662f\u9644\u52a0\u5230\u201c\u4e3b\u63a7\u4ef6\u201d\u4e0a\u7684\u989d\u5916\u63a7\u4ef6\uff0c\u7528\u4e8e\u67d0\u4e9b\u76ee\u7684\u3002\u8fd9\u53ef\u4ee5\u5728\u63a7\u4ef6\u901a\u5e38\u53ea\u5141\u8bb8\u4e00\u4e2a\u5b50\u63a7\u4ef6\u5728\u5176\u5185\u5bb9\u533a\u57df\u65f6\u4f7f\u7528\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u9644\u52a0\u63a7\u4ef6\u4e0d\u88ab\u89c6\u4e3a\u5185\u5bb9\u7684\u4e00\u90e8\u5206\uff0c\u4f46\u5bb9\u5668\u4f1a\u4ee5\u5176\u4ed6\u65b9\u5f0f\u4f7f\u7528\u5b83\u3002\u793a\u4f8b\u5305\u62ec\uff1a\u4e0a\u4e0b\u6587\u83dc\u5355\u3001\u5de5\u5177\u63d0\u793a\u548c\u5f39\u51fa\u7a97\u53e3\u3002"),(0,a.kt)("img",{src:"/img/gitbook-import/assets/image (9).png",alt:""}),(0,a.kt)("h2",{id:"\u5e03\u5c40\u63a7\u4ef6"},"\u5e03\u5c40\u63a7\u4ef6"),(0,a.kt)("p",null,"\u9644\u52a0\u5e03\u5c40\u5c5e\u6027\u7528\u4e8e\u5bb9\u5668\u63a7\u4ef6\u9700\u8981\u4e86\u89e3\u5c06\u8981\u6392\u5217\u7684\u5b50\u63a7\u4ef6\u7684\u60c5\u51b5\u7684\u573a\u666f\u3002\u793a\u4f8b\u5305\u62ec\uff1a\u7f51\u683c\u3001\u505c\u9760\u9762\u677f\u548c\u76f8\u5bf9\u9762\u677f\u3002"),(0,a.kt)("img",{src:"/img/gitbook-import/assets/image (17).png",alt:""}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u6709\u5173 ",(0,a.kt)("em",{parentName:"p"},"Avalonia UI")," \u5185\u7f6e\u63a7\u4ef6\u7684\u5b8c\u6574\u5217\u8868\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"../reference/controls/"},"\u6b64\u5904"),"\u7684\u53c2\u8003\u3002")))}d.isMDXComponent=!0}}]);