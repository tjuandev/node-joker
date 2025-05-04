import { Router } from 'express'
import itemRouter from './item/item.router.ts'

const router = Router()

router.use('/item', itemRouter)

export default router
