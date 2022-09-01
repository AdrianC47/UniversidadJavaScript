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
let x = 10;
console.log(x.lenght)

let persona ={
    nombre:'Adrian',
    apellido: 'Perez',
    email:'aperez@gmail.com',
    edad:27,
    nombreCompleto: function(){
        return this.nombre + ' ' +this.apellido; //la palabra this es una variable que apunta al objeto
    }
}

console.log(persona.email);
console.log(persona['edad']);

// for in recorre cada una de las propiedades del objeto
for (nombrepropiedad in persona) {
    console.log(nombrepropiedad);
    console.log(persona[nombrepropiedad]);
}
