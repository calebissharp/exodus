const { forwardTo } = require('prisma-binding')

const punishedRole = '504680985867190274'

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
  },
  async punish(parent, args, ctx, info) {
    const user = await ctx.db.query.user({ where: { id: args.id } })
    if (!user) throw new Error('No user with that id found')

    const member = await ctx.bot.guilds.first().fetchMember(user.discordId)

    if (!member) throw new Error('User could not be found in guild')

    member.addRole(punishedRole)
    await ctx.db.mutation.updateUser({
      where: { id: user.id },
      data: { punished: true }
    })
    setTimeout(async () => {
      member.removeRole(punishedRole)
      await ctx.db.mutation.updateUser({
        where: { id: user.id },
        data: { punished: false }
      })
      console.log(`Punished rank removed from ${user.username}`)
    }, 60000)

    return {
      message: `Successfully punished ${user.username}.`
    }
  }
}

module.exports = Mutations
