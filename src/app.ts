import express from 'express'
import routes from './api/routes.ts'
import { errorHandler } from './middlewares/errorHandler.ts'

const app = express()

app.use(express.json())

app.use(routes)

app.use(errorHandler)

export default app
