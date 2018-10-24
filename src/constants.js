module.exports = {
  port: process.env.PORT || 8080,
  token: process.env.TOKEN,
  clientId: process.env.CLIENT_ID,
  addUrl: `https://discordapp.com/oauth2/authorize?client_id=${
    process.env.CLIENT_ID
  }&scope=bot&permissions=0`
}
