"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[122],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),p=c(a),u=i,m=p["".concat(d,".").concat(u)]||p[u]||h[u]||o;return a?n.createElement(m,s(s({ref:t},l),{},{components:a})):n.createElement(m,s({ref:t},l))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=p;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},38545:function(e,t,a){a.d(t,{Q:function(){return r},U:function(){return s}});var n=a(67294),i=a(45697),o=a.n(i);function s(e){let{children:t}=e;return n.createElement("div",{className:"accordion"},t)}function r(e){let{open:t,title:a,actions:i,keepAlive:o=!0,children:s}=e;const[r,c]=(0,n.useState)(t),l=r||o;return n.createElement("div",{className:["accordion-item",r?"accordion-item-opened":"accordion-item-closed"].join(" ")},n.createElement("div",{className:"accordion-item-header",onClick:()=>c(!r)},n.createElement("h3",null,n.createElement(d,{opened:r}),n.createElement("span",null,a)),i),n.createElement("div",{className:"accordion-item-content"},l&&s))}function d(e){let{opened:t}=e;return t?n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},n.createElement("rect",{width:"256",height:"256",fill:"none"}),n.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},n.createElement("rect",{width:"256",height:"256",fill:"none"}),n.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}s.propTypes={children:o().any},r.propTypes={open:o().bool,title:o().string,children:o().any,actions:o().any,keepAlive:o().bool},d.propTypes={opened:o().bool}},71053:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var n=a(83117),i=(a(67294),a(3905)),o=a(38545);const s={description:"Explains how to manage Candy Machines."},r="Managing Candy Machines",d={unversionedId:"programs/candy-machine/managing-candy-machines",id:"programs/candy-machine/managing-candy-machines",title:"Managing Candy Machines",description:"Explains how to manage Candy Machines.",source:"@site/docs/01-programs/02-candy-machine/03-managing-candy-machines.md",sourceDirName:"01-programs/02-candy-machine",slug:"/programs/candy-machine/managing-candy-machines",permalink:"/programs/candy-machine/managing-candy-machines",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/03-managing-candy-machines.md",tags:[],version:"current",lastUpdatedAt:1672653776,formattedLastUpdatedAt:"Jan 2, 2023",sidebarPosition:3,frontMatter:{description:"Explains how to manage Candy Machines."},sidebar:"sidebar",previous:{title:"Candy Machine Settings",permalink:"/programs/candy-machine/candy-machine-settings"},next:{title:"Inserting Items",permalink:"/programs/candy-machine/inserting-items"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Create Candy Machines",id:"create-candy-machines",level:2},{value:"Candy Machine Account",id:"candy-machine-account",level:2},{value:"Fetch Candy Machines",id:"fetch-candy-machines",level:2},{value:"Update Authorities",id:"update-authorities",level:2},{value:"Update Shared NFT Data",id:"update-shared-nft-data",level:2},{value:"Update Collection",id:"update-collection",level:2},{value:"Update Item Settings",id:"update-item-settings",level:2},{value:"Delete Candy Machines",id:"delete-candy-machines",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:l};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"managing-candy-machines"},"Managing Candy Machines"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"On ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/candy-machine-settings"},"the previous page"),", we went through the various settings of a Candy Machine. So now, let\u2019s see how we can use these settings to create and update Candy Machines. We\u2019ll also talk about how to fetch an existing Candy Machine and how to delete it when it has served its purpose."),(0,i.kt)("p",null,"Essentially, we\u2019ll be going through the Create, Read, Update and Delete steps of a Candy Machine. Let\u2019s go!"),(0,i.kt)("h2",{id:"create-candy-machines"},"Create Candy Machines"),(0,i.kt)("p",null,"You may use the settings discussed on the previous page to create a brand-new Candy Machine account."),(0,i.kt)("p",null,"Our SDKs push this even further and will associate every new Candy Machine account with a new Candy Guard account which keeps track of all activated guards affecting the minting process. On this page, we will focus on the Candy Machine account but we\u2019ll dig into Candy Guard accounts and what we can do with them on ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/candy-guards"},"dedicated pages"),"."),(0,i.kt)("p",null,"Remember that a Candy Machine ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/candy-machine-settings#metaplex-certified-collections"},"must be associated with a Collection NFT")," and its update authority must authorize this operation. If you haven\u2019t got a Collection NFT for your Candy Machine yet, our SDKs can help with that too."),(0,i.kt)(o.U,{mdxType:"Accordion"},(0,i.kt)(o.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"Here\u2019s how you can create a Candy Machine using a brand new Collection NFT using the JS SDK. Notice that, by default, the current identity is used as the authority of these entities."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { toBigNumber } from '@metaplex-foundation/js';\nimport { Keypair } from '@solana/web3.js';\n\n// Create the Collection NFT.\nconst { nft: collectionNft } = await metaplex.nfts().create({\n  name: 'My Collection NFT',\n  uri: 'https://example.com/path/to/some/json/metadata.json',\n  sellerFeeBasisPoints: 0,\n  isCollection: true,\n});\n\n// Create the Candy Machine.\nconst { candyMachine } = await metaplex.candyMachines().create({\n  itemsAvailable: toBigNumber(5000),\n  sellerFeeBasisPoints: 333, // 3.33%\n  collection: {\n    address: collectionNft.address,\n    updateAuthority: metaplex.identity(),\n  },\n});\n")),(0,i.kt)("p",null,"As mentioned above, this operation will also take care of creating and associating a new Candy Guard account with the created Candy Machine. That\u2019s because a Candy Machine without a Candy Guard is not very useful and you\u2019ll want to do that most of the time. Still, if you\u2019d like to disable that behaviour, you may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"withoutCandyGuard")," option."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const { candyMachine } = await metaplex.candyMachines().create({\n  withoutCandyGuard: true,\n  // ...\n});\n")),(0,i.kt)("p",null,"In these examples, we only focused on the required parameters but you may want to check out the following API References to see what you can do with this ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," operation."),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create"},"Operation"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html"},"Input"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html"},"Output"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create"},"Transaction Builder"),".")))),(0,i.kt)("h2",{id:"candy-machine-account"},"Candy Machine Account"),(0,i.kt)("p",null,"Now that we\u2019ve created the Candy Machine account, let\u2019s see what data is stored inside it."),(0,i.kt)("p",null,"First of all, it stores all the settings provided when the account was created and keeps track of any changes."),(0,i.kt)("p",null,"It also keeps track of the number of NFTs that were minted from the Candy Machine. Note that, as soon as this number goes from 0 to 1, most settings will no longer be updatable. Additionally, there is a ",(0,i.kt)("strong",{parentName:"p"},"Feature Flags")," attribute which helps the program with backward and forward compatibility as more features get introduced."),(0,i.kt)("p",null,"Finally, it stores all items inserted in the Candy Machine and whether or not they have been minted. This only applies for Candy Machine using ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/candy-machine-settings#config-line-settings"},(0,i.kt)("strong",{parentName:"a"},"Config Line Settings"))," since ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/candy-machine-settings#hidden-settings"},(0,i.kt)("strong",{parentName:"a"},"Hidden Settings"))," don\u2019t allow you to insert any items. This section contains the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The number of items that have been loaded."),(0,i.kt)("li",{parentName:"ul"},"A list of all items that have been or will be inserted. When an item is not inserted yet, the name and URI of the item at that position are empty."),(0,i.kt)("li",{parentName:"ul"},"A bitmap \u2014 a list of yes or no \u2014 that keeps track of which items have been loaded. When this bitmap is full of yeses, all items have been loaded."),(0,i.kt)("li",{parentName:"ul"},"A list of all items that have ",(0,i.kt)("em",{parentName:"li"},"not")," been minted yet when minting using a random order. This allows the program to grab an index at random without having to worry about picking an index that has already been minted and start again.")),(0,i.kt)("p",null,"Note that this last section is purposely not deserialised on the program but our SDKs parse all that data for you in a human-friendly format."),(0,i.kt)("p",null,"For more detailed information about the Candy Machine account, check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/metaplex-program-library/tree/master/candy-machine-core/program#account"},"program\u2019s API References"),"."),(0,i.kt)(o.U,{mdxType:"Accordion"},(0,i.kt)(o.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"The best way to check how Candy Machines are modelled in the JS SDK is by checking ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CandyMachine.html"},"the API References of the ",(0,i.kt)("inlineCode",{parentName:"a"},"CandyMachine")," model"),". Notice how the ",(0,i.kt)("inlineCode",{parentName:"p"},"CandyMachine")," model encapsulates both the Candy Machine account and the (optional) Candy Guard account so you have everything you need under the same object."),(0,i.kt)("p",null,"Here\u2019s a small code example showcasing some of the Candy Machine attributes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const { candyMachine } = await metaplex.candyMachines().create({...});\n\ncandyMachine.address;         // The public key of the Candy Machine account.\ncandyMachine.itemsAvailable;  // Number of NFTs available.\ncandyMachine.itemsMinted;     // Number of NFTs minted.\ncandyMachine.itemsRemaining;  // Number of NFTs left to mint.\ncandyMachine.items[0].index;  // The index of the first loaded item.\ncandyMachine.items[0].name;   // The name of the first loaded item (with prefix).\ncandyMachine.items[0].uri;    // The URI of the first loaded item (with prefix).\ncandyMachine.items[0].minted; // Whether the first item has been minted.\n"))))),(0,i.kt)("h2",{id:"fetch-candy-machines"},"Fetch Candy Machines"),(0,i.kt)("p",null,"To fetch an existing Candy Machine, you simply need to provide its address and our SDKs will take care of parsing the account data for you."),(0,i.kt)(o.U,{mdxType:"Accordion"},(0,i.kt)(o.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"Here\u2019s how you can fetch a Candy Machine using its address on the JS SDK."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PublicKey } from '@solana/web3.js';\n\nconst candyMachine = await metaplex\n  .candyMachines()\n  .findByAddress({ address: new PublicKey(\"Gjwc...thJS\") });\n")),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#findByAddress"},"Operation"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.FindCandyMachineByAddressInput.html"},"Input"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CandyMachine.html"},"Output"),".")))),(0,i.kt)("h2",{id:"update-authorities"},"Update Authorities"),(0,i.kt)("p",null,"Once a Candy Machine is created, you can update most of its settings later on, as long as you are the authority of the Candy Machine. In the next few sections we\u2019ll see how to update these settings but first, let's see how you can update the ",(0,i.kt)("strong",{parentName:"p"},"Authority")," and ",(0,i.kt)("strong",{parentName:"p"},"Mint Authority")," of a Candy Machine."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To update the authority, you need to pass the current authority as a signer and the address of the new authority."),(0,i.kt)("li",{parentName:"ul"},"To update the mint authority, you need to pass both the current authority and the new mint authority as signers. This is because the mint authority is mostly used to associate a Candy Guard with a Candy Machine. Making the mint authority a signer prevents anyone to use someone else Candy Guard as this could create side effects on the original Candy Machine.")),(0,i.kt)(o.U,{mdxType:"Accordion"},(0,i.kt)(o.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"Here\u2019s how you can update the authority of a Candy Machine using the JS SDK."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Keypair } from '@solana/web3.js';\n\nconst currentAuthority = Keypair.generate();\nconst newAuthority = Keypair.generate();\nconst candyMachine = await metaplex\n  .candyMachines()\n  .findByAddress({...});\n\nawait metaplex.candyMachines().update({\n  candyMachine,\n  authority: currentAuthority,\n  newAuthority: newAuthority.address,\n});\n\nconst updatedCandyMachine = await metaplex\n  .candyMachines()\n  .refresh(candyMachine);\n")),(0,i.kt)("p",null,"Note that, contrary to the ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," operation, the ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," operation does not return the updated Candy Machine model as you might not need it. If you do, you may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh")," operation as demonstrated in the example above."),(0,i.kt)("p",null,"Whilst you\u2019d probably never want to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"mintAuthority")," directly since it would override the associated Candy Guard account, this is how you\u2019d do it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Keypair } from '@solana/web3.js';\n\nconst currentAuthority = Keypair.generate();\nconst newMintAuthority = Keypair.generate();\n\nawait metaplex.candyMachines().update({\n  candyMachine,\n  authority: currentAuthority,\n  newMintAuthority: newMintAuthority, // Notice this must be a Signer.\n});\n")),(0,i.kt)("p",null,"Finally, note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," method can be used to update for a variety of settings and you may also update them all at once. Check out the following API References to see everything available to you."),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#update"},"Operation"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.UpdateCandyMachineInput.html"},"Input"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.UpdateCandyMachineOutput.html"},"Output"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#update"},"Transaction Builder"),".")))),(0,i.kt)("h2",{id:"update-shared-nft-data"},"Update Shared NFT Data"),(0,i.kt)("p",null,"You may also update the attributes shared between all minted NFTs of a Candy Machine. As mentioned in ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/candy-machine-settings#settings-shared-by-all-nfts"},"the previous page"),", these are: Seller Fee Basis Points, Symbol, Max Edition Supply, Is Mutable and Creators."),(0,i.kt)("p",null,"Note that once the first NFT has been minted, these attributes can no longer be updated."),(0,i.kt)(o.U,{mdxType:"Accordion"},(0,i.kt)(o.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"Here\u2019s an example of updating some of the shared NFT data on a Candy Machine. Any attributes that are not explicitly provided will stay the same."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"await metaplex.candyMachines().update({\n  candyMachine,\n  symbol: 'NEW',\n  sellerFeeBasisPoints: 100,\n  creators: [{ address: newCreator, share: 100 }],\n});\n")),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#update"},"Operation"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.UpdateCandyMachineInput.html"},"Input"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.UpdateCandyMachineOutput.html"},"Output"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#update"},"Transaction Builder"),".")))),(0,i.kt)("h2",{id:"update-collection"},"Update Collection"),(0,i.kt)("p",null,"Changing the Collection NFT associated with a Candy Machine is also possible. You\u2019ll need to provide the address of the Collection NFT\u2019s mint account as well as its update authority as a signer to approve this change."),(0,i.kt)("p",null,"Note that, here also, once the first NFT has been minted, the collection cannot be changed."),(0,i.kt)(o.U,{mdxType:"Accordion"},(0,i.kt)(o.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"To update the Collection NFT of a Candy Machine using the JS SDK you must provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"collection")," object containing the ",(0,i.kt)("inlineCode",{parentName:"p"},"address")," of the Collection NFT\u2019s mint account and the ",(0,i.kt)("inlineCode",{parentName:"p"},"updateAuthority")," of the Collection NFT as a signer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"await metaplex.candyMachines().update({\n  candyMachine,\n  collection: {\n    address: newCollection.address,\n    updateAuthority: newCollectionAuthority,\n  },\n});\n")),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#update"},"Operation"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.UpdateCandyMachineInput.html"},"Input"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.UpdateCandyMachineOutput.html"},"Output"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#update"},"Transaction Builder"),".")))),(0,i.kt)("h2",{id:"update-item-settings"},"Update Item Settings"),(0,i.kt)("p",null,"The item settings of a Candy Machine can also be updated but there are some limitations."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The item settings cannot be updated such that we are swapping between ",(0,i.kt)("strong",{parentName:"li"},"Config Line Settings")," and ",(0,i.kt)("strong",{parentName:"li"},"Hidden Settings"),". However, if we\u2019re not swapping the modes, the properties inside these settings can be updated."),(0,i.kt)("li",{parentName:"ul"},"When using ",(0,i.kt)("strong",{parentName:"li"},"Config Line Settings"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Items Available")," attribute cannot be updated."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Name Length")," and ",(0,i.kt)("strong",{parentName:"li"},"URI Length")," properties can only be updated to smaller values as the program will not resize the Candy Machine account during updates."))),(0,i.kt)("li",{parentName:"ul"},"Once the first NFT has been minted, these settings can no longer be updated.")),(0,i.kt)(o.U,{mdxType:"Accordion"},(0,i.kt)(o.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"The following example shows how to update the Config Line Settings of a Candy Machine using the JS SDK. The same can be done with Hidden Settings and the Items Available attribute (when using Hidden Settings)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"await metaplex.candyMachines().update({\n  candyMachine,\n  itemSettings: {\n    type: 'configLines',\n    prefixName: 'My New NFT #$ID+1$',\n    nameLength: 0,\n    prefixUri: 'https://arweave.net/',\n    uriLength: 43,\n    isSequential: true,\n  },\n});\n")),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#update"},"Operation"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.UpdateCandyMachineInput.html"},"Input"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.UpdateCandyMachineOutput.html"},"Output"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#update"},"Transaction Builder"),".")))),(0,i.kt)("h2",{id:"delete-candy-machines"},"Delete Candy Machines"),(0,i.kt)("p",null,"Once a Candy Machine has been fully minted, it has served its purpose and can safely be disposed of. This allows its creator to gain back the storage cost of the Candy Machine account and, optionally, the Candy Guard account too."),(0,i.kt)(o.U,{mdxType:"Accordion"},(0,i.kt)(o.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"You may delete a Candy Machine account using the JS SDK like so."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"await metaplex.candyMachines().delete({\n  candyMachine: candyMachine.address,\n});\n")),(0,i.kt)("p",null,"Note that this will only delete the Candy Machine account and not the associated Candy Guard account to avoid bad surprises. If you want to delete both of them, you must also provide the address of the Candy Guard address like so."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"await metaplex.candyMachines().delete({\n  candyMachine: candyMachine.address,\n  candyGuard: candyMachine.candyGuard.address,\n});\n")),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#delete"},"Operation"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.DeleteCandyMachineInput.html"},"Input"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.DeleteCandyMachineOutput.html"},"Output"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#delete"},"Transaction Builder"),".")))),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"We can now create, read, update and delete Candy Machines but we still don\u2019t know how to load them with items. Let\u2019s tackle this on ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/inserting-items"},"the next page"),"!"))}p.isMDXComponent=!0}}]);