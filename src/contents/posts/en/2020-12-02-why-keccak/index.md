---
id: "2020-12-03-why-keccak"
title: "Why change the Ethereum Classic Proof of Work algorithm to Keccak-256 (Sha-3)"
author: Stevan Lohja
featuredImage: article_banner.png
tags: [protocol]
---

Ethereum Classic experienced a 51% attack in January 2019 and 3 more 51% attacks in Q3 of 2020 which accumulated multi-millions in losses from double spending and service downtime. While major exchanges were hit with double spends, Ethereum Classic was on a thread for delisting and some mining pools simply removed their ETC service. In response to the first 51% attack, Alex Tsankov proposed Ethereum Classic change its PoW algorithm to Keccak-256 which is specified in ECIP-1049 [1].

## Keccak-256

Keccak won the National Institute of Standards and Technology (NIST) competition to become the official Sha-3 algorithm in October 2012 [2]. Each of the Sha-3 functions is based on an instance of the Keccak algorithm [3]. Keccak was chosen as the official Sha-3 function for some of the following reasons:

- Elegant design & clarity of construction.
- Ability to run well on different computing devices.
- Higher performance in hardware than Sha-2.
- Provides insurance if Sha-2 is ever broken.
  - Sha-3 has dissimilarity to Sha-1 and Sha-2.

When Ethereum was launched in July 2015 [4], Sha-3 was used in Ethash and within functions in the Ethereum Virtual Machine (EVM) to produce hashes for accounts, blocks, transactions, etc… However, NIST made minor changes to the Sha-3 algorithm in May 2014 [5] and the official Sha-3 Standard was updated in August 2015 [6]. This new Sha-3 Standard produced different hashes than the previously recognized version used by Ethereum. The Sha-3 version in Ethereum was no longer the Sha-3 Standard and the updated Sha-3 Standard produced different hashes than “Sha-3” hashes in Ethereum.

To reduce confusion between Ethereum’s Sha-3 version and the official Sha-3 standard, the Ethereum community began referencing its Sha-3 version as “Keccak-256”. So, when we refer to “Sha-3” in Ethereum, what we mean is, “Keccak-256”.

## Ethash

Ethereum launched with the Ethash PoW algorithm which is based on Keccak-256 with the additional features of Dagger [7] and Hashimoto [8]. Why wasn’t it just Keccak-256? Well, Ethereum was founded to migrate to a Proof of Stake system and this agenda was designed from the beginning. As Vitalik recently said, “A large portion of the [Ethereum] community considered Proof of Stake and Sharding as part of the social contract in 2015 or potentially earlier [9].” Ethash had 2 particular features meant to intentionally pressure the protocol to move to PoS. These are the Ice Age and ASIC Resistance.

The Ethereum Ice Age is a difficulty scheme that increases the difficulty to a point where miners could not keep up with the difficulty and would raise the block time to a point the blockchain freezes. As the Ethereum yellow paper states:

> In the Homestead release, the difficulty was made to slowly increase (every 100,000 blocks) at an exponential rate, thus increasing the block time difference, and putting time pressure on transitioning to proof-of-stake. This effect, known as the “difficulty bomb”, or “ice age” [10]...

Ethereum PoS has not come yet while the difficulty continued to increase which Ethereum has historically delayed the Ice Age evident in EIP-649 [11]. Ethereum Classic, a now PoW identifying network, realized that the Ice Age was not feasible for its PoW and adopted ECIP-1041 to remove the difficulty bomb [12].

The Ethereum yellow paper takes a more hostile approach to ASICs:

> One plague of the Bitcoin world is ASICs. These are specialized pieces of computing hardware that exist only to do a single task (Smith [1997]). In Bitcoin’s case, the task is the SHA256 hash function (Courtois et al. [2014]) [12]

However, ASIC resistance is built on a false premise that puts equity theatre at face-value but doesn’t hold up in practice. You’ll always have computer chips that can be made to do tasks faster, more secure, and more efficiently. Ethash requires chips on top of memory requirements to mine. So, wouldn’t efficiency be a goal here? Well, not if your goal is PoS.

The Ethereum PoS agenda needed ASIC resistance because ASICs are dedicated to PoW which competes with the PoS agenda. Ethash’s attempt to delay ASICs until PoS did not work as a variety of Ethash ASICs are now on the market far before PoS.

## ProgPoW

While Ethash ASICs exist, there was an attempt to reducing their stake in the network and a lead from the ProgPoW team couldn’t explain it any better than in the Ethereum Classic Discord:

> The only reason ProgPoW is being considered is to protect the Ethereum PoS agenda.

Programmable Proof of Work (ProgPoW), originally called Progressive Proof of Work, was a PoW algorithm proposed on ETH to close the efficiency gap between ASICs and GPUs [13]. While closing gaps and being progressive is marketable, the proposal was a political debate, not a technical one because ProgPoW would have simply started a new cycle of prolonging ASICs to buy time for the Ethereum PoS agenda.

## The Need to Switch the PoW Algorithm is about Long-term Network Security.

The ETC network was 51% attacked because it is a minority chain and the cost to attack the network was trivial. For example, the July 31st attack in 2020 is estimated to have cost the attacker 17.5 BTC ( $170K ) to fool the network for 12 hours [14], and each of the three 51% attacks in 2020 reorganized thousands of blocks.

51% attacks, or majority attacks, are a part of PoW, but when you’re a minority chain you lose the security assumptions of PoW consensus. ETC is not only vulnerable to the majority ETH chain, but it is also vulnerable to other networks tailored to general-purpose hardware that can be turned onto ETC.

