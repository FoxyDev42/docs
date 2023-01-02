"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5324],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3351:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var n=r(83117),a=(r(67294),r(3905));const o={sidebar_label:"Security"},i="Security",l={unversionedId:"security",id:"security",title:"Security",description:"Reporting a Vulnerability",source:"@site/docs/07-security.md",sourceDirName:".",slug:"/security",permalink:"/security",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/07-security.md",tags:[],version:"current",lastUpdatedAt:1672653776,formattedLastUpdatedAt:"Jan 2, 2023",sidebarPosition:7,frontMatter:{sidebar_label:"Security"},sidebar:"sidebar",previous:{title:"Customize",permalink:"/deprecated/storefront/customize"},next:{title:"Contact Us",permalink:"/contact"}},u={},s=[{value:"Reporting a Vulnerability",id:"reporting-a-vulnerability",level:2},{value:"Audits",id:"audits",level:2}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"security"},"Security"),(0,a.kt)("h2",{id:"reporting-a-vulnerability"},"Reporting a Vulnerability"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Please do not open a public GitHub Issue to report the vulnerability"),"."),(0,a.kt)("p",null,"Instead, please email ",(0,a.kt)("a",{parentName:"p",href:"mailto:security@metaplex.com"},"security@metaplex.com"),"."),(0,a.kt)("p",null,"You should receive a response within 24-48 hours. If for some reason you do not, please follow up via email to ensure we received your original message."),(0,a.kt)("p",null,"Please include the requested information listed below (as much as you can provide) to help us better understand the nature and scope of the possible issue:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type of issue (e.g. buffer overflow, missing ownership check, cross-site scripting, etc.)"),(0,a.kt)("li",{parentName:"ul"},"Full paths of source file(s) related to the manifestation of the issue"),(0,a.kt)("li",{parentName:"ul"},"The location of the affected source code (tag/branch/commit or direct URL)"),(0,a.kt)("li",{parentName:"ul"},"Any special configuration required to reproduce the issue"),(0,a.kt)("li",{parentName:"ul"},"Step-by-step instructions to reproduce the issue"),(0,a.kt)("li",{parentName:"ul"},"Proof-of-concept or exploit code (if possible)"),(0,a.kt)("li",{parentName:"ul"},"Impact of the issue, including how an attacker might exploit the issue")),(0,a.kt)("p",null,"This information will help us triage your report more quickly."),(0,a.kt)("p",null,"You may also be eligible for a bounty. More details can be found ",(0,a.kt)("a",{parentName:"p",href:"https://www.metaplex.com/bounty-program"},"here"),"."),(0,a.kt)("h2",{id:"audits"},"Audits"),(0,a.kt)("p",null,"Ongoing automated and manual security audits are routinely performed by our audit partner ",(0,a.kt)("a",{parentName:"p",href:"https://www.sec3.dev/"},"Sec3"),". Automated audits are performed for every PR and security issues must be resolved before merging into the main branch. Manual ongoing audits are initiated for changes above a specific threshold and security issues must be resolved before merging into the main branch."),(0,a.kt)("p",null,"Large one-off audits are also performed when there are large changes to the code or functionality as detailed below."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,a.kt)("th",{parentName:"tr",align:null},"Last major one-off audit date"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Token Metadata"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-07-31")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Auction House"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-06-26")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Gumdrop"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-05-16")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Candy Machine*"),(0,a.kt)("td",{parentName:"tr",align:null},"2021-02-01")))),(0,a.kt)("p",null,"We do not have ongoing automated nor manual security audits that are routinely performed by our audit partner ",(0,a.kt)("a",{parentName:"p",href:"https://www.sec3.dev/"},"Sec3")," for our developer tools. However, audits may be ordered, facilitated, and paid for by our community of 3rd party Solana ecosystem developers or entities of thier own accord."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Developer Tools"),(0,a.kt)("th",{parentName:"tr",align:null},"Last audit date"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sugar CLI*"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-08-31")))),(0,a.kt)("p",null,"(*) Independent 3rd party audit"))}c.isMDXComponent=!0}}]);