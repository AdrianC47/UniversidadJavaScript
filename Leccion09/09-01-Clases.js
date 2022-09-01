class Persona{
    constructor(nombre,apellido){
        this.nombre=nombre; //en ese momento con el this.nombre se crea el atributo nombre 
        this.apellido=apellido;
    }
}

//Si no se define un constructor, JavaScript agrega uno vacío en automático
let persona1  = new Persona("Bob","Dylan"); 
console.log(persona1);
let persona2 = new Persona("John", 'Lennon');
console.log(persona2);