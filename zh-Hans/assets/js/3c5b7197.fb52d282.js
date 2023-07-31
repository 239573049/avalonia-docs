"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[57420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},57665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i="Grid",c={unversionedId:"get-started/wpf/grid",id:"get-started/wpf/grid",title:"Grid",description:"\u5728Avalonia\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u5b57\u7b26\u4e32\u6765\u6307\u5b9a\u5217\u548c\u884c\u5b9a\u4e49\uff0c\u907f\u514d\u4e86WPF\u4e2d\u7b28\u91cd\u7684\u8bed\u6cd5\uff1a",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/get-started/wpf/grid.md",sourceDirName:"get-started/wpf",slug:"/get-started/wpf/grid",permalink:"/avalonia-docs/zh-Hans/docs/next/get-started/wpf/grid",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/get-started/wpf/grid.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"DependencyProperty",permalink:"/avalonia-docs/zh-Hans/docs/next/get-started/wpf/dependencyproperty"},next:{title:"\u4e8b\u4ef6\u96a7\u9053\u4f20\u64ad\uff08Tunnelling Events\uff09",permalink:"/avalonia-docs/zh-Hans/docs/next/get-started/wpf/tunnelling-events"}},l={},p=[],s={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grid"},"Grid"),(0,a.kt)("p",null,"\u5728Avalonia\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u5b57\u7b26\u4e32\u6765\u6307\u5b9a\u5217\u548c\u884c\u5b9a\u4e49\uff0c\u907f\u514d\u4e86WPF\u4e2d\u7b28\u91cd\u7684\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<Grid ColumnDefinitions="Auto,*,32" RowDefinitions="*,Auto">\n')),(0,a.kt)("p",null,"\u5728WPF\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Grid"),"\u7684\u4e00\u4e2a\u5e38\u89c1\u7528\u6cd5\u662f\u5c06\u4e24\u4e2a\u63a7\u4ef6\u5806\u53e0\u5728\u4e00\u8d77\u3002\u5728Avalonia\u4e2d\uff0c\u4e3a\u6b64\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Panel"),"\uff0c\u5b83\u6bd4",(0,a.kt)("inlineCode",{parentName:"p"},"Grid"),"\u66f4\u8f7b\u91cf\u7ea7\u3002"))}u.isMDXComponent=!0}}]);