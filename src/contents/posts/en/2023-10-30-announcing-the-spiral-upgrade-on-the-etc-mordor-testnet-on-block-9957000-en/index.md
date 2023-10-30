---
id: "2023-10-30-announcing-the-spiral-upgrade-on-the-etc-mordor-testnet-on-block-9957000-en"
title: "Announcing the Spiral Upgrade on the ETC Mordor Testnet on Block 9,957,000"
author: Donald McIntyre
featuredImage: spiral-mordor.png
tags: [Announcement]
---

**IMPORTANT NOTICE FOR NODE OPERATORS ON THE ETC MORDOR TESTNET:**

We announce that we have released the version of Core-Geth which sets the activation block for the upcoming network upgrade, named Spiral, for the Ethereum Classic Mordor testnet and it's important that every node on that test network updates their client before that block, which is estimated for Nov 7th.

**The block number specified is:** 9,957,000

## Important Links

- You may find the new release here: [https://github.com/etclabscore/core-geth/releases/tag/v1.12.15](https://github.com/etclabscore/core-geth/releases/tag/v1.12.15)
- The specification for the upcoming upgrade is on ECIP-1109, which you can find here: [https://ecips.ethereumclassic.org/ECIPs/ecip-1109](https://ecips.ethereumclassic.org/ECIPs/ecip-1109) 

PLEASE NOTE THAT ECIP-1109 DOES NOT SPECIFY A BLOCK NUMBER FOR THE UPGRADE ON THE ETHEREUM CLASSIC MAINNET YET. THIS WILL HAPPEN AT A LATER TIME.

## Rationale for Making the Testnet and Mainnet Forks Independent

Before we are ready to announce an activation block on the mainnet, we're going to want to have completed all the testing which we need on the Mordor network. 

In the past we set both testnet and mainnet blocks at the same time, trying to estimate how much testing we might need and then having to scramble when things went wrong. But, now we can do those phases sequentially: Test completely on the testnet before picking a mainnet activation block. 

If the above means a month of testing, then setting a mainnet block three months away, that is more prudent, especially for a blockchain as ETC that seeks the highest levels of security and stability.

Core-Geth users will have sufficient time to adjust and upgrade their nodes for the Spiral hard fork on the mainnet.
