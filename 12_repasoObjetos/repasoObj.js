/*Distintas maneras de crear un objeto con las propiedades nombre y edad */
/*{ nombre: "Lean", edad: 27 }*/
let obj1 = {
    nombre: "Virginia",
    edad: 30
}

let obj2 = {}
obj2.nombre = "Juan" // obj2 = {nombre: "Juan"} ---> Como no existe la propiedad la crea y le asigna el valor
obj2.edad = 25 // obj2 = {nombre: "Juan", edad: 25}

let obj3 = {}
obj3["nombre"] = "Ana" // obj3 = {nombre: "Ana"}  ----->   obj3.nombreProp  igual a obj3['nombreProp']
obj3["edad"] = 40  // obj3 = {nombre: "Ana", edad: 40}

let obj4 ={} 
console.log(obj4) // -> imprime objeto vacio
let cadena1 = "nombre" // defino una variable que contiene una cadena "nombre"
obj4[cadena1] = "Mario"  // obj4 = {nombre: "Mario"} ---> Como no existe la propiedad "nombre" (valor que esta guardado en la variable cadena1 ) la crea y le asigna el valor
console.log(obj4)
obj4["edad"] = 18 // obj4 = {nombre: "Mario", edad:18}
console.log(obj4)
//----------------------------
/* Enunciado 
Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como propiedad la cadena que fue pasada como parametro (string)
Ejemplo:
let array = [ { nombre: “Lean”, edad: 27 }, { nombre: “Eze”, edad: 49} ]
propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
*/

let propiedadUnica = (arreglo,cadenaProp)=>{
    let nuevoArreglo = [] //declaro un nuevo arreglo vacio, que voy a usar para generar la salida
    // con el ciclo voy a recorrer el arreglo, que me pasaron como parametro y buscar en los objetos que contiene la propiedad guardada en la variable cadenaProp 
    for(let i=0;i<arreglo.length; i++){ 
        
        let nuevoObjeto = {} //creo un objeto vacio para armar uno nuevo en cada vuelta del ciclo
        nuevoObjeto[cadenaProp] = arreglo[i][cadenaProp] 
        /* Con la parte de la izq de la asignacion al objeto (nuevoObjeto), que esta vacio,  le creo una nueva propiedad cadenaProp (recordar que es un string y la propiedad del objeto se va a llamar como ese string).
         En la parte de derecha estoy accediendo al objeto de la posicion i guardado en arreglo (arreglo[i]), y de ese objeto accedo a la prop que corresponde al string almacenado en cadenaProp [cadenaProp]  */

        nuevoArreglo.push(nuevoObjeto) //inserto el objeto en el arreglo nuevoArreglo

    }
    return nuevoArreglo //retorno el arreglo
}

let array = [{ nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49, apellido: "Lopez" }]
console.log(propiedadUnica(array, "edad"))// imprime ---> [{ edad: 27 }, { edad: 49 }]

let array2 = [{ nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49, apellido: "Lopez" }]
console.log(propiedadUnica(array2, "apellido")) //imprime ----> [ { apellido: undefined }, { apellido: 'Lopez' } ]
                                                    /* undefined para el primer objeto porque en array2 el primer objeto no tiene la propiedad "apellido"*/
