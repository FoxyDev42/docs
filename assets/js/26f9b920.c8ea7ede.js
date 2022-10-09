"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6604],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},62468:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var r=n(83117),a=(n(67294),n(3905));const i={sidebar_label:"1. Create Fair Launch"},l="Create Fair Launch",o={unversionedId:"deprecated/fair-launch/create-fair-launch",id:"deprecated/fair-launch/create-fair-launch",title:"Create Fair Launch",description:"- -e, --env: Solana cluster env name.",source:"@site/docs/06-deprecated/02-fair-launch/00-create-fair-launch.md",sourceDirName:"06-deprecated/02-fair-launch",slug:"/deprecated/fair-launch/create-fair-launch",permalink:"/deprecated/fair-launch/create-fair-launch",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/06-deprecated/02-fair-launch/00-create-fair-launch.md",tags:[],version:"current",lastUpdatedAt:1665359642,formattedLastUpdatedAt:"Oct 9, 2022",sidebarPosition:0,frontMatter:{sidebar_label:"1. Create Fair Launch"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/deprecated/fair-launch/introduction"},next:{title:"2. Display Fair Launch",permalink:"/deprecated/fair-launch/display-fair-launch"}},c={},u=[],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-fair-launch"},"Create Fair Launch"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-e, --env"),": Solana cluster env name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-k, --keypair"),": Solana wallet location."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-u, --uuid"),": 6 character alphanumeric string (must be unique relative to your keypair)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-f, --fee"),": The fee that every person has to pay."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-s, --price-range-start"),": Minimum price accepted for bidding."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-pe, --price-range-end"),": Maximum price accepted for bidding."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-pos, --phase-one-start-date"),": Phase 1 starting date."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-poe, --phase-one-end-date"),": Phase 1 ending date."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-pte, --phase-two-end-date"),": Phase 2 ending date."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-n, --number-of-tokens"),": Number of tokens to sell."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-ts, --tick-size"),": Tick size."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-ld, --lottery-duration"),": Duration of lottery."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-arbp, --anti-rug-reserve-bp"),": Anti-rug treasury reserve, the percent of the treasury that will be locked to pay refunds (50% = 5000) ."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-atc, --anti-rug-token-requirement"),": Anti-rug token requirement, when the total remaining tokens is equal or lower than this number, the treasury will be unlocked and not more refunds will be issued."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-sd, --self-destruct-date"),": Anti-rug self-destruct date, if the NFTs were not provided by this date the users can start getting refunds.")),(0,a.kt)("p",null,"You can create Fair Launch by running this command: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ts-node ~/metaplex-foundation/deprecated-clis/src/fair-launch-cli.ts new_fair_launch --env devnet --keypair ~/.config/solana/devnet.json --uuid "devnet" --fee 0.1 --price-range-start 0.1 --price-range-end 0.5 --phase-one-start-date "16 Dec 2021 11:30:00 UTC" --phase-one-end-date "16 Dec 2021 12:00:00 UTC" --phase-two-end-date "16 Dec 2021 12:30:00 UTC" --number-of-tokens 11 --tick-size 0.1 --lottery-duration 80000\n')),(0,a.kt)("p",null,"expected output: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"create fair launch Done: FPnv9xr4r7vMNNBgvLVzLsvmQFYh1YmhuRWRGdRFecmb\n")))}d.isMDXComponent=!0}}]);