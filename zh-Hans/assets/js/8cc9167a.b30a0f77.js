"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[71879],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={description:"CONCEPTS"},c="\u6a21\u677f\u5316\u63a7\u4ef6",i={unversionedId:"concepts/templated-controls",id:"concepts/templated-controls",title:"\u6a21\u677f\u5316\u63a7\u4ef6",description:"CONCEPTS",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/templated-controls.md",sourceDirName:"concepts",slug:"/concepts/templated-controls",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/templated-controls",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/concepts/templated-controls.md",tags:[],version:"current",frontMatter:{description:"CONCEPTS"},sidebar:"documentationSidebar",previous:{title:"File Picker Options",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/services/storage-provider/file-picker-options"},next:{title:"\u4e3b\u9898",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/themes"}},l={},p=[],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6a21\u677f\u5316\u63a7\u4ef6"},"\u6a21\u677f\u5316\u63a7\u4ef6"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TemplatedControl"),"\u6700\u9002\u5408\u7528\u4e8e\u53ef\u4ee5\u5728\u5404\u79cd\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u5171\u4eab\u7684\u901a\u7528\u63a7\u4ef6\u3002\u5b83\u4eec\u662f\u65e0\u6837\u5f0f\u7684\u63a7\u4ef6\uff0c\u610f\u5473\u7740\u53ef\u4ee5\u4e3a\u4e0d\u540c\u7684\u4e3b\u9898\u548c\u5e94\u7528\u7a0b\u5e8f\u91cd\u65b0\u5b9a\u4e49\u6837\u5f0f\u3002Avalonia\u5b9a\u4e49\u7684\u5927\u591a\u6570\u6807\u51c6\u63a7\u4ef6\u90fd\u5c5e\u4e8e\u8fd9\u4e2a\u7c7b\u522b\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"TemplatedControl"),"\u63d0\u4f9b\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Style"),"\uff0c\u8bf7\u8bb0\u5f97\u901a\u8fc7",(0,o.kt)("a",{parentName:"p",href:"../basics/user-interface/styling/styles"},(0,o.kt)("inlineCode",{parentName:"a"},"StyleInclude")),"\u5c06\u6b64\u6587\u4ef6\u5305\u542b\u5728\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002"),(0,o.kt)("admonition",{type:"info"}))}d.isMDXComponent=!0}}]);