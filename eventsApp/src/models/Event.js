const mongoose=require('mongoose'); // import mongoose
const eventSchema=mongoose.Schema(
    {
        titre:{type:String,required:true},
        description:{type:String},
        date:{type:String,required:true},
        lieu:{type:String,required:true},

    }
)
module.exports=mongoose.model('Event',eventSchema); // export the model
// export permet d'exporter le modèle pour pouvoir l'utiliser dans d'autres fichiers