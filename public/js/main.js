// 1 déclarer un tableau 

let variable = "y"
let tabExo = [ "string" , variable , 3 , 4 , false];
console.log(tabExo);

// 2 longueur du tableau dans l'exercice précedent

console.log(tabExo.length);

// 3 retitrer dernière élément du tableau avec array

console.log(tabExo.slice(0, 4));

// 4 retirer première élément du tableau 

console.log(tabExo.slice(1));

// 5 rajouter 2 éléments au tableau

tab5 = tabExo.push("what" , "the" ); 
console.log(tab5);

// 6 ajouter 3 éléments au début du tableau

tab6 = tabExo.unshift( "tell" , "me" , "why");
console.log(tab6);

// 7 retourner le tableau


// 8 aider ayhan avec sa boite

bAyhan = ["chaussettes"];
bAyhan.push("chaussettes");
alert(bAyhan);

bAyhan.unshift("t-shirt");
alert(bAyhan)

bAyhan.push("chemise" , "pull" , "pantalon")
alert(bAyhan)

alert(bAyhan.slice(3))
bAyhan.push("cravatte");

alert(bAyhan.length);

bAyhan.slice(0, 5)
bAyhan.slice(2)
alert(bAyhan)


