const personas = [
    new Persona("Roberto", "García"),
    new Persona("Luis", "Gonzáles"),
    new Persona("Gabriel", "León"),
]
;
function mostrarPersonas() {
    let texto = ' ';
    for (let persona of personas) {
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
        console.log( ">O " + texto)
    }
     document.getElementById("personas").innerHTML = texto;
}

function agregarPersona() {
    const forma = document.forms['forma'];
    const nombre = forma.nombre;
    const apellido = forma.apellido;
    if (nombre.value != '' && apellido.value != '') {
        personas.push(new Persona(nombre.value,apellido.value));
        mostrarPersonas() //vuelvo a recorrer e imprimir mi arreglo de Personas        
    } else{
        console.log('No hay información que agregar');
    }

}