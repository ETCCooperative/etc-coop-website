---
id: "2023-11-09-ethereum-classic-mordor-testnet-spiral-upgrade-emergency-patch-alert-en"
title: "Ethereum Classic Mordor Testnet Spiral Upgrade Emergency Patch Alert"
author: Donald McIntyre
featuredImage: emergency-mordor-patch.png
tags: [Announcement]
---

Yesterday afternoon we discovered a problem in the latest release with regards to the [Spiral upgrade](https://ecips.ethereumclassic.org/ECIPs/ecip-1109) on the ETC Mordor testnet. 

We did the release, but it didn't include the activation fork block number. 

As soon as we realized this, we took the decision to correct the mistake in Core-Geth and reorganized the incorrect chain by out-powering it with our miners. 

This was resolved with the following emergency patch release: [https://github.com/etclabscore/core-geth/releases/tag/v1.12.16](https://github.com/etclabscore/core-geth/releases/tag/v1.12.16)

**PLEASE UPGRADE YOUR ETC MORDOR TESTNET NODES WITH THE ABOVE RELEASE.**

Both [ETC-Network.Info](https://fork-monitor-mordor.etc-network.info/) and [Blockscout](https://etc-mordor.blockscout.com/) have updated their Mordor nodes.

In summary, we had a problem with Core-Geth v1.12.15 release which meant that the Spiral upgrade did not activate correctly on the Mordor testnet.

When a transaction using new Spiral features was processed, Besu activated as expected, but Core-Geth did not, causing a chain split on the testnet. 

**(Note - we are not recommending Besu for end-users anymore, but maintain the client for cross-client testing, exactly like this!)**

We stopped the Besu miner, resolved the issue with our Core-Geth nodes and then reorganized the chain back to the originally intended state. All of this was possible because few people are using the Mordor testnet. 

Although this mistake happened, we are happy that we had decided to separate the mainnet and testnet upgrades precisely to minimize these risks. Testnets exist to test these transitions without risk to the main network, but equally, we'll learn and improve from what happened here.

