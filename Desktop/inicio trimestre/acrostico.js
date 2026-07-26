let palabra = "CASIO";
let contenedor = document.getElementById("acrostico");

for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i];
    contenedor.innerHTML += "<h3>" + letra + "</h3>";
    contenedor.innerHTML += "<input type='text' id='letra" + i + "' placeholder='Palabra con " + letra + "'><br>";
}

function generarFrase() {
    let frase = "";
    for (let i = 0; i < palabra.length; i++) {
        let valor = document.getElementById("letra" + i).value;
        frase += valor + " ";
    }
    document.getElementById("resultado").innerHTML = "Frase generada: " + frase;
}