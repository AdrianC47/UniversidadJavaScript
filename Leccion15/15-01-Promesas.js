/*
Una promesa basicamente es código que tiene varios estados, así que vamos
a poder lanzar una petición para procesar un código en dado caso de que la
promesa se haya resuelto correctamente (caso resolved) y en caso de que hayamos tenido problemas
se manda a llamar el caso de rejected.
En pocas palabras se tiene 2 caminos uno en el que se resuelve correctamente y otro en el que pudimos haber tenido un error 
Cuando se ha resuelto correctamente se usa el then() y si se ha tenido un error se usa el catch()
*/

//El Promise tiene 2 parametros los cuales son funciones de tipo callback

// let miPromesa = new Promise((resolver, rechazar)=>{
//     let expresion = true;
//     if(expresion)
//         resolver('Resuelto correctamente');
//     else
//         rechazar('Se produjo un error');
//     }); 

// //Para mandarla a llamar se usa el then
//                 //estos son argumentos (funciones de tipo flecha)
// //miPromesa.then(valor => console.log(valor),error => console.log(error));
// miPromesa
// .then(
//     valor =>console.log(valor)
// )
// .catch(error=>console.log(error));


/*
Funcion setTimeout y Promesas en JavaScript
*/

let miPromesa = new Promise((resolver)=>{
    console.log("Inicio promesa");
    setTimeout(()=>resolver('Saludos con promesa y Timeout'),3000);
    console.log("Fin promesa");
});

miPromesa.then(valor=>console.log(valor));
    