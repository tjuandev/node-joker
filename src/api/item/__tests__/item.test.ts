import request from '#testHelpers/request.ts'
import { items } from '../item.model.ts'

describe('Route: /item', () => {
	it('should return a list of items', async () => {
		const response = await request.get('/item')
		expect(response.status).toBe(200)
		expect(items).toEqual(response.body)
	})

	it('should create an item', async () => {
		const response = await request.post('/item').send({ name: 'Test Item' })
		expect(response.status).toBe(201)
		expect(response.body).toEqual({ id: expect.any(Number), name: 'Test Item' })
	})
})
