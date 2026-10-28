<script lang="ts">
	import '../app.css';

	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<header class="flex items-center justify-center">
	<h1 class="bg-clip-text font-tektur text-8xl text-transparent uppercase">BirdAlert</h1>
</header>
{@render children()}

<style>
	h1 {
		background-image: linear-gradient(
			2deg,
			oklch(37.43% 0.07032 236.222) 20%,
			oklch(96.557% 0.05126 160.19) 29%,
			oklch(63.508% 0.08335 64.73) 43%,
			oklch(0% 0 0) 54%,
			oklch(100% 0.00011 271.152) 54%,
			oklch(59.117% 0.08646 226.25) 65%,
			oklch(48.566% 0.12406 253.794) 75%,
			oklch(100% 0.00011 271.152) 100%
		);
		-webkit-text-stroke: 2px var(--color-space-200);
	}
</style>
