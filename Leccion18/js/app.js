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
    }
     document.getElementById("personas").innerHTML = texto;
}