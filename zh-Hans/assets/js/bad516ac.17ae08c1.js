"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[42793],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),v=l,m=d["".concat(p,".").concat(v)]||d[v]||u[v]||r;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=v;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},84203:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=t(87462),l=(t(67294),t(3905));const r={description:"CONCEPTS"},i="\u9876\u7ea7\u63a7\u4ef6",o={unversionedId:"concepts/toplevel",id:"concepts/toplevel",title:"\u9876\u7ea7\u63a7\u4ef6",description:"CONCEPTS",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/toplevel.md",sourceDirName:"concepts",slug:"/concepts/toplevel",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/toplevel",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/concepts/toplevel.md",tags:[],version:"current",frontMatter:{description:"CONCEPTS"},sidebar:"documentationSidebar",previous:{title:"\u672a\u5904\u7406\u7684\u5f02\u5e38",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/unhandledexceptions"},next:{title:"\u89c6\u56fe\u5b9a\u4f4d\u5668",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/view-locator"}},p={},s=[{value:"\u83b7\u53d6\u9876\u7ea7\u63a7\u4ef6",id:"\u83b7\u53d6\u9876\u7ea7\u63a7\u4ef6",level:2},{value:"\u4f7f\u7528TopLevel.GetTopLevel",id:"\u4f7f\u7528toplevelgettoplevel",level:3},{value:"\u4f7f\u7528Window\u7c7b",id:"\u4f7f\u7528window\u7c7b",level:3},{value:"\u5e38\u89c1\u5c5e\u6027",id:"\u5e38\u89c1\u5c5e\u6027",level:2},{value:"ActualTransparencyLevel",id:"actualtransparencylevel",level:3},{value:"ClientSize",id:"clientsize",level:3},{value:"Clipboard",id:"clipboard",level:3},{value:"FocusManager",id:"focusmanager",level:3},{value:"FrameSize",id:"framesize",level:3},{value:"InsetsManager",id:"insetsmanager",level:3},{value:"PlatformSettings",id:"platformsettings",level:3},{value:"RendererDiagnostics",id:"rendererdiagnostics",level:3},{value:"RenderScaling",id:"renderscaling",level:3},{value:"RequestedThemeVariant",id:"requestedthemevariant",level:3},{value:"StorageProvider",id:"storageprovider",level:3},{value:"TransparencyBackgroundFallback",id:"transparencybackgroundfallback",level:3},{value:"TransparencyLevelHint",id:"transparencylevelhint",level:3},{value:"\u5e38\u89c1\u4e8b\u4ef6",id:"\u5e38\u89c1\u4e8b\u4ef6",level:2},{value:"BackRequested",id:"backrequested",level:3},{value:"Closed",id:"closed",level:3},{value:"Opened",id:"opened",level:3},{value:"ScalingChanged",id:"scalingchanged",level:3},{value:"\u5e38\u89c1\u65b9\u6cd5",id:"\u5e38\u89c1\u65b9\u6cd5",level:2},{value:"GetTopLevel",id:"gettoplevel",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"RequestAnimationFrame",id:"requestanimationframe",level:3},{value:"RequestPlatformInhibition",id:"requestplatforminhibition",level:3},{value:"TryGetPlatformHandle",id:"trygetplatformhandle",level:3},{value:"\u66f4\u591a\u4fe1\u606f",id:"\u66f4\u591a\u4fe1\u606f",level:2}],c={toc:s},d="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u9876\u7ea7\u63a7\u4ef6"},"\u9876\u7ea7\u63a7\u4ef6"),(0,l.kt)("p",null,"\u9876\u7ea7\u63a7\u4ef6\u5145\u5f53\u89c6\u89c9\u6839\uff0c\u5e76\u4e14\u662f\u6240\u6709\u9876\u7ea7\u63a7\u4ef6\uff08\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"Window"),"\uff09\u7684\u57fa\u7c7b\u3002\u5b83\u5904\u7406\u5e03\u5c40\u3001\u6837\u5f0f\u548c\u6e32\u67d3\u7684\u8c03\u5ea6\uff0c\u4ee5\u53ca\u8ddf\u8e2a\u5ba2\u6237\u7aef\u5927\u5c0f\u3002\u5927\u591a\u6570\u670d\u52a1\u90fd\u901a\u8fc7\u9876\u7ea7\u63a7\u4ef6\u8bbf\u95ee\u3002"),(0,l.kt)("h2",{id:"\u83b7\u53d6\u9876\u7ea7\u63a7\u4ef6"},"\u83b7\u53d6\u9876\u7ea7\u63a7\u4ef6"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e24\u79cd\u5e38\u89c1\u7684\u8bbf\u95ee\u9876\u7ea7\u63a7\u4ef6\u5b9e\u4f8b\u7684\u65b9\u6cd5\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528toplevelgettoplevel"},"\u4f7f\u7528TopLevel.GetTopLevel"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528TopLevel\u7c7b\u7684\u9759\u6001",(0,l.kt)("inlineCode",{parentName:"p"},"GetTopLevel"),"\u65b9\u6cd5\u83b7\u53d6\u5305\u542b\u5f53\u524d\u63a7\u4ef6\u7684\u9876\u7ea7\u63a7\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"var topLevel = TopLevel.GetTopLevel(control);\n// \u5728\u6b64\u5904\uff0c\u60a8\u53ef\u4ee5\u4ecetopLevel\u5b9e\u4f8b\u5f15\u7528\u5404\u79cd\u670d\u52a1\uff0c\u5982Clipboard\u6216StorageProvider\u3002\n")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5728\u7528\u6237\u63a7\u4ef6\u6216\u8f83\u4f4e\u7ea7\u522b\u7684\u7ec4\u4ef6\u4e2d\u5de5\u4f5c\u5e76\u4e14\u9700\u8981\u8bbf\u95ee\u9876\u7ea7\u63a7\u4ef6\u7684\u670d\u52a1\uff0c\u6b64\u65b9\u6cd5\u53ef\u80fd\u4f1a\u6709\u6240\u5e2e\u52a9\u3002"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"TopLevel.GetTopLevel"),"\u8fd4\u56denull\uff0c\u5219\u53ef\u80fd\u63a7\u4ef6\u5c1a\u672a\u9644\u52a0\u5230\u6839\u3002\u4e3a\u786e\u4fdd\u63a7\u4ef6\u5df2\u9644\u52a0\uff0c\u60a8\u5e94\u8be5\u5904\u7406",(0,l.kt)("inlineCode",{parentName:"p"},"Control.Loaded"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Control.Unloaded"),"\u4e8b\u4ef6\uff0c\u5e76\u4ece\u8fd9\u4e9b\u4e8b\u4ef6\u4e2d\u8ddf\u8e2a\u5f53\u524d\u9876\u7ea7\u63a7\u4ef6\u3002")),(0,l.kt)("h3",{id:"\u4f7f\u7528window\u7c7b"},"\u4f7f\u7528Window\u7c7b"),(0,l.kt)("p",null,"\u7531\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"Window"),"\u7c7b\u7ee7\u627f\u81ea",(0,l.kt)("inlineCode",{parentName:"p"},"TopLevel"),"\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u76f4\u63a5\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"Window"),"\u5b9e\u4f8b\u8bbf\u95ee\u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"var topLevel = window;\n")),(0,l.kt)("p",null,"\u5f53\u60a8\u5df2\u7ecf\u5728\u7a97\u53e3\u7684\u4e0a\u4e0b\u6587\u4e2d\u5de5\u4f5c\u65f6\uff0c\u4f8b\u5982\u5728ViewModel\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"Window"),"\u7c7b\u4e2d\u7684\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4e2d\uff0c\u901a\u5e38\u4f1a\u4f7f\u7528\u6b64\u65b9\u6cd5\u3002"),(0,l.kt)("h2",{id:"\u5e38\u89c1\u5c5e\u6027"},"\u5e38\u89c1\u5c5e\u6027"),(0,l.kt)("h3",{id:"actualtransparencylevel"},"ActualTransparencyLevel"),(0,l.kt)("p",null,"\u83b7\u53d6\u5e73\u53f0\u80fd\u591f\u63d0\u4f9b\u7684\u5b9e\u9645",(0,l.kt)("inlineCode",{parentName:"p"},"WindowTransparencyLevel"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"WindowTransparencyLevel ActualTransparencyLevel { get; }\n")),(0,l.kt)("h3",{id:"clientsize"},"ClientSize"),(0,l.kt)("p",null,"\u83b7\u53d6\u7a97\u53e3\u7684\u5ba2\u6237\u7aef\u5927\u5c0f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"Size ClientSize { get; }\n")),(0,l.kt)("h3",{id:"clipboard"},"Clipboard"),(0,l.kt)("p",null,"\u83b7\u53d6\u5e73\u53f0\u7684",(0,l.kt)("a",{parentName:"p",href:"./services/clipboard"},"Clipboard"),"\u5b9e\u73b0\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"IClipboard? Clipboard { get; }\n")),(0,l.kt)("h3",{id:"focusmanager"},"FocusManager"),(0,l.kt)("p",null,"\u83b7\u53d6\u6839\u7684",(0,l.kt)("a",{parentName:"p",href:"./services/focus-manager"},"\u7126\u70b9\u7ba1\u7406\u5668"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"IFocusManager? FocusManager { get; }\n")),(0,l.kt)("h3",{id:"framesize"},"FrameSize"),(0,l.kt)("p",null,"\u83b7\u53d6\u9876\u7ea7\u63a7\u4ef6\u7684\u603b\u5927\u5c0f\uff0c\u5305\u62ec\u7cfb\u7edf\u6846\u67b6\uff08\u5982\u679c\u6709\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"Size? FrameSize { get; }\n")),(0,l.kt)("h3",{id:"insetsmanager"},"InsetsManager"),(0,l.kt)("p",null,"\u83b7\u53d6\u5e73\u53f0\u7684",(0,l.kt)("a",{parentName:"p",href:"./services/insets-manager"},"InsetsManager"),"\u5b9e\u73b0\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"IInsetsManager? InsetsManager { get; }\n")),(0,l.kt)("h3",{id:"platformsettings"},"PlatformSettings"),(0,l.kt)("p",null,"\u8868\u793a\u8bbf\u95ee\u9876\u7ea7",(0,l.kt)("a",{parentName:"p",href:"./services/platform-settings"},"\u5e73\u53f0\u7279\u5b9a\u8bbe\u7f6e"),"\u7684\u5951\u7ea6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"IPlatformSettings? PlatformSettings { get; }\n")),(0,l.kt)("h3",{id:"rendererdiagnostics"},"RendererDiagnostics"),(0,l.kt)("p",null,"\u83b7\u53d6\u4e00\u4e2a\u503c\uff0c\u6307\u793a\u6e32\u67d3\u5668\u662f\u5426\u5e94\u7ed8\u5236\u7279\u5b9a\u7684\u8bca\u65ad\u4fe1\u606f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"RendererDiagnostics RendererDiagnostics { get; }\n")),(0,l.kt)("h3",{id:"renderscaling"},"RenderScaling"),(0,l.kt)("p",null,"\u83b7\u53d6\u7528\u4e8e\u6e32\u67d3\u7684\u7f29\u653e\u56e0\u5b50\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"double RenderScaling { get; }\n")),(0,l.kt)("h3",{id:"requestedthemevariant"},"RequestedThemeVariant"),(0,l.kt)("p",null,"\u83b7\u53d6\u6216\u8bbe\u7f6e\u63a7\u4ef6\uff08\u53ca\u5176\u5b50\u5143\u7d20\uff09\u7528\u4e8e\u8d44\u6e90\u786e\u5b9a\u7684UI\u4e3b\u9898\u53d8\u4f53\u3002\u60a8\u4f7f\u7528ThemeVariant\u6307\u5b9a\u7684UI\u4e3b\u9898\u53ef\u4ee5\u8986\u76d6\u5e94\u7528\u7a0b\u5e8f\u7ea7\u522b\u7684ThemeVariant\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"ThemeVariant? RequestedThemeVariant { get; set; }\n")),(0,l.kt)("h3",{id:"storageprovider"},"StorageProvider"),(0,l.kt)("p",null,"\u7528\u4e8e\u6587\u4ef6\u9009\u62e9\u5668\u548c\u4e66\u7b7e\u7684",(0,l.kt)("a",{parentName:"p",href:"./services/storage-provider/"},"\u6587\u4ef6\u7cfb\u7edf\u5b58\u50a8"),"\u670d\u52a1\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"IStorageProvider StorageProvider { get; }\n")),(0,l.kt)("h3",{id:"transparencybackgroundfallback"},"TransparencyBackgroundFallback"),(0,l.kt)("p",null,"\u83b7\u53d6\u6216\u8bbe\u7f6e\u5f53\u4e0d\u652f\u6301\u900f\u660e\u5ea6\u65f6\uff0c\u900f\u660e\u5ea6\u5c06\u4e0e\u4e4b\u6df7\u5408\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"IBrush"),"\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u662f\u4e00\u4e2a\u7eaf\u767d\u8272\u7684\u753b\u5237\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"IBrush TransparencyBackgroundFallback { get; set; }\n")),(0,l.kt)("h3",{id:"transparencylevelhint"},"TransparencyLevelHint"),(0,l.kt)("p",null,"\u83b7\u53d6\u6216\u8bbe\u7f6eTopLevel\u5728\u53ef\u80fd\u7684\u60c5\u51b5\u4e0b\u5e94\u4f7f\u7528\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"WindowTransparencyLevel"),'\u3002\u63a5\u53d7\u591a\u4e2a\u503c\uff0c\u6309\u7167\u56de\u9000\u987a\u5e8f\u5e94\u7528\u3002\u4f8b\u5982\uff0c\u4f7f\u7528"Mica\uff0cBlur"\uff0cMica\u4ec5\u5728\u652f\u6301\u5b83\u7684\u5e73\u53f0\u4e0a\u5e94\u7528\uff0c\u5176\u4f59\u5e73\u53f0\u4e0a\u4f7f\u7528Blur\u3002\u9ed8\u8ba4\u503c\u662f\u4e00\u4e2a\u7a7a\u6570\u7ec4\u6216"None"\u3002'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"IReadOnlyList<WindowTransparencyLevel> TransparencyLevelHint { get; set; }\n")),(0,l.kt)("h2",{id:"\u5e38\u89c1\u4e8b\u4ef6"},"\u5e38\u89c1\u4e8b\u4ef6"),(0,l.kt)("h3",{id:"backrequested"},"BackRequested"),(0,l.kt)("p",null,"\u5728\u6309\u4e0b\u7269\u7406\u8fd4\u56de\u6309\u94ae\u6216\u8bf7\u6c42\u540e\u9000\u5bfc\u822a\u65f6\u53d1\u751f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"event EventHandler<RoutedEventArgs> BackRequested { add; remove; }\n")),(0,l.kt)("h3",{id:"closed"},"Closed"),(0,l.kt)("p",null,"\u7a97\u53e3\u5173\u95ed\u65f6\u89e6\u53d1\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"event EventHandler Closed;\n")),(0,l.kt)("h3",{id:"opened"},"Opened"),(0,l.kt)("p",null,"\u7a97\u53e3\u6253\u5f00\u65f6\u89e6\u53d1\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"event EventHandler Opened;\n")),(0,l.kt)("h3",{id:"scalingchanged"},"ScalingChanged"),(0,l.kt)("p",null,"\u5f53TopLevel\u7684\u7f29\u653e\u53d1\u751f\u53d8\u5316\u65f6\u53d1\u751f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"event EventHandler ScalingChanged;\n")),(0,l.kt)("h2",{id:"\u5e38\u89c1\u65b9\u6cd5"},"\u5e38\u89c1\u65b9\u6cd5"),(0,l.kt)("h3",{id:"gettoplevel"},"GetTopLevel"),(0,l.kt)("p",null,"\u83b7\u53d6\u7ed9\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"Visual"),"\u6240\u6258\u7ba1\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"TopLevel"),"\u3002"),(0,l.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"control"),"\n\u8981\u67e5\u8be2\u5176TopLevel\u7684\u53ef\u89c6\u5bf9\u8c61"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"static TopLevel? GetTopLevel(Visual? visual)\n")),(0,l.kt)("h3",{id:"requestanimationframe"},"RequestAnimationFrame"),(0,l.kt)("p",null,"\u5c06\u56de\u8c03\u6392\u961f\uff0c\u4ee5\u5728\u4e0b\u4e00\u4e2a\u52a8\u753b\u523b\u5ea6\u4e0a\u8c03\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"void RequestAnimationFrame(Action<TimeSpan> action)\n")),(0,l.kt)("h3",{id:"requestplatforminhibition"},"RequestPlatformInhibition"),(0,l.kt)("p",null,"\u8bf7\u6c42\u6291\u5236",(0,l.kt)("inlineCode",{parentName:"p"},"PlatformInhibitionType"),"\u3002\u884c\u4e3a\u5c06\u4fdd\u6301\u6291\u5236\uff0c\u76f4\u5230\u8fd4\u56de\u503c\u88ab\u91ca\u653e\u3002\u53ef\u7528\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"PlatformInhibitionType"),"\u96c6\u53d6\u51b3\u4e8e\u5e73\u53f0\u3002\u5982\u679c\u5728\u4e0d\u652f\u6301\u6b64\u7c7b\u578b\u7684\u5e73\u53f0\u4e0a\u6291\u5236\u884c\u4e3a\uff0c\u5219\u8bf7\u6c42\u5c06\u4e0d\u8d77\u4f5c\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"async Task<IDisposable> RequestPlatformInhibition(PlatformInhibitionType type, string reason)\n")),(0,l.kt)("h3",{id:"trygetplatformhandle"},"TryGetPlatformHandle"),(0,l.kt)("p",null,"\u5c1d\u8bd5\u83b7\u53d6\u6d3e\u751f\u81eaTopLevel\u7684\u63a7\u4ef6\u7684\u5e73\u53f0\u53e5\u67c4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"IPlatformHandle? TryGetPlatformHandle()\n")),(0,l.kt)("h2",{id:"\u66f4\u591a\u4fe1\u606f"},"\u66f4\u591a\u4fe1\u606f"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("em",{parentName:"p"},"GitHub"),"\u4e0a\u67e5\u770b\u6e90\u4ee3\u7801 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/TopLevel.cs"},(0,l.kt)("inlineCode",{parentName:"a"},"TopLevel.cs")),'"'))}u.isMDXComponent=!0}}]);