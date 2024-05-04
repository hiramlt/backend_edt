import { prisma } from '../db.js'

export default class RestaurantsRepository {
  static create(restaurant) {
    return prisma.restaurant.create({ data: restaurant })
  }

  static getAll() {
    return prisma.restaurant.findMany({})
  }

  static getById(id) {
    return prisma.restaurant.findUnique({ where: { id } })
  }

  static update(id, restaurant) {
    return prisma.restaurant.update({ where: { id }, data: restaurant })
  }

  static delete(id) {
    return prisma.restaurant.delete({ where: { id } })
  }

  static getInRadius(latitude, longitude, radius) {
    // One coordinate degree corresponds to 111000 meters aprox.
    const degreesToMeters = 111000

    // Haversine formula
    return prisma.restaurant.findMany({
      where: {
        AND: [
          {
            lat: {
              gte: latitude - radius / degreesToMeters,
              lte: latitude + radius / degreesToMeters,
            },
          },
          {
            lng: {
              gte:
                longitude -
                radius /
                  (degreesToMeters * Math.cos((latitude * Math.PI) / 180)),
              lte:
                longitude +
                radius /
                  (degreesToMeters * Math.cos((latitude * Math.PI) / 180)),
            },
          },
        ],
      },
      select: {
        id: true,
        rating: true,
      },
    })
  }
}
