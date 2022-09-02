
/*
************************************************************************
En el caso de las clases pues deben estar primero declaradas antes de 
ser usadas, es decir no usa hoisting que sí se usa en funciones
************************************************************************
*/
// let persona2 = new Persona('Karla', 'Juárez'); No es posible crear objetos antes de declarar la clase

class Persona{
    constructor(nombre,apellido){
        this._nombre=nombre; //en ese momento con el this.nombre se crea el atributo nombre 
        this._apellido=apellido; //se acostumbra a poner el _ debido a que el metodo GET no puede llevar el mismo nombre que el atributo
    }
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

}

//Si no se define un constructor, JavaScript agrega uno vacío en automático
let persona1  = new Persona("Bob","Dylan"); 

console.log(persona1.nombre); //GET

persona1._nombre="Jhonny";//SET

console.log(persona1);



let persona2 = new Persona("John", 'Lennon');
console.log(persona2);

let persona3 = new Persona('Karla', 'Juárez'); 
console.log(persona3);


// Herencia en JavaScript
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido)//Llamo al constructor de la clase Padre
        this._departamento = departamento;
    }

    get departamento (){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}

console.log(persona1);

let empleado1 = new Empleado("Priscila","Aguilar","Grupo de Investigacion");
console.log(empleado1);
console.log(empleado1.nombre);