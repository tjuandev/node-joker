import type { NextFunction, Request, Response } from 'express'
import { type Item, items } from './item.model.ts'

export const createItem = (req: Request, res: Response, next: NextFunction) => {
	try {
		const { name } = req.body
		const newItem: Item = { id: Date.now(), name }
		items.push(newItem)
		res.status(201).json(newItem)
	} catch (error) {
		next(error)
	}
}

export const getItems = (_req: Request, res: Response, next: NextFunction) => {
	try {
		res.json(items)
	} catch (error) {
		next(error)
	}
}
