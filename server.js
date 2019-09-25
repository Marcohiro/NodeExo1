const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/hello', function (req, res) {
    res.send('Quel est votre nom ?')
    res.send(req.params.name)
  })

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port')
})