const mostrarReloj = ()=>{
    let fecha = new Date();
    let hr = fecha.getHours();
    let min = fecha.getMinutes();
    let sg = fecha.getSeconds();
    document.getElementById('hora').innerHTML = `${hr}:${min}:${sg}`;

}
//Esta función nos permite ejecutar nuestro código cada cierto tiempo, 
// además se carga cuando se carga la página por ende no es necesario el onload en el html
setInterval(mostrarReloj,1000); 