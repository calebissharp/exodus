const { forwardTo } = require('prisma-binding')

const Mutations = {
  createBannedPhrase: forwardTo('db'),
  updateBannedPhrase: forwardTo('db'),
  deleteBannedPhrase: forwardTo('db'),
  async updatePermissions(parent, args, ctx, info) {
    return ctx.db.mutation.updateUser(
      {
        where: { id: args.id },
        data: {
          permissions: {
            set: args.permissions
          }
        }
      },
      info
    )
  }
}

module.exports = Mutations
