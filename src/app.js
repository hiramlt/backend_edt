import express from 'express'
import morgan from 'morgan'
import restaurantsRouter from './routers/restaurants.router.js'

import { errorHandler } from './utils/utils.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/restaurants', restaurantsRouter)
app.use(errorHandler)

export default app
