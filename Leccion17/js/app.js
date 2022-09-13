function sumar() {
    let a = document.getElementById('operandoA');
    let b = document.getElementById('operandoB');
    let resultado =  (parseInt(a.value) +parseInt(b.value));    
    if (isNaN (resultado))
        resultado ='La operacion no incluye numeros'
    document.getElementById("resultado").innerHTML=`Resultado: ${resultado}`;

    console.log(`Resultado: ${resultado}`)
}

