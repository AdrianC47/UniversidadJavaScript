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

for (let contador = 0; contador <= 10; contador++){
    if(contador % 2 == 0){ 
        console.log(contador);
        break; //aqui ya solo con el primer numero par pues se rompe el bucle
    }
}
console.log("Fin del ciclo for");