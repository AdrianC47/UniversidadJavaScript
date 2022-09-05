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
        return `${this.idPersona} ${this.nombre} ${this.apellido} ${this.edad}` ;
    }
}

class Empleado extends Persona{
    
    static contadorEmpleados = 0;
    
    constructor(nombre,apellido,edad,sueldo){
        super(nombre, apellido, edad);
        this.idEmpleado = ++Empleado.contadorEmpleados;
        this.sueldo = sueldo;
    }

    get getIdEmpleado(){
        return this.idEmpleado;
    }

    get getSueldo(){
        return this.sueldo;
    }

    set setSueldo(sueldo){
        this.sueldo  = sueldo;
    }

    toString(){
        return `${super.toString()} ${this.idEmpleado} ${this.sueldo}`;

        }
}

class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this.idCliente = ++Cliente.contadorClientes;
        this.fechaRegistro = fechaRegistro;
    }

    get getIdCliente(){
        return this.idCliente;
    }

    get getfechaRegistro(){
        return this.fechaRegistro;
    }

    set setfechaRegistro(fecha){
        this.fechaRegistro = fecha;
    }

    toString(){
        return `${super.toString()} ${this.idCliente} ${this.fechaRegistro}`;
    }
}

// Prueba clase Persona

let persona1 = new Persona("Juan", "Perez", 25);
console.log(persona1.toString());
let persona2 = new Persona("Adrian","Cabrera", 22);
console.log(persona2.toString());
let empleado1 = new Empleado("Lionel", "Messi", 37, 25000);
console.log(empleado1.toString());
let empleado2 = new Empleado("Diego", "Maradona", 28, 900);
console.log(empleado2.toString());
let cliente1 = new Cliente("Elliot", "Alderson", 25, new Date());
console.log(cliente1.toString());
let cliente2 = new Cliente("Tyrel","Wellick", 22, new Date());
console.log(cliente2.toString());