import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	API_URL: {
		public: true,
		static: true,
		schema: (value) => {
			if (!value) throw new Error('API_URL must be set in the environment');

			return new URL(value).toString();
		},
		description: 'Base URL for the BirdAlert API.'
	}
});
