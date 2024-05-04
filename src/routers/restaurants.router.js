import { Router } from 'express'
import RestaurantsController from '../controllers/restaurants.controller.js'

const router = Router()

router.get('/statistics', RestaurantsController.getStatistics)
router.post('/', RestaurantsController.create)
router.get('/', RestaurantsController.getAll)
router.get('/:id', RestaurantsController.getById)
router.put('/:id', RestaurantsController.update)
router.delete('/:id', RestaurantsController.delete)

export default router
