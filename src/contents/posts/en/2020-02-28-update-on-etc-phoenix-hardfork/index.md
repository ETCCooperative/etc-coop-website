---
id: "2020-02-28-update-on-etc-phoenix-hardfork"
title: "Update on ETC Phoenix Hardfork"
author: Bob Summerwill
featuredImage: phoenix2.png
tags: [protocol]
---

**TL;DR – Pending ETC hardfork is now “Phoenix”, targeting the same block, with slightly different scope.**

**“Phoenix Day” is still tracking for early June.**

On Wednesday February 26th, the ETC Core Developers [held a conference call](http://www.youtube.com/watch?v=HzcJL3rVbpU) in which the third different consensus was reached on scope of the pending hardfork:

1. [ECIP 1061: Aztlán (Yingchun Edition)](http://ecips.ethereumclassic.org/ECIPs/ecip-1061) – consensus on [27th Nov 2019](http://github.com/ethereumclassic/ECIPs/issues/177).
2. [ECIP 1061: Aztlán (Yingchun Edition)](http://ecips.ethereumclassic.org/ECIPs/ecip-1061) + [ECIP 1078: Phoenix (“Aztlán fix”)](http://ecips.ethereumclassic.org/ECIPs/ecip-1078) – consensus on [5th Feb 2020](http://github.com/ethereumclassic/ECIPs/issues/284)
3. [ECIP 1088: Phoenix](http://ecips.ethereumclassic.org/ECIPs/ecip-1088) – consensus on [26th Feb 2020](http://github.com/ethereumclassic/ECIPs/issues/298).

All three flavors have been similar in scope (“Adopt ETH Instanbul changes”) with all the disagreements being around the gas repricings within [EIP 1884: Repricing for trie-size-dependent opcodes](http://eips.ethereum.org/EIPS/eip-1884) which notoriously [broke hundreds of deployed Aragon smart contracts](http://www.coindesk.com/ethereums-istanbul-upgrade-will-break-680-smart-contracts-on-aragon).

We discovered in December that Aztlán was mis-specified. We thought we had fixed it with Aztlán + Phoenix, but more issues arose during testing, so we have re-vectored again. It turned out that various EIPs within Instanbul were co-dependent and that what we were trying to do was a lot harder than anticipated.

The new consensus is very simple – “vanilla” adoption of all the Istanbul changes, including the controversial 1884 gas repricings.

Is this hypocrisy? Isn’t ETC meant to be “immutable”? Didn’t Bob repeatedly say that “ETC will **not** be adopting these repricings, because we care about backwards-compatibility?” What carried the day in the end was the argument that while the repricings were philosophically something which could break deployed smart contracts on ETC as well, as far as we were aware, the changes would not break anything in practice – so a “zealot stance” would not make any practical difference in this particular circumstance, and adoption of all changes as a “block” would be much safer than trying to “thread the needle” on the initially desired middle-ground.

Bob spoke in favor of an alternative, more conservative proposal – [ECIP 1089: Phoenix EVM and Protocol Upgrades (Classic Option)](http://ecips.ethereumclassic.org/ECIPs/ecip-1089) – but the consensus was for the “vanilla” option. This was not an “over my dead body” situation, and so consensus was reached for the new scope during the call.

Isaac also expressed his support for EVM account versioning in the future. Hopefully we can get [ECIP 1065: Kunming EVM and Protocol Upgrades](http://ecips.ethereumclassic.org/ECIPs/ecip-1065) or a similar proposal in place for the next hardfork.

**Scope of Phoenix**

- Add Blake2 compression function F precompile
- Reduce alt_bn128 precompile gas costs
- Add ChainID opcode
- Repricing for trie-size-dependent opcodes
- Calldata gas cost reduction
- Rebalance net-metered SSTORE gas cost with consideration of SLOAD gas cost change

This document proposes the following blocks at which to implement these changes in the Classic networks:

- 999_983 on Mordor Classic PoW-testnet (March, 2020)
- 2_200_013 on Kotti Classic PoA-testnet (April, 2020)
- 10_500_839 on Ethereum Classic PoW-mainnet (June 10th, 2020)
