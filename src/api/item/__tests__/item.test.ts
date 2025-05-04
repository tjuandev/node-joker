import request from '#testHelpers/request.ts'

describe('Route: /item', () => {
	it('should return a list of items', async () => {
		const response = await request.get('/item')
		expect(response.status).toBe(200)
	})
})
