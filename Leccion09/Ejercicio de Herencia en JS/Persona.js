class Persona {
    static contadorPersonas = 0;

    constructor( nombre, apellido, edad){
        this.nombre= nombre;
        this.apellido = apellido;
        this.edad = edad
        this.idPersona = ++Persona.contadorPersonas;
        // this.idPersona = idPersona;
    }

    get getIdPersona(){
        return this.idPersona;
    }
    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getApellido(){
        return this.apellido;
    }

    set setApellido(apellido){
        this.apellido = apellido;
    }

    get getEdad(){
        return this.edad;
    }

    set setEdad(edad){
        this.edad = edad;
    }

    toString(){
        return `
                ${this.idPersona}
                ${this.nombre}
                ${this.apellido}
                ${this.edad}` ;
    }
}






class Cliente extends Persona{

}