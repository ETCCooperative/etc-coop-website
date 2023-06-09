---
id: "2020-09-21-Migrate-to-Hyperledger-Besu"
title: "Migrate to Hyperledger Besu: Make the switch from OpenEthereum or Multi-Geth"
author: Kevin Lord
featuredImage: hyperledger*besu_etc*-750x375.jpeg
tags: [Blog Post]
---

# Migrate to Hyperledger Besu: Make the switch from OpenEthereum or Multi-Geth

## Why are nodes important?

Nodes make up the backbone of blockchain networks. The health and resilience of a blockchain rely on having many independently operated and geographically deployed full nodes. These nodes verify transactions and help propagate blocks across the network. Simply put, a node is just a piece of software running on a computer. Any service that uses the ETC network, from Dapps to mining pools and even exchanges, depends on node infrastructure.

## Why migrate to Besu now?

The development team behind [OpenEthereum](https://github.com/openethereum/openethereum) (formerly Parity-Ethereum) and the core developer behind [Multi-Geth](https://github.com/multi-geth/multi-geth), Wei Tang, recently announced they've both decided to discontinue support for the ETC network. As such, those node clients will no longer support any future hard fork upgrades. According to the Ethereum Classic node statistics site, ETCNodes.org, the two clients mentioned above make up ~23% of live network nodes. We recommend that all ETC node operators migrate to Hyperledger Besu, and we recommend miners use Core Geth until mining capability is ready in Besu. We also recommend using node clients with long term support, both of which are maintained by dedicated full-time core teams.

![ETCNodes](/ETCNodes.jpg)

## How to migrate?

Migrating node clients on a live network while keeping disruption to a minimum isn't too tricky. Below, Ethereum Geth developer, Kunal Roy, has created a simple [series of eight steps](https://blog.alchemyapi.io/blog/secure-your-nodes-migrating-from-parity-to-geth) to make the switch.

1. Remove dependence on Parity, OpenEthereum, or Multi-Geth specific namespace methods
2. Remove reliance on Parity, OpenEthereum, or Multi-Geth specific response fields
3. Remove reliance on API specific responses for bad requests
4. Remove dependence on Parity, OpenEthereum, or Multi-Geth specific error codes
5. Set up Hyperledger Besu hardware
6. [Set up Besu software](https://besu.hyperledger.org/en/stable/HowTo/Get-Started/Install-Binaries/)
7. Run application-specific traffic simulations on nodes
8. Switch over traffic and monitor the service

If you have any questions or issues regarding Hyperledger Besu, please feel free to join the [chat](https://chat.hyperledger.org/channel/besu)

## Why use Besu?

![hl-besu-tile-1](/hl-besu-tile-1.jpg)

[Hyperledger Besu](https://besu.hyperledger.org/en/stable/) is an open-source Ethereum client written in Java, developed under the Apache 2.0 license. Besu is developed and maintained by a group of experienced, enterprise-level developers. As such, Besu supports enterprise-grade features such as permissioning and privacy and typical ones like a command-line interface and JSON-RPC API for interacting with the software. Its modular design supports both Proof-of-Work (ethash) and Proof of Authority (IBFT, Clique) consensus mechanisms.

More features will be soon added that make the node more robust. Once ready, Besu will also implement [MESS](https://medium.com/etc-core/agreeing-to-disagree-proposing-a-weakly-subjective-finality-solution-for-ethereum-classic-7daad47efc0e) or "Modified Exponential Subjective Scoring" to prevent large blockchain reorganizations. Also developers are working to optimize mining functionality making Besu an all-in-one node client. Besu is the only enterprise-level ETC node client around, offering more features than other node clients, and backed by an group of incredibly experienced developers. We highly recommend switching to Besu as soon as possible.

## Sources:

[1] https://github.com/openethereum/openethereum

[2] https://github.com/openethereum/openethereum/pull/11821

[3] https://github.com/multi-geth/multi-geth

[4] https://www.coindesk.com/openethereum-supported-50-of-ethereum-classic-now-its-leaving-the-project

[5] https://etcnodes.org/

[6] https://blog.alchemyapi.io/blog/secure-your-nodes-migrating-from-parity-to-geth

[7] https://blog.alchemyapi.io/authors/kunal-roy

[8] https://besu.hyperledger.org/en/stable/

[9] https://besu.hyperledger.org/en/stable/HowTo/Get-Started/Install-Binaries/