By switching the PoW algorithm, ETC can become a majority chain in its respective algorithm and reclaim the security assumptions of PoW consensus. To date, no majority PoW network that dominates its hardware class that’s been successfully 51% attacked [15].

The Core-geth client which has a supermajority share of nodes on the network currently has the MESS solution on the network in an attempt to avoid majority attacks while Besu and Mantis will likely see a more robust Checkpointing solution that’s formerly verified [16]. However, all these solutions are temporarily breaking PoW consensus to - ironically avoid the majority attack vector of PoW. So, if we want to take the crutches off, then ETC needs to pursue a majority chain status, and Keccak-256 is the most popular choice.

## But why Keccak-256?

Of course, ETC could use any other algorithm that’s not adopted in the market to become the majority algorithm in that respective PoW, but there are some reasons Keccak-256 stands out.

- Native: Keccak-256 is the native algorithm used in Ethereum Classic and other Ethereum platforms. While other Ethereum platforms do not use Keccak-256 for their PoW, they use it within the EVM allowing more interoperability features.

- FlyClients: With a full PoW it would be more possible for core developers to provide the community with FlyClients which can verify PoW in a single step. FlyClients can be 6000x more efficient than the current status quo.

- Dapp Developers: Developers have access to the keccak256() function, which allows smart contracts to efficiently calculate the hash of a given input.

- Purpose-built: The market and ETC community identify ETC as a Proof of Work network. However, Ethereum Classic has inherited the Ethash algorithm intentionally designed to sway the network to PoS and the design is built on the false premise of ASIC resistance and equity theater. If Ethereum was founded on the grounds of PoW, then dagger-Hashimoto would not have been necessary on top of the current Keccak-256 in the Ethash algorithm.

- Cryptographic Standardization: Keccak-256 (Sha-3) was the winner of the Sha-3 NIST competition and minor parameter changes in the updated Sha-3 standard don’t break all the benefits of Sha-3.

- Faster: Keccak-256 is far faster than Ethash.

- More Efficient: Keccak-256 is simply a hashing algorithm that doesn’t require hardware to have immense memory requirements or a dag that’s waiting to be exploited. CPUs, FPGAs, ASICs, and GPUs can mine on Keccak-256. It’s possible that the mining ecosystem could mature to be on par with Bitcoin where mining is dominated by purpose-built hardware.

- Enhanced security: Sha-3 is the latest member of the Secure Hash Algorithm family of standards and certified by the Federal Information Processing Standards (FIPS). Ethash is not a certified algorithm.

- Enhanced productivity: Sha-3 is well documented and open-source hardware designs are available. Mainstream semiconductor companies build chips that are tested against the Sha family of algorithms and Keccak-256 is going to function for most modern chips.

- Embedded devices: Due to its compact nature and efficiency, Sha-3 computing runs well on embedded systems.

- Reduced risk of non-compliance: Software agreements can have complex compliance criteria and compliance audits can be time-consuming or simply a deal-breaker. Having a standardized cryptographic hash function would reduce the risk of non-compliance as Keccak-256 (Sha-3) is trusted by government organizations and has been thoroughly vetted to obtain its place in the Sha family. While ETC can change its algorithm to Keccak-256, support for vanilla Sha-3 can also be added further broadening its support to both Keccak-256 and the latest Sha-3 algorithm.

## References

1. ECIP- 1049: Change the ETC Proof of Work Algorithm to Keccak256 https://ecips.ethereumclassic.org/ECIPs/ecip-1049
2. NIST Selects Winner of Secure Hash Algorithm (SHA-3) Competition https://www.nist.gov/news-events/news/2012/10/nist-selects-winner-secure-hash-algorithm-sha-3-competition
3. SHA-3 Standard: Permutation-Based Hash and Extendable-Output Functions https://www.nist.gov/publications/sha-3-standard-permutation-based-hash-and-extendable-output-functions
4. Launch of Ethereum https://etherscan.io/block/0
5. Federal Information Processing Standard (FIPS) 202 https://www.federalregister.gov/documents/2014/05/28/2014-12336/announcing-draft-federal-information-processing-standard-fips-202-sha-3-standard-permutation-based
6. NIST Releases Sha-3 Cryptographic Hash Standard https://www.nist.gov/news-events/news/2015/08/nist-releases-sha-3-cryptographic-hash-standard
7. Dagger: A Memory-Hard to Compute, Memory-Easy to Verify Scrypt Alternative http://www.hashcash.org/papers/dagger.html
8. Hashimoto: I/O bound proof of work https://web.archive.org/web/20170810043640/https://pdfs.semanticscholar.org/3b23/7cc60c1b9650e260318d33bec471b8202d5e.pdf
9. A large portion of the [Ethereum] community considered Proof of Stake… - Vitalik https://youtu.be/-R0j5AMUSzA?t=1520
10. Ethereum Yellow Paper https://ethereum.github.io/yellowpaper/paper.pdf
11. EIP-649: Metropolis Difficulty Bomb Delay and Block Reward Reduction https://eips.ethereum.org/EIPS/eip-649
12. ECIP 1041: Remove Difficulty Bomb https://ecips.ethereumclassic.org/ECIPs/ecip-1041
13. ProgPoW https://github.com/ifdefelse/ProgPOW
14. Ethereum Classic 51% Chain Attack July 31, 2020 https://bitquery.io/blog/ethereum-classic-51-chain-attack-july-31-2020
15. How Coinbase views proof of work security https://blog.coinbase.com/how-coinbase-views-proof-of-work-security-f4ba1a139da0
16. ECIP Comparison for 51% Attack Resistance https://static.iohk.io/docs/etc/ecip-comparison-for-51-attack-resistance.pdf
