//funciones
//mostrar por consola
mostrarAlgo = nro => {
    console.log(nro+10)   //solo muestra por consola el valor que calcula
}

mostrarAlgo(20)

// retornar un valor
retornarAlgo = nro => {
    return nro+10 //calcula el valor y me lo devuelve o retorna
}

let resultado = retornarAlgo(30) // luego de ejecutar la funcion, guarda el valor que retorno en la variable resultado
//si lo necesitara para algo esa variable resultado la puedo utilizar con el valor que tomo
mostrarAlgo(resultado) //en este solo la muestro para verificar su valor