class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio){
        this.idProducto = ++Producto.contadorProductos;
        this.nombre = nombre;
        this.precio = precio;
    }

    get getIdProducto(){
        return this.idProducto;
    }

    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }
    get getPrecio(){
        return this.precio;
    }

    set setPrecio(precio){
        this.precio = precio;
    }

    toString(){
        return `idProducto: ${this.idProducto}, nombre:  ${this.nombre}, precio:  $${this.precio}`;
    }
}


let producto1 = new Producto("Botella", 200);
let producto2 = new Producto("Esfero", 50);
console.log(producto1.toString());
console.log(producto2.toString());