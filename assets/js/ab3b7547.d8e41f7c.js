"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6555],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),v=o,m=d["".concat(l,".").concat(v)]||d[v]||p[v]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54171:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var r=n(83117),o=(n(67294),n(3905));const a={sidebar_position:5,unlisted:!0},i="Candy Machine Overview",c={unversionedId:"overviews/candy_machine_overview",id:"overviews/candy_machine_overview",title:"Candy Machine Overview",description:"The Candy Machine, or CM for short, is a Solana Program designed to reliably sell one NFT at a time.",source:"@site/docs/overviews/candy_machine_overview.md",sourceDirName:"overviews",slug:"/overviews/candy_machine_overview",permalink:"/overviews/candy_machine_overview",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/overviews/candy_machine_overview.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,unlisted:!0},sidebar:"sidebar",previous:{title:"Stores Overview",permalink:"/overviews/stores_overview"},next:{title:"NFT Storage Overview",permalink:"/overviews/storage_overview"}},l={},s=[{value:"Motivation",id:"motivation",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"candy-machine-overview"},"Candy Machine Overview"),(0,o.kt)("p",null,"The Candy Machine, or CM for short, is a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/programming-model/overview"},"Solana Program")," designed to reliably sell one NFT at a time."),(0,o.kt)("p",null,"The Candy Machine program behaves like a real-world mechanical candy machine, where a person expects to put a coin into the machine and get one item out of it. The usual exceptions apply, for example and most significantly it won't take your coin if it's out of candy."),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"The Candy Machine was created to address problems with the way NFT drops were being handled on the Solana blockchain. Key problems included:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"accepting a buyers funds when the project was out of NFTs to sell "),(0,o.kt)("li",{parentName:"ul"},"not having a precise and global start time"),(0,o.kt)("li",{parentName:"ul"},"projects were not producing consistent, well formed valid NFTs")),(0,o.kt)("p",null,"Basically, the ecosystem needed an easier way to solve the most fundamental problems that buyers, sellers and market-places faced."))}p.isMDXComponent=!0}}]);