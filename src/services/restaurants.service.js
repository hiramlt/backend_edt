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

  static async getStatistics(data) {
    const { lat, lng, radius } = data

    if (!lat || !lng || !radius) {
      throw new InvalidDataException('Missing position data')
    }

    if (!Number(lat) || !Number(lng) || !Number(radius)) {
      throw new InvalidDataException('Data must be a number')
    }

    const restaurants = await RestaurantsRepository.getInRadius(
      Number(lat),
      Number(lng),
      Number(radius)
    )

    if (restaurants.length === 0) {
      throw new NotFoundException('Restaurants not found in the area')
    }

    const ratings = restaurants.map((r) => r.rating)
    const total_ratings = ratings.reduce((total, rating) => total + rating, 0)
    const avg = total_ratings / ratings.length

    // Calculate std
    const square_diffs = ratings.map((r) => {
      return (r - avg) ** 2
    })
    const sum = square_diffs.reduce((total, rating) => total + rating, 0)
    const std = Math.sqrt(sum / ratings.length)

    return { count: restaurants.length, avg: avg, std: std }
  }
}
