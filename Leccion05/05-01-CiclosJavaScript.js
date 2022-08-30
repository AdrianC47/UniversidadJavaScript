// let contador = 0;
// while(contador <3){
//     console.log(contador);
//     contador++;
// }
// console.log("Fin ciclo While");
// let contador = 0;
// do{
//     console.log(contador);
//     contador++;
// } while(contador <3);
// console.log("Fin Ciclo Do While")

// let contador = 0;
// for (let contador = 0; contador<3; contador++){
//     console.log(contador);
// }
// console.log("Fin de Ciclo For")

// for (let contador = 0; contador <= 10; contador++){
//     if(contador % 2 == 0){ 
//         console.log(contador);
//         break; //aqui ya solo con el primer numero par pues se rompe el bucle
//     }
// }
// console.log("Fin del ciclo for");

// for (let contador = 0; contador <= 10; contador++){
//     if(contador % 2 !== 0){//aqui preguntamos si el numero es impar y en el caso de serlo pues con el continue continuamos  
//         continue; //con la siguiente iteración
//     } 
//         console.log(contador);
    
// }
// console.log("Fin del ciclo for");

//Etiquetas : el uso de etiquetas nos permite ir a una parte  de nuestro programa que deseemos
inicio:
for (let contador = 0; contador <= 10; contador++){
    if(contador % 2 !== 0){//aqui preguntamos si el numero es impar y en el caso de serlo pues con el continue continuamos  
        continue inicio; //con la siguiente iteración
    } 
        console.log(contador);
    
}
console.log("Fin del ciclo for");

