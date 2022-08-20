//condicionales
//if-else  if-else if-else
let condicionales = (nro) =>{
   
    if (nro>=3 && nro >= 10) {
            //cond verdardera
            console.log("mayor")        
        
    }
    
    else if (nro <20) {
        //cond verdadera seg cond
        console.log("menor") 
        
    }
    else {
        //cond falsas
    }
    console.log("Hola");

    return nro
}
let numero = condicionales(2)

//if ternario

let numero2 = nro <= 10 ? "menor  o igual a 10" : ""

//switch -> multiples casos
let color = "blanco"
switch (color){
    case "verde":
        console.log("Mi remera es verde")
    break;   
    case "rojo":
        console.log("Mi remera es rojo")
       
    case "azul":
        console.log("Mi remera es azul")
        break;
    default:
        console.log("Otro color")
    break;
}

/* cuidado si no pongo algun break porque sigue ejecutando las sentencias que estan debajo
 sin importar que estan dentro de otro case, hasta que encuentra un break 
 o terminan las sentencias del switch */
let colorPantalon = "rojo"
switch (color) {
    case "verde":
        console.log("Mi pantalon es verde")
        break;
    case "rojo":
        console.log("Mi pantalon es rojo")
                /* cuidado  */
    case "azul":
        console.log("Mi pantalon es azul")
        break;
    default:
        console.log("Mi pantalon es de otro color")
        break;
}
