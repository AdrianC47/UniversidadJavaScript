// let condicion = false;

// if (8>3){ 
//     console.log("Condicion verdadera");
//     console.log("Fin del programa");
// } else{
//     console.log("Condición falsa");
// }

// let numero = 10;
// if( numero ==1){
//     console.log("Numero uno");
// }
// else if (numero ==2){
//     console.log("Numero dos");
// }
// else if (numero == 3){
//     console.log("Numero tres");

// } else if(numero ==4){
//     console.log("Numero cuatro");

// }
// else {
//     console.log("Número desconocido");
// }

// let mes = 10;
// let estacion;
// if (mes ==1 || mes == 2 || mes ==12){
//     estacion = "Invierno";
// }
// else if (mes ==3 || mes == 4 || mes ==5){
//     estacion = "Primavera";
// }
// else if (mes == 6 || mes == 7 || mes == 8){
//     estacion = "Verano";
// }
// else if (mes == 9 || mes == 10 || mes == 11){
//     estacion = "Otoño";
// }
// else{
//     estacion = "Valor incorrecto";
// }

// console.log(estacion);

/*
6am-11am - Buenos días
12pm-18pm - Buenas Tardes
19pm-24pm - Buenas Noches
0am-6am - Durmiendo
*/

// let horaDia = 52;
// let mensaje;

// if( horaDia >= 6 && horaDia <= 11){
//     mensaje = "Buenos Dias";
// }
// else if( horaDia >= 12 && horaDia <= 18){
//     mensaje = "Buenas Tardes";
// }
// else if ( horaDia >= 19 && horaDia <= 24){
//     mensaje = "Buenas noches";
// }
// else if ( horaDia >= 0 && horaDia <6){
//     mensaje = "Durmiendo";
// }
// else {
//     mensaje = "Valor Incorrecto";
// }

// console.log(mensaje);

// let numero = 35;

// let numeroTexto = 'Valor desconocido';

// switch(numero){
//     case 1:
//         numeroTexto = 'Número uno';
//         break;
//     case 2:
//         numeroTexto = "Número dos";
//         break;
//     case 3:
//         numeroTexto = "Número tres";
//         break;
//     case 4:
//         numeroTexto = "Número cuatro";
//         break;
//     default: //en el caso de que no coincida con ningun caso se pone el default
//         numeroTexto = 'Caso no encontrado';//puede ir al principio o al final pero si se pone al inicio poner tambien el break y se se pone al final es opcional
//     }
// console.log(numeroTexto);

let mes = 4 ;
let estacion = 'Estación desconocida';
switch(mes){
    case 1: case 2: case 12:
        estacion = 'Invierno';
        break;
    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
        break;
    case 9: case 10: case 11:
        estacion = "Otoño";
        break;
    default:
        estacion = "Valor incorrecto"; 
}

console.log(estacion);
