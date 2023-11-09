---
id: "2023-11-09-ethereum-classic-mordor-testnet-spiral-upgrade-emergency-patch-alert-cn"
title: "以太经典 Mordor 测试网 Spiral 升级紧急修补警报"
author: Donald McIntyre
featuredImage: emergency-mordor-patch.png
tags: [Announcement]
---

昨天下午，我们发现在ETC Mordor测试网上关于[Spiral升级](https://ecips.ethereumclassic.org/ECIPs/ecip-1109)的最新发布存在问题。

我们发布了版本，但它没有包括激活分叉块号。

一旦意识到这一点，我们决定在Core-Geth中纠正这个错误，并通过我们的矿工力量重组不正确的链。

这通过以下紧急补丁发布得以解决：[https://github.com/etclabscore/core-geth/releases/tag/v1.12.16](https://github.com/etclabscore/core-geth/releases/tag/v1.12.16)

**请使用上述版本升级您的ETC MORDOR测试网节点。**

[ETC-Network.Info](https://fork-monitor-mordor.etc-network.info/)和[Blockscout](https://etc-mordor.blockscout.com/)都已更新其Mordor节点。

总的来说，我们在Core-Geth v1.12.15发布中遇到了问题，这意味着Spiral升级在Mordor测试网上没有正确激活。

当使用新的Spiral功能处理交易时，Besu如预期地激活了，但Core-Geth没有，导致了测试网的链分裂。

（注 - 我们不再建议Besu供终端用户使用，但为了跨客户端测试，我们仍然保留该客户端，就像这里发生的情况一样！）

我们停止了Besu矿工，解决了我们的Core-Geth节点的问题，然后重新组织了链，使其恢复到最初的状态。所有这些都是可能的，因为很少有人在使用Mordor测试网。

尽管发生了这个错误，但我们很高兴我们决定精确地将主网和测试网升级分开，以最小化这些风险。测试网存在是为了在没有对主网络造成风险的情况下测试这些过渡，但同样，我们将从这里发生的事情中学到并不断改进。

