const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const eventRoutes= require('./src/routes/eventRoutes')
app.use(bodyParser.json());
app.use(express.json())
app.use('/api', eventRoutes); // ajouter le chemin /api à toutes les routes
app.get('/', (req, res) => {
    res.send('Express is running!');
})



const uri="mongodb+srv://khalillakhdharatc:PK5eocnRtzzEFv2o@cluster0.v3u9fms.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri)
.then(() => console.log('Connexion à MongoDB réussie !')) // connect se fait avec succès
.catch(() => console.log('Connexion à MongoDB échouée !')); // echec
app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})