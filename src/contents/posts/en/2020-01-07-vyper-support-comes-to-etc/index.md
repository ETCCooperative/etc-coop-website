---
id: "2020-01-07-vyper-support-comes-to-etc"
title: "Vyper Support Comes To ETC"
author: Bob Summerwill
featuredImage: vyper.png
tags: [infrastructure]
---

We are delighted to announce that ETC Cooperative has funded the Vyper team to add EVM target versioning which was gating for ETC support.

Vyper previously targeted ETH Byzantium opcodes unconditionally. These opcodes were missing from ETC until the Atlantis hardfork which happened in September 2019. Now Vyper has support for three different EVM versions:

- ETH Byzantium (~=ETC Atlantis)
- ETH Constantinople (~=ETC Agharta)
- ETH Istanbul (~=ETC Aztlán)

To select your target EVM, use vyper --evm-version whatever on the command-line.

At the time of writing for ETC mainnet that would be vyper --evm-version atlantis.

After this weekend it will be vyper --evm-version agharta. ETC testnets are already Agharta-enabled.

Head over to https://github.com/vyperlang/vyper to see the work-in-progress or to https://vyper.readthedocs.io/ for documentation.

Congratulations to our friends on the Vyper team for this support and the raft of other features and fixes they just released.

This was a pretty big release, with a lot of bug fixes and features added since our last release 2 months ago.

Please consider supporting their important work via Gitcoin donations with a time-sensitive opportunity to boost their funding via CLR matching until 21st January. Support our developers 🙂

Also, if you haven't already, give #Vyper a try! It's a fun and refreshing experience!

Contributions are matched with CLR funds until the 21st!

Vyper Smart Contract Language
The continuous funding of this grant will be aimed towards improvement and maintenance of the Vyper Smart Contract Language. Vyper is a Python-like language for writing EVM smart contracts, with...

Thanks to Yaz Khoury for his key role in getting this important project to completion!
