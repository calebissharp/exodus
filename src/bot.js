const Discord = require('discord.js')
const { prisma } = require('../db/generated')
const client = new Discord.Client()

const warningList = []

const punishedRole = '504680985867190274'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setPresence({
    status: 'online',
    game: { name: 'WITH THE SOULS OF THE INNOCENT' }
  })
})

const filterMessage = async (msg, user) => {
  const bannedPhrases = await prisma.bannedPhrases()

  const phrasesUsed = bannedPhrases
    .filter(phrase => new RegExp(phrase.test, 'gi').test(msg.content))
    .map(({ phrase }) => phrase)

  if (phrasesUsed.length > 0) {
    msg.reply(
      `You have been punished for saying ${phrasesUsed.join(
        ', '
      )}. Your punishment will end in 1 minute`
    )

    warningList.push(msg.author)
    msg.member.addRole(punishedRole)
    await prisma.updateUser({
      where: { id: user.id },
      data: { punished: true }
    })
    setTimeout(async () => {
      msg.member.removeRole(punishedRole)
      await prisma.updateUser({
        where: { id: user.id },
        data: { punished: false }
      })
      console.log(`Punished rank removed from ${msg.author.username}`)
    }, 60000)
  }
}

const getOrCreateUser = async author => {
  const [user] = await prisma.users({
    where: { discordId: author.id }
  })

  if (user) return user

  console.log(`Creating new user for ${author.username}`)
  return prisma.createUser({
    username: author.username,
    discordId: author.id,
    avatar: author.avatarURL
  })
}

client.on('message', async msg => {
  if (msg.author.bot) {
    return
  }

  const user = await getOrCreateUser(msg.author)
  console.log(user)

  if (user.permissions.includes('ADMIN')) return

  filterMessage(msg, user)
})

client.on('guildMemberUpdate', async (oldMember, newMember) => {
  const user = await getOrCreateUser(newMember.user)

  // User now has punished role
  if (oldMember.roles.has(punishedRole) && !newMember.roles.has(punishedRole)) {
    await prisma.updateUser({
      where: { id: user.id },
      data: { punished: false }
    })
    console.log(`Punished role removed from ${user.username}`)
  }

  // User no longer has punished role
  if (!oldMember.roles.has(punishedRole) && newMember.roles.has(punishedRole)) {
    await prisma.updateUser({
      where: { id: user.id },
      data: { punished: true }
    })
    console.log(`Punished role given to ${user.username}`)
  }
})

module.exports = client
