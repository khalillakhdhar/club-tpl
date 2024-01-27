// les tableaux en js sont hétérogènes
 var tab=[1,"hello",true,3.14];
 // ajouter un élément à la fin du tableau
    tab.push("fin")
    // ajouter un élément au début du tableau
    tab.unshift("début")
 console.log(tab)
 var users=new Array("mohamed","ali","salah");
 // ajouter un élément dans un indice précis
    users.splice(1,0,"ahmed");
    console.log(users);
    // supprimer un élément dans un indice précis
    users.splice(0,1);
    console.log(users);
    // supprimer un élément à la fin du tableau
    users.pop();
    console.log(users);