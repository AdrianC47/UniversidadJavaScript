// /*
// Ejemplos de tipos de datos en JavaScript
// */
// //Tipo de dato String
// var nombre = "Carlos";
// console.log(nombre)

// nombre=140.5
// console.log(nombre) //las variables son dinamicas es decir que pueden cambiar de tipo, para saber su tipo
// console.log(typeof(nombre)) // para saber el tipo se usa el typeof

// //Tipo de dato numerico
// var numero =25;
// console.log(numero)

// //Tipo de dato objeto

// var objeto = {
//     nombre:"Adrian", //con objetos se ponen los :
//     apellido:"Cabrera", 
//     telefono:"000000"
// }
// console.log(typeof(objeto))

// // Tipo de dato boolean (True,false)

// var bandera = true;
// console.log(bandera);
// console.log(typeof(bandera));

// // Tipo de dato funcion (Una funcion tambien es un tipo de dato

// function miFuncion(){}
// console.log(miFuncion)
// console.log(typeof(miFuncion))

// // Tipo de dato symbol
// var simbolo = Symbol("mi simbolo");
// console.log(simbolo)
// console.log(typeof(simbolo))

// // Tipo Clase (en JavaScript las clases tambien son funciones)

// class Persona {
//     constructor(nombre, apellido){
//         this.nombre= nombre;
//         this.apellido=apellido;
//     }
// }

// console.log(Persona)
// console.log(typeof(Persona))

// //Tipo Undefined

// var x;
// console.log(x)
// console.log(typeof(x))

// x = undefined;
// console.log(x)
// console.log(typeof(x))
// // null = ausencia de valor
// var y = null;
// console.log(y)
// console.log(typeof(null))

// // Los arreglos son de tipo de dato objeto 
 
// var autos = ['BMW', 'Audi', 'Volvo'];
// console.log(autos)
// console.log(typeof(autos))

// var z= '';
// console.log(z);
// console.log(typeof(z))


////=====================================================================================================


// var nombre = 'Juan';
// var apellido = 'Perez';

// var nombreCompleto= nombre + " "+ apellido;

// console.log(nombreCompleto)

// var nombreCompleto2 = "Carlos" + " " + "Lara";
// console.log(nombreCompleto2)

// var x = nombre + 2+1+9
// console.log(x)

//  x= nombre + (2+4) //aqui toma prioridad lo que seria la suma debido a los parentesis
//  console.log(x)

//  x=  2 +4  + nombre; //sin embargo si se pone primero los numeros de igual forma se realizará la suma
//  console.log(x)

// 1
// 10.0
// "Carlos"
// //nombre = "Juan";// esto es una literal de tipo string, las literales son los valores que les asignamos a nuestras variables
// //Sin embargo esto no es una buena practica, la manera correcta de declarar es 
// let nombre = "Juan";
// console.log(nombre);

// const apellido = "Perez";
// console.log(apellido);
//apellido="sdf"; no se puede reasignar el valor a una constante

// let nombreCompleto= "Juan Pérez";
// console.log(nombreCompleto);

// let x,y;
// x=10, y = 20;
// let z = x+y;
// console.log(z);

let nombreCompleto = "Juan Perez";
//OjO que JS es sensible a mayusculas y minusculas
let nombrecompleto = "Carlos Lara";
console.log(nombreCompleto);
console.log(nombrecompleto);

//El nombre de una variable no puede comenzar con numeros, se puede usar mayuscula minuscula, _ o $

let a1nombreCompleto;
let _nombreCompleto;
let $nombreCompleto;
//let 1nombreCompleto;

// tambien no se pueden usar los nombres de las palabras reservadas
//let break=10;
let abreak=10;
//de igual forma se recomeienda no usar asi sea en conjunto con otras palabrass