const server = require('./src/server')
const bot = require('./src/bot')
const { port, token } = require('./src/constants')

bot.login(token)

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
