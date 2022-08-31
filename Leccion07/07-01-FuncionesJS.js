// //Hoisting
// miFuncion(8,52);    
// //Declaracion de la función
// function miFuncion(a,b){
//     console.log("Suma:" + (a+b));
// }
// //Llamando a la función
// miFuncion(8,4);

//Declaracion de la función
// function miFuncion(a,b){
//     return a+b; //si no se pone la palabra return pues JS añade automaticamente la palabra al final de la funcion
// }
// let resultado = miFuncion(4,4);
// console.log(resultado);


//Funciones Self-Invoking (funciones que se llaman a sí mismas)
// (function (a,b){
//     console.log('Ejecutando la función: ' + (a+b));
// })(3,3)//Esta funcion no se puede reutilizar, no podemos volver a llamarle ya que no esta asignada a ninguna variable ni 
//        //tampoco se le esta asignando un nombre


// Una funcion es un tipo de dato sin embargo tambien puede ser descritas como objetos por ende tiene atributos y metodos
// console.log(typeof miFuncion);
// function miFuncion(a,b){
//     console.log(arguments.length); //aqui accedo a un atributo de mi funcion
//     return a+b; 
// }

// var miFuncionTexto = miFuncion.toString(); //aqui accedo a un metodo de mi funcion
// console.log(miFuncionTexto);

//Funciones de tipo expresión (no llevan nombre puesto que se asignan a una variable)
// let sumar = function(a,b){return a +b};
// console.log(sumar(8,5));  

// Funciones de Tipo Flecha
// const sumarFuncionTipoFlecha = (a,b)=> a+b;
// console.log(sumarFuncionTipoFlecha(8,6));

// //Parametros es (a,b) en una funcion en tanto que argumentoos es (2,3) en una funcion
// let sumar = function(a=4,b=5){
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2])
//     return a +b + arguments[2];
// };
// console.log(sumar(3,8,7));  

let resultado = sumarTodo(5, 4, 13, 10, 25);
console.log(resultado)
function sumarTodo(){
    let suma = 0;
    for(let i =0; i <arguments.length; i++){
        suma += arguments[i]; //suma = suma + arguments[i]
    }
    return suma;
}
console.log(resultado);