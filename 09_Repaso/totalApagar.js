/*
Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
litrosConsumidos.
A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
cuenta las siguientes consideraciones:
● Si el vehículo es “coche”, el precio por litro es de $86.
● Si es “moto”, ha de ser $70.
● Si es “autobús”, ha de ser $55.

● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.
*/
let totalAPagar= (vehiculo, litros) => {
    let precio = 0;
    switch (vehiculo) {
        case "moto":
                precio = litros*70
            break;
         case "coche":
                precio = litros * 86 
            break;
        case "autobus":
                precio = litros * 55
            break;
    
    }
    if (litros>25){
        precio += 25 //precio = precio + 25
    }
    else if (litros>0 && litros<=25){
        precio += 50
    }
    return precio
}