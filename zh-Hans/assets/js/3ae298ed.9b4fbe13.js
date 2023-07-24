"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[42738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),v=i,m=d["".concat(c,".").concat(v)]||d[v]||u[v]||o;return n?a.createElement(m,r(r({ref:t},s),{},{components:n})):a.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},53472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={description:"CONCEPTS - ReactiveUI"},r="\u67e5\u770b\u6fc0\u6d3b",l={unversionedId:"concepts/reactiveui/view-activation",id:"concepts/reactiveui/view-activation",title:"\u67e5\u770b\u6fc0\u6d3b",description:"CONCEPTS - ReactiveUI",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/reactiveui/view-activation.md",sourceDirName:"concepts/reactiveui",slug:"/concepts/reactiveui/view-activation",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/reactiveui/view-activation",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/concepts/reactiveui/view-activation.md",tags:[],version:"current",frontMatter:{description:"CONCEPTS - ReactiveUI"},sidebar:"documentationSidebar",previous:{title:"Observable Collections",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/reactiveui/observable-collections"},next:{title:"\u8def\u7531",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/reactiveui/routing"}},c={},p=[{value:"\u6fc0\u6d3b\u793a\u4f8b",id:"\u6fc0\u6d3b\u793a\u4f8b",level:3},{value:"Code-Behind ReactiveUI\u7ed1\u5b9a",id:"code-behind-reactiveui\u7ed1\u5b9a",level:3}],s={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u67e5\u770b\u6fc0\u6d3b"},"\u67e5\u770b\u6fc0\u6d3b"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4f7f",(0,i.kt)("a",{parentName:"p",href:"https://reactiveui.net/docs/handbook/when-activated/"},"WhenActivated")," ReactiveUI\u529f\u80fd\u6b63\u5e38\u5de5\u4f5c\uff0c\u60a8\u9700\u8981\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"Avalonia.ReactiveUI"),"\u5305\u4e2d\u7684\u81ea\u5b9a\u4e49\u57fa\u7c7b\uff0c\u4f8b\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"ReactiveWindow<TViewModel>"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"ReactiveUserControl<TViewModel>"),"\u3002\u5f53\u7136\uff0c\u60a8\u4e5f\u53ef\u4ee5\u624b\u52a8\u5728\u7c7b\u4e2d\u5b9e\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},"IViewFor<TViewModel>"),"\u63a5\u53e3\uff0c\u4f46\u8bf7\u786e\u4fdd\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"ViewModel"),"\u5b58\u50a8\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"AvaloniaProperty"),"\u4e2d\u3002"),(0,i.kt)("h3",{id:"\u6fc0\u6d3b\u793a\u4f8b"},"\u6fc0\u6d3b\u793a\u4f8b"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ViewModel.cs")),(0,i.kt)("p",null,"\u6b64\u89c6\u56fe\u6a21\u578b\u5b9e\u73b0\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"IActivatableViewModel"),"\u63a5\u53e3\u3002\u5f53\u76f8\u5e94\u7684\u89c6\u56fe\u9644\u52a0\u5230\u53ef\u89c6\u6811\u65f6\uff0cWhenActivated\u5757\u5185\u7684\u4ee3\u7801\u5c06\u88ab\u8c03\u7528\u3002\u5f53\u76f8\u5e94\u7684\u89c6\u56fe\u4ece\u53ef\u89c6\u6811\u4e2d\u5206\u79bb\u65f6\uff0c\u590d\u5408\u53ef\u5904\u7f6e\u5bf9\u8c61\u5c06\u88ab\u5904\u7f6e\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"ReactiveObject"),"\u662f",(0,i.kt)("a",{parentName:"p",href:"https://reactiveui.net/docs/handbook/view-models/"},"\u89c6\u56fe\u6a21\u578b\u7c7b"),"\u7684\u57fa\u7c7b\uff0c\u5e76\u5b9e\u73b0\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"INotifyPropertyChanged"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class ViewModel : ReactiveObject, IActivatableViewModel\n{\n    public ViewModelActivator Activator { get; }\n\n    public ViewModel()\n    {\n        Activator = new ViewModelActivator();\n        this.WhenActivated((CompositeDisposable disposables) =>\n        {\n            /* \u5904\u7406\u6fc0\u6d3b */\n            Disposable\n                .Create(() => { /* \u5904\u7406\u505c\u7528 */ })\n                .DisposeWith(disposables);\n        });\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"View.xaml")),(0,i.kt)("p",null,"\u8fd9\u662f\u4e0a\u9762\u6240\u793a\u89c6\u56fe\u6a21\u578b\u7684\u7528\u6237\u754c\u9762\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        Background="#f0f0f0" FontFamily="Ubuntu"\n        MinHeight="590" MinWidth="750">\n  <TextBlock Text="Hello, world!" />\n</Window>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"View.xaml.cs")),(0,i.kt)("p",null,"\u8fd9\u662f\u4e0a\u9762\u4f60\u770b\u5230\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"View.xaml"),"\u6587\u4ef6\u7684\u4ee3\u7801\u540e\u53f0\u3002\u8bf7\u8bb0\u4f4f\uff0c\u59cb\u7ec8\u5728View\u6784\u9020\u51fd\u6570\u4e2d\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"WhenActivated"),"\uff0c\u5426\u5219ReactiveUI\u5c06\u65e0\u6cd5\u786e\u5b9a\u4f55\u65f6\u6fc0\u6d3b\u89c6\u56fe\u6a21\u578b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class View : ReactiveWindow<ViewModel>\n{\n    public View()\n    {\n        // ViewModel\u7684WhenActivated\u5757\u4e5f\u5c06\u88ab\u8c03\u7528\u3002\n        this.WhenActivated(disposables => { /* \u5904\u7406\u89c6\u56fe\u6fc0\u6d3b\u7b49 */ });\n        AvaloniaXamlLoader.Load(this);\n    }\n}\n")),(0,i.kt)("h3",{id:"code-behind-reactiveui\u7ed1\u5b9a"},"Code-Behind ReactiveUI\u7ed1\u5b9a"),(0,i.kt)("p",null,"Avalonia XAML\u5f15\u64ce\u4e0d\u4f1a\u751f\u6210\u5f3a\u7c7b\u578b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"x:Name"),"\u5f15\u7528\u6765\u5f15\u7528\u63a7\u4ef6\u3002\u76ee\u524d\uff0c\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://reactiveui.net/docs/handbook/data-binding/"},"\u4ee3\u7801\u540e\u53f0\u7684ReactiveUI\u7ed1\u5b9a"),"\u7684\u552f\u4e00\u65b9\u6cd5\u662f\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"FindControl"),"\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u5c06\u6839\u636eXAML\u4e2d\u6307\u5b9a\u7684\u540d\u79f0\u67e5\u627e\u63a7\u4ef6\uff0c\u6216\u8005\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"{Binding Path}"),"\u8bed\u6cd5\u3002"),(0,i.kt)("p",null,"\u4e0d\u5e94\u5728\u8868\u8fbe\u5f0f\u4e2d\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"FindControl"),"\u65b9\u6cd5\u3002\u76f8\u53cd\uff0c\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"FindControl"),"\u65b9\u6cd5\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\uff0c\u6216\u8005\u5c06\u63a7\u4ef6\u5b58\u50a8\u5728\u53d8\u91cf\u4e2d\u3002\u4e0b\u9762\u7684\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u5728Avalonia\u4e2d\u4f7f\u7528ReactiveUI\u4ee3\u7801\u540e\u53f0\u7ed1\u5b9a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class View : ReactiveWindow<ViewModel>\n{\n    // \u5047\u8bbeButton\u63a7\u4ef6\u5728XAML\u4e2d\u5b9a\u4e49\u4e86Name=\"ExampleButton\"\u5c5e\u6027\u3002\n    public Button ExampleButton => this.FindControl<Button>(\"ExampleButton\");\n\n    public View()\n    {\n        this.WhenActivated(disposables => \n        {\n            // \u5c06'ExampleCommand'\u7ed1\u5b9a\u5230\u4e0a\u9762\u5b9a\u4e49\u7684'ExampleButton'\u3002\n            this.BindCommand(ViewModel, x => x.ExampleCommand, x => x.ExampleButton)\n                .DisposeWith(disposables);\n        });\n        AvaloniaXamlLoader.Load(this);\n    }\n}\n")))}u.isMDXComponent=!0}}]);