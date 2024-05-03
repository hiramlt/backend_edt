import { Exception } from './errors.js'

export const errorHandler = (error, req, res, next) => {
  const errorData = {
    status: 500,
    message: `Unexpected error ${error.message}`,
  }

  if (error instanceof Exception) {
    errorData.status = error.statusCode
    errorData.message = error.message
  }

  res.status(errorData.status).json({ error: errorData.message })
  next()
}
