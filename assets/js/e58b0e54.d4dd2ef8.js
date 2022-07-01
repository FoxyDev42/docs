"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[276],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=u(t),f=a,d=g["".concat(l,".").concat(f)]||g[f]||p[f]||o;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},62301:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=t(83117),a=(t(67294),t(3905));const o={},i="Working with Sugar",c={unversionedId:"sugar/working-with-sugar",id:"sugar/working-with-sugar",title:"Working with Sugar",description:"Sugar Tutorial",source:"@site/docs/sugar/03-working-with-sugar.md",sourceDirName:"sugar",slug:"/sugar/working-with-sugar",permalink:"/sugar/working-with-sugar",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/sugar/03-working-with-sugar.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"sidebar",previous:{title:"Quick Start",permalink:"/sugar/quick-start"},next:{title:"Configuration",permalink:"/sugar/configuration"}},l={},u=[],s={toc:u};function p(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"working-with-sugar"},"Working with Sugar"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sugar Tutorial",src:t(6216).Z,width:"1446",height:"864"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/26067212/165967904-0a551b6e-dc7e-4d8c-9348-3093e0d93883.mp4"},"Full Sugar Video Tutorial")),(0,a.kt)("p",null,"Sugar contains a collection of commands for creating and managing Metaplex Candy Machines. The complete list of commands can be viewed by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sugar\n")),(0,a.kt)("p",null,"This will display a list of commands and their short description:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"USAGE:\n    sugar [OPTIONS] <SUBCOMMAND>\n\nOPTIONS:\n    -h, --help                     Print help information\n    -l, --log-level <LOG_LEVEL>    Log level: trace, debug, info, warn, error, off\n    -V, --version                  Print version information\n\nSUBCOMMANDS:\n    create-config    Interactive process to create the config file\n    deploy           Deploy cache items into candy machine config on-chain\n    help             Print this message or the help of the given subcommand(s)\n    launch           Create a candy machine deployment from assets\n    mint             Mint one NFT from candy machine\n    show             Show the on-chain config of an existing candy machine\n    update           Update the candy machine config on-chain\n    upload           Upload assets to storage and creates the cache config\n    validate         Validate JSON metadata files\n    verify           Verify uploaded data\n    withdraw         Withdraw funds from candy machine account closing it\n")),(0,a.kt)("p",null,"To get more information about a particular command (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy"),"), use the ",(0,a.kt)("inlineCode",{parentName:"p"},"help")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sugar help deploy\n")),(0,a.kt)("p",null,"The list of options together with a short description will be displayed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Deploy cache items into candy machine config on-chain\n\nUSAGE:\n    sugar deploy [OPTIONS]\n\nOPTIONS:\n    -c, --config <CONFIG>          Path to the config file, defaults to "config.json" [default:\n                                   config.json]\n        --cache <CACHE>            Path to the cache file, defaults to "cache.json" [default:\n                                   cache.json]\n    -h, --help                     Print help information\n    -k, --keypair <KEYPAIR>        Path to the keypair file, uses Sol config or defaults to\n                                   "~/.config/solana/id.json"\n    -l, --log-level <LOG_LEVEL>    Log level: trace, debug, info, warn, error, off\n    -r, --rpc-url <RPC_URL>        RPC Url\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," This guide assumes that you set up your RPC url and a keypair using Solana CLI config, as described in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Quick Start")," section above.")))}p.isMDXComponent=!0},6216:function(e,n,t){n.Z=t.p+"assets/images/Sugar-Tutorial-5ce27c9247f9b8992a7ad544124a9686.gif"}}]);