"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6031],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return l},U:function(){return i}});var a=n(67294),r=n(45697),o=n.n(r);function i(e){let{children:t}=e;return a.createElement("div",{className:"accordion"},t)}function l(e){let{open:t,title:n,actions:r,keepAlive:o=!0,children:i}=e;const[l,u]=(0,a.useState)(t),d=l||o;return a.createElement("div",{className:["accordion-item",l?"accordion-item-opened":"accordion-item-closed"].join(" ")},a.createElement("div",{className:"accordion-item-header",onClick:()=>u(!l)},a.createElement("h3",null,a.createElement(s,{opened:l}),a.createElement("span",null,n)),r),a.createElement("div",{className:"accordion-item-content"},d&&i))}function s(e){let{opened:t}=e;return t?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}i.propTypes={children:o().any},l.propTypes={open:o().bool,title:o().string,children:o().any,actions:o().any,keepAlive:o().bool},s.propTypes={opened:o().bool}},27767:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var a=n(83117),r=(n(67294),n(3905)),o=n(38545);const i={description:"Uses a wallet address list to determine who is allowed to mint."},l="Allow List",s={unversionedId:"programs/candy-machine/available-guards/allow-list",id:"programs/candy-machine/available-guards/allow-list",title:"Allow List",description:"Uses a wallet address list to determine who is allowed to mint.",source:"@site/docs/01-programs/02-candy-machine/09-available-guards/13-allow-list.md",sourceDirName:"01-programs/02-candy-machine/09-available-guards",slug:"/programs/candy-machine/available-guards/allow-list",permalink:"/programs/candy-machine/available-guards/allow-list",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/09-available-guards/13-allow-list.md",tags:[],version:"current",lastUpdatedAt:1667290369,formattedLastUpdatedAt:"Nov 1, 2022",sidebarPosition:13,frontMatter:{description:"Uses a wallet address list to determine who is allowed to mint."},sidebar:"sidebar",previous:{title:"Address Gate",permalink:"/programs/candy-machine/available-guards/address-gate"},next:{title:"Mint Limit",permalink:"/programs/candy-machine/available-guards/mint-limit"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Guard Settings",id:"guard-settings",level:2},{value:"Mint Settings",id:"mint-settings",level:2},{value:"Route Instruction",id:"route-instruction",level:2},{value:"Validate a Merkle Proof",id:"validate-a-merkle-proof",level:3}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"allow-list"},"Allow List"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Allow List")," guard validates the minting wallet against a predefined list of wallets. If the minting wallet is not part of this list, minting will fail."),(0,r.kt)("p",null,"Providing a big list of wallets in the settings of this guard would require a lot of storage on the blockchain and would likely need more than one transaction to insert them all. Therefore, the Allow List guard uses ",(0,r.kt)("a",{parentName:"p",href:"https://en.m.wikipedia.org/wiki/Merkle_tree"},(0,r.kt)("strong",{parentName:"a"},"Merkle Trees"))," to verify that the minting wallet is part of the preconfigured list of wallets."),(0,r.kt)("p",null,"This works by creating a binary tree of hashes where all leaves hash themselves two by two until we reach the final hash known as the ",(0,r.kt)("strong",{parentName:"p"},"Merkle Root"),". This means that if any leaf were to change, the final Merkle Root would be corrupted."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsAllowListMerkleTree1.png",src:n(21840).Z+"#radius",width:"2376",height:"984"})),(0,r.kt)("p",null,"To verify that a leaf is part of the tree, we simply need a list of all the intermediary hashes that allow us to go up the tree and re-compute the Merkle Root. We call this list of intermediary hashes a ",(0,r.kt)("strong",{parentName:"p"},"Merkle Proof"),". If the computed Merkle Root matches the stored Merkle Root, we can be sure that the leaf is part of the tree and therefore part of the original list."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsAllowListMerkleTree2.png",src:n(58729).Z+"#radius",width:"2376",height:"984"})),(0,r.kt)("p",null,"Therefore, the Allow List guard\u2019s settings require a Merkle Root which acts as a source of truth for the preconfigured list of allowed wallets. For a wallet to prove it is on the allowed list, it must provide a valid Merkle Proof that allows the program to re-compute the Merkle Root and ensure it matches the guard\u2019s settings."),(0,r.kt)("p",null,"Note that our SDKs provide helpers to make it easy to create Merkle Root and Merkle Proofs for a given list of wallets."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsAllowList.png",src:n(25209).Z+"#radius",width:"2472",height:"1296"})),(0,r.kt)("h2",{id:"guard-settings"},"Guard Settings"),(0,r.kt)("p",null,"The Allow List guard contains the following settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Merkle Root"),": The Root of the Merkle Tree representing the allow list.")),(0,r.kt)(o.U,{mdxType:"Accordion"},(0,r.kt)(o.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"To help us manage Merkle Trees, the JS SDK provides two helper methods called ",(0,r.kt)("inlineCode",{parentName:"p"},"getMerkleRoot")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getMerkleProof")," that you may use like so."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { getMerkleProof, getMerkleRoot } from '@metaplex-foundation/js';\n\nconst allowList = [\n  'Ur1CbWSGsXCdedknRbJsEk7urwAvu1uddmQv51nAnXB',\n  'GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS',\n  'AT8nPwujHAD14cLojTcB1qdBzA1VXnT6LVGuUd6Y73Cy',\n];\n\nconst merkleRoot = getMerkleRoot(allowList);\nconst validMerkleProof = getMerkleProof(allowList, 'Ur1CbWSGsXCdedknRbJsEk7urwAvu1uddmQv51nAnXB');\nconst invalidMerkleProof = getMerkleProof(allowList, 'invalid-address');\n")),(0,r.kt)("p",null,"Once we have computed the Merkle Root of our allow list, we can use it to set up the Allow List guard on our Candy Machine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { getMerkleRoot } from '@metaplex-foundation/js';\n\nconst allowList = [\n  'Ur1CbWSGsXCdedknRbJsEk7urwAvu1uddmQv51nAnXB',\n  'GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS',\n  'AT8nPwujHAD14cLojTcB1qdBzA1VXnT6LVGuUd6Y73Cy',\n];\n\nconst { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  guards: {\n    allowList: {\n      merkleRoot: getMerkleRoot(allowList),\n    },\n  },\n});\n")),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.AllowListGuardSettings.html"},"Guard Settings"),".")))),(0,r.kt)("h2",{id:"mint-settings"},"Mint Settings"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The Allow List guard does not need Mint Settings.")),(0,r.kt)("p",null,"Note that, whilst no Mint Settings are required, ",(0,r.kt)("strong",{parentName:"p"},"we must still validate the minting wallet by providing a Merkle Proof"),". See ",(0,r.kt)("a",{parentName:"p",href:"#validate-a-merkle-proof"},"Validate a Merkle Proof")," below for more details."),(0,r.kt)("p",null,"Also note that, if you\u2019re planning on constructing instructions without the help of our SDKs, you will need to add the Allow List Proof PDA to the remaining accounts of the mint instruction. See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/mpl-candy-guard#allowlist"},"Candy Guard\u2019s program documentation")," for more details."),(0,r.kt)("h2",{id:"route-instruction"},"Route Instruction"),(0,r.kt)("p",null,"The Allow List route instruction supports the following features."),(0,r.kt)("h3",{id:"validate-a-merkle-proof"},"Validate a Merkle Proof"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Path: ",(0,r.kt)("inlineCode",{parentName:"em"},"proof"))),(0,r.kt)("p",null,"Instead of passing the Merkle Proof directly to the mint instruction, the minting wallet must perform a ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/programs/candy-machine/minting#minting-with-pre-validation"},"Pre-Validation")," by using the route instruction of the Allow List guard."),(0,r.kt)("p",null,"This route instruction will compute the Merkle Root from the provided Merkle Proof and, if valid, will create a new PDA account acting as proof that the minting wallet is part of the allowed list. Therefore, when minting, the Allow List guard only needs to check for the existence of this PDA account to authorize or deny minting to the wallet."),(0,r.kt)("p",null,"So why can\u2019t we just verify the Merkle Proof directly within the mint instruction? That\u2019s simply because, for big allow lists, Merkle Proofs can end up being pretty lengthy. After a certain size, it becomes impossible to include it within the mint transaction that already contains a decent amount of instructions. By separating the validation process from the minting process, we make it possible for allow lists to be as big as we need them to be."),(0,r.kt)("p",null,"This path of the route instruction accepts the following arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Path")," = ",(0,r.kt)("inlineCode",{parentName:"li"},"proof"),": Selects the path to execute in the route instruction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Merkle Proof"),": The list of intermediary hashes that should be used to compute the Merkle Root and verify that it matches the Merkle Root stored on the guard\u2019s settings.")),(0,r.kt)(o.U,{mdxType:"Accordion"},(0,r.kt)(o.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"Here again, we can use the Merkle Tree helpers provided by the JS SDK to get the Merkle Proof for the minting wallet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { getMerkleProof, getMerkleRoot } from '@metaplex-foundation/js';\n\nconst allowList = [\n  'Ur1CbWSGsXCdedknRbJsEk7urwAvu1uddmQv51nAnXB',\n  'GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS',\n  'AT8nPwujHAD14cLojTcB1qdBzA1VXnT6LVGuUd6Y73Cy',\n];\nconst mintingWallet = metaplex.identity().publicKey.toBase58();\n\nawait metaplex.candyMachines().callGuardRoute({\n  candyMachine,\n  guard: 'allowList',\n  settings: {\n    path: 'proof',\n    merkleProof: getMerkleProof(allowList, mintingWallet),\n  },\n});\n\n// The `mintingWallet` is now allowed to mint from the Candy Machine.\n")),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#callGuardRoute"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#callGuardRoute"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.AllowListGuardRouteSettings.html"},"Route Settings"),".")))))}p.isMDXComponent=!0},25209:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsAllowList-2d55379c57646353ec0e7720074fc26b.png"},21840:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsAllowListMerkleTree1-dc11abd75c5af77e2c3a34ca0b363053.png"},58729:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsAllowListMerkleTree2-e6431bdad3fa57edce122b2de4cbb285.png"}}]);