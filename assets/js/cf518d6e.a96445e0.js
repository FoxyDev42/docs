"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6718],{37049:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return g}});var r=a(83117),o=a(67294),s=a(3905),n=a(38754);var i=function(){const[e,t]=(0,o.useState)(0);return o.createElement("form",{style:{border:"1px solid #444",padding:"8px",borderRadius:"8px"},action:"#"},o.createElement("div",{style:{padding:"10px"}},o.createElement("div",null,o.createElement("label",{for:"fileSize"},"Total storage size of asset and metadata.json (in kilobytes):"),o.createElement("input",{id:"fileSize",autoComplete:"off",type:"number",onChange:async e=>{const a=e.target.value,r=parseInt(a);if(!r)return;const o=1024*r,s=await(0,n.Kf)([o]);console.log(s);const i=Math.round(1e8*(s.solana+Number.EPSILON))/1e8;t(i)}})),o.createElement("div",null,o.createElement("span",{style:{display:"inline-block"}},"Estimated Arweave storage cost:"),o.createElement("span",null,e),"\xa0SOL"),o.createElement("p",{style:{color:"#888",fontSize:"0.8em",margin:"10px 0 0"}},o.createElement("em",null,"Fees are dynamic. Pricing is determined by the Arweave network"))))};const l={},d="Storage Providers",p={unversionedId:"resources/storage-providers",id:"resources/storage-providers",title:"Storage Providers",description:"NFTs are meant to live forever, being bought, sold, held and enjoyed for the",source:"@site/docs/05-resources/01-storage-providers.md",sourceDirName:"05-resources",slug:"/resources/storage-providers",permalink:"/resources/storage-providers",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/05-resources/01-storage-providers.md",tags:[],version:"current",lastUpdatedAt:1672653776,formattedLastUpdatedAt:"Jan 2, 2023",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"RPC Providers",permalink:"/resources/rpc-providers"},next:{title:"Definitions",permalink:"/resources/definitions"}},u={},g=[{value:"Storage options",id:"storage-options",level:2},{value:"Arweave",id:"arweave",level:3},{value:"Arweave storage fees",id:"arweave-storage-fees",level:4},{value:"Arweave storage calculator",id:"arweave-storage-calculator",level:5},{value:"AWS S3",id:"aws-s3",level:3},{value:"S3 storage fees",id:"s3-storage-fees",level:4},{value:"IPFS",id:"ipfs",level:3},{value:"IPFS storage fees",id:"ipfs-storage-fees",level:4},{value:"NFT.Storage",id:"nftstorage",level:3},{value:"Using NFT.Storage",id:"using-nftstorage",level:4},{value:"Shadow Drive",id:"shadow-drive",level:3},{value:"Looking for another storage option?",id:"looking-for-another-storage-option",level:3}],h={toc:g};function c(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"storage-providers"},"Storage Providers"),(0,s.kt)("p",null,"NFTs are meant to live forever, being bought, sold, held and enjoyed for the\nrest of time. As such, the storage on which your assets are written should be\n",(0,s.kt)("em",{parentName:"p"},"permanent"),".  NFTs created through Metaplex are written to scalable, durable,\npermanent, censorship resistant storage by default, but there are other options\navailable too. Let's take a look."),(0,s.kt)("h2",{id:"storage-options"},"Storage options"),(0,s.kt)("h3",{id:"arweave"},"Arweave"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://arweave.org"},"Arweave")," is a decentralized, trust-minimized, censorship-resistant data\nstorage network designed to retain data permanently, making it a great fit for\nNFTs.  To cover the cost of storing your media forever, storage and mining fees\nare paid at the time of upload and distributed to storage providers\nparticipating in the network."),(0,s.kt)("h4",{id:"arweave-storage-fees"},"Arweave storage fees"),(0,s.kt)("p",null,"Storage fees are based on the total size of the files you upload to the network during NFT creation. Each NFT consists of three files:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The asset itself (image, video, audio, etc)"),(0,s.kt)("li",{parentName:"ol"},"The accompanying metadata file (attributes etc.)"),(0,s.kt)("li",{parentName:"ol"},"A generated ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ArweaveTeam/arweave/wiki/Path-Manifests"},"manifest which creates a logical grouping")," or relationship between your files")),(0,s.kt)("p",null,"The cumulative size of these files (in bytes) is submitted to the ",(0,s.kt)("a",{parentName:"p",href:"https://node1.bundlr.network/price/0"},"Arweave\nstorage cost estimation service")," which returns the real\ntime estimated fee for storage, priced in ",(0,s.kt)("a",{parentName:"p",href:"https://docs.arweave.org/developers/server/http-api#ar-and-winston"},"winstons"),". We then convert the\nwinstons to SOL for payment."),(0,s.kt)("h5",{id:"arweave-storage-calculator"},"Arweave storage calculator"),(0,s.kt)("p",null,"Here's a calculator to help you estimate your NFT creation costs:"),(0,s.kt)(i,{mdxType:"ArweaveCostCalc"}),(0,s.kt)("h3",{id:"aws-s3"},"AWS S3"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon Web Services S3")," is a global, affordable but centralized storage\nprovider. Because S3 is centralized, NFTs stored there are not censorship\nresistant. If AWS receives legal threats, decides they no longer support NFTs,\ngoes out of business, or you stop making payments, they can remove your assets\nfrom their service, potentially leaving holders of your NFTs without their\nmedia. For NFTs which are meant to be censorship resistant and permanent, we do\nnot recommend using S3. However, it is an affordable option so depending on your\nneeds may be what you need."),(0,s.kt)("h4",{id:"s3-storage-fees"},"S3 storage fees"),(0,s.kt)("p",null,"Please visit ",(0,s.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/pricing/"},"https://aws.amazon.com/s3/pricing/")," for details."),(0,s.kt)("h3",{id:"ipfs"},"IPFS"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"InterPlanetary File System"),", or IPFS, is a decentralized,\ntrust-minimized, censorship-resistant, peer-to-peer hypermedia protocol designed\nto preserve and grow humanity's knowledge by making the web upgradeable,\nresilient, and more open. It's P2P design allows for file deduplication and\nother efficiencies. IPFS is not designed to store files permanently and so is\ntherefore not the default storage option."),(0,s.kt)("h4",{id:"ipfs-storage-fees"},"IPFS storage fees"),(0,s.kt)("p",null,"Please visit ",(0,s.kt)("a",{parentName:"p",href:"https://infura.io/docs/ipfs"},"https://infura.io/docs/ipfs")," for details."),(0,s.kt)("h3",{id:"nftstorage"},"NFT.Storage"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://nft.storage"},"NFT.Storage")," is a free service that provides long-term NFT data storage on the decentralized ",(0,s.kt)("a",{parentName:"p",href:"https://filecoin.io"},"Filecoin")," network with fast retrieval through ",(0,s.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"IPFS"),"."),(0,s.kt)("p",null,"NFT.Storage currently supports files up to 31 Gib and does not charge for storage."),(0,s.kt)("h4",{id:"using-nftstorage"},"Using NFT.Storage"),(0,s.kt)("p",null,"NFT.Storage is currently supported in ",(0,s.kt)("a",{parentName:"p",href:"/developer-tools/sugar/"},"Sugar"),". Please see the ",(0,s.kt)("a",{parentName:"p",href:"/developer-tools/sugar/reference/upload-methods#nft.storage"},"Sugar storage guide")," for details about the configuration settings to use."),(0,s.kt)("p",null,"For more information about using NFT.Storage with CandyMachine, see the ",(0,s.kt)("a",{parentName:"p",href:"https://nft.storage/docs/how-to/mint-solana"},"NFT.Storage documentation on Metaplex"),"."),(0,s.kt)("h3",{id:"shadow-drive"},"Shadow Drive"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://shdw.genesysgo.com/shadow-infrastructure-overview/shadow-drive-overview"},"GenesysGo Shadow Drive")," is a decentralized storage network designed to run in parallel to, and integrate seamlessly with, Solana. Storage fees are paid in the SPL token, SHDW, and allow immutable or mutable storage of data."),(0,s.kt)("h3",{id:"looking-for-another-storage-option"},"Looking for another storage option?"),(0,s.kt)("p",null,"Check out ",(0,s.kt)("a",{parentName:"p",href:"/developer-tools/sugar/developer/bring-your-own-uploader"},"Bring Your Own Uploader")," to learn about adding upload options to Sugar."))}c.isMDXComponent=!0}}]);