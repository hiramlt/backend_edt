import http from 'http'
import app from './app.js'
import config from './config/config.js'

const server = http.createServer(app)
const PORT = config.port

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
