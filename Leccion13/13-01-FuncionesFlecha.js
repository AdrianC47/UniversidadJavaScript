let miFuncion = function (){
    console.log('saludos desde mi función');
}

// const miFuncionFlecha = () => {
//     console.log('saludos desde mi función flecha');
// }

//const miFuncionFlecha = ()=>console.log('saludos desde mi función flecha');

//miFuncionFlecha();
//miFuncion();
// const saludar = () =>{
//     return 'Saludos desde funcion flecha';
//}

const saludar = ()=> 'Saludos desde funcion flecha'; 

console.log(saludar());

const regresaObjeto =  () =>({nombre:"Elliot", apellido:"Alderson"}); //si retorno un objeto pues se lo pone entre ({}) debido a que se puede confundir con el cuerpo de una funcion
console.log(regresaObjeto());

const funcionConParametrosClasico = function(mensaje){
    console.log(mensaje);
}
funcionConParametrosClasico("pepe");

// const funcionConParametros = (mensaje) => console.log(mensaje); si es un solo parametro pues se puede omitir los parentesis
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros("Hello friend");


// const funcionConVariosParametros = (op1,op2) => op1+op2;
const funcionConVariosParametros = (op1,op2) =>{
    let resultado = op1 + op2;
    return `Resultado: ${resultado} `;  
} 
console.log(funcionConVariosParametros(5,8));



