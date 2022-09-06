"use strict" //de esta forma se añade el modo estricto a fin de que por ejemplo se inicializen obligatoriamente las variables

// x = 10 no funcia
let x = 10;
console.log(x);


//tambien se puede poner el modo estricto en  una funcion
miFuncion();

function miFuncion(){
    "use strict"
    let y = 15;
    console.log(y);
}