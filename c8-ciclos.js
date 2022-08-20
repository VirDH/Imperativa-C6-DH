//Ciclos
/* For  -->   inicializacion ; condicion; modificacion 
        --> tengo que recordar la ejecucion se realiza una vez que ya se ejecuto 
        todo el bloque de codigo dentro del for
        */

//ciclo para mostrar los numeros del 1 al 10
for (let i=1; i<=10; i++ ){
    //bloque
    console.log(i)

}

//ciclo para mostrar números del 10 al 1
for (let i = 10; i > 0; i--) {
    //bloque
   console.log(i)

}

// ---    Usamos los ciclos dentro de funciones  ----
/* Funcion  esPar, que dado un numero (nro) pasado como parametro,
 retorne si el nro es par */

esPar = nro => {
    if (nro%2==0){
        return true
    }
    else{
        return false
    }
        // return nro%2==0  //equivalente sin usar el if
}

//Ciclo para mostrar los numeros pares del 1 al 10
for (let j =1; j <=10; j++){
    if (esPar(j)){
       console.log(j)
    }    
}

/* Funcion que  cuente los numeros pares del 1 
    hasta un número que me pasan como parametro */
contarPares = nro => {
    let pares = 0
    for (let j = 1; j <= nro; j++) {
    
        if (esPar(j)) {
            pares++
        }
    }
    return pares
}

let cantidadPares = contarPares(20)//llamo a la funcion contarPares y guardo el valor que devolvio en la variable cantidadPares
console.log(cantidadPares) //muestro el valor que tomo la variable cantidadPares
//---------------------------------------------------------------------------//

//While 
// Ciclo para mostrar los nros del 1 al 10
let cont = 11 //inicializacion
while (cont <= 10){// condicion

    console.log(cont)

    cont++ //modificacion   
}

//do While
let contador2 = 11
do
{
    console.log(contador2)

    contador2++
} while (contador2 <= 10)


//-----------------------------------------------------------------------

/*Crear una función que pida un valor por parámetro y muestre los 10
números siguientes */

diezSiguientes = nro => {

    for (let i = nro; i<= nro+10; i++ ){
        console.log(i)
    }

}
diezSiguientes(30)//llamada a la funcion

