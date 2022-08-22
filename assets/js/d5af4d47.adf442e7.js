"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[269],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},92832:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p}});var o=n(83117),a=(n(67294),n(3905));const r={},i="Upload Methods",l={unversionedId:"developer-tools/sugar/upload-methods",id:"developer-tools/sugar/upload-methods",title:"Upload Methods",description:'There are currently four upload (storage) methods available in Sugar: "aws", "bundlr", "nft_storage" and "shdw".',source:"@site/docs/03-developer-tools/00-sugar/07-upload-methods.md",sourceDirName:"03-developer-tools/00-sugar",slug:"/developer-tools/sugar/upload-methods",permalink:"/developer-tools/sugar/upload-methods",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/03-developer-tools/00-sugar/07-upload-methods.md",tags:[],version:"current",lastUpdatedAt:1661187439,formattedLastUpdatedAt:"Aug 22, 2022",sidebarPosition:7,frontMatter:{},sidebar:"sidebar",previous:{title:"Sugar Commands",permalink:"/developer-tools/sugar/commands"},next:{title:"Developer Guide",permalink:"/tools/sugar/developer/"}},s={},p=[{value:"Amazon (AWS) S3",id:"amazon-aws-s3",level:2},{value:"Bundlr",id:"bundlr",level:2},{value:"NFT.Storage",id:"nftstorage",level:2},{value:"Shadow Drive",id:"shadow-drive",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upload-methods"},"Upload Methods"),(0,a.kt)("p",null,"There are currently four upload (storage) methods available in Sugar: ",(0,a.kt)("inlineCode",{parentName:"p"},'"aws"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"bundlr"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"nft_storage"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"shdw"'),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The upload methods in Sugar are designed using a Rust trait to make it easier for new methods to be added, therefore Sugar can support a wide-variety of upload methods","\u2014","check the ",(0,a.kt)("a",{parentName:"p",href:"developer/bring-your-own-uploader"},(0,a.kt)("strong",{parentName:"a"},"Bring your own uploader"))," section in the Developer Guide.")),(0,a.kt)("h2",{id:"amazon-aws-s3"},"Amazon (AWS) S3"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Configuration settings:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  . . .\n  "uploadMethod": "aws",\n  . . .\n  "awsConfig": \n  {\n    bucket: "<BUCKET_NAME>",\n    profile: "<PROFILE_NAME>",\n    directory: "<DIRECTORY_NAME>",\n  }\n  . . .\n}\n')),(0,a.kt)("p",null,"This method uploads files to Amazon S3 storage. When using the ",(0,a.kt)("inlineCode",{parentName:"p"},'"aws"'),', you need to specify the bucket, profile, and directory values in the configuration file under "awsConfig" and set up the credentials in your system. In most cases, this will involve creating a file ',(0,a.kt)("inlineCode",{parentName:"p"},"~/.aws/credentials")," with the following properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[default]\naws_access_key_id=<ACCESS KEY ID>\naws_secret_access_key=<SECRET ACCESS KEY>\nregion=<REGION>\n")),(0,a.kt)("p",null,"It is also important to set up the ACL permission of the bucket correctly to enable ",(0,a.kt)("inlineCode",{parentName:"p"},'"public-read"')," and apply Cross-Origin Resource Sharing (CORS) rules to enable content access requested from a different origin (necessary to enable wallets and blockchain explorers load the metadata/media files). More information about these configurations can be found at:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html"},"Bucket policy examples")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/premiumsupport/knowledge-center/s3-configure-cors/"},"CORS configuration"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"profile")," value allows you to specify which profile to read from your credentials file. The ",(0,a.kt)("inlineCode",{parentName:"p"},"directory")," value is the name of the directory in the bucket where the files will be uploaded, allowing you to have multiple candy machine or collections in a single bucket separated by different directories. Leaving this as an empty string will upload the files to the root of the bucket."),(0,a.kt)("h2",{id:"bundlr"},"Bundlr"),(0,a.kt)("p",null,"Configuration settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  . . .\n  "uploadMethod": "bundlr",\n  . . .\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Files are only stored for 7 days when uploaded with Bundlr on ",(0,a.kt)("inlineCode",{parentName:"p"},"devnet"),".")),(0,a.kt)("p",null,"Uploads to ",(0,a.kt)("a",{parentName:"p",href:"https://www.arweave.org/"},"Arweave")," using ",(0,a.kt)("a",{parentName:"p",href:"https://bundlr.network/"},"Bundlr Network")," and payments are made in ",(0,a.kt)("inlineCode",{parentName:"p"},"SOL"),"."),(0,a.kt)("h2",{id:"nftstorage"},"NFT.Storage"),(0,a.kt)("p",null,"Configuration settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  . . .\n  "uploadMethod": "nft_storage",\n  . . .\n  "nftStorageAuthToken": "<AUTH_TOKEN>",\n  . . .\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nft.storage"},"NFT.Storage")," is a popular free service that uploads data on the public IPFS network. You will need to register an account to obtain an API key (token), which need to be specified by ",(0,a.kt)("inlineCode",{parentName:"p"},'"nftStorageAuthToken"')," in the configuration file."),(0,a.kt)("h2",{id:"shadow-drive"},"Shadow Drive"),(0,a.kt)("p",null,"Configuration settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  . . .\n  "uploadMethod": "shdw",\n  . . .\n  "shdwStorageAccount": "<STORAGE PUBKEY>",\n  . . .\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://shdw.genesysgo.com/shadow-infrastructure-overview/shadow-drive-overview"},"Shadow Drive")," is a decentralized storage network built specifically for the Solana blockchain. In order to upload data to the Shadow Drive you will need to first create a storage account. This can be done using the ",(0,a.kt)("a",{parentName:"p",href:"https://shdw.genesysgo.com/using-shadow-drive/the-shadow-drive-platform/shadow-drive-cli"},"Shadow Drive CLI"),". After creating a storage account, specify its pubkey address in the configuration file using the property ",(0,a.kt)("inlineCode",{parentName:"p"},'"shdwStorageAccount"'),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The Shadow Drive upload method is only available on ",(0,a.kt)("inlineCode",{parentName:"p"},"mainnet"),".")))}u.isMDXComponent=!0}}]);