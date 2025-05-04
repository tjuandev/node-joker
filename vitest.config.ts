import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		include: ['**/__tests__/**/*.test.ts'],
		globals: true,
		environment: 'node',
		coverage: {
			provider: 'istanbul',
			reporter: ['text', 'json', 'html'],
			exclude: [
				'node_modules',
				'dist',
				'**/*.model.ts',
				'**/model.ts',
				'**/models/**',
				'src/api/routes.ts'
			]
		}
	}
})
