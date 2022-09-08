let matriz = [
    [1,2,5,9,10],
    [3,4,8,15,9],
    [7,8,13,6,1],
    [4,0,2,5,11]
]
//filas - columnas
// mostrar el elemento en posic 2-2
//console.log(matriz[2][2]);

//console.log(matriz[1][3]);


// modificar el elemento de la posic 2,1 multiplicar por 10
matriz[2][1] *= 10 // matriz[2][1]= matriz[2][1]*10


// Crear una fc que imprima los elementos de la fila de posicion 1 (segunda fila)
function imprimirFila2(miMatriz) {
    for(let i=0 ; i< miMatriz[1].length ;i++  ){
        console.log(miMatriz[1][i]);
    }    
}
//imprimirFila2(matriz)


//Crear una fc que imprima los elementos de la fila de la posicion f (pasada como parametro)
function imprimirFila(miMatriz, f) {
    for (let i = 0; i < miMatriz[f].length; i++) {
        console.log(miMatriz[f][i]);
    }
}
//imprimirFila(matriz,0)


//Crear una fc. que imprima los elementos de la columna de la posicion2
//Crear una fc. que imprima los elementos de la columna de la posicion c (pasada como parametro)
function imprimirColumna(miMatriz, c) {
    for (let i = 0; i < miMatriz.length; i++) {
        console.log(miMatriz[i][c]);
    }
}
//imprimirColumna(matriz, 2)


//Crear una fc que muestre todos los elementos de una matriz
function imprimirMatriz(miMatriz) {
    for (let i = 0; i < miMatriz.length; i++) { //filas

        for (let j = 0; j < miMatriz[i].length; j++) { //col
            console.log(miMatriz[i][j]);           
        }
        
    }
}
//imprimirMatriz(matriz)


//Crear una fc que muestre solo los elementos de la matriz que son mayores a un nro pasado como parametro
function imprimirNumeros(miMatriz,nro) {
    for (let i = 0; i < miMatriz.length; i++) { //filas

        for (let j = 0; j < miMatriz[i].length; j++) { //col
            if (miMatriz[i][j]>nro){
                console.log(miMatriz[i][j]);
            }
        }

    }
}
//imprimirNumeros(matriz,10)

//Crear  una fc que cuente todas las veces que aparece en la matriz un nro pasado como parametro
function contarNumeros(miMatriz, nro) {
    let cont =0;
    for (let i = 0; i < miMatriz.length; i++) { //recorro todas las filas de mi matriz

        for (let j = 0; j < miMatriz[i].length; j++) { // en cada fila recorro todas las columnas
            if (miMatriz[i][j] === nro) {
               cont++               
            }
        }
    }
    return cont
}
console.log(contarNumeros(matriz, 5))

//funcion que retorne un arreglo de objetos con las posiciones (fila- columna) de las apariciones del nro pasado como parametro
/*
{
    fila: ....,
    col: .....
}
*/
function posicionesNumeros(miMatriz, nro) {
   let posiciones = [] //creo el arreglo vacio para guardar las posiciones
   
    for (let i = 0; i < miMatriz.length; i++) { //recorro las filas

        for (let j = 0; j < miMatriz[i].length; j++) { //en cada fila recorro todas las columnas
            if (miMatriz[i][j] === nro) { //busco si el elemento de las posiciones i,j es nro 
                let obj = {} //creo nuevo  objeto vacio
                obj.fila=i; // guardo la fila
                obj.col=j; // guardo la columna 
                posiciones.push(obj) //agrego el objeto en el arreglo de posiciones
                
            }
        }
    }
    return posiciones
}
console.log(posicionesNumeros(matriz, 5))

