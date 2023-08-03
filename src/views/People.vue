<template>
	<Layout>
		<template #header>
			<section class="teamNavSection">
				<Navbar></Navbar>
				<div class="mainContainer teamContainer">
					<div class="teamHeroContent">
						<h1>{{ $t("people.header") }}</h1>
					</div>
				</div>
			</section>
		</template>

		<template #main>
			<!-- team section starts here -->
			<section class="teamDetailsSection">
				<div class="teamDetailsContainer">
					<div class="heading">
						<h1>{{ $t("people.team") }}</h1>
					</div>
					<div class="row">
						<div
							v-for="(people, pKey) in peoples"
							:key="pKey"
							class="col-lg-4 col-md-6 col-sm-6"
						>
							<div @click="selectPeople(people)" class="teamMemberCard">
								<img
									:src="require(`@/assets/images/${people.img}`)"
									alt="team member"
									id="teamMemberImg"
								/>
								<h5 id="teamMember">{{ people.name }}</h5>
								<p id="teamMemberDesig">{{ people.title }}</p>
							</div>
						</div>
					</div>

					<!-- member modal -->
					<div
						v-show="activePeople"
						class="teamMemberModal"
						id="teamMemberModal"
					>
						<img
							class="closeModal"
							id="closeModal"
							src="@/assets/images/close-modal.svg"
							alt="X"
							@click="closeModal"
						/>
						<div class="teamMemberModalContainer">
							<div class="row justify-content-center">
								<div class="pb-3 etcLogoContainer">
									<img
										class="etcLogoImg light"
										src="@/assets/images/etc-logo-light.png"
										alt=""
									/>
									<img
										class="etcLogoImg dark"
										src="@/assets/images/etc-logo-dark.png"
										alt=""
									/>
								</div>
								<div class="col-lg-6 col-md-8 col-sm-10 col-12">
									<div class="memberImg">
										<img
											v-if="activePeople"
											:src="require(`@/assets/images/${activePeople.img}`)"
											alt=""
											id="memberImg"
										/>
									</div>
								</div>
								<div class="col-lg-6 col-md-8 col-sm-10 col-12">
									<div class="memberInfo">
										<div class="memberIntro">
											<h4 v-if="activePeople" id="memberName">
												{{ activePeople.name }}
											</h4>
											<p v-if="activePeople" id="memberDesig">
												{{ activePeople.title }}
											</p>
										</div>
										<div class="memberDetails">
											<div>
												<span class="dash"></span>
												<p v-if="activePeople">
													{{ activePeople.description }}
												</p>
												<div class="memberEmail">
													<a href="">
														<img src="@/assets/images/mail-icon.svg" alt="" />
														mailto:bob@etccooperative.org
													</a>
												</div>
											</div>
											<div class="memberSocialMedia">
												<a
													v-if="
														activePeople &&
														activePeople.social &&
														activePeople.social.twitter
													"
													:href="activePeople.social.twitter"
												>
													<img
														src="@/assets/images/member-twitter.svg"
														alt=""
													/>
												</a>
												<a
													v-if="
														activePeople &&
														activePeople.social &&
														activePeople.social.discord
													"
													:href="activePeople.social.discord"
												>
													<img
														src="@/assets/images/member-discord.svg"
														alt=""
													/>
												</a>
												<a
													v-if="
														activePeople &&
														activePeople.social &&
														activePeople.social.linkedin
													"
													:href="activePeople.social.linkedin"
												>
													<img
														src="@/assets/images/member-linkedin.svg"
														alt=""
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- team section ends here -->

			<!-- bod section starts here -->
			<section class="bodSection">
				<div class="bodContainer">
					<div class="heading">
						<h1>{{ $t("people.board_of_directors") }}</h1>
					</div>
					<div class="row">
						<div v-for="(board, bKey) in boards" :key="bKey" class="col-md-6">
							<div class="bodCard">
								<img :src="require(`@/assets/images/${board.img}`)" alt="" />

								<h5>{{ board.name }}</h5>
								<p>{{ board.title }}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- bod section ends here -->
		</template>
	</Layout>
</template>

