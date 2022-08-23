/* array de correos pendientes de verificacion */
let arrayCorreosPendientes = [
   'iroman@digitalhouse.com',
    'loki%digitalhouse.com',
    'loki@digitalhouse.com',
    'thanosdigitalhouse.com',
    'thanos@digitalhouse.com'
];

/* array de correos ya admitidos */
let arrayCorreosAdmitidos = [
    'thor@digitalhouse.com',
    'tucuMan@digitalhouse.com',
    'wanda@digitalhouse.com'
];
let arrayCorreosDescartados = [];
/*Desarrollar una función que realice la verificación de cada elemento 
del array de correos pendientes. 
En caso de validar, agregar al arrayCorreoAdmitidos.
 Caso contrario, agregar al arrayCorreoDescartados 
 (vaciar el array de correos pendientes).*/

function verificarCorreo(correo){
    //    nuestro codigo
    if(correo.includes('@')){
        arrayCorreosAdmitidos.push(correo)

    }
    else{
        arrayCorreosDescartados.push(correo)
    }
}

/*
verificarCorreo(arrayCorreosPendientes[0])
verificarCorreo(arrayCorreosPendientes[1])
verificarCorreo(arrayCorreosPendientes[2])
verificarCorreo(arrayCorreosPendientes[3])*/

/*puedo llamar con cada posicion como arriba, pero se hace muy extenso si fueran más elementos, para eso podemos recorrer el arreglo con algun ciclo*/

for (let i = 0; i <= arrayCorreosPendientes.length-1; i++){
    verificarCorreo(arrayCorreosPendientes[i])   
}




console.log('Admitidos',arrayCorreosAdmitidos);
console.log('Descartados',arrayCorreosDescartados)


