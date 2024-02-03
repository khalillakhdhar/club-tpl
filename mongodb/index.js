const { MongoClient } = require('mongodb');
const uri="mongodb+srv://khalillakhdharatc:PK5eocnRtzzEFv2o@cluster0.v3u9fms.mongodb.net/?retryWrites=true&w=majority"
// en local l'url est : 'mongodb://localhost:27017'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() { // async elle attend que la fonction soit terminée pour passer à la suite
    try {
        await client.connect();
        const database = client.db('test');
        const collection = database.collection('users');
        // Query for a movie that has the title 'Back to the Future'
        //const doc = { nom: 'khalil', prenom: 'lakhdhar' };
       // const result = await collection.insertOne(doc);
    //console.log(`A document was inserted with the _id: ${result.insertedId}`);
    //supprimer un document avec l'id 65be94ac6e67114878c538b7
    const result = await collection.deleteOne({ _id: "65be94ac6e67114878c538b7" });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);



    // afficher la liste des documents 
    const cursor = collection.find({});
    const liste = await cursor.toArray();
    console.log(liste);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);