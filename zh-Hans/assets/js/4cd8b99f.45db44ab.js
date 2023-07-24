"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[88344],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={id:"how-to-create-advanced-custom-controls",title:"\u5982\u4f55\u521b\u5efa\u9ad8\u7ea7\u81ea\u5b9a\u4e49\u63a7\u4ef6"},o="\u5982\u4f55\u521b\u5efa\u9ad8\u7ea7\u81ea\u5b9a\u4e49\u63a7\u4ef6",i={unversionedId:"guides/custom-controls/how-to-create-advanced-custom-controls",id:"guides/custom-controls/how-to-create-advanced-custom-controls",title:"\u5982\u4f55\u521b\u5efa\u9ad8\u7ea7\u81ea\u5b9a\u4e49\u63a7\u4ef6",description:"\u4ece\u81ea\u5b9a\u4e49\u63a7\u4ef6\u6307\u5357\u4e2d\u6458\u5f55\u7684\u5185\u5bb9\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/custom-controls/how-to-create-advanced-custom-controls.md",sourceDirName:"guides/custom-controls",slug:"/guides/custom-controls/how-to-create-advanced-custom-controls",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/custom-controls/how-to-create-advanced-custom-controls",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/custom-controls/how-to-create-advanced-custom-controls.md",tags:[],version:"current",frontMatter:{id:"how-to-create-advanced-custom-controls",title:"\u5982\u4f55\u521b\u5efa\u9ad8\u7ea7\u81ea\u5b9a\u4e49\u63a7\u4ef6"},sidebar:"documentationSidebar",previous:{title:"\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u9762\u677f",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/custom-controls/how-to-create-a-custom-flyout"},next:{title:"\u5982\u4f55\u521b\u5efa\u9644\u52a0\u5c5e\u6027",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/custom-controls/how-to-create-attached-properties"}},p={},u=[{value:"\u5728\u53e6\u4e00\u4e2a\u7c7b\u4e0a\u4f7f\u7528<code>StyledProperty</code>",id:"\u5728\u53e6\u4e00\u4e2a\u7c7b\u4e0a\u4f7f\u7528styledproperty",level:3},{value:"\u53ea\u8bfb\u5c5e\u6027",id:"\u53ea\u8bfb\u5c5e\u6027",level:3},{value:"\u9644\u52a0\u5c5e\u6027",id:"\u9644\u52a0\u5c5e\u6027",level:3},{value:"\u76f4\u63a5\u7684Avalonia\u5c5e\u6027",id:"\u76f4\u63a5\u7684avalonia\u5c5e\u6027",level:3},{value:"\u5728\u53e6\u4e00\u4e2a\u7c7b\u4e0a\u4f7f\u7528DirectProperty",id:"\u5728\u53e6\u4e00\u4e2a\u7c7b\u4e0a\u4f7f\u7528directproperty",level:3},{value:"\u4f55\u65f6\u4f7f\u7528Direct\u5c5e\u6027\u548cStyled\u5c5e\u6027",id:"\u4f55\u65f6\u4f7f\u7528direct\u5c5e\u6027\u548cstyled\u5c5e\u6027",level:3},{value:"\u6570\u636e\u9a8c\u8bc1\u652f\u6301",id:"\u6570\u636e\u9a8c\u8bc1\u652f\u6301",level:3}],c={toc:u},d="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5982\u4f55\u521b\u5efa\u9ad8\u7ea7\u81ea\u5b9a\u4e49\u63a7\u4ef6"},"\u5982\u4f55\u521b\u5efa\u9ad8\u7ea7\u81ea\u5b9a\u4e49\u63a7\u4ef6"),(0,a.kt)("p",null,"\u4ece\u81ea\u5b9a\u4e49\u63a7\u4ef6\u6307\u5357\u4e2d\u6458\u5f55\u7684\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u8fd9\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"Border"),"\u63a7\u4ef6\u5982\u4f55\u5b9a\u4e49\u5176",(0,a.kt)("inlineCode",{parentName:"p"},"Background"),"\u5c5e\u6027\u7684\u65b9\u5f0f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AvaloniaProperty.Register"),"\u65b9\u6cd5\u8fd8\u63a5\u53d7\u5176\u4ed6\u4e00\u4e9b\u53c2\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaultValue"),"\uff1a\u4e3a\u5c5e\u6027\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u3002\u8bf7\u786e\u4fdd\u53ea\u4f20\u9012\u503c\u7c7b\u578b\u548c\u4e0d\u53ef\u53d8\u7c7b\u578b\uff0c\u56e0\u4e3a\u4f20\u9012\u5f15\u7528\u7c7b\u578b\u5c06\u5bfc\u81f4\u6240\u6709\u6ce8\u518c\u4e86\u8be5\u5c5e\u6027\u7684\u5b9e\u4f8b\u4f7f\u7528\u540c\u4e00\u4e2a\u5bf9\u8c61\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"inherits"),"\uff1a\u6307\u5b9a\u5c5e\u6027\u7684\u9ed8\u8ba4\u503c\u5e94\u6765\u81ea\u7236\u63a7\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaultBindingMode"),"\uff1a\u5c5e\u6027\u7684\u9ed8\u8ba4\u7ed1\u5b9a\u6a21\u5f0f\u3002\u53ef\u4ee5\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"OneWay"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"TwoWay"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"OneTime"),"\u6216",(0,a.kt)("inlineCode",{parentName:"li"},"OneWayToSource"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"validate"),"\uff1a\u4e00\u4e2a\u7c7b\u578b\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"Func<TOwner, TValue, TValue>"),"\u7684\u9a8c\u8bc1/\u5f3a\u5236\u51fd\u6570\u3002\u8be5\u51fd\u6570\u63a5\u53d7\u6b63\u5728\u8bbe\u7f6e\u5c5e\u6027\u7684\u7c7b\u7684\u5b9e\u4f8b\u548c\u503c\uff0c\u5e76\u8fd4\u56de\u5f3a\u5236\u540e\u7684\u503c\uff0c\u6216\u8005\u5bf9\u4e8e\u65e0\u6548\u503c\u629b\u51fa\u5f02\u5e38\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e00\u4e2a\u6837\u5f0f\u5316\u5c5e\u6027\u7c7b\u4f3c\u4e8e\u5176\u4ed6XAML\u6846\u67b6\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"DependencyProperty"),"\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5c5e\u6027\u7684\u547d\u540d\u7ea6\u5b9a\u53ca\u5176\u5bf9\u5e94\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"AvaloniaProperty"),"\u5b57\u6bb5\u7684\u547d\u540d\u662f\u91cd\u8981\u7684\u3002\u5b57\u6bb5\u7684\u540d\u79f0\u59cb\u7ec8\u662f\u5c5e\u6027\u7684\u540d\u79f0\uff0c\u540e\u9762\u9644\u52a0\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"Property"),"\u540e\u7f00\u3002")),(0,a.kt)("h3",{id:"\u5728\u53e6\u4e00\u4e2a\u7c7b\u4e0a\u4f7f\u7528styledproperty"},"\u5728\u53e6\u4e00\u4e2a\u7c7b\u4e0a\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h3"},"StyledProperty")),(0,a.kt)("p",null,"\u6709\u65f6\uff0c\u60a8\u60f3\u8981\u6dfb\u52a0\u5230\u81ea\u5b9a\u4e49\u63a7\u4ef6\u7684\u5c5e\u6027\u5df2\u7ecf\u5b58\u5728\u4e8e\u53e6\u4e00\u4e2a\u63a7\u4ef6\u4e0a\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Background"),"\u5c31\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u4f8b\u5b50\u3002\u8981\u6ce8\u518c\u5728\u53e6\u4e00\u4e2a\u63a7\u4ef6\u4e0a\u5b9a\u4e49\u7684\u5c5e\u6027\uff0c\u60a8\u9700\u8981\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"StyledProperty.AddOwner"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static readonly StyledProperty<IBrush> BackgroundProperty =\n    Border.BackgroundProperty.AddOwner<Panel>();\n\npublic Brush Background\n{\n    get { return GetValue(BackgroundProperty); }\n    set { SetValue(BackgroundProperty, value); }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4e0eWPF/UWP\u4e0d\u540c\uff0c\u5c5e\u6027\u5fc5\u987b\u5728\u7c7b\u4e0a\u6ce8\u518c\uff0c\u5426\u5219\u65e0\u6cd5\u5728\u8be5\u7c7b\u7684\u5bf9\u8c61\u4e0a\u8bbe\u7f6e\u5c5e\u6027\u3002\u4f46\u8fd9\u53ef\u80fd\u4f1a\u5728\u5c06\u6765\u53d1\u751f\u6539\u53d8\u3002")),(0,a.kt)("h3",{id:"\u53ea\u8bfb\u5c5e\u6027"},"\u53ea\u8bfb\u5c5e\u6027"),(0,a.kt)("p",null,"\u8981\u521b\u5efa\u4e00\u4e2a\u53ea\u8bfb\u5c5e\u6027\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"AvaloniaProperty.RegisterDirect"),"\u65b9\u6cd5\u3002\u4ee5\u4e0b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"Visual"),"\u5982\u4f55\u6ce8\u518c\u53ea\u8bfb\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Bounds"),"\u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static readonly DirectProperty<Visual, Rect> BoundsProperty =\n    AvaloniaProperty.RegisterDirect<Visual, Rect>(\n        nameof(Bounds),\n        o => o.Bounds);\n\nprivate Rect _bounds;\n\npublic Rect Bounds\n{\n    get { return _bounds; }\n    private set { SetAndRaise(BoundsProperty, ref _bounds, value); }\n}\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u53ea\u8bfb\u5c5e\u6027\u88ab\u5b58\u50a8\u4e3a\u5bf9\u8c61\u7684\u5b57\u6bb5\u3002\u5728\u6ce8\u518c\u5c5e\u6027\u65f6\uff0c\u4f20\u9012\u4e86\u4e00\u4e2agetter\uff0c\u7528\u4e8e\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"GetValue"),"\u8bbf\u95ee\u5c5e\u6027\u503c\uff0c\u7136\u540e\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"SetAndRaise"),"\u901a\u77e5\u5c5e\u6027\u66f4\u6539\u7684\u76d1\u542c\u5668\u3002"),(0,a.kt)("h3",{id:"\u9644\u52a0\u5c5e\u6027"},"\u9644\u52a0\u5c5e\u6027"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../../concepts/attached-property"},"\u9644\u52a0\u5c5e\u6027"),"\u7684\u5b9a\u4e49\u4e0e\u6837\u5f0f\u5316\u5c5e\u6027\u51e0\u4e4e\u76f8\u540c\uff0c\u53ea\u662f\u5b83\u4eec\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"RegisterAttached"),"\u65b9\u6cd5\u8fdb\u884c\u6ce8\u518c\uff0c\u5e76\u4e14\u5b83\u4eec\u7684\u8bbf\u95ee\u5668\u88ab\u5b9a\u4e49\u4e3a\u9759\u6001\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"Grid"),"\u5982\u4f55\u5b9a\u4e49\u5176",(0,a.kt)("inlineCode",{parentName:"p"},"Grid.Column"),"\u9644\u52a0\u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public static readonly AttachedProperty<int> ColumnProperty =\n    AvaloniaProperty.RegisterAttached<Grid, Control, int>("Column");\n\npublic static int GetColumn(Control element)\n{\n    return element.GetValue(ColumnProperty);\n}\n\npublic static void SetColumn(Control element, int value)\n{\n    element.SetValue(ColumnProperty, value);\n}\n')),(0,a.kt)("h3",{id:"\u76f4\u63a5\u7684avalonia\u5c5e\u6027"},"\u76f4\u63a5\u7684Avalonia\u5c5e\u6027"),(0,a.kt)("p",null,"\u987e\u540d\u601d\u4e49\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"RegisterDirect"),"\u4e0d\u4ec5\u7528\u4e8e\u6ce8\u518c\u53ea\u8bfb\u5c5e\u6027\u3002\u60a8\u8fd8\u53ef\u4ee5\u5c06\u4e00\u4e2a",(0,a.kt)("em",{parentName:"p"},"setter"),"\u4f20\u9012\u7ed9",(0,a.kt)("inlineCode",{parentName:"p"},"RegisterDirect"),"\uff0c\u5c06\u6807\u51c6\u7684C#\u5c5e\u6027\u516c\u5f00\u4e3aAvalonia\u5c5e\u6027\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"AvaloniaProperty.Register"),"\u6ce8\u518c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"StyledProperty"),"\u7ef4\u62a4\u4e86\u4e00\u4e2a\u4f18\u5148\u7ea7\u5217\u8868\uff0c\u5176\u4e2d\u5305\u542b\u5141\u8bb8\u6837\u5f0f\u5de5\u4f5c\u7684\u503c\u548c\u7ed1\u5b9a\u3002\u7136\u800c\uff0c\u5bf9\u4e8e\u8bb8\u591a\u5c5e\u6027\u6765\u8bf4\uff0c\u8fd9\u662f\u4e0d\u5fc5\u8981\u7684\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"ItemsControl.Items"),"\u2014\u2014\u5b83\u6c38\u8fdc\u4e0d\u4f1a\u88ab\u6837\u5f0f\u5316\uff0c\u4f7f\u7528\u6837\u5f0f\u5316\u5c5e\u6027\u7684\u5f00\u9500\u662f\u4e0d\u5fc5\u8981\u7684\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"ItemsControl.Items"),"\u7684\u6ce8\u518c\u65b9\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static readonly DirectProperty<ItemsControl, IEnumerable> ItemsProperty =\n    AvaloniaProperty.RegisterDirect<ItemsControl, IEnumerable>(\n        nameof(Items),\n        o => o.Items,\n        (o, v) => o.Items = v);\n\nprivate IEnumerable _items = new AvaloniaList<object>();\n\npublic IEnumerable Items\n{\n    get { return _items; }\n    set { SetAndRaise(ItemsProperty, ref _items, value); }\n}\n")),(0,a.kt)("p",null,"\u76f4\u63a5\u5c5e\u6027\u662f\u6837\u5f0f\u5316\u5c5e\u6027\u7684\u8f7b\u91cf\u7ea7\u7248\u672c\uff0c\u652f\u6301\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AvaloniaObject.GetValue"),(0,a.kt)("li",{parentName:"ul"},"AvaloniaObject.SetValue\uff08\u975e\u53ea\u8bfb\u5c5e\u6027\uff09"),(0,a.kt)("li",{parentName:"ul"},"PropertyChanged"),(0,a.kt)("li",{parentName:"ul"},"Binding\uff08\u4ec5\u5177\u6709LocalValue\u4f18\u5148\u7ea7\uff09"),(0,a.kt)("li",{parentName:"ul"},"GetObservable"),(0,a.kt)("li",{parentName:"ul"},"AddOwner"),(0,a.kt)("li",{parentName:"ul"},"Metadata")),(0,a.kt)("p",null,"\u5b83\u4eec\u4e0d\u652f\u6301\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1/\u5f3a\u5236\uff08\u5c3d\u7ba1\u53ef\u4ee5\u5728\u5c5e\u6027setter\u4e2d\u5b8c\u6210\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u8986\u76d6\u9ed8\u8ba4\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7ee7\u627f\u7684\u503c")),(0,a.kt)("h3",{id:"\u5728\u53e6\u4e00\u4e2a\u7c7b\u4e0a\u4f7f\u7528directproperty"},"\u5728\u53e6\u4e00\u4e2a\u7c7b\u4e0a\u4f7f\u7528DirectProperty"),(0,a.kt)("p",null,"\u4e0e\u6837\u5f0f\u5316\u5c5e\u6027\u4e00\u6837\uff0c\u60a8\u53ef\u4ee5\u5728\u76f4\u63a5\u5c5e\u6027\u4e0a\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"AddOwner"),"\u6765\u6dfb\u52a0\u4e00\u4e2a\u6240\u6709\u8005\u3002\u7531\u4e8e\u76f4\u63a5\u5c5e\u6027\u5f15\u7528\u63a7\u4ef6\u4e0a\u7684\u5b57\u6bb5\uff0c\u56e0\u6b64\u60a8\u8fd8\u5fc5\u987b\u4e3a\u8be5\u5c5e\u6027\u6dfb\u52a0\u4e00\u4e2a\u5b57\u6bb5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static readonly DirectProperty<MyControl, IEnumerable> ItemsProperty =\n    ItemsControl.ItemsProperty.AddOwner<MyControl>(\n        o => o.Items,\n        (o, v) => o.Items = v);\n\nprivate IEnumerable _items = new AvaloniaList<object>();\n\npublic IEnumerable Items\n{\n    get { return _items; }\n    set { SetAndRaise(ItemsProperty, ref _items, value); }\n}\n")),(0,a.kt)("h3",{id:"\u4f55\u65f6\u4f7f\u7528direct\u5c5e\u6027\u548cstyled\u5c5e\u6027"},"\u4f55\u65f6\u4f7f\u7528Direct\u5c5e\u6027\u548cStyled\u5c5e\u6027"),(0,a.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u5e94\u5c06\u5c5e\u6027\u58f0\u660e\u4e3a\u6837\u5f0f\u5316\u5c5e\u6027\u3002\u4f46\u662f\uff0c\u76f4\u63a5\u5c5e\u6027\u5177\u6709\u4f18\u70b9\u548c\u7f3a\u70b9\uff1a"),(0,a.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5b9e\u4f8b\u4e0d\u9700\u8981\u989d\u5916\u7684\u5bf9\u8c61\u6765\u5b58\u50a8\u5c5e\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u5c5e\u6027getter\u662f\u6807\u51c6\u7684C#\u5c5e\u6027getter"),(0,a.kt)("li",{parentName:"ul"},"\u5c5e\u6027setter\u662f\u5f15\u53d1\u4e8b\u4ef6\u7684\u6807\u51c6C#\u5c5e\u6027setter"),(0,a.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u6dfb\u52a0",(0,a.kt)("a",{parentName:"li",href:"/avalonia-docs/zh-Hans/docs/next/guides/development-guides/data-validation"},"\u6570\u636e\u9a8c\u8bc1"),"\u652f\u6301")),(0,a.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u4ece\u7236\u63a7\u4ef6\u7ee7\u627f\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u5229\u7528Avalonia\u7684\u6837\u5f0f\u7cfb\u7edf"),(0,a.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u503c\u662f\u4e00\u4e2a\u5b57\u6bb5\uff0c\u56e0\u6b64\u65e0\u8bba\u5c5e\u6027\u662f\u5426\u5728\u5bf9\u8c61\u4e0a\u8bbe\u7f6e\uff0c\u90fd\u4f1a\u88ab\u5206\u914d\u5185\u5b58")),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u5f53\u6ee1\u8db3\u4ee5\u4e0b\u8981\u6c42\u65f6\uff0c\u8bf7\u4f7f\u7528\u76f4\u63a5\u5c5e\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u4e0d\u9700\u8981\u6837\u5f0f\u5316"),(0,a.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u901a\u5e38\u6216\u603b\u662f\u5177\u6709\u503c")),(0,a.kt)("h3",{id:"\u6570\u636e\u9a8c\u8bc1\u652f\u6301"},"\u6570\u636e\u9a8c\u8bc1\u652f\u6301"),(0,a.kt)("p",null,"\u5982\u679c\u8981\u5141\u8bb8\u5c5e\u6027\u9a8c\u8bc1\u6570\u636e\u5e76\u663e\u793a\u9a8c\u8bc1\u9519\u8bef\u6d88\u606f\uff0c\u5219\u8be5\u5c5e\u6027\u5fc5\u987b\u5b9e\u73b0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"DirectProperty"),"\uff0c\u5e76\u4e14\u5fc5\u987b\u542f\u7528\u9a8c\u8bc1\u652f\u6301\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"enableDataValidation: true"),"\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u542f\u7528\u6570\u636e\u9a8c\u8bc1\u7684\u5c5e\u6027\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public static readonly DirectProperty<MyControl, int> ValueProperty =\n    AvaloniaProperty.RegisterDirect<MyControl, int>(\n        nameof(Value),\n        o => o.Value,\n        (o, v) => o.Value = v, \n        enableDataValidation: true);\n")),(0,a.kt)("p",null,"\u5982\u679c\u8981",(0,a.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/guides/custom-controls/how-to-create-advanced-custom-controls#using-a-directproperty-on-another-class"},"\u91cd\u7528\u53e6\u4e00\u4e2a\u7c7b\u7684\u76f4\u63a5\u5c5e\u6027"),"\uff0c\u4e5f\u53ef\u4ee5\u542f\u7528\u6570\u636e\u9a8c\u8bc1\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8bf7\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"AddOwnerWithDataValidation"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1aTextBox.TextProperty\u5c5e\u6027\u91cd\u7528TextBlock.TextProperty\uff0c\u4f46\u6dfb\u52a0\u4e86\u9a8c\u8bc1\u652f\u6301")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public static readonly DirectProperty<TextBox, string?> TextProperty =\n    TextBlock.TextProperty.AddOwnerWithDataValidation<TextBox>(\n        o => o.Text,\n        (o, v) => o.Text = v,\n        defaultBindingMode: BindingMode.TwoWay,\n        enableDataValidation: true);\n")))}s.isMDXComponent=!0}}]);