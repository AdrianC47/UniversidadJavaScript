const ingresos  =[ 
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta Coche', 1500),
];

const egresos = [
    new Egreso('Renta departamento', 900.00),
    new Egreso('Ropa', 400)
]; 




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

let cargarCabecero = ()=>{
    let presupuestoTotal = totalIngresos() - totalEgresos();
    let porcentaje = totalEgresos() / totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuestoTotal);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentaje);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());

};

const formatoMoneda = (valor)=>{
    //toLocaleString regresa una fecha convertida en una cadena usando el idioma local pero se lo puede usar para el formato
                                                                    //minimo de digitos para los ctvs
    return valor.toLocaleString('en-US',{style:'currency', currency: 'USD', minimunFractionDigits:2});
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US',{style:'percent', minimunFractionDigits:2});
}

