// afficher les nombre paire dans un intervalle
function boucle() {
    for (let i = 0; i <= 14; i++) { // for classique
        if (i % 2 == 0) { // % modulo
            console.log(i+" est paire");
        }
        else
        {
            console.log(i+" est impaire"); // afficher les nombre impaire dans un intervalle
        }
    }
}
var etudiant={ nom:"mohamed", prenom:"ali", age:20, ville:"paris" }; // objet JSON
for(let x in etudiant) // for in pour parcourir les objets JSON
{
    console.log(x+" : "+etudiant[x]);
}

var voiture=["peugeot","renault","citroen","fiat"]; // tableau
for(let x of voiture) // for of pour parcourir les tableaux
{
    console.log(x);
}
x=0;
/*
while(x>0) // while classique
{
    console.log(x);
    x--;
}
*/
do // do while
{
    console.log(x);
    x--;
}while(x>0);


//boucle();