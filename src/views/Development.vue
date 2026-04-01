<template>
	<Head>
		<title>Development — Ethereum Classic Cooperative</title>
		<meta name="description" content="Execution clients, research experiments, and infrastructure tools being built by ETC Cooperative for Ethereum Classic." />
		<meta property="og:title" content="Development — ETC Cooperative" />
		<meta property="og:description" content="Execution clients, research experiments, and infrastructure tools being built by ETC Cooperative for Ethereum Classic." />
		<meta property="og:image" content="https://etccooperative.org/etc-coop-social.png" />
		<meta name="twitter:title" content="Development — ETC Cooperative" />
		<meta name="twitter:description" content="Execution clients, research experiments, and infrastructure tools being built by ETC Cooperative for Ethereum Classic." />
		<meta name="twitter:image" content="https://etccooperative.org/etc-coop-social.png" />
		<meta name="twitter:card" content="summary_large_image" />
	</Head>
	<Layout>
		<template #header>
			<section class="developmentNavSection">
				<Navbar></Navbar>
				<div class="mainContainer developmentContainer">
					<div class="developmentHeroContent">
						<h1>{{ $t("development.header") }}</h1>
					</div>
				</div>
			</section>
		</template>

		<template #main>
			<!-- intro section -->
			<section class="developmentIntroSection">
				<div class="developmentIntroContainer">
					<p>{{ $t("development.intro") }}</p>
				</div>
			</section>

			<!-- execution clients section -->
			<section class="developmentSection">
				<div class="developmentSectionContainer">
					<div class="heading">
						<h1>{{ $t("development.clients_title") }}</h1>
					</div>
					<div class="row">
						<div
							v-for="(client, cKey) in clients"
							:key="cKey"
							class="col-lg-6 col-md-12 mb-4"
						>
							<div class="developmentCard">
								<div class="developmentCardHeader">
									<h4>
										{{ client.name }}
										<span
											v-if="client.nameNote"
											class="nameNote"
											>({{ client.nameNote }})</span
										>
									</h4>
									<span
										class="statusBadge"
										:class="`status-${client.status}`"
										>{{ client.statusLabel }}</span
									>
								</div>
								<p class="developmentCardBody">
									{{ client.description }}
								</p>
								<div class="developmentCardLinks">
									<a
										v-if="client.repo"
										:href="client.repo"
										target="_blank"
										class="repoLink"
									>
										<img
											src="@/assets/images/blog-copy.svg"
											alt=""
											class="linkIcon"
										/>
										Repository
									</a>
									<a
										v-for="(link, lKey) in client.links"
										:key="lKey"
										:href="link.url"
										target="_blank"
										class="refLink"
									>
										{{ link.label }}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- research section -->
			<section class="developmentSection developmentResearchSection">
				<div class="developmentSectionContainer">
					<div class="heading">
						<h1>{{ $t("development.research_title") }}</h1>
					</div>
					<div class="row">
						<div
							v-for="(project, pKey) in research"
							:key="pKey"
							class="col-lg-6 col-md-12 mb-4"
						>
							<div class="developmentCard">
								<div class="developmentCardHeader">
									<h4>{{ project.name }}</h4>
									<span
										class="statusBadge"
										:class="`status-${project.status}`"
										>{{ project.statusLabel }}</span
									>
								</div>
								<p class="developmentCardBody">
									{{ project.description }}
								</p>
								<div class="developmentCardLinks">
									<a
										v-if="project.repo"
										:href="project.repo"
										target="_blank"
										class="repoLink"
									>
										<img
											src="@/assets/images/blog-copy.svg"
											alt=""
											class="linkIcon"
										/>
										Repository
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- infrastructure section -->
			<section class="developmentSection">
				<div class="developmentSectionContainer">
					<div class="heading">
						<h1>{{ $t("development.infrastructure_title") }}</h1>
					</div>
					<div class="row">
						<div
							v-for="(tool, tKey) in infrastructure"
							:key="tKey"
							class="col-lg-4 col-md-6 col-sm-12 mb-4"
						>
							<div class="developmentCard infraCard">
								<div class="developmentCardHeader">
									<h4>{{ tool.name }}</h4>
									<span
										class="statusBadge"
										:class="`status-${tool.status}`"
										>{{ tool.statusLabel }}</span
									>
								</div>
								<p class="developmentCardBody">
									{{ tool.description }}
								</p>
								<div v-if="tool.url" class="developmentCardLinks">
									<a
										:href="tool.url"
										target="_blank"
										class="repoLink"
									>
										Visit
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</template>
	</Layout>
</template>

<script>
import { Head } from "@unhead/vue/components";
import Layout from "@/layout/Layout.vue";
import Navbar from "@/components/Navbar.vue";

export default {
	components: {
		Head,
		Layout,
		Navbar,
	},
	watch: {
		"$i18n.locale": function (newLang) {
			this.getContent(newLang);
		},
	},
	data() {
		return {
			clients: [],
			research: [],
			infrastructure: [],
		};
	},
	methods: {
		getContent(lang) {
			import(`@/config/${lang}/development.projects.json`).then(
				(content) => {
					this.clients = content.default.clients;
					this.research = content.default.research;
					this.infrastructure = content.default.infrastructure;
				}
			);
		},
	},
	created() {
		const lang = this.$i18n.locale;
		this.getContent(lang);
	},
};
</script>
