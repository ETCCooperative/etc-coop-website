---
id: "2020-01-26-etc-phoenix-hardfork"
title: "ETC Phoenix Hardfork"
author: Bob Summerwill
featuredImage: BG-Phoenix-Green-Wires.png
tags: [protocol]
---

While implementing the Aztlán hardfork for Parity-Ethereum and Multi-Geth, Wei Tang discovered some specification flaws which mean that the specification as written does not meet the original intentions.

Fear not, though.  Addressing the mis-specification is not hard.   He also detailed two approaches to addressing the mis-specification - the "fix" and "redo" options respectively.

In short, the "fix" option would see a second hardfork being activated at the same block with the combined effect of those two forks being the same as if we had correctly specified Aztlán in the first place.   The "redo" option would see the Aztlán hard-fork withdrawn and a replacement hardfork being scheduled on a delayed timeline.

It is the opinion of the ETC Cooperative that there is no need for panic or delay at this stage.  There are 8.5 weeks remaining until planned ETC mainnet activation of Aztlán and the technical detail of having two simultanous hardforks rather than one would be of no interest whatsoever to normal human human beings.    This happened for "Constantinople and Petersburg" on ETH but that detail is all but forgotten, if people even noticed in the first place.

We are confident that the protocol developers can just "fix" Aztlán with an overlay hardfork on the original timeline.

Aztlán support has already been released in [Multi-Geth 1.9.7](https://github.com/multi-geth/multi-geth/releases/tag/v1.9.7) and will also be present in the next Parity-Ethereum point-release.

ChainSafe have been working on the [Hyperledger Besu support](https://github.com/ChainSafe/besu/tree/ed/etc_aztlan), which will include this nascent Phoenix hardfork as well ahead of the first testnet activation due for February 5th.  ChainSafe have already stated that they have capacity to help with the other client software as well, if necessary.   soc1c has many years expertise with the Parity-Ethereum codebase.  ETC Core have been doing plenty of work on MultiGeth.   We have plenty of talent and plenty of time.

This is not really new work.  It is activating functionality which is already live on the ETH mainnet and using codepaths which were built out in each of the three clients several months ago.  This is not high-risk stuff.

If we hit issues during the testnet phase then the testnets will have served their purpose, and we will bug-fix as required.   If some catastrophic further specification issue is found, or testing finds other fatal flaws in the plan then we still have plenty of time to abort.

**So - don't panic :-)**

As long as we can gather adequate human consensus we remain on track to deliver full byte-code compatibility with the ETH mainnet on 25th March 2020, at block 10,500,839, which I am suggesting we call Phoenix Day.

That day would see two hard-forks activated:

- [ECIP 1061: Aztlán EVM and Protocol Upgrades (Yingchun Edition)](https://ecips.ethereumclassic.org/ECIPs/ecip-1061)
- [ECIP 1078: Phoenix EVM and Protocol Upgrades](https://github.com/ethereumclassic/ECIPs/pull/261/files)

And would see ETC truly reborn - hence Phoenix HF and hence Phoenix Day!
