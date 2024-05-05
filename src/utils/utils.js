import path from 'path'
import url from 'url'
import { Exception } from './errors.js'

const __filename = url.fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

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
