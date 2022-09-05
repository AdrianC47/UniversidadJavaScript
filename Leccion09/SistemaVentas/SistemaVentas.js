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

class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.productos = [];
        // this.contadorProductosAgregados  = 0; 
    }

    get getIdOrden (){
        return this.idOrden;
    }

    agregarProducto(producto){
        if(this.productos.length < Orden.MAX_PRODUCTOS){
            this.productos.push(producto);
            // this.productos[this.contadorProductosAgregados+1] = producto; otra forma de añadir al arreglo un producto
        } else{
            console.log("No se pueden agregar mas productos");
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for (let producto of this.productos) {
            totalVenta += producto.precio; // totalventa = totalventa + producto.precio;
        }
   
        return totalVenta
    }

    mostrarOrden(){
        let productosOrden = '';
        for (let producto of this.productos) {
            productosOrden += '\n{'+ producto.toString() + '} ';
        }
        console.log(`Orden: ${this.idOrden} Total: $${this.calcularTotal()}, Productos:  ${productosOrden}`)
    }
}

let producto1 = new Producto("Botella", 200);
let producto2 = new Producto("Esfero", 50);
let producto3 = new Producto("Guitarra", 530);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto1);



let orden2 = new Orden();
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto1);
orden1.mostrarOrden();
orden2.mostrarOrden();
// console.log(producto1.toString());
// console.log(producto2.toString());