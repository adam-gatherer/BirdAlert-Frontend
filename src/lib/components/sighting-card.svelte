<script lang="ts">
	import type { Sighting } from '#lib/types.ts';

	import IconBinoculars from '~icons/lucide/binoculars';

	// Props
	interface Props {
		sighting: Sighting;
	}

	const { sighting }: Props = $props();

	// Constants
	const JUST_SPOTTED_THRESHOLD_SEC = 600;

	// State
	const isJustSpotted = $derived(
		Temporal.Now.plainDateTimeISO().since(sighting.observedAt).total('seconds') <=
			JUST_SPOTTED_THRESHOLD_SEC
	);
</script>

<article
	class="flex h-full w-full flex-col rounded-3xl border border-space-500 bg-space-700 bg-cover bg-center text-space-50"
	style:background-image={`url("${sighting.image}")`}
>
	<div class="flex flex-row-reverse justify-between p-2">
		{#if isJustSpotted}
			<div
				class="flex items-center gap-2 rounded-full border bg-space-700 px-2 py-0.5 text-sm font-light"
			>
				<div class="relative flex items-center justify-center">
					<span class="absolute h-3 w-3 animate-ping rounded-full bg-space-50 duration-2000"></span>
					<span class="h-2 w-2 rounded-full bg-space-50"></span>
				</div>
				<span>Just spotted!</span>
			</div>
		{/if}
	</div>
	<div
		class="flex w-full grow flex-col justify-end gap-1 rounded-b-3xl bg-linear-to-b from-transparent from-30% to-black mask-t-from-30% mask-t-to-60% p-2 backdrop-blur"
	>
		<h2 class="font-google text-lg leading-4 tracking-widest uppercase font-stretch-ultra-expanded">
			{sighting.species.commonName}
		</h2>
		<span class="text-sm font-light tracking-[0.2rem] italic">
			{sighting.species.scientificName}
		</span>
		<button
			class="flex h-11 cursor-pointer items-center justify-center gap-3 rounded-full border border-space-400 bg-space-600 hover:bg-space-500 active:bg-space-700"
		>
			<IconBinoculars class="size-6"/>
			<span>Watch this bird</span>
		</button>
	</div>
</article>
