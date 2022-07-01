"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[151],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return y}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),y=i,m=f["".concat(c,".").concat(y)]||f[y]||p[y]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5894:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var n=r(83117),i=(r(67294),r(3905));const o={sidebar_label:"Security Policy",sidebar_position:14},a="Security Policy",l={unversionedId:"security-policy",id:"security-policy",title:"Security Policy",description:"Reporting a Vulnerability",source:"@site/docs/security-policy.md",sourceDirName:".",slug:"/security-policy",permalink:"/security-policy",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/security-policy.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_label:"Security Policy",sidebar_position:14},sidebar:"sidebar",previous:{title:"Stability",permalink:"/stability"},next:{title:"Contact Us",permalink:"/contact"}},c={},u=[{value:"Reporting a Vulnerability",id:"reporting-a-vulnerability",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"security-policy"},"Security Policy"),(0,i.kt)("h2",{id:"reporting-a-vulnerability"},"Reporting a Vulnerability"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please do not open a public Github Issue to report the vulnerability"),"."),(0,i.kt)("p",null,"Instead, please send an email to ",(0,i.kt)("a",{parentName:"p",href:"mailto:security@metaplex.com"},"security@metaplex.com"),"."),(0,i.kt)("p",null,"You should receive a response within 24-48 hours. If for some reason you do not, please follow up via email to ensure we received your original message."),(0,i.kt)("p",null,"Please include the requested information listed below (as much as you can provide) to help us better understand the nature and scope of the possible issue:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type of issue (e.g. buffer overflow, missing ownership check, cross-site scripting, etc.)"),(0,i.kt)("li",{parentName:"ul"},"Full paths of source file(s) related to the manifestation of the issue"),(0,i.kt)("li",{parentName:"ul"},"The location of the affected source code (tag/branch/commit or direct URL)"),(0,i.kt)("li",{parentName:"ul"},"Any special configuration required to reproduce the issue"),(0,i.kt)("li",{parentName:"ul"},"Step-by-step instructions to reproduce the issue"),(0,i.kt)("li",{parentName:"ul"},"Proof-of-concept or exploit code (if possible)"),(0,i.kt)("li",{parentName:"ul"},"Impact of the issue, including how an attacker might exploit the issue")),(0,i.kt)("p",null,"This information will help us triage your report more quickly."))}p.isMDXComponent=!0}}]);