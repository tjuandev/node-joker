import { z } from 'zod'

export const createItemValidator = z.object({
	name: z.string().min(1, { message: 'Name is required' })
})
