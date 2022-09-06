"use strict"
try {
    x= 10;    
    miFuncion();
} catch (error) {
    console.log(error);   
}
finally{ //el bloque finally siempre se va a ejecutar
    console.log("termina la revision de errores");
}
console.log("continuamos");
