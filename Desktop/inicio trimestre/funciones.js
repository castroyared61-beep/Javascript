alert ("funciona")
let titulo = document.getElementsByTagName("h1")
titulo[0].innerHTML = "<i>Yared</i>";
titulo[1].innerHTML = "<i>No yared</i>";
titulo[2].innerHTML = "<b>Yared</b>";
console.log(titulo);

let titulos = document.getElementsByTagName("h1");
let colores = {
    rojo: "red",
    verde: "green",
    azul: "blue",
    morado: "purple",
    naranja: "orange",
    cualquiera: "grey"
}
for (let pos = 0; pos < titulos.length; pos++) {
    let color = titulos[pos].innerText
    titulos[pos].style.color = colores[color]
}

let tamanos = {
    rojo: "20px",
    verde: "25px",
    azul: "30px",
    morado: "35px",
    naranja: "40px",
    cualquiera: "18px"
}

let fuentes = {
    rojo: "Arial",
    verde: "times new roman",
    azul: "calibri",
    morado: "Georgia",
    naranja: "Verdana",
    cualquiera: "Tahoma"
}

for (let pos = 0; pos < titulos.length; pos++) {
    let color = titulos[pos].innerText
    titulos[pos].style.color = colores[color]
    titulos[pos].style.fontSize = tamanos[color]
    titulos[pos].style.fontFamily = fuentes[color]
}