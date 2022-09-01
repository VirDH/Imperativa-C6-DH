const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: true,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]
/*
Obtener un nuevo array de cuentas cuyas edades sean menores a 30.*/
const edadMenores = function (arreglo) {
    let nuevoArreglo= []
    for (let i=0; i<arreglo.length;i++){
        if (arreglo[i].edadTitular < 30){
            nuevoArreglo.push(arreglo[i])
        }
    }   
    return nuevoArreglo
}
console.log(edadMenores(arrayCuentas))
/*
Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y agregue a
 cada elemento(objeto literal) una propiedad llamada id con un valor Numérico*/
 const generarId = function (arreglo) {
    for (let i=0; i<arreglo.length; i++){
        arreglo[i].id = i+1
    }    
 }
 generarId(arrayCuentas)
 console.log(arrayCuentas)

/*
Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, 
en caso de encontrar retornar la cuenta (él objeto literal completo), caso contrario retornar null
*/
const buscarPorId = function (arreglo, idBusco) {
    for (let i=0;i<arreglo.length;i++){
        console.log(i) //muestro para ver cuantas veces ejecuta
        if (arreglo[i].id==idBusco){
           return arreglo[i] 
        }        
        
    }
    return null
}
console.log(buscarPorId(arrayCuentas,10))
console.log(buscarPorId(arrayCuentas, 3))

/*
Desarrollar una función llamada incrementarSaldo 
que reciba como parámetro el array de cuentas, un id y un saldo, 
buscar la cuenta  Reutilizando la función  buscarPorId 
deberá incrementar él saldo de la cuenta,
caso contrario retornar undefined 

*/