<template>
	<Layout>
		<template #header>
			<section class="governanceNavSection">
				<Navbar></Navbar>
				<div class="mainContainer governanceContainer">
					<div class="governanceHeroContent">
						<h1>{{ $t("governance.header") }}</h1>
					</div>
				</div>
			</section>
		</template>

		<template #main>
			<!-- governance budgets section starts here -->
			<section class="governanceBudgetSection">
				<div class="governanceBudgetContainer">
					<div class="heading">
						<h1>{{ $t("governance.budgets") }}</h1>
					</div>
					<div class="budgetTable">
						<table>
							<tr v-for="(budget, bKey) in budgets" :key="bKey">
								<td>
									<img src="@/assets/images/excel-icon.svg" alt="" />
								</td>
								<td>
									<b>{{ budget.title }}</b>
								</td>
								<td>{{ budget.description }}</td>
								<td>
									<a
										target="_blank"
										:href="budget.fileLink"
										:download="budget.title"
									>
										<img src="@/assets/images/download-icon.svg" alt="" />
									</a>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</section>
			<!-- governance budgets section ends here -->

			<!-- roadmap section starts here -->
			<section class="sliderSection">
				<div class="sliderContainer">
					<!-- Swiper -->
					<div class="swiper swiper-container">
						<div class="heading">
							<h1>{{ $t("governance.roadmaps") }}</h1>
							<div class="swiperButtons">
								<div class="swiper-button-prev swiper-button-prev1">
									<img src="@/assets/images/arrow-left.svg" alt="" />
								</div>
								<div class="swiper-button-next swiper-button-next1">
									<img src="@/assets/images/arrow-right.svg" alt="" />
								</div>
							</div>
						</div>
						<div class="swiper mySwiper">
							<div class="swiper-wrapper">
								<div
									v-for="(roadmap, rKey) in roadmaps"
									:key="rKey"
									class="swiper-slide"
								>
									<a target="_blank" :href="roadmap.link">
										<div class="sliderCard">
											<img
												:src="getAssetUrl(roadmap.img)"
												alt=""
											/>
											<div class="sliderCardContent">
												<p>{{ roadmap.date }}</p>
												<h5>{{ roadmap.title }}</h5>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- roadmap section ends here -->

			<!-- retrospective section starts here -->
			<section class="sliderSection">
				<div class="sliderContainer">
					<!-- Swiper -->
					<div class="swiper swiper-container">
						<div class="heading">
							<h1>{{ $t("governance.retrospective") }}</h1>
							<div class="swiperButtons">
								<div class="swiper-button-prev swiper-button-prev2">
									<img src="@/assets/images/arrow-left.svg" alt="" />
								</div>
								<div class="swiper-button-next swiper-button-next2">
									<img src="@/assets/images/arrow-right.svg" alt="" />
								</div>
							</div>
						</div>
						<div class="swiper mySwiper2">
							<div class="swiper-wrapper">
								<div
									v-for="(retrospective, rKey) in retrospectives"
									:key="rKey"
									class="swiper-slide"
								>
									<a target="_blank" :href="retrospective.link">
										<div class="sliderCard">
											<img
												:src="getAssetUrl(retrospective.img)"
												alt=""
											/>
											<div class="sliderCardContent">
												<p>{{ retrospective.date }}</p>
												<h5>{{ retrospective.title }}</h5>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- retrospective section ends here -->

			<!-- reports section starts here -->
			<section class="documentsSection">
				<div class="documentsContainer">
					<div class="heading">
						<h1>{{ $t("governance.reports") }}</h1>
					</div>
					<div class="accordion" id="accordionPanelsStayOpenExample">
						<div
							class="accordion-item"
							v-for="(report, rkey) in reports"
							:key="rkey"
						>
							<h2 class="accordion-header">
								<button
									class="accordion-button"
									:class="{ collapsed: rkey !== 0 ? true : false }"
									type="button"
									data-bs-toggle="collapse"
									:data-bs-target="`#collapse-${rkey}`"
									aria-expanded="false"
									:aria-controls="`collapse-${rkey}`"
									@click="updateAccordionText(rkey)"
								>
									<span class="accBtnContent">
										<div>{{ report.title }}</div>

										<span v-if="rkey === 0" class="showAndHide">{{
											$t("governance.hide")
										}}</span>
										<span v-else class="showAndHide">{{
											$t("governance.show")
										}}</span>
									</span>
								</button>
							</h2>
							<div
								:id="`collapse-${rkey}`"
								class="accordion-collapse collapse accordion-collapse collapse"
								:class="{ show: activeReportTab === rkey ? true : false }"
							>
								<div
									v-for="(file, fkey) in report.files"
									:key="fkey"
									class="documentCard"
								>
									<a
										target="_blank"
										:href="file.fileLink"
										:download="file.date"
									>
										<img
											class="pdfIcon"
											src="@/assets/images/pdf-icon.svg"
											alt=""
										/>
									</a>
									<div class="documentCardContent">
										<div class="documentSubj">
											<h3 v-if="file.date !== ''">{{ file.date }}</h3>
											<a
												target="_blank"
												:href="file.fileLink"
												:download="file.date"
												><p>
													{{ file.description }}
												</p>
											</a>
										</div>
										<a
											target="_blank"
											:href="file.fileLink"
											:download="file.date"
										>
											<img
												class="lightIcon"
												src="@/assets/images/arrow-right-dark.svg"
												alt=""
											/>
											<img
												class="darkIcon"
												src="@/assets/images/arrow-right-gray.svg"
												alt=""
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- reports section ends here -->
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
	watch: {
		"$i18n.locale": function (newLang) {
			this.getContent(newLang);
		},
	},
	data() {
		return {
			activeReportTab: 0,
			budgets: null,
			roadmaps: null,
			retrospectives: null,
			reports: null,
		};
	},
	methods: {
		getAssetUrl(name) {
			return new URL(`../assets/images/${name}`, import.meta.url).href;
		},
		updateAccordionText(key) {
			const element = document.querySelector(
				`[data-bs-target="#collapse-${key}"] .showAndHide`
			);
			if (element.textContent === this.$t("governance.hide")) {
				element.textContent = this.$t("governance.show");
			} else if (element.textContent === this.$t("governance.show")) {
				element.textContent = this.$t("governance.hide");
			}
		},
		getContent(lang) {
			import(`@/config/${lang}/governance.budgets.json`).then((contentEN) => {
				this.budgets = contentEN.default.budgets;
			});
			import(`@/config/${lang}/governance.roadmaps.json`).then((contentEN) => {
				this.roadmaps = contentEN.default.roadmaps;
			});
			import(`@/config/${lang}/governance.retrospectives.json`).then(
				(contentEN) => {
					this.retrospectives = contentEN.default.retrospectives;
				}
			);
			import(`@/config/${lang}/governance.reports.json`).then((contentEN) => {
				this.reports = contentEN.default.reports;
			});
		},
	},
	mounted() {
		var swiper = new window.Swiper(".mySwiper", {
			slidesPerView: 4,
			spaceBetween: 15,
			navigation: {
				nextEl: ".swiper-button-next1",
				prevEl: ".swiper-button-prev1",
			},
		});

		var swiper = new window.Swiper(".mySwiper2", {
			slidesPerView: 4,
			spaceBetween: 15,
			navigation: {
				nextEl: ".swiper-button-next2",
				prevEl: ".swiper-button-prev2",
			},
		});
	},
	created() {
		const lang = this.$i18n.locale;
		this.getContent(lang);
	},
};
</script>
