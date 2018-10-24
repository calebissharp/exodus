const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log('Server listening on port 80')
})
