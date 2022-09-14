const mostrarReloj = ()=>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let sg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${sg}`;

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre'];
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];    
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate(); //los .get me retornan un entero y con el mismo busco en mi arreglo el valor
    let mes = meses[fecha.getMonth()];
    //Si queremos el año se usa el getYear
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;
    // El classlist nos regresa una lista con todas las clases que están aplicando a este elemento HTML 
    // y el toggle funciona como un interruptor, cuando se llama asigna el estilo y si llama de nuevo lo desactiva y así sucesivamente
    document.getElementById('contenedor').classList.toggle('animar') 


}

const formatoHora = (hora)=>{ // se dara formato para que si se tiene un solo digito tambien se ponga el 0
    if (hora < 10) {
        hora = '0'+hora
    }
    return hora;
}


//Esta función nos permite ejecutar nuestro código cada cierto tiempo, 
// además se carga cuando se carga la página por ende no es necesario el onload en el html
setInterval(mostrarReloj,1000); 

