const Discord = require('discord.js')
const client = new Discord.Client()

const warningList = []
const whitelist = ['226034667160076290', '163852734230036480']

const bannedPhrases = ['😂', '😹', '😳', '😅', '🤣', '😆']

const punishedRole = '504680985867190274'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

const filterMessage = msg => {
  bannedPhrases.map(phrase => {
    if (msg.content.includes(phrase)) {
      msg.reply(
        `You have been punished for saying '${phrase}'. Your punishment will end in 5 minutes`
      )

      warningList.push(msg.author)
      msg.member.addRole(punishedRole)
      setTimeout(() => {
        msg.member.removeRole(punishedRole)
        console.log(`Punished rank removed from ${msg.author.username}`)
      }, 300000)
    }
  })
}

client.on('message', msg => {
  if (msg.author.bot || whitelist.includes(msg.author.id)) {
    return
  }

  filterMessage(msg)
})

module.exports = client
