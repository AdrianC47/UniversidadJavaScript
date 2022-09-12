/*
Una promesa basicamente es código que tiene varios estados, así que vamos
a poder lanzar una petición para procesar un código en dado caso de que la
promesa se haya resuelto correctamente (caso resolved) y en caso de que hayamos tenido problemas
se manda a llamar el caso de rejected.
En pocas palabras se tiene 2 caminos uno en el que se resuelve correctamente y otro en el que pudimos haber tenido un error 
Cuando se ha resuelto correctamente se usa el then() y si se ha tenido un error se usa el catch()
*/

//El Promise tiene 2 parametros los cuales son funciones de tipo callback

// let miPromesa = new Promise((resolver, rechazar)=>{ //aqui simplemente declaro los parametros  para las funciones
//     let expresion = true;
//     if(expresion)//esta es la condicion
//         resolver('Resuelto correctamente'); //si cumple la condicion llamo a mi funcion que fue mandada como parametro y le mando el 'Resuelto correctamente'
//     else
//         rechazar('Se produjo un error');
//     }); 

// //Para mandar  a llamar se usa el then //estos son argumentos (funciones)
// // Al momento de crear la Promesa mando 2 funciones pero sin ejecutarse, (prometo luego ejecutarte) , luego de eso
// // se entra al if y si cumple la condicion llama a la funcion que fue mandada como parametro y le pasa el resuelt correctamente


// //miPromesa.then(valor => console.log(valor),error => console.log(error)); 
// miPromesa           //aqui recien se CREA el cuerpo de la funcion en el caso del then
// .then(
//     valor =>console.log(valor)
// )
// .catch(error=>console.log(error)); //aqui recien se CREA el cuerpo de la funcion en el caso del catch

// let miPromesa2 = new Promise((funcion1, funcion2)=>{
//     let numero= 4;
//     if (numero > 4) 
//             funcion1(8);
        
//     else 
//             funcion2(5);    
//     });

// miPromesa2.then(valor => console.log(8* valor)).catch(valor => console.log(9*valor));


/*
Funcion setTimeout y Promesas en JavaScript
*/

let miPromesa = new Promise((resolver)=>{
    console.log("Inicio promesa");
    setTimeout(()=>resolver('Saludos con promesa y Timeout '),3000); //aqui mando la cadena 
    console.log("Fin promesa");
});

miPromesa.then(valor=>console.log(valor+ "dsffsd"));

let miPromesa2 = new Promise((resolver)=>{
    console.log("Inicio promesa");
    setTimeout(()=>resolver(8),5000); //aqui mando la cadena 
    console.log("Fin promesa");
});

miPromesa2.then(valor=>console.log(valor *9));


// Palabra Async con  Promesas en JavaScript

// async indica que una función o metodo esta obligado a  regresar una promesa
async function miFunctionConPromesa(){
    return 'saludos con promesa y async';
}

miFunctionConPromesa().then(valor =>console.log(valor));

async function miFunctionConPromesa2(){
    return 10;
}

miFunctionConPromesa2().then(valor =>console.log(valor/2));

// Palabra Await y Async con Promesas en JavaScript

// lo que hace await  es esperar el resultado de una promesa, de esta manera vamos a simplificar la llamada a 
// nuestra promesa  y procesar su resultado

// async con await

async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });
    console.log(await miPromesa); //se consume el resultado de la promesa 
}

funcionConPromesaYAwait();

async function funcionConPromesaYAwait2(){
    let miPromesa2 = new Promise(resolver => {
        resolver(8)
    });
    console.log(await miPromesa2 *5);
};

funcionConPromesaYAwait2();


// Promesas, Await y Async y SetTimeout

async function funcionConPromesaAwaitTimeout(){
    let miPromesa = new Promise(resolver => {
        setTimeout(()=> resolver('promesa con await y timeout'), 3000);
    });
    console.log(await miPromesa);
}

funcionConPromesaAwaitTimeout();


async function funcionConPromesaAwaitTimeout2(){
    let miPromesa = new Promise(resolver => {
        setTimeout(()=> resolver(7), 3000);
    });
    console.log(await miPromesa * 7);
    console.log("Fin Funcion") //Esto no se imprime hasta que se haya terminado de procesar la funcion
}

funcionConPromesaAwaitTimeout2();