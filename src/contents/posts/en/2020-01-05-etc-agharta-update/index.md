---
id: "2020-01-05-etc-agharta-update"
title: "URGENT - ETC Agharta Update"
author: Bob Summerwill
featuredImage: agharta.png
tags: [protocol]
---

On January 12th 2020 we will hit an exciting milestone for Ethereum Classic with the Agharta protocol update.

Bookmark this dashboard to track progress:
https://etcnodes.org/agharta

Node operators must update their nodes to stay in consensus with the rest of the ETC network.  To be crystal clear, this is not a contentious hard-fork.   There is no group within the ETC ecosystem who oppose these changes.  "New coins" will not be created.  This is a routine protocol upgrade.  Here are links to the latest installers:

- Hyperledger Besu 1.3.8
- Parity-Ethereum 2.5.13
- Multi-Geth 1.9.7

ETC Cooperative recommends Hyperledger Besu.

ETC Agharta adds the ETH Constantinople opcodes to ETC mainnet.  The addition of the CREATE2 opcode will have huge benefit, because it enables the use of many state channels implementations on ETC which depend on that opcode so we were not previously possible on ETC.

- EIP 145 - Bitwise shifting operations
- EIP 1014 - Skinny CREATE2
- EIP 1052 - EXTHASHCODE opcode

ETC support was added to Hyperledger Besu in December 2019 (funded by ETC Cooperative and implemented by ChainSafe).  The codebase has a world class primary team behind it in the form of PegaSys, has permissive Apache 2.0 licensing and mature IP protection and mature governance under the Linux Foundation.

In addition to ETH and ETC mainnet support (and Mordor and Kotti and Gorli) it also has EEA enterprise support.   All the ingredients are in place for this codebase to have a multi-decade lifespan, without the ability for changing business plans to derail it.

In comparison, Parity Technologies have announced their intention to transition ownership of Parity-Ethereum to a DAO, with their own involvement being scaled back considerably.  There is huge legal uncertainty here.  Barring a fork of Parity-Ethereum to Apache 2.0 prior to transitioning to the DAO, it makes no sense for ETC Cooperative to participate there, regretful though that decision would be.   I have faith that Parity Technologies will not make the same mistake twice, and condemn Parity-Ethereum to the same fate as cpp-ethereum.   Parity-Ethereum have enforced a CLA (contributor licensing agreement) and could very easily fork-and-relicense to Apache 2.0.  There is no issue on the IP protection front - just the enterprise-unfriendly GPLv3 licensing.   See my Ethereum Everywhere post from 2016 for more on the dynamics at play.

Similarly, the future for Geth and downstream is exceedingly uncertain IMHO, given the pending transition to ETH2.   That codebase also has same IP and licensing issues which hindered cpp-ethereum.  Unresolved today and exceedingly unlikely ever to be resolved, because these matters simply do not concern the maintainers.

We have a fantastic new dashboard to help us through the transition in the form of https://etcnodes.org, which was commissioned by the ETC Cooperative, hosted by Bitfly.   This is an ETC equivalent to the popular https://ethernodes.org website which Bitfly also host.

This main page shows all nodes seen by the crawler in the last 7 days, which shows Parity-Ethereum at over 50% of "market share":

The Agharta tracking page shows all nodes seen by the crawler in the last 24 hours, along with what proportion of those nodes are running Agharta compatible versions, including the deprecated Geth Classic client, which is end-of-life.   Anybody running Geth Classic nodes should migrate to one of the other clients.  Of course, we would recommend Hyperledger Besu.

Please join us on the ETC Discord to chat about Agharta and for any support you may need through this progress.
