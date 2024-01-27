function imc(poids,taille) { // fonction directe
    return Math.round(poids / (taille * taille));
} // js classique
// interpretation de imc :
/*
si imc < 19 alors "maigre"
si imc >= 19 et imc < 25 alors "normal"
si imc >= 25 et imc < 30 alors "surpoids"
sinon obésité
*/

const interpretation = (a,b) => { // js moderne (ES6) fonction fléchée (arrow function) 
    if (imc(a,b) < 19) {
        return "maigre";
    } else if (imc(a,b) < 25) {
        return "normal";
    } else if (imc(a,b) < 30) {
        return "surpoids";
    } else {
        return "obésité";
    }
}



console.log(imc(70,1.8))
//console.log(imc(60,1.8))
console.log(interpretation(70,1.8))


// en javascript, on peut déclarer une fonction de cette manière: 
// function imc(){
// corps de la fonction
//}
// ou bien de cette manière:
// const imc = function(){}
// ou bien de cette manière: 
// const imc = () => {}
