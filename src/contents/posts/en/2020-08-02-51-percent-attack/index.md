---
id: "2020-08-02-51-percent-attack"
title: "51% attack on ETC"
author: Bob Summerwill
featuredImage: hacker.jpg
tags: [protocol]
---

## What happened?

Early in the morning of August 1st (North American time) a 51% attack occurred on the ETC mainnet. There was a 3600+ block reorg which also led to a chain-split.

Miner 0x75d1e5477f1fdaad6e0e3d433ab69b08c482f14e released around 12 hours worth of offline mined blocks leading to a major reorg. OpenEthereum nodes were unable to cope with that large a reorg, leading to a chain split with OpenEthereum nodes on one side and Core-Geth, Multi-Geth and Hyperledger Besu nodes on the other.

Both chains were being mined for a while, with the chain being followed by Core-Geth, Multi-Geth and Hyperledger Besu being the heavier chain. That chain (now the canonical ETC mainnet) contains the reorgs. Transactions on the original chain during those 12 hours were reorganized out, though some of those transactions will have been re-confirmed since in newly mined blocks. Miners have lost block rewards for those reorganized 12 hours.

Both [BlockScout](https://blockscout.com/etc/mainnet/) and [Expedition](https://expedition.dev/?network=mainnet) block explorers are showing the correct heaviest chain.

Some exchanges have paused ETC deposits and withdrawals while others were unaffected and have continued. If you are using an exchange, please check with them on their status.

## Were there double-spends?

We have not seen evidence of any double-spends yet. Analysis into the transactions on both chains is ongoing.

## What do I need to do if I am a node operator?

Node operators running OpenEthereum nodes are recommended to migrate immediately to either Core-Geth or Hyperledger Besu, so that they get back on the canonical mainnet chain:

- [Core-Geth](https://github.com/etclabscore/core-geth/releases/)
- [Hyperledger Besu](https://github.com/hyperledger/besu/releases/)

Operators running Multi-Geth are also recommended to migrate, because the latest release of Multi-Geth has had ETC support removed.

Services and users who had transactions on July 31st or August 1st (blocks 10904147 to 10907761) should verify those transactions.

For miners ONLY Core-Geth is recommended. Mining support in Besu is not very mature yet, though that is an area of focus.

As can be seen on [etcnodes.org](https://etcnodes.org/), there are still a very large number of OpenEthereum and Multi-Geth nodes still to migrate.

It is always recommended that exchanges use an adequate number of confirmations to provide protection against attacks. Coinbase are currently using 5676 confirmations, and that is likely a good choice.

See [Your Exchange Needs More Confirmations: The BitConf Measure](https://medium.com/@pyskell/your-exchange-needs-more-confirmations-the-bitconf-measure-872b69babc8f).

## Where can I get help?

Follow the [eth_classic](https://twitter.com/eth_classic), [ETC Cooperative](https://twitter.com/ETCCooperative), [ETC Labs](https://twitter.com/etclabs) and [ETC Core](https://twitter.com/etc_core) twitter accounts for updates.

Join us on the [ETC Discord](https://discord.gg/HgBa9b4) server for live chat/support.

## Other articles and blog posts

There are a good number of blog posts and articles which were written yesterday detailing events, if you would like to read more about what happened:

- [ETC Chain Split Diagnosis](https://hackmd.io/@cUBb4hAvQciAEPoU2yfrzQ/Skd4X6MZw) - ETC Cooperative and Rivet.
- [Ethereum Classic Suffers Reorganization That Resembles 51% Attack Amid Miner Complications](https://www.coindesk.com/ethereum-classic-undergoes-likely-51-attack-with-3693-block-chain-reorganization) - Coindesk
- [Ethereum Classic Blockchain Split – 3000 Blocks Got Orphaned](https://2miners.com/blog/ethereum-classic-blockchain-split-3000-blocks-got-orphaned/) - 2Miners
- [ETC’s Chainsplit: What Went Wrong](https://medium.com/rivet-magazine/etcs-chainsplit-what-went-wrong-534f78df5c09) - Rivet.
- [Statement Regarding Ethereum Classic Chain Reorganization](https://medium.com/ethereum-classic-labs/statement-regarding-ethereum-classic-chain-reorganization-a0d5c2de8fdf) - ETC Labs
- [Ethereum Classic 51% Chain Attack July 31, 2020](https://blog.bitquery.io/ethereum-classic-51-chain-attack-july-31-2020) - Bitquery
- [Ethereum Classic traders undeterred by potential 51% attack](https://decrypt.co/37414/ethereum-traders-undeterred-by-potential-51-attack) - Decrypt
