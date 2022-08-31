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