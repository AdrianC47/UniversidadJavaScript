/*
************************************************************************
En el caso de las clases pues deben estar primero declaradas antes de 
ser usadas, es decir no usa hoisting que sí se usa en funciones
************************************************************************
*/
// let persona2 = new Persona('Karla', 'Juárez'); No es posible crear objetos antes de declarar la clase

class Persona{
    //Para definir atributos estaticos solo se antepone la palabra static (pertenece a la Clase y no al objeto)
    
    static contadorPersonas = 0;//Atributo de nuestra clase
    
    //que hacemos si queremos hacer una constante estatica? pues hacemos un metodo estatico
    static get MAX_OBJ(){ //que simule una constante 
        return 5;
    }

    constructor(nombre,apellido){
        this._nombre=nombre; //en ese momento con el this.nombre se crea el atributo nombre 
        this._apellido=apellido; //se acostumbra a poner el _ debido a que el metodo GET no puede llevar el mismo nombre que el atributo

        if (Persona.contadorPersonas < Persona.MAX_OBJ){

            this.idPersona = ++Persona.contadorPersonas; 
        } else{
            console.log("Se han superado el maximo de objetos permitidos")
        }

        // Para poner en practica los atributos estaticos lo que se hace es que cuente cada instancia creada de la clase Persona , lo cual se lo hace en el constructor
  
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

    nombreCompleto(){
        return this.idPersona +' '+ this._nombre + ' '+ this.apellido;
    }

    //Sobreescribiendo  el metodo de la clase Padre (Object)
    toString(){
        // Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        // El metodo que  se ejecuta depende si es una referencia de tipo Padre o de tipo Hijo
        return this.nombreCompleto();
    }

    //Se pueden crear metodos que se asocien exclusivamente con una  clase (No con una instancia (objeto)), para ello hacemos uso de static
    static saludar(){
        console.log('Hello Friend');
    }

    static saludar2(persona){
        console.log(persona.nombre+ ' ' + 'saludar 2 ');
    }
}




// Herencia en JavaScript
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido)//Llamo al constructor de la clase Padre
        this._departamento = departamento;
    }

    get departamento (){ //Get y Set de atributo propio de la clase Hija
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura en JavaScript 
    nombreCompleto(){ //<= debe ser el mismo nombre
        return super.nombreCompleto() + '  en el dpto de ' + this._departamento; //con el super llamo al metodo y sobreescribo el mismo
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

// console.log(persona1);
// console.log(persona1.toString());

let empleado1 = new Empleado("Priscila","Aguilar","Grupo de Investigacion");
// console.log(empleado1);
// console.log(empleado1.nombre);
// console.log(empleado1.nombreCompleto());
// console.log(empleado1.toString());


//console.log(persona1.saludar()); No es posible llamar un metodo static desde un objeto
// Persona.saludar();
// Empleado.saludar();
 
// Persona.saludar2(empleado1);
// Empleado.saludar2(persona1);

// console.log(Persona.contadorObjetosPersona);  //accediendo al atributo de la Clase
// console.log(persona1.contadorObjetosPersona); 
// console.log(Empleado.contadorObjetosPersona); 

// Ejemplo de uso de la palabra Static en JavaScript
console.log(persona1.toString());
console.log(persona2.toString());
console.log(persona3.toString());

console.log(empleado1.toString());

console.log(Persona.contadorPersonas);
let persona4 = new Persona('Stalin', 'Rojas');
console.log(persona4.toString()); 
console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ); 
let persona5 = new Persona('pepe', 'jara');
console.log(persona5.toString()); 