"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1772],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=c(n),b=i,d=y["".concat(l,".").concat(b)]||y[b]||p[b]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},77741:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var r=n(83117),i=(n(67294),n(3905));const a={sidebar_label:"Stability",sidebar_position:13},o="Stability Index",s={unversionedId:"stability",id:"stability",title:"Stability Index",description:"Throughout the documentation are indications of a section's stability. Some APIs",source:"@site/docs/stability.md",sourceDirName:".",slug:"/stability",permalink:"/stability",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/stability.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_label:"Stability",sidebar_position:13},sidebar:"sidebar",previous:{title:"NFT Hash Lists",permalink:"/mint-lists"},next:{title:"Security Policy",permalink:"/security-policy"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stability-index"},"Stability Index"),(0,i.kt)("p",null,"Throughout the documentation are indications of a section's stability. Some APIs\nand projects are so proven and so relied upon that they are unlikely to ever\nchange at all.  Others are brand new and experimental, or known to be hazardous."),(0,i.kt)("p",null,"The stability indices are as follows:"),(0,i.kt)("div",{class:"api_stability api_stability_0"},"Stability: 0 - Deprecated. The feature may emit warnings. Backward compatibility is not guaranteed."),(0,i.kt)("br",null),(0,i.kt)("div",{class:"api_stability api_stability_1"},"Stability: 1 - Experimental. The feature may emit warnings. The feature is not subject to ",(0,i.kt)("a",{href:"https://semver.org/"},"Semantic Versioning")," rules. Non-backward compatible changes or removal may occur in any future release. Use of the feature is not recommended in production or mainnet environments."),(0,i.kt)("br",null),(0,i.kt)("div",{class:"api_stability api_stability_2"},"Stability: 2 - Stable. Compatibility with the ecosystem is a high priority."),(0,i.kt)("br",null),(0,i.kt)("div",{class:"api_stability api_stability_3"},"Stability: 3 - Legacy. The feature is no longer recommended for use. While it likely will not be removed, and is still covered by semantic-versioning guarantees, use of the feature should be avoided."),(0,i.kt)("p",null,"Use caution when making use of Experimental features. Users may not be aware\nthat experimental features are being used. Bugs or behavior changes may\nsurprise users when Experimental API modifications occur. To avoid surprises,\nuse of an Experimental feature may need a command-line flag."))}p.isMDXComponent=!0}}]);