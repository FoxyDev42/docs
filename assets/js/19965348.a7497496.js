"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6440],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},13755:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=n(83117),o=(n(67294),n(3905));const i={sidebar_label:"Overview"},r="What is Auction House",s={unversionedId:"programs/auction-house/overview",id:"programs/auction-house/overview",title:"What is Auction House",description:"Auction House is a protocol for marketplaces to implement a decentralized sales contract. It is simple, fast and very cheap. Auction House is a Solana program available on Mainnet Beta and Devnet. Anyone can create an Auction House and accept any SPL token they wish.",source:"@site/docs/01-programs/03-auction-house/00-overview.md",sourceDirName:"01-programs/03-auction-house",slug:"/programs/auction-house/overview",permalink:"/programs/auction-house/overview",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/03-auction-house/00-overview.md",tags:[],version:"current",lastUpdatedAt:1665359642,formattedLastUpdatedAt:"Oct 9, 2022",sidebarPosition:0,frontMatter:{sidebar_label:"Overview"},sidebar:"sidebar",previous:{title:"Auction House",permalink:"/programs/auction-house/"},next:{title:"Getting Started",permalink:"/programs/auction-house/getting-started"}},l={},c=[{value:"Escrowless",id:"escrowless",level:3},{value:"Auction House Authority Features",id:"auction-house-authority-features",level:3},{value:"Requires Sign Off Feature",id:"requires-sign-off-feature",level:4},{value:"Any SPL Token",id:"any-spl-token",level:3},{value:"Auction House Receipts",id:"auction-house-receipts",level:3},{value:"Partial Order Fulfillment",id:"partial-order-fulfillment",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-auction-house"},"What is Auction House"),(0,o.kt)("p",null,"Auction House is a protocol for marketplaces to implement a decentralized sales contract. It is simple, fast and very cheap. Auction House is a Solana program available on Mainnet Beta and Devnet. Anyone can create an Auction House and accept any SPL token they wish."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Auction House Solana program resides within the Metaplex Program Library here:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/metaplex-program-library"},"https://github.com/metaplex-foundation/metaplex-program-library")),(0,o.kt)("p",{parentName:"admonition"},"The Auction House CLI resides in the deprecated-clis monorepo here:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/deprecated-clis/blob/main/src/auction-house-cli.ts"},"https://github.com/metaplex-foundation/deprecated-clis/blob/main/src/auction-house-cli.ts")),(0,o.kt)("p",{parentName:"admonition"},"The MPL JS SDK (low level web3 sdk) lives here and is a great starting point for advanced web3 devs"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@metaplex-foundation/mpl-auction-house"},"https://www.npmjs.com/package/@metaplex-foundation/mpl-auction-house")),(0,o.kt)("p",{parentName:"admonition"},"The High Level Javascript SDK (coming soon) which has high level Auction House functions resides here:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/js"},"https://github.com/metaplex-foundation/js"))),(0,o.kt)("p",null,"Let's dive into Auction House's main features."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Auction House is a completely separate program than the storefront Auction program.")),(0,o.kt)("h3",{id:"escrowless"},"Escrowless"),(0,o.kt)("p",null,"For the NFT Seller the NFT doesn't leave their wallet until the sale completes. This is due to the use of Solana Token Delegates, and it allows them to list their NFT on other Marketplaces that implement the Auction House protocol. The Auction House program is the delegate, so whichever marketplace has a matching bid can execute the sale, and they get their fee, the buyer gets the NFT and the seller gets the money. This is all done in the execution of the sale. The buyer and seller never need to claim anything like in our other auction system."),(0,o.kt)("h3",{id:"auction-house-authority-features"},"Auction House Authority Features"),(0,o.kt)("p",null,"When you create an Auction House a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Instance")," of an Auction House is made. This ",(0,o.kt)("inlineCode",{parentName:"p"},"Instance")," is owned and operated by an ",(0,o.kt)("inlineCode",{parentName:"p"},"Authority"),".\nMeaning the Public Key you set in the ",(0,o.kt)("inlineCode",{parentName:"p"},"authority")," section of the ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateAuction House")," instruction is the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authority")," that can update the auction house. Metaplex uses this ",(0,o.kt)("inlineCode",{parentName:"p"},"Authority")," pattern in many contracts to create ",(0,o.kt)("inlineCode",{parentName:"p"},"Access Control")," on certain features and functions. When you create an auction house, you can set the following parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Treasury Withdraw Destination - The wallet that receives the Auction House fees."),(0,o.kt)("li",{parentName:"ul"},"Fee Withdraw Destination - A wallet that is used to pay for Solana fees for the seller and buyer if the marketplace chooses to execute the sale in the background."),(0,o.kt)("li",{parentName:"ul"},"Seller Fee Basis Points - The share of the sale the auction house takes on all NFTs."),(0,o.kt)("li",{parentName:"ul"},"Requires Sign Off - The auction house must sign all sales orders."),(0,o.kt)("li",{parentName:"ul"},"Can Change Sale Price - If the seller intentionally lists their NFT for a price of 0 the Auction House can change the sale price to match a matching Bid that is greater than 0. This allows the Auction house to do complicated order matching to find the best price for the seller."),(0,o.kt)("li",{parentName:"ul"},"Treasury Mint - The SPL token you accept as the purchase currency")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Can Change Sale Price")," is only intended to be used with Auction Houses that ",(0,o.kt)("inlineCode",{parentName:"p"},"Requires Sign Off"))),(0,o.kt)("h4",{id:"requires-sign-off-feature"},"Requires Sign Off Feature"),(0,o.kt)("p",null,"This feature allows a marketplace to restrict which NFTs get sold on their platform. It is useful for more centralized marketplaces or a marketplace that has order matching algorithms that the user has allowed them to use (enabled by listing the NFT at the price of 0)."),(0,o.kt)("p",null,"Marketplaces who want to stay decentralized and not require sign-off may restrict what their user interfaces show via other means, but behind the scenes, someone can still list an NFT on your Auction House. You may in this scenario build Allow Lists using merkle trees or chose to restrict what your UI shows via other means."),(0,o.kt)("h3",{id:"any-spl-token"},"Any SPL Token"),(0,o.kt)("p",null,"Auction House allows you to accept any SPL token as the tender that the buyer deposits into their Buyer Escrow in order to accomplish a sale."),(0,o.kt)("p",null,"Now that you know what the Auction House is, take a look at our ",(0,o.kt)("a",{parentName:"p",href:"./getting-started"},"Getting Started")," guide."),(0,o.kt)("h3",{id:"auction-house-receipts"},"Auction House Receipts"),(0,o.kt)("p",null,"To aid transaction tracking, Auction House supports the generation of receipts for listings, bids, and sales. To generate these receipts, the receipt printing function should be called immediately after the corresponding transaction (",(0,o.kt)("inlineCode",{parentName:"p"},"PrintListingReceipt"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PrintBidReceipt"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"PrintPurchaseReceipt"),"). Additionally, the ",(0,o.kt)("inlineCode",{parentName:"p"},"CancelListingReceipt")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CancelBidReceipt")," instructions should be called in the case of canceled listings and bids. Calling these two instructions will fill the ",(0,o.kt)("inlineCode",{parentName:"p"},"canceled_at")," fields of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ListingReceipt")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"BidReceipt")," accounts."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"While the receipts can be retrieved using the standard getProgramAccounts data flow, the official recommendation is to use Solana's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/plugins/geyser-plugins"},"AccountsDB")," plug-in to index and track the generated receipts.")),(0,o.kt)("h3",{id:"partial-order-fulfillment"},"Partial Order Fulfillment"),(0,o.kt)("p",null,"A seller can create a sell order of ",(0,o.kt)("inlineCode",{parentName:"p"},"FungibleAssets")," with a ",(0,o.kt)("inlineCode",{parentName:"p"},"token_size")," quantity greater than 1. The buyer can then create a buy order of said assets that is less than the ",(0,o.kt)("inlineCode",{parentName:"p"},"token_size")," of the sell order. In order for ",(0,o.kt)("inlineCode",{parentName:"p"},"ExecutePartialSale")," to succeed, the buy order must have been created with both a ",(0,o.kt)("inlineCode",{parentName:"p"},"token_size")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"sale_price")," both lower than the sell order ",(0,o.kt)("inlineCode",{parentName:"p"},"token_size")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sale_price"),". In ",(0,o.kt)("inlineCode",{parentName:"p"},"ExecutePartialSale"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"partial_order_price")," must match the division of ",(0,o.kt)("inlineCode",{parentName:"p"},"token_size")," in the full order and the ",(0,o.kt)("inlineCode",{parentName:"p"},"sale_price")," times the ",(0,o.kt)("inlineCode",{parentName:"p"},"partial_order_size"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"partial_order_size")," must not be greater than the ",(0,o.kt)("inlineCode",{parentName:"p"},"token_size")," in the original sell order. If there is no partial order needing to take place, ",(0,o.kt)("inlineCode",{parentName:"p"},"partital_order_price")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"partial_order_size")," must be passed in as ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Example:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Alice creates a sell order of 6 Alice tokens for 6 SOL."),(0,o.kt)("li",{parentName:"ol"},"Bob creates a buy order to purchase 3 Alice tokens for 3 SOL."),(0,o.kt)("li",{parentName:"ol"},"Bob now owns 3 Alice tokens and there are 3 remaining for someone else to buy."),(0,o.kt)("li",{parentName:"ol"},"John creates a buy order for the remaining 3 Alice tokens for 3 SOL."),(0,o.kt)("li",{parentName:"ol"},"John now owns the remaining 3 Alice tokens and the listing is now closed."))))}u.isMDXComponent=!0}}]);