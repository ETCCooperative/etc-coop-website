import { test, expect } from "@playwright/test";

const ROUTES = [
	"/",
	"/ethereum-classic",
	"/mining",
	"/developing-for-etc",
	"/what-is-etc-cooperative",
	"/governance",
	"/filings",
	"/people",
	"/contact",
	"/news",
	"/privacy-policy",
	"/cookie-policy",
	"/terms-of-service",
	"/posts/2024-09-16-introducing-david-schwartz-alan-austin-and-donald-mcintyre-en",
];

async function dismissCookiePopup(page) {
	try {
		const btn = page.locator(
			".cookie__floating__buttons__button--accept"
		);
		await btn.waitFor({ state: "visible", timeout: 3000 });
		await btn.click();
		await page.waitForTimeout(500);
	} catch {
		// Cookie popup not shown or already dismissed
	}
}

for (const route of ROUTES) {
	const name = route === "/" ? "home" : route.slice(1).replace(/\//g, "_");

	test(`visual: ${name}`, async ({ page }) => {
		await page.goto(route, { waitUntil: "networkidle" });
		await dismissCookiePopup(page);
		await expect(page).toHaveScreenshot(`${name}.png`, {
			fullPage: true,
		});
	});
}
