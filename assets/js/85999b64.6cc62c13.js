"use strict";(self.webpackChunknimbly=self.webpackChunknimbly||[]).push([[535],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),k=l,b=u["".concat(o,".").concat(k)]||u[k]||m[k]||a;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},396:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),i=["components"],p={title:"Client API",sidebar_label:"API",sidebar_position:1,slug:"/client-api/"},o=void 0,c={unversionedId:"client-api",id:"client-api",title:"Client API",description:"Reference",source:"@site/docs/client-api.md",sourceDirName:".",slug:"/client-api/",permalink:"/nimbly/docs/v1/client-api/",tags:[],version:"current",lastUpdatedAt:1651955421,formattedLastUpdatedAt:"5/7/2022",sidebarPosition:1,frontMatter:{title:"Client API",sidebar_label:"API",sidebar_position:1,slug:"/client-api/"},sidebar:"clientSidebar"},s=[{value:"Reference",id:"reference",children:[{value:"new Nimble()",id:"new-nimble",children:[],level:3},{value:"nimble.of(type)",id:"nimbleoftype",children:[],level:3},{value:"nimble.ofLocal(type)",id:"nimbleoflocaltype",children:[],level:3},{value:"nimble.andLocal(type)",id:"nimbleandlocaltype",children:[],level:3},{value:"nimble.ofRemote(type, origin, basePath)",id:"nimbleofremotetype-origin-basepath",children:[],level:3},{value:"nimble.andRemote(type, origin, basePath)",id:"nimbleandremotetype-origin-basepath",children:[],level:3},{value:"nimble.interceptCalls(interceptors)",id:"nimbleinterceptcallsinterceptors",children:[],level:3},{value:"nimble.interceptResults(interceptors)",id:"nimbleinterceptresultsinterceptors",children:[],level:3},{value:"nimble.interceptAllCalls(callback)",id:"nimbleinterceptallcallscallback",children:[],level:3},{value:"nimble.interceptAllResults(callback)",id:"nimbleinterceptallresultscallback",children:[],level:3},{value:"nimble.services()",id:"nimbleservices",children:[],level:3}],level:2},{value:"Types",id:"types",children:[{value:"Constructor",id:"constructor",children:[],level:3},{value:"NimblyInfo",id:"nimblyinfo",children:[],level:3},{value:"InterceptorCallback",id:"interceptorcallback",children:[],level:3},{value:"CustomInterceptors",id:"custominterceptors",children:[],level:3}],level:2}],m={toc:s};function u(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,"The following is the ",(0,a.kt)("inlineCode",{parentName:"p"},"Nimble")," class with all method signatures."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export class Nimble {\n  constructor();\n\n  public of(type: Constructor): Nimble;\n  public ofLocal(type: Constructor): Nimble;\n  public andLocal(type: Constructor): Nimble;\n  public ofRemote(type: Constructor, origin: string, basePath?: string): Nimble;\n  public andRemote(type: Constructor, origin: string, basePath?: string): Nimble;\n\n  public interceptCalls(customInterceptors: CustomInterceptors<InterceptorCallback>): Nimble;\n  public interceptResults(customInterceptors: CustomInterceptors<InterceptorCallback>): Nimble;\n  public interceptAllCalls(callback: InterceptorCallback): Nimble;\n  public interceptAllResults(callback: InterceptorCallback): Nimble;\n\n  public services(): any;\n}\n")),(0,a.kt)("h3",{id:"new-nimble"},"new Nimble()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Creates a new instance of Nimble.")),(0,a.kt)("h3",{id:"nimbleoftype"},"nimble.of(type)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Registers a ",(0,a.kt)("inlineCode",{parentName:"p"},"local")," service class to the nimble.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"type")," ",(0,a.kt)("a",{parentName:"p",href:"#constructor"},(0,a.kt)("inlineCode",{parentName:"a"},"<Constructor>"))))),(0,a.kt)("h3",{id:"nimbleoflocaltype"},"nimble.ofLocal(type)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Registers a ",(0,a.kt)("inlineCode",{parentName:"p"},"local")," service class to the nimble.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"type")," ",(0,a.kt)("a",{parentName:"p",href:"#constructor"},(0,a.kt)("inlineCode",{parentName:"a"},"<Constructor>"))))),(0,a.kt)("h3",{id:"nimbleandlocaltype"},"nimble.andLocal(type)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Registers a ",(0,a.kt)("inlineCode",{parentName:"p"},"local")," service class to the nimble.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"type")," ",(0,a.kt)("a",{parentName:"p",href:"#constructor"},(0,a.kt)("inlineCode",{parentName:"a"},"<Constructor>"))))),(0,a.kt)("h3",{id:"nimbleofremotetype-origin-basepath"},"nimble.ofRemote(type, origin","[, basePath]",")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Registers a ",(0,a.kt)("inlineCode",{parentName:"p"},"remote")," service class to the nimble.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"type")," ",(0,a.kt)("a",{parentName:"p",href:"#constructor"},(0,a.kt)("inlineCode",{parentName:"a"},"<Constructor>")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"origin")," ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},(0,a.kt)("inlineCode",{parentName:"a"},"<string>")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"basePath?")," ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},(0,a.kt)("inlineCode",{parentName:"a"},"<string>"))))),(0,a.kt)("h3",{id:"nimbleandremotetype-origin-basepath"},"nimble.andRemote(type, origin","[, basePath]",")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Registers a ",(0,a.kt)("inlineCode",{parentName:"p"},"remote")," service class to the nimble.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"type")," ",(0,a.kt)("a",{parentName:"p",href:"#constructor"},(0,a.kt)("inlineCode",{parentName:"a"},"<Constructor>")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"origin")," ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},(0,a.kt)("inlineCode",{parentName:"a"},"<string>")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"basePath?")," ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},(0,a.kt)("inlineCode",{parentName:"a"},"<string>"))))),(0,a.kt)("h3",{id:"nimbleinterceptcallsinterceptors"},"nimble.interceptCalls(interceptors)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Registers a set of custom ",(0,a.kt)("a",{parentName:"p",href:"#interceptorcallback"},"Client interceptors")," that execute ",(0,a.kt)("inlineCode",{parentName:"p"},"before")," each request.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"interceptors")," ",(0,a.kt)("a",{parentName:"p",href:"#custominterceptors"},(0,a.kt)("inlineCode",{parentName:"a"},"<CustomInterceptors>"))))),(0,a.kt)("h3",{id:"nimbleinterceptresultsinterceptors"},"nimble.interceptResults(interceptors)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Registers a set of custom ",(0,a.kt)("a",{parentName:"p",href:"#interceptorcallback"},"Client interceptors")," that execute ",(0,a.kt)("inlineCode",{parentName:"p"},"after")," each request.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"interceptors")," ",(0,a.kt)("a",{parentName:"p",href:"#custominterceptors"},(0,a.kt)("inlineCode",{parentName:"a"},"<CustomInterceptors>"))))),(0,a.kt)("h3",{id:"nimbleinterceptallcallscallback"},"nimble.interceptAllCalls(callback)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Registers a custom ",(0,a.kt)("a",{parentName:"p",href:"#interceptorcallback"},"Client interceptor")," that executes ",(0,a.kt)("inlineCode",{parentName:"p"},"before")," ",(0,a.kt)("i",null,"all")," requests.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"callback")," ",(0,a.kt)("a",{parentName:"p",href:"#interceptorcallback"},(0,a.kt)("inlineCode",{parentName:"a"},"<InterceptorCallback>"))))),(0,a.kt)("h3",{id:"nimbleinterceptallresultscallback"},"nimble.interceptAllResults(callback)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Registers a custom ",(0,a.kt)("a",{parentName:"p",href:"#interceptorcallback"},"Client interceptor")," that executes ",(0,a.kt)("inlineCode",{parentName:"p"},"after")," ",(0,a.kt)("i",null,"all")," requests.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"callback")," ",(0,a.kt)("a",{parentName:"p",href:"#interceptorcallback"},(0,a.kt)("inlineCode",{parentName:"a"},"<InterceptorCallback>"))))),(0,a.kt)("h3",{id:"nimbleservices"},"nimble.services()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Returns Nimble's service registry.")),(0,a.kt)("h2",{id:"types"},"Types"),(0,a.kt)("h3",{id:"constructor"},"Constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Constructor {\n  new (...args: any[]);\n}\n")),(0,a.kt)("h3",{id:"nimblyinfo"},"NimblyInfo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type NimblyInfo = {\n  version?: string;\n  name?: string;\n  description?: string;\n  basePath?: string;\n}\n")),(0,a.kt)("h3",{id:"interceptorcallback"},"InterceptorCallback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type InterceptorCallback = ({setHeader, getHeader, setBody, getBody}: \n  {setHeader: (key: string, value: string) => any, getHeader: (key: string) => string, setBody: (body: any) => any, getBody: () => any}) => any;\n")),(0,a.kt)("h3",{id:"custominterceptors"},"CustomInterceptors"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type CustomInterceptors<TInterceptorCallback> = {\n  [classKey: string]: {\n    [methodKey: string]: TInterceptorCallback\n  }\n};\n")))}u.isMDXComponent=!0}}]);