<template>
	<footer class="etcCoopFooter">
		<div class="etcFooterContainer">
			<div class="row">
				<div class="col-lg-3 col-md-12">
					<div class="footerLogoCont">
						<a href="">
							<img
								class="footerLogo"
								src="@/assets/images/etc-logo-footer.svg"
								alt=""
							/>
							<img
								class="footerLogoDark"
								src="@/assets/images/etc-logo.svg"
								alt=""
							/>
						</a>
					</div>
					<div class="etcCoopNews">
						<ul>
							<li>
								<router-link to="/news">{{ $t("footer_navigation.etc_coop_news") }}</router-link>
							</li>
							<li>
								<router-link to="/privacy-policy">{{ $t("footer_navigation.privacy_policy") }}</router-link>
							</li>
							<li>
								<router-link to="/cookie-policy">{{ $t("footer_navigation.cookie_policy") }}</router-link>
							</li>
							<li>
								<router-link to="/terms-of-service">
									{{ $t("footer_navigation.terms_of_service") }}
								</router-link>
							</li>
						</ul>
					</div>
					<div class="socialMediaIcons">
						<a href="https://twitter.com/ETCCooperative">
							<img src="@/assets/images/twitter.svg" alt="" />
						</a>
						<a href="https://discord.gg/5wDyd6u6pU">
							<img src="@/assets/images/discord.svg" alt="" />
						</a>
						<a href="https://www.linkedin.com/company/etc-cooperative/">
							<img src="@/assets/images/linkedin.svg" alt="" />
						</a>
						<a href="https://www.youtube.com/@ETCCooperative/">
							<img src="@/assets/images/youtube.svg" alt="" />
						</a>
						<a href="https://www.facebook.com/etccooperative2023">
							<img src="@/assets/images/facebook.svg" alt="" />
						</a>
						<a href="https://www.instagram.com/etccooperative/">
							<img src="@/assets/images/instagram.svg" alt="" />
						</a>
					</div>
				</div>
				<div class="col-lg-9 col-md-12">
					<div class="row">
						<div class="col-lg-3 col-md-4 col-sm-6 col-12">
							<h4>{{ $t("footer.learn_about_etc") }}</h4>
							<ul>
								<li>
									<a href="https://ethereumclassic.org/">{{ $t("footer_navigation.etc_website") }}</a>
								</li>
								<li>
									<a href="https://discord.com/invite/hQs894U">{{ $t("footer_navigation.etc_discord") }}</a>
								</li>
								<li>
									<a href="https://ethereumclassic.org/news">{{ $t("footer_navigation.etc_news") }}</a>
								</li>
							</ul>
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6 col-12">
							<h4>{{ $t("footer.mine_etc") }}</h4>
							<ul>
								<li><router-link to="/mining">{{ $t("footer_navigation.etc_news") }}</router-link></li>
								<li>
									<a href="https://ethereumclassic.org/mining/pools">
										{{ $t("footer_navigation.mining_pools") }}
									</a>
								</li>
							</ul>
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6 col-12">
							<h4>{{ $t("footer.develop_for_etc") }}</h4>
							<ul>
								<li><a href="https://ecips.ethereumclassic.org/">{{ $t("footer_navigation.ecips") }}</a></li>
								
								<li>
									<a href="https://github.com/etclabscore/core-geth">
										{{ $t("footer_navigation.core_geth") }}
									</a>
								</li>
								<li>
									<a href="https://blockscout.com/etc/mainnet/">{{ $t("footer_navigation.blockscout") }}</a>
								</li>
								<li>
									<a href="https://rivet.link/networks/">
										{{ $t("footer_navigation.etc_public_rpc_endpoints") }}
									</a>
								</li>
								<li><a href="https://etcnodes.org/">{{ $t("footer_navigation.etc_nodes_explorer") }}</a></li>
							</ul>
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6 col-12">
							<h4>{{ $t("footer.etc_partners") }}</h4>
							<ul>
								<li>
									<a href="https://netlify.com/">
										<img
											class="lightImg"
											src="@/assets/images/netlify_logo.svg"
											alt=""
										/>
										<img
											class="darkImg"
											src="@/assets/images/netlify-logo-dark.svg"
											alt=""
										/>
									</a>
								</li>
								<li>
									<a href="https://rivet.cloud/">
										<img
											class="lightImg"
											src="@/assets/images/rivet_sponsor.svg"
											alt=""
										/>
										<img
											class="darkImg"
											src="@/assets/images/rivet_sponsor-dark.svg"
											alt=""
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bottomFooter">
			<div class="bottomFooterCont">
				<p>
					{{ $t("footer.reserved_text") }}
					<router-link to="/">https://etccooperative.org/</router-link>
				</p>
				<div class="footerBottomLinks">
					<router-link to="/what-is-etc-cooperative">
						{{ $t("footer.what_is_etc_cooperative") }}
					</router-link>
					<router-link to="/contact">
						{{ $t("footer.contact_us") }}
					</router-link>
				</div>
			</div>
		</div>
	</footer>
</template>
