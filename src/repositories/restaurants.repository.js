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
}
