/* function usingCallback(callback) {
     callback();
}

usingCallback(function(){
    console.log(`hello depuis la callback`);
});*/

const numTab = [1,2,3,4];

/*FOREACH 

numTab.forEach(function(element){
    console.log(element);
});*/

//MAP retourne un nouveau tableau

const resultMap = numTab.map(function(x){
    return x * 2;
});

//création de la même fonction mais avec la méthode fléchée
/*const resultMap = numTab.map (x => x*2);*/

console.log(resultMap);

const fruits = ['fraise', 'pomme', 'pastèque', 'kiwi'];

const resultFilter = fruits.filter(function(fruit){
    return fruit.length >5;
});

//création de la même fonction mais avec la méthode fléchée
/*const resultFilter = fruits.filter(fruit =>fruit.length >5);*/

console.log(resultFilter);

//REDUCE
const numTab2 = [1, 2 , 3 ,4]

const reduced = numTab2.reduce(function(a,b){
    return a + b
});


console.log(reduced);