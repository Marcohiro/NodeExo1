const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/hello', function (req, res) {
    res.send('Quel est votre nom ?')
    if(req.params.nom == 'Sasha' || req.params.nom == 'Sasha') res.send ('Bonjour ' + req.params.nom)
    else{
        res.send('Quel est votre prenom?')
    }
  })

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port')
})