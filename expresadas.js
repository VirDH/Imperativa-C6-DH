//Un solo parámetro  - Una línea dentro del bloque
//Antes
var saludo = function (nombre) {
    return 'Hola ' + nombre;
};
console.log(saludo('Jonathan')); //Imprime Hola Jonathan

//Ahora
//let saludo = nombre => 'Hola ' + nombre
let saludo = nombre => `Hola ${nombre}`;
console.log(saludo('Jonathan')); //Imprime Hola Jonathan

//----------------------------------------------
//Varios parámetros - Una línea dentro del bloque
//Antes
var sumar = function (a, b) {
    return a + b;
};
console.log(sumar(10, 9)); //Imprime 19

//Ahora
let sumar = (a, b) => a + b; ///solo la defino --no se ejecuta
console.log(sumar(10, 9)); //Imprime 19 -> llamo a que se ejcute la fc
//---------------------------------------------
// Sin parámetros - Una línea dentro del bloque
//Antes
var saludo = function () {
    return 'Hola a tod@s';
};
console.log(saludo()); //Imprime Hola a tod@s

//Ahora
let saludo = () => `Hola a tod@s`;
console.log(saludo()); //Imprime Hola a tod@s
//------------------------------------------
// Func con más de una línea en el bloque -> USO LLAVES!!

//Antes
var saludo = function (nombre) {
    let cadena = 'Buenos días, '+nombre+'!!!'
    return cadena
};
console.log(saludo("Julia")); //Imprime el saludo 

//Ahora
let saludo = (nombre) => {
    let cadena = 'Buenos días, ' + nombre + '!!!'
    return cadena
};
console.log(saludo("Julia")); //Imprime el saludo 