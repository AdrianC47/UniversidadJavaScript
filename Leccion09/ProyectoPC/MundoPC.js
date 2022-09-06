class DispositivoEntrada {

    constructor(tipoEntrada, marca){
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }

    get getTipoEntrada(){
        return this.tipoEntrada;
    }

    set setTipoEntrada(tipoEntrada){
        this.tipoEntrada= tipoEntrada;
    }

    get getMarca(){
        return this.marca;
    }

    set setMarca(marca){
        this.marca = marca;
    }
 

}


class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){ 
        super(tipoEntrada, marca);
        this.idRaton = ++Raton.contadorRatones;
    
    }

    get getIdRaton(){
        return this.idRaton;
    }

    toString(){
        return `Raton: [idRaton: ${this.idRaton}, tipoEntrada: ${this.tipoEntrada}, marca: ${this.marca} ] `;
    }
}

let raton1 = new Raton("USB","HP");
console.log(raton1.toString());
let raton2 = new Raton("Bluetooth", "Dell");
raton2.marca = "Apple";
console.log(raton2.toString());


class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor (tipoEntrada, marca){
        super(tipoEntrada,marca);
        this.idTeclado = ++Teclado.contadorTeclados;
    }


    get getIdTeclado(){
        return this.idTeclado;
    }

    toString(){
        return `Teclado: [idTeclado: ${this.idTeclado}, tipoEntrada: ${this.tipoEntrada}, marca: ${this.marca} ] `;
    }

}

let teclado1 = new Teclado("Bluetooth", "MSI");
let teclado2 = new Teclado("USB", "ACER");
console.log(teclado1.toString());
teclado2.marca = "Apple";
console.log(teclado2.toString());

class Monitor {
    static contadorMonitores = 0;
    constructor(marca, tamanio){
        this.marca =marca;
        this.tamanio = tamanio;
        this.idMonitor = ++Monitor.contadorMonitores;
    }

    get getIdMonitor(){
        return this.idMonitor;
    }
    get getMarca(){
        return this.marca;
    }

    get getTamanio(){
        return this.tamanio;
    }
    set setMarca(marca){
        this.marca = marca;
    }

    set setTamanio (tamanio){ 
        this.tamanio = tamanio;
    }

    toString(){
        return `Monitor: [idMonitor: ${this.idMonitor},  marca: ${this.marca}, tamaño: ${this.tamanio} ] `;
    }
}

let monitor1 = new Monitor("LG","1000");
let monitor2 = new Monitor("Dell", 27);
console.log(monitor1.toString());
console.log(monitor2.toString());


class Computadora {
    static contadorComputadores = 0;
    constructor(nombre,monitor, teclado,raton){
        this.idComputadora = ++contadorComputadores;
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
    }

    get getIdComputadora (){
        return this.idComputadora;
    }
    get getNombre(){
        return this.nombre;
    }

    get getMonitor(){
        return this.monitor;
    }

    get getTeclado(){
        return this.teclado;
    }

    get getRaton(){
        return this.raton;
    }
    set setNombre(nombre){
        this.nombre = nombre;
    }
    set setMonitor(monitor){
        this.monitor = monitor;
    }

    set setTeclado(teclado){
        this.teclado = teclado;
    }

    set setRaton(raton){
        this.raton = raton;
    }

    toString(){
        return `${this.idComputadora} ${this.nombre} ${this.monitor} ${this.teclado} ${this.raton}`
    }
}

class Orden {
    static contadorOrdenes = 0;
    constructor(){
        this.idOrden = ++contadorOrdenes;
       
    }
}