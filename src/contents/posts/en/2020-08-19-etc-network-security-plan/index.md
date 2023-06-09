---
id: "2020-08-19-etc-network-security-plan"
title: "ETC Network Security Plan"
author: Bob Summerwill
featuredImage: padlocks.jpg
tags: [protocol]
---

## ETC Network Security Plan

Security is paramount for Ethereum Classic. In response to the recent attacks against the network, we are developing a strategic and robust plan to carry ETC forward. As stewards of a public blockchain, we are determined to protect the integrity of the ecosystem. We are investing more resources, human and financial, to enhance security, strengthen the network, and ensure a bright future for ETC.

The network security plan consists of (1) immediate actions we are taking to prevent attacks; and (2) several long-term changes, currently in development, that could be implemented within 3–6 months.

- _Bob Summerwill, Executive Director, ETC Cooperative_
- _Afri Schoedon, ETC Core Team and Executive Director, Byzantine Fault_
- _Terry Culver, CEO, Ethereum Classic Labs_

## 1. Immediate Attack Prevention

We are taking a number of steps that immediately guard against attacks. This provides new layers of security to the network. These include:
Defensive Mining through cooperation with miners and mining pools to maintain a more consistent hash rate and to increase hash rate when needed.

- Enhanced Network Monitoring to identify anomalies and spikes in hash rate inventory and prices on mining pools.
- Close coordination with exchanges on whitelisting addresses and setting safe confirmation times.
- Implementing a “Permapoint” finality arbitration system developed by the [ETC Core Team](https://etccore.io/) to aggressively inhibit chain reorganizations while maintaining consensus among nodes.

## 2. Proposed Long-Term Fixes

There are different types of proposals currently in development for long-term fixes, all of which require community consensus in order to move forward:

- Increase 51% attack resistance. This could be achieved with features such as check-pointing or PirlGuard. These could be implemented through a hard fork in approximately 3 months once the specification is complete.
- Change the proof-of-work mining algorithm. The two alternatives under consideration are Keccak-256, or RandomX. These could be implemented through a hard fork in approximately 6 months, provided that testing is completed successfully.
- Assisting with the implementation of such changes, through MINERVOTE, for example.
- Introduction of a treasury system, if community consensus is reached.

## Increase Attack Resistance

Ethereum Classic’s community is considering several options for increasing resistance to 51% attacks, which could be implemented in approximately 3 months. While these alone will not prevent attacks, they would be part of a series of upgrades on ETC.

One option is PIRLGUARD, developed, and proposed by the Pirl community (Source: [PIRLGUARD — Innovative solution against 51% attacks](https://pirl.io/en/pirlguard-innovative-solution-against-51-attacks/)). [ECIP-1092](https://ecips.ethereumclassic.org/ECIPs/ecip-51attack-solution) states that instead of automatically synchronizing with any offline pre-mined chain branch, the new protocol should require peer proposing the longer and heavier chain to mine a number of penalty blocks. The number of penalty blocks depends on the number of the original blocks that would be reverted if the chain reorganized and synchronized to the proposed reorganization. Thus, the cost of the 51% attack will significantly increase as the attacker will not be able to publish their private branch without doubling their work by adding penalty blocks. This will protect the network from reverting all the transactions from the publicly mined branch.

Another proposal is enhancing the chain with checkpointing and timestamping (Source: [Securing Proof-of-Work Ledgers via Checkpointing)](https://iohk.io/en/research/library/papers/securing-proof-of-work-ledgers-via-checkpointing/). This proposal would employ an external set of parties that securely run an assisting service that guarantees the ledger’s properties and can be relied upon at times when the invested hashing power is low. However, as of yet there is no specific proposal for the Ethereum Classic network. Any proposal would have to be carefully evaluated for its feasibility with ETC.

## Mining Algorithm

The main motivation for changing the algorithm is to step out of the shade of the Ethereum network which is powered by the Dagger Hashimoto proof-of-work, also known as Ethash. This could be implemented within 6 months, depending upon the results of testing. As a minority chain with regards to the total hash rate using the same mining algorithm as the Ethereum network, Ethereum Classic is not only vulnerable to 51% attacks, but these attacks are possible to execute due to the available hash rate that can be rented on various platforms.

Switching to a unique mining algorithm could position Ethereum Classic as a leader in its own class of proof-of-work.

The Ethereum Classic community has discussed several algorithms thus far, two of which are promising:

- SHA3, or specifically Ethereum’s Keccak256 ([ECIP-1049](https://ecips.ethereumclassic.org/ECIPs/ecip-1049))
- RandomX, a proof-of-work for general-purpose CPUs ([ECIP-1093](https://ecips.ethereumclassic.org/ECIPs/ecip-randomX))

If the community decides in favor of a mining algorithm change, we can start working towards one of the following two options: change to a GPU- and ASIC-friendly mining algorithm such as Keccak256; or an ASIC-resistant, CPU-friendly algorithm just as the RandomX developed by the Monero community.

Switching to RandomX, which is currently used by Monero, might not entirely resolve the issues we currently face. There’s potential to step out of the shadow of the Ethereum network and into the shadow of the Monero network as yet another minority chain.

Using Keccak256 from the SHA3 family would put Ethereum Classic in a unique position as potential leader with regards to hash rate of its own mining algorithm. This would enable ETC to become more independent from its Ethash-based sister chain, significantly reducing the risk of attacks as a result of a shared mining algorithm.

## Timeline

A potential timeline for the proposals is:

- **Phase 0**: (Aug/2020) Rough Consensus.
  - Seek community consensus on moving forward with the above proposals. Public community calls are scheduled for August 20 and August 28, 2020, to form a rough consensus. (See: [ETC Core Devs Call(s) 2020 Q3: Hardfork](https://github.com/ethereumclassic/ECIPs/issues/333)).
  - In addition, we encourage miners to signal in favor of any proposal such as SHA3 or RandomX as soon as possible (Compare: [ECIP-1076](https://ecips.ethereumclassic.org/ECIPs/ecip-1076)).
- **Phase 1**: (Sep/2020) Implementation.
  - Community-approved changes would be immediately implemented in Core Geth and Hyperledger Besu clients.
- **Phase 2**: (Oct/2020) Public Testnets for attack resistance measures (i.e. checkpoints).
  - Test and Iterate a new mining algorithm. Along with the implementation, private testing, temporary devnets, and semi-public ad-hoc testnets will be prepared for the new mining algorithm.
- **Phase 3**: (Nov/2020) Mainnet Activation of attack resistance measures, i.e. checkpoints.
- **Phase 4**: (Dec/2021) Public Testnets for new mining algorithm.
  - Upon successful implementation and testing, launch testnet activation at an appropriate block number.
- **Phase 5**: (Jan/2021) Mainnet Activation of new mining algorithm.
  - Upon successful implementation and testing, launch mainnet activation at an appropriate launch block number.

## Appendix: List of Proposals

### Relevant Process Documents

The following proposals describe processes helpful in finding consensus for something as involved as a mining algorithm change.

- (Status: Draft) [ECIP 1022: Generalized Version Bits Voting for Consensus Soft and Hard Forks](https://ecips.ethereumclassic.org/ECIPs/ecip-1022) — “The following ECIP tries to bring the best practices about how Bitcoin deals with consensus hard fork (BIP-9 and BIP-135) into Ethereum Classic. Rather than hard-code a block number as we currently do, each block mined emits support of the new consensus hardfork. Only when a large enough portion of the network support it, the hardfork is “locked-in” and will be activated.”
- (Status: Draft) [ECIP 1076: Mining Algorithm Change Process](https://ecips.ethereumclassic.org/ECIPs/ecip-1076) — “This meta-document is agnostic to any mining algorithm. Its sole purpose is specifying a process how to openly determine and select a mining algorithm for Ethereum Classic.”

### Relevant Proposal Documents

The following proposals deal with the potential to address 51% attacks and increase Ethereum Classic’s resilience against future threats.

- (Status: Draft) [ECIP 1043: Fixed DAG limit restriction](https://ecips.ethereumclassic.org/ECIPs/ecip-1043) — “The purpose of this ECIP is to set a limit on the maximum size of the DAG and no longer increase it on an epoch schedule.”
- (Status: Draft) [ECIP 1049: Change the ETC Proof of Work Algorithm to Keccak256](https://ecips.ethereumclassic.org/ECIPs/ecip-1049) — “A proposal to replace the current Ethereum Classic proof of work algorithm with Keccak-256.”
- (Status: Draft) [ECIP 1092: 51% attack solution](https://ecips.ethereumclassic.org/ECIPs/ecip-51attack-solution): PirlGuard & Callisto
- (Status: Draft) [ECIP-1093: Change the ETC Proof of Work Algorithm to RandomX](https://ecips.ethereumclassic.org/ECIPs/ecip-randomX) — “A proposal to replace the current Ethereum Classic proof of work algorithm with RandomX.”

### Proposals with ECIPs Pending

The following proposals from IOG are under discussion in the community, with
ECIPs due to be published imminently.

- (Status: Pending) “Proof-of-Work Checkpointing”
  - See ["Securing Proof of Work Ledgers via Checkpointing" Video](https://www.youtube.com/watch?v=aasUIB1W81E)
  - See ["Securing Proof of Work Ledgers via Checkpointing" Paper](https://eprint.iacr.org/2020/173.pdf)
- (Status: Pending) “Ethereum Classic Treasury System”
  - See [A Proposal for An Ethereum Classic Treasury System (2017)](https://iohk.io/en/research/library/papers/a-proposal-for-an-ethereum-classic-treasury-system/)

### Rejected Proposal Documents

The following proposals are relevant for the current discussion but have been rejected by the community in the past.

- (Status: Rejected) [ECIP 1051: Ethereum Classic Treasury system](https://ecips.ethereumclassic.org/ECIPs/ecip-1051) — “The following describes the possible implementation of a development funding mechanism.”
- (Status: Rejected) [ECIP 1070: ProgPoW, a Programmatic Proof-of-Work, for Ethereum Classic](https://ecips.ethereumclassic.org/ECIPs/ecip-1070) — “ProgPoW is a proof of work algorithm designed to close the efficiency gap available to specialized ASICs. It utilizes almost all parts of commodity hardware (GPUs), and comes pre-tuned for the most common hardware utilized in the Ethereum network.”

---

[Image is [_Love Padlocks_](https://www.flickr.com/photos/61295396@N08/8272496548) by Nathan Meijer]
