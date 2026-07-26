function invertir() {
    let palabra = document.getElementById("entrada").value;
    let invertida = "";

    for (let i = palabra.length - 1; i >= 0; i--) {
        invertida += palabra[i];
    }

    document.getElementById("resultado").innerHTML = "Palabra invertida: " + invertida;
}

 


