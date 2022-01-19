(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4827],{70728:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return h},toc:function(){return d},default:function(){return p}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=n(93456),s=["components"],l={sidebar_position:3},c="Basic Single Item Auction End To End",h={unversionedId:"architecture/basic_flow",id:"architecture/basic_flow",title:"Basic Single Item Auction End To End",description:"Now that we've gone over the contracts, let's run through an example of how the contracts interact to create an NFT and sell it. I personally find these stories the most informative way to learn a new ecosystem.",source:"@site/docs/architecture/basic_flow.md",sourceDirName:"architecture",slug:"/architecture/basic_flow",permalink:"/architecture/basic_flow",editUrl:"https://github.com/metaplex/docs/tree/main/docs/architecture/basic_flow.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"The Contracts",permalink:"/architecture/contracts"},next:{title:"Overview",permalink:"/architecture/deep_dive/overview"}},d=[{value:"1. Minting an NFT",id:"1-minting-an-nft",children:[{value:"Pay For the Upload",id:"pay-for-the-upload",children:[],level:4},{value:"Creating the Token Mint",id:"creating-the-token-mint",children:[],level:4},{value:"Optional: Creating A Token Associated Account",id:"optional-creating-a-token-associated-account",children:[],level:4},{value:"Creating A Token Metadata Account",id:"creating-a-token-metadata-account",children:[],level:4},{value:"Upload the Files",id:"upload-the-files",children:[],level:4},{value:"Mint One Token",id:"mint-one-token",children:[],level:4},{value:"Create Master Edition",id:"create-master-edition",children:[],level:4}],level:3},{value:"2. The Auction",id:"2-the-auction",children:[],level:3}],u={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basic-single-item-auction-end-to-end"},"Basic Single Item Auction End To End"),(0,i.kt)("p",null,"Now that we've gone over the contracts, let's run through an example of how the contracts interact to create an NFT and sell it. I personally find these stories the most informative way to learn a new ecosystem."),(0,i.kt)("h3",{id:"1-minting-an-nft"},"1. Minting an NFT"),(0,i.kt)("p",null,"On the Solana network an NFT is represented as a Token with only 1 in circulation and further minting is disabled, but that's not very useful. A token contains very little data about itself. In fact it doesn't even know its own name. Solana tokens are a primitive construct that we build on top of. That's where Metaplex comes in. As we mentioned on our ",(0,i.kt)("a",{parentName:"p",href:"/about/terminology#non-fungible-tokens"},"Terminology Page")," Metaplex is the standard way to add metadata to tokens. This metadata allows the tokens to secure Images, Audio, Video and anything else you can dream up. In order to create an NFT using metaplex we will follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Optional: Pay for the Upload"),(0,i.kt)("li",{parentName:"ol"},"Creating a Token Mint"),(0,i.kt)("li",{parentName:"ol"},"Optional: Creating A Token Associated Account - This is a special type of account that allows you to receive a token or tokens made by a mint."),(0,i.kt)("li",{parentName:"ol"},"Creating A Token Metadata Account"),(0,i.kt)("li",{parentName:"ol"},"Upload the Files   "),(0,i.kt)("li",{parentName:"ol"},"Mint one Token"),(0,i.kt)("li",{parentName:"ol"},"Create Master Edition")),(0,i.kt)("p",null,"We are breaking these steps down to make it easier to follow. Steps 1-4 happen as one Transaction on the Solana network, and Steps 6-7 are also just one transaction. Lets dive into each step."),(0,i.kt)("h4",{id:"pay-for-the-upload"},"Pay For the Upload"),(0,i.kt)("p",null,"Ironically, the actual file upload is one of the last things to happen. Nothing is free, and uploading NFT content is no exception, so we currently need a way to pay for the file(s) to be store on Arweave. To do this we need to transfer lamports(tiny fractions of a SOL token) to a specific wallet address. This wallet address is connected to a Web2 web application that handles the file upload and the payment to Arweave. This step is only needed in the frontend, as you can specify the URI without going through Arweave"),(0,i.kt)("p",null,"Here is a visual representation of what happened"),(0,i.kt)(r.Mermaid,{chart:"sequenceDiagram\n   actor Client\n   Client->>+SYSTEM_PROGRAM: Transfer AR Upload Cost\n   SYSTEM_PROGRAM->>-AR_HOLDER_ADDRESS: Transfer Lamports",mdxType:"Mermaid"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: This approach is more centralized than many would prefer, Metaplex hopes to improve this and make it more decentralized, and remember there is nothing stopping you from hosting your NFT content differently. Metaplex is open source so change it and make it better for everyone.")),(0,i.kt)("h4",{id:"creating-the-token-mint"},"Creating the Token Mint"),(0,i.kt)("p",null,'A token mint is how you make tokens, a mint that has a supply of 1 only allows you to make one token. When we make the mint, we are not actually making the token, but a container that can make tokens. In Solana, accounts are like containers for data, like a file. To create a mint you need to creat an account in Solana that "holds" the mint.'),(0,i.kt)("p",null,"Adding to our diagram we see the Mint created."),(0,i.kt)(r.Mermaid,{chart:"sequenceDiagram\n   actor Client\n   Client->>+SYSTEM_PROGRAM: Transfer AR Upload Cost\n   SYSTEM_PROGRAM->>-AR_HOLDER_ADDRESS: Transfer Lamports\n   Client->>+SYSTEM_PROGRAM: Create an Account Owned by the System Program\n   SYSTEM_PROGRAM->>-Client: Token Account\n   Client->>+SPL_TOKEN_PROGRAM: Create A Token Mint with the public key of the Token Account\n   SPL_TOKEN_PROGRAM->>-Client: Token Mint",mdxType:"Mermaid"}),(0,i.kt)("h4",{id:"optional-creating-a-token-associated-account"},"Optional: Creating A Token Associated Account"),(0,i.kt)("p",null,"This step is necessary only when your wallet will need to hold the Token after the first MasterEdition( We will get to this later) or Prints become minted. On the Metaplex frontend, currently this is needed when you are manually uploading and creating an NFT. Without this Account your wallet could not receive the Token.\nWe keep adding to our diagram to show the Token Associated Account creation."),(0,i.kt)(r.Mermaid,{chart:"sequenceDiagram\n   actor Client\n   Client->>+SYSTEM_PROGRAM: Transfer AR Upload Cost\n   SYSTEM_PROGRAM->>-AR_HOLDER_ADDRESS: Transfer Lamports\n   Client->>+SPL_TOKEN_PROGRAM: Create A Token Mint\n   SPL_TOKEN_PROGRAM->>-Client: Token Mint\n   Client->>+SPL_TOKEN_ASSOCIATED_PROGRAM: Create Token Account\n   SPL_TOKEN_ASSOCIATED_PROGRAM->>-Client: Token Account",mdxType:"Mermaid"}),(0,i.kt)("h4",{id:"creating-a-token-metadata-account"},"Creating A Token Metadata Account"),(0,i.kt)("p",null,"As we said above the steps we have gone through thus far are represented as one transaction on the Solana network. These are called instructions, and this is the last set of instructions before we hit the network. This step is the backbone of Metaplex. This allows us to store additional information with a Token. There are alot of variables needed to execute these set of instructions, lets go through them. In the frontend, the uris are blank and then updated after the actual upload to ARWEAVE succeeds."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The Data - this is a blob of data that conforms to the ",(0,i.kt)("a",{parentName:"li",href:"/token-metadata/v1.1.0/specification"},"Token Metadata Standard"),"."),(0,i.kt)("li",{parentName:"ol"},"Your Public Key "),(0,i.kt)("li",{parentName:"ol"},"A Metadata program Derived account Address - Read more about PDAs here. This is a uninitialized address that the account will be stored at. We do this so we can deterministically find this address again in the future. "),(0,i.kt)("li",{parentName:"ol"},"The mint account public key ")),(0,i.kt)("p",null,"Lets look at an in depth diagram of the CreateAccountMetadata program and what it does."),(0,i.kt)(r.Mermaid,{chart:"sequenceDiagram\n   actor Client\n   Client->>+METAPLEX_TOKEN_METADATA_PROGRAM: Send all the Accounts and Data\n   METAPLEX_TOKEN_METADATA_PROGRAM--\x3eSYSTEM_PROGRAM: Create Account with PDA\n   METAPLEX_TOKEN_METADATA_PROGRAM--\x3eSYSTEM_PROGRAM: Transfer Lamports to Metaplex Metadata Mint PDA to store data\n   METAPLEX_TOKEN_METADATA_PROGRAM--\x3eSYSTEM_PROGRAM: Allocate space in Metaplex Metadata Mint PDA\n   METAPLEX_TOKEN_METADATA_PROGRAM--\x3e-SYSTEM_PROGRAM: Assign Ownership of the Account to Metadata Program",mdxType:"Mermaid"}),(0,i.kt)("p",null,"This adds to our ever growing diagram to complete Transaction 1."),(0,i.kt)(r.Mermaid,{chart:"sequenceDiagram\n   actor Client\n   Client->>+SYSTEM_PROGRAM: Transfer AR Upload Cost\n   SYSTEM_PROGRAM->>-AR_HOLDER_ADDRESS: Transfer Lamports\n   Client->>+SPL_TOKEN_PROGRAM: Create A Token Mint\n   SPL_TOKEN_PROGRAM->>-Client: Token Mint\n   Client->>+SPL_TOKEN_ASSOCIATED_PROGRAM: Create Token Account\n   SPL_TOKEN_ASSOCIATED_PROGRAM->>-Client: Token Account\n   Client->>+METAPLEX_TOKEN_METADATA_PROGRAM: Send all the Accounts and Data",mdxType:"Mermaid"}),(0,i.kt)("p",null,"All of these instructions are bundled up into one transaction and sent over RPC to the Solana network. At the end of this transaction you have completed steps 1-4 and the transaction id that you get back from the network will help you in the next step."),(0,i.kt)("h4",{id:"upload-the-files"},"Upload the Files"),(0,i.kt)("p",null,"If you are using the frontend, after the above transaction succeeds you will get a Transaction ID. This ID will then be used as a credential to the Web2 uploading system. This system checks the transaction id, mint key and files for validity and size. It then uploads them to arweave and finishes paying arweave out of the SOL you transferred to the special upload wallet."),(0,i.kt)(r.Mermaid,{chart:"sequenceDiagram\n    actor Client\n    Client->>+Uploader: Send files through web2 server with transaction hash as credential\n    Uploader--\x3e>+Arweave: Upload to arweave\n    Arweave--\x3e>-Uploader: Upload to arweave\n    Uploader->>+Client: Return Json URI and Binary URIs\n    Client->>+METAPLEX_TOKEN_METADATA_PROGRAM: Update metadata to have correct URIs",mdxType:"Mermaid"}),(0,i.kt)("p",null,"If you are not using the frontend then this step may not be necessary for you."),(0,i.kt)("h4",{id:"mint-one-token"},"Mint One Token"),(0,i.kt)("p",null,"Finally, the mint! We will now begin building the second transaction starting with the ",(0,i.kt)("inlineCode",{parentName:"p"},"MintTo")," instruction. MintTo needs to be passed some data in order to function, it needs the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The Mint address - this is the public key of the account we made to store the mint. "),(0,i.kt)("li",{parentName:"ol"},"The destination address - this is that PDA(Program Derived Address) that we used to store the Token MetaData, and it is now the address or public key of the Token Metadata Account."),(0,i.kt)("li",{parentName:"ol"},"Your public key - since you are the Minting Authority or Owner of the mint, you have the ability to mint."),(0,i.kt)("li",{parentName:"ol"},"An amount, in this case 1")),(0,i.kt)("p",null,"We will start fresh with our transaction diagram."),(0,i.kt)(r.Mermaid,{chart:"sequenceDiagram\n    actor Client\n    Client->>+SPL_TOKEN_PROGRAM: Mint 1 token and send it to the PDA",mdxType:"Mermaid"}),(0,i.kt)("h4",{id:"create-master-edition"},"Create Master Edition"),(0,i.kt)("p",null,"In Metaplex, you can make an NFT that is a true one-of-a-kind token, but you can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"MasterEdition")," construct to create ",(0,i.kt)("inlineCode",{parentName:"p"},"Prints")," of the master edition, just like a painting. You now want to label this token account as a MasterEdition NFT that has a limited supply of 10 possible Limited Edition Prints. Cool! Remember that the point of Metadata is to label mints - not just NFTs. To do this you call the ",(0,i.kt)("inlineCode",{parentName:"p"},"create_master_edition")," endpoint on the Token Metadata Program. By doing this, minting authority is taken away from you, and it creates a new Master Edition PDA that contains information about how large a supply you want to have."),(0,i.kt)("p",null,"Lets do a deep dive on this Program."),(0,i.kt)(r.Mermaid,{chart:"sequenceDiagram\n   actor Client\n   Client->>+METAPLEX_TOKEN_METADATA_PROGRAM: Create Master Edition\n   METAPLEX_TOKEN_METADATA_PROGRAM--\x3eSYSTEM_PROGRAM: Create Account with Mint Master Edition PDA\n   METAPLEX_TOKEN_METADATA_PROGRAM--\x3eSYSTEM_PROGRAM: Transfer Lamports to Mint Master Edition PDA to store data\n   METAPLEX_TOKEN_METADATA_PROGRAM--\x3eSYSTEM_PROGRAM: Allocate space in Mint Master Edition PDA\n   METAPLEX_TOKEN_METADATA_PROGRAM--\x3e-SYSTEM_PROGRAM: Assign Ownership of the Account to Metadata Program\n   METAPLEX_TOKEN_METADATA_PROGRAM--\x3e>+SPL_TOKEN_PROGRAM: Transfer Mint Authority of the Mint to the Mint Master Edition PDA",mdxType:"Mermaid"}),(0,i.kt)("p",null,"When you want to mint Editions now, you'll need to present a token account containing the token from this Master Edition mint as proof of ownership and authority to do so. This is why we will later hand this token over to the Auction Manager, so that it can do the same to print off Editions for winners!"),(0,i.kt)("p",null,"Lets take a look at our transaction diagram now."),(0,i.kt)(r.Mermaid,{chart:"sequenceDiagram\n    actor Client\n    Client->>+SPL_TOKEN_PROGRAM: Mint 1 token and send it to the PDA\n    Client->>+METAPLEX_TOKEN_METADATA_PROGRAM: Create Master Edition",mdxType:"Mermaid"}),(0,i.kt)("p",null,"The above instructions will get bundled up into one instruction and sent to the Solana network. Once successful your token account has a bonafide NFT Master Edition in it, we can run an auction where we auction off Limited Edition prints! Let's say we want to auction off three such prints."),(0,i.kt)("h3",{id:"2-the-auction"},"2. The Auction"),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next, we create a token vault using the ",(0,i.kt)("inlineCode",{parentName:"p"},"init_vault")," endpoint of the token vault contract. We'll store our master edition token in it by adding it to the vault using the ",(0,i.kt)("inlineCode",{parentName:"p"},"add_token_to_inactive_vault")," endpoint. This will create a safety deposit box in the vault that contains the the token.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then we will call the ",(0,i.kt)("inlineCode",{parentName:"p"},"activate_vault")," command which ",(0,i.kt)("strong",{parentName:"p"},"Activates")," the vault, locking everything inside.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We now ",(0,i.kt)("strong",{parentName:"p"},"Combine")," the vault using ",(0,i.kt)("inlineCode",{parentName:"p"},"combine_vault"),', which is to say, we "open it," so the current authority could, if they wanted, withdraw the tokens inside it. The Auction Manager can only work with vaults in this state, which is why we have to go through the ',(0,i.kt)("strong",{parentName:"p"},"Activation")," phase to get here even though it seems a little nonsensical. ",(0,i.kt)("a",{parentName:"p",href:"./deep_dive/token_vault"},"See the in depth guide")," for more color on why these different states exist.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next up, we create the auction, and we say its resource is this vault. The auction has not yet been started, but it has the right resource (the vault). We do this via the ",(0,i.kt)("inlineCode",{parentName:"p"},"create_auction")," command on the Auction contract.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now that we have an auction and a vault, we can go and call the ",(0,i.kt)("inlineCode",{parentName:"p"},"init_auction_manager")," endpoint on the Metaplex contract with both of these accounts among a few others to create an AuctionManager, which ties them both together. Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"init_auction_manager")," takes a special struct called AuctionManagerSettings that allows one to specify how many winners there are and what winners get which items from which safety deposit box. At this point, we can't yet start the auction. The AuctionManager is in an invalidated state and we need to validate it. We do this by validating that the safety deposit boxes we provided to it in the vault have actually what we said are in them when we provided the AuctionManager with it's settings struct.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Before we begin validation, we call ",(0,i.kt)("inlineCode",{parentName:"p"},"set_authority")," on both the vault and auction to change its authority to the auction manager, so that it has control over both of those structs. This is a requirement for the validation phase and the rest of the contract lifecycle. ",(0,i.kt)("strong",{parentName:"p"},"Now you no longer have control over your items."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We call the ",(0,i.kt)("inlineCode",{parentName:"p"},"validate_safety_deposit_box")," endpoint on the Metaplex contract with the one safety deposit box in the vault, and the logic in this endpoint checks that there are exactly 3 printing tokens from the right mint in this box, matching the 3 printing tokens we promised it would have in our AuctionManagerSettings. Once we do this, and because this is the only safety deposit box in the vault, the AuctionManager is now validated.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We now call ",(0,i.kt)("inlineCode",{parentName:"p"},"start_auction")," on the Metaplex contract, which, because the AuctionManager has authority over the Auction, calls ",(0,i.kt)("inlineCode",{parentName:"p"},"start_auction")," on the Auction contract, and the auction begins!")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Users can go and call ",(0,i.kt)("inlineCode",{parentName:"p"},"place_bid")," on the Auction contract to place bids. When they do this, tokens of the ",(0,i.kt)("inlineCode",{parentName:"p"},"token_mint")," type used by the auction are taken from the account they provide, tied to their main wallet, and stored in bidder pot accounts in the auction contract.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In order to update a bid, a user must first cancel the original bid, and then place a new bid.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once the auction is over, a user can refund their bid if they did not win by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"cancel_bid")," again. Winners of the auction cannot cancel their bids.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The winner of a bid creates a mint with decimals 0, a token account with 1 token in it, and calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"redeem_printing_v2_bid")," endpoint on the Metaplex contract, all in a single transaction. This token is now ",(0,i.kt)("em",{parentName:"p"},"officially"),' a Limited Edition of the "Bob\'s Cool NFT" Master Edition NFT!')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You, the auctioneer, visit /#/auction/id/billing and hit the settle button. This first iterates over all three bidders and for each wallet used, calls ",(0,i.kt)("inlineCode",{parentName:"p"},"claim_bid")," on the Metaplex contract, which proxy-calls a ",(0,i.kt)("inlineCode",{parentName:"p"},"claim_bid")," on the Auction contract, telling it to dump the winner's payment into an escrow account called ",(0,i.kt)("inlineCode",{parentName:"p"},"accept_payment")," on the AuctionManager struct. It has the same token type as the auction. Once all payments have been collected, the front end then calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"empty_payment_account")," endpoint one time (since you are the only creator on the Metadata being sold) and the funds in this escrow are paid out to a token account provided of the same type owned by you."),(0,i.kt)("p",{parentName:"li"},'Note that our front end reference implementation uses SOL as the "token type." This has some special caveats, namely that SOL isn\'t really an "spl token." It instead has a work-around called the "Wrapped SOL mint." This is a special mint that is often used in a transient account. What this means is that when we place a bid, we actually make a one-off system account, transfer lamports to it of your bid amount + rent, then label it an spl-token account of the wrapped sol type, use it to place the bid, then close it all in one transaction.'),(0,i.kt)("p",{parentName:"li"},"Special machinations in the spl token program then make this wrapped sol token account have a number of tokens with the proper decimals that map to the amount of SOL you transferred to it. We do a similar operation with cancelling, where we make a transient wrapped sol account, transfer cancelled bid funds to it, and then close the account, transferring funds out all in a single transaction. This is all done for ease of use. With settlements, when funds are disbursed to artists, we actually make a WSOL account for them and they have to close it by hand via a dropdown menu."),(0,i.kt)("p",{parentName:"li"},"The protocol operates off of generic spl tokens and has no opinions about WSOL specifically, but the front end reference implementation does. So take careful note!"))))}p.isMDXComponent=!0},11748:function(e,t,n){var a={"./locale":89234,"./locale.js":89234};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=11748}}]);