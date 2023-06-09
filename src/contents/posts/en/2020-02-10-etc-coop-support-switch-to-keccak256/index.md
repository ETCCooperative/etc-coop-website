---
id: "2020-02-10-etc-coop-support-switch-to-keccak256"
title: "ETC Cooperative support for switch of mining POW to Keccak256 proposal"
author: Bob Summerwill
featuredImage: tsankov.jpeg
tags: [protocol]
---

In the aftermath of the 51% attacks against Ethereum Classic in January 2019, Alex Tsankov started digging into Ethash and quickly came to the conclusion that the “ASIC resistance” founding myth of Ethereum had led to a very complicated “machine” which was not serving ETC well.

His reaction was to author ECIP 1049: Change the ETC Proof of Work Algorithm to Keccak256 and then through 2019 he spent time setting up the Astor testnet.

Alex made a presentation at ETC Summit 2019 on this proposal:

And both Alex and Henry Quan, CEO of ePIC Blockchain also spoke on the mining panel at the same event:

Today we are pleased to share three important milestones in support of this proposal.

Firstly, Henry Quan has released the excellent [SHA-3 Transition Whitepaper: Impact on Ethereum Classic Mining Hardware and Network Security](https://github.com/epicblockchain/whitepapers/blob/master/ETC/SHA3/SHA-3_Transition_Whitepaper_Impact_on_Ethereum_Classic_Mining_Hardware_and_Network_Security.md), in which he talks through the dynamics of SHA3 ASIC hardware and how the transition could be managed, along with a corresponding [Navigating mining options for the Ethereum Classic SHA-3 fork](https://medium.com/@Henry_ePIC/navigating-mining-options-for-the-ethereum-classic-sha-3-fork-1614e99c3e4a) medium post. These articles are really raising the bar on the discussion, because they are written from the perspective of a CEO of a company building cryptomining ASICs and he has a 30+ year career designing ASICs. This is not “opinion from the peanut gallery”. This is straight from the horse’s mouth.

Secondly, I am delighted to announce that ETC Cooperative has signed a contract with Whiteblock to implement Keccak256 support in Hyperledger Besu. All of this work should come to fruition during February and March. We are also working with Whiteblock within the Enterprise Ethereum Alliance, with Whiteblock driving efforts on the EEA testnet and the compliance program which will follow from that. Yaz Khoury has volunteered his help as a Vice-Chair for that working group – to partner with and assist Whiteblock on that critical work.

_Hyperledger Besu PoC_

- _Whiteblock will develop a PoC of Keccak256 running within the Hyperledger
  Besu client._
- _Whiteblock will run necessary conformance and integration tests to ensure proper
  functionality and performance._

_Documentation_

- _Whiteblock will document testing efforts, processes, and explanation._

_Public Testnet_

- _Whiteblock will launch, manage, and maintain a public and community accessible
  test network demonstrating performance of these implementations._
- _Performance and data analytics will be provided within an appropriate GitHub
  repository for public reference._

Thirdly, the ETC Cooperative will be adding a BlockScout instance for the Astor testnet, along with an Ethercluster instance providing JSON-RPC endpoints for developers to try building their smart contracts on top of a Keccak256 testnet.

Becoming the “apex predator” within an ASIC-friendly SHA3-based mining ecosystem is a massively more secure position than our current minority-hash Ethash position. As it stands, ETC security is heavily dependent on whether or not ProgPOW is activated and when and how Ethereum transitions to POS. The chain is still vulnerable to 51% attacks.

It is the position of the ETC Cooperative that we are best served by transitioning the ETC chain to Keccak256. So we are investing some resources into exploring that proposal and to de-risking the proposal through implementation. We will work with miners, with mining pools and with the authors and maintainers of both open source and closed source mining software. We will work with wallets and exchanges and other node operators to flesh out all operational aspects of a Keccak256 chain, and of the potential transition.

Ultimately, whether such a transitional occurs or not is down to the human consensus which can be built behind the proposal. The best way to get to such a consensus is through implementation in the clients, implementation in supporting software, operation of a testnet under load, and similar concrete steps.

That is what we are doing, starting today.

**Bob Summerwill, Executive Director, ETC Cooperative**
