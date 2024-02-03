// appeler express js
const express = require('express');
const app = express();
// allocation du port 4000
const port = 4000;
// appel de body-parser
const bodyParser = require('body-parser');
// utiliser body-parser
app.use(bodyParser.json());

// les méthode du protocole HTTP sont : GET: pour lire et afficher, POST: pour l'envoie des données,
// PUT: modification partiel, DELETE:supression, PATCH:modification total
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello From express');
});

app.get('/welcome',(req,res)=>{
    res.send("welcome I am hearing your request")
})
app.post('/send',(req,res)=>{
    res.send(req.body);
})
// lire un produit avec son id
app.get('/product/:id',(req,res)=>{
    res.send("le produit numéro "+ req.params.id);
})



// allouer localhost:4000
app.listen(port,()=>{
    console.log(`le serveur à démarer sur le port ${port}`);
}
// exception

)
