---
id: "2023-08-17-presenting-first-round-etc-grants-dao-winner-plugeth-by-rivet-en"
title: "Presenting First Round ETC Grants DAO Winner PluGeth by Rivet"
author: Donald McIntyre
featuredImage: plugeth-banner.png
tags: [Announcement]
---

We are happy to present [PluGeth](https://etcgrants.softr.app/project-details-en?recordId=recOpSvgpRDDBPuJ8) by Rivet as one of the winners of the first round of the ETC Grants DAO program!  

---
**You can watch this interview here:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/P-m6XpW5Nto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

In our video interview, we spoke with Philip Morlier, software engineer at Rivet, about the following topics:  

- PluGeth/Rivet team description  
- What is the PluGeth project?  
- Grant amount earned
- Why did Rivet choose Ethereum Classic to do this PluGeth implementation?  

## This Is the Transcription of the Interview

Donald McIntyre (DM): Hi I'm Donald McIntyre senior editor at the ETC Cooperative. This is one of the interviews about the ETC Grants Dao program, and one of the winners. Today we're going to talk to Philip Morlier of Plugeth, the Plugeth project. Hello, Philip, how are you?

Philip Morlier (PM): I'm well thank you!

DM: Bueno, the idea is to ask you a few questions about your team and your project, so thank you very much for being here with us. And, the first question is if you could describe your team, who is your organization, etc.

PM: Sure, so Plugeth is one of the projects that is underneath the umbrella of the company that I work for, called Rivet. Rivet consists of four main people. We have two developers and then a project manager, and then another individual that we call CXO and he kind of fills in the role of sales and marketing. Sort of community engagement, etc. You know, he's got a lot of jobs that aren't mine. And, then we we have some contractors and some other folks that work with us from time to time. 

DM: But, it's your role in the team?

PM: I'm a software engineer. So, of our projects Plugeth is, I mean all of our projects are shared responsibilities, but Plugeth is kind of mainly on my desk in terms of keeping it maintained, engaging with our users, etc.

DM: Bueno, it's interesting because Rivet is a very important member of the ETC ecosystem because you guys, you provide the infrastructure for the mostly used endpoint, no? 

PM: Yeah, and that's Rivet's main product that we offer to, you know, the the public is that we're an endpoint for EVM based blockchains at this point in time. And, ETC, as you remark, is one of our kind of main and primary clients, and we're very happy to have you all as a part of our [clients].

DM: Yeah, and that endpoint is etc.rivet.link, if I remember correctly, for everybody to remember to use that one. The second question is, what is Plugeth? What is it?

PM: Okay, so Plugeth is a fork of Geth, which is the Go Ethereum project. So, we have forked Geth and built a plugin infrastructure into it to enable writing plugins that can be run against the Geth node. This enables us to support and orchestrate the work that we do with being node providers.  But, it's also something that we offer to the community from an open source standpoint. So, that other people can use Plugeth, write plugins for Plugeth, you know, it's a really versatile and generalized tool. It's pretty simple at the highest level. Go provides a plugin framework that's really easy to work with, and the way that we have things partitioned out, ultimately a user could utilize plugin hooks that we've written inside of the Geth code base, or they can write their own plugin hooks, and then you would write a plugin to be hosted at a separate repository. So, for us it's, our injections, and touch points, and the Geth code base are pretty minimal, and that's what makes maintaining the fork, you know, it's not simple necessarily, every now and again it seems like we're getting the weeds having to figure out one thing or another, but for the most part we can just merge in upstream changes to the Geth client and because our changes are relatively small. It it it enables us to stay current with the Geth project and our hope is that we can enable other people to also stay current with the Geth project while they are modifying the Geth client to do whatever it is that they're hoping to accomplish with the plugins that either they write or using the plugins that we've written. 

DM: I think it's, this is very interesting. I didn't understand it this way, the way you explained it. I thought it was just a new platform for Go Ethereum, but the plugin itself is a fork of Go Ethereum...

PM: Correct

DM: And, you added the ability to accept plugins very easily, no? To add plugins very easily so that's excellent. I think it's a very good idea. I thought it was just a layer added to Go Ethereum.

PM: No. So, our our idea wasn't to, you know, obviously maintaining an implementation of the ethereum protocol with the client like Geth is a massive undertaking, and they do that job, and they do it well. So, our idea was not to interfere or to compete at that level, but more to make a tool that you could diversify so that Geth itself is potentially more useful to more people.

DM: Yeah yeah, whoever needs to add a plugin, instead of doing it with Go Ethereum, that may be more difficult and require more work, they can use a plugin and this is why you wanted to minimize the amount of the difficulty of your implementation, or your fork, so it could be as compatible and easy to, and seamless, no? With Go Ethereum as possible. So, now that I understand these things, my question is how, because ETC does have a different client. It uses, it's a downstream of Go Ethereum, but Core Geth is a completely different client, and with significant differences, no? So, how are you, are you going to actually also fork Core Geth, the ETC node software, or...

PM: So, the grant that we've received is actually to write a plug-in to implement ETC into Foundation Geth. So, while you remark that the Ethereum Classic client, you know, has substantial modifications, and some very important, distinctions in the way that it operates in the protocol that it implements. I maintain our various Plugeth forks and I'm to some degree familiar with the work that is done at Ethereum Classic. So, I'm aware that while y'all have, well, while ETC has its own independent fork, and independent protocol, that they're still bringing in changes from up upstream Geth. So, what we're hoping, we have received the grant to do, and what we're going to be working for towards is to enable Ethereum Classic to expand its footprint to more users by offering a plugin that you can run against Foundation Geth nodes, that would implement the Ethereum Classic protocol. So, while, you know, I feel like I'm repeating myself, but while the Ethereum Classic has some substantial changes, there's a lot of the code that's the same, right? And there's a lot that is just copied back and forth between the two forks, and so what we're hoping to do is to make, expand the footprint of Ethereum Classic to folks who maybe intimidated by running a separate, entire Fork.

DM: So, so Plugeth, in this project in particular, is to create the plugin of ETC on Go Ethereum. And that plugin would work with Plugeth, the client? Or Go Ethereum? 

PM: It would work with Plugeth. So, you know, Go Ethereum doesn't have a plugin infrastructure. Plugeth does... 

DM: So, ETC would be a plugin of Plugeth!....hahhaa

PM: That's correct! If you took Plugeth out of the box and just ran it as a vanilla Geth node, you would notice no difference between a standard Geth node. You actually have to load plugins in order to start to modify the behavior, and so if you go, if anyone wants to browse at GitHub Open Relay XYZ Plugeth plugins, is a repository where we have our plugins and we have a consensus engine plugin there which we implemented as a kind of basic platform to enable modifying the consensus, the consensus aspect of the EVM machine, and so what we're going to do is take that consensus engine plugin and complexify it to enable implementation of the Ethereum Classic protocol. 

DM: Good. Okay, okay so, just to clarify and to see if I got it: You have Go Ethereum, you create Plugeth, which is Go Ethereum but in that one you can add plugins easily. Developers can do that. Perfect. You are going to create a plugin so that ETC is another plugin for Plugeth.

PM: That's correct. 

DM: Very good. So, someone in the future, once this plugin is there, they're going to be able to download Plugeth and activate or deactivate ETC very easily as a plugin. 

PM: That's correct. I mean, this is a crude analogy, and I'm cracking myself up thinking about it, but it's as if Go Ethereum was a Mr Potato Head and we've enabled you to sort of change the outfits, right? So, ETC is now a hat and some glasses you can put on Mr Potato Head, and it's, all of a sudden, a whole new...

DM: Hahaha, that's very good. When I use WordPress, because I'm not a developer, I'm not an engineer, so I use WordPress, and I use plugins all the time, and connect them and disconnect them, so that is another, I propose that also as an analogy. 

PM: Sure.

DM: That's amazing. I love the project, very interesting and I think that you won the grant is well deserved. So, how much did you get how much did you apply for, and how much did you get of the grant?

PM: So, I'm speaking a little outside of my depth. I'm not part of the financial wing of my company, but as far as I'm aware we applied for $50,000 dollars and we got $50,000. 

DM: Good. Excellent. I think it's well deserved now that I understand the project. I think it's well deserved and I can think of ways you already said, no? Of how this benefits ETC. Why did you choose ETC as the platform to create this plugin?

PM: Well, I mean, I think there's a few different ways to answer that question. One, you know, starting from the founding principles of our company, we very much believe in a multi-chained future. We very much believe in a diversified web 3 environment. So, you know, working with other chains is kind of in very much in the ethos of what it is that we're trying to do, and what is at the root of the Plugeth project from the inception. ETC, as you have remarked, you know, we are y'all's node providers so in some ways I think it was a natural partnership for, because this will be the first time we've developed a plugin to support an entirely new chain. And, since we work with you guys we're familiar. You all have been around, y'all have a good reputation, and as far as I understand the values of ETC, and the values of Rivet are closely aligned. So, that ultimately was what made ETC an attractive proposition for us.

DM: Excellent.

PM: We would have been trying at some point to implement a plugin like this for somebody, and so it just kind of makes sense that we would go to someone who we already have a partnership with, who already we know shares our notion of, you know, expanding freedoms for the individual through cryptography. So, yeah, I think that's probably the best way I can can sum it up. It's that there's there's parallel values between the two organizations.

DM: Yeah I can see how this benefits ETC, and like I said before you are an important member of the ecosystem. You provide the largest, the most traffic and most used endpoint, no? For wallets and mining pools, and individuals, no? Who who need to send transactions, etc. And, the fifty thousand dollars is going to accelerate this idea that you had to implement this addition on Plugeth. Just to clarify, the last question about the project itself, is the project to create a general consensus engine plugin that happens to use ETC? Or, a specific plugin for ETC?

PM: We already have a general consensus engine plug-in, but like most things, what we have is a is a very basic implementation that allows you to interrupt Go Ethereum and basically tell it "you're not using your own consensus logic, I'm going to provide you with custom consensus logic". But, we don't have any of that logic written yet, right? So, all we have is just that one first step that enables you to interrupt that consensus process. So, you know, the project with ETC is not about creating that basic consensus plugin, we already have that. But, it's also, I don't want to say it's useless. We use it for testing and stuff, but it it is there as a platform on top of which further development and implementation would be necessary to create something useful. So, you know that is where we are, you know, with our partnership on ETC. With this project. Will enable us to bring that to maturity, you know, to take what we have now which is just a completely generic custom consensus engine and customize that to implement the Ethereum Classic protocol.

DM: Very good. And, Philip my last question is where where are you based?

PM: I'm in Portland, Oregon. The majority of my team is in Kansas City, Kansas. We also have a team member in India, and we also have a team member in Nigeria. 

DM: Excellent. Well, thank you so much for your time. Thank you for these explanations and congratulations for earning the fifty thousand dollars from the ETC Grants program.

PM: Thank you all very much. For those in the audience who are interested in researching this more and potentially following along,
[plugeth.org](https://plugeth.org) is the website of the Plugeth project, [rivet.cloud](https://rivet.cloud) is the, you know, overarching company. You can find links to Twitter and various other social media platforms. To follow the story and we also have a Discord that's listed on the plugeth.org, and, you know, I just would like to emphasize that, you know, as much as the technical challenges are compelling to us in taking on this project we are an open source first company and as such we crave community engagement. We crave, you know, developers and users to come along and check out what we're doing. So, I just want to implore anyone who's interested to come and and ask us questions and check out what we've done. Try and use it. We try and be as inclusive as possible with engagement with the folks that are, that want to use the things we've made.

DM: Excellent. So, the the places are plugeth.org and rivet.cloud and there people are going to find your social media channels and they will find the the link to Discord to interact with the team.

PM: That's correct. 

DM: Very good, thank you so much for your time Philip.

PM: Thank you Donald,

DM: Goodbye!

PM: Nos vemos!

DM: Bye-bye!

---
Following are links to the PluGeth project:

PluGeth: https://plugeth.org 

Rivet: https://rivet.cloud 

---

To see the full list of winners go here: [https://etcgrants.softr.app/projects-list-en](https://etcgrants.softr.app/projects-list-en)
