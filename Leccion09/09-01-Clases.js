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

}

//Si no se define un constructor, JavaScript agrega uno vacío en automático
let persona1  = new Persona("Bob","Dylan"); 

console.log(persona1.nombre); //GET

persona1._nombre="Jhonny";//SET

console.log(persona1);



let persona2 = new Persona("John", 'Lennon');
console.log(persona2);