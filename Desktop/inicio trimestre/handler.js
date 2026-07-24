let resultado = document.getElementById("resultado")
caja.addEventListener("keyup", (e)=>{
    //resultado.innerHTML = e.target.value
    let palabra = e.target.value
    let contarVocales = 0
    for (let i = 0; i < palabra.length; i++) {
        switch (palabra[i]) {
            case "a":
                contarVocales++
                break;
            case "e":
                contarVocales++
                break;
            case "i":
                contarVocales++
                break;
            case "o":
                contarVocales++
                break;
            case "u":
                contarVocales++
                break;
            default:
                break;
        }
    }
    resultado.innerHTML = contarVocales
})