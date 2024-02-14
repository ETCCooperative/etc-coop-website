<template>
	<div id="notification" v-if="false">
		<a v-if="$i18n.locale === 'cn'"
			href="https://etccooperative.org/posts/2023-12-13-announcement-upgrade-your-nodes-for-the-ethereum-classic-spiral-hard-fork-on-block-19250000-cn">
			公告：升级您的节点以适应以太坊经典螺旋硬分叉，分叉块高为19,250,000。
		</a>
		<a v-else
			href="https://etccooperative.org/posts/2023-12-13-announcement-upgrade-your-nodes-for-the-ethereum-classic-spiral-hard-fork-on-block-19250000-en">
			ANNOUNCEMENT: Upgrade Your Nodes for the Ethereum Classic Spiral Hard Fork on Block 19,250,000
		</a>
	</div>
	<slot name="header"></slot>

	<slot name="main"></slot>

	<!-- newsletter section starts here -->
	<Newsletter />
	<!-- newsletter section ends here -->

	<!-- footer starts here -->
	<Footer />
	<!-- footer ends here -->
</template>

<script>
import Newsletter from "@/components/Newsletter.vue";
import Footer from "@/components/Footer.vue";

export default {
	name: "Layout",
	components: {
		Newsletter,
		Footer,
	},
};
</script>