<script>
import Layout from "@/layout/Layout.vue";
import Navbar from "@/components/Navbar.vue";

export default {
	components: {
		Layout,
		Navbar,
	},
	data() {
		return {
			activePeople: null,
			peoples: [
				{
					img: "bob-summerwill.png",
					name: "Bob Summerwill",
					title: "Executive Director",
					description:
						"Bob Summerwill is Executive Director for the ETC Cooperative. He has been a community member of the Ethereum project since 2015 and of the Hyperledger project since 2016.",
					mail: "bob@etccooperative.org",
					social: {
						twitter: "https://www.twitter.com",
						discord: "https://www.discord.com",
						linkedin: "https://www.linkedin.com",
					},
				},
				{
					img: "alison-alexis.png",
					name: "Alison Alexis",
					title: "Financial Controller and Business Services",
					description: "",
					mail: "",
					social: {
						twitter: "https://www.twitter.com",
						discord: "https://www.discord.com",
						linkedin: "https://www.linkedin.com",
					},
				},
				{
					img: "isaac-ardis.png",
					name: "Isaac Ardis",
					title: "Core Developer, Ethereum Classic",
					description: "",
					mail: "",
					social: {
						twitter: "https://www.twitter.com",
						discord: "https://www.discord.com",
						linkedin: "https://www.linkedin.com",
					},
				},
				{
					img: "chris-ziogas.png",
					name: "Chris Ziogas",
					title: "Core Developer, Ethereum Classic",
					description: "",
					mail: "",
					social: {
						twitter: "https://www.twitter.com",
						discord: "https://www.discord.com",
						linkedin: "https://www.linkedin.com",
					},
				},
				{
					img: "diego-leon.png",
					name: "Diego López León",
					title: "Core Developer, Ethereum Classic",
					description: "",
					mail: "",
					social: {
						twitter: "https://www.twitter.com",
						discord: "https://www.discord.com",
						linkedin: "https://www.linkedin.com",
					},
				},
				{
					img: "donald-mcintyre.png",
					name: "Donald McIntyre",
					title: "Senior Editor",
					description: "",
					mail: "",
					social: {
						twitter: "https://www.twitter.com",
						discord: "https://www.discord.com",
						linkedin: "https://www.linkedin.com",
					},
				},
				{
					img: "andrew-dick.png",
					name: "Andrew Dick",
					title: "Marketing Manager",
					description: "",
					mail: "",
					social: {
						twitter: "https://www.twitter.com",
						discord: "https://www.discord.com",
						linkedin: "https://www.linkedin.com",
					},
				},
				{
					img: "angelah-liu.png",
					name: "Angelah Liu",
					title: "Communications Manager",
					description: "",
					mail: "",
					social: {
						twitter: "https://www.twitter.com",
						discord: "https://www.discord.com",
						linkedin: "https://www.linkedin.com",
					},
				},
				
			],
			boards: [
				{
					img: "bod-1.png",
					name: "Craig Salm",
					title:
						"Chief Legal Officer at Grayscale Investments, the world’s largest digital currency asset manager.",
				},
				{
					img: "bod-2.png",
					name: "Cody Burns",
					title:
						"Technology and Innovation Leader | Driving growth and transformation strategy through emerging technologies, Ethereum expertise, and metaverse capabilities",
				},
				{
					img: "bod-3.png",
					name: "Elaine Ou",
					title: "Engineer at Global Financial Access",
				},
				{
					img: "bod-4.png",
					name: "Roy Zou",
					title: "Engineer, founder of Gödel Labs (哥德尔实验室).",
				},
			],
		};
	},
	methods: {
		selectPeople(people) {
			let bodyScroll = document.querySelector("body");
			let teamMemberModal = document.querySelector("#teamMemberModal");

			teamMemberModal.classList.add("show");
			bodyScroll.classList.add("removeScroll");

			this.activePeople = people;
		},
		closeModal() {
			let bodyScroll = document.querySelector("body");
			let teamMemberModal = document.querySelector("#teamMemberModal");

			teamMemberModal.classList.remove("show");
			bodyScroll.classList.remove("removeScroll");

			this.activePeople = null;
		},
	},
};
</script>
