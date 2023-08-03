<template>
	<Layout>
		<template #header>
			<section class="contactNavSection">
				<Navbar></Navbar>
				<div class="mainContainer contactContainer">
					<div class="contactHeroContent">
						<h1>Contact</h1>
					</div>
				</div>
			</section>
		</template>

		<template #main>
			<!-- stay connected section starts here -->
			<section class="stayConnectedSection">
				<div class="stayConnectedContainer">
					<div class="heading">
						<h1>How to stay in contact with the ETC Cooperative:</h1>
					</div>
					<div class="row">
						<div
							v-for="(contact, cKey) in contacts"
							:key="cKey"
							class="col-xl-4 col-md-6 px-2"
						>
							<div class="contactCard">
								<img :src="require(`@/assets/images/${contact.img}`)" alt="" />
								<div class="contactCardDetails">
									<h6>{{ contact.name }}</h6>
									<span>{{ contact.title }}</span>
									<a :href="`mailto:${contact.mail}`">
										<img src="@/assets/images/mail-icon-green.svg" alt="" />
										{{ contact.mail }}
									</a>
									<a :href="`https://www.twitter.com/${contact.twitter}`">
										<img src="@/assets/images/member-twitter.svg" alt="" />
										@{{ contact.twitter }}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- stay connected section ends here -->

			<!-- etc contact links starts here -->
			<section class="etcContactLinksSection">
				<div class="etcContactLinksContainer">
					<div class="etcContactLinks">
						<div class="heading">
							<h1>ETC Cooperative:</h1>
						</div>
						<div class="contactLinks">
							<a target="_blank" href="https://twitter.com/ETCCooperative">
								<img src="@/assets/images/contact-twitter.svg" alt="" />
								@ETCCooperative
							</a>
							<a target="_blank" href="https://discord.gg/5wDyd6u6pU">
								<img src="@/assets/images/contact-discord1.svg" alt="" />
								ETC Cooperative Discord
							</a>
							<a
								target="_blank"
								href="https://www.linkedin.com/company/etc-cooperative/"
							>
								<img src="@/assets/images/linkedin.svg" alt="" />
								Linkedin
							</a>
							<a
								target="_blank"
								href="https://www.youtube.com/@ETCCooperative/"
							>
								<img src="@/assets/images/youtube.svg" alt="" />
								Youtube
							</a>
						</div>
					</div>
				</div>
			</section>
			<!-- etc contact links ends here -->
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
			contacts: [
				{
					img: "bob-summerwill.png",
					name: "Bob Summerwill",
					title: "Executive Director",
					mail: "bob@etccooperative.org",
					twitter: "bobsummerwill",
				},
				{
					img: "alison-alexis.png",
					name: "Alison Alexis",
					title: "Financial Controller and Business Services",
					mail: "alison@etccooperative.org",
					twitter: "AlisonBobEth",
				},
				{
					img: "isaac-ardis.png",
					name: "Isaac Ardis",
					title: "Core Developer",
					mail: "isaac@etccooperative.org",
					twitter: "isaacardis",
				},
				{
					img: "chris-ziogas.png",
					name: "Chris Ziogas",
					title: "Core Developer",
					mail: "chris@etccooperative.org",
					twitter: "ziogaschr",
				},
				{
					img: "diego-leon.png",
					name: "Diego López León",
					title: "Core Developer",
					mail: "diego@etccooperative.org",
					twitter: "diega",
				},
				{
					img: "donald-mcintyre.png",
					name: "Donald McIntyre",
					title: "Senior Editor",
					mail: "donald@etccooperative.org",
					twitter: "ETCPOW",
				},
				{
					img: "andrew-dick.png",
					name: "Andrew Dick",
					title: "Marketing Manager",
					mail: "andrew@etccooperative.org",
					twitter: "Bubble_Gum_Tate",
				},
				{
					img: "angelah-liu.png",
					name: "Angelah Liu",
					title: "Communications Manager",
					mail: "angelah@etccooperative.org",
					twitter: "angelahliu_",
				},
				
			],
		};
	},
};
</script>
