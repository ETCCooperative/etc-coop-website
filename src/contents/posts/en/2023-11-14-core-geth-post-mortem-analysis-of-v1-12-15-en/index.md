---
id: "2023-11-14-core-geth-post-mortem-analysis-of-v1-12-15-en"
title: "Core-Geth Post-Mortem Analysis of v1.12.15"
author: Diego López León
featuredImage: banner.png
tags: [Infrastructure]
---

On Oct 26th, version 1.12.15 of Core-Geth was released with, allegedly, the activation number set for the upcoming network upgrade in the Mordor network, according to what’s specified in [ECIP-1109](https://ecips.ethereumclassic.org/ECIPs/ecip-1109).

The process for generating a new release is documented [here](https://etclabscore.github.io/core-geth/developers/create-new-release/), and this process can be performed by any member of the team.

Just before starting this process, the software is considered well-tested by automated tools, and various non-functional aspects were monitored to detect regressions (e.g., performance issues, undesired incompatibilities). Releases like this one, where an upgrade is intended to activate at a certain height, must ensure that the activation itself is properly tested too.

This is achieved through the collaboration of different members who, after agreeing on a convenient activation block number for the activation to happen, isolate themselves from the public network and start mining their own private version of it. We call this process “shadow forking,” and once the convenient block number is reached, the new consensus rules are tested on top of the running forked network.

But there is one last step before closing this type of release, and it involves setting the specified number for when the new consensus rules will become active on the live network. This is a harmless value, targeting a point in the future, but its presence is crucial to match the specified behavior.

Unfortunately, due to certain assumptions in the aforementioned releasing steps, in this version, the last commit of the history where the activation value was set was omitted, meaning that the upgrade was never meant to become active.

We became aware of this situation when we attempted to test the new features in the network, and those tests failed (i.e., they behaved in the “old” way). At the same time, we realized that one of our miner nodes, a Hyperledger Besu one, started to diverge from the core-geth clients. This would happen when there is a breach in the consensus, and that’s what happened here: Hyperledger Besu had the activation where it was expected, and Core-Geth didn’t.

The solution came out pretty fast. We made an emergency release ([1.12.16](https://github.com/etclabscore/core-geth/releases/tag/v1.12.16)), with the value properly set to the already passed block, and amended the chain by mining up until we reached the new consensus. For this to happen, two situations helped us come out unharmed. First of all, we quickly realized the existence of different living branches, keeping the total terminal difficulty at levels we could handle. Second, but related, the difficulty for each block of the testnet is low enough to allow us to outpower the existing branch with not much power.

After doing this, and with the collaboration of other stakeholders like Blockscout for the [Mordor explorer](https://etc-mordor.blockscout.com/), we were able to stabilize the network to the desired state.

Actions to be taken to prevent this from happening again include, but are not limited to, revamping the releasing process (e.g., adding more automation) and adding more testing after the release (i.e., checking the exposed fork ID from the recently released artifact).
