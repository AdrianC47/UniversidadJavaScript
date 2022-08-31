//let autos = new Array('BMW', 'Mercedes Benz', 'Chevrolet');  Forma antigua
//Se usa const debido a la referencia en memoria para el arreglo  pudiendo modificar el arreglo
const autos = ['BMW', 'Mercedes Benz', 'Chevrolet'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + " "+ autos[i])
}

autos[1] = 'MercedesBenz';
console.log(autos)
autos.push('Toyota');
console.log(autos);

console.log(autos.length);
autos[autos.length]='Mazda';

console.log(autos);

autos[6]= 'Porshe'; //no recomendable puesto que ocupa memoria
console.log(autos);

//Con esto pregunto si es un Array
console.log(Array.isArray(autos));
//esta es otra forma
console.log(autos instanceof Array);