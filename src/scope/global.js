// variables

var a; // declarar
var b = 'b' // declaramos / asignamos
b = 'bb' // reasignacion
var a = 'aa' // redeclaracion

// global scope

var fruit = 'apple'; //global si se asigna dentro del documento fuera de una linea especifica de codigo.

function bestFruit() {
    console.log(fruit);
    // si la asigno aca, no es global, pero si la declaro si 
};

bestFruit();

function countries() {
    country = 'Colombia' //global porque la declaro aca
    console.log(country);
}

countries();

console.log(country);