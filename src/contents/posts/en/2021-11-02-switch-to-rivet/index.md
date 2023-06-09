---
id: "2019-11-02-switch-to-rivet"
title: "Switch to Rivet"
author: Bob Summerwill
featuredImage: retro.jpeg
tags: [protocol]
---

The ETC Cooperative has provided free public endpoints as a service to the ETC ecosystem since mid-2019. This essential public infrastructure allows wallets, dapps and other services to connect to a publicly accessible ETC node to
query the blockchain or to submit a transaction. The majority of wallets within the ETC ecosystem use our hosted endpoints rather than running their own nodes, and have done so for several years.

Our service has been through various phases, the best known of which has
been [Ethercluster](https://medium.com/@yazanator/ethercluster-an-open-source-alternative-to-infura-b8799b2122d3), created by Yaz Khoury and later contributed into Hyperledger Labs. Yaz left the ETC Cooperative in 2020 and development on Ethercluster ceased. During 2021 we have suffered from reliability and uptime issues for the endpoints.
Any downtime has a large impact on the ETC ecosystem given how many wallets
and dapps use these endpoints. As a small non-profit we are not well equipped to provide 24/7 operational support and have concluded that everyone would be
better served if another team were to operate the endpoint service behind the scenes.

**We are pleased to announce that Rivet will be operating this service in the very near future.**

Rivet first appeared on our radar at ETHDenver in February 2020. They have been
a very valuable ETC ecosystem participant over the past few years. They were
involved in the design and testing of the [ECIP-1100 MESS](https://ecips.ethereumclassic.org/ECIPs/ecip-1100) protocol change which has helped secure
ETC following the 51% attacks of August 2020.

We are delighted to work with Rivet and look forward to a much smoother ride
in the coming months to the benefit of the whole ETC ecosystem. If you are
in need of dedicated ETC or ETH nodes of your own, we would strongly
recommend that you check out [Rivet](https://rivet.cloud).

**When will the switchover happen?**

We will be re-vectoring the ETC mainnet endpoint (https://www.ethercluster.com/etc) to point at Rivet-hosted servers at the start of next week and will be
retiring our own mainnet node. In the meantime, early adopters can try out a new temporary URL for their first taste of Rivet (https://www.ethercluster.com/rivet). ETC Cooperative will continue to directly operate endpoints for
the Kotti and Mordor testnets. Rivet does not provide services for those
networks and they are not mission-critical in the same way as ETC mainnet.
