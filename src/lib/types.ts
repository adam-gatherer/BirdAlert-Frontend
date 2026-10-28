export type Sighting = {
	id: string;
	species: {
		commonName: string;
		scientificName: string;
	};
	image: string;
	observedAt: Temporal.PlainDateTime;
	validationStatus: 'provisional' | 'validated';
	count: number;
};
