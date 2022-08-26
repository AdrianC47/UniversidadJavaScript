// let a = 3, b = 2;
// let z = a + b;
// console.log("Resultado de la Suma "+z);

// z = a - b ;
// console.log("Resultado de la Resta "+ z);

// z = a * b;
// console.log("Resultado de la Multiplicación " +z);

// z = a / b;
// console.log("Resultado de la División " + z);

// z = a % b;
// console.log("Resultado de el residuo de la division " + z);

// z = a **b;
// console.log("Resultado del operador exponente " +z)

// // Incremento
// // Pre-Incremento (el operador ++ antes de la variable)
// z = ++a //primero se incrementa y luego se asigna
// console.log(z)
// console.log(a)

// // Post-incremento (el operador ++ despues de la variable)
// z = b++ //primero se asigna 
// console.log(z)
// console.log(b)

// // Decremento
// // Pre-Decremento 
// z = --a;
// console.log(a);
// console.log(z);

// // Post-Decremento
// z = b--;
// console.log(b);
// console.log(z);

// let a = 3, b =2, c =1, d = 4;

// let z = a * b + c / d; //las expresiones se evaluan de izquierda a derecha
// console.log(z)

// z = c + a  * b / d; // sin embargo toma prioridad el producto
// console.log(z)

// // se puede modifcar el orden de las operaciones usando parentesis
//  z= (c +a) *b /c;
//  console.log(z)

//Operadores de Asignación
// let a = 1;

// a += 3; //a = a + 3
// console.log(a)
// a -= 2; //a = a -2
// console.log(a)
// a *= 2; //a = a *2
// console.log(a)
// a /= 2; //a = a /2
// console.log(a)
// a %= 2; //a = a %2
// console.log(a)

//Operadores de Comparacion
// let a = 3, b=2, c="3";
// let z = a == b; //pregunta si es igual el valor  sin importar el tipo
// console.log(z)

// z = a === c  //pregunta si es igual el valor y el tipo
// console.log(z)

//Operador Distinto de
// let a = 3, b=2, c="3";
// let z = a != c; //pregunta si es igual el valor  sin importar el tipo
// console.log(z);

// z = a !== c  //pregunta si es igual el valor y el tipo
// console.log(z)

//Operador Distinto de
// let a = 3, b=3, c= "3";

// let z = a < b;
// console.log(z);

// z = a <= b;
// console.log(z);

// z =  a > b;
// console.log(z);

// z = a >=b;
// console.log(z);

// let a = 8
// if(a % 2 == 0){
//     console.log('Es numero par');
// }else{
//     console.log("Es un numero impar");
// }

// let edad = 20, adulto = 18;
// if(edad >= adulto){
//     console.log("Es mayor de edad")
// }else{
//     console.log("Es menor de edad")
// }

//Operador AND && true si ambos operandos son true
//  let a = 25;
//  let valMin = 0;
//  let valMax = 10;
//  if(a >= valMin && a <=valMax){
//     console.log("Comprendido dentro del rango")
//  } else{
//     console.log("Fuera del rango")
//  }

// Operador OR || true si cualquier operando es true
// let vacaciones = false, diaDescanso = true;
// if(vacaciones || diaDescanso){
//     console.log("El Padre puede asistir al dia del juego")
// } else{
//     console.log("El padre no puede asistir al dia del juego")
// }

// Operador Ternario en JavaScript
// let resultado = (1>2)? "Verdadero": "Falso";
// console.log(resultado)
// let numero= 12;
// resultado = (numero % 2 == 0) ? "Numero Par": "Numero Impar";
// console.log(resultado)

let miNumero = "10";
console.log(typeof(miNumero));

// miNumero=Number(miNumero);
let edad =Number(miNumero);
console.log(typeof(edad))

if (edad >= 18){
    console.log("Puede votar");
}else {
    console.log("Menor de edad!! no puede votar")
}

let pregunta = (edad >=18)? "Puede votar": "Menor de Edad !! No puede votar";
console.log(pregunta);