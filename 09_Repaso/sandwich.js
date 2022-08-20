function armarSandwich(base, pan, queso, tomate, lechuga,cebolla,mostaza,mayonesa) {
    /*Pollo = $150 (“pollo”)
● Carne = $200 (“carne”)
● Vegetariano (verduras asadas) = $100 (“veggie”)*/
let precio = 0
switch (base) {
    case "pollo":
        precio = precio +150
        break;
    case "carne":
        precio = precio + 200
        break;

    case "veggie":
        precio = precio + 100
        break;

}
/*
Blanco c/orégano y parmesano = $50 (“blanco”)
● Negro c/avena = $60 (“negro”)
● Sin gluten = $75 (“s/gluten”)
*/
    switch (pan) {
        case "blanco":
            precio = precio + 50
            break;
        case "negro":
            precio = precio + 60
            break;

        case "s/gluten":
            precio = precio + 75
            break;
    }
/*
Queso = $20
Tomate = $15
Lechuga = $10
Cebolla = $15
Mayonesa = $5
*/
    if (queso){
        precio = precio+20
    }
    if (tomate) {
        precio = precio + 15
    }
    if (lechuga) {
        precio = precio + 10
    }
    if (cebolla) {
        precio = precio + 15
    }
    if (mayonesa) {
        precio += 5
    }

}