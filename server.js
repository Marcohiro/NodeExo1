const express = require('express')
const app = express()

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/hello', function (req, res) {
    if(req.query.nom != null) {
        res.send ('Bonjour, ' + req.query.nom)
    }else{
        res.send('Quel est votre prenom?')
    }
  })

app.post('/chat', function(req, res){
    if(req.body != null) {
        if (req.body.msg == "ville") {
            res.send("Nous sommes à Paris")
        } else if(req.body.msg == "météo"){
            res.send("Il fait beau")
        }
    }else{
        res.send('Inserer message')
    }
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port')
})