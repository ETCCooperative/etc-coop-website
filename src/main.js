import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import markdown from "markdown-it";
import markdownAttrs from "markdown-it-attrs";
import metadataBlock from "markdown-it-metadata-block";
import yaml from "yaml";
import i18n from "./i18n";
import "./assets/css/styles.css";
import "./assets/css/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createHead } from "@vueuse/head";

const mixins = {
	methods: {
		md: function (input) {
			const meta = {};
			const html = markdown({
				html: true,
				linkify: true,
				typographer: true,
			})
				.use(markdownAttrs)
				.use(metadataBlock, {
					parseMetadata: yaml.parse,
					meta,
				})
				.render(input);

			return { html, meta };
		},
	},
};

createApp(App)
	.mixin(mixins)
	.use(i18n)
	.use(createHead())
	.use(router)
	.mount("#app");
