const express = require('express')
const app = express()
const port = 4000
// protocole http => permet de communiquer avec le serveur avec les méthodes GET, POST, PUT, DELETE
//get => récupérer des données (read), post => créer des données (create), put => modifier des données (update), delete => supprimer des données (delete)
app.get('/', (req, res) => {
  res.send('Hello Express js!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})