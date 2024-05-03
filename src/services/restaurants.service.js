import RestaurantsRepository from '../repositories/restaurants.repository.js'
import { InvalidDataException, NotFoundException } from '../utils/errors.js'
import {
  RestaurantSchema,
  UpdateRestaurantSchema,
} from '../models/restaurant.schema.js'

export default class RestaurantsService {
  static async create(data) {
    const result = RestaurantSchema.safeParse(data)
    if (!result.success) {
      const errors = result.error.errors.map((err) => {
        return err.message
      })
      throw new InvalidDataException(`Missing restaurant data: [${errors}]`)
    }

    return await RestaurantsRepository.create(data)
  }

  static async getAll() {
    return await RestaurantsRepository.getAll()
  }

  static async getById(id) {
    const restaurant = await RestaurantsRepository.getById(id)

    if (!restaurant) {
      throw new NotFoundException('Restaurant not found')
    }

    return restaurant
  }

  static async update(id, data) {
    if (Object.keys(data).length === 0) {
      throw new InvalidDataException('Missing restaurant data')
    }

    const restaurant = await RestaurantsRepository.getById(id)
    if (!restaurant) {
      throw new NotFoundException('Restaurant not found')
    }

    const result = UpdateRestaurantSchema.safeParse(data)
    if (!result.success) {
      const errors = result.error.errors.map((err) => {
        return err.message
      })
      throw new InvalidDataException(`Missing restaurant data: [${errors}]`)
    }

    return await RestaurantsRepository.update(id, data)
  }

  static async delete(id) {
    const restaurant = await RestaurantsRepository.getById(id)

    if (!restaurant) {
      throw new NotFoundException('Restaurant not found')
    }

    return await RestaurantsRepository.delete(id)
  }
}
