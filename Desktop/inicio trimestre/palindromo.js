const boton = document.getElementById("btnVerificar");

boton.addEventListener("click", verificar);

function verificar() {
    let palabra = document.getElementById("palabra").value.toLowerCase().trim();

    let invertida = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        invertida += palabra[i];
    }

    if (palabra === "") {
        document.getElementById("resultado").textContent = "Escribe una palabra.";
    } else if (palabra === invertida) {
        document.getElementById("resultado").textContent = " Es un palíndromo.";
    } else {
        document.getElementById("resultado").textContent = " No es palíndromo.";
    }
}