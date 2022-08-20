//definicion fc

//funciones declaradas

function sumar(){ //declaracion
    let nro = 2
    nro = nro+1;
    console.log(`El resultado es ${nro}`);
}

sumar() //llamada o invocación

//fc con parametros que retorna algo
function elDoble(nro){
    let reusltado = nro*2
    return resultado
}

let resultDoble = elDoble(3)
console.log(resultDoble)
//--------------------------------------------------------------
//expresada o anonima
//restar() -->no se puede hacer, no la conoce donde esta declarada
let restar = function(nro1,nro2) { //la variable es restar y su valor es la funcion
    let result = nro1 + nro2;
    return result   
}
let resultadoResta = restar(10,6)
console.log(`El resultado es ${resultadoResta}`);


