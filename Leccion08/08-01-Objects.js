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

// Método Get en objetos en de JS

let persona ={
    nombre:'Adrian',
    apellido: 'Perez',
    email:'aperez@gmail.com',
    edad:27,
    get nombreCompleto(){
        return this.nombre + ' ' +this.apellido; //la palabra this es una variable que apunta al objeto
    }
}
console.log(persona.nombreCompleto)
// Al poner el get ya no va el function y ya no van los parentesis cuando se llama a la funcion ya que JS entiende que se va a obtener información