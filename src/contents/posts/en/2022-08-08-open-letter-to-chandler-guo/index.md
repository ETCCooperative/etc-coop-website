---
id: "2022-08-08-open-letter-to-chandler-guo"
title: "An Open Letter to Chandler Guo"
author: Bob Summerwill
featuredImage: chandler.jpeg
tags: [governance]
---

Hey Chandler,

Please let me lay out why I think that an Ethereum POW fork won't work, and will be an awfully hard thing even to do.

At the time of the ETH/ETC chain split, supporting ETC was the simplest thing in the world to do - just keep mining. Just keep running the same client software. It was a zero effort thing to do. The hard coordination work was all on the pro-fork side.

This time you will need to fork Geth (and probably also Erigon, Besu and Nethermind). Each of those codebases will need to have the POS transition logic removed, to have the difficulty bomb disabled and also to update the Chain ID to provide replay-protection. Mining software will likely have to be forked/updated as well, to provide support for that different Chain ID and maybe more. Unlike the client code, which is public and open source, lots of mining software is closed source, and you will need to persuade its authors to make those changes and then to support them.

You will need to work with wallet providers to agree to support ETHW. You will need to work with exchanges to agree to support ETHW.

After you have releases of working client software you will need to work with all of the node operators to gather their support to run the new software.

All of this coordination is very hard work, and takes a very long time. I know this because of going through multiple upgrade cycles for ETC. It is really really hard and slow.

At the moment, from what I see, there is close to zero information on the website. No information on where the client and other software development is happen (ie. Github organization). That is really crucial and needs to be happening in the open to build trust. Certainly no links to releases of the client software, which is desperately needed so that node operators can start work on bringing those client installs online in readiness for the transition.

There are no blog posts, articles, tutorials or other documentation which will be essential to coordinating this work. The Merge is only weeks away. It is so so late to do anything.

Even if you do manage to get client software released, and get at least a handful of mining pools and exchanges into a position where the fork will actually happen, and be a reality rather than just the IOUs currently trading, you will still have all the issues with how broken that chain will be.

All stablecoins backed by real world assets (USDT, USDC, etc) will go to zero, because the issuers only have the USD balances which they have. They will back ETH. Pretty much everything in Defi is built on top of those tokens, so pretty much every Defi project will be totally broken.

At the time of the ETH/ETC split there was no Defi or custodial stablecoins, so nothing really broke. Now, most of the value on ETH is in the form of tokens, not just the native Ether. So the new chain will be pretty useless to existing ETH users.

All dapps built on top of Ethereum have lots of associated off-chain resources - their websites which allow access, their servers running backend services, their community resources and documentation, and most importantly the humans running their dapps - developing, bug fixes, maintaining, customer service, etc. All of that will disappear at the time of the fork, so that even projects whose tokens do NOT go to zero instantly will still be broken and inaccessible to most users, who do not run their own nodes and are dependent on those third party services.

Unless particular projects agree to bring up parallel infrastructure for their project (most will not) then that project will be broken. Anything with oracles will also be broken.

Many projects have administrator access, for smart contract upgrading and emergency maintenance operations. Those need private keys which are held by the project leads. They won't be turning those over to people who want to run the dapp fork on the new chain. Why should they? It only carries risk to them, and also steps all over the value of their project which they have spent time and money building up.

The more likely scenario for big name projects is that they would explicitly choose to shut down their smart contracts on the new chain - to avoid confusion and loss to end-users.

It's the same story for NFTs as it is for Defi. NFTs on the chain aren't going to be recognized or supported. Got Cryptokitties? You are not going to get working forked versions of those. You also are not going to get working forked versions of NFT marketplaces like OpenSea.

Anything on EthereumPOW will need to be explicitly set up by talking to the project team and persuading them (either talk or $$$) that it is worth their while duplicating all of their infrastructure to bring up parallel instances of everything, and to take on the human load of supporting that second instance.

That is a huge, huge coordination task, and The Merge is only weeks away. Stuff which is broken on the new chain is very unlikely to be "fixed" later on.

I just don't see such a chain providing any value to actual end-users. There is a huge coordination burden even to launch the chain itself, and then orders of magnitude more effort to actually make it useful. Whatever happens, the chain itself will be a disaster zone post-fork due to the broken Defi and NFTs, and there is no way to avoid that pain.

The breakage was brilliantly detailed in this article from 2019 and is even more relevant now, with orders of magnitude more depth of Defi having been created in the meantime.

https://medium.com/dragonfly-research/ethereum-is-now-unforkable-thanks-to-defi-9818b967738f

I don't think that you and other EthereumPOW proponents realize quite how much you have chewed off here, and specifically underestimate or discount the impact of this "unforkability" reality.

There is still time to call off this fork. It will just cause more disruption and will inevitably fail after an initial pump, because it will not have any users.

As Barry said "fwiw, our full support is behind ETH PoS, in addition to ETC, and have zero intention to support any ETH PoW fork. ETH miners should move to ETC to maximize their revenue long term. simple as that"

He is right.

Best wishes,
Bob
