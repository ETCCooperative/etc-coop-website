---
id: "2020-05-20-phoenix-hardfork"
title: "ETC Phoenix client upgrade instructions"
author: Bob Summerwill
featuredImage: q9f.png
tags: [technology]
---

# Ethereum Classic Client Upgrade Instructions

This document seeks to assist Ethereum Classic node operators to upgrade their software for the upcoming **Phoenix** hardfork as specified in ECIP-1088.

(Thanks to q3f. Originally published as https://hackmd.io/IPA7zPwpQDy-1U0reeppcQ).

# Phoenix Resources in a Nutshell

Phoenix at glance:

- Phoenix upgrade countdown: https://etcnodes.org/phoenix
- Phoenix fork monitoring tool: https://phoenix.fault.dev
- Phoenix upgrade specifiaction: https://ecips.ethereumclassic.org/ECIPs/ecip-1088

# Client Upgrade Instructions

The Ethereum Classic website comes with similiar instructions:

- https://ethereumclassic.org/development/clients

## TL;DR

- ~~Geth Classic~~ --> Core-Geth v1.11.0 or later
- Core-Geth --> Core-Geth v1.11.0 or later
- Multi-Geth --> Multi-Geth v1.9.14 or Core-Geth v1.11.0 or later
- ~~Parity Ethereum~~ --> Open Ethereum v3.0.0 or Hyperledger Besu v1.4.1 or later
- Open Ethereum --> Open Ethereum v3.0.0 or later
- ~~IOHK Mantis~~ --> Hyperledger Besu v1.4.1 or later
- Hyperledger Besu --> Hyperledger Besu v1.4.1 or later

The sections below seek to be explaining the client's upgrade paths more in detail.

## ~~Geth Classic~~

_"Geth Classic"_, or simply _"Go Ethereum Classic"_ was the official Ethereum Classic client for many years. It is, however, [discontinued](https://github.com/etclabscore/go-ethereum/releases).

If you still run a Geth Classic node, **you are urged to upgrade to --> Core-Geth**. Core-Geth is a fresh fork of the Foundation's _Go Ethereum_ client with more features and better security considerations.

- Upgrade Target: **Core-Geth**
- Upgrade Minimum Version: **v1.11.0** or later
- **Upgrade Release link**: https://github.com/etclabscore/core-geth/releases
- Upgrade considerations: **APIs between Geth Classic and Core-Geth significantly differ**

## Core-Geth

Core-Geth is a fresh fork of the Foundation's _Go Ethereum_ client with more features and better security considerations. If you have been running Core-Geth in the past, simply make sure you are on the latest version of the client.

- Upgrade Target: **Core-Geth**
- Upgrade Minimum Version: **v1.11.0** or later
- **Upgrade Release link**: https://github.com/etclabscore/core-geth/releases
- Upgrade considerations: _none_

## Multi-Geth

Multi-Geth is an experimental fork of the Foundation's _Go Ethereum_ client maintained by the community. If you have been running Multi-Geth in the past, simply make sure you are on the latest version of the client.

- Upgrade Target: **Multi-Geth**
- Upgrade Minimum Version: **v1.9.14** or later
- **Upgrade Release link**: https://github.com/multi-geth/multi-geth/releases
- Upgrade considerations: _none_

Alternatively, you can switch to Core-Geth. Core-Geth is a fresh fork of the Foundation's _Go Ethereum_ client with more features and better security considerations maintained by the ETC Core development team.

- Upgrade Target: **Core-Geth**
- Upgrade Minimum Version: **v1.11.0** or later
- **Upgrade Release link**: https://github.com/etclabscore/core-geth/releases
- Upgrade considerations: _client configurations and APIs between Multi-Geth and Core-Geth might differ in details_

## ~~Parity Ethereum~~

Parity Ethereum used to be Parity Technologies' flagship Ethereum client. It's [no longer being maintained](https://www.parity.io/parity-ethereum-openethereum-dao/) by Parity Technologies and was handed over to Gnosis.

If you still run a Parity Ethereum node, you should consider another client. The simplest task would be switching to Open Ethereum which is the extended life-support of the Parity Ethereum client and does not come with significant changes.

- Upgrade Target: **Open Ethereum**
- Upgrade Minimum Version: **v3.0.0** or later
- Upgrade Release link: https://github.com/openethereum/openethereum/releases
- Upgrade considerations: _client configurations and APIs between Parity Ethereum and Open Ethereum might differ in details_

Alternatively, you can switch to Hyperledger Besu. Besu is a new enterprise-grade Ethereum Classic client developed by ConsenSys under the umbrella of the Hyperledger project.

- Upgrade Target: **Hyperledger Besu**
- Upgrade Minimum Version: **v1.4.1** or later
- **Upgrade Release link**: https://github.com/hyperledger/besu/releases
- Upgrade considerations: **APIs between Parity and Besu significantly differ; mining is not very well supported in Besu**

## Open Ethereum

Open Ethereum is the extended life-support of the Parity Ethereum client managed by Gnosis. If you have been running Open Ethereum in the past, simply make sure you are on the latest version of the client.

- Upgrade Target: **Open Ethereum**
- Upgrade Minimum Version: **v3.0.0** or later
- Upgrade Release link: https://github.com/openethereum/openethereum/releases
- Upgrade considerations: _none_

## ~~IOHK Mantis~~

Mantis is discontinued and hasn't been supporting the Ethereum Classic mainnet for more than a year now.

If you still run a Mantis node, **you are urged to upgrade to --> Hyperledger Besu**. Besu is a fresh enterprise-grade Ethereum Classic client with more features and better security considerations.

- Upgrade Target: **Hyperledger Besu**
- Upgrade Minimum Version: **v1.4.1** or later
- **Upgrade Release link**: https://github.com/hyperledger/besu/releases
- Upgrade considerations: **APIs between Mantis and Besu significantly differ**

## Hyperledger Besu

Besu is a new enterprise-grade Ethereum Classic client developed by ConsenSys under the umbrella of the Hyperledger project. If you have been running Besu in the past, simply make sure you are on the latest version of the client.

- Upgrade Target: **Hyperledger Besu**
- Upgrade Minimum Version: **v1.4.1** or later
- **Upgrade Release link**: https://github.com/hyperledger/besu/releases
- Upgrade considerations: _none_

# FAQ

Potentially-frequently asked questions.

## Why do you strike-through some clients?

To emphasize that some clients no longer support Ethereum Classic, we used the text formatting to emphasize this, in short:

- ~~Geth Classic~~ was discontinued due to security considerations.
- ~~IOHK Mantis~~ was discontinued due to lack of funding and community support.
- ~~Parity Ethereum~~ was discontinued due to the company losing interest in Ethereum.

## What happened to the IOHK Mantis client?

Mantis never had a production-ready release and was eventually discontinued due to the lack of contributors, insufficient long-term funding, and the umbrella company shifting focus away from Ethereum Classic. Mantis users are encouraged to try out the Java-based [Hyperledger Besu](https://github.com/hyperledger/besu) client.

## What happened to the Geth Classic client?

The Geth Classic client was missing years of important security patches and was therefore deprecated at the end of 2019. Geth users are encouraged to try out the more modern Go-based [Core-Geth](https://github.com/etclabscore/core-geth) client.

## Should I use Core-Geth or Multi-Geth?

That's entirely up to the users to decide. [Core-Geth](https://github.com/etclabscore/core-geth) is backed by the [ETC Core](https://etccore.io/) development team whereas Multi-Geth is maintained by the community.

## What happened to the Parity Ethereum client?

Parity Technologies announced end of 2019 to soft-land the Parity Ethereum client and hand it over to the community [governed by a DAO](https://www.parity.io/parity-ethereum-openethereum-dao/). This, eventually, never happened. Now, Gnosis is running Open Ethereum project which is the extended life support for all Parity users. At the time of writing, it's not clear how long Gnosis will be able to sustain the development.

## How long will Open Ethereum keep the Parity client alive?

Gnosis is running Open Ethereum project which is the extended life support for all Parity users. At the time of writing, it's not clear how long Gnosis will be able to sustain the development.
