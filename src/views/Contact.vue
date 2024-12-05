<template>
	<Layout>
		<template #header>
			<section class="contactNavSection">
				<Navbar></Navbar>
				<div class="mainContainer contactContainer">
					<div class="contactHeroContent">
						<h1>{{ $t("contact.header") }}</h1>
					</div>
				</div>
			</section>
		</template>

		<template #main>
			<!-- stay connected section starts here -->
			<section class="stayConnectedSection">
				<div class="stayConnectedContainer">
					<div class="heading">
						<h1>{{ $t("contact.stay_in_contact") }}</h1>
					</div>
					<div class="row">
						<div
							v-for="(contact, cKey) in contacts"
							:key="cKey"
							class="col-md-6 px-2"
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- stay connected section ends here -->

			<!-- postal adress section starts here -->
			<section class="addressSection">
				<div class="stayConnectedContainer">
					<div class="heading">
						<h1>{{ $t("contact.postal_address") }}</h1>
					</div>
					<div class="row">
						<div class="col-12">
							<p>{{ $t("contact.ethereum_classic_cooperative_in") }}</p>
							<p>1207 Delaware Ave #541</p>
							<p>Wilmington, DE 19806</p>
							<p>USA</p>
						</div>
					</div>
				</div>
			</section>
			<!-- postal adress section ends here -->

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
					img: "alison-alexis.png",
					name: "Alison Alexis",
					title: "Financial Controller and Business Services",
					mail: "alison@etccooperative.org"
				},
				{
					img: "andrew-dick.png",
					name: "Andrew Dick",
					title: "Marketing Manager",
					mail: "andrew@etccooperative.org"					
				},
				
			],
		};
	},
};
</script>
