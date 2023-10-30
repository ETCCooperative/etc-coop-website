---
id: "2023-10-30-announcing-the-spiral-upgrade-on-the-etc-mordor-testnet-on-block-9957000-cn"
title: "宣布ETC Mordor测试网上的Spiral升级将在区块9,957,000上进行"
author: Donald McIntyre
featuredImage: spiral-mordor.png
tags: [Announcement]
---

**关于ETC Mordor测试网节点运营者的重要通知：**

我们宣布已发布了Core-Geth的版本，该版本设置了即将到来的网络升级“Spiral”的激活区块，适用于以太经典Mordor测试网，因此非常重要的是，该测试网络上的每个节点在该区块之前更新其客户端，该区块预计于11月7日之前激活。

**指定的区块号码为：** 9,957,000

## 重要链接

- 您可以在此处找到新的发布版本：[https://github.com/etclabscore/core-geth/releases/tag/v1.12.15](https://github.com/etclabscore/core-geth/releases/tag/v1.12.15)
- 即将升级的规范在ECIP-1109上，您可以在此处找到：[https://ecips.ethereumclassic.org/ECIPs/ecip-1109](https://ecips.ethereumclassic.org/ECIPs/ecip-1109)

请注意，ECIP-1109目前尚未为以太经典主网指定升级的区块号码。这将在以后的时间内确定。

## 独立设置测试网和主网分叉的理由

在我们准备好在主网上宣布激活区块之前，我们将要在Mordor网络上完成所有必要的测试。

在过去，我们曾同时设置测试网和主网区块，试图估计我们可能需要多少测试，然后在事情出错时不得不匆忙处理。但是现在，我们可以依次进行这些阶段：在测试网上完全测试，然后选择主网激活区块。

如果以上意味着一个月的测试，那么在三个月之后设置主网区块是更加谨慎的，特别是对于寻求最高安全性和稳定性水平的ETC这样的区块链。

Core-Geth用户将有足够的时间来调整和升级其节点，以适应主网上的Spiral硬分叉。
