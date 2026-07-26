let texto = document.getElementById("texto")
let solucion = document.getElementById("solucion")

texto.addEventListener("input", contar)

function contar() {
    const contenido = texto.value.toLowerCase()
    let palabras = 0
    let vocales = 0
    let consonantes = 0
    let dentropalabra = false
    for (let i =0;i < contenido.length; i++) {
        const c = contenido[i]
        if (c !== " " && ! c !== " \n" && c !== " \t") {
            if(!dentropalabra) {
                palabras++
                dentropalabra = true
            }
} else {
    dentropalabra = false
} 
if ("aeiouáéíóú".includes(c)) {
    vocales++
} else if (c >= "a" && c <= "z") {
    consonantes++
}
    }  
    solucion.innerHTML = `
    <strong>palabras</strong> ${palabras}</p>
    <strong>vocales</strong> ${vocales}</p>
    <strong>consonantes</strong> ${consonantes}</p>
    `
    

}