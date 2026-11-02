<script lang="ts">
	import type { Sighting } from '#lib/types.ts';

	import { onMount } from 'svelte';
	import { API_URL } from '$app/env/public';

	import SightingCard from '#lib/components/sighting-card.svelte';

	// Types
	type ApiSighting = Omit<Sighting, 'observedAt'> & {
		observedAt: string;
	};

	// State
	let sightings = $state<Sighting[]>([]);
	let loading = $state(true);
	let errorMessage = $state<string | null>(null);

	// Lifecycle
	onMount(() => {
		void loadSightings();
	});

	// Utils
	async function loadSightings() {
		try {
			const response = await fetch(new URL('sightings', API_URL));

			if (!response.ok) {
				throw new Error(`Failed to fetch sightings: ${response.status} ${response.statusText}`);
			}

			const { sightings: apiSightings } = (await response.json()) as {
				sightings: ApiSighting[];
			};

			sightings = apiSightings.map(({ observedAt, ...sighting }) => ({
				...sighting,
				observedAt: new Date(observedAt)
			}));
		} catch (error) {
			errorMessage = error instanceof Error ? error.message : 'Failed to fetch sightings.';
		} finally {
			loading = false;
		}
	}
</script>

<main class="grid h-full grid-cols-5 grid-rows-2 gap-8 p-8">
	{#if loading}
		<p class="col-span-full" role="status">Loading sightings…</p>
	{:else if errorMessage}
		<p class="col-span-full" role="alert">{errorMessage}</p>
	{:else if sightings.length === 0}
		<p class="col-span-full" role="status">No sightings found.</p>
	{:else}
		{#each sightings as sighting (sighting.id)}
			<SightingCard {sighting} />
		{/each}
	{/if}
</main>
