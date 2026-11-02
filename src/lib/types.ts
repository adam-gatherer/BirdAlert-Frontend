export type Sighting = {
	id: string;
	species: {
		commonName: string;
		scientificName: string;
	};
	image: string;
	observedAt: Date;
	validationStatus: 'provisional' | 'validated';
	count: number;
};
