import request from '#testHelpers/request.ts'
import { getAllItems } from '../item.repository.ts'

describe('Route: /item', () => {
	it('should return a list of items', async () => {
		const response = await request.get('/item')
		expect(response.status).toBe(200)
		expect(getAllItems()).toEqual(response.body)
	})

	it('should create an item', async () => {
		const response = await request.post('/item').send({ name: 'Test Item' })
		expect(response.status).toBe(201)
		expect(response.body[0]).toEqual({
			id: expect.any(Number),
			name: expect.any(String)
		})
	})
})
