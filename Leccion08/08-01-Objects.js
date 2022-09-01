// let x = 10;
// console.log(x.lenght)

// let persona ={
//     nombre:'Adrian',
//     apellido: 'Perez',
//     email:'aperez@gmail.com',
//     edad:27,
//     nombreCompleto: function(){
//         return this.nombre + ' ' +this.apellido; //la palabra this es una variable que apunta al objeto
//     }
// }

// console.log(persona.email);
// console.log(persona);
// console.log(persona.nombreCompleto());

//Segunda Forma de crear un objeto

// let persona2 = new Object();
// persona2.nombre = 'Carlos';
// persona2.apellido ='Sanchez';
// persona2.direccion = 'Calle Vieja';
// persona2.telf='789';

// console.log(persona2.nombre)
// console.log(persona2)

// Acceder a las propiedades de los objetos en js
// let x = 10;
// console.log(x.lenght)

// let persona ={
//     nombre:'Adrian',
//     apellido: 'Perez',
//     email:'aperez@gmail.com',
//     edad:27,
//     nombreCompleto: function(){
//         return this.nombre + ' ' +this.apellido; //la palabra this es una variable que apunta al objeto
//     }
// }

// console.log(persona.email);
// console.log(persona['edad']);

// // for in recorre cada una de las propiedades del objeto
// for (nombrepropiedad in persona) {
//     console.log(nombrepropiedad);
//     console.log(persona[nombrepropiedad]);
// }


// //Agregar y eliminar propiedades a un objeto

// persona.telefono ='456'; //simplemente se pone .nuevaPropiedad y se da el valor
// console.log(persona);

// //Para borrar usamos el delete

// delete persona.telefono;
// console.log(persona);

// // Formas de imprimir un objeto
// console.log(persona);

// // Concatenar  cada valor de cada propiedad
// console.log(persona.nombre + ','+ persona.apellido);

// //Iterar cada unas de las propiedades utilizando For in
// for ( nombrePropiedad in persona){
//     console.log(persona[nombrePropiedad]);
// }

// //Utilizando la sintaxis de Object
// let personaArray = Object.values(persona);
// console.log(personaArray);

// //Utilizar el metodo JSON.stringify
// let personaString = JSON.stringify(persona);
// console.log(personaString); 

// Método Get  y SET en objetos  de JS

// let persona ={
//     nombre:'Adrian',
//     apellido: 'Perez',
//     email:'aperez@gmail.com',
//     edad:27,
//     idioma:'es',
//     get lang(){
//         return this.idioma.toUpperCase();
//     },
//     set lang( lang ){
//         this.idioma = lang.toUpperCase();
//     },
//     get nombreCompleto(){
//         return this.nombre + ' ' +this.apellido; //la palabra this es una variable que apunta al objeto
//     }
// }
// console.log(persona.lang);
// // Al poner el get ya no va el function y ya no van los parentesis cuando se llama a la funcion ya que JS entiende que se va a obtener información

// persona.lang = 'us';
// console.log(persona.lang);
// console.log(persona.idioma); //aqui se comprueba que se hizo el seteo

// Método Constructor de Objetos en JavaScript
// se recomienda que los metodos que van a ser constructores de objetos empiecen con mayuscula
//Funcion constructor de objetos de tipo Persona
function Persona(nombre1 = 'Antonio',apellido1 ='Bermeo',email1='anber@unae.edu.ec'){
    this.nombre = nombre1;
    this.apellido = apellido1;
    this.email= email1;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona("Adrian","Cash","adrycash@sixty.com");
console.log(padre);
console.log(padre.nombreCompleto());

let madre = new Persona('Roxxette',"Ness","listenheart@.com");
console.log(madre);
console.log(madre.nombreCompleto());

padre.nombre = 'Luis';
console.log(padre);
console.log(padre.nombreCompleto());

//Distintas Formas de Crear Objetos en JavaScript
let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String('HOLA');
let miCadena2 = ('ADIOS');

let miNumero = new Number(1);
let miNumero2 = 4;

let miBoolean = new Boolean(true);
let miBoolean2 = false;

let miArreglo1 = new Array();
let miArreglo2 =[];

let miFuncion = new Function();
let miFuncion2 = function(){};