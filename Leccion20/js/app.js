const ingresos  =[ 
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta Coche', 1500),
    new Ingreso('Alquiler', 780),
];

const egresos = [
    new Egreso('Renta departamento', 900.00),
    new Egreso('Ropa', 400),
    new Egreso('Laptop', 1500),
]; 




let cargarApp = ()=>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
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

const cargarIngresos = () =>{
    let ingresosHTML = '';
    for (let ingreso  of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

function crearIngresoHTML(ingreso) {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline"></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return ingresoHTML;
}

const cargarEgresos = ()=>{
    let egresosHTML = '';
    for (let egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML=egresosHTML;
}

const crearEgresoHTML = (egreso)=>{
    let egresoHTML = `
    <div class="elemento limpiarEstilos" >
        <div class="elemento_descripcion">${egreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor"> ${formatoMoneda(egreso.valor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline"></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return egresoHTML;
}