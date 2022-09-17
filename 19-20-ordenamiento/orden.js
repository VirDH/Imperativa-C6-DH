let personas = [
    {
        nombre: "Dua",
        apellido: "Lipa",
        ocupacion: "cantante",
        estatura: 173,
    },
    {
        nombre: "Ariana",
        apellido: "Grande",
        ocupacion: "cantante",
        estatura: 160,
    },
    {
        nombre: "Taylor",
        apellido: "Swift",
        ocupacion: "cantante",
        estatura: 180,
    },
];
//console.log(personas[0].estatura);
for (let i = 0; i < personas.length; i++) { 
    for (let j = 0; j < personas.length-1; j++) { 
        if (personas[j] > personas[j + 1]) {
            let temp = personas[j];
            personas[j] = personas[j + 1];
            personas[j + 1] = temp;
        }
       

}


console.log(personas)
