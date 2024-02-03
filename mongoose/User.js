const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    nom: {type:String, required:true},
    age: {type:Number, required:true},
    email: {type:String, required:false},
});
module.exports = mongoose.model('User', userSchema); // User est le nom du model, userSchema est le schema du model
