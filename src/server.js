const express = require('express')
const { addUrl } = require('./constants')

const app = express()

app.get('/', (req, res) => {
  res.send(`Add bot here: <a href="${addUrl}">${addUrl}</a>`)
})

module.exports = app
