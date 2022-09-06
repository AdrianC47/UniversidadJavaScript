miFuncion2();
miFuncion1();

function miFuncion1(){
    console.log("funcion 1");
}
function miFuncion2(){
    console.log("funcion 2");
}


//Funciones de Tipo CallBack, llamar a una funcion dentro de otra funcion como argumento

//Se define una funcion que posteriormente se utiliza como parametro a otra funcion
function imprimir(mensaje){
    console.log(mensaje);
}

function division(valor){
    console.log(valor/2);
}

function sumar(op1,op2,funcionCallback){
    let res = op1 + op2;
    funcionCallback(res);
}

sumar(8,5,imprimir);
sumar(10,10,division);
