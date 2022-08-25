/*  OBJETOS LITERALES */
//definicion / acceso / propiedades - metodos/ modific , agregado /acceso dentro del objeto /duplicar objetos

let miArreglo = [1,2,3,4]
let miObjeto = {
    //propiedades
        //clave1 : valor1, 
        //clave2 : valor2
    //metodos
}

let calcularPromedio = function () {
    let suma = 0
    for (let i = 0; i < this.notas.length; i++) {
        suma = suma + this.notas[i]
    }
    return suma / this.notas.length
}
let persona = {
    nombre: "Maria",
    edad: 25,
    siTrabaja: true,
    hijos : ["Juan","Pedro"],
    decirHola : function() {
        console.log("Hola, soy "+this.nombre)
    },
    notas: [7,7,10],
    promedio :calcularPromedio
}
let nomb = persona.nombre
console.log(persona)
persona.nombre = "María"
persona.apellido = "Lopez"
console.log(persona)

persona.decirHola()
console.log(persona.promedio())
persona.notas.push(10)
console.log(persona)
console.log(persona.promedio())

let persona2 = {
    nombre: "Mario",
    edad: 55,
    siTrabaja: true,
    decirHola: function () {
        console.log("Hola, soy " + this.nombre)
    },
    notas: [8, 10, 9],
    promedio: function () {
        let suma = 0
        for (let i = 0; i < this.notas.length; i++) {
            suma = suma + this.notas[i]
        }
        return suma / this.notas.length
    }
}




