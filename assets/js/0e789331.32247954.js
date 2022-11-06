"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5523],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91347:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var a=n(83117),i=(n(67294),n(3905));const o={sidebar_label:"6. Mint Tokens"},r="Mint Tokens",c={unversionedId:"deprecated/candy-machine-js-cli/mint-tokens",id:"deprecated/candy-machine-js-cli/mint-tokens",title:"Mint Tokens",description:"At this point, your Candy Machine is ready to mint tokens. Depending on your configurations, it is either restricted to whitelist users or the goLiveDate has not been reached yet. In all cases, the owner (authority) of the Candy Machine - i.e., the wallet that created the Candy Machine - can mint tokens.",source:"@site/docs/06-deprecated/00-candy-machine-js-cli/05-mint-tokens.md",sourceDirName:"06-deprecated/00-candy-machine-js-cli",slug:"/deprecated/candy-machine-js-cli/mint-tokens",permalink:"/deprecated/candy-machine-js-cli/mint-tokens",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/06-deprecated/00-candy-machine-js-cli/05-mint-tokens.md",tags:[],version:"current",lastUpdatedAt:1667747386,formattedLastUpdatedAt:"Nov 6, 2022",sidebarPosition:5,frontMatter:{sidebar_label:"6. Mint Tokens"},sidebar:"sidebar",previous:{title:"5. Verify Upload",permalink:"/deprecated/candy-machine-js-cli/verify-upload"},next:{title:"7. Update the Candy Machine",permalink:"/deprecated/candy-machine-js-cli/update"}},l={},s=[{value:"Mint One Token",id:"mint-one-token",level:2},{value:"Mint Multiple Tokens",id:"mint-multiple-tokens",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mint-tokens"},"Mint Tokens"),(0,i.kt)("p",null,"At this point, your Candy Machine is ready to mint tokens. Depending on your configurations, it is either restricted to whitelist users or the ",(0,i.kt)("inlineCode",{parentName:"p"},"goLiveDate")," has not been reached yet. In all cases, the owner (authority) of the Candy Machine - i.e., the wallet that created the Candy Machine - can mint tokens."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The only exception is when captcha is enabled. In this case, it is not possible to mint tokens from the command line. If you would like to mint tokens, update the ",(0,i.kt)("inlineCode",{parentName:"p"},"goLiveDate")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," and temporarily disable the captcha settings.")),(0,i.kt)("h2",{id:"mint-one-token"},"Mint One Token"),(0,i.kt)("p",null,"Minting one token can be done using the command ",(0,i.kt)("inlineCode",{parentName:"p"},"mint_one_token"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node ~/deprecated-clis/src/candy-machine-v2-cli.ts mint_one_token \\\n    -e devnet \\\n    -k ~/.config/solana/devnet.json \\\n    -c example\n")),(0,i.kt)("p",null,"If successful, the output will be similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wallet public key: N4f6zftYsuu4yT7icsjLwh4i6pB1zvvKbseHj2NmSQw\nmint_one_token finished 3R9XADK91RWESj3FZdzB2QXHchpjwcS5khdwZVoSd3petHyqt2T6MjntMxozX2meRFyaFZEsqjPxbCUjxz5eL5z9\n")),(0,i.kt)("p",null,"You can check that the mint was successful by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"spl-token")," command to check the accounts available on your wallet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"spl-token accounts\n")),(0,i.kt)("p",null,"If the mint was successful, you will see a new account in your wallet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Token                                         Balance\n---------------------------------------------------------------\nG1zDZMHjU6bs4ibrZdeaM85dHYtno1B1xUmZ1VR7XCsQ  1\n")),(0,i.kt)("h2",{id:"mint-multiple-tokens"},"Mint Multiple Tokens"),(0,i.kt)("p",null,"You can also mint multiple tokens using the command ",(0,i.kt)("inlineCode",{parentName:"p"},"mint_multiple_tokens")," and specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," of tokens to be minted:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node ~/deprecated-clis/src/candy-machine-v2-cli.ts mint_multiple_tokens \\\n    -e devnet \\\n    -k ~/.config/solana/devnet.json \\\n    -c example \\\n    --number 2\n")),(0,i.kt)("p",null,"If successful, the output will be similar to following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Minting 2 tokens...\nwallet public key: N4f6zftYsuu4yT7icsjLwh4i6pB1zvvKbseHj2NmSQw\ntransaction 1 complete 37e4NjN5yPWevAus1m3XyCNgRPAxanQ5YdePn732U73XPa2MsHccJamoqkUFi6AtPwU8j3CATT84qq9G7ciAfRSU\nminting another token...\nwallet public key: N4f6zftYsuu4yT7icsjLwh4i6pB1zvvKbseHj2NmSQw\ntransaction 2 complete 5emunaycm99shUXuH3Xs6vCbTe6c8X6UqGoQYJ8qkwUd2mVppvojXyz2bxuYPmLVriuoqobBRNwFkp5Q2zCRV6pu\nminted 2 tokens\nmint_multiple_tokens finished\n")),(0,i.kt)("p",null,"You can follow the steps above to verify that the tokens are in your wallet."))}p.isMDXComponent=!0}}]);