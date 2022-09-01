/*
1) Crear un array llamado misMascotas 
2) Dentro de este array crearemos un objeto literal para cada mascota. 
Cada objeto deberá tener:  nombre,    raza, edad, sonido
  un método que nos retorne ese sonido  veces2
Cuando esté listo, verificar en consola
*/  

const saludoMascota = function () {
    return this.sonido + " " + this.sonido
}

const mascota1 = {
    nombre: "Firulais",
    raza: "Dogo",
    edad: 3,
    sonido: "Guau",
    saludo: saludoMascota
}

const mascota2 = {
    nombre: "Roco",
    raza: "Mezcla",
    edad: 7,
    sonido: "Guau",
    saludo: saludoMascota
}

const mascota3 = {
    nombre: "Garfield",
    raza: "Siames",
    edad: 11,
    sonido: "Miau",
    saludo: saludoMascota
}

const misMascotas = []
misMascotas.push(mascota1,mascota2,mascota3)
/*console.log(misMascotas[1].saludo())
console.log(misMascotas[1]["edad"])*/
/*console.log(misMascotas)*/

/*3) Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1. */

const aumentarEdad = function () {
    for (let i=0;i<misMascotas.length; i++){
            misMascotas[i].edad +=1
       // misMascotas[i].edad++
       // misMascotas[i].edad =  misMascotas[i].edad + 1
    }
}
//aumentarEdad()
console.log(misMascotas)
/*
4) Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad
*/

const aumentarEdad2 = function () {
    for (let i = 0; i < misMascotas.length; i++) {
       if (misMascotas[i].edad<6){
           misMascotas[i].edad += 1
       }
       else if (misMascotas[i].edad >= 6 && misMascotas[i].edad <= 10){
           misMascotas[i].edad += 2
       } else {
           //misMascotas[i].edad = misMascotas[i].edad +( misMascotas[i].edad/2)
           misMascotas[i].edad +=  misMascotas[i].edad / 2
       }       
    }
}
aumentarEdad2()
console.log(misMascotas)

/*5 )Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, que será secuencial y que empezará en 1.*/

const generarId = function () {
    for (let i = 0; i < misMascotas.length; i++) {
        misMascotas[i].id = i+1
        
    }
}
generarId()
console.log(misMascotas)

/* 6)Por último eliminaremos la propiedad ‘raza’ , ya que para nosotros todos los animalitos son iguales*/
const eliminarRaza = function () {
    for (let i = 0; i < misMascotas.length; i++) {
        delete misMascotas[i].raza
       // misMascotas[i].raza = undefined --> cambio el valor pero la prop sigue existiendo
    }
}
eliminarRaza()
console.log(misMascotas)
