let tableau = ['a', 'b', 'c', 'd', 'd'];


tableau.push(5);//ajoute la valeur 5 à la fin du tableau
tableau.pop();//enlève la dernière valeur du tableau
tableau.shift(); //supprime la premiere valeur du tableau
tableau.unshift('a')//ajoute la valeur 'a' au début du tableau
tableau.indexOf('d'); //retourne le numéro d'index de 'd'
tableau.splice(0,2);//supprime 2 éléments en partant de l'index 0
tableau.splice(3,0, 'z');//ne supprime pas d'élément mais ajoute 'z' à l'index 3

console.log(tableau.slice(2,3));//affiche les éléments de ind2 à ind3 (non compris)


let tableau1 = ['a', 'b' , 'c' , 'd' , 'd'];
let tableau2 = ['z' , 'x' , 'y'];
let tableau3 = tableau1.concat(tableau2);
console.log(tableau3);
console.log(tableau3.includes('j'));// renvoi false car le tableau ne contient pas de 'j'
console.log(tableau3.includes('d'));// renvoi true car le tableau contient un 'd'

let multitab = [1,2,3,[1,2,[14]]];
console.log(multitab);
console.log(multitab.flat(2));//applati les tableaux

let fruits = ['Pommes', 'Fraises', 'Raisins'];
console.log(fruits);
console.log(fruits.join('-'));//créer une seule et même chaîne de caractères
console.log(fruits.reverse());

