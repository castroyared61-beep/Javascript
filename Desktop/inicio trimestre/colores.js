let color = document.getElementById("color");
let idTexto = document.getElementById("idTexto");

idTexto.addEventListener('keyup', () =>{
    let idTextoCambio = "texto" + idTexto.value;
let objTextoCambio = document.getElementById(idTextoCambio);
objTextoCambio.style.color = color.value;
})
