// Arreglos (Array)-> coleccion de elementos
let arregloNros = [1,2,3,4,5,6]
let arregloDias = ['lunes', 'martes', 'miercoles','jueves','viernes', 'sabado','domingo'] //arreglo de cadenas
let miArreglo =   [1, 2, "hola", true, 'c']
//indice o posic   0  1    2      3     4 =(5-1)=miArreglo-1          
let long = miArreglo.length //= 5 -> cantidad de elementos del arreglo

let primerPosic = miArreglo[0] // =1  ->primer elemento, posicion 0 
let ultimaPosic = miArreglo[miArreglo.length - 1] //='c' = miArreglo[4] ->ultimo elemento, posicion miArreglo.length-1

console.log("----------------------")
//string -> arreglos  de caracteres
 let cadena = "enero" //['e','n','e','r','o']

//puedo acceder a los "elementos" o caracteres como con los arreglos
console.log("Primer letra:",cadena[0])
console.log("Ultima letra:",cadena[cadena.length-1])

//METODOS -> los llamamos o invocamos ---> cadena.nombreMetodo(parametros)
console.log("Cadena en Mayusculas:", cadena.toUpperCase())

console.log("----------------------")
//Mostrar todos los dias de la semana

//Muestro el arreglo directamente
console.log("Muestro arreglo de días")
console.log(arregloDias) 
/* cuidado que muestra o imprime todo el arreglo, si necesito imprimir cada uno de los días tengo q acceder a cada uno de los elementos con su posicion*/

//recorrido de un arreglo, uso la variable i como posicion o indice del arreglo
console.log("Recorrido for")
for (let i=0; i< arregloDias.length;i++){
    console.log(arregloDias[i])
}
// si quisiera o necesitara lo puedo hacer con un while
console.log("Recorrido while")
let j=0
while (j<arregloDias.length){
    console.log(arregloDias[j])
    j++
}




