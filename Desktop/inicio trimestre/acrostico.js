let palabra = "CASIO";
let contenedor = document.getElementById("acrostico");

for (let letra of palabra) {
    contenedor.innerHTML += "<h3>" + letra + "</h3>";
    for (let i = 0; i < 1; i++) {
        contenedor.innerHTML += "<input type='text' placeholder='Palabra con " + letra + "'><br>";
    }
}