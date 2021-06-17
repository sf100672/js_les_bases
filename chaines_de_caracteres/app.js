const str = 'lorem ipsum dolor sit amet';
console.log(str.charAt(4));//log le caractère portant l'index 4 de la chaine de caractères.
console.log(str.includes('ipsum'));//vérifie que la chaine contient le txt entre guillements renvoi true ou false
console.log(str.indexOf('ipsum'));// ipsum commence bien à l'index 6
console.log(str.charCodeAt(4));//correspond au code unidcode décimal de la lettre m (index4)
console.log(str.slice(1));////supprime toute les lettres situées avant l'index de la chaine

const strToArray = str.split(' ');//transforme chaque mot en un élément de tableau
console.log(strToArray);

const str1 = 'Hello';
const str2 = 'world';
console.log(str1.concat(' ', str2));//concatène la const str2 à la const str1