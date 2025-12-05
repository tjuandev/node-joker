import { Router } from 'express'
import { createItem, getItems } from './controller.ts'

const router = Router()

router.get('/', getItems)
router.post('/', createItem)

export default router
