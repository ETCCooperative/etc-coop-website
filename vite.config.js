import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

function markdownRawPlugin() {
	return {
		name: "markdown-raw",
		transform(code, id) {
			if (id.endsWith(".md")) {
				return {
					code: `export default ${JSON.stringify(code)}`,
					map: null,
				};
			}
		},
	};
}

export default defineConfig({
	plugins: [vue(), markdownRawPlugin()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
