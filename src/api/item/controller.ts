import type { RequestHandler } from 'express'
import { getAllItems } from './repository.ts'
import type { CreateItemBody, Item } from './types.ts'
import { createItemValidator } from './validators.ts'

export const createItem: RequestHandler<
	Record<string, never>,
	unknown,
	CreateItemBody
> = async (req, res, next) => {
	try {
		const { name } = createItemValidator.parse(req.body)
		const newItem: Item = { id: Date.now(), name }

		const items = await getAllItems()
		items.push(newItem)

		res.status(201).json(items)
	} catch (error) {
		next(error)
	}
}

export const getItems: RequestHandler<
	Record<string, never>,
	unknown,
	unknown
> = async (_req, res, next) => {
	try {
		res.json(await getAllItems())
	} catch (error) {
		next(error)
	}
}
