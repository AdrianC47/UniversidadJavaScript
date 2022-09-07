// miFuncion2();
// miFuncion1();

// function miFuncion1(){
//     console.log("funcion 1");
// }
// function miFuncion2(){
//     console.log("funcion 2");
// }


// //Funciones de Tipo CallBack, llamar a una funcion dentro de otra funcion como argumento

// //Se define una funcion que posteriormente se utiliza como parametro a otra funcion
// function imprimir(mensaje){
//     console.log(mensaje);
// }

// function division(valor){
//     console.log(valor/2);
// }

// function sumar(op1,op2,funcionCallback){
//     let res = op1 + op2;
//     funcionCallback(res);
// }

// sumar(8,5,imprimir);
// sumar(10,10,division);

// Llamadas asíncronas  con uso setTimeout

function miFuncionCallback (){
    console.log('saludo asíncrono después de 3 seg');
}

setTimeout(miFuncionCallback, 3000);//se manda como parametro primero la funcion y luego el tiempo 3000 = 3sg

setTimeout(function()  {console.log("saludo asincrono 2 ")}, 7000);


setTimeout(function()  {console.log("saludo asincrono 3 ")}, 5000);

//Aqui se logra evidenciar lo asíncrono pues la ultima funcion se ejecuta antes que la 2da 