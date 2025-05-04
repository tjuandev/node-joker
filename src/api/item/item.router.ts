import { Router } from 'express'
import { createItem, getItems } from './item.controller.ts'

const router = Router()

router.get('/', getItems)
router.post('/', createItem)

export default router
