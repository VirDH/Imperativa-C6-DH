// algoritmos busqueda

//busqueda lineal
let elementos = [3, 4, 7, 8, 10, 12, 15, 20]
let busquedaLineal = (coleccion, elem) =>{
    for (let i=0; i<coleccion.length;i++){
        if (coleccion[i]===elem){
            return i
        }
    }
    return null
}
/*
console.log(busquedaLineal(elementos,7));
console.log(busquedaLineal(elementos, 17));
*/

//busqueda binaria

let elementosBinaria = [3, 4, 7, 8, 10, 12, 15,20] // 
const busquedaBinaria = (elementos2,buscando) => {
    let min = 0 
    let max = elementos2.length-1 // 7
    let elem
    while( min<=max ){
        medio = Math.floor((min + max) / 2) //0
        elem = elementos2[medio] //3
        if (elem==buscando){
            return medio
        }
        if (elem>buscando){
            max = medio -1 //-1
        }
        else{
            min = medio +1
        }

    }
    return null
}

console.log(busquedaBinaria(elementosBinaria,1))
console.log(busquedaBinaria(elementosBinaria, 15))


let personas = [
    {
        id: 1,
        nombre: "Ale",
        edad: 15
    },
    {
        id: 2,
        nombre: "Javi",
        edad: 83
    },
    {
        id: 3,
        nombre: "Luis",
        edad: 26
    },
    {
        id: 4,
        nombre: "Dan",
        edad: 16
    },
]