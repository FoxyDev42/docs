"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[829],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),h=r,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||i;return t?a.createElement(m,o(o({ref:n},l),{},{components:t})):a.createElement(m,o({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},50575:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var a=t(83117),r=(t(67294),t(3905));const i={sidebar_label:"5. Withdraw Funds"},o="Withdraw Funds",c={unversionedId:"deprecated/candy-machine-v1/withdraw",id:"deprecated/candy-machine-v1/withdraw",title:"Withdraw Funds",description:"Candy Machine v1 has been deprecated. Creating a new instance of Candy Machine v1 is no longer possible. Please use Sugar: Candy Machine CLI instead.",source:"@site/docs/06-deprecated/01-candy-machine-v1/04-withdraw.md",sourceDirName:"06-deprecated/01-candy-machine-v1",slug:"/deprecated/candy-machine-v1/withdraw",permalink:"/deprecated/candy-machine-v1/withdraw",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/06-deprecated/01-candy-machine-v1/04-withdraw.md",tags:[],version:"current",lastUpdatedAt:1661187439,formattedLastUpdatedAt:"Aug 22, 2022",sidebarPosition:4,frontMatter:{sidebar_label:"5. Withdraw Funds"},sidebar:"sidebar",previous:{title:"4. Candy Machine Errors",permalink:"/deprecated/candy-machine-v1/cm-errors"},next:{title:"Introduction",permalink:"/deprecated/fair-launch/introduction"}},d={},s=[{value:"Example",id:"example",level:2},{value:"NOTE",id:"note",level:3}],l={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"withdraw-funds"},"Withdraw Funds"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Candy Machine v1 has been deprecated. Creating a new instance of Candy Machine v1 is no longer possible. Please use ",(0,r.kt)("a",{parentName:"p",href:"/developer-tools/sugar"},"Sugar: Candy Machine CLI")," instead.")),(0,r.kt)("p",null,"Candy Machine v1s rely on a special account called the config account. This account stores the big list of pointers to assets that will be minted.\nThis data is useless after the ",(0,r.kt)("inlineCode",{parentName:"p"},"CMv1")," has been fully minted. You can drain this account by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Usage: candy-machine-v1-cli withdraw [options]\n\nOptions:\n  -e, --env <string>              Solana cluster env name (default: "devnet")\n  -k, --keypair <path>            Solana wallet location (default: "--keypair\n                                  not provided")\n  -l, --log-level <string>        log level\n  -c, --cache-name <string>       Cache file name (default: "temp")\n  -d ,--dry                       Show Candy Machine withdraw amount without\n                                  withdrawing.\n  -ch, --charity <string>         Which charity? (default: "")\n  -cp, --charityPercent <string>  Which percent to charity? (default: "0")\n  -r, --rpc-url <string>          custom rpc url since this is a heavy command\n  -h, --help                      display help for command\n')),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null," To use this command, make sure you have the keypair that you made the candy machine with. Pass that keypair in as the ",(0,r.kt)("inlineCode",{parentName:"p"},"-k")," argument. This command will find all the candy machine config accounts made by that keypair and attempt to drain them.\nIt's a good idea to first run this with ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," to see how much you have locked up in those accounts and to make sure you aren't draining an account you need. You can also donate a percentage of this money to charity. ",(0,r.kt)("strong",{parentName:"p"},"BE CAREFUL!")," This will actually take money out of the keypair you pass in and transfer it to the address you set as the ",(0,r.kt)("inlineCode",{parentName:"p"},"--charity")," option."),(0,r.kt)("h3",{id:"note"},"NOTE"),(0,r.kt)("p",null," Your Keypair must have a little sol in it to pay the transaction fee to withdraw."),(0,r.kt)("p",null,"If it all works like it should, you should see something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Total Number of Candy Machine Config Accounts to drain 50.03644952 SOL locked up in configs\nWARNING: This command will drain ALL of the Candy Machine config accounts that are owned by your current KeyPair, this will break your Candy Machine if its still in use.\n...\nHSLcb56y2wQEdaTcNoybcPJRrXuxRe3AnAXhpvJmZkMo has been withdrawn. \n...\nCongratulations, 1 config accounts have been successfully drained.\nNow you kinda rich, please consider supporting Open Source developers.\n")))}u.isMDXComponent=!0}}]);