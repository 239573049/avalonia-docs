"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[81854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(k,l(l({ref:t},s),{},{components:n})):o.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={},l="\u9009\u62e9\u81ea\u5b9a\u4e49\u63a7\u4ef6\u7c7b\u578b",i={unversionedId:"basics/user-interface/controls/creating-controls/choosing-a-custom-contro-type",id:"basics/user-interface/controls/creating-controls/choosing-a-custom-contro-type",title:"\u9009\u62e9\u81ea\u5b9a\u4e49\u63a7\u4ef6\u7c7b\u578b",description:"Avalonia\u63d0\u4f9b\u4e86\u591a\u79cd\u65b9\u6cd5\u6765\u521b\u5efa\u81ea\u5b9a\u4e49\u63a7\u4ef6\u4ee5\u6ee1\u8db3\u5e94\u7528\u7a0b\u5e8f\u7684\u7279\u5b9a\u9700\u6c42\u3002\u4e86\u89e3\u4e0d\u540c\u7c7b\u578b\u7684\u81ea\u5b9a\u4e49\u63a7\u4ef6\u5c06\u5e2e\u52a9\u60a8\u9009\u62e9\u6700\u5408\u9002\u7684\u65b9\u6cd5\u6765\u6ee1\u8db3\u60a8\u7684\u9700\u6c42\u3002\u5728Avalonia\u4e2d\uff0c\u5e38\u89c1\u7684\u81ea\u5b9a\u4e49\u63a7\u4ef6\u7c7b\u578b\u6709\u7528\u6237\u63a7\u4ef6\uff08UserControl\uff09\u3001\u6a21\u677f\u63a7\u4ef6\uff08TemplatedControl\uff09\u548c\u81ea\u7ed8\u63a7\u4ef6\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/basics/user-interface/controls/creating-controls/choosing-a-custom-contro-type.md",sourceDirName:"basics/user-interface/controls/creating-controls",slug:"/basics/user-interface/controls/creating-controls/choosing-a-custom-contro-type",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/controls/creating-controls/choosing-a-custom-contro-type",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/basics/user-interface/controls/creating-controls/choosing-a-custom-contro-type.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u5185\u7f6e\u63a7\u4ef6",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/controls/builtin-controls"},next:{title:"\u5b9a\u4e49\u5c5e\u6027",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/controls/creating-controls/defining-properties"}},p={},c=[{value:"\u7528\u6237\u63a7\u4ef6\uff08UserControl\uff09",id:"\u7528\u6237\u63a7\u4ef6usercontrol",level:2},{value:"\u6a21\u677f\u63a7\u4ef6\uff08Templated/Lookless Controls\uff09",id:"\u6a21\u677f\u63a7\u4ef6templatedlookless-controls",level:2},{value:"\u81ea\u7ed8\u63a7\u4ef6",id:"\u81ea\u7ed8\u63a7\u4ef6",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u9009\u62e9\u81ea\u5b9a\u4e49\u63a7\u4ef6\u7c7b\u578b"},"\u9009\u62e9\u81ea\u5b9a\u4e49\u63a7\u4ef6\u7c7b\u578b"),(0,r.kt)("p",null,"Avalonia\u63d0\u4f9b\u4e86\u591a\u79cd\u65b9\u6cd5\u6765\u521b\u5efa\u81ea\u5b9a\u4e49\u63a7\u4ef6\u4ee5\u6ee1\u8db3\u5e94\u7528\u7a0b\u5e8f\u7684\u7279\u5b9a\u9700\u6c42\u3002\u4e86\u89e3\u4e0d\u540c\u7c7b\u578b\u7684\u81ea\u5b9a\u4e49\u63a7\u4ef6\u5c06\u5e2e\u52a9\u60a8\u9009\u62e9\u6700\u5408\u9002\u7684\u65b9\u6cd5\u6765\u6ee1\u8db3\u60a8\u7684\u9700\u6c42\u3002\u5728Avalonia\u4e2d\uff0c\u5e38\u89c1\u7684\u81ea\u5b9a\u4e49\u63a7\u4ef6\u7c7b\u578b\u6709\u7528\u6237\u63a7\u4ef6\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"UserControl"),"\uff09\u3001\u6a21\u677f\u63a7\u4ef6\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"TemplatedControl"),"\uff09\u548c\u81ea\u7ed8\u63a7\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u7528\u6237\u63a7\u4ef6usercontrol"},"\u7528\u6237\u63a7\u4ef6\uff08UserControl\uff09"),(0,r.kt)("p",null,"\u7528\u6237\u63a7\u4ef6\u662f\u5728Avalonia\u4e2d\u521b\u5efa\u81ea\u5b9a\u4e49\u63a7\u4ef6\u7684\u4e00\u79cd\u9ad8\u7ea7\u65b9\u6cd5\u3002\u5b83\u5141\u8bb8\u60a8\u901a\u8fc7\u7ec4\u5408\u73b0\u6709\u63a7\u4ef6\u5e76\u4f7f\u7528XAML\u5b9a\u4e49\u5e03\u5c40\u6765\u6784\u5efa\u4e00\u4e2a\u63a7\u4ef6\u3002\u7528\u6237\u63a7\u4ef6\u5145\u5f53\u4e00\u4e2a\u5bb9\u5668\uff0c\u5c01\u88c5\u4e86\u591a\u4e2a\u63a7\u4ef6\uff0c\u5e76\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8fde\u8d2f\u7684\u7528\u6237\u754c\u9762\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u901a\u5e38\uff0c\u7528\u6237\u63a7\u4ef6\u7528\u4e8e\u8868\u793a\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u4e13\u7528\u89c6\u56fe\uff0c\u6bd4\u5982\u201c\u7528\u6237\u8be6\u7ec6\u4fe1\u606f\u89c6\u56fe\u201d\uff0c\u800c\u4e0d\u662f\u7528\u4f5c\u901a\u7528\u7684\u7528\u6237\u754c\u9762\u5143\u7d20\u3002")),(0,r.kt)("p",null,"\u521b\u5efa\u7528\u6237\u63a7\u4ef6\u9700\u8981\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5b9a\u4e49XAML"),"\uff1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"UserControl")," XAML\u6587\u4ef6\uff0c\u901a\u8fc7\u653e\u7f6e\u63a7\u4ef6\u3001\u8bbe\u7f6e\u5c5e\u6027\u548c\u5e94\u7528\u6837\u5f0f\u6765\u5b9a\u4e49\u63a7\u4ef6\u7684\u5e03\u5c40\u548c\u5916\u89c2\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Code-behind"),"\uff1a\u53ef\u9009\u9879\uff0c\u60a8\u53ef\u4ee5\u5b9a\u4e49\u989d\u5916\u7684\u4ee3\u7801\u540e\u53f0\u903b\u8f91\u6765\u5904\u7406\u4e8b\u4ef6\u3001\u4fee\u6539\u884c\u4e3a\u6216\u4e3a\u7528\u6237\u63a7\u4ef6\u63d0\u4f9b\u989d\u5916\u7684\u529f\u80fd\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u91cd\u7528\u548c\u5b9a\u5236"),': \u7528\u6237\u63a7\u4ef6\u53ef\u4ee5\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u8f7b\u677e\u91cd\u7528\u548c\u5b9a\u5236\u3002\u5f53\u60a8\u5e0c\u671b\u5c01\u88c5\u4e00\u7ec4\u7279\u5b9a\u7684\u63a7\u4ef6\u548c\u884c\u4e3a\u4e3a\u53ef\u91cd\u7528\u7684\u7ec4\u4ef6\u6216"\u89c6\u56fe"\u65f6\uff0c\u5b83\u4eec\u7279\u522b\u6709\u7528\u3002'))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8981\u4e86\u89e3\u8fd9\u4e9b\u6982\u5ff5\u7684\u5b8c\u6574\u3001\u53ef\u8fd0\u884c\u7684\u793a\u4f8b\uff0c\u8bf7\u67e5\u770b",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/AvaloniaUI.QuickGuides/tree/main/CustomControl"},"\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f"),".")),(0,r.kt)("h2",{id:"\u6a21\u677f\u63a7\u4ef6templatedlookless-controls"},"\u6a21\u677f\u63a7\u4ef6\uff08Templated/Lookless Controls\uff09"),(0,r.kt)("p",null,"\u6a21\u677f\u63a7\u4ef6\uff08\u4e5f\u79f0\u4e3a\u201cLookless\u63a7\u4ef6\u201d\uff09\u4e3a\u5728Avalonia\u4e2d\u521b\u5efa\u81ea\u5b9a\u4e49\u63a7\u4ef6\u63d0\u4f9b\u4e86\u66f4\u9ad8\u7ea7\u548c\u53ef\u81ea\u5b9a\u4e49\u7684\u65b9\u6cd5\u3002\u6a21\u677f\u63a7\u4ef6\u5c06\u63a7\u4ef6\u7684\u884c\u4e3a\u548c\u903b\u8f91\u4e0e\u5176\u53ef\u89c6\u5916\u89c2\u5206\u79bb\uff0c\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458\u901a\u8fc7\u63a7\u4ef6\u6a21\u677f\u8fdb\u884c\u6837\u5f0f\u5316\u548c\u6a21\u677f\u5316\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u6a21\u677f\u63a7\u4ef6\uff0c\u60a8\u5728code-behind\u7c7b\u4e2d\u5b9a\u4e49\u63a7\u4ef6\u7684\u884c\u4e3a\u548c\u5c5e\u6027\uff0c\u800c\u89c6\u89c9\u5916\u89c2\u5219\u901a\u8fc7\u5728XAML\u4e2d\u5b9a\u4e49\u63a7\u4ef6\u6a21\u677f\u6765\u6307\u5b9a\u3002\u8fd9\u79cd\u5206\u79bb\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458\u81ea\u5b9a\u4e49\u63a7\u4ef6\u7684\u5916\u89c2\u548c\u7ed9\u4eba\u7684\u611f\u89c9\uff0c\u800c\u4e0d\u4f1a\u4fee\u6539\u5176\u5e95\u5c42\u884c\u4e3a\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6a21\u677f\u63a7\u4ef6\u901a\u5e38\u7528\u4e8e\u901a\u7528\u7684\u7528\u6237\u754c\u9762\u5143\u7d20\uff0c\u4e0d\u7279\u5b9a\u4e8e\u4e1a\u52a1\u903b\u8f91\uff0c\u53ef\u80fd\u9700\u8981\u4e0d\u540c\u7684\u4e3b\u9898\u6216\u89c6\u89c9\u6837\u5f0f\u3002Avalonia\u63d0\u4f9b\u7684\u5927\u591a\u6570",(0,r.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/controls/builtin-controls"},"\u5185\u7f6e\u63a7\u4ef6"),"\u90fd\u662f\u6a21\u677f\u63a7\u4ef6\u3002")),(0,r.kt)("p",null,"\u521b\u5efa\u6a21\u677f\u63a7\u4ef6\u9700\u8981\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5b9a\u4e49\u63a7\u4ef6\u7c7b"),"\uff1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7c7b\uff0c\u8be5\u7c7b\u6d3e\u751f\u81ea",(0,r.kt)("inlineCode",{parentName:"p"},"TemplatedControl"),"\u3002\u8fd9\u4e2a\u7c7b\u5b9a\u4e49\u4e86\u63a7\u4ef6\u7684\u884c\u4e3a\u3001\u5c5e\u6027\u548c\u4e8b\u4ef6\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u63a7\u4ef6\u6a21\u677f"),"\uff1a\u5728XAML\u4e2d\u521b\u5efa\u4e00\u4e2a",(0,r.kt)("a",{parentName:"p",href:"control-themes"},(0,r.kt)("inlineCode",{parentName:"a"},"ControlTheme")),"\uff0c\u6307\u5b9a\u63a7\u4ef6\u7684\u89c6\u89c9\u5916\u89c2\u548c\u7ed3\u6784\u3002\u63a7\u4ef6\u6a21\u677f\u5b9a\u4e49\u4e86\u63a7\u4ef6\u7684\u90e8\u5206\u4ee5\u53ca\u5b83\u4eec\u5e94\u8be5\u5982\u4f55\u88ab\u6837\u5f0f\u5316\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6837\u5f0f\u548c\u6a21\u677f\u5316"),"\uff1a\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u63a7\u4ef6\u6a21\u677f\u6216\u5e94\u7528\u6837\u5f0f\u6765\u81ea\u5b9a\u4e49\u63a7\u4ef6\u7684\u5916\u89c2\u3002\u8fd9\u6837\u53ef\u4ee5\u5b9e\u73b0\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7edf\u4e00\u548c\u7edf\u4e00\u7684\u89c6\u89c9\u8bbe\u8ba1\u3002"))),(0,r.kt)("p",null,"\u6a21\u677f\u63a7\u4ef6\u63d0\u4f9b\u4e86\u66f4\u5927\u7684\u7075\u6d3b\u6027\u548c\u53ef\u91cd\u7528\u6027\uff0c\u4f7f\u5b83\u4eec\u975e\u5e38\u9002\u5408\u60a8\u5e0c\u671b\u63d0\u4f9b\u4e00\u4e2a\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u89c6\u89c9\u4e3b\u9898\u8fdb\u884c\u6837\u5f0f\u5316\u6216\u9002\u5e94\u5404\u79cd\u7528\u6237\u504f\u597d\u7684\u63a7\u4ef6\u7684\u573a\u666f\u3002"),(0,r.kt)("h2",{id:"\u81ea\u7ed8\u63a7\u4ef6"},"\u81ea\u7ed8\u63a7\u4ef6"),(0,r.kt)("p",null,"\u81ea\u7ed8\u63a7\u4ef6\u5728Avalonia\u4e2d\u63d0\u4f9b\u4e86\u6700\u9ad8\u7ea7\u522b\u7684\u5b9a\u5236\u3002\u4f7f\u7528\u81ea\u7ed8\u63a7\u4ef6\uff0c\u60a8\u53ef\u4ee5\u5b8c\u5168\u63a7\u5236\u63a7\u4ef6\u7684\u89c6\u89c9\u5143\u7d20\u7684\u6e32\u67d3\uff0c\u4ece\u800c\u521b\u5efa\u72ec\u7279\u800c\u590d\u6742\u7684\u89c6\u89c9\u5916\u89c2\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u81ea\u7ed8\u63a7\u4ef6\u901a\u5e38\u7528\u4e8e\u8868\u793a\u5927\u90e8\u5206\u975e\u4ea4\u4e92\u5f0f\u7684\u56fe\u5f62\u5143\u7d20\uff0c\u4e0d\u9700\u8981\u8fdb\u884c\u4e3b\u9898\u5316\u3002")),(0,r.kt)("p",null,"\u8981\u521b\u5efa\u81ea\u7ed8\u63a7\u4ef6\uff0c\u60a8\u9700\u8981\u91cd\u5199\u63a7\u4ef6\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"OnRender"),"\u65b9\u6cd5\uff0c\u5e76\u4f7f\u7528\u4f4e\u7ea7\u522b\u7684\u7ed8\u5236API\uff08\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"DrawingContext"),"\uff09\u6765\u5b9a\u4e49\u63a7\u4ef6\u7684\u5916\u89c2\u3002\u8fd9\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5bf9\u63a7\u4ef6\u7684\u6bcf\u4e2a\u50cf\u7d20\u8fdb\u884c\u7cbe\u7ec6\u63a7\u5236\uff0c\u5b9e\u73b0\u9ad8\u5ea6\u4e2a\u6027\u5316\u7684\u53ef\u89c6\u5316\u3002"),(0,r.kt)("p",null,"\u521b\u5efa\u81ea\u7ed8\u63a7\u4ef6\u7684\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5b9a\u4e49\u63a7\u4ef6\u7c7b"),"\uff1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7c7b\uff0c\u8be5\u7c7b\u6d3e\u751f\u81ea",(0,r.kt)("inlineCode",{parentName:"p"},"Control"),"\u3002\u8fd9\u4e2a\u7c7b\u5c06\u5b9a\u4e49\u63a7\u4ef6\u7684\u884c\u4e3a\u548c\u6e32\u67d3\u903b\u8f91\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u91cd\u5199OnRender\u65b9\u6cd5"),"\uff1a\u5728\u63a7\u4ef6\u7c7b\u4e2d\u91cd\u5199",(0,r.kt)("inlineCode",{parentName:"p"},"OnRender"),"\u65b9\u6cd5\uff0c\u5e76\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"DrawingContext"),"\u6765\u7ed8\u5236\u63a7\u4ef6\u7684\u5185\u5bb9\u3002"))))}u.isMDXComponent=!0}}]);