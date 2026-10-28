<script lang="ts">
	import type { Sighting } from '#lib/types.ts';

	import SightingCard from '#lib/components/sighting-card.svelte';

	const SIGHTINGS: Sighting[] = [
		{
			id: 'sighting-001',
			species: {
				commonName: 'European Robin',
				scientificName: 'Erithacus rubecula'
			},
			image: 'birds/robin.jpg',
			observedAt: Temporal.Now.plainDateTimeISO(),
			validationStatus: 'validated',
			count: 2
		},
		{
			id: 'sighting-002',
			species: {
				commonName: 'Eurasian Blue Tit',
				scientificName: 'Cyanistes caeruleus'
			},
			image: 'birds/tit.jpg',
			observedAt: Temporal.PlainDateTime.from('2026-10-27T07:45:00'),
			validationStatus: 'provisional',
			count: 3
		},
		{
			id: 'sighting-003',
			species: {
				commonName: 'Eurasian  Blackbird',
				scientificName: 'Turdus merula'
			},
			image: 'birds/blackbird.jpg',
			observedAt: Temporal.PlainDateTime.from('2026-10-26T09:15:00'),
			validationStatus: 'validated',
			count: 4
		},
		{
			id: 'sighting-004',
			species: {
				commonName: 'European Goldfinch',
				scientificName: 'Carduelis carduelis'
			},
			image: 'birds/goldfinch.jpg',
			observedAt: Temporal.PlainDateTime.from('2026-10-25T11:20:00'),
			validationStatus: 'provisional',
			count: 5
		},
		{
			id: 'sighting-005',
			species: {
				commonName: 'Great Tit',
				scientificName: 'Parus major'
			},
			image: 'birds/great-tit.jpg',
			observedAt: Temporal.PlainDateTime.from('2026-10-24T10:00:00'),
			validationStatus: 'validated',
			count: 2
		},
		{
			id: 'sighting-006',
			species: {
				commonName: 'Common Magpie',
				scientificName: 'Pica pica'
			},
			image: 'birds/magpie.jpg',
			observedAt: Temporal.PlainDateTime.from('2026-10-23T14:35:00'),
			validationStatus: 'validated',
			count: 6
		},
		{
			id: 'sighting-007',
			species: {
				commonName: 'Ring-necked Pheasant',
				scientificName: 'Phasianus colchicus'
			},
			image: 'birds/pheasant.jpg',
			observedAt: Temporal.PlainDateTime.from('2026-10-22T08:50:00'),
			validationStatus: 'provisional',
			count: 3
		},
		{
			id: 'sighting-008',
			species: {
				commonName: 'Gray Heron',
				scientificName: 'Ardea cinerea'
			},
			image: 'birds/heron.jpg',
			observedAt: Temporal.PlainDateTime.from('2026-10-21T12:10:00'),
			validationStatus: 'validated',
			count: 1
		},
		{
			id: 'sighting-009',
			species: {
				commonName: 'Common Kingfisher',
				scientificName: 'Alcedo atthis'
			},
			image: 'birds/kingfisher.jpg',
			observedAt: Temporal.PlainDateTime.from('2026-10-20T16:25:00'),
			validationStatus: 'provisional',
			count: 12
		},
		{
			id: 'sighting-010',
			species: {
				commonName: 'Common Pochard',
				scientificName: 'Aythya ferina'
			},
			image: 'birds/pochard.png',
			observedAt: Temporal.PlainDateTime.from('2026-10-19T13:40:00'),
			validationStatus: 'validated',
			count: 4
		}
	];
</script>

<main class="grid h-full grid-cols-5 grid-rows-2 gap-8 p-8">
	{#each SIGHTINGS as sighting (sighting.id)}
		<SightingCard {sighting} />
	{/each}
</main>
