const { forwardTo } = require('prisma-binding')

const Query = {
  bannedPhrases: forwardTo('db'),
  users: forwardTo('db'),
  user: forwardTo('db')
}

module.exports = Query
