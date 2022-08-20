/* Sumar todas las notas y dividirlas entre la cantidad de notas a promediar,
 PROMEDIO=(NOTA1+NOTA2+NOTA3)/3
*/
/*
function promedio(nota1,nota2,nota3){
    .....
}
*/
let promedio = (nota1,nota2,nota3) => {
    let suma = nota1+nota2+nota3
    let prom = suma/3
    return prom //return (nota1+nota2+nota3)/3
}

let resultado = promedio(10,10,7)
console.log(resultado)

/*Algoritmo para convertir una cantidad de pesos a dólares.*/

function convertirDolares(cantPesos,precioDolares){
    return cantPesos/precioDolares
}

console.log(convertirDolares(3000,293))