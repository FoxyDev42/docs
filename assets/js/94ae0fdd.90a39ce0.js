"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1107],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return a?r.createElement(h,o(o({ref:t},m),{},{components:a})):r.createElement(h,o({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4067:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=a(83117),n=(a(67294),a(3905));const i={description:"Lists the various libraries and SDKs you can use to manage Candy Machines."},o="Getting Started",l={unversionedId:"programs/candy-machine/getting-started",id:"programs/candy-machine/getting-started",title:"Getting Started",description:"Lists the various libraries and SDKs you can use to manage Candy Machines.",source:"@site/docs/01-programs/02-candy-machine/01-getting-started.md",sourceDirName:"01-programs/02-candy-machine",slug:"/programs/candy-machine/getting-started",permalink:"/programs/candy-machine/getting-started",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/01-getting-started.md",tags:[],version:"current",lastUpdatedAt:1672653776,formattedLastUpdatedAt:"Jan 2, 2023",sidebarPosition:1,frontMatter:{description:"Lists the various libraries and SDKs you can use to manage Candy Machines."},sidebar:"sidebar",previous:{title:"Overview",permalink:"/programs/candy-machine/overview"},next:{title:"Candy Machine Settings",permalink:"/programs/candy-machine/candy-machine-settings"}},s={},p=[{value:"SDKs",id:"sdks",level:2},{value:"JavaScript SDK",id:"javascript-sdk",level:3},{value:"Swift SDK",id:"swift-sdk",level:3},{value:"Kotlin SDK",id:"kotlin-sdk",level:3},{value:"Program Libraries",id:"program-libraries",level:2},{value:"JavaScript Program Libraries",id:"javascript-program-libraries",level:3},{value:"Swift Program Libraries",id:"swift-program-libraries",level:3},{value:"Kotlin Program Libraries",id:"kotlin-program-libraries",level:3},{value:"Rust Crates",id:"rust-crates",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"This page aims to help you get started with Candy Machines by listing all relevant SDKs and libraries that interact with them."),(0,n.kt)("h2",{id:"sdks"},"SDKs"),(0,n.kt)("p",null,"SDKs are the most developer-friendly way to interact with Metaplex programs. They provide layers of abstractions that match the mental model of this documentation. On top of that, they offer various helper modules and can be extended via plugins."),(0,n.kt)("h3",{id:"javascript-sdk"},"JavaScript SDK"),(0,n.kt)("p",null,"If you are developing for the web or using\xa0",(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js"),", then our JavaScript SDK is a great way to interact with Metaplex programs. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/js#metaplex-javascript-sdk"},"You can read more about it here"),"."),(0,n.kt)("p",null,"Once the JS SDK installed, you can access its Candy Machine module via ",(0,n.kt)("inlineCode",{parentName:"p"},"metaplex.candyMachines()"),". It is composed of several methods that focus on real use-cases to make our life easier. Here are some of them."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"metaplex.candyMachines().create();\nmetaplex.candyMachines().update();\nmetaplex.candyMachines().insertItems();\nmetaplex.candyMachines().delete();\nmetaplex.candyMachines().mint();\nmetaplex.candyMachines().findByAddress();\nmetaplex.candyMachines().callGuardRoute();\n")),(0,n.kt)("p",null,"Note that the rest of this documentation will provide code examples using this JavaScript SDK."),(0,n.kt)("p",null,"\ud83d\udd17\xa0",(0,n.kt)("strong",{parentName:"p"},"Helpful Links:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/js"},"GitHub Repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@metaplex-foundation/js"},"NPM Package")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html"},"API References"))),(0,n.kt)("h3",{id:"swift-sdk"},"Swift SDK"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Coming soon.")),(0,n.kt)("h3",{id:"kotlin-sdk"},"Kotlin SDK"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Coming soon.")),(0,n.kt)("h2",{id:"program-libraries"},"Program Libraries"),(0,n.kt)("p",null,"Program Libraries are auto-generated from the Program\u2019s IDL using ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/solita"},"Solita"),". Whilst they require you to ",(0,n.kt)("a",{parentName:"p",href:"/programs/understanding-programs"},"understand Solana programs")," and wire your own instructions, they have the advantage of immediately using the latest features when SDKs might take a bit longer to implement them."),(0,n.kt)("p",null,"Note that Candy Machine is composed of the following two programs which means you will need one library for each of them."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Candy Machine Core"),": The main program that allows managing Candy Machines and minting without guards."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Candy Guard"),": The default Candy Guard program that ships with a large selection of guards to chose from.")),(0,n.kt)("h3",{id:"javascript-program-libraries"},"JavaScript Program Libraries"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Candy Machine Core"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/metaplex-program-library/tree/master/candy-machine-core/js"},"GitHub Repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@metaplex-foundation/mpl-candy-machine-core"},"NPM Package")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/metaplex-program-library/docs/candy-machine-core/index.html"},"API References")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Candy Guard"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/mpl-candy-guard/tree/main/js"},"GitHub Repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@metaplex-foundation/mpl-candy-guard"},"NPM Package")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/mpl-candy-guard/index.html"},"API References"))))),(0,n.kt)("h3",{id:"swift-program-libraries"},"Swift Program Libraries"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Coming soon.")),(0,n.kt)("h3",{id:"kotlin-program-libraries"},"Kotlin Program Libraries"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Coming soon.")),(0,n.kt)("h2",{id:"rust-crates"},"Rust Crates"),(0,n.kt)("p",null,"If you are developing in Rust, you can also use the Rust crates to interact with Metaplex\u2019s programs. Since our programs are written in Rust, theses crates should contain everything you need to parse accounts and build instructions."),(0,n.kt)("p",null,"This can be helpful when developing Rust clients but also when making\xa0",(0,n.kt)("a",{parentName:"p",href:"https://solanacookbook.com/references/programs.html#how-to-do-cross-program-invocation"},"CPI calls"),"\xa0to Metaplex programs within your own program."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Candy Machine Core"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/metaplex-program-library/tree/master/candy-machine-core/program"},"GitHub Repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://crates.io/crates/mpl-candy-machine-core"},"Crate Page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.rs/mpl-candy-machine-core/0.1.0/mpl_candy_machine_core/"},"API References")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Candy Guard"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/mpl-candy-guard"},"GitHub Repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://crates.io/crates/mpl-candy-guard"},"Crate Page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.rs/mpl-candy-guard/0.1.0/mpl_candy_guard/"},"API References"))))))}c.isMDXComponent=!0}}]);