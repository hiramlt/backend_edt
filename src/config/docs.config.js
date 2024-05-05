import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import path from 'path'
import { __dirname } from '../utils/utils.js'

export const swaggerSpecs = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'EDT Backend',
      description: 'EDT Backend developer test',
      version: '1.0.0',
    },
  },
  apis: [path.join(__dirname, '..', 'docs', '**', '*.yaml')],
})

export const swaggerServe = swaggerUi.serve

export const swaggerSetup = swaggerUi.setup(swaggerSpecs)
