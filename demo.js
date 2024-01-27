var prix=30; // variable globale
const calculePrix=(prix)=>
{
    prix=prix*1.2;
    let quantite=20; // variable locale
    let total=prix*quantite;
    console.log("le prix total est de "+total+" euros");
}
console.log(prix); // correcte
//console.log(quantite); // incorrecte
calculePrix(prix);
