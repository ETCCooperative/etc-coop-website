<template>
	<nav class="navbar etcNavbar navbar-expand-lg">
		<div class="container-fluid navContainer">
			<router-link class="navbar-brand order-lg-1 order-1" to="/">
				<img src="@/assets/images/etc-logo.svg" alt="" />
			</router-link>
			<button
				class="navbar-toggler order-lg-2 order-3"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div
				class="collapse navbar-collapse order-lg-3 order-4"
				id="navbarSupportedContent"
			>
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link
							class="nav-link"
							active-class="active"
							aria-current="page"
							to="/ethereum-classic"
						>
							{{ $t("navigation.ethereum_classic") }}
						</router-link>
					</li>
					<li class="nav-item">
						<router-link
							class="nav-link"
							active-class="active"
							aria-current="page"
							to="/mining"
						>
							{{ $t("navigation.mining") }}
						</router-link>
					</li>
					<li class="nav-item">
						<router-link
							active-class="active"
							class="nav-link"
							aria-current="page"
							to="/developing-for-etc"
							>
								{{ $t("navigation.developing") }}
							</router-link
						>
					</li>
					<li class="nav-item">
						<router-link
							active-class="active"
							class="nav-link"
							aria-current="page"
							to="/news"
							>
								{{ $t("navigation.news") }}
							</router-link
						>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							{{ $t("navigation.etc_cooperative") }}
						</a>
						<ul class="dropdown-menu">
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/what-is-etc-cooperative"
								>
									{{ $t("navigation.what_is_etc_cooperative") }}
								</router-link>
							</li>
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/governance"
								>
									{{ $t("navigation.governance") }}
								</router-link>
							</li>
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/filings"
								>
									{{ $t("navigation.filings") }}
								</router-link>
							</li>
							<li>
								<router-link
									class="dropdown-item"
									aria-current="page"
									to="/people"
								>
									{{ $t("navigation.people") }}
								</router-link>
							</li>
						</ul>
					</li>
					<li class="nav-item">
						<router-link
							class="nav-link"
							active-class="active"
							aria-current="page"
							to="/contact"
						>
							{{ $t("navigation.contact") }}
						</router-link>
					</li>
				</ul>
			</div>
			<div class="navOptions order-lg-4 order-2">
				<div id="search">
					<Search :lang="$i18n.locale" />
				</div>
				<div class="themeSwitchButton">
					<input
						type="checkbox"
						class="checkbox"
						id="toggleTheme"
						@click="changeTheme"
						:checked="theme === 'dark' ? true : false"
					/>
					<label for="toggleTheme" class="checkbox-label">
						<img src="@/assets/images/sun.svg" alt="" />
						<img src="@/assets/images/moon.svg" alt="" />
						<span class="ball"></span>
					</label>
				</div>
				<div class="selectLanguage">
					<div class="flagImage" @click="langOptionToggle">
						<img
							v-if="$i18n.locale === 'en'"
							src="@/assets/images/flag.svg"
							id="selectLang"
							alt=""
						/>
						<img
							v-else-if="$i18n.locale === 'cn'"
							src="@/assets/images/chineseFlag.svg"
							id="selectLang"
							alt=""
						/>
					</div>
					<div class="languageDropdown" :class="{ show: langToggle }">
						<button
							class="langOptions"
							href="#"
							id="english"
							@click="selectLang('en')"
						>
							<img class="" src="@/assets/images/flag.svg" alt="" />
							<p class="my-auto">English</p>
						</button>
						<button
							class="langOptions"
							href="#"
							id="chinese"
							@click="selectLang('cn')"
						>
							<img class="" src="@/assets/images/chineseFlag.svg" alt="" />
							<p class="my-auto">中文</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>
<script>
import Search from './Search.vue';
export default {
	components: {
		Search,
	},
	data() {
		return {
			theme: "light",
			langToggle: false,
		};
	},
	watch: {
		"$i18n.locale": function (newLang) {
			localStorage.setItem("last-locale", newLang);
		},
	},
	mounted() {
		let theme = localStorage.getItem("theme");
		if (theme) {
			if (theme === "light") {
				this.theme = "light";
				document.body.classList.remove("dark-mode");
			} else if (theme === "dark") {
				this.theme = "dark";
				document.body.classList.add("dark-mode");
			}
		}
	},
	methods: {
		langOptionToggle() {
			this.langToggle = !this.langToggle;
		},
		selectLang(locale) {
			this.$i18n.locale = locale;
			this.langToggle = false;
		},
		changeTheme() {
			if (this.theme === "light") {
				this.theme = "dark";
				document.body.classList.add("dark-mode");
				localStorage.setItem("theme", "dark");
			} else {
				this.theme = "light";
				document.body.classList.remove("dark-mode");
				localStorage.setItem("theme", "light");
			}
		},
	},
};
</script>
