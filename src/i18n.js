import { createI18n } from "vue-i18n";

function loadLocaleMessages() {
	const localeFiles = import.meta.glob("./locales/*.json", { eager: true });
	const messages = {};
	for (const path in localeFiles) {
		const matched = path.match(/\/([A-Za-z0-9-_]+)\.json$/i);
		if (matched && matched.length > 1) {
			const locale = matched[1];
			messages[locale] = localeFiles[path].default;
		}
	}
	return messages;
}

function getStartingLocale() {
	if (localStorage.getItem("last-locale")) {
		return localStorage.getItem("last-locale");
	}
	return import.meta.env.VITE_I18N_LOCALE || "en";
}

export default createI18n({
	legacy: false,
	globalInjection: true,
	locale: getStartingLocale(),
	fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || "en",
	messages: loadLocaleMessages(),
});
