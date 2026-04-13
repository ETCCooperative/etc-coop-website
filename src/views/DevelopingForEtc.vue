<template>
	<Layout>
		<template #header>
			<section class="developingNavSection">
				<Navbar></Navbar>
				<div class="mainContainer developingContainer">
					<div class="developingHeroContent">
						<h1>{{ $t("developing-for-etc.header") }}</h1>
					</div>
				</div>
			</section>
		</template>

		<template #main>
			<!-- developing for etc paragraphs section starts here -->
			<section class="developingParaSection">
				<div class="developingParaContainer">
					<p>
						{{ $t("developing-for-etc.p1") }}
					</p>
				</div>
			</section>
			<!-- developing for etc paragraphs section ends here -->

			<!-- developing for etc section starts here -->
			<section class="developingForEtcSection">
				<div class="developingForEtcContainer">
					<div class="row align-items-center">
						<div class="col-lg-6 col-md-12">
							<span class="secBadge">{{
								$t("developing-for-etc.languages_badge")
							}}</span>
							<h2>{{ $t("developing-for-etc.languages_title") }}</h2>
							<p v-html="$t('developing-for-etc.languages_body')"></p>
						</div>
						<div class="col-lg-6 col-md-12">
							<img
								class="solidityImg light"
								src="@/assets/images/solidity-light.png"
								alt=""
							/>
							<img
								class="solidityImg dark"
								src="@/assets/images/solidity-dark.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>

			<section class="developingForEtcSection blockchainSection">
				<div class="developingForEtcContainer">
					<div class="row align-items-center">
						<div class="col-lg-6 col-md-12">
							<img
								class="communityImg"
								src="@/assets/images/etc_blockchain_explorer.png"
								alt=""
							/>
						</div>
						<div class="col-lg-6 col-md-12">
							<span class="secBadge">{{
								$t("developing-for-etc.explorer_badge")
							}}</span>
							<h2>{{ $t("developing-for-etc.explorer_title") }}</h2>
							<p v-html="$t('developing-for-etc.explorer_body')"></p>
						</div>
					</div>
				</div>
			</section>

			<section class="developingForEtcSection communitySection">
				<div class="developingForEtcContainer">
					<div class="row align-items-center">
						<div class="col-lg-6 col-md-12">
							<span class="secBadge">{{
								$t("developing-for-etc.community_badge")
							}}</span>
							<h2>{{ $t("developing-for-etc.community_title") }}</h2>
							<p v-html="$t('developing-for-etc.community_body')"></p>
						</div>
						<div class="col-lg-6 col-md-12">
							<img
								class="communityImg"
								src="@/assets/images/community.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>
			<!-- developing for etc section ends here -->

			<!-- developing requirement starts here -->
			<div class="developingRequirement">
				<p v-html="$t('developing-for-etc.p2')"></p>
			</div>
			<!-- developing requirement ends here -->
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
};
</script>
