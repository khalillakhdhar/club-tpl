// importer mongoose
const mongoose = require('mongoose');
const User = require('./User');
// importer express
//const express = require('express');
const uri="mongodb+srv://khalillakhdharatc:PK5eocnRtzzEFv2o@cluster0.v3u9fms.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri)
.then(() => console.log('Connexion à MongoDB réussie !')) // connect se fait avec succès
.catch(() => console.log('Connexion à MongoDB échouée !')); // echec

async function createUser() {
    const user = new User({
        nom: 'Youssef',
        age: 33,
        email: 'jsuser@gmail.com'
    });
const result= await user.save();
console.log(result);
}
async function getUsers() {
    const users = await User.find();
    console.log(users);
}
async function updateUser(id,newUser) {
const user=await User.findByIdAndUpdate(id,newUser);

}
async function deleteUser(id) {
const user=await User.findByIdAndRemove(id);

}
//createUser().then(()=>getUsers());
