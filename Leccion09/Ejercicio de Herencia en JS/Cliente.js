class Cliente extends Persona{

    static contadorClientes = 0;
    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this.idCliente = ++contadorClientes;
        this.fechaRegistro = fechaRegistro;
    }

    get getIdCliente(){
        return this.idCliente;
    }

    get getfechaRegistro(){
        return this.fechaRegistro;
    }

    set fechaRegistro(fecha){
        this.fechaRegistro = fecha;
    }

    toString(){
        return `${super.toString()} ${this.idCliente} ${this.fechaRegistro}`;
    }
}