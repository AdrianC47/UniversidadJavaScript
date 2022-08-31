// //Hoisting
// miFuncion(8,52);    
// //Declaracion de la función
// function miFuncion(a,b){
//     console.log("Suma:" + (a+b));
// }
// //Llamando a la función
// miFuncion(8,4);

//Declaracion de la función
function miFuncion(a,b){
    return a+b; //si no se pone la palabra return pues JS añade automaticamente la palabra al final de la funcion
}
let resultado = miFuncion(4,4);
console.log(resultado);


//Funciones de tipo expresión (no llevan nombre puesto que se asignan a una variable)
let sumar = function(a,b){return a +b};
console.log(sumar(8,5));

//Funciones Self-Invoking (funciones que se llaman a sí mismas)
(function (a,b){
    console.log('Ejecutando la función: ' + (a+b));
})(3,3)//Esta funcion no se puede reutilizar, no podemos volver a llamarle ya que no esta asignada a ninguna variable ni 
       //tampoco se le esta asignando un nombre