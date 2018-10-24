const Discord = require('discord.js')
const client = new Discord.Client()

const warningList = []

const bannedPhrases = ['😂']

const punishedRole = '504680985867190274'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

const filterMessage = msg => {
  bannedPhrases.map(phrase => {
    if (msg.content.includes(phrase)) {
      if (warningList.includes(msg.author)) {
        msg.reply('Again?')
      } else {
        msg.reply(`You have been punished for saying '${phrase}'`)
        warningList.push(msg.author)
        msg.member.addRole(punishedRole)
      }
    }
  })
}

client.on('message', msg => {
  if (msg.author.bot) {
    return
  }

  filterMessage(msg)
})

module.exports = client
