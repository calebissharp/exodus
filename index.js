const server = require('./src/server')
const bot = require('./src/bot')
const { token } = require('./src/constants')

bot.login(token)

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  details => {
    console.log(`Server listening on port ${details.port}`)
  }
)
