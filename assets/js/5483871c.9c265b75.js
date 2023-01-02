"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4257],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32322:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s}});var a=n(83117),r=(n(67294),n(3905));const o={sidebar_label:"1. Getting Started"},l="Getting Started",i={unversionedId:"deprecated/candy-machine-js-cli/getting-started",id:"deprecated/candy-machine-js-cli/getting-started",title:"Getting Started",description:"Before we can create a Candy Machine, you will need to install and operate a handful of developer tools.",source:"@site/docs/06-deprecated/00-candy-machine-js-cli/00-getting-started.md",sourceDirName:"06-deprecated/00-candy-machine-js-cli",slug:"/deprecated/candy-machine-js-cli/getting-started",permalink:"/deprecated/candy-machine-js-cli/getting-started",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/06-deprecated/00-candy-machine-js-cli/00-getting-started.md",tags:[],version:"current",lastUpdatedAt:1672653776,formattedLastUpdatedAt:"Jan 2, 2023",sidebarPosition:0,frontMatter:{sidebar_label:"1. Getting Started"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/deprecated/candy-machine-js-cli/introduction"},next:{title:"2. Configuration",permalink:"/deprecated/candy-machine-js-cli/configuration"}},p={},s=[{value:"Tooling required",id:"tooling-required",level:2},{value:"Apple M1 Chip",id:"apple-m1-chip",level:3},{value:"Clone and Install the JS CLI Repo",id:"clone-and-install-the-js-cli-repo",level:2},{value:"Solana Wallet",id:"solana-wallet",level:2},{value:"Setting up a devnet wallet (for testing)",id:"setting-up-a-devnet-wallet-for-testing",level:3},{value:"Funding your devnet wallet",id:"funding-your-devnet-wallet",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Before we can create a Candy Machine, you will need to install and operate a handful of developer tools."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"During this guide, we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"\\")," within example commands prior to new lines. On most shells (such as the shells on macOS and Linux), this symbol means a new line. However, on Windows Command Prompt, it does not. If you are on Windows and are using the Command Prompt, enter the commands in a single line and remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"\\")," characters that we use in our examples. ")),(0,r.kt)("h2",{id:"tooling-required"},"Tooling required"),(0,r.kt)("p",null,"You will need recent version of the following tools:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"git"),": to clone the repository"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"node"),": JavaScript runtime"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable"},"yarn"),": package manager to install the required dependencies"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ts-node#installation"},"ts-node"),": TypeScript execution environment")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git version\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"output:")," ",(0,r.kt)("em",{parentName:"p"},"git version 2.35.1"))),(0,r.kt)("p",null,"The latest LTS version of node is recommended:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node --version\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"output:")," ",(0,r.kt)("em",{parentName:"p"},"v16.14.2"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn --version\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"output:")," ",(0,r.kt)("em",{parentName:"p"},"1.22.18"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node --version\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"output:")," ",(0,r.kt)("em",{parentName:"p"},"v10.4.0"))),(0,r.kt)("h3",{id:"apple-m1-chip"},"Apple M1 Chip"),(0,r.kt)("p",null,"If you have macOS with the Apple M1 Chip, you'll need to install some additional dependencies."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://brew.sh/"},"brew"))),(0,r.kt)("p",null,"After installing brew, run the following: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install pkg-config cairo pango libpng jpeg giflib librsvg\n")),(0,r.kt)("p",null,"See additional information: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Automattic/node-canvas/wiki/Installation%3A-Mac-OS-X"},"https://github.com/Automattic/node-canvas/wiki/Installation%3A-Mac-OS-X")),(0,r.kt)("h2",{id:"clone-and-install-the-js-cli-repo"},"Clone and Install the JS CLI Repo"),(0,r.kt)("p",null,"Creating and controlling a Candy Machine is done through our JavaScript command line tool, currently distributed in the deprecated-clis GitHub repository. For now, recommend pulling the latest code from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/deprecated-clis/tree/main"},"main branch"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/metaplex-foundation/deprecated-clis.git ~/deprecated-clis\n")),(0,r.kt)("p",null,"This will create a directory ",(0,r.kt)("inlineCode",{parentName:"p"},"deprecated-clis")," in your home directory with the latest code from the repository. If you decide to clone the repository to a different location, you will need to change the path in subsequent instructions."),(0,r.kt)("p",null,"You will then need to install the dependencies. From outside the metaplex directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\n")),(0,r.kt)("p",null,"You can check that everything is working by running the Candy Machine CLI command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node src/candy-machine-v2-cli.ts --version\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"output:")," ",(0,r.kt)("em",{parentName:"p"},"0.0.2"))),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"candy-machine-v2-cli.ts")," script.")),(0,r.kt)("h2",{id:"solana-wallet"},"Solana Wallet"),(0,r.kt)("p",null,"The Candy Machine operates on the Solana blockchain. You will need a wallet with funds to create and deploy a Candy Machine. You can create and use a wallet using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/cli/install-solana-cli-tools"},"Solana Tool Suite"),". This guide will assume that you are using the Solana CLI commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana --version\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"output:")," ",(0,r.kt)("em",{parentName:"p"},"solana-cli 1.9.1"))),(0,r.kt)("p",null,"You can check your wallet address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana address\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"output:")," ",(0,r.kt)("em",{parentName:"p"},"6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ"))),(0,r.kt)("p",null,"and your balance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana balance\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"output:")," ",(0,r.kt)("em",{parentName:"p"},"4 SOL"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We highly recommend trying to first deploy a Candy Machine on Solana ",(0,r.kt)("inlineCode",{parentName:"p"},"devnet"),", before moving to the ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnet-beta")," environment. This way you can freely test different settings without having to move SOL to your wallet."),(0,r.kt)("p",{parentName:"admonition"},"In this guide we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"devnet"),", although all commands presented will work in a similar fashion once you are in ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnet-beta"),".")),(0,r.kt)("h3",{id:"setting-up-a-devnet-wallet-for-testing"},"Setting up a devnet wallet (for testing)"),(0,r.kt)("p",null,"The steps described here will create a wallet to be used in the Solana ",(0,r.kt)("inlineCode",{parentName:"p"},"devnet")," environment. In normal circumstances you would redact your mnemonic, store it somewhere safe and take advantage of the ",(0,r.kt)("inlineCode",{parentName:"p"},"--outfile")," flag."),(0,r.kt)("p",null,"To create a new wallet, we will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"solana-keygen")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana-keygen new --outfile ~/.config/solana/devnet.json\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Generating a new keypair\n\nFor added security, enter a BIP39 passphrase\n\nNOTE! This passphrase improves security of the recovery seed phrase NOT the\nkeypair file itself, which is stored as insecure plain text\n\nBIP39 Passphrase (empty for none):\n\nWrote new keypair to /Users/febo/.config/solana/devnet.json\n=======================================================================\npubkey: 6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ\n=======================================================================\nSave this seed phrase and your BIP39 passphrase to recover your new keypair:\n## REDACTED ##\n=======================================================================\n")))),(0,r.kt)("p",null,"The next step is to make this our default keypair:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana config set --keypair ~/.config/solana/devnet.json\n")),(0,r.kt)("p",null,"and make sure we are on the ",(0,r.kt)("inlineCode",{parentName:"p"},"devnet"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana config set --url https://metaplex.devnet.rpcpool.com/\n")),(0,r.kt)("p",null,"If all the above steps are successful, your configuration be similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana config get\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Config File: ~/.config/solana/cli/config.yml\nRPC URL: https://metaplex.devnet.rpcpool.com/\nWebSocket URL: wss://metaplex.devnet.rpcpool.com/ (computed)\nKeypair Path: ~/.config/solana/devnet.json\nCommitment: confirmed\n")))),(0,r.kt)("h3",{id:"funding-your-devnet-wallet"},"Funding your devnet wallet"),(0,r.kt)("p",null,"In order to add SOL to your ",(0,r.kt)("inlineCode",{parentName:"p"},"devnet")," wallet, you can request funds from a faucet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana airdrop 2\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Requesting airdrop of 2 SOL\n\nSignature: 41ZEZqpyNMLUy3kQahWSy349PeDz3Q82dNDHKiA7QcsrAzHs3f7YiDEZWjnFi434DoiiDiDkazkBRycRnctx1m6e\n\n6 SOL\n")))),(0,r.kt)("p",null,"If the command is successful, you will see the updated balance at the end. Make sure you are entering the airdrop amount that is within the airdrop limit. Currently, the maximum airdrop request limit is ",(0,r.kt)("strong",{parentName:"p"},"2 SOL")," and there is a daily total limit of ",(0,r.kt)("strong",{parentName:"p"},"24 SOL"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"solana airdrop")," command is sometimes unreliable. If the command doesn't work, you can use the airdrop tool at ",(0,r.kt)("a",{parentName:"p",href:"https://solfaucet.com"},"https://solfaucet.com"),".")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Do not send ",(0,r.kt)("strong",{parentName:"p"},"real")," SOL to a ",(0,r.kt)("inlineCode",{parentName:"p"},"devnet")," wallet.")))}u.isMDXComponent=!0}}]);