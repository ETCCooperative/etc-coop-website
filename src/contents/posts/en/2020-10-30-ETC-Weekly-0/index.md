---
id: "2018-10-30-ETC-Weekly-0"
title: "ETC Weekly #1 | Network security, Thanos hard-fork, ECIP comparison"
author: Kevin Lord & Stevan Lohja
featuredImage: etc-weekly0.png
tags: [newsletter]
---

# ETC Weekly Rises Again!

The ETC Cooperative is excited to bring you the inaugural edition of our recently relaunched newsletter, ETC Weekly. Each week we’ll provide you with the latest news, project updates, and upcoming events! Sign up [here!](https://landing.mailerlite.com/webforms/landing/h1d0x0)

## Protocol News

The majority of ETC mining pools now have ECIP-1100 (MESS) enabled. Therefore the incentive for a 51% attack is greatly reduced because they would have to produce a chain segment with greater total difficulty than the canonical chain.
Thanos hard-fork: ECIP-1099 is accepted which will halve the size and growth rate of the DAG. ECIP-1099 will require a hard-fork, code-named, Thanos. Both Hyperledger Besu and Core-geth support ECIP-1099 and upon successful testing, the Thanos hard-fork would occur at block 11,700,000. It’s important to note that because of the DAG modification will change the algorithm to be Etchash instead of Ethash.

Below you’ll find a page of resources for Etchash

### Etchash resources:

Etchash is the modified dagger hashimoto used by ethereum classic. it is comparable in it's behaviour to ethash.

- [Ethash resources](https://github.com/eth-classic/etchash)

Below are the currently supported clients:

- Hyperledger [Besu 20.10.0-RC2](https://github.com/hyperledger/besu/releases/tag/20.10.0-RC2) or later.
- Core-geth [1.11.16](https://github.com/hyperledger/besu/releases/tag/20.10.0-RC2) or later.

## Research

The ETC Cooperative and IOHK have collaborated to produce an [ECIP Comparison for 51% Attack Resistance](https://static.iohk.io/docs/etc/ecip-comparison-for-51-attack-resistance.pdf) to provide the broader community with knowledge and understanding on how resist 51% attacks.

![ecip-comp](/ecip-comp.jpg)
