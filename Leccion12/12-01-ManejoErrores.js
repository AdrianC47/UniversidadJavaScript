// "use strict"
// try {
//     x= 10;    
//     miFuncion();
// } catch (error) {
//     console.log(error);   
// }
// finally{ //el bloque finally siempre se va a ejecutar
//     console.log("termina la revision de errores");
// }
// console.log("continuamos");

'use strict'
let resultado = '4';

try {
    //x = 10;
    if (isNaN(resultado)) throw 'No es un número'
    else if(resultado === '') throw "Es cadena vacia";
    else if(resultado >= 0) throw "Valor positivo";
    else if(resultado <0) throw "Valor negativo";
} catch (error) {
    console.log(error);
    // console.log(error.name);
    // console.log(error.message);
}
finally{
    console.log("Termina revision de errores")
}