import RestaurantsService from '../services/restaurants.service.js'

export default class RestaurantsController {
  static create = async (req, res, next) => {
    try {
      const restaurant = await RestaurantsService.create(req.body)
      res.status(201).json(restaurant)
    } catch (error) {
      next(error)
    }
  }

  static getAll = async (req, res, next) => {
    try {
      const restaurants = await RestaurantsService.getAll()
      res.status(200).json(restaurants)
    } catch (error) {
      next(error)
    }
  }

  static getById = async (req, res, next) => {
    const { id } = req.params
    try {
      const restaurant = await RestaurantsService.getById(id)
      res.status(200).json(restaurant)
    } catch (error) {
      next(error)
    }
  }

  static update = async (req, res, next) => {
    const { id } = req.params
    try {
      const restaurant = await RestaurantsService.update(id, req.body)
      res.status(200).json(restaurant)
    } catch (error) {
      next(error)
    }
  }

  static delete = async (req, res, next) => {
    const { id } = req.params
    try {
      await RestaurantsService.delete(id)
      res.status(200).json({ res: 'Restaurant deleted' })
    } catch (error) {
      next(error)
    }
  }

  static getStatistics = async (req, res, next) => {
    try {
      const statistics = await RestaurantsService.getStatistics(req.query)
      res.status(200).json(statistics)
    } catch (error) {
      next(error)
    }
  }
}
