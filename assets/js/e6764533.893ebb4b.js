"use strict";(self.webpackChunknimbly=self.webpackChunknimbly||[]).push([[942],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),a=n(7294),i=n(2389),l=n(9548),o=n(6010),u="tabItem_LplD";function c(e){var t,n,i,c=e.lazy,s=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),k=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,a.useState)(y),O=w[0],C=w[1],j=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=k[m];null!=T&&T!==O&&b.some((function(e){return e.value===T}))&&C(T)}var x=function(e){var t=e.currentTarget,n=j.indexOf(t),r=b[n].value;r!==O&&(E(t),C(r),null!=m&&N(m,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;n=j[r]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;n=j[a]||j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},f)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return j.push(e)},onKeyDown:P,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),c?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function s(e){var t=(0,i.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},1372:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=(n(9877),n(8215),["components"]),o={title:"Auto Generation",sidebar_label:"Auto Generation",sidebar_position:3,slug:"/auto-generation/"},u=void 0,c={unversionedId:"categories/Client/auto-generation",id:"categories/Client/auto-generation",title:"Auto Generation",description:"Prerequisites",source:"@site/docs/categories/03-Client/auto-generation.md",sourceDirName:"categories/03-Client",slug:"/auto-generation/",permalink:"/nimbly/docs/v1/auto-generation/",tags:[],version:"current",lastUpdatedAt:1652029593,formattedLastUpdatedAt:"5/8/2022",sidebarPosition:3,frontMatter:{title:"Auto Generation",sidebar_label:"Auto Generation",sidebar_position:3,slug:"/auto-generation/"},sidebar:"sidebar",previous:{title:"Initialization",permalink:"/nimbly/docs/v1/client-initialization/"},next:{title:"API Interceptors",permalink:"/nimbly/docs/v1/api-interceptors/"}},s=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Syntax",id:"syntax",children:[],level:2},{value:"Generating the Client",id:"generating-the-client",children:[{value:"TypeScript",id:"typescript",children:[],level:3},{value:"JavaScript",id:"javascript",children:[],level:3}],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"You need to have ",(0,i.kt)("a",{parentName:"p",href:"/nimbly/docs/v1/client-installation/"},"installed")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"nimbly-client")," library in your project."),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,"The syntax is simple, you need to run the ",(0,i.kt)("inlineCode",{parentName:"p"},"nimbly-client")," library and pass the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"command")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"generate")," - generates the TypeScript client."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"generate-js")," - generates the JavaScript client."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"log")," - just fetches the meta info from the url, good for testing."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"url")," - the url of the Nimbly deployment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"output-dir")," - the path of the directory (existing or new) in which the client files will be stored.")),(0,i.kt)("h2",{id:"generating-the-client"},"Generating the Client"),(0,i.kt)("h3",{id:"typescript"},"TypeScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"node node_modules/nimbly-client/build generate http://localhost:3000 ./path/to/output/dir/\n")),(0,i.kt)("h3",{id:"javascript"},"JavaScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"node node_modules/nimbly-client/build generate-js http://localhost:3000 ./path/to/output/dir/\n")))}d.isMDXComponent=!0}}]);