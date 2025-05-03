import { Router } from 'express'
import { createItem, deleteItem, getItemById, getItems, updateItem } from './controller'

const router = Router()

router.get('/', getItems)
router.get('/:id', getItemById)
router.post('/', createItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)

export default router
