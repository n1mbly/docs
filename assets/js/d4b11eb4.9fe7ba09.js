"use strict";(self.webpackChunknimbly=self.webpackChunknimbly||[]).push([[9077],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=s(n),p=r,m=g["".concat(u,".").concat(p)]||g[p]||c[p]||i;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1815:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Logging and debugging",sidebar_position:3,slug:"/logging-and-debugging/"},u=void 0,s={unversionedId:"categories/Documentation/logging-and-debugging",id:"categories/Documentation/logging-and-debugging",title:"Logging and debugging",description:"Socket.IO is now completely instrumented by a minimalistic yet tremendously powerful utility called debug by TJ Holowaychuk.",source:"@site/docs/categories/01-Documentation/logging-and-debugging.md",sourceDirName:"categories/01-Documentation",slug:"/logging-and-debugging/",permalink:"/nimbly/docs/v1/logging-and-debugging/",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Logging and debugging",sidebar_position:3,slug:"/logging-and-debugging/"},sidebar:"sidebar",previous:{title:"How it works",permalink:"/nimbly/docs/v1/how-it-works/"},next:{title:"Testing",permalink:"/nimbly/docs/v1/testing/"}},d=[{value:"Available debugging scopes",id:"available-debugging-scopes",children:[{value:"Removing debug from your browser bundle",id:"removing-debug-from-your-browser-bundle",children:[],level:3}],level:2},{value:"Error logs in the browser console",id:"error-logs-in-the-browser-console",children:[],level:2}],c={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Socket.IO is now completely instrumented by a minimalistic yet tremendously powerful utility called ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/visionmedia/debug"},"debug")," by TJ Holowaychuk."),(0,i.kt)("p",null,"Before 1.0, the Socket.IO server would default to logging everything out to the console. This turned out to be annoyingly verbose for many users (although extremely useful for others), so now we default to being completely silent by default."),(0,i.kt)("p",null,"The basic idea is that each module used by Socket.IO provides different debugging scopes that give you insight into the internals. By default, all output is suppressed, and you can opt into seeing messages by supplying the ",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG")," env variable (Node.JS) or the ",(0,i.kt)("inlineCode",{parentName:"p"},"localStorage.debug")," property (Browsers)."),(0,i.kt)("p",null,"You can see it in action for example on our homepage:"),(0,i.kt)("video",{id:"debugging-vid","data-setup":'{"autoplay":true,"loop":true, "techOrder": ["html5", "flash"], "height": 300}',class:"video-js vjs-default-skin",autoplay:!0,loop:!0,width:"100%"},(0,i.kt)("source",{src:"https://i.cloudup.com/transcoded/IL9alTr0eO.mp4",type:"video/mp4"})),(0,i.kt)("h2",{id:"available-debugging-scopes"},"Available debugging scopes"),(0,i.kt)("p",null,"The best way to see what information is available is to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DEBUG=* node yourfile.js\n")),(0,i.kt)("p",null,"or in the browser:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"localStorage.debug = '*';\n")),(0,i.kt)("p",null,"And then filter by the scopes you","\u2019","re interested in. You can prefix the ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," with scopes, separated by comma if there is more than one. For example, to only see debug statements from the socket.io client on Node.js try this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DEBUG=socket.io:client* node yourfile.js\n")),(0,i.kt)("p",null,"To see all debug messages from the engine ",(0,i.kt)("em",{parentName:"p"},"and")," socket.io:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DEBUG=engine,socket.io* node yourfile.js\n")),(0,i.kt)("h3",{id:"removing-debug-from-your-browser-bundle"},"Removing debug from your browser bundle"),(0,i.kt)("p",null,"While useful during development, the debug package adds an extra weight to the final bundle (about 4KB minified and gzipped), that's why it is excluded from the slim bundle (more details about the various browser bundles can be found ",(0,i.kt)("a",{parentName:"p",href:"/nimbly/docs/v1/client-installation/#from-a-cdn"},"here"),")."),(0,i.kt)("p",null,"If you are using webpack, you can remove it with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/johngodley/webpack-remove-debug"},"webpack-remove-debug"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        loader: 'webpack-remove-debug'\n      }\n    ]\n  }\n}\n")),(0,i.kt)("h2",{id:"error-logs-in-the-browser-console"},"Error logs in the browser console"),(0,i.kt)("p",null,"Please note that error logs such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"net::ERR_INTERNET_DISCONNECTED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"net::ERR_CONNECTION_REFUSED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WebSocket is already in CLOSING or CLOSED state")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at xxx. (Reason: CORS header \u2018Access-Control-Allow-Origin\u2019 missing).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"The connection to xxx was interrupted while the page was loading"))),(0,i.kt)("p",null,"are not emitted by the Socket.IO library but by the browser itself, and are therefore out of our control."))}g.isMDXComponent=!0}}]);