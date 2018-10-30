const { forwardTo } = require('prisma-binding')

const Mutations = {
  createBannedPhrase: forwardTo('db'),
  updateBannedPhrase: forwardTo('db')
}

module.exports = Mutations
