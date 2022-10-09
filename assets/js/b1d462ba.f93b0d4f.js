"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1068],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11496:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(83117),a=(n(67294),n(3905));const o={},i="Quick Start",l={unversionedId:"developer-tools/sugar/overview/quick-start",id:"developer-tools/sugar/overview/quick-start",title:"Quick Start",description:"For developers already familiar with working on Solana, follow this quick start guide to get going with Sugar. If you are new to Solana we recommend you start with the My First Candy Machine tutorial which will take you from 0 to creating your first candy machine using Sugar.",source:"@site/docs/03-developer-tools/00-sugar/01-overview/02-quick-start.md",sourceDirName:"03-developer-tools/00-sugar/01-overview",slug:"/developer-tools/sugar/overview/quick-start",permalink:"/developer-tools/sugar/overview/quick-start",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/03-developer-tools/00-sugar/01-overview/02-quick-start.md",tags:[],version:"current",lastUpdatedAt:1665359642,formattedLastUpdatedAt:"Oct 9, 2022",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Installation",permalink:"/developer-tools/sugar/overview/installation"},next:{title:"Tutorials",permalink:"/tools/sugar/tutorials/"}},s={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick Start"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For developers already familiar with working on Solana, follow this quick start guide to get going with Sugar. If you are new to Solana we recommend you start with the ",(0,a.kt)("a",{parentName:"p",href:"../tutorials/my-first-candy-machine"},"My First Candy Machine tutorial")," which will take you from 0 to creating your first candy machine using Sugar.")),(0,a.kt)("p",null,"Set up your Solana CLI config with an RPC url and a keypair:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"solana config set --url <rpc url> --keypair <path to keypair file>\n")),(0,a.kt)("p",null,"Sugar will then use these settings by default, if you don't specify them as CLI options, allowing commands to be much simpler. If you need help setting up Solana CLI and creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"devnet")," wallet, check the ",(0,a.kt)("a",{parentName:"p",href:"/guides/cli-wallet"},"CLI Wallet Guide"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Sugar requires a RPC node with a high-rate limit so is not suitable for use with the default public Solana RPC nodes:\n",(0,a.kt)("a",{parentName:"p",href:"https://api.mainnet-beta.solana.com"},"https://api.mainnet-beta.solana.com")," and ",(0,a.kt)("a",{parentName:"p",href:"https://api.devnet.solana.com."},"https://api.devnet.solana.com.")," Instead, we recommend you use one of the free or paid RPCs from the community list ",(0,a.kt)("a",{parentName:"p",href:"https://docs.metaplex.com/resources/rpc-providers"},"here"),".")),(0,a.kt)("p",null,"Create a folder for your project and within it, create a folder named ",(0,a.kt)("inlineCode",{parentName:"p"},"assets")," to store your json and media file pairs with the naming convention 0.json, 0.png, 1.json, 1.png, etc., where the extension is ",(0,a.kt)("inlineCode",{parentName:"p"},".json"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".png"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".jpg"),", etc. This is the same format described in ",(0,a.kt)("a",{parentName:"p",href:"../guides/preparing-assets"},"Preparing your Assets"),"."),(0,a.kt)("p",null,"Your project directory will then look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"my_project/\n    assets/\n       0.png\n       0.json\n       1.png\n       1.json\n       . . .\n")),(0,a.kt)("p",null,"You can then use the ",(0,a.kt)("inlineCode",{parentName:"p"},"launch")," command from within the project directory to start an interactive process to create your config file and deploy a Candy Machine to Solana:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"user@User-MacBook-Pro my_project % sugar launch\n")),(0,a.kt)("p",null,"At the end of the execution of the ",(0,a.kt)("inlineCode",{parentName:"p"},"launch")," command, if you do not get any errors, the Candy Machine will be deployed on-chain."),(0,a.kt)("p",null,"Feel free to check out our ",(0,a.kt)("a",{parentName:"p",href:"/guides/candy-machine-ui"},"Candy Machine Minting UI")," guide for help with setting up a minting website."))}p.isMDXComponent=!0}}]);