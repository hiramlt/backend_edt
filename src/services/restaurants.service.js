import RestaurantsRepository from '../repositories/restaurants.repository.js'
import { InvalidDataException, NotFoundException } from '../utils/errors.js'

export default class RestaurantsService {
  static async create(data) {
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
    const restaurant = await RestaurantsRepository.getById(id)

    if (!restaurant) {
      throw new NotFoundException('Restaurant not found')
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
