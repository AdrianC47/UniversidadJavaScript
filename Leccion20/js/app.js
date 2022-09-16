const ingresos  =[ 
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta Coche', 1500),
    new Ingreso('Alquiler', 780),
];

const egresos = [
    new Egreso('Renta departamento', 900.00),
    new Egreso('Ropa', 400),
    new Egreso('Laptop', 1500)
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
    return valor.toLocaleString('es-EC',{style:'currency', currency: 'USD', minimunFractionDigits:2});
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-EC',{style:'percent', minimunFractionDigits:2});
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
                    <ion-icon name="close-circle-outline"
                    onclick='eliminarIngreso(${ingreso.id})'>
                    </ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return ingresoHTML;
}

const eliminarIngreso = (id)=>{
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id ===id); //funcion similar a un for que busca un objeto con el mismo id mandado
    //for (let ingreso of ingresos )
    ingresos.splice(indiceEliminar, 1); //elimino ingreso con el indice recuperado
    cargarApp();
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
                    <ion-icon name="close-circle-outline"
                    onclick='eliminarEgreso(${egreso.id})'>
                    </ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
 
    return egresoHTML;
}

const eliminarEgreso = (id)=>{
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar,1);
    cargarApp();
}


let agregarDato = ()=>{
    let form = document.getElementById('form');
    let tipo = form['tipo'];
    let descripcion = form['descripcion'];
    let valor = form['valor'];
    if (descripcion.value != '' && valor.value !='') {
        if (tipo.value === 'Ingreso') {
            ingresos.push(new Ingreso(descripcion.value, +(valor.value)));//el + convierte la cadena a numero
            cargarApp();
        } else if  (tipo.value ==='Egreso'){
            console.log("egresos")
            egresos.push(new Egreso(descripcion.value, +(valor.value))); //otra forma de convertir a Numero
             cargarCabecero();
             cargarEgresos();
        }
    }
}

 