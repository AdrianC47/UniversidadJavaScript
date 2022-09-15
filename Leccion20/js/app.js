const ingresos  =[ 
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta Coche', 1500),
];

const egresos = [
    new Egreso('Renta departamento', 900.00),
    new Egreso('Ropa', 400)
]; 



let cargarCabecero = ()=>{
    let presupuestoTotal = totalIngresos() - totalEgresos();
    let porcentaje = totalEgresos() / totalIngresos();
    document.getElementById('presupuesto').innerHTML = presupuestoTotal;
    document.getElementById('porcentaje').innerHTML = porcentaje;
    document.getElementById('ingresos').innerHTML = totalIngresos();
    document.getElementById('egresos').innerHTML = totalEgresos();
};
let cargarApp = ()=>{
    cargarCabecero();
};

let totalIngresos = ()=>{
    let totalIngreso = 0;
    for (let ingreso of ingresos) { 
        totalIngreso +=ingreso.valor;
    }
    return totalIngreso;
};

let totalEgresos = ()=>{
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

